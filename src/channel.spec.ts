import {
	Channel,
	ChannelBlog,
	ChannelLinkedIn,
	ChannelMastodon,
	ChannelNewsletter,
	ChannelTwitch,
	ChannelTwitter,
	ChannelYouTube,
	getChannelFeedUrl,
	getChannelUrl,
} from './channel';

describe('getChannelUrl', () => {
	test.each<[ChannelBlog, string]>([
		[{ type: 'BLOG', url: 'https://example.com/' }, 'https://example.com/'],
		[
			{
				type: 'BLOG',
				url: 'https://example.com/',
				feedUrl: 'https://example.com/feed.xml',
			},
			'https://example.com/',
		],
	])('given ChannelBlog %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelLinkedIn, string]>([
		[
			{ type: 'LINKEDIN', username: 'example' },
			'https://www.linkedin.com/in/example',
		],
	])('given ChannelLinkedIn %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelMastodon, string]>([
		[
			{ type: 'MASTODON', username: 'example', serverDomain: 'example.com' },
			'https://example.com/@example',
		],
		[
			{
				type: 'MASTODON',
				username: 'example',
				serverDomain: 'sub.example.com',
			},
			'https://sub.example.com/@example',
		],
	])('given ChannelMastodon %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelNewsletter, string]>([
		[
			{ type: 'NEWSLETTER', subscribeUrl: 'https://example.com/subscribe' },
			'https://example.com/subscribe',
		],
	])('given ChannelNewsletter %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelTwitch, string]>([
		[{ type: 'TWITCH', username: 'example' }, 'https://www.twitch.tv/example'],
	])('given ChannelTwitch %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelTwitter, string]>([
		[{ type: 'TWITTER', username: 'example' }, 'https://twitter.com/example'],
	])('given ChannelTwitter %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});

	test.each<[ChannelYouTube, string]>([
		[
			{ type: 'YOUTUBE', channelId: 'example' },
			'https://www.youtube.com/channel/example',
		],
	])('given ChannelYouTube %p, returns %p', (channel, expectedResult) => {
		const result = getChannelUrl(channel);

		expect(result).toBe(expectedResult);
	});
});

describe('getChannelFeedUrl', () => {
	test.each<[Channel, string | null]>([
		[
			{
				type: 'BLOG',
				url: 'https://example.com/',
			},
			null,
		],
		[
			{
				type: 'BLOG',
				url: 'https://example.com/',
				feedUrl: 'https://example.com/feed.xml',
			},
			'https://example.com/feed.xml',
		],
		[
			{
				type: 'LINKEDIN',
				username: 'example',
			},
			null,
		],
		[
			{
				type: 'MASTODON',
				serverDomain: 'mastodon.social',
				username: 'example',
			},
			'https://mastodon.social/@example.rss',
		],
		[
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://example.com/subscribe/',
			},
			null,
		],
		[
			{
				type: 'TWITCH',
				username: 'example',
			},
			null,
		],
		[
			{
				type: 'TWITTER',
				username: 'example',
			},
			null,
		],
		[
			{
				type: 'YOUTUBE',
				channelId: 'abc',
			},
			'https://www.youtube.com/feeds/videos.xml?channel_id=abc',
		],
	])('given Channel %p, returns %p', (channel, expectedResult) => {
		const result = getChannelFeedUrl(channel);
		expect(result).toBe(expectedResult);
	});
});
