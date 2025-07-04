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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIH7U5XZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD9pgFeGx7VR3meYOqDR9feI0gSsFfqid%2BgoSl4ksfsZQIgCzTWfD5jLpDPvQL8g2pgwueOdRVfr9X%2BEjRDif3N5RQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHuthDKpkrkm77ZCZCrcA6pZ3RxZMsXK6aYC7dIMFrHTOkQb%2B94dVP0im7CBPcCVljup3ddWJVz00JYte7Boj2%2Bj%2BVtQOb0ZyIw6kTGEV%2B5d%2BH5a8jERys3q6TpjB16qWr%2BFxNWSJSUDACDZwOfz0QPiD%2FMElsByH4k%2BZSJuwpyNJhbso%2BAxhyjmeMJhlGJ4ZpfP9i5WckwV4spFPseGl%2B13Ea4snrPgD4TEqGa3%2BsKKybvj4fPh8zihnfNzWq%2F6t7S0tNpz4YR4zds%2B%2BGTChMquA9RWjVIoPbNUUegIiPPCs1T8h1T95jd6ArTzvntV8d454n%2FpTMflPy5hlmh%2Fsnewe%2FR4gpBa7V0iXPo9KcBGZvUaiBchCKRfs48NmmaiXBbJpnOdIiEa10%2Fk421Sm6%2BA%2FHk6xtiMjIdNSC%2BR4PHMy6a3qIpiTieCe9y%2BIyr3XOQLyikyZ0bmNmsO%2Fe5ybUOjGWimRkY5qa1ssfUowReiySH6Ge3y%2FYt6xtXFP%2FtKxFRzOJAFRAwgqeDz1l8rULXKSrMLrf%2B1QrwGuAnODj5FBunG3xhOFfIhMN9mH7XR5lETjCdZFaMakd%2BfDJY0WnbzLIcQEUwL2OEF16GJfaBcv8ohOwrerl2SrVZPiwIbd4Q4tvuRIzRuiKJRMNi3nMMGOqUBzll9drDm5v05HBncxXw4d3UzU7%2BABUAP3cg%2FcP98wg68eR0%2Fo%2FjjBbwFjz%2B322zWe5YQvN5HxDns%2F2qg0dbwWC9Vhcafxz8rXPgzUrhmf1Snk8l4kvjQ3gnsf4ElIq8mAjXtHtYlpkDbn8Q8LHZ4jr4IJjlHi0QRSWB6QWWNTaFrFmchJ%2BanoIZoKbqNv97hir4sryTx3on6otkMwnuIbbsYSqaT&X-Amz-Signature=ef736fce9956b6e4fe4628a5c3af9c776b2c979ba6564a2420da80d3acffa36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664W3ZOTI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDavxUUuCBm1a5ZAf%2FOPFm2%2BH82pNer03eVXTxbxaqQ6AiBt1sPdVFZGg4YdhrDWJ4yUbB0Fdfhqp0Mr%2FKbKOuQixir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMY2jFpTqanD6kU5ntKtwDtYbnAXrdkE02uQVQ55SDRj%2F7xf1Q5x5yTbkvScqP893%2F%2FI%2B3Y2KdT874pYGBo4lxpMsUzZ%2BoLdrWEqAVnsSuREx8ul2dHjAT5KqixxX6BhWskn8o6fuM5xODeJxCwbLvXTm6%2BNIpzWwOrEaUiT4XmO214xM0udXziZexDD7ryEgxeHcyEfkLPa5MH9DMHy7LpVGwq5DtR0cCLEJYLeiJsdxuHWGLHEQFCuZSfRVonp1HT7WX%2FkdNeMhf4P9meio4jmqSJIG5mmVRCPgfnCpGSFKizA0c%2BBLBGl6WCPuanAG%2BpWUhvGSCRDQlh87ardUYHOiJqnq9k%2BQLn0HX12LL5uN94ED%2FsAgFHbAA8V5%2B4awaWBfmjqLT9cXvI0XivQuCnQSaRWDTowKfRW5NLhEaue5NA1VqDIPOFPYDSlb3Xen4YpkMt1opDZPutyH9NPMLyOSOooM01dpAAKS%2FmEt894nl%2Fp3nxvWeVMSeB1Oh4T6Wo%2F9%2B48cNhd5G%2Bpyd3GhBffo0Pyz%2BwCl2EGwoxsyNXZYdG3rY3cXPHSFbG%2BHPY2Ob4NKaQWQohDuVGyj4zSNcKorFG2SikZMRKaov2UuSLoWGLu7puFowLVN8EZh8THHxUfe%2BkAju8gEZ9Wsw5LecwwY6pgGzu2QD5MQD5%2FgM63%2BoPlakkIGXSX7oGCJbI1XU820hAQmyQLDydVcjvsLBJgOFaqQE8VGQVfrXYr5oTXvI09qieSclxvYKLCpAG5rylS70kpBcmc2QihLx6lUJVA0RJU2GN8372OEUGcYRGqBdoXpDwZ6vV3ivI4rVS9m3h3TqiuTHiRnludztnPiGEUkGdGP3ST%2FqtL8OxTkc3%2BiGVWCRA%2BUqPFZm&X-Amz-Signature=82ed4b842d733f859eb9b2a3bd3d70fbf2273fddf9ee804aac3b5d9527096be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
