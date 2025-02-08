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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMOOQOZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIEOwjynla5%2BGDt3INVnlw9RCQf4M%2Fcp%2FoYvFEXK28ExJAiEAmB6aZdVTTi2mb9BM5PTXRyKI4w%2F6ozPyAX%2FUizQqcLcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFoTIHanU0kr9pa%2FCrcA44ofMXruFlsKdnA0UnILhthHIjfISLbjJoeVu%2Fj7ajLoCTIxQ9bs3sgXmoUlLZMUM3REoFwm6M3JbWkwNK%2BjGKhnSoTZsRreyH4EYlF5xAGujGU6ycWNaOt2T9mMpufINY%2BWSe7GfQVmyGW1TKk%2B2xxxIfG%2BdoSCz1p%2BHgYftr%2FKyqZjb5MOfiguWV%2Ba3uS3rrHXW%2BaC%2Bzm0MKAeMA7beKE9uM8GHNTR0FMTOn4sLi7xGTctjlPXXAMmWIOMEar7pyt1PGmjC8lsOC%2B4XciPAo6y7kNM3wsPIjmEXzj5wYiPbhE05icCfVWYTo7AGI3A8bC0AO7%2BuE0xHgG6896ZQCo5lKaPM%2FxvsRwWvrIC0g5qO2I6yRJJd8WxT6Elk2YLtPLC6H%2FM%2Fi5n9lyUbS5raW%2F9KnIW%2F99eXZ7%2B%2FY6QLzwz6Esihrht80kaifCUmdBqVjiFT1HooAJH6SrAMAm0n4OwOu%2B%2BVLJKE13NLq70MQwz9%2F%2BbtAhRUdp0DutMcOR2yQPQQA8GySk3r1WDcDVjdBC1Ce1s9OZ6O%2BMQaxQeBLS0OJ4uUVqfAVNzPSFiiIzAMrKfhfserXlQV%2Bf%2FB8fLI30Dpxz7%2FDmylawSjdm8s%2BfNEtW0bc7PxcLAkEpMKO0m70GOqUBtEII%2BtZe9yr6IyOT1k183RVIOS3fcBzfbFAXCZ%2FV8uFqLEuG7N%2FTShj7h7983ZreK8ZXnmGQK11k9j5bubBDfgTXmtoOQnR2i9pBIW7S7EZRTd2y3GjIZmVm%2BJ53zAqM2woPCjUrxxgTTQtCPo4YbTqiw4BaNhq8ptAn63KlmL%2Fy3aOByYS2ifbin9UZshaQIJQyL6O7iW9430LXqeXEB9%2BOJ3w%2F&X-Amz-Signature=22b85dc827851973d209ba8fb2b0a7e3114cb9837f460d863586253d105fd73b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FOE5CP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDzZ%2F4PQHefHQXywBVwOsfjtwJ9HziR7RrWr8vjA3VXCgIgNSYisPsLke2j3We5BVM0j%2FkMvEuyJraKBdJnUzkuNTwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgWS%2BCmKFPI5%2BMTCCrcA8ZmDpk1FETnHeUmpxBlCV4%2FLY7lnEhC0pOiub70sW0vitRzfnW5qJ4f9iFn4%2FnB9ElwIr88aIBp9KqvLxi2%2Fk8iMpx4jsEB5UU6EToq6xzHyxpk%2BgR83mTE1gpHtRL7Xh55fcrSD3xUCjt9idhsodO9v%2BXBQ60AfGKuI8yaphn9cD48LfROa%2BQbW8q3y8MQTVdPTg9%2F2JPSe5FdQxjggwqxjekgsSeV3NavmR4HbQPnvq5re4WmdM4aQduL1E5vEsSgqmHaat74dLmQLAp9s04paK9pboR3skLuiLhkCNgEYrl9AImA4YaZ2ojf9qvTI0DJfHZlCVSHHtmswOhJEfhU%2FXvfL0hjVRgmeaE0bqLc1Wl%2F7oJP%2BxscL%2FLfeujE%2F0esKsEMjgJBqyKBGksClmG3cuAKUAZzFne5NCNS4nxT5c3HrRfOOzwZbigH3IMsfEPj4Eg4Ocl27J2PokIFtFZ%2FR8Zh0tQMJiSFDH6hCmbDBSWufuSLakV81igirebybWlPvGNynRXZbHLvJg%2Bp%2BBAuK7qsXPIq3I0aVhT%2B2JlkWcD6NY5ESLtpQ%2BDz%2BTbL3wckYA9VCqTpK6GpH0kf7zzcTCMdOOMnlND3TdkOQUcc5Y906K7V2yYwy3MyMJ%2B0m70GOqUBh3VIaxl2irauGLA6IXkrD2TrWoZDxTjKuRZJXFfF%2FYP81XEFtSK9ptyAYDabIkf14EQlDztyxkfMJ9eoeCpcywSxQcvdz%2BSHb7aFwJeKbaiQ93DnHmnkkNKi6FW8c72KiBPL7H63pXPBX0aYUfAqFx4NoguXu83uy7LZgs0pGUD3XHIMv%2Flf7J%2Bt%2BRDDg8JyRRiSJnTMZwpgDLCaktsjWHzwHeom&X-Amz-Signature=9e8b8c9cfc45f8cff7742bfb70da7ab793e368655dd706c85a790920eade92dd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
