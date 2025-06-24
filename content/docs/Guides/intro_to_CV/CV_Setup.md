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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3WJL5E%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQC80XFVyLc3CkITF%2F%2BOlNpciiXl%2BJdW8PDR5iG0IO3B1gIhAL%2FTDP56IEHcPO0L60MwFUVZ5yktABLU%2FJaoqwepId4NKv8DCCkQABoMNjM3NDIzMTgzODA1Igzgzdikm3l0%2BLj8hBkq3ANoWYhSgOZ6YLbLpILLa6mVXxy1V%2B0gJZDNN6rZxKb%2Fn5%2BRe%2FWIm6tM63hbFbp45BCr71NYBYOgDOFru56U9xAi5zq5Opon8YXO3seH4lL%2BLdiZEA5PPvuh8ELPby0I%2FXsKWspwJ8yVKRGPk58OvmI0GYxWeOhmvt%2FsmIq%2BLE0a1U4Hx1pjuulv6mCpqLE2xil6H2ZApZfywwaXHixM2mSu6UedX9r0VwFmUzufXQBm8UaVDTdNKtBNNrLREUw2Q1OYUG1x045eLfbGBjKPRQE%2BrIyuHURRrLQ28LAeSncxRFMrq1sdyynSZPvx3zOAfELpZhls7UB9%2BmDB5Su6%2BQoyDb7%2B7SLn%2BGEuaJ0HSj0n8KSiGtwvxjhy%2FmWQZruxRnY7ICzh2DpLwptB3vSB59qy2jlQiWOFvwcWvOeb3rb5OSk2fJzDyoOLojrxrJyBBBJtI7jY4BQdrZRCBuMQnpIfXbiu0AMWMuTp9GX5Yh6Yqarou3J9hP0iKaM0xBCN%2FGS%2FlMrqKRCN3W4hXl8gIj9ZiTYunwOwWMsS%2BS7eUb4L1YVD5IDTNxXoRk99%2BDE6l9LoMhlugBXZmQhzYIYh7KOCqRt28Rs32Dvj0npR3T9ryEbR47JDZJlwSWjLIDCWsunCBjqkAZ3vaxi1%2BcaJRRWXgtCpA2PIUEAcntDQOoGSSZxY0Nsp3StaqPfabxO3ceCO2kKT8dpfP6ah%2B95%2FKs3N9nZBSUNHvPjhA0sE404YrsNy7PrO5EpoGEZmgkqEMmn3YiztHYJBzSk8liiGCO8NK1%2BQzY1dmTYTikLiLC6TwIDYAPnQXls%2BC9%2BOEZpB%2Fdjx%2F%2BcfE3frgWb%2Fa77%2F%2FPSyZo71w8tHxQNU&X-Amz-Signature=56dcd832fabae5acfb17e91f6f05b7117082383d93d24fe1fe2780efe4e5b67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWIFGIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIALuTOOmZbRSifFGlI2pHcb%2BT765wrawYaUyIjWxo%2Bz5AiBIbVFGQXEmUfWzBcw4X2vCJ34FeMuJo9rzLtA4F1hXoir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMKZXr8ycvKZyVdppjKtwDT8Ma0ur3n7w8%2B%2BKtdn68cMER%2FnJK%2BbajFRJWT2RjVX7xOA0rWAudcRMteFNjYb2Rtn42D4PQKsPbDzQWaxTjN6%2Bfu6YZyIkBzgXbMt1I%2BBGfQS2MmGm%2BS1j5q%2Bif5A6H6op%2FMi6t6IVezhe4ISGiDa8Yqxk%2BkL4PKhvL5htxTYehfRwcuNlI5RzwsrYHUZfGsAlcgA11ZMk3urfU2HiZzZ%2FkoGc2aoGa1lfMDzJZ%2BL%2FlN7RgE7x%2FJCLYjhYOrNK2bmSlO%2BsZaURTVKDnCzceDRdIy%2FDUrdGs0ZvaWzgJ1N1%2B0J%2FBpuMPfFbVgid6Gz23uebcF5dX7IFCKLKLI7Nln68VJ7IC6OpJqHS0PoldeKTTBGP8WhDEzhTc6Kq%2F%2BBi%2FjcqthGZKndvfcYQtPOhC45XFWANGvslb4Of6YbPCP6XRWfmOwMY0QtqD9V6OfYcZHkIyqsmVXwqrhya4FtRwJweCNWPLea9MbxyGwuHrqgOFb3SCgLNNGg4otgdihES3R5UO7hoYiGOieh4jFZog3YhQsG8G3sjj57%2BQ%2Fw8Yj7yQMHbn9MyAAy1ccF7JHCw4AKpmVRg90KeTz0xyFmRi1T5sV1Z%2BQiAIM%2BfNXvMpW7V4L9D1a%2FwMMH7NgVAwvbPpwgY6pgF8AGPzTz4227hy309QV1s6ljXe08i1I9a9%2FjFXTnIwXqzIOPxJRHoUJZd2taFzAjMxvjuCWtCgV9%2BzKz6lr%2FLs7s3hwheNiRD4g%2FKFP%2B6qeU6s2JGe9djUFJhYFiuF8zORMjzCWexEiD6ESOsC1RGGXi%2FKYcz7HbKSdYFzrueMD8EYLSUcy0vmuoirvlGh1t7ocopLjLQAMfGCN4m4rt1A%2FcOGGxWq&X-Amz-Signature=be4fd0fe930a5780afa50de0d53948d58e8bc2d52a231209cccc2e357592482e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
