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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2OCUGA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDmlOuJ3477yHOJwNrZJy78gZWKpA0ss4em4%2BdF0jg3BQIhAIp8k7FyGiN3Z7IoUG4FATcbNZUATp0dn%2FTTb5qeyv9LKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6bjJlEHnX3UpGbIq3AMNHPsScUumagyTjkRJZw70f4vW%2BjY%2Bf11i0q5lUuc2mPRU9AwP7pWAhAhT9hA22xNpcQE6%2FCr8f7m7Wlh3bUlf7fUJvQ5MumXsM%2FlBHle3x%2BHaezpjRoxtXOqqFa8IWTig0ZkpyLVYkmQP%2BVTJqBT6cDGWTuhHLLz2TTTbezMjccuTc%2BRvq4KbjpBxIV1iAoV%2F1QdCj4OMe8cgy%2FJ38PVGOEJ8%2BfyxjAZBHXGiyv7wicvdD5tALmbDAghX7a1GMyMFsvDsr0is9eIDpx66cUkgyfAzcW07qWkZ7dRWjWzZmwBlFjJ%2BghJ%2BouIHeT0DQljiksuL%2FdP5IbG%2F8bVMBvQFCZU%2BkD5gB%2BevjKRDHNHxw1%2FJI9XN1HwsYw3drwxx9LbeWNmKS7xdI9tnNmmBINlcdXEzDL4IyJsmtyRMoXcMbXFFjL7bPYQbp9Rpjp%2FllOC07THFcP23tQgrFdCIJPJVthI9zouq0xeylgxjXmMVDceAluVYWZFkDgbwNfn4fyXZaUx%2BF3zrclhw18Iri%2BB%2FTMgZ6r%2BaVH%2BV%2F8kB78yLCowSsJH28PU5JFclSlJEQ8igvv6FgnTO0wszihnUMCJN6IbeveSS14rFb%2BJM5nFoMhusVsZdhEoOkrvGDjCVnPa%2BBjqkAa%2BBtoI38Hu%2B2Jhaku%2FELXO%2BYio1RUKZGWOMPdVe%2Fcv4hqs8nD5t6c3YP2v14R%2BjdhCKpJgb%2BKwYsga7kjicWuD%2B50%2F1wblhnQmhYnS38dKNa90I0Ad%2B4c2PQoffMN3uMXA7oI4AsScQ8Qkd3X1ugES1w%2ByxcfNL9Rabso22e9mU7ahtQKWEBlvAjb0k7e6nC5JFtX1nOHFeZppXnPW%2FwFZQI%2F%2BD&X-Amz-Signature=10ff3dcbb74caf2f1bdaa938ae63d8c3f0e20f4acc95af44d14afdd6e16002a5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUDXISYP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDXpaRueXhZzGtj1PQRGAYVgK%2B0KZrGSi1Q0kbVZxCcYAiB9SW0sJ%2Bj%2FOqoKXS0P97c1rvLMeVvHXIEfTsU2lK5tsCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgjouvPa7WLoaTVTJKtwDBYj%2FYEP4yy0j%2FTt8xYiOrTJ5u2TGHxlboRHmxtOrXu8klSnWm5CCjXyXWeXC%2FsDUUG2ZCPFzsLUaAr0U9gxZ1amj4HVm2iqPaAlsaNVQDivnhabv16qePfQlbAdlyA0TnPPhEvnQMp30y%2FWWGS0evWLYhhfq4Jc8eULX5%2FHrNXS%2BynXmwPTbd0TSLNJ73Ab%2BJREC3KApCNunuKGhLVGMJLzSuml27ADpOaILCB2w8QtBXrUOJSDIGh8ZFhgO34l5Uvs4EzPE6fL%2BXPIiHzge%2FXUQY6YoId4BdfbnVKQhHXauMsT9Pxmquh6AHFBp%2Fx63XXwzC3KXURq4wlDgU%2FB3pN3j5g6ShbHlRBCZe7bOfRtSzDaEqsmyYG26yNmIeUR8ljpZh0UJC7w93L1%2BKILqGPGb88HfnKbWI2eP9TYCIo1qaLVHKZ3kLk2EmpM1aMK4mkyLXG1%2FW%2F65IA5E39r4AE7mfFS0q%2B9LE2AAbIavlX%2FZbyMM9Npvf56X0HiP9QtcsBNUrRZzzoPi92dZe%2FxdqDJNJ1PnzC3Ms1xUEnNLRd04rEIiDwab4fa65Rq4fOWmypyKXEhumBpY8FTKVpIcvQ9Z8m4lD6nWVY7YlOlg1ToNJFCywcRMS5yoGvEwl5v2vgY6pgF3gpLvA%2B5xgXFQaFGgqow2TdIiRuWOZc7%2F9QU9PiZwXwvTpzUQ7mgUbCNN2F4d5c3KjXuL%2B%2F4MVdXsKn0CBawo9VpDYrE4jNGqqLsveWrXWkQUheZZcDUqxF%2BDxETGbhIqlF9cMZ7cBe%2FSBmQCPfN9X7UvPccUEoPu0Blf%2F9iUcRSWFBzVO04z508RyMH0XUSaDkN%2B45kLMw7mdME2lF0IrQlGGD2G&X-Amz-Signature=97ed765b67a5fa81e0837aa7bf5ed7366eee4ecbea4a392efb7533a8abc001c3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
