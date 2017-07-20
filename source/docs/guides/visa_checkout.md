---
title: Visa Checkout
layout: tutorial

summary: >
    You can use Visa Checkout to integrate Visa’s digital payment service with Bambora’s payment gateway. 
    Visa Checkout is a digital payment service where consumers can store card information for Visa, MasterCard, 
    Discover, and American Express. Visa Checkout provides quick integration for merchants to accept payments 
    from these card holders.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: false
  header_active: Guides
---

# Visa Checkout

You can use Visa Checkout to integrate Visa’s digital payment service with Bambora’s payment gateway. 
Visa Checkout is a digital payment service where consumers can store card information for Visa, MasterCard, 
Discover, and American Express. Visa Checkout provides quick integration for merchants to accept payments 
from these card holders.

Visa Checkout leverages your existing environment because most websites already exist where Visa Checkout will 
be used. You add Visa Checkout buttons to existing pages and implement business and event logic using programming 
languages, tools, and techniques in the same way you currently do. This makes Visa Checkout flexible and imposes 
only a few requirements.

Visa Checkout is only available for Merchants processing TD transactions. You need a merchant account with the 
Visa Checkout option enabled. Contact our support team (1-888-472-0811) to activate the service before integrating.

## Use your own external integration

If you have integrated and certified to Visa’s Visa Checkout API and are handling the redirect to the Visa Checkout Portal 
independently of Bambora’s internal integration, you will need to pass the Visa Checkout Call ID with your Payment REST API 
request to Bambora. This ensures that your transaction is picked up by the Card Issuer as being a Visa Checkout transaction.

Note: This option must be enabled by us. Contact support if you want to use this method.

The Visa Checkout Call ID must be sent with the transaction request using the following system variable:

| Attribute | Description |
| --- | --- |
| visa_checkout_call_id | The payment request ID returned back from Visa Checkout. |

```shell
Definition
POST /v1/payments HTTP/1.1

Request
curl https://api.na.bambora.com/v1/payments \
-H "Authorization: Passcode MzAwMjAwNTc4OjRCYUQ4MkQ5MTk3YjRjYzRiNzBhMjIxOTExZUU5Zjcw" \
-H "Content-Type: application/json" \
-d '{
    "payment_method":"card",
    "order_number":"MyOrderId000011223344",
    "amount":15.99,
    "card":{
        "name":"John Doe",
		"number": "4030000010001234",
		"expiry_month": "12",
		"expiry_year": "18",
		"visa_checkout_call_id": "8102778486678528301"
    }
}'

Response

{
    "id": "10000026",
    "approved": "1",
    "message_id": "1",
    "message": "Approved",
    "auth_code": "TEST",
    "created": "2017-02-23T17:26:26",
    "order_number": "MyOrderId000011223344",
    "type": "P",
    "payment_method": "CC",
    "amount": 15.99,
    "custom": {
        "ref1": "",
        "ref2": "",
        "ref3": "",
        "ref4": "",
        "ref5": ""
    },
    "card": {
        "card_type": "VI",
        "last_four": "1234",
        "address_match": 0,
        "postal_result": 0,
        "cvd_result": 1,
	    "eci": 7
    },
  "links": [
	    {
		    "rel": "void",
		    "href": "https://api.na.bambora.com/api/v1/payments/10000026/void",
		    "method": "POST"
	    },
	    {
		    "rel": "return",
		    "href": "https://api.na.bambora.com/api/v1/payments/10000026/returns",
		    "method": "POST"
	    }
  ]
}
```