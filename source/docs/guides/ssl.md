---
title: SSL Certificates
layout: tutorial

summary: >

To be able to create an SSL connection between our servers and your client we use SSL Certificates.  

navigation:
  header: na.tocs.na_nav_header
  footer: na.tocs.na_nav_footer
  toc: false
  header_active: Guides
---

# SSL Certificates 

To be able to create an SSL connection between our servers and your client we use SSL Certificates. 

## OpenSSL

Some merchants use [OpenSSL](https://www.openssl.org) to verify our SSL certificates. Since a server can have more than one certificate you will need to specify the host of the certificate you are checking by using the _-servername_ argument.

#### Example:
```shell
openssl s_client -servername www.beanstream.com -connect www.beanstream.com:443
```

#### GeoTrust Local Certificate
OpenSSL may output the following:
```shell
...
depth=1 /C=US/O=GeoTrust Inc./CN=GeoTrust SSL CA - G3
verify error:num=20:unable to get local issuer certificate
verify return:0
...
---
```
You can resolve this by doing the following:
 1. Download *GeoTrust_Global_CA.pem* from [GeoTrust](https://www.geotrust.com/resources/root-certificates/index.html)
 2. Run OpenSSL with the _-CAfile_ argument pointing to the downloaded file
#### Example:
 ```shell
 openssl s_client -servername www.beanstream.com -connect www.beanstream.com:443 -CAfile "FILEPATH/GeoTrust_Global_CA.pem"
 ```
 