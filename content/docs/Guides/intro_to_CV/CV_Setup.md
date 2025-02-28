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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSENJEN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIEHNqScWmfQUiwBOxOgRwzqaRgh0fMsSuJ8FRnUv7JiaAiBS6MJIiglJdJd3w46xJuKunEqzcjIDBxG49XH%2FsOgtayqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpjWcqi6Kavu%2BVEkyKtwDEcGMtbq7iN%2B9gPq%2FyDuVYj%2BaUtpGy1uZB6oxpDCCW9TYZ40pDR7P8VZkcJ7c1CIOObsaZZmFxcshPwm9YeEpO1mqfVjf%2BDU%2Bq0fTqyLGYXLm7AYpvQsR1awLUA%2F8czu2RtJizPrD35McD06mWwuPMRwFGcABE%2BsBY%2FpBaI%2FLCyeHNouRrji2ETcFaxe1yzUd7Py2jvhESXeWvGw7vxKgmqMtUdq85jvxqhe0hfUtB%2F79ZgR2u%2FpubwRugsgn3NWdF6qucMKk7qiA24zD2zFVykZ8MryGd4X4d2WxjlnwmdIY7ycUd0Z8T%2FWW7I4FvdNXW%2FoKVTAfDcFSkC69%2BBdcbulrKE9LFiCGXE1Y1Rc274KIKaIu5i4mdvUwFBO9kpoGWYuoayPM1y0HhMqr3%2BQTa4XZ0PHQid4qQSRCnXcRV8VGJgdek%2Fq2ptvmLtusAW9NEM5SyvxVZMnTiw3xsPpdgQ8whOcCR9%2BNbkYH8BKMBtIdU4HHaSLmw7fhrebzKbx%2BLtZhBOREPEL2IEEw5WGvkCa3gA2MCIp%2Fx0ysB0P62rsqCBLfOX243gdfOPdD86fP3LiM3XFXA5QX%2BzEqzGx98ELlYkS9Y4j%2BstV5Nljd6dGrxPOtcjMLEA%2F88gMwseyHvgY6pgFCG0iCNuYrVQoy5k4fAlJrdxxgaPdYPHxTjSUn6y4HCMmKJmAGh0a6%2FfBzr%2FYgNf6Nz4h0%2FX24x1W0elokIQS8mN9Tz73SdZ8kD9lWIYqW4lRVGewgA5cmooX1D5j31F0xWobs2IXEVWpuQ5j2cunsFqn9fttoO0Mou1KE1WbCMVTlkwCleilghsPkXhpRqwgVVYp1PaHt4SwjVCupXdukk2%2Bfoerr&X-Amz-Signature=984cba1c18ba8430040a8ed1668e0f764040230d801f0517eb9db6f9ad1c1899&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIKIQLK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGhTivNx9zDraVaMR5wJ2Eea7WQbCbPV2VGDXkmZII2nAiByElduAmon%2BXpVDoiP%2FxAMVspnO1FcB0c9Z2rQwFxzqCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAvpd6kbcEk8UF8%2FHKtwDiuyr%2FXFfj330CLFNLnl5crJwhguCTE2iiGdJ92p1y7iGBX8vL1mSXYe01xZXdx15WF7YoQP5Js10bFYEGvKsthPYsecg72VZapAE6wE6g3gfZ0LaJ043DAOalIt72sH94dlPRRwCF6OJtZprj%2B%2FB8pXeQngJxw%2Ft98DwbrSdi7dl5WtxQdAJfjbiZABMsd%2FWFF7fs9NZkTsFstXH94pdx0HLL%2BKWuO22GdFAenAGzAbi52Aq0Z3E0BVWQ9Z6ieI37u9%2FjWVi9Fu3NYTWQVujoIpJsdobcByl%2BA2zBDLGJ1%2BepM7cGXYexmGTCNDeS5repIGQyYfZDO6wqffxB5iFCEmPpD0RAvU%2BjyldCKme%2BGbTKVroODboISqKW82M1C2WvDR%2BZ2VRscDZPPPdvwc%2BkWp8Fl%2Bs4KtV1r%2FmHp3cW24bt47Ur61qhXM4MvEM6cUyR5ky735IGqfrCaHKt8po1VkWF3RgdrdRBL%2ByP2E3Y5BjFraBt2ObpdaSgDgqhjk0Qf5XyWLWTe4ph711HHKUVusomi3W%2F8M%2FKOSSX65M2jUjh89Tqerm6%2BN2Gq53Rz%2BSOfdhvXaYPZBlElk4ByWDnAQmsXzuW1DQBjaQHXelIoC0O5Ioat301zDwtSkwxuyHvgY6pgHdHUf0oEjBRb4am2urHpmjkYhbzOey5HKx6DKLaCp7bOifjV7rcJ5N54fJ6VpnEsRF0Ti6cjzNhCgTyJol9Qt2NQy4ZUNjvf7gA9nstTIZiwSUMBtaW4vAypTiyiYJO69WwgMB7yHlhYnOKcozzVnHXGZaEWX8JZ7bhrBurXFy6rYAdNak5vE%2FrKXw7L0TrW13U8TdvraCROmt3zvOoIiwzW1wcU6L&X-Amz-Signature=b1771ca298adf4306b48657285a64db55a9d6b1da0cb1518219df15b90ed4e54&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
