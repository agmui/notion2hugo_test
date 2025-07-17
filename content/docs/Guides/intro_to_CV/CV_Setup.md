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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVI4UHPE%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDnLr%2FDDppRyNfiUHl60pG%2B7gDBLjms%2FDOUn1KZZcX2VwIgC0gvqzFYloZlHEyrfD3%2BQGvHJCv3CnziB%2B94eGYDW40q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMmJ8BoMu9dYM%2B%2FfbircA%2BLF8b4sIoGU%2BXIKdLjHsFgCTlu3FrZFpNgNGexVVbhLJ01OvaUodn0fu3eVjgAskRcdtGUjw18bdGf7rF0h3LW6vmK4wQeXlIzs2AgflDkuiSSzA%2BTbx1qUpmXEismPtBxCCX%2F9UeNfg2YzI16kU9kgovmdJ5PMZ%2FaDBv3cg8WQYzWqWslKd7nci%2BoDgG%2FjxJ%2BSNCmvrvvG%2BrDOqOeI%2FaEnP5Rp5NYkNPDEpqcU7P8BCbPDsS%2BIj2XCvqirTPecb%2B4bbIAU%2BgQRh1%2FYIP21tG%2Fs78otm%2F%2FtJa2JbxvYm1%2BPFZQdBH81%2BhycTRWPlO7nVeFyzMQrI7zTP%2BKwrg8Vfdhw09QcnvmP%2FCVFOXuOpnARVp%2BYID1DCrLcZFHmx%2FkmqPz03qZOh1bSDDJPRnq6D5bGMWkITR28DGARInhlLrEL8Sx2VNrcpHQ9FdgE8abrfsxcYxkSMmuBEJVU8haKw3rcQBJajnzoz9BL0hekUR3TBNTxXavM1Z1Pd1KcR2CbYa522EoaWrsdmM%2FIEhEsbcsvA%2BK8NislISBviT6uFb%2Fx8HCq7t42DmE4cTEgHPWLzq%2FJ%2FzTJlS5obHyYi51P%2BVdSleUQ%2BpI6pBUdH8no3bybkEqhQR3oMe0YO8P6MOiR48MGOqUBNBEnRf7U0cW5HgAKwbHy4bF%2BGl5GxgaCnal3Dyd7IOE28e64sArbccpM7DbZE3jlykuwZPlnkZTkCRlJiR%2BcwCwKSgUN2IzQ3FKl8UCOKArx%2FG%2Bie%2BQiVBl%2F48%2FlV2zbK%2B98JXyGjIJpCctzEEeQMVp11ejneIIUdV4H6mhEU8vybxdZgK3s9WiYcLMNLuKyyKip2BeiWIOb32CHQdJWcTj%2B%2Fch9&X-Amz-Signature=48f8a05681d327cdd263c5531b4fdaab955aab0f9edc0fadefc5cec817bd8372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6TNYQD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDYemcQAsyBsN0oVcmfihB9HWEL5INZaU7wWIVZlvFdcAIgb1v34bKeNTj7SOZm9zD2cJk%2Fb5%2B2ZBPomi62HDpiTFQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCWj6t8sWncpfcWDaircA9gW6PkliMbqJSM3XmB9t1we5e8db4D8xHe3rL1%2B5dElshf7ecmWH7Ig2GGck8AiBy1nGpdx1mwwLgvxaItfsGjXXq7JrFsinJtH%2BUfRv%2BUAYCxMZ31NSjzwju91vTFuhL3YmUnwlagVzGx9%2BJ8UBgAF0Nrk6nbNUlYz7UXIcAco9a75WyHtfDS1SB%2F676up3%2F3kgAOuk8DB4R4%2BEYoSnxDjfMX%2B6xY8NAgEzA0ELSV8FM0tqivOZdYnCGZXJwKwvIP9ixXu0t8DQuR55ji%2BJVAs3nnDrvJPruucd3S2J4IpB7QTbgH4%2BL9zT7yrZQiUgbsO85XBXjwqSGHeRBuU7r3YntLHr4kx%2Fy5QCrJ0P2q5rz%2BL3FNk36gcB%2FAH5b2XvX3HPqd9bxS5TCWW20hwEdSgZoBdtAFzCjkv%2BlsUHHleiIh9UFkfad1XPavQEqhQr%2FYglrhd2QCKRQ0h%2B279jgI9wMn4d9VF%2Brg1hB54LsWU%2BVss%2FreNSNrVKOFJ9JK7zCWTajRZROzvqQt7Xkw%2FgUZLR5K5SPvL6kd6cjt%2B9cJyFF9uZIDWPWtG4t7x9ChIM9nMbzTs8PwMkfQ34eYp%2BG5jO6slTQSmFSnB9J8rGVZJG%2F4nJqnI2ZMgFWCLMMmS48MGOqUB%2F%2FUl6ltbBSQDefpvoevIDg%2F6NToyaPiAZGuik16TYSNDUsjxSPZUIpe38PaNETKtu52%2FIuyqvm6JPLA3I5NLKQJdJU%2FO72o7Q0U3bQ9HruOwBmPdJAgVxN%2FOm58tiio6EJBvThWQdvry%2FexrYn5QIVusvfBQJsXXS%2FW81ylDCx1RceMp3hos33%2BXk4%2BG5E5aipk8iEwNLsxoEw4CQCAF1LDzzFIC&X-Amz-Signature=bd52580124996e1cf546e2975cd32046f662301928e22d3b804b3f963861ba07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
