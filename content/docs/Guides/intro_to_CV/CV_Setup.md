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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIGROZRH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGz3KFBO2jjHST3LprPyFEUe%2B2igHFtX5nKYmqZ8TENfAiEAyshLDbx0RKsDIU%2B5VTGjl15tvKqhMDtlIo4YeB5UclMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJgwQVPtko7%2Bo3KZqCrcA%2Be2YIkM9XYAOjBK1h%2FxASLesq09UGia0pGp6L%2Fy1nVs2a3cxNhwHBxTFGRausRJDhf6w7e2zUiSpZi5rE7FpzTRZC9PeCtX0%2BzlWeB3vTIVYFiOy7VSwxSqkEP6Mi1KwCHOcL3wO1ZUERxQSCa7KCzHawY0gL2e%2FBzLGgsrfeBYSYwTr3PY2zqqVgaHtrJlOJm0WsVbEPp%2Bjja91UFZ62tXilZYBkjCOZlgJcGrtCgmga6uKefWfIOnrNqr9qRwpBxHSbhj%2FbLiCnG10nuxbxeShUPWZkPIAV2q27bfRf4vITcQp96y1bs%2FP24ZxR6Rni41prXbo2Nqij2n502rX%2Bp4Q%2B82PY7fWP%2Bbgg7u%2BhxHpkExXrnscGOSgUKY3%2FbRij%2BF9cJ3xfrLUAntOUUghG4DQ1%2FKgoMcyFp4qzL2xKD8VzZ9dqWz9QMc4ahV%2BP4OfejBgi5TC%2BXYZ%2FwURtfNJa6gV8pmV3G5E7Vw9Dd7YqKFbxj7pcJnckXeUj1yz5GiYK4isukgf7huiCudKoX%2FZnTDEFz7YDP8T45nUcttLbk9HMaWEmLnVefZMfHy1hmOTCjfR0GtCW61lyL8iCNGq0Bizndh2sx4sogIU4U69W9jTDUohs17EhYlvcnZMLSmwsQGOqUBSazp5DnKYmvEYHMQzrw%2Fe6ZuX7UtVEY7zeFRt%2FXiXaWm1swWt%2BoZegpZAkjLSsX0vR0AmFJiCsGxWsc87vyJtS8nflptmsnSvU6jNEs3uoBBAAdZWso2RrS1MSzQnLsJ4jJkCm%2FcKi7oKav40l8Szbgg3QuWFe3n%2FTxXLbjw0XsiDEshiKGywGjJZraleT38cy42cj9hXRMtmc3e%2BmAbPDpQknM2&X-Amz-Signature=a6d1c9a671797cd85ada8dcea1f4a5cd9cd8be8dab5ee7541e43b5b0313a05d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYGVBYJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCypXyaDiXYidPnWXtWMspbfIwHw32m3Mofa2nuqzGmaQIgQB1WipqIvBcPJTHc0tZCsb6ZCEwOsLkbqyFuV%2BjWkEsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFt7IgCuYwG3ZjBzUircA8rZ6Md2Lmj8zjtPMYms0xKCuGpGZfh9MsEsVsYN8pKDLMZzpeYslpm5USUSPMfl3ZeEqFdWfoJPkGu5xPRxOLH%2BQcKzBbqKDumerhyJHve9iDSgX8CK1aatQl7kmZir%2FGiB176P3GfPExRwNmZ%2FGgiqo4Mla1IK9ScnjC46dPpaaGay1G9R0%2BxnOX1kA9opKOEbcWXIo5g7GHXD4wRKat1B52Aa8rWQIuMOmo%2FPC325oH50i0ovboYpLCJQu5oub5yzFEkcgjoB5Y6RqS3x0LbK7Bmmqd6G5Z0%2B6tFu2AqtMO86MDrc%2Bfv4T9dxzjzIGLkyl75HmOtRqnAhHzCNMgIAMU1bxck4CTyOpamSnwVbRTT%2FVKFrKHtrGW%2FFyt884hW7U2uafsPOfwgOYJ25IhchOjJ7lhl9YhTyiomcPGMVKdKTQ2MusC7ciIGncj9My3dlfXWh11QzSzE9%2Bh33MoXuG9I42qH4XxZgTL4%2BmQOzB3UxPRaLJt8QAFG%2B1lTGH7SzvBY1UszuhSY8IwlYsiqnhUGBs3H3k%2B9XoDvEpAJe1l9I3jRIw7xxjXg%2FMm1sSO71HQmYBsKjppG0sno%2Bwfv5vhb9d4dAklaLvZk7SUrH5bROLklEYHyUV5kDMMqmwsQGOqUBo3N0za77lwouXN2iQ4ecjVZQNJ00ZE4U%2FroIRYoOOFZEjG9xMBfo6Fj3pk0iQbbhdBuE0Z6B%2B7zHNJ6JSWIuYuCO7p3dNYFVs7jgF4lC0t7T5soFBGezX%2Fs0nrX%2BFksJ%2B4qhBR1yfOjgl5G8b30B5bM%2FKlxAWCHg1WNCu6AB1vStayszWkUZ78NZBuOMXEnoliy6lSTaEM53YICJGFi346Je1uwI&X-Amz-Signature=76e95cb06b14f3c96e044af29e7d1d3b41f8c13bca722ff245b2cac5284b08fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
