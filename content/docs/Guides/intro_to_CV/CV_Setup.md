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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQF7H7PQ%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDX12PUdnxe87lNw00Lt%2Fh8LvQT5%2F1Ie1s1XE0JeEqtQwIgUi4J1pq088s4q4S8K06HIC1Ix6Y8B3%2F5I2OnOwt639EqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwmjphxnJoTg24mzSrcAx9FaOYviO6yguHQQ%2Fj%2FB2Vw8ktMZaK%2FLzM1w5iRZNQboFAd5TaxViYYfKtW4V%2FNRIduVomnCBJ%2FLzPLAolRWCorPNhwfyMx3B%2BhxF93FoDjV1IXLZ%2BP%2F%2FWOUnR3WWL4yBRa7z19QuqTZ4dwscycC43UYE2haF9D8OXowbJDdPRvKBLR8Vv4tjoXRdWcp2mj5i8a8h4DFCOorWldMwMmRxwyl0VD%2ByLuQbiGxBUI%2FAidoF%2BATJI2B79TzQosSTpNNUGtvBiaze5apOAu0aVlv%2FpI2QaDisvSHw%2Fd2LvqpWeRGduJzVi2wxHH5lnZeZfePSEbgFhUvDIb%2BazAaB5yU1%2BrQo0mCWSLSTBO%2FWR4jCmcENUgqCDx935BBlcKnfda%2Fjtob%2Bs3ZbCEnFY0xZTnuWQJ9KlWHGhmKLJkitVY4E%2BAYHza284A1D2gFY4mLUQv6A8ISLHtvYHJx66puITwY7IuNLeeY4Mt343dJd5bbtaXrhz6lBcV14417t1Pp0j7lS7ZLYmcSSB4cg8jfO8b95%2BQM9%2FztMdrx9IIxePim0QGhUXHL%2FV44r%2Fv%2FfRkO6iFW693lHd4%2BxzFD2duX4R4XiTsJbri%2B1sqfsLlZUXrn5P7oqzY67Vx8TLcqyUOMMidksAGOqUBaP51cwlHDxGKaxc5%2FXolMQrOlCbEBOUay9eVx3CkUrMGdEi7gl34o28L%2FV5gzx%2B7rfSriL7ueHGRFyEnE5qLG7jWQk6mYwtMdsqze0yoeDLMsrSUCHumpPM3gTLUmUVhxNjE9s%2FTllF3PPyqwZ4JbHUydON4V1CUZEgeuqxsDR47Rio40HSWBoXS2FYS9pvy4aPmKOpz2RjPHd%2BI2DI7PIceKkxv&X-Amz-Signature=d2b4db33ad6cd7f5fd27c48f4c32d74893edf9d95e5dc55214decfbfe67930c0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZZOLH5I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCpUDP5%2BhFd%2Fw7PmrfbYbdYt0yKdBEhJ2Q%2F9ykJXeFStgIgSOE1ziSWyeZaroamcZdOQRx%2Bezq1qRYIKqh3dnTcYYQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7SaNPrqsDo8RC6qSrcA9n%2BU8ABHHQfkPET6A7CDY2G%2FEM%2BGJysH2RMfsU%2BMHinhfenu01E2hiANi8QD6xOfBXzo18hdFbwR6NG%2For9NVUj8ThOkr3slkVOd19vit4vy7duuZTuossfSi5y4mAaBUHFAKLyXz7h8mmlFB3x3SN49R6tPBUrebacPGdBlcgjFvqB0wfxA%2BTcYgVoaWzXUZAv0AJt0oqQSj5CksNf4WK9bRNxhAimM3NH%2Bpwb4fS2tuIaSN5YwK2cnjQPmEZOh7%2F67xLBWqtndsVOBwKQpIGYAOE%2FwidWD41ozkjG%2FRRoKjyU6JvdVflrrl2adXN0fQJySxrdBNWBk%2FX3SmYjNvNLwexJ%2F6p9I08I%2B9Ex7qHTFOBFtX6LfCTdZwCuLeMKLD6Blz9TaiepUGkMZUmofAMedwqqP9Fh9ye4QRBWmydaSasSKKXQ23o0KHPJ9xmy6KSQLf3nCegSz6ziVM%2FNRUOPj3vrSPhwQzC5KnQ0AbeRqPCxYqlepMVow1vZEfdcYLtnNr9c54gHijPU3UDxPHN4hT5suOm7Y%2B0RQK2A7BfOysuoaV4vWZ2xqDul%2FR%2BhRJtifq%2BHObKXf3Xoh8mZfX6reobXJlK%2BmMSGNh0L%2BEaV0MYhiqNHa0uxug95MOSBkcAGOqUBFw74mSc%2BMFqdmED6v8v6BXbF9%2BEp4Fu%2BrsEJ%2FQ28XNrZfwzH3Lcn%2Bx7An8%2F5XyAaapj%2Fj8VNL%2Fxg44l%2F40siC%2Fwwb7S%2BK7AAq3%2Fs5XMXdp0%2BmA02sAUp7qzZcEfX6GcyhlHwp%2BQWwY%2FuCx9O%2BZDUY9D9iyYcNAN%2FTfzHu4gN7FWiVnYMoIMKpi4FNAg5sPiTU7yYYflnfd%2BvRVThBvjY%2FOlL7u7D&X-Amz-Signature=4e37d09eeb20288ffefd150bef6da351c972cd8ba0a9eb0f328c5b61772c88c9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
