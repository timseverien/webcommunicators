import ISO6391 from 'iso-639-1';
import type { Channel } from './channel.js';

export const LANGUAGE_CODES = ISO6391.getAllCodes();
export type LanguageCode = typeof LANGUAGE_CODES[number];

export interface Communicator {
	name: string;
	channels: Channel[];
	languages: LanguageCode[];
}

export interface CommunicatorMetaData {
	imageUrl: string | null;
}
