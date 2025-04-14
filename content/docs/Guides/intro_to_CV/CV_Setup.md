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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAEINXGV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFqbwRIF6OfYlLGaQB5RjVYeXmvjOiYjQr%2FEv2DasNTAiEA5onhc%2FfEGXzsI0KzJbZ21JG2FwV5E5FCSYl1fXdshDEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHqmoGMDN9t7L7%2B4KSrcA8h5UweWmKE6gh7yNuvP9ym7oaNc5pbSJctfGjpgmE0%2FI7tAZZv5n3JULPEPgotbY7JhoRt58ZRoF2VLlGzZxqcB8NJfDM868I3LfbNY8G5ZfwoXvfdplsp1WTMVV6NcGOMed7hVOqZW4jSm2PUWrko2%2F%2FAYfJEHJeMoifp3J8e9EpEAoPQghtwNWFxKh8UCs6NUIlLAAoM0G9rm%2FttMcqBf3JWhZpi5kX2u0UG%2FbApPVqk9GoRKR7ztyRe61%2FqxTqp%2FU%2BwEIDp%2FgqxmWQzQDMbdZQaMlDXzi0U%2BKhIjutrmEnVBRzLvP26Z2i3yjByJOoIvOgN5uPIqWpvp11%2FOccsnFDGUUHKED75%2Fok7QLxh18%2FEgsMlMJvrCgx8yno8mKsKIYL%2BVQGJLayM4%2FzmxDwnuoyS3I7mkON%2FOC1JokL4HJANqpI0PXcx4SVEfRu2BYZDo%2Fjm%2F4Et8kxAdF5e1tzBuSl%2B9BCNo972jHgsTW71L2iw5TYMhVDjQqnM2Pf5%2FPvjJZZwltR5n9JHgYAROO2x1fFjh3VmDJTY6dgyD0jaidGq%2BX95JQ0I%2BAR7txp1PmUwOYKI0opmMZVkrky8oBeJZbRVOFbTgBg680bVrvDGoTnCyg77qqqwI69RVMMHj8r8GOqUB49fUNwMEUQvzkMebQFz28lfTyEcI04E8rSdXzX5cCHYqJ8BxpsKqSsFI1GAPkkKv3galC89NbZK4W1BOvn08OQ3zp2LvNV59pqrYMobF%2F6KS6zBKa7BaLOaZmafqhl7FaIN8nbUOBBe9Dt1AI6zmbaq2szQlQbq%2BzKMr766W4HQis0YOZRcgqDhDMvRLAOSLfL%2Ftc4kaNmjMxHM8UlfwHGywMfZy&X-Amz-Signature=20da524d7dccb95e4a1fa01e726aff0290154a7b4708ade79a4ad64e72e5bb0d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5XLT7HG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdq7R6meKm9c5oPMrGoth2nI9fOhuzAsZqxDyniZ892AiBAdNWt0npElFu%2Fquqn%2BurTugSN8COONJlRps78E2Z2hyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMqWvdEC4TTM1quJiTKtwDUIYta9uLuUSwn7GowyKdJS4RYOzKQdIcGeL0u%2FRVoqnz%2B%2FENKo9Y4zrBir41zTnsyXA%2B6PYxSy2TaNgHk4DzZjgZeg%2Fh%2BWyjqLnCQ5FVdOjouvsM2eQyEs3tTD6a71b9cCnueW%2BS85LQdwl0TPEF4SXQ67UQzQbLBgacuOrSsOz1IHBtMjhUI0fmqg%2FzWpv5Cilvw2hYV%2Fd4WGO2SbVBpTa0W3FrWv3%2FGsZuSpk3mtti7g03R3WdvWPFSGLgeioXjUUw5Af60pDzDfu%2BYaTYxWRKcypQNA%2FW9dZTfIyhlNU7syQuW4C5khZC4kyDBRqgK1RyJanwHl6cSQ%2F61YkoHOlRj%2BOJRO6XCM70jRooeHKpJ7MFYWpMuxKFMiq1xU61N7Pb44ZyR3j6ZyodzGMnjdMCYqTgAaTGNLCFB0hlteJVoe1IOwWLoRQSTlU%2Bs5I5%2B%2FNlFFlLAZVDmmypRK6vuEF527BaD%2Fkfq%2Ft7JUl4a3t6ONaESRkEgcR0cTsy5xp021%2FutDe%2F%2BcZUlz278S3%2F%2BqBvXLGq%2BRvyBn8dFyU0jMCS90m%2BACIjIjWXN5eLB4GYjp5eNWJBxSIBB8Ie79%2BIfffrwnXkM7xlYalZFYqH0vDp%2Bq3F%2FPOr7oWEnf0wluTyvwY6pgHjRSzSr5rgo3LyhA%2FHR1YUA91QYmm2OCNyo%2BDMiFgKXYysRwscNsfWwNyn0xuqTMgXecc9xr1814Vr1nHKs8ke5kUofUCcnfbpLNNxAd21W%2BCKxmnvIEa9JIneJeNCGnM8ewhsC9He0KyKEDDuUaxvXS%2BggpBvh6nEqI%2BMB9HbTKDOvtHgTOHYnmWWh2zxe6zBxrUQB8XxvxR7A%2FQ2eVqiTUYhxuo%2F&X-Amz-Signature=20619357b0efd4a3f218d44f522384932ab2fb9b17b2086992d3ec826594a912&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
