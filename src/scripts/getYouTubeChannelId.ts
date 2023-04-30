import { input } from '@inquirer/prompts';
import axios from 'axios';

(async () => {
	const channelName = await input({
		message: 'What is the YouTube channel name?',
	});

	const testUrls = [
		`https://www.youtube.com/@${channelName}`,
		`https://www.youtube.com/channel/${channelName}`,
		`https://www.youtube.com/user/${channelName}`,
	];

	const regex = /"https:\/\/www.youtube.com\/channel\/(?<channelId>[^"]+)"/;

	for (const url of testUrls) {
		try {
			const response = await axios.get<string>(url);
			const channelId =
				regex.exec(response.data)?.groups?.['channelId'] ?? null;

			if (channelId) {
				console.log(channelId);
				console.log(`  https://www.youtube.com/channel/${channelId}`);
				process.exit();
			}
		} catch {
			console.log(`Unable to fetch URL "${url}"`);
		}
	}
})();
