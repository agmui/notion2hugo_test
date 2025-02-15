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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTGD34VZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD5bYl%2FCzmku9BFTllvSHCyjoN1WVGJWOg%2BLIG%2BpxmF1gIhAJ58AU%2FS1Hb%2FKTHcrNcfPndycn24mCUUJM4D9jbwgj9aKv8DCEQQABoMNjM3NDIzMTgzODA1IgyWRPujQg2QhEPXvo0q3ANNdWnPj8Co8sz7THJQSrhI0kvreOxOA0RqDBAzrcJuXMZKjgxTuM0%2FUlidEJNrEFZg51UeHlI32bfByVDKZavwR780kMTywG5f0m89VaQ3XD8177NJxu8P6t0kOpbgTD%2FOhSWYAVqKEwLklo9%2FuJ9bgBlv%2B7MuzfJ%2Bz2u1ZqzST93O1i9yX6iE9GZwWiCDQ0UfGTdF4W1l%2F5b7bPM6%2BzJCoRiFNjxnaLemCHf0SI1YVsDwrA4DCKpCwVj5VvPQRYapdo6f3dut92mi1%2BJxGdVV%2BFaZvzi4axTh2hiXhB%2F%2FR2w8DrSiJF5058Km4FPhyzDzIGfpb%2FM8KXaJMt8e302r7ubkVSlCgky9UnYHwa2%2Bb8LALxKOlAykNYU3UjDUUsIoB1eSH%2BjhGPAkSRNaFhygcN%2BqQDClz7zi59kfVaX7UuEVtR%2FKr9EkVSKfBF2cyPyIu5i9q1uiqN8dKl1cO7aYdq7f2Qzh%2Fcs3lcrUesT2CtrMWQY2UkSsGjg%2FYoffh6vYzv2g2PL%2BCP4l6i5hcS1%2F33q31rBdSLSlbT1%2BmHc9H3cPLqZnEwUUekWJkZUQ%2BYlVqt23E39EagsjU7Lo6unpp2O8C%2Fxmdm80uA57B8%2BCcNi00vzHX6gmIKpMDzC%2F7cG9BjqkARndcxN8CEVJfPR6uqL4Ggcl2SIQP2MS%2FT051Qs98j%2BVkoub77dlVka7sN1IyJVhrrJKtM072%2BFOFpWk6M6z5gCC%2BxyIoPr%2F5Dn1MMSgAlnbWlCmgmWWR%2Bi1puIZnTVbdzQ75Xe1CYI4lTRhYeI%2Br0zMJQwJ2aFzeAxyp65Fm2LYOK2mlDeccqrrs5Dh5BQaNO8FoBTng7n7GDv56jbRCNkUK9v4&X-Amz-Signature=66e6b7f32a9ba437a885e55476af11856d1cdf05aa611e89feb97c3bf5b26d67&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JWKEX2%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCpKCohUxXniRzsW5a0vYGviS%2Fau6ZcKXIn6akntLDwUwIhANNVqnKqB6DcbbK936Wu%2BgYboOaOhV%2B4kTZQOpb%2BAK0YKv8DCEQQABoMNjM3NDIzMTgzODA1IgxQwvYJtTmdaNrHfjUq3AMtcWqwcPR0i8K3z%2FzpXhYOEPtnEAx73ZsLx2vDUG1Ht2eAAtkaP7ao6bYJz1KcMTCgoNvMCQKtvetBdVKPU4%2BRHNQZcg1%2B4CLGqKu1F%2BCpxy%2B3W%2BowrrWi5dcdMqqfpht%2FtnqI6B0F6BTeMwqYPKL0XcK3R8WSY0%2B5G6yzFOSlZlzo85U5AVWTj9elJBxw4y2k8Vdv4LH%2BmJqyGn6hrmUhP0NBZLmjjMXPrSZbt1xx2Hr8Cfy9%2FjO6eggD0jWqwBgX5ujIveIcYY9iLc9hS9GxfE41YNTnXG5BzrKBWEV6RCxiDTEXFQNteFO5vIEfoTE4E6PcD9%2F8gwlKHG2kt5mXzTbjAz%2Fjo4iz7YFHGMQy3StumgrCk7aDY7SUaf4RVqfG1ITr5uflPi00NVV25iT0EIo6OYpclzKJF06ph24C0RFY9DxXVzqZ9bcJ4fhN6n8Rl2gw6MJ997w9%2BT7zQ0u0zA5y90%2BA23bevpnEid1lEkQ472nzYiYqyywPAtIfvAjXQTkf4GN%2BFKr5dyGhEd7G1kJk0MC99jHQrGzoxrGT9tCf1BlU51DZVsW0PWZI2F3L9Ke4UFZW0j8E%2BP2t1nwKuu%2BNmua328qyEA8zFTguF1Iu809TLc0IrjaCkDCu7cG9BjqkAfVQD5fuc%2BsKVqYFu5fkjIaLNOFPi78ZbUVMdhD3bjlK8fdxc8DBPecrgIh2MX4CRaotMLJuuf94K0p9VC37HA%2BEVqYnlxi0AjVcikEgepDLya7lX7wtY3OkfTd8Pul2X8eZBv%2BYurbBVdQEj%2FrliSzBOVSZLyu6U%2BMR4MNfoulk%2BJfrWHyZjzL9k3%2FEMDbnhHA0c3dg7eWhQtx8vedPyXj%2BKZ2B&X-Amz-Signature=b7b7aeedca35ec37dde42f2c8b23d0f615de644fc0a748058295f8b07230ae1d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
