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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QUJUSSE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGQSm0pmdGFsCSkHgqkxWmdo2jC3CGSKusFcZH28RF38AiEA%2BplEnxkECKE6Q7f%2BVOyPr2uRlj0ramY4uYmSd2xaI5Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFdYg1umj8lzK9ovcSrcA4Q5Y3Q4TRTBeZSPhFjyOdyo5iRooMD1r7igSRdKUzx5H4B5ZGl0ATzuKPkNV59YAGkB04apU9N7JCEjAtTTzyU1vdIMRrEAOynsKyUhgLKtwassND9L80RitWaT273pfkKHSGLUzhERjUFtDg3w7IA%2BqmaFx1%2FW9%2FdIFJLSNSZV8JOf3vY691TLVWRMKOpuaGuERxSnEyZl4fB%2B%2BUrs0elmPX7MHggV03iZ9lKxWEuxfTW88SS4VRWAKf3lHrSa8YxCT0f6giFfgZGS7FMbicxJP3exf1p%2FAn6Dn8AYeIC33cvwLJrfgFQLYf5x9vJDImxXwtDcMVwXCWMzzY%2Bor3QaVOPruv3T807ZIlL3cLutkYAKUmde5pwwV91q0UH%2BF09wQnXco4MkrHJ27Ld9X74t5VTTkwSYFZUg4wGYj4jF5I7oVPA6OlgDPTAjYR4PXJZK2S6Cvmh2daDf%2F3sEYx9NBmbuosFPas3ROwGuTMyjI2lMu39hwFQTI%2FLXjUp%2B6UiUphDmKomPVt4xHJip691n3CRZ0Cbwkh5g%2FX0b6XYpREot%2Bu4NYa5Rn9Hv3bpZa2dmcqJcTLvpTWkKHJWmZnMV4FGSLxgDOdTC51VDupforWdZ6VeeffjjCAl%2BMNPv78IGOqUBvifYRipM%2BajVqgpR7pNPaGUPO1IOh2CWrWIjOS3QpOl1cpDcFPuWrcqP9JuKajlSizha9spJyfit3nljtUeWKumITIflGFmQtSSJ1%2BlFCYjied7nZRQlUqqYDUzBt0dRdobW4jFrMUrfSTR1zlKe7lrozDy5m3KjaWH0oibJmlxmphOTg9A43ckzFszVI%2Bm3UFsNjoAUjCxNEzQ5x%2FOszi2ABQu2&X-Amz-Signature=144bd0ebe473f5b7bf472cbec292dee512ab59d110eaeb68a19e327cee85e908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EC5BDRH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDs4u8jgHq%2FCK040XA9YVyDWE0vyztav8NfYSanGXZsWQIgHuomSsYK5CuZgzM2ufitjc9smok0oxDzOWWU6DChXekq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDD1elQTdkiZawm5tnSrcA8n%2B4gCknpHqyZpOGY3LCXYDMFPQeb6NXfaK1HS4vKV1R2YSdrjf0cxQd1aF4DJgPCOfxZFXbgIW41HGL2dKlCadcJ0L%2BsPXCidj5ptwLITwGZMkOh%2FLFmSuf2jwRbpWcq726bNndPqGaJH%2Fdzq61xf4N4888RDnwnOTiFL7ZL6gUHtH6iBqEKvnjIFsEl9sCl5YMOSpIPUwXndCyr%2BI3W%2BiF9ZP74rV4gRzsYtl7gV6vLeIW%2F3b8IwYUWRRVBaS6agYH%2BKFW7CbtUZN1uHj09nE2HIEKwquigPClYTv%2BO4Mc3wawEFbosU06FGfNII3TWrbH62T7ahzNoM6JRJzCsho573GWeaS0uPTRIVfQsbKW1Jd2DBF%2FhvIZdQq%2FVHHRzhveQQYFEVUrOhd0EkBD2fZC2wszjwZ%2Fh7xH3A8DYy9ZvZJgLHt8RiS%2BygC14O7fBTdIyycIZD7xPdNMMpjASyqnl9A8udd5%2BAEeIo1yN74xlC5ndms%2FlY9FpzP8Sat%2FC69UjKeCh46GiA2RzyHFWJ%2F9QR65W9s5h55S1%2BTO227HzlWbzv3tC3e6u4rXX5Mv1bG1StA3AzctYe1hqCtojZOhfC0yyvWMS3Lmpoqm94iojYSRViOmaBulbSRMLHv78IGOqUBXTVRepHKRfFv4Vwyi%2BiLzUG4WWgA5JLoRzd5VW7zuHhI%2FhI2pqWekVw1oGRRTYptSMJNLVcUOdGz9HT6TONR%2FQjTzHF3gQ%2Blsvkosq%2FtreomhvDkbjwIep8Qb2Ccb3wCIPK55K0UeYt9wdz%2Bo9mQmve8N906WW%2FzTTHOQ%2BnjHHbAhWfO1kQR6JJKGCNRSe3Fq9HNU9PsM761j0zouDVhCxjVVfzU&X-Amz-Signature=c4b2a4051306680942576da85d6a28fcbde1757d3a2397f4f56b3f480f12621b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
