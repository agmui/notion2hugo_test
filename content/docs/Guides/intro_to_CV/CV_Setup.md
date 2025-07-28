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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAS457ZP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEhytbshXBjJbetmx5mr4GHZQjzlLz29shaN06P7d2MQAiBiERaltdERbTAbyA1C1E0P1%2FiT7ND%2BEnTJNAKRH1DriyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn0sGIJOrMpX5pz%2FQKtwDaiy9O8jqUC2KiRcskdToPqTSmWWiIo0sXGgecni6EJlVLn6wVuQNIB3WhRG3zltB2Qc%2FkM7r72MzlgDm1cPq4sTNxyRLo%2F1HjKkcmSt%2FO54iNMe%2F9QqHYGLsxEvLVKWxsTJUpIOPvW4xuIm0DdiafddZpJPGg0ZlOSf5swmYs9p%2FbPtPaKkAP848gw3DYyby4c3DK6ScOcG072arRJ2Kgh23%2ByHLtED0Icw1TR71%2FHBKTauDDeoC9n1i8mCOgYmIyKiOi4JXW%2F8OgbPMFaH%2FuPEV9KkCqdE4oR8hpgTBVHHHrDJiCaRABQMzE3QanHGPoDujZq4qB17dR1jDHJHg6n5ekwexRcBfj63t33j0DSxBU8zSHetWITC7JLnSm3suhrQmz2qF%2FxH5QveiESS1irvL6g4SSL4GOJ6rFasosVIG%2FSE5at2GrQDzKcWKJ1bP16oQZjtgTHim%2BjsdkBxMHSiPUzqEtcO1UGimCWPl9H%2FJiZzjrTOUx3GCaoji%2F33lxsYehN8QxZkJFfC8ioMW%2FLT2H27YN33%2BrRZNWomp41Pzvwx2OOia1MZm1Ywsip1ZIFhJ%2BoG%2F9sXk2DR%2FvOJfqZLEUbCqtqQDeCVvo2whonNrw3Qn8NLfO%2F2SFmQw6Y2dxAY6pgFfffTuO8OmQiCGK%2FgCRowKIXF6SmXs4%2FaH4ZOa05X5DqasA%2FA3OGnEhFXCl%2B73zvnjWMOh5MVLIBNQOVyHaWnyfvIwJQTgY5xd9Zpul6kvHyvU%2BZRgFM%2FXC%2F4kOofCKkFp0joXiJbDzbnmJV5MV7ZtKZMelgBAJgzMKxSJKXPWI5GAuuBu0xosyq0OOkfAmAapbVVc%2BO9owF8A51FRx3ocpYjNHoM%2B&X-Amz-Signature=581ccbb24f8b982f8919f91e007400d27b895938d1d8c25fe1984e10a8fac729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJBD2MF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFXM1fcNYy1dSFXARHmDFNxMHe911VKd4aSU5lUcg0cZAiBFCWKLLvRiziYSgM4fWXVFvM4%2BoorKL1CtBC74IYfEuCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM4ERpMgW35iUjKT0KtwDnD1uR71nuUHmDxMWXFx%2Bn%2FmPmLVb0huycXSQlPBVgSqRDmjgO92VdaCWCBddxVnUyUcONYIGRSQ1gf68DeDMoaAeJ6Wly2YiHkP39AvTb1aOLFcmqdZ5G4bO8aA6jxNjeGd2r5cspCTF5nA%2BDguE7JlAnKJWL1yl1ATzOLd1cRJQ%2F2taa1MD5mOoXXAcrNW19vWssW6VCMkmnO0XbCqEvTnP9j%2F%2FFESTihOzynMB33sGnjIf7p2IqLPg0u4BFC3y0eLGhOq5yxTC8%2BjybxKZ1qepwcNeNFJtrU9FuwXJqSg3gXBPsNMPse%2BGNhun%2BUxiYLsiHr15NwETEpe87A5ijXtfDDGAS22sHM7tHWDNQ4JfVRKggNCckn5bjoNqwdXYnmp0xP0t4v%2FDmWdFI6yp1aIpNV9UlLWKoHrz6i%2FM63NuNSL1Eq1lFMJFEtsaSMB5O8VQIO7y6QBhhEQMA4wNW25BN%2BNx5VGgpfb7IQ1ADGNGrXETKn8ff%2Bz2PdUgT1ulCQ4EbsqJtk0byV4c9NGpdVaUAmGJJ7c6JKZmYhD17Xq0CzLURGrPysXzKFIZ6KMkhxFZnzcQ5pi9x6zX5AApGSPt8w4S%2BfagDdnB2GOBDzqAv1qipSxHmtKjxuMwkI6dxAY6pgFiOD4mRxRJ6EvirgchUOGdbX3t3%2B6PDUlrIK7faPo4CfrO9CcHSIYoyGP1wDGio78CMkEXVDPoY5qVliOHP31R2FIoR%2Fl2ujB5IrIfZHMmlNQuz57ol4H9q3vezGh3wHe6wLHvgW6GtLAapH3Cb%2ByQ7YJdgIiJbJSd1oiTZaWx2kq5r7Clh4lzTrvLC852I23Pmouu2vZiVEgHyxKJla0a0DJDBPtS&X-Amz-Signature=1275e1961a69ce6da19e3adfad4c3c6065929f3520075addda78a234b5d215eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
