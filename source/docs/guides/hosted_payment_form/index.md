---
title: Hosted Payment Form
layout: tutorial

summary: The Payment Form provides you with an easy-to-use method to integrate payment processing into your site.


navigation: 
    header: na.tocs.na_nav_header
    footer: na.tocs.na_nav_footer
    toc: in-page
    header_active: guides 
---

# Hosted Payment Form

## Overview

The Payment Form provides you with an easy-to-use method to integrate payment processing onto your site.

### Limitations

**Fees, taxes, and product info cannot be calculated** – Calculations are outside the scope of the Hosted Payment Form. The form cannot calculate inventory availability, taxes, or shipping fees, and so on. These elements must be calculated before redirecting to the Payment Form. 

**Customization Limits** – Although some customization can be done, custom data fields cannot be added to the standard hosted payment form. If custom data is required in transaction reporting, it is best to capture this information on the Merchant’s website and pass it with the redirect link using the ref variables.

### Additional Payment Options 

In addition to the existing payment options, your customers can use Visa Checkout and MasterPass to store card information for Visa, MasterCard, Discover, and American Express. This provides quick integration for merchants to accept payments from these card holders.

## Configuration 

You can configure the Payment Form fields so that specific sections of information are included or omitted based on the information you want to capture.

You can also configure section titles and the HTML for the page Header and Footer to make this Payment form look more like your website.

### To configure the Payment Form 

