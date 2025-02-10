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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTEJZMRQ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWek6zzkFqwkuGWM3Gdisrl0bJxuw1i1UICfzVJjfA9AiAMPqs2KtLe%2F8YzKx3PSbygrEqpU4JcX%2B97jCwxSe0arSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr3y5iDCbvXc4Mj6YKtwDSBnyV4jBQJ9l1HZjCiq5uUA%2BYGrGo4pJRY9yz6C6EO4A%2FP%2FUoPPY38IQnCKTme%2B3U6TVhDgu82WJN0IevaKt4cZF%2B6GejcW9NHyS9VUYFdUlafW0sZgjEIsS5f4iLKLq4kV0JaF2ge3ReBhweltOcZ6AfrswIx9qI7jH0o2GMC9C44iqoHTBjN5mjsF%2FlGdWDfj4nnPxPyWQvzouUsphrDuJSXF%2BEdZOlP8BJKB7o26TBtYOs89XEhWBfM5PBFJvFWYWkeq43DENnptBIxDIcMWvAOZFwgDj%2FSR9MLekUq%2F8kRQrSCwxlO86ILMHmdXwTY4SgXhaQpSnJ4EvpCqHYSpacmh0NxjZTtp4Y%2F%2FNETHwul%2BPeoqGG%2BgIRekHNPLCJSStwUnVkPkFhykazqugBEPbK%2FGlfyCwTJ3QzhoQUvP1leltW1Kc4IX8eU0ejBjuoAqtIXXHZUEEywnowHOZWCnh0WL6l8vux4V8u8NnIYGSBOVKI6UgU9YS9mzt3LLmGD3FNBum2RafMoPiTcRazDISjZ7hfT%2FHPzLfQLkJIpFsIp1oVNYe1JpZvPosBMxAVkHn3Pq%2B7jUZL%2B5ExHenmdXRNp7f2DsDjzv%2BilneirS2Hb2l6BFdGehZRzUwuJylvQY6pgHhG4z9OIYjw78LKOi0%2BQKM2SKJPUyYXV9c%2B%2FNXheYVfKeNBvqFHg2bw0KRygZcqIESTObEls59%2F6mgCw2oYzqlHpDWqkX3DJr5essSeVCMqyf%2B1OnAhMFwGLBNFubU2jKGDfvc4LKckj22ZlHpWlMAm%2FM5MZLqtGUa9EqC9A4xP2eUaquG%2BNcI4DRuntbfQWEuOSt%2FNIdLx7GYv0K35pa%2BO2A%2FlOse&X-Amz-Signature=13d30aba91e38a41ab2d99dd740067f01f016f5b16255c374b38cfd594f6edd6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTV4XR3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO7Ry7RwmYVm5MWj2qMdeesPWb6lIstLKUaa12LIj%2FbgIhAMJ7f66fvKHAT82eWDtbltMcdK8o9vTey%2FmhJxN7LaNaKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSry2wW4LYBOhz%2B1Iq3ANLR8ZN%2FQk8ptIeicnSs%2BZztjuvh42e5aXwlNFg80nqwUC3WhtX61OyhO%2B4Ra1IQR7%2B3FV7Y5NsVJ9zgOaAxeB8hvijvp5Bq0DOLu%2FWZFUsX3sfowlgtlymqgLS1hikZGX59y4WpxKzbcfOz0%2FzeX4by4KZR8z1QSFOqb56EJhvN2%2Bh2hh8XFXc2QPVglNUA9w43jNrG10lhc5FSexnbECd6lg4llMXiPec1QV4cUFOOngnxIxtiE7zTCOdPqskz8e0LbQdpUqeunhUBvNJN%2FPfPVBpg%2F5%2B47tnknhB0VayaXK46%2BJd%2BeCVFhLq%2BQeDPIXRYG%2BUCdoztmYRGcJb%2B8%2BM%2FkkaSjRu3193Up4O1uzrlqObj4e5JJheXkSES07Srr1DEFTEeyOdBxWhvMVkDu%2FBBZYHVDWurXDGDZsmO2tDmOSg9q9loO58nGq6zR0g0nD6np1vHtfftdz%2FdmHiI3h%2BVkXZz1SK6LNYHYVd3NKZrW5uXGVFa%2B2n7uGqGuQdFOJ1vDG3ydMWB6JcXg0TBEkYekF%2F0h6FFd8hL5kQzX7eQHvkTvZxN0AOZkfy%2Bjb6N8oWc89alPd2Ubl4VRQe3HMQIHoQ8chl9QBrK8m902wpbS4TEpAXlm0%2BmyXMRjD8m6W9BjqkARuxBLQUobIgjxaF9hObThXu9pDzn4iyWlrY%2BCq1Q6yhHTNW0LILSfH2AyS0v%2F2qvGqAcS8kz7UgWptB3U1bRbVMaQ6RK0C%2B8dr%2FnUgn1w8ppiTOCnL4%2FG%2FVybro42qzTVyTllh%2Bx68APguMq9cOITivknEA5TGw8cXU%2F9Fxyoanfyr0Fe1px1AwNkinJiHFPG1KgfPVgqYxyIUJPXE2bv7cmg5T&X-Amz-Signature=b21c4cf631c498ed9dc02dfd67ba52f09bb006e5f42c47f9c8a249f8097a2c34&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
