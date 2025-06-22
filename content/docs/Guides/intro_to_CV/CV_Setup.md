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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652K3UQ67%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIB6XgGgF1CBnCvUbiRDV9Gol18iYbuaNHkR%2FP0ZUengFAiAISblXUJfPN7IHmB8w9fxchJWUeJrTfH4mqCzncuarOCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPjdaGpKNftb8tVkoKtwDVQCnDDbDXjr0UdK4jcUekxbrwNbM7v9ibDCuns20LhUJW3JG1jxsd9TUvvknELE6U8OKya6LPDwDjeA%2FLvO9H12uW5bF8rdMRBfujDyOWbLDyu1t1CeH3REbHIC8ixyuL90dvl4wK6ZaO8x3toPFOwQapK6R027cBzRTUg6xA0xglUwZ0WvSHugzTKFq2ejl6e86h9lNsI98aT2ru7dhDH5HMZ%2FFO3Pz0dhdeFNorC699boGXjEJJ2uFNtxSR1LHRycRaB8jzr%2BrYb2A3kbG48SYOYKG%2FKS0ptnLBgLYM2X%2FBVC2dedXT2SIc661PvjssIJE0PvN1Ev7F7jI099uMZJfWDzDVgNzNGS%2Fv%2FDJVI%2B%2BayB7LDM2k2DAZ7jEG4LatUhu1Ktm3p0tMiz6q1Fn5nLVr4vJrnQelgpWHibhx0KQ2NomavABmnGF8OC7w9jPs2tbmiOYAExg%2FPNwTMs4jjsg7dIwWlcFDSBFBwnGi699zn0mF%2FiaG5Ph443alFEKSbNWGHwVJ4bHwQfH3r3gmSc2WL19rh%2Bdw%2FOGUsSivrRxx4gxtQOQ7A8Grda6XWjekNZxB8bcjC7xPPHpBB9RmVUvGBMStL94pIAKloDuAZb92Ll8QloY7TL4wK8w%2B5LhwgY6pgEPeI8Ek784XWHa0uodWBBURTeMG2kBK%2BuOo7cymr2HoZrzsmqV002hfWk66d%2FdtNwwHvsCsUGRzSV60kcSRq29ir6LRJnCmw78hzaujaDp4HJlkCYRglR0liy6T15H0M%2Fmt6FQ1ZIwga75z0dLTwG%2FHiL7kkQU0JtixXOvWGGjFRx%2FPKjTVllmdmTqDhSv4P6AsVRvbwcf%2B8Qu7GnZ0xx6%2Bzc4gFFq&X-Amz-Signature=3628f47bf35eca87e074bd4550800c16cbc85f3eccfaa96dc4ad464224288b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JFQA6F%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFibrrCPZ2bRVculayqZ5RpynZojFo95lbNtfL5H0SJLAiEAvEWuX5kDy8cZYLenigJYij8ZVzgeHGbToVbA7NiCxKYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4%2Bm5OnZgU2v560dyrcA25gcOa862ZtJJiGMiBbtfXadFxcqlEpka7MwJK8B7hpFx2b3xXjGfXqQfyvjG6s3eMhcqM4tQEBcAj6clVIXdgsL%2FNuwBDsWDBdYYMT53lp8NZEfmzducV2AlVRTko0ORgBn66%2F9Qw7YttJPVEaGglpO%2BUkIXVq4T5dE4YzTPR%2BBKOkTf%2B8ASRSKWUnQdbyAA3ZXY6HXdzYEFYcYCKozAKHSVF8xE7i8DBr1Zxek4kxv1fp8%2B9GQliMtpF8yAzBZ%2FMuyo%2FrAWGQupIs%2FTshBK6xbfJUbgN6ULr%2Feb4YHTy3jSxCpGxUsJcyeRqwKpR6nwmahWeIHIdT6kBl7w2vwsPbUD6Wjueq0KghaOR3tndLl2lbOGxHti8KHwmtLhMbQtAIeI1K3ThQDMTHLoPtojmkTV%2FCoIsZT%2B9aws28cN1JE4XCFBUgSgRDTPZpXQdcX4Dcg%2FUbfkJEiG3tj%2FT6kHctyAXUBT7oFSob3Kh9YPXQzwqztWTRM2NIO6zbECuHTNO04xdKdtV6Q9bD0xyQxJ28YL0ux7YEYJfgUZyA%2F5AUqZbhQTLscsVeF9BMewPUXDOqsRuF9xA2birzZKvMJ8xdQ41FHqP1vRJKMTFPCyUVTKFlXg8Tq89Sxj06MKOU4cIGOqUBYxx3F9FAfO7BXMYdfZkK0QYk%2BcdNxgkhGQp57hEGHrZtd43a4Lv0RyRgLalzeODtubdrcZE9quBM%2BLvvJ6OU3MS2La9srsGCZZriM6a3thqsBJleb%2BWrIbmG6I9OOXJrBEW7J5EGLFIvv2HLvCEwxHcSs3VnUujySq8G3WVt1Yv%2BVoF2Qfm8kFq8YSggg4AXvggXqqNwzWexfWRydMgmFrRHjxfB&X-Amz-Signature=0942f9f26920377f4bbdbbdc5c9598bea8a027eebe1c9a6004f4b5aca1c5340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
