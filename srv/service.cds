using { ztch_dms_01 as my } from '../db/schema.cds';

@path : '/service/ztch_dms_01'
service ztch_dms_01Srv
{
    @odata.draft.enabled
    entity WithSpareTransfers as
        projection on my.SpareTransfers;

    @odata.draft.enabled
    entity WithoutSpareRequests as 
        projection on my.SpareRequests;    

}

annotate ztch_dms_01Srv with @requires :
[
    'authenticated-user'
];
