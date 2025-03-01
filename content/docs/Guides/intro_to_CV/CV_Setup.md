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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUEYXNA%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDeesOtcMKnIZ%2FXMrEremVbi5iCdgVyvvVAt1JzjLPwRQIhAK2rTh5X0LWNCOCMHOKf3vfW%2FPVd2k8Qko50XEk%2FlZHdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1CvwGdWPPp5%2F7uScq3APnN%2Fm%2B5GA5FgyTxfGvXVpgEwrLXg5h3qnT4QAyHt%2Fz1w2K8jZ3gb570s2umAbrHN656FXgUTxCZp0r%2BdkXnBLzUpR61U%2FYqpaUih4T0G8%2FyN39%2F563iMTDzZa03brkBrN%2Bj1hkJiS657JQkVL3Ma0LqpxK%2BzT5zeA%2Bry9bCTZUcewi9CsNiIFWsWVocXSTGmx9D3xBVHPZ%2FhefXLy1s8V97y80hiDWl82%2FvXY8kt9qtuQYSKwbOqhJHkgQu2K%2BDPWIncLRd%2BPIol%2B80qm7ZJQvYW4fBHtkSZPUOchedOdqOhR8uWdXuJi8oXFxEQQuUMf%2FvV52Wj0KbGqvfo%2FoNdkiu%2F3VxNqPWG90SYq7mJh6Ibe5kw7s%2BuJXdPytODP%2BdWjeEZqkx5bu60R009PqIkAmcuYRWGxvb4VlI4UdNzDCiJu37gLER4ZLxfLp%2BErHIYfLMK31NoC8wSZvvsf0J7cmoLIyoXpgSAPbWLn9M88XKnkIDF2neuCeHqLNGyvkdFkRTESRZkWlqOO1gA434sTCm%2FlGKrROf5GnO429TqS%2FEJtuwX7Imuc5NgFs36YSgS87aGDEKZGbpZ4WVp600EW6diDiml8sRJanyD7e89I2lX0Glya1WaMrPfLM6TC8lYy%2BBjqkAZnMr892%2BfDw27OSv%2F1QyAIqRC02oaGHllPmltLvALX2PsVmfWhLUFTxgxg4yZkZ5QiC%2FpyEzkYYRL5%2FFfvuCrKyOTvcF7r%2FLfRlk6PqDdXyLdwG7krcP0wMK%2F0DLNYp%2BqZeWKOxSVnB28I3ZGFh3nlkPd01i7sBQBdhU9JxI7qVpQp24ZRDHUZYkQRZsgAs0%2Fm7cNg9OTx9L86JyuwVY8hW9ZyL&X-Amz-Signature=b79f359ec0fd648d44f9120a6623707b091e5706cb548da75e5063e02df72a31&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IFHJIA%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFn8slXmAz087cStHdQpYJPQu6JGYIwh09Vg40amTbiKAiB3gb9occfrgiPy6AzEjH9W4E62NXuHWYEeRsHNfw4ltSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkMoh2WLUDd6ZezYBKtwDY4%2BLKFe2QOvFkeTFUrpIL2YGwv7z4IuePA%2BgRYIlq9dzhb2VU3NomjPnA8lpnDD7JCN46AmKMlUmMdD6Rs5m5jUdkhNKEWz7PhADvx6MWFef8nm1%2Fw7Nc4Ht2jftXxc6WFmcSMYjjkd0jKeHtVfSyMkNkoJbkUqSHIBWs0Hsw2dK9g1hJsxHVC1S%2FtKEUPQaUj%2B4XunnjLo1iYM2FNP6CDHWSsyVVxC4DSyv1WoWiChV9gKVsnXtNp9vPWlk%2FAP%2FqZ%2BI4fNQo7hEjiGn0ninX0Klc4L3%2B%2BahdGPrSvylo7qurl0Ngj6psBXXIhNwcLphpUdpxZ3pylyNa1stY%2BwEVM%2BenxYz73lTKtwSihzguoFaLY%2FmhFGZBlyUKpid5mSMomSka0Ozpx%2BOI5X8JOg9AbT7Gpr5iw0VUW3WJAVA%2B3JphmcuPPPBaQhea3On3R0guavn8lwfik6s2774vYdGTu7js9cd%2FnLTjDmQOXV2jyLwieyaZEEsa4GKVE320bC%2Flsmj5MPkkFWN7qIBLKEgvmWhOqQYJAMbabHVIwXNLGLJvkLJJeBRs17WKFHDV3%2FAjhAxzT2kbtZlq8MlwwKZMYzTa8NN0vWpRJPCBN5AjjhXgWVW4aTH778C%2B50w%2FpSMvgY6pgHsaxJtg%2FZF71Rr3nOOeRQm7Euj7rYbJwfgVl4WhoK9c5dzOXKkBIcs2oyT7Fnq5lDd97gPrKDdlP6MqjKj0O1CjaKLjuRyId2rnnLyT4zAo9w9RHouhmkmp0dahhCa4MjIdtOl9uhnc2ot4TVTRVo%2Bwlr%2BcOdMihLXn2sZpJWsyV%2BQA4f4Z3eab3vJoPzwH04cXs0CWETRE3Is9eORb8chRSnot5XZ&X-Amz-Signature=0b5153e0a4bd4d5f34f3f0261e732db99e1263ee7df46bce73dd85c6f451d8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
