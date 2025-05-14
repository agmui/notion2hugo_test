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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEN3P5R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEzIJ%2BnJ5GmMVkKxLl94L2Wn890j86B%2BjFsM3LkcszUpAiEAyw%2F9bX%2BbrIpTTvJnLX70ZVdeUVbFkNSWmXjS1xxlFbAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNZ1g3ToDkWmO5UxUyrcA0jq5NgE0eXa8WGnyJrXdeeURkT2tpClgLclyOYwxhAo0Vbyr%2FkN9bCcWwxwuQkJ5DD77HPxz6lJHl4%2BS3ZTJGs6KNkMKyKu98nzkv5yQqA68xNIvddz01Z5muGB4qkCcit%2FFX2mbZlmIeasHjqveo9dXJ70PvIsdRUb4PgBs70MHtpSW8WCoRwgnIfChRMyyyuD1Kc1ue3OUk29x2PKP9rJvvcKQEJqToQTDNJUIdjqN3MnCugnL4ncaRk69TMYfUKN4oi3jZLDmGYD5zxoPXfgpiMOlLpd5eGATOUHiYw5tPT46lbhHBvYD6YhbBgrI4OsSpKMa7v6jj1OO%2BCVCpiwWEifevd62t3o5xH466a9gyBCNPUZ3wuAEZNZqKcS%2F8lHUoygrJA96GESCXB5CO2EXXp%2BUQqCReZjtucegJ%2FVv0JyOm5jZK82piaDwmvpFBD9vK7N0XYeW86bMGJPnNFNco%2BbMGGMaH4pjD4ifr9w7L57%2BYVDubNzSDEPwKcQwV4rMOGmnRXpCHbbgalnMxpXtrJYVVdYyMj72T0SLq5kv2CN8D6etlUeNlSn5Lnf3UMwOZbNlMn%2BJyhTdMl%2FiXqBR%2B2N4SJq71kvCqLnqIaN2%2Bz7Md1RHbYKOsjiMPjXk8EGOqUBzQaudglufZrgbUEEdmxfjIRG72isT%2B%2B6%2FS2TSoCFrkDwTXJIyXxSA9lAPgYyr8pRkS3Hk5wOH%2Fpf73h%2FB0f0PLyvyBGxVUTU4moJqvX0ZTliQs6Fst%2Bko%2Bb3ANeXwrCCu%2FM1fFkcTB7kFCoPDUXzHu%2FPGSTIndhapmhEwON%2FjsNEPNXVNeW8dZTCMIqf%2BB87tsAzm8jPqB4eMcoxThF4Iwp98KhP&X-Amz-Signature=010e04be2eb140a751fbc03fc69a64ce50bc276bd84e7f83652af98e261f5e75&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BPCI534%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCyKJwSg5uQyINw5DEJktCE8RquFwoCiYydNypyTOGssAIhANfYDFejOL62liSXEO8qjth0HTd1bpCjFyu%2BT1neWuP7Kv8DCBwQABoMNjM3NDIzMTgzODA1IgyI8t9ojEo2fDUDJcwq3AN1ZtNugTFHIlzCQpQCjwqmKVyJX2I9gui3%2BG39UaURoY%2B0u1mQTa3xmWWpxa8YkhzOiTJP%2FYoi4OJ7CPP7I59IygajDuMv8z2IluLX9e8jl%2Bg2SaiqUKYh9qzu5zfqmGOclAZPc98MqDoWBs%2B9uyma2zpiCKQ%2BbraqOZrz5sHFonA%2FnHGPz1xc5w2qxs52R02ycZs2QxgjLBUsKj985zE4Na5EfvqbSSY23ABtqZ0wvkAfmXBOCqzq0zARCUq4wpOqpDRAYkzmIgnEkiCQAbyn153UjG7O9lX7wai00JTVMM09mI94KvuPfixIdNM4fo1DkZFm0hBjFQwO2GySNCh1JHJinnjeasHF3S1Rb%2F9JsXmy9%2BXTv%2BgHYwa0sRo9IJiS1%2BKeYpw5wde2MF5dERE7LjmhDVfNdleKHCHDNlv5hhoB6D07Dl0jvH%2Fy3A1Pnvw%2BHnAAttaMpQJchVjlc9KgWG%2FSwZd3nbQDnQ9kF%2FNuBYeP4ghur6k533xZ2sy%2FE2SDqe7eSdQ3m4%2FXpX38uFJCTxbDkITLuQIYx3XqY71fbhZZn0EXussNhK8n7VDiDrDpQzpir1v5hnsLxktVVCFd%2BUmXovIsMvkbjNBAUh82QnwMDZYQqqswyMi6QTCd0JPBBjqkAQDJqyM7CDwMVZ7DNCi8zlZFO0BE38Zaj%2FV411E61x8sXDUk5wv6o1D6%2BX27ziYtZZXGFshIXLy0FvP1qgx25Z9RH2F6qrxva0aX0fVCjH3VRXdEt1TYRiLmBlNRexERHmselBE66bhDUkhqvXqla3azcj9cxA49qXnlr9%2BAzZvpw%2BwrEoGAYfbaceOLlcLoNVPkbQ89nWHcgPDwHjLbywcfleoF&X-Amz-Signature=25225282579027092820750294d8ec6f3fd6f8f26c81f333e72cdc0df27fd8da&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
