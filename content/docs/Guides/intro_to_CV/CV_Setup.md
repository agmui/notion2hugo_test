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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZYVMSN7%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8yXZfnPXt%2Fw%2FS9SE4C%2BN4Pymlz758uTOqrh7MqKjUVAiEAkYpCHIVUtnyeA2BtUM1LzRyoHbNtlwlYg%2F0StIOs4OAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLrHEUR0HagKKP3tvircA%2FVzs%2F%2FIuIhNuK3oOfme2dUbJ8xbVewA4q%2BPT8AKH4uT1kzKk6uW5YhAxUZprylMZgqvS7bv9mPsqtt9BByLcCuAl8a1U2kMk%2BqhyPEMAVa06%2FlEbIWvYAVboFviz3dsWgdi6r5fnPY3gdqz0zZ%2FjUyhjWUtKuEdjTdRKIt6aLnQSjzGmPXqSsuWQKZ9%2BTbo%2BkGd31A9PXFaQniYxRu7dCFv7Cfg2CEtDOEN%2B%2FTrEJRJy7XOWdRRBdnQ709g4QBbgYUOb1xxZOFqf8x%2FzwYiOlo%2BgZ9AuAwJ946YUlHWfG098zvAhTS79Yk7a4ncl52OMqnWGUwf3EjmlDi8TjZE0qoyMW%2BPsh2ff5jIGSbvzpzD8tD2YQ2rW3%2BMR2Oom2xVHXmTfKMnBthjxpDRodgxUEFO2vuU30m8fNUarUiQ8ufNJ68WOqZLPPYxYHa%2FEKyGeoo5XqpPItT30wm82trMgsqRkXzf2PE1u%2F71nEiLUvweHGyY5p%2Fi2GZVaSnkSG2LOo04FPmbsDda%2BAPL0NsPROx5dDCDuO%2BFJwRSCyeIK%2B8ZELEcfWN10JrwwUXaw9ByQ1EgxpErs201XgnS50diMPF%2F4tFl9ZXmhz2QOUr7P2W8aJ3VXlcaTcFYTNcbMLfxkb8GOqUBWA7WlVkpP9MvkFbE6OIPDozgcR9Vb8z2ty7j1EwgcYHKabYq6i%2FH5GHU9H6bdVdYsbRe1IQZeHoYVGF6tiKFktI3v1hDv0%2BCldwkZDeC9VQAEOesN%2FGycIgDcVy0rcfUCysklD4ouUvm9%2FxalY0lo65Gmi%2BjghGCHGJvp4fsPxRMKV4VcLSY8zERKf5lobmrRuvc0aEsxsFrOdN1D4kSuTlCKaJK&X-Amz-Signature=c9dc55ff3b4bebec4ffeb2463c29e8e3131065aacfad424fd5400beaab5e8c08&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6NQVSC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9Kmq5QV%2BDCBurjs%2F8GQq3XgSrN%2F7X7bhXpwnUCBcsDQIhAN9nmoATLpT5AzZWd28oEAegyFwywAIdkMHcXOLX8h2VKv8DCDcQABoMNjM3NDIzMTgzODA1IgyZI7CnfasMmG79BIAq3AOnQ9mY3QJDmuiVIPDwbFWUJlqCsgdzU9DrcTFaHFgVZcrnfHv6S0SdvUa4o9WzHh%2FbPDbMRJqidnlHWeLppPvvmijMC6Ii1c16tdwOi47XeQUDpEuf%2BqLfshoG6juC5Heszvam4jFOw8hCeoqaQW3fCTGfzowe%2F8JYq3YFqr%2FoZdGgkDLKmKQKaVzDkyHvQiVH%2BnB9CJ%2F8UZ5iKLEWZIK133Yk1%2BzuQI28F73w9flOSLkfc3lRFLRvaxznqGn%2FUvX9td1diMKaV%2FivCQjU15R8yFIqqEdkYHpTpJzFB7bIjylJpV%2FJU8iEmojM1HXYH30b6VUm77XLNa%2FY7kSA5gwO6gdrpIG8k6Aa1%2FjPeSSpJ0jwj9PuGWrYQBUGjdYEN%2FOY71dhv50qjuO65rd7ozyIE3TU0GMEhTi2iU8zSo0IS7BGPM2XM3TwOGvDwMvKUI%2Bfy8pNF%2Bkasux4mA2no5ygkFacMrymlXc5VoV6ojs3B0rsfMmRrpEobpP0Tx6scLP6oqMf8%2BHua5xP5gFi1MozrR09%2Fd2LYjeDa6PulUbFxB8VGdoIeJbU%2Bb2niaNf66liv02l9SdrSVCqyYciflC8hRGnR%2Fl0c%2BmWfz28p43oRyTUydJBjvTKfWrPODDY8pG%2FBjqkARVL9jkb7SsPIdNxvh7sTS286fJ65gSFhPnSbHWZ40GwngN8AN99qVhxNIcbPjHRu8AtWXQE8Z5tWz3AkwjOweSgiEwtbTbr9VLtPRW3bFPQl3avk%2FmqfCSFqmXVv%2BB5x2mDQHgfBcYO47M%2FkojZJli4wGeppZVj0eg%2BLI03iCo%2FpTHoaw31nvOs5du7BqLtfUXFsMRfCKg%2F1OPeWhdA6W7BSBG3&X-Amz-Signature=bd5c29041fa2482fc729672cd8c3a28fd9e4c688edea4ff4ba91accdf366c618&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
