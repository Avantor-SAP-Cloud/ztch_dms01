sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ztch.ztchdms01v1',
            componentId: 'SpareTransfersList',
            contextPath: '/SpareTransfers'
        },
        CustomPageDefinitions
    );
});