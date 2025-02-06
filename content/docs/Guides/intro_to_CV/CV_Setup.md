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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCZ5KLA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDvwlRYsMNl3WXxm4PgYrSCheKuwvcrsRM%2B84PWBcrqmAIgO0Ra8SBK0s6nqN5BZprj%2FFfAsi1l413JmOdKnh0agg4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN2CEiW1hv%2B394WwECrcA5vzljUEsUkm0k0sBalhaqYBPUOkyL3zgNd%2ByKUw6CX3QudndvgUJmuF3PZxNQEqUhWnvOmtT1jdI3Uv0dIYnusMwtpybO9EmD7hhPFxC9mg1Y%2BZaCG6ipRwIq%2FfFpY7B4MvlYy23sG9dP9g%2BwVSrz55OP2bFb9ZMBYcUPAgb0eKcWoFW4kCXXbuxiZJD7%2FQ2R%2FB%2B7X5F6IMuWUeZfGGxOiaaD4DS5JShpfqZxjGeaRShBbxDwJEpSbFNAo1omFN99AHFt7Ysu9QXgNKWZ6%2BVshCDL8Qeo6NMWBjTU%2FUo9mQBqmpRf4le6RcaDCkHHS2Xhj5Ok9iREUWmKmxQdfJk0lOE6ziYyN%2BvlTWAAz16Vx%2FgrUWzZta0Xfe%2F4ycat%2FNSoAY%2FCqLwkNyC%2BGXu7QHIO6%2FWCGEhKl7Mzq%2Fi4XjCoga2Eb0s%2BJhSSZI1kOgXF%2BHLXkHW1MgOzR6vRVzuMimMjRAeh%2FFz4sTk7cs%2F4cf63ryVTXZBe5oNy67iFpiyczF9v8xlZvd%2F%2Bo2mg3FjvByreTZhpni34dVD6ownhdX4%2F6H0V%2FywRXhIfiyS0EGKN0ggIJI47WYbpbZNd9K3KvAE%2FXnlob8dabdXjbHdMUXRe0qkY6hzsg8qHo2E4nfMNLsj70GOqUBp7vWpzL10jQgp5097u0RrZF2oMNTcbl%2BTHMn%2B4ieu%2FX8EtAzF8WuDMKRreJrZGtMXfH0m%2FhfWVc8wnl48hsRsXiq0VW5ZnyDjSBAfzohPCJJM16Gx5flRJnba89AM9N6t15oG0%2F27hwj1NQMoDENuBG5uqEfuCPaJY4YwXo%2F72rfVGu1EFN1qkheIVnReh8jO5mtJY5mFB9jIKvIgVTtwL2LTuhT&X-Amz-Signature=0f3a58e08fe5e11dde0cec7ff43526cc4d3cf524fc2acf3457730924f56a8ce7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XJFMCWN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHW9EdEB%2BrwMnUqYSMjZlREUv3fio9%2B262YSbmpfy1x7AiEAr5fPI58x26foUKPRsVfUU2hNWE%2BdTJw8845TGDnzKY4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH8fAZ7c6dzXHXP03ircA7oDqkvEBpJcWZcImXiSotqak8%2FFp3dwZl4UEf6fiWsnyp0KPY%2B4eNqtYZNjcK3gOBsOJfw2wWlahriQTFc5NM2SpTdg4zhyLs4SSqVN5RZ1LBNPYb2o2UDaGG3ObxM%2Fur0Y5TYou5x2ty1kF0vAxZ7wfxG2xYuLQ1VmX%2FG0RzC%2FB27BfuCHnnrkyVJ917CQ4VICxMb9dib%2FJsylnb8bFixbsSdpIeLD4lfcQTPWjN%2BqLAL3%2Fa4XQhFWwZasH65sR7M8F%2BKjSIObiagdb2e6D7uV6f445ysyCvtjrcBxsl%2BeltCVLeJLi7fojMVKIh7P8nKwD9U6Cj8plxnHNiXJ1SJbUHaFExZNrWgteIiBvYpf4wn%2F3UmEM%2B%2Btpq%2Fo%2Fo38Ujdjq7W57TRxSy19Zem7gESTxsNwKN43jpmCQJQ7%2FARFXS4uO52cA4%2FGbLLVhD3W0K3MNpxbNrd9THc22dcO4nI4KoWNi7Y0iFl97VtCQGVeYQq9GzBOwFzG4SrI%2FpAd70ulesz8bYLyBRvTJXVkIgEPla4vfvgqSCZWrojjVcfLwFYoU3kmjStWRw63mR9qeDc1KWoxVT7ebgwNKh5HFAUC%2Boa%2FxBVXKzyrkdmEFEb3Q4HFNpdNNotECMKpMLHsj70GOqUBhZPDoCPnm6p3BXxhfNfz%2FbEbh8%2BJHzcRtdB0lk%2Bo4UuJxzQtl%2FyG2KqU%2By2bUvhNqSxlMKhPwVN5ZND3OPcfNe%2FrG9N501qgwFieFuSbcxqHuufNjbqeLI5cDtbQ95aqXew9AIUbe17AGrAqEdGK9LM3255Esv%2BVJ6S5VjHuMsY2AwC2cbZfC4eFp7Ca3%2FfXcXQy094nN2xXFsGESGWJduiPzzS2&X-Amz-Signature=5f1b6c7be0585bbb56008ed2f384d0fe0b201cd5a9c355943ccaa85350388cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
