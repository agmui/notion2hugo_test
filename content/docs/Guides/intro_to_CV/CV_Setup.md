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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHC44PIJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCu9CBpiFUYOS6Mmvbt80TgxTrfa0fYbey3RztJvlPstAIhAJP5wHZ%2FOSP59CwhdzgYjVNGH7lv%2Fr0jfeAHbg74IkxhKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyByO7cMsRilWWhfXAq3AN%2Fql3rn2JpBA4pU6vQIj6X7Q4ugpoWW5PXdBkd77XIz4CDQfQHZ%2Fv1hr1vu6jzTHPENlHauwCZYkDf71tCjIRGuJkrhqgtTGA8geCo3grIa7uhE0xbCxR46kjnWLb5SxW%2BHvw4%2FSgfYNQzmYFgfwEOi2Z25q3vbjeXCOVqzjfykpcAof0vw01p4bDEO0lW3sbczmG4GpotmNlx4EswGOzCii0SSx3QyAsRRUnG28i3ePYvOJKCZBLBhDE2OnglvNi65GArEHuBuMRHkYk0TpdWg6AsFb0mMa3PlNvTWFfPUO846d6iZVtTAxaQhYo2WzkMLn1t8z6JODrYHug9DZh4EkvVRXay57Zaz8IIb1djN%2BlYoWt8j9TGR8JyvZVHdj5r%2FkppBq9NHAW9fqKxRtAHZ9LwM0rQOQ1d8VpWenvPeO3DkkYqx%2BjUPvALd5nleWVpQXRTsuUk0bC7vcKWd5oz78f0nJFLaFuq3avsEw77A3MPRkEFbTXYuM%2B%2F3lG7Bvsff5ejOxfMXDE21q9dnWw1ALGvwxkWWZKWcQx2yad5UCYSnKpjhH9UqKQlHqnJggbv%2BOl1O9tB3o8DIRVs17aq06ecaPSlJYpoUkziYZSJN9CBOInhIgMitCTjpDCRyc3ABjqkAfQLv1ECODRGsCzTdwy6lTaVpf7Q4H2yHPZkBY3GU%2BIAjpiiwIatIQujIfk%2BFjDosEpYamqL8anjAONokTGsKGB5c0xyBMzMFDVlh92CUQ6iUKv%2FrAg1idAs8I3%2FnmG5GAm1OF5VwDfm7C0KpTPeiNILGrGsSG%2B3pATOrUCaHRXujqADkwzCoS%2FuCWTIf84vM8CkutjqDiKH8Q7cF6rOBO5gKrYB&X-Amz-Signature=e3221e17958896c42f256a63d08eb5b4fed308dfeb18159bb02e9dc9513f9ac3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRNAIHJ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHoal4y5uXd%2FQwGvhzX6GcygKMNfcHvPakGh2yIK1z3TAiEA3fbZozkPSutcqpjJBHBW9GALM%2FWL8GZG%2FWpI45sgEkUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9h22k9XyMpp6HVECrcAyyYubgkoQhnMlq2Q1RwI5q1PiBg9nzCrlSg2n4ElavkNcZ4k3yX1E1ne%2B7%2B%2BwtwRbfrn0Wz5zl54anGoSCt4edF8xWnEfkxRndGMpdyr6Fuu%2BmqUkGIbtesPBTI1Lu737l4Gt4LdzZ3p4y%2BcPAzJR%2F3pOfO03uHL430lt64AefOD4wqpMsIjZXxIhsth78WrXiAbyEra1RNseMUd68OEFIIuFtMn4L%2B7iK39%2B9TecbRlnz6NYfwNwEX4HqwtqlMm%2B8K8DljFp4ykQEzoUSGJ1IymPhEIheTr3w98cW%2BN98gq5nOk6617GPzyUMULxhvY88eMbw9GT6QWA3N6wq72%2Fgq%2FuQrb3YkFHC37gJyU4gCItfz3xTogw%2FaSNuhhO22eHlpx9Xdp10AQPInu5SHX%2Bus43p%2FDmxij8083qr1UdaIa2tXmFxQ3Q0UoffzBOQvRlNWZU2AQDX3GuETX12Yweim77eSbIDp%2B8mRD4yJ%2BWPjQk0RD3DBdjru5PpyfTIKJmqKbHbJvbIo0yChWD4WP%2FRRZtitUwbaIJFvqJM9iq%2BGdvGdKchMrrqJRkPaSJLLR4WONT1zjKUKrLNtus9gU5dWHPZ5gRpd3uIDbaJdGbtkb9iBCE5j90WRmVVqMJLJzcAGOqUBdFFDUwA9fG9y5lwWbJoZJYqwLj%2BxD8NA%2Fv5pCL%2Fz1TLhWPgwi5xeMNQM6DFkRMGWeewnazNimxtovFvdtBEwcdN8C1EFdPEt0GJCYGqUFJTeEenRKg2ruxfczBVepDvPHkeStMom7V3qLttHcDLWQj760JWf41wYl9JCPbmByeueEjgd%2BO8yIzYXB5lWE9R93P5H36kaNmuRdM2a5HEQzq6q5mtP&X-Amz-Signature=7a7c308e2f35b9f0740d60020fac685c2052a46554044dfd634fc8b140146db7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
