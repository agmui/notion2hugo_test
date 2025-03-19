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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXABQOH%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCTMn1bFafpmM85yIBxhyRcleo0mWv2jE%2FYwq83vdJf1wIhAMmeZzbZ2r16JbI%2FC6uoIOBkoZaVtfIEl78JVrYTe9n%2FKv8DCGwQABoMNjM3NDIzMTgzODA1Igy4jjVqwrqDweJ90YQq3AOjZnPkgJbxcZ9aG59dzbp6GMP7I752%2BzG1TBzVSSljsLTyv5OWSezrAh7JBjkVJL1InntPpH5lzyG%2BzNxE%2Byw29sTJEzqAmMeb%2BlLfCb9GyHF7nKiTx9d4qUIqnK2hGjj2i0B9UYvJjkD8dHJDj%2F8oGAHLJP%2B7ZZHBJWs1SVi6BUveuJ7jiIOZPcppvb855%2BRjNF2w3v1OFhbqJYLvPkgKzauRu%2FY5ytX%2Fc41JNC%2FC8yA5An8qeu6F2svTtIW2Zd1qyzgMvySs9r7cwUUkQd1VDJVaBprfq7pLb6r1mF8lzigrdyaEExeMCUNF9QMFSUZO2Wwiz52sj0TUdZqQ0b0HtU9PO37e2V8LYMznQhIPzXfSd%2BbBDf1LOLiJoGW9RAYmckna8V1BVhzAibNjen%2BuRIatphqLA61SZU9Wz1eEWV%2BFRJAowXqjcVmsp%2F16WH8o8LJuY6RLa00hj3xU5rgWs2vuiZc2PAerwv73FNOOmsaxgasxsoestZ6BJQT4hyp6uoKxrcneaiCan2cXgsIfHhfmu0pevMSmWPwJvdXxgZwClUX%2BpYhL0l7mUCRSsAEcX7AuWlqRJp1hSS7ToiHzUxlHUUpo32iTr6jepnLe7L6Uco9KW30bvg1lWzC93ei%2BBjqkAdINYzlu9B%2BFunrPQLil3M1ZnivCahZ2COy6LJlO5fEm%2BZ86lXUns2%2BhkekeS%2BN2uJG%2BvK5EMXu413MsNZz0JkfYZZ%2FsBQNvk8qERf92BvoyTDqqSwHY8OE2wgaTR9D22dSroOtgIo9WtnfQPvFaB%2FqFle6cn9o7Ee7T6mDvjqhcpNG5%2FNYC7bPbWohqolx6H%2F7XEIVvIMwvGGxW00PCpY6FgA9B&X-Amz-Signature=51a14c60d997f1114f8109c1454da92629982ed054c258d4678c8f7b5d4651f7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4I4QAL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCID32iA0ZF7oJ%2FSL4d8IeE%2Fy3p3qCP2VnmgpdzC%2BZdGSmAiAgvJEtjg6tx%2FBV5VbRLRFSJawDdrbvFXq2Ost9LpHVeCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMguptkkGJXM7ndi3AKtwDoIHFSX6groo8%2B%2BWDJ7BLRi5sKQ%2BIC1Rn6I3xiyXSblMS%2Bu5hmZTTm42v%2Bgqad%2ByQNJjLelpx2QicCKFddAHDCGycxnPW6g2tUQjFlLRiCVqjxar0eaj7OOYqodEjiLfbG2eccnfT5pHQtDw6SEk2ebnnsMkw7ZlkG2UqzedHBO5zby1jONldSoYwXAnEweAcqBwfVdpF7DEWEeSmCA0NYBq8%2FDREA%2BFoBVqxNKcH0S9nTgqq%2BmR8gHQbfLErMzMBaH0zCh82AWQyBNXM%2Bcn%2Bpy4ce2Bldxb5aLBAk0RotOypOWRa%2FpNkV0DPJZcIrgwuMQgAViRuxX%2F00BeXTwP8ZafHIF7TBq9ahstCf%2Fihmy5Bw5nh6nOMB%2BugMSzWzz1EjjIqQaOHXrTorMDa59FnM6wvWH7viu%2FkdUbLf2kMIpuYRB4GZufnvgBB3H0Ev94VSNmopGsRWr9e%2BbcHCon0xlpvDZKYhjkUq2YvcPpKF54YRqx%2FdDZ3H6pjuCxcQw5GcoDNHg4AzGrEch8lWktNNtcJV%2BzkfLiU3R0hEPid0eoynxRCMN8O4jHDk7r7GnDMqXmJ9M%2FPnFJlP0o3vme5JzLJfS3G95X%2F%2BkAiYVcH37d%2Bk%2FqT4VPE9sfCAbwwuN7ovgY6pgFuCqulR4sTd%2BVn95lqeMoU4Giy8ryPbtQ5%2FykiVr9ZyMrMXlW3Cnx2XGm%2Bqzj3bvrGY3DmA6KgHkfaIc5ApGJG5IiGjitpYeHuodK9c9VVonDsMRdbZQ%2BCvLqxB6B0veI9CC9Gx9iaha6SqtU5eM0tA1wSb9HkvgnR7NUGHn%2F3GHxDRVnTzbCoKLpOefYR3YXhpBzq5fCoDIYyWVoO9sNvN5sVa3YJ&X-Amz-Signature=6f05fdc28ea1783b3dcd937e00afbb22d23c4dc1de8a69817efa64d3c5c45d31&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
