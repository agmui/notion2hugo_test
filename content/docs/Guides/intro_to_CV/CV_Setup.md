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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG6YJWV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGoMEHvavrKAOiitNvCxHgNlpNNU%2BvyGVEzR44%2FhBxiuAiBMm8vscy%2F454U%2BdFaVQ6lGWpUMt9TyKJFej63Yv%2F0hKyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMXGCG7FLSZn%2B8TBuFKtwDScUB11%2BKTpHF27mtCXPn%2BX2lc8OldMgFQVqLhIn3rmnrtyOepdF3Fy7b1JPmLJg2leCUTWq0UqT9%2F3dQwfOtrFSki1lHN2J36JDx8kPJCpGLcvbNKx51acgiwSzuyKfcMv5u07MtcwgWbuTnLjRNYUibZrBQfnH52hL1n5ym2PK0BAzcf9rHAx8kjTWI971KgZ%2FYCUnzYExqUkgio16FWLl5z5Oe0lbz0v1yyapZhISxY%2BsNcKIrPKXSIbE5NBoOvm6JkVa%2F%2FQWDIVMjPHZicICZDVynXZrvMseZTgtmArvqXgIjb84fdPLBPfqEsECPibb97%2FeSoseAE0yTiaf0QrFjLBl8rCc%2ByrTA5%2Bt6zRhBWkfKogJf6lKdPB7TjvP%2BbZrbejoCIDDcvp2CJmVteY11%2B1mHzKqeGBLKM%2FU9TYl%2Bitis7ImG6PEbgeVkFtVqV6X6uXGLWAhc4zroGwWTZWAoi%2F%2FdGWVtvVnARKw3Rzi%2Bn9eJbyXi4G6eozaEjSD5xvgww451aa4FVmspAWyVQPKHZwErXtdETJh3454V2KYNU7xgwCE3C7Rhkh%2Bu0VrmwUZ88xmdZkFNtX3S7nqaWIaxfwhRM2AbTna%2BlTYcvbbYYO2Lq6PPZUgtZbIw1YHYwwY6pgHTR7UGoujaTUdrt9XqbdbLVXsOav4AwcQ%2FoMyxfWF4yh%2BOwM6H%2BStOaka%2F4QlKCY4ta4tFunS0qEloFlR0VKKkn5Utv6zNt2Pig2cC1K45piRR3P05Se%2F3vMJhrDlQdTPwAyu%2BCTUl3mW0QYZxrpGFP3uzLicW3FNI9OQ7n9YCUmYrUvzWrXphqxS8E%2FzR0SKYCmDmo4LwOGMBlpiTja7%2B8Bmt62li&X-Amz-Signature=baa5e28c6791df5cfb6282ec77a2846e7ef5f5547d7e6dee89228cf5ec5359d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHGSXZG%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIHl5B2DpF5mVsmcMsQ7kStoTnTPtLfTKetpXjGPUrQonAiBZCuWAua25km3CWjA%2FSIvipLU74mnUIXN070P0573OEir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM8it1Ypd7v8CCTbPtKtwDf0%2B6hRqK8Gfa2yRHbpFX9b84i8gjkdNDRYrUnIDF7%2Fbcn63wN%2BfXgXSi3oKtbr1fma5TpvfTlvBBo6%2FLmLvF0PCIZI8KcFl6OeD0Fz%2FEAe%2FPVwdFS50%2Fe0y4Y%2FP9hYcWRemjzp%2F9D22lApJV%2FvFmih80kEeEcaC6KGn3iIO%2FoUVhs1ochq9hUPymMQTpq8%2BWnbaEXGMFrX6aTbTLltz4fW%2BtseU%2F2FyJBS7yD1xq%2FxBPzTmej6wqCk163VzFzR8HAVoqb1%2B7O3ed2CAX3nFZjREHzgKNSzp0vOlUbzYu3R4te3X8jrz6XyiY9brv4lK6zZB%2FZ4%2BEk%2Bxe12TQnFXdBHETrTxX%2BDOvML%2Fbsfk4w1MukauWUy3EmQuLv2nJW92RKUgvCfyH1uukH1xvjaDXO%2BF4gRzglmV%2FC9SAWJHuHXco1n%2F4QJmY3%2B2oqmlcNQMuyQkzINE3tAt6ckjDPL%2FvMsfNY2qstc%2Bpmu2EjTUO4FiO9RqWAgcwKe%2FJ%2BF1aqaobbaiayyVsiv%2FmC1%2FMYWEibiTeEqgJ3d%2FU%2FIwg6l29YtQHy%2FAp0boDfL0yd%2Fnt0e%2BFGJXqvWtyotuRsvcrbKNqzAEek4GYCEEJYZ4RuSFKV2uNUhJE5cgdNeObbM0wj4LYwwY6pgEA6blHshW5t1B5krRY47laajZw18fVk52MkMBWzV5hqSmALb96xlqeL5LXpOcO%2ByAlOI3MrcBmmwXXFYUz9kmtAKpxsdM3U1sHJgxo1ZsMYw12DW3gcr3dxW9ZcsSOGKHHEDRrFcH6k2XKO%2BLSe25UUcD%2FRXRQa30AnGhp62ro7B%2FKbIdiYTSykMBJzDPHiVZNN9HrFzoLXsHL67xFwg2BK%2FeEQLow&X-Amz-Signature=0c79750400a8c2a205f545fa7260e9d297954985e3fa7138005790d0cb3cd3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
