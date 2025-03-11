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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOAGFGR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCdjNsYW5eFQIryJMF4C4PZj%2FaAaioikx%2FZzScNu8YXiwIhAI1w%2BnZ99EAWZD5RuoyFSi%2FgZL%2Bk42zQ7JRBJCL%2Fk5rwKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfZxFdk%2F8ayKSP%2Bysq3ANBXMWgVRAVYQyjX%2FOySjLeVcYOUaQmH6diNe68J78ysnQYEJyKfIKB7xqVxmFHfL77iKDWwA1EjtxHXXEcKQ%2FTD000TugBZp8WjWhtgTvBfEQeu1caI8UMFMU4RdKMRLRUZ2xafce%2BTQSg5XsbOCVUSluJ47alwPfREVTScrP4xgb%2BtNcnpTmXPam00Ii2wtHmqJD3vY%2B93X4ngyQ%2FWtiZQg23rXnRNkdivAeC3vGfsugS5pjuDMHSptbiLTZ1LLB9u7PUGso34%2Bc9dQkc7yrpNFWqx7LvUtKwhgpTy5YAMhPUFtyEqT5FIMNLAwEu4H6i2MpwQZ1iHrUKRBJdvDtwxpgQ5R0qEnKlgHu2Y7ZOaiwSK1FfHdNo1Opib0ZAZJo3slsF94PCK2g%2BGzxzNZhnkfR4QyrtLcD4URBmweobKaBkl4FQPuqAFhBRj3b%2F%2BhG3avyXRav0usWnBy0zRWmkxnM6xVkxAjGXaXfXI1tpVDPFFAR%2FghSj5vSiUmfW95Lw18W7BOh2POVTF4OxkL%2B32vnT0kyjvdtBKBrYWv1ecNVOa%2BWMgbDYlUfayS8aXs4bRIXlH6EiMTEqLXfcyiDKzsWRR9Xc0vCPkY2LoGJNceh1bR5LDWJAckNKYTCc0sK%2BBjqkAfm9j18ZC%2Bxt2l4Mow9MzMB4SyyL4otcbgRCutE1vltHyNwC5WvPC%2BMOTl6YPeJNP7Cvx3ONDNf2WT60rRt9EXjEK7x8YGhivDMt6j%2B%2FstJwq%2F%2Fcq%2Fv72RwF5w1%2Fxqffk1r6KKsKoJsM7GmDTU1hpomeasLjJ%2F9tqk9x%2F2WSy0tETBXQls4eJqG8Q1q7apaLsLcFun%2BoIIe7btOWxGGlomM0AfMJ&X-Amz-Signature=70fa9b59f766aaf0fe3d765b8abf037d645d4e4045f742faa391ef11045ba0bb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z4QMIDR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEses5nA6jDv8zcKPBPd25iQj3iO4Ig9c%2F7cRwpg7CqeAiEA%2FysToZr63V3N9LpUmJtq4sCzrQCxR7cBGYSS8Fi6DvwqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNOZJok7p6T66Xn%2FyrcA5ajJomoXGFv2RGfseqTsHWtxkYqtpqxipk%2FkEosLc38ib2HJXrtsq7DazVF%2BKIHRk36BaW%2FDizKLOptwC8TwQ%2BNPgFgdPC9iD4mClsneM3gV2eAmQR72NmZ1lIL8rV0lV5t8FjmwxRAY20Z2ITJ1o9%2BuKUQ6vBbaS%2B5gUhwB49Zc97zyvYsThYsrKbJc%2FLuN%2FezDBCiWHShK1dUFZ5xDqbIsrcDuRiJNbsDPYNP%2B1GYr5IgzrKmu7Sn7qxoD3nO3GqLinL297lC5IlWHA%2Bv%2FsKj6m7erE%2FOwy5LG77xprTcaCoe%2B2Rly3EjiAd4yhCDtxiCWGdeyea%2BVm6RnUevY2cx7h8olhp58dBmROfF8Z6swXSsc%2BJRcFwEXnODkuQXu0%2FUYVeOO5R02836LZGAnTiJatVxVwN2NMyu7eGHenIMgCOoLOp7WTNOseweFhsvF%2BZ4BgqNrcED%2FH9lS929LwrQRYlOcTb2%2B4O84Yo%2Fulsj4is%2BmaDqsKPKTgL%2BgEiNIzMSTMEO%2FE9FGdUcIKQtiOWFfuKP0c9KsCY6oeEKK5Nwwx1srUO15npTHBNYKUD%2FRY84JhNJqizSMSWlvnmTQOR%2BFlWXcl6BxLYJW5D3XPUSLaM7HSOW9jWM9iydMIjSwr4GOqUBoa0gGuRhN0YkJkQx58jo5GfEtRbPC%2BJiDBe6HZf9fDzSCXdWK%2FFEPxhAZiXyfzOy9Dty2oU286j4MC6Y3LyeLYUfVSr9QeKcW2IF%2BHMGuSn57NIdjYQEqr4fYNQ0x1fBSwr6OGBPDNkv2W6fVgZeOEK%2BMAIxY8jVda3SOIqC23gj1kjy1Ygo90QNbBenpoJxjWxB9xIL2Yaoj2PunJWofwIbwdAJ&X-Amz-Signature=8fde1dcd1125505e29e559b1e7cbbff7155234cf4a03795fba27b6bef33d9872&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
