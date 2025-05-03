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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5QPHBR%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCeE%2B0Xcg5mWIpypLxY7HRKyUbUmGS15ZUIJOiCC2f3%2BAIgcxokNbNOkEes6D%2B3t5JxKr1AIKpqExw962U3xdblW5wqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK46zlHeUYJ%2BmV2BKircAz5ugAowtUyalJKVnALb5NnM%2B9m%2Fl%2FOAi9Ey%2B50uzIlYBQuwWlvgYDC9s6ipNZnURvPrpGrF9Y2hEQ1IvSX6n1okU4AWb2PE75SkCBZIy6%2F2vXiJx%2BXlc0wHz%2FTJBkKkUsh0v1cMd2h2o4RDNFFzfau2%2BKGHczKpvs%2F%2FL7D48gDdlDBWEAKIkffYqySk0ytiwAQTRZrj8jZhT70QQWm1oA%2FCWHwvwrE11UZUaywG%2F9kSxMdWrgdNsbfYfR92z4kUb8e8gxyFWHH51bL0u42iMmlWYrnqO62OqaS8ryYubHaxn8SMSKLrVxTulIhpAGvR1xAAgRwpjJFjGgCsTGp5ebH7pKPznMvnhPdXaB0MkHBZPmjObk70T0EOomHPlJefRiMNy078hA%2Fuo2fL5maqDeGt%2FeFZn0egzHaBILyAYTxMss0L%2FmUR76%2B94pcgKuf70hLOQjsJtwn7zaUNSCtJ6Z2bkFX3fWrXdhUuKq0XyPU0RTGWcSEhRdI%2B4WPBN%2FX%2BUYN7AzyBG%2F0DWCiljbSplwUusDkO8hSpCqKZHevHsPs0iKMAkVaNq%2FD%2BKF3ljsA3G9hPJ%2FTfLHTavvpPwLTwwk1aYGvxYdNzT8xt%2BT1uKfGElEqu4f00eln88Zf2MP%2Bq2cAGOqUBiS7R4Bqohdz65rX6FUyfhPBzhqNjuDMPaI7VGcKbh0EI%2FB%2F%2BlU5HzJcZvkcZ%2BbARfoHrDgvjbHgZ6kYCLe8NlIF6t0qJSODvx6nmUc18p8fhY8EuEBUhplhYTsLJP0il7udHTuAlyw3heh%2B4C0eL6F03UZ0xAegv9hlvT0XKqVGrvdkxGELu9CzBOomXGRAzq8nyO0%2Fa7MjtEzYAihCRdRpPTrEl&X-Amz-Signature=1046813cf996b9b7e07cafa6b85a3568a2dc697a5eddf287e4b5d19149cd6cfd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3D4R7YI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIAwbY%2F%2FtWEwdcqOF2KePzj39Bvffg66eHn2TuuoyJbuBAiBHbLs8OH3U9lIQ7mhOfzb6%2FyKlPm6bv%2BoAb3g8EaTDIiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzSUtmoZ%2Fzd6cSghHKtwDe4X0PoLBjB1yjgPoXez7iJQB9jhFVp35LLpPeAtAFKcOiKa%2F8%2BVZrHgrzDCIjs48nxGrVYVthNrlrgkO5KOblKDJVtzGRu2pLurandxhaIqvCsxz53OqhihIjgyPVQuOUxKHUNk9R3SkGjkYbxD3S1CfVCw5fKpRW1SaybmL0%2BTsPrLjPRnJUDdXOIhwih2WwUsL2ED6Dgku1MIafLeWCM6JDu4WBolI6Ktudea4vCxvV%2FT7IweBb9mBeJbaJx9ixs1uQNVOOvhx6DEbcPqpTl%2BflcfvmXqTf%2BIpSWiHh2VsnRc03plu5df%2BiI5BdYdzAhDpEKXylWAswTA1Xk7baM7kT0byvDf4nLwwb87DJbV%2BM75J3SBMfXZD3t9KV%2By0RYB2lNMIpjt4p73lgg9%2FcpZYo0pbhabWAQmIyQ%2BGkMcoZA4ENbBBdLqC%2BS0J9D5zsAFWKQsLoZusGLKQSobJ0MayOoQMhDzymGa1OQFayjXW4K6Fm0zbcyoZ4JoPgbtVZw61mfck0RnidEjGcJuUFfiI7RzIzWnz%2FpGZXm3fOLlBXkR1uQ8naak22ZeU%2BfnFZJLvyXvQeVvsdf1DLOTRZRDssU%2F1b%2BJQbbfZmlYacl4muUPmYVP8DFYvBH4w%2FKrZwAY6pgG5GhNC6ZIaITl4rIYnWVogoLjwC48ReFX1vKMpUh%2BSVZG4E0DkaAGFn3mrFMq1kKUCwVzxp2eMcdVD2aLIoJn0RBsHVGNCSVj2Jorb8QO7hIKvwXVGAMBVtvVf8E0fdUXWhOQS2yLWwugw0%2BrT%2B3ek2xE4VcEmLsRlRfqw9qCBLGPwl%2BE28OmiWuliozJwZqDRuVB8qRDVQz3FDeosgT88CSXAabkq&X-Amz-Signature=d11c8715e26f696b550a5cb6e412c7b6b0953947d1fae02f1ad7b225983cb4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
