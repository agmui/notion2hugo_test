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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QYFT7EP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDCZuYN%2FBN6hebrb%2Fdw3M0UczoiEq38x5JC4aI0kd4wFQIhAMQrzeBHZQFY9ajInD1FUjUaardhLfPD7wH%2BlBSmkXSKKv8DCHkQABoMNjM3NDIzMTgzODA1IgxwDnAbjLZZ5WOa2qYq3AON%2Fm%2F2%2FLHakvddXJ8b1AWE8%2FANdLg%2BRTeo7PM1ThyBc6QOElKB%2FMrMVF5SMQDJnOYcfl%2BZ1093GPFHWuGSykA8ioZQ%2BeDDatAaiWpFzcoG%2B6VrP%2BuhUXOPpWjwH2yRA41Y8QJ6XAMJIdzV%2B4HkmUDdm39ywbthstTr4WmJ3duJGJzCrsrb44XSoJ8GQda0alCgrr3uzAJiCrD7bgrTrfoRtHEcV%2F64oUyagoseQ3O6qjfrQ%2Blh1xVdwmhliX%2BLtXPDK0WuARGFa54Iqo70hUv2qkXb6TxntUhZ%2BD%2B1RIVVXD3RIpsA26ETpM1tIgpULXFl5HemKMr9PNns%2FXUVPf6E8JXmSq1JSWiuMPnupt2KnLD%2BHGj6ZPaOAV4%2F5G9vG7n2%2F8bKJRgeMY7cGW2ppn%2B6JRT2ILs4bY6GQTD85PFU9zPjOamwy%2FWFxKz%2BLpX9CMogQbSOlNYvCDRpolzVk8TotWfiZof4tyTJWPnTZxTumyHwj8TLbnaUszpziV0g7u5jlt1pGrsv7a9IRkaLzq24t0qh79jnXzbsr0YLm5Vy2p77fOLbrR6RSbvL63aSSZCAAdouKShzGYVfR08mlwPju7q3pNrreheht%2BRGmeshBMTld7I9bJpykd4JLjDqv%2BTDBjqkAdCptdL68028Ef%2FKWkQbqTPp6bV7kFEdlcU5VEgethGN9XxXeqcYqxMxD3omIhkUPWkpuFPL6Rq1y%2BVRplVTqHh%2BVwuELHqzG5JUyEyDa5qtYIm%2Fa7jFDTL0a3q7GyFWTqS7qTPY7VPmXJ8vy%2BuWgl923tbRis%2F%2FpyZS6ms6FYSIocDRJfsjc%2Fmctbx9nYNBCHe26PXQiPdZAHvJeXzXOsBZ%2Fe1D&X-Amz-Signature=64262aa19297f8818d03548a8c1c623393ff73985de5b44732f26c093bf20970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6RJTJFV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIA45Gy9DIkGy9eFmEFp32ok5z3gr57q1NcTg4Q51JF73AiB508%2FTzmd4h3VNNRKBhD4xs4UqvFann2JxUzVBdHmgHCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMI%2FqtDlY3qPJC7Ye9KtwDm9ar9qb36q6uZkW9eeAJlQ2gVBaX3F6APO1z57qw%2Fpb5I8A%2BBsx3g%2B6CQ%2B881bfL2%2B%2FkFdqAuuw1SauSU%2FK7JxfQHm0zx2%2Fkn7XFjZw6n8tHistvbX5t%2Fx9JrRM3O4WgqyNj9W6OBoJ4pWSZ5ODTOgMUYXTWtCNVQ3AYkWuZlMndq8DMampu1ahASk%2FpfyV6ileAhMtgnoXZMaevTJc1djZprjPIphGjjXzwZMFQJWcMfstYjI1a8sUuVbFP5MnDYL%2FmMA6bmBYd3Ok002aKgr8IoOqUj1zNnFlx97%2FcLGRKxMHx0OuvxWFLSttHvLw1s2AUtPal%2F0UlxFepcZJOHp%2BuSaso3sNu4JUCZsVSUGYTTJ5eQ1whzqJmcv5wdtD4GOYW31bTJAPczLlf4k7vtSNddKpFdA028xXuwCpT8jn4JWcSO5DPuTJuqq5f%2B%2FqZr2AQjcanOC2C2HXZQ%2BuHJJEEO08BEUW070h%2FsrUvr9C1k91f0UHRcN9SIWWIxIUvOk92m3T4LPpzfXX30ImXihNZdtdvsYfzYB%2FgrsIxXcqFNeB9GTGYRTFAI1%2FNVIIIRk9UXUzX7Eti%2FZZI5Bi2OYTzAZHOvt001VNwEdHP3ULSq0D3LU9zgWMYig0w0r7kwwY6pgHswEz4VRtqritNG6fKLAIC5d%2FlTR6V9cLzpNwTD8n85MBOXhZDe4or28IrEW2FevkP%2BDbuwEw%2BbaOZDstxHVGd8ai1jveTdD4LtsfsFlwbDuttXhfA1wfocaBOczPecOH28Pok7IsunGZgZwycYoDJZbus1TBhNt0c7YZ1RjvFNqAqh9eUu67J5APWPe87BdNMhtnftw5uuWU5wZo4rtHC6r9WXNkm&X-Amz-Signature=4f4c7b2493e092a68c51ce2e3c88661d2a8c2d611dddfe8d33a08a6f0bb82e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
