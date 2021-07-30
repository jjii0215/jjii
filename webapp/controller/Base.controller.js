sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("test02.controller.Base", {
			onInit: function () {

            },
            onItemSelect: function(oEvent){
                var userSelected = oEvent.getParameter("item").getKey();
                this.getOwnerComponent().getRouter().navTo(userSelected);
            },
           
            onSideButton: function(){
                this.getRouter().navTo("button");
            }
/*            
            onSideButton: function () {
            var oScrollContainer = sap.ui.getCore().byId("sideButton");
            var oCurrentView = oScrollContainer.getContent();
            if (!oCurrentView[0]) {
            var view = sap.ui.getCore().byId("button");
            if (view === undefined) {
                view = sap.ui.view({
                    type: sap.ui.core.mvc.ViewType.JS,
                    viewName: "test02.view.Button"
                });
            }
            oScrollContainer.addContent(view);
            }
            },*/

		});
	});
