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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZER3BJ2O%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIA8GWRnI60HNg1%2BF0Ywrjyuxsvolh4GYaB3XMf9ogi6JAiA9XHepFEW7qn6gqCrxhHBsyZyM5oOa99%2Frem2XTpiU0CqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFnszh5X9bjJWaB5iKtwDZqjJiDOdgAxhIxBMH%2FDFu%2BQ0COZ0kyzAeyxGsBo6Cqf%2F4y9hWcVXG%2FXC9MG8HbSZcHk1UVVEcIzKKx%2BUxGErjJ36ldD1LsmVB6wfZXKe2Qz2KaeQOWGlkcsiYBuYhuFnP%2BMn7pGeyZYC6Fn6f8ROTP9Bv3XyKAmezXopvbAm0ykSKR1u1%2BUq%2FP6IkRWtOgm2D0nCxdJ9PIdkBfwVSw6KiDoO2QR4P39s0sBB1LVOopQNQ1PBQmhB1Vcq3V8OjkL4exSuZ5cIU2YCqMWaVqEOOudcBiP%2BKOyATZJGlZFgw3tIwh2p6u%2FkGxOVi3yzFoEydLULDXeLLYQt1oUlMiZj46ecjuz0ioteXJDcpM%2FMkCuBSqEak9AUC3Ke6lKV1jBimEKFcwAhP%2FyD2Lhb1tMq8YasHTKyFAroJubki4Lk9yxD%2Buhe1yJwzaZ4Fvc%2B197Pq2DyttUeM22cprDcihl4Qp2armY431jB6W3Mp6b8MoAGuzRmUcxkXiL0R3KLG5K0tMRHMSl%2Bp2vex8y2yN7wAR5Lqcv1EGDhc3Ei136z073kqYa%2FAR8JjKWwhTy2ZR7NncqFEbONEIwWFAfLgNNfVzq3P0iN745sHL%2B%2F2EGeW4yaJVeqb0RKQifAO4Uw1MjNwAY6pgH73bdsR25d6VmcldMtDjPioz10KbQ1YSzWSOHJgsT3mKh%2BHvtrp%2FtPVSv4fWTTZaI4Ah1xKAZW0TL%2B3wkYlUDkto6Ag4HmsjglfM6mO0Ie1ruvP7XfjRTqoBT4xcAdxCJikBr8cj42rtR7YvWb777vBF9P1m%2FyLkwNQj%2BTAlIcKh4%2B4seAkav%2BRoJVsSb2w0LzVf1oeWIXAd06ZBpYXQ41Pox0LLlj&X-Amz-Signature=64fa11edb84acc1efa92283d359cc9dbed8299d5deb1629e1cb90af0114b0396&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FGQ63C4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC%2BgsmS%2BnC5IiiPEVnd71drP4usG6sE4yWJ53dPwWwI7gIgTSurRSOR5i83ERFlplwMklIIbDsbn6c1v5kE3%2BnZj%2BIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA0dRwoSNultknX5ircAz7%2F32KVLwNcKQsYrBQANW9c55Nx5qV6HrI4NvZAV5aROf7rHFdxCc71LycVaDxl%2FqWkYhg7nBNnCd0dctJudgN9ygnzwrZ5geGoSpRnD76qfBnd7d%2B26ExYHlr53Jx44qcxIiW01UJM3%2FhU2MxZKrrveze%2Bm7P0va0vIYYuyvCSecRpOqYuX2GGA%2F50o3QuAwbfYsGLRF142rl%2BenIpAGCnGvmhwPO%2Fl%2B7%2B71UI%2Bwf3BInCjnMlbPOeUUIYBBKURb3wnLUhqXPzUkVyZTalVTjo6CQm0q9XtsyJzpyq%2Bj6ANBohQrFrFiU6DYpiiq66diLG3s31ItI9MBsDaeGZwdAnFIk%2Brt0euyYsVFUVHihWYp0mIbYYv%2BK9j30z6b3kmWugM4TYThqj51nvdNlLXjkX07vDXbEsqJMo0BO2Nma1H2E%2BCWskxrZ69NGqusUVmaXkLKjxRSZ9uOAvG0FHKB6FCpPlvzN3ksQhQreyjPGKiEuNwhvXX%2BBhNnf8Eltkw9shWELldEDY9xUNSUcNlInEZnobWHD0c9u4zW8zaFUYXI%2FkB%2FZEACbocZYvuvvffRPf9lCjEBqchyAG%2BCanonixbMxw4abQo2RfQZScnhnytPVUQFB7LkIbZivHMN%2FIzcAGOqUBM465%2Bb049BWU4o1Rqbd21Ih9Wjy8gJSajYJ4KzVx9sJ0E8piopWNPU9pDSv42jlKw0gbEk%2FjlB9sI%2Fdlw9aSFaQFGmbWSlA2aZC%2BhtMSEbVQJLpmmc68ylJUi19bYJ9J2d0Hti0QG%2BnoFBo5m6pKRgA%2B1abgbSLHYpCsIl3mufge70MnNc%2Fme7j4Bpg9wTtascoCz65TdmlfB0DORkK2UYusO%2F%2FI&X-Amz-Signature=ebcb187a0f85679183f6de3d09ab1511befba74d83ad328fa71a94bbe78dbdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
