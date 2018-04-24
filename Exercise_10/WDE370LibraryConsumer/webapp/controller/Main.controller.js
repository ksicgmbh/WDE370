sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"mylib/custom/lib/Toastr"
], function(Controller, Toastr) {
	"use strict";

	return Controller.extend("com.sap.trainingWDE370LibraryConsumer.controller.Main", {
		
		onButtonPress: function() {
			var oToastr = new Toastr();
			oToastr.setMessage("Hello WDE370");
			oToastr.show();
		}
	});
});