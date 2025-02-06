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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZUWM55X%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCJRDU5KDhnqtGUGI0T7W7OQkqizU1VKcJZT%2Fn1yW8vcQIgMrNksngbS01toq9EfO7VR8khyZnxCeKP76DAHI96B2sq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDA4vdJemkZ8gf5C2aSrcAwaFWUxzi0Lmbj%2Bd5UZg0KyaW4mTBYm3jkXF9%2FyLuV4VlrxKFNLrN%2BMWHLnNpUDEPZUmocPK%2BQb9of%2F3qOeW3F%2B9etcAhgQvnFIzFO1RanonV5e1gLOB%2B43Kdb5ZMUFtP7CQKRVzdsBYGprHjMQL1yvDJ3CW5uJuI5Mgh45FBUbWabqie5pUGpZPH%2FfRFjIhU5xThd7CADf8YxKVeE4QfdPi%2BiO06tw8LJC86dzdpedNnujn6fUjPWQ1yLUGYjduIUWEA2f0%2FqvpORS%2B2aN1%2FGKbHyuszAl49q%2Bg6gv6KHiYwYps4l%2Bk6uRoWb3%2BoLWOQXhZDPnQkrdG8Lk5OUoHhcEUk74eE6p2rek6ccFbyx%2BAWFZ%2FxID3Kuwa6V5WSEGQ8xC0AN%2Bco1pijtoOOJD5ZFtq3BNXQ5e1210PFHktRMTnN2t6xq7eVEe1pfTe6vF4TvP%2FyUu%2F0nZ1O8I3%2FrLJhUD6EFGCcY6EduEUEnVMPwc9qFTTWMChcBXrM%2BUtS6BWtgKu%2F9m9DRHkALgOG6JAeE5R0x1H9NOs12qKZWjcxo%2FcKsC04JeFGYcYev3VfPZzMY2s3nv3UNdVvTd5Qhzwf%2F0EuzopcOLDNBN1BGME8NwkpZsTop9W4qHDPHtqMJrtj70GOqUBqeyquDDQfRjVfei63lzP3pXvyTUpDFfHJEno4UWGgS%2FGlxZnULEmIzYa%2BEuKTsWiVRk5rJOIocF6vHln4XjaWvU7tQ8C5EcjQOJlq0jJSAW8rd0%2BMyoXYS4YYE5z5wiFu8cVNRXXhRWHeSYsMkcb1wP7V0e%2Fp04fPmQRGzNB3Kk6%2B8hnBXk%2BjIYJNYJtWHiZHCuAGp3Lb7JRllH%2F9aX5BlosKb3n&X-Amz-Signature=dbaf1eaa569dcf3fbdef26fdf72ce2d715b2dbb3cc9aeb9bef05f1454f9616e7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVTJA2B%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDQBnODhaFbwhJE2gWOxeNRQa0B9f6dT0qnsMYrk32EMgIhAK4AEfEyqlUd3skIofCafPdwOel0Fr%2FDeMLq6IoYYtbQKv8DCFEQABoMNjM3NDIzMTgzODA1IgwCy0LYs4zyEi5sqtEq3APPDnMLvDzXdT%2Fc9jK0d6rn2F5Qe8pUQF1poSv99mkQfjreh3Azu825PjG3B6h86TnIPwCwr8GH%2FZg3yJ4UKIc6lw9lpVFXuS7OIfrrxyECReaas70tTazIZhdpXVsd9ydW5eOH0kYdkwiuo4Vtck9knBt9fhvdwJFkh8eOjkZxWLgszaVzFte8jX7NnnsqNhGTuoC4rz9%2FnBVbORmfH%2FQMg0tHRmOuTSKPH%2BSYMmLGnZomYSgBVi1tT6K5gSx193M%2FVWnsiLimppGyf4tZRWrl7NZSsZZDUneWcrlen6QeD%2F2uBVG2dtWMm2REP4QXOSybN16sD%2Bg0k%2FimYZUrhifPz%2F1kew4rh5CNqol5R82b3g0z0458T3huLOqLBIv8902Damnt5VLcBVLNGePrYdTJYZfKgQ03J1tZuMxTktjdCbpj70Ic2DuQnsYccKwYJ5FyuY%2BiTfNfkpYlydu2wt%2BnPE%2BnLW%2FNUgSUaaGMoj8BSl1BvDxiSQWtvVkH8SPRokACa7OamwdVNFyq9PehftQHMOQ3DFBYr0ehwcYTLcNaFaWeKWYwGFKvebuYRJZpy2VqgRxBeZGn9%2BDEq%2BTKwdFgcOUvmrkXgA%2F3X%2BHhYauRUVjnYTQTtYEwB%2BxC5zDH7I%2B9BjqkAdVIda5Jvd5CYI8Zt5fx0Hl6%2FurV9lfmOWnlU3gricZcCBUQxPasnrrQ76L4LP29zFkYg%2FjwsSnIzJgB%2FJiaX1dtEsZPCpSSjigq7vzE4aTlez%2FZ0zln9ABze0%2FxrFpALsHj3V9snlLtaJJ4kwwc3qUceMzobwWM6%2B3pO%2BrSw9yKN%2FvCEfOqDaBBro9us0B6vCVumLiCM7DJx0WjbKZwtm37A6Sf&X-Amz-Signature=ac874eb1bac6c04a9bea9821544e4ed7a4b0296ecbb1a630b8071dbc05225498&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
