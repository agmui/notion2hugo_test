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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665H7STSG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAabz99%2BdoD7oJQWV4q4RH33d826u1WWDW0pyYheNaf9AiBOYKr1FUcUlOI2Siji%2FBlP2Au3zlZK%2BXvE3NFDISxWYSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMsYKNBAzywh%2FA%2B2gjKtwDGNtdNJKdjZhBr6d%2FywCxoE%2BpFm1%2BYatq13b7d44GrtKHBvcliLilsuWLJT%2BpqzuKJ23pSbfB%2BJFxB1UWSMC1y%2BKpgfQMd7QQu1t0Iwaj1uDeKQdqlUCsMHiVnuW9S690%2BXCtvaEfq12yCE3NN1TxViNRwqwIVxL0JAAGG046c5xS2DYEzxskcF1G1eL3Pu0B4jN3x5uM95d1G8M1j7Rxti3U5toJTWmHzMxp%2FrolVTpzPRx8IfMS%2BNLfnwTxZMaebn8xu7q350PT2Vp%2BnJ%2BIFbcrkNW96kB3zaPA0KW2Rpq4EkfCGIqWhUA31RcalOGnRvfLHadmLLPcUBtru1durDtInHOHq9oqsiRMyUgqUM5EV%2BGwvKOW7WJdiwYe4ikD6uD6ySD7nA6d8KEJDZb2V7Opume9MhHpafXnru8a61j1H%2Bog%2FpGWCsAROI0W295rVfv%2Bprkbqlj%2FnEOwIcYtfIKqIrgy05KKYHFHy400kJC0iX%2FRzYbS6a%2BuzPdIDK3xo3yT7KkTpg8%2BydaF42HQQ2HkZmFucla9ouHssU5cd7v0PDwlW%2FOijBWv8HGULz9o5YBWExOLUgY43TsqrEqy9sriJ1CGdyMUORDCvOtUD%2FAdzOMkGYPoUux6SuMwkOS%2BvwY6pgFactPeCMxUycqWbuC0nzktu7K9KUmEe6Ye28dgTHz0RL9Ky7TP2tupZIXhoXsN8wFMSV2RwHZtQXLdNSoUnXhsXfdZfWaTcCdGrw5OaBgJVWxLzB%2FwKRpQZgL3dWjoYlL7ud0Sq20HHMPJ%2BMNw2gcD%2FHrHphNy04MijK4Ur0efsy05SoXy7WXY0AhUjr9b%2Fi2zCdOU0SPAn3EFD7eL6pi2urw%2B08B0&X-Amz-Signature=2153abae0d269306e73ef1f31b68b8435fcc6365628f9e76cb27610576b2e3b2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FK2LCEX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRWI2Yd8Zpeg6NbK7WWALIXq197CVIBSbRDg9C8LZ1YAiEAmB7fHQGDMgyLLfgxktNK7TcUPK44NhsTDp%2Fo8WV3BIQq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDHNJuhAV%2FlRtq9x9DircA7go3vNMtji%2Fcn7%2FTR4Wpw6mcOuazLbhq3xJknxH4sXYh0aYf6rLRqzLVRRJAhfAWvLFsN4ZnPPi4eBtVEbGFEMbki0RbdErX5eGYQch2ATgsrmF1Tw2ZhzOO46ei%2BNqOEiwtMOrFbu0%2BMWVFTsLYuZ3Rd7DHTmx0qK2SifZjt5FH9MU%2FkKAc%2F48n2V%2BuTmlJxBjefh%2BHrS4im%2BDL%2F2UOwaHzpDdIAgMTZNa8JdAC0nECmDG9m9wQG3X%2F%2BSOBbydT5hwSzL%2FObbhwrAqWg3%2FAYFKinWztWRQ%2BZ0ShfqtsyKib4pW6uvdI177UaUJrwi7cqrh4nEFk7FB%2B3tk2Og7GHINesZeXCZtp07Te86S%2FZ6kMNYOskDLFj%2Bo8rDCemEKCfdMKN0Xpl6ziLYh3lSQKzBg7fxpl4ugLO43gO%2FuMNZEY0qbFiShqiIUOdRg%2BP7k%2FP0EWFaUQV%2Bi4iJnMCZZxrp8LRGVoViQ7G2GotgKCBB0jrpJRRaDxMcOX17uZDl2mYon3USUp%2F29Fn6fWXyfHIYyARWFRXfSq91IWlSMH%2Bf6PQA9fvU26o47vSi0evusISWyKXXgy8cckchKhrqsH6Lls8fndRPc%2FX1RjiOab%2FYIahqMYao2d0T1%2BaWAMOjjvr8GOqUB9yT2LA5p9IjRvizhXMASLQCwf%2FSpH8zAhfHayqWGFwuoEATkQhX0UQUJHDlWy2Yg4lxl9OsViQn%2BAjpr2%2FsCCJSqwQjruL7X%2F2Efa0x2DK2GyZtbdtYkYn%2BYoPDUUhyL7akprcgizc0LALxOirbh6G%2FDcXSOK%2FY71hhiAQziLsk%2FyIIoVw3Z0eo3iL6leUs4FBbnGAdDkyHU3i7hujNdT3h9yeb%2F&X-Amz-Signature=bf551f09a58c5c724990b49bb5da9dec91b95f46d62bfbe6ec430139db54dab7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
