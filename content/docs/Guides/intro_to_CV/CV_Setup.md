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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVNBPRR%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCe4YBYwL5H%2FWFlv5HY57Ka5SOBWQtwXlGpWmKdPtO1rQIgbyC0hderF4U1Jk87PBCDvFySqPqkS6q8QVSWWidNl6EqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0agAx5PyNFdxzwyCrcA%2FzhOsrfc42N6CWF4uHRLzydgvAtdZ72TcPyBfSk2rVzkJvnehGdBgvDfTUdf8Oc2lPh8roOlxnKOhP9owBnoKVPwuC02dn0CgnS%2B0elRDr4FGkoh2u4TmytA7QGxYZw57Kex%2FWbze2fUmMniUgCPhVyD3gKoEXQ%2F7iXBViobdGKRmGViUDeesSVPWs6qYJSJJVAYRRpY0GfiB2XlVdrHCQGlYkKhlVblSl8d8Xe8B4FmzYcIhbscRATeXU%2BmTMZtb3n%2BjDtahDJk%2FrIXI4z5EPke%2Fie43Go3grfP4A92MHhxI1nw2xhspRyycPYSBOlj3XNdFAP0gi%2BkvcEjiZ7TcIRYnvhSYxmV6%2BlusSry4kAJ4OxOeX55xFM6FDs24lfKAUBAm4lFJLvEs0ahPU9feGtLxriR5RZ1bYIBgVWbH6IMKQqo%2B5n9PMdY131bfQujsWGPMn8qiP3kfidqVwRQQTJezhPb3%2F6htSQfSKhw7m83UuMoFdaZhx13oHLnsy%2Bc18mYPUDmg32Oww3G%2BrL2gSKLz8ibiu4I0hCvP65eJXjx9d0%2BReEbC0OB7bIoPsMH7qNy67Gv0OtoyBnnp%2FCOGzIGirloBeMeFZMuhENEyR5X6%2FfyT5Z%2BMYo21rkMIOap8IGOqUBKFgaZYZzAVUnr5sb32CRg3M3nrQuA0OXJADK2htC09nEBpXoeu123seIIQLv%2FU7XbJXoIveaL9pFv7h8tVqZDg0FBbBgQ6oGSgEf%2FcE7PMmN%2F1OGp9PJO0dBXhAggvJUzlWdb3V0k5XbsO5YTM8yrh5DQ351VK8WZeL0Vzv2%2FpFVsg9hiY%2BD0lbr%2Bded%2Fw3IQqAUjgmqQeIxI4pPlA9Mt9BMsxVo&X-Amz-Signature=48768bd8f4c55ef8b19da1a41030e9f1235d00f087a46c8107ad281cf0a88771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEXYIFJ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIE1TIgdgSDlR2pCtop592HBjtWv498QzWstbdmKcrv4qAiEAr3%2FNd2bdxO4mIzYiB9PauPeuCneidZ2VS3nrKUvvCeAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BMfV40%2FaapBUo2hSrcA%2BK09%2BSdDfGAkMgUXt6gMyayWKUiXrLQ9cSd488oHi0010nuLSFnONj5JNDYIPiSc%2Bl6F6VGDteUTpyngR%2Bb9le5%2FL1qhJqu%2Bo7Te9mbK9WqMVswT%2BBlAJbfYF7mcIRzLgJ4k09knhpiEOybxj%2F1%2BeJUW0h5%2BCDQ%2F9PoaiTVWNFUDcDFuhBifFb1RZ0xC0pjo1d17p658iki5szSuJsY9dfJTqvR8jztXTD%2FpFPe2F%2Bozt749yAxjM7lnMhsFnPaQgZ00k74fwksHq7KLWi%2FvpNMeDkj%2B7RrkshWYYzjBtuajZYNpL07TByu%2BIhXiwZ0L8gav5OY9T6tzIFuCvFdFHL5wCR1BRjihd7EabUTxsoH0PcAmoAYxGJV1tYaY%2FqU57Lk9ngSQhfLjHkz%2FI6QNy3x15UAu3WR%2FlM%2FLDHB0bf%2FoW7E8XuhXCxqq%2FROBADXIZDZjJQXpK%2FwtJRlMGNfHdWXvh1CGUQapfS8fzY7%2FdS4h4ym0w%2FH4D9wjVWrIoEISETkCCsR8BVJsKk0B9CfDUgSJQSmyIlpHWNvvpnanLSvUiS4HQCzdALq9%2FMKGDlsRlpiDn8lIYJHp%2FFDmKY2cgYslTk171QOvv0dvppNR6K15d40Y2csF%2BiZ5CKmMMyap8IGOqUBz3%2FZmeQ395hp61DUAjVJW%2BWN7JvdaE%2BMZOTcoTMsZIZZ23Zqk%2Bnq6ksOwb9vXyyEpvqNYb6%2BAHog1uk8qP%2BB%2Fn1P%2FRlQ503v22VeDxsDICYMc529SLhcTrAoc4QZPOhYzoGYR4tEmvvEaVUniPEJbsMEyfiIVYzm9YKLYTzFHZmnmYoGM0uYOb4XWwKTJ2AOxbsUvYK8nlAhkUnMKPsS%2FlcZuKD%2F&X-Amz-Signature=a20e25f66037a468179d3d77e6742543a18ddee2539259a0c747fb3d3abbe664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
