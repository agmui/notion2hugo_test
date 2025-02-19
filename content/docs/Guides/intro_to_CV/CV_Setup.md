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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLEJUMYA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDiAlc5Jv3Bw2t8YnmXhtGsVDgFiDUmiNqMhfSTamafwAiBIpqXJDcXTMUYNJMIvIUJyM0FT8KUJhCPYBW1AyafsSSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3%2BdVtvwB5C4dPdEPKtwDFgup%2BYe0Jmg1QhVnhDOE36jVEHtLUacDutG%2Bnc3VGCwrmZrX8LjAQvYrt1l09%2B7GKJH0nMUs5m1HZEJKjBNpq1zVYb0CmRdE3LDGT8vzX4A3WEkY2x0N8U4Jj0xPV4LTSJ1SUkdYqwnEPPwO6ZdEPfbGS7saJ%2BvC8JvTfO3X3CM57f%2FxbI7vCXp83IP25swqkGBgieutA%2BD1mwKxI%2F8jQdJ0nbhHQsDQ5TLdsVvSKUU5CGkOaCQ4nml%2FqROlCuYHwYysKn%2FEhuRlzaT%2BbR2UQvq8vuSZEWjCdQf6KgIRdEF3iYx5vqLdl4ayeq6mW%2Be1I2%2BEVZERLAgsxsnThxfJyUEL%2BCNLDA%2Bww0UPD8BI%2FlNfBmzWgQeYE5OcnWruhP2iGZ16pk2jEIYbg1dM7Ays4xYHTDLB4tQxXRB7SDZjhAEEksAvtR1MI%2Fcaox3IqSVtjB3q%2BThEcGLaraN4zcO4oXM1AOfBIVlt8smYVNVAKfBgZx2YM753d%2BwVcJnnyrmCLeQLn0wFe%2BZmpFlwd6iqEPjZjBoEQHQCJrSWJ4eAhHGc%2F7%2Fs28T7IIfkeKXL2Iq%2FBrPTulGbfXt9Cw8H6Zm9pnOvR12XEYNs1osj5lJT4sJZOQLq6kyijIkLyHcw1cTVvQY6pgFDS%2FXjeJzpRzB8GhD2mwSfi8%2F7ZNmUPTGIblFhFC1T2EBTcTFZ0GAgjhB3dPby85SiJm3wJb1A59yQ2zXdfigo2ltWMNJZwUUH%2FWZkUGM9xcf4V0jYb5h0azhPnzBLqr3K4p51LMvF%2BpNyZBP70CTE8l6Ad377PLvQse37o3icTjtEbbci5sHDwEkZTEZ%2FnS4jpxl9gT2QgGQQK97k59WuEAi%2BpdpU&X-Amz-Signature=ff0958d978db97d0fbec681678005b29e7bb5398118cf9494787f8ce30dd98ba&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEQL4QZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDA8DEWMCX%2BgBEN6%2Bdcl0ePQVSi2t9WPsNGxRPuSxYZYAIhAP4Oxctper2UtNAfNOuwxjI17i0%2FdIUdopnSanA0MgoTKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAInAw0fBdcoYVKRYq3AMSjENlddCvaWVfvHs8Np%2Fra4h%2Bb41blQl0%2F%2FK4zNe%2Flx2y%2BeDV2DmR7WxZSDdbB%2F0egw%2FXhVmBK7t613JWEYE%2FErxaDhODHv75Z8bUNN25McwePyIBL2x19RmEPbaTxsiICxY1bKxyaJ7Sk8%2Bd8X3K9%2FxRIY8LF2N0Qf5Id33HBEjiFQwaSv4DwQAzHoR62oYWUwtbpPj5HZTq02NqSc45cfnwOJWa0VvOTftwFi7RcDg4cXqfJi%2BLQNN2nBTRzsi08Cx29HCpxCxBKZikEuYU6ii9zEg%2F%2BmufIuOxkTVxi8ClsmP2q6ytPJNxkf5hwzIlMfsxGVRB83g5GZWDiV%2B0G26a8xL6XThyWyR6C%2BvL2nJXZQlztxZUMPnDpUdxcYGvzWwBxnl7PI9nINJOXZQNwYpeaiLgplutgwAP2ATTt5fBXqnZpoXSR6jcbXusEfV7ytKGUFkWQ7X8SZaSq78Km%2B%2Fs2IhyEvcPrdit7JJcai3NIe6FZ86I0MLpVWPxPQRx%2BNWXeKeH6%2B56tR%2B38rLgbXAoHaywkVOHWQIJTYJwNrba7Eq5gXbKlbKpaEP0zuj8%2F9AlonqmUT6Ak%2FaTLhnwQt4A7Fp9Rms3jzsYtYcvPgNuKgVazUgd435DaDCwxdW9BjqkAaQAKzFxVvHTj815NIDp9GWc1k9SJjIyx6xWUdHqPlT9JjlMcyJAhTkT523U%2BBnAWMzdnCCU0r%2BmcTes%2B9uyrvHLHcvmC9%2F%2B%2B91Kw5iWSzLWjHQNUVctxZtVROgokMlbPkvI1rm07lNpb287leo1GEmAD5WhlP1i3BnJyxPyvdmC5zBGUBiYq3A13qpNtqgmYEmD%2B4jYY3NHgCA85bLp9awJNuUy&X-Amz-Signature=55337ca4f97ec9d60323611dd1531d6e72bc804db0c3f8ac48e94701bcee3365&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
