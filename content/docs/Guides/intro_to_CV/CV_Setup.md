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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664544XMHY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDAa5YKOFWbx3nwmo0RhiIBCbTvmqVzdegtcrfxx%2F21JwIhAOnxAoQP0d7E%2BjiZEAi6j%2BLt84BgSzLLznTusTHmJNapKv8DCFkQABoMNjM3NDIzMTgzODA1Igx802mZGJ%2BqusuuuQcq3AMTp2%2BwiJoSqI1YrbmR06euTT5lU%2Fpu%2B1XiiGn0yi%2BAuh8GZEdClQtPqvsnOVyKP4lfi24WPVS3mClf2ZFAbNWOsh1Lm4PjER6QSswCpEPTwBT0X9TL2qfLTkHVOvuFb2qLzahCV96HxQ0DZPnLWdcsbEb1aLrGonV4UbAfs2IYb6DJ5ydIxsicdtQX9v7vFYTdC%2FqLlDcanieiubKg7W48%2Bmczeq%2FAZJHfKgs2U5PV3pgh60fJ8BZ%2F5zt8%2BOwKW7rRunZdMff7VyHVUFolp6vxS1hlkt5EeElnaD3gd52DRYE7ez7O%2B1ddETrKdXoqP73ol1r4qLbZJMy3awyIz6qECcWXLYLp39j0v0Q%2BWbl2HpSbKLesJetSfENDIBMS1fQdzuTY%2B9Dx6mOUGio3YYriLiDpNF8iSzv7X7PURtxfZGyoeVndlcOfSpmgYbBaqF2ACnkejdSSRFQxBjolWSbQtU1HCRUsgR7%2FG84Sqa7VaQd2IjYqW9SWu0pbrN6aApXZfl4EsBLfJrBRiSqJgsMpg2NbIg9%2BuXFRisLVMFmqosnOO7o%2F1L2RKiwSRBtd9xhygTyf8O5qB6xg9THz8EY2IEPYZW2fFoMpGcvE0tXNQcVWDELiimO6Rra38zDFvd3DBjqkAWMuRf%2F2FRCOI1B2psboWG7E7SZGoRTkql7Km6F9y3UTvY6bFAaV00cDTiHloQthEjISDIsCJ%2Fm9Oo0s3oChc82BNhPfnJM80F1W5RcCLHXK76tc5HqjnpB1ZSTr1I7jlJxMwXe7zQFgSTFUDojzpBaNQR0pVvHPgyGTpPimjMhnahVkkbTD2v%2B%2BsjdnsM8hrsUs7V1710v%2FC4qmVGxWJq6iH9mH&X-Amz-Signature=e33a613dba200ad08f37020b9c986c8cdb34337234af3928dae70a00c27d650b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCUAIZY3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIA3AHEaY9jFkNEmrJlDVZ1H8UoMFcClk25JnQX1JsyWRAiEA5aXKVFrL1H2H4Ub5oaEtQ1aB9ad%2BRQ9cS%2FmNKTzzqEoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMtMrs9O34ZPy57EnSrcA78fGoETpXcfezdiaTp%2FWML9S9IUeY3IhzcaXFe%2BvDpyb5RF%2FFrGKjaztmEkBo1iCIhd2MRQ516kjS0kxkIaFhz21N888cKPjaU9xQcOQNSqFSlr7qwMWM12kOTWyhHblfNyyhSJKgXyJyeyyzhnhHRMHb9gb02ugjC%2BegQ9dyemwexjJDNNyuxYYuBHWu6ClI2ywPsO9YzxtbkzL5H28vzlRWurH6ztIDT8Y2y%2B1bYWGWDbEedCSNAopUGs5BSwlcrAAxLQQNUvn3td1h1sOfNWWwNmW7I1Wpr4GlOfFqRVlIwT4WoaxcfUbe3EjugjD%2FZJ4Wtj1vJJfm%2Fook334EdA0uegMbcUPvfTRpTHWCrTXyut%2B34WelUxgYaBarXhm%2BsKM9IahOMBBwActYIvEPz%2BBWZfxLnsyUzjI7w9KSDSr5I9s8Dsi8iq%2BNrDod2f0fsI9zEhYrEDVTVEhql5Wyd7o%2FZgDwTHvWWE8XwZYQrJ56i8TRU1GFlkQHwYUGBC8v%2F1KkGeuDY547HP2R%2BVePcZqAJZFaNq9ID7%2BjtbWoc2TfKAltpJNQ1BmQ1FVCj75c1aQJMqd21qVwrgp7jpDJ49oBlnV5I5G67bnked%2Fo4ItIlgm9gIyHbcSZm5MKy93cMGOqUBHXUkL2ARVkuloTf%2FxGDQAVoBlFsh6PkPAf1Kg9PlpA%2BMfooVXrJ3IM47fIpeHDglcJ%2FniL1aHcjzysO095KHuBUF0OGHoRpzQRahsRkEVlB7ANuzvGzop2bhCVF0hlGEZWMm%2BWgQUrXHVmcdonbbFwR7Be0g6GJILdlE1X5nNOI5%2BHk%2BSlM3PAmvIFHL0KFcjc4zW0dBQ%2BA7CE7ra8HU4W6cTF7Z&X-Amz-Signature=f1dbcc038094e34b142f6e4c95fa8cb08ddf264eb6e00928914b39dc88f722d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
