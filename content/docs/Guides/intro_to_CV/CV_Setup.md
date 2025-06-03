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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=eb3ba3da9f0a133b6b25cd21f5ad1eb3991723a02035cd337acb97efc24f5dd5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLKNSOG%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCkiAAi745oUDvDqDOvpJekMXcI6HUPfl0HILEOefRgQgIhALWb4AAp8wwvDo8Y3AqSjwkjR3byDkd8C%2FIo%2FpmaH1G1Kv8DCBYQABoMNjM3NDIzMTgzODA1Igz4LsIzVf2xUkcPUvgq3AMEo2dSqgFVvz3jXbQwQSIAr24%2F%2BgAnq1kZyAOGkEMxDvVgRUllhw4K%2BwR3lImvHZj52s%2BuAEyn0aAqkccuSehhIpDclzuXZm2G%2FS7aPbON1JUVC1rSKSCdO626VO4M1rAj%2B2VacdeQ78W%2FJZroApAT5a%2Fam2rKyueszSAt4kyZhXwsPhjSmsmykfrcMiWy%2FyrRQD4IU0IT3vaP3wIK7lA5X7WZNoRz5IdtaKrmTZiXIRlbJ6mcghcI4Gx4WmWeoUseERZbBg8fZDoubojsWucZR%2FzErdqXyPBs1emsd4CG24rOi09pdSxBc1aHqkQ6oZL84%2BXyT5FYQL%2BByklsoom87g47xjuZ74iwnAwgF9Dh7rPcw2LZf2j79HZ3HXWWsyDTFPZUYr%2Fh4rrAUGdsH6OTj0fHpON67b5fJqQmwn8k%2F8h%2BAKI01jRen0%2BofDMpDxMRX9Qr039XXDNNDaD4vHp7BTn7Kiz%2FCzGsnYHjOqCudelcgh8h9VEOdFGMLs2NqqmVi0cLvyrms%2FBv5R1zXq99CUyaFVXeEapwcL8ZJuNWUct9yAGOJCSYW8SvGdKxa7Qwh9YWxPEevLf87eAk%2BXG2RWit4OUkVWXA6NLWvT%2FR33iPmDwhInWqFmZGlDDs5fvBBjqkAXnK5Yy6bxqhO5uJ5r9XPNxl5obQYa%2Fea%2BwcLlMPUmU2iTzCN4wpwRXrCZTV3%2B8SCzHKJsgTtRKo83nH4eyu0FUT6p8Ccn7IFehf1lXqG9zjzSaESDcsD6zfdPnVAfhOhxQdP4PR6scb3HC%2FYO6iR3K6gh3IAV5lO362Hv9rihF5UZzUsRMpZxWzNLAiEEPFpJOA66MkhLcfFDo%2B68WSr3HhJwXt&X-Amz-Signature=d8b509f2191d0e72144ac24b22366623407cf93ba34ce88472e30a8205db50d7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
