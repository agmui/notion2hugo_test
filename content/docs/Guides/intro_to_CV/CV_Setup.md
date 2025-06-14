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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZDBG7F6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDn4ei6sUc9RQ%2Fu3g%2BctlTUaiJ23bH6AoWzRXKtXEwMgAIgC%2Bs2kU0a5hW%2F5KbEXMy5o2kF%2FazsB4AB44%2F30CJOMAYq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDK3Vgr1s1pMFZ3wLeSrcA7yLgey%2B5YpddSnf9KO%2Flxv96%2BjcUp%2B2IucDznb9yj5B2APdbQh0TiyXBp0D0IeZCTLf0WEoNBXRecT%2B7xkK6RODetdSm3QbKPYAP%2BeJ9KKa1cDQEnBI8xED1tndYIc749Zu3OBgm8ciac71npymlwQOypvYbFRayXJBklX8%2Feo9wkhLD0RV%2BUbdeNjCZgizPPD71WVsMn7nqFCidA1E6YJQTROuyea4XLs0QM2%2FHvVan%2FQ7QAV3lAC5wuLA6EngSw9lk67j8RCs0%2Fu3cW0sXuadFfXXqwdk8N6lBU0XHM1RC4VWrbLPYdZbI7KfGzD2T7sIAwRpg8ymqNmYZAxLbvt%2BAwP79C1UGu%2Fssh0%2BBWsT9bENZSs0HPZqJ8dIZm1uMdvM62RbFu1N9rHfoWaXxJmE2kw8%2BQeP2189K9wsj87WDOwgdijKpZb7XlP9UQxhTUJq0Xd94KG2QsVO5JEigeiG%2Fhk7qMev7Y0WPVf6cAdkVh5TJVHE6AlpH70LJXNvJ0faBTgi6yvvieFkwpFyOM97mgwH2O30NT8ECGtMD3xRWtqfscyavPCXDieptfdz4rS4bwacPYmv9Hgc0aFRDu0fqm1GERDXq4e61vmv1Ck0GnOt%2FTlTl0r8%2BHUKMM32t8IGOqUBbAj7h%2FUA9GF0tA%2Fmhb7sE2O8EBcvlzBErNLK9%2BIl3irx%2FhVPRf4y4o3ubAc3I5wn%2FlazfyjcYEGpPDlCvftUZxXoYAaPRkq3lcDwrmch9y2AiR5UVyDOy9YDoC3UKpU3nNumAItMwRFznRyyf0ZG7ApPaHe3ZHZZUaPTo4yMSd7hVE4CGMixIpxf4lBmsT9ZRGB%2Bs8bjVB5rc79B%2Fe6%2BXihnVl6s&X-Amz-Signature=c87ec40aaa2c187431d1c3a83a16ed2288a547dd5fac509fb07885135a4d42a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVUMVUZG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCpOAp5n%2FdLC4GxGZdhidxLBmqx9aTMvBQs5zwMFNV5AAIhAMvSEmnYiu26hWr0TIoe3kzcl38A3UAykePJnrXLR%2BWRKv8DCDgQABoMNjM3NDIzMTgzODA1IgwBVJ3M4ZEMSwq78jsq3ANhbENdo%2F7qSb22W040fx4F2T9%2FHqzdoNiM4MgSzblFLGEXaylRzw9MbbIAnWGDG%2BJx3YfbjjUS1kDMoy6RLjczcHwRBecg3S4mlCi5kBgY1gMNFh7cw%2BN2SKBeqE05vbwDEE%2BjBJoKXwF47%2BgJALZUzrlIK7Lnk70Xrrk3WfM6FT8oqZqGx26lHI6Z9Z68ysXqNntcyeubHvqEW691OtENvFIa5hHeZ34TUceWqpZCdXuK61dQEWbp1ChbWGAGLDMRpsVzlXSOmcnGopX63Wk22eNPFZM4MQROm5g61WfxNCDTNcaXR%2FG45n7IfdvXZsRAGYGHDT503nT93HqEHi2aO9AlcbtyuJA5YY%2FP7N%2FJfZPUBtmtt8eUUGss3zenG%2FzozYMycijb42ekifIY0bvQQ6YORM8e%2FxC209MVdoqTT7wo%2FaYx%2BZawzJUsYJq1u0mO1frnH9JxlNsQwr3Dk4aUeb2AMlgyQ9rJR3vx64Eh1pIK2xv2YG8acHhb6Su2WSWQvAwDrK%2BgZbQFMQsgBy9KxA51bYwq7EuXtbapX%2BCSki4UE1HWH8Gml905BjsMmmUzfXPoXUdodvCXpFq8hCKsINkEMKgVTMee%2Blbnovra86uMK8BRUHN4c%2BPsmDCq9rfCBjqkAZhnN2K1aCaGKO%2FZqv%2F2DjrVYn9WwBgeAV4UInhXdt%2FTIo6GGhbPAQLmow8DWgvRzHgb48x2DjligC3FYZfwAqYcsnTeNcJhxdwNhh55V%2BpzlKKYfAJR%2FQoy29ndWp1fGpTiiJOtWYXsBbHg3Wzz3CH27%2FdbUDoLVpLKy1QRwdNVWdXdA8DQcyq927ui1Ql7nHkUleds9F8mbdpMa%2B%2F33ejIviPL&X-Amz-Signature=12b6edd6df4be96b70ffb484510628feafeaecd5cdbd53f0f7d7577cb61a7d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
