import { test, expect } from "@playwright/test";

test("User should be able to", async ({ page }) => {});

test.only("login", async ({ page }) => {
  await page.goto("https://demo.sylius.com/en_US/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sylius/);

  // await page.locator(loginElements.button.loginPageLogin).click();

  await page.getByRole("link", { name: "Login" }).click();

  // await page.locator(loginElements.field.email).fill(email);
  // await page.waitForTimeout(500);
  // await page.keyboard.press("Tab");
  // await page.locator(loginElements.field.password).fill(password);
  // await page.locator(loginElements.button.loginPageLogin).click();

  //await page.goto("https://playwright.dev/");

  // Click the get started link.
  // await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(
  //   page.getByRole("heading", { name: "Installation" })
  // ).toBeVisible();

  //   Username: shop@example.com
  // Password: sylius
});
