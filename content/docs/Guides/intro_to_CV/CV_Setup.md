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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWT46BG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCICIhEQ6LN%2Bbsjfsh0cwVNsqGCtpj9GSwCNcRNoFt04AIgRcJTKUCBSbkV5LXbYLkSCb1nbUxWNkK5R%2FXnGxpDtQMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl%2BFmV7rjz3Rwz9nyrcA9VweC2iNbPFirxIqD9QrOivX8%2BifxR%2BPuwVH6SnZO0RiT47dIXV7Ko%2BKQhd3VsdhxVR8ogARnUp1DS10tILDoFHwuRQAH6OF76RRmHV8Aawl7I10q8zydMUJ3tpARZ1FaSt0qHYQtCd68rQIhvx2cDafYwGr15PapSX77r9HkmX2FqoprU9iLSwuwanTmCRTLPas%2F0Or1cS9bU18DZp8mtTHPl6bX86%2Ft9UPsBrwUcESE3WdPjjfQcnq7%2B8w3RDES6103TTJlpHN%2FuOked231KWxZh8r6FYzL7uc8SzafccySrDwl1jUNaERIFoDtzFdyMaBxLZv%2FqNsRv%2FGI8drnSICgBLwWumosBXxJIMKIk0qCi4Q9pISIlciL064H4lXVJRC5%2FCDrsKhcV%2Fhzg%2BUK%2BGsPXPRIgaWIRvKsGOivrKn%2BOmBjYaO6XpZMm6TBMWHpG9KaBxvwJyUQR6m442z%2BAk7JgBa3Sd3SohfS2Nq2vGqfXhMJ8dpvhG8lbb6eHbYXrk5evenp5lcu7S3yJYiXk0yGft5JmqpvXymd%2F6nPxtk%2FDvXPKZj4y%2F%2Fp6dd13I4q4mu7tiF638%2FXEeP0d%2BSk1g9TGVY%2B7jJ8uZ8AtekPx9BmpyYr4ptJYmzTnmMKnajMEGOqUBobAnj5c0HoJqXNH%2BxlhGHsYGifCuFna1ByiBv8ZJOBQwqZ9OtTsld44xKbV5k2Og6OAIpu72s7pn1Ko3Iw4b%2BC9PYyD%2FBTqVEqWgKE4ujxD2r%2B663JIzCyns6IzuLvXLSRBUJ%2F6sGsPKmeqCIdgw0hT9knWa0385cJm5WAKOz7hRVcOcNFUxXi%2FLwftTGPrMiVc8V5nFYe%2FCwdrhm0nj3rVPBTqE&X-Amz-Signature=d511b70b3cc994a3d7de74f61e1a65c0afb928f3a4c9b0d945c8f0fc6306995d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RABKPZ6T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCr%2BL9QaksPeN%2BOL1x3PYUqwYAG60KfcqMnWDwq61VRGgIhAI9nfKvrQ4Ftw0nC7TQSCBqhq7mdQmYeAv1eFCaPU8zeKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIpo7SH4l8BxxKE4wq3AOdfmp2iGx0t7QIj9TfBcsWOfQ5QjBhrLh69mxuoIHx4M2gkIKqMgFtP7uRAM%2B3DGes7Z6tF1Vlhkmx6canckpO9SHvy4jB%2BGC2OFi7mhWyYytDLVOLSfQQHXpQeokisadSz5GxR9cy30XeHODwIlJybY4SvejYHtxawJo5B5Hd2n%2FfH1OZ0opP%2BJ3Oou9rqr%2FFkK4H2lixu4m84dnduYTFt9BusEmMpO16adOSx0aw7Lj2v%2FYPi83mZGtVNxlZTYtS2JxT8BUOxam4E8p7cGS4HUpEtWTx2YL%2FF1BaB4BGmMNVdFdCjkCRSwSjgmsbPsZW39FS%2FOLKlFN%2FG5BnmFwct6oEZpPLsaVyOULEMZ0k3eEOIIttEUMop2Aii3UavdgLRJrzaJCRliTKKK9vzEUOc9sn6Z9lk3rEls77%2FHb9bx%2BSqO4fyoAqbJ3Os0eg3RktQGI4o3eOTmRpJXgdjTfjyeUy1J5Vsz7dxhA4ETTlqy%2FOmoavvqYc1pgNQ1zh52y3z%2FQfRFS5MBU%2FF62Gs8g9JNuKVMSuFzZzQHl0Os3B5SF6JZ5Y8F%2BBov72R2XwkLBmLETBL2WLEjFjntiBlhaol470Bv%2Bsxy99GZJEOIyrKaTQsdOU7fng1uysezCb2ozBBjqkAXX2KIf5%2BFHJ0VTAeqRitDhj7bZwumAV6hwHwwWB5mcn6diYDd6olLsFzxDRM1yIYbE8YUDxfqtrxnOZMrEKxvbZCb3E9YSlC6fiouxiiZk8YvKXNYcj5eEwGHzWNxxm2u%2BRLawnqAwr3QZDeZqNcDPWm2BVRJ7PNW0RgS%2BnmGTy11eikIqkssOiGBEhfWKyGe4%2BIEBXjAIzU5jZmKVwxGVXoO05&X-Amz-Signature=d2ac88fe7746535caf810abf6b6252f04c2c9ae829057f59ab12952587aa5d76&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
