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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF332ATR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1MSNiHdbrd9DtM5nXQKOsovdcVGmVX509W0QNjy4prwIgH6aSYwKfGjx2ShYzwQJTHJPxdqr0fWcUkLmU%2BLgF9FMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKvrtetXW9OEE476DircAxOqf9He%2FjaswQg3Lxbkj8PykWTLBhhAfr0P5CZq%2FcEIQlbIUIVe7597QADyKDYliVUSrkHuXJx7P08asFUqSLMQiIRb2Y7PqFvjhzvgGxxCxSKCDa%2FXFiWccxnm2GvKROHF1YvGrUkVfREgIcTreYuNcSI%2Fjg21sEo3In02Rq8BAiibzxtk0unUytlgXhXEOZVRpq8q3ARmdnDVy9nakUAv1vGHn9chqY5nunGh0IrG04P3Eag%2B9M7Obl7eV6pTb1wapIDqDSdG4NE7Gtw%2BAwlLlK8ii0BRwWnQNNEh0nf3ec2qJKK306YAMwJ84RKUTgCt76EGrkkcLcyq75wtkMWMS1rpX4QNrLENWgYIw0tISv3RXkRg7CiVacxUDm9wVzcWlrFtT%2B2C11J9J8U6oXo4Twlevpob5zv5D3uU7fE3M%2FbwU820wINttdwi3Y9pt2hpyX6wLAjAh1hHUgmyZtj1pxAwPHNK5x1LMcT%2BbJl1tfk0bzTAmIXUyQiQai0tcIDRWNBle3Ohk1MaKjhNDIig2pVMTHy359q6dx87USgqcpJgtfKmmEchu%2FKcOuHI%2B3xEb9iDwhHAINpMCO3w2lzDgVt3XhCdqrUA6VPG6FdplqQn%2Bz30lH6w%2F3Q%2FMMyGzr8GOqUBpP271X49jUpJTK0SFK5QYS1%2FpzqLT6dC%2B14irddoZmDKKlgMkhpAwPPJXqv%2BG2WEJggfZvtNAVc%2FUe6dtqU3or4AHp20jKWwob9cAegYD64X0WFSJ76gkXi55BXouOj2j1N7k05ZR4D%2Bs3LESXW8LrOBdZEG2X9eLFPI5ziFRrP%2FBBHgmULkaOe1pOUCdRl2HAPyT2f0g%2BGktK4S%2F89VepmS37gf&X-Amz-Signature=e2e698c2e592bd82b584d0756b8e557933beec57125e662aa2952548d61688f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI37FPEO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc48uKCwzd2LA4fP2s3j1bH1KKORmofC3RBjGiA73T%2FAIgdhx4Uj6cB9CktZDVY14QUhsFM%2BDtCMJHpENHl42lqf4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNaakSXwV1%2F2MSLWsyrcA%2BjfrgbSqLBV%2FUZTdVKw1IjqoLRW3JC%2FhjrEX4rLJwP6I5WJr1GwD%2BHiK4Dq6P9VoULQoV4IwU%2F81QYXeBKU1PWIGXuujRju2kZMuVbzoXxZ45brxCe6DNMWUyAsQJuaQhvVA%2Fg1%2BInqTo%2FrygxoWLe84hA7D21pH6WeeQOKEfgELP89UO%2FTa7ISqaSvmKp2CMha8c%2FcTDdjopbsGRT6E%2BiDyCE%2FtgVZNt3N4Kh42j3IwlRd6%2Be2XhhRow%2FsY5QcNdVV38tqrlSy%2BgTmp9qWGuemHlNvUMSX8RIBBLW83UybC17SikZNr1MQjkD34ApM7B822dmX%2FIzQbHD5Bmflnqwa4JzsL7tVQgCkacC%2BGxL1j%2BTQ4tkN1R6kMtQmptEjJUHmMOgMizuTnykWoUTH7dZNphxyiN96n8x%2B97u9si7%2B3eDs9OWwnEHrZtKIVpMX3sLiUaR4c7tJ%2FnMN1DSgXUXRcd1LK0dFYW7lY90E9Jf4tWKcIob6ndblO3Lob0q5nWnZsNsTdKNUm3iW1Vzt6p9TKkQIZCCKYHWY3dlX3%2B8fzDTBNbbYpDVhoa0aqLNkzXtgrSB5r6N%2F1qN2gA4RGlAhWkKX0MFVM0RDSjTviA68i6Zz17EkatBnN6dBMN%2BFzr8GOqUBWtKklndA0y3a%2B15ErhY%2FYRHtS5%2Fab8rBoUlhoG1Euz1Pi%2F7mxaMvNDUcWkt08BEsZbKcIYdDdM5uRfi0KDhb3k8QTAO5dRitd9G5KAZlYJr5z%2FtDOKcQcTjRs2kpkqg7ANTbFjlJn2dM%2FnbSZRoc%2BKiTeUjvO6l0lUwbL6t%2FfqhMgBAy46Q31IzK5AMQE863zt1NBT6IT%2BaEhI7JkW6DU9P%2FEN%2Fo&X-Amz-Signature=b225d63522a0eb574a62a60666fcbaf4639bf5cc6779d05d5987b7f1f4c08cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
