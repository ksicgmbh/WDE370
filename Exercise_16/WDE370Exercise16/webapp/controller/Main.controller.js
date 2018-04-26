sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sap.trainingWDE370Exercise16.controller.Main", {
		
		onInit: function() {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
			var sPath = "/FlightSet(Carrid='AA',Connid='0017',Fldate=datetime'2017-11-02T00%3A00%3A00')";
			this.getView().bindElement(sPath);
		}
	});
});