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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4CGH5KT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIB5h5cOUTgNUDpxOc1Edor4a3xjJfKQqmKKELhwBupkDAiBDX4HlkGd029MT3Q6LozEATcwoG5Lu5JC7djyn%2BBgMJir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMihfmVNaej3yz0IcFKtwDJYaP6dSapRdYX3gSmX2HESPibsYb7UvPtsBP81Xb%2FjR8IFIN%2F09stzXW6JUnhgbUnzaC2NA1CpMgMu2P64a2jCyTZrwhvlvZeaXY2ts1o02ZwqS%2B80jw9%2F5HnQzHJsW42j6VHwEKi9uYV5kucsP5%2Bu2b3tAnHWuCFB4MC1EVDmDyt3jx751aHjacG8lB6lG4cmx%2FjI7pQ6ETcGsyuZjsaGOJuA%2B3GvfSK1YWZocnct71zv2iNSMX4ErOrMrmLjIbgGOpXzpBZOy95F%2FNkBKmHFWUCvozhZP7kjxQoW6qfcptVvQkHpbTdYb4IXaqzyyvkDvHXBqW7RgXZaPlMK%2FTNlIaNnJdAiK1M1hTW4St%2FT7UphouV4hw4eEZcYnEZkaovWBP1zDn0v1kI6Y2U9E0BeGkYgTrFZ%2BiPwLGS3KoeGvc5JkeV%2B9ryH6CiaMHZdexOO3j15HdLvFqCFLPJ0u8kTD4QnUjqGXhTfRduKlSTp52mYBBXOG1dqH4jKjDD8tc1t%2B8VB035erLjzm7z%2BwMZ7BJixHQfTigf1X6KH6Fbd9jrYY9lQdsSYoGRJfVM%2B726s%2BTCG0qnJESY04iS0xq%2Br9PaetPS3P7QKw%2BWAtI5T6gdyeeZZDhW3PJ%2B5UwnfXDvQY6pgGg2wkbhG%2Fv6JzT09QdwxHE1w8bNpt2YB%2B1pNswigDjEOMiwTRvQ5UCuJZeaZvcefMy5cevIlncqDXyO4dvH13lsJ3HIKn3Im7fz3JHjjec1%2BFGkpI8QowSKqIPlEhOhpcceckR8T02ZgDUvmIrcbqQp8yd1b2XNCBOLglXUopwMABcKeR4Y0rlF0LVfNZPpQL3Mx6SMWPe8nZhwU0QKpXZkbCRo4lm&X-Amz-Signature=65cee3e9024797762744ec47353fc0f6145ead8ab5123b9123e61767afb61b9d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQXXVN7J%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCxUPd%2FjLioe%2Flne4yLDgQ%2Bd3dYpds%2BdgyU6U4DRsoi3wIgVbz1e45VYDiVtvKN9qlT2OHYMyfqbJM6541KeiRh3L8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDERTi4fHlo%2BzPphGXyrcA82UbhUrFbNxNVEAeqBuASbhCZ29YcvijNhGJ03HurhEBQh2%2F9q%2FUQfVEe5HDxQ4hrqrBV4%2BNIkP7uUghv8QJaoUnI6Jfzny57eriQ7KS5wFsVmGWrtoA5OU1s3hIjj1DdQTyeZYujf8wF4kyw3KnFjEPhIQv4fLESpU5RPjHO2mW2yGHWWxIUioqvdsgfEqme3m9J%2BFEcUnPv45SAxGWtP%2FNr8wsK9aL%2FrdhEbVYCxJLqUAiWFU5P76gKueQbUiGgxmgpWOwWM%2BaFNUFxnIcxMmfQQdMeGWxXilc%2FHXMJn%2BtMJgYiNbf%2FkaU6CamPc35cwVRZ3Cw6E9DyQtZlHSvJY0u2vi6mXb%2FxAMK9tU%2BJVpT6zcdO1ySrgiTEn%2BpvUYY2u0LhOq9Ji8txUFR0R2Y57479i3SibPwMd5l3oHfIiBFnKqdvjinKDC7w%2BD5MX66GKdNP0AcW9DMXtmNR7ApMdx9HkS4wMcTiwHgRn4QSf%2B5nextbLuHN1uQI4jFk6u78PzRBzpfFvf8SRbrUzOMRnatr%2F0KgktJ1v6eqPUQhXZM9H8kecWhJvFczKlKQqndntT0OOZ6Y9jnfjg4P2TsfIeKRc7yGFv4nwZiZllwhLFqXK5QQyWJhsqTGJEMLL1w70GOqUByuWz2OPfp38qyBoaD0rZGYAQnj%2BSpXKXCYaFyAtHv4q%2BxaybCc7g3ac7Gqgk55UJqrnzXvRYNryaUOoM3E7A7sv84MZz507fJHE1c7a0EeJNiGLRNroYHZkhe7jPdEshALoXqVdqMckgYG5cZZjGgjOxIUevTBk%2Fpd%2B%2BimDiEmqgPI3bsFOLbiqiZD52J3nzr6lZfcBMuJW0LWvx2hmwOjIwOjOO&X-Amz-Signature=fdf81f8f5d4291928c2ea2c0d49db72a9dd1fa5f2ce1b9a1033000dc9b00eb41&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
