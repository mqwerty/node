module.exports = {
  apps: [
    {
      script: './build/index.js',
      env: {
        NODE_ENV: process.env.NODE_ENV || 'production',
      },
      exec_mode: process.env.PM2_EXEC_MODE || 'fork',
      instances: process.env.PM2_EXEC_INSTANCES || '1',
    },
  ],
}
