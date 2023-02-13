import type { Communicator } from './communicator.js';

export const COMMUNICATORS: Communicator[] = [
	{
		name: 'Addy Osmani',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://web.dev/authors/addyosmani/',
				feedUrl: 'https://web.dev/authors/addyosmani/feed.xml',
			},
			{
				type: 'TWITTER',
				username: 'addyosmani',
			},
		],
	},
	{
		name: 'Brad Frost',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://bradfrost.com/blog/',
				feedUrl: 'https://feeds.feedburner.com/brad-frosts-blog',
			},
			{
				type: 'MASTODON',
				username: 'brad_frost',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'brad_frost',
			},
		],
	},
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
		name: 'Cassie Evans',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.cassie.codes/writing/',
				feedUrl: 'https://www.cassie.codes/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'cassiecodes',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'cassiecodes',
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
		name: 'Dan Rubin',
		languages: ['en'],
		channels: [
			{
				type: 'MASTODON',
				username: 'danrubin',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'danrubin',
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
		name: 'Harry Roberts',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://csswizardry.com/archive/',
				feedUrl: 'https://feeds.feedburner.com/csswizardry',
			},
			{
				type: 'TWITTER',
				username: 'csswizardry',
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
		name: 'Jhey Tompkins',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://jhey.dev/',
				feedUrl: 'https://jhey.dev/rss/rss.xml',
			},
			{
				type: 'MASTODON',
				username: 'jhey',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITCH',
				username: 'jh3yy',
			},
			{
				type: 'TWITTER',
				username: 'jh3yy',
			},
			{
				type: 'YOUTUBE',
				channelName: 'jheytompkins',
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
		name: 'Kate Kalcevich',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'katekalcevich',
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
		name: 'Phil Hawksworth',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.hawksworx.com/blog',
				feedUrl: 'https://www.hawksworx.com/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'philhawksworth',
				serverDomain: 'indieweb.social',
			},
			{
				type: 'TWITTER',
				username: 'philhawksworth',
			},
		],
	},
	{
		name: 'Robin Marx',
		languages: ['en'],
		channels: [
			{
				type: 'MASTODON',
				username: 'programmingart',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'programmingart',
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
		name: 'Shubhie Panicker',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'shubhie',
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
		name: 'Sophie Tahran',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'STahran',
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
