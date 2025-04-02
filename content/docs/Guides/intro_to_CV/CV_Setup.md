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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOE4BIA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCPOVbGcwhB0Ti69a82yV0nTuKZYj62416Dc%2BVexq2D%2BAIhAPN%2By55%2FRt3RExQmPhMCayUv2HDWMa6NRA2uiJCz4%2Bq3KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypvFdI8nAEN2E2o6Eq3APbELvew91IXXXw4ElJSCMUQHs%2BSXW3FIP0vSaDsVPI5dh%2FM3a3xGbKT%2BZ%2B4oZGKTLroCzpPdbglCOL29S17uO0mwSSlzb%2F0O0FCvu7n%2FHEfG9k5HoeOHJVCZewIDSkop5Dulpg%2BMTUd0SkyOiEWPwP55iI2HVcVLM5uSYB1wVM3knEoJChYQrPakx47ybreliXTt6%2F72uQjcoTdW3khUst6%2FVEic0xfqoZ%2FtDvYp%2FVdtgJKAjC%2FZsvGbv7f4%2F4TClfV0fHHpEBkx7xhy4pw4gNVglfLibxjLcgSEu77RM88bnPjDxpwk06fd3LtI1R3rfD9Buc%2FKXw94AllIod06Q3UbttOOBvkFkum14IPUxG8St3vXUZycRaz4cP0fwT54IMOs4OKgyLqUK8HuuB9Cb7IbD6DCdLQITgAi2n%2FzMPr%2BpQ%2FyX8wLgh1FQV5GtnY7bLgOA%2BIWhrzBCJmL8clp2lZnlxSL0PX1EOcIUcBE%2BhHe5rVq%2Fmgb5LapqJ6ewJ765h%2FPxGjvn4eqr%2FS%2FBT56Tzrdao5W%2FeoLxt4ckETJ11tTWPNonZK%2F9CH1R7f6yqkNUEutdbq6s4JdASio%2Bzpx%2FW0frlvAeAZ%2FTn39ea%2Ff66G2P78vzNfSV4Dbd3wzDH57O%2FBjqkAXQ%2FZbTdAQw57nJdE959HgTycY2uQcTMHNSJZxD6Ueqcv5lE%2BYEWKW5rpcqo4eqT4%2B56xTXPJbm9aEGSjPLLb9%2Fe4lKDmEOejOEmqtGnDXuFKq%2Fg0BhAzOn%2FdtE32btYaF6Q7kpi9RYx1jw36suMfeI08OIvZzNzbc%2BV0LpgNR1djkBUpC2Fu9680ZRXj1nI1lZwxMCm4oLjYf9Ei11bmxcWsmRS&X-Amz-Signature=25a3bb3085bd988379afc16879544ccf6131ccf3a351afd6aee4d87477e776f3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V36RZOZU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCgDJg5NUjj1zP1HFrms6t%2FNPvIskONETWw51t0v6i1IQIhAMwXGgpr6hAiKxdhMZvslhJvW80GSEt2pfTIVgBIROhDKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5r81H4PIXeFPuyhEq3ANYlYJU7KPtS%2FfsEOe2iyTvld3BEvCKnTPNwqbBoKSHg2tuNdBnQFGGNO%2BuREndvf0%2FMqhc3xjdWaaknzy2JTfz9ZExLIsnzwm9IOdOwCCa3jH%2B6XQs2gCW1Jzu6YrZgKO7FYjMoge%2FnZFxZea%2FIbBq7bb9jcehMLfNoI9xzJsxgox7w0YcTxXY3R%2FT4YH6qQTZ%2BnJh6wsTFuDEUmBmYO9zDgH7M6HqqGBrWvqXcqPuAw1WyIypCYURgUyeI4EXPO8KHLSZCRk%2B3uAqV4nHRm2kZx%2Bd4sliz7meEBISrGbfSicA9AZbBkL08NmR4zLScYszJh6T9kHJrdbPLUnle1r3ngiVMmZJeAN7qnytvoLsOBa%2B%2BtiGD9oMpgUHfETyWNqYpTAdtallofNtp5vAcxswJYTbeNPdyKm4A%2BIiSselNTQnvUR4jDs%2Bpz%2F1uZRi0OZ5Tj%2FJYKMbJApTOcmzFmqcm71Y%2BrEsZ1v5X1orDoOIFLgEU3Z%2BPiJLHjJM2FYmZX6iP1x69CCJ1zja%2Bvxq%2FlcG0kSvMXh%2BG2YknMbnaQdjbhXt10FgbN6zgivpAXaa7q1CGzwVHQRC4H71YenZrGLv6dsMojmzEjFeZcVc71bLyYC8sgbTHxkTRqfswzDd6LO%2FBjqkAXsC%2BQ396BGGU9csn44eFWyfyPCennmK0xHfOxIvGEW%2B3KQnO6hlyWFXRbDA2G9R1NJ1%2FcVfKx5bS9bDPSjmKcmuUJh80eR34rctFVUpND9LGUfQTwxtF4hyKHAbgJ9SlQjJqkw1T3RjD8gRdQ14GCHatpmnorPCgK9zFb9eLbYQVpt7WWXvgkbhYRN%2FloxRhUQEhHl18xDreq49szR6%2FXRD0i7D&X-Amz-Signature=1ac6266731d98b637c5d7d9ba909f9beb773be1d3961a808b3c61dac62903f13&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
