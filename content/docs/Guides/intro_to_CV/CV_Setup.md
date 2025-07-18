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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV34ORV3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIE93w46VZusi8XwS%2BioU8kxu23dht6ZGHVvoKXlebpacAiEAt5quD2b2QUX91ZdlTIFJCKp0%2FkjB3OI7QbWOO1y6bF4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGK3n8WO1eAo4eCMjCrcAyZAbi0HqTuj6AGsl%2BJ8N7gn22we03LlBq%2B5IC5DOCtbsFiPK7XW8a8bGTTstWJtUOslgcIIR16a2xq%2F13STXjNoHCbcrYcMjizReHWolGXuSUslcmgPJLNRB8Jzv%2Ft24JRFHQllZohoyYsKq0mUFv41ss9ntIIlBHn4GU0zVt94hfF0yALnukTqH9KLKmOoeX%2BzgTf%2BwzHUsZg0vGSN61YqKuaK%2FBzsEPqljs1O3VrFOsrqS0nfjQbHWPf7ypy0nfyXMl12%2FxT2%2Fx7GTounJGMUG0UOHDY1NQAG0VdKEoTBnZqAr8O%2FyGRAa3xH9AX7idZhJR2cgr8gDmrJHoGIOuUqiGNYksaEi7Eawrvh2qNwc879hRLLA7wMrtfTE53MmIaynQIWQhPppzreyL6uDnczQcFHDAMq%2Fl0FBCVWkL%2BIgNcQWH4rT0lV6XNus6OjUl5MSMvOqrkLRW%2BhXbjEYLt%2B7stl0qRfqUfkX7RqZnZlpehuSkemTqJMWew5kimMjnUAhvRiH4YqGM%2B3z7nNwkq3VmfHA6O3mLFae2VSJ4vrf6B3tEnBa0hcvaHoRRZMvJgyJQHGc34JR4PfKzzRmKVkZ7FoyaEhyyGym%2BD1sNC%2F9o%2F6z1UthbskpOAmMIOJ58MGOqUB%2Bm1gruXryurDujPMwtDh%2BUEjzKiv7tQTblH8t8ixp%2FK%2FQqGhhr5eipxd%2Bkns5jHDD8kb3opIx%2FijIG%2F3cs%2BbvwfL0v3xph9QPkk6YBF5N1%2B9vojmjJ%2BdnSDXe%2BKLVk2r39WrVAG9uoxq9JyYXNZYDSBFJS7ePvuEGNbSGQpcaQvwXBKmvrgG%2BrFEx%2FjZGIYzSGFCOjQ3Sq4xKABOpZEcf0%2Bng3ZF&X-Amz-Signature=64b96f080fbdd91f709f0f0a212dd6b9d971f25972213a15e2f26a9ebf87c37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMMSTANI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIGiRY7m2veKJbbxb9zwmSaAD8K36AGtezS0iwHjIx%2BAVAiEAqBHW436GdjFLF0hIJEsmJYwGDaqi3H149Hech1DbnZcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNboXiAHjqsnWtbfNircA5xEnAlfPHbs%2BP%2B3B1nxt9mVMLQtlrRTV%2BIKqyuh7qimb8W9IlL09mudLzuE9hqVt8HKLvYSvIWEw8EBSAVqD6FNjzqIYseiLWrkVK6xVqWY813gd%2FtWh8lfqMaDGfzBBU4rtcihFoTfVHsd8qpVYQV%2FLshsuF%2BVii61z%2F79rXOGWVrpotHRnGdOQUE0IFQrJWejHWNA1cECkZn9pO4VE9H4iLKR%2FIlO5h9RoCGh0ptZi6uDFOhCmVnE5j67NOQv8x7dRlaRdZv9d%2B%2BM79NbfGQgMayT2d6OExMjROELU9blAMhjmO7vX1YvYaRZSdmrZqM6kaKecrAQDFw2lFQiM00aCPkdXOsUeAROWzkf%2F%2BG0cxW0M6zF9MbbBBWXqfAz7BTahjn2lusfbil%2F31J6dId8ASLBgGo6vHfwHU714Ve0Ltb7kN0sjAF0j2PpYusdxHM0Slb6zhko0OlAxIXyIqN2W%2BAp8gDty0m76AcBqsTmMDNJ%2FY2HxI%2Btz4ndF94zH60luWGpttM69myuSNmMwe3SSST9qfRQQheCPltXEWi%2Ba8L6VPfSamwp6Paw8XdFCcT2H8lY5a0KlAv2flNRLvwE%2BFstAfsAC8zkv4pyc9z0Nhpi89SQzF71CXI5MIWJ58MGOqUBGyDVOkm0%2BjnpckCILdMxh2OyJVpRZBeW9qEs2shSo%2FbGUuYMikUJlIPcx5LQEgVhhMH7xSYKeZVelXhFY5CEQSgiBy%2FUDP7uAzXjxlNInB%2FjzdwQUYtpHIg5ytdDGF3%2F9n9EnvITNJ%2F5tswDI%2BMbCSNcuNfF6rmgF2qLpXeR7i1v7NXHzW8jvH593vyHiKLApgH5GQTDDgv8jQGrRbD0GaFj%2FflC&X-Amz-Signature=5c9030dc5bcc9f1d609b4dc6fd4bef3f4aa4e1ef35b33e06de4da16c51676e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
