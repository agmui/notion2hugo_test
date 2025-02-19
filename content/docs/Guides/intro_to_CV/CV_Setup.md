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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5UHGWC5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGXj85QqWy172plohsshl8%2BqhheO68k%2B0AzL4Mi8Pu9dAiEAyFxUtNtlUExc0Z8uvVBEWrK%2FAjCWUp5Bm3lgNDkociEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtEUpgHacOWar8N3ircA2AGFMi2OnDEnub01oHHqj9UbiB9AHvBvXeVby1CMFhjf8cL5fC7QOdHiZX1aCocQDkpFSW2duqsNU%2B5xgcSD3LhOqIHtStYnUGjGV8iuImCXwc3DFGC5AFaVt%2BcBJvnvpmGzCr1%2BiOMarAwEk0S8N%2BbkACpHAQY%2FuCvrvp37X13E8yrfagYPzXqdPeUKUnwV0d3riKOm8azBzM7jnl5TS%2FPSi52tqnCfttMO4cxX2775mDzM9MYVnGASwEM%2Ffgwd3J64LpMJJNAJWvnVq2aiCnbj9xnmyfUF4QEKsvBMYGQuCkf8%2BWae%2Bh0a%2BWz9vtWcJzO0mkkvlu3gq39%2BwqYDPUd6oT1wNZwfyOqlmmhQFd7wsjUTA4e7xWwP6SFnz15ji5nmv1RAaXWRiqezwHs5kKyfCdUvZh9IyBQcU2EkOjWzYHRjBvVDz2kQji%2FOq7WsuV0n1bFTe7QSHNaGDudzyBk0vYBczUhE8BYwVB1gblZv96sL9NSJs4rH%2FnQfRPu%2BHODz%2B0hmK2hZ847%2BUam4XF9OFrQv%2FJ94jQ2Zgj199XgSnTcXKkWo8Qck73vd9JkG8khxPzto6ZGvirhojRYg5wjs7T95M7Z0bWWiL9tdqcc3nGtN%2BOfQWrGOSutMKXN1L0GOqUBxRliR36Ai3oVdAvXaMj15NmH5XVXEe4ybwF5RLhT6eSQGOxtg5v9LstH%2F0lCAUX3DTNseGQ%2FRxdaxgvGekvLeNKCSMEPkV%2FolbyW1uJW1Mq5AQWOO6RS5yzRGPdJ1pwv2R3QlRXqfXWeqemZU9MdVFuq2Lv4J9BrNLOV8ePlFRIBIBqRQ4few62ty1jo34buDy%2BX64NQ1nbEAHbsrj%2BiI1IYDQIf&X-Amz-Signature=7501cf0a719beb0863ebebb5afe595a5031756183cb618f9b9c252fba6bd9263&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YPWURW%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDHCLpXFbEW1jFqDlqsbGIOeuSNfn9LI8EM0MNI1mgdJAiEAuL6XK26H72kR6n8siGLizO52XPER56TPV%2FJvLQ5h%2BmEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDj%2FGyX61JcQ%2F%2F8jYircAw02bHrqxKlrZ0obCQr667pZ%2BWiffwsiUZuSjMDDCmCPLR86TtgUc2EMga1kb6acAaiAML4%2ByLeZyhoUChp1xt4wMd%2BU8%2FKD%2FmG2cdeaS5PSklqEQBFfJd1wPN%2FXAfHU7NYrSY%2B57VQspZrAZy7H%2B35rxUMugpVM%2B9W2znFkeKMcJuBZbF9Y2iJbQG32m4YMw8hApDA%2FFxp6Dehve1Yfwm4pUWg6SdZaMZPIypNII1INTGgNeD6t3OR%2FwrqTTQRX7kVimhgcRfQSsM8UmfTqkaIr13zOZR%2F9L7cdObX%2B7dxyoOwNHu24XyWsAZNqOpmuohfWHzHW2OUfeMlJfCzbp8EEoDQBa4xW2d8i7xVZUouCrrXMOr61Fg3%2BE%2BmDd75xUz2iPDwNMv5cxiGanVq0znYILOqULduwWwoLVCFPLS1BjnODgFL4tdHUxZLQzmXGoNSAfzMvrfMboxodG9nP566Y7625eoNBN3QG%2FGI8tetwIcid9jMRpZHUoQl2ENKUU8Xte27FDqT0UtvG1Uc%2FoQbK%2B6Q04Yd1%2B3Bq0pTft1lfZprtXzp3ivhL6NRSwckXfzMyswJkl4FqHjtl9hfwy6JcxO36esKbE0vNAsXT89c%2FyfpB5kYjDOWr5%2FFRMKPN1L0GOqUBszBtHX3kagNyLi0EVe1Ryv7ZKZsAXr6mif%2BG1z3%2BPwpDVR%2FbVATUzG6zneVjIdld6zxbDVy0rHqjk2MffDhbNpKWL4Gtq2zQ9jzJBhS5dj0VyvvWRZgsoYuk4TiInL41c1pNJ%2FfkaYxUuaP%2BuEWjVdSAxJFH2jzn1jyedEhmTpXAp9EqiRkTc76Z5m7Q%2BqctSAFrnzDJHDNY8da4sv%2F8SeDaqQk%2F&X-Amz-Signature=a02cc3170ef53fa7a7acedaa5da1aefbedd80e92ab1011059b719a4786e02185&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
