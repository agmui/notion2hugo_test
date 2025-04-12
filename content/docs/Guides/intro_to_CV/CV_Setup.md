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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDYCLGE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGeUICxN09ECx62DRR5C5cyNZnay0m939Q1n6uhLPaaIAiAM2jGZRT4x1o24esmjKl3hSGhXyaCVyVr3YaoCNFSk5iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhNInZ0IEflHEe%2BDWKtwD9pbAndHITCRg9x5vAKusNdukke8YAAo541e6cXNVvzocW7w4P9wixUkZm57IJcI1%2BKiy5NdlAJIwIoMsiNE8QQXR35OsNxJJ1ZVMqTJNtKFlO4XxAAuK5gZinL%2FsgMyob43h6xurykXTRhTR4f5O5iXLELJMmt4dl07LE99hFfVAJVGIINNC3nn9uYXD8%2BWoZLrZgQSbzl5Ayh0pz3GJK%2BMLNNalbWvzPVziCNj%2Br%2BCt1zzs9Fce4%2FmeZ7MvjsrhKx2iufLiGOMuHb56GenFp0BM2nRhLodFEx6hzJ86J9%2F9wU1XCFax%2FHaLTZAMRR%2BzlEeqShzDH0XWQV55TlH06xky%2BLt3PtJlJatb7GlIH4OjZwAj7C0%2FU25r%2Bm458xnbQCdUuO8tleJYne33ubsudKZiVZRa5%2F0YRZuNlSLOf1lxJtFYaWCD68YcTz1csa6WkLR7Pl0lubYIJk3lkL4yY8doZGeApfsLVLCk2DwAXK9xJqTGkJxjiN8E%2B7B1q3hPugzX43jtxbW%2FMDXUkdYmOngWnaAefYx8jOQ0JlI6jFtQoPufZMUv6KzcWdSyK7pxZG2zKIsR%2FcXb7wmQtCEwDBbWKtlAkzyLSpbDv%2F9H4%2By3lDBWEu031iR%2BR80wiKfovwY6pgEmuVdX%2FdPzsYZP5aLhKx02%2BXUfGVavPX2RhYfa1hZ4cgd7Irm8ei%2FndDdL4KMI1LXCEpqKOe2zdCd9AcGGqTqQmVshytuFSpMeBBfgo0jKi3eQ0wG%2F3wcqbyuOSiuSggQ1t54ie6Gzd677Nc3x2go38qi4WdjLxQeS3uhzgPqkY5y6hSSUsJczSs6mEYOh1ZbhVjPr2%2B%2BGOAyyqcCf8iq5QNHfAZdO&X-Amz-Signature=cfb1d1bdbb98f5184c52a842ff2284288c04f9263ef0d8b3d1498b8403b10d3a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SVVOK5J%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICgy4IesQdKhFY%2FRh2LS%2FxPOg0W1wCmKfMtnMqA1kQhEAiBcx30v9OFRgFsYGCU%2BbnaDDPgcih8rKG6ypewCi%2FNBbCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNV6sWcFb5DuVw%2FKMKtwDXyaM7WgKCw1zYMO%2BU7tu8Zh8nlbd87p8qwnHaYKQeYqazk10ifP0d2N52oMtth1TP0mYxV47RxQUpXf53Gb%2Bv%2BvjPpBjMkrXrIdfmv8IougL7QgZVfedJZNIEEUdQ0l8VCTTLTXGfm4lPqLQoQnGVM1GlnQaIKH6RE3TibkPl%2BnynNGe34zez4GS3tl31gqnNNNtIySP4axf1IsDTZesKZcRSbRJfkGAuy2yCW7hEomV18uiQKJTYBRvlwD%2FPEeEwAm86FBQfIYQreKcMSY1o6%2BgeZtRv4hhrrOknk2P659rujJBG3SygB%2FRpvAKrZmA6WrqPE%2BXEYN%2BN4LMqGLhacs3S%2FTO3OpWP%2Bj89ykJ4AmIg7YguJcuFQUHnxDbIYU5YlVS8%2B89ZJ1O3CBougGqwjGEqMT%2FJ8v1YpV3Jh2md2vkzpisNUUiZfrapkg6vStOUoRp9Esp4xmP9oopJhCtO9RY4Btys7SIZo560GORq4OUpGpOii59xo2jAnjhO0SzJe9iT%2FiFj9LqMSOxSLA6mlxL228vvanjm%2BkI%2B4oOMnATr%2B2VmabC877oxpZcBdUKcTtEhAHXNtbyuz4cARjsTdHZR4eRzt9GnbfIkfYp7v12mSkQtVKXtI7IyswwmqjovwY6pgFKYufkTZC3aj%2BPB1PBQhSZQ9LunerU%2FuczuR%2Fx0lp5uXdRKvLYUp69sIQ2qqbJZI4yHKksO1Z7RtSMPje6%2FcdgKGrk%2B5fBO9ZWJHPx5YQg7%2FIDskyB8jOg2JgZzo1xk6RuU58jvnnm5sKApz0JRbOV9OgZ53RUt3CH0kwMehOQPOwFkGW%2BRbX8KuoIUirBNa2NOVDLwp1A5kmuJkNk3IBgu%2B%2F4Cy9b&X-Amz-Signature=be297ee43d2736231d0300ad2e5b77ea84c2d1dda119ab01cedb67c41be1baf0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
