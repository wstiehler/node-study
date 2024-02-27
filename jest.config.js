module.exports = {
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
    moduleNameMapper: {
        '^.+\\.(css|scss|png|svg|jpg|jpeg|gif|webp)$': 'jest-transform-stub',
      },

}