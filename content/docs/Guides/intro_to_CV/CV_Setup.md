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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXUZK7WB%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQDRqnSyqhqGXQ8YR%2Bat%2F2JLVgJr%2FZruV08rCYdYO6hOVgIhAPeBZlq9cur3vdfRTHB2gWu6IvINi20%2B03o7k3DBZU0iKv8DCFIQABoMNjM3NDIzMTgzODA1IgxjVeXBoD0j7j9sECUq3APmHvXmOOlFE35%2FegIeeyuhavq0W42i1Dxj3RD%2BzVnYpecmPQ5qyaQ3zEs6bL6nmgc52NWGdlh3TJpVDYMYE4oOWb5GOscBgu1WMegea4tctmvpzZo9Xbt5i9hczfdgS%2FEcI5rYsDlXhYhjTF1KvWEX8ZNLenxhwhSypou53ltNdNMN9WsKAb7YFnYwPX9dVu64FO2lqd4KUA58QVhZ%2BRm4uZ3o5ub2HlBAJ1T00KjpVtoVwISysLVKCyrtECQPK969Uasru5Itc5mqC6pbcuiU866i1ppxRUljgnpQ6nAoBCOVlE0alt%2Bp6Qk0033OWwu59q94OLyGR7eKpQn2Hpt4bt3cNaxHotIC11DaZACX2sKISuQh6%2BT9to17DZ3DO7dF1UeStqaQsTcr17qssUFeNwXO6k8o9Yt7TXR2Li%2FJXAK4C7TqoVKeziORmrDY3W2DKg7SMklKscLtKdmclfLim2RsM%2FFPHyvtAvGsqYslAruYtEWVW5XSjAt8AGx6YS36iXfoVyglubIewF6hSFGvzq4%2FSObccxsDAD%2B%2BpxwQ2bi%2BxJukyWtOcHtbZX3VAmsUWeH8%2FWs57Ct2l%2F7X%2Btv4WbAsE%2FohBFoHqXDWgHS5Ra6nQgc4dGJpzgUKpDC2%2FdvDBjqkAaF6g0CiM7VCSsg1YeqYwcBkVcbeRzA5k%2F1bOWBvl76zyZlu3kqHMr%2BFZ6u5VuIwhlYp30BLbMIUNCJfNTuz5OmZdetHgbwDnn%2FLOQ8QuXtoNlWQT942kMmXOjLHgxv3sE%2F1NTM1nN8KoFkkRrLYr%2BuEJ6RPig4JeY3aFKVyYd4yu9zx3g9qjwRheYDjVZmzAEpOwb6GVRBNOfCL0n7C6JBA13ld&X-Amz-Signature=cfcd5020e6c9ed1a23cb66ac972d6b2c31dea1d80f33c527c9419878d645dc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCHBIO3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T024853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGx30h8x%2FJG%2BTwoIXoXlh6cFk6gQASxnaoVpUmxvCMV9AiEAhj7v3gAga%2BlqhUIHLk%2Bdtys9QENiUFkKogsdQJi%2Fl3Iq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDChDIIoURDS2a6qv8SrcAwbwgbljGZTOH7EEz3VuyJnEjhHi9Tgnrlvw18rMD6msNDHID95IAfuagDn8MkFv7eNvWICfEhnb7XPZ0azgqhr%2BJ3dqj03mDJfDUXR79PvE6x8p3UDly%2BKfJ42%2BqoNhM2yHSSpj%2BvQXRMLSmSBNC2PKiBji1Z9B8i4tBnEkk1MnqH91y5oR5ck5ZeSLrbNH44HEKCo28DTOHIR14bA8Lji7HiiexTQCTB%2FbZmGlpfkVC2VyIpBHHE8v8FyRaqWmW2p60IwgX%2FP3%2B0kJjYYeSuU6Yiaxt9kDvzHyp1t2SbuBux3wqzx7AI8gl34DwamkTmIksvVUuNobPawxRhMCPhHfPmNGIGWllNZ%2BODpNppuEkdUAyXR0XUm5D73yLJDlXk6aGxld3RNjjCfeTMmGM8icybUKGUZrRhWdq%2F2jrw0vw%2FnwzOiS0wIS4JibRSBK0trmGjHQtqznpC0Zi3t3Rerxokydo1DNgs1TNP1r%2BC9UpZM%2FTmFCRFJbYm7nRcALf7FDvT5Jpz9EEDbMFGgmA6h6PelWHMLHDx7j4ebNs3%2FqBSyL%2BeoeZKOYKacEX%2FaxEDJfzMyNXz4V7O%2FAR424DpcFi7dlcYzY%2B11RC1UITT2UgQnv6PvU2k%2FEqzk4MJz%2B28MGOqUBWos3Tvxkc4f%2Bg9IQ3qLkPigY7sa5J2iT48KFCdtdjqRh2BhgSQznLSXosgIMk%2B705jIbRBTsnta%2BaSk5VSd3hBQNVzKkzqj5C2MKNkBKxOjANqDFewYy2eTW2pfUsYfLn85mdsyN5DSR17cgA%2Bg2fOGTps2Bg%2B9j5%2FM4L0SQz1UflrwWYBo2GsokwMdZtNt70RqSNKdhhib0vLjOaUuQnSauyAql&X-Amz-Signature=3226282e1adf3851db1a69a02be949ef1c81bff4c06bc9bd767f132a3d6a74fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
