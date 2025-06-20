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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPR2ZSYG%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8SjS8OfWZhr8L6F32%2FyXg67L34m2o%2FHWDKGlHypPecwIgHMnXbqzWTr0bZ6shzVeDhEGfE7gPiuCiFU%2B7b03RPQoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAWFXlrnj7x0FXscircAyVsVrVLxVvGBnzJQZJg7f2TC555GY0NputRTg5lSswer3CWyqd9oeCSr29c6pyqTQXMsrdXGcNFXHjDEWc7cVA3gVRyWBQF1cku5HwqMdVHw7%2BL8gmpp20NPgsAXBojlhsRYYE6H8ev6MAX36LLbVM1q0IrIlD7VnN5iCWrdr1%2BOPkN1SX7dYEC7N5%2FBtJ5zRCFGxx2I6GESvDqltUGvbr2qIA2Xkf6Q2HB0flJaoeR5bNNMByB6cQ7ZjSp8AUqb0T9R5nFMd1%2Fuy%2BS9vrFwRBnG5SoUKDAFepwBvdQ8pR1H2V8c%2BDs7lEEtuC0VP4QXzPS9EGWAfgfP9evfTRJhCjPn2AoGDA7nmr3JnP%2FdZXrz7e6PMQHIrm8rq7h1e3FoXp5rhHC4qW237EKS99OUWeDuZxMPHpVAXEoq8T04IMB53tb9aLDSklA4IUzdTgVOyrANsKL3dYV2AG935%2FQVbP1Dhwgy4z7gYCzzBX0C49ap9QjNE6zoU0BET7awqWvp1F2kP5FdZgwNVwW39RWEiksLLr2wj8g%2FuYzke9Ui2YCD2TZgtnvMn2ihW3mzlO05aM%2FZH4Io8xDaxt3eFOHItzbX5yo8wpS2iXiugrnCA3vdqwX%2Bc%2FYvLbeLP9%2FMJ6z1sIGOqUBKi0JhHtShDUbzuPJ7bQ9of%2BJY3lCEO4maRie0lBAoe0usZD3%2BXGfzfMZeBFrz0Vyr4Cm%2Bc%2BDlETfsoBaSBlWiDf%2BAJtsVdaN1ey0kcKgdJOpzJxH2%2BLB58PT7wGP%2Bh1PxDE%2FHjFsUz9g3oCJYZb2waXBRo7pfBfaml3aysuTXaANHVz5FMg4qlOkFGGTZR6iTfkqgbtNWkl96G8E4e%2Bu4m2oenGH&X-Amz-Signature=b7ce11250a9d8e18f5bb0599d052705d55434e5bb9e812bb379e78ec4bd66bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSK42HW7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8NpkDvINsflil7VnrOO7RIibW1ij9QnUjMeNVXoblhgIgRsYhSlJgy7I6nLb3EDrn2FMQ95QKr5%2FjJ8QkhaGj8nQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Fa66xgaQ6W1Ev0lyrcA523I88EhZO944NVyAYHtAhrGNenWZlIGVFnWF9Ioh2oemnORIcdaaK7eDSCXrZJ0evZzMpFs%2FJx5pRueFNSvGS2DyU0JEwW3HoupDdAqos5Qp6sPYDWm0mqfg04t0bDYZZe4n%2BOJzY7Gc7ptXMw%2BEW%2By87BWx9URWRlXP5UAX5OUrEJfEb%2BW2wuk9d5EHeHAGO7Al6Cmac3R7awbtHTMt5O7cvC4eYiElypjefHHWMUkrESA%2FAtqeguF1ddLhuc7tL3KnAPrZJXdQV4CUqDhA1%2FDRBKyYyRm5kvAWodRdzPUhTtjO7fIXLkTq4u4NJ%2Frxo5qOSNOoCuLO2bwGUt3Q2nwbULuHmlXljarfX0VrsQqSRIniy3GV5uvdBIwXe2JO6M5hhfg5kxHMCfa0rVuqHJwBLqLus3sobllJnKsn6kqRAp2GLRNvjBvxEJy5KfPR3LiOzBVLdJ79JYJbNb3IbR87m9nlmb%2Btif3bkXMlHjAMdiouhxv2UZz%2BUDBomR3KaVxqp8f%2Bi8gWRI3c48jnUQGL6ASoVEnVMs1pMiUTabHOXo1VrT4HHJMY1Tyn%2FWywMlB4aqGbUwhV6UVkYhu5W7Rf0VhU%2Bt2mL9aFLbLP23DbVxlCessBgJGgqoMMuy1sIGOqUBWHWQhbsuUDeeSVlUp%2BVV92aWBV6yrj0FFE49TA87fF71ts7IWBj25RIulJtjHltzXAVQsJt7TyPCCrt2tLea8pL%2Bxn2IH4YBSWRGdSDgq4I2C122PQ3k0CuCT%2BKq%2F7AkP9MO%2BRdyBogmRSsXOF5t49BWR86TUh1KRl7uvYP81WyNb8WXHdXaMsHCq6Iyz02frEp6VwxNaO3EQ7cM7dIby3Nqc18d&X-Amz-Signature=117b54e73aeb77fa97fd75ce7744c2d9b14e7961e3316cd33fe6b0a53371a449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
