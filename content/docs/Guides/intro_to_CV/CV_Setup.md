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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKNNEEL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCo5W4b8MYSV1B3z6H5grwgE5ojc%2FWLxQBmKJ0WbFMYXwIhAPKjQtdjFSGNfQP7Da06qFV6xpFMvJEWh4ziN8y3nGxlKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfYbQwawUBkoyg2icq3AOVH9M6FC2kCBwKHjhyHqWf6MLg%2Fn8Cll4qa7pEpIqFhLeHJ2dd9X2fFZ7YycPgFhgk3ejzx6JrfoazQ%2FZbJ9UNvQBImAPQkOUbGf%2BWC8Y0ggmcht%2FPgWR1TYjh4vpoMpvNfDcnhCDnePWpUevzS0Q0wDUo%2BwxXOD08A1lUJq0BmYTvRGi3ynB9DW0xVVnDDcY4a9rPyUMRDttnrvd3sKmtJ84rP%2B4QUjQhwm1rn%2BGTaqQj7VJCu3leLRvH4ttup6jQfR2IebnZKfSPd1XjgBXgd83AC2lelhktOPVOoh3uiWRWvajRS%2FhX5JlNnV4yHJTDoK91ASu8jWUNig6DRG7Z6e0SSTpGKrZIJGJqtNYWLcFPzUsl9ZI1ypU7X3VcQuGlG65JpSOdsCXbqv8VPLlJg6l3UwStBhUUrE5jaPSPlTDzsFusSUKNOjcp2I4Z7TJyH9yX8CKzr1DStqIEGUPGf5evv07FKgubPPjvSOcpGTio7VlIDKmw%2F031l%2BYGRUW8BFE%2BIEXJru3pQuorbNMZ1TrBryLFd4DgM%2FhDOUcoZA6q0MV1rX%2FvamSNp1LsESwSwsHaoIekW9ZlSVNIz7bDk2FqNQDXtQYouROZUQZbBUUFdUH0bLWuzStNUjCe%2FtK9BjqkAYFMvJBjz7PuIC7W%2FnnOdW025gR%2BdR09JHqcigFz6QoHdGQSLm%2FfhCO%2FLtK5z3%2BP6BazMiA0KUdmk2t3PxGdX3v9jXa2K%2BmiPP%2BHBr6iENDJ6qMcm%2FiOc54FDHl3QJKfIpIZ1N2eBnX0sprX3iAndmkb0VztLPIzWvP6hCOlUTHpkhFFzLEAqKsQi6dPUVOjKUlGC2mIJDbf5leTzWDtVU4cMg56&X-Amz-Signature=6ffbaa7e087b6da5970a5b97ce972d82b8f912a50f831e81ef8530b762755e7b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDN5X7E%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDodeI03RjKfUPrlq0LVJHZ4rMlLBd0Jw%2B3JwiGALG7hwIhAMVnyq5EU%2BdYqfwYVcUb%2BbLbcC3LZEMVIxjJY1kbQ19EKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8eBJRlWjsgVXR%2F%2BEq3AMOpodBjUUddRB07q9m9c5PEjG%2BSVTUmNFMYS2DJt04wd0LiqSNEiNIIzZ2RqTs4DIQNOxHmP4MElJ9MGPVl9krk6B8OyOEKX0nPfgfHr6A7NLKbEGHPGbN%2FQgMxGLcg8DckhodISeb%2BOCqeOI5DHDpJUl6jpfsH54tB3EDVs0U0mRVeeLDk4g%2F4jhvih5LMUaNWpNscaXX3IX1vCyi7zVtueQGHT8TLdxIllJU6%2Bzyb4Qs1RHTXgOYD8qqNysbEJXbfZho9Eu0gBvTTu1y6Mo%2F%2BnHmGHVfIBM3VCaYFRuYs9NJV3Vly7F48tRz%2BFdIjGr0Ny%2Frlabt0pTW41rlNkcplAViDH5oOFZBJvYlA4bLJHa%2B9CRcvWlhF%2B9tITNy0wuM%2FDFw8N1J3yeLkEytYBLi1LuHjjPkUi41P382mnwn89fad4ygvSv6fEBl2QPqwjjr41Q8JW5mc6cBHpfLR5agApd9F4jXcwlx06xNlXcOkldwLBYfpZeEQXZmcP1QerHnj1y0K48cvV%2FXBv34pwN6az5JqYc2H13hXM1ZF47bEMHhcVDoWBfliBNs4mY65YsqALdPkljeclLFeiYqmqiofRrdgEo6Jgpe%2Fg59Xbrc6V%2FclrZa5I0DAiwPaDCP%2FtK9BjqkATz358ZZy0CnWK9ohqwnY63rCYuDdq6tz0qDsAk%2BrjaHLYoG9o3DHc4AZUQj7b%2BU%2FqvqwyqPeTi0wrfwRlLnZLtmafE8S4DhLieM1kQvMrK1qPFBpYvIdzEKkp9924UC89WQCYkhFzQEkE9EdAcbr2mA1x%2B0OXJ8Oyjh4QnfjXcg4ocakY0PQT6FNef7nYlt7yB%2FWryVTsqmSTQVgRsxGgUDwzeU&X-Amz-Signature=785f0d5cc4731116048de5296f4aaef88dfc0deff602469b14e8bb6f118b2e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
