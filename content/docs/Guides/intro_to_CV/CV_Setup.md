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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666COX4UEY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCwJSMmbZ92WMQZ9rgfd92MKNg%2Fh7Eexy7FhAjsaSdI8AIgYCa%2B5iM0DylgxOgsqRAjJX%2BcGeTT19dX0V%2BAq2hAj9Eq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAo6LZtzLAx7D3NKhSrcA8VPlii64KmnMh0eTIqCQ%2FgO9L3H5LvJyiGzDfrPy1J31%2BXo6uFxx05j10bupmoqKHqGrdCsZ%2BFN5W1NcXGXxOBftcXLoIy3jGI499OWhFHvYq9kqjFpKV7SQNbjV0bT8OCw%2FvpXHaR15cbK3a6sMdXpWy3A9r5jOvIFrS3wHS%2Bxmic4UH8YsKyWDMzROhSVwsn4LiAiOqkK5OngxC0IaWXfA6W%2BywSGKSTyOc4JwK1vcE7uRlvebISxgwUxV1g7WiXWgpAENsG4F8BeeUtDPYwCzzAv4CJzwboZOYX9YD1XIVTYOEbIkHGxN3vWsueSLiBMqyVyNKRiNCrQkRi%2Bds5Nn4Ha%2F%2BX9%2BtflwLePNcpZUEW5Bch7%2Bfyyyk3ipdTzGQu9WOLyQggSslm3WqvHT09BsEkcxl3mjiTYtFZKADb2vnQ6SDbrF%2FiP5xQjUZV6RY6EiA4YYQBuirSknIDlSfZzzKzmMbpPhMEjJGOqOeDiw%2B2sVjP7QXlm6M8XwzIlXuGeZaEi3ZyukWMZDuoIPRshqvQ4%2FecmI9%2FrHD%2BG63QNN5LRIsx1zPKhxaApRJqCquewkKJabbwkC5k2f6Aw63eQ0%2FrcR6kd6EItIgDk4ZQ%2BFMJuX3xatGLUBcktML%2F59r0GOqUBzEUjEwIB6I6ZchfT8TXyD9ZZnWfhhLvtYlDxe%2B5fBJaVhboG8kAcqFq1NqUWokAHtWui0%2BcmmtY%2FcbloCI1wFO64Hw72UqUuVmUOSr16OSJSkG8usxH%2BeL3zzr%2Bmk6AitQNegf5EnKW%2BVZBG5NmIjBQsYR0SWWpzAiauk%2BuyAs%2FOvYUmmNSinu7xxedLU8TkuDHZ7H%2BfhJCpTTxJ0Kdo2hSy29QZ&X-Amz-Signature=9e89269d68cbc07d5fc89a6df57f1dee19dd47924dd30eb7135b1ec5da4d0498&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKBECZP5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T131702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAHNDZEditDeDLBHkui3OnLXWwsnSw6%2FwGzykgtFZJKQAiBdt8xcEi61FwcLwj0jR1m33SaMO7sC70t8KidIYCNIuSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMuSe8oZZgJ5L%2FwaxCKtwDYiPrdvRW3pZM2lNGahGGO7SKFuuNgfnpgITbWaFnvwa9fKeMDpwdLyCAtrXDZ%2F0Xuj5k%2BHCKMbv85qrhoM%2F6NyWQlBOVahNKA4eBSs2sGA8ERHZwJi%2BjfTgsD2GbAvf7gJFQF99JTksG%2FW7a4Np0tfvV%2FLAlj%2FU31JOexn7pt7247fvalGREA7G08jhAKdbkpGQ2izcPqQ7LxVupXQHoZeJrJS7hyaj03qF%2FLezWJ%2BLd5vjQT2Su736n9jB3UwavEnO44xjmCBXl0fBIAy%2BXOdqhSMY88P4BXULy3P8rbP01Fe%2FXZFgkVJOlZmoDKIVhMn0ExQcNwOs6iKQ3yRne6MuVZ7qOsLytmCi7o7qzvT%2BcrYYMnRcEZkH6Ah4LbZoVcGtu3Lq9X%2BB3ztVrP0oTfvpez0LRG0t2W%2B%2B6ik2%2B4ZRdrPCcmxLxYIiUXWhimenv0je2kd8urr31hrlAMr7B3X0DHhKTeltQMWxlXgb9PaoHQSkEpo%2BIvp55BJHeIWMvyPvyQ9gZDkfPIEUiPPZrfPVk2BhaG4oxU5WTzpNI4UQaVxP%2FUhcfVbcyayVnCw6vzchi8prm%2F3FaON8l1LpZYS2u9WiJh6W26hDRaf6KEDm%2FPBztaH3GiUjpciswmvn2vQY6pgHN2YU0FXBuOEVQ%2BE5isdetFYMxTwNmOcG3ysPEbNsz%2FallXHgcMtu1WbeL1Tyk0v1pHz2XRdSjRAZvwzQxMhJk7AaHWE7eSPVsKPCzHuRfKKh6Nb49V36EaGvoUrZ6ZvIY5zPkjYTcMwVXQ8hV2NuaL89rLxNV%2FmXMpPM5eGlpNuicZ%2BwJ7YAQJ6zaz1Owi%2FDjaJSkeHyOju5UxWg0nwe8PDqdX4Bm&X-Amz-Signature=2e755fa12edcf7566d76a97340ea9d04e76088f29f5d9fc0661e9b2f3f5c93fb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
