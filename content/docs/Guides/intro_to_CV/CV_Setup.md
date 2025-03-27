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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP42QNR7%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgZcV23yAxxDGK74Q0gcGY6n1eAo5Lo4hwScRjM%2F4jPAiEAhpafl1D6zqmNq%2FpOV3BOGVWjNVDc971brwCBKVa9Ndgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDENERXCHFfMeN8OmFSrcA0uedh5jFLJo%2BDRPYV7AVxeQWcxyi5%2BixIzLwIIOvJItcqAJ7C0ltZi5Q1Ohf0hrZ3A4uj9skg13mvq2RqBEJ%2BfuzAIGwjL6%2BAnvr%2F4KjpoA1Klpnnst3eXkNbTCninE6n%2FurXs10N4bCFGAVRqyqXULj2dWfRjftorKdZYSGz%2B%2FUeTVni%2BG0v%2FsxybYuC7bkUpwOEp8mobFmWyaZIdq%2FzRzfryx1pSQ5OVhSWWHKkyRWBU7%2B1uuTzfVu1Ux7ExJ%2BRC7DZOWGmhhz7md1GOEwdHoEZd0kP7Vdrv7bGRENuOpIV2WfeEoFNW4uod0DzSoJwVH%2B1EmqbfycC06SCk5JOIJeZwEsXnsAAym%2FFEnSNK9A5MmFNZKb8GQgTy5P1pVJaV1dZqhN%2BBtza1Hzs5LtkizJhMvxjLxAJ%2Fnkin8cF0Dl4q1%2Foh2yIQxwVs1xCsvvXkzaS%2B%2BQficUb0i2Ucauj2EEee6SduMlDdtHdqysE0jiOQtmPULGbnAh0WSgSwYViTwix3VK8VMz6Lv4Mn4qkrXjSWi0rJXyUcd3aFjctbjK31hrKukWAO%2FoyideAd07iEiU%2FFR0SviOWYKIWKlNJTLKUEFT0yAGw29QMchCDnSNc5ocN6%2Fo%2BNN3UUsMN%2F3lL8GOqUBeMpxe%2BkDcSBS9GB%2FQLnZInJwMd%2Br0oMVv9mm6aeMwmKRLmBq9nrbPRsQhXQc0Q6xexdR%2FejBC459OqfmidggE2mmnijT0nrWHNNLXvF%2BUJAPp9Lcy8QwBKtAKG%2Fo2YBhfBdxYjITddAfIzl3Klgc0mEGTMKem45MUP2iWRIsJb3kkJnEKZdAW1jz%2FECbjfJBbeAHmw4I8QJ6VhjyUiV1JJhUgFb7&X-Amz-Signature=5f01a31db0fbcf1c65f9b25497b147caaffa04b15db4cbbfae97ba199c75f759&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT673T73%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaR%2F4pF5nlzLivq68aZJB%2FK5BIZYx12P9AITAEpo%2BBZAIgUoWuExpGoR28fq6HB4wEXgoKv6sDSckG%2FUYJlzSh2I4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPT6%2F5u4VqCM3uba2CrcA%2Bj6PB8JDNWf%2FcphiMYOyJ3Y6xzxvCjZw4BXXaipXwXSjBEloDslXiGiEtqt01HrFHm5zyHzEucI3qONUWPcmUUDjSz2piXONEO63m6bUdQahixjlKd9vT7auGvLwLzaOrWQqm%2FuifbXR83Ar6oB4UIKB%2B0%2Fn%2BlVDUJZSzBXQLN9BVKa%2FrQuKHXkQ8aUb5vxi8h%2FN1H9b3nYZ7DI1GkNgOgXb49k%2FR62Nkj3R0CJaoS2l0e5ZbUi9wvts2UBS2J8YVZVLpZDXaN2bl3n5hlxZMftlXJ7nGm%2FsCw7dkGXrP6d3NI8SsRjJXVXMj0HRje6a4kfOaVLglxVDHlxOplCljK1trZLHv5MBKw0fbvsERIcNZvBnwx7gB7ErqwGXVZ3Hi7dfbxGLk6YbvlNJpSPQY5Cf274FEAUruea%2Bi8J4vje7g2%2BQUu0DFeSOWbMC14tSgXv5UBxCsYZXh7Lh7cYEQ2BPkT10ZGqXIP0xM0u09XRRuH0kYui%2FVwzags%2BJoILGml9dV6%2FohCh3Sz2dIn5SoYBU0ZIF8YvjKXX8rYgRCMZOd4%2BRiX78EjgeyHClvhl%2F1i4fgnugw26rjTdbBoE0%2B%2FNIBpRideSFN%2BSX9r6MtARk2FKazLTeDR5%2FfbKMOn3lL8GOqUBhJNyCGY6HQ9YLXOJ%2FBj1LsxWpBH3p5nNgKWx%2F55e4H8vTGv2%2FXLdQmG%2BvyOXXGHFMeXsxd7kdnAnaruTdPBOKLWkGE6MBflzk2NCeASfELxuBHpUQHcfLcsC1BJHHuHaEvH%2BqUDjlUReYuSMxesSXHmrcsxSCKUagqK3WW5mQB8xGtbyaSUxAEfXZydAiZw2PxTGw97bH56Lg8H3A7VNDaaLN4gx&X-Amz-Signature=dac9b2cf7381727186bc4ca50d83c3a18c9b33ca867a78f52b143bbfa6753bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
