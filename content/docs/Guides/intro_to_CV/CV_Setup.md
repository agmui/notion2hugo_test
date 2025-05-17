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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKVJVUZP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuES%2F1gnT0S8sPiI1ubxCCP%2F75D2qnLR%2BWkpyxkxl8lQIgQ66ttgBNJEr77tZ5GMpo%2Fa8x1ELIQURz9Zbdh3P1ibcq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIi8064XrDeZSTiRhCrcA9XpHb3sHfYjSBcvChiYuEvBQfQIsbkwz66Z8skKgUnJVY2NYvrpM6a5mbkjsQKPbUfVCbMGA%2F8%2FlKPrJWR4z%2FZqMUWEGOaHSkcsi8XQOMsChTzr8B8Et%2Fr3qOIhXg90CrItK5Q0tFm7YcdbiXbURqxs1GxiNRoaW8PL61VxKoNgz9P801oqLmAYVW9Lp9H35osO%2BhvWFb5WE9%2BDNevLAjmf23qPF6N8m4%2FN%2FXrEyRAqV7e9Xd5tlbSW8rCMrjHzrRQjX2f%2FiRoXXrI9bPr7zYoBCAIhFV%2BaP4%2FrgWoU9d6q%2F%2BKR52Fa6zyGTB%2BBFG0RCKlk1azEI6JQLnj6rAbx1kfX6Z4Yl2tXxHVU4fj0Kb6l1fJnZhZb0H6hATmnxQmUibmekIX9302Vj9zEimUoHQ3mKSQ%2BsrcVqRrkyZcRKeWp5TXakRh1sqC%2B8081w1KzCsC02DiKnInpJtYZ%2Fuis2%2FhDQnOtqDRnvl2XI8MkV6bhWsGZgS%2Fjz4lfQxx3EyCy%2B9cb84U0iblu6oId3kYebzBu3sKL6I6k2Rjyhu%2Fwjzjr1nhGMyUrOBmkk%2FmLb23liWIJD3495yQPfkHnKC8eU3GgGBPY%2B3f4dsuU1Gn9rVDPEtl9OlizJ0fH2Q0OMOCspMEGOqUBL4Y5eQ72IRckTY9VmPopxZXWhm38lvO1vjCeqGpe%2Ba%2BCitvbjcF%2Biaa%2FkEkTXsq5ZixRr94SePieQXRQ6sRJbo9lC2yND66lygo69Gdnyn6dI8Q7Y7fBcPGXnSJnzFgmJlJQ7kH5Mb0NZ5G1lx04Lmmh6GwG4tpkaMnSZxPPhg14RdRZKOtspGj6AKyp%2Fb5xU15FsqSq5JkwGwUetbPb%2FRR6yOm5&X-Amz-Signature=621040f85ecafdf8b049a35d6fcd7ceaab3decf4fe618097ef0eb7a6ceb6bd2a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYAPBWD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgWiOakCCwN8gqkKDSi18oIO%2Bggpansv%2Bflv7kehb99AiBkFv8n%2FZAHpDsOUHufkiSLF9MmB478wm9%2F7rufqjfBfSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMcsZxvJDs68nRLS6IKtwDK51lq5LDC51rAAYXrEhdX%2B4R1erPEloKF6jjCZ1Ovgz0XnY66kA4vPzdBtr5EHhw77p0g5EGz4XYNnAbe9qkXbW2MeY7wIwSt3H023HuefZ4WJZ%2Fsy0iWCKeNoNZNHW8XVEeMr6LQylDKUCvChKcAOUtJGgg3%2BRq90hKnE3%2FeAYhhTkP9aXC1q6jBFcU4t71VIcSisPQx7jb1hUFM64%2Bwj2EJcZctXZG%2BISFyMvZBI%2BE2hbgmbHjWzypWot6y5ZvUQb6f6cQ0zAIt4eH6vj%2BO2j23Sx1zr%2BULGLvwK%2Bw6sYdDU8ZSLPJJ%2BUCL8B1OVmXL56X%2BLcdi1Yc3KLxfvzhIvgF9pX7sfXE59zbTtmKZpeSyZ7sTwy43QoALPl7eIG6EBBfELqLa9%2F6vogqQeLH59M3w2Ti9vBcOAmNamzZ6Eb8lVsPdzYJId%2BuNOm6nOGtDziD4Qdt45ZUgCCdiv95K8R3Yw8vqqpjHkgLBcbcEky0fOH%2FE3vDYt%2BiJk3CM40%2B93xghfx%2F%2BYhbfYw%2BCuRHBLqAKY0k6U4TWvfimkWOLOywG9AAor%2FflMUChoankGm9Qh0w2lEkXkR5kE7YmdL22%2FC7%2FMDyTPPrQ42%2FxJul7V0sYyV7IQkYkdFI0GYwmpGkwQY6pgEajExyG0H8NIq6F0NG2ce6NBeUmgaD8ukCiJIUSY2xpAzhNPFxIv6OBZfzfYseLky0Aj6Us3wAJGDP1ojgZrnbf3C5XA4ytE3WTfsTQuABo%2FYpsRuyxZ7V9PtxvVQulCGnpad7avniKD%2Bu00PyPZ%2Foo8tU%2BXoJeyD6QccNxkjH%2FasdfVL16wB5yk86naXMMLoZJDwQeTXnex%2BJ6nYB%2B7KXiYRT6i2R&X-Amz-Signature=5b183ba0b428dc70565792d5e8769515180783c4d91a763432f0511451b5627f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
