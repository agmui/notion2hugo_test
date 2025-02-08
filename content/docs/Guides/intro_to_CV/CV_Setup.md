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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SALVFAUK%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCo18UqlMoiUyO%2FKPkyS1tOUF8gesYo5%2BNYMqJHL9D5gAIhAM6Az0oJgfTfZYHvBWQNU%2B4rFW1f5gsDWwr%2FPuIkNKqqKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLF1YSf0pD68s80CQq3AOlS7bw30cUtq%2FOSA9mg595crPYl%2B6DbQHtPzR4gfHygpWrcM8aryWG0Sy%2FG353n4a6745%2BYj7ZRG39CfBjs3%2FpmLjyRi5Wt5VC3tK6cqHZV80aFjIy0YMsdEDpI%2BpKC9xBR%2BBP9qHNPwRKRA%2BJjuxUycnI4nLKtucoIR80cfF5Jnhfkw%2BzUOMlPTQWYzVLOorSxo0TLyFexnnT2s0J4HZPl9m9iTvAeoHc89zWmHUIlrgCKhrEtNiQIsc5gf%2F9KqcvBiLoq783nHzlIlt5ryREfXrYDH2qCeTRKeyPNq16e5bKm%2B%2BNQK4YTC1jbmbi6cKAzpXOYRik2kRg97XHpYwnZmcLGxxFl%2FYNPoY4ss2hEGhhbYmFC5VyQiWYKTGW4HVKbhXwXCesH8CYIQA%2F5QDFY%2BfuJKUL6EddT91bv8fm3%2FjseGnhvii5IHPQqKUyP1NN28MZQrP7uaM4vosKg9HEZ2TvZ54Na5C1f%2FtOH%2BKQSWQxnQ%2Fz6kp1uj%2FEHDCdQwx39rfPADt%2BcZgwYlkHPTwKScROlrcF6%2BMJwiJopHw4H6PUUgOH4mc03Hn%2FPBZdqcKguI332%2FvvzkkjgaTpxr03jh5WeBvQc1jJf6zT16DqNLMEuycmt83AvYtygDC3hp29BjqkAYQBNzJOQSpxk2L5QJ8XGO0I%2FctjkMzQy8dMJnb%2FUaiH7bc8hDiRoKOLIu%2BM5SKeutNUD4Ur2%2B17a%2FSqxMx0gB%2FxtPxsDNfmkcvylm%2FFi%2BAw4MGnhAFlVd55E5B1BqGZ3WxbmssmqvGmSrKzNbQzg4yqNUeg%2BVL9q9w83cc2l9XbBGL59FgyUjy%2F0nATDrXOYK9ehTjF8D0DO3zjvcKZ5FOL4G8Q&X-Amz-Signature=7f482d7b76f902a9d3430afa7ad5946c3cd9a0742412042abdd9d37a97b48a46&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKKOIHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIE06KJE0gUDTAYshbWeB0bR7CcaeO00ccxg0lVkx7dAdAiEA43jkJCmJJFAzGMeD9nqE9q27ERJ%2B7%2Bnq8%2F2QjDsky6UqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcoqNJ9TaIRlJelYyrcAx2%2BpiHz7%2FOUzJtaHH557J6xNIY1K9fGldDsN4NCkiuoFRHjv%2B64YJFVggB2uvyVXu6YEhn56JPeiyoB9XpBJnRBwtXtd%2FbOcc9vqYv8XxNsy4lyELHkJqHmVUa7QPFVR4S9YaqQuU%2FKW97Umz7vG5JEVfIlrmo%2BppGx%2Fd7h3kliWojBtBD9k29DYmxG%2F1laPtPA2FlncRxzUKtdVZmMd8cEIr5tsZJkAWpxmj7LcjOqqxqhP8iyqE3l2Uf8eh50lSYqT8VBz%2Bt3WfIUnoVsHAQih3SJZIFnFX6ZYBvETxKGDe%2F%2BL5Xdebf2lP0USZzngrci6gb4LeZLxP0wqIZf1SK4vtykNYA%2FIouuSPA9yMPyP38K4XCK5qkKeIsbbSLoYZ%2Bco5eTLEZc7OBliX5TszG19LcJVq5rfymQU3JsaUNg0r7TNGq%2BV4MCv3Qm%2B84rEwTfAOfSIh6MQCeZcIfBeaO2GIUY%2B02sTk06KHT7vtctWajyj1nTjfCl0oBkTvwLnDWjrgKIU5VUY58k6xQUI5HuoEq3v8R9c9OffdhrjhrSFzUgCWLARRml28tiuPc2icLQnskcbLm8n1PC%2BVxna9GHysKkwGnOBkNilo5xGnsNa2eMLZDdXzvYiwt0MNKHnb0GOqUBUF59r9QPM7V35rssjg0WvP5VIFMCsKn%2BCX7tvKxa0zbB2NFDtsTo8N00dNGWjbL5uWYbtMqlGJLinhL3FEUgwOQFZWlh62mUGvT7xLcC%2Fgsi8kMp0PV8pBtoaeQnqQGxP26gcJr5530HGow4C3TYvRTbJQ6wS%2BRMTELPb6cViGmk7eh%2Fgui464ZNCLpuHyo%2FIbooQyRAMJ9DDZuAy3NwSUkovoYk&X-Amz-Signature=02d2066b02e503ac991df90822fa6344f5c360f04a458fdf278e28b6273bef12&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
