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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVU3OG2C%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDPy07lk%2FCN90%2BMnV1cBdAipGQ4NJJozVbyyIZ4VV2K4wIhAOFI6O%2FKpnzPbgthTZ2BiesHxaT%2BdF0koW9fVtL2sjLzKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwibjBwegzmCmtiAWYq3AOleXLD6cf2CrxLmVJDW8rl9WLeWz%2Fvg4Q5N6x%2BTRe%2BC142Aw3F2lRxFr3SrgncevFvntymumVWDGGse279gUzg0%2FiuKz%2BCIYwRSiNmtz8hA9TFgMlaskch8N0En4PBHyBkUqQUmjzzq444aOag6H%2BF%2BTQq%2BHF4x01YgntLFLOkeu2Ik%2BdpjV4EvitS8oqktVOsKYVu33rbR3pG0chScxJQtYzN%2FHFL9nkDZK407xkscz6q79vZWhD3b5%2F%2BvBucy0AoYg4pEexXxdpX5Qhp1zEdkeFPUvx%2FpfpDjR1UN5sMvVArbJXulVHpiLWtpVe%2Bv%2Bk2hF215F5SspYw17NORKyOflw6Zv7hjcAdgAMlYS17L9AY9lHa4VpLTBoeNU8xmIuCJi1xEjThhRVu%2F51v1mdw9Q5dCyxkziSPPLmRjHnH0AHMvmrOWO0LN%2BgRMfJG%2FNrOj5s7b4JRXOX3DKaE7pYO3VGtDtklfe0%2FQ5wn7bdw5%2BLEukfo8rHTKSclW6fgVaehc%2BlUEMQXb3LQOxuXBeQ5U0ixa4iUntk4cAB5pEzOfVFT7sgKnrKRfKYp2uJNjTBLOMcOaT8TWwsfHvsOryoPqnZLtprIPv8GUhNPJ%2BG9cTdUtzys2%2Fnz0LSdGjCHsL6%2BBjqkAd%2Fc2hY9y8qwEQZBwiXNwkmsJhH7q7Ggc5I4uEnVnZok629mIwr%2Blln6yC0kcVjhv3MV3syI3NSFlauCLT0zK93saAXw1r0Y%2BqblXB6x8Z46uyJOxKXiBuJ747CPaOquNdD0JxHk5JTVF1hiNji1hBF38qaGXQlUkWqT3bAEh4dt7Q6z8TvcnWv2tRmJFzQt2zSoQL3TIHch85%2F%2FuPe%2B2Nclp6s8&X-Amz-Signature=3eceb1ba11c9b9627a6df886c5b7496c2e91b8f3c05a97231e37a26677073c82&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTAAIHFS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCID3awUAFc2BKNL7e2SMaI3Z%2FBLSX7tVuc9VCbx%2ByVE9aAiEA5RQpBWQOOw0bEnKHKcv23F8ZW7xrFmiG07kAjYHURAcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTi7FEoEmrUt7jNDyrcA2fEqUVcvxx2QM0MLePnunz%2B4giE5Gfl1HMkUCjL2%2F4pkxP4CnWlbPkCTc2vXqTavWgrK3C0lXtuN9VuMHNX8KJifqy17F%2FUpe0xgH3zErCIExSZGuZWSkheovfdO5nhljL9XUZxlLGqrtUyjk7%2BtLw95tDSrvltMg7zmAcFvuikhERJZkd97ttoiAKkZBi6veaE8loAfLEa6b%2FUGfsrsrF%2Fag76FaDtNWWySQ2aQAqigSvewHuloffTfmcW8N0FjsbL1BlvXUGPJ5tkqiPalU9%2BpC3ym5mjSEq5vLz1%2BLpqhDTD%2BXglOh79mQLiIj0Jg5TUkCYOla4%2FZAqRURrUEcjeEVJSbDaoM%2Frq9LSj5J3JQxBeSUtYmHbtAipaJCOYpF08kdnsNz%2ByIRFVJOXP8MkNHEqO5nEPPUwozJ%2BD378GN0es%2Fjop7dRd2iLkhh80wzNBsmaQts7GZyGLZ4JFifgLb4JnkXhksutOQfxjyyjUIf4cEB7mBStzMfyh5HB%2FnlMRgNM5LphKQ8w0wFuM4V5cl%2BlDVZAVSfggpdfP1qQr11S3swBXixtmp2GK7cwx8f9ufUSqEHJV0hD02dpB5MMUSvt4q2sHJZuxp7eDQuJ7bEjYNor5bIMkmyM%2BMNiuvr4GOqUBL4UV3e8XkrZIYnZdhdvH8QWEM1KnX2UA0Cu8MSGHiBsbhgp7qogzOn0kj81eG1e%2FOWd7UtN3bhBspa1RKJpUB3KuUVgy7lf29F9d3N4KLhARfwZshELYmJ3i6x4EBFdXLspNLPJdzQpSDtkrYI6dY0JLwNxNEAojSRmQxAbikaVGC8zJFgsPFaCOS%2Bp%2FFNdmipsHaB9kdDpSDrBQk7bQo%2BMYL6x5&X-Amz-Signature=a56c85ef68a4fdd9496c2a5c475f4a2accd04ea44212e03101a6402fc67a504f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
