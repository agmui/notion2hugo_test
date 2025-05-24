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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXFN4LVV%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDwSW2fVFyRaZGN150peXA1eVxlRPaPOWytJPpn0uYzfwIhAPaq%2B%2B44Cnb6Xzyh26eEeLQpWTo2Sd2h%2BbtinwOAhzt6Kv8DCBAQABoMNjM3NDIzMTgzODA1IgyfQC2m93PYUCvO7sEq3AMR8t58M%2BwpkjwyZINezSRJBNMK9SDQvBoai9s1J3q4GJeidFhhn0xCY%2FO5j5qHkrWpbv2jt3e%2Fl2j72pVh%2F5v84QePRQiPvfVO9FvPj1YnImYftpexm084HDsNNCA%2B%2F03Z2J3W4szMdnoktqweR90lGIKAmzueYqncAcPEd2lbwluwS%2FYAKuY8cLkc7Z8jbIjO9qOVy1K4VKiSJ%2FF%2FY2qB1HW7bK030F28dJn0FI7fdOLuC5uyM0%2FqfemUQiZhexG7Gxg%2FiA4orYKxYRIVrDP6NzqIjG6i3PBxOI%2BpTvoS0IlEi5A4oCJyutIi3eTT2JpWpE%2BOZ9cuk1K%2B93YVZDcvYcxf%2FPURW7%2B9UvKqzOPKOjHEYpvPY7gzqvcCZsgZ6Mpm3su51vkDQL3j8czsth7bpCQp8eBSj7X9zNs5gMTsnYUMCgT0xjhOEBFWLhnIlGV863ZxuixxJ4zfVUnKhNVhx%2FV8SvFqdqYIOnqdwouUkIerfmBMIhvnoJ07PnurRa3kcN2vgkHPUjaIsFj20r0HJjXdsOMSOGjC6wp8m4TAj81S8%2BNFbTjUYC59RmZga%2BjMv9dJ31gpCVJeDiqJWaFw8JToYVBk%2BcF21C3%2F0e8pos9VObzjYEYpNI7bSjDU38XBBjqkAYwpMYQ3VhGhRJThZotZT1tsd7VXMUUGO8WY6KV6TmVDQHqTnPTaeRiKB7QMkVBtXS7Ywp5UNuehnJYMmqcKHBg8gY6LIyS8FoQGmE%2F993T1K0LUnAOP0G%2Flx70zdIXT1XiUgLzHmNLOGg9CqltYql3WvE6VaPYA7zJXk4tOSfQJFnNwlJyKg9XISopjWIlU6DLibI7x10RmG03yPE%2BlTNccXLPQ&X-Amz-Signature=01a1e8569016a186e96ebbead45d552b346fbf7b03cb81d821b6c42aaeb1a4e6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLHKVG4%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCfvxyBpSTxy3pATQLxMi6sQYegp3L5VsrjTIW5NVS2zAIhAP7hneO39dhDiEAAYL0uwrA6ViPwfGuciF9JU5mHT%2FJvKv8DCBAQABoMNjM3NDIzMTgzODA1IgxqC2ilSvErPblPmBgq3AOnK5sqb9kIennrddcXUYXQLQ4Ho%2BLdOw24lbDmstx5WjRo2lrad4QrZSitu2A9OAvVBwQDcQkgEaa1eok0Wk08HzrrZLQ7gLQibVuymOsp6yT9KsbIQ8S4GR7NeH7bQ9NWUXF3K7J1xksBy507V1gpiUsJ%2BOjLnNn%2B2z0hQaJpmnRXxei3WQVGHTPZNTivoo321XC4BP1qg6DR12%2BgWV0aGdu9oA0voD92QaFkWpINAk1dOPRM2NZp82e0zGdwcQnO6Q7oiLI0FsxmmoiWiKSlJKzv3wuSi%2BI9uzUTxZVN0OWvqjonAhHLyoK%2BLEuMwnHBMhI62iKtFV7QxlYdrHsHV%2Fa3FBHhFLUS13uafXokFU5rf7LIz4l%2Brg99ejykQZNuTbEbRxRtnAwWNvtitynenWbZ1gIGwVVa7R5rBaREMRKA9llR%2B1lqs30GT5rP%2BYIrnBGsFYoHcIOIe1zYx31x1HZHNi5S1RY9DOduTHhIBlVdhUa37qPLbpFl9o3mbeH2RHulQN4f4JnTST7L2ha6LMnHfSC%2BrYS1hq%2BenTLEMBKcUa8%2FY6G%2BJN6rEmhu3GQRSwu9uQx6NKMIYJGnwflXR%2BolwA7x6YqkHpLhnd6bjs1%2B8iSlp63XzZMR%2FDDX38XBBjqkAeN8uTtPx%2Fe0T%2FuQc4v7tCW4rTNYUr9ufZB4zEz6PgX%2B1yR3AUZae%2FuA1I9AdXem3e3TVbU6GaUojb%2BWlCQFuoOBXWPXsCE8VymQ2ZN61bOjS0z5x14GjrvWx894G8tmGbxBrhC1oFJCmUOfab45ye47Z6g91RcNWzm%2F72Eil%2FIBDXFsl6PX68bkUJ8NnYSlbaXR2iIKDugV321JDMuOhMO8sg0S&X-Amz-Signature=3e4dbc149b8c187fb96ff0927c48cb13a8f2d81ab170f6327fce9a776ff34b40&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
