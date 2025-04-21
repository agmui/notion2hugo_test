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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P6XYGV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDCRJ%2Bx1RJm0jp%2BzhyOqrhk%2BCwXDmaHsGeWc3%2BGLnSo%2BAIgLwetc9Rz%2F3B9UkHUvdR5jAX%2F1ynF7Uosu8tQaIaGsFUqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5Pr4z1BVPqxBGEcyrcA2wGMv0oI7mg82cYzDcJDPZdVInwD%2BaexyEI07OztMy6EXobodnK8uyxxrxP7dSKqGdvQNqm6faGCGvh%2Bf1y6ASJR6y5R1t7pudskumRoc%2FpT9r1uNX%2BMVOkeKAlKymRH%2FTsDjxFM52mu7nHiOE52Pyh%2Bhu88pGD3gyCLIsfizLWcj%2F3YlKH8jFXURwIqwOEreFpjP%2F3FdlhbKG7vItirwvwL1ih3ab2gzPiO%2F3HEB%2BCqTYGH28f3uOjrWH7qntLvCxwhk8qLhQV8DAuNUfafV0SQneEUa4zwDhEbTO%2Fn%2B1QG0S%2FdOKOVcxB%2BbmxcMpll3ut6M0comXpb%2BzfQ5iWU9ZBHkDp5v9XRXH2SsixxI8umqG842dJEmIXCMdxTuFo%2FJmhEFcY4FhmnY4R54Cts5P8Yo5XSx7obegzqc7yqEmFt4bjQdNRSO0Q7mEf1VpRtOqMDOmlsFJZxJRaqjCp0tJwG%2BEg1t%2FXXopaypgzWp5ZWaVvhN9aQwi1ujLguEHznWVR71i7fAODUNlS7rlgfDUPFqyUmyzGkr4MhO4h1g5Fi60KmNWH7%2Fl%2FuEiOnxVnATbo7H%2BwBzwYyQq1MjeCaQN8fxdcYQGMkQqpBdtpT%2Fx09%2F%2B6CYvP48UarQxAMIi6msAGOqUBUwnAjWRit2VGrs6Ps4SlXG8ouW3xTLTW%2BoQdPbkgubjslV0nkMzndLBjGnLKvR6qfycu%2BGbWkXo9Q7DYeCpEyIRLmok0Z5Ly9R1kaWMwatPLajkwDhv53bd3l4073XLwlrnwsAzGwdA0fMETuZsniagIb1lf4ATZ5fN1ym4ntBJphkB4q%2BObUF1HLE0Pz%2F7eAg5DWUK8f4HnXUlDKiSUQADN%2BCE1&X-Amz-Signature=9538044c4234485f2ff4241a441eb9dd6b74234a3d52d99956584d5fac0db559&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672DXVQNO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDe%2FE8NCQzYvFb5QAN3B2si%2FNd55S20B7vws7yy8lowgAIhAKLTLiZv68aEgcukUTKEIgZs0C1YdMZ8GAaFVlKfr0HIKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy74MeOD7JYVt1F7fMq3ANDEp9M0X5%2Fpq9o%2F5l%2FgL1JGCxxbL79mK%2BfAk3XAvsqoQaxQzVz6%2BnuiH69ZI%2F2ER4vP3HG56flhcGtoJxlsLbRlBbqkCZn8m2W%2FJJejBPOir228T8QY7c2g0gKvduRVZEx2dzT%2FvW5X5PJPT1ySvWrNYAXZl6lQGikNRIREd7GrjxAQAOJT2eklXE8P8tviODvB9Qp%2FURdpMNixM0uBnyC5Vg5iaYWeDbuncEgrV%2Fe%2FX78kO8aBcl%2FuiH5j74PJwuFZXcIyPxbd7pXq5nQBbHwa%2Bz2W%2F0XrmY9OkU9zZ0Tud%2BO2LJg5ife%2F6oV%2BsZXP8FL4AROn5ZvhQaAP8Xy5hR7jnRO8TbRYIvBpmDwO0h%2FRl2fz3ydADJYiPJp%2FU9Nb9wNdsQ8pgZe8PYeH9oTL%2FI4MIDW9K0Tfo%2BAb5BrTY0%2F7dRtCel3jVkuYoRiGaBLclYY1hknGSLrXbUqJfBn%2FONulxgEmpMcIVDeWX%2B3KV8aNuux2UciTAMWKIvuh0f5r01MVv6v3zz73iNweAISb9p5brfbW1y%2BM9ZKbmctOSjjVZeLucq4zlEOpc9BYIOgH%2F0UQxx549wnsejITfP8nXMu1cLZfF5%2FKQZx8hR8EglAJZu9xG7dnypQbATQ%2BjDtuZrABjqkAda2d5lLTN0jSqIQlsQ7b%2BowrlnO0%2FLjKPGI6t%2B1ino%2FGQNdX8g0a%2F88x%2FC1NxImWHcUoM0vufKwG0wTmy%2BPVoWAcbT%2FKp7NSTZIUdadaUx0LI8ECfNUGt9ucWnud1F1EnTeygHCr3W5qKwOanB0oQWLOWXHWY9GmUQePNO6ElMbgIWBZSSu3jO9Je0w2Xrm6Ij%2BldjQy6Z%2FoP4PelxnI9%2BDQ0C7&X-Amz-Signature=7e15f4fa8cfc269f2375959f5250041c2537607fde761195d89175c665012ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
