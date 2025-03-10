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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVFF32C%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDoGgsGWqplf4pB%2FcmZEKv1ScLjLyjXO6V2R2awSYxSgwIgJtmxGrkwstWn1I6i6uQXy8EotUZxnqGBua%2BXgaxPVXUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9Z8fTdczjtMdrN8yrcA%2F%2F53yaJEocUSUa6IhTChW3GIPHzThg4XygjHzVPQaqx1gIQ0AoQzyQa4R9WPI191wSnHQKbe1SykroAvdWbTcDor%2FbRZ0KHvFoeHdjdx8aabIh1I%2FunJGuHhetqFMafRksKH%2BL2nrMWIHjZiMGGpOwCbVTpoUdag5H%2BRogaHl5nf%2FtIzq%2BS4%2BvD7P1dgoOTsJ3n8Pid6t9XZQb0hCdUs1FPD2PQt57iIjnHkAptOh%2FutkrS%2BBEaAHdjYP1PhBvE7bAKzhDY%2FJ3kRqLAItzXyG92HpFRVoMN9cJYBnYsKyB2UANJX5TNTxkLN%2BFVtnOA8BREq%2F03p%2BCFiKEmJWM3%2FEiD%2B1YD%2F2P8qbygE3YnaPBrXcsCezXyxwZU0%2Bh6IgyWnsU2TNlPszkfSV9XhA1qa6QaLcbrRhvmrJmUHdvldxAmmWm6UwG%2FcmGQiONLOKLc3wEMJViGKxoSI9QJLEmnqb6jSo3FfB8PDzv2oEj9uVuN07IQmVURINzs13zvmmrbC24gibX6SJbguo7hPy8lK%2BIPzZpZirlM2K4IZauRhd98aeY6SCLWT69mEHMiVlqvvNGzKvkAnWILlV569P0x6tpzPSaT8zBY%2Bu3zEfb4tSPo1UqZP1xh9jTiuj88ML3Lvb4GOqUBN%2Byf%2FrJ6x%2BW9n3jWIriJtL5Zc2psHJanTUaCxupTz75C4arCHKRIKo7GGUZSBmc6IFJrSPKvXMT%2FqH9nCkeaG6h0dFlllVB8gwdT%2FGnhDutd6yPY4CSCPO0MNgC5asGvanyqQRl4fatIbywpD5poS%2FwqOgRJYogcxbVD%2Bn%2B%2Fn5cmKHrxsYGzMZQ6MygW%2FAhk5ia%2FBLuf1PI7NMwAoV%2BbQ7%2F9yDjU&X-Amz-Signature=8dba2d9d8ce40770cdd19eea47fe6b10fb43ec74c779c1a1f517df599ff35114&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AQZ26QI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCzUsiXB56IemuHBp8vMJWXymnfeBRl5jFQ1oWpdjNJQwIhANxZnB7r4CmIve%2FNIfrKpCy4sZhOMPSzF7Xc6yRHCLc9KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRT29qitIV2ZitzdIq3AN2Dye%2BI1kaRPmrJ%2FXijvTysWiG%2Bag%2FebNAgBkHp%2BArCURKoNLc06Zw3FEOiSxem8f8LZGZ8AaBmC5bOtLn1o%2BFEshCzAzY1MsBxYx7cLfgdvoJpZkvGF%2FchRtLSuxLEwhZfcum39ScvEganEAGXGqCwd2BkoATTE9fAlSzALv5K93ULQ%2FsuTYrkGx%2Fo%2BqaVMZ77zSUuij8x94PL87DGxwgX%2F1Xzi9vd18w74bWDHzg6Zt8%2BrQYilrK6%2FBgZYhfpHS1lC76H64zaB8ejxFY0oyHjNiBLFxZESrcvOyHpL5rZ8p5cNDqDXrjUEEL6dPj%2FpJ0S61j6qDM4z3UFpdKAW6c9iOyMAY7yKPD9aMaR9QFx4R1OK8EHltM7mJxBjVNEx4b1vwQIMgJJ%2FDATJZM1qRhVXeQEvjbi3z8erxIShuzXxsep9XDJIq0kuxJg0HPS6BJPsG2HNrNtA7BPXOGBTSEIIBhS1WdRB12Y12d2xc%2BtO0rMJ4UQ6xmjEb1sEOHNcUO7RJLQcG9F1kR92f6DS4cJUaIuNFyzzcu9C2X6K4aBOBFUjhOoR%2FmxeCGBF4%2F%2BpV%2Bd%2BcK8VPf4lhOWtEL9lVz6AzA0A6vfjdUzsXKd3CDEIhXfNIQd%2BESf17DTDDwy72%2BBjqkAS7v5KCGkQ0hpPVN8ICeLCR0je%2FnRGr9%2BWT6rsAoIES6SfWm%2FJ54zACi7Lv%2B7C0JVVm%2Ff6pWY2VgMnhjixDPkPQWPStoYWPHhpKs6lkgFPLXgO4vQsjFj%2Bqid3CvTwQNtQ%2FlJvBqMxAYz%2BqctZVHIRRqfyaOIzrXELi3yeJfXCN%2FCdQd8QdwAZjP2iNQX9Q1XlT6mgc2UlLYh%2B%2F6GoXyf1q%2FMlA2&X-Amz-Signature=a131e30222ee6fb98c8686f16f647cae14911d16ae279ee21f754c1ae336c864&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
