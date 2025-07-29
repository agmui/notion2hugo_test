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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFYC5CKD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDs7HyQAP7u0rVRGJZGZ999J2kWrN87I0dwwBsiBpmLaAIgJbH2WLCQEsT9T0pB5RoaL162%2F1siR127FLtYYOBWXlQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTV4f%2Bv6MAv0hxvXCrcA4eYT4Ae8hUzC4F2EsnZBzNZaQz5cVu5HCY9F8s6CWIKjd8HBs%2FdAACnxtg5H1HZ59zmhLp%2BYiELOyF79AUHyga%2B6NEdQ15dLE7nMQ0vEbYbsep4oI%2BQm0TEDwWO8Mr%2F%2F4TYB8c3pvrvs%2F%2B9KPzMzX0ery1W9Za%2BQHYWQBqx%2BJ3lbpvlywalhicCpVzGSw4zr8PumR6WPLBx0wCETGoDvxtZyyS9DPtTh3FcjUz%2F%2F9oUxdTAXaDlfW50wWmvPw1ydfVmyVBmgtZcG0p7VQd%2FuTNo1ccEzSwNpOghG9xnTPn66aSqZQ%2B0wyDrwssqvBlUAFegkvco0xLiRzpgYKhm%2BEuOXHYmd2gqdZeA%2Fu54gMec471fEk1aZjz56HAWva2lrwZBGubTe0kmT%2B2lt9uhPnQJyRChOh5AdrS%2FavoBm2zefeuMscIQthTIFSa84TDFEaYc5ESitO9jwBDigY%2F32QjnS4HECb%2Fpn73%2FYcbTzzJv3%2BBwn7QcysBan8agp52NQvizAtmdeJPiQcAKcwwRUw3dUl2mWLvrmXpOwQhJmrT1iwZFKs%2F0pd3X7wqgt2tBhZhCOSGxtbNsfFC%2FEVrfBLC7D8H%2B%2FrepW%2BqNWzAH3gjvAoOrQ%2F1KDQww3EskMLXNoMQGOqUB7oZnKl64FeIg3Ts1dW2tybkuVueGqPSb6QCcSUexRgJ1wxFLIaewuOewk158Txf7vsZT5R8DdGxXTCnhLrqBNUXpxocGLdFGMDPNQ7A38x7kwKVTkzOR86yLjRAMW6tgJkbyMOr8eGGM1RQRnKaI3SIoEJEXk%2FxlzaYwtFeQDikO0Jb0K0yi846Yqgp9CwmwfyTPjIp5%2F9Z%2B2vNXkP%2BDKuCwn00N&X-Amz-Signature=1b2c23777998f8b5a83dedddda84bef95d70a4b656fb527c95008f556c6d4630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33UFFCF%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDzdHmwaE6tLzceDli9ofye8XZ6kD5t56LDRyWdWo7M2AiAaIVX2a4nIIXoYNs0D7TsZM%2Fkf8y4QIA%2FyH8mbW82L%2ByqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMonbyzEam%2FgqQA4kUKtwDJGLbgKclkWe27A4aNdQPzQ5ZTLdWfsVa7M35SQHWRldaaIgXNR0oBqXPOUMm6Uyd%2FEtyVQbmL3dvm7AbkAeNm6xqGGp4NSSeMeHVquls0dazshoZrvViGzDRjWpSiKhDTeNtYgqbTovX4eLim66NC%2FliJVWZGYbUdl5duP2FqOCUfH66LGvCasUoeDydi%2BcwqSDCr75Tu8H8Q0QdJGJ4Gj1mVUfzRX%2F4GwpYz1vAz0EPuPG751qpk57ChlYBjHbXlIeO9cKIXf8aJcrU1XGr1wPNNNGLOAlsJNa0kUkVkn7ybWWXcmSxi9piaA%2F16S176z5P%2FPCnhliJeqvaQ1Hx3YW4M31yd6zLG7mRl5VZjMF6AzFj3Ramym2331VSeben3qciyjKKp7difE31OrC6iL7afmDftekq9G1KRhIGFC0vrtZ7CWDZJp2APvVhgqd43VYoNkcs51SLvdAO5ndT8fDue4%2FLKjrHcF06lWjSJWQNWLzehX2KTtHAhMm9qoe6%2F9ty4o%2BRD6%2BgPkGvGYF4KOjavuv0Hq4tu5HkvHWtqF4%2FwNLtU%2FfryrNJclm%2BoU8dGqXTF5g%2F8GqPNaB%2BFRH5oFFfptmAbtUa24dL8C5fz5MyhTJGy11PRwPQ5Acwx82gxAY6pgEiid2g78Fnj3AggX%2BEYAvrJ%2BXBFckuWMKshVPHw4jag7472SP43f3sVvQWsZWpprUfe%2F6KRXKPaRuD7HpTo5SoTUNqKIWezkN%2FC5QJRQURdup02CWI6LgPKer1Hf%2FY34iiued88vrgTuAP%2BeRDCDsgzt3qGmAgqOAWty4jR2xiIQcZxY%2B%2BetV%2FJZDjaDyHQynfDIOLriMwUB%2FsQqKiIC1qUgggzy%2Bw&X-Amz-Signature=0b62e67c4d094f311de30222fa50bb8ed632ed67f735e6155aa9d40b3c24d206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
