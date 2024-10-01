import { test, expect } from "@playwright/test";

test.describe("Customer Detail Page", () => {
  test("should display customer details", async ({ page }) => {
    await page.goto("/customers/1/details");
    const name = page.locator('[data-testid="customer-name"]');
    await expect(name).toHaveText("Ted James");
    const address = page.locator('[data-testid="customer-address"]');
    const expectedAddress = " 1234 Anywhere St. Phoenix , Arizona ";
    await expect(address).toHaveText(expectedAddress);
  });
});
