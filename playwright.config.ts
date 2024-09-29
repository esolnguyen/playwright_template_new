import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src/tests",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:8080",
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  reporter: [["list"], ["json", { outputFile: "results.json" }]],
};

export default config;
