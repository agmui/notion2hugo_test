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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP47VFCO%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHIpKxBmetYUaGuZnNVtrtR0tGIkjCGNuwzxa0Y5UaaAiBmWU%2BkgHP1pei9k7F5YHaj2QSnhzF8a%2FfzFQp14aCtiir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMTKsC75ZpTuse4jAOKtwDBHT%2FXuKP5cjNM5Ml53leGQDmNkzTEl0odxm3MnOul0wR9O8yAQ6cml9cc4egkbwFtu9uV0VfvU8HtG4aEcHNMu72792qoBkxxTK5GAVDuz%2FD7VCREk9WEJb7ECNQVnlcqdPap%2BaRFh1Mbw6w3YUz2QceWzMmGgSAILXekUZKi49u54b3QIfUEbqf3clmlLbUzrGPyKtIDuMbfJcmX8X9v7SE%2F%2BmnKgZsODoY0yw%2BfIVMCmyvw%2FrXR38chRDdaZAOyLivCoshv0tpPp%2Fch6IxTnBEUYlCScbyL5ZkeGhllYQmFzZQG2%2BY32qOvA0RzR7tRcrvTHUqPYMC7StY1aP6TdWqDhJz0O%2FqTggMcJzuHbAJuuk2MDFdyyXw2ZRZalN380wNgOT%2BZWeWEF%2BirBrNRnxS85vPkd6oLDnYVUCG8pv5zXvWckUWhstHxFzS7%2FEj%2BUGYTcqNNKzDNwa5d75FWOM8WYIPpWZr8tgR%2F9gHOQ8BAZW2m38tN0iz1nz7tutkacHiryp7%2BpqZM6wlcCkuCQpfilYhy3SnuMANnP6vA4rwNZUZYRM4Dpj2Pq8Yt9ot57ynxsB7sC5WFKCrmzGVnji6E%2BHcZFi9skf0PAJ78%2F74%2FxAXQLIbYYDdwyYw%2FZzZvgY6pgFFQrRhh801ePJH4PybsgPfCbq92CxVixfH5C1JfQis360eFVSCRQEqckLgsHMSkInAG1FfwTjLvJoaB1zIGQd%2BK4raR%2FimMY4x7m5Z5knRu3IdtQ1tz9oo3hg57JpmJXYcoxdGeuhxVedh2qF8VJSkozYiAYA4eQvrwwo9foWf4ylGw9t58CYoH6ajQKmsbX6foruD3vSSb0eQK381BVKN3uw6A7t%2F&X-Amz-Signature=8de04ef92b82bcb6c7dd22104ce4de10603a9a772abb0e29b1f7e7bf48e5ee96&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVJ2QKQ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQyuAU76lSMCLpLMWnPJpeaaxywy0YG6O7oG5qil3psAiEAsPbIev8oAkD85yKXEVeM5YTOVwyi7bNhmqw2QHDbX%2Bwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDC%2FUOGDhMOLHKzd2mCrcA1%2BsHYCoO8qZMkc9MydlzTHh7%2B%2FE3%2FikaDovHXt%2Bvjj2lMBiiYL5MbHoBSH%2FnS4o7jTonbF3e46bW7D8flnNLYxVAZXj6U5Kg%2FSgM4Ay16sJtZVRTNou0NQpw7dulZoEnFIsqev%2FnBIOvDKH2FGaZD%2FikwfaWB%2BIwUGneP8vvM9skqmZ9wpmLGLXj1Z%2FQgKORfopofEPFVlYQkBBHgXxXad3JX%2F4Xu9f%2BbPWtlIYHPHLiwfazoY4kBiErnyPvbTebdFBWg3LWgGwELlGDH1%2BuOovG%2B6DcKOI2%2Be8uUcIw6%2Fut4qk28aSu0NSk0xswImpOfCCdG5yfaMS9VZfwC5BDMxyZRG5mKPHn8Zp6SA4df0znRKsT9R%2BkJL%2Bqy7fAX8o61HFnhLYAesb1%2FdCFPqHsZ0II5z55IyMKuWrwUm0xOiO%2FNt7XNM1laWDa2OEFMgI4iuXSCOFaR%2B7XupHBWvCwEW3he0nu1kJfEQ7%2B15mcnz%2Bfag7Ou968euZfRZ47hhYe9YrqY%2F9ufJOuxq7LZip2%2B0JXOl2fUHhF5%2B12RVQ%2FQ3qt9UBUWS72MmBtnAx3FF%2BhZJ%2BR7xcNIUFafDUuaPjcHMDx5YkAt1lS%2F8BV6ZNKsbYYo5TgLWVY2O%2F6TvRMOqk2b4GOqUBxU2qFUD9%2BjW2n4r%2BnmJU31NhQi5oi4LkoAtGZecX3a3vUk943nFo61EqDVPYO7Sb1wpclg33lIrEvYNhfKGN3IiHwV8xdVD6UopjNkHwa7SeRnNMgNC6SbylmOxmce6JCJsPscj1BH9N8y0xvNY%2BskJnnX5FjlsP2XWr5ljnAlDFqBJkuILoMCesj86jfCZ29wDVBciJzkP9w4C6ImwL0JQi43oH&X-Amz-Signature=dd6bd2ca0a0767d97c30a43eced7c088a6642aa098ff68f4601e6a619fe19dba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
