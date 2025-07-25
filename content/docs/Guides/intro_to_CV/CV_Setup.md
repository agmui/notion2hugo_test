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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAL3JF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJFMEMCIDOz6sngjM3v0NNOqJjV0dK%2FstAuPnORPzNp6VewQ%2FyjAh9aD6EBmJos0cH3gWGIAgEkA4T%2BCFelysIzLwq9Q0fAKv8DCEIQABoMNjM3NDIzMTgzODA1IgwE%2Fy8KbGp5WhtLYCUq3AP7Nng05ykUdu3h%2FZ45pFJdQOS2sRnqbbl6534QcSjtNpfnh%2FhuDdT8eHzTUcqqGf8G03q1mHc0NGahjxZ1ye91AwhWTfZgARRjmsQCRi9PzdKPdHkJF2ABlQE1aMks%2BI1g1nnKqG%2B%2BARalW85TM8XX52ZR6Ycgt8WDcUv5Vsu7AotyeLE9YRazxFRMSmaDtml5R0aU2q8JMQsfFbO9k%2BTayGloGkqIVGxNpKzgzeOPi%2FRJq4%2Bfkj9z2jv4s1ZALaPfTo%2B7FgS%2BC82A2wpo%2BKKSFfyuEx%2BFAjf7R9wKx4hDTjR4tquX%2FT1uA5kghMEKQftGhfMRe4TI8yBEmtIcc%2Fn7ZIwxaO7opE0RpeAUCGj%2Bq%2BBzcPwkglXd22IIOGTHJGMKUXoNdg7%2BdwjSGriti4HbMjcdnt8NXwQOGb9hH6Jrz29WAp5t4jSVu9arnGCtJ%2BjNXgK4zNGdGlVg9c7aAOcCBAlaSbs07hqM3g2TONF9JcoaI25v2TkgUvPdunnxchakhRbR9dEVS%2F%2BLyJyyf3MoMptyhAs71SAuoklZMM55hu1MkRrPYvvhsm2rwSc322i%2FyIcEJEFCHh55Zdm473hDcqScVrpn%2FN%2B4JXnK8D4sUX2whZPg5QcH%2B2tJ9DCXjY3EBjqnASzRmOm7dkmNXDkkn4YSnF4ZlD6jwoeoY9FdvYw3yCfvbNDpmvfgKhTeTplW3HPHFuqWLgSXwtHH0pwn4eEsKRXQj89OPQEB0PHfGxlCa46VhC3YOEHqJ04mNgeBfYCe7lQVYkMSy5uP9s0ZWmc1jdWcN1f7QEIDzEbwFoZik2OqGI%2F5t5EMogDUmolnpxPT%2B43eID1%2BweNbkWKJp%2Fmash9rIBdHdc2z&X-Amz-Signature=9c43d9dcbdb8d1e3bf7faf4d945ad758a1b706f0a5e627962f59060b3a88982b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N3CLNEP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGjgSQrK2m%2FQ5rrhx1kRh6cu5xIolDDYL2nZRxMEqNOWAiBmdMrN36J0yaK2ndP%2BOSl0Ak9Sd7Q4ApNNw%2BTlWYx8rir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMBQ0e2WNqqIAONFOaKtwDvfzOy4rX2eiq80NxFGWtlsOtr8H710Mowz4Rzgy5pLN4UwY5OGqQ%2FeY5KVqwrufma2YhaRL%2BLfvXy%2FYQVFILH%2BYJCIDuxVyYehSHaa0GF%2BcJCWiscxlJQtSSxc7PqAhnOifgmroQGO%2FFmgbbDGSCaRX6rRdY02zrfutZuUkL658gbH5rD07eTBxOjoP4tjXQJfAx7UZzXA7BhEUHBDYfYxcuIBXlu1j%2Buk6UDbrn6ZCafOeVelZ5ik7CgfhoVzDBBxFkEjRkU127lpAGUeokYIs9BiGN4lkdvIZyKgtUnsZc8Fo1cg259FwoPnq6UJMTSwBGxi7j3DcYwc0XeK8bNAXX%2F%2FYvC8mckp7txezhujdRT7SlZrszxFeNAbt5KFw34apPABXgig3aeXxqf6JUS%2B66fD1IgmMwBn%2B9w5vm4f8vcHwXHA8OvnIcmj7NH8G5VNtRJ%2F%2BjKYG6j2LGIR2UwwXuUJAm6T0pXIh1%2F3s4Pa%2FTTPQ55dsSbgLVyj4fA%2Bl9sp3AUti1QPDQU1%2F9HOER46S6bYYABUCPVcvk0jzSrK0dZq%2Fv5ezri7REjjwJh4wp3tjgefAU5hXlZh%2FQQItVatcp5TQKlg7LewCahvPCy2IaAlfBcQFp3vB%2BliQwhI2NxAY6pgFs%2FNfqwxBLDpR7cS8oCvYdNluG0QKsxYc6dCTSfVNfTOB1PP29cLbCZBF48FpoRAP907b9zrnqBbiv%2BwnlHcs7GzUywlDT7%2BMy85fMcA0L26kTz5trE31Hc0aVUxweo%2BWDjkdL0hTLnax9gFaF8sb1%2B4%2FIZYwa%2F91b89D4RjMe%2Fg%2Bnq9yQOL7gPWLs2OavQG3StAIq5pte62rIETz7n%2B4vMACophRJ&X-Amz-Signature=6345841d0d566ae0691ff49e35a2cabf59c5ac48e9f3cd6cc7979f2aa6146c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
