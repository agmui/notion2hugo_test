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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBXBSWO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICeJXTjIOLtf8SHkP2uvpHJa%2Bk59DO15u6kx4JcWMvcKAiEAqRCm%2B9HVncTzHiw4rHvUg1E1YDUk%2BaeRKG%2B0vQyIsWUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJaWLHO0lsC%2FxXr4CrcAzhSnrQef4foGHsj2aWTXDwAIF%2Ff1e4DAGHCfVnML%2BDaIz3hbuE3JjvFpUepF4hnwKcqqRKSnhe0YnYv9EJeeZVnQ8kR8ZNwMbJVmEaB1NzgYcOm20GAGKDhi9NLAYEQcty6n%2FDU1UZozkpBIROPGgv4woLNcxKyHM1NzsTiKJalsQmEy6NpNIzJVx8bnDjbAhnFzBUWLw4Xeh4GcmbiB%2B6RkXUee1gtJ71%2FDdSooeQyDcqUrXnbSOfdoA3wluf0fucsq9IePZwt3wJv8jut1GSsHIx64eZLNJ66DaNhsU20BZr7g4afKH8%2Bp0Fp5Pxdo79DGUVB%2FYFH7IYwgUAxFadpULHbAU1P%2FI%2F8Fatxf9blaryvoOe2Vx2nAUHHKOl40948nOitn5SRhvLVPpN6obbQBMsgI3B6NdjnXkVwPw6qjs%2FKYaKZTNwan668Xh9m21r8I5OMG04TjpOQtnZBi0JBryqKw%2FNwX7tv%2BXq5XV9yuEGwWhFPFbPnGr2mkl2HtsFUgBrEPcOQvLivTsaTbmKbjRzXqdsh2bng2eJeHJxqOmP4N7IdV4voZ7d7ciJIW7enIrNHmDMG3fVd%2BJFfZjszRLpGn4CkMk2nzM93f2PSgWYXbGOSusYfdY2LMNKZ6sMGOqUB3Whvcy0TQuQZgCDN5946SY%2BFwX1Ri2Abd3u6MgvAr6zMKdbYDavphDw5garEc5mimhihdvnEiaGAMJ3kES6wZm39X5yUTlw3GAnA7jXXgtMnA36%2Bq1hIbAQtw5%2FGyZxmXqnRDI6UGfBxKPAwuVszO4B7%2Fpr7On%2FiWQEsg012%2FaMX6KIR5g7I%2Fy4PWO%2F5o%2BmnfRlMYl06%2Bi08WS1NcnRe9MUntdzL&X-Amz-Signature=add66190564b659e021d6a6678464e1d9710bb2656b37b65449edf3cd6bf021d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626OWTVL6%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDhWJBHf2gdEATdjYSSiexekBNnahXZWOpP6Mv0NoeuAAiEA1qZYiBmWK5ZNUlNqYKO0Zs7JCcCrLYs1%2BgDbNszLNBUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd7qUp9T%2B2Ldudg%2BircA17y3oGaKxbh7t0CjVXScXH5CybVPGRz7uIBKIv42RVeceAOHILq5N19FhHwayuXrHRHVHZ5DM84TDjbVpGzLuHqSgGFu425m9LXFQRsuvCya2Vlf9QdLMk2PP0rspPcMXbNKGmOcWdGflHvjEe%2F%2FOb%2F%2FUTfSRSP%2BGi9B%2FNwQLC973OUmksmPUmkIqS6c4hDqkjcc4dwz3m2XaZ2jVSs%2Bh2uqr8yW1qB7LmQAn9Q2q2qcOnbFxDiCZWvNGTJjSIYzEbA2jllP9PJqMURkTQS9XR2SWngl1JK8sexE8mCizFgj2MquWh5BkZWwBSamgUy0GYPBfFVRDrVH8uqfZKjRsgaUAZxgoZ4tSRx7ixx5kuhVTLIbof0JwP6TVcw3GQw%2FqUQu%2B%2B8hWrDpzqoX3yF1Uy%2BxrFco6VWda1gh8F8bg9UxCxfZDH0sN6uYQYy5Pg76UE6JSAfBPYOx5MbnUWtMhrQI9Q%2Bp3meTvjIgreUzXPbmqf7RaEe%2BRMyz489fdZD5gN4vp6ffx6siVqu9F59xCZ5NdIPo%2B%2BIMZ6GZJ5fRlohfk%2Fn%2FFwrc9XsaQIc2EMv%2FygTFez8KzP1AX76EOqQQo0U1BGumcvPgu0UmqoYVIFrmpKF7rsLm6K4Kgf6MN2Z6sMGOqUBmE2AnmR7%2FMY0mFWit44huXYVFGgoqju2YZ5LkNMEqo%2BT0AXZC9%2BK9JPMu3E2qmxxKRlGvBI3NY8a3ZyMu3CEYM4SFuEDwP63P8OOAiOKMKbvksgtjEvTfeIB3zcUuRBunjYaTVmeWQUH3dq%2Fwf3BC1e%2Ba0yU6lkDrwWTQqeVBkkmxSzmdiSv67Uk0pyp6nondj4QmUi5v3d14h%2FJvjfekf3W95WP&X-Amz-Signature=f58eaef407650af77f0d6d4edef51afe721e283c9689eee118ef80f50d96bca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
