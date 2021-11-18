import LoginPage from  '../../pageobjects/login.page';

describe('Login functionality test suite', () => {
    beforeEach('Login page opens', async () => {
        await LoginPage.open();
        await browser.setTimeout({ 'pageLoad': 60000 });
    });

    afterEach('reload', async () => {
        await browser.reloadSession();
    });

    it('should accept Cookies', async () => {
        await (LoginPage.btnAccept).click;
        await (LoginPage.cookieBanner).waitForDisplayed({
            timeoutMsg: 'Banner still displays',
            timeout: 1000,
            reverse:true,
        });
    });

    it('should not be able to login with invalid credentials', async () => {
        await LoginPage.login('testuser@invalid.com', 'Password!');
        await expect(LoginPage.pwdField).toHaveTextContaining('Invalid email or password');
    });

    it('should display error when email is incorrect', async () => {
        await (LoginPage.inputEmail).setValue('@invalid.com');
        await (LoginPage.loginForm).click();
        await expect(LoginPage.emailField).toHaveTextContaining('Invalid email address');
    });

    it('should display error when password field is empty', async () => {
        await LoginPage.login('testuser@invalid.com', 'v');
        await (LoginPage.inputPassword).click();
        await browser.keys(['Backspace']);
        await expect(LoginPage.pwdField).toHaveTextContaining('Password is required');
    });

    it('should go through Forgot Password flow', async () => {
        await (LoginPage.inputEmail).setValue('user@invalid.com');
        await (LoginPage.btnNext).click();
        await (LoginPage.forgotPwLink).click();
        await (LoginPage.btnSendLink).click();
        await expect(LoginPage.submitMsg).toHaveTextContaining('we will send you a password reset email');
    });
});
