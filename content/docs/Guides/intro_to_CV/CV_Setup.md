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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQYME57%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIFl%2Bb7sVfddvBEhoeUfyGJXMSjNyxvpLvHeMIoHd4c%2F5AiB5nuyKCXsYIA8VyL0yLMA86WbonK2J6oWmIHgiysRSuSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMUrzo2A4zh7lREMmAKtwDP%2F7zS2n%2Fn3fVjdGaX1V8XGkub1wHnUItSe%2BlV6Yj3fhEciy2hNELynCYlMee35TX%2F0OSvtAs8dtxFENTIxdPRgo3vqJ9O9OuE6pX1wWT5TPmHH3Y4%2B2%2BNpnai6Yz36iNUTHddLB1QKeRmHeWs615qiwGjacVMWakWYsGymrFczmN7M1qtYLVYhFn3iDtVgmWPPm%2F72S%2FD25s2t22BBzs076lbj7637ymUwiEanXKVDaNf%2BzlWXRKpNswi3WoyS0AtrXdN%2BPWdLhJxEfPwh%2Bx15eUSlSHpO8dctWUul622mPfaNkuoxcyBTzg8oayzPRyqhCEqn%2B2nkhQU2TlkqLvj95AxK%2FOxDrFb0x1IdlL8EGDyL1MLOoq4Mrx6oR151J%2Bk8uV751afBcpRa5%2BbAuGEMd%2B6EFPmIAx%2F7UXKPmuBU%2Faxgc3iCCZVfTM2UpleWblWsNKx4Xbt%2FxQdzjUjWLtLh9ko7oMpRu8dw86gNerp3FoCkWrlNtWOMl7Px5uN2lErUaZBswO1G24fhAz2b%2FDxi6mw38GK%2BwFHLv3Gj2mllYssalojKi6cQGf8mqMlYb6i7MLwtkSrBngz2Io0oRAvkFi4iXyHTWCuwcFffcAno4mRxQePHtsroS4QzAwv9yuvgY6pgFg0P7eDNHlwsilqKfPSjzK8qd9XYZU%2BuDGEswYGgx1PqP71ml%2Flx2Q1AFBohPXz0Ma3XHOTZvf7Vqkei2y7JzgwWI20rN23sniTWcCZB17UwNTQTJzVcb%2Bh7BzM3f2BeLkHFANLUD4uQSPwEWwYl5Li%2BR0C93KjwmlAMCeuYesd2FgbETj76gOf3syKERXqm4Zw%2FnYjWosP4ku6QO29lIxjGumjK6%2B&X-Amz-Signature=05b9f2f72ed396bbac847048f8b8a9be03893177e2dba18d6b4c8ea9a6ffc0ab&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHQBBKC%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCw4tgOIWkNvB%2Fi1BMCZwTUNTssOr3O2XHygbvO5uVAzAIgJ3sa1TNWtq0s0%2FsKennvxgQa32Y3Q1%2BJdWwS%2BPlMtBMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDL1fwYPF82cz5%2BbvrCrcA5%2BzAYiACmBluj0vm240M5x7hKgu4JAZnuPEyiItRFa358Cd5RATB%2BSEpQH58Gz5N9Swt7YOLWacZ%2B6Dbwv0xN7C8PF5syQzFn4jph1YZ9NIW7isyKwDwZW2RX9oHT%2FREEu8PuPkYCbsdu1oFPC8Oks2b32%2BCCHLOnoG%2FYJR785NLa3mCksQX6duLjwSngZLZOyiF9tkHJ%2FD7fdDKbo%2F%2FgbsbS9XIMOX99dlL1N7sBFaL4Y5mOmd6SubmT9eZP9jItEu%2FQI3ivFrsQU%2Biu3Ah8IVLY%2Btz%2B8vTZG0JDEO%2BXKhjE8toAY%2FLKJX3sDDtrEdWVkCy37HtbfM6HKqwi3POz9U2ZgRtUTje4hcKxXzTzTUoZ2p4rXOke7ArxTutEVMApMe3D4C9WOVXnIVNsta9QR4XUTYw2E1LmW3OM6R3sCHwm7e80b5zrW2u5oPeKMtREW2wTO%2BtwCiSOB417%2FTJ97E2EEpD4UR4EdXWktVe4vW6WuYmnV%2FoaicGsMfQAb1kBJ%2F0V8BpCxCgK7tsiD2grnX4wywhoMZMAo8yoeKuGr8QNccU63rkgXuoujrft7H83owotxdEjTS1OJF5swJobsvg%2BndR30HoYRFd8t0%2B17%2BtbybBRj615IFskqrMI3drr4GOqUBxCHAa3WZm3zYSInmaljKyPXKzoU0T8s48phwOn0p9ebBLPMEoyn8j5LowJ678AS%2BdBwV0JCw%2BrcKl6VYBPq3diEn68e%2BhD%2BMaiPCJrEjbAKSlxxyQ%2FSSfMHn86NtWBn1becaSqYhY9%2Bf0KOJdO9f%2BoEQAk6trpdoH8iGmC0VXXgu%2FoUloZUozGdb1%2Bf%2FQjF8HHyUfQb9%2BJWlYryYq8AaUN6tIitJ&X-Amz-Signature=864e8465c5333a48d851e79bf5e76291802587e3a6137aa4b7a0cf2833391d05&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
