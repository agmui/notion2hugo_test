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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5NY2DWF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEnJgEPS6OH2V65rrVIwCm%2FZJznI9xqQoiY5AWARm%2F5wIhAMoY0HB57s9SgnYrPQ1c4SVJC7BMJrhU3Dg02yZLkWMwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTaxl1QjWluyYzkbQq3AOo6xxi2wr%2Fxion5KhAfKSLrPfyvQV9pJA2jSlaRJ1JVnEipMIK9V65gWRkv7iR08n%2FGWSptgGMQvxl%2BrZ4pEKkBURU6pRjPqDltjhxs%2BHYd9%2BoVWkXeLr2zEQmXpHMe20%2FSXJe2kzVNfdSjuVB2yt%2BpMsGzOOto0ROwXLZAvQ60IvCP%2FqDmM6EfYeCdnmKPRE%2BpDl8Nm4eeL6Hh%2B00ezlNaoGDMdl2u1JpHD8gqav6I5LZ62BkH1SE3rYHklkTitcoJn%2BRmH9eQtJqCZoAlMpY3H%2F43cUJazCx%2F0gk6KIS3nBpVVkpjoYE5Ec1StXsSPTaWdzukjidiM0xUWpsh8SPZhPczUghwq92PfwQrlSuwjg4ZtvaGBF3nmEwPJgq0Q6fe3QMFHzrOS9Gfki795R4OM1uKbekcVvRCMqTuSDXEgjBzQ%2BC7NKnoyGJ%2FBzGMS826BCLb9x0jPED%2F3E6VVMLAzAP1Hqwd%2BWKNtsN7gi24EOvgPCmvKC203tGjepQbX7a5G6KkMzwjNAjC39mc5HPPHdpIhytuQFdFGhCdu7ARpRPe5%2BVM%2Bo7mR%2F6DLGwtNBrmrEYv4fG3bBRCr1wF0zkqcDyZ8RJwE6gwLri%2BHwyepT7xNvr4Fm1d1NbsDCD9YDDBjqkAUrgsLPzUNZVUY0pU1oQE2BJMy0lZ7V2iDyZKnUblt3jaBPxN1pkOREwPm2L0GRPUMwsLeNTcZ7AQc1ZQEYA0GLtjMlx6uIsnKNgH38y33hwpJeHaVZ%2FOQz0HYfiZSgMSylI2MiCeJF2NTaIXKB%2Bl5HAVy3NtPeEv%2F0TYz%2BGAHyNpemFcrb3c%2FA2VaH%2FR9uFNe8pNR0HarmtHhVb4I8S%2BXEkuze1&X-Amz-Signature=719d16431ff6dac963a19c102078af11c2ec91b5ef5fe8c0c00d04fc9550b07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGXJV4H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqJO1sLruMzm9qN1UfoAzr%2F0K%2FEyOILImWhz%2BeqUqSYAiBg6tVpa0kVRZe4jaA8iMOOfv%2BeBRwLJLGGqUK%2FCUrP6SqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLncjfP7OZ%2BCPiwEJKtwDl8W%2Bb%2FGoaKyOk7d7ktIzUDgbJs%2BlkDvSM%2Fabahv6e6zCGfOv%2FLawt9NIRcNL5uEH8zQpHN2eOqGXb6n%2FDrADM5xShThnymjMYK2doE0UtI5JWB5%2F6iafey10l4%2FFobCybJ01aODRrDT%2BWJxOi%2BYIBh3PKfT0HCRijGH8E8X0lza0rV9%2FbSNUdPkej2z%2BmcGKoyFF1p8JkkE31Y6%2FpwagszXbVv81raTJArcw5%2BjqlV4U3aEEM1gDAXY7hXcPeQEOasI44brOVWjXuJwb%2Bm7FjgijBQk%2FAQ9H1lRUf46iZuVMUQOtB6CAheSWZJZyOCs9BDYQ01xc2C7GfqCMwp73C%2F1hQ0LrM7%2FwfjAeTrXtwc66G4WyGz5yrmAXnMB9niXlVjivmNtM70P2V8g3VaisBUGk9DEMS5GQUPXF%2FEeyJwdowV1i4QlwMH9VHWziueBUk72Eg0ha2XwhFkof4qHzDHYJOaJ9MPunn1xXO2NuiNLEvOlNYoShRQ2Ocl49UxSDKRM736%2BStdYQO4t%2B0G9EcMnRQJ6qzd4cCssgqCwfA1XBePgcSdBLaT07%2BZIDUl4kMIrZo0j4h5Rtlmwl66MAcu9oeFK%2BwPHUWve%2Fj9yItQdu2A4MYbiEtmjm9tMw9%2FSAwwY6pgFlbJzocbC8zgX%2B99sHNg5hXj9akMNbDfP9VZzxIYJE%2BQER3o%2BXSCzvil8c0aNJEGFj0D9VFO%2F%2BCrJRT78Wtq%2FBrzHZbC8NALmhdIkO923bhZDzxFVd99%2BKAVV4yuZN524Z0YetsZ3y3bQnf7ENExOsipyAe2bf%2Fcy9b6AcrGGebSK7ib1gHaWh1O5j8l3jJ%2BJqJhLu%2BG2AT17ILzWJPnqgz%2BrPRCFD&X-Amz-Signature=996060e5b1fed7862424d0710ae8f913271fdce2b3149170011016ffe8d7991a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
