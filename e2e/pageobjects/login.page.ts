import Page from './page';

class LoginPage extends Page {
  
    public get inputEmail() {
        return $('[name="email"]');
    }

    public get inputPassword() {
        return $('[name="password"]');
    }

    public get btnNext() {
        return $('[title="Next"]');
    }

    public get btnLogin() {
        return $('[title="Log in"]');
    }

    public get pwdField() {
        return $('[data-test-component="loginPage__password field"]');
    }

    public get emailField() {
        return $('[data-test-component="loginPage__email field"]');
    }

    public get btnAccept() {
        return $('[title="Accept"]');
    }

    public get cookieBanner() {
        return $('[data-test-component="cookiesConsentBanner"]');
    }

    public get loginForm() {
        return $('[action="#"]')
    }

    public get forgotPwLink() {
        return $('[data-test-component="loginPage__passwordRecovery textLink link"]');
    }

    public get btnSendLink() {
        return $('[title="Send the link"]');
    }

    public get submitMsg() {
        return $('[data-test-component="passwordRecoveryPage__submitMessage"]');
    }

    public async login (username: string, password: string): Promise<void> {
        await this.inputEmail.setValue(username);
        await this.btnNext.click();
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
   
    public async open(): Promise<string> {
        
        return super.open('login');
    }
}

export default new LoginPage();
