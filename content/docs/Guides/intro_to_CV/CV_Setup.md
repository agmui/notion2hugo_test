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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2XKYOH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4elgmgDrvWoOEXHpZUybKhlNjgZhx0CSzt2lh%2FdK9NAiBTllioSHoS6INv1kXOIBB2sSbaZ2XDLh3D4EJijZmjoCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnKP7x7uz3Pp4L6R8KtwDNNN8Dvg5IcyCg7DM3VFmD6qDrbFBd6MvYYXZD9tOJYSEgIiMA3gGiAYQXYSRPdeza4v5nDUB8LMSw2xHNyvUgwhRWc1XU4P7%2BkO%2Bywoa4CtKwUtePnt0bnm2hiXUPn%2FMC%2BIJiCyKHAqsUA0mNezoy24sDNU1ieKKs%2FwBceBxwlZMfR8Fhyr%2BEVaQTBdw77DdeQj3CFkn3K5%2BJN4LaHCyYsL8r3rvARdBfLJLRUy6i6fMuQyk6NPxI2ICY3vwpClyyiwk41CxmGD2p4kOWjTS8Fd7O6zMLbv1XpysTEbEzL%2FewbwbPnp6JmKb%2BAjwYKHWthGXn6RlHWRGPCae94q3m6MPTbEjCKSXFUGFj9IpshcbZn3CCChguO894UQuvd%2BXTwf5RKYz8VFcNDcVPmKVA022hG06M0FNDf5eglN2sq%2BnnoKZqaFTlX24300ylNniXF%2FAAGStSvdIZic0w2aeyAdk7OHNGGy7DAmrTGOPv1CBNJWLNLgjzjmgzjZ29mbGl4F9hDozXJFCbfDokIBtHigosXzMn5M53jvHL%2FO%2FE9BiNcfX3plT5VolElcAcREjFYu6M7C%2B2cjcErRC%2FuF40iSF1UqaH2Dn9Q1aSyQzM3%2BpBLwQRN8JR6DZiHUwoJrzwAY6pgEo8kNPffr3UGk1hK%2B0FNP6YZI9QQ4oLboxaAo8ZF1ZAqFljjPrsq48%2FfaSuvTUlv2CSAc%2FOh18vqJcVYP8SLla8yDo8XE63cMquyPAfyQOB090EdkCoe1o%2FUIaqu1VKHHQ0ON5f3gy3Nskrdq2aAp22PQlptTi3%2FoZP4Pqs3IFAA1yPMEe2F%2Bc%2FdHzaVC1P8OsAmMegj3KQ9B2GfAyMR7BBB4yEE55&X-Amz-Signature=074e8ed75cfd6b1e483c122911ef703780a61130a9d82117593f2001ff0aca55&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXE74FIR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKtPMnGevRwKZoG%2B2JRgN71D5Nnyrj%2BZmAV5LPBAI9NAiEAt3XIjtzEIS5jg4r8Tml%2BlesNamvkclswylApV1g4bWQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIaN1%2BuEjexONS1XbyrcA4ExBAIIi3g7aDO4UsqRhoscafaNmBmuyiT56fOvRZ%2FdxqnpmBV7zImLkjcnSA68A2P2hywYAGdMa0CxlFbun%2BlqkHCy2Vq4A9VrmvdzO%2FnfDfpTko%2B2cbCQeYKkVXS280EKtIHMeOyZSO2K14g1Fg4JUDe1OzdrMbbeZQl%2BC7KikxHAy7fmWAGFIMXj2SKieD1u1HOegV%2BZhUUcW9WGeRlwRsL3k1TtdMOYib7iMx7MRq2jMp5e4QF7arfExgiItochyvw9o93D4P%2BEBQmLkGF%2B8eokxH9C5HQ%2B3gx8Xk4ePfx7mCGlTwfTBkoPR4ZQp2%2FoSNqjf7f9kwpu6jKRKR%2BrqP%2Baw9FSBW86aRiqsEZ%2FAcl55tW12mAs0C0gtMw6gW1%2BHQrec51apWn7AfRtC5FWF62V2KRl4GTA58nKvmqcRgOseilmgJjEDkNQu10izPJID16rlPVkDxUw7JP%2F6AidcqDPAqP%2Bd4QkbWcZZdN3rgkZF4SI6kkhvOLvemUdtve8vaTiprh9UDOqWxQKdh%2F16UMKb1FpMKKI1EtYomxf3c%2Fj8l71pBwYFW0gqtFqkUajetXSgSEneRMrUvzpscOZYhemeUu13%2BLYQzTklXafkt8WiwylTar77RvyMI%2Ba88AGOqUBm0wEMtg70w1kQdrpmVNDNSRoNXOfZnRCdvIFK%2FBFyMIfzScG6CS0OuOOEc%2FTds3EU%2FvhZSahPINXVZNSkv4dy470bXN6pvkWfTvbyqHeUV0Oxeapb%2BDv5GxSKTcHPeXYFe3zKkAeBeWzN0q4NoB6U8onqrhmXk14BNjs6OReZjhA%2B4komsEftN3aEoo5bsK%2BDYMfnRFMnW5ioCrlW0p3dkBY%2BM3c&X-Amz-Signature=c4bf124686fccd9ba6db89a4cedc67850ce7beda618553a59ecef773ec51f191&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
