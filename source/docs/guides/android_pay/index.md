---
title: Android Pay
layout: tutorial

summary: >
    Our Merchant API now exposes a new 'android_pay' payment method and associated parameters to accept a base 64 encoded Android Pay Payment Token.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: false
  header_active: Guides
---

# Android Pay

## About Android Pay

Our Payments API allows your mobile apps and online stores to accept payments using an Android device or, from a desktop, with the Google Chome web browser.

When your customers use Android Pay, actual credit or debit card numbers are not sent with the payment. Instead a virtual account number is used to represent account info – so customer card details stay safe and secure.

All of the directions and code samples to enable Android Pay in your app are available through Google documentation. Visit [Android Pay](https://www.android.com/pay/) to goes over the basics of Android Pay. [Android Pay for Developers](https://developers.google.com/android-pay/) has instructions on how to enable Android Pay and on how to create Android Pay payment tokens.

## Getting Started

If this is your first time implementing our Payment API's we recommend reviewing our [Payment API's reference guide](/docs/references/payment_APIs/), to get familiar with Bambora's Payment API's.

You can find more about Bambora and Android Pay through our [Demo App on Github](https://github.com/bambora/na-merchant-api-demo).

## Requirements

### Registering Your Android Pay Merchant ID

Before you accept Android Pay with Bambora, you need to register an Android Pay Merchant ID to create and be able to access associated encryption keys.

### Enable Android Pay

To turn on Android Pay for your account, log into the [Member Area](https://web.na.bambora.com). Under **configuration**, click on **mobile payments**. From the Mobile Payments screen, you can enable Android Pay by creating a Android Pay Merchant ID for your mobile app.

<img src="/docs/guides/android_pay/android-mobile-payments-screenshot.png" alt="mobile-payments-screenshot">

Click **ADD ANDROID MERCHANT ID** in order to create your *Android Pay Merchant ID*. Select to Copy the newly created Public Key and use it as as the publicKey parameter in your Android app.

<img src="/docs/guides/android_pay/android-input.png" alt="apple-credentials">

After you've added your Android Pay Merchant ID to your account, you can start integrating to your app.

## API Requests

When you make an `android_pay` request to our Payments API, it'll be formatted in JSON, calling to https://api.na.bambora.com/v1/payments/.

```shell
  curl https://api.na.bambora.com/v1/payments \
    -H "Authorization: Passcode XXX1XXx11Xxx1xX1XxxxXxXXXXx1XXX1XxX1XXXxXXXxXxxxX11XXXxX1" \
    -H "Content-Type: application/json" \
    -d '{
          "amount": 1.00,
          "payment_method": "android_pay",
          "android_pay": {
            "android_pay_merchant_id": "<your_android_pay_merchant_id>",
            "payment_token": "<android_pay_base64_encoded_token>",
            "complete": true
          }
        }'
```

| Variable | Description |
| -------- | ----------- |
| amount | The amount of the transaction. |
| payment_method | The method of payment for the transaction. For Android Pay, this will always be `android_pay` |
| android_pay | The object needed to pass an Android Pay token including the Android Pay Merchant ID, and the base64 payment token. |
| android_pay_merchant_id | Your Android Pay Merchant ID found in your Bambora Member Area under **configuration** and then **mobile payments**. |
| payment_token | The encrypted Android Pay token containing card holder details, generated from within your Android app. |
| complete | The type of transaction being performed. True indicates a Purchase, and false is a Pre-Authorisation. |

## Additional Examples

### Payment Button

The sample below shows the action taken by a payment button in an Android app, generating a payment request.

```java
SupportWalletFragment walletFragment = SupportWalletFragment.newInstance(walletFragmentOptions);

MaskedWalletRequest maskedWalletRequest = WalletUtil.createMaskedWalletRequest(
        itemsToPurchase,
        getString(R.string.public_key));

WalletFragmentInitParams.Builder startParamsBuilder = WalletFragmentInitParams.newBuilder()
        .setMaskedWalletRequest(maskedWalletRequest)
        .setMaskedWalletRequestCode(REQUEST_CODE_MASKED_WALLET);

walletFragment.initialize(startParamsBuilder.build());

getSupportFragmentManager().beginTransaction()
        .replace(R.id.android_pay_container, walletFragment)
        .commit();
```

### Process Payment Token

Your app will receive a payment token once the payment request has been successfully authorised. You then need to send the payment token to your server, and then from there send it to the Bambora Payments API.

**Note:** You can view additional source code examples for a demo Android client & payment server that implements sending a payment token to the Bambora Payments API here: [Merchant API Demo on Github](https://github.com/bambora/na-merchant-api-demo).
