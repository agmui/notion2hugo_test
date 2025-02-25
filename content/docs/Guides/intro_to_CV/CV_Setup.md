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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PLW4U7T%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICzy9ImwkeHlsOobUFZhEjOpcKuDF4SAHdvG7cBLjKZeAiEAzNIIy4kdyykZI4Qfn0RSX7klqU0mG%2BjdShImDiyo%2F%2Foq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDP%2Bom5EcXfWFuBtcoSrcAxjh1q0EAxdSBvIjUuUQyAlO2LQUePXuoDXaS0F19o%2FdmmNq5E%2FUd%2FCPBX3nMrdr4%2FqrAoKi0iHEfyr%2FIVf12tqiWCjDmPCKn760MN6huovU0QVbPUwM2YqANK%2BHFvreJSJtacIbI8Fv5Oa5fw7wTXKVF8fE6wNeDwarfUMOd65rB%2BphAocEeO9Ox4r2NKKIzg0B5jKiu1Jx2QrR5ReaV8FddINuQaBf1Cpnf2qq2LTG40lH%2FIYpcUas9qfGBOiVm2K51RIO3qurlBMc%2BVjxSRRDBSTWTRF%2Fn5z%2BTrWD%2BFdTdAJQaZhv9YuPgeGhmHLBMV2jJvtiqgsgGjOhMXCULrYHr6jjfwIvf2VrjiI3Gl45jqwCGu0L9ngvMjD149BPhI6F1Lvb5EIS6HDfw7hFYBcUGd4smg8NhHHVJtUgpHbBe6B6us%2B4vXTHkdTeIDYMmklM179kPG86JFy6%2FGVhUrF3dLbsupQPozd3ecVK55M7CYYqbWZxA9MpAsBd9J7B%2BaSJYCpElcPSHERiS55nYGrP0UOuRBKjU9XUY872NQkTfUOjnpGFv1bv7xVvfj2nC2Q3SZoszjdzw5cZl9bRImHPvXqDH6pYsHqntoxLI%2FWbotyzjKlexpzBtn7bML%2FH%2BL0GOqUB%2BUQMbvoDOpzkydmae61%2BlrePdklF6YsUtWa6uYy8hC0wfZePEPlW2leAgnj6ZjdUKn%2FQonWtgfZwruZD%2FeuUlhc9lO%2FRvIGye%2BoepQcad1pi7sOHK7RAnqM4LEkQdSl%2F6KvkJovJQQUuQqCALfoPKPTtbt07pICTfKZYXlKlbJcw97K0YKoN%2BqSquM93WHnfmOpGWf1rv8Bg%2BLI67mQLeNOxsRuJ&X-Amz-Signature=056375dc201ef1a3877541b34449a491617cf4efa79eb2aebe3ce7e1e9a06813&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XP25FDQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAHk87dVzukBsDGEwYZeZEmVlMcoKwkcni6i%2BcdQ6XdCAiEAzZ%2Fbuc4%2FSrzaNTvj0noxxSSQu%2BuDN3e9xRUNLquS7EYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDGlrhDu9Yu%2F8Ryv1HSrcAxz3GX7%2FQ2IEbRpaTspGxzQP4Ymn3gs9WaAdJ3XspgPI4CX1XHkRYE92Yiex8Ki4ci9%2BmIa3nodiTP98qRfEuwWLJPv4Iy8VtTcBiuzsvyZj9tBzWfOOqQf9uxugmWplGfk%2Bjke8g0magUuXiQrXq62LH7Y6H5iewSdhsAv0hHC0LNfuChNmo8yeRabZ6QjExr96UkEbFD9OM%2FoeeA6y%2BpyNEUyHULGGunSr49v3edyYLKr60Z4Zfc25agGsKTDPSm6LkJE3MVcqWitdiqgpVObdXbvgarW%2BvkaH4ImjnRszVRKDVgXJq7qgDGcsGNHEagpA%2F5RBdDwfkqntndo3Ju%2FyD%2FQ4q02QOOqsZfgouR5MDiJOjqNYvmCGpReHWV6aN%2FouUHV0Yd%2B7QXvfMecFPLaOWjaXzSGLm7UTzUkSWYphwFYN%2Fn1g8o8eYBmD9N7Gn9iqAOs3EQhR6UCekToPAq4Anj%2FrMY3fRpf3kZZaigeefBhvF2%2FGLvdhvM0gWVEEY0uwriFl%2BAsuYR2OWLxCPqk3WKLfgsof2d%2F8CHsbfan8POkkkbXp8J71%2F2vRi9NphdP9YmKugaTkp1eCGLmlSaSds%2BqcyDqVtjxPZ0ZarnjelLp0ETV%2BeAHwpQsDMNfH%2BL0GOqUByz%2Bk7s1qiKnFB8ZsJUJyb%2BWmXQrLkNnjcvtmRy8mF83X%2F%2Bf8609zSu5wxSvWjOoDNTERe0YIFbJo9WwLo0pXSrjSIl3L1FAvXac5Mq88T1A5mBdpIAPlvTUIdR1BV9ufEuysGWdct4SPaRPC%2FDfbeW0sr8PzWSCUIWLACxfHNOTVosE02qVeOSvimmdzhqSLcGE5RybxjA5PVoMp%2F%2FnnLrsk5kGP&X-Amz-Signature=e581b904a3d8ebd7b960e85070e10a1578d3d5c1471b98bb986c58e4910aea97&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
