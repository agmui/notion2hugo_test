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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ52UPI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAJhq4ISaXizvG%2BGFKGUaAgCtlgI%2BzT5aqZYCMGe1xhTAiEAnShahObZPDmvdjqvtfpDdb4tXD9DuVtXD%2FEiVG9DSfAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDIQOkKrXYRIVzRpjJircA4DKuFvjfztzr2m2hZomtKTM%2BuQtGbTRC6JI4ZDHXCjXpI7vK8GxOc2Sxp%2BIa5%2Bj7U6NhPQMOYwx1HEmIIeZ5G6%2FMLeXJwXvGt958DWM%2B93Gek7JDUJRLc1M0KkAgJ1OHrYwElcPBMP0ljYUlDEN3tgr06BoOaDD6hr1BFdFhcTKkEF8gSD2hygP7p%2BnZXzl6VXjPQ5z2HMvEc%2Fminnc1HX8oVz2PKrfFcegUFv0NKylRWxA3CYE7UQQmpGhkLP7QKb1njlOw6XdPII4b0GoBCcpwuw0JVUXBYpqzxcEEhQbc4c%2BtBPs7iOVywFbI18zTAAfoZMrwH9EQN4KmNUxjg7cEGBk0Y4YLzToh%2BRio5UfCje7oeAcz4MXoa5RgckBy9pjU34kndb0wGUYTzGsLOtXC39roWmJmPFynD0V2NG3%2FJVi175i%2Fo2MHwSg4IXBgM2WmR0jrZcE8iOyUtxHXXexFVneZ0GHAHx9y%2FNUyBDj7OK0LMTAec2QHBdySBr9dmBtQcpldr42qsQhESVl%2Bns8jDe9Mvu%2FsgtKnlp8mbi45WX4QC3xE9NnD7nZ3ngyT4shHIVvRo1Pja04cldfFqtz89900kC%2F9bHO9Ww0RhW%2FUhOycGo8z0CHEYwqMOjzxMQGOqUBg7kmqmGywdSfNzBb8f5fd8j%2B4EdDmZwCcAyghLOZ3uLUYEQhy%2B3gmaBeS2aVyk4p3N28ckUx2cHz%2BtabbMW47hgzTiNBr2vb%2BgkEDJOof07rcB1rkcptJKfMkPktI0duxBXIY9cRSJFZ2R%2FF%2BRtYRuTKWi507EfxkbmhxPOLOJIj%2Be5zwGUAmBLKoP9XhCeqlH8U7jcimJK%2FbvZNR%2BwiCuXlgPQs&X-Amz-Signature=21b3a5133ed3cb86326208fc3d0e801f2a63a3b316cf04e8bf8c3c3deb008f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYUCFNHC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD243SV3Q5Zxwp27N0yX5oZ24S60fyYzlyUb70Fdm4fFgIhAN0m1%2BhKSp1dpj%2FSwYD7mJ36mv%2Bm12e0AyozRC%2F%2FTxC7Kv8DCFAQABoMNjM3NDIzMTgzODA1IgwjdrHh1GyZxYb%2BEn0q3APqGdywiq%2Fn%2BRHI64sf%2FxwIxehAYktAOR3ac1wmCE%2F%2FjqJPqtGLpbwQiV33RYEbD5Otf2NUQAtHm4GZ66w9gWkp6RQc2hBFRkWvElhbXa6Xdztp0Ci1q4BordS8AIdgnvFhKhmd79xOlT0bmoZXfa844ZBstshS8vl93UZ9Gp38hStMZHWsXvTcqaEoq%2FmlgDib%2BO1uE7qH%2Bl5PVwt5U71nzG7FT9FpzGHDeDnivYk5mYfd4RNiRM0fwgioBayvefZQUO6c7gObchG8kpFqFpbKXsguBmm8Ufu5RMyg7ayzm8ElBRkxFz6qpR4J%2BLpO2fWPE9DEWC%2BYPxa4Eoo9W%2FFYKzN8MTuQrtySV5fY1556vkECkF5y%2FXoTwH9i2bWw4Rzf8%2BXLDItY56hm4w%2BFLHhXRXczzTt30qzCQ2yRkpxXwoHTQJyAZigSfZi02rku1KGMNaoskv4nnVuT2QNsZFtfina5sEhom9zQk7lfSeFQ5ZwrRutD%2B6xAbtX7vOZ6mggRug3%2FSRJt8IRA1rDr8V52yh8mPDE2IE5xdCQk4ImBU%2FqVF5FwwUiriR9OIeKSjsAXDGp6licPTOtodlM1tmTwDqSgB0KQ1y48VgbDHiH5IgZYlxzkOWhlUhQApzCT9MTEBjqkAf0ONrHg6hSFdGiOuEubgNILLjpulTTfGeXDTeuBelGTOu3EiHAR8YhmPH%2FS%2BN6oLuT%2Bos%2FPRTIzNyR3uRBSZWXpCJinOjv12yeLG18efqljAdBs1LTXs6t6LMiwQWQLTY9kRy1unW9cbF5E2ewdsDmlteDbuByslbtBUdhE1pRuIFP9FsdTBM3BDWrn9SuXC60YzjLG5OTgj0eCNWtgS9kU%2Bfpv&X-Amz-Signature=ead4207f698a62eb47c1be724960297fb27dc7c9606e3e73f32530958f780a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
