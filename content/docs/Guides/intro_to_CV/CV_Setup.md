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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQO2JUFH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIAZJ5gL0N6qQM8SFo6O2DYq81jAv9icG9%2FETZi8bWw4HAiEA31sCTmLZqNZoPoangd8fHrIlH39SqX2ZyNjQwChdOXMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNq9oAwm8gfXFy8PNircA%2FZBXFUkiK8BS7Sgqrg2DvMpD61fu7ttPkiemwO374JxLjtlk7KFzRq%2BBcml3oyhIpxqDqC3EOsdH2w1aAXu1XvG%2F2398jA7gays7gtZ2AeOmpPZO0ih2LxTFvt7bvbDfIjYr2NfHAchaxpstsFF4Jrj%2FjnXKgjmi6p5vCsxOU%2FzJxGPUHVwzwMdJg45J3Pwb3zD98Vbu0wX3unOhqWnOWl%2BCO855V%2BKN2Bu4iasThpFVta4yd6QchxyKOPUHImZ13igsA5NE0fA0NO37kiX9ju0%2FNO2b8VOqT60ioUaVg8FHkiuK6ODSXQR3tb12ruwUGfnzPFaa%2FOr4tHXG4rjlDSGODl0TWFyBYfOeEHA1yJQ0oH3RZLYnRHqcOBsGD%2FwSNYrfEF%2Fs4pMLyFAFhhGF9lNh0SbxQfQfZs6WVymkZysJb7iNt0RVPr770GF%2FSBl5RjZQisZYWzdd9LGiDJ2Y856y2KX329TFjD1dA75ze3cNlJjKNK6D0oDdModsa34iRqgwxhlq2LDVdbAdr97iNR5Qp%2BpGO6Mm2jaSu5ZOOUyEfv9sbj6P6x1bGKLf2X2QEaZI7ckX0cGfhaKbCeeCdBfIwBcIJ%2B%2B%2BpOnig5UoUJl4fLTS9UnJ2KL5wtUMI2jx70GOqUB7tNc7f%2Fobzkt326nNDVUV0U6modCKT4WJS3F0Wapvvs0tTYh8kEjmroVFsL2ZBA3FtD%2Bbrh4L6PG4ANK0lxqgUREGK3C4AsUZ1H7b3VSNGE4QODGy4rg8r7nMVyWuGqv8WUwdpeKPtSj5K%2FctdrS2V%2FUYKGYak45ThQEusGEVV7dYhs110pq79x9AvxiDH9MFYD9rDZ2UCCJBMQAbWzVhfl2Wfl%2F&X-Amz-Signature=1312bc70b93cccd37930a3f3952f6b445c073f2239fe7cdc55f5898b093e9146&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6VCD5S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDobBz%2Fur8Mu1Ul%2FyGd6p%2B3qlNbyYObvLsirIlSjPasAAIhAMkF0SFyVNtL%2F2n69ffCnjeXFxKKQpi4Hnp1Thpxq2pOKv8DCF0QABoMNjM3NDIzMTgzODA1IgxUGTxl0h%2FrYNuPJCUq3AN%2ByEYPII1NwPTS%2F8dsVgO04LL%2Ffz3XtzbN1FDj%2BGpyEuYyiGKkuIj46MyyIzxo6oDqxH8asdZSKCUL%2FKq6PYzo5hUBBK0TTZMch05vIiSriGvPO07hH356k4aE2DnZ623fb83i7f7ad7MqI3qP5kQbLARcsLKpn4Z9%2BFKZql6m%2B764GAvyTJiFl2C8U1XrwTslAl%2FqMPebyF%2B8Ml6VTDBrHSZl3IRVungTc%2Bz%2FFFVERyLJeII4p%2FSZ7qTlLJ5XF3Dj%2FxGc6vUnf3Kd%2FqiNLvRHoyloKYY8oz7dfkYURz3jXf7pL4cl1LLLhes1ATeCYySCSnR5%2FfhKGCupJGcIHJwPMt79IJA2RuHexdRl6pzDdrzPKvJpcRHYAydsahY4KoCecPS6yhV5Tvrzt8UCscOO3VC%2FzB4DJsM6ryRcLyqEzBkzEJu1x2vwc1QfXLNBGfnWf4rBa6NNAzHOpqZDaYrXhqn8OqGhKAQU2UvpyjR%2BsiUor5tLqB0%2F2wkkFCa7XS7D9RmS%2FSLIrgXgnDBPu5Mzqgnl5RYgbz%2Fvp3XCuBNAjA8vGLICsYs6seofh2b7wXgEIk334eTGtsiK0YoAriKxrbY%2FNG4saigzXETqE4itRcB3u%2B1Ukd9bVIhRIDDYo8e9BjqkAcdbNikN6%2BUEdFwNLCHbdhgWHDgzPCepEyTTIqkX%2Br8eAujd8rGMqF2eRdAw21MPbI2%2F%2FbgOoCudMLYgJFVWsIryTLjZmrDwpuPKSAAtG%2B174vW8O7n%2B8N9olORQof81%2FAR1G4zd6%2BUkPItxFkp0rBOp%2FkQTAH00I0uflU%2B7OwmuQOn1I4Ly8KUqMBIvHInhHFYiAfj5Mr4VzScCzTD62GO6mnzA&X-Amz-Signature=e70b1bf2e4f0cd2c8036a831230ad1bff0765297b854ecb34f6f3209919373ad&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
