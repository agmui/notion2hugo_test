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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PA7LW7E%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIAoH80iZVGLrw%2BOEFnhUykM8ZuQ1yWrtQ47W%2FnH0z43wAiEArbBFfeGuvCBMrCVnzZjE7S1hVOXY3SkJkLyF%2F6wHSREqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDM4cuYgFFbk2pyNtCrcA%2FbzH6zNrJlDhOKXcLSqeVICA3pkAxpbbQ77wBSAf%2FYwxhy5B4flp4vHP%2BPirNjH3zWaDU9KrbSI%2FLx6RGO5SslmbLllElXYjx%2BMiy7kh0CrBRjXpbfLEJc3uCq2gWIxEUOE8VP2kLd%2FB8DaVZuBDTppnTLKdGKxWCNeg7IpHEeBYYHqqUxIN8AgDmvPjTZ2uQxrXea39p0QjOtM3LKJm%2FY84eIJ8H0zbNtUvp5saxnVCttl5Z8sAO%2BHRPUZvo45uih1gInhPH%2Bb3hQGaLVUfHlFcW9%2BM%2BhQn48n3qjyx9Y3d5OBoAenfLSRNN1lEjJaG4G0YDEd2rX25t9knj7lcq9bQOMWhGBouiXhheQc7G%2FEe4u6J63MmnD4BTquyso7vLjKwdKNs1VtkAvqd0YLfi5lTN2rSQoVKdoaCShEAqtJ4vxQkZ%2Brc56%2Bti2RCuyqPqqjU737sZizoV5PvhvJoCaznTLexvy96gGH2VZQvog1Kh3yFROSxRwCbXN3wnCnIaRgw4mviszOrRPZjvgXc78hS0Y9LpTSQAH3b%2FutK5meqdd%2F724QupH6fhHvQlqkJFX6fDr%2Fsp7%2F9UBcXCkynSmSF5tO%2Fe8CdY6BDedvirL5X%2Fo3HYFGuk7CpZzmMOGlq8IGOqUBZahBG4iHqsTO5EQFjHGwOSiRvqyJ6sEj4femcORKV%2FUj4GUTr90JSEEuqqkRxiTiA6aopNQAZGv0sQDXgCdv3vRuEOZp4siMGXm%2BTFc%2FA18jGG7Y1ultdRIcqaRsXfeWor%2BO57iy8LBIPXuThP3%2FFOfcWcWCg5z8HVaYjIby60kv%2FXIjV%2BJY0GX4tXDC8AAIoTwTJIdLTDRrlHUT57dnz8wiWPT4&X-Amz-Signature=ad70857cb2d09f3bcf84cb9b73147b27d623b5a5f53190273154165e47b08443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYB5JSMA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCi%2FI8mbdyNtQE7uGwzuJBAoT7HRCfQSOnE8TGCtF1b0gIgROA5ftTW4wHbdC3pLa3%2FqiYINXgLAbA%2FwP2yHbQ9b2YqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3OGMxMqeT7jnsg1yrcAxkslQ8By%2BqvC48VgqlUkO%2BvWfeH0xh7C6%2FIOdiX9litUNGDIXVTQNvs%2BRoDQAVT8Qax4%2BdGJJpSIOzPh3zHVHOy4Yqa3PKP%2Ft%2Fzg0oW7IntwJXfst402M6EovcU60Kzn4XWWlcWFlG%2F04Oxe5r%2Fvd7Lz3h3Tq8W%2B1kDL7OwvsgXUnwRw7tX%2B4BMC6aMsvWhAk%2BfjzBAvvYG0Alg%2Bdvd3%2F6jNrwSaTICZ%2Bv6BuMt92o7gU4RTIJ16cY0jxtw0k30oYndoh1%2Bv2I7HqrsDYM94daPqRcMsNCi7eGF5JxdbSQVtcx1WMaTxXdQyZeX%2FjRHtwAuKJFxF0ym4wAfgx2czUidQ9ZCfB1cJEx2UxuvuABoi8zYMp5tjc5xPgvqMZjj%2BKyhPZxOhner1Utz6Zsze6Hl75myM3N6yzOSxgV3Hc9xqgpaGkcGViUUYKlX%2BkNpn5m1wUd5FGwtCogbK%2F8UXVb%2Bhb2qn%2FfWjrdVQvk5pRGtg7H5tnF8zn5ttlnlVgrCZzwOX%2BQmv3YR7HyUdVgkIpPe4cF1JaGa0Fb6Bb0KBMk1tYAGgXYUpe0BrYFkmUQfQ7d8Cpv55yfVzEVcIGLl4RpwJo59r1%2FX1s%2Bnvv%2FEPcAQyYnbjSbUzFxy1VaTMP6Uq8IGOqUBeuSViOEOGE3fc14VOXiw7fMDPXWctdKmTNB2hUmorAUFwsj7g3HgH9jPIfVx0RsZgHAos9uy2EW8TF73aAb2tJtRQ1e%2B4RRu4gAUP3Zbc4VUcYdSIC8Yl4OKHfoBQY1l%2FJ1uapyEhG1lh8nrhEr%2BwtigkL%2B7mSyFmKu6Oi6Pml4CK1gFEkU5C%2BqnrCzV4f1%2FlRZkcjlOfk32uFMowA0MF7MXbVBq&X-Amz-Signature=3de0df05240df9448ace7b0e6326c8c4e72a07999f7f9516a44d86d6c6b1fb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
