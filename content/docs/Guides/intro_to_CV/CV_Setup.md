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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CKEQAKX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCeLRNgeb4Usc%2B1vQP6S%2FdJRm73%2F8z3pX0tDdWpENz15QIgS1QY0l015Daj7rVAQ%2F03AW1%2FXb8PYzFWbwqbfQY97Nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJUCEItXN2fp4qi8pCrcA833HXXtOVPIR9JHPBp1lqhl%2FRBPW1tdE71Z8X0Ga15iAhpIM0pZiT68tcAAzZnoNj8RNqtmW%2Bl5LtysjJAYHpDHqrMHarhVqHYmMa5qhMvX9oxR2cui9l6fkNV3ON%2B4VfA7gf%2FNuexUeL2Hu%2BAsWN0L2Ti%2B56dYef0Ao8pPt6rhIK8PxSkhxqnhqvxip9wkUYDxcz9%2BXMfkIOFBgdLqCbQ%2B88ikUhhPWLfjBSidvTeViL1KhiQbPY0e4CLJ1L28%2BQdWOizv%2FKk4nyUrcm1%2BzimN0MctXkqAfqX2VlniQqNfshAfI8XDQ%2B7p%2FyBTUB3U3ErKseHd4HRxqxUQxtIdt6c7nIijfBRyiMxHbPi8QYHCL9vtxqUzRwuHkEgE6lRPs%2FhXDQZ5s%2FXzLMCZrbHhWq%2FhV28I7fG%2FD0qlecrIlfn69%2Bn22jb5Nw0%2BnRL6P6AwnahQrEP7wVejSQuCrmkL%2BiFshgP%2FI5Zci1GUd2kcxl4E7ig6Ohu1raX4oUM0YKzya0UrAb5wlXiHlq%2BAogqGsubO%2BLuwo62ZWaXiqpCWl7FgMyqLjUfTNGFgibuCgdZRXexqrJPaX07Iv5gM1QbWXiCXXsR5xen9UDxoJv6pPzP9yEVf4vIyXr9YVAKFMJ7skMQGOqUBfBLH47M%2FLyr13DZ8ISbyuOr%2FqXk7J5bzC4zKrk0hLAtJdPjEufcQTpfWus3MOgBngIWZool5HHRp7lFWSYYhPgM%2BdnCQl3wtW%2F8yV6rOMypfqVazvyWMpGJWZsaxY%2BEyuH4aysw17iB8qPwKPej5Iwq%2Fljvx4DSp83BIZJhBow3iWko94imFAnsEQdGwbj%2FP5Pe2E8sA2a6ijORvmVnnA6H94w5D&X-Amz-Signature=af313342746235b399fe0b619af4de995fcb125db390501d5ba7559bfd6a81d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRZ7JMS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIE5wLEGp8F26yP6JK7yrwlqOlYSpAw4uuW1KzY4bTXFHAiBG9bLecbvPa2J8KYlMCvbTRNxcW5%2FQx7bhSE%2BKbJELeCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMrQwGH3oHxdg2UCu1KtwDlmwikzhDtO9Ht6ptPxlQS5VsZMZTWgCO3uES%2FykupYhCW%2FxTEGe%2BZJzGUcbIE%2BrL8umbwbbFKoiHsO%2FcmjNscBUOIFMCzjgU1tAhFXk8iNgIjGPfmS7EkSNLagl7HBna%2BQ764b2nPsImyI2CIMZyF3bfvF5L4Lz9FVJgDORu1C%2BluT0JjW74r%2B5xAAUzI%2FR24n9twYOUapZ3wzZX9vJX5A5ZJwZR7Lgccu5%2FBIGwyHEJx9mTA62k2R5X7HDMUPAUIxkw7CDzF0p7MsqdlAqvkgorM5dluU9aC4r8t5Vbqj4sVd0pm2DyaCpANtF5SIk4kYWO1hTiM4l2fFXl1%2B5kin06rVNX1SaXk81IWFByX6W%2B8%2BYXNVeHSwVNwhEQbQGUAk345XYsZM%2Fuc5y4TQh32Z7wuPtBWQMz00720DQc7VAVdiEjBvBc1yZjP53q9aEvFFXqFDqgxSRszW8LqMIjxQj50ypGx71%2BI9ewdgcMrl0JJNVM5akLCzuzuIjSAp8k4HvDwzAYoz1jpxTQkYtY2BsfCBJnsfAwxop7LEQ7o69ZJ5LGC93o%2BnWwbLJmSC9O8n5OpviAc6hqlfia2jC3MDOYOLs1zAPLA6H%2BrzN9jdjsvuW12x4hWipJSSUwv%2B6QxAY6pgF5XVHnZwH3huWKTWXD3bY57r2%2BWFKthJf69v2w6gb1xrJIZgAul6d2xNlwDWU8%2BNmSDHDw3QBuWAwjB7MGwmFlW2l0ERwy7z%2FzxeRCywVsV5CC7vvJvVlm8AW1t6gYezq8q87i3OAP5H1s1GrOYQqLjlbnnGa21NlV29UKWByaOPwinvZkIrPFJnewzX%2BD%2BkbFyFHe8ksEDHZOsuAZS1jF3w9mb9FQ&X-Amz-Signature=51f6cfb6b26b776540e7fcf164f60f6dac98aa9c0a8fc90db930efbedc221e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
