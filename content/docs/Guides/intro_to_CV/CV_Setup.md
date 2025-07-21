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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRFYROR2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQQfWSOswXCgykdyxCOqboV2pOdae%2B3Vb2S%2B4z1ms0FAiEA5urV9T42WcTWtqzur2k75jfUL6di3GvGLf98QMsxpvkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHY13F%2F3r1BS8riuircA2mTvPBgI2UnyRNsVqDE%2FhWLS8TIj%2FbpS4bH8aM5a45CJ4BhY0ZMi6ZYy6VBiF4fSKPR0nLHLiKXlGuiVXgbRhY5IX0afZI3%2BWJVZt%2F9tlYfPK2sypcv53DUYMZbVWoIFwr3TTSR3SlczmNtgFmHF%2FdW94HUP%2BSiKl1aENPaRe3A1nIApEBTpdZtDQs3y%2BLuu6Kteu9O6cCJi4Tp0bXEQOqpl9hQvUKKVwmGVJsXrgdX3GSh4bVIoC0s1b901UxhcHu3vcclMqnKKZuuqgBnLXjhgi7kk0qjn1gPYDG4aqRcr7iU3e2xnhTJPhfhLnce0MgPWdd8r7c%2Fxe%2Bt2LOlX2QpvC6nFqtYBrNEIgSB8pP%2BLr1mNpaV4rc%2FH5u7Z3PN3GgR30wpGOoTjT6%2FAqa3ndQbNZgq75jpUslzgk1jc3NW%2Bodxa9m0Eua1eTODAJYLVsmgxOh1Mm9eZCkYbnHIAB%2Fj4VANbxRTgSeczTvzScaUOvBAQ5Oistuf62sCmA3DUP%2B7hQbWcyuyVeWcFViCJ4LMxqXz11mQuhBumK0qETUJIa3YgtTW94dw%2FncSy2LfCur5HhrXhxGKGpO4NjE2%2B9KmjdewBrW6gxLr0gLA9mHCMURLm66NkHhTW6RGMNXW%2BsMGOqUBaTFseALx0H%2FRrHxy7wmiejEqzoBW4rZ153wmeu87J4Ba1NDnV2PqK%2Fy9UYIiz0O0rk5PNqf%2BRidJqBLigQ0emTMJsrPP6z5bvwjJioRSkAP4FzJowsuOOjWpPB7JFLujOkIPR1TCq7YZKiLeQkjucq85lNH764AUxRhq1EWeVJxmg0sCjgZYnGKxLPXcXOKosrATQ52UbsIFWYnKM571oGsaqQR5&X-Amz-Signature=e4f0f97cced14cd182c75f895fdba6d2141ec3629ffbe7464129fbacfd9eab2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CJULWP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChpO0moUHRD12aje2kRj4jHbalHTzrVyusw8rxboi7%2BQIgC4yLNlekovNu9d3F%2BCIfjZhCarkpkMiKGw8ES4FJ2HkqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJnjGxCjnjoEvr42TSrcA0hMtlWpcwgmIFEtDPMU87rj2CajTuqgveqNswQKPBPB9qQ6gZ07c6q8%2BjE%2FHZI5ukQx0xFhPeI0CWv88DE%2FDfolwaoI7DziEj3VfvfQjL666Z6s3HIZG5ZGeOgJGmwEl2SUBiJXYwYxCHZcXegdv02XSSqZfbdolGBWPjCKF9Tabj8rOacuFyTOhqN7s%2BOF2m%2FuNVwdQ%2BemUsquGqczlkYl5BGP8fUqLYrEmddS0xsqy0WW1xIDq6Ml%2BaktqW81OAKhHMCiCpk0VLgT51ftLEpk3tZ405OCDtYXzVqUOzPKEYmYO27lGxQtggFB4JIlMtYUi77uDFJ5JxGaerXGYW9hoEgcwXQEH0vTbtNoaLy4ewJPVwoSjpMNeDDPGXq2NSKecORGma7yj3IGW%2BsO0u08b6mLmreaLutX%2FdyOf%2BMPrvZrwiPra25LDAL%2BvjiI6lD0ZoVcM2T%2BguywA9DcZR3YEqG5FQtELPTBfbDlYpuTtwUh6rFheshELcTHNWp4yId%2BHN17ksGlf1tLAT8jDecqaWGeu25dVP5H0psu24FFeXhiCfFu0Cc9oV57UiTt3kSUZTnQNds9L6tCTSgBSYUqcSeMU9JgbBEhEn8z0RpJ4YMtiNubHUHzMwGAMLvX%2BsMGOqUBuR6Mwb883zF7iBH4KzuFunK0GuDb2Wb2vMxWKg3OdOPm0EimASGAbsBFmiwck0joMPYV%2BuGuZ%2B3VoA8gzJ8zWyH9%2Bx2jAB1x2jRDM9gWEVxFsXYCUvMqpo8wI8%2B9uZ%2BSfFLBW3bA7Ttw8QsqTMwV2lmwDW7d%2FrIInLVnBwivUXPMj6ntg5xd346d3pTryhpe2oM1HZvUX2JfKhxJzi00a12fFdYc&X-Amz-Signature=6317ef361f9c9a53bb8d0184a0bc48c8cd284b88bea4b95031f73c7d2c89fecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
