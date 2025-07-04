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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V73RK6IM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDp1AU7RV6lPj%2FApkfP4BhU4Ko4%2FXHYdisf%2BNg8Oth4MAiEAohAHpP1vLQxmPox7N3UZnaekmXm%2BMyC%2Fy%2FaFuL0Pz9oq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDH%2FEJVYLB8q8rgbKZyrcA8pONp1i6tYH2sqtnLMAnS%2FM3xwOPwoHyVCcmMgzG2fmA41rgduBgkAW5IGtmnVr1cIFaEpnTSgK3hnEBmUl7cy%2FrELUE8pmot%2Bjcu7DYOqc8XvuLK1zk7jQcQVCNRQpC6RgI78Ug4V9dfjtT4B4WORhc9irpqQaOFXs%2FUhs1e6C8XOMtZOGloa6ZxoVqPZZ0WAyXulYH81h64anvrq8wSDAzevpASA35r4aansi29LhY5JOWF5KtvjnWPSD%2B9voRUImae2NOo6u4dS6yGmAv7ML0bjjVhmA5Hxd2OKqyTTBAqLcSyApbRBO4L5q1zKaBYYxxZXTgwJ4Kh67G0MLi5XRxwjBDZN%2BpEcawWWjPaE0MjPycis5JcehK327zCX50X7dwKdzuOxQc%2BGLhCcwVlsWaSevIJGso4jURcZveTMFLUWK5ucAST7rVdrV8brh9Lt1i15baKVTGik%2Bvsh7TD0CeV%2FSzgGmF%2Fwi1QQsepQ%2FA2VpjE0mGDa0iT3Mht88GGQhdgAQ%2FDOq0A4HT5M6Qz54ojOvz8ZjCa25zQgEPjdPnF60aiWPL0SmQJaYGoIeprenWq2GP7cSf5OTTH3putroeBl7u2tdHY%2B80gwIyD22OdAewAWqwrxCaB3NMPvnoMMGOqUBDbf4b7HfpYeJ80T3N3PEgoiZb%2B%2FlzNivFyo1dUGagaC4vxLngEvkw4Y24QIRsQj6E5VY2e0yzvhNcevmS0s7SaAvLJuAT19wmKtmqwPG8GqtdEd7BXr2j1weV6S3TSDsSjzC2uBzxP9nfJpobAcnW3QFyrrkIiBbJuIL609O2UkUcobBIfzYRMx5OZIO32fzKQtWh0syAo6f2WnWIaXwJJA6kjOf&X-Amz-Signature=db78414bbd0349856b615f4292eeeb9356d7166c35de8df7bfb269982948253a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZ2LTCQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCi4flImUHRF1dE9OW3oIh9nrAiWh%2BzGJy31sPpSgmCeQIhAJ3IIo36gbOIxPRVVskbeAVwA%2FqgG6vu7i7C64ONzuq5Kv8DCDUQABoMNjM3NDIzMTgzODA1IgysXTrfPyLOfYAmWEIq3AMBsuMa5%2FISqJBi8AXu7OS%2BFO%2FCwtIJLzoHyfs8132Du5LFK5GPhFjt%2Ba%2Bq4uUHIywvx%2FxM1WtH9IaM0in0PPaxqzDhK18qtQwcDaIvEKPLyowXxbLasCc6nj7xODhuiKUHsg0Re8a7WQj9X5j%2B4fwKC7ZkLHzPOmhgEiwl%2FxPUqn3lVtRGFxwaZCsCcoc4T%2FPTidp%2F9vsH38Cbaw3YTLXSJKDqTN88BNXYNbL8uB1bexgg8XZ%2FrDc0RRLllCQfZ4%2FYkAzByPBLiy9GHU9BTeOYx1aRnkPA5j60os8CtEXdu7yTLtAyRHEmJ1zRHc4EipIALW3tDUJSZxyWIuqdb6epHA7sXz1IvtEM7G%2B3YVHCHrVniiu2eTkm9sVoxnvNtBYycfGPn4UcQWf38QON5ijpTpki3%2BBbo7tZsvQ9I5f7fItdlbv32%2Fv2slpUIYDqeLzJhG06R%2Bg2sGASgnue3zahwZOHWfgHVDgs3nbv%2BXHcuVYxLGqp6icuv9y37r7ktik46yWd2SmIHobqwU2fHtJQMLu1YTd7DbRo95SKkqMjvPvC9d1K5OkCuaGUq5GkL4zQDIPAfAOwgsC6kl7okSphJGZvHjhjQ0MPVQra2LcTbmRZk5qIlEuiNydgVTCm6KDDBjqkAdm%2BpyBOvJHDniF32oyh1TsmFzrcI8VnaNZtsYEzPeC63dQ4fY3WGeyFd4Mt30KnhLS9dZItJ13QPdjAymg5qm1h7Qat7lFyo%2FA5lpUhznHxkjRc5HcR9qAxsTnwFNP%2Fjx%2FaUZHe3HAzTQMO%2BRp71CmqwBq8H502OfjTRz%2B4Tw7a3Jv6R2dMy1E1tKAM9z5J0PmguD9SSAlmOkEhtqm5zeJVdbaz&X-Amz-Signature=b096c2ba837c58b4bdc30966d7bf9d9ab17fdcf70c659df3ac0814b5b08ee4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
