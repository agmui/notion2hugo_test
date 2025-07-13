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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5CF5QJK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCZY6xXa90mY7rKrU%2B4tgIUQWenrcgPAuWYXHshERva5wIgJbz93qVF8cF6mp%2BBfeiFHANtvRL16Wp%2FATQiYe1d3kMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIm78dSS6zwipBkqJCrcA%2BHLuw2Wa38tNJqjIib7uCfGI9BMymkSDSzCqFGsUZ%2FxwhX5nDOOV%2BWxPePLT1QgnQn1%2FG8H8l4rOc%2Bz2Lmij8rXF91WOQLDqBRogodO5FhBSRD%2BP9dwagG3cdOU06L%2BMBgu24i1HlXhOAfYEJC4TzDIbY0SaBhLsPrj77wftR0DCJqby24S18PF1y8x2qS4k%2BcmXqqNREO38OcCw%2FwUo9utDcoKQoKcXrmnwoTxhK80BeUYUc1mlivMPZCKYqIQBTpg0%2BNgGZubpfxB50Oc4rJ5UBikZCMreT%2BfIDpZYqDTYAH4R%2FBNvXfdcGRyJUaepajOD62BX3RiqYE2KazH2hV7pw0IlaZBEHWnfq8b3FAyfGCCFmOk7mEBhLjZCJDm0TWzIE6ftKZL8AHvviXoprjzZa%2BNebk2%2BF5ofqjsUX1JRu9itdeuJOIIi7KopWvZXbL%2B%2FaZEhoRpe1Qg4m6yiP5LmSeBGPQRJzSU5ERjBtaU62ORmNhwHDwB1HRs6CJFcD1rrSuQCbbhb0DmCDK4j0B2DAOephFmS%2BogP4HtZwqDQhwuviKo1%2F34Xz9GNtuyYLGTCDqtjvNANEla00crM5TZYsxLOyP46pSf4JStQsuBp1HlplvbulxED2wMMKHI0MMGOqUBsW1D6224L%2F3MhAmMWEyAxI5wcUumLJsL806dUdXaDBzl6%2Bn%2FO%2BL5oXw65Q29Ob0qNdW%2FmMr97aH%2FjB2PVnIRJVcWAxw8ZU0NXeVnuMsl0YCy6gpkApz4Izws25w0ww%2Bbk0u%2B%2BbLTaWQXa4jIkATMVtsDOs34jxSgSMYXnfe8d7xFznqbz5eWDYf2SUkExWUK9ZBFyusjAqA8GCFUd9EqZ4KMzU%2Fk&X-Amz-Signature=869095cdfc6aae5e201c0965d5966312e7bba0423b1ae2d9ee37741e9f9a59e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3RGBZBA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDNlLusp8mKMyoZhKdhcQ8OkbLThDM4WkC0BUrLeUO3GwIgHhGxGXE%2Bz%2B4Mdf0CLe1OpieqqQ4nt11IibNDuOVhnU4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEVuSEazawAOKq%2F13ircA0dxc%2FyMUdYgo9nTg0OjfgSAXfaJLc2qLJwOh%2ByFku%2Bggao5zeof0i5%2Bsctg9lusQimZshFQNk1j7NM1lBlQJO4otDOZ6yEGMsDH2dE8ysObqMemsWZ6m1%2Bkss7oTJboDBLtbfP2m%2FIBwMBPX8HWOMWmkjX5OU9N67FYqH8CvxnJXaMVsKjT1qGO7s8QzxIbzTUVT8KbU1DhRrD4y0Q2RsakcXvK5eLYd1HABFA7vJr3z30dPql1KcELj9s8Gw246cDWPiVFtVoo6xVzVefm7wm%2BqHlEOqpZpadKBe%2FHEoHUoFpNtPvqtZm%2Bsqau1Lo8%2BHhPNKIyRsN6CtdmFcwFoyUMVPfcSJw%2FO86CdKRwUf57ApMNJINN7U07dgLcnRcNAbq3F2t3xyQf5mR2HEhTm0v62qlmAaxngDkSUI0PgzQMy63SmWVWq6tSKnD0TnHl%2BIsdGcuSuz8mfPDLqe74Ik80kvg%2FfuljvYdbdr%2B%2BkTexKeMfTm4%2BLnnEI94%2BSg6FJAuVEdVZxpIsguiT1ARa2sas0GRDPLmchIdbAhsGfcUCZFlv4A85W6KEaS4xs%2F5JiiF2Q9JR2me8ekr59Z25qHf13KdthqTm1AknbYu8OlG32oRJhDEtckCI3gdmMLnI0MMGOqUB2kndoffmu5tiE3wPcYgkZ634pU%2BAmDkCaal0FXWcgaIreBjrdJDe3fz4L9X%2Bb0zNFnw8kIQInjNBhqBNfIg1jVziuT%2FZiDoisi6cLrFlxc2eahJx1bQHon5VsSbVp7JyQb56Yda3Vmz%2BJcxbI3N8s5vcRyjvA0DnnMTm4x7sr1UKLewpcJpEnFyyJqtexXyI%2FOLe5WNNnrg28qzgLJdqV0%2FroPu7&X-Amz-Signature=834e780326540e94eb2d4d831e3d1fac537aed0509a85daf90b9ff85f83def3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
