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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNJ6G4D%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2BQRuKoKNNaDEagQ8zkq68YsX%2BaTRbY%2B5Yr3LkUs%2F%2BTgIgWrekGMiaw9JxWenTLQPp8l0LLggBbxTH4BTP2XSIO%2BYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoak9rojit%2BDu06KyrcAwo3cDkcY9FDUbe3UgAz9TcwIDNDKiunTnq22y7mfIzsxxPQVFZbbkT%2BVlyA6wKwkPwzQIeknXR7qAcTQU%2FM3ORBckNzvj9MPxWh%2BZiEihsHSDDfaSXBhqXU8YrKWMYiga8wEeVvm%2Fel25WHUXKb3YIqWM84SzsZXZTs2VtFBoTd2%2FZDAwPiPcyQemoLr4WAOUZ4r6zTpZZDj%2FggcHeR1MH5An0%2FpZ6lCqg%2FWI%2B4HxCoqjE1aRqIUsFvYWrH7BRC7xw1SFmbRpM%2BISv853cb9s%2BajkWZNDK8xUC9GzjBT%2Fvcu9AA5dWY8tF3fjrBDF7uAHEHGDE1D39ognv83ZNbedeIcJMPM8DthGohqr1I%2F8p6MhhCALKJwaF%2BSIpUbTTcvaJicqMg9HQ3pjwtvAcGEI6LK%2BIhoVErgUqqFVb62AuGC9EXR489oQsOKunBjYBBOONSWNkx2mFw0ickFHXA3VkVxRs7NSubBDUfBIs7hm6H4g%2FnzYEzl0S6D5vL2azQx1CHOSyUZiAFa38mVe9OOhyzvFHAUg6eELxW6nunNfgC0ZpvpRsStxusLOXT8ABjDlBH5einxeNEZ2h1T8CaJac5bm%2FLWhXBbs2o6aHVihjv25L2Y5c9au7Xa725MJ3TmsAGOqUBkDyLcbHRw5zi6EThfjAmZe6Mk6MugZj1SlZk8drSrVkUZuNsPKGbEqpmpYCoMfF%2B9Ay%2BI9MPd29WhdG553p8L8QbbcQCkezl%2BwPblnVN0PZhQQucxIf0c6srLMNbTF725yl0xcH4U%2FuONhU39U52Ku1cSdIC2kcqUzYr29JFXuAwGrNWXFMrAm6kNTWIkIacZ7JKMN6xr9NH8iOU4gDk2S9wNeL1&X-Amz-Signature=aeb541be8e15f78ba26d1000de8b62a826048f09dae8e2b68343e60a0f047459&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNJ6G4D%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD%2BQRuKoKNNaDEagQ8zkq68YsX%2BaTRbY%2B5Yr3LkUs%2F%2BTgIgWrekGMiaw9JxWenTLQPp8l0LLggBbxTH4BTP2XSIO%2BYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoak9rojit%2BDu06KyrcAwo3cDkcY9FDUbe3UgAz9TcwIDNDKiunTnq22y7mfIzsxxPQVFZbbkT%2BVlyA6wKwkPwzQIeknXR7qAcTQU%2FM3ORBckNzvj9MPxWh%2BZiEihsHSDDfaSXBhqXU8YrKWMYiga8wEeVvm%2Fel25WHUXKb3YIqWM84SzsZXZTs2VtFBoTd2%2FZDAwPiPcyQemoLr4WAOUZ4r6zTpZZDj%2FggcHeR1MH5An0%2FpZ6lCqg%2FWI%2B4HxCoqjE1aRqIUsFvYWrH7BRC7xw1SFmbRpM%2BISv853cb9s%2BajkWZNDK8xUC9GzjBT%2Fvcu9AA5dWY8tF3fjrBDF7uAHEHGDE1D39ognv83ZNbedeIcJMPM8DthGohqr1I%2F8p6MhhCALKJwaF%2BSIpUbTTcvaJicqMg9HQ3pjwtvAcGEI6LK%2BIhoVErgUqqFVb62AuGC9EXR489oQsOKunBjYBBOONSWNkx2mFw0ickFHXA3VkVxRs7NSubBDUfBIs7hm6H4g%2FnzYEzl0S6D5vL2azQx1CHOSyUZiAFa38mVe9OOhyzvFHAUg6eELxW6nunNfgC0ZpvpRsStxusLOXT8ABjDlBH5einxeNEZ2h1T8CaJac5bm%2FLWhXBbs2o6aHVihjv25L2Y5c9au7Xa725MJ3TmsAGOqUBkDyLcbHRw5zi6EThfjAmZe6Mk6MugZj1SlZk8drSrVkUZuNsPKGbEqpmpYCoMfF%2B9Ay%2BI9MPd29WhdG553p8L8QbbcQCkezl%2BwPblnVN0PZhQQucxIf0c6srLMNbTF725yl0xcH4U%2FuONhU39U52Ku1cSdIC2kcqUzYr29JFXuAwGrNWXFMrAm6kNTWIkIacZ7JKMN6xr9NH8iOU4gDk2S9wNeL1&X-Amz-Signature=2bee7ff1f67b69811e9e2e4557ce684fbacfb014a25671321de67a8a0b9b4234&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
