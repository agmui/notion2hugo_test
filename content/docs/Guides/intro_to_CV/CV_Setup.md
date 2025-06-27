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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQSQWLH%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrHWemKobhmH%2Fh4z1342zYqP1LOZnTKiqIZ9zoto9iLgIhAOUxAgnynx%2Br7QSHyv0qhk43cSptq5G9n2nsiEp%2FdFpZKv8DCH8QABoMNjM3NDIzMTgzODA1Igxi87oebsW4HmfO25Qq3APgqAOwGhYGUGab5nsXnVCcJxoSvjiag%2BfGx2P7MgcC0suxqqvSve3Spdl44LfrlmRGR4GzzznetadoSF3Esv5VYAJ355txY7TZn%2BimPNjMDdqZ%2Bw7XQq9CUOWHLrxoBLG7IZV8ypZgE9kIA7sZYvmWQBLazZXFnK6fPLIlCjDyy6cMQ7qWDOGgvz7OLrrLHcowgn49nQipi%2Bpqr%2ByifqFxLJ2WwpAgXV%2BhZLfAqqhi53sx4Uq1Adu09IEaWdK3GZxwhAxbMaib2xboGu7x3OrY56H9%2BSw06%2Fc%2FDmblKlN5gXXEXS4gNL78tM3uMZFMg7kgmuWMuvyYztAk%2B%2FU6kIV8PN7CxPTF1mqOZQp%2BwJyvkDcnHrn8AfdDK015lUO9bUYc0bvfQp%2BGEW9ayUXlMLwSl0Okd%2FQCkZICTUH0jpGQZjvgGj3KwMz1fIDt5%2B5GA5AW%2BEQ1C%2FquZgiA0r58tmivzTfbgNdApCzqSDWW%2FsSdn0Y8s51dOVuKEWNRI8AYa14aWtz1WyL1mDU0cfw4IsPL1emGcs3x0IdfomzlM1ACI4DqZnkxG2rBeHAs9%2FRTQyOQVFEVESDGo2PgVkLpLThJehLJJIplrrspsFSipcm2wDZGncJlEQgRjnNDMjC%2Fr%2FzCBjqkAesU%2BasvYcaQKAgrlNuAa%2FsURW2keAEo6zcEqNsMaQn3RmcRhEE2f3%2BkIL9uRrecBEafMa7BNlWLbCqSHKQLqO2n21U3pqGk5GilpYtJ3mB6jlrSCOH2o42Jan%2BEGJQfzwzXoSW%2FHYlVdjDOG3%2Fduhk%2FE40j4FpO9m1FabnM3MAKl8zCxHbHkyP%2FwBvdYqj3ctOy2avKypqVgC0aA6961NXEGSAj&X-Amz-Signature=4b907504ecde4158694759b1e4dd11ed8605a8e99df9bf1c3fc01839ef020f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLOITSJ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvr7ZrFyXg1n8C1htZwCk5sjASJ3RKfLLyGs2T2mf5EAiBiecm1NshTYlzk2Tgx3F1kLZqf3gF9kYXXywWJ8yXuCSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaSoN8wp01O8adFUuKtwDIAMxQuTm104G79KRNECq4etwqW0m3KET%2BaGq%2B8MLWqUY%2FFZ6Yc74lPqBCAkn3xHUG%2BAzNWWt5woVc%2BK07SRIIkPMRfp01a%2Bv%2FuBJROpLUP2GmNkVophwPZxMB9whFDLOnEiQmWqYNaUZYcW1SKiCBAfGBfhG6RUza12SYX6spJ5fUpFD7yRle%2FBZ0kWfkW01u1cOzPDgjF38JQdgaiSAqz7rWiGJvUOwCKSxmSzgc%2FqFhLW7dLaBdx3A4HWWKBKR29EBJiRVFJ66B03J3VRKRR4K8bYvDEoQetl1pYL2tpXwoECPtOKLt7iPjbG9r8adrnie2DH6oGCH3RkjSUlxmrAlH0SCqPvRYJ3kT92D4%2BRDNECjLZg4IZrlqERx40Uj9Yb%2F%2BwYvnDuO7yqTWx4kO14MVm7dQWzrIsTwNZDHTUSyscQMnWz2S1Zup13Ec%2BjncqqFF4zpWO2M54XfwdZjuXwY9BCTUntpRnyXVUrxfH4AafySfSEhXFUM5Zi9cUpZtaDapL9NZRewyY3c%2B%2FhK0jwfBzSPD9QeIIUVzxly6MbIi6h0pH6LcO8rmmpnmI%2BRlayBFOEOXOW9Em1PIG5rrlisjo0BJMx8R%2BvMKdWdrCg0k8%2BpI7A0HB0HEOcwya78wgY6pgHd8HKC0i5G3hhoGqcPAGd0U6m1SOr9fwV%2Bh2vamHNVGe8eXvw0veJUI8g3B7hWppvji3zLOPsZt8T3oBz88J04ou7%2B%2FmP2L1yygZ1LLd2pHpTyJWEnWU3cymmVR7pVnddPqduZ6vFv0F9ynK5wa%2Fatnd9WUIJC%2BKaI8113UrCA7gUeFFiGBLBTvlDl4tTzNWgPhrYAvPWE6EbL465QvdBChCp3vZyp&X-Amz-Signature=967448a4e41eef839fb76968e3ba2b382db220cf87ee67137a89ef200a69c98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
