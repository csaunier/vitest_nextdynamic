const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.js",
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    }
};

export default config