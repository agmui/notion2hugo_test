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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GXNNLKG%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCHPca0ssleN%2B6pIXEWmLYL5O4U%2FwaeTVhUfg2MscpmUwIgOjxc1tP2GQKqO%2FerNy6FQq9LAzgWJScg%2FH0I%2FnB3F7Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDhLy6h%2BohPJ4Aef0yrcA2ZQyLAYJ%2Fqr1y8%2FWfkTXcDZMiJVP1MAL49D6tluuLFZet7GEcLhicMxn4I4GP%2FztUegOtccSFFCWdYYK4lNrKRzdXyvVCrzdzPEqapkYC6rjjsXL1KnkSjgss6NBc9gXAV6%2BPYBfikXLholFh1zRFxrEMVKhezH8bYgvtsS3wj1WWAPK9VnMeg9REWwrd6ICB0FzjGM%2FPM38kHRGBGdu17dqcSmDtSZX4cv2%2FUV82Kg0HK3k7NbiKMFGKx1b0Xe1BIJwDWARiOklSn0%2BA6P6PYwGPv2G8tCPKOLPSSc6T4v0tqyXilKHpQGE%2FoTFSMpbROmOiZmwm%2F4%2BeyfYDZV3vHcthZ0FRdzn3UvjpbjIsWYfDrAHXH7NLjj9UU3RHgeXvofc9SZ6Bw%2BNP5eRGdKxh05UjweeO9nD8QdhJMTFO%2BX0U9Fzy8OV%2B88rXQAvoMa8XRzjhCEsTmYsZlz8PEBAw6YPUjt4oZNwKR%2BBfRSWhvLOyJmp8AVqwNWpOH3Vnf%2FmnkZayeoViAhEc2YNaCozD0tBsN7G3Ugw9pu9PFf74iKRyGF97sw8iwvBZp8i82u4sOSPuU7a2jwL2Y8WRZ8FkciIO30Mrk%2B%2B7u%2FiR9QdqStZJWtZBGqnofh09BzMNnQgMIGOqUB%2B6pWmH2M3ofOJfobewW9j2G9rSQp2vANZUbOUiUwZzOKeDw2gDD6Aj%2FXLioQCmhTFc2b6gxRBeZWIS4Y1o54aH%2FsPRXncFs41UzGQTBunqg46hXTXwFiQsDfKduJ%2Blfg6n3sm4utKfXvmJ%2BDA5h7TRw08gLbctwjI812tW%2FYqLoUvpv4iIItrAbPSUfDnHDr4UCIiAT4VF6VDEhiaShSFFLuzTRa&X-Amz-Signature=cdf05f1b3451a2c965e6f41d645c66f0be55034fd0ad8c3f8ebc0b8c60e852e6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EHZW4C%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIBmWxDo0TMZMGkgXafFRMe8lPi4cd08xfqbu98kCmni4AiEA%2FMO0l9nCpGkIaTWTesc5I7f9oyYxgYXhWQrQz1xqPYYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEKBOGMe3JOzgezQ8yrcA8AiXpq8Jsrl%2BBPH%2BLGoEL3lplm%2B8r%2Ba1UObgL5riaMaqJlWZnXIDUJqeFTbmMaw7WAUcPNB9FcPiPUpyn%2F0F5z06e9dVKnpNs9bTql%2BryqUubRI7cyrtRPNBUJTcCoOiPMmPa17EVMvlfnTcOrJbFfnRnLtbMw3RPZqZ%2FZBElogSNUmoap8jGB2g6%2BUZPNp0YFdFpoqlMmJ55kkGqDjjvIAdXRZy%2B0q07ESIQlsaEbbGWMIhrmVaffsntJf6kipMMFQJ2u5DsuriGQPbRrbSI9lYs%2B0TkYAVfaZhu17Jz%2FE9sBpIZyBtcGJWepH11PqIcSh0RL5mkhvdWQ3oZPz6KRgXtHD%2BIX5SET%2Bx2J%2F20YHBgwlALsMtXYAHZUCr0awCjZ6qtVe2U8hvGyjLxoKiJKZmFf4O20wzKhYIpyxDkv%2BtQMy4HROkaKSgXCnEkbRzxP%2FLFWGsdBp%2FuZ9FztJEwU10MFiaa0o7koIlvQccR9v0zmDeI2QUrjcAoDODACpDWm0HyHA9ndAxXJY5CtMB%2BQuoTv32ZjGwncBayWW4KPJLjVon9OBOL06kbtoXbAL3FV6f0bmLxDpZ3BqFjLniTytuiRGXrHjGau0vkd0hFAT13degkW%2FM5kQcoH4MMXQgMIGOqUBKKMIYRny6cJTmlBLm2llGuclYJeTuW6T8WmJfm1zs9a7nDF9l0NFvBB7IT5ek5v%2FgD78N4aPlDql%2FKpgo3NxpkkU58ruCmu8wYWXDBUVm3jrb0SXwpXSrkuAxcIZHyQX2%2BScVp8jopmqIGwClxZ3OgFV1ZRK8VMaCTIbNNoBPIE2kcsbRKjNKqN62Bk%2BD9Eqd84RZIlz2RPn4tfcaDgzGdshTB8L&X-Amz-Signature=2ac31de9027946af57e0b57b297c68cc58170c0f92e5250383eb200f6aab6d37&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
