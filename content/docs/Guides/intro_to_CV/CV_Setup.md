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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR27NZ37%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSQzImwvdsG0qgzOXlJ%2B8uJyMekW2Yxhhe%2FXM44NO8EAIgEr4YEAvHMhahbsKSBUdDNnu25ih77s4M02OZDm9H8hgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKz1VmW6Gsm7co2VvCrcA%2BRupMfPQLVvfLa25HxeVFM3MTGWkwuMzrZSeefhYPjfn%2F8B4Jkuc5EZtO%2BLt2V773gyTO9Un4f7i4Mrd7dFRbw1ofJzK8F8xc2qIr0z%2BwjyJRLB9YOrBfw6D0uhyn6tPg2YNh2DyuDWgh7BYVOfqMoYOM1M5wWO93MdfS%2By%2BYaVRjtc66pcsmAxaQgBx3OMoueijnlfFD7Ck9MtWqnshz8uAB0sv6JZQUOid5gJePMcDclekMo6gz1QRAeFc%2F0N3Pupabakf74RH8z8KN0seNixXTQzxt0TkEZRCcgBYDQfmZAkCaN7q%2FDmKVgEiI%2F5mcIts0fRCH0H8PmEk5uk5CFKqYHWnSSeiP12EQQQ8dXKvnb5u5Efu2oontOTVtMhG0JNcLF8HJBZHPWXOYkO8t2Y1esdo8yCIOasbVfJg%2B2kQ5WSCmTDVblQVssqvCr54cPdAKAcnvBNysrxZECj2VMBMcTmdBJ3pHux0NKekRb8HuVJV9MyetlfFjGVZ0AcnHv6E5s4LJGkmjZiijNhIWTxHRrsKq8LvqeW0TPsdFie8Y88X%2Fa1fOjqcvIbKziKtP92p0A9vxqke9ck27w8VEriAZ%2FEaNDMJquOJfdsjlDe6%2FbZMtEWVDtkwJxeMLiW8cMGOqUBOLNNfDGxIC8P1ov64l2hJzaa0YNMa6jUaQ0HZ1krJRERAY6eagUf9shezWoMF027jMcgYBomfA%2FjPlW5f5F2YRYHodoX%2BbHysXTJpznwYzKc2DR1qVmJqW35i%2Fxmm9kgZXLbtxwKRGEwNJup%2FkDWU5ltBt7U7JiW3karnfCmvfSZkGZ7DL1l3VhNW2Q4fzPuATO5dKD5ZxUStcaSnt1cFZaQXm6x&X-Amz-Signature=d3fe1959eae4a0aa0ad16f91fc91d48ee0db6c795523a69aa56625168aa09378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q363I4AM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqysJ9KgNVsuAk6Z7G5haVPi%2FUaGv2RNAYH8B04ee6%2FgIhAIzaFRgvQovamGe6kc6uy1dqdcjpIJiGKD%2Br9qVezp2WKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc2b25BF2pLIcCev0q3AMoquFso%2BhPlUYZwkNPCHTDZmwQj%2FtFd9HJwfC4idU3Mdnh0eydN83BlqGcUwgCp6Tz8WjtcQqoxKujmQEKpyLjdseBvz6rQlLvs5gnQhHExGTIaQwYl0CtIXkkzHrihQUQGvGShL5R9NYROFnqXcusNU8793g0NPICjadZdN987ap%2BgVeVm1CcNyH1YUMO8S9FfIyudkTsZjB8G17ZlAVtZg4OEltALTKKgH0vwMD1apDxHtlXRx%2BYZSPmfgc%2BRdiSx6nBJuIqtl99sgjmcf1ZcDr0KDcX5aA7hrJzlbGIYtgtKNHs%2FQGctpJq3Itpmxk4Nsy73WwhoAzopiC2nBEN%2FZhOQl40tdWclKuolIiwuJCFcatN5TX104ZY5bbvaoRHqa6i1zBsEz1G4WK7%2FmXQW3UgIajgiCL7RerxLaiGgvNIqXBaKfOEpCwrj4VpvKDPVIlbuavVVNBAcnNbjaIYN6RbHSTv2RixMWoxEND9K1xDMjqg7daREKIZpuUMI1QCa%2FXEk2lK03YBQjfIsOmH9vrHyMsbSQzFQdM22FycRPPWiVLluQ47elqxKXao78zEw3rBgSfSzve%2FHqegyzQcwA%2FWBEcUOjaGt72hgUjBh6OxX9rfmb61OHvjvzDQl%2FHDBjqkAZSwoVpygE23SEaohyQY8wFHzPanvbY9EgwASa3UfSR5NY0EagF9CNF%2B2ncBqizAu023HEqW1dJWuN5mG43Pi47QATD%2BhudTXbNlPv0UaejrKISLkkv2H0FEPna%2FspbcmHUMTvU8vm5uy8zZ9DXM1g60zPPQs8uNFYKC6dZYPoYlZS80stQcigpaqNhFq2y9fICDB7%2FqBd5tffbT%2FuyiDSsEvXRQ&X-Amz-Signature=2c94d45f292c3c18500ca8bbb0a6799cd2eaa1f8a6ebfc162a1ec303e41dbe62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
