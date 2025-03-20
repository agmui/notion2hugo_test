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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PB7U5X2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDoBUBPYF4fXz89PK1Y1q11ADOBiQ9Ku%2Fok1Bvh9%2BqEaAIgRIBX%2BwYY9VTNcHgeURfdnMGhH%2BoElrwSVsy1WSVJYOkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7gYce9TMKQ616seyrcA9cQUmnEajA3siKMS43Kp9If8qTum9PHL6Awy4BVZDZJOvKNJgHSkAtFW8KOIM2w44iXJ50c4GT69uHgtDRPSeLIkp1%2Fu5I3eoXln3kLZ1QrE8BmQtIazxa7ICuVv455jrAMZupvusB98MV1HRJdNmbb%2FGCxL%2B7c1lnkvko1FdR3Fx2Xipn98ug1ehpRGnU032y6OpIpHZhGjafUogtXNuNKp5qKmJoQEXJLP2MtBq7DT2SBJ02jQvKDUWknQCRcC5m%2BQt0UiZuaG5FQk7L4C51rYZMfR65N1IsbPRwWlYW2z8nAhgiqQ%2BaleQpHQkFmsrJu377q7m3Q5Na3RTlNXjub4adNqzUQ4zHETAU%2FJZ8NxzFaoGX%2B5N2PY2679NIpvPF58eHzv8sNBkH7EtoIk35y4QxIHuWpjnU%2B8%2B0f6HG3z9Cw1dKJL7T10YC4SifSzbzO3QZq26aC7GncDDiJIKIdt3eSQIKAvzVWKQSRB5AXZHA4tnkNY5%2B48ESw2ZOqpMjTSM6VGAnWVt9OdNxXYk305mkM%2FeSjCTAq9p4nmoudUeHK9yfxigUONLEiDcb4rAzb%2B4waA%2FU0pq1hvdvbnZrCpSnDwhxuKP0Cd%2Bm3%2BShUmuqZKGAsuA3%2F0ZowMN6n8r4GOqUBkSQ7cQ9HGwsA2C2YZsG9YWk325wh%2BblYSvJOJ0r3zTXnGzAqOzbEVuvWK1veJc6AXxcjMNo%2B0t7onkI7fsZfJhHiN2MU2nTNvkd2mhCycNfB8DUNYlZqZU7JeUg8CuA%2F%2FvNdXfrEe8%2FGgqvhIB5xb6Ydvyhv5Yx%2FhBBDU9iddW8pECHnFtro%2Fn%2FzTlKMAqeQ6kNM7RKUjUUiTjFsVJsqL0VcE8lP&X-Amz-Signature=bd7b1f4ef327901bf44da1229bf03d4308f92c605bcbb39d60cf07408a78dbfd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKOK46RW%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEudchTvfP%2FQcXGEzAiLo3pE0qngkM7X2ztgM7qHIA8sAiEAxHDLIL8EsbWAbo1S78iQF072Gfi4FElYbIIX3yRfvvkqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKVJsKv19X%2BxYc21yrcAwZ6Ey0lcY8c5u%2Bf7QgZU%2BcbM9j3D70ePeGEGaz0l2vls588lbxPPUk4Sx6e2Mg1%2BptNoleFGIEIkENAnI7%2BxKTC8Or96u%2FcsX0W%2B82h%2FNLJQvWu2aBLxU80xKNafQrIhFbG5e6OuqYcKvhesnwlHbm678j%2BTF8eOewzTHKG1YQ3e7vOw50Lk5Xj0D0ektFhFqQkCBJza7453HyfB1bpYIjM1yLgdfAuGbiTMYPU2bijBAjWZdJ1p61f00o2wPsUGcWNVFw1dT4MWlzDTxIskLwzGz%2BPN9CJ90z6kpdfIQ%2F1%2F2RGVCwZ23j85VtB5oUOqVpP0HgCy3P5dooBqgOohzIQYmH5Ir1PDEBqkgq5YbEHw435N79B5ylEpq4DeHX%2BLUvZ0Vn4HQksJ%2F0%2Bjaumu63EVy7AvsB2BWwkR8SXqYV6JtCLwjHWgA%2BKdC4WROucOGhP7VY98IRhSvodW%2B4QFHPyM6ndyhfsDp5MRT8L0m8RPICoz52hJ%2BRi%2FCxRvMsWHl7knzCMOU9fv13mveeNMq9wLejOKyymnm%2B1GC8vkFe4OYdYw2QXZuRw573NJESxZrYiByioxpjScVAbfsmyA4Du%2FwEogIWboqAfm7yP3OqPJAx4cLkDslK9INxIMOCn8r4GOqUBQ3ukYZOJ%2BQxmSB90maqniSWHza%2Bkc1yKSX3s7XUU3uKe8KdUpYRN6nOTZju3tEn25j%2BRTKZmVz5Vf46KDZX8vG4xU7DPamd%2FQiafXVRWi6JsxUkDVBkpD%2Fj5xu4LRPpuBB82%2BXPWetCmuGZHf0V3axwRo4UV%2Bqla%2F6dB81v60%2F2LrySB2opPLm4jwRbnN%2BeClj7DHaONRRHf2nrGtXgZuu%2FqBRO4&X-Amz-Signature=e040d8f360f665668ca9bc1f49a3237d23d697b351054d9eff35f0ebec547b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
