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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JILSYKC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0eQIlTCkAiTISuK7Lm%2Bs1BdKXHGqvLsJBNTDL43Rw5wIhALMGEF8LWQAt%2F1u3maV8BfWh%2BuNoUbgxqZ%2F1Ds1r4msGKv8DCCcQABoMNjM3NDIzMTgzODA1IgwTIuqCObl0KJCDF9Aq3AM8Ahbxk4%2BJR8xyJHcVGrrfH283srEtRCi9MhztzA7WmLVd5LwWh%2FqLUTSFCm2UAzWetbJ2RTUSBQLhGkucHxFNZuDA9sCc5JzI%2Fbt0GaSZt2n9YWsVetYAuY1cQMfeOBCa6MA3i1doQ49u76oowIY1V6SbY40xScK%2Fkf1TFuod0zailFiEqeAA6XpFFaUjJWydUFKBhDOwMCR4Vgzn%2F0U55yIKH%2BNU2jeHvR4CnoO0mGJvn0BJMwPeIhfwrxFfcN%2FpN%2FHjCS19nwO%2BWPClsKDzORxyN80iUJvWILtvvqwER%2B4NuycYgJJkUu92hOgrPPk5PxAbJGiFsP5%2FqpDw06OnF3GgXgbpx6dJfTSXKvWoqolthDGvcaK%2F6cUY1dk1ZTZQP%2B8wr%2BgjaGbzP99g2T%2B4Xs%2FvDMb7EWFZR3B9kOBqJPlR5sftu%2FCg8el6z9bmApRROCzaQfbyfz5POc%2BxsZZyq7WhctxTExpxczeOzwlC6ZLNhrvhX0FbGWv%2BORPpazNHmj5Cbe%2F62yifUvBd3ZeSHCeMQSJh0Al8HQkBJ6m3b0WfQ8p9th%2FvnL87prG0RHJBnKU2xvUK0c9gQ4EaeTVZcZhShJ8a7OlIwjSxN76Dmnx%2BYSfJZq5gvfvelDDX0PDEBjqkAXX1mxF8NILT%2FtXMlE56xA9wTHW%2B%2Brrcdm5jGwTrSoxQncMJvVUqPOAs4n%2FehDbp%2BRFGT%2FKl9GF4PXPjIHHseuqCIOZUqzRgPUk6BTGBudZ0Gg2iPSBdyttgmGDYMkuk2%2BqYCzXI4ciFFnAwXmaozB3rVI%2F9cexdzu6Yo7FdVGbg506jHT8e8bbRhhuQZgXdfO0lmg3SZsSG2GgPfiJ88H6cZ82S&X-Amz-Signature=297b36626a617da046f8d44dc8232762ca50fa748a3d017be7186085d1474364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMNJTSP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvUGJoHOKpqLgSIZaJXTTCc%2F9oaVUhX%2BGgSoRxPlQ6QIgZNsyGi5bDCBxdAJPgLZCcvEZLjwglmxL93JTH8yBqvYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOYLbeC8w95zijf4TSrcA1RYQlLS8C%2FP%2Borps37K%2FXNIpMqz3DaB6bSC3AGMIZPtBR9GmsuftQ5qc9iJG2XKTKxOquuHxu8Q7wfAyRZ0HHxfeE0ZazaeTt1qwJcXNZVu%2BvOrphGXPj%2FjGHAHQs%2FnlEu3w90u%2FRzFhK%2FXBD9nA5I4Te3J3EmJzUs1xMVyaujbNeI0OL9tlda%2BORPIunZekUVV95l2Om7Qp0w1QDxsSKwb95%2Fh6fXB4434AV7uxMUr8zLMxMze208ZAo02TF644mZeKQe%2B9Z5tJlQcSXJKOOkrPy0NpTl6WDCwph%2Fiem6%2FqKplblTOBrd0kcjufo5rgsd1ZtndeJ%2FngHCKktoEXbDBJjK%2Bh0xFT4ymCj0aSrritaivTUyumUVYni%2BpOMHrJwRMazMkVaN%2BkxJclncvfnqc6FZjwQrEsf6FqeRr9VvMrMtOvKtz75ynctp8vFHd5LnhXhac%2B9zpasNSiZEt9lqh%2Ft6fsb7MYgQkPWdGAV0VJPk6cj2SNYXoW9YxJh0WmJHwcDtAgnEdyDhDFntz48XbNgOYO%2B8bNjQ2QtzD9ih5nIMQLqY4f6bihRNTqNdr8Hl7xWpLGVJiPPx6R7mPcMoPrn%2BZ1nZMsQyn2JIiNw%2FGSNQcWhcGPx48WTnyMO7Q8MQGOqUB8wdYVG7jw%2FXHK1cpYs93z0UISEFeNEI8W%2FiajP2NeEewZOUazSua1WhB9brnYFE%2BfVWA7%2FnJLcluZ5u1GXq2Xvg%2FzWH4zNfdvGc3E8AdQjpbB2dcPtlWgXZAGQ2%2FBGsZRtQCWSvsYtfCWZ%2F5%2FendCv49M%2B0TJ5aY34%2BI3VHZ1XY617kFdYcQegABwe0lLji%2FUkXI%2BnQwAR3BD5puTI%2FzSaXDUHOp&X-Amz-Signature=b1d270e7d89935147690a2534f0012196f0363389cc54fbe085232636a2e0f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
