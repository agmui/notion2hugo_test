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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBMDHY4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2gklG%2BNhW6TjH6oGK%2FcUxo7zY0I6%2Bma8MZm3voyGX7wIhAK%2Fg0tDUSXLR3R84D3NiO4YToL%2BTatj2Roy4Pt9ApqEgKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwipkY86ottiS5K99wq3ANE6V57t2kjlmFmEZrlyCao1%2BWiWYqecYK2JYXR9vtTgZdzLP8dupJ2pLC5keJ2Bwc5WXgntLk5fBpcZB2YybJNFVGpP4asBMqwIEH6DPZRnZorpA%2BeP0NS5vhJRh4L2VZyJyGiQQwBLOmUH78Lx%2B0K4BBHx5Onp4SZIvnrWdD2uL%2BFyRzeLkoY5%2FFJMynjMKiXTQCCvyYuivlhi%2Byr1eSqums12J5p1JhcjdmLz2GdEOh%2FWxjyfKj04MBZPDO%2FrHacz%2BGy3XGW8cB7zk0753pRJ0BtFgSJTS%2FUtKpUi075sYlNfyqFFS0cXkNgSufPxog4egiNQuBOfpi2ZzBMxJsLbc8R8pqxiPluS67%2F0L0c%2FzDR5jmWHQOdCt3CFrlwZedAovAGilTI%2BxwuuPYtJ7QIg3r46M4RaS7VEEG3eaQ0tKUxI4mkDGVj%2B8X4lX%2Bx57016e6QoV7JeLm0bZEjO7ofJZrUqsmYendduJoaglF%2BpE5XO%2BZsQW5ftf4Bjd8sgg%2Faav82r1Hm%2BXy5nQIq7h8IFZ6BHCGw5V5JtM5MiI0I52QU78owq1IE3JB43YjI6vJEAmqUZO5mGqU7CsOuGukLBS%2Fs9dm5ZQSmBZNJgQrsPBzVEIUVhoknIdJ7NDCHp%2FPBBjqkAVRhPIz3U39fJpKRgiWXImBF1OUwWUw%2FnsVBrVb2YQhyYZNzZnK7UYdpMzSgBo%2Bh9ongMY887K85uOCpN%2FqdLDZRG3tqI66sYU%2FO4JZCAQbvJjRf9ZYLTA3J%2F%2Bp4DTVBhMa%2FvDm6dS8QbiuUQKUhdinxzC8LywREj04WYC0g4ysLjSDDOyl4wCGNANncCuMLz%2Btc%2FlGQ6BTiRfxrJczzFRF9dmzC&X-Amz-Signature=2a563f7007b37bca3d963e7d94087b8dc0e9d3fb8191493056767a139a1066a7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LIXHAWA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDo7W35%2FjJzgSClXxsIgtjHzL%2BvdXiuZWn7CeQie1JvqQIgf5VmOY7K%2BBkR89DmxWe4x85kvpC8mZMsultCUzRky5gqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDviNjZMy%2Bn6OOBj2CrcAzjXxoVgyEtxXMRRqY9w3D1GfWyX2wQofZrdaAg%2BYd8MZWf4Ko6BfjF1P2NLL47UXqK4EOp7EYsaRx7pg%2FbYcFawNUZbDIzalSuksvOcoCTxnVyz2W%2BLWrE7gOnUomeFGqXBgoyTqLRRbPd5PRkQI0dDshl%2Bu6RpN4X59ygrkFc1AATUWbrqhb%2F%2BlImkXPy1nmNxJPnfjiBc8AfPE%2BWflPaY5BUDUSooYSb%2F%2BzksVKyJxN%2FRLoaeULP8wjRBnlT615rDKVFAsODNwHKzu9XbwZCPsCT7J3MkPX2h%2BVpwsUCbpvxljj53EXxmc6eNYNgU3PTZotO50%2BX2kGzDN3%2Bkw64qAMmu%2FYLf6RnhPC%2FiAOY8PF9jmJma1xxy%2BKh77UBf2qHcMjD5h08879ruDIP0NGbUUBL4boZJHQxHGiiFiCDyS1PnbjqFoZc63mBWNIwmYyRowFrUzQa0WyQOmxEy1kh84spVwR8eT5%2FUBW1Fa42oRTaKAVmWLUCycVjjCJtwTNt7g4vBp5n%2BhJM4yyCNVudlW6ih7j1ZOu5Fd1UezctjBMrdfjWKht%2FwJpyXE7Vy7V4F2zfvtVnIYrkbFqQQ0n81jLLi9E2UA32g9yrOM6PzlBHKRTcfCaL%2FhqEjMMGn88EGOqUB2n1lgBOB7x8M1SoYaL%2B2a8dlizgoCXTjp0%2BYotZljD2%2FQJmnJtMxSUiCfCdibpF6OTcTRQ4Fji8Q7o%2F9wBUmBMsgtQQITKd4%2Bcw77ZLgunuJJUexNgL0Sc4YZrNtT0hInvzPkVE%2BmfcNG7wpX6aPJ7eDD1UxWwYEq6ulPxdizFLiLOMLNpJOaWDfzbNimw84TYKQCOnRm4kWKXqKlJ%2BLhhu3RcMm&X-Amz-Signature=dda2a5cbc72cb9fbec5d83649faa65e47bb124c50f4b673c1062fc26adadc0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
