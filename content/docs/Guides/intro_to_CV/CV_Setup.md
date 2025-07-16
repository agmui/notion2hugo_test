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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZBI6FLX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCLATrkFvPqdlG%2BT2aLTBln2KA6A%2BuZkrLDuuoZ3Ig0QQIgP7s3KDmXzDXG9%2FoGRoPO1UQiCHtm5Ex7NK57dKK55WIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJRJT2I5yiX6h%2BujvCrcAwto5pOuIHUjc1d%2BY6R2ZO0MIxRIm5bnH7zOwhE3Ab%2B6MIuK7gM89Mkpp4Sxsph5CV0j%2BAT6zl7FQ3rfmDAZ%2Bj%2B6HakqghwkqdE7VA%2BMj516Alt6Es7YKYZY2ue76UY8LxJ6bg4k9zrc4ke6GegHdpiAFQTSjH8%2Bi44d8Mvll%2FS1t7vc9vN86LuRNN%2BwULeubyvRGvOvRbHH7TG9oMR3Ly4KwKQeq69KKLLN60mISEyTKqXFlpnUa%2FEREidSG9rmFiwmg4Os5iW3CrqWR0Ik2bIa6tCnB%2Fh%2FnqWmoRAx2JyW9h207Z9KlARnsHhDYJvrIOA14BxXg59gLahRbuxz%2F8T4Q1q9Q09klBNQvtAOgMiydYSthV7MCnJLCbilUfhs89NpyKsHUZiONQxYyf3%2FXIKL07AsH5TZyQTqjjwt8gYuGpJpTwRT8LvltyFXpaOlPHuh28NDvknR4ymmOIgdVIXFPOBUTHmcbSMl2IwB1MsNvn2XPSzOSJZtR5GqoXpqLzfW%2BMA07bA1J%2BEFN4D5dOEib9Y75jnLCyph5P76WTMmNI0A3tnitY5fUWQ%2Fkw3dqPtCNj31m4e7RkY4GKGYZJwxyeIJuSLzVZrC8uT2JBhc%2F%2FS3XcdoxqiCcuAKMPSz38MGOqUB6IaprLttN5noKLUbtRUER18FHWa0xMEvq524Lbw0xn3cjzO5NdJTprj%2BeB5QMavZt2T%2BHzlkApo2gGkJtlnZZ2D%2B0d%2FI8UwCgtyeeOUeGjiec7h7ohumElN%2BFfSZhMLy1%2BXwM%2BFe6VzxtHTYG1OH29RdbGpR0Ba5fLSMKvhcSR%2FK4wrqTr%2FqQekTQJm42W%2B%2FqtoUlZXlYM9x0FoYOXmunZC6t%2FA%2F&X-Amz-Signature=4bd61aa460f5ae1b90fc9a187bde62d6fb6e28a598cfa96ed63faca1487c18f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ45X2XV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIF3OajzmaNLv1knPXabOkS0St4T1r01VT5HrZXImsrmgAiEAh%2BUtiyxq8ijs9iks7tXmrbx1lksEMIWiw5WteXYW41Uq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDCVjYhMMa2AyLQjKircA6L0y4iaJS2rgqW4gXKMCM1t2FDbQE2m0qkM%2FS8A5XhtaxcGPEkHdxLtRs0ouiz5lPbMhiKhhelkv9Mc%2BIdstLchx9uW8HbEns63LAREIV2WRWniOfTKdZEFDxLZb6TSjJtDNd%2BA2Fcuc5ktCNBwE8Jo5JZ6qh4mLDaJGLLEyDDZVH9UiCtcnG%2BmGEZFebMaBDKLYoSdWdim6dbBRSfrKBnxy8gweLodCgMP2636Ca4HIMgT0AjMZAFkl%2BjXQRlQiBr2WMQV3gziHYhuglAhaoUWjIQ3YeYYCpg83J6V7vD%2BdMpRdkfSp%2BjP2Mq4UY7MgjZM9buIzND80e4QpvmtwmxnNafUE2b%2B%2FeEsUlbYKhPw6uhUNTcdp%2BFsr7nD08sYaVArJeWu%2FPFqOvCVeh89sNw%2BZOocn1GLsZSPPRKFYnVbmLGJAs8S%2B9SjIKEO4F%2FH6%2BdnjcOLRf20BP2iDeSC6curR8N0y8wrwAU3p7OTGYaw1Mbu%2B2B51JRMKLtx7RatRTjqh904o2wF6t%2B0RTqQOqvjws%2FVIzbMUX1n6Xhn%2FbiduI44o43SZSq%2FkAQfjq0HCr6p%2FQoXGRXQ%2BUsQOH0mlCrwzhMuHqNMfH3rWbWDbf5HGcGRKMudWsYLqQvfMOKz38MGOqUBDZvjetZJnZtHNaB%2BEsa1h9BWgdSiX7kpdGgEpq2LFuJnx46hsUacDEeGK4MPY7iMOvwNYkoikgMmFEAmD4qiIwzNxBmpFPkJS9yNDDWxoxYlhnoFfebuT9zIjoSQ%2FwvWo%2B%2FnYqcO7FhddmW0DQNwFaPUAkxLTNFAk8zYYqrZ9YcKPs536u%2BeiFpyGrPfEyP2EPlkqgU3QsCwhul72G34JKeyHiWd&X-Amz-Signature=00de11d3ed84cd0f42343de98bbde5a8405b6d8a9bcb6f73246ef536176e8b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
