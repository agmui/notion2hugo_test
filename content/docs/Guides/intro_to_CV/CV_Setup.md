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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZPECKGC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIH49STEA5MWkyhiQpPRcra%2BMGR32vBolzra9UPvdhtsGAiEAoG1HRZk%2F36BJ6EcT8LZKC%2FDRbVYD89Ub0XSXS64nWQwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNZuEj0pSybLT6%2FBhCrcA1h3EacWNbGlKAops%2Ff2r6og4EZmAPwBKPloFcFASxiyoV4d8zTmpNHDcqEfuoUPBA6ULiXWRr1QDUoqXTurDVPei9vnthgPSEWNrA0I7zYzl12W0ymp53S1MpdlH2Cjw%2BPv4mVG8X7n76U2pWLLtE7v6jbslQHJKwDwldR%2FIbyCDjrbLl%2BLdOoMgAq87X%2FJDoWsNO808P%2Bmgq3X5QpT9D9GcTa3GiyCP7uTM9O4Xij3WdpNBPwa%2BDh8tIy4P%2FKndigFQMeHDkvvHBoMZmKJ%2FJKxvxCi%2B8eZSAHFpvMXs3v%2BSsBJdckYxyv7y10nboiSFNccV%2Bl2x0PkvVG7RiNLbJrc8kDhxbPzLGoo4qX%2FooWTR9jghnKMloASgQ3nSFpRDqAUmuNIDedbBHy6cX3mAK6UpOmzW2FKR0v4zc0IUIcHFqxTN8ZbLch%2FWDy2XIbIoYyy6UD%2BuyDVX%2FUhbXLUEu6rjrvvFOQqLy6WGEpPTCZDkbXC2TGlgJlB1leby3DDkEFTKP6j6OBOYJE4DBm6yWA6KTni%2B6BKCv9aGZhHttWV0zHJusxlKIo3S0cCovrXa3qFfgmVTMqYHTCJ9DodWtZcdEi9Px33zRLZ7iKh3%2FYwoAEgFsz82WAnJB4eMMX9xb0GOqUBs5H9DHedXAhQphPZjvhoQhp5SR%2BMYm8YYBQVrPiPYO2EFGxgflfF%2BE9Pw%2BVWSc0eo47hfYxWM0JpSzEELCAB8bTHUdNLWmDh2jDCYKmKS%2BLCM9OkOKwlMONI2k1cn5w90ezMVFoUadfJc%2FRrpblJfAD%2Fb1lU%2Fcbw2es%2F14TIuwi%2BmlFMdGHf3UrYW3vJmkkxdBs6XKB0KuEqMfwt5Hy6B1qnfVxN&X-Amz-Signature=6187894f7cde254e47b6479bf3001bd9cab4739ece80c169488338036fe39269&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYZ56AX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCoNBT39xfi69AfWLG4R4WAp16nKBNNM6MoWJM2QYY2eAIhAPi5tE8uqaqGqT6PRDsnZsonhOF6Urtyc9l3u7OjT9cCKv8DCFcQABoMNjM3NDIzMTgzODA1IgzMnRFKCGi6S9fdKLAq3AO6l9Wrg1SmTbwU5LtpQwYrKqQz6f8%2FP%2FQMzGFACIP4wiR%2B%2BKqwR8IKpuHBlhBw9gwWa%2FYonlHPU2h6jg9lQrVBPBG69CCsoJEt%2Fp%2FBEZtKMDDCinBCTxEUhKkLbc3D7cDxTyH1yzZJkhDeRiS%2FVlTfNH1EmBfRAnw4WxE408QWzRuXb3bzt74dLccWNfnCNujKuxsJicrf%2FwdSaf%2BxrY1kcOTEl3qyxr3Z38M4yXQZaKDgDRwBHhfn4%2Fd9Y3bzxW9gIKKJnS9OYvX3WpofJDAZWYPi1r1ZfYBwM1RFOxYXZ72KUDpBv2%2FGU94uR5N9vGWWcnx9zBKWIdIp4RlxTsmFiZ0iL1YB7HztzmT0jKrDePg6t2kI6UMUElWujYj2DhYooKCFoxd2wMypcV2eGwv7MBYImcqFQ0zR6G2Z08v6uU2KOrEmtULtWdPIQ79KQ9Kr2GWg2VrfGjQ4LJ3EE9lRww4RwCxWGa99jjFUCHTiYmvazYnVi1%2FZp7s9GIyj4SbNhKMOy0qCTatYTsFbY3b2rRfRkVLYdXcBengTedBoG5M1FdM5w4kUoY4RxtPKsaM2djyV%2BjmDhTKxOw2JjaKlvKbY5bXAEQrq%2B4xAjI0ADQWCHw%2BnwT66VAmvtTDG%2FsW9BjqkAZSu0WM%2Bm%2FOLgxlLy5psZfOXhHju%2FXB0lmYB318Yxx7FUZhn8YfzxOVRYWG%2BrcPBBJ91hRMS25XJICUXDqgUpKcz14jPNdzU4Qp4Bvu1QGcRJnKYWTW8cvHWvYCgGC2vSj66FYwjF4ENDSyDOqwaRQFo%2BARrUOavKEa%2BhCj9D%2FPRMBs847OabVnE2L%2BPIkRk2h0nIObgsb7oH6MeOagBM%2BPE%2B7ee&X-Amz-Signature=535f4128d79d8eb0fb22ded2c7badca77c1bb9ed10367232d21922ad1f901ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
