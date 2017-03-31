// No funciona el popup de login con ChromeDriver

module.exports = {

    'Abrir página Beroomers': function (browser) {
    var url = browser.globals.home_url;
    
    browser
        .url(url)
        .waitForElementVisible('body',3000)
        .pause(2000);
    },

    'Abrir formulario de Sign Up': function (browser) {
    browser
        .click('.Menu-li:nth-of-type(1)')
        .waitForElementVisible('div.Signup',3000)
    },

    'Abrir formulario de Signup Facebook': function (browser) {
    browser
        .click('button.FacebookLogin')
    },

    'Comprobar form Signup Facebook': function (browser) {
    	browser
    		.window_handles(
    			function(result){

                var parent = result.value[0];
    			var child = result.value[1];

    			browser.switchWindow(child);
                this.pause(2000);
                this.setValue('#email','cris@beroomers.com');
                this.pause(2000);
                this.setValue('#pass','testing123');
                this.pause(2000);
                this.click('#u_0_2');
                this.pause(2000);

                this.switchWindow(parent);
                this.pause(2000);
                this.click('#signupPrefixId option[value="+34"]');
                this.pause(2000);
                this.setValue('#signupPhoneId','666666666');
                this.pause(2000);
                this.click('div.OptionButton-circle');
                this.pause(2000);
                this.click('#signupTellMeId')
       	 		this.pause(2000);

                this.expect.element('#signupFirstNameId').to.have.value.not.equals(null);
                this.expect.element('#signupLastNameId').to.have.value.not.equals(null);
                this.expect.element('#signupPrefixId').to.have.value.not.equals(null);
                this.expect.element('#signupPhoneId').to.have.value.not.equals(null);
                this.expect.element('#signupEmailId').to.have.value.not.equals(null);
                this.expect.element('#signupEmailId').to.have.value.which.matches(/.+@.+/);
                this.expect.element('.OptionButton-option--selected').text.to.contain('Propietario');
    		})
        },

        'Comprobar que Signup Facebook funciona': function (browser) {
        browser
            .submitForm('form.SignupEmail')
            .waitForElementNotPresent('.ReactWarning',3000)
            .waitForElementPresent('div.SignupStepFinish',3000)
            .pause(2000)
            .end();
        }
}