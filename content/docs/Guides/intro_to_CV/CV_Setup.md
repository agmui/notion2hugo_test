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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMFMY7HL%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQD31XSkG%2F5pa1HkT%2B9chTC7840GJs%2BAlwMcwhvvFpyhfgIhAKaYNvXQIN1F%2BCNP4KotIvhgWdUOMyXloDc6t263O4ftKv8DCEoQABoMNjM3NDIzMTgzODA1IgzLNRw2L7hB1znIyu4q3APDLBhCGdNFZUXbKah%2Ba6%2F18aVwdGaYEAi%2F%2F%2B1T7G16RqO06%2BzItoxEnqKe%2BsbHV0FNeBCEWNtVKxqKTBndRphZJ8ugUMcI6w9tDhMWQPVNam68fyZheIXah2D0tkzlWejxVwpIGQyAOsAnEFynDJOCl6ew8H1gXCVTp%2B5KIZkYer0irT9P3SZqGniY1gSPrm5jPQqwOle3e83ZKbgMdgIAg43K8XnzMncI3mZ%2Bq%2FjS4zizIPsiWSvB4LW2LL0JyW4NWd749eit5StoWMs5ZUOo7DG57i%2B50%2Bm%2B2G0EHAf6wGxRAIxKEEJJ5rbrOyG4%2F1b3cNFzVwKPYuZ2gR%2BAq%2BWEkwQMmpMXNgR%2BA1X1monrk%2Fc0I0b%2FCD8eASAVKwnbZT%2FbcU%2BywGlFJGtmjLacbCLOCe3OEXb2YkCUoG%2BMHtz9AU4%2BpNhHl3d6eRPwue%2FFdt%2Fx%2FLx95cAD7PoJV2moXLzTjbd%2Bb%2B%2Fa%2BVC5IfjEw2xiC%2B1Qqhwt3J%2F6Na1pdIdnFMmelCu6ZM%2FV2IV51nI%2BpeKGMGZ4Sh760gsz3sAZ0kUAR2Dv2YpUsHs2Ihnp4IOaOeftSwjvAN%2FIOUDtJAiC96nzveFAhP9MHaW%2FCdWzDgExFpIQyZGFovpBv4PJPzC8s6XDBjqkAafy%2BTvug6YZz9d3kDqVxLzu9D9pOZ4N8S5QrFxRKmqgTKia0Wukh7uL3qIGxeEqvkyUyww3pMF%2Bp7mtPv%2B4yvRJIgOHMSMjFVTlDFdz8HD%2BzVwGxwMSWj%2B0rP38yrzwLvTGUxGwR3ywavUH6j3FExc0pCkfGGCTpky5UyXUc3jD%2BgpKoeseTQJmAcZNnOcncCpJj74ligqvnJSh42OsfyraZtTc&X-Amz-Signature=87d24164f144c9df817de72fd1111a207e32a87be676bf5332514b0ca7933665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JC3GQZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T190344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCkp%2BUCydu8DE2HTcvRH4vvJlU%2BYAvfRdMotjfuXOOnEgIhAPiYawSipiJgWpwEhvOlu01lTiT%2FA2YZcPmnyh%2FIesPXKv8DCEcQABoMNjM3NDIzMTgzODA1IgyHhL0cUW8tDRUhiNsq3AN40BYiXlzYhRtythx9MPiPLt83aTr8Ia87Amawp3QcZgQ3b8LKQZG8SEDqcc3kHZHPS2lqgA7eY8iGSkaBRj55HdF8fEYtZYNIl9ZNo5MkEHap6bitsMk4pxdyG3ZpbWmwgFF45PT8clwnh5bYHZXyotjQqbVBqoHRNIYWZE2Vsp%2FtFOajnmoyPi%2B2%2FCwuwF2ceSbG9DgdIOiKDsMfhW9CdiMOhGsR71rTK0nNcLRPvlJR98%2Fbux%2By81x6sQoGkjPapg%2FW0wJ6ZaIDRkWo0TySpQ3ZbkeKAXZojpIwEnZ7Y4BgJI1i8xrZCsTTULr6TKLF%2BXvIT1zyupAdqjeFvAug89Q9yMmBIM4dGrTCIXSyT2RWt7lRnuOrz%2FWSCv2i7THBCmioYRB%2FXkzHJOOiRMNuvxJ9r17sjt9D4D9Y3iTHOA73HhRjWLoaLooKJFk6EkpUPkBXnmdN5e9MuetS5lSeRal7AoeRwCHXFxV8%2BPjS%2Bfo%2FJtTDIJIWOAnmYNXTSjoRFm%2FeozePX8XT%2FmIzFLKg7nag6XPyjT09KVEEyxcAcZUbwqXn8%2F2pyniW533hMUvBiszeJq1BOiVMDU9XiiLRK0sJ8O5fwTEY9humaSgkiCqyAIOF8rUGnk5QCzC126TDBjqkAX6HGTV6FPrO9LitB%2FPgRzcn8v44Gu%2F0%2FUmcpoSsUj%2BYRSfOhFmGSAEmlJeN4DhMm4I9qj06NRI9Vma3ZT3zQUx%2BI%2F9%2BXasxPlli9ldv6nJlMcqRL8r2NkUKzxW4HslQaNq3tXzi1duBLh5N5nBiE16CavZcBxNXVKP269TzD3HZDLTsTgptDNH0AqJQPdhbori62bcLHjTC%2B%2F%2FQr4XYuCiMnINS&X-Amz-Signature=09c707fec31060be0e1f0d1273deaa0997c7ac4db558142fc4a28c4a5ab76029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
