import type { Channel } from './channel.js';
import type { Communicator } from './communicator.js';

export const getAllCommunicatorChannels = (communicators: Communicator[]) =>
	communicators.map((c) => c.channels).flat();

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
		return new URL(url).toString() === url;
	} catch {
		return false;
	}
};
