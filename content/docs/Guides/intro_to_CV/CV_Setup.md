---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GI56G7D%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFetFwy0aWYhmmrLg4Oo8DSx4KtKswidQPzvBw2Gbp3WAiEA1ixeOeYDuGCiiCvvlz%2BAmF8AOEAnfs3ut7hb0SOmAnAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEwd8C%2BT2%2FryRMRcjCrcA8LYSU2f26nNao99HLuvyguKwjwO6%2BIpDNFdNUWTdWx8b0ALwjzEXlG2h7spM62F1knoOND%2BdjCJUp9CKQgYU9hYq21eVVKF8kHsQ7UZCTxT%2BtbgrNULpKBjD2pA9Gxp9rNObW0G1UadpPbEsxcAcAvqqffgBf%2F9Thv8ArrcfBX1EjdJqTfIsJ98g1aR2kpUgJ%2FTLRXiAck51qOXzveprLTpxGYhmyz4Pz0zYWTWUl7RNMuQ0et5lG0Koi9rSvzTHWaTNZRvFc16JFQDNn4m6%2FdzmNwMV%2FNe9bwa0dpifUc%2BN1FyjL3ZP88mlaSgyBNeqj87Di2pNTFRBEANhVOs%2FYvK9iILRDiCkf1wICX%2BgHogORjwrACYl%2Bs9%2BUhgXu11LaQCJ%2FOv2EZlDJuTzlopikLbB7OTHgPvJhCWfw2epkc3SIFIoKhxvgXmyI03SMtzkZmCtTkKoEROgnWUfIzqGbuyED0ePT0VHa2wK%2BLoSTt%2Flt1SiCryQp5nLXO5sGCXgocC%2FmcOtRbhkwk4M1U3jMIIDJ2oRgvzrGKTmTxgNyPNWKhvqyVPdEN24YyEacyoCq79M3%2BcxJucBPA7VxzwQHJ72tFB%2BTcW6i59%2F7j8iLPsXFD3NrkIbSAA2l4kMOqF8MQGOqUB0uCgii5JuDSMMcC2AbRCNNmQ8B8Wc1FefADx%2FkbyvbCESPY3xGicpLM8ErMsVkQfVyzACVk6xAZuyp1fkZKt32%2B71ZDe3%2B5xfQ%2BN0r6Km4KaDPkcHGu2J395tCKbKAsKEQ%2FUrfk2pm6Dmqis7w1h1zLPa9QC63vnMSnN4VUV5jkgfC7v5D8mxHEZkRDVsNJc2VbvZcDRpkct5N4zdLk8dWQnFmk9&X-Amz-Signature=0bbede0f487004862de586ab36c0c25af37824601dca6bc29ac9cf30ee62b692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NKTDTB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZOw3iSCIJ2F%2F0pxqARXdoIUpArTcsNwdpVG8BNrG11AiEAtYpZHxzynTOYFErU%2Bwxwe%2Fq4suYg%2BpLY3tbRo2hA1CEq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHO4i4VpBxfFGP6adSrcAy%2FFy6%2B0L9WSChgTzwx%2FuddtNpZUvhVxDCMCAx7ur3Bzg5SpWzdJfab2aJ9wR3ztHnX%2BfO9pOStnM3luLDg6faIxtfC56S7EhT96wMef83TCO0FNf17Ne5Dy1h2MUPf%2F9jnAfzmHFRdLuXRPQ4ARPrE98kzYxOk9Wur6mqRra8qSVfa37eJBdcW%2By5gTwjCYP7Gix3FFmYmzFNXymmfXcLMJeDicAg5NrAtP29nWMV1lFeuYMJ03%2FUpclR6hfCV3aXfm4d6Q6f8GnNhKMC%2FHsuMFXY9Sq3vQaGgAsch1DYYYO30p4kWcdnuMrBUyyJFJZr%2F%2BrI5d5NI3d4m2YRaCO7s%2FLOivvbMf3x0Z%2BLbNnsWY7xGMIP%2FwBY5uSRgu5w3swjDQFqx74FmyI5zUqc9D167LOHY47AZoycHzSfuji6HIMol1Q7h5OCPEcHTrTR7opes0xQQfIFrr1bTp3YuvVn17kZiwe2KxXzRdmhTYyHBNNlODuUiM33wFjA%2BKZhCfWbfUjQmVXL51LkM3bWathD4%2BQ4ly%2FIwUABzTywQtOCChR7tnwaS1K8hABrKUJ99NJwNLcdY143MrJb5tiQIsDd080BG%2FyrLmiNqiG06izAuJU72C%2FeiI98i7qGEgMKGH8MQGOqUBvtTBGIlJya4U3xkUzlSFFFzTMAKGIaLuxdriK98b0c%2FHzCvYpwIQlo%2F1cNu%2BqIGfbeW1MmjgeE7%2Fpyz81JjHAK40ie1eTgTJj9r29fRkrWQlV1cnkQxW7jwaK136fbNIrpx%2BILgjYehJRRPayRXLm7dx9I6gwI7Mo8xJCkPfD4rkNA8rBBfL1Gzesb2ncP34ot0oRYRf9Fm3dV%2FEfzS8%2Fr8oU1vr&X-Amz-Signature=ec75d533fb3b51abc8d7250f60dd8a6a3451e78e54da5546cc2e3f61f8548538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
