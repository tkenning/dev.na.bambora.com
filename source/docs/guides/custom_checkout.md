---
title: Custom Checkout
layout: tutorial

summary: Our solution limits the scope of your PCI compliance by removing the need for you to pass credit card information through your servers.

navigation: 
    header: na.tocs.na_nav_header
    footer: na.tocs.na_nav_footer
    toc: na.tocs.custom_checkout
    header_active: guides 
---

# Custom Checkout
## Overview

Our solution limits the scope of your PCI compliance by removing the need for you to pass credit card information through your servers.

### Step 1: Setup Card Inputs
The Custom Checkout library is used to securely inject the following input elements into your page:

* Card Number
* CVV
* Expiry Date

You can use CSS to customize the look and feel of user input while complying with PCI requirements.

### Step 2: Validate Input
The library validates and formats the input elements by card brand (Mastercard, Visa, etc.).

### Step 3: Create a Token
When card data is complete your page can call the library to get a payment token that can then be used to process a payment with our Payments API. 

## Try it!
Below are examples of how you can add input fields, respond to events, and customize the look and feel to match the rest of your page.

### Basic Styling
An example using some basic custom styling.

<p data-height="395" data-theme-id="light" data-slug-hash="LLRMRo" data-default-tab="result" data-user="na-bambora" data-embed-version="2" data-pen-title="CustomCheckout" class="codepen">See the Pen <a href="https://codepen.io/na-bambora/pen/LLRMRo/">CustomCheckout</a> by na-bambora (<a href="https://codepen.io/na-bambora">@na-bambora</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Bootstrap Styling
An example using the Bootstrap framework for styling.

<p data-height="177" data-theme-id="light" data-slug-hash="OgbOKP" data-default-tab="result" data-user="na-bambora" data-embed-version="2" data-pen-title="CustomCheckout-Bootstrap" class="codepen">See the Pen <a href="https://codepen.io/na-bambora/pen/OgbOKP/">CustomCheckout-Bootstrap</a> by na-bambora (<a href="https://codepen.io/na-bambora">@na-bambora</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Basic Usage

This is a basic example of HTML and JavaScript that adds CustomCheckout to your payment page: 

***HTML***

```html
<script src='https://libs.na.bambora.com/customcheckout/0.1.0/customcheckout.js'></script>
<form id="checkout-form">
    <div id="card-number"></div>
    <div id="card-cvv"></div>
    <div id="card-expiry"></div>

    <input id="pay-button" type="submit" class="button button-disabled" value="Pay" disabled="true"/>
</form>
```

***JavaScript***

```javascript
// Initialize the library
var customCheckout = customcheckout();

// Create and mount the inputs with the library
customCheckout.create('card-number').mount('#card-number');
customCheckout.create('cvv').mount('#card-cvv');
customCheckout.create('expiry').mount('#card-expiry');

// Listen for submit button
document.getElementById('submit').onclick = function () {
  customCheckout.createToken(function (result) {
    if (result.error) {
      console.log(result.error.message);
      // display error message
    } else {
      console.log(result.token);
      // process token using our Payments API
    }
  });
};

// Add an event listener for when the inputs are complete
customCheckout.on('complete', function(event) {
    if (event.field === 'card-number') {
      console.log('Card number is complete: ' + JSON.stringify(event));
    } else if (event.field === 'cvv') {
      console.log('CVV is complete: ' + JSON.stringify(event));
    } else if (event.field === 'expiry') {
      console.log('Expiry is complete: ' + JSON.stringify(event));
    }
});

// Add an event listener for when the inputs have a validation error
customCheckout.on('error', function(event) {
    if (event.field === 'card-number') {
      console.log('Card number has errors: ' + JSON.stringify(event));
    } else if (event.field === 'cvv') {
      console.log('CVV has errors: ' + JSON.stringify(event));
    } else if (event.field === 'expiry') {
      console.log('Expiry has errors: ' + JSON.stringify(event));
    }
});
```

## CustomCheckout

This section describes how to fully customize the style and events to create a PCI compliant form 

### Include CustomCheckout

```html
<script src='https://libs.na.bambora.com/customcheckout/0.1.0/customcheckout.js'></script>
```

```javascript
var customCheckout = customcheckout();
```

### Create custom inputs
`var checkoutObject = customCheckout.create(type[, options])`

Creates an input of *type* and passes the optional specified *options* to it. Returns a field object.

| Argument       | Type   | Description                                                         | 
|----------------|--------|---------------------------------------------------------------------|
| *type*         | String | The type of field to create. Can be `'card-number'`, `'cvv'`, or `'expiry'`. | 
| *options*      | Object | Optional options object that can be specified for the field.             | 

```javascript
var cardNumber = customCheckout.create('card-number', options);
var cvv = customCheckout.create('cvv', options);
var expiry = customCheckout.create('expiry', options);
```

#### Options

The `style` property affects the remote styling of text inside the iframe input. The `classes` property updates the class list of the element the field is mounted to on your page. 

| *options* property | Type   | Description                                  | 
|--------------------|--------|----------------------------------------------|
| `placeholder`      | String | A placeholder value for the input field.     |
| `style`            | Object | Style information for the field.             | 
| `classes`          | Object | Custom classes to be applied to the wrapper. |
| `brands`           | Array  | Only pass in to card-number input. Value is an array of supported card brands, all other brands will be treated as invalid. If not passed in, all brands are accepted (see below). |

**Card Brands**

- amex 
- diners
- discover
- jcb
- mastercard
- visa
- maestro

| `style` property | Type   | Description                                     | 
|------------------|--------|-------------------------------------------------|
| `base`           | Object | Default styles to be applied to the input.      | 
| `complete`       | Object | Styles to be applied when the input is valid.   |
| `empty`          | Object | Styles to be applied when the input is empty.   | 
| `error`          | Object | Styles to be applied when the input is invalid. | 

For the style objects, these CSS properties can be set:

* `color`
* `fontFamily`
* `fontSize`
* `fontStyle`
* `fontWeight`
* `textDecoration`

As well as these pseudo-classes which can have the above properties set: 

* `:hover` 
* `:focus`

| `classes` property | Type   | Description                                                                           | 
|--------------------|--------|---------------------------------------------------------------------------------------|
| `base`             | String | Base class applied to the wrapper. Defaults to `bambora-checkoutfield`.               | 
| `complete`         | String | Class to apply when input is complete. Defaults to `bambora-checkoutfield-complete`.  | 
| `empty`            | String | Class to apply when input is empty. Defaults to `bambora-checkoutfield-empty`.        | 
| `focus`            | String | Class to apply when input has focus. Defaults to `bambora-checkoutfield-focus`.       | 
| `error`            | String | Class to apply when input is in error. Defaults to `bambora-checkoutfield-error`.     | 

### Mount custom inputs
`checkoutObject.mount(cssSelector)`

Mounts the custom input inside an element on the page identified by *cssSelector*. Returns an error if *cssSelector* is not found.  

| Argument         | Type     | Description              | 
|------------------|----------|--------------------------|
| *cssSelector* | *String* | CSS selector of your parent element. |

1. Create the HTML element

```html
<div id="card-number"></div>
<div id="card-cvv"></div>
<div id="card-expiry"></div>
```

2. Mount the custom input to the HTML element using its CSS selector.

```javascript
cardNumber.mount('#card-number');
cvv.mount('#card-cvv');
expiry.mount('#card-expiry');
```

### Create a Token
`customCheckout.createToken(callback)`

Validate and create a payment token from the input values. This token can then be used to process a payment using our Payments API.

| Argument       | Type       | Description                          | 
|----------------|------------|--------------------------------------|
| *callback*     | *Function* | The function to be run when the event is triggered. | 

```javascript
customCheckout.createToken(function(result) {
    // handle result.error or result.token
});
```

| callback event property | Type   | Description                                         | 
|-------------------------|--------|-----------------------------------------------------|
| `code`                  | String | The HTTP status code of the tokenization request.   |
| `error`                 | Object | `{field: 'token', type: 'See below for a list of error types.', message: 'A descriptive error message.' }`    | 
| `token`                 | String | Only present if no error. The payment token result. | 
| `last4`                 | String | Only present if no error. The last 4 digits of the card number. |
| `expiryMonth`           | String | Only present if no error. The expiry month of the card.         | 
| `expiryYear`            | String | Only present if no error. The expiry year of the card.          |

### Events
`customCheckout.on(event, callback)`

Adds an event listener to Custom Checkout.

| Argument       | Type       | Description                          | 
|----------------|------------|--------------------------------------|
| *event*        | *String*   | The name of the event to listen for. | 
| *callback*     | *Function* | The function to be run when the event is triggered. | 

| *event* values | Trigger                                                             | Event argument for callback |
|----------------|-------------------------------------------------------------------------|------------------------------|
| `blur`       | Input loses focus.                                    | `{ field: 'card-number\|cvv\|expiry' }` |
| `focus`      | Input gains focus.                                    | `{ field: 'card-number\|cvv\|expiry' }` |
| `empty`      | Input switches to or from an empty state.             | `{ field: 'card-number\|cvv\|expiry', empty: 'true\|false' }` |
| `complete`   | Input becomes complete and valid.         | `{ field: 'card-number\|cvv\|expiry', complete: 'true\|false' }`    |
| `brand`      | Card brand changes.                                  | `{ field: 'card-number', brand: 'amex\|diners\|discover\|jcb\|mastercard\|visa\|maestro' }` |
| `error`      | Input becomes invalid.           | `{ field: 'card-number\|cvv\|expiry', type: 'See below for a list of error types.',  message: 'A descriptive error message.' }` |

```javascript
customCheckout.on('blur', function(event) {
  console.log('blur: ' + JSON.stringify(event));
  //...
});
```

### Error Events

***Input Validation***

* `CardBrandInvalid`
* `CardBrandNotAccepted`
* `CardNumberNotSet`
* `CardNumberInvalidLength`
* `CardNumberInvalid`
* `CardNumberLuhnIsInvalid`
* `CvvNotSet`
* `CvvIsNotANumber`
* `CvvInvalidLength`
* `MonthIsNotValid`
* `ExpiryIsInThePast`
* `ExpiryIsNotSet`

***Tokenization***

* `TokenizationValidationFailed`
* `TokenizationFailed`
* `TokenizationNoResponse`
* `TokenizationTimeout`

### Custom Styling

Here is an example of how to customize the styling of the user inputs. 

* Add your custom styling to `options`
* Pass `options` as an argument when `customcheckout.create()` call to customize the styling of the input. 

```javascript
// These styles will be applied to the text in the input when it changes state.
var style = {
  complete: {
    color: 'green',
    fontWeight: 'bold'
  },
  error: {
    color: 'red',
    ':focus': {
      fontStyle: 'italic',
    },
  },
};

// These classes will be applied to the wrapper element the input is mounted to
// when it changes state.
var classes = {
  complete: 'my-complete-class',
  error: 'my-error-class',        
};

var options = {
  placeholder: 'Card number',
  style: style, 
  classes: classes, 
  brands: ['amex', 'visa', 'mastercard'], // Only these brands will be accepted
};

var cardNumber = customCheckout.create('card-number', options);
```

## Migration

### Checkout Fields v1
To upgrade from our v1 version of Custom Checkout, do the following:

* Remove the old `<div data-bambora-target...>` elements
* Remove the old `checkoutfields.js` script
* Add a new `<div>` for each new Custom Checkout input (as described above)
* Add the new Custom Checkout script: `<script src='https://libs.na.bambora.com/customcheckout/0.1.0/customcheckout.js'></script>`

### Checkout form
To migrate from our hosted Checkout form, do the following:

* Remove the existing link to the old form `payment.asp`
* Add a new form that uses the new Custom Checkout inputs (as described above)
* Add the new Custom Checkout script: `<script src='https://libs.na.bambora.com/customcheckout/0.1.0/customcheckout.js'></script>`
