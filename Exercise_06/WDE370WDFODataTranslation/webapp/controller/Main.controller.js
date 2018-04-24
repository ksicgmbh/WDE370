sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sap.training.WDE370WDFODataTranslation.controller.Main", {
		
		onInit: function() {
			this._executeBinding();
		},
		
		_executeBinding: function() {
			var sPath = "/FlightSet(Carrid='AA',Connid='0017',Fldate=datetime'2017-11-02T00%3A00%3A00')";
			this.getView().bindElement(sPath);
		}
	});
});