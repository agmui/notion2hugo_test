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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFWLPNDW%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEXLPPKmLQmbC%2B9%2BvwetgZGqrXz93aFgZaziTKtfkA0ZAiARJv0roCzJsgj2pM1Ksysk8oa0%2BLyNUmwWl1qIULMDzCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMkjva5wwcz%2BMkhKkMKtwDcIr1oOhfKHFeSAT8lZbQqxe4Y6n0%2FxKGDj48oD6x%2F%2FF4Po5CnDupK%2F70pKjptt1J32R31sRcGgBRR%2B1280LeHD2nkBafCI%2F74OH47e7EPgNfOxMQJA7hsZQsIKXLXa7WTlTc6okMUpeEgWzTn7gd8bPQ3aGHMjmUhc3gviM73W7BAdW0iroGV7oe6mkKS3V4hYfy3fu5atOxtXQdCWZ5yKqVIpa2N%2BjFQcjrpzNLy4WzO2WrX5C5h88Z%2FlnxDgLAbfJC20nTdpofnOtMUekinqC%2BuyBC8YNEAXHNUGUglBM251jg4R358PWnTYIsd5NKXmS8rbJEZIPeZFYHlva1Y8yejyoLLkJGz%2BwMCRQQMET6wQC2%2F8Ml3BuhVgdIonw02vqdteDXg04aP2IjbjJ3vMy2V%2FBZIsZHGNVjlu4Qvoiqd92mhP6DmobaCGlngudx3nKgFeqeBgTYWDU%2B62hi1a9njWGjufU7BccGfwVOfAValLkKU1A8Zx7BAJkybnQengA2WpF5fJvxFp8vUHnkdTheCt0wnC7O4UHzbnhXgNGLSWrJwke6F1GWpMsvJDvpHftrfVX95qoadSNWcgrS%2FIg38ghVph685Hnty5%2BRyxVat9PSTsMASppDwXYwgKqwwgY6pgHRTWHbkz19bHTLcM93T3Uc%2B3mwi8Mkgx7lzQiBATQ%2F6rb8kjvjNuB0jIPktmfm51LvZKw%2BxPAHcqHwz5WnHK49wxjfmkmQkysNJRRXwMV50QDwWq5HdGiJxM32Ajy3ir6xXSXQutDpEDiqc3asBdhartk%2ByOv1s8XmmhifOdewBHhKJx1KyDIvo5wFoLBHTO5%2Fki0iJJTSNx95XcN0yaw5EwV8ZwwE&X-Amz-Signature=91f7ecd5602c132cdd4d55211cf98418b5b8cfdc0f2cbdb1704449cd7aaf2fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665VPR4NN%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIA41rrkeLNyIxELTQFJcaOpmAyKgXtqLCPhTZiHA5cAvAiAxhEoK9y6UT6U698PzN3g5y9757PFzcak4pXhf90bKTSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMR4dA2RA%2BJ8l9sAwiKtwDnN3XNE%2F3mA%2Fx4DzKySHSsADfaSz4kbvXYxfXajdmNdP3Geqx6Ee2ou5QE7cTO4%2ByHMmY%2BurWg%2FypIlosiSdQbaMpfES8ekn0dTsv%2BSImcehPy4orLUeV1JyJ6KrHKDEqdye1oasR6J4VgIl7UhSOdlgrzsC4nwQ9j19oTMlU2dHEfxVcumdRadspWNpKiJqD6cqC%2Fd2gY4r7N8ffYQMqZYBxHLKTnOyqfDR92%2Fh2AYs7SOZTx60b9plgkdhiaGLzirpVIpxwx3xD4k5lP5qiKBirSU2jVEDzmDCVgPhfFz309nHNLDSlvX5puFoYYUQHmRVWGcww2oLINydMQiWHJgLpIbFaV8rDGGIzs3AS%2BtOALM6n9%2BYKl2xRphd2%2F4WqOq9kYYyHzNLpvrpcU%2BjQ4vIkzwvHu8Y9%2BUXC1mXDAweVrAlqTEi8fXgTV3lRgZcd3HqUBYF%2FkZAZiAkbICcwmOJsbter2w4ms77Ulb7%2FecwrCPBqWpC5o9vufI2m1WJ6Sba35IkszSl6fEsg45HVuEeBA0EMyeK2pEOhZSxmGn0CZ0kYzmPilnmZ%2FsArfa9d0mxjKFVdtxxjk0ZxZzDbXoMM2ChxbXl4GZRQf9ndwyO0nhoK3j4wvguLBWow2amwwgY6pgHGnSyP4S6%2BArE9lvSRwXrijTleN5lgrBnRcZki9ZV3Arw525eFRAycuDxJK%2F8a%2FfpT%2FCtpUOehWLR4JONzVJi308z1pSZqu6gkpGyDbckuVewx9jyFtrbSXdjJqQzctx3WzXWBfAtlwvM99ws5IdLy%2BIgZVKL9w0q5XwTUiE%2F2oyLaMA3q38PoXnwwk0fPSfCKuH4A0XD8aIfIX7VePhYHgF92aBVU&X-Amz-Signature=3e3cd35772e905acee8e8da9fabbb95720c324e63838d25d44b6209a0a0e6361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
