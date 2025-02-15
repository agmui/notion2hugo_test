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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMGA2MA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCqySFkJ8o9i9gfO%2FttLaKwANCBbb2d%2F%2BqnXhuN9W5phQIgYsMWftQPMm845lIPpOhwYLTZLVa5JOFddx7cTazFKqoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDC5gleklWp5tN7z7qCrcA6Hg2G4VnR7XLmrU1Hmjcuqmdto8XJEj8mUno7CXgWPsTZB8x2GCSFdT06fgwMKCjJtmcC0odhVY1dOqd%2Bg91kVlVQ5rDQgAowcleJ4xKE0WPGhXmasDqXbZtl0eGaKYcGC2NV%2B3LUZoCpQXZzqoIiT5ZB8YW5JCUJO%2FTtW7VmtigqL5z3AIxrjSXPgFRH8lYKKMy%2BB1YZ28%2B1iFsnqCTfhpyts7TM82Gz6G20mZIW7zCu%2Bf5EpqdYJYPYnFAT7LINd4EMKEAfKlADDGCxJrlD9eD6gXXeW42eHH5WH2MXIt7MleH3uYoEkr7DXGktV%2B3uwxNoSfjgTLe5pwS0jrz%2BKnZOFOFLImQZF352m8zqldXTH2RcP%2FDbxV%2FjvdoiUoHuG6EUop3Xg4UcD8XsSyTqliRZq0fffh2aaojiakEYUZSCQG9f%2BmuFowojlasAYzOUrqVpNPqrQwnTkQHn%2F%2BgBP0tOAvNL%2B1%2Frq3yPLDsqdKkmRqIgjv2RrS0Di7ILribfidklB6jvZJXG2Xn%2Fgre%2FSBZZbHVU7o3rrjZrwXZ6nk5uDCUrpgUazE4aX3ohkuRELdqSoZbTDwbWR5lVqRBij6t%2BU%2BzQNp2ItMD5q7kSYmFeNsORFx3c0MPALYMJy%2Fwb0GOqUBe9p%2B0Yjd%2BycP48%2FNOwhlMssy9ohgTgnDxpLuVPJrIaaLG5ayyRq6A2d3HND4w4BqagyOliHh11MPEzLUf9pwseawWofb3Um12KMKH%2FMVxx7qIgKzeAp5BN4fx6G3PfMyjkXJ6wo%2BYmXL9KH3YXLO2CAtRRkLHUSKQmxKawM0w2lxBd0gnoNEGHhSalvmskwEvzO20no%2FIlVo4cdPTDpVRIoMbQHs&X-Amz-Signature=9b3d4917ecd88f9f775747a0603cd0e4261716dffdb9ac3f5185614df23d5cff&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWG6ILHI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGLUXCbfGfVgHqrKQ7TN0kqcFhpfvvh7TSV1%2BtukGR1fAiBfn6zSq5DQNzunnzU6hDXTNGp7dRw69%2BKOx%2Fiet7v71ir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM9CAdJj8ogdcOoB8JKtwDzJJAJ4AVr8UjJ1wmQ39LyM6Ebue3YFGwTAiMYsPkkveJfcQKW3aEirzQB4L6DA3c6aS1YbUI8D%2Fxy2uukTy%2FfKQxaIa%2FH2cMdN5Ce7kszgKI80K89ETGzS1b2paWwApigqIN0A5HgtsmB%2FZZQg4rEjwkvpt3%2F28WE5kRKnt9TfO4hDY3c7CXD3RNTSWwOwAiaz%2FA35oCrpk6scrW0oWrQhDJuTRs3UrsoUFI3nT%2BQAA2Mul2DBCgVJJAja1ynq0OR3nDl0WP55mHAKb6Y6oezb52kwOX5eSOcrJhd025K%2BlRfDZdlV9IoEoPqyW5X0Rh88i0Qr6B1Z8z6FntKwzRlDpW6SKgW4gTbANOVxk3mtOBL8aobdSylR3tSlSpJVgtasyBn2cUZfY2GEq4CyDfFox0UVLX8PHgEqXyI0tyNamvU93qswH%2BvBt1ZghGc1byXPg1Mdr9b3FAmP86yUEryMSfWu1elwiFHtluECObHhdzQghAIiRtaLVacax%2BzxI%2FJ%2BfEgndfwLbZXETD8BVKdPYWuqYHeCbDdJa5lhQc8m2TAN0jN4%2BF8ZNGm%2F871opCV5ZIPucEIjBO00MmnmmGcKMb7IFHMnC4Cd49fzY2PxSpfMlDd6vH6bshrBcwtb%2FBvQY6pgFLUbmybQbyElHu1M9fV1xzkKNoLj54oTOpnx15TtbYn8pr9JcsMPMXF5tyaVALvPXsKWXGxHwkvwFUjDnVMe69S8PiHZ0qsh2mfkvdvOOJ47st3nPWBEkoikLiC6ATcptu2b7zNZddlr7ifZyxjpoBYiQ1NxwFo%2Fy3U3cxgZ0LyVbuCFDsKPZpU8qzusLzFG4NmpsC5GAByymuPTX81j8hq%2FCgBReE&X-Amz-Signature=47947040e0a3a197fb30dd9f7932c6a9a37bc8e12321cc9647f32751cc2e106f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
