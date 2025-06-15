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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXUQ2YT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDV7ZfARcv1VTqjWjLnB0StEfMo7vM6%2FOsL%2Fs0yWARBhQIhAJQtqycq0Pw%2ByEhkvbgVLfa9%2F9k%2BFAuvnoT%2Bn%2FkndB3qKv8DCE0QABoMNjM3NDIzMTgzODA1Igxk4uMxz%2BKgBvhiZmQq3AMauZhAjCkcTFkMgkwoPGvNgM%2FtwJQ39v1dGz2gZ0ztcntXW47K52G9zRWNmDLSG4jusKRo5meJnNdwrRGU0oQZAkTXve4q1MA8emISwuTLVpRnGk3UjqkRO1kjgbuK3kC9YzBYxJtIEiWmskCZ4tf0VRK78cz07DgiV%2FEkWfaGNv0hz16KgBbEgeIX%2BPpXT1DPM5ZpHmeA3TIEzycjT%2FkuoH6m4IqKhZNi%2F%2BiP1a2wrl8UrFf%2FdC9RAtrvuzaETf1drDLoWKaERRnAqjyEtTrzuBgjGeiYYSHJGNeWmAboUZa4XiZOMRJYrIdROrexfXZc2NQJ4AvanwXmKVs6Xe86D0%2BUeT%2Bv4aepauvPuCYC8W8nxJRJe04pVm9OzSJ7gjfCczxjwKMWJTIN6DQC1I25Gsz8n0m8ONhROysKWcOzfHllNXUo09G11%2BloWwO4h%2BCbWHu5AFRQo5AqzY47ECmgHrPqRjGwIxY02wnnEzT7OkeE8hSFnOODRZm%2B75y0j%2Feh6o9LaL9xvwEo%2F4OSD%2FjpuTk4GLFkRcfUtiYEkdImiql9Y6E50iSQIssP943a3AfQPHTY%2BsR5kKQ%2FC069RAq6Fv5h4JdRYjVpK4BY%2FzughKKBLPrBeJMXEOzq3TCuzrzCBjqkAROmpmVm4T6snKQiBTF4chQWSKc025QhTR8Oa%2B4m4Ztp03y2%2B%2BDZOHyrIwqMJOqBRltadSHpOAbR%2BZmh5Tt%2Fdj%2BLeXiwgoRaom1eEqQYpduMuxDAT4ABxX8Rs7LJUldJqa%2BSYNLMw8gv7r7wPzbdqO5L%2F%2F%2FICpYf9gwW4zcyG%2BaMKdobjQFpPAr6gx2s06%2Fguf9uBQ%2BY6qIF30yb8vXIHNXouzf1&X-Amz-Signature=49aad53958411c51fb3f9438387f67763ba941840f5b55bee938c405c9617bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6O4G6T%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD5j1F955KqScLYfaTdDcjo1gR4edtddE9YENHl1vokaAIgN9PBSMKdumomo0BtGY%2BXQKYnw%2BycKlmfvLtFa20NOLcq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAYjPNlz0E7oxnBqCCrcA1IRN5YsYWBG0kSfHizACQMb3T%2F%2F9tpIj3L5AFq3NUA5xeEc6KzwRPPtBs1CE%2FOyZjewrQkMQrMKey7vf7DTxEtlzlOyPcdTjwoFTp%2FgJ%2BbqTR95PMFHXnkJ%2F3kxSdvkKH7AHbPS5KBNja9QBMId5LfaAXHHkp%2ByppusS21zsks%2BbCbIIAqh2KpHMtjbcuBJv1DgXC0PjKzp5rjp1VrWckWuc5uPnLId6VswBlHIX4TVZqS%2FnwkoECBZ7dO22xD0otT9cs6k5qsyGhAmWJMcv9uwcJrRm1O6xMcLXLKAund%2BYK1gG77zBa6qZj%2FMxOMQHdprEwdxJ%2FhKCdCfPUw7Usuw0xo7ImCQmejgjK9BiVma8qcSs2B4BT4rV7a9YZ1QRbCc%2FCJ5%2FmBLl%2BwBfeTBvIUz36KIOpAzoSsoxsN7yyW0M5mAfV2wUcSCzf5EmB7RqTO3ofxEvBJoP4k5he6QUmIjg%2FvG9QgOomY2bxJfwgsQgmsxnsW6Mzcv%2BVRsSzg1u%2BjFdq4SVFepKV1G54BHCHY9FaAz7GYjkT%2FCfiY0QVNqo%2BHd4sE0%2FlN6G6nHoR3JX6vvE9mTndYcAeCe1AADQjI1kpEQu9YejRjt0NnGLbRdxvpP90FhR6gNlMiZMK%2FOvMIGOqUBt1fuu9m6nfKeiorv3YqANCmgfbuZazrhKCYkr4WExr6Qw1fFECnLwKicQq%2FaNfQdt6FuwH2hVNK6%2BwNs7H0VuFHO7axhHPdeP8IYbbF%2FhSAg7zHkdazodCd8EuoXgFuiBi7LYpveloHGOpvMrsj3lkk5Orr4ddOvn8Ux68HjTPTWWLhPVpUNsu7j%2FcoB1wv2ie6GPVIxbyUV5bq3p2t2o2SBsQ9D&X-Amz-Signature=63a05bab911fc8dc4e4d856ec89aab02c57da49ee53f10733dad65f78822d0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
