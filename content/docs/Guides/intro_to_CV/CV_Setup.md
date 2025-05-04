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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A5CUMD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDxzi%2F8Dkf82b9EJG4N3qInxIAhDhvPlW59O3R3vHFmvAiA%2FOaHP7jNQFoGGRR7mkcTuItZq7vzaMFUAcVAug1o7Dir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMy40g3agKOonvvgbhKtwDeVLLM%2FTREn%2F%2BpUlRS%2FcJaw3vNND5Gl9YhTPT1Xs3ZIhk0vq1FeTJUOOmGNPljDIzQvDGbppzeO5v5mdkHyQdRNGr75u%2Ffl0oDiNjvAgTfWqxpQZS5KF8xg7J07h1gu00Vt3rrOy57bQU26TKMms7M1ZHi4Xcrjj6o6KlRx7wnXJ3KeNXVh1O2VwIC91NF%2BpC7ghRfGUeL1lRiZpZ%2BiPgGbWC0V7ZYVrqyxpSKaQ7vv8sXmrNMCZQazOxtlFjQpGTFTmnsc7dPf6pLOLmG7rPrEjwt4fYnoqUYhLCSTsRDuZ1EF5FVIxKoXNdlJ36sgULlJpvYUsWXEthhk1XKFwuADDiHJDlo8oT7qHdDfM2ZbTYnrP5RuXFzGxxb5mcgEYBRvjOoqrmHRUP7W9SHdhvK5MYhj8CfJyH1z3hHuk13g0gs7GVB8pIUnCT60Bz2uv%2BQGIzNO%2FPbMDlgTXGj%2FL7st7xbdDW8Ec03xSVuYppAb7QZs2YxK9c6AMzA2oCssLIfytflwrTxcE%2Fn3HX3VQ1ewZF9BRrim8Gwhe9J1hLI9EDsJwqFZFpIOfb%2BbfM%2FfDF6g94lmHqtff14C4%2FOcfwkflHpLe0TKozfMbUsZerP2Fd6Bgm6uAhBXWHsc8wtqzfwAY6pgHoIdbzdTwAXWpl0mWKfsz%2FMhhPuHNxQL%2Be5GVdftSUwi1sTW76F4BN7Z69kdKdIKNdWOqXB4Ci5mqeBgzkh%2FdxLpxI3y3m6CirvapEWKwNmqPW61mqM4JSoixfY0aWnQsjBTmUBJE%2BgNKQgEdOZvtIAgdIB37rGWcKAfrerikBy3cgIUT7Sf%2BlrMzNrjagGmNRT5mgSgEW75YXKwk4By9WWd1j4xyq&X-Amz-Signature=b4f37f57ce8458a22290238ede1ce658ab08d49610817c441f01874d24eca759&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B4LL56C%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDBPyCKV4azSAHQnmy8vzCsdYlHiOT1Jy6P1Lezg%2FEOjAiBkcSB7ETpGN28vncvtZX1vMGMcGRYVQBLSjlsLMzroyir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM63cSOeXa%2FxXZr0VyKtwDQjpf9CnDh%2F%2BomWjgI0JLrjf1xDwSfJV9Au9Av0MqCSY421gplV9d6toJlJHcjqz9DyXUS07HsD3GrdME%2FyjtvC4hhTp3rr6QaiSbm7agjQPDuErwq3GGkE2vooBvF3ob%2BfNpZd3kZ93lRlOR%2BvQdt3C74Jsf%2Bko0oEz0fyn4ac1AqimjFD2kgqV3XhuISvq%2F5Mj%2B9E2ANBKBIL3aeqpyjLzTVNyYRIAzZfdW3wQZTKb7lstWMyBz87GydNgLNPEkPjA%2BbB6nPjJ5HBK0RwNeNEt9BdoqZ6lUXiQ5ldu9eNDkmZ4ePu3moanwi%2BkpX%2F9LlbmTjj%2F%2FwgP1jeINW0AwmQ1RS735cTLunfjal4QMLDzIHYKE5zk98RVm%2FDOFf1m1UhlUVlYf34Ez2TXHrOvJa%2BynVtBQw3%2Bu3A4E3694YJFVcK6p3kvqxRkOs0xxqmQJ6Cjj2easd595My%2FzvcK%2BS9IAp1X4P3zfrOXzgX9hLlyPr6tlrcWzghP9hAd1XGdbcGOAP43pnNE%2BhP7imdJsMSEeZxomuM0urZQl7pYUfRFnlSlR%2FVqtR3J2akUi3uyxC%2FcE%2B3XfU3j3yaHDPa4oze%2Fa%2FF0yoQ4e6c4FSrUdczRKnAIFDuuUQHM6i9EwgK3fwAY6pgE1xzPJoT%2BmVuWuMqOVVO81wuoplydawmPLKAoU3rDyBBb2tHpgogb9ldZ8sOs6dXpK4Nmh0qD2jPFcaQPBSw6QBSoPZ6K3auUhKpe4AaBaQh9UIrHCLsv5G3JU00iXwtzriprwLnxJ9malxyZ41l6bmElK61Qht%2BqvDYqNzMvb0wpUATu6X1s1%2BbQaXa7WBz6N2e%2Bzh%2BqueNJKDPsz6eyAq6fS6TZM&X-Amz-Signature=5bbdb936a63c695a3fd9901b5e4b4370d5d2fc90485776b74eda5bb275ac47c9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
