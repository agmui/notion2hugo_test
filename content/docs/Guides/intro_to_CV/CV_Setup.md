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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DOJC63X%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEongxvxwzJzOgKIs%2FvTVwy%2FavyuM8EqhYMEBdE0KhuwIhAN3a6JOBe4xptIxYxrqvpJMUI%2BK0G21IFv0TmkdUHtjQKv8DCDEQABoMNjM3NDIzMTgzODA1Igz3O99ESf0Q0YqDkDgq3AN5ZWvCBwj2VOsHVld%2BBIUvLNplHaaEBE%2BbC%2FVvbkzTUe0fUVo4c56%2B44vS1A12CNYoh0HVEnTqlk3cbgH2bZcTEaskK7ysXThXiQJZA4TpClwkn6iemccRI8vyxsN%2BBdAPY9QH6cLa1qIzyH8UXteqQ5bXo%2FccbprAuTxA5yIjakjVKOe%2FpVqeAPvz6n2dfJGqp31FeU1T%2B8VzwR%2BHAyZCFvSXOsuoIx6QU5LDuTzGVR1jI4KqS3NYDJW%2B6m0sR1Bs%2F7n4U3Bi%2BiD%2BQUkHKFb41PwIkz7JXiC8bq2iE6UziFkl2iz4gojapQXOX6RjphGBQF44n%2BIMlOe9rtX0Q%2BgQKWFySdy2Z%2BOGbg39LMdaiY3XY73I2fkBG9SvXiN2lFVYyF9BgZ1uJ0SpADDvxNT6wYtJSwsg2yetw5svxtcJRjMS2yfoZz3zPQrAQeDLTun18arzlm2zD5N19WNCRd0Av%2BfWW3zLFWHcUrZ4l8sRYqE0GH8DvQ34hcPxXTkMllC%2FIHKaXMfieGkJ6Nndcm6RSe6iHfVWrGkyp58pSy58EXE8vyBOHxgbeUGNXJf%2B4Mo5CClTvJnEKe%2B%2BNHZn2%2F%2Fz16X3d2YojJRj91jH5r1ZgcP0Mv4g4hh2zFU7qTCCsePABjqkAfFCcmjifbNb45HFIpDu%2FMA7k%2FjHHxFd8JbTOmmCOdzqLlaR8mTbCRXG3Lit22jlXH3wGoztegUdQMDDd%2Bz3cM6cVw6OGYnWEDdzZfAdwY7%2B%2B%2Fosw6VL%2FyEDqron1pucUl0HxhNq9CzjMJtanccjdFi2O1O1%2F3LaYoZAjskP0LtJG7WEvikehWkFYiD7O36OBpeHsA7bTNMVhndeM5TOUgxyzTJN&X-Amz-Signature=e095e47318a810675fc6fe9ae1b7e45bf564b5e679515330c527aef108993632&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635L5VJCH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETD%2BvT1Vvv24iSvOkmRJDwhMyMRqM%2BzNZcLP4dSV4m5AiBDxSg5rwJSnBUzG3dO3qqTi7aYHDRW3QLrHAE674wGlir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMIPgtlJO0E%2BDC%2Fh43KtwDo8I%2Fp13NNSazPYRPn4Ll6czDgESIzxTEJgTYrtwutTOcQhOutJGYVvpjLzamVYeAtO8NCJd%2BAnmaQrcxpZhBwerUshv7d2RPJcHnZ4fVzMSD7w5fFvy%2BgsX3bXzhf%2BS6PfYnx9Q26bykIf%2Fonzsr%2FIkrGB4CV%2FQKjqv0z4%2FpEtluPX%2FLCLAz0gclXapYufb5Nk%2FaSaRehaXQiGp0ZzJoKRz%2BLhgY1VfCUkMwU0QjHnhU7vgZRboZAuDxTIt3aJNrLbLBY8f%2FF6XCyiXZKQ7fjEwL1d7%2BNLTWvOV6BUKB3iVO%2F8Bjcw%2BVRD5LA5x1HTVglw0X8HMQO5XkwfL5%2Fqa2wgIf72QX%2B9tJ4ak54ZWctg6GU530Cu13GjfOnqnLsBGzXREQRGlmoCqTdQoBTvznIc7oDFNFw9bQnHbJAbd5g9gSOD9lzjcGZKL1bH60UGywl4boEN1QdXITLjA1cCeztNiJeR%2B29%2FpEuMgWpCWRHo69MQd56hxZDrGXQy8vX8TA0CHiyE8cUT%2F9lnxdFkvkNdCt4Ie6qInBynJekwa38RF%2F5gyqMXgqDVk1FgJxZEEORs%2FC3ekh%2F7I0ss%2BcofSo%2BbKmLnQnik53M0%2FZxcx6Ryo89zrJtTC1W1DW6lAw37DjwAY6pgEgqEQNTV3VU3IVJYWDQfQYIJywWqd50LT18ORiN6xg%2BWoXsX%2B6FWa0uFqZKWwszvqfjNxUG2LslIzvDGTo%2FD0kDRZoG5qNIzo0%2Bfk0iA9mjvp6%2FrKRe6Ou79qllagqn3hhhKx4%2FCUjDnOe%2BRDUeyrZb7pYPPJ7mJVB1aFIFInSY9XBlnUu%2FPgExnVVFYW9VidjcG%2FO2G4NuupqL2SNsNl8Y7YYO72n&X-Amz-Signature=08c989222b1b3ee94f202f8277a12307421d55f9e50e0d3c39191f2423dbc75a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
