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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZF4QYFF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEZ1ajO1gdufoLoPdchJRONN4018Sxj5Sh3WGhzg4oqoAiEA5yuxx%2FZwXjRx0IqEiLPx7iPeReBSTfhevEgHBWUAwvcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGv6D0SJKZwYdCuc%2FCrcAw9gg9pk2yPHnJk5RGoS8wb6sRumEJzHk69zwbnSsz9jDuwb%2FN48RnYPWVRFp0Fr8eMt4HJlM10DCpGgbouk3M1fcq9bLA7T3Lg8BCSCYoRxFOTAx93s0a0O82FvE2TzOfU%2Fpzxsf3o2gsR7zaPipZAAcSe17jZmKFAMadXxUW9k7pqw9EVaZN0rhkIvIypnEZyUyq1miheMkHSO5XCgFGpkjdAY3YPzNJENumOg7CO68E05IG5pih08YZdkH7umKJtmnb502BhHJcJPPAAXSnfSUERnoEB47NE4Zq6exB5iWVefgOU7E2vqJ7Ml1DeXF%2BoXGakFUKXxf7gsLMGxOHc%2Fe0A3Vfk3FrSRXKtw47N2KsIvA8Pr4S%2B6M2F1mzK2%2Feuoj5vQcOAzv4utEpGNMHIJ6XzzI5IN2y9NsAAu2LNj3SvNRIy8aDUrBbLvc35WEiB9gY%2BqFPs3QBnwewdw69DO2e0dFMFJ%2FTwcY1%2B2NiYF%2BOFPP6qceEIEXdwZoOVSB6U4zoOQA8pOtuxNYG4r6N6v9wKxQCn89BKU8b8XRkQR4DR6%2FrUhq4kacfYly7Y01qlsBvfAxPVshNGLkPWds%2BKUh%2Fkdhp5FHo%2FVjEpEOY%2BLD%2F%2FHYOHhvx8dfkq%2FMKzmz8MGOqUB9xbaqxOrm6Utx%2BA0l4KTV%2BssupEVHc4SjH8foe0%2B77HQD1%2FVrdg2jDwE%2F8Sp9CuxadfcDnKjmqLPnUx%2F052ldSEp1T4%2BQpUTU77ISS9y8R9%2Fru9IOxhuEPwTsgPc9LauyIvCtOoLcZO0kxMZjURxOZBme0QdeIebBy5FDlDCtgbenQH3G%2BFEVqOVIsn8L9bzs%2FEsjEihSUtK%2BOPG36fjWI45VJ5A&X-Amz-Signature=1495e511c84da1b8f74118ccc9ee4b9fc501cd7d85f1e503d25cdd26aaf46b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642O7ONNU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCvEBkWCB3dEppzKyx1WJjS%2BpRnWYbmUOaTtK949%2BpF%2BgIhAIUpwsOoX66IjKJs7yXipyLt%2BWTCMXf67%2Fg52CfCpEFKKv8DCBsQABoMNjM3NDIzMTgzODA1IgynIZKfZ13iFupnpyYq3AMDZ3DVP%2FIlY4dKRKGSHuM%2B4Cpc9g%2Fozaf8bfVuMHSzTQO%2FdS3nLodmk1prZpuz%2B%2BOFAGIJ%2FIyNnRKzw2oJia3XCD1iBj1imIPqYrRDlsY3acujUENXV9sb7T0E6Slv0WaKSpzdWU4CBiOCAG395Uyt7v2HDgzv5o64FKh5vNv3il8jVHV47GzJXagOf%2FvxcqIP4BHwU6QWSiqQ%2B70ZEBNpAAkn0H%2FsNaOVVL2BAw2IOVltTLdAjDEHD5%2B6%2FQozjzpzuajMXCuPZ9SOjJqlO8ByLTsTsrHkYA7VJ2tEi4d5e5Kr3xfS4WHd7O4W0mxXfTbHmWExZYRhgy8I571xrhP7WHEMsAvpUERXDZQKGMYUFvp%2FIrst6pZTeFVHwOgugZ2176XocIzgMPncPP3wSJuliFp0PWXoy8qTMbXJKAos44W9ezeFpyjU%2FGMrizriJo2aWa7FpGkkl1koD%2FZd1rbryv4QBg1iRc3ZIbhbty7hyOPKiXzcLBcmFRTS1kwWXd6CT13WNPHs7JhFrFEY63r%2BY2hnzY2jlpJqHPh55d36vNLOjEQMdmfJIvWVQnpXcCebJAeyKPNQuVjJz3AnYeoc82YItHpcYlGx2%2FCQO79vaVQMcSscaElVnjVhkjDt5s%2FDBjqkAfK4id6QpxrSK7fcHFe93DmuTf6iKTzN8O8busjzeLKTJPfNHr9iIRLg4Oxd86q%2BLTrFafdl3VKb3pEabvGkEH8F6cvKGoGgstTtaanD1e7Ba9g2NBPQX4BBOpnvGyDonDGOc4VpnaqX1RXlJfN%2FabLdH%2FBV5plGi%2F7cK9PzQObTQfqNnHGW0afJwD3TaxyfVcfB6At1LKIS7iQaoLFJq1oE1C%2B9&X-Amz-Signature=9cc76f0cc4e96d9649c0b1d3fa54a33fe77bbe9e1ea4add1da84b4991c849ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
