sap.ui.define(["sap/ui/test/opaQunit"],function(e){"use strict";var i={run:function(){QUnit.module("First journey");e("Start application",function(e,i,t){e.iStartMyApp();t.onTheWithSpareTransfersList.iSeeThisPage()});e("Navigate to ObjectPage",function(e,i,t){i.onTheWithSpareTransfersList.onFilterBar().iExecuteSearch();t.onTheWithSpareTransfersList.onTable().iCheckRows();i.onTheWithSpareTransfersList.onTable().iPressRow(0);t.onTheWithSpareTransfersObjectPage.iSeeThisPage()});e("Teardown",function(e,i,t){e.iTearDownMyApp()})}};return i});
//# sourceMappingURL=FirstJourney.js.map