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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LDN6CQA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAx98DoIGWgEcDQlj0m65Ura0IwZFvsEaAtNHGJXtmx%2FAiEA1v5oX6Qh92hGJJOWsI1NbN98z2CM9DIhxgwja%2BugsbMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFjAR%2BTAsJB3loHclyrcA10TtU0SxUjl9ViOzni16gjBH9gRHvP11qHEJKb41ybnHglvPuuEixyn6JM3a2IqaWd%2BMJ2DtRd3m7K7gPunmnPZ0XqjDEkeiu2LiJkYUiI5hKm9Rpxg6a6S3vXDHz8diboUK150tFVKVMS6JklT3sdCewhwSFYmwHrS%2FwrQE6sKrH4unBgbM8Ensi2LQnRmWZcVuEka2YCVUjrZw5kyl0sZ%2FmX6DhQfRRdq3QLZONEIbDn8M%2FYYlfcdeBNCy%2F3r6tt4849JyaSWCnMKnObYAhqvmcBXIqI6ByffazGH7i4KbZpvDcNblns0NQta50hoeWCDjl7E6Ks6jn4sxUkW0ssOw4cU0TvBvgi0UJQNbV9%2BYF5oXZY1dijL7VCShbZSOw1ehInsLVBuEalLPyounSyzwtJONXtZ0HHaWEgcKEwo2Jh3JbAral3BDvxpSNzM2fjMw5%2BG8IT9LxPEnYfcclbdo8CJmD8VPkELUK1wW5ROfUkhroCfh1JyjxdizW9KjvxyALELBNsbHL3JJq8zACqdwob4dKBxLwWr%2B17zCBdbbkyJIzpfUgRIikx%2BTT7rvyS%2FS35BIDzWKjzjanofldESzdMAoTN%2BkI%2BC%2B%2BGgEAPOkDbREj2ojhFhg3XxMK6rksQGOqUBNJdSrpkvJc%2Bub9yDihW4fnvvd2zUFnFVcalEp8jWDyg%2FObEwsEKlmTfsKRsfy5h%2Bik%2F8zPntMvE0lTJlWN9FmE7uX11BWmxy4Kqd%2B6psxuMwZUiPPaCb3p2qv297XqJ5BbaFX5fM1Iinlj27qbaw%2FpUmp8rQHKu7d7lpxPSF%2FuT%2BUJ96Fnbna9%2FLNfDKuKantLIxgtLxYfkB63C6Q6kERwmlOHcO&X-Amz-Signature=4facb0aa3a839ab48c21a912aa044d8760d49dfd0ccda6c50eba814ed1a1f997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663P4V6I3%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD8VGKSrZGkqZvCjgP7N1YE8jreUMNMJNAW54BnzXy2UAIgVK3EMrVt3zClAorwW1z6BX2ELYQMW7e%2Fc%2FxTEnNfwocq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ65AJCS016bJCwErCrcA69D2Cyrh8%2FIX%2BwE9KuqapHGiDI2ZWidUezK15UMXsWTd3nmlkJ557rKELtz2tHtFqiCt474F2C8GnV2nl3iS5RbN3w%2BCkb%2BVsg63qMRi%2FkeGB%2FmAm%2Ft5PqsRwRkSpN5Cu6scuzuNvWT58AWHugRfHyd3lhf2jRWoXM20G%2BLjh%2BVbbSS9iwkjbO0f%2BuCWEiRlPHly386M9Z0oZ67lbPLyQeFxCqz47XdH0HtOCb8Ab7zh3d7SbTvA08DpbkupHjtIhhfnHBmfc14RssR1oyAuhSt2bUEvnQYUnVJH2GyOxGCKOlKhBLmdCuEZ59uS0gMM0rasuXfJZYUxmtCcRKO4duF9btJT6LEXbgBzZiKbL0g9COnUa95SkoMuN2FJpSK4r7uQUK607SsFl4Wre%2B0YvUJGGzb2DG4XJoFzHSbyI6rdj2WY4sISr5n7ZerkmSY8p9WthAGVa5VQYSSCqHumyrsAINrxoyeX3TMFDxgJH1yauv8pYjhbOVe0ZYn6uAcus74rvjo6e6zaef4AZuSGlME5cmsQK6ayFFc3QgZdfj%2BdcjeZsGl%2FHb%2BDj3UBj0Oa3IEX7c4I1M2nzN06RIxXm%2BYoB7rRX1ZhSgKWcQfPPRPI9ecXHAqLNvyBcPXMNyrksQGOqUB4VFyWUewZ89DLCr%2Fb9XjmLjoQNPgJpCP3w8s%2BDRJXGWQdfa2soVs9%2F49M3btfsrkZK7JiCV575e5QeLY7Zmw2LMsz6Bn5qUPwgbfYyK7r0kD8N9T7ws3YkeFgKzSKXEt1vRClEEqWhxeueqLSsw5VSxyUkW3v7hzoc%2BAwaggPhLHe%2BbbuuwIuoNoAMR9cVsmx2IsTtUppbjdXSeYIzU2F0TMZASb&X-Amz-Signature=4e699d7c04f24ee4bf3c65d5697444df076fd03189997cd89daf510f1b77155d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
