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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RVQDMR%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIBAG94V70g6xgnontCcy6E0rJGF5vmmfC%2FOAjvC6PcOyAiAJ8pcUJhHqCb6%2FfQvctAAVEqI2z%2BQE5Hr6fTw4cUYYfir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMxDNIb3ksB503mX1LKtwDLneVoXvgAhm9LvAu%2FQc6RJfqYOittlHVBPpdX%2BgQfjz3mbyzySvBPAmUALOGWB9hZetGhezSVhv5sQKxCmyNTApCSNDu1RGIzwfWvheRMd7u0cdKnpQd0Z6GyvUjJrTYRXYIOKceTzcPxN6CUu9jV4hOlUJluv9%2BQx4UIWdW39crI%2FUmTw42IIyf0wGKxCGnniluvTYy3v7NU44px%2BBjZXMBmwuVCy%2BxQ58%2Fx7xQrCCNi031BLfU4%2FA3OlQkke1PCBnBCqVRv6uAuN5bUjToia4pPAOWXPdhjcd9kkjx1b435GL6TwiepvSrXW1CsGpDznxVTz4bmQoIRhPxXY8qxyiHblmotbT4LCih7zGFu6BSRisKr76A%2FoqcAiMwnRHxz6dL3QFPNSS0NYle1faOlePF7KFVyT3vdzP%2Bgzx4k0gepkmo4hR0kXrjrLFNPQbnuS%2B2MCxl9vlTxX%2FpgyhLPd5QqHJWE4g0t4VeEOVxn9FmtSjhEW0iflTDfhpJTr4W7ZuIv7m04N8TTYPu0TcGHrkvCtc8wpTUW%2B%2BBY0RWDZ9HsNvzGeDBKW3slzNivC5Gq2w0tdtVbJfQ5cAYbFZVQ%2F%2FyyjMMpb4u9zjSszNASppG8FoaKYQkgN5W2aEwnJjKwQY6pgFQJXtiGNJWW32I5AD22yltVIMnxgg6YOPWDdlN0qGIG0QBo%2F8abcu4EVQjMhkAUDThDOHFSnWI5T0fj8vkoxxPV6ORfzjeXBkWiZFGZLDNe3O1wfS0G2dWgWDGb8RBus6K7N0w3xgJUCWU9%2FQjh3O82KjRzvUxonkS2e8wG%2FMqTkEqXU30VSW1fe44qwv7fRBd590iQ4yRx0iBE0%2Ffhb0WAgIns9l6&X-Amz-Signature=cf3f3b442c39118757eb4535a57026c83ab59aab274934750566d108151f39da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGTQYQZ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T041559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCseSK698hiCqRSC33KJC8qvfuJ4xf%2B2koSzP7fT11%2FKAIhAIPR6OOn6u9FV%2Fvbm4O3ERjGGfR%2FKHLxxYhV4LYk8ImFKv8DCCQQABoMNjM3NDIzMTgzODA1Igy6DnqetOtAJywzKIMq3ANm8rj44%2BHIaNZ9AAIVjUu9g1rl0fGCE56oXpV1UwOmPqsZXNnA3J4b74yuSOWa0f1wssq%2B7UPg9cWbCM2Spffq7K1N3j6SzSFLZIrKC9SbnsK8fg8ixcctBCLav1h1cFapC6sOSQ1ZA2JIe87N8ICK%2FVJMWKhlSJqgMvBQLxNeOH6XmY70d20juVz%2FdF0RoSTdbSNqfs3robOc8fQELuleX8PSenQtNFdiVWuZDlqst1sCvMMSNuyMp0DJT8exwPnZa6vooCwLF4jZHyhc3jvDj60EhQ7NySOg2Hxppj6HJJJ3D%2BXL0DyEZmcyIcuSvAhfS32hl%2FPUjHcZBmyTNnaQiwluwF%2BOEvYoqixXxhpRFOzDfd0ltRmA7F06mIgJQfXA4LmZSRrzGnFGotGNzjJEakomA%2FMgB4Hgu7iAtqv3fkgmTjtyKI463U0aga8a8HSDjOiH5b61l4XVROjkpf04%2FG5c%2FfLEVvicLbGjt%2BQzUpFPuWKFoGXjlLlsPi9CDt4IF5DKFYDe%2FRmkcM%2F3EXsKFeM251QEOMG11z2%2F9rdGkDTHSMpujslqsxOE7Yv2XL9T6FlnvcTVhGJhECaU5fxhEPtWTnIuLbiKM8cu7zyutezTt7KFHIWkrkIvTDCgmMrBBjqkAZ9V%2F%2FFtUhPWc13nKk7J0B%2FlT1GKVppFcWOIS9o2zmez%2FYAXd4kQem3EiIT3kZJJZ%2BwHRFa0pdG4T5xERtENZaMoE0VaWB5txG6oW0bNbuhDWBN%2Fc7xfJRUssS47%2F1GxNBmPr83LZVfb68GEq47WNCwKCr4ZX2lkGOcIkpJgoER9iMZ%2BMCIYctLFt2sNQg99czKp05di0pmIaWv1nRsrHh7%2Ff1hZ&X-Amz-Signature=855f819fa51f1cd776549d168cd853049bf65372ddf6ea598826e3d671f8e882&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
