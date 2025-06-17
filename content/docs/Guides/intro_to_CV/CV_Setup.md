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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQP77IU%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnZqIChNYQl2AZvCxnpDGDQXbyk44kgisY92xbQCuA2wIgSZLx2h%2FLMWnhybgf3oMrNjX%2Fd3b%2BBD6yWQOp3dR%2Ftmgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDJMhZOfbkdcN8fQxNircA9SPbqdYwrTGgjahoiTvhNY%2F1GMv8hDBzyeC8hKo6IVBCeUPnZTRV3EL%2FHTXndecnvJ%2BrWDIYq%2BJYVLogrcH93yQ9FjyfZp%2BM9Z9tS19oykthSJ0sELBrOO%2BFGTJ%2BWH%2FRITHymqTfSYoPj1aiet9Bx%2FGzlbb0jq4klDL07cmVxhnS87U0PjGr9knTQ36PS5zlZuE4RgSXp2P2PgE6lxCyFI0x3OMslZ%2BULpHX9X8uICI%2FnAlcjdx8DTTdsx9kgwvKqnxy1P4PwtTNvnDn2IRWL7uGPZdPxUboEo46CTukCbnpNYpXtukfoqAmm2FlrDdMjhTEh9jRmhsYs5wpVl%2FK0Vv6H%2B4F7gRKMzwue0ARQovqL7nxx%2BfHd4YlY5nILFxMzkxDA83%2BmEzAaxVGSEuMxOM3skleKwf34oxf%2FRovxOJR3r3mcKHKXEph8QMEm4eXKvo%2BQ3WMJeapeLPZ8IyvxNJQk9JE4g8NiDr%2B1ZhxIeRXVpUff%2BjN373BBdyeYaO59A%2BLVl2uNBUhQdYxqOQqprhTi7oVoC7db%2BKToFylaC856ONB%2BJk4qRRn7COlW9ceSLFdqT5TTIOpkSwBPbKm2AzTUuYlgfdRYzHA0YszeDtLIz7fxX2qmFhFGlPMPTewsIGOqUBdhnexs2igBNOlz7JzdJcXcIFXCWwNOqFvWYfyWsVEEFERpzJ0%2BQmtj1DoxmYlCUlliLk5UuI%2B62QQj87VbP1WSZjD968Kal2R8qFbvC8FMzXlQQoWffRMundScmb%2B2IoeRJgdkLp8vIjGW3OruoKEqPjwDtoyuSOLlzfRjqQSUlSXPuxARMoZTwU5WKABht%2FLDRqTTyohqfJ7MbvQINkdK4dqvZp&X-Amz-Signature=7613d073aef03c29216d2414e83e4c77731c1800db505cc95b5730a76e12d376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRZCGW7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUPTN0JvnfqqZ2hDdWk7%2FG6zC87xUE%2FwVqTMSaRcyX%2BAIhAOSySG7VEn%2FopQzX43yU2eY5XYTczH%2Bry2NNsai42GPcKv8DCGkQABoMNjM3NDIzMTgzODA1IgwMV5YJD4nGgaal3Tkq3APepVJsbl1KhpYiHXg%2F%2FyrkJaOPF1tfA2wLI91fSkeHsfJKyGYTfirUVd%2BoNsZJcrWR6t%2B5oyef2IOrBm2dv%2FQGeztnU2QF82tMwRhhQsfFFd9DmnJQWtxtvCaueEXOq2h%2Bm2OoGgNMpaWnjXKeFWJC8GT27%2BHJ9Oy%2BS%2FfyclhHXWvDEy25ZrJNMn80zTybVk%2FQwvnGjijYrYqn52L%2FRe7W7OiYYHsKB5FRPQDUowi46kIYjQQi3AiuHfXqQkNnhu6qcU3LBLtapRDdqCvEL7v0KdcOLiVMhAWVy9%2FgrxI3ao%2B56OFJD1GN3lrxlPQP6zj7pcp%2FaSiO9VZru8Dj1bwN7v2SdAV%2FhNbjpJtk3EY4eiyNLL5BWtYCfHdaxEJQnkI2OxkDJvchH5Fo%2FEnu%2FmY7S%2B2i5IdmfVO5PZxQW%2B1Xz8N5065KsejexXO0egw7BYHyPehqz7pzjRZxncc0tvCt4hQT%2BhX1X25Ncc6eEDrGeCthOeF5ihnStAuwo2iLdf%2Fpm5B85LWjgF0yYnUTCwhHBMOtWsi3TB34hACbsNc8EROrXgs2UAtlB8%2F6YVrkc5lK3VooIOnCY9vJ6YwvwstS7%2FnVS5hN688GspAXHosBRXIsHLkHBp7NFpu3nDCx3sLCBjqkASBbd0CJj7NR8133MwQq81Oya6k%2B7wNa3vAwzuO26J5D875DfC8HwcY%2BicFeABe2Vs3xkuKhT453x9utEreIQXr8WZHKoIDnUILYhZiHJGbOseW0TJ9hgWfonF1DYeuvC9xjtKarLCQckHFzAXruTu5C31INYJcukZQtmzXf9Nkl1BmVePyDCia1UPemdb3XzUGrHKuJ8L3WNXw4jqyN8sE2%2BFaH&X-Amz-Signature=22dec73da96458a1d5eebdd6db5edaca8fc76f523bbebd276da4e19c71dfad77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
