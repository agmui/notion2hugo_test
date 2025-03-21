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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSSJ377%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBhv1VqlzPAFXGQntkamNOk97vzQfHCVgXFfN4ts2lVEAiABptYQXWum0M%2F7IQSSf8AW8mkXhOLmzhRRQEYxRAiuuSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F2csp3UUbhe2e3h2KtwDlzbs9Wi9c2mdyMtmxyz%2F8P7Y%2BkqxBmNk3EcpNloDJieuAsUuZDTlqUK41ByMN00DsP1knvcc%2FuOzDa4tTCWeqctPJN3SEWznSO2sDxcdLCwBc2EOyPylpPW4R62qhWvBL7MeqgIFwkPuYxxiSk2MHMkRY2kWMHWzelHP2HD8rg%2BYBuZWNDoEnbiZPwBSGvdqqE4WdbZk%2FfU7jpn20%2Bg1hC5vMV42daLCDz8uqxNck6LQXnJi%2FSBfQ%2FHZp%2F1Aaaejh0jdOtWOTE8GVglfO6VDw6O%2FuzjUtdWlr9nYZijengwegt1ObJqfDTqesoaK84GeBOorKu81SopCfEhvrfP6stETZ516U9ApfO09G0LKUFh%2BL%2F%2BT4CQ7R7m0I%2FLbGo%2FI64TFwMJ9NmkdY%2BDcZamou15JSfsAenEKiyv1ldkzfOcTzfQTdrXblOcO0uz0mWpIn6ISl86g7f%2FOFtFUN5jBj3a2wuYtrjC81QzDVV61%2BsmaDdvJhmdWnatrpl3MyEAndUGqKrKIrcRZlSEF%2BWW8TyvnEHeNmO0LPWH26OlkaQ1aQm9elYsXxgsgJhkYM1gJMOm1qX47LDORQDF7%2FJp0HadXl35TcPZ7wJcsRncy1mgDzcN4tkopUNYIeoMwlJn0vgY6pgHOvAas%2BuOFfW6showBPyFzrilxej1khYkjLpoVSSivyjqUzQ3h8K%2FTRamvHiO8WlsXamPpJ3yoY0drn9WqmHc2ZhxKCVWHl6t%2BXpeNk3Cq2bhHS3HBYJw0Zui%2BSxJE%2FMwC0Llt85Bd%2BPFKYrrRv%2Fh6mef2aqZFiqtbKvGtmEAe0XFD4Uq9YZuX12shb6hZQc%2FSvwe8OZVsQkh65w%2BHKhN8nRJluT2v&X-Amz-Signature=7dff0b971ece6c3b24f49a18c812db45497fb27c5f0991b77dd327922f017e4e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOIBVPLS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBoaT6zeLGEhQtM4aVE76PBFv3e8lg1lsZTPOjlnOjUhAiEA2v1N8sTbHwi7otiHCb%2Fn%2BXWHnyR%2FjrL1KojwiHh3fz8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6qd%2FSeiK9wQ9SbgSrcA8YmHtDbJG0%2FQDR19PHkNrNDJkunNJiDsxQQWuXToGMPuwB6azMYYHyAztVDeRv96elAMOLYcEQE%2FxWZy%2FIk1BtmsdafoauHUXgQiw2XKLZ0GPtF765IldYCcFlGHK3LY0ZzdvFVYVG2elR%2FYLi0LI25Cgao47pwJynoIRzlZcpOt8jGZn%2F7hUHIrGMuxzriitS8Z01F5NR9t3YSj6MIonhyib8DRgrJuyauYoI8ALZbyEThOEOwX0a%2FUJ8g7MKd9fL7s3x3bXbIwrY%2BDngfyZQP8uwytV0VsBZxKVuMnDvb9ERlMMfs8aDnQpVpDajJU8OnL1guEdrf664dFsEerHLQ7zKuz83NPyb4evSVke69D9qw8G1eJ4PnmPBK7ZBeG1pJ5qbttxluRgDXB7WVgbbUUN6fg7Yph6Uz7XijTXcZj9ZeO5V4wBs6Oin2toJiQRZO9eVx8ape%2FeZhGlAZ%2B9unxKZFYwJIxOu6oFkjwW1ehmKmdl5ym1CHWGaChqnoK4Wu%2FH2O%2Fvj1oGYARpJ3v%2BinuKxVa1Bv2hyO3JzKqnR34IjU10%2FORAEV9LjpmHKAoj7e48SU%2FGKx1NFji49t3VXtEgcW8ecROYETXFkDC2FkIH4JA28Y3BxFoKrjMMqX9L4GOqUBBEJFamM5hC%2BiL0RbqGZb3FcfKMUMT9yIz9lkwZ54wixcqvvuvkFU7g09Dtcg7KsA%2BD6h5KhhwDlBveymIkdKPrxPxGGr5H0IgyWq%2FOsnzzJXOFM%2FrxTkjuGksW6zPBQYX9MTFR5h%2BVm4P55726CZE3yasbpD1AN1FgJTH8qwOWF%2FSI7Zf8OBKGhYFt%2B1EJFsaeRP02VNontwHKoYjGYCJNrr6%2F0N&X-Amz-Signature=5c23d2f133ff1887bebd5739de96627dedcc627aba47ea27442c8785370ae146&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
