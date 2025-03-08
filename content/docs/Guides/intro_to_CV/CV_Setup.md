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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OF7IUJY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFT%2FdOpHKA%2FCF%2BbUs4Q%2BNNu3ig1j7jGG%2B%2BGf2b0iyDLnAiAgvDVsqQhY0QdAnWlKMa5RmBRMmYxj4dFYIt5W3K5%2BJCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMAQdWle5Iq73lFeOJKtwDX5rWFa90Dse1J4n6NYu8azZu6p4OoDa9Mc6iInj7%2FiIPzdLDlBQgXjlyEyJB1FKNEzlzsrdsOthXC2EyWNGTI%2BIt5dnIloVTXgm5XPEsnTITBaBC6DC6vUj89GYwj%2FTB3tmtpI6ziaMl%2Bf08%2B3nvLLTJv9hWijvUGoWnmKklLKDCaTLYRlnF0lmsDZswUGRq8aAVo7muhwZz%2BqlcU2zuDzVu%2B7IZPH6806kEVUgYW9Fk0WQYmX%2B4qSLrfjNjT85pKEeBskXp%2BUNTgdxnUwj%2BWN457RUO9PcyloxIG%2B18sIRtwoKimfd1L6m8n6Q2cakBwl0JY6%2BhO4eTUh0iHsvfAyLLf6GjK4H5G0gMS4cyvORT0kSAO%2BLGSJWCJFQKSYSJCH7yvEiZaMzkNJgG7b1djia8wokEIZiSl78ETKEy9FDf20%2BY68mQJRuOteF6PLfldvVyKWtdb%2FHYrZIzewdM%2FeEFqF2tsg1%2FLDDUbkE%2BhH8rR9tq9mTw%2F%2Fsla7IvHnp6eK%2BBwjArnc%2FXmAg1HEns6A9%2FAADpoCQLIJqq%2BHqNLuVWIiuJ7UYjBD7Z3f48OaZtZ2oopcnOxIPtQWSKfVsn5HKxdDwJixCR9XVG1u64eQ9Gr1NpoIPe0lB1RBUwsf6tvgY6pgH6GWI4kX3Fmz%2BzTY%2FfmdlVSKkwfukk%2FJkNUuqjZH0ktTajIJkUwwD4hqXarewL%2FqxUQ15jeb0YnLn4%2BO%2B7QL8gx3V9MgWpajtNnEdZmSNoz6%2BAqJIb783VTj09Go9wPJw0imiGZKWcrIIUe%2BE0GmuLt%2BhDw0kRTAw3mcL9ILjM5q7gN3q9XVcJUdjp16t5jTpPZWhRVa1vA0qqxe1haYL9xXxIWBcg&X-Amz-Signature=6107a38d897b68bc0b6991f72662ffabe16b2fe35bc729fd69a6e4dc21a068cf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFQ4QV3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T003002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDTpvv6nH9iyrfcbW9%2BXwkUc5AevxBG%2Fe%2Fkn%2BNKWxsb8QIhAOP9tM9W9P5q9Hs2H1L5%2B87U5cVSk5ZHPSUkRqelLiLKKv8DCFAQABoMNjM3NDIzMTgzODA1IgzJuOIdaYl5J8Y5c9Yq3AObnyUn%2B7hzQEf1v1YkILxWsyaeZfDoAi1%2FvDMtvAASGyDWg1Fb7YuACu82Dnircym3%2BoqioccElmDUGy%2F4dEOxxjMJ15VU9KpDmA4l6HTGRS9hkCoDO8VqPArPkiCH0j7rVsTuNiv3OCRz5gDX5UxTSgDB4vY6pM09r9wZ%2BBc7ECH0ILyYRHyK50x%2B8eNFLAaa9Z7mUkG6SWwD1VSysJXkr0aFKL%2Blb188f7fxoz2%2BGjC6EEnPluMdYJkzTNg0V6AScyu%2FqOwb%2Fx4GwHS9DvXc8a5tDd0ED8W8ZRo5kDJfmgZH21erAYRPF8ocpamQn%2B2wd7kAjz9dXzNmnByyi5EA6aU0zYijSTFE%2Brd%2Byfyobt2D6l1sWmy7lRLPakC%2Bd6LbB7Bh0OeLV4p5ZJHq973zbFLWVhPxYishGR0bfvNZE27E2e6JuFeaE2sAHb%2Fvs7AlI21VhILuVIEd0eH3UdcuiFF0K79wruKiWhGrMdPgiCq8ArIrrS0umqMMnkMeaXsD5%2BqKIknLZ2buxPr%2FlJMRlc7Q7MRdEGutZ8vWAUQNa74UjE%2BOIxVnd1G9uUMHMG0LhXLxW1lZLkT%2FQNbKk%2F%2BpVNvW2EnTf2k8EXzsT3aE9sFmNLBRdcuTafIDNDCb%2Fq2%2BBjqkAQYLFmOO5fdogOMW0GNTFnBhN%2FawtFKgb4h4UeFGraTfod%2FJzGbPPnfaJ4jfOfa0Q6OQv5Rdzd8LrA%2F%2FJab1TakLqr3Lt3k054Oy%2FPTkZWiMC4MA2P5ua7X6W4dwzjhROWDFItsV0iFi%2FPegTDd2yIE9%2Fa%2FwKNduoMTThwnPpKugveb2rUpS4hD0bXiJFZms01WZ9JDsED%2BxFbdPiNfl%2BQSZdwab&X-Amz-Signature=19899add1acb5bd060baa1631b16fecf0915076f2b6cd8ac70a8276aa5e64f49&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
