---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WXDDEUQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIEq74rdViFPnkwgts69NUyAcL4R2q%2BACREVDjCB1sKslAiBxg5F5cBBVm1U0mZZG3KN2XYcFKRcbpK%2F66Kp8tH22CCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM1UJVxi75HL%2FPNregKtwD%2B7y1Glafwblnxn88IyjcwEBCoj2oahSuenhvAA8xhtx6NoMziCWnqk7i6wFtA10P7q978HwK%2BERP39%2BLx0xMifJQFa6wgh8eTmbB1uL9oAeneBf1pNXOBr%2B1wl54Gh6oMZCr64FHweCqTdovuW5afLwNm7A1b9Rza3T1U2iQXg9A3CcwhwO5%2FQJIZe3bkcT%2FMmnDyGG95cliN85Hqoi2%2FsBfycKOLpskRm%2FZx0CfU3c66HYTjAZIyy17STM6jEQ1xWuvV1ogHQ7L2sEpDI8f7%2BHFTWfTbR2T2aDgGr2dgE%2FsNNc98kg7fbn1jSklBgNYtmA9A1I6wAm3TkRNWrWu3rai01hMxcmTmgwFwND9OCSiOnBvrXjfVxrPAb4ZLntRgFIrAnNXrT4rlvdCCCwrPXvhabkozq7wYZdtMyl5On%2Fti7fJooqDotlXlefnCogzq0GDyD00Qm8SK4gI7hG4kJ2VH3UflZKeh9IYycUpVjJJ%2B3O1scQi7dXBCZPlFP5wcquy1I9%2F8j%2F5T8VxtM6uG2eoKQDbc%2BuuOLhCsjD01c749B0O4vop%2BaAQNixu0Lo0ZkRdzMCwe1dfSg5Dq5msewbH3SfBHhO4yJkIu00d75h6%2B%2BfoBhfnh8kSxmsw5KL6xAY6pgFI2fgwOvuKWS%2BiCiUmZMGiUoTSyFb3GeroylWQan%2FGdkRRGz7%2FCLFaKu8ZCH06MBVwgf4ZotQY5GxtcQGD3%2FUgbNnx94szvsbZXd3z4J5Uf1r5YsgqB%2Fy3smaNccmkwp%2FWs0HXlYH9CDpWRFAqZKwodSyeiF7lmrZ44N7GK%2Fhcp24eN27rGU1GTPKD0CziLLXvIYvklD2wYi1WqIRLXjmw8vXhBSb6&X-Amz-Signature=9913122ce59c698a885811b5290ab04aad6a9fce3c6ea903432f4678e68f6eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDK2BG7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDKJ7dadhQSPbzHeXE4XFzzpzyTh9gyEICs2fUI7u7tswIgZ8qxB7%2BGtdX%2Fnio89eFSkhfHaf%2F2WgRe0kuthBexQH4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHRXawUaLg72336qKSrcA6bWSB1y2mH%2F%2BvS65xVsSFt8d%2FHbM8ASiktLhYDzFh0HGTY%2Bsi0gCbp2aXQEHPKh5T2F4JqG86KTm7kfXpzLZ25NFXURqIFGUdrrv2aEnpEnDDf4f7xM8EhsU1pfJefw2hvR1Vij1a03uIPf%2B9e7nlbb3uZ7S0ZPUoEfck2cYtoLSNWRNNSvtlmzooMca23lTjqMzA%2FFJqCzVjy29QyJJFQGeLJUKpZsDVNYIxIIh529g%2FLk7gHb9s9TvvrPmuUxOuOp5nymijyrnkpKwW0%2BV%2BmqPdxyXYw1gmkDUu0XS%2BoZlbzR8tsj2L%2FNyqdgWS1SRUXJe93quLpmiqrgDD2GcoC%2BhdSi5Kv0S8ve3%2FNMY%2FquFM3tcVgvBr1Jpssn9idQHnaSIFZXKdGziFzk1oC0D6dAtuSoM7VwNplfpS7fJ7kyVbgKgi694pCF8iPjgsAPMgX4nO6PZ72O5o2MyafaIoacBctJ9koIXohrKtec4%2FmtKArmWGUG8HmQBum8UavCjTkpkmP0MgT4BdN%2BkN0ZSGBvWtwy00pgRfxEhZTLr7fWxU5vq8cVIkQNABfeq%2FsCxhX7zbpxJc3PnxdBMEoL6pV34NeHjp8%2Fni1YYy4mRqCuLPwHAXOKtuz84df2MMuj%2BsQGOqUBbXp%2BwU4ncaPBm7Dtf%2FZLvn%2FauyMHCFv0yrIwXjJWAtp2NOWOUmuAnLmuhz1pCRZPQeZjmLlmabORYbbr6YiQF0LKWXDulrFUlwlUk6xCC2Vq%2FSNgp3LXB5w7NB%2BeNs8NU4FuP%2FeuBNucDwPYaFvQyi%2BSxrqUO2omDmplpkwwcuxopoI5b90bdXSvYuR1DEtenRsF2kIf9PVBfqen0TpT0ywNxRza&X-Amz-Signature=9aacacde1cd3071997d482be4a15c8f6038ce8110290943289fef2ec7ac02fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
