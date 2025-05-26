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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGL6M247%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCO6OcQhiT1hTk3tN%2B5ypWqUYixkOiuOcOZa3ZYeSLOigIhALTuL2sU5W0941ZDLXQR%2FsIOJmSEbCKC8mY%2FCFCyytMHKv8DCDsQABoMNjM3NDIzMTgzODA1IgyA2FYcKdiu4%2F5V3lIq3APEm0YIfivicsYozGbivp5zrq6ka0ExfOcENVEKOYAYYvtqob%2FaQp6R%2FemlNuPFXT2sGyKvxa55yiB6qKY0iOCbJkS%2FdCnbEOaOT0BzohBT8qYQTEM7KUPoTaXZZ8cdMyXv8%2Fa7%2FU6GeQdLbZ8HtfeOjIvi7aO7ttvO%2FGC7ZdZjKnRRltZiUS2SoUAr1UZde0SkfyJJXOO4%2FMbUuwVWQgKb1Klpk%2B36B1foo49%2FBU9A4f72lj219csVc5z8HbJa98GIS6Wu53np%2FjHLINNi2B40ndml1BRQhJQ8AhDRG5fJqF7TQn10qVuzItKP917dTnBpz27WMIpXknKIUUu76ugA%2FvLXKpraejpHwdZfk8DGUWScu4wk7u8SkHEnUsTp3NWHmrkuhy6sQeX57eW3lH33OdIoXnT%2F4X2JZABYWr7V0RcI2HX5SxDkcknvILDKpbUqqSBdtBgTSeEA9q6pOHAfK3zeC0KlcvO0NblNk6WoA1DURfdpliTwcH6zRprKHMkzQzSMmYLEKRKw24qn4Yf5icHDcOlhHWB61%2F7FBtJ7Yw6mSGbWUfy0YpNzZY8VhQvty%2ByYNdg7%2FUZdoYjq5lIQnYjnaay9vMZ6DdFMhUlE50uis8bERP1XctZYYzDwnc%2FBBjqkAY9syyG6zI8mAwMExHms5i20F9ovUbFV2iGA91W4JDIxPa9qzGv%2F7pNgacBZR6Ndswy4aRPyd3SpFh17uz6OY9OpNlSBrdJGR86l6PWN6zoBZsCJpte31oH8ACRTJiR%2BaFucvYDy%2Fy1cH9bhqgYcl58JveQT8gKKI8dU4NxIvhvciuyE3YAWwMagFPfIcXABMZ5XwCvoa4fUmszkoZ%2FYe4QWznAx&X-Amz-Signature=44571ddcded236a9e32c6c9c34bc6f145662c3dc4931378cc24627854cce51f6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTZMQGY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF7XxesTCO%2BUHDZR0vkRis1jZDplkU2r4xPo2WZS1%2B09AiB0pleybHIlWRA2X68p9d5fQV7GPbuMToRksSadK8e0qCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM9DvvhlSKXV813h8GKtwDAlg7p5NG43VkUAZdWfmzo7Uid7AjwGzRV3r%2B6tGhsnTfghqRVsklLyzsvAuUMo%2BAQA6IrJ%2FGOpYZAEEt2niOUrTYglbZ%2BBacHnduHOfLzn86bND3H4UfXMl1OtE%2BSQ1deJ3%2FcQJ3Xet%2F3gv9ntDPnZuCBp9MUiN7Ro6My4VqK2H5CA5JcXFXRtBPECz67RB0oJzO9A1znzs6dlP0S3UQApKu7bwq0YDD3a5H8VzuakvonpMz9uvu6ZVD0GQOFO6BvrDqgSe73KU8A%2FnEJZaHB6Ocf0tHTVVXH5fNpxPmHTkPsuKoUsEVjnAAZU8ZyTNo%2BvNTp0oHz6ioUNXxKLiX9ebaI3gNojFPqEtuc0UDoNLUaSKockjnvgnhAvhLa4QHagtESxrPTbj1RqWlkuyqIdGiK4QfbZocX7v%2FYG3x6ZK3BpdzGVJQz8ZFlHPXiIAU%2Bf7LbKtMuJgKmuFRyShr7Cp%2BBiIngrHBQE4BOD0gJf4PkNxUEdgNvnniTg%2BK1BFTQzbFtC8ybj7z%2BbrorScSCYupUKdV8N4anWtQVzrmbk1g54BN5URk%2F4u6PsWzyzGU9pratZQXslpf6UE8bdXIegVogJrm8run%2BrLd%2F8Zn6FbzcnjqxiWbDS8STNUw%2B53PwQY6pgH5gx%2BOJEZKEEKuaKq1JyAQaLxPN293pz1QbYq3l8faN4PBgyQ6%2FSpi2WmFuAMKSa3Bp0isx1UUEsHerxS9cnhBmZuqnyjcfuFw0GTiRKeh4W1IuenR1rigpiAMVrpuj8bfUf0pgxUbDP6CUU8tbNcrtcy%2BUA6mJ0dSmtzVHcuhsfOl2SDVo5RUL1Q4Lqm3e9gfZFsbwdv%2FpWjrKiFqjM10TH5qee4e&X-Amz-Signature=fb662d369fb6d1926dd5f53990a36439c244edfe917a031a1e271743fe030ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
