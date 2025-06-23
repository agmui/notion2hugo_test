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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6RIJZPZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC%2B01xGQLK75217RwF6vHbXIC81GPjVk6o0cByrrhq0FgIgL%2B%2FuC6Lk5O3Be%2BKyJ%2BICUHevU6hCrMxXVYtT6anDOwwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFQV0yJkllRHbvYLgSrcA8GV6lluRnc%2FCXOogv1tksY4IiIG5tFadsOI5xxB6GmtKLV3xsuA%2BMc0IWRSs2gG8Hyw3X5nkxpEPbrx9qOBgH0awHgGrPu2rARbEiS2QXCHvTN1WZ0zcmfOeG8%2FbxHEkhPUtes%2BO4ClzpqLsULnPGR32vZB0dV7qDOuqfhjY4g3lyLM8Qzpf4REm8E%2FY9mtnsjGvIdWV3fY7dccuc3px7DYPDCnaA1DOBUkziG2jW4ffmJzD1CXBekT0NryUHVLwDr9LD7jBLdHuUSp5%2B0qVCMRq3pLqHpz8C1c08kd5criJcBB8flWNTel5135mmHcH%2F%2FWsxtONSCZvsnEYmHdwd0YCUBPfxaeuchzh6WxcpIiEycXsUtHnXEKrY%2FcR6G%2BkG0By3hOb5Y6sC7mBv3vnNa6zoRV4FgolXIgSE4pFbI71uzq7qVTxZQNw8bYYOmfpMBdfqo%2BbUZvzJF%2B2%2F6vgvkkOCQ1rLH0DZsoJiDbfWxGEhge%2FSkTdVmz1A3FOfxYhCNmpQcQLNM3CP4KLJjP%2F3U91zQTnCCb8ouNBdEIS7VLKTjndx7cCJ%2Fb7Wycra4FOPKMg7BLWB5SWll2Xq6SF2rAxvoX7TdIn5k%2Ff9XiOm3iUDLjJoo0ZyFGdB0UMN6q5sIGOqUBAqe7pf5B320Moi1ZQQNyGWdHBmdcbI6szWlt%2FS4Mgo83Wjf2FPMwm4oiMWEE81eFyY8iHuupYlNqOaFgvieKrIxjILAfDAK5puCVYCudV9Lr4IWxvH1POhwl7gFF9iZYdyiqO4ZY%2Bp5lv7c8bmOV27werJgzkLAzt0DOAbzLFw4uSO53kWX1fN%2BE7jFtH3aWe%2BcMFmFKoQPUUsTaHAgpy0TxvqxA&X-Amz-Signature=c38815e52c0092c8c7ad469df51a997b9b415cfeb1a6da14ccf41840087b9cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPLZTWU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICubpnu5tAdFdKH1gxLnzvd6Ez51z8jU4wIz0DHgNRZRAiB799ICOSTFfCQXQJjAi3OHkEuCy6mb2E6NKqlf%2F4xlTCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMu1fLQVWjtQKvcUg6KtwDxUJglBGsT5U92Zs5Xt46OdSNLJJ0ekHcTqFHkbHv7nFGQRYy0Cq9H5Kvl8nm44961RlZIjCCN2mgA9MSmL%2Fw4kfTn3EZOSrzK2PD7oft0wquzLsMBl0W5EP058wpK8LAuRPivW%2BKzO3eWuWSsYPYqUvw6FtIhVDYBzw4O5TadRRzK0c%2Fk%2F%2Fs0pmqK0EjBFFi8y%2BsKLenS9%2BzRRYnVXnn2DNJdyjsdn%2FGUj52WoHihB12jA5KQCnznj%2BRHnDdwNKST2OBek9Y4N3tZj7W8A5v9ayl%2BGd2rUQ0HD29fXJ3zcaZ6SjrK%2Boe6A23BxMwQGPI9HWvvfqDZR1s%2FB6g8YE%2FVPNuHj32C%2FCPDitTnrxUF1M1gBDQf91k0bOm%2BMitD0uuKLxFLVfx%2FEy8PoLXB6egIOGq5rt36K4v8agaDrCkS48USsyTzJxdXvTqF8RbSVmKVQZm3HvHG7l5s%2F3blt4lIMwhjM2FyEbyxq3lN5VQ%2Fd%2FD7askUdopZed9%2BkWEKFPYXi%2B04L0xRoXVfBOB2pz9N7vTENtZVd3RNVBUKZYtxHYvQVLBgNAHOoMYCegco5gXn7efBa4Y69kqUR5BHo%2F0unhDEqhJc7jQzzmrenO2MWlqfKrK4mNIMQQT7wYwsKrmwgY6pgEcWPMTdmskOILa6oOen%2BaSJz8oozahKmzGgayUT6cXTXl5XX97BTHexQfOrbHYCiaBVGoVc7cPFatBJ2z%2BaU9u4e0SWnOEFnZK1c1qest5OhTx4XLj3roBUAIai9iP2bovc7tsf5URVhT9DuEvw9uNDqSu8FQ9pCQRU%2FadR8ZV40XmWTUrKdbGv6To0lz37mCB3vpsq%2F0fTt3f5LEoN1f4XmBo66Xi&X-Amz-Signature=574e6d451c9fb9916b7546a771e4f296b4eba4f113cddf07026b9d792aefc87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
