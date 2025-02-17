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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6BCTBB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEibiFpJeXuTYbQwSLn%2FYt8gDdA%2FhFVH0Xb5bCMf8LerAiEA%2BoTqZId4WZFjPbrlEWK9xV6WDiMWlonHQLQH%2Fx1bsTkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGVWdPHIEHr8hdFN%2FircA%2Fxb5kjZDg7xXJObDE43cx2ClHxwr6YUNympVW9te5N4R36pE4kG7n55PKgaU2I7ocAW7qLZu9dUIyhTkPdaCaNKSqD5dlZ6aRlcXk1VwdMKiAwsu%2BGJm1y9xNiLpXWHtcky85S41UlVXIXamIMDD6Pe8p40yBVAzECjhHf01nFqiCg3pVxWWUUr2QGg7AVgmDqSObEjCLmyzZa1TRIsD%2BEEYVB8fnL2njTD0TxXxnBdpDK06By4XbJTbDNkyaUGhvdP7MHlFADmnn%2FDU3lKzuDOYtk37PQungnkBfMM8OjVK5GaqjxCWqzvroVwRJmAH6H9vZO0qSmTDRhpcu%2BsrIZRRjiH82SXyA3UZ41oCUHYPRg%2BrJvEDfL5BN%2BmON%2B1DBxOu6XxS4eFCY7h4XRq6QawCXoS0ig7XzqEqi3bRVbqTq%2BX3SyeM3uJcmZWL%2Fqf6%2BoykwSMAK9FcakMN7Agm1x9arazmi%2FV0rC2qUPlsEpeg4hrGgks5LmrhEA04LmmarBP6epOgvzegqeo5zl2%2BAYDw5M%2FEMPy0MuUSnizavx17HqPIOXl6vazyPY5UaCwUzOfTpe8mlZyW1J2X6HypKFoxrI8tN86%2BkLNFhPvjdqpdVhAmCaGEQtmdL5dMIPKyr0GOqUBr9iBEoCxbqMM3Ye8g8N5IZn27oTqsZCFP9YybFjj9vKhS11NyLnoOGLQPNuppgP508cdmVwScutiv%2BHOgNwjii8Ywj6J%2BWTuramLsZsagMijsR46KcEosImCNEMSwQMWzyPWkPbmctH2gLySWe15FmtcFacPkIjE4Pf1KS0NvJ5Yi8O7eYyIFMtKRPjPmR9mtQLOZ89tjAbyoyypOu4PbIbA7bmj&X-Amz-Signature=8ef904fd582ca53538191686601eb958eb11c4adda18625b377cb9106ce14b3d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYUYR4LQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrI5gPR98ai09GOPJixOgCNkwidZJqZ5dk4lfVnq9UyAiAGkkAlc80NyR5R5Eswzk1KGBBMVeWhzfZLnu%2BYjqYcAyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrdGfi4fYjwC1jEM%2FKtwDRYM9ZvG3A1lNpfPOd6aEY25x2BCWM7qFXaKsAD3mGNIbzPGYM0h36e8Sq8yWkSsfZXCgrGZYgn35AJHElBybtODKxSCY9UM8d%2BbH%2BELizWtGun2n0TPKmGG%2FuJXsRrQWy%2BemzxgfsoNx7sL3AbcJZVjx%2BmstPJ4YoMvYkuYNsCYikpTeAWQog409ZBgMBm%2FQRYiz0dxJMVR3cif5QF520h1fwm%2Fch%2FMg79MqVKu2TVQtYXtGKzU616UOL5mi0ceoUdIjRJzrqY37TP%2Fctod2749C72oXlH8ccAH0y76xYjOmIM2YXnLHJMU%2FzGOVSlMmQPPW0OSPOrMPl2yc%2F0tmGHk%2B8Y52pSqKdDUaohBVWGpCFuePQsUk34k6Gklea1IwQ79xWa%2FVX3mw3T8e9yXszKGi7pJSHkbbEGrjmyI96pQVfYgH58%2FMsQnkpvl2XqlmT9XjM8nZY1tiwMu71e2LfO6Aih1xJuAglXFX7XOrjybMHuKV%2FzPqmMYFS%2FhqyECVVkAWHgdHNt8aHVj73FDPaolWTGY7cmid0wHUMCO8U6B7qz6SomOs2ZLWIlINo%2Bgg3LB4vBEyCn4TKc4YY6VQu3R2zRJnqbCR4gffSrOLFPvWntso27riGtNewnIwxMrKvQY6pgGllOg7N3g5LJlUawxLDt%2Fs54U3oi5%2F3Cd0IQzaRpeMhXubPW5RbcacuEAcmui18GmHVw6qd%2FPwmEUWdSrBY3qHoLnV95xU%2FM%2FWQR4JOTuNO68Q5G7iBH%2Bb%2F%2BAKL4%2FicuUIEGU%2B%2Fsqz25pD7Q7o2PZVDdx7GGkZPgjXpoRbaDm76xJTBq7dgM%2FL7VVH%2BrI6gKpCaK%2Fj5OsnJ3pC%2BUUKeNPMzqpTMNog&X-Amz-Signature=296ccbad0894abc9fd40efb90b48883810d30cc744e8ea023da9e2aa6e9dfb74&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
