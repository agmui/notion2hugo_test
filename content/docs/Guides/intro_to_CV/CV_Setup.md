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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XTG32NF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHj3YsbdTCyl74TjWM%2B%2BzmZQfRYozRULJK311jWrVNMVAiAP%2Fg0nvvJnfiPkjM0lKzd%2BZaehWA0IrvzgSTpPRo7kmyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMWU1h7gyA80sbOlAsKtwD4tOXD1GXsIWp5GwOJdXA3pUHm9d8%2Bve%2FZA7h%2BfDjgYvIbEM2Ty5GFUxHIukXO2vNsvdD4NnJsoLtQ3m5mewRgeFy6jOmCBNAf9GQKq%2BJ0TgNEfYX%2BQ8ay%2FZRmhXv2fJa86bFcYB6iPbJtq6wsaeFNUyw45xyt0HbUqjA3RLvLObWfLhKF%2BJt3jdFUIKKYhBJLuD7XUW4gK8rgcYX0ZYhfIxdDZnRtuvlXP2zpiOWJ8JXnY7NftYrDF6WcQ1FRr%2F6JzDhSuQnDA7QG4XF4n722VtZUpAd9G%2FcXic%2BSCBtJSbRmnZdtoyuCpGGP444YKxryKdBzWT3Yjbq6%2B7DXwCm%2FFxmRTlhsNlCI4BzpNtqpYKV1r4L7k9SZZqQ7B8TwrCOrZl3JLSkhDMMDpEogUo62%2FWtD%2FRTPRWYanbH6V6PFfjUsqWpsRhDZiuCVgcDCKgfRMxBS%2B7k5DeXUDnrscI9%2FyMH9%2BFSwzRRXoHeM0EVSsTLWDuF27UjIp9TeOCj4q%2BzFAvIZ%2Fy9xKbjQJ%2F3MJZxFiZm03KGUO81XdB1AqO0hi1tyfWHIL0AfjUUG7%2FK%2FU97jW0s26edM973xeRCbHvAi2ODwMP68Q8GLPFtLz%2FPvJVv6OinhnEsdUh7RHgwwfuWvQY6pgGdS7CHjw%2B4STCR27ECSO8fUvFKDh97Cx0VDj6rJG3NBRoDYV2GZvprzwlspFsfyqcA%2FR6XOLnK1XcDVBvVyIbK9ey3gzqtEqG4Q15KfVajAzzDWLpWqcvbSNsDsc4goNCLHUREu5wTUPNV5lGQIrGS5jcsW0X1TGIgqnW99vUiMVbU1NezMnjJpDAhYx2GbNN0WWT5XhGmT7FrLQT%2FbCjJdm1uHKGB&X-Amz-Signature=460c6a442ae7c65c7cc89389cc378e770f02b29421ddc3b5ae6cb3f2d4312332&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VUNK23%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDqzUMZZjYTJtpwMfWkNNMF8%2F6m%2BY3039Boh1QCt%2BKbGAiBMVjzzi6TsP4sF1xK9OIgPmdMG%2B9H1HXgmQvhq18erMSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2F1QRIDo%2BmR8L2Pp1KtwDBhVklsf7qUVuwRcHZ7np%2FyA4Kdifqb5RBF62Ggb0POw%2BuwtMJtWTCZmejGyjXQs3Uioe0xqStQZEUeRtsKPFNpyiMwg4yewUWVqkr%2BNWN9ViPRKVtscVTb6qTDAx4txe%2FAxEtXw6mfhLvX0yQKNmlw01mi4J6hQhynXOm9GJO%2BqXDxcj0OfgiGqFsPLoOduwuWtxziauZAZXvUas9p%2FCEXpLsdB9Z604aYtI8hmMWMCgEp05ZFFI8V9eczkgT62iN8aWaHYYOtBtoID%2BWzwxs8MqOppU9cy4nQBuIBtlcDabfRWVEEF%2F1QIcvb2RwGJK14NzRKWaz4bMUoeuGPczEKUfNLvRux5%2FKrXt6uxDFsY8qSFkBDtnHwvx5WsksuongbyyjWceIXzwtzuYY%2FyEsW2Z%2F%2BtzfNJAWkxDIGyHVRqK6dCMp2EzTz27IqlsRtvRK%2BInvQH3t%2FcmcrCvVktzoXrPfVCkeZFm%2BWsw6rtqHsOspdNcqEgg4UoRourFQqVebmhUHbPK83k4wTeCrMa8ew9QwgLGOHI%2FwQmPURBbAhk%2F09WAK%2FkqJ8CDyMLWBmS1K5fbiXiv0%2BcYShFzUgYuSa4jEDKHnSYzIDS%2FQc0rF97fY4%2BlDKagCz441mow9PuWvQY6pgFI6%2FuBY01LI6XJ%2B20GiUI2OmRCAcboq5ZNmgCV8qlPdvR7cTLO6%2FbkCNGkooQfWzULkTmGa00xe5gzCmnRSpYMo%2B8pDs3i1gDU2kvXsjyF5QoEwOIH3zIlRGCV6i2z6gUJkBM1nUvW400IBxhMG7vgjYGdhQegpahuCOZFx7lVFnDwQpPs4EevnVb0k%2FVirTGuO5bGzSPwmBBi7XNn1ldwQXCXmRuK&X-Amz-Signature=2496b66d120d533336ab09bef1bb0315d2d2437f65d93f63ee4582936e508824&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
