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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5CUU5YY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEJ4JBR2%2FvL0sgMh%2BCWid%2FxnvqfTjxroI78digDEh37ZAiBqCCSDSISy3kNMx3PG9mji5sbb6FCuwOcrogKuhQuMHir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2FoQSxmykSF2CS%2B8NKtwDl4EQkZGoIn1%2B4jyNrd5yXRJSJMDrMi5wZw8d4%2FSODvwIt%2FNPbhWvxQamVJWo8JmtMuLRcT9cE4vPsmCKI5RiJvarkIV53Nxie2S9%2FaXA1%2FvsTMdO9WAntZ4QCpJMq6ZEuN0fu%2BmdUOPLyPqUwJpRUsFfKgQbQhji5N5W5J0iOUx76%2FYP2SYHd6psYPIVilG%2FbmDN%2BE94lIMSeZPAqFRE%2FNvsTrkdlmv5QYtqZAs7JBJOkRODIZtVJYH4eotY3oPTKzeafIXrzevmhuTdTpXJgZXfk1YPtRpF%2BK5bPeQf5NrI4FzM%2B%2FnnVHe0vx%2FKIXRIMmZIjcaMUQ7JxygF%2FGKsllKlsFgaLKU1RF0UAJqJoBU3wbX32VvxASjuFoWYPer%2FrhJXGxh%2FxOmf6Aj7TVbnDP0aWTu7DQmcZLFwbFOixLomZxRqI%2BSUN9qWXt%2FkkiXmRyN0lIpOCsWmQ%2B66VbBx95SRNxhLohSkTA9yDJo9uFAEJKyna4NuzP6hog%2Ftd5D%2BIp5RlZpP1HvSl3XIwONNtc475yTOK9M7knS3q7u4bCNcldqqO7WDukOa1EhtpylFResTEI2B7XGXxRpTbpLse6kP%2FeCAdd1ZZYg1U8%2FZHqj%2BR4qKZ2GywseU9NEwtrK8vQY6pgHTfeEdkknPpnih9KBfP1tSnlUGHsVWnVrO858lz3RlKjWZTX%2F9cb1TwDSz76c7Yo1M2Q47Hif%2Bs%2Fh8QgoJmAzn96QhhDAxoI2M%2FQVYyRhhGxHRp3YEjUBhBc%2BJeOABWpAJBm3OKvAivtCZx8QSujf%2FktnQvGc2MkoLcSuhLeMG0I5BA35r3t%2FA48BEFBz%2FgTlbcx9S13KE62IUnsOv2s2U2eHB7iKx&X-Amz-Signature=7de7141592827bcb57183f62c1f5d035931842abf90d6bd6dd1a01ad5268d3f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJRH72DG%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBh8uUeYGq%2Bs1qDCtMZIXprZQDVkOjj7mY6uwL%2B0j7dkAiEAvRnBGIRNuEjRpu4aukFdcLOlkD%2BgNXe0KlnAFLksxOYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEIuTF16NY7luOZ%2BsSrcA%2BsQ6cdJeIzh5Bd96EkTg1sY1rlN8z5mfNgfGtBJHvCSUu9CzrmDsLqVIzIMIciAmyYcKgLoM87fmb68JpMEeN3ccesZMS%2Bh8VEFP2CDsu9iAV5POV0s1rSILKp%2FJHIX1%2FIh6Q9JNNIpzveUOKP3pSpHVNS3SloFncwwoUbcX1bR73eXzfpwMkr%2BAGjFZLgxtQe08m4aBHy2YvGRfDI11vLKP29i1LEalvCJmA47Rx8p%2B0Uu0dtPYy0YDofqqFZd65EZCOMnM9B0t0WS4un8KVAkcNzCr8ZM7ghhUGS9w44pU24u53v9WEfqmaCU0DXhFEnwRf8U%2FiDHiTf8CGvDeulDYl%2FLSN9TslfVFL0i7qa9tpNyGgpK3EmskOtlb5eM6OtdXYbJjkNa1dKegN6a8%2FgW2rGCqL0Tte7%2F8FEecWudUfy2i%2FGG%2B8b5fsJSHYr6Ihm8PvufoS3MX5MXrLvGjNA6MFS%2F7p4EEZJxgqSZV0mDQyMS57MBUMzgOrj2HaLZuKoGB%2BG5X5%2Bp8lNhB%2BCS7%2B9y9qN6olTZIwSkyyV97syizSX%2F9F5ggGuxnT5Tl6P%2FTWQGc20PWtyoOtSIwj8Ki7AVjcqn%2Be7S085x6SYfTumLmzuDMrUpLD6yFLfYMNyxvL0GOqUBcyoKuCIGdeO%2BuzFAKgoBOG4bLtqNelMSGvrXDv5H9dkCM%2BcmHewrlr9IW6RGQOy2FstD9B1L%2B6lTG0GugOK8CpxUtRScfKmvlZ4KkWQnRYMz67j7aBy4SciRt7YCuFby14%2BmVIwxY2XrFw4fdKFYEdQy%2FhtRG5BSEixH4kU3q%2BgOe2ST%2BJRrtDNfapgSgC9LkUjqpWsjoUeei9ebyTRhRplpfs%2Be&X-Amz-Signature=961d7533aaa5cf83af9bebf53f8dab5c9640196c167d3fd4d18cc84272e06453&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
