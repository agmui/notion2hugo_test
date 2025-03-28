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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XM5Q65%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYaehNOEN9tmpGtAFWgHyUyCQqAiho80iVt2apBh4SkAiB0hEGTc9xoSUcrPZ0oY258wVMl5h%2FKiY%2B4pNl2YdO9eyr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM%2FOlsfkuqJxQvikK0KtwDS5aBWLT85uhVTCVWyi5xDVdK9RyXL6vrDD0E4CKyzbcKKQhp9yQ9z8FwZ6fnRAlDRDmlpoAKUwoanfLa0obQX%2FW3KcWQ3KxBlXZ1rfv6RCiHF5jWSWbiYiK2dtLxJ38kM6Bo%2F%2BebkYwTsdLx8GD%2FpkGmq4XVjcId%2BjYCMDIAgC%2BmhgcpWt%2Fgf5HdMoEGUpzibqY%2BulbKXlEROP3AcG7Em7KfkBoe8uCYPYBxNFvp7RcQ7WmnI38OuQaK%2F32bN%2BJUwnYlyqESx0yFIyYErMA1KLdtLT7ZSyFMS8%2B%2FjEOtqtX1KtL2oGRp5pisLagqwag7NZfnDxGMyDNolAAkW18b4k9FLMkjgf4aKvOwBtjMxA0N7W%2Bb7bSpCgj5LpkCEtzddzWJMGWROwjVzLkkIPt2wO2BvqU24wKPhz5jexb49glI71MkbtR6G6ZxiBrRvhxwPnhL303m012OyBsfNDut6CYpeVW2qz%2Br3e8247MWCZfmN8tQEjPs1hb2eZpSISOZHSPfbe6tDoOjiHiTU4EmrZtYw5tuVeU1pYbQj52s7LGCalWBM3CPK9aSGtraaue0Xvq63TTlyLKcMWCf%2FFEoBsBh4Qwb8qKkGqqcsycmMr%2B1GIkY2X059fanxZAw54aZvwY6pgGXhyUNZ6DVchKANIbT99H2Pgy%2FTsYKdEjaywpfZWXJT57WUYOxboOZuyOYKP%2Fc74FheFhJcu%2Btd%2F0J2ZCDTqFw3om93w6jM7esIeOYQLxT%2BCo3IL3S5ueJODUWxHGkKjqTSe1f27VIiLDkiNJP7OOOEuEXpG2ghP5sH%2FczXjkjox0sxX%2F5BmtGliayNs5ToJparRPKItV3B8Dgx7L4ye0qA%2Fpmodo%2B&X-Amz-Signature=f77f59e324be260024bf787f6efcbf0be2fb87b97d63fcf11d159ec9cf96eb1a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEW5LR7Z%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5sDr5SWtspmkHy8sh9Zs6v16tDLPUDZLdbyyO3K7KkAiEAkS6PamWWHec%2BhF9nd7Dl%2Fr3QWIoh%2Fs0rvem7%2F4MHDX4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDF8ztjvdQe3FLD%2F8JyrcAzUo4vkXdJ8C7RY68joJpeqtDcDuH4fojvvpiVhpRTxBTR%2Bpdp0cSosHrcbM9VHk2CHpE4XzSC0sL6qdoqAM7gu7znzR7EXjbgulv62WjDMZ7ROiEru6zboKioLk%2Fgo17InwC%2BTwxTDBGDqP3iTjDMOww%2BeYIN3ZuEFTSabnQW8eiF0IIomp0OxbzVbegoLHKCv8qSp057qhTnvapnkfcK%2FIMh4P817uA1RxFp5lWbHVDmvCpmIJUiepCztY9WKA3VcwmJj4tpejWoqHThEaDgkTgqVHoVlnbgssMuGiE8HKjwOjsaZ0RTp3JcN%2B4TEhCx%2FOGBS5IGmh3yu%2Bf9QhLnbEhOBRHIgvspfa0xPPqoOgx8xUv%2BZUPPsG2dO5HTDXBYlCWbiKnFJFPhuINUWswnh18KVp%2BnXOnboMQbZ67kx%2Bc43xZqowMCiyBD%2BtacaYgWKshtzBjK4Pau3oVbH4trW3QUvrYzcFVSCR8T8TNQ6Tb9Dz6fCK6Hsf3M4bC%2B0ievTwqfSOnuJpbp%2FgRlPXhOZhJ6WEM3%2B0qq6KTvuaYe3hsWsBSqGUuHzQNWJC3GXcT1%2Fj3zc87yMYNko%2FGFhY8VRqDDA695p2g33wQ0bKju5CvXN4UhaFsgFBDD4hMJKGmb8GOqUBu%2BlqVtpXD7GTCFlWkvf4rIwTeu8t%2Ftj1Xf%2B1clFphc%2FmfUFHMFrpCp9%2FLIEP6M3Ky7RHSSPF1PdRmxXOUUTfll3c8ZHRsPQmGdc%2BQHxOzdB20bfHkgray3m5EevL3YwwMsxI0xMmfREZ%2BLGt6uXPqBUOYFtVQjuee9BHxbbZKSn6Z5ypbLF2owGxjqgT8mQlKmrVbgf5C0Sf41VCSvD8Af8Di4l%2F&X-Amz-Signature=7488a6100c981db72c5d3227543a8d1b0a6d30dbdfcbb69e48e621d4eb1536fe&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
