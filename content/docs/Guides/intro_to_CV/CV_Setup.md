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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXY7QCQ3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCID3Cgam2dgAk7vghpq8zpf8g0Qf%2FoX9k%2B%2FN20K%2FOXdc1AiEAlkuOMjGyt0nb%2F%2Bl6MaY5VhBeo%2FrKmZfZ%2BW%2BKLl4mxAYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLmvWqAGrKBa3%2BvcVyrcA9P7qHMu4i8ZPfIET0Y6h8G698AE1Z14A47DAg1Z0IWAnvG7rY6lq9ZHJwUt3LDyiQbfae4PnRysW6WykDknehrf6pTsB8%2FS6hJMFvAhmEXlGlA%2FlpIuXfcdJDuc77pPLU3xjQpq762AjeFoKM8UJ1XpL07GEOiK5dqOE2CineIJknN07CqzT33yIvNoHk1vfJTNsHt77ZptbMWfZ%2Fc2BIuYPiO5n3yYZvGg%2F7FmX4HdMyGvWqAZ5g4SMmpH9j73cECItcViySQGqs2iyEV0fQ0KjHyOmu1WJz7hOWYAvOIYbf3uIcsp86I9D%2BiYiMgKDYD05ut%2F4c3xiLm8Ftr%2BwSdJAzU4vg1hpo9Lj%2FYpKbkRqXr4D9llNxcoH6uYH2Vr973fHKQCpn3wNp8Py4usg7PtH4bOkuhZV4G4Ra4Yybv9EUqcDGh9sduetx65PjvQN%2BMiCbuz5uLnbloBpHbrCTUuI5W8iB0onEMAQXZ4DdnGVufLXdJ8CwYsa0xLCjYGwPkK8sCr%2BVD34zXEM8LnPJmCyHCwd90bv7TGIJrfUALVnapYMABremMmdNEpeKuSm1HGiacC8gTJcXWAI3D3ZrPCRlLSgd8P61SXoVlfQRkwPyDXPapf%2BqUpJMukMLD36MIGOqUBNKcBw%2BHYW4%2FSakqP2Io7YYC3baesLrjrFytU%2B7KSowXEFz2bfTRG57zmBgXL8FKDxCwUtPO5Fa4G4SR%2F4WbKMoakFMRI33kwFhNCerT7yXMZeW3dVrKV4Mij6cWYYFDpTXZKC7iLVmgz2BAGeeRXLE7TIMN%2FnHBOZlLP3VxrR31pp9voTtayBFnUcJGCfAkfpRH1TT4R9D5rBALOW%2F7kcXOqEQ7V&X-Amz-Signature=30b65d266d4ffcbfd864aeacb80f7c2670bbe01f1fd362de8b40dd3b9c2034e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCYNMMC%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIEM5YBvCSm%2BW9%2BSe%2FxErXGqckIVoL379fjaqwSxm1krHAiAerACryV9J48GaQQ3mO5QWt6ySdKkK%2BZryJjbvHk8Feyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM3RakoJZ3FA9tpt4jKtwDgfs8L%2FYFDvvRZ8FxZLNrUX5DozojCNeBDY9Gnp721%2BAooYQ845CuZcoKzjcCKEQHRmxNtBI7swh%2FVyr0GLIGv%2Bv7JWzQ30mxJ%2F%2F8QQwuRa6yVD8sBzsJkLsctGpsFGDS%2BA3lsFmpumxhv2y8u2Gc2DJFLEXuHI7lYXX5FWzSWtNAVY4UtY%2BSSYnNemMLCIL2ob%2BBqVvNMhzNzmMICoZqPnG8mbm90LmgsUlDXkAAAJzlawTDGWE%2FQmvoAI7peK7FOzXb9PGrPpsz31qrBYLyzPISoKkL2P6P0C8V%2BHcYEg205tBFf2en9rMtp3h7j2Sr9CiAAWu4vSLXzrw2DUqkCETOvRE27dDZG6CKycsVFfeJZqOdJSFf%2FJh6GNVMGEXhtyLnio1T%2FB6P%2B5wRjMpL4iXxbi1AV1GQQ2XR38f0ZJyZcLuCCHj3x21TmO3yJT46brs3njVDJ%2B6zQWEdlC2LqZcEnStFbOxivTI0oE7TF3y6MpfJ%2BoJ7qN0%2BAwD6TCoQtJsWQ7pwwp9BynFZKgXWt6nV%2B1AeuifOyrw6T9XuE4xrplzpG6%2Fon8FEWdSp7NMUjrIdRDyou80%2FSwdvUngUI0qktg6xtxuE6ynEXmFyoYUbJYjSaxunh2%2FI0qowlPfowgY6pgHWa3NS6UacFiKZbqrGi69al%2FcO%2FKg10ATizgIHQCgR%2BNjk8RPWxKoCZdvwPoj5l1hGVoCirE3IwDvLYOi9YkWxgIPosOhfyeilnIYb56T2qY7TQ11Q7y%2B%2BL8xdUFI7KxFniPmQVa8fGA0Snbj8vDWgRiPWCrx77Xlf9LRl1oWCT1CZQzG%2FYYmdWfKLRGc2kLIzlhXeWuIaqTsZMOvZh2g%2FM6d5ye%2Bl&X-Amz-Signature=c284c408ef42687b2d627f1f92ca6dd80812b920b2acc96a17f320154435d8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
