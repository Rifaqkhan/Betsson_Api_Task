const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Path to the test folder
  timeout: 30000,  // Max time for each test
  retries: 2,  // Retry failed tests twice
  workers: 2,  // Run tests in parallel
  reporter: 'html',  // HTML report output
  use: {
    browserName: 'chromium',  // You can change this to firefox or webkit
    headless: false,  // Set to false to see the browser while running tests
  },
});
