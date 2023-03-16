import BasePage from "./base.page";

export class CartPage extends BasePage {
    public constructor() {
        super();
      }

  private cartItemNames() {
    return $$(".cart_item .inventory_item_name");
  }

  private cartItemPrices() {
    return $$(".cart_item .inventory_item_price");
  }

  private checkoutButton() {
    return $("#checkout");
  }


public clickOnCheckoutButton(){
    this.checkoutButton().scrollIntoView();
    this.checkoutButton().click;
}

  public async getCartItemNames(): Promise<string[]> {
    const cartItemNames = await this.cartItemNames();
    const itemNames: string[] = [];
  
    for (const element of cartItemNames) {
      const itemName = await element.getText();
      itemNames.push(itemName);
    }
  
    return itemNames;
  }
  }



export default new CartPage();
