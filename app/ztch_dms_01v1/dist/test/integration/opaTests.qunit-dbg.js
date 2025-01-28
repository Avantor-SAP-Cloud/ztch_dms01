sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztch/ztchdms01v1/test/integration/FirstJourney',
		'ztch/ztchdms01v1/test/integration/pages/SpareTransfersList',
		'ztch/ztchdms01v1/test/integration/pages/SpareTransfersObjectPage'
    ],
    function(JourneyRunner, opaJourney, SpareTransfersList, SpareTransfersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztch/ztchdms01v1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSpareTransfersList: SpareTransfersList,
					onTheSpareTransfersObjectPage: SpareTransfersObjectPage
                }
            },
            opaJourney.run
        );
    }
);