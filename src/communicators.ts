import type { Communicator } from './communicator.js';

export const COMMUNICATORS: Communicator[] = [
	{
		name: 'Bramus van Damme',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.bram.us/',
				feedUrl: 'https://www.bram.us/feed/',
			},
			{
				type: 'MASTODON',
				username: 'bramus',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'bramus',
			},
		],
	},
	{
		name: 'Carie Fisher',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://cariefisher.com/',
				feedUrl: 'https://cariefisher.com/rss.xml',
			},
			{
				type: 'MASTODON',
				username: 'cariefisher',
				serverDomain: 'mstdn.social',
			},
			{
				type: 'TWITTER',
				username: 'cariefisher',
			},
		],
	},
	{
		name: 'Christine Vallaure',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://christinevallaure.medium.com/',
				feedUrl: 'https://medium.com/feed/@christinevallaure',
			},
			{
				type: 'TWITTER',
				username: 'moonlearning',
			},
		],
	},
	{
		name: 'Dan Donald',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'hereinthehive',
			},
		],
	},
	{
		name: 'Elliot Jay Stocks',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://elliotjaystocks.com/blog/',
				feedUrl: 'https://feeds.feedburner.com/elliotjaystocks/',
			},
			{
				type: 'MASTODON',
				username: 'elliotjaystocks',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'elliotjaystocks',
			},
		],
	},
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
				username: 'hdv',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'hdv',
			},
		],
	},
	{
		name: 'Lee Robinson',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://leerob.io/blog',
			},
			{
				type: 'TWITTER',
				username: 'leeerob',
			},
		],
	},
	{
		name: 'Jake Archibald',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://jakearchibald.com/',
				feedUrl: 'https://jakearchibald.com/posts.rss',
			},
			{
				type: 'MASTODON',
				username: 'jaffathecake',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'jaffathecake',
			},
		],
	},
	{
		name: 'Jecelyn Yeen',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://jec.fyi/blog/',
				feedUrl: 'https://jec.fyi/index.xml',
			},
			{
				type: 'TWITTER',
				username: 'jecfish',
			},
		],
	},
	{
		name: 'Josh W Comeau',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.joshwcomeau.com/tutorials/',
				feedUrl: 'https://www.joshwcomeau.com/rss.xml',
			},
			{
				type: 'TWITTER',
				username: 'joshwcomeau',
			},
		],
	},
	{
		name: 'Miriam Suzanne',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://miriam.codes/tags/post/',
				feedUrl: 'https://www.miriamsuzanne.com/feed.atom',
			},
			{
				type: 'MASTODON',
				username: 'mia',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'TerribleMia',
			},
		],
	},
	{
		name: 'Tim Kadlec',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://timkadlec.com/remembers/',
				feedUrl: 'https://timkadlec.com/remembers/atom.xml',
			},
			{
				type: 'TWITTER',
				username: 'tkadlec',
			},
		],
	},
	{
		name: 'Shaundai Person',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://dev.to/shaundai',
				feedUrl: 'https://dev.to/feed/shaundai',
			},
		],
	},
	{
		name: 'Slava Shestopalov',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://shestopalov.medium.com/',
				feedUrl: 'https://medium.com/feed/@shestopalov',
			},
			{
				type: 'TWITTER',
				username: 'shestopalov_v',
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
				username: 'timsev',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'timseverien',
			},
		],
	},
	{
		name: 'Una Kravets',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://una.im/archive/',
				feedUrl: 'https://una.im/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'Una',
				serverDomain: 'front-end.social',
			},
		],
	},
];
