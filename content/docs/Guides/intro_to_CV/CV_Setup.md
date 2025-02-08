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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXXLBTGQ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAa2nf27O0Sx2uoWaSvivWO22QnbGS%2Fj6R3qIM%2F5PJmkAiAhHaFzq%2BpwV5uS8HK14QL3ciPecm%2FA0XSthwOVfU5NXyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM74OcDzudHbA54qR5KtwDlmzXnZAuOWKxw%2FH%2BdIX7qrB15Qi%2Fx8v3nFD6OetVzfr3Qy%2F%2FBm9j3K0Wk%2FOvEGYBWt%2Bu7TV%2FGomJG6rI6rdZBGkRJdg0%2B9VQWRsKuSzka0DHK%2Fla8u%2FcmbDqqe1Yl3nBBQ9Dye%2BB2F%2BxzYv6Tuy0GK3RIbQDjJkMngPoSzKxOQdvGc4wNIUIMrTi0A32MYBhWeGu0ISxZQfLQIPoBVCO4JUXUFsnl2ybn4We3dVOR3torZU8AptLH%2FBuACecDneO4ngZH22gPRa8%2FaNP7wxGxhOK3L8jvwcukyHa16CRLpRgFhdz7lJHbnRP3f%2BRxHJzURhtqk58Z2DB1UVTOv8ynABDxnwuelooB5KKfcx%2BUQc76Ty8NnKFdjezZj8bD40QqnqtzOXPu%2FDcHSq%2BbzPVAwexWWe5xjQmR3ZYdY%2BAFxNLBbgZoHPhgGIYsHEpuQatpRxqCIQ3RopwYX8SRK1rej7CXKt2Imlswauv0A6rAYKrQg9YV7oQ9z5WtI5PUqmWhg0OyIH0bJf8YUD%2BVgWXRymGSrxCDHh0IlwR0HThKgGTyGDKDCXZDeTzJcc3q%2FwguipcYmCvEGgHo367KU3nEp%2FbVs6CvlYWC7BTN1oDk5Ld3zGK3c9YAZpj%2FmYwwoadvQY6pgESaxCoaAACKUYA3f%2FWo60ADgZUAvlyoBy0GhSmBQvGOjOk3JCvwOZrbuxSswQyAjPcl0iVuj%2BhFvGR02DdfOMOu3jVNhvEDF%2FBuXjZXabz7Gcl4ikL5Jp46fdnHlBHuNuT0W5EWecoPaglB3cEmQudOLpBUptkYAlTErcdG1NoXEdzu1uZC0l4YlsnyxzxCxDbRleHDJRrop4R4OHIJm3qF8%2FfuhJE&X-Amz-Signature=91053f29970139cdbe0f851551ebfd0f35e0aa7f45b9da7171cefeb8720a9c91&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466476SX37E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCddm0v7XGrJHJf0xwQh4JpUcploAFUZcIDCoskBb7wQgIhAIqXhx70%2B3Nfj0hLzXM6cYumj%2FNXemTi2P7HGV7v5XMxKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF08%2BcQE654c885MQq3ANjnvZzzE6LXapfb5%2F1u3%2BUmk%2B3ZDUAjeKXCzZYcbOublR%2F9j%2FS7If8DMasWjnRbFfPElbWJv6jjbeyW3iPijbfYKYWSl7B4xva1YwzGlsNzMzyOxAylEx7hq41PZfu4WF0I3y%2FM15xMvsBqMWI1rcz5TFQ0lLiOnsgyhr0StR8f2F9EmoF6uUVo1%2FQau4vw%2Bm2JQXVIN0%2BUycbPIws5%2FBynph4nEUyKhkcP5o8k%2BOn7GWM06s3luIsaLvxYmc7xtajGNyP%2FuDIESnd0W9eR08qiGFJjuIqrWMmw%2BDg1dNcCv%2F%2BkXEMh6jLjcoNMpkFwAocbVIichAKt1gGBqzN4EC6M0D10E1lQ2On8TfAf1UZvrXgOp17ogzjaZ6CBGIj2EVPUNr%2Bi8zQThCdVJQYaj7WQ36AzYq97MOqSOmJ3itNPpNTrELtxpyWGghLtpD%2FdRCkU%2FNDizXvLi2jBoEsg4NnWV5KjILQnJZ9B3fTGHa0aLYIk8Jdj1FNclU8E%2Ft7KHfNdyGzql78l7FNGSZBm0Xh%2BVmKq08pDS4WOXEqhjp5YQPJ67FrKf%2BeoSLOS5RsTwxpdIgJRD5VxRTqd5JyNKWiiFCDe%2BkSXyvcqDuy18XgC%2Brps0m%2BxsYebRiw0zDohp29BjqkASsoom3K36m09jSvrK5YAprNMkEsA5VnF%2FOZrh0m0KzqMAQ7HB%2FfG4JbilIM7XRmv%2BIULu8TAyOJ2diB%2Fu2fRPxUsl0IKUSs8Zhd4GZHtWP5d%2BUwaW9v22eKB9a2OpnDiziNywtNbqj72K6EJAlb0PVlrOQjyU6%2BJcrr%2Fx8a%2BqUajNWySFodV4GqPT6OO7bNpc6ucU1jhTrpyGO%2FAsZN9SCzffHm&X-Amz-Signature=e64bffd03b5741a9f586a5138baa5993e5ffebb412b7da65cb78214f30907b58&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
