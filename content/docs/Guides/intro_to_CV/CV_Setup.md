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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRP5A3I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFF0w24ybJ0v6JOvKfh5y3OXiYAh660CFU74nrBU7cSAiBzwA8Dw%2B0gV8GOouH2weB1v02jVvSvXXsFuhFfLG3EfCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFX%2Fyc3kHa%2FMWi2aKtwDEIEEk8oJktdlKwQ9tK1DUpHkYzc8bGVTJdm%2B7cqCuCVcmvFZBZMRgBRBKiYmf7y3C1DfGjJyGIrYeACb6EaNYHofFRD7mfu5Q1b2Zo5i1MSAec%2F9oIvRRxlZuKnv1RljkguDKTZWf2mjuW99ZZQgyNIebkDG4GunYbrMdn%2B8bKwE3rWWkviP%2F6cEpLJyq3OppMCWeFfnmTIsi%2BNGCmC4GeAZecd8vUt3aButm0s7wZy4mhld2iqdB0RIkUYeuq31MrXIEw7Yy4WOb2D%2FaIpsCgri4HTYdKGnoxYOeU07PE8TzgQ%2BNAkm0z1h1JAc7D0WCEEg%2BUu1x%2F9ZlUvPmNc7cKHlXlcBsc1qbL5tPjaSJJIr9Lg5NedAHG3sN2w5TLPylFqh23VVAyG61eIIE%2FQvsBGZxCWjld%2B5BDF3fkiVWAqXVBu69aDcvWyznWkmXwpfNDl5hi3Eccrj5IeXx8EglkHBe3Opae0iWomyawAOGrrpSQ0SGjhfvDAdGyCaFO7a5%2Bz7vgotPjE8eowhtKl05Cia%2BmFY8OYMhXSNozXLbmjxf2woOpxGkJfDvzp4ud0b0wslKAeprPIoUuBsOpHJrhaS1Lt3F33DXUczy6oW5%2FIIr8sakGaqRYtjJ7Mw0uTmvQY6pgFRcJaFPrKWmdMOFXTOEK9vF%2BX8labFjCZJMK6k7pFZS2hS5%2Bn96BgYGkD25xbbj4gOq%2Fi6%2F2ftwjH1T3HOirHE%2BPFpk3fxSivvb4uWg5cZ8b4VLE5yPuXIRa6KcA3urndroYsFoQT7D%2FhofMooaherF7uC3eBcuMtI%2F8u0cuOiu1gJOCuZD7Jo9jbXS2gKxwjhI3T4kVYSQ6kavvsLd74IUJuipCLl&X-Amz-Signature=c6e46f0fec5e4aafdc18309b2eca5cbb98df59fb010a2657886f4892e89893e6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TML3PZ5E%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjKbo1qNo76%2B8ZY1Ont48xZrCfFLEuDl9VQ3nIBmwtxAiAPmK8dq80HQ%2BHxrDsIII%2FMFZJ%2FgU7coXrMI7g6UwZCbSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKYuo5Wcdzd7vIySKtwD465mV3NhDagjWSc3WsYRKS0NZiKmevX%2FY2K%2F4apwewK%2BJfjLMyTnRRYKzGQLhE7ioJagfuEeVZxPqIEkmWnKRNKVkles5Lmoga3vtXjE59t6ThIZy2yP5Uj76vzRkso2jQopCMzEehYy828KA7zMW%2B7WUvqgV1vpQ%2FEAA%2B37pUWcpS1CzvJWMw4zaqut8kAeRtSdzTd1oSif0Hwf7zLBpxiOoeYwa04abVwsZokbx8ZpNKibwWxQcg23B%2FioGPUyNtYI%2B0IEuZpYDZVJbrlBfGnP%2BI7YBzo67XYtyVJs2FOimSnfDI3VEUBGodTAWvSl1AYKubsbdtapWGXC4ZkgAUXueCTCb4rdXlcm5uBRw1MH%2F2WAirjooxtwSd7w%2B0op7KzH%2BcXJTPrJ%2FhRNuf9e1t%2F3ilwMXyVZazraKSL76ZfDI%2BRmnP9ghkdgpztcZ8cVcloo1TWEM0XWo%2FDmeJeM1tk5bxwEzh%2BSFqkYIJHqSGV6UUTntTEjR6kxTblnfUQ8obaw2flNpd19XW2pMFJEmYMu3bEP7H3qyyrFlu%2BNeSm0cr3qI8L4Qfvr97Mk36Z%2BvzA7Rk5EjLax4IC69yLR48Ii9L1uXfPzK%2Bo0nkD1R71RkUxXv%2FJ24gSCewkwk%2BTmvQY6pgEsoYcYzltqwUO4O9LH8XaNa3y%2BHhgRCFBKA5kmwMVimN2aS%2Bh5I29Z5QvbX9wjpbN38eTL%2FuhZShrrYXEn%2BmpcGS0tyvyE%2F%2B7AoXvZuwBTGJEL1JJHFbvptIejK9FSMJqrwFQc233CSfA8nXHvfZ7c7kZAhcsljHeGFZOtVFfoE3qo%2BuEGfCbVu%2BTuePxTzNAn%2BBYpdUwJw2sr%2BvKrCuiiPIsQOZ2I&X-Amz-Signature=443e1c7b70a626373c75f8492a073c1f57e0b5eb982260e453744a82cb1a361c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
