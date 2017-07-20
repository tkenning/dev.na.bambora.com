---
title: Masterpass
layout: tutorial

summary: >
    You can use Masterpass to integrate Mastercard’s digital payment service with Bambora’s payment gateway. 
    Masterpass is a digital payment service where consumers can store card information for Visa, Mastercard, 
    Discover, and American Express. Masterpass provides quick integration for merchants to accept payments 
    from these card holders.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: false
  header_active: Guides
---

# Masterpass

You can use Masterpass to integrate Mastercard’s digital payment service with Bambora’s payment gateway. 
Masterpass is a digital payment service where consumers can store card information for Visa, Mastercard, 
Discover, and American Express. Masterpass provides quick integration for merchants to accept payments 
from these card holders.

Masterpass leverages your existing environment because most websites already exist where Masterpass will 
be used. You add Masterpass buttons to existing pages and implement business and event logic using programming 
languages, tools, and techniques in the same way you currently do. This makes Masterpass flexible and imposes 
only a few requirements.

Masterpass is only available for Merchants processing with either First Data or TD Online Mart. 
Contact our support team (1-888-472-0811) for further information.

## Use your own external integration

If you have integrated and certified to Mastercard’s Masterpass API and are handling the redirect to the Masterpass Portal 
independently of Bambora’s internal integration, you will need to pass the Masterpass Wallet ID with your Payment REST API 
request to Bambora. This ensures that your transaction is picked up by the Card Issuer as being a Masterpass transaction.

The Masterpass Wallet ID must be sent with the transaction request using the following system variable:

| Attribute | Description |
| --- | --- |
| masterpass_wallet_id | The Masterpass code related to the wallet that the card information was sent from. |

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
		"number": "5100000010001004",
		"expiry_month": "12",
		"expiry_year": "18",
		"masterpass_wallet_id": "101"
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
        "card_type": "MC",
        "last_four": "1004",
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