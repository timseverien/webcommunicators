import type { Channel } from './channel.js';
import type { Communicator } from './communicator.js';

export const getAllCommunicatorChannels = (communicators: Communicator[]) =>
	communicators.map((c) => c.channels).flat();

export const isOverlapInChannels = (a: Channel, b: Channel) => {
	if (a.type !== b.type) {
		return false;
	}

	const keys = Array.from(
		new Set([...Object.keys(a), ...Object.keys(b)]),
	).filter((k) => k !== 'type');

	for (const key of keys) {
		if ((a as any)[key] === (b as any)[key]) return true;
	}

	return false;
};

export const getCommunicatorChannelsOfType = <T extends Channel>(
	communicators: Communicator[],
	type: T['type'],
) =>
	getAllCommunicatorChannels(communicators).filter(
		(c): c is T => c.type === type,
	);

export const isValidHostname = (hostname: string) => {
	try {
		return (
			hostname.includes('.') &&
			new URL(`https://${hostname}/`).host === hostname
		);
	} catch {
		return false;
	}
};

export const isValidUrl = (url: string) => {
	try {
		const urlObject = new URL(url);
		return urlObject.protocol === 'https:' && urlObject.toString() === url;
	} catch {
		return false;
	}
};
