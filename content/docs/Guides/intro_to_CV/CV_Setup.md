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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XCETYI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDzhBvaXseFxWjy0F5LGKZSlME8%2FrCShGfycPW0ZV7aZwIhAJl9vmlOsjrXHATiQ0I7q1u69yB4S%2BGR7PVtTalJeEHtKv8DCD0QABoMNjM3NDIzMTgzODA1Igw%2FzenAOtGy%2FBbfJJIq3APPNw3igBVQ%2F8MOt9%2BAux88qYO%2BuHwAS3jDbcoddMfYYtbh1a4w1%2FA16VHKZXBJ1k43eV%2FJSCtbscEkdGZdq8V%2FPv0wh3htynbgIVXkcAgmOuz5hMN4sicIzBAMj79BDoI4PKd%2BKNoo%2BaZB6AA1pi%2BJ5tPKxJNd4%2FeSkk04W%2BKou7bqW5uNI13Xi%2F%2FFlOJkSkr%2BgP9AJSZ7F1bOVWIt8v9V89rel80dimnPNFJ%2FcaplfAteEErhWj09Zc6oUtgsY%2FULwmoxE01YHb5OpF6GZD3KJ%2FJ4mTzzFHZnKm%2FnJauEqOUr4nymZ9cckp%2Bb5WlmmyRdjJS1fWoAXKt6CKmcOMPL6cq6yrZzd6tXBJeDfUs%2Fs95npGkjzCN5rzaNr%2FvNkjvrSjSDknbv23JilY%2B3vbt5lj2smfl7etHO08z%2FJL7Ivu%2Bbs3eGViZt76ItgVn3qwYd%2BXJWJqVNrqrhl4DDLHPXr2XgPgER8hfVaMHi2Sa%2BAf0H%2BcFZ35TuxqnE3v98QAVNCdsVb7mPeV1E6dWnrBmtPNDhvB6iMDNjZi2KhzDLWnasPxxaTb%2F9Nnoq1%2By7Tr5D8Qnmg%2FvAmWoXWKaGf%2BGwrM%2BUETXxEGJ4mZpSOjYeS46a0j6KiAI3aFE4VDCdqtfDBjqkAX55Tya0eml2q0RLrpRxHQmazHX8%2BIIK72rGgIlUxiCsDNRWt5odt%2B6%2FS%2BDCIop%2F0RewnMe7BsSSlgjTbRIkE4L7MPcDI6N2uHutrq4SkzPVusEl9Ktfw%2Bk3hY05HMTWqCdq5%2F0Xn3s7prNCwoU0iBZyoK7BitVY3vIxZfmXaGshdtyCsiesb6yKxxBjNVi1wAFEs4UB%2FdzBszXM%2BmTZLcgyrurn&X-Amz-Signature=90832e70f338a0ea9455c40117f6f8e184219c549c63bfa48dd847b6e108a1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5OWKEQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHtLsRnj9bDugt95in2tp2j%2Fm2EUOPk2bmBWCy4A1mzFAiBM%2BsBx8zXQud69Vu0%2FoKz%2B%2FJLFNOhiLP6sM7Rum05lDyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMo5vJD2sEmMCBS6ndKtwDXwXQOF6hef6MyhnPXaxcIsxAU21AQsadmOo3zRmZC1Mas15XLG0TGc9BCsOuCHepm%2Fw61XpnPRS2FLmsrlBeLE7Cy5E88FQFYU%2FMu54HtYp6d8pM9Z0aE8HPLhtcnxsXRrEp270S5EY5EnIBOg7iCv1hq7bPvCCej2%2BUtzSgr7rCunJ61J3kxWwug9KoF2XCWhk3MUtOW2Gh94zom%2B8IV9Q%2FeIvDMSgajegWaN1b%2BpWMROlAEkABZW6bLO23%2B8w6AXyyEfHRts3q5NkOfJVHmcgJMe2gRbmN0Kpj3mqJjeBC2%2BJYVjHObFFBDBkY1sHQIKWt83NNk63kIyF4dX3mcXKlFq5zSIaT%2Bzgm9oFaso0iNn4g2eK6QUFV6JlAuG1n%2FjkhMAdWFoI8VCLixAa8q2TQHCqpV5UQmQejbqxD9cxPoJXuWg49%2Br0VIKyOnaa0BUo6PE2K8jD0oaiR%2BFCIdkjPgJsnUoqfDHNFn3Q6Y%2Bxnmw2lck7bD8ap1EpxFqg7OhKUsQAgljYhoiU6sPbMEqtkD%2BAhqkX87UCUgrhmg1OrQe2dGUeBsedghqBSWl%2FizO%2B9W2FTxxVdqy7cuBg8w4ZijXRY3bG9xYz229zqPhvunKxQY1l92dHaSZUwyqrXwwY6pgERxc3wiJsk6%2BO5dhyFHdaXTwPZxAhz%2FQ5fQ%2BmsdehYRmFWIUHwZEooIbFIuXS2rDhAxUWph9TTPMbAjkpTzJ5EBrwnLkGT%2BCL6vDcwRdXBqs%2FsOjuf7%2F5rHbRKVFXLXA4xvW88t%2FsTd%2B1%2B4oz9H2MGRiRNnmjndwxEjphvTjgHCCDJ6Kb9Bdu9t46Kg5HjlCni3OoXmoKZ%2FvWu%2Fh2Nxsxa0e1lBHdN&X-Amz-Signature=fd6cc618dae6e57ad6d8fafb2d5e8bdb2e7b87991c36be3d4eb88e062a78b527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
