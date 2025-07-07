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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RNMGIQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD3VNhXY4a5AMS4iNPXm4Mw%2BcPWklVx%2BWxysypMD6x9rQIgae6CEF2ziRECPSTply8pV%2FqAnFE7APouhNLaN2%2BYyb4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDEmi66dw8uJX9H81dCrcA72gqqTMKQMoglTlSikUIzKIN6CyqEv3zHShjw7NRRIJEN8MrrPjJ3n%2FKzwGClcvQlyV9PvwWZyM3Mr0l7Ja9AvsJQ0%2F7G5DY5knKcrXZBpCyaH%2F048ZohiByURkmC%2BmeDplg2YJmkqb%2FP9YgxzysrEa%2FqsQNeQ33lI0ErqSrBPcIuUNhItsLQwqR1%2FqC9g7WVF5%2FKUuEXgJCgCvW6HleI1xgmrHjz2wkBoSkB5pIjvqBmuMkOS6rlnldtdLKcJHe2WhIv%2BRdOGAdPlSvLWfKbl6xAyKsZW%2BsqJUotkRo79gy2s3XmK998htbECDeFh7rsbRu4rE1g0ei%2FxTCblK5qh4HRj1CN3THKEVIU3wdo9CRwJUERPsQkmWDfmXvJQlPRdEVYGW%2Fxp916CpKkUmZUleVgzmIoM7hFaUbeBer55EiLmSV7HcZW8OfXcWTWFcT%2FvviU0uyIzRFcfziHgKyKsiHbwBZEXe4VRIu15jbBsd0mF7YaWkFp%2FugXOsWT3NVTizZAL%2B%2FDtj8QFjdu0N5xgT1IGpS3R5hdqc1vXQm3AKt5V%2Bc%2B1u2ZmpkGQo1SSLjwEywLpE8yxZ6YvozmTPdXuQNo5pwYp0YdGofUt6ir7xGZyVmSfcp08mTVniMJOsrcMGOqUBXnPuBKf6%2B1T6w2Hw%2BQxuL3w6ozaLYEgfiguyP9gDx6Qn%2FHa%2BM7Tg5Kh30d%2BfMPInzOUnO8mESjLJwhOiRlvkLr%2Bb7GRvamLEIZEUuWK%2Fd%2FFT1Xf1L7VU1G1hUI%2FLrUVjJ8FE5v%2BrDYlITrnvWNm2tF8MjNOY3hFzd7E0SM%2BOLjIaoQ4EMnQqax9SAd2184azds1in7FWoQS5yYCmH%2FcEA9DEKZ%2FJ&X-Amz-Signature=e4bd179ed1fd396cb9ddbe9ec847894271cd4d559bf430c958a4af70f87f6ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TRQ47M5%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCnEIRSp8M4K6lfQjj%2FLL7WKoMaL06H2UROW5xkzpHUeQIhALX3HNduxBrf9GKoby74xABv4U9H66ZFuQza2IfBIz14Kv8DCG4QABoMNjM3NDIzMTgzODA1IgwajysNkDrTARd7nxcq3AMHp%2FdauJrUAXdyjTXuGiyKKJNrGOAfHcXZmts71a01GlvcetQGR0yDGvX82NmNMxNUpIq2SZzZDnklwrH0AGafy4JJIWG1uuFo6o09xST4gJJtMXL2%2B2EVxJHJkdeyQv33tr51vMyVrjIxfqG4GiYfuBTR6qQxugztd%2BF9LrZKsKvmBoCtTnIUuodeD%2FkYRCuOjkf3tsWXmjnra7jafOYPrSYR5gKdGlUlJ06SN8Gx9CaLf7yrEAapeOXQAJWgZyiiPAaYh9ahT5TSfIHZqgurEpNXGkczSkEpaC7i3cAAHvMQEPXn8hELcrr4xxgOMMY0oUAzFlpsN2UyW8JKtQe0xkWuS8qxt5JJIEAW4IOAh61xGYvUIsmBO%2F%2FQUQQgJ5CruJc%2FTae3bDGPs7aOk4A2X8SuCo%2F%2FFEcJ1jdWLO9szUrmNNPeGK1xAFFosd6X0fQf0fm9VKtttDH1Ksjmfo1Dl0j5VgvpYOVx2Kw6NB%2BPA7Qbhfv5rmhV8yQ6M6gc3VzJo%2F2bcgx6SxRAxr0ObL4qLPzuT0xuKBBoDud0MC40Vn5du1l%2BXq8UUQThIaErdGkA53mGExV17pbN%2BAVnu9tX10%2BULGglRCtRsjA2vJJ3IMeM6RS6ved%2F%2FkOJ5jDoqq3DBjqkAZ83rY2jaV%2FDR%2BNVgUR36oYpUZvD2Bk1g5DTeOA%2FzbrrcCQWIrlz8MM%2Bj4FSarL4Aer5PF2c09ncbAEKirw36FRsYMbWETK1KgKeaJcrSJVMSXvwF3YcrczN42%2F12btNUePA9FAQKTXdT2C1xd5vrUhx1b0e2%2FFiP8uTh2c1eyf2036Vs%2B%2F0HnmIv4vu5BM7zbWS16XIAQshhhaRcqvgllELbVWm&X-Amz-Signature=8a5b5de6f6ca248f53cc3cdd01d6f1a85bcab4a704b020f754d86b552c4b8dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
