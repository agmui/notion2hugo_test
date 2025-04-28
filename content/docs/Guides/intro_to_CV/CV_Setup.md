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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCW522A%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNuPm%2FCzqJQB%2Bar2a39edeWJr%2B7Fz076XYtoXcRszBAiACQ6N%2B2KP6ICXqQDGNPCQ2R5kN1NVDlPxEnkD2OyXq3Sr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMwT9%2BrNLmpJDVCzaYKtwDFHR3saPzuQlHkH8eO6aygNWKKS9HJSW%2BwwGZZDjgp%2F5nBqUe10FaAKSEVqa%2B1kqBfg%2FVzeBjjdWnGuI%2BJS8yLbDT5y4tDcRqnLAMmiBjrI9cHY8v%2Fj5TpelQjKwtwM5hf%2BlY1xrEFKz3wQzp99%2B3LGVs7jp%2FUnxQSTsw9Y5owGBSBhxHVi1CYu5Qvso73y%2Bx3ugoYyqcbMJPFWSsC6Btn8ES%2BbkNoLfg%2BiXdCj32d9u8So7pG4zhptD%2BYFd2G%2BDAkLVpAJ6LdJh0%2BbEwzK27g2fVxoC1mgm87E0PBmDt2q%2BjD9Az%2Fl6kaEN0af%2BEZGFWA0f7IqTKk1u8Mbv7N%2BZHBJ92LPKOn6EBFImnzah9m%2Fzr7Uv2Z8Qj9tcR%2FOKJadeAogyIPW4phqWRpLX26wSrdmpC%2FHW%2B6BkUTZv6NXb8wlT%2FNTRsAtUHADWvHSwZHXPMbp8eFJr6Gf5gBRztwm%2BIJN9jKyRpwLp%2B7Ik%2BIM%2Bg%2Beuy0D86kitSQaa0mw2lEwsmEe55ikOEsLXXk9UoaqHZX2m8TeZEXpwiKebzuCEbnDCMvBozcc%2BKUTaJumvOgAtAvmCZOSSEcwsp7B41QJrSG%2FD6bzrbQLypxjng%2B6VbuP%2BWCHgBVDWMsFufhSEwiMG7wAY6pgGUOO0YzOfILXK8kpZQ%2BEJRiiZyK%2B5%2B2Y5qZXMDIBagsmY7lHYAUKEmbQLQgBBby4u0o%2BbgcjsM4cX%2FLF0vJcH%2BCTy9C5xEgCJbel%2BLKeANFCnSzjniTV4P3lOffLkGDjOddxlB2H1ReMvf5jAmOJ3dNixhFdUJ5c6fg2px63Xsem%2BDZpka5bl5Us1H7fJfZI%2Fi2of3GmfVK8ERLA5yRvJtjiYtsfAn&X-Amz-Signature=16af10a98b1769ae6c76f2bb6e1cb37211960d41909f75ab4f2a45d579843f1d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI7OSWW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFOvvGA2vigaFrkGTkB%2BtyaM3WCniSFzO8ZBxeHWNwlAiAE5CRH5wNyWAdJkjfLxzQhl0p%2BG4Cmef0BVBKqtG7Lxir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMM72YhlFUdEODGoj1KtwDr1OhNQ7uc9VIVgiVjzcV4kOYX0hZPDHkCSruVG1IgfDNn1GHFL2iJCWW769KekWI1wW6xQtqh8PIn8wQMbLTH4u3JGrOV6%2FIpvGEcD3C%2FCzQZG%2Bc%2BvoZBMIijhc26ZSy8YhlTEYmFVDqLexReIpPSwNhvtEufnVz%2FZfM%2BtIwdVxLv90PEi8hIE0z7qmkuZGDVqlheWNatjIry0H3%2ByDp6NHaxx405i5YnEoHgQ9KorSe2btglWQjG9Zqb%2Bg4OnyVxsA1ZDJXWe0Bsq0dOb%2F20fRj0NQhezsFziIGeQbONq7xjg1DYhfs1v0eBpITAvESxpFiiM5VUiEdwgNdO%2BPjcMOjUXfEKN5Y3nxUBjiotIfpmri%2BHraW0iCnzrIQRhxda8u8vbXRW9OeGnogvZRkooDp1iWzaXB2nlIAHRdyzebUjek7uc9d5pBvhaVT80BGzy6BPOs%2FBsdqjCjRx0dVwbneLyawyLdJIIrc6X%2FJj2HawQoBbzShMU4V0lRBUvJ0WurTfda9sMH8wegF1ruP99npq7n7tA1kFJLkHrU05VUrPdYUafms3SfSFEUOjPyVnJvR%2BF6FaKl7ErfCOGhV65Syfk9GvdVQm1rxKVb6gNS0QtHGPq6LnTYgWssw0aG7wAY6pgFFDALC4XP7n6uiZfy29BY1Nkwa0hnhQa%2BPXR%2FUUQAeTV%2FEFI7jOHOO1AsN%2B9dRdbcDsbVFfOj1R1GwSU1r4nRjlio%2Fgu%2FXM4neWMlncwIc57%2Br0M144HUk6jzThipYsMlKnsR1Uvx7%2BXArojpkZ2btWFrhIiWd3WttIvhQ7QBTxFfWCLSvaBeg016bKCwtL1mvrwZT3ZV6Fa%2BO6siiAwAz%2BqGdGZuh&X-Amz-Signature=cec1efcfbf42fa5f1387d58dc5e3c955f23c731d1a566b9474f95c723d54d81c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
