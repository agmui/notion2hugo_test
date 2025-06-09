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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O27CLI4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC0%2FDYCuRXP3X9Vua0yusVsu8A8ug%2B1hFjpuPzJ6KnjAiEA5eiuHLn7XOdu0j%2FgyWMtK6mw36IdVamQLT1aKI%2FQoZYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHp8EfsN%2BWUDBbGRyrcAybh5qRqAcmtES1arN9PcD%2BAGFJjG%2FafvsKwAdKCJWpz5lEExa9EJmnY4U7MR2GAiRT19Ofa%2BXjm0qpiV9XYieHOsZJgndOXVCoGHG0vN9aa26bBscSmL4eGjJEo5KJQaAKc6DANPVH5j44LJX5E60YI8dWzVxQl6KTW4oz8UsvqS5xYGMdspI3Yuwl1z7BHfxIG2Fock%2BOfSiMO0sdmX%2BG%2FXXg%2BWnGpGCWGZJ%2FnG1SlQPXNiDAfyk2O%2BPaYE7SGjujTmok9Nj22kqujvJVW4tNRF%2Bsb9wap5r2Y%2B%2BhrOLOqU9kZdDNkVsc6HElAjxlW%2Fh8egBMUXiE1VS9MXKFLSAor3UamyvSPkDVOirXAcgN2XkJ86TQl6PSwAnnnUyAK4nynzpmSPwlIpT6tChENDg5uMUwWO95kMtQ%2B6iL0otOZBzTYw%2B635OkKumY1rYrNmV%2FmxBhZA0N%2BvhWRn0nKfOrD83PXN3wvGUYW4cRb7sza62OxaDwIDl9vkGpREaeYhdd5Wmkfbz5HMhmW0x6qELzdmHDDgIrYhBl5gKyL4XaR5Jd4w9huIOd221zQu%2FLBkBjPvn6j7TIOtskNih6huapoh3H1t4vMTseAUaY5j24tTci%2F25%2BPTSFDebJfMPftmMIGOqUBojWPqUzkKO90M%2Bbqhpv93pEphA0ivIMUz1tBZBSgLxCEKefqNQhCV5oITbaC8moyMYoT2xB6FzQbZ0xz80yhDILD%2FEPaoNgbBabWaq1SNTgwmFCXZiCPtfPS%2FbWKxDVwFudX33tnaYqTc5E6nUG%2F3uY7ZlBNGyWP4VoJfP2eOP304ua4L6soJmCPkoRHoIsphJUGuTyhXli6N%2FhEkgKfxCVhWDsr&X-Amz-Signature=e0e112fd78ad6e007aab157bb2e743e3420650641c24f13d1639cd142f689b1c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHKYPLD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fzfe2RVThx8U3ePAc%2BvFnFbNhuPUXT34HHXNhkYfLhAIgRXlV7WfY%2BqMMYj2vxLh%2FSMMgxb%2FpAWgfjuOWiisAUwEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJrWPqFDy2qbruPMSrcAz%2FS5u5Vj%2FBpZPsgXhNjG%2FBGmW4e%2BVJbLvi%2F66HD%2Fb8GkDw36uK4DXo%2Bcr1xm%2FhjFTBnHolTqqgUrh2hGyUSYg3lwRLPm4bKg31c4ikr14Z%2F59KV53tqsMnJOdNnEjdUYQV5%2BxIZW0dQGR6bMVmRiUaLnUgIh3SExUK8Yhoxoi3t%2FoZAw69f1OnnYn%2BMIdzmX4MzH1zcU1G4BisjDZCB0jhFKFfxKiO9sibLe2SFZBxgQU4z%2FFP9XtqVvpyuKC7Jn4JstbhTzQaWo74yeWBGaiqU72oaVdyxE9YuCdXkGeVeJ5%2BG9qJ7SzvT2xXhJopSzbJ16QYRC57GNeNvMgN2vYxpwVvJjrnrOeMLxw2Dpl0h%2FY%2BDKYJ3chGgF0wCnHaeTPH%2BKXxjhuX4i%2B5gwhj0eLX4tt774GQA9bkiIO6sUiD8D7ZaaqmdhJt27n2v3SoFad1K1pdXyrCocsCPLepgxPY2PpQzIBIQNAb8N8i8U4HES3g%2FQJM5dHKzKH2MTAh4iLdh4JGR90cC6BB%2FIqD3F4tYnapAXkg4pAdv%2FKtxbutt6HQjvmB6UAKB%2BWaFNCjYSLk1VnQcOJHLXI4dEYxzhza0VfL2hkymeG4qkuhgS%2F0UTUt1%2BDdtBHusR%2B5lMLftmMIGOqUBYNIzXHqiHCVBmIZAsvnK2d9VfgIVoExZsWAbO1dYBa2ZX5zv%2ByerTjc9QzFDoT46VuDLxXunrl5AN398uG%2Fpr2K2l492vT%2BGyc3rzGb8IgyOqsTpqZ%2F%2B8mLyFnWigejmOMZUtXOskk60fnoPgZSo30e2EtLjq5RVP4EPXKqRMxLCQR%2BGtiK36%2FR6o2rqEoRSZqsCXDOVLYxsEvyAstJ4KB2zAFYC&X-Amz-Signature=42dfdc73c56f38835e3e7cfb107e0355e0e4164194496d84fc8e7d22cfa818a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
