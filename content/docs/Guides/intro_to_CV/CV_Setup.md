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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE226YGZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC21t4oEkkrPBpqqxGeS9i1HpjrRcfxT3t0yNR2v7jgXgIhAKUuuXBYJDC9%2BMwDsbBgKCNXRXG4RgEQT2BWdviMoGWPKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0aIMPXvRynFyit%2Boq3AMbi7TDgB68SzOD%2FZUwUXcb0oCNGqEkHwe7jzMm7L1vWymwWORkPTHt2CC3zmxB%2BJCCipI3ddTKAgmhbXDODuz4xJG%2Fdl7QKUZlo36eA%2FWiy%2F6CVXh24POWi39mW387OwYynyFRetSy5vmKUcoaeOLifrKqNM3soihY9rV57dC%2Bcdks62G8Rlb9Kh2IqNGpyXxzFcTSEQbXrrPDPmbsWIZW8TezIFQ88TvDVchGsf4rIUUAegox5yns%2BglX3VZ6iAHC8cZqy8ORl8ltaORvbTyi9hhltGccbGmaeMPzgKOafHX%2FdZv2z%2FaiXGF6mK2WDLWJq2B5WDyNBTI%2BMvA98OoVCcGYJhrHI2dI7INDjhUa7LS%2BaUeS6cq9r%2Bs4ZiBfMxYr2X%2F%2FztZ%2FaIEMtX9Fqj72SISQEk4FePwXGeV5aUUgaVUwHI1eRTDCb9JxmOdr2jp5gjU8kTcQWP47QAMh%2FPpDQSM5h%2BmnVZ0jA8cCuu0n4IHu055INqwBvJaGHcFtVDN7K7%2BSiS2wIQ5Wmv0hMsH%2FiT4D94n5x%2BizH1fkhKBVQe6%2B5WVwqEb%2F64z3zT2lkRYULBXyxu9Iin%2BAar40xdYCnWaHLL1uT0E4mOXAlE6MkrnWBgmbGKaIh3zNrTD%2Bje2%2FBjqkAdnDOyX1O3ZUsHtrDoaCmZJT0lKz9V3ipPQA5a5NMGqD%2FAji%2Fr%2FkeVo%2F8lz9osKe92D5BU8Q1vbrx5lLmXHMQyP3OTlUuwh0QMyOCLxYmr5h1Wchnms0jJLBQ8Dp9EL5BBsmSG6tpVaEQQM%2BAaYV5HOKV3o9qgU3YE0kqqlzBB8Owgz87OjGioT7bkPSaXlqwPcezCoQVsgwlVrUxx9S%2B18c2aEF&X-Amz-Signature=c1507f07a20c914e1a7afaf14c605e85315ef51285d42bfac88b2984ee2c328d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ZCLHQC%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCID7DmQCYtWSNPTKiyki0fUKxcjT9dpxTmUB%2F4oJgOfVeAiB%2F%2BRZwbQ2K0cBPNxTUHlJ1rz32%2FwQIryPfGrpvP0GrKiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoJSOKH2lwEui84LKKtwDleOSwI6nUHp9ERE2M%2FbzCX073zTzSGqUcxp2C5eGzYNamjKm%2F5OcSvLEq1Hetzp2VcQYqxGe8BiDPr5lnYYyWoYYuOg3QWuKu8yiBxB6s2f4f%2FmysvWm2BwVPFjqP6Zt5i%2FM32pVAt%2BDv4s8GZHovgRVh923CwT2ovT%2BEdKQ1FNe3ADIISKZjKZPCacdyHKMLXbED02OCz%2FAipH8AfqfmkfhJ0AC3SruY2p3Xr5%2BOVdwozrBcFW%2FsfbjtMaPjl5DA3nSEN%2BJcakYuTO%2BjXDZEnGixPXK%2Fl3J0jcMMxo%2F5CfYRANXgg%2Bu96pJC7cKctkhgbRA36fL%2BPBKRiBrrnChVAt3qAHuG4tAX67rB8PJxw81TJLhFx97ZUN52nq93Xkic8HFEmHICb1SjD59sVHkJDdFC2xCP4jowEUBHXcO0qwJlnwdbuYgBg6tOSD9R7PK73enxxqmC0o0kkmpY8048l8LfRKmWyzsdCbXI8VRMqBrPla3y7kn2vne6lKG6E0fbhBVHCZcODYBMAp8kwzS8wrO1oOIBGFku7hYJ%2BxdPTNbTjerucZ4MMPGFKrHPxtt4mK9jw50FXCLupansmoqkOml3QPjgo2JFxL9BccM%2BF%2B37NCcCi7KMDbfn5UwwY7tvwY6pgEtK9PIlHbgrUltHrxpR6OnibUBq69mdbPhJ7T5DNwc9zJ%2B3%2BypkeYC91hjpdUNaIYIdxM2kgP7N40XZyyTgtJcSA5qBI3cib6hPQVZJ2dw7POmhUqXJU2iAQ6onZNGPS9YWNQFxATBq%2BU0M9eW3b7iKbNQ%2B5IpvfEXO%2BYCTqfTBqWwhAqqHoH829fTqBAOTefl8UhqeTO%2Br3OyKMN9OQwMHcykph2L&X-Amz-Signature=168a8832ca45d387889460a1cd78a6a80a66999393626c27afed9d5c9ce19502&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
