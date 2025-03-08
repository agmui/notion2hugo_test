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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2FWBCOU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGJLNSiFbChinYekPoUYrlUePnwqLhGOgzYxbr7xsjzlAiEA8F2dML9pZ2sXOhsLkBHyboWOqbYOMwyul72BY3ymQu4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDAShP1V2h769FwRpyrcAwcxZ3zjZeNKZ5a2VQPJjcBRFmHwQwVWnGhywE8E8MaexzC8pQECFjihEf6PJuAxFATFvnTToChGhOp9YKLCnXVgWJ3bfpep8PoNuyVNeBRGlK4LIIoAG70dOaDrCdq0PYRT0Eihg3ocM9p5mB35ozlB6gHNK7mQNdY61XNXFAe%2BwFqCfVPG2gMeXqQqpyAoISyZ%2FPe3tufaP9YRt14ihc8YQAfv1mIoE2stzeWzps%2F%2Bog1uCa1xsGoVvgkh10azTOjUWguJGWe7NAg3fJ8Ot0amvQvXTH5lAYHaLUbXtXclMdjCnOhFvYuZEW%2B6eH2hIM8tExr1UUQhfKM0pCdtWsLsjVdyKNBfwFWkeo0BJhg9pTWzFgofPkO3M7PgjsVXv1BDQ88qedtZ1jAoobvFQQsWRq7uobmJutm200sUjxJBxO1PuFLE1OvWU%2F%2BIBcOG0uihx71x22a1EJS1Wh4v9NJSeSxdNtiPCxWm%2Fzux0roLW4ugqrks%2FN%2F%2FPqUKxWamQiQN0pS6BMk35pqNU6fdQVS60l6eYMu%2FsPxtStWJBC6jpRAPpVWF4Pj3YlythngMhXpFGF5ywmOdCHb46mypaY4yUYP3Sx%2Fa7bcMmHymfglpVILlkeXKcz%2BLEznAMLmzsb4GOqUBWzz2PY7HED36eMupy8HujPqWJZ4FX6FG5Mw2QBXxNBQYi2sB5BWRlGYRisWdFWqGPlb9uiNY4PySEk6QvASB3U%2FTQJ8xhNBoGqZxGCbMphcL408AVajnHjCbXFiuHhZ7GStg5KyAgnwax9ShIKZ%2FLOMx7iIrGM1uwLAAEVY36cnBZUCWzRVKDirOV9gEb1p9sgyaUHvKcxDI0BvGFcS97wiQ4k7t&X-Amz-Signature=a77646f60d228b98f1120622f870714d8fb97208056771d7e9ec6614cd8bc147&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J6WYE4K%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T150219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIF09aoJu4o9AadhuY0k3goyftXjjpl3Pv2zrVLC52gJ5AiAgEE8oUhKgZ2QQ2Bk%2BglNGesqapdCv8FrJgVaxm2nniir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMVuaWHCb%2F1SoSP1B2KtwDwSXFO8%2BcP%2BDQ9xvoG5T7QMMKuwLv%2B2H6oPXW39H%2BmiFxgQyr%2F9vY1PIQn1qASfl%2FcCPQVJpAh7lGH1oFJC7B6SF15XDlibbpIOL9Bj5lhu85rv0Z%2BUvuz2GjCkiq5Ec3D92%2FnmEytZ%2FXVAVzvnbwJkv4yKiBokOGhTCKC79w4ZmOOf7XCP5UP16aWCElcjZlU2BSt3P1lYBD2Zy%2FlMAZEVIqf%2BOzCL93ut53yc7uLE2Y2cqZ77z0XBmJFeBCfcnBHFOBdwQo0Xa%2FcGWHcVYr8B1%2FJCDF0slMPX0B9U%2FnETuIC%2FcFvnZgxJt6Y0O%2FIDM8Dn9yf7Vol79QYDI52d9256EXlbZ1JHUfo3%2FgEsJqi4ad1JtKCTLVpQ5Y2iNC5MbhAGaHEIDWtGufWyVTLkpQzfPRcZPrlKJAkCVTDVCxMpnAZfIIjF92lw0NhPNQbVqEgtoWV166fevUckkPDBeNyd64ruUZeMpchz0H5kTTpiDx2jpSM6fIfmGD07UXXxnCKcm8a8rdODp8Uh2ALtNX70k6ZxZR2iHKLFDWgpQu9fnzNYCq7Rx2de2IzRUmdVBE8%2Ftolb9Eh6vLdAmk9S6BsUq8aouKH9SwTFhfA0Ic79ZCQeeZpfHBaioFobYwiLOxvgY6pgE3UMc9OIp2O7SLhUey20zqXi9qibY4ZIhHct6eZre8w88GvDKrezFeid8bDFbJhQUZwGMAf%2FrWDecEJhlOfnCpxjIztM2NIf3h6SsS9%2Bt93asiE0Gp%2BGu5KUFCctlxTySKo%2FmsSsaJ%2FXnunXe1Asl5U%2BD31gDDn4tWTPog6cJfDty%2Bark%2BDGl3rOES6wl72Rj3ipKybqdtLw6AdQ%2B4VnbAkgQoRqwN&X-Amz-Signature=2d64eddfbcc8b69a311dfe9e29129e036b1117e73ede933839f988cc4cfa230e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
