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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624CXXDVH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGW9jro3uXGThdNevx711uQkswyZnGnB0P6WNQaQ2a6bAiBE0hMFS4ZpUMrM8%2F9lbcK7Q01pZGLR0ujtMGKnYUPUbSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMK31XcNv%2BRzZziL3ZKtwD60H%2BA%2BKGliv4sN9mhsyydL0CPI2366Ax9eb%2FLFaDw6V8acUrBCQLvtX1LXQf1Xfc7rb64skg2145tmDE4xPoJE16k3FFv1RoREbzxZUrQ1gMFUERYjWgIRkSPgKvX1n8TxrRQH5wYc%2FEIOeXWiWcgdUcrCq5EtsVjXYznuUyQegcSWoAL3pBaNHMhnc9myOOUWdjmxxWSoLeunw0tsd1xj5tGLpk0%2BWcSJ7KE77AKHuyPA%2F0RcRPNsBPDTGHEybwNdPB556lC2lk2h2MncOijSUOayhMlWhKGzV3FL5HdtBHYCPu%2FUz4PJB1R376FVOslxk%2FdMeffIFlPEpyfSame7zTbPnuO8a9XvmusDHQJJ3eqJ70RneDDN9QcOvp7XQ0n3g0bDVFl%2FcRnhWyJn7PEVjsVkx4q3Yti8VI1b3SDTphgtuwKxYazjpEBRbxFoQVGpAJWAgv8CzDQaKR2%2B69Bu7Pknu1StRgSCbxI3Wk8jAws%2FXq9ES312fgMIvAIzJ6sPI2m5CRxyQpAlAW6ZadWC5hn5syuwQqrkjg4FRcDc%2BIaQlFbAIjENlHc56V6uOYkiv8KKrC0yFfdkVKWOmoxhWzcVY6I3hO%2FdbQtO0%2FItgdtX1uLDSvOWnncXcwlp7rvQY6pgEhvN7w2ZExhuid1t8X84Z7LUmLHiOzetKZuX6aU0brPqLqq9KrNZnZV%2BDVjygYf2Ofo0905UtdL%2F3tbNmyOs5E51PUj3iSwMUThEJFWZaUDGR7TWesnZuIasRKWPhJM8Bg0eENUo7zHZE71RJZ38B0ZCT1lb9k16dFiAZB2JDmJr0fzvqZ9bopX86HKSO8sQ5oIYm5Nf4SfUCc03KdGvWTZcemF530&X-Amz-Signature=b437d6ae6b7b18c3b631009457f18a08780b6d792c0063efbe519bab9051c465&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HB5CIP5%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCx3l3vTAJ0%2BMV46%2FSBTWyFcXusuTZyblrkro4yx3mt1gIgaK5MnNO66vvc60ijJEP1K9L6y2G8%2FepIVdZLwr1GB1Iq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDfbLYVR8zOqkHC%2FwCrcA8R0wCgdOMh1iH1q1t73gQa%2Bvy6V%2FzjomEUR61FiJVXqGhz8d45h3LuXULvkLboPdXDiliZ64fL2E4BccpvhNqjorDA13Oe5VPyl6cvrUQ%2Fd%2BWS%2FFI6fpzJv5%2F9DfY50OWqMIYgmE9uf8G%2FZw1GSs%2BzbYsdXWRVtVtTMztK6nSEFL%2FB3HXnedlmi0sjpo9Pluit643sQbg4wDXS%2FywClw9NDWJNL8EdxVG%2F3tCfaoaIbqcsKb0kdPJ6%2BbrcoJZsH%2FVOre9AocxYpMQNJ3HSXdCsjsOQk4qODP4qpkY5Tr8eQ54NJDDnoCzuzqm7m5UExw9FaKKbHpqIQojEoGj%2FRfGFA4C1sWoWWrP4jbRXFdIPlPer3s7m0CnIOcEuDi2IfKxvI75liUYOJFT9GeNpMH6MhIC05ataVpiIe5eZz6YDzucVkMG2GF4XcWQrz9ATRBiBnlvPbYo6gn7FgehxuNoZEK6SRwRoH45f5%2FyXO4S%2FEuL%2F%2FKY%2FEPINDUVUnoWtK2nyKkcvoBwEAGW5qn5a2E3oSPkYmwfdnBr2xBPII88u%2FCX8o4P2BigwTG6jPWJhU7DIaz2dj%2FvH5lfR%2BTUx16YiJoMdlSe%2FmA%2BDxL5QEmJ%2FG8m4TVz2VljZ8ptiaMI6y670GOqUBMmE5UGErdHBLJ7mzFs0OkibMMuCWztzDRtV%2FmJYmfZsr%2Fj6MKKEBlB0QYHiaFqkQIedFErWIz7j6V4nKMJNl8gORrxM%2FSELEacmc%2F28tuucFglGvYLNDWX4hB2gKfDBXgAgUa8GTHItiuq7N5i5vPPdvm%2Bvju09ER5ZjweCb5uWeCElCZ03ZQNplbLUwHdJt8L0QBhVH3KVOR0eh%2BVSZvxbs4thv&X-Amz-Signature=2edf6d805920c49f6935a3cdbe28c56450506a3bc9aa3758ecf7ba0ae1a8e225&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
