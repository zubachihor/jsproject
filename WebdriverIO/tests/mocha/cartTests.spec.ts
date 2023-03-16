import loginPage from "../../pages/login.page";
import productsPage from "../../pages/products.page";
import users from "../../data/users";
import cartPage from "pages/cart.page";

describe("Cart testing", () => {
  beforeEach(async () => {
    await loginPage.openApp();
    await loginPage.waitForPageToBeLoaded();
    await loginPage.waitForSeconds(3);
  });

   it("should display the correct product price", async () => {
    await loginPage.login(users.standardUser);
    await loginPage.waitForSeconds(3);
    const expectedPrice = "$29.99";
    expect(await productsPage.getProductPriceByIndex(0)).toEqual(expectedPrice);
  }); 

    it("should allow a user to add an item to the cart", async () => {
    const expectedItemName = "Sauce Labs Backpack";
    await loginPage.login(users.standardUser);
    await loginPage.waitForSeconds(3);
    await productsPage.addProductToCartByIndex(0);
    await productsPage.waitForSeconds(3);
    productsPage.openCart();
    await productsPage.waitForSeconds(3);
    const actualCartItems = await cartPage.getCartItemNames();
    expect(actualCartItems).toContain(expectedItemName);
  });  
});
