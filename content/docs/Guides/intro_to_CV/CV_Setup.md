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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662INS4MB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG3IbffTSUj3btp7UPIuicSz1a87U59MoDxjeSpS2WOCAiAPYu6Qsggj0oEqgW3bvai%2BbOpdhadVY8oIJTtskPW26Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM5cdQUhy391TU46oQKtwDlkza8H7iZPXFuo5%2FizU1mIVNybIGyZKkTasgsPiJJ1VSNzn2rhCLYcy%2BWMdK%2F1bQ7hiwBKgkfvMim%2FXchDGVvERyNFPXerMjte%2FxtZyBUljcbKs0SFTk9JJUT%2BnVeux6%2Fi7X2LNK3awfdtkGcuOK7Df2QEUT8FcYnIKQz6Vtj5tBWalsHpjz%2BVmUB7z8cdgvK2qF%2BIsRhkmkV93J%2F5P7Jdj%2Fie%2BdgBQBkdbhupq5xGqX9HSz3faWzysaGEFv4Q1axBQCeqiZXV5pNSuU557oHYAoyHDIG9I6dt2Pmf7MpiR%2BybArxZDifR%2F9%2BB4avT5L3CItxNrcnlsRvxTJjC4NBVaRsUT6CSZrKpwqAmcRZc2sS3lKC1gLRqlsExdxuKPhTBHvOAqeEGdChlrlPi0ZGw00hhk36OQ9XIQ5DeJa4Cu3dfBw6%2BiilbRwirJCzpdZo7daJTNOSC2ra46cVukwoyGGLWFsmoBxkivehdk%2BSrOcf2xIo3dbqPgcosZxGGXDjfCnfd3X1g6y5LDbUXgUBnY76JxMTI2FpzCvYwS%2Fx8V74do6pP70ML37RdXPGDrYEIxF131FYTsAygjRt0VR3JwKhKQK0wWL5G%2B7YpsV4tdWmTdIrgCZc%2Bd8YIQwvoy2vgY6pgGgJYXomATaAHj8BkfunygjMGCGgNuMMA3QG8b6a5YAbKJuhRa3H%2BkYZfXkTW8TxphLF3CY5lXWb9JsA%2FmrlTkTu%2FyyT5wA1jyRN334sL3D7U6Xfrz4AoszZ%2Bg2sxjRinfrmBuHjqsf%2BMHS1APcIohL7Wu28ZznWydaKILhnuZ%2BQs8FXCyvfAWGVIGyHdhh%2Fq0lEJw9AnLHC4xvsUOE1Hg0I6fiDdeF&X-Amz-Signature=8f4f0c8e3ac381095af7aa2d639647cd996276c910d69660c75a777a1a1591c4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCGDJSA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA1R3y2QcSL6K86YM%2FHrtpW%2B1j5JFF%2BGLX2fYvXhrdvKAiAzL7ojKBBQ8vHFpmCOI6CX4v9CDawLFa1zeW6yiIUVlir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMyYZS7eFcdS2I0A5NKtwDOIxPzxvTib2ffxpx6KOM9LMYQyNgS7yX1%2B4s5ANCdWz4sWmywTvcuAl6ZLl4wLePhoj0lZImvAcL%2Fg8o5A5nkevvUNF7BWtqfKxRzSI7madafyYzeq4YKwi3dK5IaOYCTFF0cl3TmJXeZrE0aBLqOaq3J4%2BAhsI%2BY2HtgCwqk9sTlH8e%2BSWUcs81QZPGmGYhguyxeTK00rj%2FU1B%2By7WQo8J%2B%2BAfiiJaqf0gkgJyl%2FcWabstrj%2BUNBlsS35y0oXCN28EMpxs6T7%2BfeCNlFATr3C4UWXBgT7obDt%2ByFNcYcpBK%2Fjj8bNwOEOj5Rg%2FAgSh%2FmQwxTSZC54795n08iMcuYRgd8kaNjIoI4QL8PFlM7pGPr3DCD0JtxyaN97nvgoiCL2KhkBX6%2BFMGJUKTb9up1MIZxyaTeUWH0c5avOruRetm8rJZI1FzvRgVsmOCCwmTLbIcxWSG4TIi55mcoLLanw%2BDzVKkmG7TgVYUpRZE1XycIkhH6ZdYhnpwJjPhPuFN4ebqTXg6d1B1lH2E2bDwNyBSrEE9mVRq0JQIJqNH4N1FTiE%2FBGHvTO4CFlZvHSqMH%2FpmF76o6DfXzD%2Bqn3di%2BG9%2BuofzmNDZl9q5BPHlJRVqGQohEulI5MiHU%2FMwxbu2vgY6pgHDzYVuqcnMd42oDmsngvZj22Va2vGvFx53uh9i8prpnqNK9QV%2BgDRoUj0SJUA1m2q7OsI1Bg13K9naBQ%2FZxqDC7rS6n0IXY61QEIojD4ZTB6Xgl6V84griq3kXgNeXQm2H2OJBu%2Bj1Fb2m9MZCiXFyILKkkVmEhLO1Ynbwahqu4KOBEPUPeNBrVDNVC9yfafSJAolBZGpITX55%2FRYDXnjsG4lCt8X2&X-Amz-Signature=321a17b8b4daaf49a8de3d6b78a9a949e261e2f51a1087244cb54ac859f37c80&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
