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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOSSPBRI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC4YFBI0nDhSOioeYHpgbYpUNzRLLKS%2BXvzJKoHILJIHQIgRtJY23lfaC1Vc%2Br4BQNn192FN9%2BgthhxKuYRO8b%2FsiYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDO7FXiXRkODWCRBrTSrcA2HGzDVBVHVf0wl7qI2bQKHGtOZ60MHuOC9ona%2Bnwr0z6i08WCfYUjfMvXiBVnJXUKyM9QTQIZIwF8hsddz990HInOaAZVGxQhPMDSnlIvwCPNf8IeZbBsOqng2VEroKHyu3t10O7SQnX%2FOnRAvmRaS5u1BLgq55DBQp5ZNuRFb5sZkTqYHC96wC%2BuFajM%2FeSj5M%2BhtQyv7f0rTt%2BBp%2FMln3GhLzWjmbSeSScOtMn9kaJG3mQfAH6DHnJdH1GtbmAYSmZBXnuwDe%2Bg7ojusTPH%2FLMO%2Bcvn49Xpm%2Ff198m1FDh25chNK9whBxlzCS61OpeG0r3FsF8vnr%2B9xDGZZCUvRljDow2LJ0oKQrshEKcOh5Lx03eTUkSCbH9LIaNlfyTPpjRqiySzkyT%2FkYd2OMNiLx9LSBqI%2Fbd0nrOE3KWc7BXs%2FAshCTXULmtismeWwfpQYoipBUc9NBeVrRxrTw%2F7P0DUjpurKSl10%2Bqe2p99mKMMzPYR%2B9P75gzjaLbRFXNIAD4DszN9yoxa2Q3l764Y1Vq93Z4P5YzWR%2BDOKXSLxWOX2p5wwuEDvXvUwrwAKCQD8vbwdsFRWtaLWQIPWPXH3%2FTxR4EvrlkFAwXBifyDnxmT1Z1X003CjxdnVSMOjsn8MGOqUBGwOYtfPumuFHC%2BrfGfL6LEuaHoBfGN9wBdIcR%2FxQBFAq1SzwfuFXrrXMHauadgWvwKa4WgOxG69aH%2FUFYZTtLdhqyIMY1v52JV1z%2Blbk3z4yB%2BKYzg%2FZJrVA4aTMNagD4el4JZHXcBZyG%2B1zxh25YLDixF8bU9HGTV8%2FazQ734A%2Bi9oka8ePW9deqgIFoOAkEr4heiDqbeKIO5zHx%2B1Yywv5v0yF&X-Amz-Signature=2705d4b9e24f52576369a5a686284a3dc6fd6d7b0072decd674cb87c1c381d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JJIU3OE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFF1kBapQ9LL0amyuk3%2FP0SQ7on8AMwNdE9seFzUCdgrAiEAh6pPd%2Fx%2F%2Bg2RYq5yE5qxCxtHfWe%2BjfxpzXcFa1JBJ7Eq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDE3IFLY4CG%2BfrV%2FmCCrcA0NQaqYXkwHWJ0RK6UxFbkPbwaYmqx5h9%2BDblqa2JVIlDs2uGgVFcWNzbWFP5PVKdmKTME%2B%2BeXln2fHupMXZroMlgdsZEc9xCWwCrOmRbL7F8gFymL9hl4OAvk2VBOoR7QHZreG8mZosfYFlzpsCOp6aL0qh4L6OszEqvUGgdtQXYiomjIuKRS6hjqxf5havHU9OaDuVu5GNudiYUu%2Fs%2Bk56yvIOwoxCXypLEqfx9zt1aH506w0718%2FB0KqIkOEwfNIG6%2BPquOBqIXq0P%2BpCaTTDY35386%2B%2B2WC4frHYsPqTCeege3twA9Z%2FgLVWbCwPi4IP2uuuXaC%2BNIsIOMz2rJUDWdozLQWjP7KEdLXxnzGYVv%2BDjDPdA8zL9b3IM3iRfIc%2BHzld7MhLCm7XkxZ2CLIPlyRs29xNO%2BmnjpRhR8iKfdBfsFg%2B51KAU4feamjk18e80tuST8%2FXF6BN6GD0%2BwVFSiyokYd0c1Kk9cDxUIq5QHMfMqRfF%2B3pKV0u59%2FBZnC0im7R2Cu4I94GRkYXrJtnPZ5GrpkdXYKVERa3AZrsi44xpo3oDvIbG%2FiGX%2BTM2Iow%2FRHAoHz%2BnOOMj50Ey%2FpWQVhuR5Na7zaMddIgQoXg8LiLsIAgEA4Kb97CMLDsn8MGOqUBQ88CghRPOoMwFK9WUUGh%2FRTU5o6veUXQFebwLOLTjn1s95LDYy4yLjbG7QFJ3yVo7yX73PEh5xhsTeXM9UT%2ByU2%2FVZNxuTv2wEvtMVefi94%2B7%2F27J0NEE7Jzy7s1d%2F2cQbO93WG9AJhvqtwV3EmMhWnGLydoyLRqwHSOUhxATOj1Ioch9H1Izt%2BfN4TNcDkQavN8wB%2FVVE7eZYIhViWueEu4sR70&X-Amz-Signature=c559cc3e7a68e398dc1bfabaa6d7d7204af2bd4de2ac7bffe2a23758ba7a2583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
