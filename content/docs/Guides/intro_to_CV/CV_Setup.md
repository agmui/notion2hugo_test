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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNGRNZUV%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDq6yXra7tkywG2Dm08sgJoI3ItDmEHTuGXkLaPHZwoEgIgcq5uzl5ALswHJm4fUo%2Bf%2BS9jxRVIvwg9%2FoD0subMhScqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZlaE6gZtQUD2xxkCrcAzdRBniF0nfz0ZihVbTWGKa70jkLVM1orn29bRLQpmf8vCQi92aQGGZUwM3oYeEup2mXTXHH6yktWxTaYdG%2B96LMUFD%2FxmeDt8B6Uj0e%2FrCtTVIhazCzh3FtULEPC6UxkAqMDh6SJjDnyD6AqpxHq9RUgQiEWT5Hc2tlNB%2BsJV4RPLjsEzWeedacQRJDSjMZnV%2F2tqpEP58wwwSEqKBQ2D0jHNLQI9eYhL5qVWUvSJf9%2Blw9nl%2F7VpYunFoUrQYlb%2FFre4erS%2FIl0AO0VjfK%2FqCl9mIZJzyeoxXZAhs70jAmKqrooFZrnZ%2BEw7UyMeZSH8GLf5Fe%2BCv3Po1MD8ecE53alBV%2FyD7uA1R7sdr5ps8YC%2FqKpJ0GeyXICpl%2BDnpSKiQsXoiSFuFMGl7aVESjWCTBmGLdQOzT7X2kC7SAHE5jk0%2FBNV%2F6iI8tbF%2Bf28H9xNJj%2B6uD9gRqB3JU%2B5UkuUmmm8J1WEhQ05P0V9d3pJKbuhAQ9rsVvUSV1EWOvF3GT%2FIUZBRsk0mGApSRvPzG5PHRbJALk2v2NbrojT%2FYIlJ2o9fJrB0a%2FYd4XpJZPzA1IBJVvBWxsdj9KuJnYls7WewBmkmelrc4rsvKWoj%2BEi%2Fh84CKwx2719I3Nj8xMPiqnsAGOqUBtqhD9RKzIH%2FB3A8RrOhaJrN6OHX6u91f9HDTwyL2hkWgS9nVxLWgXGYRSTbeQbR8LRVvXYAZfpnegKvhHqm%2BxqkWsBqp3WRFIgIVj%2FD9o5MlcPD1wPC9aQXHMMqdtMxeYpQUcqJpTBa5v%2FhyQ0dijtjVhAs0s6kGflObnG4%2FPjRoERlmnjIhEc89w1u1wqgQod43jIbYhRWwp0%2FuWXc1Trbr4TFn&X-Amz-Signature=1f6ec894495785ee59fd06c98090c7bdae1950e9ed246e8e6379b270c803c427&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBLIRQTL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDk7A18ib2agKvYp8UrzY1vcQi79mehzHqtlhHG4yJdFAiEA4%2B5acTyZr%2B59YvInjgMxAFK74wRpfGhgSdXYGaSXk0cqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZdTmRfvZYl5htL7yrcA49m6B9IjM7VAt1Cbqk7JsJiUzSJcnPyWfTZwXgeHUbW%2BKad72NaBTgSAELYIwNp2SncBQkZj4wMx2U7b4QnYjaVKZmIAhgTqB4nuUlxgy0EqkkzYTnIVvxqQrp4ZipNC2DRElxOdyifbYoljEgRqYshBpoh0zobtgB0cOgjbksfp3qHkjSLoUv%2BGURqALO5jQJSSXxCnYyQRyiJxpnZbnfg45lYCkve2d%2FIEL%2B6BsD97FPdUDYRJNM%2FDnQUF%2FQ6zyceCPIl6jdlncTeZKmgdvcKyccXRLk%2BG2cbnDw2u%2BhukWMpaURxYIhJ%2B9IuC%2BsclUWHyP1JqMRpScZ%2FO%2BMhpJpoVJBGGXptAPBzOoGjdJvneAo9Tub6Sl6jdw0xdn8DV2eBJGFjf9cKGsAV7JEFGSQP0%2BXZlU3BwSXUUdtkt%2B3RP0LZpsUukh8omRXiQKzJL9H%2BDBDQFblnXmhtx0PcS1zfHzn6fQiZ886HF7jrVWNPvg9kaDXsfTbuLj0utLVXbmqDT9MYyN9dV4m4njyrKki0qnbh0Cb97x9oA6dy5ZkPbzoh8R0J3cQ%2BK80FEJxls1h4wzlm3MjVPUvxQmorUqmgcPgVAMaoByaCByyn9B0EfRa9lhF6J2j9obfSMOCqnsAGOqUBXGp9KAtNwYKpscFo9%2BNa4jyHwGsg2FE%2FgnWK5NgGHfz8tiY2yIGIfzGFJ7if1JnpstQw%2FXKNItNDc621wqxFi7c7hOlAxqEUVyn0tEXFoeqQaz6O0y45%2F8hVw0yC1J%2BpFa9YsiaTcEDeSaCFZN92ax3Zdl9rDBupwiCmWRh%2BwUacAlo9%2BOXbaeHJVde0vMRsD3pX1dalQjD%2FFPR%2Fopr0g8VBforC&X-Amz-Signature=c004fc9828426cb260a4b8c1caadd8642df9e6ab89b5a258c3bea1181856d7a2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
