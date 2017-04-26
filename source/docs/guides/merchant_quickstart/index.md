---
title: Merchant Quickstart
layout: tutorial

summary: >
  Learn how to create, configure, and test your merchant account with our Merchant APIs. 

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.merchant_quickstart
  header_active: Guides

---

# Merchant Quickstart

Welcome to our setup and configuration guide. Here you will learn how to  create, configure, and test your merchant account with our Merchant APIs. 


## 1. Create a test account

You can create a test merchant account [here](/docs/forms/create_test_merchant_account).

## 2. Generate Passcodes

You will need a Merchant ID (MID) and a passcode per API that you wish to test. Your MID can be found in the top-right corner of the screen after logging in to the <a href="https://web.na.bambora.com" target="_blank">Back Office</a>.

There are different passcodes for each of our five APIs found in our Back Office. 

If the 'API Access Passcode' field is empty, you can generate a new passcode by clicking the 'Generate New Code' button beneath the passcode, and then scrolling to the bottom of the screen and clicking the 'Update' button.

| Passcode                              | Navigate To |
| ------------------------------------- | ------------- |
| Payments                              | `Administration > Account Settings > Order Settings` in the sidebar, then scroll to `Payment Gateway > Security/Authentication` |
| Recurring Billing                     | `Administration > Account Settings > Order Settings` in the sidebar, then scroll to `Recurring Billing` |
| Reporting                             | `Administration > Account Settings > Order Settings` in the sidebar, then scroll to `Reporting` |
| Batch File Upload (ACH/EFT Payments)  | `Administration > Account Settings > Order Settings` in the sidebar, then scroll to `Batch File Upload` |
| Payment Profile                       | `Configuration > Payment Profile Configuration` in the sidebar, then scroll to `Security Settings` |

## 3. Authentication
Now that you have your Merchant ID and passcodes, you can combine them to create your required Authorization header. The format for a passcode Authorization header is as follows:

```
Authorization: Passcode Base64Encoded(merchant_id:passcode)
```

You can combine and encode the passcodes in the form [here](/docs/forms/encode_api_passcode).
