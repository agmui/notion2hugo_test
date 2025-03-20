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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPDHZUMD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICV9H9vuWoZ43XxbbwPcgpmXHxjSTWx9RzAY3O7EKSbyAiBd2Ky0HXs4rUWryNXWFu3PTxLbXkPFY8uZRGFUUu%2FxOCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjrCx2AWO77%2BnjfdKtwDhNXP2euA1IKgRTQD2bQ5xZ3%2Buizk3bjLZBtI4Y4Jb9l6DmiQRYBzVyTg9bt9ybA4xzJkTbaQ4n1MIbQorM0CRa8ex6oj98JIZoBISYYZpyAaXdMUqErg4cK%2BcIpDyeU0LAg8B7LT%2F8nsdFVPvMiZA8plm29XbNilnsVbHviOf8uIIHZiy7yfgRtgOetxt9qJBm6XiMOHa7bvyeXzuxYxU2hVEO4qVIhWccRFdUWATZ%2BlHbbk073Z%2FB%2BeYthXovKXModiR%2FqeOCPJ00XjJKy0Weo%2BxRl0Q3PjmWOYvBtVDfdvo2RscMkgG3Jlo%2BVzUkaSrMB5FoyYVge1LaIviM1Ulmpbh2lUvwYkZYqfcSWDDzz%2Bj4vygAY7fY%2BP%2FpofLc6zWi2NE87QK3BwHSWOECIUg2KWOQL9LYgkuI3BpX0ZkfLaLFrXKEiRsqK45dgS146ZjOgsgbYiWcmjeiEr5OAwNNi9%2BrsO9N6Gmn%2BZ6Gji4qnPxIoMoV9Jt3%2BP9CfJDaEEV8sUHqH7o%2FUCwe564jkxRnyi%2BeA8VcpYsyr%2F6e1VoL5cER0Zo%2FQgvWqTZ3Lt5QsOcn%2FgRbbOEh7i6YEd9kVDZZFM4OKsfFox0LGtiRl%2FuFaTk9ZrBqVhz1PC5XYwjaXxvgY6pgF5C20MyXxwE3yRpMUeJrO5ia0gI8K50e3f161WdT1odiA%2FwqjahG2YeK5QWfPCkHoChLTidowPFaBuuZFl2MQObZyWCyWVsf%2BJSR%2FksppsDC4Xk0lviBl46KXvLRmyGkBWJ%2BbJCDOkJyEqONhsjmjiYJjPzA9mNBBv844jJeM2eXox6LP4k3x1Go08WpN1JU6zjhEEZcGpHR21gKoNv8yBwKeR5mNL&X-Amz-Signature=b08b94ebfc93e2f3d5a06033272f7743d4548dc9c9de7058f3bd58dc1a3721d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5ZTYK3%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDKwnQtZ5uxESFJuLyF0r62y0PrE4kn%2BIw%2B7qbhFuO1YwIhAKrF5xl9w7T5g%2BfrTPE%2BSbpx%2FQDghZVoXLvm0cOALV6cKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdU%2B43U1M14uGSRp8q3APBNqJcS27n7km09Trt3gFTWjQjQgHBXIUqYADfSf8JGJYQL0B9nYcGOWCIi11nE2o9muV%2FQNOq1OrBODs8dLF%2Bi1PN0bjWk2%2FPnTk8XOVGQyO7TLbl%2Fmmza5bGB5gPW3JbE1Wm85Gk%2BLCqRegUBgDRGXPNpUCXo91JfhPwIRDGfbdhieYZaER8kp24KpTMO3ck9NYQ%2FWlNxoglLsGyLIg%2BXUbzwTscQDF%2BuZDAzDtE6jMFyAs%2Ftqu6opEe0imRYufcaIM6QgmuAza%2B8kV%2FfQg8z9EPdc2P5wd0Axu0V11oX%2FffwF%2Bm%2FwCb0bH2pol1K8rkd7K2Giufn2Tfkg7jEHADVJrvXBddPeY3B5WV09w%2B8OtDd4hvYZxnnhliA4jZfpEPZgs4iIVRga%2FTZ27Z19aWr1QbtTJ2zs15KFXyPVbRa6VfbKiZ5ioT4t%2B%2BuzzlSPPJ5YmtZb%2Ff1gTqvBJaUjoEtsR4ggxiRn5Ph1gSqThuEn7KxXe8DfUiWulHyOUH5jr1E0055sLfe7bIiY0Jkg2FC%2Fxw7H83RmyhS%2Ft77oY9eQkxF1URoTc5RGLZ%2BNDYJUKc%2Bvqq3mxVnGVh42sJ169jQmjKejDjWr%2F%2FNYfmT0blfrIWPldEGVD22wbHNzCCpPG%2BBjqkAQ5tchFVPtXeYgnuc3V9CdK3Sb%2BKLA2FBRasHvQHigKcMLCB%2F%2FxnVB%2BYx28IxtOO1psOCxDELVuOUIVMbcuu9rtu%2FD6vcS3YGNMVZJdXpYn0l9Y0l1QgTEsAZCyk5O7IsUMRWgzysPBbWsZswh%2BqFD7HiPcMPbyxOv%2F6gqrC3k2c79Pbiwcxp%2B2IHFSVij9CFohPmjGg2z%2BFWOOHj0%2FxYokzFzm7&X-Amz-Signature=c0b7d03ab1e452c667c0fc83d8ee638a07ab95bdd901ec63de3b3b1bd5e0e962&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
