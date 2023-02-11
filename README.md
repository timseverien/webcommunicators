# @timseverien/webcommunicators

A list of people who communicate about web and web development.

## Usage

To install, run:

```sh
npm i @timseverien/webcommunicators
```

You can then import and use the list:

```ts
import communicators from '@timseverien/webcommunicators';

console.log(communicators);
```

### Example of a communciator

```ts
{
	name: 'Example',
	languages: ['en'],
	channels: [
		{
			type: 'BLOG',
			url: 'https://example.com/',
			feedUrl: 'https://example.com/feed.xml',
		},
		{
			type: 'MASTODON',
			serverDomain: 'example.com',
			username: 'example',
		},
		{
			type: 'TWITTER',
			username: 'example',
		},
	],
}
```

For the full list of channels and their properties, see `src/channel.ts`.

## Add or remove communicators

See the [Contributing Guide](docs/CONTRIBUTING.md).
