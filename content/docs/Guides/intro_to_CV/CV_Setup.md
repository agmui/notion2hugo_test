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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGSMG4I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIB1mReaRDKfByYIq6UnptZZVKlWbZFPozL30Jc8YQU7iAiA%2FRaeVhUKAYvuRSlfTi4m11gbzBFcCGD1y8rSCA2lMJSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCYNG6oFhWr8zCO1MKtwDCjeFX8aBJeuXyqKopLhBkxnOXTlv%2FgITxWvE12HNZkG0OwrxeL%2Fxz03MKXA8pd6JkPz3PyERYa6GkdUIY38qZ3GHHZaBThsm5POoYbEf5EZPWZ8dqswoH5sEZCaFloXK%2Blt93vL0m6IX3Mbr9K2XV03SL13WyXvOHPhSf37mBoqNhvmD9%2Fyvm1AX%2BQP%2B4U0TwG6%2FOIAGH7c0GBZROp0aYRnC80gJTQxzoy8OsA7cHCAB2pCgfFsijbK3xRS2s7Kby2QsFMCKW3dZ%2FVF7w8qk94uXDmb6jHxg9g7%2FUcT1k4Mhtn4P1QLFrxKKVhqgExbEdYNOJkpn1KcPDYHiMVYSsh9oZRZSWOQxoGLFJO56sEEAP4pyj%2FHh53llnFpE4l54RB4%2BMIuwj3NnN6k7CZej%2FP2LNVokQyo4gkgZ%2Bpp2Z6FFdYT3%2FydHZutB3uwCrZWC%2FiAVzdQ10vsDGncVuiGB2JBj%2BG65pwLqNs082TgCFdKgYHRoL76zmKkXgQNjE6%2FZC0Rvrh%2BS4L7zBowagd55byO%2F0mqVpEUywvA3CJqCn3ETgMNTYLUJs1mVOIHNY%2FUCe0NLJwwUec3iDfZjljOkXi6EWdVR3NJYVrIaOMR34JlyFWZt8VwWd70gbykw8PCbvQY6pgEuh4bv6EW1OoA73Vqjr94yJNxWTbov4VZkUpCwUSjLzF3vIbZRmb2LAcm9ThX1mMTgF7cSpVvPd5L8zYGCyjEaTjsU0qNgIzIHca%2F5D36%2BAEKAmbN%2BfIJcZ0V%2FLsc5%2BtEGuOdJDbOsdxL2STRbU%2F%2FLua5qZs4psGTiBn2EJ6ULrXM%2FHsXK%2FN1pEIYgDDUI0fPN%2BrLXTlyw59Ym37msB9tSuuh1Pk7y&X-Amz-Signature=e9e586e93a5c049de8da83da242b55203b6792da44c5a099a497ecb0f9cd8b26&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUJSH7H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIAoClaUAwOj%2B4QeI45Mo65jICwKUHogSSNVyqpH4UB%2BRAiEAtX60fsKR%2F5b4e8OE4ztbDcpdx49rsHw6AyTMjchdjXMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMONbPCEP4HadVeVtyrcA3wXOa4FTkPHE1H8ccsI%2Fy0EQGeMSDOxVxHOP5BbZJ9LrZkGYs5bOO1XlzBkviH5UpmuXZMKybyxbGUo7AF8sxwIfPz10KkqW4Qk5F4WzlTuURkwGsCTYVPW68PdG1bDBOhOjwpubIHFYrVBhSGvIbuPBAz7QowiaIUEzpBzeE6CuJOpzXt9itxaISeUfKOhEGNBO1k%2Fmuzlf7S9ENCqb%2B3hM0%2BA4IZswH%2B09wyad745sb0Sc11DncHPeyZfuGDHVFXH2M45XTiPAn4bkffsmEPt0fKSLE9pUbA9nUAE%2F1T2wHR2R8X5h9xFLIrIUw7CAb3DOy8ePfB0A2fM%2BFQyG%2Fda0jXmjSJ7bHndgCxJ2zaxPT5DBfLQu1dqiXQWBu8%2F7xA%2BNZtjHP8ESjkksRHiYcYg8erNcmH3pwyuQ%2FcG%2B7v8qDH57TG9bqur3VcddfbYPjs%2Fxp5QyojUxAxgOlrp2cTKvNCs3HYwP%2Bsj5BPYkyVp8gRAunTAcy96wqozaspx5sXYMq3DUFQUyrAKEncPZIdQ6jjFXOunT2SfWTt3pk9tzamVWKHd6BJqr8PQMyXS3DNxZkVPJO0uALcTLm85Lyypi82cXwKpPDd%2B9HG%2BJjuG61QsOzQzYvEpA1%2BdML7wm70GOqUBDb0wFNj%2BbyZc%2FXGsCUEFDUxBQOBJwbSrqjg%2BLNgxccm9XaBigNHroJ%2Bwsp1O3l%2B6SFzO0Qi%2BACvqnihxcObx0jt9eSQrpL7GH9jo7HfPHP2OHxt3qYrawQKMvRkgCkVeVy0ZZZ3asyd9%2FJ6lLXPTGp6lfn71kpZ2C9S4LtnWkUiGPn9trVaKlhk%2F%2FlJH6Hkkrqx97cJuBLHcHiwoN%2FsyOUp1TVSj&X-Amz-Signature=dc160efcf8bc5772b3293faa8ea40c2a9cad612a8bd8f4b50e4ec7f7b417dd09&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
