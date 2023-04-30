import type { Communicator } from './communicator.js';

export const COMMUNICATORS: Communicator[] = [
	{
		name: 'Adam Argyle',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://nerdy.dev/',
				feedUrl: 'https://nerdy.dev/rss.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'adamargyle',
			},
			{
				type: 'TWITTER',
				username: 'argyleink',
			},
		],
	},
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
				type: 'LINKEDIN',
				username: 'addyosmani',
			},
			{
				type: 'TWITTER',
				username: 'addyosmani',
			},
		],
	},
	{
		name: 'Alex Russel',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://infrequently.org/',
				feedUrl: 'https://infrequently.org/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'alexrussell',
			},
			{
				type: 'MASTODON',
				username: 'slightlyoff',
				serverDomain: 'toot.cafe',
			},
			{
				type: 'TWITTER',
				username: 'slightlylate',
			},
		],
	},
	{
		name: 'Alice Boxhall',
		languages: ['en'],
		channels: [
			{
				type: 'MASTODON',
				username: 'sundress',
				serverDomain: 'eigenmagic.net',
			},
		],
	},
	{
		name: 'Alicia Sedlock',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'aliciasedlock',
			},
			{
				type: 'TWITTER',
				username: 'aliciability',
			},
		],
	},
	{
		name: 'Andy Bell',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://andy-bell.co.uk/blog/',
				feedUrl: 'https://andy-bell.co.uk/feed/',
			},
			{
				type: 'MASTODON',
				username: 'andy',
				serverDomain: 'bell.bz',
			},
			{
				type: 'TWITTER',
				username: 'piccalilli_',
			},
		],
	},
	{
		name: 'Anjana Vakil',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://anjana.dev/',
				feedUrl: 'https://anjana.dev/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'anjanavakil',
			},
			{
				type: 'TWITTER',
				username: 'AnjanaVakil',
			},
		],
	},
	{
		name: 'Ash Kyd',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://ash.ms/blog/',
				feedUrl: 'https://ash.ms/atom.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'ashkyd',
			},
			{
				type: 'MASTODON',
				username: 'ash',
				serverDomain: 'bne.social',
			},
		],
	},
	{
		name: 'Ashley Bischoff',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'handcoding',
			},
			{
				type: 'TWITTER',
				username: 'handcoding',
			},
		],
	},
	{
		name: 'Asim Hussain',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://asim.dev/articles',
			},
			{
				type: 'LINKEDIN',
				username: 'jawache',
			},
			{
				type: 'TWITTER',
				username: 'jawache',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCFesKMMwxlGXWKxMQmndPYQ',
			},
		],
	},
	{
		name: 'Átila Fassina',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://atila.io/writing',
			},
			{
				type: 'LINKEDIN',
				username: 'atilafassina',
			},
			{
				type: 'MASTODON',
				username: 'atila',
				serverDomain: 'mas.to',
			},
			{
				type: 'TWITTER',
				username: 'AtilaFassina',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCfCr8kE8AL0tzDPbX1KX_gg',
			},
		],
	},
	{
		name: 'Barbara Bermes',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'barbarabermes',
			},
			{
				type: 'TWITTER',
				username: 'bbinto',
			},
		],
	},
	{
		name: 'Ben Callahan',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'bencallahan',
			},
			{
				type: 'TWITTER',
				username: 'bencallahan',
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
				type: 'LINKEDIN',
				username: 'bradfrost',
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
		name: 'Bram Smulders',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://bram.is/writing/',
				feedUrl: 'https://bram.is/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'smuldersbram',
			},
			{
				type: 'MASTODON',
				username: 'bramsmulders',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'bramsmulders',
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
				type: 'LINKEDIN',
				username: 'bramus',
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
		name: 'Brian Rinaldi',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://remotesynthesis.com/blog/',
				feedUrl: 'https://remotesynthesis.com/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'brianrinaldi',
			},
			{
				type: 'MASTODON',
				username: 'remotesynth',
				serverDomain: 'mastodon.xyz',
			},
			{
				type: 'TWITTER',
				username: 'remotesynth',
			},
		],
	},
	{
		name: 'Bruce Lawson',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://brucelawson.co.uk/writing/',
				feedUrl: 'https://brucelawson.co.uk/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'bruce-lawson-34b44',
			},
			{
				type: 'MASTODON',
				username: 'brucelawson',
				serverDomain: 'social.vivaldi.net',
			},
			{
				type: 'TWITTER',
				username: 'brucel',
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
				type: 'LINKEDIN',
				username: 'cariefisher',
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
				type: 'LINKEDIN',
				username: 'cassie-codes',
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
		name: 'Cassondra Roberts',
		languages: ['en'],
		channels: [
			{
				type: 'MASTODON',
				username: 'castastrophe',
				serverDomain: 'front-end.social',
			},
			{
				type: 'LINKEDIN',
				username: 'castastrophe',
			},
		],
	},
	{
		name: "Charlie O'Hara",
		languages: ['en'],
		channels: [
			{
				type: 'MASTODON',
				username: 'whalecoiner',
				serverDomain: 'indieweb.social',
			},
			{
				type: 'TWITTER',
				username: 'whalecoiner',
			},
		],
	},
	{
		name: 'Chen Hui Jing',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://chenhuijing.com/blog/',
				feedUrl: 'https://chenhuijing.com/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'huijingchen',
			},
			{
				type: 'MASTODON',
				username: 'huijing',
				serverDomain: 'tech.lgbt',
			},
			{
				type: 'TWITTER',
				username: 'hj_chen',
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
				type: 'LINKEDIN',
				username: 'christinevallaure',
			},
			{
				type: 'TWITTER',
				username: 'moonlearning',
			},
		],
	},
	{
		name: 'Christophe Porteneuve',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'christopheporteneuve',
			},
			{
				type: 'MASTODON',
				username: 'porteneuve',
				serverDomain: 'piaille.fr',
			},
			{
				type: 'TWITTER',
				username: 'porteneuve',
			},
		],
	},
	{
		name: 'Dan Donald',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'hereinthehive',
			},
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
		name: 'Diana Mounter',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'dianamounter',
			},
			{
				type: 'TWITTER',
				username: 'broccolini',
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
				type: 'LINKEDIN',
				username: 'elliotjaystocks',
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
		name: 'Eric Bailey',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://ericwbailey.website/published/',
				feedUrl: 'https://ericwbailey.website/feed/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'ericwbailey',
			},
			{
				type: 'MASTODON',
				username: 'eric',
				serverDomain: 'social.ericwbailey.website',
			},
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://buttondown.email/ericwbailey',
			},
			{
				type: 'TWITTER',
				username: 'ericwbailey',
			},
		],
	},
	{
		name: 'Erik Kroes',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.erikkroes.nl/blog/',
				feedUrl: 'https://www.erikkroes.nl/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'erikKroes',
			},
			{
				type: 'MASTODON',
				username: 'erikKroes',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://www.erikkroes.nl/newsletter/',
			},
			{
				type: 'TWITCH',
				username: 'erikKroes',
			},
			{
				type: 'TWITTER',
				username: 'erikkroes',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCwrpGO76k2HyUQspl-rG2eQ',
			},
		],
	},
	{
		name: 'Eva Ferreira',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'evaferreira92',
			},
		],
	},
	{
		name: 'Eva Lettner',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'eva-lettner-23997094',
			},
			{
				type: 'TWITTER',
				username: 'eva_trostlos',
			},
		],
	},
	{
		name: 'Floor Drees',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://dev.to/floord',
				feedUrl: 'https://dev.to/feed/floord',
			},
			{
				type: 'LINKEDIN',
				username: 'floordrees',
			},
			{
				type: 'MASTODON',
				username: 'floord',
				serverDomain: 'mastodon.lol',
			},
			{
				type: 'TWITTER',
				username: 'floordrees',
			},
		],
	},
	{
		name: 'Gergely Orosz',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://blog.pragmaticengineer.com/',
				feedUrl: 'https://blog.pragmaticengineer.com/rss/',
			},
			{
				type: 'LINKEDIN',
				username: 'gergelyorosz',
			},
			{
				type: 'MASTODON',
				username: 'gergelyorosz',
				serverDomain: 'mastodon.online',
			},
			{
				type: 'TWITTER',
				username: 'GergelyOrosz',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCPbwhExawYrn9xxI21TFfyw',
			},
		],
	},
	{
		name: 'Harrison Wheeler',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'hmwheeler',
			},
			{
				type: 'TWITTER',
				username: 'hmwheele',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCcwBLFBbMX6lMXV6l20SFzw',
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
				type: 'LINKEDIN',
				username: 'csswizardry',
			},
			{
				type: 'TWITTER',
				username: 'csswizardry',
			},
		],
	},
	{
		name: 'Henri Helvetica',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'henri-helvetica-231189239',
			},
			{
				type: 'TWITTER',
				username: 'HenriHelvetica',
			},
		],
	},
	{
		name: 'Heydon Pickering',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://heydonworks.com/latest/',
				feedUrl: 'https://heydonworks.com/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'heydon-pickering-a2a22b9',
			},
			{
				type: 'MASTODON',
				username: 'heydon',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'heydonworks',
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
				type: 'LINKEDIN',
				username: 'hiddedevries',
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
		name: 'Ire Aderinokun',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://bitsofco.de/',
				feedUrl: 'https://bitsofco.de/rss/',
			},
			{
				type: 'LINKEDIN',
				username: 'iaderinokun',
			},
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://bitsofco.de',
			},
			{
				type: 'MASTODON',
				username: 'ire',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'ireaderinokun',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCaJvzHE_y3MhbDLrsa4FfJQ',
			},
		],
	},
	{
		name: 'István “Flaki” Szmozsánszky',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://musings.flak.is/',
				feedUrl: 'https://musings.flak.is/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'szmozsanszkyistvan',
			},
			{
				type: 'MASTODON',
				username: 'flaki',
				serverDomain: 'flaki.social',
			},
			{
				type: 'TWITTER',
				username: 'slsoftworks',
			},
		],
	},
	{
		name: 'Ivan Akulov',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://iamakulov.com/notes/',
				feedUrl: 'https://iamakulov.com/notes/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'iamakulov',
			},
			{
				type: 'MASTODON',
				username: 'iamakulov',
				serverDomain: 'indieweb.social',
			},
			{
				type: 'TWITTER',
				username: 'iamakulov',
			},
		],
	},
	{
		name: 'Jack Franklin',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.jackfranklin.co.uk/blog/',
				feedUrl: 'https://www.jackfranklin.co.uk/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'jack-franklin-056510127',
			},
			{
				type: 'MASTODON',
				username: 'jackf',
				serverDomain: 'indieweb.social',
			},
			{
				type: 'TWITTER',
				username: 'Jack_Franklin',
			},
		],
	},
	{
		name: 'Jad Joubran',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'jadjoubran',
			},
			{
				type: 'TWITTER',
				username: 'JoubranJad',
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
				type: 'LINKEDIN',
				username: 'jake-archibald',
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
		name: 'Jason Grigsby',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'grigs',
			},
			{
				type: 'MASTODON',
				username: 'grigs',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'grigs',
			},
		],
	},
	{
		name: 'Jason Pamental',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://rwt.io/blog',
			},
			{
				type: 'BLOG',
				url: 'https://jpamental.medium.com/',
				feedUrl: 'https://medium.com/feed/@jpamental',
			},
			{
				type: 'LINKEDIN',
				username: 'jpamental',
			},
			{
				type: 'TWITTER',
				username: 'jpamental',
			},
		],
	},
	{
		name: 'Jecelyn Yeen',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://jec.fyi/blog',
				feedUrl: 'https://jec.fyi/index.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'jecfish',
			},
			{
				type: 'TWITTER',
				username: 'jecfish',
			},
		],
	},
	{
		name: 'Jeremy Keith',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://adactio.com/articles',
				feedUrl: 'https://adactio.com/articles/rss',
			},
			{
				type: 'LINKEDIN',
				username: 'adactio',
			},
			{
				type: 'MASTODON',
				username: 'adactio',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'adactio',
			},
		],
	},
	{
		name: 'Jessica Rose',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'jesslynnrose',
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
				type: 'LINKEDIN',
				username: 'jheytompkins',
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
				channelId: 'UC_AfA7_dtrLmRIlkAWdIQDg',
			},
		],
	},
	{
		name: 'Joan León',
		languages: ['en', 'es'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://joanleon.dev/blog/',
				feedUrl: 'https://joanleon.dev/rss.xml',
			},
			{
				type: 'MASTODON',
				username: 'nucliweb',
				serverDomain: 'webperf.social',
			},
			{
				type: 'TWITTER',
				username: 'nucliweb',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UChE1i1V9J06_yfx4NyAMyyA',
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
				type: 'LINKEDIN',
				username: 'joshwcomeau',
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
				type: 'LINKEDIN',
				username: 'katekalcevich',
			},
			{
				type: 'TWITTER',
				username: 'katekalcevich',
			},
		],
	},
	{
		name: 'Kilian Valkhof',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://kilianvalkhof.com/',
				feedUrl: 'https://feeds.feedburner.com/Kilianvalkhofcom',
			},
			{
				type: 'LINKEDIN',
				username: 'kilianvalkhof',
			},
			{
				type: 'MASTODON',
				username: 'kilian',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'kilianvalkhof',
			},
		],
	},
	{
		name: 'Laura Kalbag',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://laurakalbag.com/posts/',
				feedUrl: 'https://laurakalbag.com/posts/index.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'laurakalbag',
			},
			{
				type: 'MASTODON',
				username: 'laura',
				serverDomain: 'mastodon.laurakalbag.com',
			},
			{
				type: 'TWITTER',
				username: 'laurakalbag',
			},
		],
	},
	{
		name: 'Laurie Voss',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://seldo.com/',
				feedUrl: 'https://seldo.com/rss.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'seldo',
			},
			{
				type: 'MASTODON',
				username: 'seldo',
				serverDomain: 'alpaca.gold',
			},
			{
				type: 'TWITTER',
				username: 'seldo',
			},
		],
	},
	{
		name: 'Lea Verou',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://lea.verou.me/',
				feedUrl: 'https://lea.verou.me/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'leaverou',
			},
			{
				type: 'MASTODON',
				username: 'leaverou',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'LeaVerou',
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
				type: 'LINKEDIN',
				username: 'leeerob',
			},
			{
				type: 'TWITTER',
				username: 'leeerob',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCZMli3czZnd1uoc1ShTouQw',
			},
		],
	},
	{
		name: 'Léonie Watson',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://tink.uk/',
				feedUrl: 'https://tink.uk/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'lwatson',
			},
			{
				type: 'MASTODON',
				username: 'tink',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'leoniewatson',
			},
		],
	},
	{
		name: 'Lynn Fisher',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://lynnandtonic.com/thoughts/',
				feedUrl: 'https://lynnandtonic.com/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'lynnandtonic',
			},
			{
				type: 'MASTODON',
				username: 'lynnandtonic',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'lynnandtonic',
			},
		],
	},
	{
		name: 'Mandy Michael',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://medium.com/@mandy.michael',
				feedUrl: 'https://medium.com/feed/@mandy.michael',
			},
			{
				type: 'TWITTER',
				username: 'Mandy_Kerr',
			},
		],
	},
	{
		name: 'Manuel Matuzović',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.matuzo.at/blog/',
				feedUrl: 'https://www.matuzo.at/feed.xml?rev=1676266777073',
			},
			{
				type: 'LINKEDIN',
				username: 'matuzo',
			},
			{
				type: 'MASTODON',
				username: 'matuzo',
				serverDomain: 'front-end.social',
			},
		],
	},
	{
		name: 'Marie van Driessche',
		languages: ['en', 'nl'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'marie-van-driessche',
			},
			{
				type: 'TWITTER',
				username: 'marievandries',
			},
		],
	},
	{
		name: 'Martin Splitt',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://50linesofco.de/',
				feedUrl: 'https://50linesofco.de/rss.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'martinsplitt',
			},
			{
				type: 'MASTODON',
				username: 'geekonaut',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'geekonaut',
			},
		],
	},
	{
		name: 'Matt Gaunt-Seo',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.gaunt.dev/blog/',
				feedUrl: 'https://www.gaunt.dev/blog/rss.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'mattgaunt',
			},
			{
				type: 'MASTODON',
				username: 'matt',
				serverDomain: 'mastodon.gaunt.dev',
			},
			{
				type: 'TWITTER',
				username: 'gauntface',
			},
		],
	},
	{
		name: 'Maud Nalpas',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'maudnalpas',
			},
			{
				type: 'TWITTER',
				username: 'maudnals',
			},
		],
	},
	{
		name: 'Max Böck',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://mxb.dev/blog/',
				feedUrl: 'https://mxb.dev/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'max-böck-94a1861aa',
			},
			{
				type: 'MASTODON',
				username: 'mxbck',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'mxbck',
			},
		],
	},
	{
		name: 'Michelle Barker',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://css-irl.info/',
			},
			{
				type: 'LINKEDIN',
				username: 'michelle-barker-02819230',
			},
			{
				type: 'MASTODON',
				username: 'michelle',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'MicheBarks',
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
				type: 'LINKEDIN',
				username: 'mirisuzanne',
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
		name: 'Monica Dinculescu',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://meowni.ca/blog/',
				feedUrl: 'https://meowni.ca/blog.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'mdinculescu',
			},
			{
				type: 'TWITTER',
				username: 'notwaldorf',
			},
		],
	},
	{
		name: 'Monika Piotrowicz',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'monikapiotrowicz',
			},
			{
				type: 'TWITTER',
				username: 'monsika',
			},
		],
	},
	{
		name: 'Nadieh Bremer',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.visualcinnamon.com/blog/',
				feedUrl: 'https://www.visualcinnamon.com/blog/index.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'nbremer',
			},
			{
				type: 'TWITTER',
				username: 'NadiehBremer',
			},
		],
	},
	{
		name: 'Nathan Curtis',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://medium.com/@nathanacurtis',
				feedUrl: 'https://medium.com/feed/@nathanacurtis',
			},
			{
				type: 'LINKEDIN',
				username: 'nathancurtis',
			},
			{
				type: 'TWITTER',
				username: 'nathanacurtis',
			},
		],
	},
	{
		name: 'Niels Leenheer',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://nielsleenheer.com/articles/',
				feedUrl: 'https://nielsleenheer.com/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'nielsleenheer',
			},
			{
				type: 'TWITTER',
				username: 'html5test',
			},
		],
	},
	{
		name: 'Nolan Lawson',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://nolanlawson.com/',
				feedUrl: 'https://nolanlawson.com/feed/',
			},
			{
				type: 'MASTODON',
				username: 'nolan',
				serverDomain: 'toot.cafe',
			},
		],
	},
	{
		name: 'Ola Gasidlo',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'ola-gasidlo-brändel-822084237',
			},
			{
				type: 'TWITTER',
				username: 'misprintedtype',
			},
		],
	},
	{
		name: 'Patrick Brosset',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://patrickbrosset.com/articles/',
				feedUrl: 'https://patrickbrosset.com/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'patrickbrosset',
				serverDomain: 'mas.to',
			},
			{
				type: 'TWITTER',
				username: 'patrickbrosset',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCteBVHpE50UcE1Qaz7xjCNA',
			},
		],
	},
	{
		name: 'Paul Lewis',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://aerotwist.com/blog/',
				feedUrl: 'https://aerotwist.com/blog/feed/',
			},
			{
				type: 'TWITTER',
				username: 'aerotwist',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCRDEsZDDhVhtHLi0L8-5fow',
			},
		],
	},
	{
		name: 'Peter Gasston',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://petergasston.co.uk/blog/',
				feedUrl: 'https://petergasston.co.uk/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'petergasston',
			},
			{
				type: 'TWITTER',
				username: 'stopsatgreen',
			},
		],
	},
	{
		name: 'Peter Müller',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://mntr.dk/',
				feedUrl: 'https://mntr.dk/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'petermuller',
			},
			{
				type: 'MASTODON',
				username: 'munter',
				serverDomain: 'webperf.social',
			},
			{
				type: 'TWITTER',
				username: '_munter_',
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
				type: 'LINKEDIN',
				username: 'philhawksworth',
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
		name: 'Rachel Andrew',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://rachelandrew.co.uk/archives/',
				feedUrl: 'https://rachelandrew.co.uk/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'rachelandrew',
			},
			{
				type: 'TWITTER',
				username: 'rachelandrew',
			},
		],
	},
	{
		name: 'Raymond Camden',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.raymondcamden.com/',
				feedUrl: 'https://www.raymondcamden.com/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'raymondcamden',
			},
			{
				type: 'MASTODON',
				username: 'raymondcamden',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'raymondcamden',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UC8KROrnEHSnnV3z5J_FoSIg',
			},
		],
	},
	{
		name: 'Rémi Parmentier',
		languages: ['en', 'fr'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.hteumeuleu.com/blog/',
				feedUrl: 'https://www.hteumeuleu.com/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'HTeuMeuLeu',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'HTeuMeuLeu',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCL55zaz6Usy6g2TxdKiel_w',
			},
		],
	},
	{
		name: 'Remy Sharp',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://remysharp.com/',
				feedUrl: 'https://remysharp.com/blog.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'remysharp',
			},
			{
				type: 'MASTODON',
				username: 'rem',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'rem',
			},
		],
	},
	{
		name: 'Robin Marx',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'rmarx',
			},
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
		name: 'Ruben van der Leun',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'rvdleun',
			},
			{
				type: 'MASTODON',
				username: 'rvdleun',
				serverDomain: 'mas.to',
			},
			{
				type: 'TWITTER',
				username: 'rvdleun',
			},
		],
	},
	{
		name: 'Sara Soueidan',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.sarasoueidan.com/blog/',
				feedUrl: 'https://www.sarasoueidan.com/blog/index.xml/',
			},
			{
				type: 'LINKEDIN',
				username: 'sara-soueidan-619069257',
			},
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://www.sarasoueidan.com/newsletter/',
			},
			{
				type: 'TWITTER',
				username: 'sarasoueidan',
			},
		],
	},
	{
		name: 'Sarah Drasner',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://sarahdrasnerdesign.com/writing/',
			},
			{
				type: 'LINKEDIN',
				username: 'sarahdrasner',
			},
			{
				type: 'MASTODON',
				username: 'sarah_edo',
				serverDomain: 'hachyderm.io',
			},
			{
				type: 'TWITTER',
				username: 'sarah_edo',
			},
		],
	},
	{
		name: 'Scott Helme',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://scotthelme.co.uk/',
				feedUrl: 'https://scotthelme.co.uk/rss/',
			},
			{
				type: 'LINKEDIN',
				username: 'scotthelme',
			},
			{
				type: 'TWITTER',
				username: 'Scott_Helme',
			},
		],
	},
	{
		name: "Scott O'Hara",
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.scottohara.me/writing/',
				feedUrl: 'https://www.scottohara.me/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'scottaohara',
			},
			{
				type: 'MASTODON',
				username: 'scottohara',
				serverDomain: 'a11y.info',
			},
			{
				type: 'MASTODON',
				username: 'scottohara',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'scottohara',
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
			{
				type: 'LINKEDIN',
				username: 'shaundai',
			},
			{
				type: 'TWITTER',
				username: 'shaundai',
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
				type: 'LINKEDIN',
				username: 'shestopalov',
			},
			{
				type: 'TWITTER',
				username: 'shestopalov_v',
			},
		],
	},
	{
		name: 'Sophie Koonin',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://localghost.dev/blog/',
				feedUrl: 'https://localghost.dev/feed.xml',
			},
			{
				type: 'MASTODON',
				username: 'sophie',
				serverDomain: 'social.lol',
			},
			{
				type: 'TWITTER',
				username: 'type__error',
			},
		],
	},
	{
		name: 'Sophie Tahran',
		languages: ['en'],
		channels: [
			{
				type: 'LINKEDIN',
				username: 'sophietahran',
			},
			{
				type: 'TWITTER',
				username: 'STahran',
			},
		],
	},
	{
		name: 'Stefan Judis',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.stefanjudis.com/blog/',
				feedUrl: 'https://www.stefanjudis.com/rss.xml',
			},
			{
				type: 'BLOG',
				url: 'https://dev.to/stefanjudis/',
				feedUrl: 'https://dev.to/feed/stefanjudis',
			},
			{
				type: 'MASTODON',
				username: 'stefan',
				serverDomain: 'front-end.social',
			},
			{
				type: 'NEWSLETTER',
				subscribeUrl: 'https://webweekly.email',
			},
			{
				type: 'TWITCH',
				username: 'stefanjudis',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCLpT9xDn3WQ24wfVCkAZU6A',
			},
		],
	},
	{
		name: 'Stephanie Eckles',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://thinkdobecreate.com/articles/',
				feedUrl: 'https://thinkdobecreate.com/feed/',
			},
			{
				type: 'BLOG',
				url: 'https://dev.to/5t3ph',
				feedUrl: 'https://dev.to/feed/5t3ph',
			},
			{
				type: 'LINKEDIN',
				username: 'stepheckles',
			},
			{
				type: 'MASTODON',
				username: '5t3ph',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITCH',
				username: '5t3phdev',
			},
			{
				type: 'TWITTER',
				username: '5t3ph',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UC8qc2AyBbNmvgIky6236nHA',
			},
		],
	},
	{
		name: 'Stephanie Stimac',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://blog.stephaniestimac.com/',
				feedUrl: 'https://blog.stephaniestimac.com/feed/feed.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'stephaniestimac',
			},
			{
				type: 'TWITTER',
				username: 'seaotta',
			},
		],
	},
	{
		name: 'Stephen Cook',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://stephencook.dev/blog',
			},
			{
				type: 'LINKEDIN',
				username: 'scook628',
			},
			{
				type: 'TWITTER',
				username: 'StephenCookDev',
			},
		],
	},
	{
		name: 'Steve Schoger',
		languages: ['en'],
		channels: [
			{
				type: 'TWITTER',
				username: 'steveschoger',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCxqiDtkXtOCNJdckODHk9YA',
			},
		],
	},
	{
		name: 'Steven Hay',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://www.the-haystack.com/',
				feedUrl: 'https://www.the-haystack.com/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'stephenhay',
			},
			{
				type: 'MASTODON',
				username: 'stephenhay',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'stephenhay',
			},
		],
	},
	{
		name: 'Tejas Kumar',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://tej.as/blog',
				feedUrl: 'https://tejaskumar.com/api/rss',
			},
			{
				type: 'TWITTER',
				username: 'tejaskumar_',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCvqfTexdjchPEa7j-6SPM-w',
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
				type: 'LINKEDIN',
				username: 'tkadlec',
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
				type: 'LINKEDIN',
				username: 'timseverien',
			},
			{
				type: 'MASTODON',
				username: 'ijsjes',
				serverDomain: 'mastodon.social',
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
		name: 'Umar Hansa',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://umaar.com/blog/',
			},
			{
				type: 'TWITTER',
				username: 'umaar',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCwktrTEq-dC49H1NGAC0dWQ',
			},
		],
	},
	{
		name: 'Una Kravets',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://una.im/blog',
			},
			{
				type: 'LINKEDIN',
				username: 'una-kravets-a3582730',
			},
			{
				type: 'MASTODON',
				username: 'Una',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'una',
			},
		],
	},
	{
		name: 'Val Head',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://valhead.com/blog/',
				feedUrl: 'https://valhead.com/feed/',
			},
			{
				type: 'LINKEDIN',
				username: 'valhead',
			},
			{
				type: 'MASTODON',
				username: 'vlh',
				serverDomain: 'front-end.social',
			},
			{
				type: 'TWITTER',
				username: 'vlh',
			},
		],
	},
	{
		name: 'Yoav Weiss',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://blog.yoav.ws/',
				feedUrl: 'https://blog.yoav.ws/index.xml',
			},
			{
				type: 'LINKEDIN',
				username: 'weissyoav',
			},
			{
				type: 'MASTODON',
				username: 'yoav',
				serverDomain: 'mastodon.social',
			},
			{
				type: 'TWITTER',
				username: 'yoavweiss',
			},
		],
	},
	{
		name: 'Zell Liew',
		languages: ['en'],
		channels: [
			{
				type: 'BLOG',
				url: 'https://zellwk.com/blog/1/',
				feedUrl: 'https://zellwk.com/feed.xml',
			},
			{
				type: 'TWITTER',
				username: 'zellwk',
			},
			{
				type: 'YOUTUBE',
				channelId: 'UCwIu7m0WpCNXiKZfysX54Zg',
			},
		],
	},
];
