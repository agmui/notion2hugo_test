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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTF54A7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICVbVyYo6GOfPnq4Z1%2FZf7e87vJe8O83yI0c%2B%2BFjb3ODAiEA%2BbxbX9grEBhEFEoOLmJJLWIzfP2AmkNf7fbge%2FZv7Scq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLSxIVaB5EAAWohZHSrcAy8du1V9RWjiScGh34i2quTo0ANpI3byLovzAI3JTxMRM0Vo3v2GejoTurx0tJJTeUQVOlShct63LEo23DfRXslg3mbtrGavWyflBhFK7NW47Hik%2FEh4K4zGGcB4QKI%2BNhc%2BS8Xvc0mMb3dVG1WIorriKcKRwc%2BmOrj6K8br7lO9KoqvZi%2FNokyxTvJ9GvZyYXKg%2B4pzcjSPjHsxaFZAMZsnb9ZDCRbYaZzPtQFd3AGt3bgY73eNh30uBkLCbzA6YhER49YUEVr0h3V2MyjtDzexIBjvE%2BW17429k3IY9uBG6AZ65XysOQ6PcLI8N7km88b%2FsrcT30%2BA8kRUr9rGa4WufoHHda5e8%2FApmi1mu612mm5ph%2BKNdwyHf6Wb8dDiqawv21q08Z0U0YgXBiLzjrlAGIua0r%2FAqFoJsrGZ2AIT8OrfeUsV3eLy2vP1rVsnrGUwZhtWMAbvs6GGGIxiIhFzYkVY1P9v695XKfgg2CWw6nUA%2FrJmzlow3CrPztEzO4s%2B%2FniAmdpa0JFUSLXC29CLky5EAno1EC%2Fdb9NvLjwwKEYJeuMKJRLlFv%2FEEpyaCWv25bDomwasJRmES56qUQtv6dIteJbOiUSy%2BK3R4mn9XjTevGMaD10umQXiMKC1jL0GOqUBiA6DSFb4YNmvqKBrGx2cgAW5wB4HmqcjZAsUQweiTGOTCzkwkubc%2FVHOivO66fmHnYtI%2FhxNy2omY4R086nxY94au6wU0yBsEyl7ky8lVDDIbJD9uq6WsA2es68ZtOOOKVWqjkpEYAgV8NljuuL7mZX2o%2Fa9Yvixd8ZR%2FrabW5RyPTZG77uwAjq6dKV0QbmMWN5MjTCap%2BLxF3rRmJqukjQU3SDL&X-Amz-Signature=4b01be0091b5bcace3fa1eac753907e2375c7d73c8b3a63b06b416940476647e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKZ7VVN%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFJtR%2Bi8aYK3I9HjWZz8T6fYjddXntAeJGAvkDcZxu48AiADF%2BdQ9%2FSf82WIs51%2B1NOiVitE4c19MQJ4%2BzO6di9ECir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMZIyORi89lVGSOr4NKtwD9hPYbwvbeBBbxX0UUq2554aRtRdBY%2Fwvm1NacT4XUeY7qp2zJK%2BoClDGAH6nfsXOONw0FzhcBxNQPdJkRU2KNOYRPHOvucP7Fj1MbvlWzBN0FRJmzOziSfNy1eQsJJ1UbKWR6ktdUPJ3INAjk%2B5lVGAXto0AzJzTdtRSDXoJerEvSM3pQZMP7CMmEEnjPhBSVXAXzvo0Py6ayBA9aQEUGav48QizgXwDtVP7TT8YxW4X%2BtoYg9mnS0zMuavaLBg01hDR1ffWJ0iDvqCNYIUTkJxNtheK2Y%2FCL8%2FT%2FBMx09uFYVqYjpyxpdkQAIBu5YlZrsmtM6tjfa9IsxukKarfugEGoA1DljJ9gQlG3jM9O3NOSjM1pY7oAxZIK5aiC1rNJmC343UTqhv6Ch4V6nX2cTpLC2wA3mLhwx7NYbuP%2BQBrCvkhRTrweBUw35aNrPF1BP%2FdYNWqMakWp9lAjqU5o8P%2B80GwwlbmBQMW8QEbNG%2BnlvIZzhli6qAoxFtEcbyHouDUtjvNF%2FDMcOtqzlHYefG%2FzsG4fmiGFIamAsBrQVxLwPNjuJMZLXqQAQAy87MyIV6LwnXrGhrD4%2BhltPEP5e5dSq3oJoKnscbVdq6YDK86OA5K%2BtH%2FYc0CR7wwyrWMvQY6pgFpnjQrIRER0robHWamPHLQsrRFR9maodo5utaxZmREtKtJL3ClY3Ndvf4oHI7pzqtZh7ZfJdLYOQxeR5gMWj6NLoYZ3VdsQjkqUb3QeQFlhu0QQZzH4PJX2q8OZH1i8UiArHVIcp3V542lWqibrsnskzkIIEc80TgftHQ1LHEng%2FNPXKFzBBpb7478HVqpExoyn4Dqrl7oRFAGNACXRPUiPvNK%2F0EQ&X-Amz-Signature=2bbd5ef9d40155e29814adfe1c2da9fe745f4aa5f57e5ee13fe83cc57e515552&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
