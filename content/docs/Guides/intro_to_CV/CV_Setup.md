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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWVT6GBF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHrhn%2F6EckhPeaUomAHWA%2FxUN6luc%2B14a5NOj5nILFqwAiEAsRUASfEjUn4JTy9M103R3RCTbAm8Hf1J6031Sjm1uSQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtxkFPlfwn3db%2FScyrcA4U5udeJYxjGH00GfZcqQ5fdFxtBRyjfjep1j2bXscC6tuSKGMrdusV%2BZNnvOqqzQ0itG2ET7vZ9VDNVxULtAeyljtC20rxl%2FQ2AStyj8zBCgGd8x%2FFk%2BemOPuaYEcnkJLw8CAnTJs5uGdhI2FpabU6rxLLHm2j2rNHSoHsKfzQ3Yt9hiQG2Mb%2Fr%2FXDdlVaK%2F2ybK8hPv5%2BKQwei5jm1WU2Vl5LxUurih7dL2h3L%2F9mt9%2B1GRmHMiCb7CSw4fDKYXKOjmy0hE5Qz%2FeRt5wm%2B0iu2YE31oJe%2Ff%2BU8%2BUpDbvvEi7u4bYgL7DuH4xEw76yb26BcJ8kBdoTJFWLwY5cZREkTW%2B51M5P3qLcnJNBOJvBlM1XVsaB%2FcI8au6j1R%2B5P%2BQrydDZu4qo4Y7hEMSwcgWGgd3d7cu8MPUA1sz4qezNlrH9%2F8Cf8P7CoA6%2Fev585e9NDbQ79436918Kn5b9fv8S7CUzqHX99W2u1VFwpP1TEhtLcgOygDX9Vs9hgSSAdkhOuyedw5dL99QyJTfOpALyywYZDBbUDDIX8hbjVfuXwhumElR00a%2BUuWWv04De34L%2F0bfMsIvuZP27Z%2FX7ooGyUBtnO5hdXNOUyBTaI8HucqEBDSncWYRnrz7svMJjutsEGOqUB47oHUidPFX2T5yYbugDaRvesgKF9AyxpMfV7D3Ge%2FCFLnPHSMJaCfG%2BQvSiV914m2J%2FNwH0KSRPiAMBKBwKkCr3MZpWOsEvXQyH%2FbR0ydKpkU%2FpiyISsmKX6d59uXKibox9Ip8NVx%2B918MiPeoomYHTnjDnO1NXKCvn15LZZjnTVwCQhVGkbf1C8XN2Zra1CG4qebyZ3KDNKHnR8WTUwFOP2n3lK&X-Amz-Signature=8cbf9a3aa5d647383efaa9846b6e4b124e4ffc0121d7f8658e9325315d74ab46&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632USLKK%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDNUb4yXWsw%2B%2BkkUP9XfZqFx1VjIb0DPRE657KjCXt%2BdwIgUK5bnkFnVt3FiWtPs1vd8Rlo7LP9r8l%2B5%2BAbmITa0hMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz%2BX5p2XK30QoctxyrcA4%2BLFF2Ev6HYUyJsoDRePoWIbOYg0csfy8CSTp0iroDnmSrUdHcSbo%2FlsvI%2BogEKZo9VHhAiMA%2FF6FV0Rrug8G6YSNRfTrhmbbY%2FTTM1V%2FbFMPAFtpksRur4ukGB2htljVNxt62a2aR9QTeTSOyEcY4xlVFItMueCT8J9h9vyxOZA8hzVZn59o93vx%2FnrCriQFFRHa5eCOw61PLtXJplisP7gavyCsRtslUSwVwpoz2DzAd2PUsKUNKFXyDnhwddmQ1UHjb4ppqds9YrHyqfA%2FURXjUV%2B8%2FWOX6uvQrGfVJTIow28LMsIcAXEBkY31fon4oadNGbp9a3J42unrpvQQr0nB3Nv8BbRxfJIAa6OpioGuG4a8Qi9k%2FLUEoHNxJSxbsx4mZVbIlodekypG6bPfSY8vsZvI0BEj4obopJnRfomodD7ZP6ERPFdC%2FPxH5Q78FvDj7l7saL2hwKDVgR%2BWxfDh5UzjDrvPqXOe3%2F97AK9ufm4jeuu4w%2FcWD5VlgPM8I6dP0fc5aXzNaIpfdOo7a7EwkSXFRnRJNjahtmNnvEtY6kkMVYJ7u43D0QsqFGO9gTnEQsvmkO3cU4lWkb%2ByhgZj3ORwEaJ4%2BCa6gf7vXrANwySVvKkz9ErUhNMLrutsEGOqUB8zzr8NuekQ476grkb5lcXYrcO8lsufq%2FJ0mBV6OdsBH38e7Gt38G1cCFxMhpy4HYFUIiAZglOgK%2FU1haKltZn4EnF5AIglZuoZqyV3qG2cEJspQaOfDVd0LgLJVcLIuHDvOnBaY7Jhesa6v2WqnkQK6%2FVKNp9KBTRpTTCTSdqN7MgXtHLS%2BR2X7ah01VGiFFA1WyqyfhsPhVqVe6ZK11629W0m4S&X-Amz-Signature=c59835ece5366c814d320633c9cffd46b00e6dfd77ab81facabfbafc49c58508&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
