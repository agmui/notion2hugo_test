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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQXEOVD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDRsgYske9lmmuEm7FOrzL2nMj0TMDPtg4HB82bRA8LGwIhAIIpRT7yf0tvfRzr9Vx6jYYteg4l3lWRKeTdNdbOMZ7XKv8DCHsQABoMNjM3NDIzMTgzODA1IgxsxqgJ2iGM17szyaUq3AO%2BebB9bvjcJqkDvApox%2FFYjvwzSyM%2FVMNxgt3J4lzP9YPN1wamj03lheoph8QBjyGBDlk%2BBDUwhc7jraNw6BGv%2BKkuju6k%2BhW0UYtk594ROS2VnZdwpJHDRKsBEUK4TCC1KaVXKU0nNKd%2FH7ROhJzbkiQOfnSvOV0KNDO4ibheyVEdWzmrLOYzdiMv9w6WGdnIFsm%2FBs7U941fIi1cNmUQT%2B2aXL5daQe7lbQoYwWDXUiDOqyGeln5v70%2FQ4SsjmUmx8D1CW5GfmQ9QBFA%2Bvvu7%2FYv7NoICwwfQ20gUaMUI2yDkZ3JK7Nkq73QJoBcAFl7RzC2jcHTpiI99fXDwBnWM7PmERp6cSwzWzdV3mh06JR%2FGE5RSvUoCuYP3dB7v9HWYWRqGovwunY%2FuDhhy18wzMZ%2Bap5eYprsWzZgRtHBcHocCklUkz3%2FjXLgVWzxInqf7kp8UWbpPd6M2YjN3%2B6IW6QZo2DqJBn2PVg55swB%2FvbPzKznn4B6T8Kk0TwTx1EwCk6eRzI3gFWuxhbVxlG4ckAXI08OboWqY57FPvPiYz%2FhFjhLn6ZsQR9ZTpXejvdqLHM5LoHDUsyvpNEcuibL4PJn%2BdUFFDRGefidPb32%2FZl0PO3hx6ZWujb%2FxTCRm5m9BjqkAfpjX1bg6JyFpV4mZjnF%2BJtvPWeOcW36AlmscrLDI%2BC93jFmpZWlE%2F%2FkRvo7JxN7ZfuRsRO5fZLItUZDAFsc0tDqJOR3t5sbtbYwhpN1%2F5XIPe512fS9Ny6zmRSmfsTePCrkCas6f%2FFyDiNf4Ta5oV6E34q8j9NavUaNNlM1a1J6Hcdo5etD3Swq%2FHeeLzRE%2BiCVXSR2wyUV0wGC0SDsPxfyyJAg&X-Amz-Signature=e87d9ad45f2c74cf313873e0c84d4a6ff920f04eb5724da3679a0aa7069dbccf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICIBEAB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDR%2B8u194j9zL7V9jPpXj3Ne2bkp5xIn%2Fj3e%2FVVFotzngIhALAhApU7JS85aXkiSkUhONvw3AI9x5MeTyYpZd7cDNCNKv8DCHsQABoMNjM3NDIzMTgzODA1IgxFJ09tlDRga4d%2F5Ikq3AMrwv%2BqxJXuAGxnMIyi%2F7Jn6TSaumwJG8sLgYMVUP2YKuhJhltb0tqfGppA%2F0DdarRvjT%2BIl7TIb%2Bizvf3yZ23jeYQ3K%2BBY2HogFk7DB9I4Zjxls%2F5rdP9Dr%2BhWTQiqnpUPue6mKBZZuauBzlYJLy%2BViPmmiuUlpdIxya2jJT5hCQ2sn%2FSEwoafEVyBRMdUFfB9wUZM5TKhxCKPlPJLWctvN6XdLN0z8TtowVVUUc8F669lAtH24NpBuJTYKCnXHMIQkEJuf6SY7qdmZVp9giqp5bIRrZMRVHZQZUA9s5ZhBbC5UOT7m8%2BNajTxRLBhMsOm8gv6fGfz7oY%2FVSBQ9z1TSYEPtEPXWt3P7LKbX7fBTvHQzg2WizGmLy%2F%2Ft4%2BzytEFZKo1nHVVyfL414jWI%2BdffFzmOdoXXWj6MB2g6tK0y452PjnxeYpVjCWgQ2q%2FeOIPtPqpemHmlbqVPB1QAuSW%2FyUcRcgZMGq%2B9qKj%2BRWF9iy%2F%2BDLWof1z5HI%2FHcDhkGzaz6BcYFjHhaUdWBT7wqyaC9AV%2BQBr4t5rRhEA7d653TwxxG%2BYsz9kjie%2FWH6N4CXjgoB3uovHo8DAfMDfYDfVGNj0DqxXiloUZjMgIOc%2FyDqCR4DQCQQf0CjtNTCVm5m9BjqkAatSFbcpqSPYWSHUroNZmL5I588czOfOQ44jyi2TzSNmNFCeWcSBgGzQaHHZqSBu8h1IUwflGKEOnOX2jDKV4AMIHhbO46Y4ih2h5c%2FNTM5Qy757orRW1Y%2FTI6Y1ZExnCmobPp2Tk2UgKnV6T74uuH969CqJMtvlj1bsxd3IZsVHyhog%2BwvuiWeEMM2sbknZyqQTaSfuN8iRfzFtwus3IlHsLb%2B2&X-Amz-Signature=0b6cccea75a182d83462d8d55e786bd6fb863ed441d4723af4716953044a5ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
