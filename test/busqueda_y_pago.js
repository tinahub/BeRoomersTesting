module.exports = {

   'Abrir página Beroomers': function (browser) {
    var url = browser.globals.home_url;
	
    browser
		.url(url)
		.waitForElementVisible('body',3000)
        .pause(2000);
	},
    
   'Buscar habitación': function (browser) {
	browser
		.setValue('.SearchPlaceBox-input','Valencia')
        .pause(2000)
        .click('.SearchPlaceBoxItem--actived')
        .pause(2000)
        .setValue('#startDate','01-12-2017')
        .pause(2000)
        .setValue('#endDate','01-12-2018')
        .pause(2000)
        .click('.SearchBox-button')
        .waitForElementVisible('.SearchResults',3000)
        .pause(2000);
	},

    'Filtrar habitación': function (browser){
    browser
        .click('.FilterToolBar-showExtended')
        .pause(2000)
        .click('.beicon-shared-flat')
        .pause(2000)
        .click('.WholeApartmentFilter-element--bathrooms .SelectOptionNumber-element:nth-of-type(2)')
        .pause(2000)
        .click('input[name=washing-machine-check]')
        .pause(2000)
        .click('input[name=wifi-check]')
        .pause(2000)
        .click('input[name=tv-check]')
        .pause(2000)
        .click('.beicon-single-bed')
        .pause(2000)
        .click('input[name=closet-check]')
        .pause(2000)
        .click('input[name=heating-check]')
        .pause(2000)
        .click('.FilterToolBar-apply')
        .pause(2000)
        .waitForElementVisible('.SearchResults',3000)
        .pause(2000);
    },

    'Seleccionar habitación': function (browser) {
    browser
        .click('.ProductCard:nth-of-type(1)')
        .pause(5000);
    },

     'Ir a página de reserva': function(browser){
    browser
        .window_handles(
            function(result){
                var child = result.value[1];
                browser.switchWindow(child);

                this.click('.BookingForm-actions-bookNow');
                this.pause(4000);
                this.waitForElementVisible('body',3000);
                this.pause(2000);
            }
        )
    },
    
   'Reservar habitación': function (browser) {
	browser
        .click('.login-button')
        .pause(3000)
        .setValue('#loginUserNameId','scottryder@andromeda.com')
        .pause(3000)
        .setValue('#loginPasswordId','scottryder')
        .pause(3000)
        .click('.Login-buttonLogin')
        .pause(3000)
        .waitForElementPresent('#payment-form',3000)
        .pause(3000)
        .setValue('#payment_number','42424242424242424242')
        .pause(3000)
        .click('#payment_expirationMonth option[value="6"]')
        .pause(3000)
        .click('#payment_expirationYear option[value="2020"]')
        .pause(3000)
        .setValue('#payment_cvc','678')
        .pause(3000)
        .click('button#payment_save')
        .pause(3000)
        .waitForElementNotPresent('#payment-form',5000)
        .pause(5000)
        .end();
    }
    
}