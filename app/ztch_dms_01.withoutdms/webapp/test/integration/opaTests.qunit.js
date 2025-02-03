sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ztchdms01/withoutdms/test/integration/FirstJourney',
		'ztchdms01/withoutdms/test/integration/pages/WithoutSpareRequestsList',
		'ztchdms01/withoutdms/test/integration/pages/WithoutSpareRequestsObjectPage'
    ],
    function(JourneyRunner, opaJourney, WithoutSpareRequestsList, WithoutSpareRequestsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ztchdms01/withoutdms') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheWithoutSpareRequestsList: WithoutSpareRequestsList,
					onTheWithoutSpareRequestsObjectPage: WithoutSpareRequestsObjectPage
                }
            },
            opaJourney.run
        );
    }
);