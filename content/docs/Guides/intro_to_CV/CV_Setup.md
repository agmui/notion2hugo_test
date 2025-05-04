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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I36RH7S%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCdfpQbZy1oMEALOxA0CVu9rdjSgRv1odEqeAXiqtCm6gIhAJfMp1%2Bl7h5MskhFjku%2FPLThjYlL6pn588YhuNjOuQweKv8DCBMQABoMNjM3NDIzMTgzODA1Igw0taXybiYtDwZncTgq3APDblyguaRrD0yeTIf%2FPzE%2BNtWNiafcIl7ThTY2N7osomLQHHbBCfEGc5rd5YcYq50XeypaZC0UzujOwsO5HJ0Yhn9F%2FhqdYi%2BShBF3j1hmSbdhkXV0ESyHsAz%2FGahwZgBKI1NZv%2BfLUUQXqOfw1f34TCn2EGRVrcOcuCpD5zPYAImhudiREWYlztiOMAQf3zjDE7P4Enl7Q1bjQEV%2FW%2B2jvbj7LMkPwnoXwxclG%2F4rvlaVWUq5cmXIPWKse5omzYJk1pX9ZTD9uDjX2UAf3duwabFOJtaWMDrJSiItZXeGrmbepnXii%2BWs79Llwr0kWgiQSXRquyahd8va48nu6bcCm0pF5NABHOXjJypP3c0orlViI%2BfBuwJwwwaJvhbGPFGJsoR051%2FPwJEGvB0rrUxpL%2Fr2tRYRQ0pGIlPxHPhJRtVTNm5jWPuZRr1XP0HB4aAQ6NJXJFbTZc5i%2FsdpvuFckwC3pEuZgSKIYsn42%2BIxLQBDRaQXvJ4lBZ0UafuY8jN%2BnLaMU%2FmojaqEDtovvNU0SlnK73%2FwCIhPI3%2BkuWLg14ASWClWjmSuVmJXgrh5u4kGjAnrd5yaUv%2F5CK7W0roaPQ7zLdlojbxE6hCgGUYMQbv1ksCTUvJ%2FsB84pzCd99zABjqkAUVA0NZf%2FABYNivhSdiogDQEbe49tS%2FConGY00e%2F5kr7JCJS4xbsxA4iY%2FvlyVjG4rNYk8p4oPHye2vOoiFnnVDvA5TcuWPvqeovlGO0OdYg%2BrRy0hW%2BOV6O%2BwXizaijBGadTogyS4I4BX%2BIBAzRnz9ploZfaNIE1Uvj4uPXN76hpkoxgzC2%2FjF4eAO%2Bxi2KMP59idhxALPljlEVg5b4WQkaXNy8&X-Amz-Signature=7b2278ecc2c500411c11c673862051d9b82f048fed6256e000c27020eb2d32df&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6X6R2DJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIHrPNy8R1noI3LHrhyn7dTRYLsVwCaT64XSh%2Bx9XPeqhAiAySTNhguPx88WecUZIibY5Th9V7s0vgEKXLz2kU14tRSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMmDZPINwYvTdWpzyOKtwDi%2BlNA7pNO6meidbTtwH9andozxTfxCwqv5pLdJtstdmTK6RpAwWL8UMUrH9RvwVG45Jh4p6yHADZZPNWkaWTHdQr3By5bBLChHBMutmE6iqrTuAupZyV2FVyhq70TmQPDiuCRqozod%2Bl0YJrr8TsXUFBpQovbL0hBPUsrsQUFKrPc7Y28%2B8okubK0kE6vmvwzkahQVx%2FouZujR5yg3%2BKtlLpx6OSQKhgIMF3geZmraoWKvsEkmbOnLUqOQRUTIA2c0CcyFFzeIUm1vh8AKyTphKuIEemvdTQKnfFAMTPd3TJ14K%2B0eapcaJXtXxVJb1vkZABagGxNXhR4l%2Bi2ZIqun7qHDRF60d96ENWhZfDYjMZEOhfVBNIWmzUtsuB5zmAfMRAdhpmtzmViEGnfy8mBn1VFaFjQ7H2HOuA6CBeMMrolTReh7QGbfltq4JLCvv8jbxFAlfIeeITFMb68vM1%2F6NVuFIzQIsh9RvPRPJEXXKzfP8dUPR9SQZFZ5JKmSFH7LgGxqCcB1Lr9qA0BiRF%2B6GT442e%2BP7l9TVsVVn4ZeeKf5Qqhddv2RirdEcfzRGuFoQtCeX8O5FMFxrwqe14Rvaov2cnHFAsxw3jFnQVzr0pofWRV3pNPgCaDSEw64PdwAY6pgH9%2BEgoF0PmS6bdr14%2B67%2FDf%2FskZGQxrNaxYPuDaDLtUs0leAxTRDhreg7U%2BUg%2BX4QMopelMsojPXh8C5B%2BZN56LgFec5kAlXXa4I%2BVI97h8MJw%2FjqOUsXXyvHyWUdPi3WKb2mx0pmv3ZwuUUlpeD%2Fisy6XleOlsFG5zBWVFN4qibQHqxGf1LZrw3eocmd559hrcqzCgLJJyClZJ8ErwxjzWNLet5Wp&X-Amz-Signature=dfd5427d4411ae165243991920602598ff793a8aca876e0bc68df7b2f7acee7e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
