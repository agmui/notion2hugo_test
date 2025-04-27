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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JBED5E%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDUDMnIu7XU5rhOjMOkpIDSMDeyC5mF%2FrZ2tAEhKz38gIhAPulPXwdKZvBOjaN4nc4kPY%2Bm4FbJF68Tu3B49IRV56KKv8DCFYQABoMNjM3NDIzMTgzODA1IgyH3PoqVbnp17PCd%2Boq3APFHnFE8z3JG5Hf3Ko2xOMQ0SdFHAmrRVG%2FphcrC9VlJ0lFkwgSHqTg85dszykPcUWLxagCsLJ4w%2FABrW0CnEt1DXYxvpL5lHSVhEwOYpaBSnmqX7cGwTFd1z52CqFLXIL09I56%2FQruOUqs0bkj%2FYLQYuIivJxjJhgxTfHrjuSlmr6G3Qq0g7djHEsw924nNpDzXrrpEBb%2BhfgzajgyLqx9Ciai1cGTKMb75BMFn63pgrGXl4SdP3kVKM3WOcAdyBGb6yDEAbLVk%2BAPoitKz7NSi5zPApNbZmy0m%2Bwfa%2FOvDns8qeuHXr5MxOeiXCyNhW%2BBwhfYCC%2FHTNYhvnPvxDEEbv29zgpkQVMOa%2BVzOOb6cFTVpafnKb%2FZt5eRTXWhn4maPGRMYEeP70%2BRGmEcVKmjXe3VwD%2B2VZ46DKXlQmKbCxTolInG5Qw8hyfQTFe3mWonwVMAU6%2BN7oHGilMtQJBICTY4RSlKEfRsIiSy6tboOwb48z02pvbPD7zCo1VTr6eYUwCpngVQ48QKn%2FijCe0C5gpUUQQq7iP1jX9lcruK8faCjvARiQ%2Bd9jLkhwx26GS6IY%2FULG60%2B%2BZr2hV2N3mAq3gFeqgMVgpQtKLOPgm6ZhXCrFGRcFlujuhGfjCQ7bbABjqkAR28kZRQHcHZfviR394ZJ5TNGEGxJ7EooHi1%2FwGEeRPCU1m7ZmE51%2FudBMV5k%2F2f39MQ1Z2yPX5612TBRYjg8Zds9M3Pze2rGoEq%2B%2B1SmTDRS7WYiLvMaQgFm%2BuLjrjyiHdV04aq0tc8R%2BlfJtSHWnGb2ToeFTHdbyeT5G7CxpTf6WobpypCXNF9%2F5heiKb3gvrzDiYYwWvpyrQTBabQPIeG8bU3&X-Amz-Signature=49267c794bac54691e234f1ab4b4b50d7b2e3d0677ac0eb8930d7706f9a1ed1d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T65ITLC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE114%2Fh7BCLbr2m0qaKmbkhFasngNrZ7BDYWTHksgRDrAiBlM1j52Cve2RB%2Fy0TiG4GeN8k09v7nzeCn3xltSXOTiSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkO5LiQcsdoIA943pKtwDcj7tcSsDM1x%2Fr4fusw79eJwgGSKeX8D%2Frypzh%2FBc%2F3o5ODbIF6FA9Jxe8DUcKo9AK42GyGNAjDGs%2BY1%2BQ4j%2BJcU671haEa8UnTWdTY2WgJKhDcpzspeHtdOWrVPa00SGapFwcSedRrkL%2FYEDMt9stpn%2FmqIrgNaY8%2FYeXXNDA3obkoHiKm9CYHEsxs%2FpERemOqS0J1E96yLpt3YECxcucZoZV8KTfDbrc3hfHJA4bJLFzpYKyYBCkodWaYWdZmqX7sduEhJpb8b3O8lKFahUJbKb2dED%2F6VXE%2FY9wOY%2FDDiqNnXj2oc6z0SGfa6waOZZsxM%2BRgxg6F%2FCDr%2Fqnw%2FCNkD9tWpY8uq18S4ku0N7UDe1qlQXtYxo4h0yjeQ9RqnJXlnT6JD3qig1Iw6A2PmGPSSE9gTNJs087b%2BG8hPNReEwweYpsyvj3ahy9WXgQRj8V2UdpgBHiJUErRdGmp2Gakl6%2FPgpbzT%2BOuLh1NX87Rf%2BNr4dq07wjhnv6SFE0XKwMhbuMy3rZJt5LCncAxND5beaw3NYnRzEoq1g6Iv9%2FXKbL3Sj7pGNyKEbHHZNry9Dn2gX%2BloBSTgziJHIY%2FTIqw6CyMzkF37pJcGoFUZbYduEN19emnwamWwBQCYw8Oy2wAY6pgHid8Kzaf7csaeLOKyazwMs93PQanuPbUtxM%2FOYHmq1Y4bIok5awpTsbUId9Urr8RoXf5W7p0X6hLosBGHeH2IDz23zLMoeSCErzWLN0obEI2zmSWPgp7j5vm23tzQD%2FZ%2BkmHrv4tfj9t9OfdlYdmwUtmMaBmTzEMExniDDjyQ%2F8cAg%2BqocTdVchR2ePFc9wKjvxnp2wOQqpMzm4vTcpAW1J2AJGj7Q&X-Amz-Signature=a1baeeaa2de0bc9e32838c271c5d8ebfad79f08f53e8db1377319340cc772480&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
