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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMCRQXS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEaKnGOmdNgjPS9VUNlovAuvMs57nVA2kHpftYQ1wyVzAiBrz78aQlV2LIl%2B8LiZCRiIK5Z%2Fp0SxbyC%2BWHc4My83hSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMH3CLkluSNJhIFCNSKtwDIZ2ecrUKnyiPt84bbHMJOGU01Egcb0Z46zrt%2Fa1cZTRjHFypB5dMLuDCIAB1SBpeFKW0rrW4K%2BtyVGq0q7EkYI800DEAgp1Ukq3GyIvLHj8jOBdol4l2q81an9aI6iSNwbONvTxDejoImepTorteP1%2Fkv5AFg0OPQAQu0zLocitSiZ9ENFbw2IIWWuQCfsyJsZQEjEyfI8tSw3no8YRq6Vxert%2BrmxdQllZ0xzxOQCRVctUqsVbxSkqfLKSHDE%2BH8jg9HxlXQPuJJpW9kKG%2FnGbhU2fU%2FT66Sma93eob4av5MQLj7y5aRXScB4xb6Q7i3lr0uHMCLdfYyoyIe8B3BsCGMyyu6%2BmWzO6Mp%2Fg0HVFbyBQkkjLLZ0yonI7d9XBoB2cLDYTc7nUmxObZndMbOJXSW91D2DSnJwd3eTO3myMbNXYBKtBsBJXOrxD8pim1%2FuIX%2B96fmc%2B7MZoUJ8wTEfGqTk46jKjyKJkfzwExQgfYOqHQwnrlQnpCG1j9usN9IhTl0Cls5dJh3EJ8l%2F4Io4TnGJSC35w3D%2FzdIvIf6xr3tUzwGhDLasiFefvXfLChtE9hPl1LCpAS6S0LX0z92p32yNARYwmeMTwfn2wNVyhKyv1mdp6TdYDanO4wuu2avwY6pgEdwm56%2FcSnQGDHUQelELWRzvzdTGXAO22zyAKsm2HFrY96S8GupGFBs70UC8aCooXkRCEZx2WIOp5YmTJvIY8DrHNlPhW1KZi9GNiMAOnWLOZ0e%2FsN0X1V2LGX3kzVTys%2BJXTRqb7igycvOeaBtT5dSRdpWkUQldk%2FrVn6%2B1xveUDEBO6%2F3Wa7CcbSpQo3Pg9W5laD1lvsM1JRcvpxQkUsBNIWu3Tp&X-Amz-Signature=68cfcb065c394f0c3e6627bab8e03ea0c92ccd281830a24a2688bc40766b344f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRDXO2Q7%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9hMHf%2Bwfr95E5q2AZzIft7ffMjnRQeTQ5twXQw2cWDAiEA1QQI570t%2BYW24NWAoWTU%2B05c6QYoQbWW7ZnpM8esjXkq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDfDdYfaNs4%2Fx1%2B7TyrcA2z6GnZiyRhgiLCpE4%2FL3MG5ru7ZhtPsYMwjCYjPNEF2oUQh5OZknjgrK9nXTZX4pEAGpF6ux76d2nT7tD4hbChxILcJUAmEODvtmiPAZiYC9L%2FqP17dsa8vAMwrIpRV%2BDkuTT2Q68TQcIQRwXykhVTDbcu9U6KS82isNztAj0xpwoA0hv%2BmOvoN5HR5rINuGbZ4XRKHQuIRRkG4XA4DYDAu4gzLqN%2F%2BP5L37l2Uc7bOjFbQHyiSl7Klg3h8taw26ZEuvdAKl6XXicnDCDK5tCQ%2BSch%2BE34g8bhfewDN1bAe3sIWc350sX7vp9D0etWd3eI%2F1B2bsp3DyJ5%2B%2BYv15DLgNaNdX0GMuwyiueigcOUj%2BLgLK2BwRHUO1odjCWKGTcvZCePk2mBYFbar5HAbgxOdpRlykJUoGgWlM%2BLbANYJMAbfggkd8808gEJNkRjXROrV5PcTu%2FRvNVzCi2fqqVsT8cxA%2FQ%2Bl%2BwrrKK1HGmsTvtTHznY64AiQH3hKhz4FI1W1iAZkjNTXx%2FhQMe%2FqKAaV%2F5Lz0zef4rIDaWHDoqaY%2BHo2kpOMDzgrQdLAn0Ol8A1B1FBiDj0Hq7oMVKvvnSbj0Pa6tn0B3SRO3UK8b%2Buct5WE%2FF6Z%2FesxBJVvMLztmr8GOqUBNdBFwVyNI7WVRQPkBxvDWfDyoWBbGN8oKWd1sbMogitTdB7BnRSdzoITjQj0wqJ54r46PLG2ZeH4jd8GSJ0O8TLcJ%2BcR1jkYAdPiba1%2FS7B6SnfguL9WwPRWJrMlnFpdGKFUtp4YWPKXd18YYKuhecA%2F2TdPR1qsoHpI1uAr5vF%2BfUiwLyNVDPy%2Fg1p3N%2F0jFtrTGFFl4n0cuBuGmf57CrukL0A3&X-Amz-Signature=966adbdcce0a9056fb9eeff1f03148458af47e74daaad26ad7ae490afc52e659&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
