sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/library' // library dependency
	],  function(jQuery, library) {

		"use strict";

		sap.ui.getCore().initLibrary({
			name : "mylib.custom.lib",
			noLibraryCSS: true,
			version: "1.0.0",
			dependencies : ["sap.ui.core", "sap.m"],
			types: [],
			interfaces: [],
			controls: [
				"mylib.custom.lib.Toastr"
			],
			elements: []
		});

		return mylib.custom.lib;

}, /* bExport= */ false);