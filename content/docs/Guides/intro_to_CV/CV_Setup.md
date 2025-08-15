---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC2VJYL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQD7RZP42cORV3Z6F05FZd%2Fv6licLZTT5N0lPyrBRLKv9wIgK7OPot4mDa5AIMga%2BuIjsKd17kFaKMANPWMQY4SCmwcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIbl2a1L3eMluBhkkyrcA0INPZCP8iW8Dnbgw5yJOtzFDg8flFtcFXoffqP43UxmTr8MPmljeCO42rvScCjW%2BAVyRMZB2AKexaCBpc934Iy4evuFVj7%2FoRTuu8dmLrFnCET725ebrnX1DQLLhiBbPCrs55ngIKUXUblJwk6dYhK%2BwQTiiBV%2FSOGuJ%2B%2BOATHqSAypS34eqEWZLySMlyP%2BTE72ZJSLWw3Enb9tudiyQDee7GogJqs8lYhQ2eaDvm2N950w1NgTCalXpoHiFks4jS6NQbNgiRpzSw39961ZB7QdeGz1wTRvZrGCphHlLKe4cCG6l1Y6xY6zzuE778hHJRpojEA9rkNowSSA6mc6UQBRCAMdW8B%2BfZbtHFq%2BaR%2BPHvi6ml7G5RR3FpxFgk7hxwxkI3YV42Km%2FjZPR1U%2BywTX5CrAFN9OZXFcisabODutXxbnGLgkcomWaSFuum85IKLtN5Xgj9SwjGYJqj92uiEhuJi1VdouZMVuAO7rGbXqdMRn%2F4hKi2Lh9tKas0Huf18uAdQSoOjZm1eXRwn1hLBHLKb9ec0pbvr029Ezr58kYtpbiLJnqGD5MMpXhnA0XYBPDb8zIABce6%2FMxBa01pgEy8noqbQclQvhawZtVBxNza%2BlBfpsIsNpRGvBMM20%2FcQGOqUBAjI4uzqp2ZhtHKy1hgWqjGV57VdTvE3%2BetyjYPxi7gGLG%2BjD1XH5eNsI4LwYgj01Svy1QdpQ0VnyIq8hjMEvakZ8nAoHvUTq1jxM6rcaBpcm3axJ0lXyGGyeLwbqEBSQEMV1M1X4oUJgfGTHKbO%2FIDJ6jTS20S4QwYFMOMZBezGgeSwvsHQ%2FY9h1Jba7DlmUHIVNylnmI6CoQUlPQkeJsGGQBMB4&X-Amz-Signature=b8edc8b1495fb5713514a9b395374fcb9177e3c651a9e9f3f6aa8cb5b5e4b2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXLLW6J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIHp%2ByuyJ6kaxAhzXC6pkCRxPyiAxKoPoHRIIquXFLXR8AiEA4cXqERj1Yz%2BpyYFsjSHdS7v3kA1moPFVKq61oeIR5nQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIwaLrNBz%2F15qhrt3ircA7t32d7r%2FkIf0v05FlBfmoq9%2FyaujjSzbDZTByiqfgtTEJl9lU73be4E%2FOg%2FA%2BntuSWrubydQMeo7%2BZz2FcToSP0eJIr4uR2AN4bBAJLdc%2FknLvD2ERIFPBK91OTCJuGuMLzO1ANSC3e6ANzj%2B5HGv1tuXzohQpNBrlh5X6FnfdsFe1UzjJ5NQMJJGjEE0UGLUPp6qWnaSIVdapC8KwZB5cBYBPRFDtboa9KrRLa96VA2Y7Vz%2BtM%2Fohc11wyq7oe2ZpBHX2dtIHffex5yk2nwzF%2FUBVGgAfzvbTSwuiNDWOKp4Qn1boJ%2Fo0%2FdSuxbxQ3n3R6xDkzAfL%2FsFpWstDR5awOJrnuDtCHSLTAxjBb2x2nI1jIl3%2FLxL1Wlq4GG4mmq%2FrX4PDyfnNLk24rFuvsS3aF8kSUQz5PDzth08LcGe5k0IM21r4Jff8V0BKvCg0o64vPFlTISvmCC4QDBseWZZIXykaJnC%2FT6jFFlsaS0JHsPQrry6kdPWdNxTzyj3cPgF%2BvSpLlZDrwAkTfquDw3jqVS9rbMwudEUrGDAQ441UTzC%2FjqAZpjgWeXYtoy7rghIXvpAhoC03Bmo9G3yHJ6fVfJYGZziZvhGZgU%2FPK9Zk5yZzqLJG3NbeEpxq8MIe1%2FcQGOqUB3rm7y28ap0dnQZvJYh9b8XVEnKB%2Fb9Xttj2JG9na9y%2B5JIj3kXGlPf5OZ84F2ceDJ6iYSxJO1G5Iim3Z%2Bbke%2F8NKBlFVG%2BBekwMyj3U8XEwIf9Xxo%2B5EeU217Hix877aEhMbVEoaqeAa2iE4MEp%2F26jnKlWd8SHXFcEfiHzaHYXWxqp973VSouzIXQP6XUlpS1n5qS8Uc06J2o9e8FLxYjftw9Ri&X-Amz-Signature=ec2abb93eb92f15819e49293d2998086422352d90426ae26e5de8631505576d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
