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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQFRXXX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDeeOjPOndTdu%2B1t2MATG80ca6%2BeUQTyUN1tX4N8U5q7gIgPGs%2FnGQo6lML9Cm48itsjRYFjKiX2tvSFliPtjmrUuQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNqdB3F5IvqMMbrapSrcA%2FSP0Tl47nz917nrNUdCdNcpJMIrGe1aO%2FKJimo2RQRAvhgSZ0L8Sg5SSh%2BXzBqnxUDwQT5caC5zXSe%2BF%2BqibS%2BRMxCFzWIg6fPQtuaAx86770ph4NhBGavY%2Frzv4gGfjQ%2Be3kjaW6yk01VPZnnavrTPUZChlR2reb5QsIzi8Jl82KXxpfqOXUS2ESvt46Tog9XRvxCzQ41i46eEUXUPX0W2H5vg7KrhQ8OOXvQmErJa9adotSMkkwLrQDvI8f86F4ANr9PP4dt4xCkzOV0x2ZNjUlR5fXCLvNyhhdHVJcsNy1MgQwvfOCv3b01Upyfv%2B%2FeqNARrodGM8EiMSC9%2Fi8pPgcNu6rymDhHW33e7wecobkaTIk5bybMnfJCNQeF3RuBi6ONkSI9CVc22m17Vquwmp6G6jBtFkm2k6f17u4c4%2FmI%2FTWK6%2FcNHTr%2BGysv7ENDSCaJ9m7yI%2B0iUBHEQlUV26exwf84RRrmVcypQD6ZyFuFD32%2F47Vpv6%2B94a%2F4uwD0zElPiYldVhRq%2Fw7gTXKDM6m82WlFF5owmXL9K3xE1X0S0dRiMM37DtJRUtEWHsqKoJysTr1AU6bmJqfgG%2BkDhNXfQmqq8dHcRG2M%2BixpE0JsTpjhTHAO4eLsFMOH96L4GOqUB%2FKJCP9xrLYSR2NinR6J%2Fip5uNiuG8cugSVz1yOyI%2BBVLCbKNe%2FqhBDdNUiqdPLtao3i3YFBo5con8MBa3XV6aT%2BdBsNZ7%2FaD%2FcgSECsZPzq6E5AvxULhxsgA8TacK%2B0HgrbTkFrBkxgG7fs8F5NYOtE0dJ9AyRIyGBMbtQhbRvY%2ByFm7BmLI3Moo7RklX5fvOzY34SKqC8vwf%2FTpOtBsBHEDY07P&X-Amz-Signature=6b70f83640035eefa485a493e6b3799402b317bc1a25042d2979d2a7d463f484&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSG4QRS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIBxgd0azVeGLeINNOlVvzqBfkaF61L4vCf8IHMxzVVeOAiB5bmObG7pBZsiR2M0PC%2BjwE%2BegWpLtVmyX%2FP98M9nSCCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMu3r%2FXeOmh7azua0WKtwD4KlpoDKVybNI6Kx%2FSv%2FGg5mc%2FVdezUIH5FTk55BC1N9Q0ffR%2FJuk12JH8Yyd2xi3XGxje2GUXa0CUKehcCq3aIhupdtE5QjPL0KqbMT5Tevkg8HxM9gmndmcv8zjgLsl0kPBXpyRicBB6IVZgYt4gtCLUsoAVhClEcoDo6FRY4MUS81i9ForeebmpIK3%2B250jwKt9cWm6xbSwQ6KvSnrgKPrkN71fpBed%2BVVArnH2WjAPzHZVkfd%2BNTSZY5MHAGn6Iw2vuBEPiyE9Taj%2B%2BZif0qKUsblLOWU46y7ccVWcWkdka4ONVr%2FeOSnNyBOHI%2BBFII4sWfCavI23bzAMLxCTk9Uh7UZo8gnvquoRQJUI3GWrJTWDxVOgH3NZfRlIR%2BnyZoQ6wCAVtRGPFQjxElBSIUpu5fK%2FQfSgg7KJq80YOGowQ%2FGgyQwiqxNeeEXVweehPnarubbAlEASho4epTk4C8ifHbqbPObblBFEJ5DbxOwqxzAHTswiuvl5B46w55ebglHKizjMmMwumc25rvsjaFVZtROfU5uag6tgkWV7KM7cdp9U8yjqiOBrmFw7e9SJbYAEfYfFDCOagmIPQPwwdDnA5lttJShKMnBv83EmxeiivE%2Fxoy4zelq9Ckwmf7ovgY6pgFJBnwinEvfHGu2hY9Z5Umf%2FE3R1DN%2BQjm%2Ff6gf5n8Ez5Aak%2Fi88OvorrZhxnNEVL6SFI4b6AYpZKV3T%2BVMybf%2Bqf%2BG3Dq8uGwS%2FJnG%2BS%2FVOEC1Eg44gBo3SyokFW0O72iGHqwLf6T43NanH9JLc4GK%2FxDHhbnr3kFNN9o2vSqAuqqNjXMYwm3Qahh2VPV7u4Euwi3FxgCREIxCmKLpKnHJVzXeUgwG&X-Amz-Signature=6a44b4b110ee175e23f8ecb28079093d193bf07a7979a58d295e64543f741ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
