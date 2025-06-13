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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLK7EF4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC%2BKVrvqsXZRpapiERCibiyXKm5oN2jD4b04850Y26BagIgejcJGOepOYCGP1XRzDnCKvbiF53MfKLcTOgN66hhXY8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDE7Gyw%2BDlmwcSMkJtSrcA1v9etPDDdn2Wd%2FMBcRFZ9bknmpJQqujBIPH0quZXRmr%2B1j6VGuT7klo1bW0nlYYr8BUQTqCmbsod7ey5T0KRnzbYRZd5FoYsgV45UYsO9UNRjGaj5OPBjMODIYYDIFwuIPD2Qg4ve9Kq1zc1np%2F4lbN4%2BjlnMemdhfjilvbsMpyaUJJD107f%2FWM7M2PdGBaEx3%2FJpMXxWNsokBto1eaFrh1yUdhW0Gia3rC65g63bNgLc%2BwG2Ikqg9qMTr6KVEXtsK25GvX2nH8JnYi3Ls88ViXLaKhK1ee97hbLg6V6Y90HQ7T89nxavHkQYMdrDdlIonTGlkTbmo2G6tDvdRY%2F3x4xvn5mUhEyKIXKnJ1%2BvGVXhMjjMEOPZG%2FdI%2BkKJW2DRlxONIEskA6HAdcwectUeWRhoNgiQGpP7iwgV5h%2FIOt2cQMfDXEYCl3X3YGjRn%2F71XwdN80AFA4DCAdJQxHpkFI8tw4tAUE7UX2TKp3zeBAFOZbZUv2cBKUS7hEObhFGpzyEBR%2BA58i4fvQi5PKjDQjTYkpkJxciTpb2kQ3e2dSDoBY6TVrOb9WU4wKWwEr83rih3Bz5Y36%2FIa2gOcnhjrwFloJrrolj%2FuzvRjT2FZqdaPAYITmmMGYIg%2FGMOWXscIGOqUBSPfUzevYd38fuPO1vQEfSziqdnnB6ZGrDfLqRzE7WtZVQ4%2FZc3sNybbUbql1wi1nlj4LDs12O2IoifCDl8fXHsYh%2BOVvI93JYeQBv26nmolzaPVWti0PHGNfJaNfLRwUxLsouOQdKm%2FJMDyn5BNCxOgMuKFkn1sc2O72yRwpmI9m82jd6Vg%2BdEoNCs4hR1aaKvw98FTqmbjMOqNrDX25HtrWCvby&X-Amz-Signature=969d31396950a284787ae917eba54b0a4c18dc62581ff2eca11c6055fa41b5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXXUVW7F%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCyhk1984ZEl9QAWAWpxcDsUWhrPHKcZMjxZ%2BmEQ3P4dwIgLkWJzM7NVjWeIzClCcY2eBlKK%2FeefSpBE%2FauxYn2Ycgq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBjTcFZq9gTfIgvfUircA4hMrgt7AuUbDlK8h1q76GLhja72h3gY72CuMJSYqBCQKztr4OKVDN%2FGk7ANrHoVKMB1zmwMZewcds0jTXjGVjNU7G%2B9qz5X%2BdNyttZpZWRia1gIQODpxLJNIGVaNJR33IkS4JvySBVV%2BB8SFoJtOALQw2LMaYyYwvMlP0z1HQlLp1ynuK7iHXuSrgJKSGDbhfqXVexBYGBAH5ulBBceS4ImFlw9xGJmlQ3%2FLQOFx9nzHAoKjRGDM%2B3l7UiRT5zBcGHAn3lQxBQxfzdh0s8pT7S8gVM9Z3AUCVpbsmr6KonUJOUsmoKzBrKg8xtRrVk%2B0BAbeUw2iwAl%2BkeitL1HfLFasQOubIrYijfvJdSI9wAG2QNWKjDff0MPx64fqj0T7kBX4KrgZrTA3%2Fn7kBwulGn9m9wzZBCgv9FgJpzuLSmPfbnVQlGg6WIYtfbbg3JckiJdPKBnYuYAw0AO7I5P0P83hOUArtqoV1nfLb5XbcDg2DHLUcmf6cdY%2B6V8pKK%2Ff5ryvjU9Q3boi1nvlBrGj%2B2fEiygiTDD4fLvdYsDKfnTes5qIwnl7YHBKfx%2BxhW5QTC8DuvWK2GIvkkA22M83ersqcM8OTjLnDLuyPLwAEi4Aa1TBWyAfnGenXFdMLqXscIGOqUBo0AyQD4kVrkvN2YnENJPQviv6BzfXK6CVC8U%2Bf73Cf3EQCs%2Bp1CTTE%2B6HmzsGUEY60uaogZUXiz1%2BmRZgfqKs9AD%2FJDaQbR%2BMATYcBZFDdAg4KW4NlHG%2BDRcAKcUMNDCHop7KU1NdqW9vGm1YSRYItdY3Dz8Ed3pqiGNql9t0ui3tk6vDs3SbgJ9gwCZpWHllI2zIFMxNePCa%2B%2F2gv7s2FcXAryr&X-Amz-Signature=3ad809f22ac0802a577f89be425c9f463c57f0423103b7e6a40e8999880d53b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
