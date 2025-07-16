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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP4EX4K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEbAP0Ta2doY%2Bu0um0zcl9UDwdlevjmni2yNj986KNmLAiBWJ%2BQIUlS2dYGrHenrgN8XnbX7EbVzHy1AHD9URjFK9Cr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMJ9wcX0CUWLfSNaUlKtwD7uDyU%2F8KD%2BIHtgdwEk4A3r%2BeIgK6gm%2FYHDTIoUIjnjjWipjr3iRfOHklFZ37o5OQvlFB9mWbOKuKYwVNK4f27KqxwgyOQ6fDxhq7S9dOHRIoaUh66Y764RvEtX6WVn5xMkwJEgZ3zelnW47Q4aQTYXGIV%2FaaN%2BOcBJ6WVHiDmysNOo4NkuOd%2BwsBNfz%2Fn6z2oSDE2xQSYAMbZ%2BuvoY%2BplkNugaso%2BXgDnhvCNK4x5bjfGuqX4Lqj7gkmmUnbHlg%2BiwwOJX1%2B%2B0CPtQQErj1rLMQqmpGJMfjxsJ%2FIb0Y%2FHj3yrGFDt6CVbG979%2FK5%2Blrc3KdbVYZz0PsnWb5p1o9Z%2FYviozNVzZkseh4AVKWSPPy1nFlCFn%2BPfg1IQq7XUCh%2Br2SXBAgn2wlbrd0h8GiFvUACeAw7kzD9ZgHoeTeuln29vlV8XdFd9u1L%2F%2BBglfxjKnG%2F9XVfLOpm%2B3QMWg7xjnReze%2BsIMBoq6n6dDZ9NJxABFVMjZcx%2BC%2FVWoySelaSQvQbxsh1Jw1d%2BOXNhVLM2NZYslCm3a%2FPQl87hvCnn9iKpF9bYLnqTykSdd%2FUeP3Z%2FUmg%2FLFCi6VgWV9buKkR93uDS2yqF3wUk7WqNHAibPFKBARi59kSiUupSOow%2F67cwwY6pgF5gF%2FtrWi41SGjePRYFWrWh7yI48F6LeP2YF5jmtUKqzy%2FAtG5v%2B44471XDcdCmNc3bPtMjDb1ihNLpWzOvmvTcyUbhjfVRf%2Bf%2FTks5KtZcmMXnksLIUeHFf5oiDdKUsOiwMymt3tO3wDW1JFUA6GG4jIEdRpEboynoIGNKWrz52QVFmvV76qloe0elTysKIOcniE3XSaio7756ZLi7XHJLMxJrAXw&X-Amz-Signature=fd35129378eecb070cee540a5855691a80f4375cdd44436dff1a2e8879849e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VEEK4O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA%2BDbcOmizlmK2GL4iAu2p%2FqQXn1jMgWH5Ep6%2Fsv4ow4AiBOVchgpSHMLLsME9Ue0EXLG3p%2BI1m0HMMXFP3NUBiSACr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMZ1cZtGoLiIqswKVQKtwD80aV61%2FERDY6FUGpAA%2Bk02FpDQMKkQREzhxMvNbRIqiEdjN7Lbmotxkq9cNRixWqr10XedxZ3xkW9tNtFWnoWaJYdnW4Ob%2FYfLn01RjP8PjFTBleEhGAgsnpybWZFoRjfC%2FRJdps1e9mrzdgMQN5XqxpcHS0yO9vvow8pdAnOJanAwMOpS8cCqEvxCm29Q7CTnejGjDmSVMNT1ys%2BKx2HfHL6xMJczynXElQe%2F2eqVwax4ZPn5AHtSvBCYx%2FKIFu9RfzCoq%2FZj%2BK9l09TYDgBfYWWUvpiDMwtJEwqYOLD3n8Wc0i%2Fa9UBglHWC4%2F5uf2ML3Szh4OA5uv8pFwmfOpFB7NUOgvU19iMuhvjv3LSV8UDCXYBC1Jarw550otgGILMoz%2BQMgyd%2FRIJoQ3igQPR3xTOiK5Ph6lmSbgy%2F%2Baf8zl7s0X350GJ98CXdGxR49cHAD%2BEZSoD1GhYNtJpu91SmkjLtQ4x%2FFgwX5NRXgdi5%2FzZ%2FfFdEfotyLXcR0j%2BfkZ9pKGKZFEzrzftQPxV2DY0KL5Avd%2BkCVd5NX09BlTP86IQ1MAuSuQN6M0T5HETjls0S2ioOpTbhlEpmZ2sx0GJWm896bsArbic0Rl25DGx2Z1XrH1qqvjjZe1u7Mw0a7cwwY6pgEufkyn8rZ2CP0ApIJLfw7IgN%2F6qmoLkiXU6s401yc9YvOmAk1m%2Ba1dHSNyWHiCgTf5C7vCm0sCkNvw7ho6c1eoqs3Qa01%2FV%2BJAxEdDDD09N4pb6v7tStzdhj5f3I6A3AMgowffc6hpP6FVrDzyweAcVPjcp1FgJZZk%2Bfm2jqHVgamkGBy7VvzkhU%2FLNSr5RTwgIu%2BuB6Krz27H74LS3ZfXa8BWcckB&X-Amz-Signature=39b112e077bbd22d516eec716dee548c2d2832dfb4b4d89a23b98b6120da41a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
