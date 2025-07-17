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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUM5T7Y%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDxTSVl%2BGc0PREd%2F0M9%2BEFVNFgJutPihqHI1AXjtZ7t%2FgIgNNpZOAWLF8kMdYJZw%2FEYb%2Frj0fw6b3ZPamS1QVNOUMUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAgDl%2BvDIQqSr0oofyrcA4VljMKYZ%2FtndHgGHfa9%2FsFySMvt2aXvytmAbRYjjAfuZzeVwp5JcTylLUiN9URFdlPP7qBaZad0Oj5X04jIpK7tqpyLUzBHVNfVGE%2BfbBpQc7KLcmg76Nf9JKyLvAAlrllbwqtzPXLy2OQUDx9WKUKOwC%2FunehLqJZq0CEQIwGamzs5tZvIJ%2BPYWr%2BMiOMoz%2FVriXz6UqMXowEJKXCofnhlYlyjdO8Uq8T0R7Ko%2FKkqHdjKUS%2FRYEZVInbsQP2j2bBEbe3LWsIGOtgIcWYDiBeXFnyhIJuANZYaGn%2BLjDdj%2B1ny%2BFiFQvsxqLAwFxuf6vaxfravTmaI%2BvRXqJ4xahcNxUfKHmIa8aXpydE%2BVP%2Fs4Cuc6Xyvjl%2Ft%2BZNk%2Bkd8Rhyw8%2FqIaXCEY%2BSpZGnX5aZRlXYRYhvs8S54lYNiPNSPZ6LH%2Bq0qZZn8yruHx7XD8V6punvJbaxN6GN2ITVxDFOR9zcDnrz0Lc23e7fsqtMlXnLULi3RcCu8xUi0iY8IQbvbV1vUnpRyvKcn5B%2BmBetTM%2FTCM9CxOBMVAW6P5GaPqjEqYwu6LflYx%2FPHpCbD9toSnbRz22jMKTG%2BxMc8YsNwPm0uwOrredNz990pugxRL8X7k2MIZu%2FmIBqVMPKR48MGOqUBLGxnQYU7MlLDChqI33phiJH3TyJ79VNH%2FdmwJWKj7ck20U6VdYcGmVs%2B8gC0A%2BsFD8L2MSWEqNlmlXSsY%2Buc1HOnvJ8I6z7Kdupe8%2F1MMq656AGeRZQSnpDxlgGl32ZzMzOJ5TyDdMbtLs%2FCZpvPJdORQ77YiT1Ya6FGkHEOE%2BYv%2Fu%2Fcobhav2RU6dNYIbi4kQlnujhiISKXJ4iDdMmGAV4dxmC%2B&X-Amz-Signature=6b9a6374142c0162020172a59f4df952270550ac9dc03f8b5ead87c5387ffbf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWGHUODD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCICdSF416VmZW39KPQSbzE4%2FVnBqB8WJaBRd2zjKZ6wvjAiEAzU2kp5RnBj5jmzded4caPdjbDosTi2fBR5wWKdb0GBIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEI3zooE8MkM5MjGuCrcAzMUs0zRO%2BDV9PtKIaBEjZBKaUMh1g3smGR2QTD6VxCxwVCYWt%2FigC6ZHDVC3ldj0AVmNEWzYjoy9jZF0f%2FrVynDzcMcCR%2Fog%2Flhd2QV1LN8o%2BKjhBg%2FjYyvo%2B37Z6jlmJyyT04Nchuedud9J%2B03v%2FzwlHacON2YRZAo5BxdbnJKmxvmzQcaOqxvR9NVCGldnNSWBY7F9rcNcaLWlFAJL47I6%2BLLxautePsknd0p0VRS6GDiaxl8lMP2GxyDpgPvXxkJTG7bFYNlKEHXfsQA3wHqkqtTUF%2B%2BR9V4QEu0zd6XqfNfvEdOVRYQQ5lfHn4gNjr9qKaVcKBtqnmq3lV5uYCsAjbU7GOeeGCRXWeYsBQUw21t%2F3KLh43amdXuITHwVEiNcZYMukPPmYS3BDhhD6y5QzBZgyE1ZXCyJmrhE8kDCIq%2FJbsBY1X0V%2Bnrh8Uc0l6RGEK1gSEWGKwUkZmh7Gposv0%2F47VPnPrRmC3uUz48r6HtL3w49Ypehx4PdILG3ZK%2FzP%2FE8oBxhqrIiQYr5kG3vfG7SmxCINAeuD8g31CV7awhQ%2FuSJ%2Fyir9kDHucaDYNFqSeu%2FUW6LSQG6HF4rtXXEPkV54XjTBKTRL31PyvyGFsyz719gggj1pqbMOmR48MGOqUBzPRMGYyoHM23kZVJ0dtDkDCVnJi%2Bfxt6okbdu05Qrx06bi9yb%2B9%2BZpLl1KfA4gvexZSfyl92nLjgt6wGNZFfjlaq2PjcLDgbYWeP4FcXB6lf0mUuTLdoeEB2lcc%2BD2CycGuewH0SfTTDzntxUgti2ZXOD5tMr%2BJJ%2FYk1J84Zi2qYvDFGiPh%2BwcYO3%2BrBDvqkO5oPImOVkOaL2WHs5lmfr9%2FbMVbX&X-Amz-Signature=e72acd2ed8642abf5deabe3732e49b9fcaeb4a0acfe8bdda97023da1dd5dcb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
