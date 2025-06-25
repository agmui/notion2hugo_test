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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662CWBPRL%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCeo%2BfdIc3J4ZQ%2FNpzZrgmA1Ajmoe%2FG0i28IK7XWNtypQIgHJRmwslwojx4KJgDcMGQRWliM%2FFqTi6V37K%2FDTb%2BHmUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKCm7pCI6bLZkiJrfyrcA%2BeoKctS05JwPyptXfr8Q4TOPV4PvNeOL2SuRKghFCLTPl%2BZRT3eExZm2V8%2Fs08sld1bMt3wjBMgphW%2BYmtntsk%2BKkYfAz2H0GB4XanxRRvqU2pFoq7%2FifH8kTsIFUwwTcPcHH2rTjHG84bUtk3xvq1EoIXMTWkrsHanGHQyyux86Tl57hsgjuH3cYt%2BTA0zFNwrEYYa%2F7IxLe1kVHvMRoIqpExBg8fUQ4mX5vr20%2F9qgb%2B3u47truLxs3zRQUq%2BAGjCxpCkCCEjr5xh%2FjSuxJwRPxVuR4Rgb%2Bv0BVpQerFD6ajy86YASGW%2BxkRVH%2B8oWwcJuu8J8Aw%2BBFhmXSnnBAN7SwF9gh3ESdJOtRS95LmF%2FpqFRO9ioqkmulfQR6TUGi8ZHvIJH7Wc6khl93QegyCKgYbU75mMshYwlheNXgXSu7JmbvX7kkAz9aAR6LfaOk6sLsomEok5YhHZuOWMlucmo5b1iZnrdWIhGyoGnbHG2D6DPeCCsd0%2BfP8Pb6jrdVdzGv%2BnwY1b0W%2BPi2ysyn2FQH3ZXnlleCjA9QxGc41e5aoYusRygj8a4lFxgmnmg6dMiDylpellZdqay6MFiLaHv5ucK9Qk2iHK0XUjn4mMh8z3bepW1oxqwyOVMNLv7MIGOqUBRewN9srphIzl3yrQQbF1AfoR2xHV4L9mhvGaacyOWVShCG6VfK%2BjAsBAdhHgdfqIoY3EfyfU2p4%2F3O%2BTe2hAaykUTZIEgmXMcEzJ0qykT3eq0pxSLi008Ch0f6ctcGxpRfAzAk2KSw1O%2BHvJGP3y0xuScivkNcffnfM%2BOyTtbfAlIeW6ZOdUGhNsiHoUfamqTKxb2Xmrmlc4POYX3BAlfRa7KK3A&X-Amz-Signature=a2eacc5ba11b69b8a146ac0a05c9c6dad1c29d2bf567e12310e5a69d0189b99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOMZMC4Q%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD%2FchKqPZF1SUYs00vGq3ZNoUVspwhyTQragCODQcWCqwIhALWBqfhPM5I0ndYdrRUpKlSwezYPUfPAm2S6eb6%2BiqtVKv8DCDkQABoMNjM3NDIzMTgzODA1IgyGUvMv%2BfKhLpLeE%2BUq3APWl%2FQHb2RE9Uvn8PfZL0GzGG%2FSMuwjOSVVwKGWQGU7DXeLs2%2FauYkVGfiDlY6VOsNQa3p9H3J4UM%2BNdpdCWEVZrBlmL3hBAbfjA7196TJfLT2UHy9%2FwArU7vYz5FiJVe4%2BQMJstmuQrmC%2BiGLJqxI56fFHHM%2FtAd3XDhXwZykQOeSGuw9NBciiEbI%2FAwNrm9DRGYsTcg2mzU00Fk9Xsi1p9YCgWwQeF0BfnFs%2B16sRTb3Trbs5rc6eM2OpQjC2bZ%2BWE2bh7LPPMsBh%2BpvY4rJssnbdfGz916x69Q%2F1MpRfjKdnzJfvCfu0DAVnGzh%2B8xExtcGhH4P%2Fi%2BMZWekGbCAoVxCzm95COxu67TJtPh3zbf%2FVwmvPYwd%2BLiuqLZkAUH3lj%2BmdNzSJeMrpGVZ2hP7dk1mc0lfLPdXvMVHLzv%2FxeqFi9bwlKhGa5oInR0L6RhrIUZP9FIhyKdHqmSYbtNqRxIPOAXvIwfY7KKQxLHWCOfSqebrYypkDtJSrvJIqvu8bq1RnyBtu1DzLwI29%2FJj11CSArH5n1aAUYR5jVw48gBIxEQVK5DLI%2BRVFYiJxXn%2BpOQnkaXAcHlqcvRpC6bKBBAT4ITYL%2BWsJYUuPf5ZsYwncir%2F%2F1%2FMrmbrrSTDZ7%2BzCBjqkASEm8iyr6YJLmaefJ8Am9n3yEhdHDfZ%2FVhplYP2vSd3%2FgYpG%2B4y2MSp6qD1E2DZererwXXKigBx94jsoWlQMpXsqUNLbbOmGqe4WGdo18tsqoCGckPm1V8aQM4USDbaTc0iORzJmtPqkpkcojkmzHUnTtjg1wRvyxMkseOfIyZm9KTNbDQhytdtLkYI6PBC%2FSr2P0yx4Fh37pPMy70oD28d41wqg&X-Amz-Signature=f2aaa8f627bf504fc567b03c489fcf7cf8ad22a3e5ab6305951970578b93c1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
