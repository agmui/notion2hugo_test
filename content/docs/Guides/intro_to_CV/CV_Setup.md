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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2VUUI3%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCJgjy30TAxULaydqHlVJ%2BdW07gxQTVvLjtdEOraJ7pWgIgZ5HUQw4Q6t8yAooKhsbN8gdWujMmuONHYntG0nV9%2FIkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAAdwCxV2USH6PvRyrcAyYf%2FvMB1%2FhW6jel1triEXyDxu3W%2BQbiLWwJafvhZVyxM%2FT4p45oabTqBOX6vyK8aPlDbL6HJ%2BK9h3u8ZE0dgzbq0YoiaPVWO1c3eXxerUMLOIE8%2F8PL1wGIUHOtWPe51jfITImlgTUz102oOPwxGp5ohVEndt3jWyrI%2FywHffaHqiZKwh8t5vSGjWd22JGv5MkcFlHQXlMhLDVilobm5Ur7QkWSfIAwv9AmFPXqkzamysfxiIZOoBQwMi0ZqogJO0NhQNViLtkF9o5jcFkH1VASWMpy369s0%2FiTcWwH6atOyvU2DNegAlGzFyL9QToe8S62Ea%2Bz3KWXNPHMlHYYqLmnyqi0xju8j%2BCw5zznqmwDuTgo2WwbGZuPvfeiHdOrSCXWtFwQqJ4%2BqL2F97oDv5rtNSEXjhl3O4OKXyTKGvUVMDywMTZJLp6X%2FwSgNI1gEo9BT8Ppx5psn%2F8e1qHKMJvKcB2LwuzeQO8lvQS1U2O05NESi%2BnXnljpAJZiNXih%2BNPAHidv2cQaKBSmHAa9NO3TEmsLIXwo06zde1cn%2FauzWT7I429Q5QbgqHb94iYNe26VD51amkGXag33aSMUqQGG1zLKUCQfrenCFMI89aUB94ZP8%2BUMgL3PvPMkMIaHxsAGOqUBl5FfMhX3AX5UuP7gNsCkoML3h6CAsgWjcsQxlg0J9jszCUXmsoZSbt35ocvOpGewrKV3kcEIBvRUqPKIu1v70uc3%2BqNQMKJlIFg7hGU0uaBJ0%2BhaVDOt5Fy3nd65mBaedX44s2ynvlKiX7kA1mlV%2F8AlQqJr3576C1xUaoxgYGiRiX8dG9In6Hs0xADi4XRRiQxvGpRFNT9WCMOqe0HYBRGfLY4I&X-Amz-Signature=3869e5d78f50e8757eedaff20bca7fc70a012f946d95059e9fa602c25fe9df8b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G523ZRR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQC9noto6NMEyjwrTkmWCfkikpfVV4s2uLSQp1gC%2BMbnuQIge8IKEWzFa%2FONYllP9IBTo6IjQOZuyZsN5rARI6Ge%2FYUqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhdiX0iIJRi%2FUVQpyrcAxiPTJx5x5A%2F7rNAGOvyX78zAvLrlrgqXVeUeF%2BnZDQx0UcCllPul7tJXNGyn4%2Fa93k2rRx98f3PqmnqnvFZpfDn13pgWp18KbTWYHwljT4iOfOO%2BTQyZdTkbW4LPK8AWUvwt3VvHr8ItoKI%2BN9s%2FNoIQVq%2BxgPjvqlBvkXRG8yL0evw9G4j5Gnd3nJI7jNt1fLn24MKd7EZd9T%2FamuX2jOjgF0HMm%2FYwVO1VDTIrsGmJAv1jaXaxfkAuAPY%2FsshsGpMsEvKv%2FHKAaPMVtt4kEZA5nLHqETiZtg%2B3mNyi9inkwA2Cej0YV9wdLWrB6UFGjjKZ8GfPJrYwlv2txrgP32hRruYQYgZMMMq45uIc1sr%2FFZ6YM1DdcVAt%2FUKe3Ex0og%2Fs7EKu49oPbzLNFp4WwGgKC%2B2ljNhVHtuzAPOxKPaXRe83cBxs3n2HpwzNA7qZigumyLznP7%2BBJlf4iZtQKLj%2BPw8adhCZ5XXOf6YGLqC6wVvRpc3rqAzgfpFC4JnZ7v5rHwI8dUaHDQHcQP9LUY4HkdQe16MiNgPrgTzcY8tRREpXvUUvae1o3oAJxdRNP1NnhzdXw7WhytlStT4snnqVKdlY5H5hm2P5WB62MoSH%2Fty465l4%2BAWIMWiMJeHxsAGOqUBJnjcM9X6aKq5LRUJzcL4t9udgeLkakBgTqer5ghhyfwPkZTgcZiCJ%2FQ0H3c5BzCkA30J2unZj7i9f8D2njcXqdroxJzLfREVX%2BD2S8TAC%2F0ZmNqwW6a4fL17AJ6%2BloY9lZ4PijmCtAgg9%2BXbQhunU8VhBAxrGoBgbms3JaLFbkvFEbIiP7lIz8LMYDUqq%2FLhzz%2FvZWehULWt9Mb062YHs6aXN%2Fi8&X-Amz-Signature=e78cfbd22bc6127109ed6510dbd6a82a29bb4e81547510e0f7b1fd35654d0203&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
