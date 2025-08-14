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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCROKKF6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEw6YvoDMXcGgT1he%2FV4mIRU0hu670iJTYhiySrKeNTzAiEA2xyNR7VAJ7cSP%2Ff%2BetMaLwEoGCYd9wQnat4BkoqS86Mq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIJVURVZ%2F6kg5D3bQCrcA7dkkucFUOWBIAjX0LAcjmtiVVybZPviljcCQt9g8xugFEu9LEUQn7HlXTiMw2ResrOzZqezE35Jo32dHNCN5%2BkqIMrvN0i0XNkGmWZvyFG6ZZ4yY5vZdp4A8KFZTiBp%2BkzlBeamNkkIPUtMNbgN4YeukLVqU9dLVcpekrl5hVl7azNsMNZUbSqBmHWvrgiKhpv6kuiCy%2B12f7NIiNca5DoUoUkrDyL3BuCB2V3VFT8Spx%2BTCaCrVdrGz5HMzcQYS2O%2F1cYMkImj1R0hzLBN9z%2B3sbP6ZquvPs6vBeefGooCwkdtz6qrc0hOS%2FzPEwg1Y2%2Bv1oQXTUq4AJnX37aDnkUba2rG1%2B8VFvUyOx0OBesGYNWd2wscVUiQ63r5HF862r0musL4oI3vGI%2B99mtyB60pfKZtquFiGBrf%2FS2NQKDqtqEi1AzNBuwCmLt8nsTNFIqAy%2BVw702iWmLpLERvnwEbu4JEVvHYLLqUtQOmA51O9TwqL3kl12JPYxfQxqfzjHW3dM%2BGgSGKC4b0ReiX3pVfUEduG4L8St5lVlSf3NjzPARllxJRiY%2FdInT7T8ajAxqxdUVRviU%2FTeZwYTgsx%2FuP%2BEkbch0ExdRVIqkOSMQGCse67j1xy%2Fe06dWBMPyJ9sQGOqUBwGCGq4Jyp2Shj9IDCA%2BZRIfI1A9ldCXFPeh8PwMEo3mBWjYvdAsury0iNNh%2F0luszR4FUiVWzG4B5O4n%2Fw%2FiuIB4abjOibhigUWDjr%2FcT3AcVTpV%2BsJIHZOCuvN8KSTaSrnr8Qewkbd71GKtjsfJXCrGaOM0wXSQkqP5Qbeec18GqWPNBXm7ujHhLCWlZZ5q7gNg%2Bdz2JyV6lDlfs%2FvOXree425P&X-Amz-Signature=b9f60d57491bbf2182fe6482916508d6fbba163b88db09cf2c4ef83d96a6b746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSHUA2T%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTuNQd11Wf0dRHRSJs60H7ttVOWFpydhRc8Ckp%2BGhiyAiEA0URIFg%2BslhPDlDGP7oRnO%2FKXfKJOWBlKYxAuvvmV69wq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBJANEFC%2F%2FPWXtX71CrcA9am3Q8P4Ev4m3ZNdUohYFQ1KQABx2pysMmvWmNjIRS3UxmoQg1uXV%2FGRobpkTRg3%2F%2BvNrUTVYG6AmW4bEtS4kOHbIi6DVgV6Wwzwzwolof6W%2FPJoF8i8UQD8zKPzfoYyviHx6PPY%2FCBdXt65WSSJ%2Fq42eloimBBT4Qmlastak8ZZIdiLi86k9p9gulwDY76iomyErCFcK%2FwhiBnWnbYNI%2BTod37LzfgOebCu6GSkS9DvcyGJr13oP7GIXA53mTqRaFWPJmNidQ5sWiZ%2BwSLTDIJxpQEz3hd5J%2B01oI38M10FWbIe2ei5uKDSVK8%2BhRY7bT9bKfiyTU0cZCOHDyHHoiZVMXf3wNUss7mtr6eyFNlkXZOpqvJuRcuAmJpIfNIAPVsujySSUTDx9E1UrLYTZhwOzCTq6uQGLoDh6AZLLcPaPRz8UTEdvA0jKqsFBvdPP9QSB4ZdUwxlNqRnip%2FxYUGZj8Q9TuUfKXyFlmvnI0H5MPnM1Al78TIOc4nzZyjF2KcMRP1iMEi40oRN8yP%2BgCBik7fkAAPUZed4rIqhIUBW0t8wLyenDag29cdpA%2BqTecS24ECD9FPFVKpmiJ7jDP%2Buxf4zPH5z1FvDujRmj8KaXUaUsruMRKqwzjoMJeJ9sQGOqUBpVBZH0QNQfnx10hAQivcW5LlQa8Ik1xcu1%2Fjb%2FDlgNARteYTllFy0lI1H2IyN3uA19Xa%2FVS27arOz%2BMCdIoDFqL8XNgL0386gilgc6bx6qoz3M0vDyZnbXnpPzeDwiFaQsuapC1g0jXKS7yswbzpX19qbLTou1sRJTwsY1C75R%2BayrysofMWHIEBzLtNUiOXRPq6%2FsGgV2edZP2SkmDqgAfS79rG&X-Amz-Signature=794df2b5ef35905e72712e849e5c81ad0d2cbd90a2ce422ee3552dbf70af61b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
