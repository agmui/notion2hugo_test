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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MT6SDL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDFHnR2Ni6y5l0aMaBV8zLGnNUR6HaQvgJXl%2Fl18udasAIhAKAHA2pBm4gq%2Bp9KIc5dXsb2IBZdecT6WEFrliZZT4CHKv8DCC4QABoMNjM3NDIzMTgzODA1IgzMR0sB7Z%2FPmBeSxKsq3AMa6YPXLGBgMqdpRwRTco8Y4DE5l6R%2B3sXqdLTWDnUTqMQDoLR6htvIpSf14nHZjaIfooDdUJDVV3L2AG8nUlEjbfmWS%2BHv2%2BZ4YhONqfXsYF9geAEi11q4BIs7DKrF72AOVPhdkE3g6wvPKH75Zy%2BbOQSevQEx8FcDINVPibsOJZgMCEeVv1cq6G5RnPY68t9w48xdKqYFOUdRS2GWi%2B%2B3ADRIzD6R8zJeNwYFAe6Nb%2Bd0x%2Fv8EST99gynyTWIgEhsJGh7fmD5eSv08N5duEUVj2tG1l%2Bl%2Bc72oj0%2FSE9E%2BwdEAf1yLQbcBvow6rGgwqlfibF2ji4A9gTt851UfSQxNwvUm6cjwr8FbbsdNkKYUqhPd3qxTaxZnFJQt69gUF0dh6Y%2BL5ccctsNmGZD7DM1a9ai5L0d1J8V7UjKxwvppq8V14qXuPXuVofwrGFxy2p03IeuY%2Bjei5R66g4VBbTerLvVkVebalFMRHl2w%2B4tWNW5HSZknNDTFxSTczkg84897qwyjZjm9LaReuWkmY505HiyAJElnkEccm7mzFzxzDeYkVbogWv%2FR1zoKWO7maFkZiSDMskDI07n7ll4sM%2F%2B7vFJHg8LAQDH9O%2FbgyWvUxxnmCFsZCP3EZbYeTDin4i9BjqkAQgy7ktAL7xxzS%2FFrxVu6w%2BR%2FZuMUN45r0GoF3%2FDDtmRleH69sjPU2MqeP9tVKPO2wcwd0xz8iHQXvtK3HJ%2F16Zl7YiknP3W70s8gudIQkyTHDjxjck9N0bk5jjinpw%2FDVrt1gGBO9TOqr%2FLDROI60sbhYpJuKb8ytpnXED0X427EIXjdxn1B9vnJnMWwqn3eav4wps3RDJ7UmZ%2FsEVc6PerzAL1&X-Amz-Signature=5884158e6c5174481e5476d44abaa729583638425e18851e4229a7b2bbca3230&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNGKVIYR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICKanqupXwGq08oAZV15phoKdYfriG3MXN6WvYJyF9tJAiBh7sQw1Pm7rp2CYRFuumQIbAILc4WhVGK%2F7KyFpJ%2F8Lir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMkdZ4m3y7KuuYT2dBKtwDYcaKI2ABC24hUgHHx44t%2FApqWerR7faSqttPAGZ3%2Bry%2F5FUkVmkaRdzvxe8TCT0DsekNLKnbKL2oC%2B%2F6WyCRITH77W9wA2fO%2B1hcLI%2FJoMhdkXrAk3x01GS6MgWjpJWt4aA69BVTtXIcttxeWAVH0RxdqLffbUXOyJtgs4bZAIP0PKowtWgmJ0kc4cvnSkLeRNpw86LrHyt7lFF5kbC%2FhCZjy0RYleRNulG%2BxwELptQseEFUWwTQEOvHKdigNb4kUj3GrcznLqv5wigWLjffNpP6Hre42NYcD1B4kW2I0zKjc30jf8TPI5NN1w6F83D4tl45pi%2BK8bUjAXRDsWLaCOQhQMNYRm3UtNOBezfJrPe8VW0clp07lsWLUgR0KFQp60a1SYtJgUQaOywDkhHaKiz8PXyOo4Nkn2Qm30BejcqN1UfFyUkahzbd8aaIYxhMqFmuQmj1yDJnhZkbDj3H84Q1UQUSP1AUIEKlkanrWImJQQhC79V4IMwvccSHLht2tNktsHoKVSQrN5Lo30MWUW8fqEStLFqCUXSmIEjA9i%2BZ51jFAck3KdJKLS4SfiHkh9ereiMRrjmQXeL5WFD1J%2BL3Y%2FGW3J5Rd4R7kAgFJVrSWmIHaPLTlkcoVmQw%2F56IvQY6pgGj08sf6561JbZ1OkQ8HLdbFbLusJU62cmxIHEJsdHSwAgkJRvZ5aoqY%2B6DUlZFg8duLBk5r9k2GSfglgDpsKvqRyAb5QsQx2xgdKlL1pW0xiokWVksMY3nWD8HXCzRRtedq4pFOs3R5vi7z3pAy%2BxVaHIr2FLZmuHRe77Fkt5ZZCoD25ajTEUbGA7WWxXwJNcMqNOwiGvRs7U3Z5sbc4yeVFp2KWJZ&X-Amz-Signature=d0277330722b02581d9d9af05f719efd4fe841fc80802144f0272b4c526637b4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
