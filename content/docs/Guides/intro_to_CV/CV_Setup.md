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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWHWYM4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIB9ryQo%2BrVYiFBZGWzrmr9yafngYiIBZGplSENmrMOIzAiEAyl%2FXQDW%2Fk3h%2BL26bRS1bsZSVjMmtLxrQ%2FUT3XJJYs1Aq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMAW1ve2potnCYIh9CrcAzvtmbmTXSH19L6kqT177lhUeZ%2BeFY727%2FH1117Em55svZu%2FGrdGOudGsVOpnu5p7q3DHqdqdefB%2F9ehUu%2FT0HARSYlgpA3hP5Xh71GsoG%2FPXmwuux1sUROq9%2FzmfFMHzo8g7crXvFZkem71oSxPIMcTKZQFv4tV7sg4G2egdv%2BfgPobtiPmFUaq3Rh9m6VwGosXf8SYepvE8kE4KuuvT%2FwLG6gj1NAqSn7YLgeizt%2F1wxHzvSuAtwokYAT7ViEpAFWsnhMIV9ZsC9yLDLE5R4ugla70baqav%2Fvt0XwLjIF1g5IN5%2BmDYfX0aoC%2FljlSmo%2BLxzptI2F2O39474YqwgFX32unmlzCXRiZn8zvJio%2BlPZd2eKFhOBhjM%2F8wmSU0wQ2SyPNOiBwyPMNzanruVUoH1VUDuE%2Fk%2Bmon5bWEaF5ZjSz44kIUAMoqP9oy5yhUR2aSTwuvE%2BrkgICDzQWJGZJd%2Fj1zZXnG69ZupdwPz3RFF56gY1QXUKj0VaaO8%2FV5C8JW43VqXjIUBuI1k00tQlWpP5M9PzxC86PnoCyYiZ1oqYKVKER7MRvXwVEUI1FFbPKGPyyaOpZrzDWHPMAjO7YWLDjzBx2LCA%2FV1OOA5DI6DtarizcJUhSXxJhMPbBtcIGOqUBlVN0KNqkoxIhmjTW8q2vhEZjcgzyinjHOw4WhXkTk5Yp6FrUqqlzVZJ64y0uluLE7ROn6Xq6eKgXDyoRa6LxkjE7hfN4iuzfQfU0WifLgjBMKqi2t9IXrcam2qf9Jv%2F0R7l7ug2AEuQxlmCs0uVwQN6uAizLP0%2BQMReWEn2wWBkanrl22%2BV9cbyPgPpK3w5%2FWwK5pFXYjACOkYy62%2BnbbRGkY0%2F2&X-Amz-Signature=778e481c0f358a5db05ffbfd9464dd2c3b8e1de5854d2a78d9c5955a49e95c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEF4NF5Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC1Rxe7AC5hCVcyBNRQ0Suq4Wiij6hy%2F5MLmM2bgDSFjgIhAJks7inhojPlwk2za5KTKWDP2Ok%2FbTCrnMD8PHACcg6wKv8DCC0QABoMNjM3NDIzMTgzODA1IgwdV%2B7T6q6zpQD5nIcq3ANZMxzd6Z7xG1Oy8ppYO3l74%2F3m%2FIb8VZh7L6QvOBjx8oYUrSN7X7ewdMGDUdNgekiC1WUQd8tTKayBpuzaFmKXCLH3DB8zWIHXSCVNzYUJYii8ibWt5YE5Q21sn4Q6X93nlvu62EffIWS6WgjoChFH3LpRBTzNJDSdldbLBM10dZ724Euj3tidElRIp3%2BzFaIuRcg4366TcoARKT9lTdBKv9zdcXuS%2FhtRQ0JmVJpEJKYC2AS%2BZl8%2F%2FmaIRparC%2BltYWjrHSNo2vrtxczpulwmVtQVTqEbyWtLmmW4zBiHTw%2Fphoz5oo6B5%2FdfyFAZhGuy670O0zW3aDb2qyzUEboIguVjqqQkylbuJADjdd9ALbyremeDb8v9PH5ki3OKJPDUO7NJFhCu8MOpR5t43yloWBXnZq3iR%2Bk6TAxr4xF9ngXEHWCVNuGMoaTxWiFKHyX8Nu06owF7CNaLO8n6CMuEajeL8v0UmXkcr9aGCUInY2tU%2BJWnEv%2FQCoB6UcrN2BGVZwZv6R3OT3zRhsSKLEPA68bNWkOIuqiVcMLdE98lzKWAl3rxkWeTHZCa%2BxbZksemJQyLKO%2Fb45%2FuIz%2FV8ECO8os8432meAVSVrSoS9F%2BCY4ZxONa9%2FSwoL5vuDCCwrXCBjqkAYCB5suEzQlcqSrWz1OsGpwyrQfJv4ciU%2FcnatAZh%2Fj2t62EZTn3l1Cvxmv7DIhe5LoxH0qHlcM67ZSDcTeh6wHvFaoStdDOLSM%2FCGZCC2gNhc%2FTo2M8bYohy59EqNLp3KzasBk4mf3hh%2Ft5ztu0v5CaT4EmTW%2FariKfTzQVAZqlX2xOZI53MPw1kOCYuqipWG4pEbCPSj5mZ7dwU%2FHBnUiyFd2Q&X-Amz-Signature=f7e4a58c80ae717e536ceb6c1dc9659623ec46ff052fc321c6c0b1c2a66de104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
