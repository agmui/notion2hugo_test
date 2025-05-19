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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4FKC6JP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxO9lCoPWnsbWvnG4ZmD5fdEj9HThucbmtfuUPbmSeEAiEAuCeKGeNwuePrxgpeYBq0%2BrhJ8cQGIXAnJeWXFiglSmUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzJprwfP6mvDJD6LircAwRNBKoy4KaxOStkXKCaq5767YEbWAJvHdO5iVxiJbllCQEvcobVS13MjDk%2Fd2mcESXWpXIkzP7nH2bnQSFuXZyZmpZ6gdHviDxQH0RY1TJc2eQ7%2FTjVfgiC5EvO0igdPgeizVvw5yJ6XPviSYgnn0lqNLJsO00TORkoHn3QMJ%2FwAs3w3HOoLvsz8H0HwZqlSV8R1NOONgvoBxmEAGFiN3jg5swU3M5HWZ03RIo3hEOOMI%2Bue6COjd1jyuLWDDGEHhtHeyVy4kGIaqDvpPHegwLk3v2NDqTOnszVw0E4BRQl%2FRcR4OOtCKZa%2BFZW%2FTQQOkGJpQj8%2BmtX%2FxWvsojtsAi%2BNhn79cPkuPhCaz2CKXeIhPAHHcqvbvPMVLGgedpNj04my2REOZvRSrAZvX3gU1OtDkh%2BWk15t2NZ1TBdRT2N1cTnrRCIrdDgCz15t73MEsC3X45dY4PLnJb2QT8VXS%2BBPQU04e4VELj4kQHn%2FCCQXMsEtvW0sja6zZ4MKUeKXmiFZZU5CDgO2nm%2F0%2BOfiebvFq8YcM1Lrg8ur2Zn%2BeiipCiYSj%2FZSGD3uTeZsyr0LcrCxpkFA7kaTYETSwx7axLIlPk9oUoGPbyB%2BBNWTS9DMzGPDa1OZCN0DpKmMNGTrsEGOqUB%2BuUwSb6kOi5vVnX3AyKtHtIXNzyHDRsnzi8T%2BIP5LaUjBTP6bK9JFPvte83OaDXzbaKlzGQODCg3XsdiOC2m1BENOepISkocC2ZLuTkQZiZ84sgkqJCIGvmXGc%2BADCc7NGMt%2FPMcKTlskDlKd5yZ3amsgC7vs5CB3SZLOO0ZH5MofUhEcWtuwN0RAXHnLK2eCLgT3hy8bjt5Efy6Tolc%2B2fuB%2BLw&X-Amz-Signature=03ed417dacd238d71e14b96d2dcb5c75267e87750f89942eb699f7796dd52e29&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFWJNMTM%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANAd8S0VHwlGJ6LKM1GQPG1qfZw7DSSfT6PsSxSeh9vAiBu%2BUIt07gBk3tjPNTncDtJTazMMj%2BnaFp1HRJCoBIm%2FSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM8ntQ%2B6ucubVwybCKtwDp0OjrpuNnG44qbTPzMUPyPH5J3gGr5sc9QQMpoPP%2FbUa6aSbY8KwUC%2BHC%2BxSaAKTS9CgXgiLw7sKjzhye9ZAx1ZsH9nvC58hXNhmpL6qb9QP3nK40oUG4wpZhcamuerpSTrQaTISAF2WQ3D8qrcfd5Gnlw%2BRafzk5vwsm2%2FO4HsHF%2Fsb2MPhlgbMRvLMQR1dw%2BxKDEEWkgwio7abQwRCqH2oPrE0AKwXwdwz6%2FD9xxlq0juL8mlYUg5ZKYHsjXcx0ZoF1bdaO5zDpdAUJfbGDPwiQklfqNvTHCvBqmxpYoCS%2BDT2NrcyyZPoBkHkb79H2VfjAbkzxxlyLY1JtH8x8wnVyTqiSp8f6cTlqoLxN3sOJrk0YjKomm7fB%2Fc316IaYT92ECmnxiLAfOr8wa7um75AEuIw09WDmyieXPmXQEMWw4LZr9i161PGZ0ypI8szpmvGVKnaZVdw6MvfMqjAqYEudSwtOj0fetr1A%2BkB17ew3HCDiTw8h%2FkqKnSqxaI%2BCF1Qf8xzYALSGAq7PmrsM7f1r6q7IvSl7xtfeZVxQOiJytfz1qwuFtSBykbtuAWPY%2B5td3dKIsfEGX%2Fd0cRPFhU4vsCkmJe0vbc63%2BlHc%2Bctkpgd6UHmGg013GQwoJOuwQY6pgFKsjswA6L4gEmz5PiTG23ShdVLY7JyUkx%2BhemL4vOXHEroJmvP%2FCSNShHS6xL3UYzLVoff3q%2Fal6hdJrJ9Kponk48UpGAGJt1gm6v0livr9M%2BhhASNWwxVWLLFduO7Kg1BHJh%2BieF2NxKe0OSsvLWpWzp%2FBY9j3BTgfOVqAgps1VR2pBxbf7UbIqMyekY8vsPh%2FF8WDLda%2FZjycGRhZD8AIS7R11qo&X-Amz-Signature=58ba7a8cced4ec69c97511eef48f5d1d32c04feedd328787375b8ec13c9c469f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
