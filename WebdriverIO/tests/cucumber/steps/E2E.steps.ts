import { Given, Then, When } from "@cucumber/cucumber";
import clients from "data/clients";
import users from "data/users";
import cartPage from "pages/cart.page";
import checkoutPage from "pages/checkout.page";
import checkoutCompletePage from "pages/checkoutComplete.page";
import checkoutOverviewPage from "pages/checkoutOverview.page";
import loginPage from "pages/login.page";
import productsPage from "pages/products.page";

Given(/^The user is on the login page$/, async () => {
  await loginPage.openApp();
});
When(/^The user enters valid login credentials and click the login button$/, async () => {
  await loginPage.login(users.standardUser);
  await productsPage.waitForSeconds(3);
});

When(
  /^The user has selected a product to purchase and clicks on the Add to Cart button$/,
  async () => {
    await productsPage.addProductToCartByIndex(2);
    await productsPage.waitForSeconds(1);
  }
);

When(/^The user clicks on the Cart icon$/, async () => {
  await productsPage.openCart();
  await productsPage.waitForSeconds(1);
});

When(/^The user clicks on the Checkout button$/, async () => {
  await cartPage.clickOnCheckoutButton();
  await productsPage.waitForSeconds(1);
});

When(/^The user enters the required details$/, async () => {
  await checkoutPage.enterPersonalInformation(clients.standardClient);
  await productsPage.waitForSeconds(1);
});

When(/^The user clicks on the Finish button$/, async () => {
  await checkoutOverviewPage.clickOnfinishButton();
  await productsPage.waitForSeconds(1);
});

Then(
  /^The user should see a confirmation page indicating that the order was successfull$/,
  async () => {
    await checkoutCompletePage.isCompleteMessage();
    await checkoutCompletePage.isOrderConfirmationText();
  }
);
