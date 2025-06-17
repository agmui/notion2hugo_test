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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTT7TN7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGpOrRuDPKMwPIbcoMB2KWl4OgWWt%2B9l6G19DfJd4yXAIgf8vA0XBJQX1Kadv16nNuJ7kgXw8LQzrSBuc93kXtiAUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDM4Mz0hxeI%2Bp%2B6tZfyrcA56X8QiTNun14Hi5Uis6LvRtw6h8%2FkigNwhWqxgbEM0WfVQj%2Fy2I%2Br2Ug%2B4%2FAV%2FLP19f7agvs2AzikERJk7Gv9ZI9rdta7Vw%2B3rD9jTvTYmQGY6zbKEllk4JiIncOZkxOaW4k1MO5DHJrJ7qbdZP5px%2BzJraroRYv5DUv8Gk9YUDrmfp8th%2FLzBPAwirw7j6AshhGgjRz3WcpweP8apxXfysN%2B5BT8vw4DHqL9C%2Bm2n4%2BBjHe3K4n7fBodd70VkKGp9i%2BZi49wwSO3ZUzBX99%2BDF3EIvYhjdzKNCcmQZ8bcb94bTELpDJ3i0N2NGiJTtE4rs2tYe2B0vD6JDt8JdaGbiluVXB5IHK7GWmdiN4ws6G4gH9%2Bkwqu%2BTmKf0aEQEIbClUTKf6hsi8oqm59Yrr5ap8cKQML6Gt2rtI5m9%2BIzdVnR91CTv6%2BJTfQWPS%2FAwSEd9WwnM8f1Lcr1%2BqfV8qgPRdRolTIzuHnFWp9bX1BIkYPkkCmGr62EKOHUWCC%2FRw5szeFF%2F3cY0R1MwR6zhPoo1U1y4jTWMRxLwrFrc0iUWR3ZqRUGpAGgm9jeVUOzxfSG%2B1GF9lGu0tVHPFyVVMhpNMSWAV6sHYoslNYfC9KOwlfdnraV7IcmWIwu2MJ%2F1xMIGOqUBAN4W74EzkSyknzSiTCgJ1Z%2Fx77uNUzt%2F0io1yHOuu6k8hfcUkRoX0SIXiZ8w%2F0KhgBr2c%2F0Pa4fOV9kMKuJhHuzASbo9cj%2B5xZQVTDqgZVDBvIbw8wSL5z7oV5Px1fLN943judQq9akqFDBBhC3hFj0oYyhrqS3r3egEY6%2BT1eiP1cpoFlkpkNQgvN%2BnsCUZwarj6dZ2ZcHkYELwDQlaV%2Be8KgKo&X-Amz-Signature=71e8032fc8bee575563356191b69665f3ef019c43a8831fb0894a3abf99a4298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DUH2NMN%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHXWorRxVe1xyvG4BXSKdjo7PHZW21%2B8AqebMW2wnOOAiEAmnFBLD%2FiKd0KcK02eL9NEXBrrGQ9YNhA1UKAHoIX488q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD42S9Zv4dCiVKy6vyrcA%2FWlptH5G5R6kBLuU%2BZihA1V4%2FgdyDCycRpdNlHDu7xq%2B0NeStDiquf1vAxLOEyxAtv9g8XmweILY42LekD6di2z2LOXcM7oiFoXItQcjDcUFni5USQ6iEO1Wwvpub6SfQksTVMl7tnziC%2BsRgD9FD0NZdBaxCogwVv1KokooFtvO9Nsg0qZmVteSdQ7RomobkU4KCX5IGlrzQGxaLsdNVpxe3u9f%2FyBdb5NrSAhyfgLYAk2oMaZg3XW8rzE7xek1RENSrxbImY6A5XGXqCuWrzGwMRcu19a7yMxMjodS12HsdubSyejQzalBn4zeipB8%2BZRPq7PuwCyp%2F9vrVUw3%2F9aaOT8LLI%2Bu8vaj%2B3v3aGbRKT5YaKGeeF5omIrNnnuyDxf3Fs7CJs35ayb%2BCxvHFiU9Vq2OE31MiczjypB%2B%2BHPnkJjmpstIQul5un9tR802jRc9KAG%2BCVhyB5jbRNDHTsJurnE3EB%2Bx%2BbIw%2B6I%2FXslEMTm9SyoN2GlW7K9F%2BYIfo7e3rWGtc3VwGxXSdPtfjgwIb5KmuAw0k73IinN1Zuz4cdvCyacJvdVNNRVEXlhGX9NRi60QKHTuoS0Gx1ri4ysA42nuHPwqCrGGZWarxwlDF0IFlY3CL5KRruhMMDuxMIGOqUBHZ%2F%2FE9c0%2BRGrQhAoPQXjjuQou1dmjuypjuhPuDoblsGgbT7eMydtVgn%2BuDgCJLtwzs0l7xqDAfxr6GooJY6KXucinmQ7pBX3qGlq6RHy%2BgPGUhLzqSP1Dq8DCotRYi64md6%2FipKQ282yE8iJKcbA4H%2ByEITFjElfM5NzfIsWgGl373SN%2FLErxAi68lCKwYWqHH2nLrVF1mPt7glFTZ8DWmrsRNNN&X-Amz-Signature=0d80ad7e78bf741d5fb421879d60cd1ee4ea65bb7f5f0f4b245a2136c77edaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
