import BasePage from "./base.page";
import url from "../data/urls";

export class LoginPage extends BasePage {

    private usernameInput() { return $("#user-name"); }
    private passwordInput() { return $("#password"); }
    private loginButton() { return $("#login-button"); }
    public errorMessage() {return $("//h3[@data-test='error']");}

    async waitForPageToBeLoaded() {
        await this.usernameInput().waitForDisplayed({ timeout: 3000, reverse: false });

        return this;
    }

    async login(user) {
        await this.usernameInput().scrollIntoView();
        await this.usernameInput().setValue(user.username);
        await this.passwordInput().setValue(user.password);
        await this.loginButton().click();
    }

    async puttingIncorectCredential(username: string, password: string) {
        await this.usernameInput().scrollIntoView();
        await this.usernameInput().setValue(username);
        await this.passwordInput().setValue(password);
        await this.loginButton().click();
    }

    async openApp() {
        await super.open(url.baseUrl);
    }

    async isErrorMessageDisplayed(): Promise<boolean>{
        return await this.errorMessage().isDisplayed();
    }
}

export default new LoginPage();
