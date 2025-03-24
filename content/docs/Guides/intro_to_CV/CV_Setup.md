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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKH6DQT7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeMPEWma33owbsOWzehBjcKr4rAdiZU%2BLVovObbEvPmAiEAqrDf2LII8uit270H218WPEonsLZu14uOLsgQT5sVlLsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP2oejEy42MxNa5dCrcAwW%2BlFWYxOvOOsjhEKN36ChAXUj9rS0wh7fKq8tUaiQPh8MZai5C96sQVAofQq7%2Frslwtg0JZ3zaTWeh8PqOFI3jwlMFELIT1Z7jiBNouXssTC1FUKsFOVspI%2FYtsTLTodvBMsb7GoKRdVNalA4SDwAySaMN3yHxPido1DbvLenvNVfZ%2BhBFiDVnKPkcuJXx9azvWJQ7YO5ANjdbgM4zoEkzA7G2jRW5E7uxkciLyWYAiSD1VZB9lC4TYH3pPyAB06pISlMF86jjxwNI5jdsu0hE%2F9IupUwO%2F%2BZhU7kEBQTWty2R3t4609Rky%2F0FfjWShwk96XlRfKnP8LAW%2FoZscOYn8ZQVlKUwKqXvV30I8kMxy8rg7gxQA8qdqMVBTm4YJfzDsPNZ6Q5TUsK64n7RsGCCU5iS20zIQnPgAPUguhZYlffmYADsARqtIpcFPXxgQEZ7x%2B3QmruDZEUFSz72ANvJRbqSM3LH1KJ6nc2eKvl%2FvR%2Fklkz31JWxirWyx7VkZ98jBr0%2FHVMtNHKsmQEXjlBiFpKeKDJBkIrX8aMF9kU80lACMA9FhzUi7mp3oih7ZktcVjFpgyg2jqewyG1Bj3OkKxW2fPBF4sQGg66kPgva%2BMRP%2Bn%2Fk881Y0O6eMM%2BehL8GOqUBxS5iXOfY4rxVEliuhXFXS011w6kP2V4R6o7yiXo0XCcF0ajo9PMu9xTmeA4k2XiZX5q52yyyQvRKYEwi9g3HlA4j3fsjsFARnJ08S4zmwR4rqMQSyoLd4SX4MtwbhOQOMVyKjfcImSKTkLmTX7IR%2BQjq3RnSGZ1SgOEiS3O8%2FAuUhBWcfmyg22WtwKFzyBOWosEvngfIjjewfKcEaQHe9hWyiimm&X-Amz-Signature=e543bbee28da4dac114c33fa901b4987fd3ce4d8a4d30423215d8b8f7a2fdcae&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKRGIPW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1EytVf6s5xrmJshYwAwB%2FAYYnijPX%2FnFxPduGXISNMAiEAs%2FqfkSYG2EhbnQFX2oSs2Ea32jeaMcXTn6q036QD41wqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNc1sCynLH%2BXPeUOUircA9fpIgnY1ArqDxFUZwvTyxop%2FVDe9OLrSxM%2FGNIUMlmAqnuYkw5yCF6f65cQO503uT9AaC8hFHB2gzNhwqgGd%2FhzlfMawJqrFultfrnuRY0CTiEBhPe7j240TTbkDRk3qZ24SwiFfzialzRWBzl3pOBYdKMo%2FVfqeOGo8fqRfTr11Tu49TpjvGtf7qLislAMcZcArvZDNsuvUfYWq3cQumBLeY1EhjZly85AL1pCtBmtGy%2FRpEFU0Mbj9EuRDawmNh6QSvLh7kJ40L02dnOx1to4p6%2B51dusPNlHpoSHI9d%2BzI4NJeVRjbrwJSo4v0JuLTsOtAbAhawV7hkcta5%2FMSHqx0gd7hLBS7RfhMPQsQXtzYhxjEFW2Bit7RT0ZMpLZkYpgyC2mpXWxNLCGHFyMevtmeC5aNRjqlMNr5fq2IzIXvleFyRYgwZD0TSTaOFdeXMv%2BaDBUJUBpA96BdYk75aAoKqlGtW5OwnrMPt1lfICnNtaZNi0%2B29pFFSGTEEfMguJVgO01t2wQ8aSBMKsuL0OTHG7kxX0aK0XBMuOjfS7qJ%2FP4AtCuKSQkGtE09Z8eHhQ26qaIekzYfRgPiYk%2BgxxgXhE9c%2BkQx6nSalV%2FJgYwsZUQg7mKj6GUSwMMPaehL8GOqUBivf78FFoStpbfTfMVCRtX3MhoDmP0vTParOfE2s3v6m5Siqo%2Fbmd3M3dcUQrGrYLuzOaIX9ekvxabby16lj8UQCKEw%2BsYSTHRr7xyC1DKGnEm5i%2BXkWrpRiEMo8qNCKz5VFgV9GSQACeDqNujcCa3NMyXseWUKpx6DAnW0DX8OBQv%2F%2FVYxnwASs5IvPm0xIE7xY%2FA0UVQ%2F0U9wHSQNHsCTAUgg3X&X-Amz-Signature=368a10a52d67ece0d3b00521db3e6cbb8c03cb5bcb0cdc027495840a0af0c4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
