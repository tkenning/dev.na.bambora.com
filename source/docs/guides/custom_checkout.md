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

Our solution limits the scope of your PCI compliance by removing the need for you to pass credit card information through your servers.

## GitHub
Full documentation and source code is available on our GitHub repository: 

<https://github.com/bambora/na-customcheckout>

## How it works
#### Step 1: Setup Card Inputs
Custom Checkout library is used to securely inject the following input elements into your page:

* Card Number
* CVV
* Expiry Date

#### Step 2: Validate Input
The library validates and formats the input elements by card brand (Mastercard, Visa, etc.).

#### Step 3: Create a Token
When card data is complete your page can call the library to get a payment token that can then be used to process a payment with our Payments api. 

### Customizing Look and Feel

You can use CSS to customize the look and feel of the input elements and their various states such as validation.

## Try it!

### Using Basic Styling
<p data-height="395" data-theme-id="light" data-slug-hash="LLRMRo" data-default-tab="result" data-user="na-bambora" data-embed-version="2" data-pen-title="CustomCheckout" class="codepen">See the Pen <a href="https://codepen.io/na-bambora/pen/LLRMRo/">CustomCheckout</a> by na-bambora (<a href="https://codepen.io/na-bambora">@na-bambora</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Using Bootstrap Styling
<p data-height="395" data-theme-id="light" data-slug-hash="OgbOKP" data-default-tab="result" data-user="na-bambora" data-embed-version="2" data-pen-title="CustomCheckout-Bootstrap" class="codepen">See the Pen <a href="https://codepen.io/na-bambora/pen/OgbOKP/">CustomCheckout-Bootstrap</a> by na-bambora (<a href="https://codepen.io/na-bambora">@na-bambora</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
