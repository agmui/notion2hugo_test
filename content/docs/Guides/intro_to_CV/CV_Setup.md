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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQCRDANW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCID69G7v6YNSZrusJMbdZay1EOEsHcjXTQjghK62zSu0vAiAJMfVUu%2BABFi7QTAcNktftaSWVQCq7F6cEuTTHrWgdRSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMdhMu0cXTWRU%2BH511KtwDHL8xdL8GMqkxCyqmmKCPqb38H5064FUM8t9WZmEE4vdQ%2B%2B2gz3qOa3zL3xGAHzFlzcSwEYd8%2BNNZ%2F2MM2qgkpX59Ittephe81APdQ0c5tp7gmz9J2jUNvfnGD7a8aOrqZhnmcQ0pYqQ6%2Fc0GB%2Fd53HfAQfXnq%2FdNE5pcg1fgN8pRfnTqU6ooKcCj%2Fj5CxYcGu9ftkAyBF9vyUb52fc8ILhEef3VAQal22hR0oGBQZG8NsHR%2BSwrABKN7%2FC0tONeesvy2AR8wkYKhMvqBacsNaKUvRfc2U4By41W%2FGfAhUG3A6G4pdoDVHM%2BF416V1oqbcsdEGLoE%2Fym4nRwTw12X5pCXI7d1aUMK7ReSRBpp7wfdcVhr0L7i%2BG2FKzQUPdEkaQ8bydURRS6Z0kqP%2BO%2FaoE5%2BfElrPljUo4yK3eJBCALBp03%2FNAH9%2BF4B1j0D637VUWvKl8pvda3W9G55qMsIETbaohkj232N216MnkbSL%2F2kTbjbQ3YRbFJxT2XEsxsiGLauW6lS95GHp2XJ1NDJNYvGiQy68AQO7EIc763WBGKm35v54AhV%2BMuXQIKoGDJZW7uWzVIG%2BJhV3dVNOnISuIeJWXIuyrOdn6WoDdnP0VQOJ3ofOUqd0h5RHZkwnZHrwgY6pgE4wt%2FxlpOrXcFlKFv9Vj5f1Ov4To6YAZRtxyVA%2BKQtVL0KozUeCMjGSosOMYkf8gip0RWo05jGf3%2FegN1KsNKyxlfDRu8OKS%2FGS%2Bb3%2BtRGKqYpmYZbEmkPUWzKcmMTLjPHyu3ZZLrD1vJizacaULgECxFL%2FYop6AYT3k6AtHGT424cU%2FFU89a65bAiP9YSQ0K6PGQEB5CTVEqjsMU4Bp1%2Fvd%2BXqZ2B&X-Amz-Signature=3c2809f6e3fb84a356174c98b8e5e30f4b036cc28878266a0b6f4222eadbd92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UDXKVVH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCa5myxEffga9mQErcBd0gRXZ5mJw1ZFPOPBDnxkof7MAIhAJnXA3w36M1ST8y4hwn68S7p0KWzmQjqogbRDYvvqULnKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2Fs6wmto%2B4AUdXWAQq3APCvGHyUiPXHkypq5gkKikv4kPWjXXMlq%2BWdKAPkSVsFyHv7Xd2AJwxGAIBQDAKE9muun2ugFKvvr1g5GgzjTCD7PpF%2FRMKw8gleO2w472h8hcVeisvrIz9kgQ346I5yOQO0noCJHdkaRvmWsBL8O7hwljMFwW0XbNHKdEesK%2BxSleI6DepOsGtWrVGgocjv81zt5thEw0D2sPf7uIlb6BLA6ltjDbS5uw4vFG5eM53niPDxKSZlQe2miEOdcnXHG%2F3Z9CPbW1GIC1b32CobKOkT%2BHVMpQnD9hUG0jXX1VfyDY%2FxqZmaBhOPzSXvhOwe1z4d9nYD3iMnbTe3S6MoiL%2BVI1K2wWXv0h%2BS1oSWHKhPu%2BGxnc5OBCXM%2F%2FLxzq%2BUwfdP65XXgcT2Cikx3%2BcbIJ6dnuEyFpDlg%2F2%2BysQGN%2Bl2WASEdC9qLHZPE61df9L9lXX%2FG7pzuON%2Bq78wOeDZ3y4ng1Vg3l1p80%2FMVXrtz3HfR3BqY8S8RkySY8jTsap%2F4du3TCdQmqQsor3J8qhjxfFUw9PAgXpF0DlD6Pe8Xy9P6E1iuyS1gV1ozdoUsMhfxDMjyRc3Q3aJgiL4EFKnDAMUZ4pMzsVV9JPo5FIIGUsFijauq%2BzWCeHm9hV4DDZkOvCBjqkARpeDPKIegt5gZjl4UnRg%2BE%2Bvf8JPEBr4vytROQZfVd17UrYm4fkGXgTf7Ye7Zln5p6haA0bZknUDKMkItnhIRFMA6ukt4m%2BGtUtQUOwa4kDDCpUyjV1yF3MJT%2FnN4tI4bmyyp6SDzOufWq0ou4y4bN1%2FIgxPmGhQ3HeLHWt%2Bb3qS0EQESHVCerp5clBhZ7ml%2BV8gRe6X9q6oRLCul1avDiO5byj&X-Amz-Signature=5003b4a3d224cf50efb2a9d912194b422df1ddf26086b02ad96b38c822e5dff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
