using { ztch_dms_01 as my } from '../db/schema.cds';

@path : '/service/ztch_dms_01'
service ztch_dms_01Srv
{
    @odata.draft.enabled
    entity SpareTransfers as
        projection on my.SpareTransfer;

}

annotate ztch_dms_01Srv with @requires :
[
    'authenticated-user'
];
