import type { Communicator } from './communicator.js';

export const COMMUNICATORS: Communicator[] = [
	{
		name: 'Hidde de Vries',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://hidde.blog/blog/',
				feedUrl: 'https://hidde.blog/feed',
			},
			{
				type: 'MASTODON',
				serverDomain: 'front-end.social',
				username: 'hdv',
			},
			{
				type: 'TWITTER',
				username: 'hdv',
			},
		],
	},
	{
		name: 'Tim Severien',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://ijsjes.dev/',
				feedUrl: 'https://ijsjes.dev/rss.xml',
			},
			{
				type: 'BLOG',
				url: 'https://timseverien.com/',
				feedUrl: 'https://timseverien.com/feed.xml',
			},
			{
				type: 'MASTODON',
				serverDomain: 'mastodon.social',
				username: 'timsev',
			},
			{
				type: 'TWITTER',
				username: 'timseverien',
			},
		],
	},
];
