---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTGAES7%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFA80eFDN2Hn2YSviMI44xRbeFpaucW8qSDx7wGEUXYQAiEA%2FwmVBiUUKY8n8AcDfvEZRW75dJ5yTQ9VG837AXCF0NIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbhbu06l58db78ETSrcA7s458IdtUvsgQIDraSnQS4Xqf2N%2BHmlllldKcF9J1zwl8LGkDF84TlDQJRgMcNm639HzHet9NH2vziKL8uMvt4R%2FjF7kKmuthnfDH3evKT0NMfEcpF1ewYuVoKImGtQYpjXrqwm%2B3yCRLjz%2BlA%2BxXA%2BmuYLS3RwSkjl463qG6Ane%2FJ4dQ%2FBJtgaORBm%2BkBJMPR8wJ%2Fsi63j4O5PwMEEWuC9gBllZSEzheDAKMdLqVwmhL8r7ll4QRuVDEwsHZBsnVu90ecCE6w0WLiTU4ztzcBGg2klEjmOFzMG26AmKUGEIqXDGw0Y0ouVLIVwOIgtrlO6gbudOZvENDOnweTds1Pu4A2DQI51ITjWnn2zdjmtJnXroMqNgzjnY89SLS0P4yDWSLjZSIeLp8mFgZZgz2ZUyQm15S7Ewo1lz9n90zIcxgvtvD2hpT%2FqSbMTJ14ip8Ga4aDtI3glohrJBWKVladVcBOV5FNSdfMQDkKtkWBp3oyJXNcaJuVC3IhtCgEnbRz6Di4%2B6OK9nUBk40bErdCMFDZtXbGnq%2BysKiNQUwwio59qcESz5xx6OnCffYw%2B0mB0klNsTstYMPSjtN7sTVNx9zRA3HwzjF0NHMJGZqZye1ihFWOZhG7tc%2B9sMNiooccGOqUBdNLPTZ3hCYCoOi3xfCpLjoZxkVIT67ml3z123sRsQVXtHPsB%2BaS3ySI0CNs9w8VAhXV%2B3Bg4RvADjwzVyVvobwoEWBxoJk2pM6barG6dqU%2FfiLNM1enEmJWIgXIOBAH9kRWsmQgvwFPvvTqVjoW8XDsJs7Z2A9LRyMSp8ELm4EJY9plOkIdyo1LYZzsFAuHWzAiis7K2w5ZV3drlkNY9cr0%2F2plj&X-Amz-Signature=ccc3751bc994678d19ee2c0cc737fe0130aed9fff0701de55b280bb8cf5ad011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCP5GH4A%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDIDe6prx3XRffqeXSqSH4I62ZeOxZeGq3hUFgtC4jLoAiB9Z8EcdAGxAvVi%2B4Vh7u%2Btia22N4AViaeyAr7L%2FTp6OCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0RVmH%2BJiY0Xbz3E9KtwDWTNEY%2BgHJOfHGv%2FeqROoEQi4cklGK%2FOxBwQ6nnMYJPm0kV8e5w2eA%2Bg5YjdTOnJDH1XamwWpYe4DKxmpquvhF2GD%2F32WtjaosyFQjYRCwovNU2ERVtSEh6CYRc1hZFf3dnhQBlixjVuHR3JpVWyIHhl2%2F3Pu530sVbb0pvDBtTIBkbdCMudEYSS8rEGxzTBtRzYB5M71IY%2B1zHGudIjqiMceUbM9gdkWOHg%2FzO8pndax%2BzYQP0WmA%2Fea7fqOMBnQP6eXsDCpT1UvAGBJDylXkVDX5xtbtslVxRxEaT31FaOjf%2BLD9P5zvP1SKuRymuqeBFZ2DxBAgOszNYt8ko7WbtcWRXLrnbsJSnVG0yYElbUTeBzkqcKw5u1kXDnWpJCG%2BRQEgxLIcC%2FjG2eKCtNHaze1Aw1v7LrpjvUgm1xohw2tIUwz8Mzc5nFGeMD6G0OEuD%2BTIOZEY8GEOJGRRrsyhBypa0tHzMpDX6K1mIrrjJx9sHSNYx8NHapeIOrQ%2BXQw2OiSRPCy8u%2FmlN0aEn4L3reJU2EA8qYpvxKLHWqveOYNtdIZDUykGLS04thN5GhIbUl6BGU2n8yyIW2Go6N49B%2Bue3KK7tZAKdXCyrXjKtp9o7mmaPbeyt%2BrgRYw0aihxwY6pgG3%2F46qwSHYvG1I2TMGYcc65zZtWuB2KX8RxZLuOfBe1dsRXr5XZnyb0848P87092sNADX8BTxFl5q0FqiQvMbnoPkXh2aOgKRrRbM0yLRyUWiWzBRANkY25Bvfg9ADEc1vBgd8cCp4Pdq2ftjYGZxy1VxHtX09WP%2FGncubcF7J%2FzS3ogQhoXYTzUiNXdQTlX40x3%2FHsdOdOLHWp1DbGHw5iVg8x%2B3h&X-Amz-Signature=de436adcab94eef471b50c174eb8c9fb23e4545c6be3dfa90eb70a6b50aef8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
