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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WR2KZV%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCfl2%2B3Jv7hE41YH0KW9xq%2BF4Mr%2FQcAduOYGettQeT0ygIhAL2SUNruu1rf%2FJnEMbwtvyST5m7gp1%2BwdCVs2zUF%2FDm8KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYAq%2FsuRTq7W8CAn8q3AOtS4hbFck6TC2iPuIGG9xUdD6D5TUYxEYwZZVHFJpvNUMaSMuL9uBeYJuua71z%2F0wCqSiaLLhMsCcSgaJw1wgcDL3DNSUxezQrx%2F%2BxcN6gBwl%2FA%2BC8l1MrOmpZV5iC1wQb2Mw8dGM4RRsYMUGdBFRAMR3yLYGsjUQY9ZkTxNGROM1kddmCevqcUZjwgMqqTDsGoEoHdQkBoLsfCQsM9GRoMVVckmvFZTuum%2BV5rgsfO5n%2FJNy4xw6LsVMf5lHPH7FX4ruOUudGqWNxaKBBZQxWpGwscpYZvt0M%2FnEZ5QUi%2Fe5DVqDdaBG0qrXWK7286LnTN%2BpowaFt4U1kHtAb7zc%2FdjtPJwlCRq5fpdxIeRJg7EqybwxUPjL8kDHr4VKlYHd26T6WSDlvwi1oWeSs9VqX7hEwezwLB4NKatHxabs7OE6zCnQjoGipm2ubj%2FTlLasyet8jSKkPLGC7ud7sTglMvDSUxNNvw9g93be6OdUXc4QWguxh47q%2Bh5eYulwaoci2Z%2Fl5msES9maYNloCQ6WAAcumTLVFpX69TA8GRbRzidpzfGAkgsyv9edbYp85mieCFuZ1qk7kXNADQ5AL5KVjq39FrTI0nXkiUfsTfmkYBRV8fC%2Bhw%2BzGs3sEVDDI5NPABjqkAfUkmJWeaChE5jfKwtUR1DNROFch79gbBKfYUEXEtGlsDK%2Fkxczf5hPo3Q%2BLC4WHD%2BC1A%2FUF1wjUOIgGFZIMcrhqy6iI%2F7f8Ov7uXPQ%2F2fgHuhTuZMFyHpdJLe88Kyxx9I04GrUh%2Bs10t2J86%2FRxpZ7CHDP9ZhLQDK4mN7Q0exjq%2ByJooyY1CO59ULHuYvsNqqahGK%2FOW6yWhz0Cb5wthSiseOIl&X-Amz-Signature=26d4a0e9537d6e580dc6cf32795ef1e1fc85020b1c6bd89479b073ff0fadfbcb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AIGQOI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIDHVKfKOaqAyNYxQL7HJ0ZQYJV0Nxn6UHbF9D%2BWIw3OoAiEAkrgVl5obQZyxFWmatMHvx67ZEk%2FGVWwgG1T9vBnkHxAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8AZkHOWkCu4sX%2FIircA%2FcVtrC6xasX1Zl4d8zCXhpml%2FGRp603S96KxOCtA1NKybdYcmE6lFg7WgYS%2F6HRfuF5MOnrL%2FX2iKLT6Rrox52pHymDyum%2Bu6AsQyxgnL6sSbE3layKe0Hra6jA%2BXr3UJZqzk6E%2FotAsVXXKjf0ZCJYNNj3jAHHT6xqnmE1zIyDuS4zsT6o7hLPEdQLvLXDotd%2BDMxPS42DlqH2dhdC0E36PRdJmMWVzCJxCTGpitoiCftz%2FYTzWIDuYIgR5b2xrGunoT4JTggrpGXJMcijufc8Ln2yGRmG89t2F%2F4yZB1AQ6xYchhUlKZ2WsnBHvQhzIom9f4Ws5T9DblTJ6oQOQ4AGOCs5gXkXy5f%2Fzlt9nVdxTodDNKlirB7FQvVNWmylEHaN%2Fv5K1XQOktT306U59CGrqsRLIK%2BN1AWSA%2BrRWHXNZGmo1vSLwJ6jKF5yefRLXkgjNwVBqOAilplpC%2B8tM2UR5s5lUkrqP%2B8zdp1HdBDK35%2FzUXi3k7DLEECY0Pjd5dZFTihD5uUfYXPnPHQpRN1N6iPy0pUq8cbE8DHhMGX4n8lm2NPc61%2BPNet2uniPUZYyFGCnUNolPOInfgslQzzogf27ictU2BnROE%2FijjXlwdNnfHAAulUslDzMJTk08AGOqUBxU4QPMlp643vNN7OrIHlx1jGv8my714EaLjO3kVd6XwLic%2BCF3BporaRyWIT0U9mLVekI7DaGlS4YN%2Forgnbw8QSkPzhCq6Ud%2F8KR7ik8dLCfLBi4AlQeve2%2BXURNe4La9Qe2elNUSddFt8spMWAGjbqc5JoTd1RmJvXRsklB9Ein67EeGpvJv6q%2FbGM%2BAM02lwNgq0R0CUueIiEX%2FM96Fyl%2BtPu&X-Amz-Signature=406382df49e212e3ad56cefe8b6de7366e91dbb65b70d762b48b91f4e7c2474c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
