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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZYQ4XX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDMj55kwJlbXT3cSWb2ybfPm4avXyYVHzTcOjt5yvdGlAiBPKzDdC6Xh0Hgq4SlDPMuc9iI5Mkj8maOmYvd3aSmC8iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyId5MtFT6e2jYgb1KtwDe0af82v63ObVP688wyeDZ2XuArpOiFIjdQfJz7lo6KuK2VtoEaJIEFGZ8LqGc2THVWeJ1OhGyDAzPHLrogscZNfq0HOUdyEa4jYvCvHCXgPrN6zJdU4w%2FHkP5a9YoOERF6BE%2B5%2FlF0DmCA%2FCdrM7nPBIZBw5WGZgMLLDc03uRlN%2FzvbJzFDkVbfO5lYi5IqZ8b%2FoJX%2BdhgYFsv7JXtu6Nl5OQBzsuNyElsmk771F7qxR9H2zaGnAP%2FRk2hU6KKtEN4FD%2Bg6htOkgzd%2FIY8bgn4MqGTKaz2Qbx9%2BG2aRRmH%2FqdLJNoCvfrHSpRBqaQwC6d0dzbet%2FhXJsJ%2Bwwbb2Inir69GSm4JFr7LORT8nUGuQZzV23kp4qHair1M%2Fe8kcJdTaKnoEYkGiK8gi2E2GLAArmgJH3VDk0mO4HC1lq4v7OdND6KodMPrK3%2BWlp02EdTOYEXYSMjB%2FqPxMM4ypmKAuNfRtZfUPGr%2Bu7%2BUD4W9rlI81ihbDpfViX46d2DP4PmSKZ%2BEGlfaxylUX1UaxdcT4lH4AIDwmFkjRes5XEDm3lpoKftJrgmw6Wmdc7RZ6kTXG7P3qUI4ziuFvqhXvQj7cbWOmFubo6dRfgQ2b%2FQglLHg717ffs%2FUp8HsgwhviKwQY6pgFeBVKxQPVLwHLsg7FISDQtryLyIlQXDfEKPxjbVG6NQpWNGjCENpVovbpjhPi%2BD7kyulPqlV%2BU%2BJck1%2F7vXdC%2BEjXoQsp3%2BtmkswKQTNSmN4mACSdpbXWdHKdmGgS5t1Kurr%2BFFD7cXI%2FBLzVOlDx0BdNwd1AJuxQvRYhtWGHNKTPgrqh%2Fv%2Ft6eN7likfT6PNxK16%2BWOCphNeTZE%2BXncUe9S6B1A9%2B&X-Amz-Signature=7ca8dc1ea82a556b2a972aa643ed1c4ab45ec65f2ccb32df9dc42f03f71600e5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVC6L3WJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDo9INJmR8%2FE3V3lJkphObSNUWeuMqDbU4j0ZjWQXpA0gIgEn5pew%2B6n%2BeJwJ5jN4kJ2VSHw%2FPjrQEsWezIyjPLK1sqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoPZMuUO61i2I1cQCrcAy1sHGXtmpC%2FaxToNT7iYW8VLUQ8YCCbY4rVMn65jCt9RPaIzXcldedMdhadySNeulYOVaVX72FlWVcW2rd9fpurjdC3zazVi2EyHpseBLem848EymZpZ72jLY2%2BdNuX8IOzAEZphYEl2Jo5jvCGvDv%2FS%2FRpGZrERNtkC4a%2BO%2Bky2WMR9NM1PVBK%2F5PW1fWHcu6Z3Yl8DYkYgC0dLSMUw4NzIeCZWLxjkhkaWSC0HzDOqPZpc8xfoMiHnhNuzM%2FCc%2BX9sn2roDaNt6n%2FNCXaUL13pLOuTr99e5W%2BnGSkmqXVyVdPxh3Ue52aQTAYkS%2F623lTeGkdYYqQFpekRKvIQzZeUkKMScccjV4MPqc8vKUN6GnHZ6haaoMAQvHkUR2WWJGqloWJH5BIowjXn7yNegCTj8ZM9BU7t2emkBr4SXWu8E0WrIQWpqWJgXy4ARMC1lA6HOJwZrvPpIieSMP2yBl%2FE4qtcWaJXotYmt2UQNgSqISCu%2BoIwjqwlaPHtvkiBkgVVokpXtL7bnXX5l8gKveZ6uRjyO6aEgGS00hbK%2BaZ%2F9hYeknHfjw%2BHa4j2%2FMN0x1LrFaOaLr3kL3AEBvNo3zEZALC0VBcfGsmFBYsdz1v%2FTUocU32mOUMukwSMIT4isEGOqUB%2BU5KQIXO2bKoevbPQ6E2l3qs3j1sMCdS4%2BeVFNpzZ3uO9m9VQ8GKBLF0dgUXF%2Bj3FTO2wv7aImZyRtaQJkSUlIjNEzpIttoxQMnvwXLF6CMxYFm49HYSKhfVXkkMjllx4CG5mlz0T%2BlbO1Gbc2AXF0o%2FZ2SvO%2Fp4Ie0r0dHhpyeNUf8PJUapQ1PY41THLlIE0LtPbEm6x9%2FEWNMLF3EURljeiQfS&X-Amz-Signature=3517cd88805adc510f11b2dee11f979fc45848cf3205fb6fde17e73830832b23&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
