export type ChannelBlog = {
	type: 'BLOG';
	url: string;
	feedUrl?: string;
};

export type ChannelMastodon = {
	type: 'MASTODON';
	serverDomain: string;
	username: string;
};

export type ChannelNewsletter = {
	type: 'NEWSLETTER';
	subscribeUrl: string;
};

export type ChannelTwitch = {
	type: 'TWITCH';
	username: string;
};

export type ChannelTwitter = {
	type: 'TWITTER';
	username: string;
};

type ChannelYouTubeWithChannelId = {
	type: 'YOUTUBE';
	channelId: string;
	channelName?: any;
};

type ChannelYouTubeWithChannelName = {
	type: 'YOUTUBE';
	channelId?: any;
	channelName: string;
};

export type ChannelYouTube =
	| ChannelYouTubeWithChannelId
	| ChannelYouTubeWithChannelName;

export type Channel =
	| ChannelBlog
	| ChannelMastodon
	| ChannelNewsletter
	| ChannelTwitch
	| ChannelTwitter
	| ChannelYouTube;
