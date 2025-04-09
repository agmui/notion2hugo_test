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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3FUJER%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGB0jrrg7ydF%2BbGG4H2VUSl1Ku1al8y7nqFBKEfRMaGHAiEA4jdLuyUCbuGfFnI3STYwIYUH8wq7L%2Bn%2F4i4jnUkPTH4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFn6%2F%2BUDE%2FByMGAH8CrcA%2F%2FKEFQkW5J5exedkF%2FhHHeyWIPBQ76qLVEjerhugtpPO8X3oSiKBdJcs7fRrP43E0VBHnR5BhXJXPvt1oo1NltrdD%2FHtGzeJWTaIzfUJT7nCAS2xUADw73N8lWxTGJ%2B%2BOxs%2FZPoKaW%2FemegUxxTElsZDYf%2B0mnf1YB50HFblX4ABYD9FJzZnMng5EzZO2O3JHXmVqZ%2B8jz1aZGFAxvru5komdXMVxIvLGKQdyclDRgQuElMmsKLkmlKxdT6Rh7x99i%2FcwMW3uXmo6ZrzYwQFqUFqdk0%2BzS21YmnoXmoONkWopIwDvSKclxVo%2FeoMkM0bemIZ4r6U28E5bMMx9%2BN29Doa15ztt%2FTkZHsnGTore%2FkSYMN1qIekSBxkztz2RgfMKQOwcUmE%2F9bJACNBI2Q6yFAc15L%2BWxEPva4GPCg2hoyyyU4IJWIaLXBI6JN2cz01fBbqcM6g0FHy2bo%2FbLYV%2FjJeWGkKbiZgcL8poGFCmiOREgz4YGmawjJcYDG1p0mxBr4d6tWn1wtF0eyESwqIwDwvBhWgG%2B0qQNb7QlwOXWmVBFhCjh5De9ZviYtGfCDTfUEnqQTbpimhTWcFo39JhMtV21wC4sXSAAoYumGJIocKBT92MeBZFmkxn9HMMuX2b8GOqUBsqS4rsDwOT2%2F5NOdGxvL8a8nLd8jSL9DkS3%2B5L4dGSvHG4hI6ntsC2r0n%2FOOBlonKPQrLdijxN2ae4pnkeAqQYLU4aQtji8NQTkNQz2H2FDagvFHCpJSWnwOjSACqroq1cdJvyCxX5kZgFQyOKIMDw4uKiOdOre9az91oj3wQl2GP4rh3CQMIhz7Q3XqAI0XNRGo141dclWJQFCen7FrQ%2FKUyrFI&X-Amz-Signature=17c01d9e17322c44e455c479b1f4cd247fbe5de04f45dd598a42c8ffba25e0cd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGHJIF42%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDi7ngPhTSzgooB%2FiESTGe7VA7qdmx%2BZNhWgsa3oX7F0QIgdA6jc7drzW1Q2raOxZqZZC%2BMqt4gPYeE7VqRzbsxn7MqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3TrbfdCn7U%2BDcffyrcA0IcY5u%2BTJQ8SNanOdOxa6xeqdvhfqPh3ihAH9XwsJO8zROMrZSb2WWfl3okDa1YrK%2FuzORpjU8W3IzH7xvzzf7f%2B2GW6lFdnkk1C9YghrA3f3wbxBGLoKViOU2sTGVl2Xekt2XjMW9YQmJE4xDCjaCSrLvtVUzsA66u5FsnQXaNJLVKYlpSn1%2BgonRHpv%2BkapzkwUotrlCqhMm9viai9fiUczDstf7yK2ZaaX2IFRfjwmYxIX0QTtspOK%2BO%2B4nKz%2BF3U9mYlIPQcrKJt3mMn1RunHIUXEyiT14OeYBB5ItX3fyIfdd7bVm7FpAHea3ZJ3pDoLdfTJQmL2c6Z2l9T5ncJWqikSjG3t3ovX%2FXArM1B7v2Jp08RCpzRbSvOcrm%2BAEaOpRv4OIpZu7xck52twF4rEQMbnBuARFfrJoyoz1jL%2F9yfcb8JDZUJ2DuOC5ARdZvvNh%2FPDPEEiddDZvd%2BKCpC2dQPb%2BYcGtU9HwqgpwJkUYO1EswbofSoTLKv1KGPVgJ0zsW1dYkjm3txRr2Ut2%2BXc8GOr0Ogri9%2Fhmg2DnaqH4k6y%2BjcEX6Yjmc82%2Bc8pwIirkrZlUNqLVyK3kLBWW3JnGxiH5D%2FAsk2b22yFdy2IScY%2BQUIAmkLDyZMN6X2b8GOqUBHbTBCJG4zIqIwmaLaoxV9%2B1Y%2BR3w%2FJk4WRq68HNt833lkZGbwefQ0y4WH5somRX51PRMOmyF4q29UW56v%2By1GcucEHnDWj7X9czt7pR5JDQx6p0zcGRa6oeimWCkIDB9zCukPW%2Fewp%2B9w8hbx1mUTyMyKp6djcRyBdOxKDB%2F6JoZO15ymSZbJOxsT1OvE%2BrukmJFoldbyJGqACGXRvTvaQxlVtou&X-Amz-Signature=650db5619bc3687b4937ee9923ada62c63d59846a677ee4179a01486118292a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
