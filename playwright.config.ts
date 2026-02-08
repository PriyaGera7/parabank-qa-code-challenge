import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: false,
    baseURL: "https://parabank.parasoft.com/"
  },
  reporter: [["html"]]
});
