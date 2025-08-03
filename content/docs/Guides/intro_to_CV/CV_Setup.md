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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXT6RE3J%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID85NvE1y8n%2Fz57Pz0MIjhQmB4QoyMb35PdkHadMyXa5AiBiJ9ViZamEhRG1HUYdUGyyTSZPnB25BfoCXeCbtnlqtSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM95UtfivpaRU3jZMIKtwDXnHVD7DY0%2BWrtB46uU0xo2q38RDe%2FLifxWRkzifeSvPfATsjIqOAOw%2BWI%2FNzTDIAofCbfiWyeD5UeHK%2BYSFj5jthOmgidjSH3DT3gNc3KQmKohp22Zv1GVhzhNYWH8mKzRJej6lhncxysKHalgJqm3aZTloVtrJaOdrF6FaSwDG43LgKA7GZYMo3npYqskh4poC5ttPVHvdNsB8NlwK54iOkdO7FHPtn4xFpX7%2Bhy8cq8sn2JX2cBLnzARWv%2BlztQNgAIMrEUUGsNdSqIdCqOPqbPfFxuRAUeeApKyhwlS%2FqPmRyWYeBRRE%2FVvfH6b3tunvKgBvbNVD0D%2BlmJ%2FNsa6blUAFMvRPX7TbYDUEDQDsrAn4yKrdJ8uzsgQoTwbCf%2BJSqiRywXId3Ki1JJunJTf1f1OU2aoQrb2QL2ZILjR9RQLZCUhOE1ZBAnKVhQxxd0HUF%2FAQQ88YK90xFbzlDhUUxdbnhfVORIj6q6lSDd%2B7eZ9g31qhUCoj8trkoe4PwCp%2FiFXc7pR%2B6iYO4EHhPyGsGGSgGRVmpyqOGk6V4Pg0CY7l%2BZRQb%2BDeiko%2FnFX%2BbiRC3HIA8VfBmvcuyvaC65%2BzEwore939qIu0eWo3AUq1YK0xd0PvtC0topsUwoqO7xAY6pgEHuF717shZuK1cQoWK%2B8qjcBBdLTCjtDUFW9g6Qn7ENqqC8YpDB9YIFkMhPAGHO1EcYGTOzTgjXeqKOD2UMJZ7N%2FXtihD5owmZx0qy0YKTgA5l8sBPgXRnh3zfzbWMU7ZhvZbWYTzsvvJOv3xBKrofKCEO5hahYV1dNyI%2BdkRXJ0WX1dyXWFUlXBbfydooih9HMkkh3cBgc9mj9c29pV%2Bd4xDEjp2H&X-Amz-Signature=0b50fbc2ac8ab32b84b6ad946df454b4d28c0b2a4c26dde04b569dffc199b23c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM4MWSZC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX76BOE2j4nLCtQKc074YgU%2BmK5k8RMOzLJldynj3t9QIgL%2BgKhfedhswmbIWombzgtsaahI7iO5JE%2BCgY8etr2swq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDODNTUFws66ruE7K8CrcAwubejfhqKEYxV16IIBfoWgAcL%2FOToN5SJN73Bcg8hEqZg%2BVvsuc%2BsqCk0Hl6QfYfKQcKrKwCWinGwFwq9n1XVIJY2IjDV9SmmrrQE786mRkKDwyVWHxqR47CSnfAKoDvP0r29JZrs4W8JCtl0n9qnSmpGasIFzhUq0oTixsGOShMHOZh5ooyaSzv%2Bp3M7mxkyddglYozMCB4uQuTUttc0leFyntGcLAvwcmIksRSvdyFNm%2BRG%2FNaVXFf5SU2V0PnnehVh61W0vxrXjSnyfk6bsPZvHdLuf5t1nzzRFZ1NaBCsh239P2DWoIQlKV%2FNPlYWETVahReoqMPhzFkohb27K869dNRXhIXdE6BWQumwCS%2FiQzyLgNnohEItqHpqqTo32vbDot%2FV9iV9oUwXQAYbfPf8j3W8BbEFVB6h%2FhF2F78GLr%2B7yzPBz%2FIG10%2BhdYGj%2FTwU%2FyPbayMXZFxUEYWtvSZIu955rdC%2BwFl7csJCtn95h7E3vcS3iHTB%2BSKYIyTmpLapDD39TYFjbZsZqTG3YMpxUaErnhEDAfhKyhqVxATqmxb9rwZbhvsUTiop7un1GJdlbZs065xIHZ%2FQvxPvTYF%2BXAtaiImRyS%2FngMDmcdfTQustPe4MMMvWnaMJGiu8QGOqUBlcNb7hCItfa9sHczwSRSRgZbP4rKTicycI1Oad95kT9bzeCsJUrTbowIhG2jRb28JKLzzqbf5grrOXDMhZiviBoVQsyum%2BOQ6YMkSm%2FhtuT8%2BTWTTt3yd6UYeV8BSriEfAZM7Pb4RFqu99u9ZWhmErMecVzjpB50%2FTN6l%2BOBn4u8WPViFAExd43S8fh80ezuYqQvag5aoLnD%2BvajUGlXO7eAJfqr&X-Amz-Signature=e788c84bda55eed794d2abe9ed59c042143682769eb09f815eca7af3fee8b7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
