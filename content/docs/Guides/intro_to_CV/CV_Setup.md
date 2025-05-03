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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TORPVDVS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCBFlbpPfUEo%2FmU55M%2BKeXgf4vDDATsqH%2Fl40jwb9Q%2FUgIgBypDTbihB0ZZansBIinA6gOkhhzDF8%2Fq4SWX7o3z2JoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFy7rgjjUMYtLIVgIircA0Ntufd9dn7SYViB4Wj9l6uTyJ2%2B1Fnc9QdD8X24a%2F9CjpfbMm18rSoIfhh1hyW8vHArle%2FOK5SDXiili3QorKQAoBS04YDjWOpmxAEBwOwl%2FcscIpdtYKSwttrc7YjXmOt7eUMilZbJzbCOJgOk0VhQTicIjj7DiNtByFl1S71oOYwtVgjkMSYMatGJzmBh8j8gwEBL%2FVc5j6fZ273XvIKUNwOV%2FSpoQ0DGqO0Pfs%2FOkQaGji8J6ScW%2FFDhYHYuxx1a9FQL7bHo7oZu57hnD9UMehqkXyH7vws1Zl04B9V6lC9EGruiYK20b%2B2lzNI5YqrW2QxfsEuf%2B6GhopzOTCeYKZOD1XgzXRDidIcPBU2V%2Feg%2BwOWhgOaWpsZmKd0aSMN%2BskrEt9GQgFA7FQaGGc9ZVDsl7BJ%2BxpBJOb%2BgKVxPe%2FRq1lF5ttjedvW2aHYL0rH0EnrKCOY6sOrKD%2BbWXAIFnBf9MiKeHGnhj2J99GddwU7IhbXSOqSWGtGSZeHBuYkIhlsA1%2FDNA7JyWnzKbjmoHfrX%2FCAXS2%2F%2BfRowRckXZKjd1AzqX1YJXiczKvAFTvmfg9xhTFZjFUw8tTgMdmNROnaKbh5MZClkh%2F3C%2F%2Bug2ZHDshR37I7I5ob1MPve18AGOqUBmwWBiMF%2BdlgoncdOi0ER6AHUH7KFWLXYhwLxOPlHrOx01nQf16KG1uvyUlrcOQnO18gBhTQ9s01Ne5TVimY5av2MTX3zotFhVOMy5QD0O4xhOvKz4fEmaKDG%2Bl6ZaeIzoLMlkzrqEi14cmG2Sd0IQN5itT4no9Wqq0HPOQc8E3pxGLGFXxDU7B1ZPHtx55At%2BG8cAeQCKbFN8fQppzSVggV6ue2%2B&X-Amz-Signature=e59b56a5cba1c7b2e7813a00d7b9bc20a11fbf1c7f480ec6e03fc3ec379dbfac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLJIHZH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCjhpXFOsNcibeBzkxLvya6Zmvez7n8Y48xIyZAp2mcawIgRr3RkQTJOCWEeZseXbZp9TEBPyMMYbDjm1ZRuXw%2FVdcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyQf6AN2LY5ggKH%2BircAwNoe06dZNYuB5uQfyGBZNILCskkatzLDlV%2FcYczJcV8aV1v6yfrR7VKEUPfcF29yfcZSnw2YjrQPnJCD7XeQkdWtEytwa49yPTKg9btvgmTx8vMRbBeL8NkCDYu8pI4IrMXVdf9kquaOKcTniQHikefXc9MKBYLKhprQ7C5%2F0Rd%2FYfKPhL7fF6oM3Mm9EdQugD%2BjNJ9tVgkYmFmlL2apGvjXXS%2F1zqD9cJqXYccqZRsiudJOcT64fJyeRagh%2FfQ3QKoI73DMquTjVa1FSe%2FF5IjAsXdaANYimNqFeYx2wcREaanmJJg%2B1N4tjFY11ufZ4kq98%2FAwu%2F1joxNNEqT7zSly9Fv3aOutU5pWLCdXxk3nZIKgvvSfspYUXbr%2F3iyAJbfT5dyGX4c78H4Cu6iLHEblLbU6jnG1m0jlqGB3zDJXZTuAhceshXv0QrcZ0xoZKhV2QdVES1XeegLKImdUWfDy%2FAyQjjqV4j%2FmILKejU6qlUf2Ux%2By3Dfmqm96XxOSHDPWXTJYPoAdKvjJ50IMeHLA26qLx2451A4BS49uJGNYzGpExkST%2BrW%2FDjg9RJSYBLVNf%2BoYGLp1VqiJK9urDrHP0TxtSmU6Vc1oxGHZN0nSEmy0v1rPhFfWn%2BwMJ2C2MAGOqUBxx8lb7h%2BCU4BYlvU9xg%2BJ%2BefBeGMD2Ypayyldd51G4sXu2bliwgFxI1aX8Yn9rGpwT%2FbfeevNcmOVD2e3LO5eLcwiXsF%2BncRHe8gaoZCRW8PBw3nCjPtsg594nBnKOfKCyD7KaApxAQAt%2BMtqqrpSbrV5THJeFvxZjFuBFm6iCTJdcp2RzzM%2FmbTYiyyrw1zmn69%2BpRXsFxJstOWDPaJ1n9JPa7X&X-Amz-Signature=a21023be2f38e73a960b1216fe4e11490b4b3f25876aeb0dbca005f4b0255e42&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
