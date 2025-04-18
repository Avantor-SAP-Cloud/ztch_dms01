sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztchdms01.mngreqswithatts',
            componentId: 'SpareTransfersList',
            contextPath: '/SpareTransfers'
        },
        CustomPageDefinitions
    );
});