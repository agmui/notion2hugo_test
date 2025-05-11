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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGEIL3EY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCHtzj5H6diaBaCoC0j4bBRyYaW8n6NEP2N9mhY6JechwIhALjR0m6b0CSJE2rV%2Bs4AQzgxWD56e0mOau8I7z%2FcwcKjKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZQJ42L92ViXOhTH4q3AObTxTZpkB1dWRrsQ2LmNAETycRBROWbmQjFuKZd5%2Bw%2B%2FDECG0OoYkyr9yDhyHwaO4nVnXPAM8DancEvlQLZcivivPywRCdxaD98NXgpo6vbNFcxiWFCxAvVyT1WrIinrOiI2Ypr1vDS86kigc5y7XuZRa9LGTyv1wJDt%2BAeMORtAk%2Frb6laNJ5J0xMQigI%2BnheDbF20fXXWEJdsTGlF402gb1yxZmAZm8SWnotG2MzTElaxVjz7m%2FBdMn5803M82rT6u%2FP7Y1LuelP6%2FP8EMUiBXXdEjvc8lAEmfG%2BoYxX%2Fnms57TYh7Y1LQh7mptUEyImpnHiIPfCQkfCkFmxjcomG4vH7Lq5CYxH9RKTNcIIX8wj7ndZcJ%2Bmr%2BtF%2FsajopEMCxkKFBBjmJeeqjEIrZasnQmFehVVe7Gt%2F%2BnLMLM%2B4oqV0gc7udlz6XevmQ%2FXfdpj9Z8nx4y3P3hjwLlrR21ykPAtwsG7tpGMDkmaYIK0WflM5LR%2F3IbKSWlPZMTiZPUopnwLkya9wL1G%2FE6pUGCc0b0wfS3wjl1U4oPWRM587xofstd%2BVgAJmtG%2Bhsr7b%2FNOLoau%2FXU3aWTwV81cxSYvkJe%2BkzJYQgjj%2FoIwqMkaC9T4x2XEIpEdQjAsUDCyg4LBBjqkARqw3YIQap66Y7SH17EFORDelyAnsWTQR291mOjCiFqMRwIkkYVbwjFi56jeoCYdF%2F1QEEPnQSqI8tkmWDxK%2BBVQMDzW08oyVWlHQsKnRfLV%2Fy98ZGw50EDFFtrM5hfMMYaOx4RuwcEcWwuEvKdtrJ3k3RqPUfwheyJkERTA%2Ffprqg%2BdFX28rKJoHJx9iqRTq2UNTt0uVXZU1sfW%2F6r%2F8GmE%2BgVy&X-Amz-Signature=d0fcd281d84d93967f050af6a50d1ba1449c6a85c553c444a5730d1106f2d85c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSOJ3OTI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDu6eZQx7COrHIOFHShihWUWln1PE7vvtXYC5ErMev98AiAwxWC1KyYTuYyYyCs3oD7zhNjvzlaayyHXSLiKmozDaCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdBINq%2BiM%2B1pvg75KtwDyGMqeTkKjf1GcY2tSQkmTAQ99XO7Aa0ERRYemtyGIGrnXZYzduaTu7UFy4gV5w%2FM%2FTaLU%2B%2FCeUL0RMdsb%2FH6msIRc1z0cCH1X5X5FGhhDUgMr3zsRBvhxbU5lk9cvZN1mTOyFzgaNKhWZ5ifbK4yRXth1OYIZeuWmU6IjnhL8RDw5d1RXpwyB8xMO3dp9GnbZr3X8ubFNoyIyr5dY0za4YUg%2BwRYK0RertGLwrzyTPkX%2FrFTZlUsg4rNXsdbOfncIPGLFe4ELwY8S89Q1Ih5hn5%2BFLsK15AOOEybn1dppCIHFotPnbMomGMDf2oEyCdsoFCEfciDITCTZYyQk4kJ7FW8e67hZNjvEToIKT4JA6s2KaFlkcJEBXAcPHFMKkRLYOsJqynQckBsJmuH10FLzN8wryf6lFwVMqyyoVTscxgRdMLeNSbau5t5wbzVosxZq90aGpqw1jtlixqI%2F3EPd5ZpDRNp3cO0daLy9kibdty2LC3IbOQ8ygSydPm336f%2BAqXiWDuX7eJOgTRRIKfjEjUzknVP7Y%2BvnObvgHl2XUbH%2BlJ4SaMgw07nBu0wyAmgIHsBCYRx4Deyw18Hip1UicTuyl5v0cH2WMcTqsITrQIwCpNKJyg72FH%2FTWQwpseBwQY6pgHN4kcMDQaHVyiik%2FowIpw5GyoYCUPXidX534qfTYI3HXEKh1Tp7ez4MnW%2BI0CL8NB94WdgE12QB1cGJfan%2Bm4ze5nNcgSP%2BBAJh9zwl6VnOlQV5B3ecTIaVi6vxMycjDSOvHHNuZlhTHf%2B6MhyQ%2Bpp2%2FuLd6TLG7DUleisyoqm4VunzcvbM%2Baeizy10JmOzVng6AqlievGG6dQZq0FKQRGcMrsWZrz&X-Amz-Signature=2d99d139f18aac220c236fbf50974536121974422d3a5af27d7ef72d1c10014f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
