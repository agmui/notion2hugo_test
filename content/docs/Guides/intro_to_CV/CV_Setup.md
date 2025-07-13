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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WBJ3NBS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCImIDmPuE%2B7miAaMpXnV6N%2Bjej2nw2e%2BiAINKhL%2FkMZwIhAN1qE1aC3fu5VELzPIDB1%2Bys5iCEEh%2Fd4uOzeC6oS1pEKv8DCBgQABoMNjM3NDIzMTgzODA1Igwv9qnSP76DVGG6714q3AONqtwVUQefykwgFumMNunTj3p2NHmFT%2BjE2BsWwjEgyYA4ZlJS21UrsmMVdE7ZhUQut0tn2ZgE0XzfZbjyMcT9yGo7FQt%2FI53aj64QhZ9rTF3oWidRLXzEkNRjjZr50IA%2BeArnabC9Am1WeJUdFe2VSvZSIKUz6ePeRiFsxFPAUVGQiQnZXulEStjsmx20BsxTWRtwTDDtU3oOd5oX0uWv50K%2FdAZYRIFV6YPQ0XXnhO3VjkZkuNlxQfrW64rEN1Usu5aUhNFP%2BRgwWDOM2%2Bw%2B1i3eRRNo7a5Ziuj%2FR4nHICEQfgGZgPreqC5g0r8Y5ptINZlxunlcYSew4QNSqFWppLVY4Qti%2BzMwm7cOieVz5VL0WFCg11LwP8Elya0aDk6xsnLn0i1CRAM%2F%2BWSA4WIoPUmuaATPTmLGV9WefiB%2BNENdaoEq7mxjaTshR8OguMMFP2H%2FBnaTLagsEGJM5pUwTbImurllJaxSbM%2BWE%2Fa4ivpzwusClO7Br5bstQmex1nHWX%2BlnHkTj%2BzmivU%2BB%2BLixkPjmkADSP7eZmgL6wBUePq%2F8jFDSCQYZfZKlgpiCJVa65wu5pU0mvKUblWLE%2FD98tTz%2FBWs8ExeaiV3bXLxHVw4Gt3Pod3ssrs8HDDRls%2FDBjqkAYOZGHAICuX1p2Nw6YFncFXY4d6YWY4y4vgiPzE%2Fg91Yz1qcFi1TM80iVBkes3oI4P0qlYUH%2BGOkrRVy6RdAFhy18ACvdYAFDaEUvr2xUsgn6rM0HDknBM6DoSFnN6DnvoA9J1tSOmAIxz7mOsZU8qd0%2Ft2giJT7qaak2%2FGKkE81MzPEqB3XpUvUQqFSptsMuOgntpbuEK5bTlnbAPXSpbuA7iQj&X-Amz-Signature=294dc3fd180cf5dee8e7bc51d94c2856ade685cfcca3f93a3a4bc99bd9a6704a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ARM6M5K%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnx3URxEdA4OWUdSc4y5Q0oGlQZt5u0a67dKXgaddo4AIgdfHgC%2Bekr8lUbGxdSLX%2FD%2BX7xSDgdQ%2B0VTfrggtm1SAq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDI2Kl2MMEQ3a7tYZqyrcA3IMV%2B3B3s5f5ETLDm8oalp62omzwOHRrdQN7NkrzTag3CO%2FerPCA7JdBx1ZhO7XUhnRmwl5p5OiSmWX7I6ol4Vt6HtF3g8t21U3fo9BWUubcZfnS8m2rQW8OVe4V4IXWb6fS7sxAF5%2Fs3JvrlqFXtNbtQZRt1J1odH3CP3GBt7SQ%2FL9yBOgYS1MP%2FccSREeKL%2B0lKvGeHK7VNzRwxEb0hclSTTlsR0JHnxoYEfnnMVr4OJnOJ1rOZfVF5qgjrYrGPrPid%2B75ZLpRL25gGEsRj15fnj0GtQPsHC%2FOLQCbl8MvCthR5GOMA7UexxpYpnlE8NZ4RJx6wnxE98M2H8jguB17qD42XsejQXDHxWY%2F2Eq6MWSsrOL%2B7IgcBBL426LzmErrfBbC6GjmSIgtFzuinwjxlIla%2FelvFwIs8fYtpKvlIKpEBjfpp7Gg%2B0G6eFynQ3%2BUTwZFKZ9V9tBrroYMXoLQWfeDIXTuHfqg9A11FZvk5qV8CEGATl3s%2B2c%2F7lIwJ2oOZRSpna6vnTTrPYG%2FRePQdN54C3VtOgnAF7VWpSN1ac4Exq924UYrQZSN6BljpCxgcR0WxxeQ6bzS%2BZLVNPSKefDTLaCSi9QA82EwBVGAgnENX1JdsZVTaJ%2BMKeWz8MGOqUB4h8Qtm%2FVqMlkjCiXzDQrPDk6lKLeYLG6NN0ro1LktsXU4RHkx2uMqrSN1Gl%2FuxvW1Wbem5T2OgydkP%2BsZ2iWY2BNT5lO8CJpZTnB4glon8ueDHBdAczzw%2BbYe0NtQP4A%2FaNCpyFF3m0RKGg0R9jHulQafXhpxI1m%2FLw3vz9EW7%2BKIMVjArXru7vBdgE6W1fp8leays9pbMy3OLSZhSQAqKSAOYhS&X-Amz-Signature=a073e3cf482d64ea71e0eb43fd109f7174baa8f6c7b20a6beb0ece5faab59c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
