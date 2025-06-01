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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQHAQWLW%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIHtzuQ6fG1k7otGeQdwI2t8LfNM%2BADom4FzGq%2FL30zq9AiEAs9414GMEvb9qpnywPWQl%2FWTR%2FxtNIUII8Shtv%2FgyW0gqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwOHl9FKuVkCGpn8SrcAymqzRKOLZUU0je3VecZICbvirNiFy1Ma%2FzpXXJWy8FCP3jUVHi87BnBiXWQbLSr%2FWlflC%2B2NrlBMbwweGpqpjmuKaMYNMkhch9lzH2I9cIhsfUA6CYYhuyYlzzaf5QVb46v6CN1LebXOZTIZhGL62cgb1UEQ7ZOALer9t9VHziWlaMY%2Fc4%2B8D0%2FSA%2Fwi5Ry6fhnFeAnDIWDYYd7%2FXdutRWp6ajtFk999m%2FwvDFvt9fzcYNQI1w%2BiArzSC07BOuEIUaQ3dUFnvWdRH2N%2Fwx%2BedC6FMaCkMI0tEDWM9lUIR7Lipp05HfXBmME05fAIr5T7iSssU%2FeNhwOMy%2B5DXjaiiyMqt%2Fjf%2BCvQIi0yS66nVhseostlIOMGOvCPytUbeiK9nsKdDAzlTmTxfIUwvQ11Edfd0L0%2BEZjch50OK5ru591XOhj4Z0sf1U02tOsI1vBdfDJmuena514w%2B2X6eR6NV68dhnAb5CL%2BBPSrN0%2BgQ5VnCm29mCr4pKxebc%2Bf5abKmRlBfhxnqFag7cY2GjsVfLlRARJYAzkRbkErFbyC2jzYAP5I2CVLQ5gyuYf5y7vIQt%2BiUWnRGTaRR38kP1kENSktRRK184vZ7r1SaKIRZ3vmfCrW6aA%2BcHf2795MOvR8cEGOqUBu5sKxk2Ic4tkpGmZm9AQdV1MpP1lTtiKtlpqVFeJEfUYJ5KJ0RlykyOE45vQBAEvbLj0dFaAQyPp8A64yRfU66UefcdlhNjOzkhYlXucaLR7S914JuGyenVot2MyVIzdSLUa514v8wN%2F7zlvIguE202k8ctKAI6v9jGlnQVx81ohZQVMaloOUVWdBZthKBTKD7vIU4fthWs4VcAg8fZ%2Fkg4RhJ2e&X-Amz-Signature=d555d0289f493e82a7ecf43247a04df493eb6cab66db44f5d7bd86f77079c05a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWNEWBH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCQpG6OBYiEfYdgzm8cErGdD0Hfma%2FAXlf4QwL0etII%2BwIgIfdiAgYDJsW7JbnxTxCaUHBpJ8qgSfEAuAd1Jkko2ooqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDfB5lqSvcdZpfNnIircA2lv1c6NJHAhVngECxOhJf6Kvdz0dLjOrSzgfjQD5aAub6hwOTamz0VU8YVxr3pQfti34%2B7GYlB2pY6zAldtEpayfFS9Jaugx7%2FT2RqTO1X8SAVkhrU9OnDq4oQT4ZeTL0Xv3LxAcY%2BLBvYoGR3ZodMEkBpGTmzO5zPsGnHLmg5s8eG9vIZhYNiU6Gj27OxLEVdlxePO0P3muj4ds2O7M%2BkISkmGHmgXNyxLPTD9qhEpqQb%2BzYM3ntdemj05ZMFmunexaGAohS7oz7W%2B%2Fhd5W0U89ySTgj5R%2F9I2oQxdwOzs7ZUvpUOo9RycfMFa883tOjpmGyZE%2Fau1XeF7Ze50Z43x7mY6nHVit5bfRqZZ%2FcBEigRGdirH3XR318qge91gxj6%2BokPJwLtVKiw53hpstMd7Bvhw%2BrcIjQgIvZcjSvZw7jv1%2FG50TyemAynbHuJNVbxZwvbU%2BpdEkgpHpCkVYbhSrgpop%2BuAytk3IxAYLsVoZQ16%2BUOvrIXCX5%2FLss%2BCvh7N6dwU5vA%2By1FtvNTZqr3NkQj3ys9AvTo%2By916wZV5Z6H43x%2B7KeDLIpBGMsqmQiHveThcweixDFkQYjrjNPEojbjXrY1M%2FztGr322CzTnZvw%2BhZ8vbZ1723sUMMDf8MEGOqUBLyM8Zq5tdYd0%2ForaQUC8yHHO%2BXIBAr227WTIRsuApgkkx243DZOY24Gd5VE6YJzv%2F7PJYHj5qZ9%2BQCNZcQGfA0W9JVbp2xcF2BjDAs0YmB2bxtbe42oLq%2BjzFmovlm%2B%2B5AEH9w0eca1K1ixu6mYlEty7k3eU0j1CNxyKcGI1abrJrhZMV6FcwLCC1kiFJZOAVqMnIekLQV3L6RIyVXpjrpbMj5Ns&X-Amz-Signature=cd5ef6f9c1de2f355964b5b76324481a2238f694d92a840ef226de51bc6dd7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
