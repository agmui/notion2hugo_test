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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN7QBIPR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCba%2B5F1qOroww4f7zz3WDleNjxV%2FiYOlw5W%2Fy%2FzPoSIwIhAP6B%2FkCBzWQLx%2FoH5dmnNS2Hb6Ay5sQHdZEKggc1DcM%2BKv8DCEkQABoMNjM3NDIzMTgzODA1IgyUjQ13DU%2FYepq%2FAtEq3AMyXP6ScXnlxRjL4CI0L8zqP8TSzP5sGdu5skZlsOQPtCriZelrLy%2BqcZBmv8%2Bo%2FDoqI6WWoNQqjcqw4xei0NQ2UzwD0teMwFNenBIELjJoJ4GqhQxc446jeW5snSy2%2Bz%2BLkPwCKoGIEoh%2F7W4RWChkRgUQceToMDTvmEs%2BKjJ5lT0j4aFKrpQ5HPoh5e1Tyjg%2B5bYY4Z42q93%2B2aew9OTPcd%2BxNBMGCqWPKpzeb2EpDVRxG9RG%2B4iw7IXP3aHZaycZps4sbVaxx%2B96K9%2F3jN1ySNNAKXvO6SeQkvsgSg%2FpOQh%2FoXl2wjphAm%2FoPBBW9dlbjQNDzFBtlGSRtJDijzGknfCwA3LNBlwZwzJlG4QKn%2FKRLZAdRllmVu2uj9VoZ%2B99dd6lTrSYCZBfMBQNqxbydYOkBmWw%2F27CGSy3NiR2Wj6nafIoMLybydGEfxdX7Ltt7hZ%2FnGNs6xXxTIYEzXzRh%2B1ias138Gt%2BHijWDDmzG118Pcz%2Bev6BwORlhsVbrLU906nTS8vGA%2FgcCTADju9FfIObMLmVZmk5a2X6FimpsdVmM5zQi4%2FaipSbtlMH7kAnBNafJadiD%2BF1aGQhdyYzJYBIrV65ixHAfuI5SxZEcDQbuw2GqL%2FomangkTD5qv%2B%2FBjqkAYuEjbojD3%2BvfyMa%2FbjX3cwDOortnlHNJVfkmlItrr8SLH9vwrQamFfQJt%2FxAnDh00Pr9F4yO5hT4tVsbPUCDiWmIwDL%2BUZSI4nDMGtDgFADKm0RJBXu1z80yRjUXkMNepA5IhaNrfaTT9jRB2pGHMKHkou8WodVGq%2F8H%2FqAtnWHs7zbm3RxnMqAzBkCDoU4tLkh%2BNn7oN8ugLYKa32fUYg4S4BR&X-Amz-Signature=18faf7de454c2867ef4d25757a0aa3b45cd04c89fd767cdfd0b5200347106cbd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNWPSLI%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcnKuRmOgviUbeqpy%2BnsdLC5wR4gZmrldyUzE5vBQClAiEA7QMIozuzw0sX81VOYFx0ugsz2gwlx%2BgvBCIQUPL26Goq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJI4SolJAWpOsppS6yrcAzKS5ePXqx7IkHFYRO6ROWZxGUMj9xSNbeb%2FYr8061OvklezURACthcTW9ivl1mhqeBJ1kI1NYxer%2BX8qICFza7xBud7EjR5jL8HpVpq6TST2pD9062kVrjFLPsOIVLZcef0fRa%2B%2FBWiQSfoLhYLlYtkW2xTJCStj70qqXUHcoGP1dFreV51Y0ECtNJbcXZ9S39GDe1QO7%2FtHHI%2Fk9ak5a%2FntuFhWLyjuzXbMX9Cf4BzBZSjqGuUoBArvQnIJY7FlJ2hbc%2FUOnMp5yiWcsiS5UxdaSBOehY9P8eqEqsMJLzcJFREPd%2BSIKRLdH3VoarkM5h%2Fn7gNTS6sW8R3%2BR1NemVbvzpOSVdrKWwuMbl%2BE%2BYmHilZ47%2BSMsDYKZOQmiUPgTb0hasB8gnE7b98hocO%2F41HDcYF7QNWNcsPqZy6C7M7XhH2E1yBvww%2BXJ41%2FatgQsMhU3UM%2FZYqjpb0ZpeOZYXX8b7ULKfYSttZyyScEg2HAQ05RylFcpzuFfLzgmI%2BBj3tkb24x0WgPORI3HYzHeEcDlN2wNrYE2lkhFDGdaP%2F54%2BKrpxU4nGvCG06dV0OXv1NB2PY4VdYMzA4p%2FrUTCXyeaaz96pBZ%2BSbpwz0%2BXAGT7bOqM44vz5HpeQAMO6q%2F78GOqUB524pwQlF0fkWRDgaw7UBjHZDqLPxJYqAULAgBuDcpn4CWA%2BXu9M4Pba4V3jJt%2BTqSre8tvXRbQ6Ft36sJBSrH33yUQAmYgMD9o6qy1EHaUbgB9kmqsyq7ZF3E%2BYTdMY1i%2FuHD0bi7L%2F4w0dMYn%2BXJUEdPdm9sb49%2F5TdDN%2BDeZdVXlRa8954Qz1ZtWAX7EMjD%2B5iXpogpXBdLcP1IYdfBjJPkR5Q&X-Amz-Signature=fff5cb66594709eb5e98a554d3641f7365e194b8f61ab0f47cf51e05055f0d3e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
