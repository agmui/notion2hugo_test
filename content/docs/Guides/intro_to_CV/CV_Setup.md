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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBCIIWCA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFMmUwKAcnXwNaxweCqOYj7Gmi7%2BxpeJ%2B%2BXtFpTPIN4xAiAW72g8EEdBerS89F61WRg63819m3Giaiy1Hy%2FbVoZy2Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMySJbXYpK9xl83ibgKtwD6HSxgHouhUXcRivi42ipn%2BG4uJOt%2B8lSs4LiT9imDBeyOUGo31K5oo6gw%2FvUI8bSTlQC%2BCgSTPXq%2Bq2mvLF7veXao4x6fPWiJE6L4A5H5A3YT8Gvodwd%2FuPHNX%2BtsjpyrvWWaeAC6D92b%2FMN8D6xMRWqLuoHYTk6mirJJKH2e3YwCVnNNKmHXTi16hpGnQbPZigZtxLzaIapSMM0WSIgx%2F%2BjgmNVG1e5cJCzEdURPCKIIX4%2BRx26zDFPjJjh%2BniyXiO5xZusEq%2BR0o4IlvBxd2r%2BU0OSTKJNW23c9XiH7Ctl1oW6LRfYQrU3IiOaTRtF8b3EkSX73dpK9b1qP1wEYKD6vSKOW%2FHBOky7GMCQvZ1tbAbgZGJY42zhJg2d1ZINCw7o%2F9hq4OH%2BPfPzJ4NKTmQf%2Bo1WnCjNdM%2BNh%2Bb%2BLXXgmWqkpQSX1i%2BOSRbOELPWBa1QqnCF8BAUfb%2FgphEq3Q1o0c%2B%2BGqlijUyK%2FzZZ%2BvSLooa81V00NJT7zKKGJ7h0%2Fu66W0cQPAuPfC7EhOdbVSKX0rNFOqdWp5pENpZnsT7M3ly%2BhoBkTmBKjP4aUIb0lDKMs0zHyi%2FmpEujOral8DmVZyRi9sbXoIqsu12te8fTxq6egA1DV72bijIwiOigwwY6pgGnvFHXVqgmhZ994%2BhhG%2FmfowiWTqKmX5hWic%2F4bWH06ELuYp50Sa8YYpVXBT8HtfhBgEEip%2F%2BK0xSp1mRbKVRu5kN3a5%2FXxcf2WsWKjZoXYLdzucLRhXM9zenq67HBPtPUoklms91Fltc16NwsQx6zO2Ozw%2FaWpmrMvPPjKJCD%2BbBt2x6sVja910P0IYBV8AlNy1z77PZHt1X7qkE8Xoehkr7ag6SO&X-Amz-Signature=4657df1f4d3de82962f9b8e3861e3ce98d786dfb25340aa68f86c725bd02e202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGGJMCH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQChY3uSW%2FY4Q1wI3Ljatbv1Omsx0YTqs7n7JaulzfXjDgIhAPqsrxQZFr8n39mQXyBJJYK421Hp%2BJEMrOEoO%2BIWNDSRKv8DCDUQABoMNjM3NDIzMTgzODA1IgxQJ%2F0Wyvg8FajMmSwq3ANkCkti%2Fv60RggC9a4xjnRnbxx9mJM1EFbHiuk8MiPrIRgtvj6ae1xIgwDfpyLsrx68fRVTwbD2%2Fn%2FkOhgLczsppBmNcvPzv0eK%2Bd6RjKqnKCpTvsLac5jZCH3dNgqLzSq%2B0IeKBLzzITZ1UhXASYdtT9E51RhKFjXDkIH3P3UyEaW91QQVs3VSFYUqaCnAsWZJxt75OvgYu8pkeEhF9J0A6y5RhWMA0GZbEM%2BGvrNVa2Q5qtRRttOXGDsalAHuALNa8FjvfYCtlHKD%2Fuvy7YcDh%2BuI3Yo%2FLtDLmXlJ%2BcJ%2FRo6nQ%2B2Dn01nkzDGSAs4xTuRK7m3yh7YlxRyp461BVRp3YCmlH9UCmryw29QnYEuVF7vPGJrG6X8EFuiOFd2GzAh1wKaEZ1%2Fx4cTufP%2FPhFwxn9XyL5ummd%2FiiXu2T1U0TP1WtnrztkXwDeJpPxP%2BSVw2ZwA7tuI4aWEGX1uHORJAsuhHAyWlKQFp6c6Zm1LfjWBJlkYuzS0Nrhc5zuCf0HGottULpuzg9dI7GXdM%2B4Cve%2BzAjnsyeZcOO7Pg0sa%2Fp7vSYaDutBawzN%2FSqKXYfB%2FKGYWl%2BFyU30AsN4BFEYFocm3PesasST4Au2P2G94DVyBZRxHIfQhR79h8TDQ56DDBjqkASCARBBpku%2BF2edhI1AL6CP2C%2FjeHZ7zG995cKHRu7w1LSRkue%2BimyyU70IbeOF9X9P2kWMsHhJEkarWc6OzNXUd%2B8V0z1w%2BLrGohMTl5WxEep8eqUydRN1FmoL%2BeM5c96ZSei4wZJNeCp61f7%2Fd7uM1Lj8RGx%2FIW2f0M8SQ2NGGsUAHMj9ua8np1D8y3HiOxqTaeGlkBWA1nyTn7Yq9mxFZYfn6&X-Amz-Signature=6b3f2142ed872c31bc95f89e5a9a167696565cf9c88165a39ae7a87aec88f313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
