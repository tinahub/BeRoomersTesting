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
		.pause(2000)
		.waitForElementVisible('div.Signup',3000);
	},

	'Abrir formulario de Signup Email': function (browser) {
	browser
        .click('button.Signup-email')
        .pause(2000)
		.waitForElementVisible('form.SignupEmail',3000);
	},
    

	'Comprobar que form no hace submit si hay campos vacíos': function (browser) {
		var random = Math.floor(Math.random() * (999 - 1) + 1);

		browser
	        .setValue('#signupFirstNameId','Sara')
	        .pause(2000)
			.setValue('#signupLastNameId','Ryder')
	        .pause(2000)
	        .click('#signupPrefixId option[value="+34"]')
	        .pause(2000)
			.setValue('#signupPhoneId','666666666')
	        .pause(2000)
	        .setValue('#signupEmailId','sararyder'+random+'@andromeda.com')
	        .pause(2000)
	        .setValue('#signupPasswordId','sararyder')
	        .pause(2000)
	        .click('#signupTellMeId')
	        .pause(2000);

	    browser.expect.element('#signupFirstNameId').to.have.value.not.equals(null);
	    browser.expect.element('#signupLastNameId').to.have.value.not.equals(null);
	    browser.expect.element('#signupPrefixId').to.have.value.not.equals(null);
	    browser.expect.element('#signupPhoneId').to.have.value.not.equals(null);
	    browser.expect.element('#signupPasswordId').to.have.value.not.equals(null);
	    browser.expect.element('#signupEmailId').to.have.value.not.equals(null);
	    browser.expect.element('#signupEmailId').to.have.value.which.matches(/.+@.+/);
	    browser.expect.element('.OptionButton-option--selected').text.to.contain('Roomer');
	
	},

	'Comprobar que Signup Email funciona': function (browser) {
	browser
		.submitForm('form.SignupEmail')
		.waitForElementNotPresent('.ReactWarning',3000)
		.waitForElementPresent('.SignupStepPreferences',3000)
		.pause(2000)
		/*.setValue('.SignupStepPreferences .SearchPlaceBox-input','Valencia')
		.pause(2000)
		.click('.SignupStepPreferences .SearchPlaceBoxItem--actived')
		.pause(2000)
		.setValue('.SignupStepPreferences #startDate','01-05-2017')
		.pause(2000)
		.setValue('.SignupStepPreferences #endDate','31-12-2017')
		.pause(2000)
		.click('.SignupStepPreferences .beicon-student-hall')
		.pause(2000)
		.execute("document.getElementsByClassName('PriceFilter-minValue')[0].innerHTML = '100';")
		.pause(2000)
		.execute("document.getElementsByClassName('PriceFilter-maxValue')[0].innerHTML = '500';")
		.pause(2000)
		.click('.BackNextStep-button--enabled')
		.pause(2000)
		.waitForElementPresent('.SignupStepFinish',3000)*/
		.end();
	}

}