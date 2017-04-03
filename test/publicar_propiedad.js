module.exports = {

   'Abrir página Beroomers': function (browser) {
    var url = browser.globals.home_url;
	
    browser
		.url('https://torrent.beroomers.com/es/')
		.waitForElementVisible('body',4000)
        .pause(4000);
	},

	'Acceder a la Home Landlord': function (browser){
	browser
		.waitForElementVisible('body',4000)
		.click('.Menu-lodging')
		.pause(4000);
	},

	'Conectarse como Landlord': function (browser){
	browser
		.click('.Menu-li:nth-of-type(2)')
		.pause(2000)
		.waitForElementVisible('form.Login',4000)
		.pause(2000)
		.setValue('#loginUserNameId','sararyder@andromeda.com')
		.pause(2000)
		.setValue('#loginPasswordId','sararyder')
		.pause(2000)
		.click('.Login-buttonLogin')
		.pause(4000);
	},

	'Acceder a la Gestión de Propiedades': function (browser){
	browser
		.waitForElementVisible('.Avatar',4000)
		.pause(2000)
		.click('.Avatar-name')
		.pause(2000)
		.click('.SubMenu-li:nth-of-type(2)')
		.pause(4000);
	},

	'Acceder al formulario de Añadir Propiedad': function (browser){
	browser
		.waitForElementVisible('body',4000)
		.pause(2000)
		.click('.Tabs-Controls-Actions .btn')
		.pause(2000)
	},

	'Completar formulario de Añadir Propiedad': function (browser){
	browser
		.waitForElementVisible('#basics',4000)
		.pause(2000)
		.click('.beicon-shared-flat')
		.pause(2000)
		.setValue('#property_draft_bedrooms','2')
		.pause(2000)
		.setValue('#property_draft_bathrooms','1')
		.pause(2000)
		.setValue('#property_draft_toilets','1')
		.pause(2000)
		.setValue('#property_draft_terraces','0')
		.pause(2000)
		.setValue('#property_draft_usableFloorSpace','80')
		.pause(2000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		})
		.pause(4000)		

		.waitForElementVisible('#location',4000)
		.pause(2000)
		.click('#property_draft_streetType option[value="1"]')
		.pause(2000)
		.setValue('#property_draft_streetName','Blasco Ibañez')
		.pause(2000)
		.setValue('#property_draft_streetNumber','12')
		.pause(2000)
		.setValue('#property_draft_city', 'Valencia, Spain')
		.pause(2000)
		.setValue('#property_draft_zip','46010')
		.pause(2000)
		.click('.input-group-btn .btn')
		.pause(6000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		})
		.pause(4000)

		.waitForElementVisible('#descriptions',4000)
		.pause(2000)
		.setValue('#property_draft_title', 'Piso en Av. Blasco Ibañez')
		.pause(2000)
		.click('#property_draft_amenities_383')
		.pause(2000)
		.click('#property_draft_amenities_386')
		.pause(2000)
		.click('#property_draft_amenities_377')
		.pause(2000)
		.click('#property_draft_amenities_388')
		.pause(2000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		})
		.pause(4000)

		.waitForElementVisible('#rooms',4000)
		.pause(2000)
		.click('.RoomCollection-Actions .btn')
		.pause(2000)
		.setValue('#property_draft_rooms_1_price','250')
		.pause(2000)
		.setValue('#property_draft_rooms_1_deposit','500')
		.pause(2000)
		.setValue('#property_draft_rooms_1_minMonths','1')
		.pause(2000)
		.setValue('#property_draft_rooms_1_number_of_beds','1')
		.pause(2000)
		.click('#property_draft_rooms_1_amenities_366')
		.pause(2000)
		.click('#property_draft_rooms_1_amenities_368')
		.pause(2000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		}).click('.MultiStepForm-stepNavigation a[href="#photos"]')
		.pause(4000)

		.waitForElementVisible('#photos',4000)
		.pause(2000)
		.setValue('input[type=file]','/home/cris/Descargas/avblasco.jpg')
		.pause(4000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		})
		.pause(4000)

		.waitForElementVisible('#conditions',4000)
		.pause(2000)
		.click('#property_draft_allowedGenders option[value="b"]')
		.pause(2000)
		.execute(function() {
        	document.querySelector('a.MultiStepForm-button').click()
 		})
		.pause(4000)

		.waitForElementVisible('#availabilities',4000)
		.pause(4000)

		.click('.MultiStepForm-ActionButton-CreateProperty')
		.pause(2000)
		.waitForElementNotPresent('.MultiStepForm',4000)
		.pause(2000);

	}


}