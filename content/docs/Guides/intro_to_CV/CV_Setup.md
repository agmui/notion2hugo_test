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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6SBHKTX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2F1rFu4K9Dk1q3%2BSpkx8M0vwvRIGBLrAnFvmXi1CqG0gIgGG4c0b%2BBOquhBv32VRUXIVKGG1Rl1%2FOSXEesGMZPbREqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFZE6h1e9VnjEULiyrcA%2B0hzwVCVslXEYv%2Fw%2FezqU4mR8xfrH8VMBVapPVBJS%2Fd4JorR3rprdisJojirhlLMdeyCk9Dn5LmXRwVmtyXrY7JI%2Bye0slbTIAWZUDby0ZvRDGCUvIUibObOfeGtiFucd5Qj6IuDBA2kbdqQOnuuJ5oLfn9mHoo5yyx0hnjsANVCPLQPS1MuXSg34qry0h1JL5Q1mrZUgHqtQDzIeUyUsM1blka1nHwcIt0HJHy9SIahX1%2FbE4%2FeAf2OpwrIVD8IUuHIPN9KHxqYtW5I2DEI%2FvdAkkxd89sgWprGFDk4pGa9N5sBc252t0KZBQTbKNpdTwkdeh1oCSXPGBIdn0iWM2ZGlnLa5eIrr0wJ01QtbA10fDRadAiMfjKdeBT2kaOJOOfTZKh0xib%2Bs6a5cz3Uezn8po%2Focq33Mr%2FiJqi16mXY%2BanQXaF2ORkr4G39VXXi3HLibBHaEkIKQAtmrfa%2BHz1gNt31gIINQC6zmMzRRvxVbynK3T3rxcUAYlMdBrleW7mbW%2FJWguMF9XaWB1fUD07ZVuqErY58r%2FCJsjD9YeHrEEC6yHMkb%2FGyRW1a20LpjX4iuZOyNcgSBfqsbgwpi9b0Jy%2FSqqQzccohGFZ%2FS0XGkzP9doONLoBIcf9MP%2F40sQGOqUBoysR1JrLChaKZ61WSANTxVIEw4p%2B0KvK68I9aSFNh7Tzev9jrQObGgss%2BVSdZBhWzeRLHYz2cBXPLVq7lMmNK6jmZSGvh01EQ7s4UDEwqDDXP4S9X6Nxn70Dwm%2BtQrguWmUKL4oCgLwD5W48%2F%2Bm1CP5X8U7VeFCi1qkq2W0PyAm3UsG%2FvFTJo%2F5NAoYJ1S%2Bkxz0%2Bzg6o4AOw8QH46Z1bjiHVR1gJ&X-Amz-Signature=f1c807ef4b041b76afed74762941b14b168ba4fec55552b886e5b9e1b32698ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKH4KML6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC4%2FxNGR%2F0oiOeuzzPJ1n%2BS5LvK8LaQnhaWuuRqAn%2FWCQIgEwu%2FQcl4prZP8m6C2rfcFPK%2FTprY%2FsZDIG9hszdgrA8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE10hC9lqnvSVhUXYCrcA5ZQVwQsawg493EihbDyhHwpOP0RfC4bWswTR2AlKcPxCrIHsftbJOS70remmNaXQIiyKzZ6tsLjBfjPOkrGPYRJ1ntnwn55AMhArf6lz16QanLtq3d8bpDPthwbKhn8dZdDc4Dor19SYTOFM3MyiihHSr8nuna4xCKBRmQNLMdv7fbaA%2BCTKuQEyepR21%2Bi32WMG6vc%2BO8yaFffr7xeO0XxpKK3OSMJn6VXc80qhVsysaePJUSGKxX3tGFx2rqScxN1tBROWoIiOA3hzHDtgAFamYg6WvvCl4hkAM9uJEes5d3M9yexPU052KeUxCDeVAqiNxJn0mVyE5FKhDIZJs3GcCNsS27qFEekAgpvWAgMCT%2Br8pYemenTzYYDkMHT16a0HrMDoeXuQWnKINCz4D1nDszgfUrFTyCQZ3R%2FBGtsFptZmAB8zEfazdlfBEMGKkany9ecFU7AxBTXObN7%2FGw0KFAWvTh0WJE01oFp1OTwJG8Zzvtu3i4RLV6Sf4Ref697cA%2BXd7N8vM%2B6F2KXFpcQ%2F5hXtn5EkzM1tkqoALZvVJfRJoYSUlen3K%2FkEgJoieGA7jw2gsEbZsxj4W57Pmzq%2BYh7fsQV60mujnBkdDqPLGBhsJdanQqXaLEKMP%2F40sQGOqUB4W%2BHSzbz%2B5E8C6t9c0hANiaeDwwm%2BIigJFk%2FKbl8o4Pp1Z1yBcXPmSrjuw3gmb13skVjMxh3e3UWzDstKdnFtXaGShmxHKXn%2F7iArdz0QtFXYcLDgvhPplH8899dy4XqvkMeAFe51v3XijKQ4oAZxRhud1EYToJytf3FNPBGnlO58dTplnfl1wBcung3dbZfDJ%2BPHBuKBfcex18wSGfPjTseKWpi&X-Amz-Signature=e88678da160c227f3c91a78facb32ed65d7460b08b35a94f7e0fe94a540501b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
