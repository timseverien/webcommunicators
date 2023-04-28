import type { Channel, ChannelBlog } from './channel';
import type { Communicator } from './communicator';
import {
	getAllCommunicatorChannels,
	getCommunicatorChannelsOfType,
	isOverlapInChannels,
	isValidHostname,
	isValidUrl,
} from './util';

describe('getAllCommunicatorChannels', () => {
	test('given empty communicator list, returns empty list', () => {
		const communicators: Communicator[] = [];

		const result = getAllCommunicatorChannels(communicators);

		expect(result).toEqual([]);
	});

	test('given communicator list, returns their channels', () => {
		const communicators: Communicator[] = [
			{
				name: '',
				channels: [
					{
						type: 'BLOG',
						url: 'https://example.com/blog',
					},
				],
				languages: [],
			},
			{
				name: '',
				channels: [
					{
						type: 'MASTODON',
						username: 'example',
						serverDomain: 'example.com',
					},
				],
				languages: [],
			},
		];

		const result = getAllCommunicatorChannels(communicators);

		expect(result).toEqual<Channel[]>([
			{ type: 'BLOG', url: 'https://example.com/blog' },
			{ type: 'MASTODON', username: 'example', serverDomain: 'example.com' },
		]);
	});
});

describe('getCommunicatorChannelsOfType', () => {
	test('given empty communicator list, returns empty list', () => {
		const communicators: Communicator[] = [];

		const result = getCommunicatorChannelsOfType<ChannelBlog>(
			communicators,
			'BLOG',
		);

		expect(result).toEqual([]);
	});

	test('given communicator list, returns their channels', () => {
		const communicators: Communicator[] = [
			{
				name: '',
				channels: [
					{
						type: 'BLOG',
						url: 'https://example.com/blog',
					},
				],
				languages: [],
			},
			{
				name: '',
				channels: [
					{
						type: 'MASTODON',
						username: 'example',
						serverDomain: 'example.com',
					},
				],
				languages: [],
			},
		];

		const result = getCommunicatorChannelsOfType<ChannelBlog>(
			communicators,
			'BLOG',
		);

		expect(result).toEqual<Channel[]>([
			{ type: 'BLOG', url: 'https://example.com/blog' },
		]);
	});
});

describe('isOverlapInChannels', () => {
	test.each<[Channel, Channel, boolean]>([
		[
			{ type: 'BLOG', url: 'https://example.com/' },
			{ type: 'BLOG', url: 'https://example.com/' },
			true,
		],
		[
			{ type: 'BLOG', url: 'https://example.com/' },
			{ type: 'BLOG', url: 'https://example.com/', feedUrl: 'example' },
			true,
		],
		[
			{ type: 'TWITTER', username: 'example' },
			{ type: 'LINKEDIN', username: 'example' },
			false,
		],
	])('given %p and %p, returns %p', (channel1, channel2, expectedResult) => {
		const result = isOverlapInChannels(channel1, channel2);
		expect(result).toBe(expectedResult);
	});
});

describe('isValidHostname', () => {
	test.each([
		// Counterintuitive, but blame the URL API
		['https://example.com', false],
		['https://example.com/', false],
		['https://example.com/foo', false],
		['https://example.com/foo?bar=baz', false],
		['example.com/foo', false],
		['example.com', true],
		['example.com!@#', false],
		['example', false],
		['', false],
	])('given %p, returns %p', (url, expectedResult) => {
		const result = isValidHostname(url);
		expect(result).toBe(expectedResult);
	});
});

describe('isValidUrl', () => {
	test.each([
		// Counterintuitive, but blame the URL API
		['https://example.com', false],
		['https://example.com/', true],
		['https://example.com/foo', true],
		['https://example.com/foo?bar=baz', true],
		['example.com/foo', false],
		['example.com', false],
		['example', false],
		['', false],
	])('given %s, returns %p', (url, expectedResult) => {
		const result = isValidUrl(url);
		expect(result).toBe(expectedResult);
	});
});
