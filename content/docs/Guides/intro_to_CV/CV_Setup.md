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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRSTUK7%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ7Eb1eiBSHJ5tUFv%2FWPzOJxFDOlfUfakSXvrwDnktjgIhAIyVaW8poeLONYgKG94QRpzFj8VBTIOsuSnNUrcJ59MnKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXirQoQIXwMFwJU%2BIq3APngm6YMc%2FH0J1TIX2P2xbl3FvYBHBrjMdXiLtvuTjT74YWcsKmRuFJOtnEtN8XPYVnImeZMsN27iWrrSvX6TEw%2Fsg0OTtzyEw1aW4STm34btEII2exH2bwCtJ%2Bz7Z8wiAOmXLhV5yeOKabega3J2EKbNSa%2BWmyA2v2HMuiEq6iW9W5TlrWqeAxltynCt3KX99qAJxmCTKx0we9j%2BT4LifQGd9Zz3At8GMNUK3YFc9emPOswsX8BEVz9u66t1uRwd4W3C6Bm1ifOqst3i9jF39U1K4TXKO68Qalc7LL8fCWUQvTFF5mhX1pOXjBSSxV2zHGP%2FMAulAlBQ4YKq1OZajv4N57W%2B13mGqm1qzp0k%2FxoHl5pzoylyVikJqkUAOORF6kf7pWyQQJEyabXnOEFlii6ifZDTbrunwD048a6s%2B8P9O3jgJ%2FKY7sUAfJ2nbC04W2zhqUsYTE2siX%2BpHtl4RsKxpJitgESo%2Bz2UIXJdoQWwB72tg1h18cMhwCV8%2BX3cNisO5cywSDlnPbj4i1kqVgSUsqZnS%2BF%2BPwPL%2F1kaawqYzAjXU8nVV3vKdub1fvvFDDyjej20%2FdFVFfmeqKdeIbgBebKWTb3fhKn6Vi1RtjTDQYLk%2Be%2BTdN8g7bnzD446zBBjqkAY4NDc7ni%2B5xyJbdgp5oGrE4s4WR37FNIyP8BlSl2JTPGNPGofpS38JyT1J2jvgAYxez4Xmux%2FxhYBOMnG8ckT1h5NumekjAbJTgxE7DxnUtq9WZOkaHy8dwZI%2BH%2F4KkMONhdfj5T2l9cJ6s0FWzUApIk2u4s0M2XCf2ylrTug1E6FO3wsQ0%2FvnRCciuGrs9iTzStiuc8argNahTSnV76W6lESCk&X-Amz-Signature=8c3ba2614851223a6fb363934a9800120751075fa0d5ff33d9aa54644acf3bac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AQM3TXX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH%2B092o7zO9FssRzjK186Ix%2BsFzRGgj6V4hVjQO4IqvAiEArjetj7RUpA35W8%2B5pISaPLsdJymVrSd0%2Ft0gGic4abMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5d9HeBvQlFXtgPUSrcAxxvpUQzvTqnEP9LylDNx7DidZvpdSZX%2BCRGKw0d21TGSy%2FtU50PC%2BMvmq%2FSRwg%2Bv2gR9p8lzEcb0fW1UWRCQ%2B%2FokD4lO15%2FM4RUq3kar539GkSVYZsuErBth5R1XwImnpV29Xh0Hm0L0vrj4EKqtUSNdRpRvlzdGGbfByD5r3IUuOF4jVADXxs%2F3TVZK%2F%2Bz1SHhKpuLtey3e%2Bd88h7o%2BsWu8unF%2FFN5pp3X2z5GKahvgtPwsMuTQtNGO6PORbwfPyRa2u3RqbbVhRtOiDjBCRB2%2Bece9qwkjNmThwjUCuVt4KPLN0yoYg6KeN668hkHlyIRG8XfnCoiMyb3wOxhZ%2BwDBERdNMsXztHiPrtM2CzqqWwHDbOPZPpgthLl5HaNOVOLrBqG6s33KLwMpz0FJlogYuhZmYqAxoF9mxN2w8gAtQIyLngvD3qIK6oe9tzZM1zq1qIjsQUyilIb63FZPyU3wjAcVjXUkAVACgNs1a%2BNIAbAE8gjfTbkHhJlpdMQyRllOLhXHZA%2BN9uxWmyySoKTMjuF2KuQxvBIubONwY1opJJmgr4ikjqIzxcvbc0kl0Nn2FW0sozZ39QfnWhCldCk2Tw%2FkqRg8DC93VB7tXAw61Jw0Uu1OozBmKovMJLlrMEGOqUB4w905iPuPJMVljEXErpeFN264TlUn7Y2ve9hSgSpnLLHkqeyNfAX6b9%2BKq1fXJnzx4M3faqkIyZ1hre8KMDidb%2FfS3n%2BRH0yIehfRL0RsXPxkbg0B6pYRxE8gA24z29t6L1DE577xF0Fl%2BKxGHfdPdEm6idArFSfuoSO9JFGe5mdMIPRJhqYR2t%2BQxBijM%2BEoBohZT8zyQE1Jxw1wJ3Z%2BKBaB3lH&X-Amz-Signature=d391d511edaed248bce131df3c7a56f28af14f5ff386146d043a8ec2fdf75102&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
