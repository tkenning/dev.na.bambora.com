---
title: Partner Quickstart
layout: tutorial

summary: >
    Learn how to request your partner account, how to test the Onboarding API, and authenticate on behalf of sub-merchants.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.partner_quickstart
  header_active: Guides
---

# Partner Quickstart

Welcome to our partner setup guide. Learn how to request your partner account, and how to test the Onboarding API.

This guide will show you how to create and configure a test account.

This guide builds on the [Merchant Quickstart Guide](/docs/guides/merchant_quickstart/).

## 1. Request a partner account

You can request a partner account [here](/docs/forms/request_partner_account). You will be emailed an API key for our sandbox environment.

## 2. Authentication for Sub-Merchant
Partners can make calls to our Payment APIs on behalf of their sub-merchants if they are configured to do so. You can request this to be enabled.

You will need an Authorization header as described in the [Merchant Quickstart Guide](/docs/guides/merchant_quickstart/):

```
Authorization: Passcode Base64Encoded(your_partner_merchant_id:passcode)
```
 
To process on behalf of a sub-merchant you will need a header with the merchant Id of your sub-merchant:

```
Sub-Merchant-Id: your_sub_merchant_id
```