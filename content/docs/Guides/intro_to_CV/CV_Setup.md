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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVMHUHCF%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuISJdCVcjGmRlx3rOxZFrv9jDFSC%2BVAy%2F0HwjMFIEuAIhAL4jAFGQogRTa0yHRpqzNEDfWcqi6574lkCf2jJPJIn%2BKv8DCDgQABoMNjM3NDIzMTgzODA1IgxSDOaf2hQ1fTwkPvMq3APD82FC6LyJ5LymN6U7VeEjZCjp21RrkLxedPclJN5V82t3wJla9dlM5SDqh17LrgCs1y9bM5XXa0SLDJZYEltkNN3ksVk3azA49ocNlMfx0%2BYF1EK8XYu1p03poYJVYBXcRansiopuA1932ob%2B6%2FwbXxlE2RA5YS0tcssocp3LqnmvK3jX4U8M5mPwHQ7EIvHT7BJjuOB42ONoUOVWhxQTnx2imVVzBvacf3KRjsnAUshw1wvoQRcEjNGeJtqr2psXNpp3oC0EKPmAhbu1kc06pW4RAm2WbI2VNFyeBYKqF0ApiiMKGFuH%2BfQ%2BE6SXSjSOIOekvOroybGv03wTa%2FR8PwVDktD7dVewx0Jk%2BWgukaNvLboY1CVoNQYapRHWiUwUijjWb8VYFaD5Agm18lEhkBXf84B3aylcyS%2F7wVtZhEmoyRS9k%2BdTEAUYL3%2B6CHuaMtRNz21YpbsLFpULMTwITEXlNGHPkLUvu1ozOe0z2Iro5YPyLmreBYjciduSXbbDt0JY6CyiHu4SpOQg8W95zbGGZ5nf2MxrMBr%2BtI9biEmZ8j7Ar%2BNurn6Sj0N4wWAsIGOCFKh8jCuw6anP0jj8261I3czhHkeZSjogRiZEXhAiSMepMyrcHD4hyDCTjZK%2FBjqkAUVm3QlV3c4CJrQGixSAfEMaOCspm9Fn1rbbq2LrU0JtWDd87yHCiQY0NmmlmlVM9y%2FOxul4jUTQXW8sRI2iCDfo3LdPnmG6MKiJBfAE7NzK7eKN6hnJ9uqObF1u%2F1urkTyKc8akTCwnblu4IVg6OJJ5czvZaMUH1VNZ9sA%2FqvwKq6aP8JxNfZX59Xo6YP%2FDT73nPH7nHNnTGQFVT0BCTa%2FTt3EH&X-Amz-Signature=b116aab050ad309c8cff3390d86630772100c4ff7165a9f82617a67f25f060b7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDDGFGP%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjR1lnDd%2FsrSvk9g%2BO9bKGbwc1%2FAFF3CaqOcTFNQ1%2BqgIgP01FomB%2BjrUZlE30O18aV5jGLzZ3WFzbYl5NcatDQx0q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMTbwGb5E5fYVXurYSrcAwVu%2BEUoG%2FsXMW%2F5PueqTcbGvE%2FcHsp8RC0cgVsc%2Fit9KE%2FAYMJZl1fT%2Fzojr5kqB2BDnbFV1M4AEcmhogUj5XtaHF%2Bn1VXHZ7f2%2BQG%2B79O0d%2FIZArvJ1ionBJR0zCV3CcqrJQPDCI2wnwiQZ0o5w18qxzqO8uXTVjXv9BV9O39tM9i0LEpTtXqioCjlOCK8pE0W%2F04wCtufclCSfKURZI3c5dn%2BdqlMnEfawx%2Fmj9HnIc%2BrZBXZ5Rruw%2FlhFaW0PKl9JCkurL28QslHAdPwtWL61uwWxLgygu2sXRbBB861O2HR8ahrMOkpavZpy%2BAElcE5KXxokKAJpFCgXoOYDYsxfHCS07HfqmpxUN5pmkDJGk3pZ2sQmB2eRYn2Ci1kihUPoz4L09m%2BRwwCebaXjj5cbLxWCG1XqpUR0FMdvoMNM7QTDVK8HpQgUpe9kjYMDf%2BivaKUoo0twz49flt9Yx854ajsMJ2mR56X3pIHIKfKAJMu4yjsY%2FUVbux%2Bd3tylfh8sP19mkAad14yJ6hHV4E%2F0lp%2BjqNXpqf2JUsL%2FCOHXL4gBKSLePmakDNKhvLCh%2FY%2FvNNlKS5pYFm7SvpobGUOnlwZxp62SnzY4olcoPjebRN7byb%2F5rAQpSL6MJWNkr8GOqUBhFOSGp4giiVKWtu%2B1h2bpAjgczYoxVghV0rMZ%2BNAf8HJwtN9dMDUicZOHGoZXL%2FcUaoDIxBR5ojrFWXNc8Fe5j7EPi%2FZ0uz%2FEnLiHE81xMiyKZtXpaxyx6Zu2yzeqCoXHWZjZgjiaQppchzVemoyMroAqnX8BcLqO3m4sf8x5bf924%2BTXmv33lg%2FiZx4SzZ1p8BdGZjwdCZ0zjsie5n6F1mMaINI&X-Amz-Signature=21d60263fc64e0919aa6566c98ac4d04f6b950097464a3a805ba641f0b24d2fb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
