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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ON4J65K%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoWvYkEGCqQVHGqFuVQ7JQcdWtRU2%2BcH9NpU3pqoW4aQIgVd7zaVSll72mSm0VkSWQWdJtXzHmSBROuc8eIk7ya98q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIGghJeH9MGuhFo9ayrcAxLSgm5LXCkgootSD1wuSKUTL19qbvsHACZeZO97upiPgZMmsfxUtKtwaUBRfcOUckcb3lNm6WeoMKZGhpbpOszjeZyPVaV47SFcy55N9uiznm228MGQgnpmdUsFTP%2BIlQGFQdDZLTia9lwrfkxA4APdpfOdlldu%2F2nQDI7n2nKBwkIs80XZjr2Sx27MuReznXqxm46AZzAQLxe%2BGuFGnfoItIJnovJnmkf5wZHvPvVt9uf8PA95JxiYVaetj5RfVlQWTdnnJ8kDh5afuuor3jJ%2BCPmutx4YNuddsB3VlEzJqitHGNDINBPywrGwi%2FvGe9emEM%2BiWvnjepX490PzMnmhkhXOzEEgxti1EG5%2FeqsWGVFhje1ccQUw6pR5lJ56OFvjPsm2jvo4xNY4n845xkLdk2VO8d%2Fm0q%2BSrWm2gCzNe%2FsFSNDP5EM1c0d2ouDTkDA9ESgfRlTycuJZC8GCSOMMGlP%2BJrGoxK6N18jJtilxR7hv%2FacaBlrZoO7E90gsjkE119CZzme0HuqgFYRxj2V5pU9ub%2BxiV6t5VVbVdMMORGUyQutVbutizPTqKklYTegtU0N91rVdXkFMjjWfapzbn1JJap7N93pCR0Eyd8E0APZ8wyV0aC92gANIMP6Ewb0GOqUB%2FhAufCl%2B37Rr4TbfLkJwQANHe5b%2Bx1Kn9MhlFjD51ipYUlkF4%2FBSnouKbIf9Fqc5pn8ZzBfDpTuERR7NE0br6bqLWfFTuk3mrKKx9QXLRbNxZ2gSKZ%2FA5OrrV0bCfgCVAAgqY7XmCHdOvFJXh9mb%2FUwUCMkAc1pZfpaA%2FlF6pMfWyJrRMzFqxOHC%2FEMqoAFQqrTlj4atBq6iie9Kq%2FBUD73tgKr2&X-Amz-Signature=a544fa4d87202e56165a107430bbfe6e93bd2b30fdbe548adffe6f792670ee4e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657K5V4EY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T080915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEzEBQgnjPQU2jqv%2BuZVctnQhDF4PAa2TLvJ%2FxVyt0c4AiEAvBzbUqdnEE7WfgB0HH810rE2XgH%2FrHUzsHwlSvBksQUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIJfqbBY8ptcDFrw5SrcA3Pglg5U%2B%2BH%2B7pNwyxifE%2Bqs6yYHMWWSFbJUXXx%2BdJ8QXB4vIne%2B929gpjpT2opH6YEwionDvHWfU11%2BGotXzY0mCtK%2FDC1LDCX1VcbqyQsHMVKci%2BlFJSGW4AcbJ1%2BK4t8itKP%2B8C%2B%2FgiEAALs2xzku2%2B8iBSqtvcimR6r%2BBBLBhQw0ut8MXz%2FPAVovEpAXnetCA%2FqQ1ip0XyP1P56Wvx3WAwh5ekt9haEkhJ%2BNGxnGV9VhcL0B4P6DU2AOi4JdyLgEkFi9x1RHSMKLOg7BYQ4YrrGpQELKJCMZ%2F9P2DviVUUaIsSj%2BbEufvWDk8A1%2FYpUWUuaNDSv1p1Zrql0aQOXZqlffQSMU9uH6WOgmoLjHfMnd9L7j6cl5FaIzpfh%2FOQkvCnDVCrhL5jrj%2FyoW1HJzmMKXMtPavmzujCQzvyH%2FEOxga1zT3%2FQ7G34UtDQNB5p4QZBctIK0SEkx6TcrsEziil4s17pBR4MP3pg%2Brvs9RzimLUnsr4XBppXFgxFR5CrYdBfDYg2mbOcGwm8qYlIp%2FpX%2F%2BoKPcFUYT7id%2F1NNwQm9sGz0u%2FfnF%2B%2F%2F2kG337hiz0xrAApdTX2GzWp%2B8BctMXbbbudrAHj2PLuSIMvJzmFa4YhXEC%2FTx0fbMMqEwb0GOqUBNhUMpBGGTDc%2BlU02mxmTyrqZMulpjIvnEdTV5K%2FBOpurlMuQYOSbA8GEF4ZPWyHrYpZUtToiqkobqjO4FQ9JoiJSm7L13McsnPAgy4nwosYn594gXFV85Km5b3mn%2FtzEN43TBOwCNu%2F7zmM0a%2BRuaMZZ5O6ASkCib6JcKW2uniE3jrvW1YdCvjo9utlMM3J9XAEl%2Fav9%2FsXfJIcV30yRBXdb%2Bj2E&X-Amz-Signature=bc7bddceb58d349261418ef1b80886282fb5267f342a1a0fe1f3f049df20ec75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
