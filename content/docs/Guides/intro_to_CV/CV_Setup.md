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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACQR43V%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTYZgniXcY3MfW2czxV0Xa4hfE0hIGc7vEmPHUa8jPKgIgCrjWRCOQVjSrtfk02s%2F7%2FtjPP6xz%2BC0T0zxK17cd%2Ba8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNeMb5veFoZa5h%2FFyyrcA7828KKDL6z0wzlcmbZcVM%2BrMQZl6a%2FEgDKElpKbcSpiSbRYJqkq9T8PxXeGwzCcPVNQo86%2FNt%2BkcrgoPQ3uHp5mv1ZpOOqTQ6eo%2BO%2BwHRNG9Yh%2FOQFI%2Fr07bmd8Xm8hQGhEsgpOJKP54tCQbcn4w6zlL%2Blqzazw4ZMUzhiys3OcB2gIt8c1NZBgVBjSHWHGFgVrGucwziLb6nsCtpJMPPD08Z%2BozvT3sGCcpziY5s2QDN1WifwL%2FN2Jtsl0hgyPVo1nGAscFd8QWEXhn%2FRzzBO%2Bc6DcktUKGWDfdg82Fd9MFnC%2BAQlEBNoNM1CaB8a%2BpZTowgUOIZxLkQcaMD6DwIEyQ7qY%2FoiTowZB9mGHm%2FFYWVPwaHDNMBS97Po%2BtFRiJAwYAHv6hd2KqwuOTatSRKm9qr7NIH%2BNCzSo6Ok5Kw05fPuP61MUlsH9ZoDbMTlfkR4oorn5D2WhmHXyK0W4se1%2B8EdFhP66tTGFdtNKDmtmlEJfbagx4GT4XxiRCNEci4cAn9lPF28ccaJCYJM4auSjWv4hdtV7nDCaAeT0N34J%2FTs9n7%2BFZokq%2BZB1sQMOuSyaFrpYT8SOlxDVJC9S4gZlmwtwmrJU9ZQMuwmBAisotQ1u%2FGrzbLmI83p6MMvAjsIGOqUBpeYh9wUIk6rD3SfHzfIHdn0wjFOBRxdhfcrQY9lk3FsmrhOXggxgLpDeCsvvT9EBctDORQknXX1EK9coDismAhKM18TP0EDP%2FkJ%2BUSVlw%2BBNmwZCVmWDV2A6F2o9eA8VW3fjq5Wtza6MPM8HpT9DYw4BkAqDJMmpj6tZd5ryNwTA3Hxy2U5RAsJVOw7KJrpQEu4wm3dj3BKx8Gg1GkOP4Ri8gHg9&X-Amz-Signature=1f7936b326154ae6f72f6782bf7f782e25a88095ffb09058f2130ec87cc4b089&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7X4V6J%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T041202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbGMiQGquBIIeTrnyzgHxTggBEOmHIuRRd8bYb9niXbAiBCyozIf4155GzMwVNuNV5T2Q6rvFrR7J6MkX3n9THdCCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMBE3UieItA18qrJWzKtwDI6aBlLab92HABSru2ATrHcSRZK769g50clLDrJ7Zgw9TTmg%2B1jnguOqiI%2F7P1duNHqgkyWFIQZFnzaPacXmVgrdljgEQBPBke0bdGbG57D9JLhiMsYjgiCPqiarbSKxs4C3QlUOiduRyuoLRbl27U5HgOdURtbKtYcvcpzDAPRvvoWh54jsozts0oek9YGPHZVFp0xYULVWWlfYxvHzK8s20y6nJ5vydD77Sl%2FyTVdUNRMkUl1UdEPH66A05q2LKw2%2FBWsP3jkGmCQBnzkHbhc0IcxrTJDBlD38%2BK185lEKfymHq%2FkhnIAUC2ky5eBGhs4mY%2FGX60fHH3g5ocfHTM2M%2BfF6JS3atTg2g6T6vd37g%2BvcRg2cU1eTm3zy1cmfGTzlswp%2BwnoogL0FouFXpk%2BmV9vSu95d%2FmY1BPsVYxOFjlX42y3JoQvmS3WIOJ3OtUwk4Rf59gqNdfdhtrGqCMjzZtXgDfBe6p9xACb7dStzixF3tkTX4KEaShKEJb02sTRXDTgr37k1jEVhJyBNptNEJI%2FcXoT9RUcdYXszVK%2FehMx%2FJMj27nyL0Yg25KKoHrsrDfVHrHyyWcYeJkg%2BU%2BoQsG7LiwnvghFBsOpH1OlgxSla7RwqTquFxr1ow88COwgY6pgH0%2FrS1MnT%2FNQMo5oxpKxKjiASxYRgtenWLuhoEu8ulJXD%2FH0JYv0%2BhXmK1pCP57oOQpkrbB0xponhnPgcTrKFWbgQ%2FL%2BTIOAP4QOQ0toi%2Bwmo%2B2X7F6dEewbUq91AgSFazBwH0TrOBMrOot58CGiqWTTCLEXbp6FPiADsJ8stmtLzcozq7pnWKMcz6lNy7e%2FEzuQH3vp6tJ8fCOYkFYNuoNTNrZfQb&X-Amz-Signature=8128ecf79b4408ecb03f14396a1def1c179f9f9ff8d31a1b87f20ef68355353b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
