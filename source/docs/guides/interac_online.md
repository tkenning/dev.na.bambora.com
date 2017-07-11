---
title: Interac Online
layout: tutorial

summary: >
    Interac Online is a transaction method available to Canadian merchants only. It allows customers to authenticate direct debits without sharing their debit card details with the merchant.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: false
  header_active: Guides
---

## Interac Online  
Interac Online is a transaction method available to Canadian merchants only. It allows customers to authenticate direct debits without sharing their debit card details with the merchant. An Interac payment flow is similar to the 3D Secure payment flow. It has three steps:

1. Submit an initial Interac payment request to us. You will receive an Interac response with redirect code.
2. Redirect the customer to the bank portal using redirect code received from initial request. Customer logs in to approve the payment and the bank redirects the customer back to your site with success/failure information.
3. Submit final payment request to us.

#### APIs

* Initial request: POST https://api.na.bambora.com/v1/payments
* Final request: POST https://api.na.bambora.com/v1/payments/{id}/continue

### Step 1: Submit initial request
Send a request to our Payments API to initiate the Interac process. The response from this request will provide you with the redirect HTML code that you render to the customer in order to redirect them to the banking portal.

```shell
POST /v1/payments

curl https://api.na.bambora.com/v1/payments
-H "Authorization: Passcode MzAwMjAwNTc4OjRCYU..."
-H "Content-Type: application/json"
-d '{
      "order_number":"MyOrderId-01234",
      "amount":100.00,
      "payment_method":"interac"     
    }'
```

#### Response
```
// Response object (JSON)
{
  merchant_data (string, max length 32): ,
  contents (string): ,
  links (JSON):
}
```

Before returning the response to your users HTML client, you will need to save the 'merchant_data' string in the users session. This value can be used as the {id} value when creating your 'continue' endpoint URL for the final request in step 3.

In the users browser client, the response will have a chunk of HTML. Display this to the customer to redirect them to the Interac login page. Here the customer will log onto their bank account and approve the payment. An approved or declined payment will forward the customer back to the Funded or Non-funded URLs (respectively) on your website.

### Step 2: Redirect request

If the transaction is cancelled or declined at any point, the bank forwards a response to the merchant’s Non-funded URL. Otherwise, the bank response is forwarded to the merchant’s Funded URL. The Funded and Non-funded URLs are values the merchant must provide to us before account activation. These values are stored internally by us. Contact our customer support team to set these URLs.

When you receive a redirect back from the bank site on your Funded URL you must gather the idebit_ variables they pass to use in the 'interac_response' objects properties shown for the final request in step 3.

```
InteracResponse {
  funded (string, max length 20): ,
  idebit_track2 (string, max length 256): ,
  idebit_isslang (string, max length 2): ,
  idebit_version (number, max length 1): ,
  idebit_issconf (string, max length 32): ,
  idebit_issname (string, max length 32): ,
  idebit_amount (number, max length 9): ,
  idebit_invoice (string, max length 20):
}
```

### Step 3: Submit final request

`{id}` = `merchant_data` from the first response (step 2).

Note: `idebit_amount` is in cents.

```shell
POST /v1/payments/{id}/continue
Content-Type: application/json

curl https://api.na.bambora.com/v1/payments/{id}/continue
-H "Authorization: Passcode MzAwMjAwNTc4OjRCYU..."
-H "Content-Type: application/json"
-d '{
      "payment_method": "interac",
      "interac_response": {
        "funded": "<string, max length 20>" ,
        "idebit_track2": "<string, max length 256)" ,
        "idebit_isslang": "<string, max length 2)" ,
        "idebit_version": "<number, max length 1)" ,
        "idebit_issconf": "<string, max length 32)" ,
        "idebit_issname": "<string, max length 32)" ,
        "idebit_amount": "<number, max length 9)" ,
        "idebit_invoice": "<string, max length 20)"
      }
    }'
```

#### Final Response
```
PaymentResponse {
  payment_method (string): ,
  id (number, max length 9): ,
  approved (number, max length 1): ,
  message_id (number, max length 3): ,
  message (string, max length 32): ,
  auth_code (string, max length 32): ,
  created (date): ,
  order_number (string, max length 30): ,
  type (string, max length 16): ,
  links (json):
}
```
