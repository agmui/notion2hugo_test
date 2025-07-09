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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DF2F676%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTZrjXIzDSMOAbqzlO7bTNvlxPNJgxEgdWAbFp8eoaRwIhAK395nbzGH83EVm9yPLgs2Pq%2BQtVIQGeaJ%2BN7fG4qsnsKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi%2Br5LNQ990iMS3rQq3AN%2BXfbf8B6Xzr%2FY9obUDAJGuyFXGWP2oUCiqXXWY%2Fgigk7oMqSQW80eJSFPnD4IQ15LhKQfLU8Wf9PtixKlfFwyDmc18m6VhFiq0WHPjeUmHos%2B50OG4Upqc6A4WOjoMepRt%2FgAwILLvU0D9LXBmnLsQMHW3yCfm%2B7OTNPwDw5BeUde3nBxEaGu33dDsFUhwzNkz82pSSer3BUfh4QvhBlzbmc9LyPd44Z4UQM13eo1xBF5iwugJ6Yk5rHkhLJb4RlL4Uv3etCm4NaBcIN1LIB71PZRWBiMlWHmL0Sq4Nuhcjay4MDO4ynSDBqz%2FLa1rhwYMpzgRxqJgRQUJWmCOTFEvSZzeHVgYt4lQVefXaaDrtsR1yIFJQIVV%2FzvguVoeLHdzXHf%2FkFEUp4EHzl%2FGWaanHqXInjRTFegn2X4IuGEdwEQfwQUxsQAoTNxrz4jsDG890J8vuztTiJU5Gdjh6u%2BK90e2mbc%2BRM1oQOywnEeIriH0oteaUM8PNdYWX7wR14Z%2F01o5amHDDGZIvfoYt8hy3DNtmnJEfycT5hLAw4ZgYFlBNHUC91Eo8Fh%2FfqBxrb%2Bt8hFmlhsGbBidCm3I6RQjfBTFImk9HwHyD1ob7qepAllwRmjRUNYgheJ0zDXyrfDBjqkAbTcu4QDiwRw8YeyOkexyB%2Bxw7k84y%2Fdd82s0iXlCtLWLUvLRWuj7r9njmk1Dywh0vyxH0w7541keCI%2BEGVbcHDgYl%2FjPZv0Jl6cWHnF4ZvuTmQSYUWGk7aNnM%2FXMy6Hk%2BQdLsCbkorLBwEl696A7ISMarmM1FIHPzNPy0ClyLu6c980hrDGMyDxPwfWmoRW%2BlU5%2BPlE%2BwSxM3rd%2BYq96SBsoz71&X-Amz-Signature=d84757836dc536b8ea839e4cbb6388f06e102b6e9210f583e5ae23fe2b3713c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCS2J7BC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeFVG0h9BTZoBcjwEvtHKwLEdy2PL2LFWAUZfoMtTjZAiBj48nxAzPw8XVZeT9vaRhu53o8FYHyyXSgsNE%2FmKwmqSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnfHrOe8vdjXKsZOaKtwDOabTwHqoLg4dkInJY5Hyz%2BCN7CnoL1aGaZvDR2PpfV%2Bd6wZ5Ny33owyHPmDCa7fk%2FGfqDD%2FUncJ6gLC7In8Km%2B8gc9i%2F7zBw4kn09azjvaVZmyY6dZzV87vg%2F5bo6WQEV9qS3Fkqmdlc6i65SN2jMiEUnsGajpaqE3%2FdS%2Blg%2FzZYykz%2FAsK3DHhDysW1%2BQ%2FwhJHNU%2FKXGDruDseN6UTbPdi9U0y7m5IczNXwE5f2Z7ns9DwyVn2MGFnRNW%2B0pNaGhFCrz6WFfpkRl%2B4YAcixvjjNjNs4PtIdTbdwwsFYtADliICSED2Yg4luIgrb9nvqH9VVa9%2FDcsruGKrvqfFauWNDYw9ZaC1jiLYif1XNmpzfwM5YWszYOvaLnIpIHXCn9Tn2IPIFWE%2FouqwAvr2D5UD1%2B9%2FG%2FfEBoechSjAQ3L1lwyPwm2Z%2FY%2Fz68ODZbjjYAmTaewukmpv6Q0rG3lZCV2yfmvW3YxfLY3vYrUMpaxXacfyn8mQmmqXE5R5%2FH4mvPoL4upJSEHSK7OP6T%2Bd68qdj9QPtpcBmtcEoYSYz1bofAdBX1w3NXKB8t%2B7ysncl0NPNh9yRrehUwVFiJb31J2rt12lXQdLUNKmgD%2FL7H7YIpSdMOCrLath%2FoKIwm8u3wwY6pgHP0xoHvQMEakZMBXmE%2BTOL34vdTl8%2BoSAe%2BlDQJDGjFKHdA5%2BYhV7x01qJGw53UH8vhdqbsrcUvvbQyCReWDkayG0ZycBzr%2Buwe3PJ2RRRI6kds0cM9SlOR1OV26h4pzpSGQXAs3hVEVGZNnstFs%2BU2Bfx2m4CERowejktIiwb6w7yk8hLa%2BP9pAw0KWjL2BUYmfpHfnHxXo43Nf6QOQ1eFOFoReeS&X-Amz-Signature=08bd0d3f4da4f244788349e516b7f1e8d359b25cf9270fd0ebd59b2353368ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
