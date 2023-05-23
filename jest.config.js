/*
 * @Date: 2022-01-11 15:23:45
 * @LastEditors: 曾令宇
 * @FilePath: /project-enigma-core/jest.config.js
 */
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  roots: [
    "test"
  ],
};
