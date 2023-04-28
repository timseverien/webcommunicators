/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	collectCoverage: true,
	preset: 'ts-jest/presets/default-esm',
	rootDir: 'src',
	testEnvironment: 'node',
};
