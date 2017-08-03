---
title: Batch Upload Reference
layout: tutorial

summary: >
  A full API reference for Batch Upload.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.batch_payment
  header_active: References

---

# Custom Checkout Reference

URL: https://api.na.bambora.com/v1/batchpayments

## Request parameters

- process_now - Overrides process_date parameter and processes transactions on receipt. Credit card transactions only.
  - 1 – Process immediately. Any value passed in the process_date field is ignored.
  - 0 – Transactions are processed on the indicated process_date.
- process_date - The date the transactions starts processing. Format YYYYMMDD.
- sub_merchant_id - The merchant account on which to process the transactions. Required only if request is authorised by a partner account.
- addendum - A note associated with the batch file.

**no max string lengths listed***


## Response object

### Success

```javascript
{
    "code": 1,
    "message": "File successfully received",
    "batch_id": 10000000,
    "process_date": "20170721",
    "process_time_zone": "GMT-08:00"
}
```

### Error

```javascript
{
    "code": 1,
    "category": 1,
    "message": "Unexpected error - Contact support",
    "reference": null
}
```

## Response Codes

Code | Message
-----|-----
1    | File successfully received
2    | Secure connection required
4    | Authentication failure
5    | Insufficient user permissions
7    | Invalid processing date
8    | Service is busy importing another file. Try again later
9    | File greater than maximum allowable size
10   | Unexpected error - Contact support
11   | Multipart message file content is missing or invalid
14   | Invalid file type
15   | Content type must be set to multipart/form-data
16   | Missing or invalid parameter content
17   | Invalid multipart message structure
18   | Invalid merchant\_id for sub-merchant
19   | Addendum contains invalid characters or too long
20   | Action requires administrator access
21   | Transmitting merchant account is inactive
22   | Submitted sub-merchant account is inactive
23   | Transmitting merchant account is invalid  

## Response Categories
Category | Meaning
---------|-----
1        | Technical Problem
2        | Input Data Problem
3        | Business Rule Violation

## Response parameters
