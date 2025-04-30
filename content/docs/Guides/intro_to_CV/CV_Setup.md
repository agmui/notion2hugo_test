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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCFAXLN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDJYb8o%2FWfMrYvf8m931cQCOl5A8tru0pYdSayIdf3gyAIhAMqMuxH80gI1%2B2IeOhvbt%2B9AQFD7YKN6Yrshv8p2kU0mKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4G4MHFvXvnTHT75Yq3AMgC8Bre8f7T%2BUpDTTHW7%2FUIquZAChL2eunRnK8G6cD1s2qybbj1t82Vvxmo26Gm46hH6k6%2Bp6CAo2tCzHFiYIEEu38VL9PhZoY%2BtUg2s%2FoyQVfv7DqBm%2FShxPLXBjlHdO88MLvBQQygnNRQWdRx0DQxj2qEU%2FdkslcttHxjPwNcVylGjIgkyh9iH6oeib3crfZpvlskm1bomSD%2FVxk9odXU4IvE2gGjSpHsgwKJ9hTYJ1GDMfwbKq5if1K115chLbQWhq%2BZ879dHFHtsoVp3TcEQ7rLUzqb8BviSxdVOoTbXouEbT4F3RbCRSfhr1xXV1ZZW0pw1%2FjsLcwaQYMZR4C90qInvocH2zmyclKkZqoTRCgmkcb8EylVN1LaykgOPx5zlp9%2BKHDI5TH3jg7Vprrr%2FFyCKz%2BRO96%2Fxx0ih47DGCFH9aMadgb%2FV1WjzJ%2BGP1RFXbhkXHXpd77sTBlCSvi0VJxo5nqFOnzmGh%2FbZFTFbvx7%2FPTR3ZKMsPwsh3UBdiesFu%2F6R%2Bc1ynCmPqgiwFb1PIhJzdViAJ1QpQR1FTk3O7ncL7wTuTdQXbt2plhlOyLgjOIkjHoxOKRK5wbv%2BpmbllMzgH7mkcrPl8sSEn7rypyM%2FXq5wA2bTGHDzCLr8rABjqkATE5PsMKNW%2F0mfa0CnMELnYr%2By2R7KB0vRIBTJM0SUSY5mjK6u6oVCG5byXnlV4QuKnFcQoV7R1h2Bjl%2B8zYUYrwZTcMzmLcnAc79fpLw%2F77%2BVqFu6FQOyxg29DUxHAC00azmQrqkr3bEClOjfVw78W6zEkeLiTVBOLzWE8J1oGyHcT7kWsChWudgEKllILZRBFRsZYWx6teXe1no4ev%2B7bff6Uy&X-Amz-Signature=3bcacff37d070a73bf5fcabd0ded7eeb92e07e29ad0425734bad16edd1d4bbae&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WD3MJFV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCvqh34ETtv7VUnf4iWjNujiHMurTTnXCE6MWmD%2BLU94QIhAJMbSDFH6ArorE3WCXaBxSYpIQaSWZPXtoBefmt6nwKXKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwut6Ex7RlO3oNiUYYq3AN%2BeM4OcBBY8o1lzsniS0vJNB9mX2cF8nceZj6bNQ94zsRp0HgPO5Sp2nFan7w8JXkiTh9bKiR7iTS9Rf%2BO1MqkrRvfafepGG8NS6zaww5BDeoyYts3gfukTunZ6%2Bj8qR%2BQnpbf3pPbab5Wuqw2msY4oCgr60ffLMPf9WEVaIGGQB1IeczsyM6No1YuxhanjjTYEq4H918N3Y%2Fsrp1wcTqP%2FvdqwgnsjCyFZQdoygrLF3gl6kyDVv7M8gqGNADwXdnaANAjIs3GYSlGxMOjH64VP%2BbgG009wMh%2Fj8EMUUCQbUVz%2FrJSKI%2F2OjaiY2RI%2F5PUJM8j%2Bx2fe4mEVNX4xKxrthJZhGyayUaRoQ%2BVx0ekfRyXgOv4ADk2B3KEVCp6MTF7A%2BAOCEgkosHsvX14R3jApfxdM82ubSLe%2B2apaZaSCEYprD7V1F%2FpLFvElQLy41%2FiJCjzq3xtbIQ8tNDT4lpBjazJcuU0yBg7GyOZcYJFgWsXMMmC8ahXYeyJmTfnWfdLB7zKJK3ZUBceCQMvkOcje%2BhIYScITskqgoO%2BWeB9e9hX4jHStXuZB97y0BNc98qZcpzdEiVOrEY79gyR8295elJNyZ7XSwvt8%2F2nnFEmUdfxIgar8w8TuEaIbTCAr8rABjqkAZ%2FtVZmdDLT5Bp%2FvhY1XDm6vtwJtEIvRgpslIswgsXvS0Wr8DceGddxWXfMn1UtjD1G4rSkB%2FF1CeLPAdbs7l9iELNii2nwYf90tUxufPofcNYMd3M6YJcSJqNog7x4X0oY2eg5VIr6sZCwyTHOVklDqvU%2FUdWRLE0Y%2FKYQlWrPgOTYRLGxVqwtKvbNHNrgh%2BelP0YVtQrCtV6X2ZZnCJgtYe2d7&X-Amz-Signature=b2bb2c48e505972ef76b48c50c62faaf1381bdde268351f79a797c4b52e3ba8f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
