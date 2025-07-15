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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO5QRXKP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCICxb6Apd4ThoQe%2FFG7ThQu3hjLorQdKmMLhBMo2CLqcgAiBO0oruNAfWfURsTPO1ddCf6hQ%2F%2B39BhpN5Xopf9Nj%2Boir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMuRTCNtcBKKrRxH6xKtwDtWl%2F4fBcMivgzrJ%2Bx34fvobgjbGJYNOjymR1UzpXXDjtdbg%2FMEJEM5vy6G09HO0NiXlXqEf6CjdoB4YcaZEMz%2FcpghYSqYPXdgHG7jyfNzpaFrWpiRTWn0XyLHmWbX156xTOXgoBogYTfY6yhHec9rNhNtDBbsDJX661AHe38Ovx0BY%2BtiVDskU1XvERdnwy8SW19VuifKB9ORVGXoWLIhbbnJcjEu0qeuiEZztyIpr29mmT8OWCJhwUOE4KtrZHBbHradJ7iVA0H83jfER%2FusfQC%2FWvbjQikbcRsBFIiVPH%2Fb9z99SwR4mZklWKlN15LhgTygqHYmROj%2BPDtp5hIY1qiYC5ekK6v2BsfmpJ6it8eL6PUNCnqzm985tpsIDiDVBqgX%2FDd%2B4mYhQgYPDRN%2FInnzGu5LENFQWBnPJcm4CN1So2kOdytxatSV9G0u6EQaXIpDJP7wspg7YH1zqYGBF%2Br2veeWvWzawWth6u2P%2FPbvjQh%2BdBv09r8V8GqTJQ3UpXwRmUhJ7ew%2BH%2FcjC7U8%2BdbNdZvyRAkAVX%2FP%2FB6rSTh7ZBUsEwFLJ4KHHlRvLqdvDZzr7gjcUAAIlXmlRWVfrt8pdOCYRfqUgKooubB9ZeqGvxlbfHTdf5G%2Fcwnv7WwwY6pgHjc5elWNsAaevvfvy2hrilv5%2B0sM1qcCKd6vqBD2y9wtrD5Ojf88tBtzK1Jaqx5OG0s%2BLyYuMSiV7RQ1TqQPl2hDQpV%2FYYeV5d0xJd4Qjv3H3jqoHzv0BCKD6zIvwo7kDhVWuBH31b9AVp46wzIeIWHrL1bj2vX52nma5fQc3zedmh7SA%2BndGsTv%2BrwTdxcn53hc2hBj50GBL9%2F%2B5SyRhwRvLxUqFJ&X-Amz-Signature=b7f16287a4cbc81196e420e05bdb39be55658444f47ad9abf864797fd51e473d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCLQWGD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIAQG1Wi50429HBAOru4WKFhwPlNBpSYnp5cAJlil9VOGAiAXprbXuHhPuuG4J%2FEty9Jl5x0XppsobaLF2hj5do%2BbOir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMX45gKrSh69fpQO9PKtwDzOvHEKOPXxMb6E4GhvHWJRz7IObonhZmGQJ%2FPaqjNC8RDa0TKaTJcWnCMwi%2B1OK%2FVhfRhgGpaNKYY9Soxv7Nj0X6TRIWKuxxB3cCI8AdPri9rXFOMKeUnoebmaNxXyl7h%2BqKHckR3p0OGOMWgAhdNgofhB19e6GdFJ%2BEXBvHyHxIuh1Cx5r32BCRf5joa1fqqQvx%2BdC%2FcZVEjGAu5JWkUOOeOALBPG2ufChvKUjnYDwI3CTal5PJ1Lb55DD6sJq4Y8sIzLEGW0xMU%2BYcQi7BMdgCjAEvMT0H2TFiM7vIuHh2RmKBA5GxeS24rNiBg7IrRobdVYisIzBXKkJcCtvMJbZ5x9qM%2Ba%2FT47ctv41p07M7jRuOnkU8oRIg2ADU9R68p57cFKP5y6Dsr2cYKmR07GZaB1hkGuqfe8UvUjaBP%2Fn8lk2xehaGm3jMd05HyAmYKBCxLrOIipoyMpsgqM8p2WZxi8WHWzMqA28vruSZwU9u2iw9a9vjDhF9v3ZSIBP5s3rGlRTX3L1Z8m2gg%2FLU1CjYPqkb6Hbpva1uJD4XMx%2BxI6dBU7Smue0KzE4Uwp4L1gxO%2BBSKwVJp0wuStuGHCNHJU0jtc9zTtAwuUOvmdYxl2pyrePUnv55Th4ww0%2F7WwwY6pgE%2BB9yeyyyQG7H5b0o1tslnporRE1mFKKJpvCuL5wm0VLRum8pd1z434cEbNwFyXHv%2BsJKE9BJBx4sIXZ1ZFBQFY%2BiS2mBrJ8YBsjsCtAbRAbh9N9tCTGWdiq8Ri%2BEK1f9Q2U45%2F8%2Bj2B8g%2BQcPTJ74F5soAHHvB2fsRPU8kjsUje19IswDjvkZIsdg%2F2Eh9Onxx8wXj0cDpBtaFpFzoj4ygkO%2B%2BePQ&X-Amz-Signature=89ee05934c522945f39a8a4d7f038b47e59da96462186d0dbee4352f4de6465f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
