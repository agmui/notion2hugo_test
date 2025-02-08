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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3V3CLY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDLHda5dm07X%2ByWTvPWV5XTwfaHK2HSpCYc9ZhWGguDmwIhAMQRvNbW3h6v8ABbHgSY7aqLaBuhqWZ1aD4Q%2FJdFLh1JKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK8dyz4uN6KwjwGsEq3ANAVV%2BtIufZj0jhu8sNJTjK%2FiO56bm2gjLxMRPG8Vh2uBTOSELgKBj4A32%2BAvwK53Sz4PUmm2Wu9ilAq887Omob3x5DiyyYBIte3pXN1y5706%2B8awe%2BkEMhpytwNZ0ficdma5YEYxeQ%2FJG7qs2vkfOuL8vwcp33TCBJ0Bc8tWgYpL%2B5gYrzB6zHDxkmqQebrNreBgfPnqJ41v9RZY4maFduz0NnmyhxEv3f5wIveyRj930WL2bRr43s%2BrTxfKdzFg6A3yTVaGEoVg9%2F9QFnBdOnqUWMZLnpB%2BzC3RQwfEKfJttxD2vHvGH%2FtnxulVpnaWNmCP5aNta62054i0fmVCun9pYx0tnm8iuJJZedverJZXnfJXqquuU0cvNGplm1FKjYETFnbhGZ3tKVfZ1WJwSKWC2YlWATcuc7jDDWJEQb%2BsoUmvjMsAKN5qCxu8ASQvH4OLMCk9IfzNBrRvCN1PLFEXaMxJSGJhpiicl4VbCSNVvYl71XhEYBNaTVGq6Hgk8hDcsesIqKSndEw8v%2B1cinZLRMLsETbGjaadQH8JPIgqkg1J5U2aQ2FTVmXN836pY2EEeO8SUDbTlXOJgTcd2m8OK%2FLVURapgzILM3R%2F0LAIH4LI40MZ92O2156jCvh529BjqkAbNxmUuQINpEvcxETRKtpmyH0AommhlId1GnOc9aTu2O6nzjy5pL2yXDjs6FJrP1VWsUpo3p2lshKc8UZ7FEBdhDzAYjyD%2BrjvIWWFTpSvZDPO8%2FkmD83sV5dSzQ26CIEaYxRPDlX7im1J6mZ%2BIWeyQLoea2KJ%2FaU%2BA3LZ%2Bsq2iX1ITuDVzopgJcb78CztEQQh31eXsxJJX9YfBgulfSQ67RyQpC&X-Amz-Signature=50d8a2dfc4489bde22a74796abd2f23152af88eb2e4be326c025e0da92c08632&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZP6C2E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIF6kPk3mA3PCHz%2FzCju6bRfJntOfumk42HeoezJvPEIeAiBOo29UGbpuzO%2BstYP8%2BlnHGnZOudh5DZ6Vz2ueGeGAhCqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAByP3hOGgKoQ44vCKtwDCqJtqMuCGcmU6Ep8mHNXa%2BgI7khjBV%2BzAn7R0SEvnslbBOXCYbwjS6BURbW7tWfDXRb63uhaEkJP3wpddykP4i02KtfeQLp5BAwMlB7L9GhKkSBAHpjGE9wSO4XPvSs%2FW3DNIHIGQUiI5kSBwLcvVDEBKcOjniis8u6dGV79ljxzjYP5k6y08Ptp6Hoh%2FzKqGf%2B9MUrUddheldKTEjiphBcHcqAIDgNqr0kQOd%2BcAs%2FTfpnAdY1PQKC%2BQlP6baZcFaqgFooEejEIDUoM4D1OQDK2%2FZyzLL9XXLBYYqV5thZGdpEqjtzDT3a%2BCVam9LZKD48K7GuNEELeSkkgN45EF6kzveOgZJ1vFSPCaJAVoTz237v1fh62yhiIvMTeJx%2FSQyWaI1M320V6d8C%2FVCbZtbLgcPluHL%2BcRYlBUh72%2FzjZqy8jHkkzgDDnWvBi6azK5fMonL6puNghRhNeOaHT2Y%2FgtVEKmnW%2FrGdHzKEbjVyrf1b0pTxHvseQsrr95lewO7KX4lacOApDYsQQaWKl1oHgFeyijpnSfWBBx8xuiDFAEorog9R%2BokGMAYlHqGnZ4Pw1eXGEgv8QqWkE37dRbFrqH%2FHQCGZykXGZmWQ00DKrDJe6u6xF8Pe%2BiLww%2BoadvQY6pgEtUGTnLnYZJIuHJ%2FGlMApVxDe30f9wrjKntj%2Fhh%2FCBZbvHjXSSP%2FyW%2F5SnI2RoToWY0%2FZCZe9RRCwORGBlTNG3biuxKpaYcqQ0NB5lKIKg11XXgi4K6AKvX1EeKyW765zh1d5qc7PcMzRMutOLQ3x56UUzezMP%2BpUhGYUdwle0BRtDqSDS252NcrxB15%2B%2FqHqTyx1iT7utieZVOfB4%2BITaZbHzrANk&X-Amz-Signature=dfb0cf000949aa04fac8f007e971ed4511a4609292de89f35d59b723c526398b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
