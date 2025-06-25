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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZO64FCA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCtGaXUovk6Sg1iQ7ySYnSLgOFW1bnG8cfyW2%2Bmn2TO4AIhAPTjOpxG%2Fbax5rFWzCaakxkf2e17Si9FK8QJAu2XKlXIKv8DCEwQABoMNjM3NDIzMTgzODA1IgzZ9t2xncP6IXqjKxwq3AMqAGIVwKNCZZxhjPJvXQnZVpJBycruTc8aEr9r3HvursTvMURtCAbkuqDeO%2FioN0mI%2F1%2BEbJ1g30Mv93ZtQ9nR4ch2QToNUFLqrYxTh5H1i5QERZMWo6dXOFnvMChdm%2FSYq5IYJqdzTotjXU8Vlr7%2FEt%2BlseRwCpthI6q979qHuFynid2GoMZoLVY6kS19gLN1DNtbVi8R4TyT0afN%2FsDxrEopaiiEb9EOUIoJaaZDbKJwppyOujhQ0goWZnh0Fn3%2F%2Fw52A2wjYEvTUxOb5xwJHuMKFUqxYX67gmA2CGjszLmzQ%2F3ACr6Q2sSeL6LeIoqPA04BbGv3htZvYsrYPPagPYmnkMnlo6EylMwOOCOISL3fURc8bV379zndJRE1TMUM0h1zhHMTBflMUaIfHp0pAN2VcwuoCauV0ITsD%2Fcjnw0QTmQRIf7%2FKaHiKB7hKys4pDngoUy9YIW975Yt1NZVFbljd3RzB8hkILxMUckxYn%2FoED0EcMG4EtgnIIU2QzFh%2BppuEbutvmVK479qAwyRB5r9cNYuaMZ41bNT6hg1avucseXMc0gAwiA18cCSus%2BUAoKj0sPYQfv5PimHAfuxQ0mjsAG7CHO4xHJT7CM%2F%2BAReYXReB%2F0VZd5QLTDLjPHCBjqkAebwu4V1Sjha%2Bh%2BoXuRZjUjjH6lMJGpTWcZiKP%2Fsuq92lzDKk2olFEUlrOkNd5uyXfLyC5RRzDG6KwqUZUbFUnug6wNk%2FbOlFpFx5jKtNGGBuIbOJkFasAkP8B0HfuPK1hiN2VLYSz3ivHaeAAlW68Zu84ydA3KPq%2F7rxEnxUaBH4VTmTEUUt8YKIU7Lrn9Th4%2Fm1ssS44ja6Rc5p0WtMLVrudkO&X-Amz-Signature=602760cbc38a7c9245013400dfff2aa8dc5348bdfc19d3a3f943ed7e2d05adb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7M6JYFJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCq7Fsldfoe3oZJscXn8rBmS7Sw5B%2ByrYczvmMgBKB6dAIhALXN0G0thPYY%2FqtK6XGyRyGurLW3aNjHFEG%2FihscOykIKv8DCEwQABoMNjM3NDIzMTgzODA1IgyFgmydjDvlt6YpQxgq3AOXzAaeVvE%2BALroswweXQNTuUBVhnOmFSWJ%2Fh1gChEJYyxypq3peMmm8eqwG1NDHNeY4%2FILPl2qnSTvdG36zQ6G80OOk%2FuqxHbqMg3%2F0K8mpqjdriWM87lKaD%2FKuMizG%2Fjy7JYXBWbNV%2F%2BFe0IoES2UHeobDE8XP%2FRHcJ4L4E6iNnkFiv19C1%2FQqIu%2FAdIsvaxkysRZyYKJRB3%2FgLSUI%2Bawe77nUrlvqqWG%2BcNEgDhcC%2FNbdVd6WTNIs3Sa%2BFZ7yCa8pI2%2BszZ%2BNMgat%2BtuJ74GJHexrJXIpd%2FESgDvXjinmMHkrB2B%2FLOhr9o9bghztTdq4aJRkNeTYZBqKeYPKp4Sfpi%2F5wzLSGaTo5WveIAqAg1RKl31PK%2Fdz%2BJlPP4cu7hL9LpJJhhbErBH%2Fd24B4SR1v8V3LQMZ2GddfQBg8iflMblNU%2FDfgD%2FKXlz7LKJbLTvuYv8vbPIbGyJlVhJmuSnd4MUAVwTwmBPq3RReUs0H%2BbY%2FJuaVYd7NnMPrCSyw0CUuzuDs%2B5BYd4ZdvCBqs8LG01AXksX9hCpJtPlNl9Be%2FS1vSyJLDyToZUbvAMImbagCLQgRVdnXvEwKcvVPUzaS5oawcnyce%2FWO3sFBoP6kPqFI%2BkFnrHH%2FYLgNzDAjPHCBjqkAd2zRtTSPuu5go28XYDT7h%2FqLsGNSPWoN%2FhIhCS7zq8%2FEfwGkKtwAAeS%2FsFefCj0fbJwHcpufTCVHm968%2FjWFECRkS%2BGwpiMHXCCr33p%2Bb4LVlzuj%2FLm0QGPU2C9nYn44SCdrBk0BICybo0N%2FLAYHjZpZ6lePyOOQxmYpjw8UOoNnZ2d%2F44GrvDjklu448GGWUlsjuN066hOHGX8xN3qtg2wOrC%2F&X-Amz-Signature=4663bf6b5572cc8e6a30326adcb29c8d705fd6aa21919fd4b07b4f40d246a043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
