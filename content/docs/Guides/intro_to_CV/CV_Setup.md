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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRAXYNG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC1eL%2BWhWWSlIHHYU%2BGwwkKubhuRkRT3%2Fdh8OFcAWTSBwIgUu0e2QQPlw2MwKDhOzYvV7xumpT%2FkRAZJxWFGaX9Gbkq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDOIjD0PTU9qPWaClrCrcAy5%2BK98bSSUxxRPG3TaHsHAeO5qCda7XdYh0JNwXsj1PQkcYmBF6qHEV3rB7LD2kw5H9TZMGeXCgEBvPLvSvfn0hS2CSxsxxlyjswiht7ZT3Zi33D%2BwJTNeiQpfe6ZuE7TcmXuIYqSI%2BaTyvCVXdnhRoBYVW4sFllxI3OJga96vbitCUr0UUNyW2BsBc6aogIznm%2BsR%2ByNF%2Bpd6TScaMPJGJKkv99EC6RGy4sVkdkT4Dvg9MJSHiBQpAYvkU3F6MGyC2o4xP5%2FPMT5ghZ52K%2FPbz9UKxtdM2LytOCtHf5v29%2FcSzgR5a7ofrlzL18wdpPBZvVdEM%2Fc96kaITnqphRZESho0fbcXErt8vyssrJSSeI%2FsNHV2m0%2FJnaDVYvUSHeIjTgf7yWYlI0HMRMRJJOq2TuDsVpWalgkxyhp7ATKEkhuDbJRR3quNsfyIHr81GhQ8kR4%2FCVtFckqg1dpYbY%2B02Y%2B9SXKIQpv%2BcKyYVqvikhUZ3yP%2BwkItOZyHmvmea%2FyrqiwseBcoYHt8qBGHfDPk34UuWqXnmr5ieNpysb77QJCIYMKqrYdWUFBwj2gSCb1l9zFoWsJxty%2FJgABmickB6gE6zZAH8YSl7dH0Y3DyrVI5pGG6ZhZfsn0bwMMyL7MIGOqUBIfFupUht%2BPZQxbe%2FwW3oKThzpuPWumBmEK8D0oYKBtpR%2F0phNr%2FdGCqv%2F15zA3IqbC3uOLW41qXmlNm%2Fc2QNSbSeF7Id0XW2quEVT8TvjPge7gWnxp3K6ZcJZvnUOkx2j3%2B0LpJ5ESRlIqbOo9woQR3TbYuW01bwJ%2Fx7QC8PreYvDTV95j0oH9faP5srWFGGoHVjaRLlI7hrtn9rbpWr6qOoBK%2BU&X-Amz-Signature=307d7d40d68dd80063c2a4a694f73e4fd77520dc013b67760b3d6e187a2c4e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765OOHX6%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T201014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICNNu2eXm55fv9tDV2zlfHS8JQPp1gWd52ghQZDqVAYtAiB%2F1YSTdyBWghm%2Fp4G3VLofB%2FWuniZ9tDxbM9QWUYpM9yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8FDrF2xeH1HOYvltKtwDCdiDTkTa9G%2BDb7jVxyXFzOYeJ%2Fiw9BvcQSdfyvKDQbOws59YZ5RKTIYGEZmhSi%2BXOKe4qtBk8PAg8stLllPeO%2FmmkBfOGgFXO51pTZUZnx6CLawv91VdeXeEPZhyvdS8%2FHip1zgFYKqytLkSmrihEZfki25c%2B07Mv5tiqEFUmZeLffmb%2Bxb6PL7%2FVm7JWWkWgtEUpt0juVBLd5tFJG%2Fr7m1Y3%2FK2FIw%2BArVf4gxk3Wi%2FMZSENpdO3y%2Fr4TswxxZc2zeuj%2BEBAGIY6Qn28UfssZ%2FxIZ6jf31WDpqi3%2B%2B3GampZUd%2FfWzKK3D%2Fbo0HKh9CCeege3p30GF760QanxOYQtf6dTqznxLgJ62ocbyG%2BgAo9CSv2aac5eNXb%2BY5qOYTBl2FWWCwFtboqb28z0Q6gQNw%2F5vNO9oZIaPaJxhAbbpt6BeG5wjXDDunJZzLlaceSMMoUWfHMxJcaYE6awdwjZUzSeZ2yGlkVEfzXuNQPgVeudlFTCJnvYiZykm40W4twkIdIuWpSetk58HNid8aAqNr2PUzGIK5iOHnex0iX7Xj5k3RSurcrK%2F85IdvFVk6NnDZMIVvZvMm4lT0EfFn7h1pEDN4D27PM%2Bfso7tJu048KRHh5319ZUYwbmQwz73rwgY6pgECnJ29bwiYdcpq%2F2SuMrFBOgO7b7xwM7OlwjKI2xNr2szpb7c0CF9o6P5Vp5heY3XVE9dvD440kVfpgqb6SgHGwYsRdH1tAkKScg55g1op380gHVCUfEYCeVPMlJHQR37nx0LqpaQ%2B8DhHe7yFKEtQSKfg2IFO6SI5YpwcMkF6GSfa3y1PsM3D1e7rSkWS8ff5mJaHR%2BkOozSAI9J4jI8mFPpo6XvC&X-Amz-Signature=3893b1b950937d7a1f62361d275f807bfb344b56a73a5a73d92b4a3a4891a6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
