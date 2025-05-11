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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDNBJ4OK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDOab2WOuERASbxWMQCLaqMPAk%2FuWI3od78Y7MbIesVDAIgTEu8OeORsAB8xTv6kDmJPNfPgBTliNLka9eKoO%2FfNgEqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg5CpZ8Nn%2BaL1bORircA%2B2HTtiDQkJTFZA4tNluobPIzoYDVJyipVQTeZKsJVHYQjfA%2FrGkqnfvJOFNSkHlN37cOEtMZwQg6Ft0MtjNZa2rHY3u82Xmj55zXYr7OtlCnZDu4n0Eru%2BNPqW27NeGa1LOHKJLV6MDH5iJ8DJSyBRjujOofdAwrwLTq%2Bt9LvXRNqYUitVObqh7i6sbGFMcaM0yCZnuji2sMFCoYIVJmlHgWgruxDzeteWzqagg59AD0k78s6W4%2BoPwC0yBoqae%2B0cGsKYOlfcDOgEU7x6JxguVhXEtCm3OlbcJ4Me9Mi2TpAh%2FMJkX6lJri5AAUAu5tJD5drJceblImZO0%2BGK%2FuArVhhMkELvGSvYBCY1FpAAHVcXYohzw37OZwbgxTYH3tBsrumHYvgxs9I7HnuQGvG59MNvb402C%2F09h8aRoei4Tp9yJb7a48AGu94whgvWMjZhxjFtS4he9%2BSHbz5rlmGgNMKGhUzvrfubftN33hxcqeoTPyOkCbx7hjfxzCiycb1YHlD%2F82Us02ZoPuZ%2Fn4k4lPf6nXaYwBZNPLTR6oRskQF6itEi6asqpJSOM70ihHTIeKD5xT57S09zUzOZDRKpKT9%2FXfBI%2B7BMInGF%2BcrsnsRK6473QgORlFZ%2FiMMDWgsEGOqUBDKd%2B7E1%2FoRoXVS8DAZxGUUT4uyKSZKKAfMhjD5a6elWyBXLL63fEuArZCiAWUDWDGhnOCRKyf05i8%2Bm0inZp0nDkbkLbDirXoJf8nj%2BiLnQdvx%2FMjwgDnjWWbU%2FY9ZuppF%2Fs8Nq8S6GyMF3kMUmmBYGm9WZKpp%2FCTSNpkuXLP4PyJytRs%2BD13fnzQ04M2XOT3GKw7PnyZbGM2zrv7TXEVmgoBmT%2B&X-Amz-Signature=e6fed2951a144c9895eafa3d8ed98dd8bd30c2bdcf582a2ae550f8bca7aa6e41&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4D34JK%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIBYeuZhufNEqArzKU60bsENrfdYS4ft5drdRWsjpaVkLAiEA1anKBsjsOC%2FH4kTDzPIY0blUzZsrvf4enoUZXj8azXoqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtSnkKtz5eMK9ahMircA%2BvlrS5epITz4PgYjJOjf6v0spJzAL6Nmq0Vd8WDnpQfDUxqmedAJrfWOmnw0o9WanCgu3vsNq32ZzZ8IxsMwHwxmwr4pDCoeJ0ZTsqAa%2Fb%2FcjbDaLz2Jh27OCrnjQshc0rQ%2F9EzT8uEq%2FouJZhlJfOWD4uQtw9eS6C9Idoea6oguzD%2FhtLztRj8FR1hxrhbrMwxfq%2F1ZJnduuhs2JlvOmhl2VreYo4%2F3u0%2FEeusQDUJHntlg5QVwn2UFOEw00jrKRNI4BZa%2F8HXxhPK%2FmUJf8dy6xGA%2FpoK9QrfBWIaVu108OCYl6XenQJ2BNQQ09zAMIheFhf5AstKRlxtjhlCCf81dgHFp4FmYTKa0VsRHFxFq2fNkgfLjA04AntFIrQcx9nrK0GOWIca2rjKtJP9wxtzT1Ytun4JGhVCNlwjg0ln1ldelDuQhAKRtPWTfN0ShlspV3%2ButBAjpZRemeNtHRg9SJYLaRnnaKnRxkEf%2FiEvcVqegjygqUfMvvo5j6W0cMxaR%2FE3jYXOulEBEKB%2B9EKzQOGJGh9eAv1UL1OLxUUNUYlCTk858mXv30lpnA3Qziyw69%2BaXJlnlKG6Qktrmngm9bOWxGsgpkVlIaJM9Jl7fb1qAem2lvusVpxEMNj%2FgsEGOqUBuL%2Br5kAUIaduaM3aB18VCjovnqQ04A1C%2BDYo11cS%2B87X6oh39JIE3qUpeToWA4tW2%2BvNzJIEssymPbReZ8v64gC%2FYNHJFYQ6Y4xFhCO71B3amNd%2FAQ0WbIJSlW5Pou6HwXKdoomQQuz0J69qnYKk9%2FhI8%2B1a6ox%2B0RFhouSnzIBp6jrq%2BRgGXoZ0qCiSXNpFHW%2F1ClQzJPEBY89fSmQXTk8TsTug&X-Amz-Signature=6f6b7c012c1a2b467abb700d989adfdcec0c9a8ce5e589933ec331828056d364&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
