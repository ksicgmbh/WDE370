sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.sap.training.WDE370WDFTranslations.controller.Main", {
		
		onInit: function() {
			
			var sText = this.getText("helloMessage");
			
			var oData = {
				Greeting: "Hello WDE370",
				Name: ""
			};
			
			var oModel = new JSONModel();
			oModel.setData(oData);
			this.getView().setModel(oModel);
			
			oModel.setProperty("/Greeting", sText);
		},
		
		onNameLiveChange: function(oControlEvent) {
			var sValue = oControlEvent.getParameter("value");
			var sText = this.getText("helloMessageParam", [sValue]);
			var oModel = this.getView().getModel();
			oModel.setProperty("/Greeting", sText);
		},
		
		getResourceBundle: function() {
			jQuery.sap.require("jquery.sap.resources");	
			var oBundle = jQuery.sap.resources({
				url: 'i18n/i18n.properties'
			});
			return oBundle;
		},
		
		getText: function(sKey, aParams) {
			var oBundle = this.getResourceBundle();
			return oBundle.getText(sKey, aParams);
		} 
		
	});
});