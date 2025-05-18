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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXNPVGA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSspbdMzAkWK33BvD2JilMmgrDO9KCdYWV56TjT2IzRAiAILIyzfdM5LBkz8AXKLNY4yVg2f01HAr1PFk6BGE2IwSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZLlWre%2BZh1qOC4KuKtwDiCOYqkcGvVAX6MR1%2FxbDEoLiKY5Kp0W6ZopSQiqcMlWGZiydx9tvx90pMajTd%2Bvor8ouBecWeCMQ5F2uCdp%2BCdQVNsxZQXI2I8Nl3CSy9Vxai7HKPIcGH6qvPFFotV97YaCaMJndrNkbl5QywNZ14PJ0U%2FH%2FOMAiNWFwTi6vVI%2BmfwGOcLt41WX42ydcbD%2FlL3gYuL25FF%2BTscFWXVSV2gSH3TG6booZ1LQhfEXFq5mRiNvNgT35e8bkWs794cF2p04FlQAgVCsPU9OZZZOVHZ8UfK6lvKPvNzdjhTv6mFCPhiLiRMrph9%2FkRWFAk22EGL7VC1b6ys4m0xlDIW9OPJoZhroiyRQgnPLQTNF5bW1CnHkR4U53fJUJ%2FtX%2FcLCUprH%2BNfKM1xbW4rFQ5X7mjThfok2da9jeik5HaLiiJl1TbZpeZI6MXAOb9h7lCo1%2Bqevda5y%2FmwYOjE8tnW9WrGaTJJhGXwKwmRByudYvFxZ8KlRuLrdkdyQ6O%2BFPBasySNWAhu%2FMfy0KfZAEW%2FajvEzFe3zL6Yl4s5FmrSLTBaG6rZKcqp6WL1sJFb0z4UjkFmTwnAz%2Fpf3CVKRTb8E8z7HGr%2Bl8sRHrrn7EoB1xWil7OGONNZRkz4oDXs8wo5WnwQY6pgHWB1l4phZUizYf%2BSbCh%2BtLp2HqDErAJdExuIFodnm954pUZOtS9yaxyRbBqN1TvWZGt3a%2FefmkrfGa4JbPORId%2BZNuwHs45yNTb%2FA9SNk22LVeNH0F7ZNLh0ZlQ1eMVpCBU50pC5No%2FdoLlqsG%2B2vCaWTu%2FaUsV%2FCOCjC8w6ldFMYA05mJYYpGrsQmvy%2BWwlzUGE2eyCJHCggxbXYqrRkZ7xSmt6TF&X-Amz-Signature=dc439b7d2f153a2e528c367b0919dd8bd2f1400ad7ac3c58d9a505930817bbcf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNN6OUA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS9hRCdVYLdfOOUrQYXmacQ7wJEKcPZ4Q3tl42s5crtgIhAMg2%2F08QkdrJk5IUwtiD6Cm9FIOWdQRy1sNUCbmwVT2tKv8DCHYQABoMNjM3NDIzMTgzODA1IgyghhWSd4KiQLZd9Fcq3APTJ7%2FTj6H76OvOo5pqQKqD0sAq1G0vt7bYFvOiS0plSzF2KBRC4r2T7D2kkTG8pJlwvgou7EPa6PZsAsAzyy9h%2BvPJk1foTX1aDuNtJnJvgMhYKHjsEDH2oxQsHKRZJ7%2BnoYm8lV1IivhVbAN6SBkt75ueKJz6xpTFt5091f9JY%2BPCy8KIepobOu4WoGGXhwaZZFwZjhixLdjpPXM%2Bct48hHFiflj4e1GqgkBzfv4OqQISyXAPCjBC9Zmf%2FUa5tiKYXqHMwPvAn2miQjNSJ8z152vbCypbtNi%2B6wRWU28CtHpf1BuAl8%2BEM5Ufo3z1paqR9LDCfbIVzTGoW%2FLZwwk%2FSz4DaOAWo4JewEUiP1ge9qeGgEqVm%2B7v5Ihn7%2B1xoBulUv2KFSDUhElw6jUEC5rlATu9kFyYIupYwKwHSNOU48J5rUkxo%2FfDhgFuhKmYFTz%2BjUcksvuKPu6K%2Fj%2BpSP3D5SZmn3rdYw1XPvc58d%2F77FSM044BAngBIiO3FAoOiw%2BX8v8PXhigt89jFfc1XGVEUVvcz0yYC3GWcq61O3mHuJlpVXJ4shkWx40RAZYbPVUCsxd%2BGSRIeqWm%2BozsA0ra%2Fs4efPRAVWM73XKoczmlo%2Fu0UoEeeKrXPFbInzC5r6fBBjqkAbkxNemOnGFZcR64Ysd4e1sOVrw1%2Bqj4BjbtiedYCvQ5HFKCkwv%2FApsOWi31hK5ug3ow50H1CAsLygV%2FAzWXy83WqCfqaUfkR9qfZ2rSaEwFT8%2F396C4tXDnUgjWwrfygw0S18HG2OORmJIZiFkR3wiPkxYiIHh9z82MgxPH97hhYGg9GxMEYrncQq0RMY0C3FN92JizDIo8oOW34nVwe9s72bn6&X-Amz-Signature=7cb208fca72ab438610e672157eea51cb3697b0bd957e62ad059bce310513f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
