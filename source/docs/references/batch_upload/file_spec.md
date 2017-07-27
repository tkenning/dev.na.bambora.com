---
title: Batch Upload Reference
layout: tutorial

summary: >
  A full API reference for Batch Upload.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.batch_upload
  header_active: References

---

# Custom Checkout Reference

## Format of batched data

The API expects a single CSV file with one transaction per row. It does not expect a header row.

### Credit card

For batches of credit card transactions, the API expects the following columns:

- **Transaction type** - The type of transaction.
  - C - Credit card
- **Transaction type**
  - P – Purchase
  - R – Return
  - PA – Pre-authorization
  - PAC – Pre auth completion
  - VP – Void Purchase
  - VR – Void Return
- **Transaction ID** - The ID of the transaction to be adjusted. Leave this field blank if the transaction type is "P" or "PA".
- **Card Number** - The Card number. Leave this field blank if the Transaction ID is populated. Max length: 20 digits.
- **Expiry** - The card expiry date formatted as **MMYY**. If an Adjustment Id is included, this field is optional.
- **Amount** - Transaction amount in pennies. Max length: 9 digits.
- **Reference** - An optional reference number of up to 32 alphanumeric chars.
- **Card Owner** - Name of card owner. Max length: 32 characters.
- **Email** - Max length: 64 characters. Required if using the email receipts feature on your account.
- **Recurring** - Flag to indicate the the bank that you do regular business with the customer. This will not create a  transaction that recurs.
  - 1 – Recurring transaction
  - 0 – Not a recurring transaction
- **Dynamic descriptor** - By default the Bambora merchant company name will show on your customer's bank statement. You can override this default by populating the Dynamic Descriptor field.
- **Customer code** - The 32-character customer code located in the Payment Profile. Do not populate bank account fields in the file when processing against a Payment Profile.

### Canadian funds transfer (EFT)

For batches of EFT transactions, the API expects the following columns:

- **Transaction type** - The type of transaction.
  - E - EFT
- **Transaction type**
  - C – Credit recipient bank accounts
  - D – Debit an outside bank account and depositing funds into your own
- **Financial institution number** - The 3 digit financial institution number
- **Bank transit number** - The 5 digit bank transit number
- **Account number** - The 5-12 digit account number
- **Amount** - Transaction amount in pennies
- **Reference number** - An optional reference number of up to 19 digits. If you don't want a reference number, enter "0" (zero).
- **Recipient name** - Full name of the bank account holder
- **Customer code** - The 32-character customer code located in the Payment Profile. Do not populate bank account fields in the file when processing against a Payment Profile.
- **Dynamic descriptor** - By default the Bambora merchant company name will show on your customer's bank statement. You can override this default by populating the Dynamic Descriptor field.

### Canadian finds transfer (ACH)

For batches of ACH transactions, the API expects the following columns:

- **Transaction type** - The type of transaction.
  - A - ACH
- **Transaction type**
  - C – Credit recipient bank accounts
  - D – Debit an outside bank account and depositing funds into your own
- **Transit Routing Number** - The 9-digit transit number
- **Account Number** - The 5-15 digit account number
- **Account Code** - Designates the type of bank account
  - PC – Personal Checking
  - PS – Personal Savings
  - CC – Corporate Checking
  - CS – Corporate Savings
- **Amount** - Transaction amount in pennies
- **Reference number** - An optional reference number of up to 19 digits. If you don't want a reference number, enter "0" (zero).
- **Recipient Name** - Full name of the bank account holder
- **Customer Code** - The 32-character customer code located in the Payment Profile. Do not populate bank account fields in the file when processing against a Payment Profile.
- **Dynamic Descriptor** - By default the Bambora merchant company name will show on your customer's bank statement. You can override this default by populating the Dynamic Descriptor field.
- **Standard Entry Code** - Leave black unless your account has SEC code permissions enabled.
- **Entry Detail Addenda Record** - Leave black unless your account has SEC code permissions enabled.
