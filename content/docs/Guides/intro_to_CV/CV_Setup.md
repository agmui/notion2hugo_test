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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GY5VKKT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIFFqZ7JtXlrH7mTrAkL40XNP8b6qsnietc7fNoysDC%2B2AiBrQUVOZa1yNRurxBSYQj26QFtotxAHYSB6FsG7jDgeuSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMEigYupJ69vioI8cKtwDkZAwm6RzYZ3JqQa1p1ZpY2ZSLWkmKHf9D%2Fa8OFsVmF%2Bg1Sk6MAkOqgdXiA9T6XygPuBH06A4rP5CN6mpVJyISJpNBy3%2F89BqgSxRcTeg5f2jMqHh13%2Fm7RFE6M5OpIuhrhZu3Z7ar1OSAj4z7nbPsx2Lt8s0xR6euOF6kTvg9C1eO1MaYis95%2FbluOq4deJR6HN1WrBm1MhK39qodU9TIYuszdOuXel3yc95ks4ioQXcVcgNJc%2Bxhl3TMAWlrYACzRC7gQM%2FkaxTRZAijD1syERXo4x1DVqFFcP0oMTkya7uL7hDaRNGw5lRDXdax8StkdWMM6JWLys4ZezXevsbE43Qm8%2BnoHG9JsJrUOvSKtkz7BzTJ6SYp9S4CFLthEw3siW3Wn4D5Zk0kcGdXneAR%2FGNkIXQdb2ekJ3B143wbAnNbHBw3oVCkjRy8OWe0lkRw42T6e9iYMQVefAWxj1O82ByWg0ixp%2BO9oC6zdoF0gOiPQDIWAmphCik4TKIlJ5MMp23RYVkvT9T5QqRaGFS0OjjnXYjacDoIP1uCX2VhGbvO%2FMjtO9De76c05Nu0vdQpjsWetPgxu98tVV4A9nY477DNUdiq1xN2N8pEGlVSFOEUxvHIKKFJlKr%2F8gw4tGQwQY6pgGbao9m%2B8EVOctHGUQvjY3fgF26%2Bn4GqrrKrV2vUOXfoIS0EpiRkh2c5KoGeAFGtOSLUCh%2F6quHpmDhIerj6VM6IFviza%2F7P%2FQpCimD36e6SDzxMjvtYnYBkI1JyeAcjQZi%2B8vrFqiSmmsvX%2B42DsB9uZzXw8i6NG9ob35QZU28Vmj3IM%2Bpo5Akes8dmWU3hBH9xyJP2JmtG9RoxHlun49KKbKWtAzm&X-Amz-Signature=18ac60771852c4584e9909ed36951748db0b0d187dd5e37b7bffe01bfc844c1a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQH76R6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCIyYQYKgeuF7yDhVxzI1Zv07D6W6VqoqvfWE55FMD0CwIgResjhclIXqRfViNf4cQR2hvV05u0ro4o%2BvC32QDttV8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqYmIWLvO4nwI964CrcA%2BCKhovvB2VxCLVvueWRMchkCPo9XJa4XxXE3bGKZCf4B4kU2sevAhLezR1hfPn5CbzPDcxvzt%2Fk6FKe6oF3DNiCy2VBW39mj5kNmVoa%2FMcV6SYvwW9aEEFf5vvlAG1GFiQP3renSsemwRUyFDeOxx4w%2BRWD6mgz3a%2BxjOLBMXik%2F8RWO8ngLh9XbIfVKSpnf5ZeU%2FWQaSFscWXkdg7NIzPJk1ADcDnt7PYNqDp%2B%2BHkQoUrEu8lOjNM8AL2ieaHhmWvXLiUN6iA7tyEVPUWFU7%2BIkTYJIYMoLGh61tFZGa8ITKhNTvEiQsCOsxstoo53JQuMNjztZGjAv1G2Uo3Q88QTuH%2FkfHG75o3ZS2b9qcBT42ezOT4UduR55znlJI2vVh4WLx3B5Oei6pd097xIUtqUVrssOiYd00GVwAOY65ajbzrB49%2BfXwVHs7XW9v9co3y%2F8z7MDsEun5cpWRXsQnu9yNT4nENJ1DVGFcI%2BQ%2BJ3pOT7nedjQAWfgoqPd%2FS8ft5Xpb%2F1c7QKTiz7D%2BHpdl79oqDj0kHREte%2FFGE2qvADRey8kym3DVb5yEm6TDiW4IqAoXAwsbOPGinhSny5Hn8a96YXHbopvQIzXJ%2BukGIPov7qNHKbx6e%2BJyFuMOTRkMEGOqUBJ66hRLw%2FAw8zpE3brkI%2FhqXOfidU5mUitzGwZqMFM%2FlzmyDvE8NCGdbQirZg4tteSJJLjbBL8Ms0nN5abynELHilky4xKRU%2Bx7zX9%2F5cw8VlzYyBYylN08n1ytTW97%2FDqwb4bbmhdl89jgUf6Aaf5GrK2uySUY3QhBojdd5Lgsatj%2Bv%2FiyYLI1Lt3NOGBgucVr3h7nthAkeOXhGi3MprDisi6Jia&X-Amz-Signature=fd8c0b8bac0c73e243449371a6c6ce164881fffcd39b777c1d8fd00bdc281b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
