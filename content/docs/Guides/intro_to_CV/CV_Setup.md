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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7HDIEC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkG64l7l3UXxlJLts9ZKNSuScLepMghpC2TX9kMF%2Fi%2BgIgeUz7bTtNsiFyL7HwNn1sTcM1yr%2F3mzwkECa6O24ZGT0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeT%2Fe1QafcLEqamSCrcA6fexZrUDvflOizwlgVhx0VxsSSKcoMdX7pS43HCxMn5o3IcSpVnLktxdroSa9Ab66a8X2J885ztaOO0rA4nzzd2Jc6ZrJMrJHy9ODxsB8YDx0h2u1mGhPyOU1dHBO6Sh8wkB2r4sJrPF7MGZ6l1KTUI2%2FUeNA2LR5N8WO%2BCAxSNBzHlzk2EwiJiwO075jt3yl0kl9Bp8KqMA6hmOFD8N1%2BUDfiKmQ0p1%2FUZdqpVSwkF5gBfGt3vAv1oWiAlBTkHQ%2BeSIqBQp6D%2BbnBIvYixZivUroGwWmGXo7zrEPQ0ZO0%2FETNLqhFtYfp28e98inrvzzlyyAFm%2F6G7nu9XGGrJql6Oq14HmvY7AKlAHXlRDTq9OtgH1MeJx8dibenhoWdetM%2F99jXTntVbkoKMcE9OQcMfWHbxxQ6xPAKLMlg6mNmOPONVcrYdhpkRtBvQieOgQGDYe2nvwy9T4pavgLIrFAtAkibNGj%2Be0Ekz%2BVaNxW3iSPH9l9BErtJJPVP3KXpZwW6HVOQBCzQ9aT%2ByZi4x51drdc98je5yNTfsNdJlVksHV8xYPmvEMN6oTY6ufNo3dXyIf0dYDGFI3tf4WloppitN6yc3wDodOuKhLzEjGytuUJhdaTzt0f%2FworrxMN23%2FbwGOqUBubp%2BfQZiSNSIkaAzZ%2BsSsr1%2BQLRG800cqlz3Oz1%2Bo5RbkfC8iAlzHpE9%2FO2Z7iQlUDffUSEE1HFkXnXf9h0oNLhdctnTws5fK0KP2bJpgir8MoYgLtp%2BO1nQXWglrs9GOka%2BU6C8Jdrp7%2F0mkBZ6vjDBUauacT2Rc0s5s4eRZpOGMzvFKRIus2Nyaxq72MPQ1uskAMNh43MXvewzlxUgaKAKrsS7&X-Amz-Signature=4c2a8b7c8cc28604edea31744c32908f6fdcdc35d712b9414f7b5630eb24d4b0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDFSHSYG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGebLVs0YcwP4jzgG%2B5oZ0KBJ8Fm6Fr%2BpauuSZyQtnIOAiAtzMOg2O2ySvsJbc9hrhM7q064E2swxdh7xoUn0bQ0RiqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKgnE%2FM5Q3V9g8JWKtwDUi6Mxx23wSRB2fZBzniUGL129ZFRvy36wYB8Tcfw0xwa581pFbItRWVtWmD4xYyu%2Fb8nlTFnnKqG6jD2s4Cqco%2B9I4dCosLLOkWSj927SDANYolgjcLHW1CPfLjqzjLcvrH4IxB%2BVjPoauEhvoXJrBdgnDEAfNvMHPFEdFwp9soh3qVZGJp6J9c8SwYuoa2Q%2BCZWvtUNC3kdHHZHutWvD4m3k38Vnuy0nUo3nxPXmut6Qnhnjsr0pyMNefvsXJN%2FRVJMn6Ze%2FU4NCyczowds5XcbfqodK3ezFDCtxW1yFWwAE1SG5w2hJZHtTMb2M731XwIgk39BlsHMKLV8BAz%2F5%2FyIDRb8nPYwHMdH9t8dbE2iTPWHjzMlTw%2BZnTty3vAiJCkH4QtOV4fKwPJpyviT%2FBwmU6M5ai7%2FEbpXvsw7v41UgNbsSOyvQjnlL0FstK2QNN64UqeKwSWYGbJka5ak7iNMXhQy7%2FSxf%2F0KXGhVlBpyVhI2NmU0RqqlQ8kK6JRIDUIU6n8CuvNxdgZtFlnjip5ApbEsSKYvwXPLH%2B9cdinOH41wwM6yr6zArfrUAXreIbInvaba3xNaGJMn%2FGxSZ2hSKdZnQVkhj4z1CBfYyDqPmV%2FEBIXwHUQ0Ui0w6L79vAY6pgHh0zrwz1TW7u9nNikVCQ%2Bqg3eMLuj44P5JbBV7M0KY4j1wNS%2Bt9%2FrZRQREbUqDmquDvHty35ZJpmZoA5usHAaJ4%2BQWBq8D2iKzdqH13sTK%2FYRMMHtktv2wM0Y2mfgJo%2B%2FdDQ36YE9%2FQbaVL6%2F7KNa7MN0Q5mTlj33yBTMse0m9j3KEP6iroK8hHR%2B9uoo%2BsRgYu4oxkR%2BzKrTRIfo24%2Fo0%2Fl%2BfWVhE&X-Amz-Signature=631cff40f7b49170f7fdf38114042196d0ca3438b7027a61d54e4506465ea3b0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
