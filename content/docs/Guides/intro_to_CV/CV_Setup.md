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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7XOZ4B%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCqRbQLbwqhLd9GVj4Buli%2FXu4xXYmtvzaVTYGI3%2F7UAAIhAKyBHu2TalOwvSC%2FheUO9g2Q5jvjy5YTjdCs%2FAwopH7qKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXCHqbihD48kAK1g0q3APv5Gerg7o8ogxoEjLk3u7bMBr4EPYvaQNCJ%2FlRrIyalWHgu6R0T%2BeT2TknXfoiB6uzKrHOGHsU5UQnHA2ESOtKqqvO0ABnl3R7boPb%2Bv3BxmC5OT3TEqwUOT80QT%2Bcl2aIIxxLs5x5w1ffbRBjb2QwY5IzjfIkV4ssa9hAVL5NkS1jGqFRaXsVNvszYbOfO1U7Zwq%2Bnx2NYWEYNaCLJ1WPKVIT8FHO4mUVaP1QCKPM3Ngj7Xvow1CMRGhV%2BHafIYZ%2Br4YO8lsxTkWpSVT4auIfw9QNWtt766emx2Hc3FtS2CXee39tu7Cbr3mmEjKAeTMlXM6Tmk0J0tM46fskF5tx6M636k3HCLz5deuI9MuK8xBWVveJQCpNdFCUvjqFIhSvyBa%2Fr1n4Qe17nXZdnuJw10%2BQDYS%2F79w2%2F%2FpwLZfDRNIPC0fWCs4%2FSSsIXgHLEFXwb6B0wwkeeFCbgBfmbcW2q3TTfbB82YVlUOvvNIduTI4pSoWFurWwMm%2B%2FA%2FuaHnp2RfCkoKicJyO7Mt%2FUEAdYEC8C8yMEctlIpltUfFz3qorbMhW1LFphoY9rG5tvXvuVI8kAW4pRE0B2HOJAn3JRD0tcgtXUuDdCzYYX3fIQXdyCqv%2BnAb9EVHCoLzDzpuLCBjqkAfh9J5cT8BdBVsvHKg9Ho8iPgeEPM3PTy6uUiaTcrzVdwmZ7rGYcz%2FodVzDVMb5g4bDC7P3NIuGEY2OrqBgC6JG6qw3wEpGi5KiPSyHqqB%2B9rxYLvO%2FP%2FjD%2Baa9Mhp5eniSyJuQbFwAqgKWNZEyLBfCjudM9M%2FRyr0n82fZ8%2B7FVyj7M3FM6l86Wa1O42SccnNSdwGTRibYWQ8bChipB5xhVZpt5&X-Amz-Signature=013f6c4e364802769f28b4ea2361acdda21efd60d7c0681a8dd2ba04c09e053b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XXHE3D%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHoMlgwb%2FP6RIiZBm5EDIUJ1TreogEuD6Yl2pc5e1rvCAiEA2xrpFvCVPlgiqqEmboHpamdniG1b1y7Ws8PfvzlJ1%2FYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONLOn4DcjltwqrMBCrcA7v6k3BvxuG1HCiyPQFZ09nB214xy5pKuDO6tvIf1NHqbZyggnShbHlvuADm0kJN4u3kEwycPS2hMvq6i38S43g3Jn%2BKeWrsZBe3pnWrGqJmr47UE7wI8Wv0BNhc%2BWb0KW1hU89Cvu0%2FJk8VzJKNcpLBkgULc5i3oo57XQeJ7fLsP6wQLP8PdTaQ3ziViA6rjcHuegxqHPF9ZrW8Y1DujhVlZoWov3X1sbDxYQ%2BHn1ZiTwH6iOopLnChqcpFCjaaD9J830TZAUrbNzyUL6raMH6pAIExf3EQKuPbLXOpU%2Bwrlurc0DC8DmTRUrCwm8Zh%2Bchsobfmvt4PmhDktLZ%2FN4T7Rr72TqzpfCURpEuWj4Ih9YhKwZdxY7AZALGTUBTfZn43YoJBP0DNs7jNVxQiQVibgMQ7F%2FAUHsFxw8m7966k%2BybGzAIuYRgKHurn9dtqnzvJxSpT1xLhWwL5pDHQCkCFEYadLFj3KPF%2F968wwEU9t9vSeM%2FPQX%2FPcSj3JoGB4%2FtT4dMraApEqDJQYn%2FAp08SQhv48oXlDi3fJUBAtVAFXIFF5NmbNav5MEe7G2TDOLgQ2IU5TIIFz%2FdJiKmNRzWMi02%2BK3FmBOlYhDiOktHnIPIharNjLjtqCstdMJCo4sIGOqUBtw%2BwDqsu3ZWMYcqglpCvtMDWFnyNqLGB9T5V36vLu%2BgMyBrn6nUfGeNAPSf6NVOw0PuJkytnn%2BpaMWhD8sOYLsKmxdzquUxZ%2B0S7AqACnxmtP8ZqTx%2FItpWEG9VqJ90iBZPq79Y%2B0EoQ70YVMKBN9kleg1YhV%2BggoH2gvJcgglVOfThGRNcbeU3gj3dpmi90Ge0XJupAh%2FWYELKabIYgYNKZF%2FGA&X-Amz-Signature=98f14b4d6c9e9dc57b7b26039630289f20f3e35608c67be8dddc3a1868cc580a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
