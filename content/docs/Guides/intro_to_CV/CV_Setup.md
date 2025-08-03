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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJBG4V4%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc6Hadut3lJhRTjuhnr8sb%2FhesFArrkp7DmWbaer9T0AIgLPZMimRKcQuCYsIJL7Gf1iBFNZBuha%2BGqdMLYPwDd7Eq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCHxdMCCRodnbwvSRCrcAwmQGdPKAbx8mIZNtlCInQM6H4E%2Fb14HjDVmSsql2GBP4UQqvZBTb%2FLq%2BZ7tmFuXj%2FGMH6bKcaGajA4h%2BLHSzlLZzToDWLw5jfp6kqhdRsG52HRL3IunHqIMr6aYUSvyzReHFecpJRokD93GaEZadU8nByH4rM73KLxTQGI2otYzmNa3BStymdwNkG40gm0ckozRPkXuD5o1SalOJvFp7Op4DfZu6dLuirzH5PKsBZXA7dHO%2BwvpEe%2BcWtejcmkL7dmT79%2BUn%2B4%2BAdZV%2FECk%2BEX1EPHWcC8oWJYBXG7xXU1CBzArfXgGumhMLWrMEgqSij7pOvUr93%2FAslY97Yx39Gfwveo0h0S4lTowYrjQmG0j7dwhNYWme28AzGpA2CWL0bQrPcU05qieRUaa8Ty42Mz45lwKLPGdVJ9qjROt2ISrfqKNJPAw3YzDkaGGXwAwF7u8Tv%2FrEDUDvjnHHnsgVLrF2kbA6GiLwujODzPjzPkQASY%2F0rwTuhAoZy0yoyyOtlpj0W7ZkrR8c7CmwhBlLG3WauePpIRPFeXrbB18QfYhmRfCzlhLx0%2FJuO5foMQEqjYFBYzxqUk2ewIjz3hwK7IlUMQ49kYGnYHjl8Go0CFUzdMLHg9Qz7KA0vyMMMmfu8QGOqUBVB%2BQIBTtfv1IVGQ%2BL09GEOLqQhOXSHtvWzb9N%2BwjKacxUdxwbusfJZOQoL4wKbW1QuMPVaT4GEw8dcYmDpMLwmWVD1vD0Z2plZ3bX0p2gnWqV7%2FHoymxUF%2F0lJtNrAUjZnKByCNLldgX8XgiOy8tPUhmhhzpGLoyocIy%2FszM226v4rLVxCdP%2Fn0Q53iZ8DYwJtKJ22qAMUL5rXL0WMXp6wlkASyZ&X-Amz-Signature=bb17617540161570d099e48cf0698fbe34de391a764ea4626fb6ca4dd2413559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQNRIYBF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZYXrYi0GFK93P8mZ6Cfoevv4S%2Bns2S%2BQxrfV4OHrWAIhAIqI3zB5ZoGeMNuBpVouBloZrnDsiNDABN1ZD9N0VFopKv8DCCQQABoMNjM3NDIzMTgzODA1IgwgaVv2m5pILn7h8xYq3AOgC5d62EWthB1eg7Kvmy42LOyhfhIP4WJnyDQdd4PCPs2Ei5bZN9R3Ud%2BuBiShJ%2BzVN5wXdxo6g8Lx2Mo%2FzAolsgeJfeVdS6Hal6B7GhCg9RNlAshGu7QNWgik%2FhqKtHVub5pQ6%2FYu9YM3OJdaaf82vbTHgYDyTwZR1z3vG%2FFlX4Yx6K%2B9i6n99Bz1Fej4WkUWWQKl99HmM2EXPfJ81XeyGVM4u5plBQ31aQ3dZogfDJE2ViFp1pqwC%2FHvqWF9GIIE6WvroXtxl8vtPIbbeJSWq8hKWnmJzrlE1c%2BcZ4IhKx2fB7Qh55l4LoAF8ZSiBFCtNYJQ7QGCavUhDsS4L9ikJYObLthGvXySFZ5KECkLOBdWBVzddb9b9RzeII3TgCtExiam6rqp63u0dLTMkyeiCVyAHMBmrB%2FP1dzZfEr0PcPHVt3tvaPT9H%2BsrbNo4V6P80mwcSscdlfB8XHcF5yWoCUctylOYtbruIE%2F3x3E%2BTd22DNPCEoQ%2F3%2FTC6%2BEi2cjw8qMTfukLiqYxUzreoIoQLp5bWB8w4SsZZtg21dJExx0yJ8Z8sdfI0TOJYF27ijj6wkOhe1geWpYL80R%2FWo%2FMuRfrgQnkApVHTCjWAeCoMM%2BeuHVawCvYzKsLDDypbvEBjqkARaojya1167fQl89U2VrqRgibGTJIZepSGdxMMlIv6Y1Ys2N6IKzQJbHu%2FLca614HcAhsTWMjFhksikr54sGnoKwhvLwW1Ww%2BQYHzUkSoVzLkwMa2EKfILlb3Kwbx1GOheiUfjCfa9eYlHpXHGbVzvMmuzQRmUp4y%2BFurgk3yZfJ1lGluPsutt%2B6gJJvgeLzELMNvV0%2FSohTIZqBgox%2Ftd0mpuJd&X-Amz-Signature=ed3a5adaf52c20ecef0968d27ab912488141a22c820d51c38ae138c496e87a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
