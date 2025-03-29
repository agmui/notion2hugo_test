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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFGQYVGM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIDLrX1yJZLxCenBSQCtm8kmCUzggGSygLqUJ0NIm%2BHsGAiABwKd9qLnhj8i%2FPvOJSExpPHCx3%2BAdxVmDsrkYyA%2BNsir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMyf1cpOTUHdsnVr53KtwDkKxDKIotqufqYCUGYgGjmA4T6W2boFZ11GYuKktzMtG0UQWfOC%2B4dC4v8lgpWD47%2Bl6vCjF%2B7U5Ob13a0Fy881cY72Q6Vn%2FUWOk5ZCXAeOmti1MEUpEq2zhaO4PvWIDTGz6q1eoF4ByxLRJRqOc4Dn%2B0%2FQ8oEVI1VtiwpHJlBSVrHsdfdvTncjlgNyf8aVpywlDho3Y7WJLiUzeDMKt8T44ncTaxH6nOg4VsLcPo3QmGLcY7a7nWOLgtPCN4nRRaQ1yrwAJ1v3exgfZ3oC2499Z7hY8rZtLn9tFSx84vjgOE4grk0N6bZumps8pX1V8hoRDCEz23IZYfvp7Zb0EBAupGQ1su3oBKUkGAvG%2BJaO%2B7waNEPILef86b6%2BsseGf1UCwyuCkhwIWnDJm0Yf8dhDm%2F1nFZYG8YPoTZRoRDLbuliv2KfLqD4I%2FGYQCbHU7uXb41wO%2BCAHGScI4VrtlWK18IvMDDLeaHWlWzsLuczhz3wx75lpKIHjKBm59h5F1aWoMGpqCq54TGn70YIiupwThLVGFdHYO6Uwzm8pE3lQ2xG5lOTJYoT5XdfoRWtqO29skkHHxaspiHJYY15uI9IGaUlsSeamLzos9RChI6%2FN3sdftVf7WTKNi7Yowwi9%2BcvwY6pgG37D4g1FEFenk6De1mtUqudmK66eWLj%2BjIHYbYqhahe3ZbJEdrs591KNE5aK0Yej5woBugyI%2BfCtV4EKNdyF8a%2FkuDUwk6%2BhNvv1xUOCkau9s3GvAuZAzh4EvcDvxG82CmOmgsZrDfprGSqYQNH1X3fonjoz31n32Kmf%2BE4XGXUeuHV4ksjG8zTOW%2FrDaYw0m1LcA8Mxx9NrdvnmojIAp6%2F7oI63I1&X-Amz-Signature=71403dc3e9d5fe6ba7fe5e2d405986fcaeb130bc1fbd2441739aabf5468556fb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6LACET%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDd4Xt%2B27VIwkRDy%2BNBPxO7sI8zyWRp66%2BmK3nYl3DK7wIgfsY2acXVphNdAE0YObdkC7JZyAYjMtzRj4KlhdDwlN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNb94wWbGSGYyfakLSrcA2OpDlEW7Rz%2BEAueLB9un0tZUTf6IX51kfxX%2Bfw1RG5Sd%2B%2FB7%2BxVsQIO8q7C0dfIKzNydunSv1fD%2Bp8MvbKSxjUx%2BkFf0DuR6ftBZAlVW99i%2FKQIiXhgoVO3L14pRQJkEKviPGV3%2FCvDnxcHmDZQY390Ox5aH90zHjEVSqq79aS7t97tNbDrxcbZOflkJARaSZqkHsvAh%2BG1XJyjUdjlwaR4kDbwNZolZdZhLjHMESUf3yDtv50jyff1TH2Qrsz%2BEgUZ406o617r06M2nzimB0MCF6O%2BGbfkh%2Fs3SHqUl3W51fPXsIasXeek6oeojFh7Er%2Fnr6Vn2P2yU8Oxn0QrXyAWzz2z5o3dLoAKpsi7Shigt1aO6y2hfTZfmcEmbVOSr1OBWPUanPgI5vIiem9%2Bs78FyAZRdsQG1iLvslpD2yYOJmERLkGFL735f9SL5BevjdlkmuuVBwDftruXnq9aJhcPub0PKkrgh6TPchRVsGuV712tOvMRKn9hYEagIiI%2Fy9D8RD1zKLQUb8UpCbwBhZEPTU0C%2FnsvABn9Z6o9OguAvgFx9PhCPZBmGnbOBAg%2FlN8U7MRTiPP8Tl5x8B0g1XAf%2FXwx0xKEynMDeTv7FLFgMDHMViVgcHQHx1brMN%2FfnL8GOqUBlggbHWXDLMKTli9EYC6Sd27zxWAPXkCzkuJH%2Brv7HBTHDm9zAgO4uSOAIvUuYzEJjl8YkjmIb%2F0OgWIm4YKBe6gEXzGh1TzR9DJm%2FXGqOritGXO7vlTWGW%2FzyVzN3Jv3c6gA0wTDd70EjF%2Fcja16wKQzKG48LaLS1tXkxm6L%2Bn%2FQ3Jg5zc%2B0%2Ffj1sjqpDYFUOlIMacXNqgRdJZ4V2sV75dm5IjYv&X-Amz-Signature=83df9dc97e293482503eb1e983b25804477788c48cec878665a27dce4d024c60&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
