import loginPage from "../../pages/login.page";
import productsPage from "../../pages/products.page";
import users from "../../data/users";
import utility from "utils/utility";

describe("Login to the application", () => {
  beforeEach(async () => {
    await loginPage.openApp();
    await loginPage.waitForPageToBeLoaded();
    await loginPage.waitForSeconds(3);
  });

  it("Verify a user can login to the application", async () => {
    await loginPage.login(users.standardUser);
    await loginPage.waitForSeconds(3);

    productsPage.productsLabel().then((label) => {
      expect(label.getText()).toEqual("Products");
    });

    it("Verify error message when locked user try to login", async () => {
      await loginPage.login(users.lockedOutUser);
      await loginPage.waitForSeconds(3);

      loginPage.errorMessage().then((message) => {
        expect(message.getText()).toEqual(
          "Epic sadface: Sorry, this user has been locked out."
        );
      });

      it("Verify error message when non registered user try to login", async () => {
        await loginPage.puttingIncorectCredential(
          await utility.generateRandomString(10),
          await utility.generateRandomNumericString(8)
        );
        await loginPage.waitForSeconds(3);

        expect(await loginPage.isErrorMessageDisplayed());
      });
    });
  });
});
