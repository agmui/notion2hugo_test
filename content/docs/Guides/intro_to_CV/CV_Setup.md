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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2M7ABQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCizEjv15b32onfvlv6jUdE4amP3Bw4rNUHE7C%2Bm8lEpQIgYWKXEGdzra9%2BE9aOE6o%2FTQq6nDnYHUsDiYFTOhH88V4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJvSxV49QT0cJg7TsyrcA4L8JA57W3jy5uN6b2tfvgn9Jqtwj1TH%2BbBoVL4l4Vb7HotaUSKbTTDxFusb1ziP0qbOO2hf6JU%2BnZVQH7vTlzFhUgxM%2BWjBzO%2BBcxDqGx1shyj6TuiuqzSBJdBGOqZK%2BZtRtMu5vzim40D1LGfGG%2Fr0yODly2Fvj3juLfx2vin41b1rJpbfPuwW3k3bHEYSy26ygOlviw4SS7bTrlIiMdYK7bS2foDJYi%2B%2BO3DhQCbVDBPUZQvHVelX2%2BoePNC5GwBwDuvly2num8wYvlwvZDCJO33H7%2BnejlSAb5SfTWFSoBU0zAVX3RBicxPg1QMLapWL5ZAyUIFiwIALLyvPM%2BLvxnFv7Q%2BFejGzQNq0seOOxL7J3iudJpeNEM4%2B4huCWaR20QhrCk2mTioUyLIWQNnywfa0t%2Bp5Zofxu%2BW2ssq%2FP6g%2F6BwAE7UV8LnL%2FWZPw9RLKHR2LjC%2Firy8RzvIqymT7w68FGsCC6W5HE3gOihxMNjTGHFKnT6B3DUn5OfTr3tcSs1SRl%2BLiGvq97lb8x3JfQGU59LjhZghNflyV%2F%2FFHDrZ5QodmxXC5ESiyID86T1rdUpJc%2FctGqpwWPpwocwltgS4fSsIBKwmN5nTW19H%2BqA2KMn5lT2gyj6VMPibw70GOqUBZH0XQ7XTKloqF5v%2BMDW8JxvXIox0LecVDCZ88TzgXc2B4YYmtZzvpqNWAGK6RLeJfG3zqnmxglpmzlY%2FnFqgEBZSlOacN%2FVw%2Bxxp78hq6p3FgTgt%2BgVHWGUGZg6U7uHWdrHUW49o8cfqO0IHzP7CyyDsscKKDkB1%2F7Jqyy02SEjlon%2BFVHGkkEmVlrnZF3npvqex0rhz6C6WjaOXeMTliZF51KrQ&X-Amz-Signature=c1c0a0a74774a69195d3593fc964b721ad8e83646b8734dd4542a66550961c0a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32PW5LN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIDKYLS50WpeNJi1%2BVaaj93o1G1nTjQHQaXpPM%2FyP%2F3PZAiEAxoKKQsB6nAvHRTZt1%2F0KDrTg%2B9Xhc8TL3cke50fajw4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEW%2FzCcQw60pdxHyNCrcAw%2FWnpwsr%2FpNWpfSG2NrIv3n7izrbmLqGMqB8ese0oCPNkYXhJ8wSBKdhDA6yMOewtwxqLFkk9tA7fQwvnHExTtT%2FcePVsX%2FUkRVWphIJKOBh1%2FMt1v6d8ZfCaY3UegxxSXV%2FqiT7GyN2RKaCiXZTr%2FxPIT8%2BWL4NGv3p548oPxlGmpSDMDRPgK4%2B7KduOs50%2FehBiUF6W%2FZwBy7Afltcawq1ZXu40w0CROw0pkKEf9j4QAvUdMBjZE22QCR6YYEL6Qxb4MOkXfIfgLQ0Fax9qUoFJJWuSVrMMqAsOQpPGQrNx48Y3ctp8GHmMbOIxbNc75RlLVCfepChs8HTR9Dn2%2By8csfN5%2FrTbigEoGGhFM%2BWwndNc9KUgO50moZNUIco5OZCXiPcuzWRG02fpuHLbLwAOZ2kl73at8pBLSmvlHYqn1ovtzvRw4AKmVk%2B6r1Ff9IGj35O4eVyJoQ%2F41pfSkp9R%2BTWKE%2B2370%2FRWi6nW7QyBLCHzU5wANQT2yiQK1zJzmL6INb0QHd4obcpNSI3wpM35kUAWKZ%2BuOGx46sw0B2KAvuh6HkMfXN5dSqexmchffwlxy0dQkx6jg2KqWp%2BgYv9XP%2BXFFj%2FjdkgJZn5eRPbJ093ORMZjnpIKhMOqbw70GOqUB9Qkt4zll%2BwMLZdKhA%2FDS%2BHpZab6lTbNIlV28c32ZzKht9ufsce1JLZyAPArvt5MS9LPcNndzg1I3jTTKN6%2FVxfE4Sr0R1KUHKcveDlyD3dWnEz1AGfRil1Rdd41z%2BggTAj68JvO60GUEIEuePuoq0Z5vh%2B9%2FD734vER0jJPflVZGtkHh3%2FhOvpNzF%2Blr%2F955QReErAjyxS0sS17m1b%2Fl6k6i0IlU&X-Amz-Signature=ca469605d70e2acf9e4c56d66a7fd16a730ee484033e830908fbc7f2c2ed3edc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
