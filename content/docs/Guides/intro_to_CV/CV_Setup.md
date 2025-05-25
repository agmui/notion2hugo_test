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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WPFOFU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGFbjIoIndTiVBQZGZeOo8MRI2snazJzZnUjeusyw0MIAiEAnTzI2Oki5IRntSNfN5wAQ0GNrCO%2BVW8T%2BoeO0yPBRIYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDI3ApWWGMXp%2FFVWUAircAzWgM5xCPAAADPUNsdTTbmzyClfwGjX7wEjswm40aNs6OFwAI5MJKBIqKTRFBI17bM5cwQEtPCNJ1iJMmyhs6g9TAHDy2Frb%2BXK%2F%2FWXPgYNjFJyVsS%2FgL8uA6uCXyzTgvI%2BZx72tIlf8gvr90Bkt6JvRgg8Vv5ZGkmEwRfqGnSB35j8SJgfb7BM9eUbkk0rqyrhqzmxvxu3FM7JkmGwkuFs00KIsPUpqKewGZhBI81j0ymqGIsaRQiG6vp9kLHjvZXB9Ccq2xpBjuFW87YZCU3HLTMOzkSwuqKiWJPnGqJogjoTlhWSfwuJ%2B7zsIgURqaciLZ3RBMfpD77GIUgrZXmErX6WQd79mJKIl8qrfXuFkc7KcUyTWG6crA1UzZ1mxnsYpp5c5AW57obTUeTnzqh5WKFNOZKxPWxxRx5vW6oJy6BQBVtV8ddYKx%2BjWlmSpHwMwXxW4zpAT3BMo%2FrodqXYbP%2FlTWzQsI30RrVbeDqqCnghu50MHEk8tBCCp3ye0AzPOcs0LcVmkkW%2B6IsQ17e8WmQNXP9iTxE6vBIw6cIZ4qqSA1g02nWrbplrVUbKLq40zkDGSM35TE7AA6ZUbag0WreDg9k7O8UdE5SmhB7B1njjdwRjGw%2F%2BKHP%2B3MLO5ysEGOqUBy0afqy0uw1iiAuOVN3QQ6yS8F89mXztAA2A%2FmK7M%2FlRfjyOf2v5BvzKZEamyyX4fWTID9CSHe55GEEehLaqUoppMwjfWoGZGcwJ35unrm7uXL0Insjgg%2BVsRWTg7avpWKWnvaA%2BKnxTMC3FT5UulhomlWQZHgoNb2fqa9uthlZnJxpkhQw1zo%2B4Bx%2Fb7hhsuyf4IzURzLKXzxQ5mQhwJhtMLMdQx&X-Amz-Signature=47a2c1d363c4ff688f91b011d22855fca7b4b8e851e27b0fc5602d646c4bc906&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VBT6QI%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDRV%2F%2BLZbPpO92vRHmEjGtaJ2NLzLzSaI6jM29I5KdmJwIgNbAqDv1RwdeQbJBT2L6Ko6NWja2X8YvSU5ri6V%2Fo%2FmQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOpmW4EvS6OvpIkHySrcA4%2BOLsoHtf5ZIv5RF2eEzMmJnDD7kpUr31%2B1w%2B0RrE24QGjydEoELWq7MTBc3Lrlc6JSV7SNtoe8lRviFvgBCfdvv9GBuKo9d4QM1YlN8o%2FAC0w1lbvEg15POU%2B8KEVVnSpifHulvpL2kdQd470ljEVNk8MDiBhaKEK1FdQm59NNCBOVtLbHjZFTB2eXQKoSeclOXqD2pqrveE7aSc4%2BOf01r0ONmskt%2Ff%2B%2F%2BCCqrV5WwiORkwfLOcPiMW6IymEtNmFcKcS59gaBgq%2BqaUiEJaqjgZn3QOeepdYGcckPChScPm1U0TMDZIpgXKG2JjPAoNO1tk6dq2CCVBDajD1hMNPUeUs%2FDvLcyoP0sE2WtUH6vs8Su1GY%2BE2pVStWs8fa0qheSxSMhwFQ2aG%2BCX4x%2F6YAl%2FSzCo%2BHBp34SNDwWrNyNEoyfIYI2aPTEggblPeVGaEQOCagbXh3wD%2F6LQr4gI56QamxsXMvfD6pgudV7j1Z3XhLm66qfC6Rpc%2BunkU%2BrRXra2muD7fRiGZsrihDLkZwvlxsDbbuP3M%2FWvA7S00OPQ8jSXanY0tY0mvvceR3zlSwwjBrfr%2B1mltO9hl%2FRnBrIi3Vg7Mcxw8wMIyNj3MgE%2F%2FMzM%2FIrtaJfRc3MIO5ysEGOqUBMkQ9%2BxMR5SaygEFhaMG%2F86bsqTi83Zu2YKZAAon6P0UOHaVnyWCmJUG2LzUvwJk5j4h9VaFEGmYTmEy6W81wJqeLaiK68Vgc4f29jyZod8J5%2F1VU55ZoyeuG4E7w2qBNqgM4BIY7umHzAMkI1D3TKnEC2hrVFndN0qC%2BKgr0i8cZ03TL5zs1VHPe99VSN0fJW%2BXkbYiWpobh8Tni%2F9tjP91eVm6P&X-Amz-Signature=20ac3e78407f6b0a966c4a9579617651439112c332148c942f42c8fd57a2793e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
