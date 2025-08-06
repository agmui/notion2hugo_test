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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXPSACTL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICKSaCW7rUfprbD5zIlZUVuOny%2Bdh1VYpvjmkRmJnitaAiEA5wEJclatWc3bqjKrZhQhjUxOYR5xIvaGNQTE6Ubuzrkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH5%2BClufl2%2BGjdB1GSrcAwWkH3sra7ud6PWxgCxjz8vR79aAa%2FLuLBEnGOYXHTNLv9CpDz%2FKCW%2BJ1eyNX7JLeiqiuuyP9ogSkoiyZerg7YNcki%2F9kLnHcG3VsOKExIG4YYvBqmSASpnL2o13wobxHWuc%2F2BsQmbjJspzHAqLEkWFxcXqr7iws6DFYV6nDDqABgcfFGfXO%2FzFuhKkW4pRnGXNuQeYZzYUa2Uxu5K%2BQen0Ni2n5FQOk4BKEXx22U7vJz7SXqYSGzu0XUWYv5DaiSR0BHyXpMnzIYsNmFcitrbhDWN5roJlXa7CopmZWqOhY3p2eBSXX0PoJcG4NEEiPZdD3qDI4ABOYSzZHODV9wCXnYpKBAtRCsVXKT7oyFvVVC1Lm57kM7osaq5pgX5VFdSVxyR5zc3%2BZr8Ncl%2FQnfzhyUdScaaObmWEGaZvvdV4r5EizAW9rVtYrLA7LMevt%2FDHGEb1SmwxqHX9UW0p5VsO3E%2BU16YVhxE9XYqpB0PUaYgXmxF9PYVO9v5cenHWbQsJjyRQi69PDykM7SDdC3wt0fLtUVcLSuH04YWeBaGzdsiyacGCvX4kvvABtrJt2YJGFPI90CcpydaoKVCwk1sfVc5%2BFr%2FmVP%2FBNtZg0TSS2zYjmHWqWcGQHoB5MNv7zcQGOqUBTSbyAhDK2vsYVClvqdUUYjTS%2FUq4q7AmeNcH0hzObXm8RYa1wQ9E0L7llaFfVuk53qny2AxO%2Fvqr1w%2FYUCgF3blGKQU6tJUaEqPsP7auC40Q5fojI8Rnw2ScsBpwyUZvjWu0QpYF0gfkmL6k%2FbVh%2BFOTnmk1uP%2FRWQkifPPCLtJBTiQLUL8YCaEo0cm9PMhTJpvXEFsr98DK%2FpPL3PrXPzSn4fL8&X-Amz-Signature=280a41829d1544353bd90827ef2c1188eba3ea41cbb46f45021cb6a957898391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPU5CNO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCstQUYxxJiQM669KPQ%2BCgIvMIztFK4gNo8ZizFsofFiAIhAM5e1NhcS%2B5OIWLOOrFN7XSkKoTcHqKjozIUkbyq8r8DKv8DCHkQABoMNjM3NDIzMTgzODA1Igx8fGmH1U9XPQy3dEoq3AO%2FXynVvBWceEBwiGBZQz4wBRTg3DXr4mDNGNoL2WOi3J1ibwJmVqemPfS9Ywhrf7pZsHPBwkaf%2BwlyFbzsYJEH8cXDBWQ%2F8NUFPeOYUZ9Wz2idyfoGnY8uxQ1qsphdsp0bYsvCRKv546%2FOlMt49DvKaSyO%2BLxi9BgGzSyj%2FziRUo42le5xwskEVVZLGnJ%2F2u9CihCxIJhnuCCPfu%2BSLwG1QPk%2FJc87AFP7kSbzFWGHXKIM1W0Sf7VXyKoToIB0ZeMa2zH50qB3FpSROSioHtCCG%2BupEadIb2sVfr3lYw0SBMJE92rOH9RHaBoMJM%2FI%2BBDfjTaU21WdnqJkiE8HyzjNnBTURAprQjGVgZ06eryojcmEVFxIloQ9PXV3i%2Fg8%2FTF3xMse1POPYgwojEjnG0fgghIcwbctAO3GZ%2Bbt4YuG7DRhwB%2BYt9dXKsIg1LbC0vVwfviYzyQrnisyO0QO5QLzH5LC6NMq4h7x0qHTue1QgqFG8SGZWlUKpZH22A%2BcOpKZQsmp84%2BRWrdRJi1%2FnNW3GhmnB9%2F4H8dUuOECgorCI06yHr42JTz0U2mdjg78lvruFSi%2BljqpF0o6Ho9gyvEnSmwfy%2FNXc6z1%2Fq6fXfIBlla7IZrnDJCujRl1djDL%2Bs3EBjqkAXBYCIIzSFAXfpYITp6z6Wo%2FEQ6tmjgfnErVzmqor1NzcsrqwqKlRDg3XPF%2BBVNg3Brcdq5Ik0F5q6DHxFBMcLBiE6K%2Fa7%2F38Q2kfidabOLH1aaktSxsPTJ8x2FIRS2AvON9iw%2BNPk01r%2Ba0OO3f%2FZ0W1UexiGAgRLLtpxQhLn%2B8WJfvQ5jVHhHJyWibmHI3xhWDweWSHrf59O5k5CldDkM6rs%2Fp&X-Amz-Signature=d16759c2e462491f8d864fb9250ff7d5a9ec20326b0e6a893eab8b596b288265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
