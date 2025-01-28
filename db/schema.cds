namespace ztch_dms_01;

using { cuid, managed } from '@sap/cds/common';

using { Attachments } from '@cap-js/sdm';

entity SpareTransfer : cuid, managed
{
    SparePart: String(20);
}

extend SpareTransfer with { attachments: Composition of many Attachments }