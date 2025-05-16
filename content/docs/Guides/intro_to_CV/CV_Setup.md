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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G4VXLNN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgkZxu5jbeZhbxsR1TAWTrwk06fzpF5ZEv1pu6cu6zwIhALvLDb44vsZx7kDOqfSfDdRK1LiP3w7GEGy5NF5b0m%2FeKv8DCEQQABoMNjM3NDIzMTgzODA1Igx9y8RA6vfDtQbS2nYq3APAdnc5gMFBeNolm%2F66LBVb%2Be0LGP0jm%2BAdHDuEGPveQg%2F2VFYB69W3DvglLkMWMNypTjWgjiULEroAqmfZZkCb8wQzMTn6A%2B%2FNn9ImCpXybVpT2aFHOl61OYtwsVYjDMChXhKvuDcCKDcNrmAbcUUdnmCHPKeH5TTVYd0wjq8c3cUIo1%2F8DeuBg6jFkBtsfGURIe2QHGP6KgrZ%2FAm842TWrxc4S6a9E%2BET4Y4IOZPmyKpcw0LJqdzD7GoPf6s2jDOOmjreXZaJsOtlfXpdaCYNjJpPyn1aa19D5utZeNa%2FSv5fiLSbK7sT3BX4blr4XxmzgpMzwA6ZmW5cktCq0pmqGXakndmNG8WQxPCnCDoH3F8pJWsavm8v08QjGum%2Fz24GmgVfONaAMLfSD%2B5310zqmadLejPGeiphK%2F31z4bwdOeX6KKXmwexWgPZ74rER96oILIkMNArwXvGDhh7wX4g2x3XD2JPdqiGGpu3cvhCnWO78jnmHxlqeBpPZs8JRD7KzHCa2%2BpinUto2iOFL5xEqSu9LXOCWG6Dxhh6Yovnwkf0wHBYOrXEDUyQMhV2QbbiUskCAt%2BvXt%2FBFRfv5IW02zVjzWOV0j4meJrkH5%2BjveGxBfYmJHLXNgAh5TDUp5zBBjqkAVJVs7%2F6dI9N3FAdph%2Bcn7EqO8kxyEP6vmux2UecAmYfSRo6V6wKf5c%2F770h4%2FiYa4kK2uJYeXSCDlp9wlfy%2B4GltLbakD1GGT5lVN%2FEo%2FuCL%2BYXP70ZlNenCHoC6oSFOINc%2Fkp0tVRmDnEkKEc06bia4XV3IRlYhx7C%2Bs%2Bw4R%2FvxPAV1c%2F%2B62Hg2GwK8Fg5MfLAQHL6tJiC4NV32Uj5Ln54sh0t&X-Amz-Signature=dbb325867e93f76a7d80fe0f4d5331d9321e9534f87ac40f90cd18d55cd78f68&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5HJPWBN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBv0wGn5UjUrx%2BpfQsBDn%2BGHE%2BWtflcEHztlw8IXYxgAiEA6K4vmUtC6dlitPinDRa%2BHOSoR41yPY15wevURwpAexQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNVQ8rp%2FzKrBndiaaCrcAxIbMvs2IIfi44WKANFbKdleW7MTLzAW52JSzpc57U6Xr5%2BIqJMA3J8tLTvaVp%2FKru4RtRJ9Rz5TMAZWnKwfSLiK9oKpOXGyUX3k2wDr%2FbgSffqGnonccb7y%2FdEUOa%2BSXHSGimOeMhzL36A7sSGfYtHJW18p6AZTDgXU7yIy0f375cT%2BlzXk6AzmmzDhhSoalK3fintWQe4wh4m1Okp4fMw%2BirZn75hhIOPTailoDqiJDT2gQOQfgN5mHRzdJyLFthsKH%2B5S3WCosGITOML9eHt1RMdUk5bQZBTNATRbgYx%2F2IIz76rc3gBz89tOE9bfB8DgiNpEcb8pSz3w%2B4Tjqjwr2XvMvrUFs6NWxYW4732VgCdPJBkPrRSmb%2BfrNXS7cP3%2FF6E08sNEpp9%2Bo%2BDSJKcZjaNRLBAoxA3IJMgkLOGyuRp4MOUs7bB0Q9F1zzF3wQXw9DkfbuewYSNtdYK6L%2Bj10S1YfQHYGSsBEgUqQ%2B8iVVEwQdluncSszRmPhg2MsAGGuymIF1Bgz5MbOvUtfmt%2BJf2jB0d2m2jO81cTvmIo8iI84CHig6mHjfe%2ByPeaKFIEQJci2Un8pb%2BLbRr8BQxI29oEPxGl%2FmoQlSceySHH1Fm9%2BFQwX6vEppr8MO2nnMEGOqUBJy0RbuyHtekKSJ3nkn4PVHBYeEDx48T1qKf10AiCsSHHQsTq4RRkJIsgmN6OZuLSot6mTx%2FS2ZMv3WY78KpIZFtxX626oKfAsYNgQUpw%2FI6y2Io3Zd%2BJdZtm6lsB30dViD59KMaXvHfVjrDELi0Z6OcW2Oxu3pBGWtFerPDywb1VxfBGR%2B%2FdTp76%2Bi3Rix2st7Yr2m3vKDgWWJ5uyPr1U36SM6TR&X-Amz-Signature=1eb54fe0159650c63510cfc801c894b4e3a8004ee12372b1d58102bb361211e6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
