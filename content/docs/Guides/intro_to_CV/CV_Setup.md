---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OQA5YPR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAYqWgoJ1vcf0LY78XxqU8aJneUu0LKWXFM3tkui1czSAiEA284XKtgGDGZeWTNmVqStUM3vXMzm0uAZj%2BuM3YJT8R4q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMIl%2FhF7RyAgNqIXjyrcAxECLwpPDyeDWoqU4SeFouPNC1JqjlfR5k0TUL8UxBozaTY4D9YGxRPDUrzStJWnw1U3xCEg9D0AgaqzRT%2FEgYnwr9mXbRRhfRRLPfJndfrFi21UahP9v6MzcN6CyY9rZ6ENeStpGxHVCE46eBjtQpBECGxq0%2BCI8wY9c2oVemDz%2F06Awz8CSX7p8D%2Fwq6cY%2Fb%2FSWBPf36nNPAtNdAr%2BBHiE1FgyNMc7Cig7750h4AsTdAkM5f%2Ff786euHd%2FTPpF1jQckxl2iq3KUTSizqv5PB6JUAvYa9ElOn%2BfoBn3RTPo2J%2BgZBskzD9puRtawl9v5fDO2JsHklf6hp5uXBv%2FQfFG0CAQ5przFX%2FFzFxh3bHEMNrtpx0jvQ%2B4Gv7FMjrS%2FcBNaL7KBQQOJhy35WfwxzUYaSGAR6tf6%2F4TLKu6ujzLT5GhuT8DikkY55kwhEDAhBlAWGM7%2BQzy31eJL4QeJfcdXjWrJ7rD%2BGcpxgV7%2BBgjfLNoN2l%2Bxn8dycq2pdn6ER0VihIslplCEykcVh2aMmZFBMBLOLK67BkECAnqY%2BOCnKCesKwIj5%2B2V%2B4y52RL68j9KWsYRF7ljccGzCS6TUPVsPZR0xx70wubvo%2B3buvufc1JwiuRkQSGZI7XMIPY%2FsQGOqUBMRsChIUfotMMBozsayo5KMmi9M4Goxi3raXgiQokrAxgq7nFTHt13m8gQ3MS1OVpzOUwHcp%2Bxp8qUY7E9iCNUbaS7IsQfOoWtDQhcUA7pzVDkYo21WytvqJoMd%2Fz9jJKWQxdDrrUF1ZPS%2Fhy6d138F86PaAlLZ9YptyAjNdumFllDv3ysu0NTIhEenxxE9baOmzgwx5%2FfUM9RgCNlsmHzGkVYH0r&X-Amz-Signature=3c0d718d5efddf7c0afc78ba1961b4e532a4cc0d246ecd0395735cb863f99066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHLQRR5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIFp0QTzn7ZA1GFQgJWRcUkVF0TqYtjRSujLJCDhX7refAiEA9XbxvWLAOa%2BDv%2FnkoG5AMhg1OtL7gkZoLw4KP1XhRrEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDBDkouwNGJkjDSJx5yrcA49h2dKyMO8%2FMt4kKrPusrzLwqLAIkxe9%2FVNiBNbsqY%2B5Gxdh3%2BWidUuWM%2B%2BFirjRorXL8uX%2BCN9M6Mzupjp6s9GhcdXFkfDiZRWXqETTivh87fIVteEKAxUWAeYncV7RIEOl9pv1L%2Bmwmvu%2BHsFZUg%2B4qDvHKAKOk8gBWkcucVDMMNgiTgA%2BNT5AfMj0B8SzU%2B%2Fhn9CYhUlKZnjyGpssOKmqnLtKZOSM9rwDpEz42x4GrmbsS31sBlsKSFsGgHH66XqXn%2FqCP8%2F%2FhJWtVr3YdAzaEcsKMTT5BY7cEtffhvQP%2Fz6iCoSjnzeGXVSd1uQBR7amZP6gATtFxHBH4SeN%2FIJhYlSP6%2BugN%2Br8tFeGm%2B5KTkah9kMWPlrPCMZbaK5Ka7SXcqU2EyLVAkcicN3CcWfPKp0QHyHUqqDBfzHeCkuIEPZ%2Bj4ZuC3KGqMH3C0m6dQvagsimpFr0%2B9IOt%2FLtmuZFYU0dRuJtoXwH4%2B4nMA2VoW9Oa0IMcZAh2w7W6jixQKMAxF06D14YjQ1Bxrig25wkamsdPqgj1zZsKlXvt7Bdz6cloL37t5rRH%2BtUgZL6lRBQOcFeWvnxVxGYYrwuYTJiY2%2Ba8JuSPT1Y%2B%2BonDajEp6K0pawhPi1jIAYMObY%2FsQGOqUBZEEHpIziG%2F1F33nXf1dEZ8SBUkvzguZkvox3OhizRuae8PGcyTXLC4w30FcqwiF%2BU8cizdIDH0mDaPi29oTnRWcTTk4%2Fq5WkjawrShbKjqUEEZ2iTaMMPMOKnWhQdD50wRWeqTMmmrUr533eXFsvtWCRxbLwrwri6VSqnz0CdGDoVi4BRpbwbj%2B8Utb317Z%2Bwqs04z0XtW%2BU7Ak7yFA77CEQV%2FGb&X-Amz-Signature=2eeecfa2ef86e6cd7e6833eb695ef57576055c5daf837abc7b43e4eb1f384c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
