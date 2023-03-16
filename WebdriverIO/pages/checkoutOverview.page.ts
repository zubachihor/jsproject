import BasePage from "./base.page";

export class ChekoutOverviewPage extends BasePage {
    public constructor(){
        super();
    }

    private productName() { return $(".inventory_item_name"); }
    private productPrice() { return $(".inventory_item_price");}
    private totalPrice() { return $(".summary_total_label");}
    private cancelButton() { return $(".btn_secondary");}
    private finishButton() { return $(".btn_action");}



public clickOnfinishButton(){
    this.finishButton().click();
}
}

export default new ChekoutOverviewPage();