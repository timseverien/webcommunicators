import axios from 'axios';

const [channelName] = process.argv.slice(2);

console.log(process.argv);

if (!channelName) {
	console.log('No name specified');
	process.exit(0);
}

const testUrls = [
	`https://www.youtube.com/@${channelName}`,
	`https://www.youtube.com/channel/${channelName}`,
	`https://www.youtube.com/user/${channelName}`,
];

(async () => {
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
