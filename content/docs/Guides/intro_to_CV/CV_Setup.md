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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYUD53T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZhLYUWF9d3GO%2BzeiigSE5MvDJpx1fjVd8ph%2BLHWJB%2BQIgUnGm%2FeN6UOer%2F8mdGKMKughgsr1Q9AZGOogo%2Bw8t%2BrYq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDMv2RIc3EkzLIafeayrcA4k3ssKFSgaGPGKgdFdpigw9QZT%2Fm%2BZhN%2B2s8%2Bw%2FyHPD239VeiNjdS%2Bwh1ViCUzN8AEAaLKLZNSJL6upaFuD9ORMLaMB9J2O9Om%2BM0UU%2FQ95hXY6wFAqj%2Fahpc7w6F912Kbg8onmvdiPYjNZyr79KbQ2U2moRlmN4EdZeJBL%2FcqV2hg5stAPfuixfc9flaBXBy3UBz%2FDX1ooi%2FDirqGxtUlVyrGvoL5Cgyy1XA04WQbm9EALgDhFYdRjXnXiwk9n4IPvCxV7gpv8wvTk5Jn1flBFtT5YnaO3n6A6BxN5YEYeaohXTvjow5J5BiueJcRULI%2FsgNQ5DrHgfys%2FdzAJVTA8WlUk6eSAXPTuQfGZEmD3X9jasjwr7czjliyd5tiU11zoJTE3RQaffG6fgtLA9v3MvMpffz8J2%2FTc7791rympuR2lF5F9UKy4inE9gvEAXPSxmJbx7SW3Kou85IpXHIKiYbr8OMxFmtv08ogOAMYD4nQqQts9OXE%2BFTlatlhvVtcQaeAT4kzLezDjskfzHP5U%2F40vDKsySZgEgv2caKd6soYv8EKc8VHqoLRjKADEA4yFbg3aXeY6IF3i%2Bh8IZE5yvzY1%2FUv6pWsQWy8kGbBK40TQ%2B4AZCNg4FOvaMPuCxb8GOqUB%2FVXFIy75kKTguCjERfdv9%2BbrCHMOFWNL12JNvagYaGWXSiKwOeMrTMgc1J%2FOoLdMiekJ2NowQaicEMBPDqLWhzU8wQsajr%2FmRJkUyQqm0dEvZv3BMRfsyg6ZRYjLZFVz9LrZP2gpUbl1%2BsloYMJ8zoVT0Co%2BjgEU5aV5wZXaoW4bRw3c6xv38FVUquVYlXdKpQt2T7JDFcANIIeJLZjDMXFWW9FL&X-Amz-Signature=15a4260aafaa12702d21df74472ba1a97e903e5c56da9f50697460810b66c966&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST7AZEFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDr8gQBSrUKcb5o9JW4cJrlMyUjG%2Bl9M9YahCi4aJhDFAiAYS3MKdeOVX8CYQrxesL8%2FKRTc%2BwXp9VnigPLhp09sqir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMj7h9vx%2Fp1iW4doahKtwDEeq%2BU%2BvylKvjO3hb6vlZ8xjikUBVww83Oc3aAJcWaFK17dvG7g7WUpkbBkQU%2B%2BrwNjep2cHb%2FPHKIRmse1k16uydEcLm04ur%2FrkMDe5InPkXRrVRN8LH8y3Aa4kaB8ogMJSEqCLvo6AUy5F3eA3oc3G1kYw5f%2F3inNN9KTJcJu6qWSEmRRCtA9fCXFoDKoDf5RsZHsJXCo4FWjjhBC1er7Fxcf7tjaOFW42UB78HTF7quukSzv0MLEWpSV00ZULpzbV2grg25%2BrAe9YZjqhQkZojU3VCzz%2FAcMaegL5QxDijLNxPhLvPoDTC%2BLNZF21lhR8weshiPi3JzAX%2BGVn25L5RNx3XXYeNm6HSe85yBFs%2BuWL11F5ImPWvUHuPwQCG8M4HTX1jiEzV%2FMpAYTKPWmLjKVqlBNncZRjeHxXnfWjIIL9RzIOquiUMFyKwxuFXPWLF%2BFZ%2Bq8dIEuaRjCmT%2FczMU%2BGyHYZFmXCNyq92vOurCO4Qi6FXu7bI9A8aUGvPJxbd041QxeFXeUR5RctTYBSgGXwT5QP9UCODhtILDyTU%2Bpn09l8%2FOfjMfNgWkrZZ68t6HLbI%2FXMpsN5u2EcQVzqgapY0ktR5NIcJ8DA9Kgpgxu5EEv9QbEXS750wzYPFvwY6pgEnmB7I0ji0Bkf19Y%2FpBZAioyeeeS9sxFYG9Nb2BTq%2FQ%2BGDujGStj1uckaBinDS5jdMwCESNRwUtRBAcajdWUTrE9lPwxvNnd97WkI9bjTdS%2BnAOZQtpsdQfUyWjT%2FiF8JrJsns75cRuYVZTDUt%2B9pTsow1zFgR30Di86EWzQpgVhjCytwC7wbZiHFWIUKUW4s2xKUUSR04wjf6JaBiBY5zsBeS2CpL&X-Amz-Signature=01653746df1bb68446b8a09572cac80afecc8428f595e304a369aa90f0498236&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
