sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ztch.ztchdms01v1',
            componentId: 'SpareTransfersObjectPage',
            contextPath: '/SpareTransfers'
        },
        CustomPageDefinitions
    );
});