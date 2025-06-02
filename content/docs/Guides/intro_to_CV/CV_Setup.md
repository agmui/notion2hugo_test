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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNDVK6D%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDsELN77ScT7lA2Gt8l2S2UVGg4q2feJIBegGvT2GZsHAiAUU0ig9EWHMWnynHep0mAb4PfaJx8eaHhRiOkcj9bkQiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOnEf5B0MLfAgzduhKtwD0W6lthr9Z8j0xPm4R1hA%2FOadYGWRdUqQDO0hFXJ%2FCB%2FBbdp5ioH2plAtYWCJ%2F23Hbwk%2FZx%2FudCb0Wd%2B3cRkYMTyP33eRLU77psevi60UB8hdDGLBSO%2BTrNjz8N0899ID0EaCp5lgStMOQcoPX29C7I16Y5ES%2BCAOopiFsuyN8MTmv9SMXjOKlUuSKKrzswMlhCZ%2FYbqaTKMOGh9%2F32FBT39%2FDxwL7rcA1ivaRp5eIZSgY%2BdN3GfEGPPIhqr6guuFMq9drQEaCDZJgkVNmN%2BjV4zgE4hc9aMwHFe%2FHeBrOaCO1Ct0g4ZKijIvbWOWQj8%2FasW84GtLEUmCwlKJ14SUXoXnbEDgt6qI7ouM0U7yjSbWGg8TqIK1eVAEvs40804Hd3an6axpnrsxZcsmwOU3EPzmK5CJoxckEV8zkAqcWjn8LT0AJ0WVBtiOw5Y8XvMwkUNdLhOoMZDZsxrYbKPxmFv3J0512%2BfA0qZNasLXvFSSi%2FBYizF0p9sfqILnC%2F99%2FVg%2F9Ybs7%2BMUqvxoZXTfxRh0cIxDumSqgsz1ALbNK9KgsYvtZVlPZ5ss%2FQZf9a0BYiFk%2BdKyC%2B6iL6otNw5jwlR%2FRJZPNcY4oZfMOPMCyt6L1gjx0gwKx5b0y8IwypP4wQY6pgFdZr1tq1o4PfTfHi6rTJKCwcgv%2ByKOdE3Pji2iAQpyLbWTGISCosYYNUO5i8sOQ%2BovxGVkQVQPH8KQ5pu9%2Fq%2FIu46ti%2BLtJei8lmMvJU8dZRp448KCxm%2F1h9mf4pUR%2F9GLszldeAkZemJB9H2inQO42lf9LyKhozza6w6QhS2jDg3DebXYwNJXgnzEJFWtWLsb7Ty17ZPDPR561Sef%2Fw6QoYMNfeOE&X-Amz-Signature=613434a0448f5e1e38664492562d88eec77802f1bbfe6a3493cf2ad4c0131678&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCFZ7JY4%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDnsmuSKPUT5xhbq7zpG8DpoMWndDsRLq05S%2BKMwdWbwwIgCKWdR5o4ayimWObqDA0FArvxHl4xJ2lJr6Vh1B7qINYqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4QVKfGoIkU%2FJGVmyrcAyhciJbfdEIZKI0kN8Mbe4jgwPJ4YoQFmQeYCggVPPyxEXMfBXNDEVLR3lggOaUnxl2IrnXTtvMBhJIbF5C8ncYkED4NiLDRqSnqLyDUIjAU2gHsql8sWRZq0xLqcwNfvfELXQLw6nyPXg2iCBekR3L8tGnD0tjtePvzkKULQem7L3Myn%2FsIPT%2BYLczU%2FekXy3f3jIljpMNfDVHMPwFrDuRWIwsSy0MKnuZsnkdUdbRCFqWqsoZKH%2F84irt%2FL62%2BSRcDESEwDNJkeveJR8VTOVbRa7U8WD%2Bxn2o%2BZiV1SRcr%2BumJK8AqxuXl9i6FswC9sp78ugScviAyXwgV4GjaeVKX9LjElpzAJttAgEbhW4SRNgs8m6gy0hgAHNGzPDWrlNrCKL4JzMTWm6tOm5FhoZJWdWfJqjt1oBHbJtNAZtIUa6roBYUXQdMbXU%2F5CYTpsz71jeCQVQpNUbkhPiRrpp92DTWBE2gy1yBk6%2BtXBBzfnCFTDJUykxKivl7eWs8BRgFXw8Ls5yiFkvAoVVae%2FVCXw2V8cGMmmra3%2Bf0LUqdSRV7qGq58WpAVBsQ9%2B%2FE8lXLE2CLdxliut1Okcq6moiWpEGAbcGMbTXBEckiViFPfZv%2FmR7d7k%2FaH9kcQMKuT%2BMEGOqUBh%2FRCUc%2Fpl04yuLXUXsNORapY96iE0TbrFGDYMgM2zNot9R5B8UbC3TXVk%2Fz5R2TltU34uqZRwr4MeR8C0j9jWnu2fby1kSR0PaCqcMYmNYGTCP2%2Fq5SElyk63oI3tD8L7Mp6Bo%2FKk8pAvZcc%2BZyo2aBHqegjaPJ7uWqcBZMm7rHvkJMMu2PIxj4EWeFipqoVyz4vpUC6Nm1fhbTp70GZGVPUjdML&X-Amz-Signature=40a1601183b9457f79036af237e3c4d050cd3d50bf1f97655408d9387a4c3983&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
