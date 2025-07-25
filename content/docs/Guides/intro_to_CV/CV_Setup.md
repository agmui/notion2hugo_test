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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWQ4QJB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQC0z18l5MeQBlrnMaDL5sLmzCbbjhQ593wwlCh4EoJoowIgQGGxVzGJk24NIQAqQVoVo5kMAjzZ4gEWfGbRNumh%2BOgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBULAW61%2FIsEkVDE%2FyrcAwgJVYIX%2BldBAnNjnBg7pvP%2BzBsYQTARTOl7RBYzom1RjL6FBFYbfKEYLwGt2E67sS4riYoL75P1CKNEOCZ4l2G7rio%2F4yXMUxmEfhxNVEHKot%2FiVaziz2yneAeg%2FlR%2FyOy4cz%2BY2KbKT%2B7ZEo%2Br%2FHEoFRMOh%2B9EM5DWvC90SwX8xy0xKuuAQ6hN%2Bc7BwNkYefjPaIgHCljMIfDeyzJpkfAyDHZlhiMzuMKlHqXieYI%2BEo9qUdC7VhOnd9rdFe137YXdrWAdJ0Tg5uieOlWIcPeV9iIaO1kmx%2BjCcEqk4G2Pf25aYRWKD0kPxF4pvDIuuURS%2FsiBELep9xXt8%2BNsylYLf39DnISF31KED06hQN6ph3cwlsgbl3EGEDZdP9aKqO747Ih0ca1qiM4%2B1%2FahcPvimAsadYYnKmFA5QTb1jPzdWqp%2FI7cUUsqc6xbeSV079cHl2OaARaktzKRCnehZ5BTtdPTmIBCB%2BasaU1QKqJUqUYDGvv9hVqAbc2i8k1%2BI0Wnj3i%2B40XupfCZnXQSi9Gx27JewbZoF8LLU%2Bxf1nq16tOTr%2FoZp14H8WT4o8EuJQz64ehTh3hjy6dGPoFD83bDupfDLw8ZyUIRDODBE39oWT0uNH2%2FixcH7h4qMOS8jsQGOqUBjP2HAjLKRab55i3shSGNDKuCC4FqK5jn80lcA%2Fg1Nw2QMtkyLW5DPp%2BBeEaBIVUbPwyFANoInvRkSttBR17TlH5z1O3rUUZo%2BIOwxtFQ9zU59CkAz9ZM5beBudLYqqDpx32mkkOgc0Bl%2FYIUwcNtogl%2BufatKE47NAGdWh4yCw3BaTAxrwg%2Bl%2FnQleIjhjUx%2B7x4K7dznol%2FYhjXtLCj5yJHqQn5&X-Amz-Signature=ec24751237462e6f57003d9ccdd732ab19783c5fbaeb8e8f97fcbad9261c46b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYXI6R7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCJ7E7uZadye8gjaj190RLzE5%2Bl%2Btppa7TbD%2FLWn6JXhgIhAJQy2bkBoX2LkSSyj0eTptKIapDgBRw4ocErYvfS33JiKv8DCEgQABoMNjM3NDIzMTgzODA1IgyJTkvy%2BIFdMtcRSs0q3ANeOua%2B399ko5D3xoB%2BHGWVpntdWuYq2NtbjS7LoiNSLXjxH2eVT3iWMBRt8bbdFkYgImZzeA5dfTj%2BgapNJumZoepfkk%2Fd5MwAQNaysfLSAxXdNqKXzvCrFVrPtM6UijYII9AU6X8y4iuiUzdPJT76%2BBMp%2Fcf7zCua3t%2BJDykOyEfrFUgEz5gXTUqXcN749AYiHU3PLOMwrAU6MhYdU8EZ4bsyJHMGats1k9oBsq1SCM1GqE5SZOQtLkbnFF%2FMINRCPqcrl%2FOB9MPv48eCKIPlvVllQqLMbUsS%2BWemVYtKWIKwAeF9skjs7rSRpAYdTovrOF33Zly699yijHE8kUL5YBIg4lLJGNmiiJrW%2BjdRE0alT2%2BGu1chpCO3%2BL99UZbhe%2Bl7XdbMqNCpu%2BdWnotgS0Ur%2BSVuxmGFhyWwvBeG%2F0uhGUtNuFAJOm%2FXMYQwekZCqOH3rWhuoBhPMB9e4XZkOkh3aM0Xqm%2BKjN%2FvxgvmAqmkg%2BiWeMHExfWfKmi%2BLaNLGC6OZWupDPJnksUB2Mi2fxZK57HYjVLVZZHTZKxGvXBUm69wZxqMZJzQbHSC58xPoFvU6TKREJrpyjA1kwp1ZyQQMrDA7Zw%2FuTMRpJQ8%2B0hy3hV8n696ZtPUXTDSvI7EBjqkAcCqJiBA%2BpyLLMUHurb1RychZJzNiwsM7%2Bu8R9KF2wdYALZxGYX5s4nBi977uvAMD5uWs9onwf0ygM1zKE1JBB0PF9lcgsnGWoKzvaQPZBgOlkt0fphNoQrtyJhrNHKtI%2B69ZeNLCRB5QTwcZqpwhmP9%2BsxulNA8L8xImbi%2FuoQhvP7A1j5G0%2BiJ16aVXeBbog0RcbED4GHLKdULi6mdP0GWb29C&X-Amz-Signature=7cd296b3d89a87ee8324a46c175dae7a3b62ff4f83a032ddc4c1385f187119ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
