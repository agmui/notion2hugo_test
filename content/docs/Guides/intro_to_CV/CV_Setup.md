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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGEBOZ2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCRDXprR58efNJq544KVLCoDC%2BdfRo0pcZSCFWIMmBg4QIhAKalqA3RIrJ8EDEvEOQnh1CFkRLgiOVOSSi8%2BhJ%2FOukQKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziOCeNZN2dIOmvPsYq3AP%2Bk%2FADe0bWkAMxUEav5K5JoAIdhoFhlvd3ppVmTZG8mbHpUUBG%2FyHX5dj%2FJqoB3UMLuwGen5jfugQHBpA4RI1eNCMiADEcYCmyiN2dj8VD9f72c1KDV2hZl4IZXw6IU6J1DTWVW%2BOliu6oqanR%2FbOPCnYg%2F4NJhgml5CF00aoFX0ESLBhwi4Wbrq%2Frgf4gJ5QLlg3%2Fqq65wEFgwPiGqRLg0zXD%2F647jJ88xz%2Fn46%2Beq%2BE5Zj2l8loGpYxTod%2B6oXqdBeW%2FtQ4E0XYj8EVYmPe%2FC2lJrGYRDbtTKo%2FAkMXxlwABWMC7WV%2FJcRBjjgnaF3p6a00YHgqc3kq3OkUUCRsHbkmBawdwR7uI297VfAqGW65ac67%2FGMsnsB56UP8z4vziIc4MwEI8yONvIUbm%2BX6WD6bP2YiUvdZVfuXISCTAygvDTQnSo02LKKTgtBDPTCuehPKtVoWWlUAVgmuvQM458%2FuKR0dfVeD8FrWjfLa61ygB5s3U1jt1Do8BOq1WrEIuMasK%2FvwCA9CbLrGEvhi8sCn0rJgu4aNfVgaYnXPqw8k7rkjA4dUw5deOS0why0Stbrz%2BMEfjtJjOcHLU0fjuO7fVfpPBU1gDfuKtn2pqpM8xBievbqDOrJd0TDCR28S%2BBjqkAawF9JjDYvWBnXaft%2F46LXUYajrV%2Brz2RdlAlfp%2Bzjk2IrPlOtc%2F%2Fmkia3nQDhandLTQ7HccIfyriClNGA%2B9OouaOz2QkJcuUFrqTg1CTn9biqwHzBXSMAjNNabSjuNS%2FCb9Tt4xaJ93HT1XuMuc3PAjrIXvu%2BHbDGM9%2Fr6DZNoHAGMXWyIre9geAUrMsgIAiOqk7QZnEZ6m7xn%2Bv%2BY%2BwhuVqUNF&X-Amz-Signature=cd736e18c6f4c1f593ce83c3de5cbf0fbb97adccaf0c1dab6e7751891e63f68f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666W5FBXO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD7wP22vBTn7YREYwnPcPmsWixf7JKP19sIKyrjA5u4hgIhAP3R69t6iF0gJ7YOPbVjSEvbU1r1m6Kc0HwKdS6mKQFSKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZND82sgpQj98ELqAq3AP9NMSBL7lV4NFb%2B9c6VB7QxlxiGgRufTmH0mbLu39B3MNuEnBsokRRQ9CsK%2FzCW7bhhaZz7yp%2Femx8nNDSPOpWneUBWSKusSLwzUFP%2B70SMABQhtQwoufbuaDUMeKKbhgG2BQvC9wPhYC8WGzYXPPpaY%2BkeaooS9C48lWOHYcnDliDTvMx7L6OHI0FReKuLSJPsFNHNE1I87s%2BL%2Bc1%2Fyy9hjPSzGZ6nyfthNHKn4Ok6EMZaZksxNKda1kB7QS9cwFseZbAbBps4ydMLAwPCXkNucFDu6OeJaZVyBZeX7AfC9R67tKKvsdPcko7y3pH0Xfnv8cz1iB87qBs345pf%2FbJGGF6ykuBW1CwaPsl%2BE1EGUeXg42VtOEBZMYgve2UvBAzShhaoMCpzazZjWI8fCP9EqNkNpWdfA7IYyfI6XEDxXdldRim%2FtJmMmX%2FLVjXRTAc3N28j3szgG40YuSzg3T71DoXbS23HSBeYU5fgi07V8Ryk%2BqfOJ13hhs57E7qCl96O%2FQPdTD1WRb2Zylkw%2F%2F8Tt3Uy2665UFM0NseMmELftAZhLVCpJ1KX7%2BZOOtm9ZIQbb3fOMXm5pa8xt50x6IxmqVc2BxItCce9u%2FiYZJwYVR%2FJrZ9zqnrF%2FXmRzDH2sS%2BBjqkAb%2F6e0I%2BgpIue9%2BxIiOZBCDbM9Sz6D9OQxmC9AF3TcTBrgaNTOrkBNmvUtaRnCbpYT47%2FHgQv8H%2FbGWSvywILsTpF63BoAfsv428MFWRA8OgcwkIfKWs9tGECdf8mDH5lp3Tqps9VRB5l%2Fc01%2FqZlvm4ayhTlX9g5%2BXO9g%2BCaGIbF6GI2N4OsgealQsbv0KJ3w7ip8IHG9EWlFJDy0FLBTpgXZ6c&X-Amz-Signature=b846a0a802642e2ea51445d9d729a268856773ee583b43bffaa6074fec01142e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
