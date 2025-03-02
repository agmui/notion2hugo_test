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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLLB43K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWe3SjHe%2Blm2eFXNokqJ03PG5ZV4L0i27rPI44xnw01gIhAPW%2BfN%2FtLuYpLdVorqJvtzn76AjRWFTiG24vNFeQQew4KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZJhsYwCZQuOM%2BAEAq3APmWGYvk3xBpiLBJiTSPb%2FadIJ3ys62uyKBdE%2BAUXtU68cr%2Bx3zBj%2FLiU4vFz%2B3DibBl2aSqqp2EZGU34Q1iuiE2y4mXxuxpUmRpORQtg4vTzorLhHxhdfNiF2oHfWQZ3KtKpDblbi5eQypkih7AEfhlh7bB%2FT%2BRtKL0EeWDliSukvzSNKLnupFNesMb%2BRNlmN2y2P0BXG2pTetxG32wegXU2vVyi7%2Bqzm6aTxmkLxUzSeOQJU%2BtQvCNzFDfk0YK2uE0xqov7fXL9rg7AEQsnW9eHgqogIQTAZVz01ZAWMBN3iY4I6cp2%2FD5BGrgbiT4vs9wV1wZJ%2FPsRfWsw8xauEAcB2ccf2X25qcqtD4IpY3V3la2Cj%2FGgHM%2FC28vWVPlgQl5hvG65YdwYKXbim9uGo9s2d6nbeWuf8pud5S6IWU1hPl%2Bj0e5va3Y5LoeOVJqKEnAi79oB8y8ScYypo0LDv12GAvYa6vzblNmkDg6vr%2BcBCfz%2FUxPtrBI2DBPjfgZ47UyTWVtk9pYZEODDcMJq1btgvMmInHy8yokMZiHdC7mnGWaSGmJ9W6SaGyAPrvOw85%2F3m2WFU2me4e2LokcmLBcgDLXgi9kZxuBZU403vFgZlyOs4uJ%2FL5nfzOwTDO%2B5C%2BBjqkAVvMkbDScNfdFwdK%2BcW6SmPRPAOWrTe4eAzeZb0afrWstrWYEenkUYsw3ZafhmGwgqYYY2kQNMCfr4YGQVJvGgmmDosBTK6lrnWULGcyMz100%2BOeBbCgLl89yEsSjPs5DuVQ4Dt2SsphT7DDBEFDHvLjy5l5PA50IEWhM8tBN03ObXRLaauohw4YfFO0UwBGO%2FpFCaRfXPgB7whRIjgRBAqMSQ9w&X-Amz-Signature=bd3b876f2b17daeed072ee6a9b22649c984d19eb9ccc0da3fc58f5fff41a8008&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZATASLR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrbSSNRp8kKYc%2Flqmi7qanI685ocwgdtF8YBD46K2EmAIhALvb4L556WxYY2jvsLijXFn0W9c%2FO2%2BZ2gknyZYT9%2BO1KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyVb0p5YA%2BFeLWbWMq3ANvWD83pEszYeoXOlOuVgGUimVn2fL2p%2BCIe%2BFiSuxEBF0CjlcItqrgfmp%2B2%2F13r8ww3AAsML06BzYegnfCBFEPjfkKYbG888abIF8cQWDTnLe8K3xQW5KtY3u65G4U4o2EZgoUJ73tZ%2B0otNXkaX6Tk87OqzujMUkfjmeqAEOKoF4vJI%2FogIoviuKf9hjBaYL7LOM87RzwFfGIG4%2Bx1suSRr8T%2F3K5zK950vyV%2FHfpTwfQH%2F7UDLB0wUTIXOAsIf21aSAktnMmsh2qdtgTKygh3Gu2hTrxrUWEY%2Frhq214lD%2FDDj1zAE8eY3%2Fmr2hHbD1v31N9yWaS%2FM271mosmYooHV8DZ%2B6vbXycUHc%2BnK4KM%2FpwQV%2B89ybJSUGhHXq6L%2FIMVhTMNyJOwHWKZLba6a0OXJLuWJWMzNSrS%2FktuxUOp1nYO45pTZgSrrSSCPDDlTHooy8LGHexv%2BxR3PAvpmz4B6vPqrIKm1JveH9m3jv0jIl9z%2FE5YDM1YVLADDY9jq5aNhk3zx12iv3r%2F7B78PSAnqsCbZhf3%2BFCuqsBGgg8Nm6ORa6zsCFkCe%2Bc0CeGDKTXD%2B%2BBv3ome0%2BrpB4OXkNdvTBh06ooGBPTQQ2Oe%2BM9kmPZ3q5x5451gVZZXzDu95C%2BBjqkAYze0TaP4GVg73PMUlk7M3%2FHMybpMEXRo%2FK%2Ffd46IGAooY5vSIVNqGcE2A9wDS1c09bAtcwmqy13qy3QlFxI8k5PB3s7nrfJwoGqTPHOjOsox8%2BLJqWaHuvxugcSNNfD%2FKKGt9xrAd6FTuoHCbtI9sO9R0ML82XU8y5BEqgpWmMDElkzW1NXr7dYsd0Iw101LbE9A6eypCYnedUTZmWoSEzMca33&X-Amz-Signature=f4a53dfee97d41a34b21373637ac0239789da7a078e895fb5e8e500e27f633d8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
