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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QT4PBFC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD01kVAAUUh1Peq6yoM0lIjy%2BmcwQb2HHinengSS1wjzAIgMJQEn09toJdOaB29p%2FePrCZ%2FGdaIGEvD9Z4qrKcAXhkqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG5q191zq3kXq3RTircA%2FmhcueBn7%2BiKLdYQkp63N0nn%2FkIIdbgAUjlUmRPRfvcgW8kyewBsZoEwfKqQC2OdCOciuWmcwd3Pe5EOmIle08ybWnQKjjIkXR7uNi16EiEWYz8bR57u9TvtWmgYvvqIKLE2N0BiOXIb1gk%2B78f5BINkhA156HmaBvcNKc1OKWqY%2BJVTeuIg7PJn1rs4B0tP7VFs7LefDK282bHryF0%2BocJfxcjVjyuhiUqYTJKHMTVfbXIzkpDNCPFaYo%2Bj88KEDDFagyt536aGHg%2F%2BYXwMcVBAw46qX4EjGlHJX3QnmLLpgqNs7rIgWt2hjxNi0TAlVMk6M1KipoJLgXKql1t%2FpdfkQ%2BRvNPj06BYHPmQ18EloN9DpMkFJ5pwk4cwCbowOwtZxsJhCQLItB4lROpiGqpJPg2%2BnOcVTGDf24C85k8o3vf8qZx64BMW%2BHh%2Bnm7Xmw1jZDlAblQrXinj%2BG7cnYoocWCEsuZniqDqel8NQJes2C%2FjyVh5d37dG3FRoxzamwANTc7RvMr0L6jl4Moe7mXyDFsWYHpQPFd3XpCIddngD0i6x%2BYFul3lrAkqo5kzpFB30UMLOFLdvjI5gpQiHZmJ%2BvdazQwHf462A9T%2B9DprBppeeQeBMa5R7mDOMMWiqsQGOqUBfNsD0BNh%2FlsW9z7iqt8piZgQIOQLFQLBWtOdOtsu5yqM%2FJG1oz8czI3cHt11cyHY8Qx9snRvlBWZqomUokJjjgZLIuPQtmWK99jDZ2ecnCz4xFDwdqggphu2QFZHDTbIQgedNHdSVGGt2ozwAZVjZarMc8UrABUBRFuGUeQkOT1MIg2jJYofOwhfVP8ElVhl%2FdzkPPxSoCvoXdSpShOJ55oIOijg&X-Amz-Signature=e5f1a3c091724ce607aac976bdd86485d0643a4bdd6a18fa2461bb81c65a7b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQF6SII%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FRgDvHLuACW3mSYbD8nTjFNHeHycHrzHDZDUe5TpkbAIgGf200jd6D3cVdM5OXQzKq8hNRvm1WgwXsBj2%2FtOWwKMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvb0xYt%2FwugAGO1qircA87msgfRQdtA2SPNy7eaTTmUEgSWhfBYZ7p5JtPemm2HaTdWC1GWn3%2Fj62pqYpm30YUe%2FKTJBF%2FrSzY0IsLKZ1UvBsEsHlvN8SoPEQCTUxpsL3ydcpstfFgvD96cv1grOgZWzAOJhk6ySCsh%2B%2BdhHPFRhUU9oUWcG7Huf3snLO%2BPPfonWW69RKMTIUrxMRoc%2BXUj5ufzWa1kgWMWgdFKDMYmupW5Z%2Fuakg1gY3VNlbxJlIqR6pRiNPef7IxhWd%2BAdaMjPp2GNlN%2Fx%2FkTVEr2k2rGGtDSVKEg8fuPDzu%2FEyQ8jGe9U0AWvdVfkRYfAE%2F%2BKRwchefQzovIqcuDRR6YIhCbtj8Ldv5LwpnJL71ll%2BnwoUmXal9wkVAPjyIshnyIG1wJIwnNwim4heg1YpuIL%2B0pGXQboZs3ImQsMzSWN41iTQIVvt4QM%2BYdPc4IdNQTRLqgNX8vGi74VDnRrq%2Fk5Ts2CTDQeQYPu9didNGzMbYsViAwkPvvauJq%2FUbGZk55OXzXqJVeURPSKJ2rv15BGOqZxyGsR2U7mBrbUPK6E%2B6OnQ6VnYQT6TM9GZwaeyg7vwTe5U%2B4ZR3d%2FTcj1wbtstkFuwORs5FR6B0PRFH1y%2BPMRE6sz8XYdJ%2BdmKewMK6lqsQGOqUBBVjEUYRatkeEeeYeVfnPg5o60HkWWItVyuTxYjrTmSBZMSiudS1e78UfvTJFffV6KDASZ94WBIrttC6PTAsh5EEmI5KwRak%2BTPThp9Xp03SstDJxm8szhXtP82d%2F%2FYGAUoCMEoufWX7CROHJPbyzKlYPG%2BnUF2K3Q%2BV%2FnJWq7ZRfKIT5q7FhqX1lknS6XQRA714apefdFESA6s5SAxfJYROMO50p&X-Amz-Signature=2d6cc251401a24bc057b3eca53753d78595f8d595318c7340b0f188d342da64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
