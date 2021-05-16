export default {
    // NOTE: This workaround seems to work, thanks to https://github.com/gadicc
    // moduleNameMapper: {
    //     '^(\\./.*)\\.js$': '$1',
    // },
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    testEnvironment: 'node',
    transform: {'^.+\\.tsx?$': 'ts-jest'},
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'js'],
};
