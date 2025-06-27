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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTBZ4VVL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCgsfM6ZU2G7FweaCvFncJOhMThAqq5h5BsKLMaSnWcpAIhAOXsik%2BH4PxBW5Quoi4I6LoHrOpJQ7om8JgBD7UmgY%2B%2FKv8DCHcQABoMNjM3NDIzMTgzODA1IgxZ%2B392W4Gc%2F4g6h7sq3AMErdBozUZz9QaZWe8j4ZciPPlCtyPW0%2BVzvNKmo8%2F3frXo%2Fi4dkIrMfgA6mxxIB6WYwqKNztMfNmEJDsLAyYujfDjp6h1m0My2vgmpt7mRH3b3INsqysuPGKx%2Btf%2FLgfQAf4GiTtYEBDkjVsp0Wd9KNDiMg0D1ttu6crms63FCEKrNQqMcY4WFSc1oXecvkcihMZ9Dn5et6pLOP4XYTOGdrtg4szoEWVlEvQNMhHc9%2F6v13%2B8VzUhvICvHPmHoODXL6QR%2Bj1HzXgoMexB6IF8mJt%2BqR93rsd%2FwRZTgBXIhhasA5HbaaCguOGUBo3sJ1BoxGuS35Y8qGbmuuGhV92oZwHuwsRgRe6G2xG%2BvvuKugGgfpXs2wBZYyOwsdwx2j%2BKYD71v0qjdZ2viL3zAsCm4r13w7amjakfgEu3qbcKyRUJbsoJzkSVE%2BU3y1L%2Fz4HPvYjrZTBRZkhmLYZ5rSJy7ZkbKnelUkicxOoZ4UwRSf8xQrSpwO2ru9u2ihHPVYAyuosqTgvqRZJ9BflLBbl1kZfMQG6bt%2FpKWImdM32t0KcaXRRLZ0FjH6qWRtS65f2xYLplrs%2BJienyKvV9Lp5fgKTUTx%2FCqI2BOeneDrha4VMCmTldWen4MkIJfPDCEzPrCBjqkATtz3%2BAu%2BDmIiZLJoxNl7aEs7UdrQ7nolsQybeNZgnrWYYBehqOzVKEKtJQQK2GFoCntrbud0wxY%2FAkGi6M02u5Bodw%2BkNYZElZQyjq8%2B7Cm0agarNnB1GX4wjiaBlcoTZvbPztdNveHnN%2FMVw%2BlIFryCQKaKZEj46Ct3y1bQnfmwtl%2FrsRgpI%2BYQjU0CIeluncYNLK9puschAOZK7IYn46U%2FM61&X-Amz-Signature=af6fe5df834ec7d53b0afc60771e1c718e4b11e78c1ed27eb00b7ed6cb9b078a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEATC3PP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGRcUhNmUoKAhuaaEXm2xu8eLcSJfmcskOE01IU3FyFPAiEAjkXzQxi8dNZLqwJRBybO35%2BgUjbH%2Fx8qprWVGkMukY4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDETVB3rvyhn%2FfpjlHircA%2B7OJRZwgsRX35Lwie8vq8V6uSfprFL%2B5kXhOxi6G5EXdPk8nhmv0Xq0%2FGhF4qf07gnmK%2BNQ0DHjP6sgrJWL4d1Xe3F5yEhcMDMP2W63NxdlWsTsdiol%2F7Gb%2BSibOAGf8YMXYw83qOI6ujbDAifKh4cyCqb15ZiEw4e%2FYIaknomf5PvPIkhl1euoIYRvLZ%2BqtznqrS0g%2FoUWy9onWhFM9IYj8mVhBcAi5k43N4yBuWLt8bZQ9PW1qcqyb4QHcUyQKSLSZWm41GkTINvOUh%2FB7sqpq4iiN3oSZBk5vyHOHQc0GrI0tD%2BwuQvZf9FBU%2FArfwCUzI9LYZYF0z4gCfLCpZkLZbapgEFpxdVSb0whg4nk5gfJWBhfmqXZqn6rM4uPWXdM4O4TV6%2BL9os%2FpPK0%2BDEB9k1hfjCYAExxDqTxm7tyy1kvBD3A8f1Nq%2BnhQU%2FQrS%2BTkuv8kbJUyBeMUSs8U501uIFOztB0j73iEesCEpjsx6Ryn9wBdMMcTEdRkn2FnItXEGjIzS85YB6CSQLWqjaMF8DcKvbHUI33Rn%2FpFqMDaj5h8GBqhcaDdztCW0HM2%2F%2B78tVJ%2FbgyzKTM8GTqaLaEXTovVMQO3LOaHBaGh9I2XodDKpzGRbhOZLgSMJfM%2BsIGOqUB8VA5qwCKlQgi3zJFSMgLcx6AR%2FwndLLUWhwdgGj2TmxIqEX%2BYxqxzytlrirXyL9Ymera1nkha6%2FAgi7ROHdsEE%2FIyJV%2FMN0f8YbG%2BoJUKqNpc%2B9ULR17m33SUnhC2WTCq%2FJvzpkS4PIkDROv9Pndkvyq3h4FKTi0EzfJinEQt0Qqsa9J2Azr3%2BMJRMyjGJVfmQ2dDX2Fwcti%2FsPJ1TitgfEigGck&X-Amz-Signature=2972a581d16ef0a35ea8b7863fc925eef1b93d1b69d3c5ad8adf692e61638f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
