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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ORPRC4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6oSATPGlZ8n1P9A8UFcIex%2FbJAfjLtMmyYLM%2F52dxhAiAM8wKOKirH05RON9LnUtCi9Y5uFULx3sJ29qb0z9Qqiir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMJa%2FV%2BrK17z2fu2J1KtwDVC8gbMROP4EJ9KP341I36zVQalR6kiziKdFYn6LFfgTL2NaBi4S8EhnBUdHW1DXQuXflsg3GmxFUtkonySr%2FpGmh11UYkgEwVWYJexus%2BpELs08uZuLbcUl%2FiPLyYGZlb9mJKVviysmzTlYyrYwBppOJRBlClRbMpHIenYgDaUFlxkolbSgEz%2BjTBSFn0Whn85eTvSXRfkkfWBD3I5YMci7%2B7Mfwo%2FdGWCYm9yrfYbov70bse%2F36vMBDTpnh7sAVRUS7ixYC7QH%2ByrNreBuq6I5GzNnXyid%2BM3KYTgwxyb2NVqSNr28YXPb%2F%2F4LuZ3ZxTbRXK6HIabu9gMf9OSMYf2TMwg%2BsC2Te8ROOBCmEe1oR727D1p1UK7IJcHH0a2DrCpNOP1gBfIc9pE6uTjxphYtElX6hLrGU2BdFd%2BwIRU%2B9D%2BNP3chqP2u3zjW7S6mqbGPUC9F3s%2FcP%2BKJuC4zHXyEpOjrjKHZMbbBn4eJywOXcP%2F3WtX7ggpPn4jJoB1zDf7MPPQ04NPnZAQ%2BSu33VHuUxJIdJLsH7bG2bCDXk%2FIRiro0Htdei3qiPddQSZBaofT%2B%2Fp4HTisWt74vOx0D6DKeH8XYzoQyOGQmnj4c29XgLYqK2I0%2BeTaqBDQ4wk5TxwAY6pgH4J6u8v3J6MQIKFFKxXWfuv3bF2SG1S6mY50GP17MB0%2B7zbS0%2BAY7gnmeuyw6%2FKpAdS6Bm%2B2d0tJQBItIOy8NQoGWGoIUWLEy1Zct6CjhkalRPyuMQmSBMMrTaoFZ6pQ2Ib0vX%2FGvubonbxj3quqOdm4c3SmgBS3wybxPLMa1b7U8b5ffy2kBjPZUkYF3xoj9UBm2%2BQnz65Nx89j4hHtYqCM3bFdYI&X-Amz-Signature=c0036172cd92c567056a3151d970bd4d3706e4c80b59acd70055fcbf03935d07&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDELEQDU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8b33yZnywRnKU8U9YM0r6tTH6iWcwFyvQhpxS19SlzAIgEoHR8xTDswq64uf67KWucMaeJtbq4i3u7JkNq8MU11cq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIbbfnz%2FnK7%2FN6aTYyrcA25LEzeMsoDOTrnI8jyfGASJu4necvUdGtKJYyzWPxD8%2FvLdJc81BP%2B8HKy1i8As%2BoVVY7PBQLb5FdeUmDg%2BpEL9VU4TKvoBvOSrNc9x1TojShnMo1Vsm%2F%2BlZXLY6x1kCLHghnTm8XTfZfk4me8FRAcfFdE9RHast8Q3HcAH3MAkKN5tKm5qb3ESnoVFAwgXkuz9GDm3s3A0bvFU8CD%2FunMZtKfu0U0DVXI2mS8axyIPmmdGxW%2Ff6fE4QvaMYMODtaNFErqauZL2JS1UuQHuEIFdL9sGecM14z19Y2Z2yXHBtnhDkPCwtP8KSFxKt13SRVRlnGuApkhKpkvXegVgAW89rNLwVy1iQtkPE6nJU4G%2F2OFnskdJemzs%2BtwuMf5NZtTx4bmWBdxPAKRaGIFu33wWJn0hvmkF474OcXQaK9nsHfGT557BKb474ytVcUQ6XCqKuybKJ79q1r572gVCQYIOqqzqX2iQqTGB0YcnkF6yWqbtw4EwsQuk%2BEVsqnq1s%2BHneKM6faHc%2FyuhtgQn2%2BfyJ2ghvxz8xweZcUNR4rMorgbly14r7aNwNvWI0ZZCJg2DGUhAMxRnaztdIeokB%2FkfKGurcURLeaqIwTObbNPHHsm0l7TmwEYykV1VMLmU8cAGOqUBkt1P7rs0GhuYpUMqWaq79H1v%2BsEHOIfqOT0AmlJDxbgRhQUHce3GqFMkYWjNkBS%2FCoN4wek%2BTSL2jxPDBTtu%2FMQzG7ePrOK8t1WjIFltm9I9nWrRQE%2FqnzrEbkbn6jK0Y8OlJQEuDVBunMN%2F%2FCmU4Mv9d8aC99nGoeEDc3IZWOZYReiw6gT8viaajf5MNGtLD0fcBvSJyJEeEesfOwAFA8q7QRvX&X-Amz-Signature=e91bf1ef185587319884f139bd75b8a7870996789cc9da0b29b7e1721baa8784&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