1. Log in to the [Online Member Area](https://www.beanstream.com/admin/sDefault.asp) and click **configuration** > **payment form**. 
2. Modify the section titles (leave blank if you don't want a title).
3. Configure the Payment Form sections. The fields in the table below show the different sections of the Payment Form that you can include or omit, to capture different types of information. It also shows the option to control the transaction type that you will process by default.
4. Configure the Form Style options. You can use CheckoutTheme or the legacy styling features. 
5. Before making any changes permanent, always click **View Preview**. If you don't like your changes, you can click **Cancel Changes** to go back to the last saved change.
6. When you are ready, click **Update Live**. 


### Payment Form Sections

| Payment Form Sections | Description |
|---------|----------------|
| Transaction Type | Select the default type of transaction processing: **Purchase** or **Pre-Authorization**. Regardless of this setting, you can also control the transaction type when building the payment form link |
| Include Billing Address | Select **Yes** so the customer can enter a billing address. This option only appears if the **Billing Address Optional** setting is selected in the Order Settings on your account. Regardless of this setting, you can also include billing address information when building the payment form link. If this is done when the **No** option is selected, the billing address does not appear on the form itself but is included in the transaction reporting. |
| Include Shipping Address | Select **Yes** so the customer can enter a separate shipping address. Regardless of this setting, you can also include shipping address information when building the payment form link. If this is done when the **No** option is selected, the shipping address does not appear on the form itself but is included in the transaction reporting. |
| Allow Price Modification | Select **Yes** so customers can enter or change transaction totals (this works well for donations). When you select **No**, the merchant (you) must pre-populate the amount when building the payment form link. |
| Include Invoice Order # | Select **Yes** so customers can enter specific invoice/order numbers. When you select **No**, the merchant (you) must pre-populate the order number when building the payment form link. |
| Include Card Owner | 	Select **Yes** so the customer can enter a Card Owner Name. This option will only appear if the **Card owner name optional** setting is selected in the Order Settings on your account. Regardless of this setting, you can also include the Card Owner Name when building the payment form link. If this is done when the **No** option is selected, the Card Owner Name does not appear on the form itself but is included in the transaction reporting. | 
| Include Card Selection | Select **Yes** to display a drop-down menu for available credit cards. **Note:** If **No** is selected, this will not cause any problems, as our system uses the card number itself, and not this field, to determine the card type. | 
| Include Comments | Select **No** to remove the customer comments box from your Payment Form. Regardless of this setting, you can also include **Comments** information when building the payment form link. If this is done when the **No** option is selected, the **Comments** box does not appear on the form itself but is included in the transaction reporting. |

## CheckoutTheme 

CheckoutTheme styles the Hosted Payment Form to have a modern, responsive, and accessible UI. You can Add CheckoutTheme to Payment Form to take advantage of the updated design and accessibility features.

### Add to Payment Form

To add checkout theme to the payment form navigate to the Payment Form settings by logging into to the [Member Area](https://www.beanstream.com/admin/sDefault.asp) and then clicking **configuration** > **payment form**, in the left hand menu.

Change the HTML code in the **Page Header** text area to the following:

```html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">

<title> { Merchant Name } - Payment Form </title> 

<link rel="stylesheet" type="text/css" href="libs.na.bambora.com/bambora-ui/ui.bambora.1.1.0.css">
<link rel="stylesheet" type="text/css" href="libs.na.bambora.com/checkoutTheme/v2.0.0/style.css">
</head>

<body>
<script src="libs.na.bambora.com/checkoutTheme/v2.0.0/checkoutTheme.min.js"></script>  	
<script> CheckoutTheme.init(); </script>
```

And change the HTML code in the **Page Footer** text area to: 

```html
</body>
</html>
```

Now click **View Preview** and you'll see the payment form with the updated styling. 

### Changing the colors 

By default, CheckoutTheme styles the form with purple accents. You can change this to match your own website by including some CSS styles in the **Page Header** text area. 

Add the following inside the `<head>` tag in the **Page Header**: 

```html
<style>
/* Edit the hex values here to change the colors of the Hosted Payment Form */

/* Spinner color */
.spinner .spinner-left:after, .spinner .spinner-right:after {
    border-color: #067aed !important;
}

/* Text input and select focus color */
input:not(.btn):focus, select:focus, textarea:focus {
    border-color: #067aed !important;
}

div.checkbox input[type=checkbox]:checked + label:before {
    border-color: #067aed !important; 
}

/* checkbox hover border color */
div.checkbox:hover input[type=checkbox]:not(:disabled) + label:before {
    border-color: #067aed !important;
}

/* checkbox checked background color */
div.checkbox input[type=checkbox]:checked + label:before {
    background-color: #067aed !important;
}

/* Purchase button background color */
.btn:not(.btn-secondary) {
    background-color: #067aed !important;
}

/* Purchase button hover, active, focus background color */
.btn:not(.btn-secondary):hover, .btn:not(.btn-secondary):active, 
.btn:not(.btn-secondary):focus {
    background-color: #04498e !important;
}
</style>
```

You can update the hex colors above to choose the primary color of the Payment Form. Make sure to keep the `!important` rule after the color definitions. 

The first six styles should use the primary color you desire for the form and the last one should be a darker version that is used when hovering or clicking on buttons. 

You can add additional styling information if you wish inside the style tags.

### Legacy styling

If you wish, you can style the form using the older **Form Style Options** in the configuration. Changes here will only be visible if not using **CheckoutTheme**.

## The Payment Form Link 

Customers can access your payment form using a Querystring API request link. The link has two important parts: the **Web Service URL** and a number of **Variable/Value pairs**.

For the Hosted Payment Form, the URL is: [https://www.beanstream.com/scripts/payment/payment.asp](https://www.beanstream.com/scripts/payment/payment.asp). The variables are how all customer card and order data is transmitted to our system. An example variable is `trnOrderNumber=12345TEST`. Separate multiple variables with ampersands (`&`). A full Hosted Payment Form link looks like: 

```
https://www.beanstream.com/scripts/payment/payment.asp?merchant_id=123456789&trnAmount=19.99&trnOrderNumber=12345TEST
```

To create the payment form link, you can build it manually or use our [Hosted Payment Form Link Builder](/docs/forms/link_builder/).

### Payment Link Variables 

The only required variable/value pair is your merchant ID in this format: `merchant_id=[your merchant ID]`. You can add additional variables to pre-populate other fields in the form and secure the information form data. 

#### Card Information Variables 

| Variable name | Requirements | Description |
|---------------|--------------|-------------|
| trnAmount | Up to 10 numeric characters (except the decimal) | This is how you determine the total amount the form will charge. Decimal format 19.45 | 
| trnOrderNumber | 	Up to 30 alphanumeric characters, longer numbers are truncated to 30 characters | Invoice/Order number that you choose. This field is mandatory if **Include Invoice order number** is set to **No**. | 
| trnType | 2 alpha characters | Indicates the Transaction Type. **P - Purchase**, **PA - Pre-Auth**. If not supplied, the default is the Transaction Type set on the **Payment Settings** screen (under **configuration** > **payment form**). |
| trnCardOwner | 4-64 alphanumeric characters (\*\*Spaces are allowed) | Name of the card owner exactly as it shows on the credit card. | 

<small>**When creating link information, the space must be replaced with the + character. For example, Sam+Shopper</small>

#### Billing Information Variables 

| Variable name | Requirements | Description | 
|---------------|--------------|-------------|
| ordName | Up to 64 alphanumeric characters | Billing contact’s name. |
| ordEmailAddress | Up to 64 characters. Must be a valid email format: none@none.com | Billing contact’s email address. Automatic Email Receipts are sent to this email address. | 
| ordAddress1 | 1-32 alphanumeric characters (\*\*spaces are allowed) | Primary street address associated with the credit card. This address is used for Address Verification Service (AVS) if the card issuer participates in the AVS program. | 
| ordAddress2 | 1-32 alphanumeric characters (\*\*spaces are allowed) | Additional billing address field. | 
| ordCity | 1-32 alphanumeric characters (\*\*spaces are allowed) | City associated with the bill address for the credit card. AVS does not validate this information. | 
| ordProvince | 2 character code based on the ISO State/Province Code Chart | Province/State associated with the billing address for the credit card. AVS does not validate this information. | 
| ordPostalCode | 1-16 alphanumeric characters (\*\*Spaces are allowed) | Postal/Zip code associated with the billing address for the credit card. This code **is** used for AVS if the card issuer participates in the AVS program. | 
| ordCountry | 2 character code based on the ISO Country Codes Chart | Country associated with the billing address for the credit card. AVS does not validate this information. | 

<small>** When creating link information, the space must be replaced with the + character. For example, Main+Street</small>

#### Shipping Information Variables 

| Variable name | Requirements | Description | 
|---------------|--------------|-------------|
| shipName | Up to 64 alphanumeric characters | Shipping contact’s name. | 
| shipEmailAddress | Up to 64 alphanumeric characters. Must be a valid email format: none@none.com | Shipping contact’s email address. | 
| shipPhoneNumber | 1-32 alphanumeric characters (\*\*Spaces are allowed) | Shipping contact's phone number. | 
| shipAddress1 | 1-32 alphanumeric characters (\*\*Spaces are allowed) | Shipping address. | 
| shipAddress2 | 1-32 alphanumeric characters (\*\*Spaces are allowed) | Additional Shipping address field for long addresses. | 
| shipCity | 1-32 alphanumeric characters (\*\*Spaces are allowed) | Shipping address city. | 
| shipProvince | 2 character code based on the ISO State/Province Code Chart | Shipping Province/State ID. | 
| shipPostalCode | 1-16 alphanumeric characters (\*\*Spaces are allowed) | Shipping address postal/zip code. | 
| shipCountry | 2 character code based on the ISO Country Codes Chart | Shipping address country ID. | 

<small>** When creating link information, the space must be replaced with the + character. For example, Main+Street</small>

#### Additional Custom Variables 

| Variable name | Requirements | Description |
|---------------|--------------|-------------|
| approvedPage | Up to 128 alphanumeric characters. Special characters must be URL Encoded. | *Optional*. Enter a URL for the **Transaction Approved** page. We send a customer to this URL if their transaction request is processed without problems. If no value is passed, we use the URL from the **Order settings**. | 
| declinedPage | Up to 128 alphanumeric characters. Special characters must be URL Encoded. | Optional. Enter a URL for the **Transaction Declined** page. We send a customer to this URL if their transaction request is denied. If no value is passed, we use the URL from the **Order settings**. | 
| refn | Up to 256 alphanumeric characters | Up to 5 reference fields can be passed with the order, to contain any site-specific information you need to maintain during the order process, for example, shopper IDs, account numbers, order numbers. Number these fields from 1 to 5 in this format: ref1, ref2, ref3, ref4, and ref5. Maximum 256 alphanumeric characters. When this information is sent to the processing script, it is stored in our database with transaction details, and returned back to your site unmodified. |
hashValue | Any | Mandatory if you activated the hash validation option located in **Order Settings**. The hashValue is used as a security measure to ensure the transaction post to the API was not modified. The value is generated by appending the hash key to the payment form request query string and using a hash algorithm (either MD5 or SHA-1) on the resulting string. **See below for more information.** |
| hashExpiry | 12 numeric characters. Format: YYYYMMDDHHMM (PST 24-hour clock) | Optional field to indicate the hashed request has an expiry. This parameter is only active if used with hash validation. The system validates that the request was received earlier than the date and time value stored in this field. If the session has expired the request is rejected. This value must be passed as the current system time in the Pacific time zone. Format: YYYYMMDDHHMM. For example June 18, 2015 2:34 PM would be submitted as 201506181434 | 
| trnLanguage | 3 alpha characters | **eng** – English, **fre** – French. Payment form language. Defaults to English if variable is not entered. Only English and French are available. |

### Hash Validation

The hash value is a number generated from a string of text that is smaller than the text itself. Hash values are used to make sure the transmitted message is not tampered with.

There are two benefits to using hash validation with your payment form: preventing someone from modifying the data in your payment form link and preventing unauthorized transaction attempts against your merchant account.

#### Create a hashed validation form for your string 

##### Enable the Hash Validation Setting 

1. Log into your account.
2. On the menu, click **administration** > **account settings** > **order settings**.
3. Scroll down, and in the Payment Gateway section, under Security/Authentication, select the check box **Require hash validation on all Payment Gateway transaction requests**.
4. Enter a **Hash Key**. It must be at least 8 characters, it doesn't matter what those characters are. **Note**: If you are using a programming language like PHP to create your redirect link, it may already have a hash function built into it—use this to Hash the input variables instead of the manual Hash generator. You can then skip this step. 
5. Select (and make a note of) the type of **Hash algorithm** you are using (MD5 or SHA-1).
6. At the bottom of the page, click **Update**.
7. A confirmation box opens at the top of the browser window. Click **OK**.

##### Encrypt the Payment Form link

After Hash Validation is enabled, you need to include a hash value in your Hosted Payment form redirect link. If you don't, you will get a Transaction Declined error when someone uses your Hosted Payment form.

You can use our [Hosted Payment Form Link Builder](/docs/forms/link_builder/) to encrypt the payment form link. Just input the **Hash Key** you configured and choose the same type of **Hash algorithm** as you have configured.