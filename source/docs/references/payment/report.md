---
title: Batch Upload Reference
layout: tutorial

summary: >
  A full API reference for Batch Upload.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.payment
  header_active: References

---

# Report

## Get Transactions

```shell
Definition
GET /v1/payments HTTP/1.1

Request
curl https://api.na.bambora.com/v1/payments/{transactionId} \
-H "Authorization: Passcode MzAwMjAwNTc4OjRCYUQ4MkQ5MTk3YjRjYzRiNzBhMjIxOTExZUU5Zjcw" \
```


With the Reporting API you can access basic summary order information using simple search functions.

Each search can be performed using a date range and an optional number of search criteria, to narrow down the search.

Note: Make sure you are using the Reporting API key gathered from the member area in your account.

### Parameters
There are several parameters that are required to perform a search:

* **Date Range:** The start and end dates that you want to search between.
* **Paging rows:** If you are searching for possibly a lot of records, these parameters let you page the results. The starting row value must be 1 or greater. If you are just looking to retrieve one row, set the start row to 1 and the end row to 2.
* **Criteria:** (Optional) You can narrow down your search by using specific search criteria

#### Search Criteria
The search criteria require 3 parameters: field, operator, and value. You can supply as many criteria as you wish and each Criteria will be ANDed together eg. CriteriaA AND CriteriaB AND CriteriaC

##### 1. Field
The criteria operate on over 20 different fields of a transaction record. Each field is specified by a numeric value, in order starting from 1. The SDKs will handle this mapping for you, but if you are using REST directly then you will want to take note of this table:

| Index | Field Name        | Parameters        |
| ----- | ----------------- | ----------------- |
| 1     | TransactionId     | Unique transaction identifier |
| 2     | Amount            | Amount in dollars to two decimal places. |
| 3     | MaskedCardNumber  | ? What you you search on here? Is this 123456******1234? |
| 4     | CardOwner         | Name on Card. |
| 5     | OrderNumber       | Order number. |
| 6     | IPAddress         | ? IP of end user, or IP of web server that created a payment?|
| 7     | AuthorizationCode | ? |
| 8     | TransType         | P (payment), PA (pre auth), R (return), VR (void return), PAC (pre auth completion), CB (charge back) |
| 9     | CardType          | VI (Visa), MC (MasterCard), AM (American Express),
                              DI (Diners Club), NN (Discover), JB (JCB),
                              NW (NextWave), SE (Sears) |
| 10    | Response          | 1 (approved) , 2 (declined) |
| 11    | BillingName       | Billing name. |
| 12    | BillingEmail      | Billing email. |
| 13    | BillingPhone      | Billing phone number. |
| 14    | ProcessedBy       | ? Processor? (C3, HV - no idea) |
| 15    | Ref1              | Custom reference field. |
| 16    | Ref2              | Custom reference field. |
| 17    | Ref3              | Custom reference field. |
| 18    | Ref4              | Custom reference field. |
| 19    | Ref5              | Custom reference field. |
| 20    | ProductName       | ? https://confluence.beanstream.com/display/DVL/Reporting+Api+Service+Guide+1.0 |
| 21    | ProductID         | ? |
| 22    | CustCode          | Payment Profile ID |
| 23    | IDAdjustmentTo    | ? Value of transaction after adjustment? |
| 24    | IDAdjustedBy      | ? MID? User? |

##### 2. Operator
There are 6 operators available. They must be encoded:

| Operator   | Encoded      |
| ---------- | ------------ |
| =          | %3D          |
| <          | %3C          |
| >          | %3E          |
| <=         | %3C%3D       |
| >=         | %3E%3D       |
| Start With | START%20WITH |


##### 3. Value
This is the value you want to match against.

## Analyze Payment Errors
You can read the errors returned by the API [here](/docs/references/payment_APIs).
