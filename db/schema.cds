namespace ztch_dms_01;

using { cuid, managed } from '@sap/cds/common';

using { Attachments } from '@cap-js/sdm';

entity SpareTransfers : cuid, managed
{
    SparePart: String(20);
}

entity SpareRequests : cuid, managed
{
    SparePart: String(20);
}

extend SpareTransfers with { attachments: Composition of many Attachments }