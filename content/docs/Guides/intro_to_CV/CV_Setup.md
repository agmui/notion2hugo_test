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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7AUQKK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDI%2F2BwTzqWVYYPLxPPiFTAbAyzn5Tffou5F1jzGcQbVAIgfSETMLPtssvlhZZ%2FdAO7mzPm5mf6JoyjclRDUmW2L9cq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKyKb0KYbzKOGqZMUCrcA%2F2Xs5TbGzK7Xl2Q1o9N1QvYBO25YSjLB6HgNmBdZQDN6n1%2Fw4X5qJPgFVohYNgy6HOs5cUG12gm6OeozfoGe82Jz8HberBr%2Fg8DISpf3dThfmabFcpWDjnQ5HwoG4n0%2BS48VbTr01UQKeOXyrTW36NRgCRM50K90JVL%2Fivf%2Bxij9Kz78FNBHn0gRlUCFH%2Fws9u%2Fk9%2BML5mCyLCY3hNyaFRgfRGFF21%2BIO%2Br2EvDMRc2yZpQ%2FF7cok8F%2FdhxpYfXOODI%2B%2FmGJ6lQNnpxScNHZswo4IvaP%2B1%2Bn%2FE1bSGu1OR%2BojGPhJVXeUHmPzDpa%2FNY9LlM72ILUu7nv2gngtZrXSJgkpOqDD%2ByAQLlloLUbxcjYq4zZYmX1lLFbjMJUa9rT1bl25%2BNg1GUhObiU4PbUD8az2GeyK%2Bl%2BtP%2BTOKdoQJDDvULOa6V7OBwdykB3x%2BG1uvbBYnRWQv5vaeZUv0R6cuARP%2F5U18RRGT7k9wHKuVqUr6e2hzJuos5t%2BlEibOmFZsnTHAESvZ3k1kCvWd5M49HxH%2BVrcew1R5nFOnLyZOSwGIXMgGZVLG1Dr5E0l89EUwA9NaPjcEitWX529xGaycNCqlmO5Xi5BxBaKgkHVnzn2T9I7RXnPK8QZJMMPbJg8IGOqUBLvEiFtvESRNCapwDH7t2o%2Fj2KU%2FIhe2jVTPJed9nHzg7BsOrmZQBw30u86KBWu3npJEhlmEqPbsEmdkpNfk3MUAf6R0JvF3lXQgc9bR1JLtwCtAWmVwvQQt%2FCCNicxRsb7%2FX0cqpes2P0rhtCwJxISVNvPMr3KVCYWqEyM6fKIkbehGLfl8RIPEFpKzGdCLWkCHUaqQUykwo5nsTT1bd70I55fuO&X-Amz-Signature=d74266f14c933f28fc3ccc20b0d8fcaf1f353317a40bd00586473e7936c29a3c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNPVHAA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDqqLwvrkHR5yCkHtGzgR27h5qSVSv2YOj1ISgaRg7vzAiA63tFxPaY3LlltwOIqRgWp%2F%2FYB0xv9uMYh5%2BAG4wferir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMxH8%2Fxr0FLI5fUFpOKtwDeDrMlTEvhADmGzi4ACOixgK7HkZPGyWhqiKDRSWLEugdIqiT20DI2vUrHjcUFMN7%2Fovk%2Fihmrurs7KAxppyxkkYUjg%2BI1zwlPC6pwWB%2FFp%2Fn7PmIRW3x0vfOhGrgIaGKoQYjmpx1Mz3idi0J12CKln%2FdCA%2BFqocL%2F3GuZJClFHuiGlhrUCX6ta2DmKf%2Fa2CCXxYnATMo8tqM9OTeqj2KWY7BXBqf0I4JcUcc1NjnFWIYifHwpJ9Jmy1CuW%2Btq64S6mbte5bKlErofiKrS%2BHR2i0J6pYQ6xs9UaZDSs21p3CI74DvOtDJYmoYytQOjC2gLoKAG1v45P2FWoOlQppKI45gGRoxXf2lhuEC3%2BvLr%2FiVaIL92bsB11kIkOpKfkOLawybv7ehw0cWMCIHAzLzqu%2BjAYzZryfoi5FqG%2F82LfS4FNVbsf4Dh9mem2qNwUni3D2BvYXTKyQpGmzp1KwdFCaojR2pM3ZbB4PYAMLNyIKLdO8ILg%2F%2BSxDOTfD6s9VEnNF%2BRdEGDy1BuSHXz%2BDIhjnhopbj2bGGLbEiU8CWA9zN9Tgg%2F61bBf%2BHKUzhqZ07cq7KICiL8kWiZ4HuHDCg6wGmG72rsKfo7CutEiR2yPSlmfBchPKrSTOmLHIw9MmDwgY6pgFnR2wm9B%2F9UfyRMJekOIhZgEHtaX8qGeLlYOUtcSFQsVmq59%2BYaPsiCGs%2BmDFz%2Fex07tZuNyo5%2BXzbWYu25PQ%2Fs7XkN2AqAAVo6ysddhWxSMNSBi%2F2D%2BbBRVgyRwts0t9gRCZAO39Lz86Q1%2Bn6euwemiy9loVRv8jf%2B2IJmn3ZF2fpVtXczEajSQOe5BW8TZAVjfJZuZYvJ0RUpBMkGK3fEINinDMQ&X-Amz-Signature=3225fcbdcffae179a5e63e3798057d08dbc4284d7b820bbd62a871e30343b3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
