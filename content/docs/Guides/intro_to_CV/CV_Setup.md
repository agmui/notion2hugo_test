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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SCB2TKP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD70wi%2FPpFiEBMEmduS2WO3Me4CLR5gtUs6qkDT0eXwhQIhALJk1TkCIUi4k0vCCGDcDMhJwKRvhioccPXbakT7ngweKv8DCHIQABoMNjM3NDIzMTgzODA1Igz4mIcAKyANk57FUTsq3AMVxSrdfYxCX%2FM%2BArPv1tWfQd%2Fq3pi3eA3LwTWpydJxdBfZL3XaRbJ7uFIm36OWcXTXJSBIlmzcKldlklmsAUZT01jA4YU%2BfQhK4fanOiMiS45Ri975VrDyeQ4L3%2BF36ehVwnwALt5MwKaFcFu0qi%2BjBDOyZf50987rk3Y%2BBA04J%2BI%2Fv6W2u7EltPgfKJ1LhoW7cAWYEk4U%2F2Hgmy%2F%2B6kbTuRne9aC5%2Bc4LonvNjJJQ%2B4SuxN83tqLGTGM1azuZg7fEGwcMBUxn3Jhrov5UGYbaH0%2Fl7At%2B6ZllT0mf%2F1Sd6pZhE%2FmO2SzBOTiJxSKKqFPAI3t3mLCfdqTRh07rEpwsYPkHnkWXiLKhpSAMJUr2NlGC%2Fuu2WZBop8UsnEoq%2F3C%2BAxjFwnzJYa8s%2FhyHnHAJ2A%2B2m4NjAZGaDZ8h2rvwK42iA%2BH%2Fm9VeALEUbcyd5r2QlZdfDE5t5sXjKpv0h3ix%2BVAHwNf86D4GqlvO3ZoNYi1EPkqnpK9OujMW5HWuY4TFhJuHE%2FvxMKWMsg2XMZDPwDbgHaNlnh1uksFywHaAah9VlQaQArZWrVGQstIb4L%2BKS%2F66Gn96%2FRz1FISRS6FsWj11tVG2Sp66%2BA4Ma5p%2FdPxfiIShLPhGY0h1KDCN0oC%2BBjqkAaxBOGfswYr1xh3k%2BRx0K2yt3Z0TFSBpJIUaQw3TBqAdX9Z6DXKpOGZHrhMbmwFPhZWxt%2B6ytTEGGst26t1diqjWz4Y5DUvQ4nJjVuLixfzE4wJKg5OUXAtt%2FWHYOImcmtMQKjoCpbwxU1cQthtXsfdDBqhibaGBpIoV%2Bz3UIDrnRIiyhkWaJykKllREr9KawND1mFwDiFSeotvg%2FbUY5Q%2Bo%2B49s&X-Amz-Signature=dd36f2dbf800fc91971448a5863059b3aba3ebcb59cda95c0736920bcf1da2e3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4F7MS2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIExQynLrt6VdqksxxBREtAUFV3DVqM7XESlYmb6KAvH%2FAiEA8gIH4o3%2BE%2BUH39SwvcjQ7SDh1hVxnmWiQOMYuibrbvEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEgw%2BPX27ELfrXObgircA%2FeMOwl4q7Ep1E0PcTd6gGdFUiJtBEy4cJT10on2LPO7Qnf%2BOwde6OwhKuwpNvKGBCWfYqseu5oaJkTu0k%2B0ldXFwz3AwtnggXCwb2FhZr8LuGRNpNHzG1jiw77xnpQfgc%2BRnVVnk8vFQwTKaBF4mLmRnxgvyexetIWpcOsrxZVaoKqj4WbiDjo%2FQ9elCW8%2B3TSQqUHpUdk10UkH7eRZqBZl2LLlKdjAPturBRgN6%2FO2cDq%2BLgomxTaU7p7qAiIa%2Fu8vNGm6TCt5yUlCWfCLv%2FxATLRYbabgaQkzlVpfGLItfYOTAY8XNaazn96Pi6dnw5nrZvmH5lUWnLGYi1tGgad2nunkjDEvxbQBGUx%2FjW9XYzBd42luw3BGz2e8vDz6Ef%2F0H1pQBe5LnxSzalPz8Ay3R9nVIFLyUd58z3pAh%2FueLrjVMaQYNoVnVugzCfQR2cYdaI1%2FKRHGZu6RWfED%2B3IVci3iUQKaZ8UGxQfe51b6h%2FfF8lJBJwJ5v%2BzZwXrSR3%2Bv1gt3VlNbvo4whteXktiKeQewtFIA%2FEcy95FAVwuu7GLrJvK0DZEQEPgVV%2FjOGn8XoTGeQ860QpB2zQsCAywXhogxX3Nj3UYsQ7pc9riyT%2FCLE9Q6uWau9Y7GMLHQgL4GOqUBKxLM4ceZLou5rl%2BDRBgiEN5AeaF0iSbMYwb3bIBtSbujsrwlQfyCrxJ8sww%2BR4AL7c58P6IeW6sXR9QK6Km2aXPjr2nOby%2Be6NN5Nj%2FN6327vQnPGokXmZJIQGn3M1ZGr8EGmAJSdPikn%2FDPp%2Ff95TZyveOBJb9r6ajGeVSBO25hEZNgSMqNu7luGVYPIGSqljrIWk53M4A0kywYvM5k0Cjn%2Bnz8&X-Amz-Signature=a698832359e9ee073cd77c89d66291ce46a42c5b10f32fc3bcdce3de0f10d91a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
