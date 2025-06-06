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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D7WNDTP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNGw9bmqS8oIvUj6D5UxfqYv3lqctdScs9Xc7g9QzwNQIhAMNrIg4pCcARBk73T3IsMqalg9ArUnFNmklYkaFb59ZkKv8DCGUQABoMNjM3NDIzMTgzODA1Igw6LS5S9Jl4QUhPUNoq3APmwjJ7uIPoearD48MufS7mru5ouDGSAoW7kv7eYocPpmVxTMJ0NchRyF59qE%2Fr48TEkg689t3l7Nyjmm9Jg7tDbwOdK1oLnLbTJd5aUcS2z0xVlwttTM7W%2F50eUXa6zrolba4WUAUkKCIU8ki7BRob61vgg77%2BK%2FB7xduou7lPbn2ToGOPyKZ%2F%2BPPkl2eJGGVGji9WTCQjqXEduFTiSBIW5r3r9lDQe0Px99z2dbvee%2FBC7UysbwP5S2QDfIaJPAQCpHImaSMR8POa8aCeWkfEN3NYZIwOB3l%2FvTeZ95t7iEYYwIUubUVQDdbs9FLEg0lJ9%2FRX%2F41BmwdfEIUfPcM70CLJEgOuSZ5NVM9Vtx7aGgYsgQHbBcdevLc%2FRKthVcelPvg%2FyAvfg%2FDtaNFqn9HRUTM720OywbZLr6eU2Xcpqdi4c3eld7G0Uv51QILtBIFFJCn8Y%2FoQ2HecMJsgnqNW56V0MBbBrAjZ9S3z%2BOf6lWiSEJSMKuLxjuTAgSzyxUsMJGmOdOvkA8TY%2F80hkk1zplmaeZi6FjrSBTmy9bSXR%2BjaPHunOaIt0g4S7qXJArU0bAw6rkalQcXDRIChJo%2FME2aPsp2fPoOr0V30eGYpIQekeJI6LoZRNfRcxzDIkY3CBjqkAYeYDAQ5648%2BMps4DiLsTz9sYB9FvwpnbdrzaYrR56LNgGzVFmE%2FuYSu3FYjah9o%2FejOO9R4%2BANZMU3p9Y%2FmsCnbbi90l654G8xRVS7b2xSiditM%2Fa%2BT84aOaFmwVSlP2dHDT6Cw0ErJcrVwreP5vNzI4sU1ghjpmyejSDlUxbTcLso3Xxd1w5Gac1PvGUbQLcHigrg1EfqLX%2FaTSqwICW1mbuBk&X-Amz-Signature=13c458ff1ba0d0ee3880e1df9b7dd117d874d72ed28210dfee26e24ed61b29b5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662APUKJOE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtqNyFPCv1zIQQljA%2FqPQAMf9bPctoN9mQcPJZGpgxHAiAVQOpwRDuMau3jHL3WUw6D1p2BfOy0GjYaK%2F3%2Fbs%2BATCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMQoQgP5N3qs%2B6LM8pKtwDzpvRPwWfiFHFBzHZOwi9jUtPrAsHb8mgyO7Oq9CvRIvh7SP4OzdeHNNF%2BWXRw5QQab277OS2x%2FbprTDmszpKbE1U%2BwcyOLSfjbfiWQgLY8wxhiYueUZMTc5NHFJ4FLBNTYnYlUwMdXJf5wvKwbMzhT%2B3L3Y%2BCkdrWCNGYvO0DauQPQFS%2FZ%2BDmW4qleSvQsGcTAZ3kNtMpZ74ob9S5dxg4cmL9zVW1bn7%2F%2BSc0zbPfrN9OQ3hPymahPRmeLoOaV5MmOQmBkDh%2F1JhWqQ%2B3YzF8hVod6%2BIELdL3saHYBr1BJHv64XwtalBkRMD9sU6gGoqYWS6t%2BT9RoJskzXze1IpWHhW8Jv75VouPYDue67tR%2FbkNNCC6SSiypB7IcKmeRDrrYpnspSLJV%2BUReCVKkkjbShHkJysxJWTHp%2FV%2FFTInt2BPZgHtFAKeXZl%2BNIp5T1llkHA0e2NduigyKXGiQevdODimaihIxAEoln6qdR8Ms6KX6NHjm3VhvC%2BzEUompIVic%2FteDVWFtWWReP9HKn3NyArxsVFR%2B7rCSOhmOk%2Fr6Vzba1U70zojY8jdXenFDsFL5j9iY2%2FvZRp%2BHfvx9w%2F1W3aKBveYov%2FSRz%2FkkYUODzG11%2FmaiHyACu9WO0ws5GNwgY6pgEm5y5iCPbQP%2BaE7c177fKsP047kCFtMnM8NdeDL8blfQEgrqgFpR1%2FmjpVwDxCTV7jFv%2F8wU9J21VQD5VG07S6lcj%2FulYDJSuRf5AFRF9caB50D%2BG%2FXRQBevnE88erP4poKidlASEo4Ss%2BbyllsV5vq0PExe5NLxZ3hBu88PRI0kMxHQlb8tMuV1lIgfSl%2FKNTiKXWROgD1uelUlaYhSuNAya%2FcjG4&X-Amz-Signature=d69cab60f43f3b8983e7a53b529c87863fd9bee8b7e57a815636c69b1dae5be8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
