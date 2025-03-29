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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTZ3DWE4%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIBMGaGoHktrHnhSPzoVPlV0QQTe7S%2FcNYIT%2Fdkt6LeTEAiEA249TBrpjx7EBOS7EYoCus8%2BrLtAMxbAGzb6d6ZokjTAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDH9mLyHxJorlye8wCSrcA5IL%2FIftTCV8lV1Tjj8PQCUMLSeFZL9LFbPYsdegfnfkRmMto0M1Fs7zT5%2Bgs6ZQ6xMLl4qxivwg9bdxHz5MPmO%2FA2vh10IxbPHVWr4%2F%2BGXwTEtK9kmpQ13ToKs8HBdJkDMgiQL%2B5IvNtOOVEyQlx4JenpzzzpGhY88APm81C4axaCIsCgiNieAWJDpwJBX%2FOBcJqiPadCzQWEvryRYzlVVeLf3IdHM5hZRidVlfBrcrLaEVfczS9sepaWWl5n2abit5f1it%2F0ctHD4YFmHzeiTsX7gCg7ZhA3iTtLsyHZlGIcLatfc7GqwdL1CijqLEbNhRKR1EEtdVFI0t%2Bmu8u9Lu%2FcAzjSclzadhiIRS8a%2BrBklKDqp1bamUpEij1HivB8V6oC13vlwWgF36gDsDUGGJAg%2Bw1oVAikaxg8%2BaARdHUwMIuuiTSGfeuoORNnlKvUyNmnXnNPng0XwsQhRvcWvdVyOPtG3rzjxM3RG8tAP2sRbOfL%2B%2FIlCvYDIKl79sVOQXGchPR%2B6rpY30Aa2FSwzAfug%2Bf1LmKFbK2EAu44TtUhVQhgrbiqg04NSSYXcE31bXnkIqCpOSBVkNXIASkTy1PqD5OgMYKqlCEuXcvfjzje%2BiEnUhIZjYEGl6MPTenL8GOqUBiyko132e5XoVosgwQ49bQqX0TwuYd3DYnVn0fKkrQmdz%2FoSJ%2BHnnKrXbk9VSTmmqydBndywFg31KiMQVZy0BMXFvtuz%2F0JeENfiXOFRY%2BhP7HaDwzBsQ7ykgbqomPnKAZ2XX6ghjdE5R6rriBcXn2enKdWwJvYIiKii%2FdoBmYAT32hjwDOknmK1orvsGehD1M4hu66A4XyXai6DizfBXQetU8sDJ&X-Amz-Signature=974fca0200310109ab1be119730da9d13abb76e14a9c680e7fe182db5966f091&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423RZSO2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC45mFS5YFriZvpr1KCbjjBhL%2FjZUWjcwe%2BRbmVTPPdlgIgQZJc9rG92Ccs3BZcgYjlVv%2F0Mcs1ddQe53mKSamKuAIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDJmdZIxpIQv6DptbUircAwDk2yOIJ1WmiLfs8FaJ81ArQdYkLUiMf%2Fp2nbiVylAGOfhZWA5oXffxYRDI5K25KlvhChh7L76gZL6jPFGH0Gi9mqpBnQd0hA1D17iUHDDbNw1Yo3XH2Fnu9lSagpizvvZpqpwVDmn%2BOgnNe1zbKwjyLxSm9QmZ%2FcrrkRtJp1zRceQInNH6kuhOhDq%2F9soPelQ2TBSUlnH%2F%2BtOI1%2FQtR7o9kPxMgiCvZt4nTDlz1LcdzlXH0%2Bk3DgT4sFzDy2HD0WAmvQpuDP3hYyX7rAsuU82KP60LIxtOmeF0DlaLiTXj384NygoIhQjB7FX6TxEzTS5N9R%2BRFw7jzLEa6CvU3gkPQRcDlw8yEFa9MPvVZ%2F9QxV%2F2aHZvANcjxjoYKVsupRAsANzIYfXJTs34YIy3%2F7FJ7yQd0OccgSAeDBrTYaH2Bh3xcXwP5qoyd9wJj41GQEnXMP%2FvR79iuvm8vSukhBJtHOcFxLPRr4YPDMv5JtFGfCqoGV8w9CNoegyqhGhg99y9RYMN%2FpbNirmO4MR1%2B6B%2BMdqpti9w10coRnO4ceBsblF3TDWqXYn2shL7INIhpcSO7C3xMm8Aznav2seZR2zBgL%2BzNkLaiR5K1teTBGQ6LjjXbldoJxJqXXK5MKPfnL8GOqUBW%2Fuv2ZxlC0WDt8fhjgix9A%2BP5XushK1rUpCdRVZNAGhBlGy9lsWV7AYylMbpazGEF3IxeXH8O2Z%2B2Gg87gd4ZbZr3r8jw1CDEFotulWjnv0w26ecCVzy%2FCko4Uxv3ysWYCa%2BnHEzXHjDNWV%2BF4qfwchxD%2BqoNHQyI2J%2B9jFtEI8fhEt35HWC5qcKWWT%2BDVdoeix5ud4CugoU6UEepR3sDtRSU17I&X-Amz-Signature=91aa5455556e2e232f34165dbe52c39a66eca1e9e1ba6d8b4dd1c9c95f95b943&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
