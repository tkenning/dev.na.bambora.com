---
title: Merchant Quickstart
layout: tutorial

summary: >
  You can use the sample credit cards below to trigger different responses from our gateway.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.merchant_quickstart
  header_active: Guides

---

# Test cards

You can use the sample credit cards below to trigger different responses from our gateway. You can use them on test accounts, but not on your live account.

### Approved

- 4030000010001234 - Visa. CVV 123
- 5100000010001004 - Mastercard. CVV 123
- 2223000048400011 - Mastercard (2-series BIN). CVV 123
- 371100001000131 - American Express. CVV 1234
- 6011500080009080 - DISCOVER. CVV 123

### Declined

- 4003050500040005 - Visa. CVV 123
- 5100000020002000 - Mastercard. CVV 123
- 342400001000180 - American Express. CVV 1234
- 6011000900901111 - DISCOVER. CVV 123

### 3D Secure

- 4123450131003312 - Visa (Verified by Visa). CVV 123.  Password 12345
- 5105105105105100 - Mastercard (SecureCode). CVV 123.  Password 12345
- 71449635398431 - American Express (SafeKey). CVV 123.  Password 12345

### Test amounts

- 4504481742333 - Visa. CVV 123
  - Approved for transactions less than $100
  - Declined for transactions higher than $100

### AVS
All billing addresses in the Canada or the United States will trigger an AVS response. You can trigger an approved AVS response on all test cards with the same street address and postal code:

- Street address - 1407 Graymalkin Lane
- Postal code - 111 111
