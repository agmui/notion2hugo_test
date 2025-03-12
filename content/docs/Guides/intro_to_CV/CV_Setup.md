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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEIZBOO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIH92rSebPwFF0Rk8uMh0EHgMDmKQjr8cqJERcJr985AhAiEA4Nlx8TkBRSP4dweD5X2%2BXlCcBzEQXUDzGOrMSe6n%2BN8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFhrt4ivEk20Nf9aCrcA7dnzVKMM6KE6PjldPFzCG78gL%2F9HAh5s11mB6G8A%2FHyFQHAU8NTZErLfvLqIrje%2B7TNhRvqz18lMMHBMLMlzK9AsxQnEyA7eQ65yEi%2B6WP5jOLaaFLxtb0sHo86cvJw81QkPqaKMAzWvuURqriWxG4n%2BWWqcUY4i1m0HjTsEs85gtCy9vuOwHy2XvQJg%2BSvt0pPpKfPJfSxBiDB%2FjEkNsh6p4eiwLg9Kz%2F00UzzdBacpl6iQ6hzdivKmAOc0%2BVZg5ufBZvPm3Tmo%2FQE0Y3xFr36QmoqJb6M%2FaWU%2BQQO7Lh%2FuoZAsQ38vHWKdwdmCk%2BAoJ%2BArj7JZsAJ9oXJcihpJX7NbY%2BmKiuE%2FpwfiLg86BhrxECuPcyQPGVXFYFcn8n3cUTeB6kUCHKZZzJIIkuoDRuKPSgOJn7e6CCT0ey3kUa35Zr2MhbvcefGTBLHGHtFH7gdc3PkVjMcc1DXFljmVTq%2BFoWFVFjln8MfESrmXBpFmVDSMAuapf6PDDV6oMEKqz5hsnGOvMZjQlkeJEfO0%2FPtA%2BWJMalJOBgnC4olHMG0xoIyeV49g%2FdCxS7a2rtoAjMmUrnMiY1RWyXOc7vr79iJr%2BzkGwpZINbd0gJditR%2BUhocHxr74936cyFsMJ%2F7w74GOqUBoSJsrT7rVSz5qiDXEHmCFBn6Hv1w%2BHPbYtWPwttw%2BDqEBqrgYmyHuwG3qYiKWUZLBqiCiebwthVoDeqw64VuiA4zJnlvRy7IFSIHNIUqraftMUIVQHwSPpCaDOvfxBImhU%2FvzhIqvlzLt7bSEquDO%2BBo7NqIr23djSD0RLYaAnsJVrkaFj1PqMRj8uMSlXatIWgsBYpjn%2BgDTOXM%2B3pRrisXZzxR&X-Amz-Signature=5aaeb977a1795f2aa49a4897a2c3556e5b634d5a929e321a3abc712805ddedc0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DADLWY6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T041000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE%2Fr4TeGpopCtg92JKMPCk%2B4A2DCOllVOb2xO%2BDQTOA7AiAcR9KRtbMihv%2Fy%2Brbr%2FjlfFEk6Ai3JQm6WGqvGmKz0GSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXDyGjYSUMG2ylqCVKtwDua6ImGngbavOlFJ1UHLV90HlwhVLvyddNKzflFG8X4aCcgShqlTEOQ3AK%2BENE1n7s6z5M5tJ5KjsAGGAfx%2BCkk6MwhwPsgE3ANECN4cRxEIy4b%2F%2FUE9rUoXYBT9pmaMZWGGQQWHEoWZLN0up819LJmyD4gqmwhVOSabMFIrVHJpCE7NTqFYPB%2FCXtgLLZ9iNHAr%2FBZ%2BSzPROUxFG4Z6sJzZOgJLl2bjEYHBuUDyt8hAZCMthL0MEszwSa1NiwOK6hz0Z6vhbmGowpgaVUP5XKHGJO9tfn%2BnPIRblzCPJ%2FxXTlY1bPOzjh5%2F4uUMDYXtseo3vB2MXpmNf%2BWNYKxNjcmMwGkj%2Fl8uhONQjR%2BOsvKC4DpkdkF7fS06TnKXBxMAL5orxybfPvt9hBsF3TC0nLs0bDBMFUD2D4%2BrnpfvPqSPG4yxFMxXQ4ldzdyYlMksuRB4zDkIuxCRowIV0MMxVe2nZW%2BH65yv7iNt1ZU8lC2s%2FdloSqpqJ027coHq6U5GKhlumH%2FkQnoCzsw92Vp2cviV4pC7RJ%2B0YWc9awvlsb179UZlcE%2FRFKs7VjvmdtWg3DGfIEvn11Yu3jPd2BM0M0y2GrpSRA8ko51EeSOW96SjTteNp6C%2Fn4l3Vcxgw6vvDvgY6pgGrgepXoYBlNlJzxQpyuCeVjyb26VWZV4IiRGUtRD5bUYjJZwREfeAkLwV21Ih%2B740AURnvq%2BQeVGinpT11lqCnoxNR%2BBW82uiVmTLBmaDlKTtQTFxw%2BOpYn7emU5Cp1Wbg%2BkJMsRVnsQtPIB5XhnVL9jOJZQRN6uf9Mu8nvwRZpKTAiIgomuG5wgoOOJxAmTVMJ89Zxh9w894%2FLUTwSzBg4%2FozxGwS&X-Amz-Signature=4ec42326fe1b60d8b0a74e3be988b917d214344d44e24e79c25cd71042e7110e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
