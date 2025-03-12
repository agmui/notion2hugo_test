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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2GVZ4L%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQD1aXVe%2BPIzXSe8fPjfSyt7ocpjJVnwHm2yUwxwHtXXkQIgcs%2BjWoooIgrBKBDePWzj%2FObfdSCB5gN2zO0AOc3kcMAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BCFsM%2FszncDNMM8yrcAxsrR6X%2Fqddh1EFuGEDlPxme8bGj9fflaS7DcmS8jR3doXzFAYgOVNuO94FAfLrd4yTf%2F5FOVI6EylbXcSHzEKkMnmAG7lkThr0UjytwLvC2DS1aCmPCwtgQx55mlk5Dpd9fevtqtn7V9ASs6eqnE39IdWDv2mVnS8jrSKmFAe6%2B2GCFXS7NMd%2Bxpbqw6vADAYAkBv1cQIqjiN%2B2%2Bu%2FZfr%2FMt3eqjoVTsxfeeRuwkIxYlVRiXbuMbfTPTTxAyCbDvs10g4tnloJDHwavpQ8UbvJ8%2B9Od%2BUvLJKhsE30ycOnd%2B2U8%2BQiVXI3lTvYcHTNBCfZwpzBCrrEUirOiqE%2Fky74u%2B7A1P93xgmk2T9w6pXqQFk9I2SRvEptPfpz3UZiVsggykorznCoSnMX2pzxlr0yyJsBzyiFh92DWMuDBePfzNSHLtBM6CkIQAbdySn1HkbqRa%2FnzG6VdK3e%2BYlQxN97%2BlPw8cLhGBZDOjzjtBB3aolgFEhzA06UTHxDzY3XFIb2ydAX69impj2Hs1MtlvCDu7%2B5IIiAcER8bRj63ls9tEijRgD3QJ82ogBaKnWpfF8VcpZwOW2rCz1gKMKBhR08foKWVsvUtJdlz7KJ7P6ayS4WwweLHuIvl9lwVMJLdxb4GOqUBUxqONurqj%2FpRfFIckxCyMKqvvtpLn%2Fux7LxuwCbPqiuqG3hTr2N7jVBApwQI%2BPT7Ev82efusW7Mwv9%2F5mQLBEE4cq1CCvrg%2Fhyrsh%2BMsPRvEDXzFqDfm5iuLFf9POJM07MYCB6kXU7r5%2BITj4RX77uNpiLSoPw5C0%2F%2BmsY91cxO8yc3sy2GoljiiXp05Hmi814EYCndS7Ut5dNJer3NiqVdDhnWI&X-Amz-Signature=4c71aa617b0d3711e0978fdfe3d315eaa8b4485416e19ac712332021f3f1c469&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMYPI7D%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T121425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCT9lR2VZtdRT8OBH5zCZ%2BowhPMCaLJ4Sq3AJ%2Fa9uJyAwIhAK51uQ96amGzLkUA6iteYK5rBL6%2B2G%2B7OiFwPK4TTBpRKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiZXcdLjGOAr95o%2FIq3AP5mdLfMgUf8aeYSnqFo7jkFH8ztFNwfuHBYR8Ub1QcFxrNiNm08M58UugNlN7ZT%2Bl2cmv%2F7VhRxgBTQcXVT6cL1Fu5eDsfKdSynGQ4sIC8aEoGJA4HfsJ9DLfdokfZW%2BHLtBBBzesz%2BnnjPbgdzvKsA1hoXNeo6yysuUsVdSJCz%2FKuBHxdjZPlSjd1jf9R%2FqjNAZPsnDI%2FBARdO4YjxJXbKDmuHrqxAIrq3dHqKBT9pDfNwYZxye2vH5WyjcU4MV%2BfHEPwUgcLfbW5QC5MhQ5QW8030weHjEHaol3izUE%2FM97R%2BC%2Fq1YMI75vK9VmzcYvywMckA%2FEMpdnCF0AWON%2FHsD5tP0CEAwGYjjkHYIolapIqI3BQG4Vbfot2Ai4WAwNPxVtJa25xhsBuCNOhirvitDeKYLjwhlSRt3xOERoFBlKEes26QSuRox2BHp1IqFvWr3oUbfFyK54D3HTJVPUPfef%2FvbegmHzADoFZcWoO%2FlvcYyuJ5BFAftUll0Qq6k90Y%2B82D1VoRv27eHKpLuAVRXMKweGLvqTrrFwVgBPkbRcASEAKGPZijr72nhjJTFFMrPiA%2BQArQaMTaoJ8MmXSkO4ZUt7PObkZ10kHsGdoXeG5Gadfy4udSTSLzDCQ3cW%2BBjqkAd40buJS3iF2%2FaMZuVukKrnaNLxktJrvWxg4RRBKSifWQ6dWDjKudsdgdKb6XZgLVDbgL0XiYTY3%2FAly1qaIiB%2BxzQ%2FAaDgZSeNYjXzsJGFuoupm1ucTSGRrAypdz92n3sZTZxXT%2FCfKyXXuF%2FGPjLVjWn8FsqE4mODD1ZR%2BtEZMVDEkjFbJsBCWdB%2BT21%2BAR647dgCidCdhKyFVlKDV4kKquawQ&X-Amz-Signature=97ec8c5b961fbb7ef69ed4840c8e7b0a8d565570af1b000efa35c8c2ed11ccd5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
