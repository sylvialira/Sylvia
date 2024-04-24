import { test, expect } from "@playwright/test";

test("User should be able to", async ({ page }) => {});

test("login", async ({ page }) => {
  await page.goto("https://demo.sylius.com/en_US/");

  await page.getByRole("link", { name: "Login" }).click();
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("shop@example.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("sylius");
  await page.getByRole("button", { name: "Login" }).click();
});

//await expect(page).toHaveTitle(/Sylius/);

//await page.locator(loginElements.field.email).fill(email);
// await page.waitForTimeout(500);
// await page.keyboard.press("Tab");
// await page.locator(loginElements.field.password).fill(password);
// await page.locator(loginElements.button.loginPageLogin).click();

// Expects page to have a heading with the name of Installation.
// await expect(
//   page.getByRole("heading", { name: "Installation" })
// ).toBeVisible();
