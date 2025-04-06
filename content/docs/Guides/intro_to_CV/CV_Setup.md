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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NKYMMY7%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsAxrSaCQYrTTLe%2FSXg2IsB15O1mvIMcYHHYsPecetsQIgHeM5XsoFvJUpGURkS6%2FlfBwZu57Z06YhXXMgEiaS4B8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOBwzOi2sj1eeuxTEyrcA7f5XVBcABE%2BD4TG0cIm%2B6IzqdvC%2FmvWr2IdogTfQnZHCvz9GpYfKbTsqDA0fge6%2BJMCzcYsHlak8tZl8rK%2FJqEOJOk6iRwBn4HGbjYwEr%2Bb8gG2lcUrYbBm6m%2FMqCOhYKRJUHlwi8d5ZPJhBWXwnsaB%2BGoH3n2d1njZE2DuKutC5NSRCIhgxeaUBR73L1MN0F0EXF14Mty2UcTmmfuZXW0muWucgBJ3lUuzxw9oW11gmVwpqORa4eWZEoZAUxAYu94okLfFUXD8KFXcbIN7wRjW4wBoRmU1fFl3fu5rVWqmWXYCqBz2A6%2BRm7gvTDVisUC30nAZ6eZlKFVk5GVRbIYOKwMLQSKf0XhcBtvExq8D5Fj%2FC4lJ6Za902XMTeCeg7yMhdcbOzdpPNYbIuE44M0OJ7Tq0XPNmIHS6U4k2UQuO96%2BGXiVcf970wn2WNMwLx%2Bco5KT%2B8zLgSZ1XJRWKkyTbPwoAqT%2BsRXGYXk8rURtVVZud2dzI1eOHn8Ig8hoEK%2F8NXwFph%2F%2FN8lllBb0xoX1O3FsdfRiqvaQ3rLWBRyjQAxhelqXq%2FEhvy8VLUVHevbmwNeMHKzBoInqvVGR%2FKq70z29Oo09Z1AGn1JqsEzr3beEYR4YwvlZb5VkMImey78GOqUBTzePRDBEcIvrRxecmDXXu4wX4J%2F5KJlLk9rdgXBuaGb6HfxnHw6avr7abYrmcVra6QYiiiEI%2BmUQWkHKBiiJ%2FBtLe8JqlVRV3VAbPz%2B0ZlU6eLtAvZNCeuuZGG0OKOE0ZQQTAJX3CqUlfZbH21kJEz686rmt34WMRU9rS%2BYOtNoPc8KoW2S48Mc5QSooHrsWdxK0W4xxd%2BUSiTfc2DUs30seG1bU&X-Amz-Signature=5eb50a36a99016dc51beda0e96141d99b1c82da03a9c42107588b72a3b2bf68c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPO4PKRG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIbywpj0oBUdFHE4AyGf0%2FaMGehfpMXYagEBZOn%2BG3lAiEAntmL02kj48j3sjuWch9p6dYNJ7OgthgAN4Znv1%2BC0xYq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDLIlJCMyZOH6BokkFSrcA7UfyvEIo49r1QzD39ZuF7%2BPV1eA6XHLUsjovSeQqJzWkDX1xK5kaO3QRAaXvYa0rHe%2FW3eXPJOpZ0x4szgDF3wz%2FdBmpQKbE37jHfseC06C4dfyRRomS1r4MyjOt%2Ba%2BGpaqlaS%2BDdzTT7QFYWUzJpc9A93cvp%2B27HMYNnM2t5kq2IU%2Bq%2BRu%2BYpwJKnjjndMgqHwV3XlDr4hNuOjf1%2B6BHMCmx68Av002hfKdQVzZN5aKt%2FTslsGE4F11W3XQt8X1f1VxjEEL4MRwk6T6wquPptRS1qW2vOibA6jd1OAx33YgR2tDip%2F8rp3Tk81gTB%2FIe%2Fk4eRgc40vcV1kmCCXFcUN5aM58rfJ%2BP9cdwJjknyvkAqfDzqwLwjUP0%2BJzdj%2BFcAgJI%2BX9HBSsHVjh6%2F5%2F2HjTSYDtw7pRH98bH8f1fM30jUG%2BXhVS7b%2Brwu4aA8AnEj0SExAkOBsSEgwoHcpgmGvFX%2FoczR8hLTMf70r614vsLvYJQwQ3rKUgz%2Fb37NA0%2FmC4L6G4iBe0B65SyDU7e2P8CMsiwKwmpqiT%2BI5YaXqg5qGUhvTDrrhi9wi%2FweOhhfKmHUFu8FfPZZ6HOJ7EM4NiTTyDfMOAbLxDCO5hL9fizLranaR0dmEm0IlMJC9y78GOqUBoPmWUYLn10kvgkyPCvB%2FyQHHiMG3RDIgSsBwuv%2Fef07g%2FsfYg2PN%2BpgVAADH6a8J%2FrZYlJwCVgUnk0JXA7kXUsExbYXTxUjM8B3YWZ%2BCbt0a0QwvJ%2BKx4FFtVS1nOlgeqTPi5VAx8bDejR28YtRu%2Fc9fBtWQkWyx9BMbFNpFQWFUrsu9otbvOPowJ%2BWu8QwW5d6DBaNS1jU48t%2FAZNrAfaOUD0M8&X-Amz-Signature=5c9d21dbac3e45fb0c26d84b609cf2d3a443abbfbaa49dd8a42ac963e0f508bf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
