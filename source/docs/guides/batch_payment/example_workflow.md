---
title: Batch Payment
layout: tutorial

summary: >
  Batch credit card, EFT and ACH transaction requests.

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.batch_payment
  header_active: Guides

---

# Example workflow

The Batch Payment API allows you to batch transactions together into a single a API call. This reduces the number of HTTP connections your client has to make.

You can batch credit card transactions and funds transfer (ACH/EFT) transactions. You can use funds transfer transactions to push funds to a creditor, or pull funds from a debtor. The most common use cases for this is payroll or Accounts Payable, and synchronised subscription models where multiple people are charged on a certain day each month, or each year.

The Batch Report API you to query the status of batches and individual transactions.

## Funds transfer

**Step 1.** Calculate the date that the funds transfer needs to settle

> This will be relative to the settlement lag configured on your account - usually 3-5 days.

**Step 2.** Upload the batch of transactions

> This will return the success of the upload attempt, but not the status of the individual transactions.

**Step 3.** Query the batch for rejected transactions

> You will not be able to query the status of individual transactions until the batch service has validated the file. The lag between upload and validation is relative to the size of the file and the amount of other files in the queue. The minimum lag is usually 100 millisecond.

> We recommend that you wait 100 millisecond after the initial upload and then poll periodically until you receive the desired report.

**Step 4.** Query the batch for settled transactions

> You can query for a settlement report from the expected day of settlement for the following 14 months.

> This is an important step because some transactions in your batch may not be settled. Funds transfers can be returned due to a closed or invalid bank accounts, insufficient funds, or disputes.

> **is this cut off correct? what do you do after that?**

**Step 5.** Query the batch for returned transactions?

> **is the batch report updated for returned transactions?**
