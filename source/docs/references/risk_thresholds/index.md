---
title: Risk Thresholds
layout: tutorial

summary: >
    Risk Thresholds can be used by merchants to block certain high risk transactions.
    
navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: in-page
  header_active: References
---


# RISK THRESHOLDS
Risk Thresholds can be used by merchants to block certain high-risk transactions. With this service, Beanstream determines the risk of each transaction using a number of monitoring elements such as geolocation checks, proxy detection, IP tracking, and Bank Identification Number checks. Based on this evaluation, transactions are assigned a risk score between 0.01 and 100. The risk score represents the percentage of probability that the transaction is fraudulent. For example, a score of 10 represents a 10% possibility that the transaction is fraudulent. A score of 90 represents a 90% possibility the transaction is fraudulent.

If a transaction is assigned a risk score greater than or equal to the threshold set in the Decline field, the transaction is not processed. You will receive an email message for transactions with a risk score lower than the Decline threshold but greater than or equal to the Warn threshold.

Merchants using the API must use security authentication and include the customer IP (customerIp) to ensure an accurate risk score output. This is done automatically when using the payment form when billing address is required.

## Required fields for Transactions
To get an accurate Risk Threshold result, there are several minimally required fields in the transaction. Where possible, the merchant should send Beanstream the information in these fields to generate the most useful riskScore.

| Parameter 	      | Parameter Name for query string |
| ------------------- | ------------------------------- |
| Country   	  	  |	ordCountry						|
| Postal Code   	  |	ordPostalCode					|
| City   	  		  |	ordCity							|
| Email Address   	  |	ordEmailAddress					|
| Customer IP address |	customerIp						|

## Setting a Risk Threshold
Based on millions of evaluated transactions, the table below shows a breakdown of how many transactions by percentage, that make up the different score ranges. You can use this data to help you better determine the thresholds that are appropriate for your business, based on your comfort level with the number of transactions that could be blocked.

| Risk score range  | Percent of orders in range |
| ----------------- | -------------------------- |
| 0.10 – 4.99       | 90%						 |
| 5.00 – 9.99       | 5%						 |
| 10.00 – 29.99     | 3%						 |
| 30.00 – 99.99     | 2%						 |


In the Decline and Warn fields, you can enter up to three digits and two decimal places (minimum 0.01; maximum 100).

1. Log in to the [Online Member Area][back-office]
2. On the menu, click administration> account settings> risk thresholds.
<img src="/docs/references/risk_thresholds/risk_threshold.png" alt="risk-threshold-settings-screenshot">
3. The default for the Decline field is 60. You have the option to change it and enter the maximum risk score you will accept. Transactions with a score higher than this number are automatically rejected.
4. The default for the Warn field is 30. You have the option to change it and enter the maximum risk score that you will accept before you are sent an email with a warning message.
5. Click Update to save your changes.

[back-office]: https://web.na.bambora.com