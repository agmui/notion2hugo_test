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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ563JWZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqAySmsIZFsD6e4Qjg1G1mcRbkxvF3zSTALqtcTKPYMAIgN5bD7VZomiuLM3S9r%2BK2wpRSY7DxORSC3iKnJwQddKkq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDNFg%2FyLAFsZLcveZDCrcA39e6SyMtJcLwGG8XVC%2BbPhXa7RsrA5TFgzaSsK3orZBpgDskG%2Fk8mW8kxaHorktisjNRvmdmQcGL9rW28gL9rAMiK97VS69F8j8fzFFPgw%2FMxH2UNVByzpymsPad34P7KQO2SwXYfMKjXlZgdFeCNJcMyaWQ6ocR3O59eClIJTtoxJ0iKOnfhQ5v0GErr48GAChMrpRUUfCYsVg6rRf8X%2Flr5TaB%2FuIcYER3Z2EVzpndUckpmD83T39aTN0Xo%2FBYiZrEFXqIp4BZ%2FIMZXgwcJklT9mr7tjQnR7P1UofMg8GaQZ87qbOtteCQ%2FQRsOXJWy21fqTsRmzIsQV5%2FdQ%2FGxDY%2F7JTxZLcAd6nWLb9lKnrMHi6zgQ2HeXytWnacSRdkaKU9GQIv%2BVxp0uhXBOmSGdZpP1r9fvlBbLVeH8gkccxTyZMzf9coxQBSez2eKDSNjIqhf1GaXl5NBN%2FlX4nTaMxdID3sj8NNpTdpNnpEvej7wAQSMpcI4P0igB2wkTbZeYL5q8phmjisqdAz6dq1u6h2OntJlXR1ipo%2B7qFzSGPYNM%2BkS3E3%2BIg7x%2FOjv%2B5VbQ3ncwwo0tZxNX9VEadSMV8p%2FcIw5%2FIk3jGKjk7jG5ZBXxWl8YRPzCgucgZMM%2Bn878GOqUBsj7IquWypezNZmMHkYYGT3%2ByBVqETacBaJRN1JKviUlHJOeQpnBcxHWHqmtoUtN1yN%2FSPPi%2FuvHGQ%2FXdAQ5r5PMDCYDkkr6piVLrp9COrQgkl6wT2f%2BD8BKBl93ixeHGUeEF2CM%2BHpIZmBLG%2BNsIn42zz0wcbuKv1tAl%2FUTidNPSlyw0m4ztAZXWVWNDuC4AU1eAAbunjfxyReudLLBmeGb0lcnP&X-Amz-Signature=352f66400fa7f66d6d812df06cc7bb4be729dba72d17c0616374414c1dd0da67&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP33PACZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMRnPaPlYigm8lpvs8svpT8hV0he%2FPk7yGnYYGeS0cMgIgEswnkZJ797BKbQvaQJbetTMow%2BOOTvMwl4%2BYbVpHuhkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOIcK1koS8Zd5PqyVCrcAyF%2FE1O%2Bo4S%2F5gD3QQ15W7Udii6hgjRxGjBC2VL3AjamWWY4vZOttjWraP4C3age2TSC05qJQ%2FuUlR8YPkC01xeB60GgsZMT0tCkLXPUP5uNcsDiCkBm1tESfvtb2lbKDRz%2BMx2yrEzZ4FBofZSf8eKFSWFrat%2BUwOHD6i4yuV2A3jocg1F7ly8oRRpPkoexxO7zrspW%2Bl6cNB2C8dfpu4WD%2BuqFhBQ5hF2Gd7AypernlCP7d5OH8iiGiIrBTpV%2BR0Pjrw%2FsJO02IApb8BEgAVWTV26R8vyha067XKkn5ymRa2WhtaGi8UTJR1Wh56aM4CKLXfsnicdYcr8Tecz8cbqpXXvoiavy%2Bc8GVYu8NLMyAEttkeRG7PM7EM7YsdRyxCDoPAokKLAj4%2BftdjT22tjV7XpY7O6ruMWsP4tiV2oiO1iA7zg8DX6SzdJ2wyGBBiaI5ccUw0nG88d3%2FL8AXxcj0QCeSEuukEcH%2FVgEHO9zpD3Qk7uBzeTs7IQQKQ3HtJ%2FW6KTNXgMidTDEF6PBZ4%2BasQkYkDjF35S%2Bhzcf%2FMk0OemYv2DyE6ex0X7VoReQQym8KAJx5EPKde14WJrlOvZqVUI6zhJtfIISn2P8hoO6ueyhgKz6GHIFx%2FN2MOam878GOqUBfAEzYsXMFaY6Dfp%2FRuV45NFwRkSGmRXEJlDBFbn3mSqqdRDCEJKdXJ8UiJT2SZv8Z7iuvpRWG9qe46L1X%2B4GFg2U8DV9mddZf0tYZ0R2Z3yHAn1DamtNzKKxNQi2Vq7vOq4S%2Biq0yeWOch5ZbiNLiGETid1toBlv6fvvLsh1UuX9DupAStrSqWKK3X4OZigfK9EqDh%2BLDKLawxrHNlaTz2OGQoWP&X-Amz-Signature=b46e6c0271966d49d995ce6efe1219466c068b52324f95ae701a38b6062571de&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
