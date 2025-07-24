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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5TSSZB%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdsrHiyKCjt1VJsM%2B2t%2F%2B79%2BhPx2WecVcUbDxFwnkMFgIgTeIYOHoUDdNZ9Ubl0DqvFjbYiKu%2FijP8WnDxh8QkBGMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDER9CxQgaZzMFMVrnCrcA8Lu6H62y4I8%2BJX%2BOlg%2BjAcHOYPhDi%2ByJLOOun4cmIvQ7kVUEwvkPYTBzySVMrnLMWR%2BcoK7lUkjXsoVOEq09GA7AfmMK5fRXoKpaFuP%2BMSwV3aEz4zt6Gf3hnBcm6X3k3aggLhu7t2yOXsY2PE%2FyOQghR7Ykpn3lqBOIaihfzRItC2PikNf%2B5BKvC%2FNPgZ%2FIJbVvtzB33DXI0BCg20a%2FIy0T8%2FO9DlYoSjKw2hA%2FhSU%2BDUpBFOxmOgY7J6NpbUFYiyUj%2Bx1jk6f41QclBujXe6MZu%2FgiAiE3baCyYAxpfCBtZ%2Ft47AKb3YlRwMWXRrK1t0fBJimQWKCMDdy7p8Qbbcda63r8RsMh6p8qZ4tpilPtX2sUfyMA0%2FGSxSTvoFESqWegb6dx2a5vC7F9RpTVUHSyQmYq6KzyQDlPiX78y3IjE7Vho1fhcTjiuF3IcAvsN3zvo53rOcRbGUMYlTiM1sn25%2F%2BwilOXElDzEzVRNGGgpsQYUCzzH%2Bhcv9LD9wxweF%2Bev8PFQQZIKJBxEGuA3UWJgKYKDvDfyTjpQtEEAXcf1fyfuYE2fpXbWoBIJYArI26HlWp8zeltD%2F8EshiGtbyB4sUJMEKCfw1dXwq18MobXletebh%2BIb7TrcuMNTZiMQGOqUBuV1QhyJvx1DrvrfAPkM4DCs%2BsBHOqk6jRL9o2H2wV8V51Pxwxx80VxempIKitBwdSjyaR2HfGFAqscQ%2FFeDCNNO90uy8aOB8ExY6wo%2FtsRg%2B7CHuXnNVnZZ5CVu%2F3stV%2FDfGNJZW0PCcH8HUHwu1eBEzQcxMEjfNq37sMXC6fnfswLaeV5o%2BgyGxT3ql4Twsj4B7lCN2EqAbKRh05ScxV4FutWMV&X-Amz-Signature=76356afe1c957db4976fcb08ea7471b510bca1fd958aa31f9536efc3b45810f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GCRXSJI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIERd9dSkxQzYQYXKp93r9k%2BOl9C5aFcUsjacn6tVfMwWAiBawrwt2H3mcFhgENNa2FESOtmwBfwgSjtfCkZG4cxEWir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM5OKFS99RkETdPKnaKtwDU9nmtHf3Ivawj5oceaqtsEpwAS83KMbviriJ7o3xd8ICGZi3CtVUOfqKLonUtHniA9SBNDHiuXfR%2BKdnD%2BuwjPm5fQUcRbnYVPAqOe%2FtT%2BxjhsT9Truge5IcxDMlZW%2FiHVhqkLRJr0HNx0iZtrOdOqeVSLMXQPl0Zc4G5uXe5%2FgOuKKh2wx3ZztDXSSx2s90fa4i%2Fr2wdDr%2FZ3PnLCXGH4dZ%2FKeUasdEwhsV16pRhfvPN78q7TXyYqrYCKnl9rmmOfh7jZkvAQKnz4n%2BCflIBk6Y6NxA8lE65LTBAecJRd5uvkAUblFygO5eBtl4Mv4tUYFfZ94ZMYbDGvTJd6EJ7rHUpGcpNy%2B4cOhAPISDUO9lHUCIR%2BHUioCdSTo6fPBXLtkcyMUIJoPZlB%2Bvf1rSXVQkIRGlERrNPbhTp4IK9l70YBiylcVWVtrbxCOLNSQ1zJ47dkNWPJcDu9LpyB3o4vD4Rl0jA1yYeTsaALag6UU69R2HCjcObNkSYzEjdZ%2BRE5zk7SUvojQhVMyXJLgjVINTYyFIGWDbp%2FQQzP6WWzYrH6R9jRJFLprYqa04S7NERtGsRocSw%2Fh%2B%2F5pLWHSHt0IzavgHp4n3TehttJ4ffEr0kVzycYMQNZVz3CEw1NmIxAY6pgFlKSK4enszinrRGDslwHLm5na9ub8u%2Baz5ld3un48B7ryTdoDDcfxKxwKWKUaDmaYmSZey9wqAjT7bh06RvJ2bQyvupRRmiosHf9NXX95P3e2mI25H0TW9wNtrQ9NwnfmK8WA62Nac5lHqCrHNICBbqtsoMnLiccA%2F25UPHEqas6SrPly6xcHOvaEO55y4R9JsYge0%2BWi4oOrklUqievtEKh6AuEit&X-Amz-Signature=32e8b22046e52284e43d7018e4d8dd24eed75b5f78d0215f3b76d9f18509b196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
