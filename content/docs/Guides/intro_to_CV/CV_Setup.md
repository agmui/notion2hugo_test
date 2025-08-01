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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF63TSVZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyXjpPVh6veuWxtNERfEXjZYz4%2BX27%2FTVxbHV%2BJN1RKQIhANfQq9wtyk3qqWYNjGapqjboKt339CcwMCzyeI01e%2FpyKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySm46e%2FVlsQGPnsj8q3AOnaPzp6eMcVRcOUl6babZ92yzzcR1OPHo7Mvoz1E49EXZK2roIjSLLlKa6%2Fm8hcywe4zRMB5Sv19ilUoylN3hWj1xDGBJxxGW6uFuctNhfpao4mFP9FODxRC7LiLHNsVgdgIjRBjVAa0Ckif7YqZabcExHpQ%2FgL52uaAYaKDVu6ctXghwkPVvE%2Bn222gfqcd3sahmQ7a60QodhjdKjXCRYn8hsJE2Sm4AZfOCx0AAkLjR61pvtDikTOYkpHurXCwlux4U%2BbeZK2J9InN%2FmeSCWsu53Ih5MYg%2BzF6ek0h2skdrZHS%2BTe3BDSu%2FOOMpfiEP%2FFyUv%2BflbDMaSJKR4qEj5Q3MzELnpfi%2F9Y86kEc8nAy11s4OSb8Yi8NaUtQbqqICokZYXQMFFvh%2BMgIJAJeie0F4Q8zD80xnXN5p%2B8Rza%2Fq97UCERYGeUxySgxIv4QxY5kSxQlc6ap%2F5Qz9R0y2RHxMKMBTtgdOFK%2BBfPnSNSxQZ%2BCuamXC7GLD%2FwpiaY5fV6YshMkwssDJbAP2XudLEEQPO0uF6rFRRNCph3XvSPwOcLemLTHRK9AE%2FYXkX0I9VZdis0owl1mOUULCYXhabku6ubidDy%2Bk4Xafl7uJijhi7DfgdBw0HjCGuA%2BjCcobTEBjqkAeoNSFEE2tHxwfS0vnLBl2usURaY0yhSnQPxJ454sLtNXt1NWBOquiJ8GULhN678T4QfR%2FKo8eFvfg7rrsuJ5H8s211SbmMfG%2BHZC7wKav3k5jAqsowJAdL1v5nCjGqyN8qwu8BLZbvAOO0VbyNPIgKUT%2F1lPbR9nIRxSQvJS2KPx%2BSKiWo7tKfDyHX8ek2gFMn%2Fn77k3xs07r6bnchSPKY1MwoE&X-Amz-Signature=aa63e778f0eb636e469cc57ef289f0e6ffa1f3f2352af8d552dac8769e4073a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKH6MRN7%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMun2Xz8Je%2BByapT8QAGm7hDnwFUSi%2FsO%2FDeJoobo0yAIhANMlFBxf0QXDNVeuhKwb7T5saxBG0r%2FA3FUVuqFAtUcMKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2FwWBJ7bNdZ%2BhstEq3APNATGUeP45d0OeZpKuhb73eLY7sRGFyvIkJKmbbuRm7THJh3%2BrR2AbnistY3I2HodV10Y2WLlFBM6YgxlBOnokTPsqakaemI%2BBMriuI2u3Icx12MUZv21Nh%2BSZ%2BZYsvOHVH4qjJ2RCRhkclGDSftSnuRr%2FhfEzny5H0ARqLK1dCfhC9VphWy7blQ6ZjSq7B14IRn6YC9bFKoEblU6k1PE95qmvYN0KWFLbAtddp74jYL%2BfUoQfSmIY4ecmZwkR7TTnBJBsEw1NABi5Al0z8P3cmtQYPXgye6%2FkZURlSCVO8u1iqRfoU6sd2zK%2Fj3geMo6qnDBd7SC0%2Be5fIrnJVxCEB7tl57Wmf6Nh7LcbC4EebOSZhmDZTea0Fvg0YXij4m9TQdItnr5HEa8XCZOPkxVdrYVfbI7kD%2FWqxuh%2FT6Qg8P48Qv8JTNPJ7IrD96GWPMV8LaZuvpIgecUC1u2qCt4XcuIrFf7Izb0agJVfAJtJKxan233YQeINu5U36RYmEEvvjuGM8sFijU79%2BSEyYNW3bjvUOI6o%2B0HocXk2c2YbvTo%2BD3qW7Zww1iM%2FQ6hzmfZHUZiKXe1AtNZwC1dpw4wNT7kCBi7jycP%2FCeuJwVJYtNFwZ4buBDeINqUhkDDQobTEBjqkAfiJgruYIUmQsfQI7DVs0MCATvcN87TcjIk2q2hQgFho2T90cZFtiKYleBlhsfRoLt2HAntpwc0mIurXD1WXC9vzXs%2BbVDr6%2BTmJtbZGD3KHjTf2I1E29t5zXGqeuA7LualGCmGdGXkaR0uu%2BXlBmhsS7dWv5FpVcaxiYkWf4qOj%2BPVwdxqLjQKGlyiSxq9LnxuLUVFGlrGlB3Birh%2BZl0cPFqCb&X-Amz-Signature=1802aa8c5705d7c5c7a007e82c4c1b421bc5fe306d4f3127aab6ce101290288a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
