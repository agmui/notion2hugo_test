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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EX5MTBK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDCsRjiiufkdZdqTbWI3brD1ZEdewv3%2F6v0IZeuNoyCewIhAIcy4ZBEVa5H%2BRMyZ8mVTYswKTnCw5ZJt1fUanTinni4Kv8DCEcQABoMNjM3NDIzMTgzODA1Igw9lOeVgzx7Z2XdirAq3APFuPQG%2BxZrp9jfUGuOxXrBEWwiE16RuBDo82eLtegvroT90OddTes%2BxJp1iDSfOaqdl%2BRsWYHkTVmO2%2BVB10faSbHTthh42R8LOFIdGqTwCuRcPbi%2Bj5lRGC1AxEuOTU43DvONO%2FuGfq82DFPUjlnmcYUetaXNyjJFc4HVRIpeGiderBKHXH1V6TdTQ2MYoKEA2Qh3Nu%2ByxI8seLxLcdVYipg0Qt8%2FkQW1oGW43GNizwEuUVxwztdlG%2FA%2Bg9Mvzx7tcd3HWhD7%2BSfwtQcZdeUx9DXgF5AVO2O4gU5O9qTwxohQogV7BVca1E9YyoJkvKPbtR%2FzUwXO17UWedt2yDMv%2FhVaRffjcsoVrpohmVA6SHQbhgTKK2lUOc1O4cHjcWD8kyY%2B7gQFv8Zwut3y3350sLFbDwjuBydvQo%2BUeLuFCbeonxELmyDdS60kZydrv5ISAGi1s9ywbrBi29AIx8O4Ks4y9vaZdkkWJ6D30CjcoKIC%2FNiMqeRkgMHU4rSDQOoRzBsKc4gSUpIgPN11yDUa1h5crqB1x91F6LREcp7FOisBcIrPLvDVq9GAPZQz5Fvssdw1cGQVBHnodFJnV9GKg6EBqluncaqkdU9tXC6%2B3oWV023OUdotBsMv7DCoxIbCBjqkAbrywmtWBqoDs7QkCDOcPeHuIQid8p8eTV6e2brLt1m0HycxRjftk5x8D%2FvnKyEfFIlFLtNiSKwc01N9yWLjpMNTXcCGcu5bLOOKfq9fFlQxyr7KClbwm5b3wEZVRm91nRhzFgbSYcYcBbk8%2FvlX3n%2FFBgiPtQjLI4Kvk%2Fep1U27rKX0CGhugH4Gzs9u5XdybW9CQaK3gtb9e%2FtN1TxXQyXq1y6n&X-Amz-Signature=72ea6f269fb7a4be36bb74e6edbdc037c93b411036bde71c29ffa55f941b6d07&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZR67BHV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFkgDCRJ1BpCjzPB5eZFZAyJhvwhUBuwF8KY9rpdO5jgAiEAqcX%2Bol9u2Wg2qyGYgQth%2BfwI1Bk202S3eRQ3lw3RC%2BIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDCKXaia6ZNzPLFl7rSrcAxDQyEDFOux3VifFLy8Ak175QyoRx8yRlEd5U6duc1LB4ngyut5BiBVwt04zCiPzKW1R05fRCPYksmgromkvLn34vYXT1N3HHbhfWAbG3KM%2Br6jE7VzDd24%2BMk702pHl9sYh6r4JisfFmplydl7ZElU7nvYosPm%2FwReOFsDPnJMFiUjOFEIbUcY6XasLgU8y5J9hrIF2m75wwZP9QW7GpT6pRc3aMwHVtL2CcXZs1r%2BbFNM3K1Ls8%2FPJQ%2BUc4o6n4dxmpgia1yiARQq%2BwX8jYhATMdTmHGkXclTLHtfFAN2AljmZLF1iJ3hFJ1ZGY7TazaglpFh829sx9CTod%2BiVrziX%2FZBfudTbBPpGJBuj9ALhdzhXCDB2siAxeHObjCE2DnUkJi%2Buqw4mu6RbYy2v%2FBqs8vthTHe3MYtSmt9YyzmdSBgc5Q6ByMI4Zfudaem2hBwwlLpD0a0266apiZaMjZMxoTbCOZ990pcos5iti0qQ%2BY1RBHdO%2FE%2BhRJdWCHgyRZBkTeNOj%2BPHMnl4STpN89I%2B%2FqUjF6%2FcmYdBFSjiipg4X8vxwvgVxg3zBlSFVNzwM%2BFGuVkr44OO%2FG8hvN2GYXUMNmvvLIDFP3i2Oc0LQmQkMe6X603ZMlO%2BNrdEMOHEhsIGOqUBOta43WAX8TLhj366P4RKfqKCsER22sEs77dXoJVEVPtGtobSoemh7uA2qBL%2B3NTcZYEm7HMKBfvYkLDXOUAySZEm6ODEAiO6fs4Awi0gFFefB17otowvc%2BUxrAppRmRvqK4MpHz2SaWAeRhYd91VENRh1xb3zHC7fvBbpM4tU50aP%2Fv4yhoImG0bP0QDZK3zgPglC%2F8edN3MGkTWBzPIitrwkfFg&X-Amz-Signature=29c471c905a6b97dd0fa23a494abcd25b99889d47864a12cda7ae551dd078210&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
