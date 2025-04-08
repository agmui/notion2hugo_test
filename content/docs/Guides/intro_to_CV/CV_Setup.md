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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT6KHYXN%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCtqzLiPmMKZ7H3pr%2F3YSsDYay7dLWsuwZ4ebw%2FanIPigIgGaoGejcKpvAGrOaxqXjtE073JmUhl4kr70ekx7lV%2FyAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJ8rBIT9hyLAIkKgfyrcA7OYFX0Uuidg67df1QMOaCZ7CV%2Ffw1oJzm4eYWwATIMUGdu3MMCLg%2BOsHuntv5AD2B4Ngwmhi6qP5Nq0whr%2B3JMuQgo3ZiERy0sMeHS2I82SOD0VXDKQTZ7Y2oN29aAtKZx1h6C7Rfw8m3dxUp3ln%2B0mXYXrLJL1ot9zImyxSg8SrASOgy0EeilN8FAIrvFn1p%2F7%2BWTpvE9T8psc%2Bfl1Dj%2FghGePbJoYoSh%2B3cfoCh2ggHOYfqcq%2BT3E98pjmtjglgdZBD4tuNZ6JdYhRrb6wQjRBN%2BJwRNBmu0zebZ4tN0b6hI1MVkRW6UCfiiPlkP8r7JOH3XqIymhmWvl6PJo8Em6QtqDSOPVBANTKBUbPAxbYbmJxmKL3L45N8IQetisQ0mxmyfis5BoR1sdwMeuzNHHWg6xfFU8MIiFuOlPAsoHF9adA1WCBoU%2BRj%2FTWjXL4f0tVdOPjBnVOSjE4mJsvYLMStczoZZ0TrILMffJkHiIeVAhgH8Pr9zC0%2BcqJ%2B5QSLYSoNnKUajCuBhrgaC%2B534YsFJcpNEvcM1szw2k2JWuXGysC0TEUflegM9GPNqF9qhXQzw8GO8pWvdq8R%2BIlG8xXw%2BYURxUZIU9hWZwDWM9PHsj9yyOoQ87dpPGMLuL1r8GOqUBlcUZeyr7PBHSaghG6sC6jF%2FGud0hUG7AsgsnUopPjDBONU8bkH%2F%2Bz90tlMsXLREbCbIw%2B04bGy4c4YLlAJw%2FAdTcMEG%2Bu7pIz0IFcTZcPMlDdk%2BvRABsHbLFbqqXrhlp230YUyvpnY8Z7mnHegcOJYwHfZr0SNFKXD2ZFUzR3PbCQtpEf24VbxEzbZWuNMCpqkIWw2yLObkBtuGymB2moALj7JyL&X-Amz-Signature=9ade9ebe79015078885985f8f07c7f7b8d3d98bdf4548356fd47683212375dcd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU4AEPZC%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDLH%2BJ4akprdC6knouhIryRqGtIIq1%2FwxFIom9CMDSE1QIhAIBLCT1XZ9fpXpPziUCte43YHkK%2FsVJX8YxU%2BtMVrQJtKv8DCH0QABoMNjM3NDIzMTgzODA1IgzwO1Tx%2FLjRJyoPrEYq3AMiMwX73f6JTe7MPIZSF0icqtw1Nd1Brq3r3CjT4%2FMfOxAdasCdbn%2B3ZghJKAMzSUd16FqmbUjFzPuzGb9CEoc9phSTKbbQP5A0EwjPg1MdWK2xNRN8jDkBZXAKbgVMVMUjFdwxG22eV7ZsoUlfN6r5PysPKBWOBzl9Dw%2FZleb0EROUrBW%2BSqqMrW241NTCJP8k%2FLo7Ks%2BSIooDTaE5MCf0TIvmic6RUxGeA19cT1ELRILoHjJV5zqYpHDeEFIyhP%2BC0mbpyIipc9bgDqdL9jBVdHecsoAiKdE2kw8DHSdXxJR03JHDvsndDgocbmlGRPS4tE3tnMlCsV%2FRZHtOFQWyjGbM%2FZTM%2FYgs7UV5uaQBONjzUIpYrMRE14fZgPQiYbaaotxKnbLvSaClaSTE2I7xDevaRpXEa%2BKiibzyFXmDiT92VM3Sssf0U9uQYkUSltdNWzxnAwW%2FKMRKZihbVHFnQm8FOHQiYniV6JwgB61bJQ%2FFW4gQxClh96tsmEuSymSIWQwv1Lw0iE%2FjcNtB95gE7U%2BSZEvpKMI%2B0cbN%2FSSnv0CbLXyEWFHTcKSMsaWhz%2F4PKSuOQjBARt51xqtkXiURbbwH4HKwC6jH%2BgmUsAum5OwjbTJhnETTryQlrjCmi9a%2FBjqkAaiOazuueFHfYWywIeQRlIz5aBdEkT1BhQpCEmXFallLtvxrWKeP99KpZMrigygMEhpxId1fVMXx8yO9IpwSO9cZoQX3O9m4JqL83K8Ibh2Pj3%2B7WzYIhFI0VsHDil0drP0NGI6ex0Hc3mo5Eo1opO9%2Bl3IW1oexuaI%2Fj8dFqKhTdRRpEnU%2FFxlQFiY7k%2FHU0N3iqigCLWgbb7m9gm8yueR3PDOB&X-Amz-Signature=4d04b431791b66cccc9227c26e4d7733f77f6ef2a88a5d58a789212547fcfdb8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
