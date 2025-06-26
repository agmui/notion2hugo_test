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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JE3CRB7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIEUf5A3QXjVnS6481s8WU68odSUiP6TUiX5bN2Q3ORJdAiEA9Zoh68m8teAKl%2BZLvoq6jS%2B%2BcnP45KXf%2FewAZYD2ayIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDHAWvP6YP5VcqL%2FWZCrcA9Md4dU3hxI2v%2BLs3KTNHbeOV2zzE51w2N%2FbAJDT%2FtISVJUZs%2FVG8vamxTtA40R2Q9cFo%2Fr5rkscToxAHpiz6EoznNLJDi3DazvqOitWqo7cXQgJRwTJ62tnBMG3Wi1Q6o79CfllcwKkHBGVsIeBW6UhB8%2Fh%2FlI1dID2XQwO9Umdq%2BljvNtW1y7jGMzfO7%2FTBf4%2Fr69W3RcAe7tF8Sjx53%2FuYD9FuxdBdzJeaEV3gZJ5j3UU0gI2jLIBYvwC6CPHdkOA%2BTBj%2FiabQ0RZHyI0uDb9gMGLCauAdy7oySk7zM2NRSGTla%2FyVokICPnmnBVwb7bgVpR%2FkI4PLRu6e%2FKMheOf7ORrOaDjTTMF5xr9NnD0LJOxrFuK8aphuGJ4Jz3bYDUZ8jXKDkvDJwuTed3bVl%2FRcLG0Hy5tAGcYa%2FIOaWzzNj%2FsZLtBBSt4toTJgrg%2BxryyjZC9YLxGwZ%2B4ILPO%2B1eTDSbBqMtIoJ%2FAS1S6RiyC1saEvHtDbHQh6fW8CQnVjQn5vwzsdG4etpeYWMjV6ihG8TdS0pPgqtQ89UhHY1bnIaudh9aJwOe91%2BKiCZhwN6%2FRw4fRzvts8A%2BVdtKo6zPZRvOQQMNmTVu8tQj69vzapqPdaJ1fXoop76ZdMN3K9sIGOqUB%2FSAsoNTNRpqRGOovJFMxgCrjMqJlQiDR0xO7eB%2F32D8wp0r9fXZ%2FkGWUPsgEq0qRWjMvQLrO279WwnRrqPYGI%2FQ500ZhJ3Ek2MFHm%2Ft%2BWsQIVtDI2YoXzO8PI3YwCvCpDLKaSP%2BYn13T8ceyfDJmYBg%2B%2BTWq8PqrI8kw1OOjLIwaN29pHwa%2FBt8m%2FuOerqjqv0ID017GwB33eNe%2BPFuIaDQFQW7N&X-Amz-Signature=73324d9c8b956d66edd2e8356217dda2bb972eba4fe5f5617edd5c7e9ee338d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHUMPLBE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIF2fcMbm04ihXc8OzrpoA2KXpEFmBXJRtCNoWg2pShCcAiEA99cI8MQR0swc3SxEmfEglVgdUqeSReGWR5agZyDcsK0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAIUbczsxgAe%2By0RDircA8tLHPUtPanSLbYrP%2FzjEPLBWqVa7GOGFMpRA%2BYvSxDpjqngnhwNnYA3bYLxj%2F38otJcUcqMH%2FIWxQmTKYwOpeuxxe%2B22S600kddE%2B%2BJHvNOjwqd1C2Hn2Ai0pcR78yDu6EIXF9HCZsI%2FRLxZ46BY4biYN9qvbxo0EX2gs2zkflt0VYz3%2BGtMHK%2Bo%2BGmf3FGXxEHWrubQQochN33O9eR61dHHNFyMihrYCl%2FskdzzCyqHAA9JGUw%2Fm%2FB5L6QUyVjWgSCzOQ6HgA0EKScdNwqXFzQ8Ct0Y8RKOhHXFxkhBJBLbdtf2XY%2BLpO%2FwXvVBaY555NPmfqqBPjzXiBFd1R0nJGdPJ3wGcppApqFhUA6kOX9O7mSZitib3OxA6CQ3WlSyz0RX7fSb3%2BZUL8uASyM6pQHw1SXEefryUiYtMZvx5RpL%2FrfQveAD2cZjLCW%2BEFJFl%2FtKF3noMeo37PTFdHmmpAqpd85E4yUGqKP7DWE9ahQpze9%2Bqx5lETiEqCrh5iwoY0EOxJxGBy4UHiwsvfKwSIt6Yz2QB1ecsqTdbQOrSlLAvwrBTVXhOW91bcxGx2Kzzs2PfyOUm5s1qEm4LixDiplS2mhZR6z3b%2FcHBM9XZnodYdhAn%2FuH475OoDDMIvL9sIGOqUBKh7%2BkjvYZtGRaBbifu55dukzZd8SbiRjwclrUJQK6I0PA0mPr5NOYZ1I%2F7RNCbPh2renqyVefG6mOGSKIIP6ydCvUpMVvSddh58CFo1R0KCuauzOiNO7G4%2Bg5rQ7ExCgPiVdGOMz2XyD5d8RLMcsYF%2Bxn4BJmn0SmbwCJx0aboOWRdxBJo5Eyz9mGu%2B2JgyNt1d4dUYkAY%2B06HRr9l%2BEpNsKmYEx&X-Amz-Signature=6e29191d568cb2b8968f8415ae5235e3e59cbe78120993232463ee8fbf7672ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
