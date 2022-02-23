module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['jest-extended'],
  collectCoverageFrom: ['src/**/*.ts'],
}
