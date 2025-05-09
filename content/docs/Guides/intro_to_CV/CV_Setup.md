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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KLEG2MO%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEagJKWdhadSNeSDqFBHzuPmhBwptPTHEargiLX2SyLvAiEAs2QW7KdH4cuTgdwpViOZ4Z6aKsScs5sHhF1mEeW%2BKV8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQ5Fbija30p2rvmjCrcA6laQkth7IY98elUkRx1vo3N5NGa2ts3IhQUiVYu6nFP3QD0Qv8PKJmJw09Y%2BkJJbvvH18B3DyQ%2BK9vuZHNfRCW5aMVmpzQP9kYaZFaYsjc03dadAJ0FOoNgSDeimgTImH4UYyOFi0fZKmuf30YnyiuQS8nBzNXrS4RJZH%2F9ZA9fxReWBRsK9sms1KjPzg7ZyIjWbSaOpGwMY5IkP4jSYbBrqYLxtonWlXAmxPPLAPgdz9fGc9VChAOj6kqre1DZdLztOpWB%2FVHE%2Fbim%2FU3kibl%2BClkEmHYdvf7r7yYmEWFxFXk1mD4%2Be4AK5vymzDocXtTSRfKGfFBkpzFTnjN13OkoZEyRlsefB80Ti0bEMLjhiRBoYKqeWCKi4UXysBnT1EwI4go1dHqoxoWX8ATUJnfcMIft6y%2BJ6KSg5QKF7eSgXvl%2BANMluQjkP9mrHN%2FESbs9IDmqZnsfbqUTdebGnLe7bCoyKPP7wttuDt9utRusU9tB0agk%2BojBbvKHrV6BXaU60bYgNmRmEnLY0rwvNphV9x%2B2rvki%2BoaDPsrNm5HMl8Cyj7VxngiFFfebR070cqC0bU%2F6DFr4QD4LoaJixCY7RET3lnjojgq23qwkhF6Rt7TRvMgclRDU7qAlMNfv98AGOqUBnDQVOLVFiUla94i0JuQdo5B1sUKfLWhaAXzTomTVLkdPbL6HlHfsBBWRnGfdr%2BzmNwfeM%2BZB1dM99WxfcfnBIbYWfsW8IGZ8dMRPaXF43Z3q19V8uPYy%2BsjFhkQ6dMpJ2Q8KSOGFYAO%2FiwoDh0r%2FSmBdYy41qnYW9KFe9DnxlWqKJrdWQuc62dNnqqptzlFB2zeR9Dxp9%2F5F%2FAAqXnKCg%2BOIUh1R&X-Amz-Signature=cf2eccb8f1c34a9407362a7da8dc52a60729fcf029c8404a67d90d8ed7a926bf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQCRRPU%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqcq9ap9AAF%2BPXEwvC2sj%2FKFMSxVwainrw3rc2MJIJLQIhAKqJZvC%2FneaU38fUUVr5X4G3i0rwO3sXMaRLnwgas16XKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN08KH6nu4tDGVoZ8q3AMvWbY9v0ph%2BwN9W0QI8PIK%2BGbgkpIDpyn6GbayNOgqWc42MfUNbEqlR2SbHwHRIXPhDw8yPPf2DgU7c%2B%2B56gP1OUdBuYMUVXianJA2Ym9HBz5CjCHiCEz2tRSRwMrMJTZfcQ1WEbw6HryypH44WsidZ019Ov4srzrIwrfrasXB3Sa%2B4SoAHMpNSFXBt6u%2BIUMr1t3%2BqZzCtnWRd%2FNEoxzK%2F9qwgIqg2kuybq68PYPg6b1zQdg5Cx4UzxAguARX1L6liMKaZpHdY32hKkJrrDp%2F2PC5rfcH%2FnFAqjBvO%2BEf%2FUffMfDXb%2BzGInqWfYcBIdolhyTF8DQQGTkhpLnwHppIHGAlFJPpkTSXouski0MGcDNIbIL%2BfiKl6zXiwEPD7GHxXsGmsOX1oc%2Bve4R16Fu8IP2QcX9%2FNPupVrODFM4%2FnOs5kYCYn0GVp8qwkptd3Fsu6Eiy0ZZyc90dlTQBPDmp8xeBVLt4HqnLbG1PzxDVQhXo0JisbxNR7QRzUaNCMwjPf%2BuwKSGDK3gaOcBKZtDRyFcko363uhHb7l0mbM7NnCBIdwyHvgr60LzgHHb6bnRgNkMkANgL7T5Il2eTHdqxKLwEIVrskOeVKiEBBdO1JEHBQOfEF20bddGBbzC%2B7%2FfABjqkAS1LCH47ItHi6UtwYkmevGPC1koJpIgxOvTQ6FUUC1w%2Fjp%2FNm0M%2F1aPfRdtmKQSum45pZnqt1uclpLTD7o%2FazQiZPBAGUqSizV%2Fqxwh0VMa7RhjALq08XRY6lPhrM5a8PNan%2BBdRPbmfhUAcl90ukOyd4SzneMN2bpfDaYgzn9h7e8QcVRch9d1Hpjf4Vis5uaYnnFxqTfyyrtgadehVDP4Ndhdx&X-Amz-Signature=412fff819dd3805a786699c6bf5323eb388f3a5126ce85d5f898833bbab406e8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
