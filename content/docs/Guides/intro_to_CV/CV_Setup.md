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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMPNQIW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDpDPcSLVeLzQyW642LbNdJY5rJZGs7BrIneAVG8lUslgIgP1g%2B%2FYiZmmPTz0Bq2XBFKHgmyhHt%2B4Dhmm6H3N8xNF0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgaZIsMESNOYnEemircAyY3SSz1NxhI0CFeqaO7INt%2B0o3PDrTDyLuPYjj3odbLE6eM39jM%2BiIPUORj%2FQhHl2voDeZ6NAi5zpwX81PyAGS3k85vrr3Wi3akJN%2F9dEBooCXIIH2iGu70zawc27lUwXSKeF44k0Lxqohg5vzRbOT3HuVan4Ohfe46DE2h9ipoa4gfEUtNYqqSdJXrNgTbXNGfhetPyn4h69pSXjRVC08agzKs%2FoY67qE9qp%2Fi%2Fc4xVnGSXDFjO93mjxwCQZpQaYsZRbeyutVSSoDuxErFGGCvGSQvhIJ%2BmTdd%2FIi46F2%2BSO7mgH%2FRZsK3ziOAGhvAf3bvORGBdDLZ1zead5fPRU9hiNaV2MN2vCqGuWHRE1nDX1VydyVAV%2Bi5JS9F0kaJmZpQPL8nIlZBZ3LRGX7VnhrZVlBPVVZT1fu3RYBN%2BOnuNgHU3lw51LjMEBENnHHYNvb2xVI%2F%2BbbjEToJ7%2BWCWIeezPWLCJfYJ6IXK9TAFPKwLA3nzBooJql%2B4R6VBHv79DBzr7gDDrrA5zG95zT0p4a2rnDwgYoh2RhdyrEZSyQ8VWhics03u59MVQaTHSqnopFDBz%2Fqy3m8FXzgXy80GoIzBPX2Vx%2F4eGQIPpORj%2FaXMeLxjmM%2FvhROAuRsMNLZg74GOqUBL0cd7dN42jl8tdTct7r7dObWFfAH0ynxI6FC5oVurvtImBsdJ%2B%2FyDtwUGx%2Fb6UOu4oidutH%2BwXV6vPU6N1DQ6ainXOA1YgkOWpl3rYpSM0Wx8XGVnWxg%2FOAqhcgJjHdZnqhByOQWbKcXnrMOvgw7etj8u3YwVl%2BrpVSc2bvASbc6umVKO4NYEK6oisY8aLupgfF7LNiMw9MjvbafCaiOMayOLCoV&X-Amz-Signature=6c4811a128ad50c7cf2c591148d9583a940e04d2b2391ef7952a9ab7fd547e30&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JAMR7NE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHAEzjVXwgBebvZBITjGNN4O3PCxJTJm09pg4tUKjMmOAiEAhD%2FOcfiCpqeDn571%2B22Ur0uAsyjdbP3LkdiXfX1NGGEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGM9jqOMV1xU7dmGHCrcAzdIU%2BBm7yx3UyjO%2BIcNxjoRbZalnQ8fI5AAoj5LQv3TwfTQe02P%2FX8X80qHMCkTpXjP1YQPKuVkxDsbNuqX29lOC66nTWojycKrZYFqYYyuvm7UMUJPGiRfm%2FoHU0yH0l9KwOJ1%2BLMcM088Xg%2BUVm6gacv6AGd6LUwdOFBzkVMK6gDtzvMgxznwvi2aYFhZ9V6ehALYG%2FWERx3Hdao9HV%2F%2BvmI%2BsRE%2B8SiGL5sLbCpBhyckEcI9m%2FegWWJdRqv3%2Fw4K5V1e7slBsregWqn8MGCQqmWl4Mf1libAHb%2BSHK%2FSEsgdtI0gaN6%2FCVUOBbtDdXewCH3mRQ6LJzeX2aU%2B8z7q7KNwAjgfWo5Do0SEyvbp6sRSWbFANIKJ9gb%2FuXd%2Fnip6kJlgEU6iCwlyMtFsFDbWnFyvVK2SdL4dVLSHBsPOau8CSDftJo9pQFLMagYaeBmcwwYS%2BDAT5wv0mnL%2BcTrvWVnrbTY9uwZmzKRxkeWOpBt5UUmKCk%2BWACaoJYrWDKkeSFpUsq7OjAb720%2BfmwQqvLc384SWhPFr9HDXH%2BVfHSxowuY5n%2FaNCUwfyOeUgPu5gc16DUhdeYET2ZKHJjwmzTnpYvajyoaJahWdt5WhKMsdnbXXSbwpENA5MKjZg74GOqUBuTgU8%2F2r8jMMPZNa0HDogqLAV6HhEUK7DPqT3eKny2RrbkX6cvIMrhq1520pT7LyFxk973Z7lUre7f2%2FLuaXLk87m5QYNVGnqx7ldraN3MeKoEITIgIZDJdfp8HLP6AA7ti%2Bxuu4AJpsW5SlgP0NExVJTjnTp1mQaIGHuobmQ8Fkqyo5ZlcBBO02d1RNHQ2%2FjLGbq1X9edTUOyCyMFt%2FHoIcsv1m&X-Amz-Signature=60b8756568ee331f94ab2a5cc7109886bf394d2e8f67b8e8b5951100e1220d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
