import BasePage from "./base.page";

export class ChekoutPage extends BasePage {
    public constructor(){
        super();
    }
    
    private firstNameInputField() {
        return $("#first-name");
      }

      private lastNameInputField() {
        return $("#last-name");
      }

      private zipCodeInputField() {
        return $("#postal-code");
      }

      private continueButton() {
        return $(".btn_primary");
      }

      private cancelButton() {
        return $(".cart_cancel_link");
      }

      async enterPersonalInformation(client) {
        await this.firstNameInputField().setValue(client.firstName);
        await this.lastNameInputField().setValue(client.lastName);
        await this.zipCodeInputField().setValue(client.zipCode);
        this.continueButton().click;
 
}
}

export default new ChekoutPage();