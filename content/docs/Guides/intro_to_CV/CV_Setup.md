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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHUK6AD%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDBbj0zZN0r%2BLSCD8jpz5XAueVDfyT7eaoZUmDqqc%2BruAiEAlHnVPbhKHTL8y4hWOMXGDQD8cRnShJTDQbJAnG1SpKkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzNJzUOjk%2FsShvfqCrcA9ycUz702bB9myZlRXqvzIza1XUQ4K2DH8RYixQei%2FEBlwCMbYLjz7FZCSw8ubU83Oe7ufbC704FtmEv3KtBGHFPt8lFXkxDtDCG44rMbJNQ7eAE3P9Y8v%2BL4dr2FS%2Bsx7SS7uRwy%2F6P%2Bzqq9fZeQs2E%2BMe6OeWT7u3k9drR%2FAISoI2JVi4Md71YpJu5zxyGbjJaL2x5IhKbUy7JqO%2BbLDCh2%2FPJmGtEZVMbk%2F02Dh3dvgJuY33LpXQXZgvDXZgd582aDzwh06nGJ3i9Gv5OX6ZF21todk51IrgfKG71KBmFWflR928uXZIQWZtx1hQ%2B3QLlmNLFZKcArOcgTCASU8RXzoF%2Fug%2F1joOV4grRDyO5D9ni%2BDY%2BlbkbIdlqWABYLgC7Ot784J5rUWZGL9Z6pXGiq4jErX6uOcHkrGaM7yWynNoLtIU8iNFWHEVB43gFnVRMsTtJVq8ioR%2Bgr9rsTkR5it47YjiSmYLygYoX6LkDToo1AMZlFyJqZ%2FYtDj3TpVqXBkKxaWdQIhk23h3TcTTs190%2FUTa36d4cDsJ3Lm7%2Fl3WT0X0tZPtt7GzTd1QQPMbQdAQ%2BnSRNh%2Bixdka39bbxf0LDR1J12il6uyx%2Ffd88OR5ojtgnHNgQFg3pMIikjMEGOqUBk%2Fp3TiqzfFenVdSE65pgG08xJrDwo8wxKC4NFO6l5HErfhNDnnaV2KWAvH1XQNQqQCn%2FvxVGGuM6mW9xUx1B4%2BlyR1R48zpSdX5LfaED1Fp%2Fo6a%2FA5GZ97FIEtw%2FUacO0bAUkeGXIvWBdWo4dLd9pSJiKS%2B2uLf0O0cYMEbDSJKkIqQx16At2owT2umoKI3FUUdzGiFERrbc%2Fvd4hddohGhqwnX%2B&X-Amz-Signature=f099bc05421f37fc64339d173113d9bca2eb0d1e140fbfe41f4cfec91332a8aa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXACLQU%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDZWRomJuqUA552T8LwFq5nS3BsaqpG1UE04BpbT%2FWVIQIhAIHqmNKcVqD9mME75ta%2FzPCU13CD%2FvRz5InBxtmmEcb4KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Bq4Ek9%2BmMA74E4Hsq3ANUZLpGh166aZR0odoDnrE1juKN2bN4iYEPLhhLy9jHEGx2yoEdtZnm2Ygs5jo6vvJKqTc8QFu%2BK%2Fp9yYep8wJydVEAEWig8s4PkLnx9XhyzatqoeGdjNpa3NoOx5DP%2FkV8xE%2FgnO3%2FHgaMDz7aAqgvY681V2XxIzp09W57JgHroKmeBWeC9Z6VHf50E1xI4UIfhpsb8X8LEslZ5Q%2B9ROdeXKdSYi5qzOD40%2BXYPb4hIHxE6WZZ8vzkwoD%2F1fjBXiu1JyQlnVCvBiZqUuxuUQW73%2BHx1EJ1xbuQHGpO88DlnLYJ%2F6stDg6%2FX77fAaVC8xgObWvUxIosbM4q1ssXZcE2pjVvIIKBG%2BWQc%2F8Vv6jSjNUa8AUl2hVnk0iHUCf8PjFVcgBn8CedzVJ4FrlLX%2B9AoW5wgbLTIBzXI3ANqMzSCzJkS0SVknswY%2F9K%2Fq2Xa7hHLvB88dcwLMv%2FeBLPYXBV0KIqG%2BHIVfuu2Pykf60wrh5m%2Bls5OMCXa6XOHv6qTFiw8cufZqavO6PHOF6KaHlYblex1lGRW4Yws8V%2FPTVop2SyotDzOsYgUCIj26QRFP1tBxwecBDc2USLzTTV%2FJKLmrVRbfKA9tlJyi0scSe%2F%2BdWAuZCoF5kPh%2FBSEzCHpIzBBjqkAaVMgFygZHPL3TOJkuq9K6MOIcbg2pTmJBXSH3GMSgDACmyjMpI6QLDWpJtqCr6gESTporsI6h%2Fw9sAGgNBxaiXeLeP5IUrP1bXyLjkbxC6ViqFdZxg%2FqNFlhf4ZPOveAKHi8%2FfjCx7CdoIHqVQN501h4QCsCfRahWjuCMejqNXvmlF9VsmUO7pz81fj6Nnq%2Fk0lxkQetboD25wN%2FyeQh95B44NY&X-Amz-Signature=b104d04604423011138c1eb917f7e0dde426e917d540bf180c9efadb9fcb4db1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
