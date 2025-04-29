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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRYMSSM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZW0B8GljMEkG1k0DXljD9tpYnx0bDkcw0n1GQgZytNAiBU0vkvq6QQstWdX%2F9fB3msKJllV3yogq%2BzCdQuSUIhDSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3uiabUvGn8pZyrC9KtwDGhdZLWq57dhZQZbYRDb40rlNSEv4QBOi6%2FYKIn9eSQdThzyucWmAREkZrRv99HJmjdzv1K%2FsCVqNoyAxvvGkwdXPn6kn3qtxGYLYPXUsy0%2B%2BbQkLAuMWYRlKLJGocCBuakOmaGTiA%2FtMMFm2tJqqjCT8fMoTd6GKAZi8ooqvB1bxriIYwBtJ8%2FQV023KAGa9P%2B06zLW0Z20oIlB7%2FGMZCrILuy1tPnjPcg7PZYqFVMgcz78cdykzmZblB%2Ft%2FUgKAIflKzwMzOh6HUDwkLYqUKYbnP1rJvOxkn96idHhBGyi9QqzOMLpSeOUSNxAA3DqBFrzC9A5fpMvrPiOv2NuDvqko0H008wwQwMGQHHpckSL4txlXFKyI5ZIlCPlEXsmB5NfZjxL%2FKj1q%2B5h%2FpcLzEc38EKg2rlnJq2ndqkcQDgvSLhfOp8TqRkMnr9Z%2B7XX9rxz3TvBMcjxnaFFqVFgBUrUiKbe5qXmBWIlUCTOGQp3mIpbbhlMjyphTgT0o7GAV4bkgiE0sl3s1PX4y3w8JPYsW6VL1qldShGzVtBXSWTeOzeJfTwYhRtm8dOvy70aYSOGcw2pwHOSZw5ZmYqVQx7YjQb9mLwIWbRh1DL%2BsC201EjqVdWiuLkfs5kgwyODCwAY6pgHnGPIZWyAFcPTURmyYdis53JmdnoAFtfnUfaFL4vxEL6Xwieh9vED4PuhwLmHCddyApYxKihtvXwX4d75zc%2Fgts%2FylrVMxkGJ17tgc5reqYmgxfOfk9q3Bn0T6BacN6HVrS2sgUtt5P%2BSkWetwahhP0MnzzpwYXR6TIY593OrjPcQ9Ni2V3BG0YBSy5jgRh7ICxhUQo8xd7v2w0n1hfX%2Fs1IdW7ER3&X-Amz-Signature=ae00973344aa442d5c8c60f862efeb9f5ed542f529c98e0b5cd35764349ab1e1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI5ZV3M4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHKeU7RadWPfSytASXyszqHEY3l2jMUIYQOxiHbZjX6AiEA9%2B%2B00aHMW59aVBnMrieY7trQVPykROUUu7Ao9iJX5h4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQsdBNY2Yv5Oc2WqircA5sQezrsBclxqQHuNNW4pdssiUK81Xfa8U1ZUkD3%2B%2BxFbWLjEtgJa4xM3czrd%2FXIQMXeipOlKlKZEVxTEQU51phV96FIIO5z0c2vesf%2BQsgrq82DKx021cCNDh5Y0dtI2EnOczrZ0VqU9AvtWR1%2FcV05iZ3rYdaPrFfxPDl0xPNVtSwq9Ju%2B%2FuMN7tFjQHmAdEP4%2Bs3FbL%2ByjNEVDvfsLQkf8e%2FGCgL22DZWJHXOdlflOyO0Y%2BOMmhwzft%2BV1p97BC5%2B3CT9hjcHgVI4UOjI09gxXDH4TFKuNn5Eq2atesjMj%2BtKuCXkRgHfIPIZFBvou3MscVHCSOILHpXJOdCS5EDUxxD3YE7fJeSuNdN%2Fp1K2Y0GTVP8RuewzxCNvIivWWarWJXeUcJKnyAg5S1ahRK0tPxzq4tzbWgIQal6H2xOrwe19BLjjOha91Lhzms1GKexCaQTFPw9KaM8Y%2F5SFpTYpblUWuO%2BG9fkdIMj9w0kcWcjEEhuV7GoCGUjOUFmWIxJbCafJmENKpee8J9Eqs9738L%2BNpXilzGFcEujiRTpeqnLygf3mvxkfu3bH7svnnHf9GrwabDPtMtVeqjGcWttdZytikpoxw7UTNFWqHw4C9NZxpcJ6EMoiMXRfMOzfwsAGOqUBHIlij9NeJb6OXBlSX2xn%2Badn9a2uVOeBpGziLAXCvAXzFtcpeDvbzkemOvRpVzkAtjTFSaEyLsKB10LZbkiTSiQLqJJCkRd2D1R9skYr8KESajTgKgsdgWDqHKfY58r00kwfQXD3zuMqiL%2BKsKuGM9zLnJicYHIRaC%2FW9T0P9k8eRy1hmxi1i7dpf4fijFaqGf7N5w733%2FkkSMnuoulI8%2Bmytfs1&X-Amz-Signature=1856f4b4be74d308a3529eaeb0ea5edfadc64f89f8469d7e143896c1c25747ab&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
