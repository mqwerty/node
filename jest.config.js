module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.ts?(x)'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['jest-extended'],
}
