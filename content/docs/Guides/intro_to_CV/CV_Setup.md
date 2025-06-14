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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOIPO6J%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDesYQ3obuiga0zRvNsA8ykccK2lOoH7XCOZbqQxsT%2FDQIhAPsmnsoC3uW33vP0o%2Fks3JzOhBP1xb65EhqEJCEfn6hBKv8DCDYQABoMNjM3NDIzMTgzODA1IgxwC%2B1KVMGsAsyKxhMq3APoT2eoFlUSjrEk4VbwJBPpRV%2BkhsH1J8mLf7K%2BbarVDQZYtHgm%2FIEbQWuPiUtBqYEgiQeRuJsHbIiY628DMnm2nm6CzooWGsa0chbiHfmohkcnubQiO6aZ1Kt8pNuORtCT4rUJW8lEEDv8Vs1VGw%2B%2FZ1%2Bi3%2BPOQzl3NALnirhvu60G67cKkL6Evw%2B5F9XblNpxSt0%2BYops3JUplML4gUh7cG9Ye8PTEjCHBOHmtum1NPJWm1Qz4z3YSdvdR9sZb9cgW9aUwJa8NoP37fTAUkY1K1fGkGmTsJeApyYF3ypI2%2B9%2Fk5Kui9pckBEM93Kw0En703hqzAhDWX%2BfGvdZsisWYiidzBSktEwPOECEBY4fgXaOi0GfmHD50xfDNN5bLdZiXOmOrdCM%2BFOmVcRzj%2F7qJUGFHbv8NdYxIVtzzhZ%2Fxje657KbWyNQEv5QmIkcrvdPGZkl31fkaJwJisapYY1LzLSl2%2BPOIavrbLezxN1eaUQaznnDDpB6rHQlNJcmBcOo6rthLBhOXtWuhly6eu8jFwkGafXVivGJpW1gbZnR%2F%2F4%2FJpKw7xZD3m%2F9P%2FFmwkZM2LGM6hQArYKAzTmYbRYfeJFW%2BhhttLw%2F345kifzdj34Fn5sh12ZYzYeqnjC7zLfCBjqkAaXYDZVDlKKS1ubBHMqT6DppuAOv5l5xX%2FlYkypmcBNHHYTJNhiaKeO%2BAq%2BIpjsfGV0CeEb%2BRYKXzXRV4ZfAH%2F7ME1zUIo8sZEyRLg7TYJnW2zCDrJFgJzddn8DZ8IQv%2Fm2mEms0LukbJ8v0%2FjKleHC%2FSCTJZmV%2FZfFUN%2FzQx3y2IET3aSjZM%2FuLdyCS4mIE8gKGWyiJC%2FY3wUtgSxSuCrVNyBup&X-Amz-Signature=f7ed33a41275d9481a66f5d4e6cbddf9cacc5f044ea5c7f60bdf94220a433e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6BGSLA%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDgOtTpnXmElZWwMYV5Sz7w07%2BIDykalpgag1wyUQ4MJQIhALEDk3ZbTBULly6dEWOCh9e8u8CnBdnCSyw%2FEmYVklVAKv8DCDYQABoMNjM3NDIzMTgzODA1IgzrYdcqxZLkNZkfbUcq3APyLKCgCoOqhZW14rqKQVD4ZIBqrM9aKg0RTjxZa1IvsSK75mJdnOieNmINlveDLsgQCmWECT%2FuRZzITaM8Al6CYX58MkYf%2BE2f3frNPB7pGaLfCt67N6Rje%2BQSnhrv9vyya8s0vrfD6fncg2TChDZZO1KX%2B4zJ%2FqTflzklLXsVF0Yhxk3ueBkD57xreyxSibDSkvOAtrVl15vHGkg5oGaldPSXMLcBuy3FrWiB9TEYlcl%2BbEhEjllDJEBTeqoQKJCAOblh9%2BDgJSEuP1TInNr8mhsA3RBc3X1o9hM5peQXw5547wncC0eK0oSmS8mDsbChGAF7oUKtIz4r8mJQh2eTJUHVilXwSz%2BrVRl2JH9rFcKsumDJkheFZ%2FLKcx4mwCw5mq%2FfES6iccUI%2BmijGEffTVcknzsEAZjAghciKBxY0XSQCfT2HDDDyQ4j1I5M9UlCJ1ex8H9fSwXBe7DBBb%2FE4TRf5bB2mjxU5%2B33N%2FvqOyhMfZEFF40b1a%2FhYhGjOCnAunN%2BHGE52QsxiaXjMBkobh1VbGbcEKNQk772GFTinWYyRsAg6c9%2FTowfsvVowSccQFEqWdfoqPdE7HRkIJr%2FH9H71yZOsO7qSi7HXb2%2F6HJX5a8D9xtn77q%2B%2FTDNzLfCBjqkAdZN0eXx9PEvbheMPSWBUl0QTsKikyxqn4qP8PPQdcTZ0T17HTINl6Spabc17qDJ0sabtH1QkHWJ8kbHRO61C3junp8xu780DIGfuW%2B%2FYRdk%2BqaP8C2LFtHjWIQ4P%2FlT%2FalWstlN87wQhSTC1JoqpJqzF6qeJzMq4ZOrYtK7EEf6k3wqBPHJPm5CeqW3bsOtNuBCSGO%2BXC7BipR693qKNDBf1%2BFw&X-Amz-Signature=14e4f7047b158e3dc07f3934da5a18134fc2e2c8978ff1c82814ab3580e7cb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
