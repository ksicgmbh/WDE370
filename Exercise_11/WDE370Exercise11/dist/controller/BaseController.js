sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("com.sap.training.WDE370Exercise11.controller.BaseController", {
		
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		},
		
		onNavBack: function() {
			var sPreviousHash = History.getInstance().getPreviousHash();
			
			if(sPreviousHash !== undefined) {
				history.go(-1);
			} else {
				var bReplace = true;
				this.getRouter().navTo("Main", {}, bReplace);
			}
		
		}

	});

});