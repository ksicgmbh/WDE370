/* global moment:true */
/* global async:true */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/sap/trainingWDE370WDFMoment/libs/moment",
	"com/sap/trainingWDE370WDFMoment/libs/async"
], function(Controller, JSONModel, momentjs, asyncjs) {
	"use strict";

	return Controller.extend("com.sap.trainingWDE370WDFMoment.controller.Main", {

		onInit: function() {

			var oDay = moment().add(14, 'days');
			var sDayDefault = oDay.format("D, dddd");
			var sDayDE = oDay.locale('de').format('dddd');

			var oDayOne = moment().add(-1, "quarters");
			var sDayEN = oDayOne.locale('en').format('dddd, MMMM Do YYYY, h:mm:ss a');

			var oData = {
				dayDefault: sDayDefault,
				dayDE: sDayDE,
				dayEN: sDayEN
			};

			var oModel = new JSONModel();
			oModel.setData(oData);
			this.getView().setModel(oModel);

			this._async();
		},

		_async: function() {
			var obj = {
				dev: "/dev.json",
				test: "/test.json",
				prod: "/prod.json"
			};
			var configs = {};
			
			var aTexts = [];
			async.forEachOf(obj, function(value, key, callback) {
				var sText = "key: " + key + ", value: " + value;
				aTexts.push(sText); 
				callback(null);
			}, function(err) {
				if (err) {
					console.error(err.message);
					return;
				}
				console.log("Result: " + aTexts);
				// configs is now a map of JSON data
				
			});
		}
	});
});