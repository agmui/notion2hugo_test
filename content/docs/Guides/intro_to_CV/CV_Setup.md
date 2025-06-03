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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHENX4U%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIBf1XSKw0xRTt7VKJihjW2X4gIFsIuSJuguHIJoXN7q4AiBBsZiugv%2BclHV0Qk5Koa8lzVhhcUPE4TdY6r5hCrGxIyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMxTNoB8Sbcf1YE%2F6kKtwDqsIvffrzNe%2B9FvGYQQY%2Bqn4geficmzcM17WxTbcdnmx4XowS7AgW90dYWshSGXfRtQ8k8Y4FcXfhGLE2%2FpGycXFa8H0GTFxSOhi3OQfw3s5OcFUeA0vba84XA12fT5llv5GGkg2r5oDWhp2DjSR%2FnXJUGvXPzDJvW3Aw13ZqIBBWn2J%2F7bwOb7LJUE34V3Pp3aH5qdXYwTjMMA%2Fv0iNWVdyprsZN9xzLFpwGTE%2B%2BdsOUImxy%2FtdS5SykMb7VwSbiZB9zbJA3YGCfUA%2BuPp7dNHuIWuTx3clDkadoW%2FhY3a6R0aQTd9BLpjLJq4EWtJEw7%2BO7UOpLEnt7dTvaWVJ3%2Bc6S9DQMrDdcwvrTF%2FFhOMDiv0OobNzQKwJT5EDZGUUU1T%2BFy9Qe51%2FmFxBQjaXfdrs%2F21TBi98IVqzFtMnChhVkjTvAaB%2Be%2FzzfS%2BkEYh2Lrbes%2F0kpgPHLH49VjWflxaJ0itK6haVGII5mzPiS9J3mG6Yam5KFhiYVa%2FxKzcdIFnG9B%2BoaWL%2BRtHHCkArWLdIQG5%2BGrNQmOYencDDqYeLiEbKYSNF3yt4xuSspwUXvHiBnABM%2B4I%2F%2BfrjW3ynVbeBnm7nxGTeCU6ckJcX4cqT7SrM6qsjyEizR7nIwndL8wQY6pgFbDX%2FU2C7bjOEE4651GgCZB4QMF79LJIWoMEa2sBZTizyKkq%2FXqRqqeaoJhbTIhfnBRLK%2FNWJpYJfqcHw7ZxtSQVAheOrDk8BpnKHQAe44WPo%2BViglXDrgqSPJR8S27ClJnMckiIzinKmHZTPd5Ih%2BN8wtlmwVr5cA3iIE5rtJl2Eg8%2FJv8%2BGilltIYKqWsUNpGI%2BJ3GO2IGhFjXytc8qtkIYEaA62&X-Amz-Signature=363dc11c5b91ccd542d50abd4f74ff5574524d1435ec99463ef00389937e096f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USI4UBZE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAEtS6SRoGeyKjekVgEuwNP9FfcLCKnW2sIucmYGkE89AiBHZGJUU%2BWwDINUBYNW0aBZYjeGNQang%2FqZbITGtaF25Sr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMvAn0a1pDKNp0RoX%2FKtwDP3v8QlIBJ6flSsdPKgZOeFyLLg4oq44IxKMOudzpXujl9OTW35bF1otIuL5ul7Hk%2BAq%2F%2BbbBAD%2F2jkMePcutiea%2FFbkgHaiOyXYBnQ2JMzCuqQc6SMOBNMxe4fFkFwuYPf8M5LljXNAUQHkOBV6XPg%2F5vemkhBqeP98c3R%2FoKFjGUc9aZDJuC4p%2FQe9Cxb4RjbRJoG9eeMqdhCopGeS5i9FoUWQwaJG0joPiy1tShR7ZpWroY8LO1xk9am3sa0cnfg%2BFXpGGhynn%2FmXeNy8Ju6oEztJANRK9yJaAhzjM5kZaWhhvLd8cL6UrG0aaLI4OnqhMVhQvnuPtjBd3NUt991f3FkKiJn8JFkFofCjGQ2lRxNfumDKPUx21g8%2F6WAFv%2BgeOI%2F2Y%2FYQUrEJrv4mI0CiIuglTFmnp3oYyC%2B0HydFyj0kLAqja2ExpAnl8CjO%2F8lQX1LrDuSSfu%2FHiPAingb53rg4I%2B4walBVlSgkKrBHC8KcW%2B%2BEu0WUysl8xlkEM%2FzRqnHB13ds5UJGNBIwyYiAGn%2F%2B2oMBlo0JLtcnVe03Qh8Mj5cx7tlWHvm%2BBU49xSqAo71sZGebDd%2FnH2w0Vk5R4BUaZCI2rqJePJn7BKO6xwBrw%2BHl1OSzPLOcwvNL8wQY6pgF6sEytSrYyXNwvkqX3oxdmWB%2FvUVzMIL3mxQdCnUs7QF0FVMurHdh%2FRn4E%2BPKlXQLpub3HO7Ya%2FHkO3a8b6a7HcdMg33%2BttiBlTw4Mm4s2fwWqPTjKhXQds%2BYCp%2FpXKHqxQKZHMDcRzfhW8exWFL2UTt1PYEDk02EkbWy8uwLP8ihVeYrKNEnIWe7nvmiURuzYX%2BsrsDayOTmhD98zFYomepLd5C1c&X-Amz-Signature=76e9dde88824bcb8dcad4b94044af0b5a3e849a27878fee3f5715d9f3f9454e7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
