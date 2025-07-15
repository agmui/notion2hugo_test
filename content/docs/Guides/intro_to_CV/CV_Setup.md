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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNH3CF7I%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCrB5Z9kTzpaRHXsmoPt4QgRwj95WEovRRRXJbfE%2FXCuwIgQc%2Fkwp2ou6MYm%2F6MkILpcFL%2BrmqmRUiEcKOUrqDIPLQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFN4gUW7GeulzHbziircAzdM%2FVKOhOVngrTRRuxvnmkOeLe%2FYOKdWix5w4XRho7hT5Hd7U7EubCyKGhlZVM6JM43sSRotzk4Y%2Bu%2BBRWhUnTQi9nWP24hYJ%2FjgT9EN8eLneuvKaRM3FtDiIG5RLnQ5tXtlvdTzirBH1GjShZSoEypC%2FE8njC0W9YAvr8hwZ5X0rmUqn7rUIOTc0aADiqLeyqKpnYEKrvOgJSM7cN6dDB4vF%2FqmUKxkL0Ept1NTD%2B3qiKzXl3romI%2FDQ4HS%2Fa1lyJtfjEfAXjg9BzEAyK8lDGOx37%2FIQ7lw0RfAT6aAAvYlZduifJk3rLoSy%2F7qIinYVk6CtA7hKk6JkhGosUM3pJJKFHNPHDUZ%2BdAHe6LubXmZZ5pjPPRNf8t8dgJWMqMG78WAKRJ0VSOlv97pFH1gTziUkucsUCE%2Fn1h4s2HmUhtAkw8Y8CuayijJAxr7PFNA0dR71c0sSyM7vtZtoGjtdS5cbY9lP8Dgy4fwBJmPwvyaE3MUfurVV4UavAw8mIUuCHxX4MpbUdyoQt50zZtfgZ0TU5jNhL8fZJE0pi0cFJCyTXeVlGh2GI2Zav3XEOTzEJLbucU8C3oZN2rZLARQIq7jm13j6TnDXrSZfTQ9xiTBOLFtXkI8ZKsQJt5MPD91sMGOqUBGaghswQ8Q3fJYtn6m8hayJidORLgGDz2GbLrJb8bG9XgRcqdWFxQktQBADI04YN882NnIsdK0ndFylOWGLgg0dEN5V%2BgpfEH0bEqxh%2FtVgNnk8cGJRf6Vq7TgkCojg%2BykFjnBxgCVuKw702OyQH2GC5QoXZC5qrRuAlCRXLkLFvOdvCtVdNjVlfxaKWhWuBsaPJDV41CcLVAjO3nRdTkFzkpyHTL&X-Amz-Signature=2e6b1ad90b00fece96b3fb6e95cfc9e9af4797b431a3f53d1adb0d1a37ce90c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVYF2G2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAyXyTfNKpfO5HS6gm7Qw7F7ViBXYeOdL0FJ%2FrAFFgiRAiEAwbfmHD40zVN7AvZ%2Fdfmd5j7x5KmBbC3OnaCQdfbkFjYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDArL%2FDNO0i%2B30itl4ircA86DgELei%2BrtHFLzn0YdPzzM%2BqBgCBfUdVk07kaSs5mCQcAs%2Fi0ezXh8%2Ftcl47rjixJIYQ8gP5CHPDLxeN7TvTa%2B2N%2Br5A5DQv9vwd%2B%2Fw3sPpJ7oJRsdQihFDaiEO5mrbMMIK5S0rC%2FCds5Nv%2F7ewCx5GPDkRNEeJua7EJJsDMoXjSvH4DqrLgl2Q1NcVeNXVEy10X9McXfiWBTqTXi0Ss4PNz7ofk%2BI8T5p7ICG7SScyVqD%2BBnaypbkc3HuD1Mypml678Ls4L6HAlqmWa3vafuZ9x5K9kH86nKb0OJ3392dZHv2P1wbp29dzzohbxD0daatCSbEo2G3oBgV%2Fakzr6aseyDtIQHlOjbxoqQv5hUSnCSBrrVs8X83GVMHalbxjvUDlQDaaQ2KYr6oysVtfg%2FuP13pApfxlP04zzUvTIx3DFH2aSk9JoeTl08JqJhHmY4kMD8JqOq0KGaaGwMW%2Fb62DPvahEqq%2FThS2mzrOUK8%2BuVi2cm5SZb5l9RHj%2Fi0YpY97GuTgZyhsF2GYMqwDs9BI%2FSxrIT%2BpRJND6DTu%2FDqHSOCSN2X781IpdSh3Lm6oUL7bFB4%2B3I4bVKcnxQmJ%2FIjKi3BQZnq5f%2BEhovsy08EDbvP%2FAOyHcAlIunPMJD%2B1sMGOqUB4UiSIFG%2Fn7oEv7N1i%2FpI4x3LZEjczo%2BFE85nzVR620Hugt7mOzw3xuvK4PUKTR4OlMxgZ8anXZbad5%2Bwd%2BlFTlIuU4bXBB%2B16aIQ7uEKPWoE8WfYX5PBrzu2XkmkARz%2BIfAC7Py6KkLcjZI9X%2F1d1AEbpfrHeRTYWG8R7%2BdvnXtLWOzW%2B5V3nn4C%2F1Wu12DqyW53IDSrHxbmD8dz1miGmcFkbo%2BE&X-Amz-Signature=d5f09d51b2a3c03103784ce204b298ca817f44063beed23855dd11b25b0dae90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
