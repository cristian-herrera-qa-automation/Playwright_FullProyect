import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  timeout: 30 * 1000, //30000 ms(30 secs)
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  //retries: 1,
  workers: process.env.CI ? 1 : undefined,
  //workers: 1,

  // reporter: "allure-playwright",
  reporter: "html",
  // ['html'],
  // ['dot'],
  // ['list']

  use: {
    baseURL: process.env.BASE_URL || "http://localhost/opencart/upload",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: true,
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ["geolocation"], // Set necessary permissions for geolocation-based tests
  },

  //grep: /@master/,

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    } */
  ],
});
