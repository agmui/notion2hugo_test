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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBTSWK2%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIC1E7cwk1Qw3Th7UQ07am8jylbNE3SLO0gmPUpx7LMmAAiEA1hWkGBiyHjSfWlSzrOnWCO%2FZ2ZFvPX2L0FDKBozs5Ksq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDI4duzwhnA1r6CS%2B5yrcA1%2FPTJa3f4X5JikIzGNbiezKnAEVXU3njJ6ibbWVOM0G7SfiRLom1IJGG7urlGnuFJwX2fQrhmaveRC48%2FPSjQlH%2BESLtYdiH0kPzuy9gzOs3EE3ygnpHdoucABuBlnLFGVwVGkwwMs7RAK3Pfxo3mC6%2BQAxXJYgSX74sTpcFkHkEIixmIeDSa3M4prkLqEdoYh91PJEuUAeVQlZCU243FiOtSK7UG7erHlwiqTktHJlk7tOGa0aIVRl1Pl%2F83MyrcFlw6CAo%2BgO7LRM%2BcuSrh4%2FTLm5qMBGODjXq9SYnqRmo%2BNqKG51lfU%2Ff4phh9EKUNCqKqCaKR8xgr0O1bpGXBjtLVflGss7D%2FnmBvlvlI0nZtchd%2FYq5LzqyHsegiS56WK32QOLLh%2ByPWVGTcSPxOw1EjDVgCYy1nhCASYJGYaRHHyB7RqCXI4zBAbwe%2FV7QBAIVxyb%2B9%2F7vZpprQNKOc6dViSh7ckY9l52ZwjXehrEAG4Z6uu7eESFawo%2BhY0iYEbRdM6blWZdkTOD6maKiWDrD%2FbILO4F6%2FYb8rp7PX5R7liZHJepa273BxVxPq7%2Ftn64l0PdTXbJehUOoLvkeojVcgy8veLNhJ3sr4OOIQh%2Fqb1QS5Rl8sVUq99HMLHht74GOqUB43WHB9GjCZ3GFNKRw1ZiUFiUG6oT4DPptR2DKsj0vdNGnkLOndl8N%2Fnx0Fo8ZEofbk%2Bt3Yfh%2BtBlOODKSzClOGVDakKvy8ZxSuZJpQxz3dOwEC3MnXljX9z%2FHGHpvZs20gyjezeZg7zSEf2w1u8u6VVafBT8bwc%2FtKeYO1qFiH%2FNgapZkYVDmIsrsf2OsM%2BLs2tm9ZJwXkNAUPM%2BB4dJNj6Cx33%2B&X-Amz-Signature=585e95aea16c147049f2990dc6dcc0e7471fa4f81732e41277acd71c344cf67a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKGVMXV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDsnSLZ1zCFG3jQGpOnh8Xn0liBKfzDLgpL9AD%2BYeAgMAIgGNx90SLpwklE%2Bjr%2B7hLYdd8h1WP5nLTJb885eab9f%2Bwq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC%2FSobJCZz80NWE9pCrcA0ncvEWXIkAtcUQhZAet5AA58BBV2KaD469nqF0kbjC41HUv6eIiVLlsqpAPI65WjygUV8s886cDakPcYH%2BaJlRrCN%2FEvCyjOHmDreixpVOONqYLLVkR%2FY8c%2BucW%2BxaCrW6W862iKtfVwOZXj5yPR53mhRNOWZzb6VxDafJOTkGk0yTInstJTpWpPXGGWMpz6e13JpiLjOO33CsFgm3vw1n1SWLydEfsHxCT%2BvnFmSXLDwVUsoTq%2F4pivI4H2dQebpGpjO6v1OHDgddOqsv7311ogPnr24avQi%2BI3u5Lr%2BBLfYvMqdf9Zm9kuH8vhT8HMHHlRaikOPFJpQdiE1C9N8qXxh%2BG%2BG3gBr2ntcZerqcyDN%2Bo6izAWadkCBOTkegI3fnzLwVaYJkiakOwRwAYxpfIS6S%2FCrD1kRp0yWbNc3Ahp0vE5kH1JOkFnYZ5JWKZPhgoa2Uxk3HaTDFiI3wDGbEYSzqOxa9WKnp93Ab8xguu9RoDT8u8Qp%2FPYLlnkbalpJPnvveL7FunyvbjoazkQmOhr%2Bv6OD1tk2FQT8h1SBLL4cpMHsj50h0tdg77Ch%2B10o1QuN415sLT9cPmGhadhPlWkE0UvSvs7TBqbxHn7GKjhu86SU43d9h044FpMNLgt74GOqUBZpDvjZVou%2BgdFa3iLS1AAgqDwoFvrjDb1%2BzMMsPNPDHzbmBDoqEWZNXBwuIWqJVxOrFpSo1hvc2utj%2BG%2FUUOqcAGoiWc2MZkEojJQD9iAgQjk6SjMQr4vTaJjTFt19Ji8btK8LiTjYZEwQtZunxxaE%2F3zfADLI4EJ%2BC9kFxBzbiUHaBnxZjlfN3Z1I0pJKtUVfMZ0Ewh%2FKMGXV%2BbUa0zeOt3S0%2B2&X-Amz-Signature=be7f81d3bb28dd274896fb70f1c969b999739ba4ea961866f0172ef6c72fde76&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
