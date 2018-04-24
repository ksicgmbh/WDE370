sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/MessageToast"
], function(Control, MessageToast) {
	"use strict";

	var Toastr = Control.extend("mylib.custom.lib.Toastr", {
		metadata: {
			properties: {
				"writeLog": {
					type: "boolean",
					defaultValue: false
				},
				"message": {
					type: "string"
				}
			},
			
			events: {
				
			},
			
			renderer: {
				
			}
		}
	});
	
	Toastr.prototype.init = function() {
		console.log("Toastr.prototype.init called");	
	};   
	
	Toastr.prototype.setMessage = function(sValue) {
		this.setProperty("message", sValue);
	};

	Toastr.prototype.setWriteLog = function(bValue) {
		this.setProperty("writeLog", bValue);
	};
	
	Toastr.prototype.show = function() {
		MessageToast.show(this.getMessage() + " - WDE370");
	};
	
	return Toastr;
});