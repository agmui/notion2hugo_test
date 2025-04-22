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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466762YFDSF%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCrXVE6BI0salgCQSPRWWUcgHXUjcX3ghs6jFzoQPA4UwIgU45Do01aPwhKTj%2Bg6S9sX94yi2d9mjMdPLSpbGe2pAgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BbziE2GthQRrA5LSrcA7Z2x5Zd4daeBsb%2FQ0R9LkuSqjFgdmMgQZuBC6H39xhvd76E6r5WecWZg6wNU9zTdIICeOr0IDHDfU%2Bbzqr1F7QLhesk8s%2BOAdBS6a7IugN01dbGOcWUYm4yZKXZJYs6EOcdVt74Z%2BK9o62fBkGU8F0NGxFS4OfY2wxp%2B%2BF%2BM6V3C6sWoMOtrQ9Z7JSkKCO4IuqKDJzpGTCcVXIlx7q9Ickts643AbXctO2SwJfl2NVwDFoweTb6x441kagBJEVDIwsL%2F%2BZUj7zxSIckkYET23Uf6S4NId3DiOABkjC4pQeYRBA1Lf0zdkIis75Iw0%2BpSceIuaVi8nGF47Urh95NLbPQoeYzpZvIF0ofPeK1Mvi9DMh2c8btZ46akQcug9NOtboPJmXlYmEPOQ4AB0K0cWWPAPb3W7fRdxNoCIYvIKrsdxxvlzsEijHwVHmEjTyDdclYdGiKNnyKG2qbGlYTM%2FSSfibC7WkLqn99AUSUp83iQpbx8GkiCSwJdoRtMjoXtIg1sUqwixua34kIMM2Z0rUL53OoT2itXk4zRewTnPV5zN7L2Hw%2Bl9THPlz6XVixMCwPZDQ31FVd9juOJzEadmcuEo9A6i7%2BDHI3XUJ%2Bbzn3mB8T8s28JvCfqRm%2BMInCncAGOqUBD69YzcczTnrNkwmPVWiQQ06CuqWX4JoBj7O9LV5eLEYXyq6BYBunYLlptUnpXI78ELEi8v86xBQushu7PIcU3J5LDr1AG18XkNnsqWGoioe4gM8i6yrhj5RlA%2B7SPkskF1dCtyZinSTROtsWJBjdJoCLIzmhg7WwVTzQPxvsM%2FDxqagIvJFz52TTdY6IrHcQal%2FUl161oqAmRk398kcPOCGPmjJT&X-Amz-Signature=fb545787ad48ce8a8549a6ce19a67f2b61632cac0f3417fe37f2d32d027cc08c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSAG2PHP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDEKGNdFKHjCpDHhZU9yh%2FoqikTm8de3w%2BoQia%2BMyKwjwIgUtWtTRS0o%2FA5pOFSS5yiWT%2FXCSvxP2Wd4A5M4fo9ktgqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPS76tZcatOPahIRSrcA12b%2BynnWj3Se2%2B8WL%2FgFGR0cP0ll5eVQrSZz6MldUqKix1X2oMwJ5D2AFuMcRi2gpiQYFAfsfqp%2B%2BcZ3vWgiJJjf2%2BbwPeWICjxv6HA%2FYII7xae9lKZLFAk%2BRG%2FNZR3KF2WnQ9fnP1XBlIyy9YGPSO6zl7yQiViufBaAhWUndrAXSOzm%2BNkwf9IpQWTg9Y9V%2BmY%2FDwfIl%2FE9MUEnNUEgmBg6Jbg4drUIkNSAcfJXfiv43L80a75pUvI6tcsNBjXG3wckbJiVD268GunF%2FchZIMGOq8zjD3G%2Fx2qu4v6Qetnaxauc1PF9stuAvbtmgLEU%2FIDbfufJbONB1KPkL4L7y7VvpI38kl3KHvkT%2BLFa1S1rcfB5Nf6ORWsEti%2B%2FznlCyWABzb4Zgut%2FqRx5NtSrk%2BDS9mP5egmaqwIn3mpwDXbD%2BJedQuf%2FI6S9YFEFnzoEut8lY5qFl0l7q987vAOlBl9p4TXt2%2BIvi9pqCjomIjGmcXWrTO13CzMt4YGs2Rp4DDBdYGK4hULCNYhQqSFPPz0jkz%2BsUnAJhBoz9Sdz5hWjsbOBp9KPT7z4CMVujmuR7%2BwQepwuy4DbTJ4wx7qvNlHZugSRy2QRAyEMkoTNY%2FWGHfQf1AYzs33YaM8MLDCncAGOqUBPAqaLSHGZxm197iQnV3fqHGKj%2FWPEWDVffnTj%2BjYJGSUf%2FQ6p49S17TUVWEntQn4IMUum0gCb5BVyZeBhGKCwlvjdwhV2zrpzoT%2BMJL67GZz%2Be3FsYUn1rA%2Bvx%2FhNvCSwLQBwiRhUQUmX7jd1h4OApoNa5EPE6XlYqXnXXMYcuox5ifZRzinqa3IX4a6CcnIRc6S0CRPtCKCvO1xGwPOlNbMka8c&X-Amz-Signature=df81e0f93d4ac23753c5481b9f1d5ec0c3b9be36b3ec4e8a7b79caeb2af91a88&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
