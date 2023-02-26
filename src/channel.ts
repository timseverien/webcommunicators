export type ChannelBlog = {
	type: 'BLOG';
	url: string;
	feedUrl?: string;
};

export type ChannelLinkedIn = {
	type: 'LINKEDIN';
	username: string;
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

export type ChannelYouTube = {
	type: 'YOUTUBE';
	channelId: string;
};

export type Channel =
	| ChannelBlog
	| ChannelLinkedIn
	| ChannelMastodon
	| ChannelNewsletter
	| ChannelTwitch
	| ChannelTwitter
	| ChannelYouTube;

type ChannelGetterMap<R = string> = {
	[key in Channel['type']]: (c: Channel) => R;
};

const createChannelGetter = <T extends Channel, R = string>(
	get: (channel: T) => R,
) => get as (c: Channel) => R;

const getChannelUrlMap: ChannelGetterMap = {
	BLOG: createChannelGetter<ChannelBlog>((channel) => channel.url),
	LINKEDIN: createChannelGetter<ChannelLinkedIn>(
		(channel) => `https://www.linkedin.com/in/${channel.username}`,
	),
	MASTODON: createChannelGetter<ChannelMastodon>(
		(channel) => `https://${channel.serverDomain}/@${channel.username}`,
	),
	NEWSLETTER: createChannelGetter<ChannelNewsletter>(
		(channel) => channel.subscribeUrl,
	),
	TWITCH: createChannelGetter<ChannelTwitch>(
		(channel) => `https://www.twitch.tv/${channel.username}`,
	),
	TWITTER: createChannelGetter<ChannelTwitter>(
		(channel: ChannelTwitter) => `https://twitter.com/${channel.username}`,
	),
	YOUTUBE: createChannelGetter<ChannelYouTube>(
		(channel: ChannelYouTube) =>
			`https://www.youtube.com/channel/${channel.channelId}`,
	),
};

const getChannelFeedUrlMap: ChannelGetterMap<string | null> = {
	BLOG: createChannelGetter<ChannelBlog, string | null>(
		(channel) => channel.feedUrl ?? null,
	),
	LINKEDIN: () => null,
	MASTODON: createChannelGetter<ChannelMastodon>(
		(channel) => `https://${channel.serverDomain}/@${channel.username}.rss`,
	),
	NEWSLETTER: () => null,
	TWITCH: () => null,
	TWITTER: () => null,
	YOUTUBE: createChannelGetter<ChannelYouTube>(
		(channel) =>
			`https://www.youtube.com/feeds/videos.xml?channel_id=${channel.channelId}`,
	),
};

export function getChannelUrl(channel: Channel) {
	return getChannelUrlMap[channel.type](channel);
}

export function getChannelFeedUrl(channel: Channel) {
	return getChannelFeedUrlMap[channel.type](channel);
}
