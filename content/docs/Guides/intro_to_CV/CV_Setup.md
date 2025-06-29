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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MVB2AY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyh32XRXNqylPy0ePwuAk6XNKHrAGYSq3mAm%2Bsowwx9AiEA0xVRd4Lq%2BFfAiHDUD%2FhNm0Uo0ZEeMCfVGPGcz%2FRsLyEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7b5HtlV39KFDrEqircA2SLS1%2BF3BxJF0RdYeuOEW3hA11Mn%2F6ixQcj%2FykCQSxEmKX58AjlL9I0%2F8ZqzPC5DNmnaLl5Co6xtYL%2FfDbNxBrGii5MyFkZuMHW2gHM9kt7qtUcKsA2H9aQ4UbehWlAEiFWIMyYhs4mcmDeCb4QHB5S7o2NzQUi145RBpjP%2B7ANyfPs4N3perXRQ3s1hs60fzY%2BM1qXdoanctNLUHxXob2mToIzixGQXZvaZ3IHkf4f%2FNI27ZFmVF7zTWchy5bm5oP8HZipTPjdsbdrpFA2Yn8nZzFP3dwezKI%2Bu26qPtiVkHqF2YRBcwDowC7JcOFxEWItNmE1k%2FewvYNNj65tmIGvGR7%2FArtRpSVK3M3L9j%2FikUDCgnrnGvAweuRzqCOavaarXCNYu00JJmQCvVwoV7C5YMhjHvwPPo6gm%2BeW3KA0VkEX6qtvDinxVSnywYzbhA9Y%2FQit%2BFSpQ7%2BCyetaDiaGMQZX1eFcvykLyh70hFK3LnfRbU%2B7AF2jID9PaFW4ATQiLlZevLJTHjqiO2fPH0gWwbYaoAwUkLLIsThcDrFxnPRGQYtqbkAh6k1QBRv9e8ERjbwZElxCqCwajS8TR%2Fj1tE%2ByAEQxm7f5TaHIYC%2BOd3jWQC%2BTYdgFiyPsMLTKgsMGOqUBmzBJQ1Lf9iIq7G5U63hG7buLdSkhKwJTTb8AqvGVK0yqotJoMRPSRY51Alibkioldzod9UoV6Kc0Bz3RSUVR%2BKrrUe2L2k4FE3N7cOnd4VtsrvowEnfBMnQnFw67PRctZM1xUdh8lagrj3kYjw7TbrR2A4HEU4DaKpf2PSCh5ONkkh1bgYucLyKqf%2F%2F45A85IR3Yakx1SYWXOJeYjKB4t4on8%2Fha&X-Amz-Signature=445625f1e8e82e1558eb64773ac81ecbc0071aca440c1dccd282ec35b3423182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXNU5KA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbbAAbHtLfV8QbMIPlbSTFdjwhh%2BOTHNihIu%2FRNGxTsAiAXJh86p7QamzPF%2BAkMDE8rAGw7B1vuo1eu2UbhjCiUvSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BsqEGZ7GnoWFKvpiKtwDqE5RGueqP5Wu9GVF3LYPZlIOfNyKo0OytExgQywSjjb2hH6Hjf%2Bb9Sdf6GbCCzv6tKSFKYRj8fi3%2FC%2F3yMxSCDSnFHCaWl%2FAzI98Ke4F4KE4XM5lJxWZi6aqe9XSXbl1uEhu0ZrTVS6WnaarOOH1BcCX1CHIWjjptnFJJvy8PDmpupkkWlR3z078DMUP0BiIjoi6zZNBDRQU5iZEG6PAjpWkVSpU6Zy3r1ElXG4EoN%2BqiiYxpxQt%2B8nXMANFKPNaIwlQwgu7YeGvPgO1yHMHGVYcCgUQRF1QaQtUdMv6yDdS2ZXQFbqRs%2Fty6Aj6gS84aH67oCgsVtdS6HtizQCloraRY699YncAeHlTeR86YRhfXD0YDQZLCTz%2BRrz%2FGV6k8tSD8usLxWfmG34vysftdrOkNo%2B7qWXy8YH%2FW9Ep01oPLE9rc7sW47frufYGYaaFmz%2FP9OQb6oC5K1TXkG%2FxUOjJNvldJulzD0Ug4c0WHIuuu8EneQpnEM1KUVWqj445XI2to5eRw0KExIMx8MnJA2XB22X%2FeFsqFjP%2FfQlyS8vz%2BAJEDWNvxEfW7DNs6OaF5Gyj6EJNMZVtX93N7H4omNczKEBEMC1jDbgmABU9dZppV7nld9M9p7s1yoUwud6CwwY6pgHQbBp7Rh79ZE%2BL7%2FRp1PAT0xqmPYENurBwDoxUwBXrye4hREzayui%2FV4%2F%2Bs2hn%2BB2tqEk0AAEWKzrjmlkv%2BA0ajv07OVaGWgP7hqFto%2Bti3fMV4RmUz4IE0cu8z4N1oHp7kQhe8SC4GCP1S%2FfnRY4kjaG%2FMLlOoAMqHw0bh6aFp0GrzqBdDsljQByrj93rszvf5YYVetll6gAL80gEJn3MkQGWnilB&X-Amz-Signature=562c37dfa9bc4951a80df98767a1c82ea945084a1cdd85cc270db53aec6666b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
