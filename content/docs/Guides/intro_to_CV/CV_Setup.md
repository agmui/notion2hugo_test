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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV36JXFH%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUBoThgc1rV1ZUWjwUGbnq6RTdDt2ELczqBmbkyKS9WAiB%2BITBQ4kUy8fygWMjysGkayLuqLhw8zyuU1zJPGF6IVSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsijPJXggUK9prrEOKtwD8%2FlPOdcPwMi2Cy0J8AeLEbg0AlRJTklj10NLOb2PuXHVt%2Bag74VxNH7D7qVAiD%2F5JBtHKVcRkAA5SWuPiVob5H%2BGKD%2Bxmj4nANtT9rCglsT%2BydlWX%2BxQrt2ry1SQ3o30tPF6JzmzTP0OcTCZ%2BATtqfYibEOZApoKTEeIb2zF0RKeRZiojjeHNjO77Tm7wv1YyvhWvWWuW2ZykdYYMp4YWA6s%2FuIh8sb4RCzqclywRkI0jvbUEj6Ehm81qNAvJSnbKSId8%2B9b5ynCNumWn%2FaJNfOaADf5YaWBAGkEOaH7zkE3AMQXJemoqDcMMYme9IWuQLxdZkssVmDD90mLdXaM9%2FXNrNqTX%2BMG4ZgNUVMhyNO5AyPJSk42XZP%2B8I6zySgAtgRWd66knKLSiHhc7zmwRsw5rYPO9o0MX4Xm5PN%2B2M3AWGKfKNfXoDef2jlKenvAAeEosxvvZdJZCCXmbQwYjKorIpVCpQwYvNVcmc%2FdeV6ksE4sp8pZkMngHL1bVWgmuQKT5LatdgRQwMlv81SfuXzdM7KvYj8o1EgNd0iu4ddafNnTHxY3GCtpQE2lYE%2FVI2V9pp6VhvRilD0htt76jNegWXeeDUJNjvGKwTwJDO5yypYImG87wv1Q6VMwlryEwwY6pgGGbmdgojY4qSq3vnuDOvpG4ULunTKOyr1atm8gB%2BZ96V9cf%2F3YbUAYHkk6mYkvOzCxDQzeokhJ6pLR3hcFkMcv7jbIT0jcDYRzPZKF45kvJCfjlF3mBfgPU8odnEQ04wf9q%2FwV%2FHJe2JbplrWkT8ncWOLlBn%2F45NgFGxLnUwSS2EZKcYYMwz%2FYtKnEVkieKEuNbTbDvKf%2B7gEkOBEpDJ89daARNhnJ&X-Amz-Signature=fdc3ddc4cef47568180a97bc4855d4f72429aaf162c41ac0c3b99e06ee8803ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLJMBRU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8lWsvrmMzvIhHFIk5UYCBIGLP26zYxcHUq6kqWvk22AiBTE8SzrStZFjjZReEB3%2FIZnu7fWKX2AwfPnWJW%2FTPj5CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqansgeI1HnEps9KKtwDP6jDVZR78n%2BqUBj53gXDGYGuCTy%2FxL1MpUKZan32Df4apfbHxq5tl%2BlD2gpzMFP2yOA6Nl0J948en4OlhA%2FxvxVjUm%2FY3a0B6XuO530KKNieldk9X8ZxTx4FxcOOq5FcRqdSoRSVXMRVDctbcJd%2BH99vv0qpZLjHPyUWXj4%2BNhKf3K814KuYaAqiDz2t%2FOzWoCYx5EdmD%2BwzlMJggoXxJewrXZ1hj1j%2BrBHuaUZ80W2GJsK0t1pdaqrS%2BkvN7wlLni%2F2WEzm7Eq78e0DBX7PHOAlC109tZthGecBmstu1aWdFCDkS9TcozlXTVt8m71A9lfH0IwN9iM%2B%2FTIROsXVDhlxwTvM97N0t0myMEfMEG8rveA03UUBT2JqIexBiX%2BIl0xiWQjdRgqXFW8wYd1waAwCvVrX7Fev1RPDRZoNrvD97rcw5qFdIn4tu9hFKUlpfPreem1g8jhaCrZWdzbPaZSI4%2F%2BkRCAJvfLD2Y%2FxbWY%2BvoizDZB1CasjLkxCroviWTrToUsyYYbR4lXN7tOovwfnnvVkwtzT6B9QNm3HQwn8IvQGlTMg1kTdRjQVz1NIgrG5sU4cDDl0tAzvsOI1X6jVUGmIyJq3iRc9HPGoeIpVDhfwbwEOLpanNpkwu7yEwwY6pgHCZC%2FcOzs6yVfXNkwPDqyidUIHcepu337aIs2jLjCUcqZUn7pGGt17DnthE36jjwnLIJZeEypt0msGeKrCIrBSEvAByhhaou8LJyUS2hc5WKHJ4ylsWrQcIIjiH%2BWCpsuWNJEYwTSApdsSg4cCnwXSm11xbyzXQAO8CqfSeLtuBkMN9ry7dxXdlvsnC23YVZsc1Ze5QMDyfhA0lZT8703dJVkwRA46&X-Amz-Signature=93b85c823c0c84776cbbceeb24841e94c020b45ebb18175006762cd9a95e1629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
