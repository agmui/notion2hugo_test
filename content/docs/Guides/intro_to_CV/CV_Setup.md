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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCCLA3IO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3ZqIe3hs5stO13VliiIBIMTTB%2BtGu1oovqbr7O7bwNAiEAgmVl9cqgT5uyBkHYKBh54JR9JGWGpWugCDOkBSvrOmUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDI6g55WfZAYNDfWYTircA1sfPOaxaQmqe26YfW9pTgNQkMCizlgnV4bynN3w4B7k4tL2HfaA%2B9iYLWWgaR01uvftIGk3kh2KOZ7mqamu3yAHwwkgIrcT6sM8ppUmYX3gtsCon7Xzw4%2FkaIvrRQwXNPgWqUjTCxIvcIO6A5pXn1JzinsfY20rfpcI4z8SemoK3ZSqkt0S4bR6Ao0HYaIyZ1Ni%2BXUde3WTnhD9kTmlbA7mmThQZ7YGaCQIVcljYvhUsGU5JxomeSe%2BMTjFMCi1EXYssSOfvr8GSybCyBgHShf1F92opEdRoGTFyKTl7LsZposeajBqy3dKRnor2IvttTs%2BlClawdB6IUjp3UQ6rWYKK2uLXAW09MaYtJ5qSd2jeUehq%2Bq8SnpEZzJv%2BM%2Fkwuu2Dum9cv5NdIVBzoNYdZvpdKIvmXOKk0Hvk5mAwUqUpZueI4PRPHc0Ey0xsx0I%2FYqIlpHdhYPn8jhMOOgs5haWMUnMYPx53%2BIc9C5MnMSurzk2HorfbK9SK1uVm3WdGzI%2BRj6vXRskxWj5e2Fg%2BnnAAfTlj7sKdUKB7M4zAPQUzb7TGdnO1wUEZzismzWbdZtgi%2B%2FaQn5pWIwpOVa7Yw43dOPMhuLrQF5qktow7y4R5fI%2FesRe0JIdmLAcMM%2F81sEGOqUB%2BU6BPvpU%2BGUCT6R4wWBKN5EBz92JAuJ4JVCh9OTJxQnsX%2BOvmuhNbvBidZWRttWVFkOwJEt6HkSrs7PtM7go1IV7IrvaYRZRoLC0eLMM1OlyUYkTDUCup2dPbOukfk3TDNHDxbfBjFIAWBpgxxjfr0JKniK4GSxIdccdo%2F7cjOfdTjlYUW8eWCT4e%2BGd3EDrZKyjg2HVo5J%2B6Yazadlo44tOy9v9&X-Amz-Signature=8d5e566829d203f1633bfa04a4ec3f361f06f354e905b8d56a362fcc2ec452cf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT7RD7M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc5yiE9lUny%2FZPUMlF5FkeFAV7QR5H1dT4ghztt%2FSbpgIgQVVeiZ3I26eLqwstfCwxY3nsGzCHjngt6xI5%2Fmqfk1Yq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDL2d5p4ziP6Tn5nvqSrcA9XX819YOJMwWKElGLJTVjH014r3PRfjZGJSB2AX5n6vqkWtYu3Onweer6pdH9w6UIhHOEPzf06mmu4gmvuR%2B13U5ZRibAZvz5TAnOe8mU2zV8kDWnqXUcfXI%2BilVnLQ2OSQM3s0hjIRuTejN%2F3MUEKVXu%2FUNQx7UreXPaL%2B%2BhbHtysMhQIgQfPuhLYSZtdsvXpcumbZ3mG4FzUlCHO9Papt1bmO%2BxlycaMEqqw%2B3uRGsEpWC1QOCAm966JBSvgGpj5lp4LCH3pfgaKAyFSPK8zr6hEWvKCpb10YBmNgv5sNh587oalIMELxYScNKw583XDsM26Ll6HfivNDDIt%2Bi8xTXMKiHQeoXr6mTNOIpaBAdIZI2HxV6psLlXCtCUdF1xRoipBWCj%2Fh9XLy3oQJ9bU7lVlZcT5oou5lWa2t%2FN%2BHnQt2uQqx2LgW4f7iyp32%2FU9ig9k%2BlZVat87wjawz%2B98Rld%2FFLcC25khvQPhVklrLlxLf3wM1tghVvxaamzcvWxeH89KBYFOdoUH%2BBLLzBLnvESBesfg8T9mxbuUIvIK4b7LM0lUqxsWWsf6Zu9JZNiiNv6DkgrM1aM8jz3lVZz%2BXLaWFoJww5e%2BKyAJbOCPlvibdtKeWvcCdunftMM%2F81sEGOqUBtmbEdR9Juj1mvkcYH8zOHEPfjNiR3nLodk2UNQmBcyirBtg5X02UEynyixftEWBJ8THCdJs2nYLoKHDRjBc%2FdfOCzgBZIwk2Mf8JL6w%2BBPugsm1WZD7xoyuFvByL%2FqbXBSNDJ8IZMOJMRilFDFMDvFpnU%2BjFYMdnXx250UY2DEddtkp9N2je8016Z%2BhW%2BbfAPNH%2BpBFfuHIRQxIAoPtMGXsPYBsx&X-Amz-Signature=3b68708d33dd4b97aadb05a65eaf18e96ec99061902bf56e1131f3902a8c4519&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
