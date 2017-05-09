---
title: Boarding
layout: tutorial

summary: >
  Learn how to create, configure, and test your merchant account with our Payment APIs. 

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: na.tocs.merchant_quickstart
  header_active: Guides

---

# Boarding
If you have signed up for a Merchant Account or Gateway account, there are a number of steps to get your account “live” so you can process payments.

**We lead you through the process** – our Applications Team will guide you through each pertinent step. Please refer to the emails we send you, and if you have questions, contact [applications.northamerica@bambora.com](mailto:applications.northamerica@bambora.com)

### Haven't applied yet?
Please contact our Sales department at 1.888.472.2072 or [request a call back](http://www.bambora.com/en/ca/contact/sales/).


# Steps to go live
## STEP 1: Reviewing and approving your application
After you have filled out and emailed or faxed your application to us, we will review it and any supporting paperwork within one to two business days. If the information is incomplete we will send you a communication with instructions. Please follow up on these requests promptly. If you do not understand our request, please let us know.

If you are using a website to take payments, we will also review the website during the approval process for specific requirements see **Website Requirements** below.

Once your account is approved, we will provide you with a Terms of Service email and access to your account which will include your unique 9-digit Merchant ID. If you’ve signed up for more than one service or processing currency, you may be issued multiple Merchant ID numbers.


### Website requirements
When you sell goods or services online, you not only need to provide your customers with very clear descriptions of what you are selling, but also information about their purchase. This reduces the likelihood of a customer dispute, ultimately reducing risk for both you (the merchant) and Bambora.

Before we can process your online credit or debit payments, Bambora and our banking partners require specific information to be clearly displayed. As part of the application process we will check your website includes:

##### **Required**:
 1. Legal name and DBA (Doing business as name, if applicable) displayed as prominently as any other information depicted on the website.
 2. Customer service contact information displayed including business address, mailing address, telephone number, and email address.
 3. Displays complete, fair and accurate description of goods and
    services offered, including any relevant technical or system
    specifications and individual costs.
 4. Displays delivery policy – including method of delivery and provides the date when goods will be delivered or the services are to be commenced as well as costs for shipping, delivery or handling charges, taxes, custom duties, broker fees or insurance costs. Export restrictions should also be listed if applicable.
 5. Displays the Card Brand Mark in full color to indicate Card acceptance including the terms, conditions and method of payment.

##### **Logos and Trademarks**
   [Visa Merchant Services](https://www.visa.ca/en_CA/run-your-business/commercial-solutions/merchant-processing.html)
   [MasterCard Brand Center](https://brand.mastercard.com/brandcenter/mastercard-brand-mark.html)
   [Discover Signage and Logos](https://www.discovernetwork.com/en-us/business-resources/free-signage-logos)
   [American Express Signs & Supplies](http://merchant-supplies.americanexpress.com/?locale=en_US#/)
    
 6. Displays return, exchange, and refund policies.
 7. Displays country and transaction currency, for example, by indicating that prices are payable in Canadian or US dollars.
 8. Display terms and conditions
 9. Display a privacy policy.

After this information is posted on your website, we can begin issuing your merchant accounts. For more information on these requirements and other details about setting up your site for online processing contact our [Technical Support team](http://www.bambora.com/en/ca/contact/support/).

<a name="terminal-setup"></a>

## STEP 2: Terminal setup
You will need to fill out a Self-Assessment Questionnaire to indicate your ability to meet PCI (Payment Credit Industry) standards. [See PCI Compliance](#pci-quest). We will direct you to the appropriate questionnaire.

**If we are setting you up with Merchant Account(s)** providing you with the eCommerce account(s) which processes Visa/MasterCard) we will start setting these up once we receive all paperwork and your account is approved.

**If you are bringing us merchant accounts** which you have already set up elsewhere, we need [specific terminal information](#terminal-info) for your existing merchant account. This will enable us to connect your merchant account to the payment processing you have chosen to process through Bambora. You will need to make sure you follow their instructions and provide us with terminal setup information listed here as soon as possible.

**If you are choosing to process INTERAC Online**, this [INTERAC Online integration package](#interac-integration) ensures you are ready for INTERAC Online certification.

**If you are integrating by API** (Application Programming Interface – needs developer expertise) you must also have a 40 or 128-bit SSL certificate. For those with detailed integrations, we also have a we also have [detailed guides.](/docs/guides/).

<a name="pci-quest"></a>

### PCI Questionnaires
PCI Compliance is an issue all merchants have to address no matter where they choose to process. It will be up to your merchant account service provider to help you through this process. There are two versions of PCI Self-Assessment Questionnaires that merchants may be asked to complete. Both questionnaires are issued by the Payment Card Industry.

#### Self-assessment questionnaire A
This short-form questionnaire is designed for merchants that are using a solution that has all payment pages hosted on a fully compliant service provider. If you are using a Bambora hosted cart or a Bambora hosted payment form or the Bambora Registration service, this is your questionnaire. If you are using a third party shopping cart that is PCI Certified you may also complete this questionnaire.

[View Questionnaire A](https://cdn.na.bambora.com/downloads/SAQs/SAQ_A_v3_prefill.pdf)

#### Self-assessment questionnaire D
Any merchant that has chosen to integrate by API will be asked to complete this more comprehensive questionnaire. If you are creating your own payment form or shopping cart, using our Application Programming Interface (API), doing a Simple Object Access Protocol (SOAP) integration – you, your developer, and/or your web host will need to complete the PCI DSS Self Assessment Questionnaire D.

[View Questionnaire D](https://cdn.na.bambora.com/downloads/SAQs/SAQ_D_v3_Merchant.pdf)

<a name="terminal-info"></a>

### Setting up your terminal
#### For customers bringing merchant accounts set up with another provider
If you have set up your merchant accounts with another provider, we need specific details about these accounts before we can connect them to the payment processing you have requested through the Bambora gateway.

The following providers are compatible with Bambora. Please click the provider you use below to access the complete listing of terminal setup information required.

[Chase Paymentech](#chase-paymentech)
[Elavon](#elavon)
[First Data](#first-data)
[Global Payments](#global-payments)
[Royal Bank, Scotiabank, Moneris, Desjardins and other Canadian credit unions](#royscomondesoth)
[TSYS](#tsys)
[(TD) Toronto Dominion](#td)

<a name="chase-paymentech"></a>

#### Chase Paymentech
If you are using Chase Paymentech merchant accounts, please ensure that your merchant accounts have been set up on the Netconnect platform. Request a VARS setup sheet from your Chase Paymentech account representative if one has not already been provided to you. The VARS setup sheet will contain the following information:

 - Client number (4 digits) 
 - PNS merchant number (12 digits) 
 - Terminal number (3 digits)
 - NETCONNECT user ID
 - NETCONNECT password
 - Merchant numbers for each of the card types you will accept

<a name="elavon"></a>

#### Elavon
If you are using Elavon merchant accounts, please request a terminal setup sheet if one has not already been provided to you. The setup sheet will contain the following information:

- Bank ID/BIN Number (6 digits)
- Terminal ID (16 digits
- Merchant numbers for each of the card types you will accept

If you are processing a high volume of transactions, your setup sheet may also include additional information such as FTP usernames and passwords.

<a name="first-data"></a>

#### First Data
If you are working with First Data, ensure that your merchant accounts have been set up on the “Nashville South” platform for Canadian accounts and the “Nashville North” platform for USA accounts. Request a terminal setup sheet from your First Data account representative if one has not already been provided to you. The setup sheet will contain the following information:

- Terminal number (6 to 8 digits)
- Merchant ID (7 digits)
- MCC code
- Merchant zip/postal code
- Dedicated customer service phone number
- Website URL Merchant numbers for each of the card types you will accept

<a name="global-payments"></a>

#### Global Payments
If you have merchant accounts from Global Payments, please ensure that your merchant accounts have been set up on the “Global: Atlanta East” platform. Request a terminal setup sheet from your ban representative if one has not already been provided to you. The setup sheet will contain the following information.

- Terminal ID (11 digits)
- BIN number (6 digits)
- Software Provider: Bambora (If Bambora is not listed as the software provider then you can experience some issues with settlement)
- Merchant numbers for each of the card types you will accept (11 or 12 digits per merchant number)

<a name="royscomondesoth"></a>

#### Royal Bank, Scotia Bank, Moneris, Desjardins, and other Canadian credit unions
If you have merchant accounts from any of the above named banks, please provide us with your merchant ID numbers (5 to 12 digits). Please confirm with your provider that your these ID numbers have been set up for a third party provider.

<a name="tsys"></a>

#### TSYS 
If you have chosen TSYS as your provider, please request a terminal setup sheet from your TSYS account representative if one has not already been provided to you. The setup sheet will contain the following information:

- Merchant Number (12 digits)
- BIN number (6 digits)
- Agent bank number (6 digits)
- Agent chain number (6 digits)
- Store number (4 digits)
- Terminal # (4 digits)
- MCC code (4 digits)
- Terminal ID (8 characters)
- Country Registered
- Merchant Name
- Province/State
- Postal/ZIP code
- Customer Service Phone number
- Time Zone
- Merchant numbers for each of the card types you will accept (11 or 12 digits per merchant number)
- Merchant name, location details and time zone

<a name="td"></a>

#### TD (Toronto Dominion)
If you chose TD as your provider, please request a terminal setup sheet/information from your TD account representative if one has not already been provided to you. Your merchant accounts will need to be set up with a Bambora (BN) terminal with TD.

Your setup information sheet will contain the following information:
- Merchant numbers for each of the card types you will accept


<a name="interac-integration"></a>

### Setting up to take INTERAC Online
#### Step 1: Your application for INTERAC Online
The first thing you need to determine is how you are going to integrate INTERAC Online into your website. You are asked to define this on the INTERAC Online section of the Bambora application form. Use this page of the [INTERAC Online definitions](https://support.na.bambora.com/bic/w/properties/external_pdfs/IOC_Required_Data_Field_Definitions.pdf) to help understand the terminology used to fill out the form’s data fields. However, if you are unsure of any step, please leave the section blank on your application and our Application team will be happy to contact you to go over these required fields.

#### STEP 2: Setting up your website to accept INTERAC Online
Once we have processed your application, we will forward you a [Merchant INTERAC Online Certification Testing checklist](http://support.na.bambora.com/bic/w/Properties/External_PDFs/IO_Guidelines_Checklist.pdf). By checking off each item on this list you are ensuring your website meets the [standards required by INTERAC Online](https://support.na.bambora.com/bic/w/properties/external_pdfs/EMER_IO_Guidelines.pdf).

To help you complete each step we have created clear instructions in our [INTERAC Online integration guide](https://support.na.bambora.com/bic/w/Properties/External_PDFs/bambora-interac-integration.pdf). This contains information on using the INTERAC Online logo, the INTERAC Online process flow, requirements for setting up the INTERAC Online processing pages.

#### STEP 3: INTERAC Online certification
We will perform a full test transaction. When the integration tests successfully, we will contact our INTERAC Online partners to complete the setup of the account.


## STEP 3: Integrating
All Bambora clients are initially provided with an account in our test environment. In this environment, you can test your system’s integration using these [test card numbers](http://support.na.bambora.com/olm/w/docs/using-test-card-numbers.htm). If you are taking orders in more than one currency and therefore have more than one merchant ID number, you will need to integrate each account individually. Please feel free to ask us questions along the way.

When your terminal and merchant accounts are ready, we’ll send an ***Authorized to go live*** email. Test transactions are still free, but we’ll start charging monthly fees at this point.

It is up to you (or your developer) to control when your account moves from the test environment and “goes live” to begin processing valid orders. So, when you believe your merchant integration is complete and ready for testing, you will need to send us a ***Request to go live*** email. You will not be live without sending us this email!

## STEP 4: Going live
We will review your website to ensure that everything is running smoothly. If we detect any problems, however, we will send you a ***Site Review Email*** with further information. Otherwise, you will receive an ***Account Live*** email indicating you can begin processing.

You will also need to register with Rapid Comply to fill out First Data’s Self-Assessment Questionnaire to indicate your ability to meet PCI (Payment Credit Industry) standards.

# Helpful resources
## Quickstart guide
After you are live, please follow the instructions in the [Quick Start Guide](http://support.na.bambora.com/bic/w/index.html#docs/online-help-area-quickstart-information.htm) to set up and customize your payment processing system.

## Security and best practices
Please review our [Security and best practices guide](https://support.na.bambora.com/bic/w/index.html#docs/security-risk-management.htm) before launching your site.

Be aware that if you are integrating by API and plan on processing voids, returns or pre-auth completions through your custom integration (and not just through our simple member area interface), you must implement specific settings. This is applicable for all integrations including most commercially available shopping carts, mobile solutions, as well as customized setups.

If you need help with implementing any of these settings please contact our Support Team at 1-888-472-0811 or contact us [online](http://www.bambora.com/en/ca/contact/support/).



