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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YG6GY6%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCruSVIIXRsxYPBwU0cBlEaLo68MEVxRUWqR%2Fn%2F9NH1IwIhAIZZtkJRGqEW0UFI9zB8DdJOBb4t5e5RR6XPiDqNQKqIKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFKWDg8lH7ayAJJIIq3AP07FjmuqkfZezOt1n0rCVMo1VXc8i8VUrjaq659Klv9%2FL7qIkcr5SnMqdFjVCruJdYDpzhVRXS9TxB1c8AVH4xUcVQUhMeU8Ly8YssDGJp4KBI0miEBa6ESqEd94RcCl7%2FrPhw5tIhuBM5axC4tx6DpnYrkjwDbS1D98zSH4CkczaaQyku9qfp8ht9P%2FoR3dYnsl13tqo1MYrHMQ9makbcxLfVzw%2FSTzyb7RrmBhZ8ApqQfyNr4RvWyHDIWPytls6GUfsZuVtJudW%2BC60vEe1Lae9%2F8EkvrwNX9IwVmN%2Fs6XkTJ6CEpWoTwgKQOG6q%2BUWYx5bWNlQJstYQ5O3TkBgZcdyYu006rsWIbdwa7It%2F%2BDX8gZ8V1Wfg1RZDCC3IJtLLyY0QaRkGVSfYHIds46yTTBBBZjSwOsEno2E1KFvrq2eBRzAXsONjy61VrClmS2TUbEuWQJiZJVtV53yAQ5eoBDRSK9HYOa9hTgf58dOkgW4lQSijq61dZrGG6Xwh0IpXnfXMR9Pxd2n15QB2QZE3M1%2BwtyKaNmQUXe%2FOLOhXW6U1%2FDbPjm1ZNBQCtnx1REtU13QY0oJJzP9yChbWAq%2FPWerPLowyliUNRnBOodntz6JlrfaH4MjPs3yE3zCPsazBBjqkAfVzbdsAfWbl%2B3BLUsmpNd4DLdGte4rtmD93%2FcHsaUaOJUWiX1x7aPpuiTPeHRILzAAcIOxBPtjgEMFWAebXaQmxAMjrat31sXK9l4095OljXqVCQR5NRzratMDLd5o5XePiJb49Gc%2BiQg3B1g8%2B0YvUb4ld5BF4n%2Bdg0jmY9O1YdKynw62ua1QzIeheLx%2BM9pgwMBoPd5rqLRXAaaISE5GsLnYS&X-Amz-Signature=d8fb5042d58544c2df2e14a1e6cd2aa401d6cfd95108730b28f6944be37a83c7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZT2SJZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJrK6x%2FFIEd%2FSJu%2F2ETujOnM%2B3NDuV%2FszEkEy2e3%2FtpAiB%2BCzsw18oq%2FJ%2FhebiGgeg9%2F8DHgDXP1Lt80iFPPB%2BUvSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvUNSoBcMpOxqVilKtwDmtN2%2FXEmK0Q4%2F2llk0RLBEDsRMOWoRfdZA0GiKl0hylfFv6UX7wewkge9YnhOvU%2Bsc4QbvEIp09qz7KdIQ4C3M6AiyHjn0xTxQVeoEBpJoE%2BzEReTFxSR1pQk6THXIK7en9Iam0%2B%2BRE5lKJAdsV0opJEDIqA4AnOOFLuF5rDOIAHOlEWWkfAf3hjltgsOFN6K%2F2Se1BD1QzloJL6V19b%2FMfhMS68S4zB%2FexQpOu%2BOIHGVuKbGto4mpQb8MiXWTpq0dz5N7eeFaWzET9Ydbfw2laku9pScpNZdk%2Fy0xYg8xbcYS6kEckTtUcOkNTPzjxvFIQPwGxv2xJgDxYXO98uuCEh%2BtSYdA58AeVoV6r%2BVbD1vl0OIdwxaXsQNzICHSLHINHOefjXacSe19vROV%2BHb4Y8XzSeEERE1cD7jkCwJikPB4XQ3cFUg3Ydqk3g4XFYiO6qVaYKJbq6FBnghf1MltxWO7vVgY3Mqmbg9ApCCYWRgyawAAzniQdnAjlaTwFQS0eGC4GdpbtkNGfUnM1wKeDitf8P3oYqc4dmAQ4dEgoRtAai84i67VsXM5GFxiY3FfduvwkfOgEeniADjJm1N9h45%2F5Bj0flqewNrgOT9hCVVu51slHlFdktFpgwjrGswQY6pgEzlCqCHwlDIsAUdpNIUJ3qCem7mTl0kgxAbzJrK3bfTCgphjiAIHn5sbtak5Vh8KCbxN0D8sDW7rnqX%2BZeSfqsWUKzQZnbG8Tmm%2B%2FQbRB7l6HdHGeqZRE3nOKrpu%2FUgBfn8b1t1eAeTA5vp6%2BfP2TCJu%2FkC0DG2t9C8wv2JHr4w%2Fgs8L0uRtlZHgLzNDzW1SIvu4eCbdfCKtWXJX6coqK%2Bwewnc3Q9&X-Amz-Signature=0c4d2e6e8c6c358bc5792afddd6f520cbd11517d6eef080f849966d1a19a80a4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
