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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4EJC2YC%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHGmzx91G4i9kbdZfAQqAGuD3%2BOGA3h4NEmmpr673gdLAiEA74MrRHKPAdWhkHvgoSZwhcbQQi8ZmlpD60t5wk2pgdEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9ZUwFu2SnXaI7F2SrcA7UuGUtNlcqJ4zOQo8z%2B1B3r%2FwrhvrkfmppxDprpz41Pr8zhbBoZJQJ%2BrxlaxQlgTHjAl0QlsaiN2mbRNAkcQT1uakkdYxuTpuW4NlrmxPDmizcDJhR4sA9PgUYe72MW7BBsnFNHxxklPdqWcPl5B3wQL6g5Rspov7mTIEbhBRDWuIF5dUE7DWlBzrr51oK0HprLsR6v8wIk%2B%2BG16flITiQRFmH7VlT%2BwNZw%2BvRXzs3UOk9i3PuE%2BUNzBhsuOYu7aU7DWarx%2BEvEZkTYNi%2F4BlP2ULPJlxgvoYw3M56T0o8KwTbyFJcJe5BxEKHz9YpxMxmG7IEgsK5XkzH7ICK1A%2FN64x%2B2XjNqY6ZO0aZ8KDPOWfrGWt3XoZRup48AUU%2Fql3K4zWrAb%2B%2Bv8q0myWbn4TYEIW2WL4tRyl51UAC%2FhZ9pO655RMgQ4DjlmnsgEbNCeCJK3grOjNyVs6yJg3d5ztxAU4thSrgMR7fuXdzJprCs4t3oLrVTwfTYeqyLad1Fgf6AXbKMdlCSz2OpRAnHGXYYZfvh1GsC2t%2FAI7sY918Fw84DQPwaSYLOs8qCcJB%2FdA310MK1wh9X4w%2FTcCnTdgfB0gWLXMMM%2BfviF7DdHxhmpBO7G4GcH1VW4AamMISQnL0GOqUBnGrZAlytGJ9tpKcDVnUoLeAtC5ETeL08owMUv07DeBK%2Fl9zntiL8dOOyqAOYiwPOf26NOi09Xm2i3ex55h3ANkcPTspcdxjUjwM0HmWCjZb5X08YXoPD2DEyNOnA43O%2F64coaxaRVNcb8FEPvjNNUTHzMjhttZLCVx6sF0H%2BHVz2XXSoNUqxGNbFKckhPi6D0%2FVD3eKt8JH9jmGOyFYmteRvD13W&X-Amz-Signature=5475b0c8c431680495132a071d98a1acbed6d306bef0e67c554d2f0c3d57ad31&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPMWX3W%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFQWZ4tYHSshl6rDR7EaYUFrLcLDeIXfonU9%2FtdaU4N7AiAPwtiF9HYgRzi1apaSITzDuEtSVOSbUZAilO0zVypHUiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDea7TC3gUOEWmTY%2FKtwDaHMpe%2BVlrWQd0eHDNpYtOaYS0izCSPw7%2BBxBua2v7ZsKkutRr2Sp48yW9AkZ19TveY5mdzcV4mAMugYhKFZHt1rD8HTtGHr1uDksVqwVVHNXym6mlcM2mQt7vN1EvqqKblZLzzX9gftvH4I8maJQSYvoifI4VxzzbmbmIaYVOxLFMIWDetOFVZaq7wgoV62TI7NhDd5CqGsJYCsOn4NMZSHrFWunqYdSkBBFqrvjvnVQoAVyuxbhLy4WCrb0h7n%2BBBn4sVko0Di3VDlxyCuQj2wn0Izpz0%2B%2FY6hHAbZhV3cKgi%2B9z%2FlUUlzgXBS1YPUoPKVQhT38ceKLt1Ynz5WzUZdv8o5KyMQ33KgYFBXZNyHyMtxKoRkCyZy1w24ElimvRC%2B9lNegMtpIo8Qrjuz2WPgBPagEOWuYUoJc18K8FcmsGgvzG4xZQfRRrVBFlEjHV8rMbTlmhPhunQL%2BKFK%2BpIf1vKKREmqz3l%2FnVHvdVE62FYPEN4miVO09iazW79mbDy6chVEUiRczZ14ZynZVbnM0ZdhyDEBXVCERoPqPgQJfG45tVtovSbkyl%2F5Vx1pOk1mc%2FV8u5wmv6ooCwVYHP5X92ZwcD6iOVsh31AFtkvblvloVxkCks2%2B6WBkwqpCcvQY6pgFwZbePmYp7DOK9ezllvA062OSfy8JIhiLi70Qsng5F9P2PtcJAnFv8GcAz2yClRhipyKJsv55yivp%2BbM6Wz925C%2BRERuUyLrOvG47gnFAeiDxjXrrH1dgsCmXENnKTMyM5t3Za0MjgflJEs896imQtCQ%2FJtpnjJm4zu435NsRhhqoURq49M0eb0%2BJsTNmSV7h3FhRmyXG62%2Bk%2B%2Bh6IqNJrjyCISFci&X-Amz-Signature=6821fd48a68a8eec1e16bc133deeda6438eb6cbe4a404428e7a970d31a16579a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
