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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SU5BTRE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX6QKzo7W7fcQu5Y32rSbxOjcSHPSojBn70XzpR3rqkQIhANlpYJBHBaCdKZdPkE1G5Z2tsiEjpj86QjnkjHtlDrD7Kv8DCBAQABoMNjM3NDIzMTgzODA1IgzPfOtXJ2UEQJAbAMYq3ANqStd5fB3giLH8uqzYX8UpcCuKXhWdmrVMxbIGutiA0DpbLaPymMv7VL9GptKMJ23MOgNJvmJAOgjF1Kwo74bI1AIrEk2JIVmIVAtwzlb4VBN2YzfsIoY4yOv50QR%2BhLccjCJdh7KWB4Sq8xbB5NqLLoeB2k8WbZCaiq81vyAC4hjnCCzbuY%2B0A6wBCGXF4%2BCMs4GIwfX8bEhCJdl0RzHbUmIoqTvVw6vDdKZ9AAyKAtSwWvD%2FdqDqpH4suUojN0P%2BGC90AWclOxoq3pS1OWXKG9ShaaEJnsOA%2Fbq%2BptunfwXjcCPEicMiTcPyEZi5dMn3o9dFGYkUHAnQbnnjNzv9Ra4Nmur1dA0xh86yXce4%2B9rprAALaiO0%2FK4V30HjpzOHKsFk0tXLaAAsCVxmQneftOj26EFR%2FekVFdVt1gvGR1U7%2BUCDGJe3QHYgR%2Fd%2F6K9tYiLhvvYW%2FTGg%2BqwIxfMcCj%2B%2FwlHirTrldJkbWoND2V9w2ftJxc9ZDJztNsT%2BhKCsn3t6PIy%2FfX9jGH10sP2MpcYj6Wzmkp5SJaYXnmCTJqSbT3t%2FEBEGqJNDV0znKnJkTJZs8Eh%2BVjHzkGcMFh1vlbuGe08174jJiqtW73ttRitFZMNYTJBBWEzd7zC%2BpM3DBjqkAbFzfwWERPuzGzoUzp8vuaTshmiIrzwLNF904OY8BQjI9og%2FxIUwhe0WeKUXg%2BIya2%2FfexbjKEk%2BRj5BZKDA9l9wygy7wL5ZdIjAF8LxzkcM5yHFhohVd6tBKRYHKyT7Qxbdh4KpsSa7H1VCRjvoHmqXvisGyRBXCocqbD8BLrdd532aGuYBLuKDZvOb%2B3njMUgvOakgI4x1r%2BpU3zDMBSFvUFrk&X-Amz-Signature=3c510530fc68f39d8f7bd144d5ce172615e6dea54c304afd2695c94b68adf7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ3VRBLV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECSNUnWdEv0fgaw2x77TiWm9O5rHpFwzyocMRyQkmjcAiEA5r0AOWPHCmdLeLIMMvNLZvNyXR2jVpPFvPnMZTt0NDgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDEXfNeBgdbhnpa9%2BDCrcA2kAahEQPr%2FLVPMUxgFfM9mQAepq1xIrDbYfJ9%2FVtDpIcZKWy9IeyPKQGOEmXN4ZzGPMb98WjYBAl%2B%2BUt53ngNgPR2lrJDQNRG5e%2FB8sH7TV8kQxwCIDOMjmG0IVW1jFOoyOGYClWNDEI4LIZTR%2BaVVDe3IrKyOjeEbEUcPc635swBXHP33aX7FAFPNZiZvlSMOdrff%2Ba4GlAbHAkPkr2VfxTEXcf9O%2FREglPA8YPIidyJgZEgtdCtcrtu8EuynHZr5yd9zk%2FO0HpOuTPpGln5XwghseFpbSniW%2F0wA61t5L4iG9iw3estdRQjDY%2FWg8u%2BuV8kl0%2F%2BC8OUACBbpZy137hP1iB90WI6zkPI2EcxP%2B1wiSYjPmhqSX35voOo0Ys43KdgkU3rw8wpE%2BxmniWucCJASUNV858TqWeuG7F8QO5Vd1cdn3UV7HEr2u2FnOq8hAodcVSc6SWEFr9PbLw%2FtuiSRuUcIAnw5C2sGM%2FcTW5%2FfwazHt0AjqPQn6GoPB14Vp7Guo%2BQKQZIePxpdnhffXDmoh79N7%2BPntJDBStisFYiUg4Ts7n2vNLBAR3zB0Cf8X%2F1nirCqEbLn0irOLUwAOf3qKxPLU38asOyGCWFyip%2FbT%2FC%2FMs4buGiIGMOukzcMGOqUBynzpSkijY8tvUbvrk2Jn966XllPNhOafkUYuk3nnu59isz5iuV%2FxaapNz%2FIxroKYreNuhVZonamwgv9RkGjjNumwh9i50i1lNbG5KALUNlP6VYoeSBJgbRmAc3Bbkx7%2FwcXEyof0nkukjxOlqsY69%2FDb0XE0xHGGL97h66wgyGt%2BSZ9ojj%2BYTmyzcRBH5M2l89Aek7bzBFTsYKwiteqa8POd1IYb&X-Amz-Signature=83e28f6529e0257867f300f6460362e2407149ad50f58c3defc5eaf61f1e0e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
