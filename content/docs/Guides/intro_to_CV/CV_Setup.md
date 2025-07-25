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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZ6UT33%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRfv4%2F9UcdzYfcm68HRIxc7jMhs7jExU9AMoNTBUosFgIgKngGYFoPUnKFB6F9a2j2yQvXCf8Tc%2F3pl%2FMiGBwYRFoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDA7zBJFprJeB96w2BircAxlOWobdR%2BQM1mrwUtuliiAb6O1ale3PuXRkRBVYfJ9MDa0pRsiRhb5bkjx5Nun%2FBJ91Q04byKzAxGRErJUvzSaYvk0jvY%2FAsXTWY8hHL8txFl1WpAJmnmb8ytuHZZywbuE0lr0IGbg%2BdmsVOX%2BhkmeamPCgiZM3PXjQfM7Mj3SU8mikTblGb0nlEqYchg%2FLakJzUiIE3Htkco0lzFYWrb97x5heBZUbJ1UNqRv9HIdemFi3Deh4dUuTJru4A2PfnDocBjsNWlllOX8Xicq3lTnRxu0Jum3b7hYts%2BpyjPJxk23fgETeNIbgtqiBUdHT%2FFihC6zPHwxUwhX4951Wf8dwzKuRa3qjJOJCnNjsgZwC0gq%2FXB1D6eiMNwpxp5VhkK30eiP%2BHAtPoFRrZmC%2FS%2BHXQuqETbvNEAWVh162RO2DCbSCJO%2B0tpVOBhz1Be9glJeA2usrH0z%2FiOy%2B6QPxD0Liho31Okv7aS%2FfRxAJGw0jiyB5iRqPq7GX4w%2BrAPZ5O%2Fd3MF7jp%2FfjSROiwwCu%2BC66asKxgfJQX54q5ugBW%2BePKBR9NO%2B5tBhmF4s0zR4k%2FcszIzefAYCxNtwc1ZSNb9ehv8asR%2FcjtyxKQjYBqwdaX0XZpRjorLEQYLvDMKH4i8QGOqUB9HbSr2PpM8O6OqaUs9TT34fK6yg5i82SvqnAYOhUXmavEB%2BAnBFL%2FF0KjQg2JNj%2FTeX9jpExvGKZIsaOtzb5HUEuMDI0DxMJbuo%2Bk5%2Baz4oI%2Bug3WpvhGfWFWRm%2FGzHNapYylf3HexSrQ3Uqu%2FPJi12dkKXYj5GcJYVkdknxKzNOkcRD7OwMBJNMdlwsoFzaUkwHW6RLRq6KmeMyGze5bx3hpRUJ&X-Amz-Signature=3764aecd2548b94b8d5cf00c59f074978d3c7bab41449ededcd353f4e9441180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPMDLUDF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDEH3qyswmJUDiwe9mZkB3l23pJfhRpyaBHN3yxtYBYXwIhAJ%2F6DGeFVOMYUSNDQy%2BS9C8B2G9gL0fhX6y30JtEF%2Fk8Kv8DCD0QABoMNjM3NDIzMTgzODA1IgyFXMcoYs812TcQMBwq3AMoQ1e%2BAQgsAY38%2B7bjiacMauNfFHkpXutPP3sCwcxJ6N6X6FTbzxBLSG6AmK7xp%2FV3HOVapkgpM16qeRsAH7R9dK94aepWmdpdEixfszZawXySVKGC7Zw7mLLnkkLRUtD9Nzw6njejlOfWz%2B18VnbaJ%2BICH7L5ElcHNTkiPXclqfxWrevyERlA0jtiamg1XqSS5qlI1GIyKTqLFz9Rb6tCG3e%2BxD6XB0laZfqaQDYuwbBhAbBJ1a2s8hiuNH5t1JX1eWN%2FhHSBgiZnPt%2FR7bevuY9XRF08gVGgWcpqclJn3OqkHI9d%2FO6I9oB8lyQ%2BuimgGYki1t6pdA9gdR6UvxkpayV9iq%2Bjl34WMss7XK5LvLIu6rHOlResV52aM4TCg2ocDXiY5U20kVErswH6xr6OTdiAFpKkRNGew1Jh%2BPT1ERGccPNpamKmaHCROEkoaV4rWHSI2Q1tP81IGb57LMoEpnvzoHJh7jEdd%2B3GgLo0fMJvuwCEfOekb1sCqeCdNjLibXZONhrtaqVz6W1eoDgnA1LxLGKGntdDNU43Z9sx3Ab%2FmyjhcS8ZwJCb3P%2BhqpN3Kzq%2BO%2FtNt0%2BBJ5ZonhMxW0INqrT1ljlD5NsM%2BhbDxIJTa14P%2F6NKCu%2BQHjCY%2BIvEBjqkAXwj22S9knbt8YAnmLBof7Unbz77vUvMOcJOCBDQefVyaaLcRrS4Qwwm6fneM2957EStuFZsAYzcieDbekA0ccANCcnzvtmQquwxsx6xzMU2t537JOiARVSwf7KiiqwHYamRP98BATtK3A88jRriAa9fbMeN1%2F7K32SZJR231%2F%2FMcOqrmkeVt4e8rDIrUY%2FbaBSU5hhPczsmrSVqr%2Fn%2BSwmRU8%2F7&X-Amz-Signature=d07f66db2c446886f3d0b67fc5030a781470b29417258e66c9b2026ecf6ff9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
