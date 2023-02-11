import type {
	ChannelBlog,
	ChannelMastodon,
	ChannelNewsletter,
	ChannelTwitch,
	ChannelTwitter,
	ChannelYouTube,
} from './channel.js';
import { COMMUNICATORS } from './communicators';
import {
	getCommunicatorChannelsOfType,
	isValidHostname,
	isValidUrl,
} from './util';

describe('COMMUNICATORS', () => {
	test('communicator names isn’t empty', () => {
		expect(COMMUNICATORS.every((c) => c.name.length > 0)).toBe(true);
	});

	test('communicators have at least one channel', () => {
		expect(COMMUNICATORS.every((c) => c.channels.length > 0)).toBe(true);
	});

	test('communicators have at least one language', () => {
		expect(COMMUNICATORS.every((c) => c.languages.length > 0)).toBe(true);
	});

	test('blogs have valid URLs', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelBlog>(
			COMMUNICATORS,
			'BLOG',
		);
		expect(blogs.every((c) => isValidUrl(c.url))).toBe(true);
	});

	test('blogs have valid feed URLs', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelBlog>(
			COMMUNICATORS,
			'BLOG',
		).filter((b) => typeof b.feedUrl === 'string');

		expect(blogs.every((c) => isValidUrl(c.feedUrl!))).toBe(true);
	});

	test('Mastodon have valid server hostnames', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelMastodon>(
			COMMUNICATORS,
			'MASTODON',
		);
		expect(blogs.every((c) => isValidHostname(c.serverDomain))).toBe(true);
	});

	test('Mastodon users are non-empty', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelMastodon>(
			COMMUNICATORS,
			'MASTODON',
		);
		expect(blogs.every((c) => c.username.length > 0)).toBe(true);
	});

	test('Newsletter subscribe URLs are valid', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelNewsletter>(
			COMMUNICATORS,
			'NEWSLETTER',
		);
		expect(blogs.every((c) => isValidUrl(c.subscribeUrl))).toBe(true);
	});

	test('Twitch usernames are non-empty', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelTwitch>(
			COMMUNICATORS,
			'TWITCH',
		);
		expect(blogs.every((c) => c.username.length > 0)).toBe(true);
	});

	test('Twitter usernames are non-empty', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelTwitter>(
			COMMUNICATORS,
			'TWITTER',
		);
		expect(blogs.every((c) => c.username.length > 0)).toBe(true);
	});

	test('YouTube channel names are non-empty', () => {
		const blogs = getCommunicatorChannelsOfType<ChannelYouTube>(
			COMMUNICATORS,
			'YOUTUBE',
		);
		expect(blogs.every((c) => c.channelName.length > 0)).toBe(true);
	});
});
