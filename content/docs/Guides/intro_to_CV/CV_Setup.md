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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644RWLMIU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCLUNd8wOZaCrbQe54IA1wB86j7Zl%2FsjJTHKz7e4JYGNwIhAPEARkr4H3Unh9yiINYJ9umAuu9AA1Zvt460k2928TYTKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuxWu2sRsQ3yO45RMq3AMKfshO%2FCXIMO8NcSvEjT97ksSmOkL3FG3%2BvPpjDpBder%2Banx42IKw0Q%2Ba3ocvbKrzkYyUJ8g6nuouPOP%2FBKKl5VT5bEgJKJ6PndrM%2B2BPlJJTrIhdM9skjlothH220ZG%2Bow3YC%2FUMuRhGufz70Xwb3OE0QPtcSRLn3t9zipfUQP64wKiUPZdnbHC5uGHeKVsQGzHVUAuzDXsiHdZ8FDsoGvuVOrELQJTK6I3dIqyMgj2N8ETnEyVuLSLmqQzREup%2F2H6r7sl7vdheXVKE8iLXU7fwMMkoCDah0xuwdmzNVWMeojYEigEcis2P1lJSfEVNmGsDPEyvXMrfy%2BMUaGesVZ76yt%2BpzuOXUUh70HZQJoA63sdg0N8Pv9ekYQeN3%2BJ59e6XKMsoUHhFiTk0rsBPzYGdEDxjENjPWf2ZNhxrB6Mi0B7i6trmwBtjgpYzGYOIP8tJ%2BO3bQVjl1m2ruXPdmUXX9%2BNyhosbVJlcVB5tcCHl9ZOxmli2yKA7xZZez8VY8nU97gjM2d61fistRMeb%2B0bWrrf7%2FniV7UdgGLSc9i3giTVTayq%2BkNloNHsAI%2FCr2Z8xxyDmd%2FtgosBJk5TqCYNsjUezQDkOPNLFZwqszs7%2FwhdPxhMSDbPIj3zDBk5vEBjqkAUPVk%2BKqK0N1sLTSJV3snlHO21nlkgigk5grmc8H1MYXB6A0EDzm52IcK6Knj0UmzAG%2B5H30%2FVlZyE9wImh4h1YBgc%2BFOASwvU1MQjwGNTLBFzXtXw%2FHLqk88uyohfsm8LrKFhzcnaEETek1sSbgyYgoMeYe%2FGCj3pIN41RVfJqK3J20e02ElXANG2jVXcSqlrHZRViHd%2BlqScOu1N6Mn7V7Iu8b&X-Amz-Signature=834994b94b431a625da5f273e24d53c6974e9b33a059414f453221073f2b2606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IWZQDW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDxuNctzCnoL1MKNROvQMjSZxd%2BZeg8IoHMy8L%2FHLn3RAiEA%2FcPwz3xoZt%2F9UNp%2BELVwbZBiL5Kpbj9dwOAVReJ3OK4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF9omSUYqXqfFWdQircA7sy9gUnKV0bdsis9bq1Oy7fxu4VtHaL5RTClnP8wWVqK724vUkjZUEBf2eN9Mw5IyHJ42jg6cxA4bBANOoovMhOENLnHqZlzprNFKOp7%2Fkb%2FGYRTdl8LhnjK5sacwScWTuGAnVRdSmUHz1fsGRXxlpvdLybP6mZrPVnLgIRE3OGMaFIZgYH0wxiXNa3b4mM7QyfaqJq74hRoRWEYibzMazYLJVQIYitjr7acgxzPUE2CsND5DpLhq4GQWUaeFSMKIglPVgVhsHQ80DXZpgvoCJlsGFoT2i0DWM36hZQiTcHSPs0TZaT0efe4v9BgC%2B7%2F%2BRvyynQ7KwQlSuwNTKDZChQZSodZ8c5k38bKxn3IR3URGntiArIafjc66zy%2FdbNX3kIRG03RkO989frihLjU1qsJRW5A6U2NlRAXVnh0vD9BKyAJ51sZuHhz9y2dcpfWVSAY8u8DzZjj9KXN8Aalz6dZGH9%2BWUYQ7GsVtmT9ywj7M0qvBDVEUyPG4xpEccMJCqZZTQhOK491Osp3m9gex1npf395WGgUkmPHy2N120%2F%2FY1rYJJMLvD3%2BngZSdlRmZmXBqk3vdfg7xiF%2FwCLKIMjJ7Xy8Hwp1mLXdaZpEtLF1uHI02RxX9y0b%2BH0MJWTm8QGOqUBwWU2uYxloMrEPq%2BZL3oxC0QFzOzMmSiT%2FnVtW1w9WJhjQn2NlGuLlGnbzgr7uhlTlaJFAbqAeOi8mKydGOlwHx7UvcP5KzDTuZUDLAW90hOeh8DjqycBfRyGGqCsjvwtq0y2N7mOclh1QOuXNxsWKm%2BImBm%2B%2BQ5BYnbhYVk0GDuV1nLT6HHSUitWV7gAwO75ZK4iEIJRqKIrlrGA8ox0d%2BC1B6GY&X-Amz-Signature=a2d2822365d90ef472c5ccf33c153407e905b4471f9853e270a7b45cb3c1c032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
