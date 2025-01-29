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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTBLZCK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3JUSRwkf5zD66O1Pnz0VByQwF5T8fly00dq4Gv%2BkpXAiEA1V%2BuG7bKRQoLoHJBqZN2iIVTeFAq%2FPAEZrM6GrOfCG0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG64VRggAkExsbmYjSrcA5tES94OudEJ0udL4jqfSKm%2BiNsk7Bo43DoV9e6FRFxe%2F%2FLK8ZPYUsrmZvJBAZLb4ClB%2FwOtKxuL%2FM%2FLCG7OFjjQ%2B9IlQnEAfDZrHCCWt%2FvOM95bPRlfzi2g%2FBbwvkYqZMXt1gSomnZi9wD9%2FlxE4VHRspxIb%2BN535vom2PgOlg8F5n433P%2BSlGzsHR5BJg5JA5FVrSTWm2hnc7d1hCGTCEmWSHYmhV7iMevnaKHdZPiIilFmsElJ0qKuOPYKY4KlWxeWrxZW9d9QYhRW7jWEE2RUJIFVooLWdSHYeYTcG94UskqwKao77GXoA%2Fbtn%2FoIrvvgpKQzUvjfG8fVLHZuq3p8eVdyTQf2sTJ8IeFETDOypujS%2FgFQkR2e13cng0nm3PaLTrvbUd7tHuSR8B6V88UVjbB3iMwZC4hvRdgXNL018DNQCROEzLn449ULcvV9Hp%2FodBWN1qlzQeJ9bSK0SNFzS7FjgPRs%2BpsNAl0YyRn82MtCApkYJbBi82L7kCetl13PaApYLAM8gd68zUrMHvAizmbL7qLcgKXvgndMarSmUIM6gEMUlkPGtAWu4bedfXJo0xg050hLYPDjCFGUKkUJpK8SfbTTYWwPqmgleI79OjJgr2r7zJL9JWKMLvF6rwGOqUBVxtRst25dEVG0m1aiEV37h8vwkgrWLBorickS8sVGiT9UC%2FOwHbH3f%2FyyTq7PRU4gD0%2BSoR6tSduA9Fa6A8ifFbrOTIi2PYfs7x1qlE7EVyXrC4d%2F47RhWZG26lT2v%2FVD8iMKUvAIjGQWBWIQowJ0CPomlhKnZV8K%2FYSmeSEQ3PJu%2FNEashoGVqyhayza60Ub6lUvvqdo7QxX9I%2FiFwGI4aARfh5&X-Amz-Signature=0a07835236d1107329b36a6a3f312e06dc090381f313229ea4223465e2edf510&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5UO6HO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFmjC4TTbRE9f85mq3RgpOSy12WcI8ys9w6VR5ghFT0gIhAOQRqAJx8p%2F8%2F3sHvwjyyNV2kdF7dfeqz20%2BbXFx81cBKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKVqIQtRJ9wqzkKNoq3AOMrAKPPGrPSn2I3RAJ1IbPbfJvFrH8FysU0PSmcIuVHQ2dQDV3oi5FR3LSs%2BCIEojInd%2FLdFw69ll1vkmlcQDZ5l07ni0MkhAL4A0kopeDqCGU6EduOVeFw0M3ahZkyAG%2F5AueWSH6vVmAMcDe%2F1ijHs%2Fs73zBgC0GgLBHYiUteEH9UZuGSJOgryZfudVX0TJpFbprv2RLxf9R5pEreuMA7%2F0E2fjazLZ4AhQO3PN2Q%2FYe6cbkWmhElhVXMJe7LLUC82jQceW6PvRnZ%2BSaLS3G3nugMpqm8oOC2sKi7%2BytiTNg8dh5vJV0SV8on4%2B82LJg%2FHuoCEpFDC31ioIfGbAy%2FJE4bNb%2FkVh0Vm%2B6u%2BUijzChzscjcs0HPjJtITieFF0oZVMnr57T31h5WY%2Bub3%2BvwcExyU%2Fxrn9TBEk3gavAhbvrePFaKdJ1g3L4R4SncaCZZie%2BsYdw6w7gxWxj3jcdQsf8cqpgG7oVFcz2ks92adm5v6bs6ublCymfjFQh3H63smW3hfvgDwgY2trNciGYwEEyEVmi0%2BY057c%2Bd430ZRTXIIqbKc7arozMESWz6yCHMxrpPVIrNPl38ML4U3gt6gfLBMscoVNPkrU7CiFVKWR%2F8OuEoFqa56EqDTDGxeq8BjqkAeEpb6JEmWe7H0cWzk5VsSnicAjESX5TQD80%2B9cGjAhwux9Xv%2FjoTX5TgUmh9uNal0Vpwk4Zg0OgnkR0XOX%2BfdP1CTMXSVKJhiE8f17%2FlzSWEVmfeFNi9nSn%2B9kajsk0%2F2L9ZnVeN%2FC7gi2byXRTYmotoiE%2B7vCHLftmrTWkAWFoVes7IcpWsoWVnfEl%2BHv3THBnbAcQBTcxNuR%2FPj%2FnOqjcDvlY&X-Amz-Signature=1078648c8fe3af92ac72e25d901129704cbfadd53055feb5e15527dabd8f7898&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
