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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCDSGTH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDLTWbvjjdxI7ZXpzPpJKSb2AzLltdMNqy5Djnb2rBb8QIgbEFs4xEPatKYxINlLJp83d%2FPwrPCrnq4R9J9nJyeO3Aq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDG0t5pGk6YYvXIQJfircA5PvDjJsckcGJaY5PXoTpD27OTmcQ68J3KO77iwWjLAC8dflZGE2xkeCL6tO2pZh%2FonkeraIbU9tjsDgJzFqSCP%2FMTCPYkTnEmVsuTGTekR67%2BNCqWUIeuI6rgI2ijatMvbreLNtVa1P2pR7ThM7LdBORWXnTMDoUi8zmcZJrwKHdYMRPJ6W529BvexK5cfufMtOhzn2o2WItYRKdR%2FdI5cCaZn3rCfUOyD3ON%2BaJeqaevdN7k%2BVkvbmP5JHpLElyPj5X4EZzKSswTVTEyUHv%2Fkkhdrwb%2BF0hWzNSCYNV2rIOys2L9K3s35ILNOcGsXZcRC8cws8CdcvFUOkkqcobOhgof2A05a0ve102P3pajl7dShlc8YZnrMBHZQMOYRA8AL2VXH6w03y3nP8XP%2FOeW%2BYgm639JabFdrL40t6CteotGikDUeyBArmVLjXyQ8AI79AYDIYiA8dCJAUJ7LuToLoH6xxpRluO0GJKk53CttoU4OGbNMmipLo7dt%2FBfqYZpHg%2BUp26du0ZVABzNpeiukfBmpEe3zVitzv1OrtyNEE9Mf4gxE5ehqowidi3RyVJAEr1tQbhFy1VGYUOBqAWUnxpAr7XVY5GLXyHZZP2v1QXqJBVUwwPxg%2Fn%2F4oMMC7m8MGOqUByttOa79ZjjY4ZzVNb%2Bd1bKJnWjiIz1j5Sb483mb48dN0QLaSk%2FrQZ9lnmiTr%2BlZGyvKvh%2FE0qe1cBkAfAPR7p1EC3zm8yX%2Fxz8KWFlIpkEH1hU8NmmQ2clj0StN68ksL4iKlBDpiJbRKhVdaJ7oQx7ytCa3XWQ%2FT6yA2a8Bg7hEsiDqd0RSZtG5EBddFF9qHa48UU8hw3n02dbKMMer1aAvfJzvA&X-Amz-Signature=19372a09235c4733061ac004a9803b09709c621239add5d166f82392eece0654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBWXUWSN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCH18SHA0tNBpwj14uxZpLz2AgHGq2HE0NCk9bBsZ%2FOjgIhAKqdkB2xz7bvZWfJqrFHvznPm%2BYRLtKxVWWztbHvwTlwKv8DCB0QABoMNjM3NDIzMTgzODA1Igzct0g8bHZcpYQEQ5oq3APHBIvh7FUp%2Fba6Hbqbemmt1mjyeFTWKWGvecwhmlsHdlQXDwDlUO9r69P1LBmNoWGEjdn4skL7RPM9flXFR6FqW4wPNvfKH9CFnfa2QrBaoNaA%2FFSbsengoT7fCODRbkwkqgyUWLwSPAB6Vv5Xun81L2CHLZ%2BcUWKGem5vAMdU8baxbvFHDUXOgotoxJ6gHTxsCyQc%2Bb7%2B3bjme1fhBn5kz479W2qFrhKReeyYH%2FQ%2BQgSCyT7VVWNCVuwVUZEYyixkYz5poPXxbEwbT5EQ%2F2TEiz1Nt3CCxhCCG2sjug9RWdedBGXyGAV7CmSheerPjCSceOhxJXgFjWu8KKIOljurIAKJ%2FFITcbgxsovKgF1WpJJsxE%2FVZpuDs%2FiT46HHv3E4SvKiwQ4UfDEfsBMa3rj1KSLeUIp578guLyvFJqyPa9QgigDFkLeiu7OeExtYSY3uKhxcGDXoXFjBdEC3aYyiANqGJrIz2b%2FWioNYtiJXGXWl4dzpnvQYnxGCkISJlLMQChB8NoVTFiLvr9FZ8pwCSVBN%2FG0E1E5A8YqS0dWIz1PzY4jfk1YlBuZXLekJXdhXSE9N5PAMv2vqaq25g0S%2BpC1D46ihiUR6KIdqegmmmm7PNUIpTSlw%2B%2FDY%2BzC1vJvDBjqkAeXUveeUoY%2FyGlxzzAx%2BIvVxIlxn%2BA9ljtjhLQhmg%2BetJ4o%2FUkLqy0IKzDDu5Htj3fjb43OLNZdEn6xUOCqwpYjclzIWgyA1VX3vn6lem0ZZJrXE4svXk239IGY%2FvwLDCl1ScahJS%2FAcq6i6nT7Uyhr3D%2BZJvRKGm9PDlIadZRfzZ%2BHNAzf5qfZ7SUHzh22I54Km82tlseGXSqUrMjEf6rvPwUCX&X-Amz-Signature=c35d921bad95acfbcb7c53c8ceec1df8aa1028e7fef80a09961717979b974abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
