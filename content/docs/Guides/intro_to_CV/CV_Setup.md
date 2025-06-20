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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD6VDUIV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6SGuWBiCaFAjc0iNRRFrVZQ9owpHZpkrVSJE120t%2FqAiEAz8Q6o1o3u2A4WfTZLPoHsNq0L3IARXVX6ObNGS9XR90qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI92c5StekVtPSgmfCrcAwjVnF3D1tsv7AhXyCps8CDjdPg%2BTqUsFofAQxu6TVV%2BiEbtwrCfD6QlAgv0SzP2kx2iT5qee%2F1IWv6q1bsr1YL1S%2BvjmnqOr4nz4634jr541kgYt18URgoh0OCYITyAVJTYhCFpi%2F6Yvyhi7Pt6N9aVkMBKnAeW5%2FqmKVkzZbTa6PqAenjVm0aRdTrHs1zW17JB8fMdFmKUkYODYm4SQNf3n7nx4eo8QLsmjicOUM%2Fc%2FF9J73nIwMqTBsjRz%2BNBGN9YVNhdyX52TCdGJVL8kOEg0Ywol8cINCLRLcqVjpAakVb2SedS2Gq0vsPaetHSbxszUVD%2BuUak9Go11OlxhlQpdnCWlo2As1OKDJJV%2BqMF8QxNx9EZA5FEXg9IPXPAbRQqgdK%2FdhLHFe%2FUgMfDSe%2FLmtPpp7U%2B68%2FFBTLCHpTU0vymy1jSFobrnDfnxb%2FdzuA6hDYM3uMXG7hga4cDwQJ8gsWTyvWlNH0187Q1Ywfjcqug0jlIbZPqNI%2FqURCtPv4aciBPdfszd868orgYg%2BTCzvaQw94iIxr5%2FmAHovk9OdQbetZSNcuAralrcxt%2FUv5etvcY2wz%2Foya%2F7bl93IWobzU3rdvEIXK%2FkDCjAlLXUnEs728M9Pib64%2FfMJ%2BI1MIGOqUBvehX0pcexVmn9iC4DzFPPG3PLAd1jPco%2FuiwmHiUIAtYaD80soy4qQadU9KV6nXNeGFe9Sz4wmI4kMlgGUQ%2FzFks5pzmzGCs9udbHRoH2ne5cTK5d0jsY%2F6Jn6Ns2XhND%2FTBmbBo5nCSakAvi1USq7uxeJqyD9uo8Bv6aKd3iaMtDyVLc6zf1h%2FPy69U4ylcVovIQQzmlrKoSLMby3bOZPI7zuGO&X-Amz-Signature=afe9cde73ee02bf5d5ad2ddaf398768001081fcdb83ace4278a8c64be358f962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ34K44X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzKG3PCS4LkggUfiCqVwjFvyeDsk7tlkXSHB81tSd17AIhAMeUxwtoG0r4vssPZLaokwJ5o4nrgFWJamuBK%2Fp74zE8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6wdj5ekHQ1Kui61kq3ANO9qBke%2FxMYp%2BxIxhJ3xVgmJASSpmicJCVcteHpangFcc33yftySsUfA4GjGEfUNgyDwoO7S%2BM0EO14hl0iMkQrD5LyGDtypBWqQZeudX8V6b2%2BXyM1zRtyRAWRBHQ8ew%2Bfl2lL4QtxeXPQXBesLS8W2cCwknK%2B6N4SlotUwbKCc7Xsd%2BDaZyct0v5ZbvKvWtWXymChalFUyvuSArWhF8N0ChxC1lXkL0hnXsfcmBhD2Knz8iEuPIsVFJWavlcESMn0FCFUFwr81TDNFj3DWpyXyaGx4PohJoinEpvShHDsi2nD9IoMC59MkMe%2Bzx5NvA%2Bii63E4CwRt3B5N3xJ%2BDA6YjebszbW9ZykJE%2BDchb3BXZWN%2BZDDTrihs8uDMpXLTcpPKQ2z9xrfPfM22QhnW7Qy0b5T5u%2F5Y%2FZnU3Hwkoy6M2cq9yHJzJ7IZ9fhl7ntCkgzM3LLjhBNbovxeAuFY5u0QIHyk5tpFb61X3CRVAtqzTXMnGwh12qsJUkiYfV0jsJdrK1OLRFrbT2d8zwde1lvqqrXqs31iPOTUYnhIdKnGIBLcq30lapyvx1n23cAirlCa0niYoQ0UyHIFfCbLJaJG5HT1jVg64bwtBUdDnv6wVWkBCY78AKsuoljCXvdPCBjqkAVYx6wFxis%2Foe%2F5Pa%2BAwrSmERxj56HkXN%2B%2BTFRHdlFMtCudIjOi%2FoIQIfoHs70AYI6XwOtH9kcNmHCXO7NeLrcYl%2BwVMcEL8BMD8miPduy4k0UsXrbLEmVHYr503YPfTTu0u8IQlfLVis7AfGLlEMcOIqt52Q1UBJQcahRSi3NCMbjQjANWuVt5XGOZa2xr2PmvsyVtbH6%2Bu9xkYq198BUe3CDUQ&X-Amz-Signature=e46a691391670cbdd6fb85c6531913c8b02087950175673cd0c1dc934e257147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
