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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4EWJB4%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbrycrXaX%2BK1ppbzStjQDhH%2FeOTAC385%2FNTGBDHzvkPAiEAnc5vUxzWWUP2PmMYkMZ97VHGhmAf8bBzjtBVVQIBFrsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF2%2BEcTO1zUvG7JIGSrcA40NEj7gIR0JkkG6Dut54A8lz36AUMfqSYc9ABzN%2FaYzHOyLvEh0VAS9hhbOGV7oMu9eGLhbQvFbxUY3NgU%2FhKO%2BAYJX3ugBFZ4uMTFYbwRqTrzD%2BWzHJr2eCnZ%2FdLnjnbxcjhOOf9MUM5WxYXxsNDe1i%2FofeSw%2FasTghVOVFxqMMnaWh9ukCCGIIesT2WaaM8wVeVXN3ooPnWdh7VSuHUG6HZ%2BA16pxTUm0fWuc2m61zp5uR8uXl6IzOzrBGFKO5gVQJUeC6nbUx%2FBm%2F70LphT4m9yaJUCYe6xDLTCSLJfUZ7IstK5SvM3jMyXkG1PrBci1OGU2YC1C98ZtffPQicO4eWUS5BV7uXseTH0S9h8xPMh0e9I6WZgWm2DycpjdrpDLzUWMWE3Zz%2F6CJZG7zVA2dxDDz0weRJtNeOx1Ro6VeC1WwnnynfUu6Uo9UNPFypqHrqiRhpxue2NiRTE17yqkRINNnZeeMVZJ94SQULUCpUUAYNQJWa%2FsB7Lbz%2BMBuDPhkreGewgf%2FUi7NOgIigkO2P1bpc0s6meEroCQZPZP%2B3wmr3wR%2FxuTK40TQXGB5pAhjG4XUvwCh6kRX%2BTcbx%2FByl5SGUMYfn8ilcllecXwp2mwLVU%2B7%2Bm4zIqZMPK40r8GOqUB8KOo77ooR5hFek%2BZKF0ZPqw7Y7qzY9eemN8l20gpgIpqowNJQFbSH0ifFzkgijssEZ%2BLWNdLfi0x9seZ6NCZspKOQH%2FuTX8bhqVj93xmc6zj3TIK5raUw2m4cc3wWTROdkyivmg9DoUnVpFrmduaKLUddyKLjPJ12lKQYlYzv%2BJ8fMngIG2zB%2FQjOS0JdA8sMf%2FxPCPPdXCYj8ia8JESpw7Q15jC&X-Amz-Signature=8bcea644ff9f191f47f2c2b3744a4b2f53bd8848208446337e94690fba717620&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RZEFIM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2qskD2J8Di0NVtD3ynZ4hfMidhvSRdeF9UC1k2WUUAIhALYqnujtAYoVATHmZTyNik%2Bsdw%2BMo9lGfezovkR%2F4HJFKv8DCG0QABoMNjM3NDIzMTgzODA1IgzScsJLEILOpmyOhuEq3APhwXR2VSBIfpiTheu2u5utn5raHyuBGAndXps3ZCOaSX31D1P5nizkhoY3%2Bz9eAL%2BkW8Dqpr%2Ft7AyfMm%2FRez2rWhzuqs3jbJWgJnTzfOlU9efVz3yzCYzZlCpWqfE9jiKjRo449mTjPZwqEsmordHCHbrcrksPB3z3rRTJqHiR%2BVVKHDdQ%2Fj%2FhsqrdXCwFI7Zw7%2FjV%2F0hXwDM%2FuUREOliQQyrwi3mti5%2FwOu0zKhZvihfaJcjIRWj%2Fa8GojctKlm1Jzr1i7diMoWGA7hX%2Fz5Jqx3IvkMdURHNBN9zTpL0jJNJFCp0O7k6MbreImb2sOg3X1IqKsF5Fl00XUpRXP2weM3NHioKwb%2FElVz1gXgzdxdDAvbXeOTrVSoTumnlZ%2F%2Fl3hX3%2FmjX70r7oSl0HQgESZI1kSiXbCITkGQ7G1Y4G5%2F%2By4PnHFnSV9cZy02sHCfrhp29%2F3k7%2BX64J0b%2B2YgA6jHiHGUOMWUvdepojUk9a4znc6v6gt5wI5VyBJlnE6FKHqM4fgOumokxFjZ7e1t4Zuyy6fTISC%2FSaGuCk1bYQf4TSrjd65oqk5%2BEJ76i7GNZhvxhCg1fIiUu3rLGKe8EH0hqGfTXwMYWDL6Kyz%2FaKnPAnu3QkwDbDKjgf3jDzuNK%2FBjqkAStH95x91%2B4G9gJZcPz6lGeqnZMpdfvTfFBE01UGQA25ZQ6me1OzrWQSoiAyhPXTTsSIwHbO8zsVTc5zmB18j1N%2FSRzGqwi2Ge52j2jv6A986gBmxHtxKnF1%2BOneIYGIk%2FG7ky8tpjAIi0j2bd3cGllSy%2FoB0RAOBIOiB%2B3cmemBtvIWYjLtVBK2%2BoSsRpQpRr5%2FoBNthwOYcmBv6XBQkb%2Bqd4uy&X-Amz-Signature=82188f1a82805581f83d48fd9e638fe1a9271012278bee6c02087a302c85251d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
