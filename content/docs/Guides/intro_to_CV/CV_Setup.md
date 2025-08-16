---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOKED6O%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEW2Cg8AXXT5oGzuVVaariJtPnThpotUhoEeOVlOmsWGAiEAjFAkHNC9VI5dhIWMbkmsJewyYvLySME3SpOBXIUAhPIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDN%2Bj6sh9wzaE6i%2FRnircA7FkQId1E1GanC47cNx64BcTLwmF3XPtdo%2F2SkqW%2BZUGZM6eAw15spkbvrd75qaIGQyILZ2%2BqlCr16RB7Azb8eDJZZ%2BMne8vdEQTubUr8ZKQ48tBnJRCwxpmJkoR2BQxLZzvjJeWhY8YTK%2Bs7iGSodhVdqglPvFEQG5FhzFgLBYVRMC%2FBrwldHPPyCtdgkubX5B%2BBI4YXF3Pkjig%2BGdgBSgTI6LnBIsshxHkFtOYQcsFoKslqXrC8TrhZEC3kC1EqeG5JVLr%2BdhEHoQjRktkuZC1Z9z5uOLeonW3aXLb2Wte7yHcqEl3XobY5UVIFwCo9EXtLL66xnLmM86W0u9P5LZwaAKEyqY1c5EkOc3BD5mJ40f2UuZxlEJUBkBtAOUwaRZEMv4CsNqAbefmwCwZoF65hbnjbvGaH9B0JBeoowKtj%2BOYUEF5avbSVPDO%2Bop9QqnPSr80zBGGV7YbBVL0GT1tJU3jFA%2BrfItfm5%2FlLfVZBrqlQFFBut%2FQwRjnCUu%2FyZg8hBB96Q7hIIrlHlVJH1hWP5o39HZGzSyiTPNOh0axD%2BIpqYg2T688Ui9fGjx0ZA%2BUXB1V07Fl%2FFjclgAQlQEeez3bz1M3439BL8ZLVNAAxVKYzqEKj4uzo%2FCBMKD4gMUGOqUBNiYPX3e6VBbSBRhXAuxQJRA8%2Bw49BOGngj93Xx%2FFVaOZqezynBIsLXnIGC4IYQAtWML6xng2l7%2FTd3y1TQyOvkNPaSG6hkStvqWJWWJRobIYvM%2B1CbfIrINKjai7VEanckDmYQI%2F1AWenL9NNWSbdN9j8tVoYlUdmmVaASiCqvd5fwHALfPqIoTl6vrS%2FB11otsEelAXa6y3V6FtE8PfuFpiNwVw&X-Amz-Signature=dcca6c74aee0532002c8fff1786f2f7865c9ddcce8c0ae71dd915d6e043658ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V55PLXMY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIB1rcOcjfzxaJl0IvvzHnsX2ZUS3C1A3PzQtTojAZG8xAiBv12zIh71La2pbUJXQN8xtp%2FiJyTWjSTSfbr7PsotOPCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfJKOV8Y6H2rt8HtEKtwDv%2FXfO9pWn4bdqxSah2gwlkxVODiDhrscNOPeHKl791FElmWp8S%2Bdb72T3nrLBDXiM52xXyhxgzHsrljPdxS3Z4JLhup2C3KshnRJJd93vUuwFceyg%2FouezzZ800823q7vEnntw0LXl%2FerELY6fuoGLJH8j4k4UZHQvQ%2BjrtcaovDm54xvEwbjNyI%2F08Dn7XsvZrODFG0mRwmUXhuv%2FL5AEaZ8UnPsA2pOJmpKXa02mIMMb4Y8GIlswTrmHSZQUaMeAnhOrB02%2B4V1XG5PhyveMQzhK00DCyTxSrVAL2GiqefjVlaVfZVPPj0Dmu5WV9Kx4Bj2N4nPe%2B0xGWrDIUN4ZCm8Ko3GwfbXGggey3oeh2tLvpCttNu8ow%2FH%2Ftv4K7JVKumZ1yx%2BRMlsSgcwSViWoiGkVbJAkMvcHH5F1ZqbREzx718aNT%2BRSjDyBybWKVTWCYpjffS35mRfzjXJAy%2BAgZbuHf09fwVxtqtiwWJjPXR6FMPD%2F27mxkRe%2FpoBcqDBndw%2FajPyLLirLZEl4oSLSfszO85dVlsTIQdMvu9lOYYZCbbLfBk5XwSDs6Z6TH3S%2F8WWytj%2FLLXDiGMnVTdyr4d3TPQ8MAn3Wm89E%2Budbp12woK4cpPv9zoawUwvPeAxQY6pgEy3XDuqF18G8xr8OEiUVHCzZCWaW51WAnWSmpmLHa3d%2FPj57Ae6RRMKx17RWTiVQgl1DrgpVZWd8PVX3bE6hBPdBQNR5C8cUGhLF4hS6DYoDQ4eUHHl2AskBeNWajB5YgOWwqU5Xn5YALXudrU%2F2mXSnLwXZj7lQ1oJKrWKfvxvG3MGXBwHEWXCxrMrEqZ%2FLk1xpMcbKN0yaqHmJ1emgoaR9XaFPgF&X-Amz-Signature=b86d6a7930671e420ad67ed9c6fa12bbb65824876886ce14ad0a6e275cf38050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
