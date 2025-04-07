sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchdms01/mngreqswithatts/test/integration/FirstJourney',
		'ztchdms01/mngreqswithatts/test/integration/pages/SpareTransfersList',
		'ztchdms01/mngreqswithatts/test/integration/pages/SpareTransfersObjectPage'
    ],
    function(JourneyRunner, opaJourney, SpareTransfersList, SpareTransfersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchdms01/mngreqswithatts') + '/index.html'
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