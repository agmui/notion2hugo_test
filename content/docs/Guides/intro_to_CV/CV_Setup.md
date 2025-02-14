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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T7VEO6Q%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGKu6L%2FvuB4eM4gdAXrC%2BJYljZ0h8yjPzai%2BFbsaljxxAiEA5ZA%2B27kocAvmRJFJXOq3U2PE5J7mDAC3nvIqTGQBGEMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMpTnBdiXmD568X%2BcyrcA%2BXkM4jlWf%2FY6RdSacHKKhS8YooEY9LoPhCI%2BuTXmum8HtnkfaNc9rc8EA0vz3V1owDJva4ubQeQknAEld53mgt0wEjwBveDExDmWbZSWYKDuDoI8idM4IpxdpS56Sn5OxHZIDdL%2Frzc%2BD61lOSZVBwoLAapAMfhmnotp%2Fj0yJ8gYtKbgi0gYEEVPCdq%2B2LUeETid6Rw9BzQ%2FnBIzImxiN8gbDYlDDaTiSiiBthL7Ck62X%2FHcVGGllnqGvjun3RnxK3mEb4wK2ClKyH6koeWxGaOJ%2BxIXRjGHl7hTHpKFnmMeDJ72YC9oOYF2RUO34xEWicbDYWNgrbhW0qolU67b7IuACuY2U6ghNWgUPzevn1bDcWI13P7OcMUtm37IhXVr4gUlqyIQblkfzaUqi7Mk1vYpbPWLB9QZbxtg6JXjaXKcoi5R04To8gsi0MmKatlsMoXvSVTepEvMGgSNHLeSGGsDQIptbeNsdjA4UZcRpO6s5PC5MjrwJufP0I1i2RlBNl1My%2B5lal6UCOtIiE4vAucFwFOPgu3gw2w%2BzSmAipgsqQOy3m%2FP5koQyfkMdHoi%2FQhZ37t14eiwK0rCjfwuiiTowRPoVWNByV27yTvESEr6Yo9bQMJbtHOV%2BMgMM7qvL0GOqUBXm0r6s0injl98pUQ4L%2FTTOy0oB3h%2BLbL4bujh%2B0%2BC%2BxbPuWOB%2F5WY0SjZDQyuQTH1B3QoMYv9DbiEEVvD8J4sKc5hoEeiDlOuL0PPkPJl7AULVcYIiWA%2BAkUFKSYxFtLZCovlcyzgKqaowFTBVPDbR4Ma43GLEao1ZsNet4dx85C5ssUDKqqe1rqZswT5f00%2Bv%2BzUgEM8NyaO8QlPRqa%2BMcmf3jM&X-Amz-Signature=6072c8fbea0341406b60d223c81f5cae3373b23f0e7cf4d474f09f296bc6ab0a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7FLGVB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFLBiw58pl2lTlDhb6x1cSlcSTFnzn6xVA5zt6yEnFlmAiEAypKnHiybj0E3WuuwNfTOphZdLx%2FNqebOmtNlt7r3ih0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDA12jVhHs6q%2B703IQircA1zM9MwNRv7xs32On0vYai%2B8H4UHe9IgZVYhGihWC8gd8eia%2FlG9i1fPcKfjU44vFUJ9nH%2BOb%2Fo2xn8xPXnIWwDFZBYulFr74tn%2B79j%2BGDumau7%2BKhtD%2FdabZJgbLqQLNF%2BsYqTj%2FyHrn6edZ0jnh8VsS40M86kLOef5jYsajN1UEHzU6yVMCl6SVCi0%2FUST0Vkap5S88JHEF%2BiVxtk2eRZPfgFjnpp0PnyKoXHYKQRLtaFNG0aWbEPRp1C54NscxqZYZv83MG3cFrAUwCCRbCsK5tFgnKQb25Y%2FrKFNdWVfV%2BqeWMbCh%2BQfDGtZ%2F5wPdMIOC7tyW%2Fp%2Fcq6DzJV%2FQ2Q99jn%2FUkVuOE58hKbkVszWqb381naC9ERG3SD7sRTMvndSgTIsWOO0cGQaloBFe%2BMgDv53HSP2EiTY42csVwPNEgaeg9f9g0dPa5zkEe2%2FrPUXLgQZ2zoRaXpllxikBtrqwE16zh3Qb5V4ZD%2BMrpYZU0qHHRKWQ2PFbV3QCcGgr31%2FfXOmnAbp7dLT2R%2F4fHtyFVU%2BqCZacJBM827CHDC0pPqZ8cn1onbDfgBRRTWT40vQiK%2F0OFp9W7YGD%2FCDopcRWKEZQZFZaQUfHvBx9Tu0BXbxY3l2iII3r4qpMOfqvL0GOqUBjd06wBLE8W%2BIhjt%2FATk15g3lKb2CJVJbMB%2BvY6M2sr7OrNPFElymz24qBkLUmBFz7cL9Zk3Kr5QZ50SODFDeiOYnZ5bcw7PZfr0dGIJTsQrnWXMy3%2FxDIJrY4e8a99FKueVw5tmhmbVYCpoky9vT40HSCS5L6IbUhIIDC5aaMXeQHu%2FL4fztM5jfoLpYRxNXlLamFArfWU5%2F4g4E4iP3bf29ElMD&X-Amz-Signature=95a9b66fd4ab1cff39e85a2bf3ad3a58dd5ba1ce4eff6d7c03de1881bb878ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
