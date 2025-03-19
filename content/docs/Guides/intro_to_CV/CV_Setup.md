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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDXHDZ4O%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD0S3XIEf%2FCCSwAUQDEKuW3iW3NRkEzLVnqL7R%2F8ogjHAIhAPYlfFL349OeXMf3AEhNhvCmQ6bAjk5641HHHl4MKG3BKv8DCGYQABoMNjM3NDIzMTgzODA1IgxnvdpBIT9AOfx5AZIq3APVykdBqOw9l9X4JPSybr%2BvBdNSYM2ZExV%2F%2FK67AcGeICY3s3C1Ms3hdEyFkseZED0pHWRmcmpOaCkLhJVuCV5ijT%2BtlIIhe6GDdbgErQQEnSjqOo9KuuY%2FcB8tAwCQDSpLoUKVazJXT34Jsh4Nbgcvd%2FrKoDU5QBxmSwvWXwMn2BchKTsl8rVj7z3Ia%2F%2FzQChnm61LkE7fDpRmYkb4gRZcsAfhmGpm%2F87vmqp5zh3gnio38c0XVWaeD9V11GJwOnPzslPZuKzSWQLTOnrLxXAxaf%2FXHjDwQduIyqkd49y2yrS6A5oDK9oIrJatELq4Bi8e4LLo%2B1pO7ADEKLshB4V%2FInAaiqs49dyAlXBEqZ%2FyPlMna6jcKaCpRwQpVqUmlxPHhn3MwiOC%2BkbHCXpXCZVgliM2BIm7%2FAoGKf%2FXjKrd8QiTgKIR8r3J3ZksAaF%2BvWw%2B7iN6LJiH5ugp4uo7EdQ7S1sZGAT5dUHM8cg00P4o9bLz%2FfEomdbqMu3apwkJ%2BdLmXNnfn0LIguDzw78JiNvKYohLi2PK%2BNVe%2FUdraQdxeHcSDlarMkFXonMv9PLN1dYGs8dHAHPDtL3hEDEjHjQa31s09zF7pSaxmcVU9XdOEoySeqx7rEAwEjX4QDC8see%2BBjqkAakL4UPgTqFUXLbVnQIm8PnCdYvkvWAcRkzHgjWaoiwhUIvbuxCX7Z%2BZclMNVXptTpBomqOFxt76jdoIXBIXBEjSJq0Yv3woy82VFWqsJYsZwjh0QieiIE39fjxEL7mW6N1WON8pCHAw6oFg1s5XnzfsMSghdBiF89X065qjx%2BK%2BGHtyLOjB9IIid5LXkEwZuz9cPA%2Ftvmpc7Qj0gv7%2BHuJM05qj&X-Amz-Signature=4334dd8fbd9cc4df1497d079a6ffea021526b685664f9dc4c1f27b150f24d651&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP42G6A4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIElZ70S5AHaLUrfRp8lGddqXEfCCDf9lDbmeWehT0bn%2BAiEA9LUvpRXLIWas0K0tVs1N2JiaHnZLH2MFwMDaiWeBREcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCa1RYrgHyv9bjuv%2FyrcA5n7N1da4xx6VRffBq1k5014qcuJtcxeFxfA%2Bd%2F5bxf%2F0s8rjjLLelLJL6TBKXC3X%2Feq8gTMlsBfeoyZw9F6dVlbZAKCpcgiZMViCDSgzdW2Ed%2BDBZYTIFghmvez5T%2B1fGPGjbyUBc%2FTdHx4HBy3K2h5%2F3YvsikjuEd7ceeIjXCmowX7F80dqolsa6VI3N9pE0FOQy9%2BaCVs7WkhjJqo4cn7ZrafbPBVxsN%2BVPcTWUYpgiCq2jfGjxOEbRBM4HgNdfeCe2FEpBppAitlaO5XpJf9anSQ47DkXy4auQGPBrXSk6YX4BACqcEmD6fuWe3UWeDDVBEHJgOmgkwTV%2FVLqEHq8WRnACgjf871rNVZgWvNN61AJuJ3l6xIo0%2FFsE%2FLyaEzO%2FVKXoDxd85E8wc4zw6RqYQDLUEzOOdnC7%2Fla6r1fRlqmqxa2oBWfi0ZqfFHFQUW100QdcuBTwT8KzDdJSdK%2BEcCWWPYpASukbwN7s%2BIf3K02vJwKKTz6%2F0DJuHQWa1JKwLvWpb%2B45ZA6OxWLonREDq9uPqDvfpGwwdSjMLKVYzlftQ8ODY%2FWtg11mtyw83FfbIqsvRbCexFjCjTFkr51v1%2BUSwuqypgvfasQ9zsCOSEDdKgLZ3pT1YeMMOx574GOqUBfj6qP3X3mtCbyTeW%2BhT9g%2F3oVpdNTeFRzbfz6%2FMTEeA0ZFyc2iAemfgLoF3XTpe2iR95VVWkJnxvsDUsD9pZrl2mEYRlv7K2zsHgeTBGawsezmY6WLGTxoh9p4DED9mwsXirJocpF%2BgREu4M4pbWM6Vn8sAw6D7DnI5aRnZKGtKv123y0Ul9a24VdViT62xTDshp3a8rNJVi%2FwUrYVFy%2FaCK825s&X-Amz-Signature=313507bef65c34ca02385e3d4e9fcbfe98f44eacdc5e75cfef63e7db9e655c11&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
