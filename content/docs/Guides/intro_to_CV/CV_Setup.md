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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIAICRNZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LRwTjdI57sgiNGkRzfGS7yrm%2FNZhDm12kfeFaT7YcAIgWudkPSxBqw17rjC7Sm4Sk7yKDwrGhgrEyxUbxmb%2FzUAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDYNVU4qgYCRCrarDircAyodWMcSKsdmIX%2FmTDKICuu0%2BYKiPNXlkQc9yT%2B2FPAB32baAapHoyA0ypvF21Hy1D5Xg1rr%2FzViGM0RXDkNkuM%2FCeXJ%2BF8tqHrXZwAsCeQnnbx9vejE%2BETf8trcGKKytWL3luKl0vmmHmdNoTyTzay4nZIhk6xqkfE%2B1tH5h8ICbBWESKV9o486sBSF6L4BWqs6O9Jk%2FNsE%2BTWhh4Te%2B4oqHGPlg77B3TP5TZmAmp0SJe7pobqWBynjUZ6kVzDgJJ%2Fcweb2d%2B0X%2FyuGq80dh0trl0mzA7L96iwD7dGJiV1Cxx5cm5WX9b3hcx8IFnxytHwlWIFCb0vW8DK%2FPDbH6mcSEld7sJIrHlr%2F3zBLomS98X4CvTDnT8SygQoyRIwkw7tEK7go%2FQdT6UYhmzcV98Q5r6d6poO%2F%2BzsQ%2Bfvs8eZT4vXEuqjrsFSND4gXYmkTuRBYBdcPkQOEziF3nkYQqg4AJaQ49SyyXuV8MpW2Cu2CFsn%2F3qlkcUbPWmgVWb%2F3ARUSbgQ9UXTjNstYWuDcz9DMhvzfEgaW%2FJykfk3LQj22nC1Y1gVizE%2BGCQwyiVjdQsKdTa5IGxwd7ymlWbmJdlmesG0qwfflnqIx%2BN%2F2q6DvdQVt3T0w01zRjheQMK2Vg8AGOqUBd0vIx6WQBEc5hXE%2FqUiE96Q%2FNaQ0gcuwKgQ4DAlxu8jD0G51lj7YOjNbMJugNGClh86nU7MW7%2Fi5DN2yOEfG8T2QQvesZ3hlbPjr7YbCIhRcpWUcBYBJCl5tLOSirKcfOd4SWxbXEioJ1f%2BPDhxkB7LYtMWXeihm4PV7zRA9%2BvdiV1mSubAeDatkSeFAfxmS6aDgZ6iI9Egni2jQv6uctuLNlxdA&X-Amz-Signature=64c69d252e03fac41023ea7568faf042cdfd6a7b79dd59f197e8a23bc926d243&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RITLYELY%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRdTLNJ4ULliiguPv2ol9evz51PmiOV%2B4ytyPsKmFo2QIhAJN3D3g4vMb94YnsgLmrXTaB6d6A4t0X%2BFX3W%2F8uKU7rKv8DCFsQABoMNjM3NDIzMTgzODA1IgyZRp5KfpE4GjU7RPgq3AN5fP172u95xhozsDmjwzSI8m4KzJIbHmYzSihQ5BlYUwj2xFWDitPkvtSSgv4CNF3AzxC1miY8Dp2XIVuWYJSMnT4mcA1vFLba00gn7O8alRSf4e67bUU1xcpPJcrSxzn3CbSKCbzl1JmblYMN0mzEMQy60QDeI5a8FERjAcI0dMP8ku5nioES3GSp1PdA9eWxFbH2%2FaGkL0y3CeJ3SkZCt97JVgCv%2FQN%2Fz7IrG6iSc0GE8xwueKUHzivXXdqUEwqaCsa8cTTt7qXnnRDZrxS4P368loSVE0Phc9Z1KVInSmDnEGAFcIR8im%2F1EI9e5VFlz5o6KT%2BUsKrmVCDZ7hXv3b3V0bkH7Ony0jp6kR2QXoRuWP3IfM%2Bmaji1MBpupzBzHE0vlaIWfLkINkDYUU2P2PboY8Cv6DlL3Wev%2BVXbtNmQugNT6Ir4bpRzfsrQ6kLc2AQxz6BUWhuEzuhrOD06iRiO5PhQCTxeMRACSLhwSHEwnl6HfdR%2BMci0Dev4Q4mBa7ke08U9LVjB%2Bde751jOBwdG30meD9S8TLVUwHs9sl2EoWwoAa95zXvywM7j%2Bi61oOyU3D8HlT5zJGCu8uGvAevY0hYmlvrDwgCLbXzhYwyGs1VdGyEsWoD7BDDXlIPABjqkAQ%2BJXG7sJdmkbR05yOVdwUgdErrbPYM%2BWOkaRI2WEOwCzdHcHaESIO3GkwrMZPF5QlnP%2B9%2BeSsxidS5q7PbsTQhekYYsgQP5XtTzEgvNUSToGG67Fi5XO%2BHDv%2BsGKiYCDSmM9%2FPi9AKTnGCIulGT6NkEm5Ovg1iZt1cUIQD6hf4IzIH%2FkfooeoweDXKOT%2F6uGAJk5WVSLVJNAPshVqeZ95Do5mYj&X-Amz-Signature=fda12564d28db604f1ac6a4c4f75ca10f4e21b540ab5b712d6e1baad6f56516e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
