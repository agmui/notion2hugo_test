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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75CWET2%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEQ%2FhuaJVu%2FVcl8Tv9Vka8IpXdwl1UUrEONNoG87An7yAiASmb66ya4NSnt1de9Xj7LTl%2B0WtxhPaDISDtaG9AwBDCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyMBmY7HUjS6Hfm4wKtwDCaCe1pum6QmIrZHmnzIvUg4weBxGOIGjDq3%2B1e8NtC4EDzgb6B6vfjDXvez8Zy3nm6inMCcyExxpA2bAqLU9Yw4VrlfCCRMCxX%2Fa1a1ry5X5waUTvWk33wnbBxzPID2RDpPlApmjStW0K%2B2C5TB%2Fiit5TaX3P1d%2BckYiZ0pP96k2A7duEH9e8LeQS0E4n54uaPYJH2mV1vJgGDGYCURVCjVbuBGJpgxiX5y0kqx4al%2FesOHe7qQXBwkWez2x8X%2BujS%2FxU%2BlXLu7pnUyZXMwwRkcNXBqnQImz1DUCND74gMFa0OAxzPCQ%2FAIHoLjPduTRPKBhW7ltyMXxIszd1ejGx2cOE46kRQOCw%2BSYHBoVsa6pI2xuYSsHtF8lAcIszCMkWXJfBsb%2B11n6gbpbBiTN%2FJ5oemYbUP8uZ8TBbmeYlYYA5c6Ty%2FrMtTtHkPgzlYy7cULRzVC%2FK4d6mamzKEEukz2uLZxVjxlBRUou8XMClbtWl3LVNkpufs2y0yIb5kD1waJwwQEj%2FFyaT8BCT2b98KOTM6YM%2FNITjyo%2BKvQYk%2FpcT0OTdJf3%2FOu%2FmiD3dAs6SWF0ApNGg81AgmToMRcXWAIffCsrRLhsXSkHPjdTfUZqHFVTU4C8ZYbvPdcwtsL1wQY6pgGwU%2FlYNPbFMxz%2BgFIVeT7%2FqQ%2B7Zvw%2Bzp0Rv4JBYclrsqGlspxdau%2BA3ARwZf1bjNyZcwRWqKjhlwGcE9Hv5yUFJf7Dy4eTJtuCdcxjVcp3%2FrkP9QkOrXGKA1fK1lYy36bVCmIYSIRe9%2Fa6PdMyocCGRC21sGqp1vJ5BQjeBNMtD1tyYiAn11gHziXrpnCyhsimD%2FJGtBTmtp4CU7RlFGZf2Xdjsvjp&X-Amz-Signature=9033a13a044770de23421ea10da8eb6dea7c7514c9902387424f3b3d286f1518&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTLTW4U%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHBcmyoPgA%2F6pg4QGIQrZ4Y5v8ub07gZ8QMEaXU09OS3AiBDAUhJes4y%2FEDIfQos3kHMAa%2BkX8zEqRk%2FIn4KFX2eSCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7wAMyefyWrgGXTbqKtwDYLISWI4ktQZ945SPsmLMLWcJohQwcqxlFK8XLtzLgRp3x7y1Xqft6eL6aFpi9ZnIeiC0g9b06bMrG8lXfD2eSKOkH1dRop6xgQpAqQ9FagaDz8nDWpawxjL6iF1L7nqD%2FQTpDFcXWb%2Fl2BM9170kCRPRZ%2FsqKk4rMSN3snU4zrZLxCaGQVkBAZHrJhPeRRHsgFjEWb6PgK99l62xmFvA%2BxPM72IO2SItHlxHO3DN2jVrVjrOqOPJriU0Pe%2BnVKNVoV%2BHeOtx5DQLDawf6D028bx68sYC7bahhQQhu0luLrjF60oYXJ3KwWzAvS2EY%2BEGsEwJpXws3oNJnev1PylqXOMkzb0pifdeYu2mY7GvKGhLkDl9CBPfE6wjD76qtfo86dOXADD4NsJdhBgwRWHtORASkvqdLElqkeZNp%2BgCeZKYuB5HPGp7aK5hcPDezhw3XGK%2Bzke%2FEeB%2B0x20WkcyR3IhlPN7KFVAoPVMKz3yDaQXa6zPJHr%2FkIPV2thI9IcS19s6ndJo6JgaE9U7XoKW4NYFeYj6ehyjXvhO5Nb%2F%2FwnPcOpHUstVbGGxjVkHtRUmYagDfMZ6hs6PHxiDUmyityXWTYKZGzEde5jB7zuasz7VdzAhjcMx8J4dwXIwrcL1wQY6pgHm78F%2BazHrNoJaLH7tnD%2BlIYuD%2Bzt6VotV6zV%2FFdOyjMXc1qw9uXwnVEFMFmnngWYpIHpP0I09Zr7KE0MZE9cOdpVF4m134x%2FnqtapQCGgcSAlRa5hXUlWcjtkWevXWXKjt8RcKT7psmn64grjdOR5k3hXc0RHn0DRs1HgaBjOHiyJKickflN9VbLlZ26eGJ27W5SuVVK0GWvOwFxE7%2BdQvvNlTgty&X-Amz-Signature=745f1c7701dde5a9a723eafb3624b306e362c94dbe59821d95a72482dc1f7f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
