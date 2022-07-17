const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  coverageProvider: 'v8',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/', 
    '<rootDir>/e2e/',
    '<rootDir>/.next/',
    '<rootDir>/playwright.config.ts',
],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!<rootDir>/e2e/**',
    '!**/node_modules/**',
    '!<rootDir>/out/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
  ],
  "coverageReporters": ["clover", "json", "lcov", ["text", {"skipFull": true}]],
  "transformIgnorePatterns": [
    "node_modules/(?!spacetime)"
  ]
}

module.exports = createJestConfig(customJestConfig)