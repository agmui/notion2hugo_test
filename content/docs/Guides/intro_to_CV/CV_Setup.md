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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYFDEYXY%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIEd7JSrsMoeBYlaw78EjuQ987TbqadcipWazNXEib5ePAiBk6RyKA60Wm%2FYQQCw71vKlO6gkXFDajr2TR%2FIjO5TKHCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4C5VK7W9SxbP3WVNKtwDYlBIx7goxCaY6iq8j7YTKAvQb7vyDTz%2BPSUnR4UYLFKZ7pcsgY0In8rVc78vuX1ftAJpH3welkv4w2%2Bvw8rbWLuGyMWncwKhggTOy9v%2BcclnFpyhJrjixvAmOlF9n3x0WsIYKyPfdnTtBNbHt%2F0sPuqQQkE9ouh4%2FCaDU%2FgWg5wgW0rC6mRXQcBOnqS2m4bi%2B%2BcS4SrhvmNKmemwR3ERX0J3EJUtj6WEY8meI6xCKdhE%2FkMj2cuC12Ly79cKMmh7x1FkqCAbbAvxC4q%2FpSwNu7%2Bv0r1Hp3CUGyWlWdVMkuJURsShp8Av4vRqiFh1uup6Vh7%2FE0AOeOQpbtT8Fes2PCMvLjpkAuK%2FBlSx%2FXUE8%2B9DFhqJC%2FGOOgqQu3jZqn2oBzIDAwnOf88FAAbwZ7q06NNdQqYObZXvF34Te%2BUuxAuMh2u7ASLqTl3VY6dzRubvhJsb3F%2FVciFYsxUgh5k1RB0T9VcyX%2BHS7yDuu%2BWn83sZhvuNVP%2F8h%2BYNPX5Bx1HVOf%2BR41ItHM%2BZmr8UxPPN8MEOmJiH7Z7buFYWITUkFMaOX1BEoy6zUgzJY1ra2WEQ8eFd%2FTJks4r3LAByc7F1b0%2Fs4l75wcM0rsHdyJapXzkSuL5RLRYozbfFkpMw4YjnwwY6pgGeJL8oAypP%2BeVZj94o%2Fae2zPUpwmbWvkcEWWVDs6QjrnTo3%2FpR5GiTOrqQ7VHnzvLlNjqn%2Fav9hsd8Nit%2FVGjuL2O43%2FFl%2B%2Bs7OWKwypHem2xho8%2FpprSL9BSrfG6CQKzrEo6UKQ6jW5u9mXW9FXt3aQNV9OY%2BnJV%2BKgWTuW2EGVYFDHqd8yYClYVvzvT22%2FA%2B6iNtDG677EfmX3sSJTLcejeoUK5x&X-Amz-Signature=53699331ec9ea71284efc76a3cfb7f0fe9285e76988f691e8afe08a2aa8d329a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DFL2NF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDY0I8Z7uJ%2BfMp%2Bnzj7UZMdL%2F9V5nqgGCnEFC0Bpy6STAiBMLY6mXu0mh2MHwB8ut6ApQ8gUmwBlPGza9KVaMmNFsSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPZoaO2fy%2BMedyOdrKtwD4PBdyUqR3tvBtJrwcyrFY4DhM2%2FEMN%2F%2FPnbdxdELms7HS5oqkx%2BoHftayQyre1RaUACeqCB35aMK8o6AfWxBNnEgqtOdOQ3mX8MPjOp1z%2FHNSE5hVIg14qPHUP2MWOg%2BgZ1frR%2F7S4Q5y%2FAoGnv%2FTRoEum5G%2FsoUzx%2Fmkt0JcCEe3eIeydUme5%2B04E83f0XSllKTH1Ffic5MwoCckp9TeVy4qa8lwwjjyQpVoF%2FrCPtIXzHxVWQNUCIUZXyQuTJz307vBSt6duknCA5nDMEkOaseAwkibARV88zzNRqEDoix05opM1kgOikneF6UQNh2auqawtxaMxYy%2FjVpoy1LY7uiW7Hqf75gNU4M17WLH1K0OR5ZSwTSELOOLMT%2BfjOVqJne55hfbP%2Bsizm2mmQqQB3N63DK6dhfXV9AJuCkjTPR7HBKFa4yPNgvwwH8asFvNbn6TiGk7q0guVA41dgkb4rpTRdkI6O4fgbi7P32TcXauxyKhnq34N4GujpVktKlPY3UhZw9xWIneZxOh6JR3P5GaF%2FqKl8rIuHTay19rSU0CKuWCw8T70Kq6LLVHCUISn4UpFvNz9%2BU99UNEge9V2dozlJHwb%2FgezSP39h5itQD80b1EHUs1dcefd0wi4jnwwY6pgEWX9hjmbKyzjAaPCIOvK0FLtOVqEVV3RW2RwkWKdWvz%2FUCysRalaM0A8Xab%2Bsx%2Ff0iimrijQtOGSB%2BCL%2BGJbYDxdQ3bVtLOGe4qHexyXveHkyVinlMrxWyRKg9ksSCfDBMVIS2LdukvpOqAvfLaK4mvO2rOZjo1VqFDrOMjUPgXCK0rri4iLpkCsfB5l%2BLWZVWGXEcqWpnPlAd6%2B9uVudP8r2o4fwF&X-Amz-Signature=1a581f0c3a11fc46f1ecb354d850659ced2c6bc29ee4a23f1302e4597a13d98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
