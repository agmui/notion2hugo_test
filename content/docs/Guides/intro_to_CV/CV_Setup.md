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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX52EOEE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDLF5vjHhUSdtnOP588PgqR1Sc4%2Bu07G3lbcuJ6uBhPUgIgXSWy7vCNYxOB9L2zgbNVDYf4lPQuT2ZSzLJZZi3uV4Eq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJ7Tj5oYJCTPmqJNLCrcA41p1HF6NsD9XNxEY6E1CiWb%2FQFqrGjOARdqhknqOPgSksuu0Lb1mKPoubrK%2Fy6G7Sp%2FJoiEebtUhUhQV2%2BFhXRbfY6h0yVux9iSxhA192Ki7gX6Fy5zNHLn34S913a4nsf9T43j0o3UGPb9RNoC4ugWxcZL%2B2nSFjqtL%2BRNcWIkAjRDNV5SoiDWbB%2BH%2FlHjNjR7NumqhPXtV0d%2BtPKny2i2P2L1JyMPtnypOpVVQb3zlbAju2xIKb3CSaSbdeEHQWAaD8HcMIgN%2F0f580S5LZrC5YDL0X4qoJJyfXTrazaZQj%2FQtvwFsG%2BdxiLDImujcNca%2FJrkI5sVgAYBIBcTLU%2BeI4KLRFV4FbRJ2lwb2Ox8ecScM9BJSxj0eN7yG2i46qHiSk9zVwmPqb5t7IlCH6lmbtPRZvL1tZ1atOXNKMReOVCd%2B0a3Zo%2FuQRbwm8Jj4GL8I%2BGCNS1BmZxHZbdkGq4GYoLqVjE0NJbazzZgH7gRh29ZRBTUFnmLNlGRNAhY2TTKof1dvM8ugrKdfoM1PHlOZseo9SivOZJqP3W0kabKxIkqivVPq%2BK9rc%2BojLR09rZhxYwlcyz6tbQ%2FK3yw%2FlYBut96Z%2B4SqLGb%2BysVfoyXZ0jCDNmXGFr0lXNYMNTrtL4GOqUB2LJiYX66aMaGIy7zxLJBdf%2BGlwFC%2B%2FK0yGkjQ68hiRQmI6kiSIHRnsxWBLhzkulTLdiQT7dxueVEpHgeKSXV%2FaVP74T0V7GpnJQTeBiBDZuQgCW9wl39HADGqWPHUBlWlnQ1ugIHG6k7r0GFtF8MjlWwfIGTk0Dz1%2FGQ%2FaiZHoENZma20gCuzZGaKJy42vtcRfM%2FOKrVNKpPyxpzSxcIxZpGg0GM&X-Amz-Signature=73dc330950c68be3bc977cbb28d441c034cc8e40f84192d73b8f32966abfe9c7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJWNMOIQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAWCIZFDnAIixfhHAHUVdowsso37p1k18Vb7LJK4lfiRAiB6zGzMiIF2tGE8i8HyYIrezvHS42zPvvmmWXtb%2BIDixCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM%2BIerf1W0CpDGM%2FtSKtwDuMF803nFN2QoMe6nNbbMvpabIDpM7l5R%2ByrFb1QdT9ZOGNTM3KDN8NQO7orHJr9MI9hCFlSmETnoKLZDHO%2FFkLfPd8%2BR16Uetei4GCJuK1eUD7N12hCJ81yxLWg9MDFBwqIGywd%2BYUg48iyM2%2Bb3veRBIbBvpyEKnX0W7OzbHqYo312SBpvIrANoI%2F8v%2BxzF5MfqpKbsDHc0VqoyeFzLddtnQZVQhgUcTX2h1XltdCA8YumS9YRAj888GzZsOQaGUXOYpeF3K9Z0Z0metTgvBu4GtdgpM8g5oBmhSyhGCXXAqaH%2B7mlfmqQ%2FFk1zBHrA1Vrpp0OqZrRGvHNNuiMqfLCds1XxiGnf6abg51X3nfiWdJHEoOMX%2Fqzendl2FVHJQWVkN0JAzOO8qZu9ZY7Cl7S6jUCTF7tq9%2B4zD19nutrsEPH584dV9kcmWySB%2FNIi9AloQIaSBi6OwNgAtnqG2fOfHpGygo3i6fiIGOX87JDtr1cSMQtXkiAcUBXIcfI0QuViCQQ16xfjIOUiRC2toJBdVtfxq9Bh8Xgd%2BBXcg4ehoEBCCx844vGGVw2ZlsIeNZvXItrE%2B1hXyjKw6lHqYPSsp1Ty7DQLvZ3KGCLsV3Zdw%2Br%2F0lk%2FnEwQ77Ewqeu0vgY6pgHeSTGELfWDQ9kQBWu52lUkf2YqrqJLB5v9OGHP8fdG6kKzVmvaR%2BugbOGUuxm4XpjQbQBMDjov7m5Q4y4RMT64wfVHpiup1iyrnTLavUGvQdi1Snok7c0T%2BT9FBTKyTnpKKS%2BpNN85hznsFEQjkc0lyZTrpHoQ2zw0AkvgosHw5fbzvtg3IxhnyPIbJcmIv8k0KzpwcMlBfKr96t%2FHYh7WICKG5cMJ&X-Amz-Signature=b57307a94f7d10ec43cf99e445dd8185925e069be0226df156e2ec3c50f313c5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
