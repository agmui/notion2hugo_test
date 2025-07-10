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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YFEPEHS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Vy7cYSawITANtMfDIH7RE51S0A1de2YJT%2BZT5nSipQIgPxA23IjLxwHXZqYyPNX6gxlkA3kqEU24lJdsND56%2FYEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCrzcVTxwhw3QXfICrcA3uMwebKkQlzmGWBNGyPO5EhvA9Y3%2FtFS%2B%2Bz8sh6Ustt%2Fc1ZR47sZTuDvA0a551LjIH3FZkZ174XOZ5fojko349ovB1SFRnCnsBuhZ71ROlFYL%2Bddm0qkRR4LY4q%2FxQKOe%2FXfi4dDydRUd7mc9uqoeITArmjmaSfXlEu86jiIr6I2hN4yLFd2DoQJw3wQ3Rk8PMW2MLNItH2SBlGj4Vcl536%2BtxfKve%2FtmQdKZfVAHKkNncy9xt4eAlQf4XwusyxFWrhsxU%2FIkMrKhl2QvW2rPi4x9YanVyytHsGIUbXKCzLRswekgn3TpwerYLnkJLW43MNXocq74Zcdaigvq3lEbBzK9P5PkHIqzF%2BVsunTV%2FYjiSyAxPiVkwV1QBlLM9Zh4s5hXWehCN1M%2BfBhc7BuiAd8LSit0RXKRnypWFhPeRYXUy9%2B7rQBKe9FYU33ijFfe5v8lbs0toTrU9MazN%2FNzkBd8SWczW6PzDpNxtAknqlPCkBkNIk79I92qW3AEjikGTmwSJTYHd1AwEhT8aUGzDUaAB%2FZasCeWE4C9w9E47cowFnWTPSjmzx0LM%2FPkTZybkY0Jvil1jk2LpdetBa0AIsiNal0LeVm5o%2FZNK8PxTyWlFLet3ygdVN5FWvMOOiwMMGOqUBuEr7A3WDh2nwgXaDx8wuPjOE7OxzJkxK6W4EclZZvCzjnD441udqxsbWDFfJBGNTHCRYqw2nqgyVJSOPv4SG2aNp9xe4Guf8kBYEe%2F0xNIueC%2FsI93L1V01MNIQP6J5gN1pdslCowmpPDPSpYSdprhPlykzjNRIzmP335oC8skbPIjSrh7%2FR27rMiIasVVkobIoakNjJQh9XCv5xcX1kk1yQfzfp&X-Amz-Signature=91c4c0c0a1dff010f89b2b0f6a3127138604b47735c76e1a9fdd106278c2834a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVQEK66A%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD4swqVJicexH7lV8%2BjgYUs2ysYIzHvfJrL2bw6ASH%2FQIhAPNhNkFiSRrik90pBpnVxIUPn3dC6Cyw0ydYyJ9PYe%2FVKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGDAoUChWnktH965wq3AM%2BcIhvP6wU%2FEwXEQxRV2lPepi2G1uqdLztB4IVXufsyRCahSjMGV8eO6qAPfgTwNSTmnSm52qwNC80RGrr%2BBqAlh1p9f57vmGhwaukRAslEKXiE8Fikt2jwyGgYzTiCZKSDu5%2BkzvjlBZML0DZmN4%2FyBW2IrQXN2JYUXFGAqjXzDaE3i1pmgvvwsag3Qi74Qz%2BkTIg7F8ZyxmLgomK0VSDjilGGXfdfhIsfw8jfD%2B2N1Scpns2bhRp%2FVH%2Fqt14midbIn6AiHn4KJI5R87B87sfHx4JO6PE1dHvLplKjNQw%2BLyxwrZb0Pb0LNMcHXL685g44IYyaDdXV6x2CydghNI%2BiHu1Ny5b3jcueAWxVz1mEkbxPUcMOyUqn8x0L8ucVIkOK7dNuV%2BMBvClgDlXrZDI4QpbRwtvw2DpOpf7jh5li%2Ftq8q7XP4%2BSjpwACriDSJuO3eJJ28F4LvTmZVhmQOwXcJaq%2BIKF4JBcCkk2EOeqPWhgkj%2BsrwaRFjiuLsW6xIqf6X9Y%2BzILbIrj1ZH3OzmetTlbiJnLlyG8ocZRAYyXUdmWsIZmU6yA63k8xJ8xVLTtxdQCzwswYPboazXAOEIbNCEN17eA6shsrbO%2ByMxcqFIkkcv2Su6Z%2BmqHuDDNosDDBjqkAQ7PF%2FY70nRrO4CPqh6QLZSV3GZfeIWhluiMZQJqbBkvYM82GtRziuPH0BpyKRvTFXdnZ4eyi32eo5RfDsaBhslovc%2FUFj8T20KqCUlGG2f%2Bt%2B%2FPUo8HDelai5VZxsz%2B2wzPY62SOvnuFA21XuyzcvXcDFmD6uiY5RahXN5e8gL9SYVwZMnM1yGDnGBMvCJe9S4IMr7B1NgfyPJ4CCxE7V8wLBQW&X-Amz-Signature=9d7abda2d3c700b1002b251ac5a17b56386040621e730d69cf1894f0315c3ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
