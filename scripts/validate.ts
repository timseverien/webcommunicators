import axios from 'axios';
import {
	COMMUNICATORS,
	getChannelFeedUrl,
	getChannelUrl,
} from '../dist/index.js';

const OPTIONS = process.argv.slice(2);
const OPTION_VERBOSE = OPTIONS.includes('-v') || OPTIONS.includes('--verbose');

(async () => {
	let isSuccessful = true;

	for (const communicator of COMMUNICATORS) {
		const urlsToTest = communicator.channels
			.map((channel) => {
				const urls = [getChannelUrl(channel)];

				const feedUrl = getChannelFeedUrl(channel);
				if (feedUrl) urls.push(feedUrl);

				return urls;
			})
			.flat()
			// For some reason, we can’t fetch LinkedIn URLs
			.filter((url) => !url.startsWith('https://www.linkedin.com'));

		console.log(`Validating URLs for ${communicator.name}`);

		const urlResults = await Promise.all(
			urlsToTest.map(async (url) => {
				try {
					const response = await axios.get(url);
					return { url, status: response.status };
				} catch (error) {
					console.error(`Unable to fetch URL "${url}"`);

					if (OPTION_VERBOSE) {
						console.error(error);
					}

					if (axios.isAxiosError(error)) {
						return { url, status: error.response?.status ?? null };
					} else {
						return { url, status: null };
					}
				}
			}),
		);

		const successfulTests = urlResults.filter((r) => r.status === 200);
		const isAllSuccessful = urlResults.length === successfulTests.length;
		const resultIcon = isAllSuccessful ? `✅` : `❌`;

		console.log(`${resultIcon} ${successfulTests.length}/${urlResults.length}`);
		isSuccessful = isSuccessful && isAllSuccessful;
	}

	if (!isSuccessful) process.exit(1);
})();
