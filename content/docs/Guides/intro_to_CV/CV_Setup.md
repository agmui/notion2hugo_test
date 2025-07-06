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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPQB4YO%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEN5IcFVVxXFucf2RljoDWOD3K%2BiAlskAXI12sJbaIiwAiEA7DwRalJ8TgtrckgI58TgK7BZG60iMuy%2B3sJo1%2Bv4uHMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCwPwo1RBXrScsA%2B%2ByrcAyAUZncg9CyKzzmhylHlblqu6CnjmisLABnP4S8jtlLd1yvCPZh%2BeiEc7uiiRnANU3XiEO5j%2F20FdkgKtRZAdPQRkB1NtcMIS1RqKOHeY3rVuDgpgc6SBvrgz9UmJcwLeyhhzbKo96%2F%2FnJRlTsfHnaFKQgzfibKYeBCG%2BmzhzYRtIOH51BRl1QbaorUdJT9%2BxxMLXlUkmLhi3YqKGwQzarH91%2Fc1pMIJY52sqh0cXSMt2A2uzBlOdGT2lMj1g6H8oLPHbco3qv%2Bq7eZPmLZ33xSl%2BhZDrhgOuU54v2e5L63sxPHPn%2FGjVV1WeI5Kwuvse7ffz0%2BB8cMfgE5mNkfsqt6Y1di9%2Fx%2BXa7hPlod1FUediyllcw%2B054IY1FFbl7I%2Fp7M29ksuHliUBn2jidZntar39%2FEau65CzSzNvAOsb3mBPg1feHqY1diY2qCB3ORPiDERhu5Ee0kNkDMOVeXH6mSptcg2%2B%2FSNilxcJLj8JRn2Bh35aEbufN6NtX21jqW0xPUxM6oxHgji56eotJhY2YOynv%2Fb92RSdZBiuMAs9pYfLRiazxemZ0pHa4KHNSSiV1OX2j2ZMyVnoE4LLoBARxbWksfHwbe%2Buz01h0Cd5IphoOW5%2BMMhKUeVuL0rMO3AqcMGOqUBqpoJwxcjAdcxzn93Mov1FVRbzxGcjnk%2FQu5uvDrjCPZz2WOkeDsiQnw%2Ft8lQ4T9UdJByPR3oLWkdTJT8OQT%2B6LBBh3oWZV%2F0DDFFywuffU4dfPWD4iXEqcyV4ZF%2Fw%2B9UrXpiylP4FYdUZR5Okj9RvczU7kJmZrU2NDix%2Brf2%2F8HRGDt%2BL9bnCaN7uGHisQHqSUlV4VC8n5apq7%2FaF6Jk7L3Q5YYX&X-Amz-Signature=89d2bb646bb43c33059beef65a035050575156276f27a25cee9cbb727be2a39b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSZNZGK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIC2FCDw%2FlJJbeXJccDsUJWcghV%2F2W8XYdPKV%2F9956LXIAiAYsHnTUILMEiX9uJ3qS8ntpSVn0S5uti7Mi5gip6yfDir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKg%2FD8BkZ6NuAqAmvKtwDRAc1TmBwCRN0tDN00gIH6QrjrID2DSsjhxG3QEclm0xDjxZgUBcY5wiDR0LfJ6AnndJqyTbAu8Mwa1uvxmgDu9ZSr6KnmZ7Zu77t2Zxq%2FgGyji%2BvTNZqjEU%2BD%2F5dIv0UFvtl%2B7xaEjjyhMc2vslPNJ%2FleOgtk7vAo%2F8suzFR0%2B%2BG8VAYSw%2BCVatFB8StuFAQlC3X%2BptWKYXPQGR6Fg4TlZt4DPmAUy10w%2BEqCG5pApAVMzFDxIxIsQY8h7fNBTHQEka8G2iXsrlVh272pL%2F2oanp4JOiK0%2BH6bz4CYqAb1%2B2lg5AYQXYY%2BJIN%2B3wQrnX9bDm3PQpSgxyDlHX67hCjJ%2FKXT%2BebVc0bs6Celrk9g8AM5DUnR7khXDlBi9yp8wGbj4kwRemp9lQM3qie5qxgydpi6o0XP20o3RUkH2CPDtSU1EygQiisAzfVzNra1Td0U4WDH%2FOCP2JaWgLl4%2B%2FaQ0Qu5jgYaUl1FSg2S1bNT4irWXoanyJ6PxeHhbe4LFk%2F2OnahaSfsArgNnOz5MgueRHGX81TibtFykk%2B6bJCGCXUubazKdAliFJblI4ow70V9hkEI1meqXJ7KHQhre2KN2oHo4OPHN6e1YP5OGsO37O22s9IeZOTASJQ3Yw8cepwwY6pgFpTexlK1bk3dmvOf8WO23RGKtQljj%2Bciw%2BnWV7vS1g0wxZR%2FYNqjxXDxaNKGyUuswMcbfN%2Fw%2FVN5KreZeOH4DG7Za1Dv%2BUbdx7bBNykgx9uxz6KouigVIM8mIDCefF6HiIimqkHqmpLL%2B0uY1qIndPOUluCHBMC%2BFgSwvfHWKzIS326U68r9f7cly%2FS1aRFz6lenH91rQLC%2FFa4gPHCYoGdbq4Wrjq&X-Amz-Signature=631e969f0f1130e24661398e0106a39d0004863d3b926ff273ba2318583363ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
