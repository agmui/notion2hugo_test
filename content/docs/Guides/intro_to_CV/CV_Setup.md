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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHAACHO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIG%2FqS89hy3iuj8z7x0UXVZAGLJH%2Buiaq7timLhl4bcfDAiEAvYAtzlcZmocHPkNnz9PUiej5TwLYIktkI5uwxmIPGtsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwnIZL8weuLg8i7HSrcA9EmG%2BAukW84xbczAuWysrjIawwsdwDg9OEWVQ5NqIbyO19%2F7PclwUmD%2Fo1IsxokqtuGJ9dddP%2FvKTAaxBYwwqNoQ1RpQdv9OiB8HcIDeDlLIVOaH1pDnNfUfmGLhE5gbmHPL%2F%2BVyldkSXYUhGQ7KWIUqKvLKyDofq0B5h0cVVc776pHAKZ8FlQaMVqE6vJ3AZXHRj6ivBPtiRXyUeb5RRIi6fgKHNVEz8JWYxU%2FvR0YXzfGPElftK87dFtb9Ru1Hrfdt%2Bdlh9DGMsROZBAx7MVp4ItMSZmL%2BmAL2LnTOFRKTzuTk8SbbPIf1p0uN06uuwM4CA5V4nUs51WErxBHl%2BTKAKwd7MtZYxAEQgULI9QriLvvmnd7ZwLY3vH8IUb78iw1jHzJpfmZJmXaDJbltkyJpTGYZu%2FHadH%2FYu%2FyfQu93iATeIS7mX28Gi%2Fx4404pcW2sSGTYrcfQPwEHB%2F4az89RS3VuZgns3CwYX9Lq7r%2BYB5TyOpm%2FOaQGq7lclIxOqkMknchJFygEANtiTo0O3Z0wl6hCB3yy25fG6KWPJNOjdjZtX7pWBPjcNk%2Bu4QeHkB0iQ2kOE%2Fp47siV7eTFf1qH1wd%2FS9IoAqZkIQtq0dROXIiDAboA3InqO9qMK%2Bw58MGOqUBW9Q6XAX%2FTOR73GRLBPFKP7%2B508E9qAxQ03kJAiGdiQYGW4BO0g6Efe1g66eMGcj5kQQfe2sWzxim%2B%2BzgRhM4%2BxqQM4%2FHZmy%2F1vfPs5OaseIUdDY3dIpb%2Frgs8Ld%2BePqqoPpY0uXmtm8x5yOH%2FmcaJr%2Fo5WcWI2j%2B53gwtJdOiVXbl5ARpBqQbrMfCXf6bkAGTXKac7iN0SrkzmcubvPEafxWx0lS&X-Amz-Signature=172666257f800b8ba3fd1fe12cb6b6d10f7464a135507c8d4dcdf9460bf4dab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHREW7QZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDq1ODwCiV7GbqD0pQ%2FxONVaPY%2Ft5jajKob%2Bqj9ZzgyvAiA9tfBaYpKt8QgpbuZ4W7TP%2Fp09OE2R9dd3ogJdtQH1iyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKGWQ2NPdrYTvwjb5KtwDfYoRYRefTL%2Fb74HclV001WGNcqk7e9TTVlnHsKOUmxt21jZnsHbfPCzuhoR%2FWzGzj3DdvL8uTTQYLfogF9RgR3FNodxwKn7bPZSM9KbHfoIW7OUeFfBr0SvxwfCc678yvCZTqWbO9LRKTwv2ktsks5GknuGtYO5jDs%2FVy4hVSfKUBWJjxyiFXpsl3DyQKcvWIuPqaoSVWd%2FJNnUv%2F6ayMpZIVT1c8PLi4FSJXkmLzBvaM0xkmlWfMKsLKNhUd3OOQuqD%2FVS1qnEOkeJvm7m9jyYsa5cJ3t8ynj8gDFyjGRHCPae1cbXCRwGG08CKEQeZriTKCblmEzaAirxHbziKZC2QT79KU3eOqMqEMErZdxNMkvOvaigIheuwwi9ND3BHLhhWxf0jGKo659Oyfx5DdCvBOQFDJZt2z%2BBOypJ90HnVYfFz7Zj5lrk2eRKJuN%2BoHI41HjxkLmFEO5f70AO9MFmgg0BCqKv1lkDGJ7W6P6a4q6l55ZxGyc3oPMXzBiF%2F4V43r2IVGzEcOEdJZAUCGvrfK3P8Abd%2F1wzDobQLJEeAI3d%2Byzx32UQk1WYydQ5hZiqZHBTzKeL0h9VEqtxXvlzNX7sXLvFKXusOFv5g6mE85efU6k7sZpTKH1EwybDnwwY6pgHYmBu8YOiRki55iyL9d3rDpNFt16Px6UrHgYzj492%2F%2B5EyzxAbofKHAkYgOQzyMvZqtpKhLWAeRrjNru%2Bpl0yKcEBBH6to2V%2Fm1Qik6ATv%2B38Yq5O%2FVSWu1gNSddDdVlQ8UCvWNjjebd4DkbQRcgwB1lZPej2RkAdp3wN7FvSJGWSyd7MqhC1F1S2gSOTMnW9wyMpDq5KadRgUZFjzLZmxXzC2y3fu&X-Amz-Signature=e0633857093e4d0dcb82d2e9f8d63063935c7208649c4b972592cba2c3df98fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
