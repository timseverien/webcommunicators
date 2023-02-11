import type { Communicator } from './communicator.js';

export const COMMUNICATORS: Communicator[] = [
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
