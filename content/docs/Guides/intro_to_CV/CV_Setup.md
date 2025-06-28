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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOWL7FVO%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2MCuuD6Ruzf6R19o9t3nOaT0ocaXor89rKxML00zn%2FAiBiDQjhyV4LwtuGkvUQKFwKceYuU95fj5P9XXVK8WsWrSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsuJ6kWwY65vlpuUfKtwDA4T25zIti5U06AYiC2LrCPxJzXbRcelKr9P9kiEZ33ASiBvEG4hjiiIm51Pc6%2FiHQN2zHzR2J9CnQLF%2FdqSusI1kMPpd%2BWH7Gz4yeleez2ZQYil%2FuypwZx9YIzg6hmBMEdgg5fxPz3UVIuYrU6W1mn18GodMa5q4ZTV%2B9c2zRt5FpNP8CASgyTEobzq9z7fgwUrm4NsmUvc%2Bis0VIDjRVdGxXYJjtVJDyLSngVM2RdF0SxgoMCihUWHk9p3duLATHYeK%2B8QJx4mCSTEUsp9cmgwZ5M1GFGVQx7NkkP%2BqMthEl4ApTHPz7WD4Ihfdi9qq04INMYd4N7zF3QcrfUXDLBdUK3fcPWKnSkRogNmLSPnvRX6RQFPxUsrx2Pv5Azz2KjpBjXbltnNpW1fd8bVYU%2BP9nJ8YeaQDRYmndSJvJJS8HhGUuUHyTDTuR9ZMflgtrB0Ker%2FAs64n%2FFE66l4bjPOSwB8m%2BIa%2BcE1QbKUMrmMVRd0feI%2FioS96dDHiq27vs2N8kxbAdsN6yp859han3tbtgCR7PshYBKHSKw2tZHnILqM%2BlzScCJb8KJ%2F2ITvCudbcmIToC2pkyG7jl5xnFss%2F9pjqS7M1DwAT3S5qjDup%2B%2BzYUsC4VJ%2BikuAwuNf8wgY6pgE0V9cwB%2FQXeReAtlhM7LRnlJ1LwsulL5Oc4scQZ579e0LyY8CdtxtZMYgUUzRwaU54%2FFZYBbLHA9rHuzZZN%2BEj1nRmTGi3LxMGsaCtMIgOO%2BrzkjmplbGgVWNV0b4XgahR5V040BuNkhWUgR1PzDDgWGr8JOWQG9FguxzSC3TxoZRWFpcSoHG9%2F9JnlbdfAQl7%2F7siOnlUKBLZQ0qWCQQjJoaYPFa3&X-Amz-Signature=fb5f9f3e767f06d0e4dd6beef0f8af45f6d1f77d7b34d82add68422bc5649e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TASGRVA6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHk%2FJk%2FicIKdFL%2FMmb8XlrifQFjrHeiPSLz7ZQdXPMeAiEAyNT36A1RBKC3EKQDk%2BswLyiHNN3IdDQKsQPWZet13SYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCkSlp2HAkrLbHdYSrcA56QWT5g%2B4gHCUWkZQecRf0vAGmRAwqCKCbPMYWBrgu7DrJRC2tQJnXCxQcWY2igEyo%2B2xWl0JY%2Bd9sGEoG4DJTQqJ9OFExcdimu%2FNYAIZBmWiCc2sGBt51PJIKnm8F8eqMhl88IaHWaTFG3T3RPBuBZ2AmWJ4llZ9HjqqjmeeH01ttYFLgCjLQJ3o5WyOTXGpqLHJEnZuTdLE3%2BBAKkmZaykwKV%2FyTpqFnxQ%2F%2FmVEXSZDMA0OxpOW%2FVxGs0MyTlZrqr3AeW0zOUbmycRWIWbG0IOecBN30%2FwzKJS9Wwtvw8UcfY771vEGBLu7ZkHfP0sOSYCEfRyaTjwH%2FRGO2X4onDqcL%2B5uW6bVGOZ05PjNZCnRtN3hF7kL894G0e%2BSSGGvq2YplDMLOn9ATUyoJzXViZr8mYW4FNSpy2%2FkoIG%2BAmKUky7vJVffYwF%2BN4flskCdKn5U8WpWMtd4y%2FQnhu0reC4Ztr9MZQWee1pI2rS9%2B%2BvKsGmd57oZRQHlI8AJEijAhcrCSFVJl6OE0w6OenGDeB9rZCsmGwb5Z9BcvlEgqDx0IGU%2B62ZlRwoikzuRNUAkyPKlRpejN3BG%2BfauZyrLnk4yRh%2BgFrbRw5a98EgMK82ukKSI7yGlJSVfHhMLPX%2FMIGOqUBvcIIGkzzqvh3RGQ5maohDsinIWOfb0NmskJvRLi8Q94Klq71Z9WYAlpxBi1SSPVhT1E7cYp6%2FpMT4S0YAdi1PZ%2FiumKwkau%2FIxHP%2FzweT59uk0mOPrkl2jNp6qrWY8PnaTosFD3v05LbMZoEbTQJyGtStRpcHFkS0B8GGqXFPd%2FrXhqCfsld5cbcj8iZF6TsdUnpGDqWnnBvD4gFI7KYjrZtG7yr&X-Amz-Signature=122d8cbf15a507ad92d1cd9c9249084c7151cf98482556ec9bf02e4037213a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
