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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMPROCDM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIFsl4bEShY7Q8DxXFR0QxjXiBs5yxl6cU8h2ob2ZzcAiEA9nckAkEQGkR0Q5yYlLEiCepvrM8IIMWv3ebwQliU1ioq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDI%2BegkQHbGjXFUmcSircA29yguWLSfYD6AC036iEOVMiO5VWeHkiIpLmIMoR2kD%2BIPzJ6C%2F8tNlywHS2gB73n6k%2BuheMUodBqHI9eZS2Ka6TZ6tuaAHE7T6Cx9JO40i%2BuLHP3Pcgll0%2BGVIvlmu9yIbao4ULmzW38IiiZLrv99jsbwfDbAZevy%2FT8H1sexc3x7RBX6RfN5mwNzPxrjmWzAJUIM6S8kmtMJhwaa9cZkAvkoCfcwiJFdcZFooArFr4LbLen%2Fp4y1grooHIlDh7z7M3usxv4Gv%2BfjQh3OkobdRRPTDx1IIBPCCW1e8U0crmBSis9J2od2BkG3a5lGM9V3ERp5tBOvu1d2UutO4Pci1BO79rtNyObY0xSphZyvoRlOH5dNF92aEZRju1XFr51sixIobcGhOEBjUZHKX9BUSdPheEgjU34883X2%2BjJQ%2FsXeeG60hIedL4Jv6gTl3kUL3FfTDnlunfXCL%2BA0PSElHEDEGTOnSNoPpm8otS7%2F06ZDREtCa7%2F%2B2G%2FVlFlPYZbOh0RhomaOKHY9%2FF3HGxjWIczJCe%2Be062aGTytW5ZDU2kQ%2F%2FHH46heR2ik49H05Yuqv5Zu8bL6yQ2paRtI5e0aSNYLxBoxQbO0qg1QiJtAWkM%2B5z9cTn2VIRmEzNMLXIxb8GOqUBPI2gdmiUgg1bDwo7%2FjuDau3tZ1h9qAbQX%2FLrSKY8A5szL0c0lphJ4sr0TTUIdaJlOmWZPe5RJR0zvC6cu%2Bnk2P4V2VRDxxWVaE0ktYUpmzkQV9jFodQ%2B%2BwIR%2FaefZE3QoKzZjpyORLRl8atKOxtsBfLACZnmptXzNaODvAZIXXyOD4aAAKYdj6hN5y94S5tt3JrN09cyQF6gpzlm%2FtRAao6NqA%2FO&X-Amz-Signature=669ba901099294ade1f32cfab51bc82aed539272bae6f24d451acb9f534a4e21&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NE6BTNN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeI9NmanlC2OUsfoPiz0F0Wk1Q6%2FEBp60irfSYCnc6xAiA6Xutb7iekX0xmLX10wlOc4LKrS%2FfYQ09dmjD2RxiMiSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMLVXegFV0sFp6j4CtKtwDOFStB%2Fesm4WSbhUmmIpSGItEMHSh2AID1p49unnHHsO75jfxEFT%2B8HGJZcjwzf9nllxpEl%2BKXzf8ZhIT0iYPOUTedFo68w%2B1pAEdvtGZ7317TZFo%2FPoCaEGKeavRf2mxRV582R4jZN901kelwWa%2F1gKWodi%2FUE9HUgjTlBovt%2FWQfmDsPCNu%2Fcw4ZsbJoktelOcOT5H2ZP6sMEuLEsAJqSLsjL5bquCvma4jtIzfpc0nB%2BRfV6RChJ6x0n8kvzvxHRF8QIu9Rf7BWvcmElT5g%2FWwOslr8RxWY%2BJvfSHMQnTdfu5lQ7%2BVojyfGtU18OT0A%2Bk2tvpPpqVbpcT2ugyshAEJp14bMf9nvofjHbwafg%2BACk66ll2MgzxD4FXW6YD%2BiS2JyeeNM4c1NZ6wzKphGMF1QLf5dz3q42fLzeM1r485eEdnnDNWj0Sxh%2Bw%2BA4DYgt%2BDidEsyOn8fpoZVs%2F7FPXXCsWNmiUVJlKUBeZalzNr8codClJxCc9q5k14fa%2BqxysIphi5bWUrASEz9%2FMtsFSWGqYG3BgjpBXpIqyAfjOgRxUIpzUxCIYLr2lfm1EiSG63obFpFquebGo9qR6j8Y2cYWzzjw6jjMtWcySHkJJ%2FN55bXGDJPh1mQegw3MfFvwY6pgGFtNYBxxiLB%2FZtOfkYUHeff7W66A4qr4xoH0JJSnfBVnYImtR5zlriJdAgeDQpFPh0p7KJiJAfrPe5r2lWE%2BwIkBEt7%2BOqb9cj5yxKnbMcN3d6QIPihBf4FjbW1dAh3lWjWOiiWPq9Kw33%2B3RGlCj1ZH1xhN75YLSSJyaPbTbtCL0Mov%2FUVH3wbfS7jahO6AkQaCQqJTo%2BfmW9I8soyDkd%2B8NBsAuJ&X-Amz-Signature=92e577d5a53fb69332cadb86f66082f37a8fffef2fa567b2f17a3e672abf77ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
