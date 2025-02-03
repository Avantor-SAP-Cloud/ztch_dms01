sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchdms01/withdms/test/integration/FirstJourney',
		'ztchdms01/withdms/test/integration/pages/WithSpareTransfersList',
		'ztchdms01/withdms/test/integration/pages/WithSpareTransfersObjectPage'
    ],
    function(JourneyRunner, opaJourney, WithSpareTransfersList, WithSpareTransfersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchdms01/withdms') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWithSpareTransfersList: WithSpareTransfersList,
					onTheWithSpareTransfersObjectPage: WithSpareTransfersObjectPage
                }
            },
            opaJourney.run
        );
    }
);