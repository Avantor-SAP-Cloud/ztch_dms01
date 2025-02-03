sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ztchdms01.withdms',
            componentId: 'WithSpareTransfersObjectPage',
            contextPath: '/WithSpareTransfers'
        },
        CustomPageDefinitions
    );
});