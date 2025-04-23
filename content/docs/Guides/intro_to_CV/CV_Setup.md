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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHIIZFM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDhIrrWaPGfvuGoNkHCQF7rzGyb%2FNKlNp1b8G0DiDuPzAIhALfjQhTnU1kUIvWa85WfE1ZPcdHFuUjIaw31WNBmxWToKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5PqQYlZibZqZkN6cq3AMCsmRa7nl7N7N1DE%2BK6Z9EnaHLIJZWgbCIHCaktjz9c%2FnGaY544hk3h%2F4l%2BHqmEJDGgj1YC713i2l2CUPiPmdoh6CcZt3oGp%2BGS%2B0kFeWfQ8da%2Bz7o57rFiuICXDYLtr6H1nVEFZOUry1ERZJp1attIWuP2L4nhsDsOM0zIdT%2FBDFtPUOh1zrsiOA2JnuIZyFlUoX2NlaZ0BPCekevitPX3jZ4JzTzcI2Iuj3iae2Y%2BF6Lkia7kZFVmjtmekrQxd6ehMHCAa%2F1a%2BHkSswtNXpZr48E3%2F0mbs7ZKfgbwOlpWvqx6gU4xHEO%2BSemKdtBLfk28DDjTEklVA0%2B4EVXzlAUvhXPcGokNGdZ32bvYBabEDtp%2BihHbOB80xJDG5q1WCldPCEJYk2m2png6j1GX%2FzjeRo3%2Fs%2FVjPFLfgx%2FMd5gcuLTHh15GqPX9Vd%2F5haS8L1fhhjvGDFE2ddrBdQ9fX%2FeP4iU6PNGON8qalfd568eASZ6uu4C1QBycNOEO3N5bqBxFudiQ6tQ2a35x9BvyK0R%2Bc8zrO5ZKjJmgHIJe9cNfYO6VxRoCpsHm6lXEg3QoF5A4yCUHlmxTsYtciQbklEfLi9b2R70xnsyUuXJPHrgRfQ1DHa%2BZs8m7pQPXTDV8qDABjqkAavbcIwO3ul3gXEvU9peXgW2Hx0RNlnQQpcu3Pft9lFE9TaYuUEpzZeTpJSgTqmmdcnGfXtaT1%2FAtiHIQpOTKFUfVfUPEevrfxD4mA0vrjifAicYMsw6Kxb66iXIr87FkosGpDhewaPctzeEPGbGDWGD3bAUSRjZSOdmY%2FGpxNinB0Wc2EN6pmfAqEp%2Fy9m40eW5aldwqTz18dODT07WXJ2GLuiP&X-Amz-Signature=37298ddd5c8eb5f7e91978e04d9e0d0afd96ffd9d71dfa9ebda914e54e34f43a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L4QMYMI%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCvkDib%2Fb6To4VJEzaYNObE8G8q7B7L4tA9jISNE4Hz0QIhAOYXK9yzD11%2F%2BhWV04Bx0OIe8k7v0laHvE10tCNDFHyTKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSgo0iCIV9zKHjhQ4q3ANDL4niyWIWGTZu05%2BOZYncCKBmVy8MlAtTay7HuvDSSj7Ey4qnfdfVsyXSVWEIyLnSTEfn70vdDHMU%2B3VbOrnah8xziMqKNWjL9SzG%2FYTyVtJHHRXC3QDSQ0PC29Z71KTvFM6gwbjx01dKgVV2%2Bzf0EEC3ZyFMcAZT1Sg%2FssJcnHaCNqAo7ExjGsPhaM1%2F77hyAvuUhMcHBotngIStpWjDh7qVkm7r5E0Sc4axtoXTQ3k07XcsioK6v4aWI71JLIgvuzsjzs53eFWSb8sysXyEYh4A1M0DRZTHUDBNG47aZTTL%2BuZs00AAEyHwMRCJpj%2BggLlg0J4FQonBdDiVCS6Ak3ehRp9NpzKwsQF5rFBIVlYNtUek2WnXyRjkSAGWX3U%2FYpVjZW%2BABGNuEKkZJDkcVC0f89Ot2poN3nLtw1MzoT2XZygj6PpQZnpI1d%2F9oiCKtBVrMla26Ct2Vx%2B2IULcQQeTVKU2vqQ%2BFJoz6PMY%2FIovKW90kysMPihbQu5VvX3NSd7ijYPNGuVcZCFBSbEVhZDPbnUi%2FVuIMidDNAEo89KFrBTaoGcyWyNRxduiNJdvAN8JTfa8tsINl%2BOCYjXCHOFetXVdMzaK9omvb1ivuocf4ijVN8CpBz%2FG8DDK8qDABjqkASV6gRL4bVsBz6vyJbystvTZZNCE2KslCppzGVvNnqVbhapl6gYAHxAfREno%2Fkfx61hxckBOyq6ql11OV4r3bQOF21My1JnUOi7%2BNszbUcs1%2FKyYMdwpDOfrnRDWJQGkXniigP8gBBH3NxwRHATXZ48XgJCb0IpJHWZg4D6%2FXtOG0RrPooOiP1k0eEG4XYMd7DldcQsk74EyqgZlv%2B73x%2BN2f5YQ&X-Amz-Signature=b2ee5b1873fabb60bfbb6288e4fc63b08b1ca578ffa9536e175bb60e99a64af7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
