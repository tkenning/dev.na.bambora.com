---
title: Batch Payment
layout: tutorial

summary: >
  Batch credit card, EFT and ACH transaction requests.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.batch_payment
  header_active: Guides

---

# Reporting on batched transactions

The Batch Report API allows you to query the status of your batches of funds transfer (EFT/ACH) transactions and the status of the individual transactions within those batches.

The API supports batched funds transfers only. Batched credit card transactions are processed as individual transactions and are queried through our Report API (as distinct from our Batch Report API).

[Question: How do you report on the status of a batch file? (for example, how do you get the processing date or if it has been canceled?)]

There are two distinct report types:

- BatchPaymentsEFT
- BatchPaymentsACH

The current version of the API is: 2.0

## Authorising requests

All requests to the Report API must be authorised. You can authorized a request by passing you merchant ID and API passcode in the body of the request with the `merchantId` and `passCode` parameters.

> You can generate an API key for the Report API in the [Member Area](https://web.na.bambora.com/). After logging in, select **administration**,  then **account settings**, and finally **order settings**.

> On the Order Settings page, you'll find the **Report*** section. Here you can set an API access code by clicking the **Generate New Code** button. Once you have a new code, click **Update** at the bottom of the page.

### Authorising as an ISV

If you have a partner account with us, you can authorise the request with the partner account's passcode and specify the sub-merchant account on which to report using the `rptMerchantId` parameter.

## Format

### Request

A report request is a HTTP request using the `application/xml` content type. All parameters are passed in the body of the request.

### Response

The response can be returned in either JSON, XMl, TSV, CSV, or XLS formats. The content type of the response is relative to the value of the `rptFormat` parameters in the request. The

JSON and XMl response object contains a "code" property" indicating the success of the request. This will be a number between 1 and 8, inclusive, where "1" indicates success. It also has a message property with a description of the code.

All successful response objects contain a list of objects containing information on the status of each transaction (or "record") in the batch.

The most important columns in the report are record object contains information on:

- **Status**: This refers to our validation of the format of the request. This should "Validated/Approved".
- **State**: This refers to the progress of valid transactions through the settlement process. This should be somewhere on a spectrum between "Importing" and "Complete".
- **Returns**: This field identifies completed transactions that were subsequently returned.

You can read a full list of properties in the API reference doc.

### Examples

#### EFT request
```bash
curl -X POST \
  https://api.na.bambora.com/scripts/reporting/report.aspx \
  -H 'content-type: application/xml' \
  -d '<?xml version="1.0" encoding="utf-8"?>
<request>
<rptVersion>2.0</rptVersion>
<serviceName>BatchPaymentsEFT</serviceName>
<merchantId>300204337</merchantId>
<sessionSource>external</sessionSource>
<passCode>07bFc2e51a7F4620B4CbEede714279Ec</passCode>
<rptFormat>JSON</rptFormat>
<rptFromDateTime>2012-03-03 00:00:00</rptFromDateTime>
<rptToDateTime>2019-03-03 23:59:59</rptToDateTime>
<rptFilterBy1>batch_id</rptFilterBy1>
<rptOperationType1>EQ</rptOperationType1>
<rptFilterValue1>10000020</rptFilterValue1>
</request>'
```

#### ACH request

TODO: Add ACH example request

#### EFT response

```bash
{
    "response": {
        "version": "1.0",
        "code": 1,
        "message": "Report generated",
        "records": {
            "total": 3
        },
        "record": [
            {
                "rowId": 1,
                "merchantId": 300202779,
                "batchId": 10000000,
                "transId": 1,
                "itemNumber": 1,
                "payeeName": "General Motors",
                "reference": "1000070001",
                "operationType": "C",
                "amount": 10000,
                "stateId": 2,
                "stateName": "Scheduled",
                "statusId": 1,
                "statusName": "Validated/Approved",
                "bankDescriptor": "",
                "messageId": "",
                "customerCode": "",
                "settlementDate": "2017-08-09",
                "returnedDate": "",
                "returnType": "",
                "eftId": 0
            },
            {
                "rowId": 2,
                "merchantId": 300202779,
                "batchId": 10000000,
                "transId": 2,
                "itemNumber": 2,
                "payeeName": "Paul Randall",
                "reference": "1000070002",
                "operationType": "C",
                "amount": 20000,
                "stateId": 2,
                "stateName": "Scheduled",
                "statusId": 1,
                "statusName": "Validated/Approved",
                "bankDescriptor": "",
                "messageId": "",
                "customerCode": "",
                "settlementDate": "2017-08-09",
                "returnedDate": "",
                "returnType": "",
                "eftId": 0
            }
        ]
    }
}
```

#### ACH response

TODO: Add ACH example response
