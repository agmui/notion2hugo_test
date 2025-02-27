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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFRWIHK%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCID7XiDf5rSLmkpO9ZWJjNCXuFQjY51CLaTsG%2BcQ9JqqPAiAvFTV7Fk5EAomibYLMzhd0oaSgoU7fNBONYUVXZu%2Bp2Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4sKwM5LVfqltsXvOKtwDnKC4dKDPrdtcmr9ir3nUzfEPcSNmHMob1QyerhnVg4M9P51cOQtTuThbCL6Yjk6JH1YPmcN8IxBbI1S4Y%2FnlaNg1fmaeAWeseL%2FjWo9YAkwayXelfSBTwxlPVD4bswKtHDB7xrhPPn4vR69BRDJ61lirlYIkK2j5leGL6ig9CPW71OR%2BurBvWU7AVDpuuSYPNqZ9aEmK28rzSLGhwD4boiM8sW31bwnqNp%2FaxjFDQpoPq4VU5I5boSUNEIGt0uPqdjcKrMl5MhrQerpQsLIfOrNkuU0WgRAz1BAVHFXaFEXB6E4AjXBq91zvrG03r1wda%2FAQ8i6JgQuJGEOwW5r4XQMFlbFkRULlLsisDovwi4lqFBCtCeDMiirw1PMwnxtjYO8%2FXx9h%2B76ynB72zz9q%2BoWRRhfdHGgkFPq7TU0gZ333EMboCIHbh2bIcDbZEhtkQy%2B%2BeohpJqb%2FXLkBtGcyv3hvW202qdvCsUrt5Byna8M7N8av6qwRoqWJK68KPaO4wXHYVsN86CQuhJf8oCh6Q6sE2HwJ42Rv1h5XdDNCeATxAxL3hEiUXVMs3KHd7Cvsukeq36oM5TactDiNUmqWDQxhUxdQJcP7cHxNhvJff8F7%2BnCSLYk38UUWrowwpO2BvgY6pgGJizcu2B4KlzWX2wIbP2uQmoL6nMOdhO42RFI9NF91OQkuhrK0jfvioXl2cAho3CjjPTKIg11iTcaBQYwwLVMXgTT58cIwAvJMoCxLphO1k4nBYFF%2F%2FrG9T9CyfjNwcP%2BBEWksEwVWBUaKgyNQqxD7S%2B0nXkCsC1Y%2BKcW41oqjdDkIlBN8vzuimn7Qp1ujht0t4kY187Ad58IfJQsSTmM5hCg1GPEW&X-Amz-Signature=559eed0f2c04d7ac85da4057709a7db311c23c50b715fea4ca052742e1c685ad&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCL46R3A%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDmpliYxunPHNgNFbFeEIq0usyX3za3JvCU6WNNadTzZwIgRok9QBqXDN7zg9EInO%2BI%2F0ANDyDZCY5GOUr10oUj1xUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPtF1G5MiS4%2BUOw%2FQSrcA5Yn4eQlhzL5Y8EETuok8BkmiiZ%2BFR1o52BBnmVvZ11ANILhR4LOxfzoakl8b1e5OxuhTjxgFiWnCukuk6H8J7Tm07DEEhIKjLDh7cQ4bn5R2R0MVPmNk0PYOG7QLUUDlQOG6Yw0FflH6%2B9CHewNPFT07uI7rc694Eg7SCubXmS2yFlul3RSekkHxuXZ82agfg0loF4qzXvvZpf7vdu%2F6WB6JlNI3w47VbxQKkvYHMLQRwtdIcqZPoUlO4amUlcI03TvnPV3671hV16potdVBLR3afLVS7OVa8UvvgU%2B0AWoVgLyb3PO4owIhQ8ZrSam2js1ipmrB69El8PH7OfNtqwsGF0n0T7eqqNwJYSwJkUSonfXpqSK%2BAm3etGCnOVeQfTcT3U4Dgj%2FDjMMTJ5exoz9GAWORQK%2BIEsSP8%2FrZYuYMjkk4lzQO9r%2BX4f0ahS9VVcTD7%2FtUDtrMtIaq7OoA%2BGnCmZIR%2BA%2FRpm6l%2BKhnGoWO8nCAauwtZQ%2F6A5uPNQ1%2ByrRYO1cfUxPmYqCKBdHJ%2Bzm6kQQsQpNDrCz5dlOBskIypUsyR0dVgixSA70GzCQb9z72e3zJvzen0P2M8xww21aBilqevzAYY%2Bp1BY7%2B8UJYgY7U%2BzMzVTiBN4vMK7tgb4GOqUBOCKIsQ8%2BCTVdSGHiobuWb1T54CGE%2BmqlgOmvLWO%2Fpx2Qeb0SxSmmLWo4oc54%2BZEA4PyZ6HfmUhbtfx898yNALxbierqhFLRRCxmcOP2%2FfzVS7KDJJB1CFPHq5ZryyAg22xpfTUZ1Z9esJ3ancV6KurrFO%2Falo%2BL9dpLOSw3xB37j77ATY9mtN9VdwyfumUwJq0MMywIq66BbqEL%2FfUUC6QOnv6sC&X-Amz-Signature=23c2b91cf927662fd84cc8f8100465c70db9e69728b31b4b461453fcbc602a17&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
