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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7EFJME%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDu5xmMvR%2FpiQEbSJmKyeTA5JWy%2B3hOu67ZLtLnukJBEgIhAJUAmRBV1qAXDwrgj3%2FEJPYyPbvAmFe0Bl8RQeAXcqswKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBEMZyY2CJM8GCWGIq3ANeWL03ImouASsbsGBhPQnLOLc2x4Du4q%2Fe8NPLPgSyL9zHBXmFc7vAQi2hcxXe%2FXfmXCZilqUQ3MqbNzrKUfZumtP2S4RuFc0IsWgNhiwx50Rx6%2BzMb7jd0i5RyEi1XsxPa8lCbdPSELQK9NRuQwwyj%2BDj4s%2BZ%2FJBzCnYIZ11mgoBVWC3d%2BpDei6zs36m44DxW7jlH2Q6ruxqMrESzLC74bntV0VT3E%2BtvVyPJBAAScHIAYEjLLPfU%2BOZiNri5Zgd5KK20TMDO92M0PKKEVQV7JDCbRCfqxZUIgTG33MJ315x6dcz0ad2URue9hk%2F%2FNpgawEvBou3IxRIr0ia0L4T4D65VRZMRHPidfLRaCNgnkiK6C8Izzz80JDuh4vLPklYxNuUFUtMNADCcUuMDaOvgvVyEct9diUohbbMYx5Im662xrVkFVw73HE1il%2BklB69BiNztOivQftvkpHIIAMOYQK5XZ4hwmJSS8casc%2Bx%2Fz94lxI4nbyjYXaRrr6kHATT9gba7D03gm77AYnchlJZ2RlnIHgY9fsXmjsxfaCHrKoGb64lv0fo%2Bz%2FX2g%2F5h1j9SJ0UL0bKnD1BD5y6znYDP%2FeJGZmMW%2BG8J6Eu01xXaEe4G1hiVuJ7ZJpE5ZTC59oW%2BBjqkAafzS%2BXNiB08QNFwOlDXd5zcM36ApXJx%2FDt3sYwY%2FpS0AQd2XiDydU7SkX%2BZ%2FAqbymrF0sgz5XEmI2GDZBZ5ObuW%2Ff1J6n5qgYYfVVD4WQlt35INVeIcpbuI0p4ns55vQPQUAMYhal742os6h2bA%2BdOBkrp1CMRhnTXGEMq2rcW1Os%2BnRs0b6xgxSV8NJlHRTT%2Fum9gbg2hON%2F9NWipU60uCXTK9&X-Amz-Signature=e324e210873819f0143e2134d43d9244f5a63f2ceb8e96f637aa4a5e1f6f4dd0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZF7BXDX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T090824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIFntDTGMX4jG6qnP4Cb8cV3MARwhQD1D%2BM%2Fe8D7fvvWjAiEAyugvciKFfqMFJvMEBJaUYT0fvRWExTJtJ9fknNUdpJYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR7A9mNRTn5a%2FJplircAyIH4IeyRYdT6uetxe317dYRAv%2BtH8ZNAFaGfvGLLKbfMKPrIcL0h48C2zG3vjsO5VG15htHldN7jIGFXLdvGluBYHYcSFmCoYTXLEOm2SM4LmEBQOG8b7ijt1bQVkugu34QInr1u0rCcSDRsX25e%2Fa5KL7GxG1PYi5n%2B4CUNP1g2r%2BKBJ71PW1Ai4p2S3DNWiaovLxV%2B4f9P7%2FjC2zIJrrYTcXvOJcyom3ReOwp9CAc%2FWq5D2sMfCde4bUG2PWng25QnAsrslHsmBkrq9SeLMNfqg3Fwrpd0VDCFH151UGoBIEckgEQNq93SAH9eEuayva2uGl8SXIBQPBonTi5LMiAwyWKC3TkNqRfApo62eQyfmNMeMYQeLnOVrQOmM3BA37DPCxS%2FmwesREP2Lu7VQOceWielUs0smuqVd8ayqLb81JpzZ33WqzU71OxStRDe6LPyupFxTDEdGvzgrGnJzTC%2BhpdDOP9ITZJyrHYLquvieLk6RB0BY4eR0PwyI5zD%2Bnnt1%2BAaroyh6DpYcH%2BQzja7ISu%2Fh%2FELnS7uFhs7UNCgHt3zuqa%2FRW4i9k%2FfxNUQN4%2BxcoI60vRz0dLMlxxY%2B1RyUTPkwGxMT5pQUW7CwMq0hfQDb6DRHmdShzWMPz1hb4GOqUBDN5fG0ppfQ0P1R9P%2BjEpUTVn9GNsmHb2RK7hE3hJYbI0y7W3T7kbL3ujdOeZyq690pkOURlVx7%2FFbRp9F3w%2FdXfkss07mvJ8iGfIeiV1W9GXz3Yiy2EpHFlUXv8%2FmtJCVg6XeKZ%2FGrGhmUkOuSBJ%2Bbv12J0eMI%2B5Hl%2BAT5TRKLCHojXh%2FNoqrFsBI%2B8um8Z9AS5PDoazswdfhrPcmbsgnHA9AvVW&X-Amz-Signature=f1ed1463b678e0284555d430e53989701d7cf09f7fda98d5e524403d56b53dee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
