import BasePage from "./base.page";

export class ProductsPage extends BasePage {
  public constructor() {
    super();
  }

  private addToCartButtons() {
    return $$(".btn_primary");
  }

  private removeButtons() {
    return $$(".btn_secondary");
  }

  public inventoryPageLogoLabel() {
    return $(".app_logo");
  }

  public productsLabel() {
    return $(".header_secondary_container > .title");
  }

  public logoLabel() {
    return $(".app_logo");
  }

  public cartNumberLabel() {
    return $(".//*[contains(@class, 'shopping_cart_badge')]");
  }
  
  private productSortContainer() {
    return $(".product_sort_container");
  }

  private productName() {
    return $$(".inventory_item_name");
  }

  private productDescription() {
    return $$(".inventory_item_desc");
  }

  private productPrice() {
    return $$(".inventory_item_price");
  }

  private productItems() {
    return $$(".inventory_item");
  }

  private cartButton() {
    return $(".shopping_cart_container");
  }

  public openCart() {
    this.cartButton().click();
  }

  public addToCartAllProducts() {
    this.addToCartButtons().forEach((element) => {
      element.click();
    });
    return this;
  }

  public async addProductToCartByIndex(index: number): Promise<void> {
    const addToCartButtons = await this.addToCartButtons();
    if (index >= 0 && index < addToCartButtons.length) {
      const addToCartButton = addToCartButtons[index];
      await addToCartButton.click();
    } else {
      throw new Error(`Invalid index: ${index}`);
    }
  }

  public async getProductPriceByIndex(index: number): Promise<string> {
    const productPrice = await this.productPrice();
    if (index >= 0 && index < productPrice.length) {
        return await productPrice[index].getText();
    } else {
        throw new Error(`Invalid index: ${index}`);
      }
 
  }
}

export default new ProductsPage();
