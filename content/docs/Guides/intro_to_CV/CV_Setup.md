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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMTVRZD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDgKZL4oFy4Vev5%2BS7WL0%2FWfkPYUAO6gJgLDVCAs7ibngIgai6HHiqJdJxNaMy97n%2BbW6NUERLn7V197Epl%2FXG5nUUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3aRrXcsTXEmxtEFircAxtsKuSzn0DXfVbVrvQLl8229XZrqd4ZzOYwd9G9X7AxtzfQPhggNqWiYBb3o%2FPqF2X2Hb4BRUc%2BgGRpqml7nKDNgqccI8Yd5wrSuaKpHGUXuJQjOMW6Zlm6B0G1kkl3O9F6rFk9AQSCRAjuDyAGnoqI9xoq9nzeCRX3nRP%2B6FsEvyGhfcDgi%2F%2BOn3Q%2FTbnLw16mdVL9MEysKL6TnVM6uR2v3uzZvPnFr92gVa77pUYBZDenWolkEahKzY%2FB%2BKy3HqDDOC3cEuX2QyfrB7ZuF%2FvwuDocyiO1KNhvJcR8FyGO36uqAgk%2Fp0%2Bolv9fJqH6e26iAjBIdR3lv%2BxB%2FLzKBMKd58qyVdgUca%2FUylrs7djI%2FKUN9FLMHZ7%2BfUSCXtYWYx2yb2e7VG81FSkTr9%2FbuiHBvLJgyee74PGgpvmFEHcsc8o2KsBmc5tQzuWPLQDm5E7yQxF6E7AEv5LnktRxIZjpQb6%2FVBhkk%2F6VMIxQy3EslmQOYoz%2B5QDdV5R5iWavVDYXwO41vkjp7cl1JFNKgjt2msxdfOuPJwvkFtBC%2Fm%2Basl%2BqWSNXe2gBdOif%2FOrxB4O3OUHSkEboPxtfELhcrJ6fo8rg%2Fz921h5JVZjlumJTMWQtAyqQGyCEfLJJMOnW58MGOqUBeX%2FgBwzq9jHaIgZiu4S%2FYNB7F96JY8Pc2zq55nYuRU02LIbAMJ1YQXy9rqgFEDSpMqSvBBuCqKDLyUsag7gsVi5%2BPus5BUsDTvfbobcm7tR%2BTbtfMPRakpDZFVxfHHw0hxM570pDsciIN7f38QtU2KszZ4llD1veryvEy29xa2R%2FfVkuRLd%2BhitLXncTO3ulzZrEWP4a6mZrKImcG3Yx30bCHNxi&X-Amz-Signature=978b892c105de8dc96db343e1699ce83332352416b7f3f4280e21f24d4f695d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5AYIGU%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEBUeQP4RV2uakMywO4vb2EOSCzT%2Fdj%2BwzerI6L1rAGFAiEA%2BB7PVN9XPN2siRC07elbbrq%2BiWkWRQkz2tW%2Bp0t%2BZCAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8qKx2yoRe6vSVNySrcA6bNvg%2F1Lp7AN7lC4Ex7304xL5SDA0t11UH3rF3fMHCK7AD4GxTohL3dvnqHUcQ8okjktZfJpQWW%2B4zn%2F87j0kWeT6nm%2FXL7Y%2BLXVHnMRKOAWc31getWEJouFOCG6%2FtSc4jet16U1f7tHysoxepoFb3eR7XAp%2Fg5Njtzy%2B%2BjYJV7vkS5SIWxsRzllb8LgZz143MPSUhPqgjCcBs8HnVoMUTquTrCRdHL4uy3mljBUSSSxqQwkFzhqWxl%2BfoPiNOk5EWr2pi%2BvH32mG2dhuiNU5UJQ5JtFLeEzLD515sVwwOskZpb8yRV3Q%2BPfKcI1oc9dBp209XRcbxr35ZYJdg%2Bc0SL9iNIFsINIULZ7ubEPOA8wsYLH5BWJDf9eKiEkNkAcQlZ9ZfaO1dm2qKt4WR1cm4j1vz2%2BnVPhRSj9R0h0LVdXN87qCQNC3cSy5THHDbW7ErjjaUlInZ65TDgQdYAig4vMLChN8SxBzIY%2FxLRQJnbkgqHnDfqZzm0NSwxOMFOsS83mC3FcNhkNBLTlrNu0CetIMqUDpZhTR0n8TbOiYKYSJHkZdlYSFIR2716f8YoaAemsJgN7rzc6n24LMBW8kGd4NJTgl7AzhYiyb3Ci4pHWpqOTHEINxvApozEMNDW58MGOqUB5m9TpptfJbVugshzQvcUjZ4lZLsJgDGItBB9NESO%2BF7la1Rj%2BTelXOxoemXCxKZVLM3A0qSLlFGzxC%2Fy2CgwizIXWGnc5Gs1V9yrpEOxCxr%2BH7DnUAI%2FPpvM2OBTh4FUphvknlSkKbmk8hfVM0D05U6S626WgTguOmf%2BwfrRq4JZhZ1BwI376WAaAYRr7vDA%2Bius%2B3EK5y3%2BaVwZosNEbQRTaSn1&X-Amz-Signature=cee9621e7fd8fa2cc91f149d33a4132ff8926b98f483de8ca80f8c38bef9d035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
