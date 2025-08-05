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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHNLXKV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDtbSv53eIRdTKPwlPm8J1RGR1URQVaLEuUPuWMmDSUvQIgQkWfogDD2Gjdc2gZjEV0%2BGb0Yxq8fPEa21QpVfOfJFoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOf7hqseIJqSO3sucCrcA9Vtv91HH5g%2B7Lit34J44h5z1rgSjpwF6RvnlJRFNpr1WU%2FBlK6Fv2awHWqvBzuHKIvoTdeAXlRCkaqWP8BUSAeHDjuktYQt72Tzg7rGK1osL%2BPM%2FSsyqkb1XT6jkbPiqcrRYZV0iojFE6wUttLQwcp7B6Mv76tuSwhbaEvL22vufDkg9MO3CCyONBVbPANkscqxZfgEdHSDyHMzk%2BN0xR0kpSvCKtWecVRvBqKTEmG7L61XmEeSl8r5lIXNBdEoIEOK1v%2BB4J9Bb4qVvl0KB6j2ddKm5%2BdgEEikwShyE8gI8NOh44j%2BlqV%2BI%2BWqo3%2BQ%2FqzcbefGO8P%2FN2GbDt7hCFfTRKWoXs9mzoqurDszQ2S0H2Gvj0fBihFNCFnBaPTyENb63rnsxPUhRFBmASMxJZr%2F%2BT4w49YQ8XN9UJ4DfALQkPLZJl8GaSFgTqKXVl14K%2F93GhdkMn7FiStQPP%2FkzUXsTkj2fLYfqjnvOQrXIFyu1FDJbD18kPtivZo5bSy2%2FE8AGWqMQREE0Vcvy8SxFMkzDXav%2F0azZ8WRQCA4PFO%2FyguOX8mGA%2BlekyoyvFvEZHEthAto5bD6yoPSdUWiafJqROw7ic%2F6DqSibCayyD%2FGtaN13Y8e8YFQ6VseMNSHysQGOqUBckFHg7kLvRxDzIEbewLxYi%2F6Wh5XjpizztBh%2B4aAEiVe%2F272z4AyYNWd5vWyo%2FqCv4h%2FWCEKZBnlAoiOJHCQbUQ7%2BpRa8Gct42K9wYwxmlOIATlYsb7aLuyFJQZe7ASwXT70xPLhDQ2R4Vb6zAVjV338Siv2FjPgGsfLV7MJQTZxNWtxZCiJ0h2hji1LgYa7zY8Q0SfQFVpM9dC8h29l4AN2stV6&X-Amz-Signature=8259c6e780b86437aa28e460302b4a846286084ba16ba7ca2b338973edeefeca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZMFC2I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIA0wbrCL2EXBhzJmPsLBoEUzJeOotkg8JxU7xa8PorCDAiEA3PtxZnUu3mjx2Ntx%2BTB%2BvCXns4f99IPdIuc68xNAAcsq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGVkzSIfWxYbBepoMCrcA6aMoRI4M5Nim51ghwb0T9wC9zPglU8ma%2FlY%2F%2BWw5%2FoC5GFATuAYweIYfSb7tjEA2wjkXOWzEb8DeVztvsvRXz9egNbCSKoJWJc%2FhJV4jrce%2ByQEgynbEcbs8IsCw53GbOtEFY5IXFO6Og4MB%2BFArQjTRkJ2YbQmPcan8b0hZ6nJtWDPilrr6dI7A1Oqy84f3gm5YL4%2Ffk6PyyGSHOFBdJygbhDZNZs4PDJ3%2B%2F9jtrKKTMJ34zri2WVT1yPe2JK8aykFB1zANwnTl4eGELeTg%2BjBuQ62nMOj4hCEV01Z9ztexUs5JvkLOE%2F81qdyMjSK%2F4UhHMXmfQriB72nUsv5yKaen%2Fn3C3Qlvslv6ARw0QUqOuU%2BVcEaB938wTE7zZ%2BwMEA76HyAcfpg%2B0s54PTGHcRWaCwCs%2BPLcs1OZfbeqpKZhfFBuU4anDbzKvwrghE1UeL%2F%2BnPqf9ddALxcp7bAlfMO2Ht%2FqTaBCOPVjzaAm5WR119aYAoGWjHl1hbIPBGsGtt7lfZ5azZaE4LWn%2FY4L%2BzeVpzANVrWGVSQ3Is8Dr5C9raTlsBz7Fn9S1KNe42Fhh4TiTAME6BI1S5%2F2dBVHYBPMu%2Bjj0%2BFauqn0KGRFYgusKFjwzYxVZkEbLIsMK6HysQGOqUBN0ODWw7%2FC7K17sSs0q4OQyyJgTms%2F9nDJwbwsMkIff8%2FfetBoiP3UkvFUSsTGCBu2JjfKUicKX50DCa%2F1vIoDSaNSdFJZ3ZLGV6TicxHeid5eXork7SM1yGJioVOGZtVBw5l3Ea0wAW4TuyJ8SLpssuSZHnSNJW6LOzsS7vFbVlhb9GBRFbN5yKzBfHA%2FXx2dWrjvcOS5fxoHWzPeLzmvNjX5Gpr&X-Amz-Signature=5e0789acb3d7530a9a981d3eb1d593077b0b4a899da01821bf632bf0dac691c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
