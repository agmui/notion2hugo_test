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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTROP7OR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHFq16qZzIZPEb2J6%2BzkzumndYLIAXtoi364%2FucTe7W8AiAQJbsI%2FjR3HtnHropPYJyTQ8lk%2Fx5vcX03cUwmTqI9dyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMhnT5QeDWKp9fNyJsKtwDIlQyl06UhtNRcfDYThGXoO125fHcOqSK5Lgpi2tj73hYheRKbdS6JTu%2BmvLNmwoMo%2BD%2BwYqJtCPnSnx4uCdhwLOUgIqZHFvx8Lb9hwNFnQf4JMOxSz9zIVpvbg9TnLY2vl7ln9wRusf1yPqpWQ3z49MkeTbB0Z9tx8YtaKzp4mjSy%2Fedqqt2MHFKEGCYekz81V6ykjADeMcf2QkfcAWjkkhyxK1oQY3kdsS1N685R0oeAlp66wT975yiTOmFaQFIznGuuCJ4wZHd%2FjzeNnR7pvpMZQZ%2FJ9CnsvYEf76ZeYQmF2MMyZGbybJdm0u4JKSqOL1h%2BIDk%2FkqnK6EZCPDlgHu1Sps0RFKgunF6ozI0PaiS%2F7UNNi9fjwurr5Lv86Gzwa7iR9q7yisX50hh3PEqcHo%2FPrpGm8IfQMr%2Bd5T5nJotsZDKjr%2BwJu1blz9C3BasXc7LidbaXkvlHnIWHeii2vizAPgPRXfoIUFiTCV%2BscavpaT2DFbE6PVYNrmCusnVezlFqQOYmOtlDOWINNrd30OebG0n8GdzHLzUbHVpYiod%2B0ghlUV4GoHtYDSlQrVLJ08gi7WCp415afr7OEmFpb%2FPzNfqe1jLGX3qBi%2BfnoiNtK7jqP8%2BahAG1tgwhMHIvQY6pgE81NbQ0VIkh12RaI5y8Zs7Q883d9yryjQXlCGo8S6d12%2FR8pUPJOhtKq9nB0lVdYkuJeAnX4QnOs4sKuBsIpePZAKzljhkXazzF3bPEQ7hhJG6AwlwmbmUuPH7xkOHs4kEzzJ9rqIPzl7dYfudSSr%2BEPSsZDQi0nflKYNLdMzECZo5hThaBw00C%2FqC4rXawbsZ4Ejw8IOssVzOa%2F7LHkaUvOI2lI0L&X-Amz-Signature=a237b0c92158906b9f79a509576ca57da1644daa2832d74a8e6c65ed614c0971&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO55QR6%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD2zbeqEzGxjb6%2Fn3g2%2BPv5n5D86zR8DTx0diZLzAuuIwIgZ%2FTXVYiSYn65TThlVoGS0X5jhqEsjrZk%2FZaHg6zR3I0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBiftTuIw%2FfmIzJfFircA6iWuyuooaHfx5Thb722MY3AQ3d8wA5qhcojOP7YlBun2OS1NkA1a8Qc24aVtkbGg847OMapCxkJ9%2BWz6gFw%2FfSqeOubQ6CgNEefGK8SNZ9suZYnTDH3Dyiivot9XZfHbiu5aw6%2F2R2JRMWhSxBAZIPCpyrrwElEmyVwUCCcjby9%2F8vDGut%2BjeXpxX06dDxf0t%2BeIyJIfbeYDfWkqNSRZjSZZin3PP0FhjqcBVHsW0sXa5eqPH2IOvQj7TaU9GwnfMfEdul1LdhY9%2FnW4oLOVjwu%2BIzWxNnBaDETMKCvGXEgI8MVHiyY4EYzDxDg%2Fz%2FWe7SdkBG7XE%2BTxeLo173fv6VeI640o%2FpDJyw6lBOLIW06sb0A62N5goPn9V7%2FW%2F%2BVM7DJt8kl4m2jNOGTJiuHhdnGl7IYgWsfMGc7ZXwsVOq6WN4h%2FbcXuvDtp1vrbg%2BhsUL7QufDucP9AIp3xQoN%2B38XYh24X%2FMorHYs0UeXnZVaTqYSO%2BFTGAXRlIzJZvbVCf5y3xh9Zg2c20QGCPR8krtLzXw7Wed6X1Rs%2FwgrJhxqT8p%2Byt0NieNYOw9bnACdkrByVp56%2BDLmyT60pPRkVbs434DBeI8hrTZKo8bSi3JnR9ocA9a4DVCNHfTqMLTByL0GOqUB3dSRtnI6u78zv7Z5gh6tTWTZTE5wCn8abiiwmmnqfD5ai4O1Hyy0ATGm8w%2B98fXrqOYtJtLy55QoOtBpoO8Hbke5ccosqm1ElB716dg88fCrf0tdk3z0OMgV%2B4LGFXJTvyXqMNIYMvbLcgkMu4vXbedWXByJ1BPcQNkcfI%2B%2FOdb7L%2Bes2eWOJPjjEau8m3zVAJen4T6JM26WK6WZvyH37HUL0y%2Fd&X-Amz-Signature=a26f603fdeadb9b5fe049b099e7eb6f137e27405cd017a1c87ab602774b739df&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
