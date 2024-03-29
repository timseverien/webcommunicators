import type {
	ChannelBlog,
	ChannelMastodon,
	ChannelTwitch,
	ChannelTwitter,
	ChannelYouTube,
} from './channel';
import { COMMUNICATORS } from './communicators';
import {
	getCommunicatorChannelsOfType,
	isOverlapInChannels,
	isValidHostname,
	isValidUrl,
} from './util';

describe('COMMUNICATORS', () => {
	test.each(COMMUNICATORS.map((c) => [c]))(
		'communicator %p doesn’t have an empty name',
		(communicator) => {
			expect(communicator.name.length).toBeGreaterThan(0);
		},
	);

	test.each(COMMUNICATORS.map((c) => [c]))(
		'communicator %p has at least one channel',
		(communicator) => {
			expect(communicator.channels.length).toBeGreaterThan(0);
		},
	);

	test.each(COMMUNICATORS.map((c) => [c]))(
		'communicator %p has at least one language',
		(communicator) => {
			expect(communicator.languages.length).toBeGreaterThan(0);
		},
	);

	test.each(
		getCommunicatorChannelsOfType<ChannelBlog>(COMMUNICATORS, 'BLOG').map(
			(c) => [c.url],
		),
	)('blog URL %p is a valid URL (with a path)', (blogUrl) => {
		expect(isValidUrl(blogUrl)).toBe(true);
	});

	test.each(
		getCommunicatorChannelsOfType<ChannelBlog>(COMMUNICATORS, 'BLOG')
			.filter((c) => c.feedUrl)
			.map((c) => [c.feedUrl]),
	)('blog feed %p is a valid URL', (blogFeedUrl) => {
		expect(isValidUrl(blogFeedUrl!)).toBe(true);
	});

	test.each(
		getCommunicatorChannelsOfType<ChannelMastodon>(
			COMMUNICATORS,
			'MASTODON',
		).map((c) => [c.serverDomain]),
	)('Mastodon hostname %p is a valid hostname', (mastodonHostname) => {
		expect(isValidHostname(mastodonHostname)).toBe(true);
	});

	test.each(
		getCommunicatorChannelsOfType<ChannelMastodon>(
			COMMUNICATORS,
			'MASTODON',
		).map((c) => [c.username]),
	)('Mastodon username %p is non-empty', (mastodonUsername) => {
		expect(mastodonUsername.length).toBeGreaterThan(0);
	});

	// test.each(
	// 	getCommunicatorChannelsOfType<ChannelNewsletter>(
	// 		COMMUNICATORS,
	// 		'NEWSLETTER',
	// 	).map((c) => [c.subscribeUrl]),
	// )('Newsletter subscribe URL %p is valid', (newsletterSubscribeUrl) => {
	// 	expect(isValidUrl(newsletterSubscribeUrl)).toBe(true);
	// });

	test.each(
		getCommunicatorChannelsOfType<ChannelTwitch>(COMMUNICATORS, 'TWITCH').map(
			(c) => [c.username],
		),
	)('Twitch username %p is non-empty', (twitchUsername) => {
		expect(twitchUsername.length).toBeGreaterThan(0);
	});

	test.each(
		getCommunicatorChannelsOfType<ChannelTwitter>(COMMUNICATORS, 'TWITTER').map(
			(c) => [c.username],
		),
	)('Twitter username %p is non-empty', (twitterUsername) => {
		expect(twitterUsername.length).toBeGreaterThan(0);
	});

	test.each(
		getCommunicatorChannelsOfType<ChannelYouTube>(COMMUNICATORS, 'YOUTUBE').map(
			(c) => [c.channelId],
		),
	)('YouTube channel id or name %p is non-empty', (youtubeChannelId) => {
		expect(youtubeChannelId.length).toBeGreaterThan(0);
	});

	test('communicators are in alphabetic order', () => {
		const communicatorNames = COMMUNICATORS.map((c) => c.name);
		const expected = Array.from(communicatorNames).sort((a, b) =>
			a.localeCompare(b),
		);

		expect(communicatorNames).toEqual(expected);
	});

	test.each([COMMUNICATORS.map((c) => c.channels)])(
		'channels are in alphabetic order',
		(channels) => {
			const expected = Array.from(channels).sort((a, b) => {
				if (a.type === 'BLOG' && b.type === 'BLOG')
					return a.url.localeCompare(b.url);
				if (a.type === 'MASTODON' && b.type === 'MASTODON')
					return a.username.localeCompare(b.username);
				if (a.type === 'NEWSLETTER' && b.type === 'NEWSLETTER')
					return a.subscribeUrl.localeCompare(b.subscribeUrl);
				if (a.type === 'TWITCH' && b.type === 'TWITCH')
					return a.username.localeCompare(b.username);
				if (a.type === 'TWITTER' && b.type === 'TWITTER')
					return a.username.localeCompare(b.username);
				if (a.type === 'YOUTUBE' && b.type === 'YOUTUBE')
					return a.channelId.localeCompare(b.channelId);

				return a.type.localeCompare(b.type);
			});

			expect(channels).toEqual(expected);
		},
	);

	test.each([COMMUNICATORS.map((c) => c.channels).flat()])(
		'channel %p is unique',
		(channel) => {
			const result = COMMUNICATORS.map((c) => c.channels)
				.flat()
				.filter((c) => isOverlapInChannels(c, channel));

			expect(result.length).toEqual(1);
		},
	);
});
