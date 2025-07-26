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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX4UEAC6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHlhgYwRBTmvVOfYB%2FgENymo9uk75fuCITsgXo%2BSTDZwAiA1GBUvZ2S0wXkdNYnczYO2xEsZ6QIscUC3R6F8umFsbyr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMKYrzE9GWDKmC8Cz1KtwDsoPsmYEjrRr5iA1U12rR3jfe40Aat56pJlNQg666hwGzX7XQOw7MpGnwFfGtqmb8wbayEBSNLpTeSsvlreYaTYox9hslCR5ppn1AM1XGhn3Ca8dP%2BJN2AJHMGEgvp7bOMB34xNaL12my4XXW8R6LHSl8ANnsFyGJ0JAM6YRPuaj5%2Fn%2BWMcUsXA3Z4GxaEx23UyhyXuAnhYo2rnTOhbXwrR199xXHApsG0l2gHmoirax8qqAkpWIKsmWEOLpVjHeVJsGljPSqZX6FHMvo9Dn4L7TKRXzB4YraJWTMbZXnqMwAXeGAI%2Fi2SUzGo9aPnkjl%2FrBfuAM23FaRFTQUBT7FTuJzDAWcjOTG4h75Gn7Z%2FosyjpG9zYaUCOud2LtFTTi%2FBjylsQkyR9el0sayLQUyDhOznWu9LNvSSBt7qA%2BfH07YVjY9HPZmSSBylj5Uk%2BijB%2Bs8PeKTJKOh0w8WObN%2B%2FpDXZK9BWcUzbwHa8mfPeKqH1xySIVtYJsjnB0b1Gse95Adl8%2Fscej8T0dVjq6Hy94oGQa%2Fx8t8aGsi7sVTHNCvwcps5DXMqkjjNrw2IMGza793zOXFWvU5pM0QaEIsoTPi6MsZJNK8yXlZH2vAAxs4Fti8%2BciQdQH%2FXa5Awj%2BKRxAY6pgG5hyDtlPbjrfD9IOiQfJaC3aFEnADFZu0zehpTpreOc7j35opfto2IGyWe4lcjvlJy8%2BQxlKVhnyMlfdPav4Rz6YwPhyQxeYh64wIthPLmJ2EL1y1%2BGsY5laxrSCazbV%2F59WD0kVSiEuzrFLeOlmMfW5MsEfwrB2%2Bzc0u9MHb03XqQ7smAHGouAZ4%2FdSyyTgsKsRba6jH9VHK5FarQiy5mInd1kLki&X-Amz-Signature=4282616a8d1d7d92fefc92da28db561805e969d567f8b9ca45479765aed94734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYJCULQU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCICZ80ENuuOlsu1ia4hjnddVz39EkOUTBiEm1Wom4O%2FBkAiA%2FJPW5aQcFL%2Bgf52Tm2OjqfiV8ms5YvuDD6E9sx3uYBir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMcr6%2F%2BLuQWrGMMxO%2FKtwDdch6CgPpHgoh83o5YTI0U92NhKK6N9q5Yp01fgA0PTDTt7A4kJfAq4MWfX9tFOgb49IDUG2PLh3za9N8UbyifCUUDfVG%2FsuKokKDwgpREqSRvWcyiY5%2FrfxJhZdnblETTbdeaheBwjLhVamfwCvD2S1hprnCM%2Fu1Edjgt3C1Y8csqoRN4WH2r%2BQv7ZiGfQ%2BPr8hkvZKfORtJfS8GrDorS94oD3a6WVcjV%2F879N3fq5AQU3aIR9vG5TG4h8pKtmsL7fSFCngntIam7fzSlvMHwFDUDz6NLbarriGHtdkp2XbkoMpnqrXl4ChHDPogGDtqr0IzBEH0fUq%2FbMQh4Oh%2FtLxvUajPy9AN3RJEjsvH7D5n3svtISy0Qu1FedpaBRliWZHPYZiSZgRjF1ODyQSiln4x1w5hexiCrbNBxsBhWxvGAoolGy0l47yLdKSMCNma6hEPUO943EjvTFPGKRTdjdi0oSbTzgnVgIwlutAuYF3%2BpLBP092dtACF7oZRqN7oCIZ8FK4dfNfiR8Uf06oY3y5L4fG%2FBo7nkYXdl7ZHZTprDJBALsDlTBI2dl5JhT731IEQ6JfCdW3uN0Za8VAoIL5aHz7ScxdJhbmwPiuM4OFRGUxbcXM%2BoxQTxZcw0OKRxAY6pgGwOnSShnxzP33nQFhugmmRcQr7114v%2FC72%2FCHovesxbi3AZL4WX1W46dp0xs4uXRbZs%2FEXZxRijaXnvn4%2Fc28JlSGKy%2FZkGl4zpCajWNci%2FrWv%2Bf9nPemhcovyKELacTlV9Pn%2FalK2X%2FkC86NlfE0mTSuEE623k%2BWYOBujVrm0HwWxMIRzIghhaHMiKed2vp13WvWeMIpRt4b4fif5LYzYOoabU7%2F9&X-Amz-Signature=7680def5457ae6657835dd29e73f39a5aa8bae8d89da80878f767dcd8d932d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
