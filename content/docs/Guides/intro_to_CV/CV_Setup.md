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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYQIQRQ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBHYn0Xx9R0dH4L6TZDAJrsfJdFYH4Cdi5UMOePlFc6YAiAmR%2BE6G1%2FzmhqOLQNe4eCe3981pfdHBlFOznlRnJQYgSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrpwiksyRZAWkd33ZKtwD7SoWYYeV6XgtFBjtbZNqyN7kX47B%2B7jLd1yQjJ1UjFSakfAC8ZyavVKvD%2Fw9fRdrdmEgA%2B%2F1iU4e9BVI%2F%2Fe3iaso7rp1%2BlP9sPjnRVlpvcGF19Ed6hx4R9bNd%2FyW77PbHdyGtLdJOEb6gxvqR%2FmtNxQiuW7esdYkMLPOuI8CmHeKtHsE4JJj3fT0w4BpFiYkukMRmLDSsgLkEcUCHDUUtQryJ2tmwvlVIiz5o6cXEvHyhWwJpfX5p9WpxLVe2ToZU85V4xjaDMIxKxDLywmzzkqBWGkT6gCI%2FmPVk5TzkfDqwMXgqM32pVgX0fgUzu315%2BzNKp3N2nX8P00JAa6RZNi5k4GsbdnumxwuemKXKicdRtWTFsp4G7eG8AP2Ry9pSvRL9veiFyft0PXlzS%2BqomwykEhrHDSgnF4lBjvarrg8r76GEovREOFrYtspYl8d6K5dMLj1ULq%2BiTwktg9mV2iqEVKyR0D3o9P9iY%2FtHQEwp7l0Nqgf9g60bkhauk%2BPPfeK7aXp%2BDUMTR%2Bvw3YtVnxbbINW%2FaO%2Fg%2B29hfMLal4vgUuEmRZOlP0gyltc%2F6XW0wS8n3xCHJ0rBMF8RjvOpCU92q2XWFxxAQeoRQfMGTvT9fLYI7vXypQibXIwq7XRxAY6pgFzkXGysWhrQlr8OOqOVzqAU8Kk1Lb8RSVyrP2cey02QtPnjvIRJXbMSFk7N6%2FdHSjnzHqcIqv0JPyopBiy2higF3JMu0WsmFCuUOMvSWFiPjDctMp2av03%2BwGWB87FVs%2Bu57tfwpqzXqECDWObZfTy1GZ%2Fjc8LNIwj9Y4%2BC7rucKkzC60HNwXV70lJir8M%2BMKr03am%2F%2BUQ7b%2Bf9ILwY%2FKuslgsrN4j&X-Amz-Signature=b9747b040ca151d0f64d55576a9f8bfe9761f015667929cc561995bb6007e1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLK2UHJI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIELt2lcTYIN6a94eaCNCrzeVttaw7Van0YIGOJY%2FltRdAiB9m%2FWN0NYK47AFyb3wQL%2Fw1fnzrpgXA3KxXOwKZfwnpiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTM3TaIW77fKcoN8KtwDbHxwWu90zv5lJqYK%2BhUP8MIKBmBF0rvann76C2SDcICo9WcXlkcxYDL4PMGML5WUEBB%2FN%2Bl62%2FpFa062RPtFlEcjN12G6IIFomu1TKCV893rTnekT06AuUplVs9DXWNHUnF6w3PIhl16PH7LYeHXpCAe7JvW1Sg%2Bb0YldhBbv6ru1fvAFUNgwYkeDB00V0uQKvPM0UbHgUlMS4Gqdq2X3IPwZH8njlP2zCp%2FJqBjndu4D6ipUT%2B66pzA5Bd9NIwO7Qn4FkfsbJoFo8W4W%2BmQ4ADkn0fHKI5Qk76yiKYIbj6zUZEzQmkwlKuXOJFqj3B8qdzln2WSpYG6fwVdINZDDNDtHPksDFX8m8n2RzZ3x8zpfbM4KXe8Lt7j8KrExspje0dmx1oIIjTQlt11lDACDjS2Fp%2BbjAsREY6SuAgsz8yP47W5pmST2E4slb2xvxOpVtEoWoAKeq7Z1FdVTGTgeWOQWdOOCqRJr6oTbeS2DffxuIFCkJRUetIHJX4nLbF1rYyK3PnEgN2YRixB1dWdXLDn3aM3gi8hIsRJ%2BiXLkS9MZxUHxMgUNaXpJrsirR%2F0jlOON%2Bj76mjdmriEixa9DFGiMPZgRyw%2BuV7vEbnhev7FSm33IJ4ic7fGgwIw2rXRxAY6pgEUgp%2Fa0QwS0tE2mQmVO7Cm2d43dnsKR13NVJG6CxxnQ%2F%2BPgO8twgqaggHq8LEW%2BS0MLi2w0%2FCb5CpZoDZ%2BGeB%2Bt7%2BvjA0u9Wm1X6IOqa2As0yP8mL7SAanOghViCDStNb%2F6LFfbqsc8xCrQ1XmT5efmfG8SJfRcNnFvfzUYpTRIyrN1LB6rjl983RG%2BR8VjxlW7RUtLs1j%2BK739XPtT1ga0rEcN94Q&X-Amz-Signature=b0fb1dadce489c4b75bb738da73797cdbe9d0f9c777a0ae4f400fef3fdba21e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
