sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.training.WDE370Exercise14.controller.Main", {
		
		onNavPress: function() {
			var oNavService = null;
			
			if(sap.ushell && sap.ushell.Container) {
				oNavService = sap.ushell.Container.getService("CrossApplicationNavigation");
				var oTarget = {
					target: {
						semanticObject: "WDE370_00",
						action: "display"
					},
					params: { }
				};
				var aTargets = [ oTarget ];
				oNavService.isNavigationSupported(aTargets).done(function(aResponses){
					if(aResponses[0].supported) {
						oNavService.toExternal(oTarget);
					} else {
						var sMessage = "Target not found";
						MessageToast.show(sMessage);
					}
				});
				
			} else {
				var sMessage = "Shell not available. App only works in Launchpad";
				MessageToast.show(sMessage);
			}
		}
	});
});