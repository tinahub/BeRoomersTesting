module.exports = {

   'Abrir página Beroomers': function (browser) {
    var url = browser.globals.payment_url;
	
    browser
		.url(url)
		.waitForElementVisible('body',3000)
        .pause(2000);
	}

}