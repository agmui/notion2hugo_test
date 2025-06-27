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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRBB6UEE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzdirEbcAzk4dDaZWuxvBpIlL6PfJYPJPuqYPAQJqR4AIgGYnt6YBElZ9BBBmiq%2BwWvv4jTlYVZzmKaEFe2LeOS2Qq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBcEvbAZbuCLjyWhySrcA1jfpx3UxOmamg834gKUoiQjNUzK0%2BMp%2BcijMv3JSlBy02Esp92qjJ7FTxoVNjF1WTgEhzur%2FgWKQSOhcZ4DGgdR0lPaOMJm7YM0QqY5ZULW8bpXJ3Bdkaw6S5Cm07mFP0SJtzsob%2Bq70GFNZ8C%2FOFnKUjNbfiMiMVFbAHZxk8vzaGrYN5DdHgiyBGmrNP5ZL%2BgMYLWeHnqdl9zDIYA73KeCx9wSi3%2Fodu4xDK7B9akRwzAEM2laRygG%2FjbfSXrXVzTLylAUFbQphjvQM%2FI6XoRQRM2f9pNPMndAWOA1zJnNGPS4l4PPGxWGCcHu6FPEdAD9nu%2FgzJtZviWspv%2B2g1QkXft%2BOgwy0IMDcoBPOGORCP8r1kNZEjqf%2By%2BK91LO4jH2vzGFFxXcGfiAdgcZWGrHJcGGr87zrJ5O6WtTG3hON8%2FZKrqJ3U7rPODpJutcgx6%2BPOtvQUof0XhOw6X4NVC35s5Ij%2BxszhBZ8pWHgZ%2B20AxuzbBK44D1JhuA1NDQEL7vAZWSpgzxFc8NQKkET%2FrdogVxVJxS0t0z9h3pq1CadOd3Pzb2TDniiB12Ty%2Bs%2B9d5HFJz6n4G3wmzzDktbXeWnFWZZ3uCQQ1A0bWzcOZ%2FR6Q1PwEXjNcDYlGAMNfK%2B8IGOqUBC0aOBTtSjdzdxJgj3DavO929sPSRhsMvH%2FV5CltO9bmnvkRTmmm9o3SNdC8bcvTuU%2FW68cbqX%2FnygDJcfcao2wLk9XRMJLHcMCjLTcQlpUnjk9L1ATlzsma14wsh9ZFIG96NSj8DhtKL1RWMBOuAsykOhJZFSjeU0SxDbmrikgbRn%2FaBVbOZfAhYfPACQRzvonfDWHf6lYoKhkxzO0A24%2FdFIWbg&X-Amz-Signature=13ac74866a9470bb38e254a31636302985811320b4b5b64c3866d5af86c86d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSYFNX2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZlMiLvzjMHqkGv9mwfuzv34HqaVpMN2jjAQMLkBVmygIgYUsm719w%2Bf5bNmebyPw90cfpwbA6eDEUROPv1%2BaJEDkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBZFvAiO23zyK3WJgircA1i48jnHZNOKZVylqKJbcdwsfAAVJVOMtlFZDhy9t%2BCMcdHp6%2BfOLS95F7Fc2i3Wi%2FtN3%2BJDLypz7dck%2FkiyW%2FCaWZAGGjGH4yFK4vFQt5E3pwqJA1iLp4P%2BngLGYjg1M0VYZ1NZUxoq04FXQIyeg264pvSUqlr%2FdHTT1TBELRMA40g%2B6VepnRLsQ%2F5Uv0AvaWuafXn6tIMX1reNegG%2Fm9%2F5lBQ6dSnc6y6tytrOhpTTZ733k83uvu1c0Nwn9s2uyVIlVzaY3Yry4a56wEz16beszZ60X1ERuJaQwrNDuVCTEyc%2FJbqdF%2FmSc%2BqB06bPRut1%2BHANC00%2Fh55ezWO3nB3pmMYKnw%2BOJnJCPs6du7klSsAGsfb0Qd1FoVd2GRhr%2FZvFygcIsO5ZX6%2FcjXp1DabCe2rJsFAzbNnoN9k%2BQekzxyedUwQeMMx5WgziXkSoy8q9wxxN9dB8BhIvZVW2HLaxbxfx4btOe52hBDqOx8qjuNzHnAvdcRPKuwD8YNYOhW6qivzqGbgmEv%2F0jys3uo4rP%2BI9N5GbHi7%2BKkKVvawlotLB9x6tnswip0qY9mypr0ALf3upUWNbTC68qMg1OZAZA7eXfP4htm6IGeL%2BcGqe7EqEnUdR7vd45gYlMLrL%2B8IGOqUB8rUnCX9IpoT1sCKlAS3Vod0KNmbAFs68uSAOK1gjQDtSCjVhfseWKj4%2Bg2ZW21EDxiEMB89xZm%2BuF96XeV1a2GemPd%2B9XlIpF7mjhFtc9cKs%2BXVR6hZtoI6A7pKG1JOffMfmssIpoziGkyW1CapcZaoJIvH76HwqRwO4qt8VszyDoaMCsqzLDQkaoJ%2F452uMrFOiG4rQn5lNv1u3Yj7knWRHXYUx&X-Amz-Signature=2816281d65ab5923ac3ac76234b623376f86aced156007933464bbb06236143d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
