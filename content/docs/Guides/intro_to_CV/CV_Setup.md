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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RPRUP75%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgZFCQW2j7luJZP5Qdk1l7zRgWaRkJj4%2F0nfA9f7CyVAiAoQSMD%2Fl6JRM%2FPMXKd914VTmoj%2BBlDO6kuUAaEUEOgSir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMb1XiwAywDBO6HIVwKtwD9EsX3wGtnsuTnRhLbU8nqxb%2F3XnwF3ViR6wmzjorMz%2F5vSC7pq1OEAHwTB3QUx9YG7VQy%2BK%2BWyTdA%2BbuZcB2oPZU8TEwX0Wwhx7AAwhrYyZe6J%2FmhPF3yKK%2FcNZ7Bd1mvi391Ski74SeQu00Tb3tEDS3pLAR%2B8U%2FMI8cNkVLVzUFz7nuPcICyLnkugiolZD888WdNpxCUClDqkxdmV8Aj23izCVpJr8jZkAhDXQxyb0DnB1blVVWIS%2Fl4cnviKLHssxd93NFHoYjyYFNEk21Pi83BqlN3Vff07UxWeQ5lPwMErJJZpUbjJEYOrM4lP0AxjAswsGGDb006jgiB1DfIrwG38kHqqv2uH3O5ixEeQQ8bFvS55nT0H75nCkaPRFkdEKmSewTOjcnGbL00ZHN3BbrxVJCzEsTcUtR1Dm3%2FSpi9YeRZpqcJ3FYu%2Bho6%2BkcQzDAfNglIhEEDQRYA3A%2BngxyDmZS6WyCzZlxVFAx%2FPYS9lg4qX8hYnJhrKwea1BPVCU3kpHp%2BeCCE4VT2y%2FNaWEptFZ0XBneJwIqt9p4afkwoL2cXtc4qBfadFxVP8nyzDyqk8ILX6U16fcE5eUoD8Qty0HiaAd13BnXwBiXzMOX6rQ9W0iT%2FGeytMgwoZz4vwY6pgFPwoNoDNprpm45EnjQLFGbZ%2BHttKwkaJ1n2UIw5XY%2B6BxTVYR5%2FDjKbmuW9OybPri0ce1TR6qP4HeR%2FkJJNnyTMy8doY97uRz1uMJusThc8%2FhVUuOtBIgl%2FPW613zrSP12%2F7WdAcwaWGfmeixJljVIaGSaoInQl7TZTOR32lG2g9QWXJibTeo%2FnSQVVlOt54vKgwyL%2FIuc3tQn3CrflGZnK90CgCTg&X-Amz-Signature=a5bd50befca04ee21364b16bf207392b78cfd54454c921ab56b0941f61216380&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GXW5X%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTUxFcR4Dm9z3LC4b%2BxuUjuQZwu7ud5dAPf6CS%2FHIpPAiAZE0jbheGRtKcem6RilFrpbWy9Cz1zCSvBWG1KibQcDCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMWTVYKDSGZLZ7ED%2FNKtwD5%2FYr831xkbzV6SwwOl%2FMHA%2BU2l0uV0b9%2FsOBlioYdku7sED0rknUiOyG%2FAFeT6XW9LHxuFSaswUq6j3f0pA1KkdYGbtpa1xzTeRPNSP1rfMJaBfOVr%2BP1rHxctrxr1Az3b9AysK%2FXnMLYoHttBCa1tlKcvBC0Iaxglo7KtSbALMlJd6qLww9pDGPA6Ou5xOC80PCuPK1OENPaWAY1nemofKV7dSugtwqvuTR%2BWENxUvstvLIJhEOgYdtbJLau%2Bvk1v2Y85RbEKXKQQOxNna0eRyK0Lt2jG7xmlqBKzw4WCKVKoQ1O2aLrPyS4YzF1fLAkxlN8V7hURYg5eFWUvOgz27e55hq57q5UiQn6s26X4u%2BNtG23WyZF1ld9UXgN3gjtHOKuqhu8iUh8Tk1RIoEoXIMBjCCpIpPZpVO%2FbetkPzZnY4fnGiumyFPGpfyFqMcvrl0rL15%2FIYKcz%2FaKoRcGdoBFtgBXwxKZwUcMPLnQFPB%2FysQsXN0b0IsPJor8inW6r%2BLH1bHAcnt6hh8G4EQi%2Br%2F8hyb8YzjWx%2F%2BZBDnWuBNj4wuVgo4I1%2Fr9RYP1yh%2BL44SVL8KqZ3p4tUA8L6%2BELP5UealOc2dNkJaSjEV9xFbyrGlfMFXLkN2WaswsJz4vwY6pgE51eGE89fT5Ua3QqDDz6GU5BM0hE938Qfuc1vd%2FUAEaCrdRRde2vF6%2FNuY%2BKs0KYr31FXI%2Figj1Mo8hwuQhUlvjIQnFSq5J5YkG%2FWw9A%2B1AYaqnIg4xvASO%2Bx5zR4YVJGaYn7PmOGMtGOTLHXYFuz2cI1bIvHbHse%2Bn%2BLHtQLGvZQogTffVx1J3FJHw8DPiclUPqLzmWVq3En4qjT71u5zWsxFijXL&X-Amz-Signature=ad5ecd3140fd635eece343b481634e7b957e28546fb6cedd593391fad5cf0068&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
