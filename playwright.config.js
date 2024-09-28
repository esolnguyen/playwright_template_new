module.exports = {
    use: {
        baseURL: process.env.BASE_URL || 'https://google.com', 
      headless: true,
      viewport: { width: 1280, height: 720 },
      actionTimeout: 10000, 
      screenshot: 'only-on-failure', 
    },
    retries: 2,
    timeout: 60000, 
};