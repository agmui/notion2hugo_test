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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZXTWSJM%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDqXIDIWPNw3QIQm6jAg70hphNo%2BBx7%2F80ystO6HA3ntwIge%2F00nCXIdkLSOgpD8AFK3xGp%2Bcz4QLMkYIMCVwFZ6dEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEzd2zu7CXFBZrgcyrcA6ao2betW%2BUYQomp6fQeP868K%2F9RtD8jrygZHNAjk7hm7LR51OX0t1kGnGi9DkWwySh%2BMglQksFaawdpnttCNm2FJSOG1T7YFhyaM5%2FgHN9i9mh%2F605M4DXeyisDZ0NUhfgNzi9xL5YB%2FBikBdQt2ErOiDDPUfrtZQdHJAqNqZ8FG2UQPSjq3flaRXCc0264kV8tGtO9N%2FkfzjPKL3Q3IXjQXt31MsGq%2Fe3%2BqeXZ7XWLJArDiWL5CD4Rp9BrAjHAekF8G0OJ06Pgvoc8spUReY%2BZY8oqmOhK2oZf5q6gYtKatz2HJcfLOjti53q5KKGC5w0XFGBEiSryaigtq9nC9oP7%2FND%2FRXXK6MkwgbTAXbwQ898iqrgE0f2DUe5%2Be8FZspTR0fRjOvOSVgagkJQC0w1sX9b5eRQTZ9gtOyZl2QN%2Bxf80Y4EDlGsmVNuLdHDEXS%2BSMTAK6e8qGpwyu0iFMaZ3OK14LDmNJk7KbKjuj4AdWbcFIgdE67u7UNvJQoV1wTqhyhEpo0PAu8umZa6pSLAuouSU%2B%2FoASY9vTDkQOW2acuYqcnmWfW%2FtYljJBQoAIGv53Ob%2BYVYOCqs3dCxFRZS9BV%2F92TpCwVJT%2Bh94dzhPvd76g0SC4R7eo5VgMODrwL4GOqUBjXxuDsrU%2F7dHzoKXo8lMlRoKPNxBmK1SJgJLZraL5oK6yxqpFkQI1gX%2B6Sx4zUDIomzypRAaVALDK6%2Bhz58ZW4hmRQ4vG1UMczAZglG57VnhSSzHZcbGSX1rJCuCktTq3d8sHXGu%2FD0ZYu1onA9OEpmPEKODcOZ8%2FOy70nsECJvHj%2BekgKYLXb42bzrFPYxWh7cOs5OsvgggTrGG5KsOoO16bSdU&X-Amz-Signature=e972132afa8024396568781293f9ea9af2f2b6b060865408cee470a7376f4b82&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLM3JB4A%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIDTKWnxZJkwK%2FXCWC2rbZcyy7PQ3c5LfdzmUYgx8AvozAiEAg3XNAOVs06dF7hihKmnz7q5c%2FQF2sHapZB4hoL2xPrgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSLORPi5w6DMAeEsCrcA5u%2FkvOjbpWtDNuVw6%2F8WveU2P5bilUrWYDdG3jGqlZz%2FWqMo%2FPuoqYcQUoNpXuwvIyfKZX1R9oTh7i4u8J6ylrN7sGwZpQL0VBAJt03TswxEe72tLSma8ej6Fx%2BYSLc%2Bq80m9JafpJrTbBXT1rj5n3oEeiEeBBK01YIKRJESaJFaDWeyV1EpKXSof7riB145MtPGYuBxEkUBzaGwzO7ub4T3k6i7CEJm5rHXJwTqPb8UZhYgAwcX0mbwEpMK2%2FkV6QEKLXVZx0pcQR54O4TJny5Y6Ftn7cCClxa%2BjCpHZHrlCk0GEmGWKECgRHSlkkOO8DCof78guclqV%2FrLHOHlF7Nlx049Ue9gRDpWSXeUly%2Blbc5a4kAmLuinDyilWB20UtSM%2FJkXMToPcUp%2FbEsbYsbY6KOy6eRj%2BrvKwUZMQ%2BoE0RVkci2%2FlBSwylIRXYSNHkdI0EBfuCLweE7hjojPjVXiUIMnpXvCpmZitHvcS9wPtXe9IH4pckSCLDVZTtvl%2FlHkiK5bjxLvuD99auGfL6Prbic5EQCWnAGHAWLJbY0%2BtBVHkBNPtGtYPugzUJWAGLKM7aGRB%2BTXfO72%2BL2YCGh2unJPdFCeQ68TGdDOpafNeEIPot30nrG0K6rMMjrwL4GOqUB4r%2BIvofY02lfhAqoRGtdSdv7rsVaZcTmAYyWj9emIKY6aScB3%2FkUM5s%2FBnAvKhhlxgGLOeF8A0aVy5eZta6CSt6bduG3WOaqvpZFl9HyRxyQ0n7EdGW8trUd6nVye4TxITYb9idNxl%2FP1KUcrHSYQHJCU2iHNm98cfOEpA8eVBRQbr1NKa%2FF3Ta5DKHYxHsCTSNbRXpCeNeFnfTwKL8gQSVWpryC&X-Amz-Signature=13b77fbb04d104308464f7236e630d7af1743cfaec41fb409a8d33cf93806c64&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
