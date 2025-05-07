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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZEBHSFO%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTauLMx07XCm9nTX8D%2FvWfBaFGesqPXzurrazUJ2ebYAiADnn%2FrO%2FBAHqSsOhRsnSw95W3jWtcKW00sAyqYfMBC6yr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMYUgzxytrk3SYIP2aKtwD%2BmloXW3nKFaR9ETXs2ZksDU8eEN5b0lh9eo%2F8s6yXN4clz0VkpnLR%2BdqtU0H%2F%2FseSWupOs3Qg5TKbT2oL1%2FmmephVSJLDTxA9m01af619Ytr9zjRdy00jZANcQLa8fMw%2B9KjbM5cr%2FPr0wGzKa31nYlK3osxBJuoxcLW%2Fm0IFlhFYpuUtiMHKgSqg49n9LivC%2Fwz9iWXX3ZHBEcjvy1%2B1oHpJra7rrXAaoGtEvfzXL342QyaaB1g%2FKeMFUi%2Bps%2B%2FtnoCw0%2FuVWviG2dHA%2BMuG5tj0PE8iF9Q3UTC5PYSEWtgtnPqgvj1Qiaiv83OhLZky3SWQH6HAy7SfUOyaV1KNRf0BUOUD9Sq20bQiTRoK8R%2BWvCx9wCIFMG9Vx9YkTMgl8o%2BvgBJrgz8QIBq8igk1jyoothcdCff7a%2Bcae8P7fIlR%2BJcSoDGnlx9VoWFrbzlhtLTz%2BptF7lRNjF8hIh%2BJ%2BqOgDA%2Bql0jbiVmvoSor8tcPYxJcdpomYLavebs0a9Jo78vAgdDOurl9QLEjoq65b44BUT5kkadmfGLkw7NHxgMXaZH7vYB%2FVkG5ppWks6J0FtJib1yJ3F8LtwTSeC3DsU6y%2BsLiPRL5WjvWt2qH%2Fx08w1aE%2F41qLJlpm8wiZLrwAY6pgH5DAGdmL8ebBH3tyPA9PJ0Yp85cuq0qf1RPvK2eCPsgsTths7%2B3shjPDQg32wAtp8tQsayBlh6lZ3GrYdsV3HPfuwuXyzWosevq6MG248coWDgTe9S2EA8PnIbjWY0vjVMVkrAK%2FWdD%2FAjUXGGMSbQDeEcxIDOqKXOOXc73PaiVYfEziX7T6PMk0vtU77q6FNk5aEEmGZs9D8jAcDIKWS58Ik1tZHJ&X-Amz-Signature=6c76c7be86d843e5ede23116af9b17a965e5e98bbbe7f1ccfa6f190561166183&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQKWOBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh4qxJrz6fs3qIav1%2BceHCpZ1VRXDhP69dyyEOBhHCQgIhANjhbfKvo7y855Qy4eSKiDbxByWN9iPZClQpzP%2FBtioZKv8DCFUQABoMNjM3NDIzMTgzODA1Igx65iZDyOTT9f6fF3kq3AO6kHS2s1bWEDv%2F1P4s8GPO67q%2FLAJrzrVg8hqSZo7y77xpqDcMkMwxQZGrbAo2yP3ZdR57NhAR5qE6fu4%2F2GVRcQ0wGDSZQZuRe4o61L5lGfndQIrjS65WM8rFzTVqSG9KobihEWQfpXQMlxzhXW9Q1R6OfVPCQ0Ji%2FS9Bi8r23A0N7BGs8Nlwg%2FT04r%2F9HRtf4k%2B5lD5%2BnaIGQAaLviospDGE5cxzdL%2FFe3ch4v292uq6Ix9XOvRLwFrk3GKTbieK3kuEXBjXR0uBIN5wFm%2BNUae6iUHXgT%2BWsDgvmPKEcEVRGXxk7Lcxub22TxOQcQpaDaB0gwJNemKC3uspif2GuIE0N3MzO83EbD32rfrYJRcHvHvkv2OCALHiRtxah1KfvTTEO3uG7Icu2YrEvdo9szenuy%2BCvuhmiIee%2B1NjUTHL%2FNlHEtnBxB09QqDxuP%2BVaN5I2KNudF98ysjK1GQlvVXJxGL4lFd0aGqcaO4siJJ%2BP5A7Z71lE653YlA5Mw62OxXcTQAg10KfjK0C%2FxYJS4PqeIkiZIOUKpbRNB9MryE3WtTU%2FbbOp70XPMbeOnvFX4Ad6xewTI0vPgd0ih1DxgS%2F1mIpmk6htp3mBHtq8KH%2FYFZTutYadxnGiDCWquvABjqkAVF04B%2Bd5CouYr4cSt3BJlp0d2O2jyNYrkXcuRzjihxHIdEzn8%2BWxxbyqodO36%2B6nor5nTQMUTmlSmq6cz83AZ6NbkDeRYSUJ73h%2BynBzwTJbQBaWKuYzSl%2B%2FYzbHwKPqCxcRIm1Cnw%2BI%2BG96rTRb93MTEvFVCfpic5qN0Cz8heaEKuEKkarw2u3%2BEhlHVrntg1KmiCoyMb7iYUG%2FxFCAjrCeetj&X-Amz-Signature=07ba1fcd81e056a9d14fe0434aee2c44f484c3556c3ef713b46a823f49f53acc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
