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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FY22WX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICXux0X%2B95fk7To5aPWdDR8LbxKYfX7kQ7Q6yfbiuezfAiAJ%2Blf7BsWpxuM7eDTDxxTESIwHB8i86uL5QpvS%2FoUiHiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9V%2FOTDgwBGR7R7CKtwD3fMAWtZB6zH7MDJdnJcPQ1AMMn7Nds%2FXB5ajY%2BH3p5hwoh3fV%2FrVjS3K%2BznKzRrLeM9bq%2FIBGqxUbKWWJU%2FOHn%2FsJ8DjDy0MPQB7gEIpUF%2B4zLTZS%2FHVOHZAcXoNL6Ad8iN02JgaRen4sSQqLebkI2%2FmemS8cqQVqNvspeo9ezkJHR2DHVQey0tXtqHHPCiwnqYZpAaLt99a4Laob8z%2BU1Krf%2FBoZ%2F1onnbVvUH47d%2BPVG2Z%2FA%2BOXvRmTWXpCl9B5otGnn9%2F%2B8W%2F1FA4zok%2BOH2pxEh1IkTAWXzFE%2Bh92Pj%2BORye%2Fc76n%2FgTz4J8SSX2OGI2sBK4w9tSU%2FbW9n1tqE1Jf1FDLNVfOOmEO1Fl6VPjyjyXunZchMBAin%2F7v05Zl%2BGedSdRlzC2ESnig5mVMWegbETvG33984B5X7U81ZT8R2LyFFqSj7Ey6JIVpr2Y9lutQjvjUYujKUZ5HMCP8MmrhkXR2ivE9xdQNEmmxC%2BIkZb%2FUCSEjzrVoA1YFKW16K7cGFmfIA%2FJ2pwwgWMohtrmfP7J19mIMfIIXc%2FKse7tbiwh5jS26CqExeHWisfnDpRzYeDzy1CJdpVvFKgrU3jwP1%2FJLOe1K%2FuyLqbYR%2BU5jK%2Fxkl53bNTnyKcws7HMwAY6pgFTMitCePn6iJFj76MfEjtGRuD7A29kopnKLpLG3lJfPFs0ThkBAnnaY9icjdUlezKlPatVd9PRvp2MBb9Tn1IiTvZfcyAMLXNxdLHvoFAw9uy%2FzEzvmXComPycMC39EU44NMGSDcsdIZvdtSH2MVmQ%2B6a0f5tjGeq93hkzmTK%2Brm%2FJ3AT78vpmnybKAwXsd6Aewnt%2BwTwReWhj7tv6EvbriClU9cXs&X-Amz-Signature=4d5fe5aefeb560de98ada7993531b4358fe9e847f03f2783421227b25cc4fe00&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BDYQWI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCPHqKOoeLmaa8%2Fe9jKIR6QklcV1bX8Te%2Bsfb10HmJSVgIgRxkMj6AIWZUq8BBIJsZ2UgHOZJISYZcSvjv%2BxjyXku0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEov16EYYZaD7qaUnyrcA4BdIdc9tloTC0yHV%2FYNBL4ZDgoOv5ng1mHIltLku1syNkDMv4snoU%2BqLBbyKV4Jq0cH00%2BiQGRcA5mTSsd6w7s3a%2Bad0l4MKz92X3lsb5K6h%2FAPlMTxTt7%2BU1FHa07LPqF%2BDqkWFXLE7VOIVltuKJZ9lrMoYgEwXIu3iaY1vej5INj%2Br5iAbJ9UEBaQ5tvd7JWk89KV1oqiEnV63ooaj2C1xyldbhvesiMh9cGoDRRPoAFd2uvdabkP8h2s7WIUnf2Yl7dQ7BnijmtlxaDUB4e42bhQ7BXWcHOsv1m6PphwvTsXeYs4xlB5nhfiG6Fw8zhe3EB31Vp2hAeHq7lOvqQGLsrvHrk4hSS9jxmPE1LbuP%2BjVgnjKSI9BId254yqFDyU0GIoafmITTpejyKh6zhIv7ah4T88k11pCLFiqmq1Hsd5lpz9hCTnUxvmI1G4IWyvBYUR8b4lWIXZ02GMRc5eBUp7esV%2B7dd5LZQKA6FE84f1KBeawxMjVhBBxFvJZsh0AmCca5rQoRj0KmU7iGxIyE8Q%2FzZ1LfvoBJcvNWmOeoy2HhwaOXIzPuTnHLGbUUJpFGiZ5CepZTDix4eLiXtROQZPzwgnNOTBxLzffHzIJWSHle6xXrwSJqDuMPCwzMAGOqUBB2BIU%2Fu3lTyE5pOinkrIV80T0ls19%2BsbPeP%2BdQhKdyf27btFeMS%2BzlCzfEescs5SzcxMj98s3IMKPJOty%2B2DzAIAogCcxHk2UT4aeaKcs%2BuDEbJEyDo9PrMD%2FEpH7lGzd%2FPG5ZnNQl2AzcSW397fGrqQTSTcusw04l01oUbEbSITCBY9T3vZ3iC1%2FCLTghr7CxKXEWBahxxB7gy5NUdwcgl3pqC%2B&X-Amz-Signature=ff1e29f8e58abe1f04376c81b7c1c0688c6b81ed2c2f19d42ab061f593cfb9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
