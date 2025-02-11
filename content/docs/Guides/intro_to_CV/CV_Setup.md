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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IWQY65O%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLdPn1fBM%2B13EP4tpnc0X1VF0kZYTdV6ZvCh5VSmRgPgIgToh3z1%2Brg%2FpFC5757A5KN4X8GXaacx1PLpUwVn0uvCgqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkPeCc7IuslotROpyrcA%2F0GXHfKdiwVNIxnjdGN15634rNgZEUjce2VGoUmF7D5TEmO0n9JrYuPp0V60haps2kURbnFkL2dbTpIKH7Rp9WtaG08BHT2k9LCWS93NXAQlHYkMU509tvW%2BxzUMDd38Gpenec8cXnv61uCChKuv48HOxg3gH%2FgGeknDlTo%2FHCrib0zUXYoX6u4L8TuZG5gE9dR961ldPKUKN5Pwewrvulxjhyhf81%2BmJ9KiUoNs1JsEaVmdXWwwNUaBDZsB%2FwqYHr7chHour%2BESWAevPuTHtJdk1LEZ8Q00QFeV7YBACD068bpzmzQGsqIiMlpL6CrffxDVgudAtGLap2eLPRAO9NQiqUIWcqn3u1gE34KeuCrdp1SZcW%2FsviapLv4z%2F0odD39TSvWsEjhTFDiasWWgHbrDhE1XeZ86JW%2BgO0eyLeWwPdyIzm7N87JNPhw5OfjwlhTxahdyIkQ%2B5z8L7i8G61IO05qfFvoEoPj5Sd%2BtfyF6HS695GCgZFsEInkiz3Rc6KiTKl8Fjac1DqeS17H%2Fj76lj6Feaklh797hdEyLIh9F%2B%2BtQ25A1GqgdjqxNibO2A%2BTewa2JnBVKAwv%2B84aqBh2TnR%2BN15wRvCip1bkipnRaCJbsKwB6YuR5z%2BgMLqyqr0GOqUB%2FUuBVPScj2FuJUdfbErIy68mno9WDqlbkraAqfwuBRWx%2BJ7EaSWqb1tpGnnFpOdPWZfAjaPcuh62NLoPrmBapTaVj1H2LI2i%2FjZBdKJkqpb4lSztOsfggIHnNWM%2BwOl8xFiCox%2FTL1r9XjhhznJwUU%2BpHeIRxqat9RNSTz3sCvyuziflAU6L%2F%2FffovDSq5nRcYwxcToklwer85bBIsENMoUtXq55&X-Amz-Signature=7eb62cf0d8e6c61af5d4866e868ae4ab30ac7e3a2b4a05c96aa766da0467662f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CANPVQ2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzNxy74r0jRCJnBCQXS%2FcaoV7LmQsIrKs6y1GoWtW%2FBgIgI2rYi%2BndYOGKzesOTfoH1pPo%2F8WaCWeBPyvL4AQhXWAqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqbY0vq3MOO2MGieyrcAynqaX4e6mfwRgMCCLagG7Zr8cwDVzLrYsTmGlrCF87i5Wff9Owq%2BQEHTheLsyBA%2Bx6NfFJ2VBkzcbHJMHNwGBun9rRdNoKSOHzOy95pC46PnSyb6JDQO9IoPd56sfwl%2BbyXi2Pozy8ND5H34OgRpQaH%2B0zGOajySeQb1FQt8BOpI8dl%2FxBA2%2B00uq%2F3TN%2BtnbV9nZKz8WJwi5VGDYKwQYZmREhoryJeFdzTfFrkpIKcEBNSsGhtIGlFTcjQDAcUNthws6PrT24q0mRm6rE39a3NbjAj4%2BSEGPn7wzmMfirVonG%2B3TwkWY6IBiiFZz1sCKDzrJzaDdY7Iyz%2B0GMve1MHNEfpcSiYI7HWZChVxE8ftEr%2BpblHr%2B6I9JQJna%2F5ZcKJNg5SLkO0QyMIY%2FKS2cQfjngN4bsfIQnT2ApJ9%2BhlhFsikQbVFLkP2FnELDeL9CocBHS5k5GooHlT%2BT7rdbv4%2FMkw780or2RjBm2ZjeRMPNVtUjshV08cdgbkmYkjXitDlOr10FMXVsiTYQraQGd2rtv6AEmKzg7Ne47AEalTeeK9r%2BInzOMQrL7hrzCUci8ZN1gHGO4FqYnkOBvCLaAN7hNOn1ucdl2wugbLPiSmdhgnCIGND3LKxAE9MLyzqr0GOqUBQEaR8aOWlibcslPfaOqMXp1rKlIGV0JCoh11JZrVj9sFeVxOeoN5ZQH7BBqXjuiIP3g3vPE%2FmJzAVcyc1Xln%2FjJyfDwZ48SZNsSPpEw61S4n2BNTzw4XKgPYI7opsM3nnlkvRXa5JufKOqwRU9pso8ZPzlnqMttzFelAWV9gk%2FChvMP%2BRY8z1h%2FhoJE006vjw4eiGZeEjxXqLBIS3buRC7nz%2FN1V&X-Amz-Signature=0100c2463df4a56496f0af72598a245a90d45b6796f3108b90e7c1494d08c283&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
