import BasePage from "./base.page";

export class ChekoutCompletePage extends BasePage {
    public constructor(){
        super();
    }

    private completeMessage() { return $(".complete-header"); }
    private orderConfirmationText() { return $(".complete-text");}

    async isCompleteMessage(): Promise<boolean>{
        return await this.completeMessage().isDisplayed();
    }

    async isOrderConfirmationText(): Promise<boolean>{
        return await this.orderConfirmationText().isDisplayed();
    }

}

export default new ChekoutCompletePage();