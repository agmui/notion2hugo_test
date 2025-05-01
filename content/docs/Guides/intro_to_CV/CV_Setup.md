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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JVF3KN%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD3oVWjEZ8UsUZwG2kd6xHxPrLzJJVESRiZV3PZR9SrIAIgRWAFeLGWVFXRj%2By5h4F6T%2BdEQ8vN8dTl6Ond0Ud3zRAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPKB7sDpV2a434GpCrcA0ht765NsNnfX3Z4miauCvgIz%2Bfk%2FYdVLYMKdGmgNMgctHiWBKYm3xIn2sW5zXmSqTm7tN97P%2BB3nk4pWvpZDPEdqW48J3ZGQWBYOjVCfxnuQbs4rc6WuIvvntUnw%2FQdjNRhh0OxRXyjkkjaTfQOGxgIQ%2F9uelD3W7BMM2UOBT1B3r9PPD8AbswAYtk92q8%2FiEJCISN5eLTZ%2BukGPNrGAyfLqkvCrpE3BuTRvard2RlvBOUc2fCPcnDQ0S9EIrNVR4%2BeJCc0X2YgVu8GpgdZEzm5JsQ9MgQXgU40DJxnb8rOS4ufIJ2iCfSM%2B%2FegOIJKfT%2BVoypzNqcunM7Iz3i16IBA6d%2B%2Bfm4F0bjVqaSu3gv2pianIw9SyxV01ln68NY3OJwrRACYIWlIHssPnXXqGNOcfkXPPeSSvCTI8LdyGy%2FeNA%2F7laqwXY2%2BMHHh1mwYTdWsgyy3sOabGCBuvgpoUBkT%2BI2yJFw9xbdUEaYMFnDfkccfcdtN82CNqwplMOJDanrhPKjlvKHV54XSLrD8kIde8RC9D7ClFW0%2FmWxi57GmIMyacpcUnDRWrtStA%2Fq0aT1KQwCFrv1Bih4d10R%2FfsjAJA4gneGehYtYHCTuomjAYrW%2BCJlTl7qjtNGpMJrOzMAGOqUB04kElaIVkmeqfm5qPrnTdwq061CaLmPMEf4gvfnZMRQl3f%2BN2NHJEiE3w0htjEdIroPKFuiTqCC9zQIUt5dQFBB%2BRz4OxoS4fBP5FDNwwIimlAeAlyIyCwO1pnnJ9GhubfRueH39lDui0KfWQgCTfJTRRYMpGT8kb%2F72IaUt0UF3hjwC9l8hNkJJKHY4b7XpxPFqCuXBYP%2BkTklpmk3imlzNh0Ct&X-Amz-Signature=160aa1c6b153948d506b6df11cde26c427fc542a797e4d8ece4bf584c7df704d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNF65DO%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDP0aDj7dzfhyE0X9y5xKpz06WTb0nKjp3HZ%2B3whf2AeQIgXSSQtecHF9xbYgb7gH2hoWCzTJG8cgORRFrphphrSpIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDknRalI60i529%2F%2BdSrcAx0IhiXZxUzSNx57BuB2zkzoJ4ViopFdvigyYAoLZbYSH61cYJEN7oHxiwoecV%2B3PIsYh6OQRhR4bi6ZzIqX7Jo5gNA7lpJxIyoMoZHV2hnEcgxunVS6mhvP7Cy7yxvywkZ50Td%2Fi2E3GJx0takCMS4HGdal8K6ljQgI4%2BCwhLY1GjFT3%2BzTtyk7PzzCVRf1SVgWVUNreSU%2Bs2vqHSfxNGWzt%2FIGScLZFP4tbVKCrd9UOMkrVuRX079JA1YNL2MA98u7WlxCHMZCOV2mMCun4H0VXyZX%2BWI%2FQm22MT633e6jnLr8RZCP8HLhE6AB8qo4x74xzfLhhFQE8JaaDpca8IPtVQETYiswHPIR9oh%2F6ZAX9Q%2Baz4dwV1cmIasYmp7pQIF%2FapM0cJCeGLQypnfIN4x73GJaljxEJCaj3lri7IUb6G0Ls5eOCF8L1Mp7%2FCgLv8%2BZXF6JYhgHTSs9%2BMillrGb4J9GZJulhOyCD%2B3uMQBUgULUNQsXHGyB0pCLCwg7Ct0pLBqwzZLpQzFIJwY9WOZj2a8Zok7Eekf52Q9W5XJE4i6ob8qMa7bq7QT9tLe%2Bgqeb4Uss0S3%2F16U4hMSqOVeGwHl%2BUFL5GMUI1W8VwGLq1lewV0KN4Mv7ol0LMIbOzMAGOqUBwdgV1KTnIcImyPWdL5%2BFT6ITZzCqZhHSYeuOHqqMimu92fDjKp2v2i7hHswoFavECC%2B5ArSsK2y83vJQwzy1nbmrTmBJtculGMSnff%2Fw8oQtMOdO0kslvlioBkvc%2F2jNCvLKBQpcv9ckkxdFds0cGkNJgBQWegcN5%2FRqCVEuAvj1rngXyUFCa4eiki6p7g5zm4dD9B7qzCz15gxxfNvuSx%2B%2Fr%2FxL&X-Amz-Signature=e67a573e62a0d3d91d109ba71848a7c2969e2f2e390ec2bb30086e69e893d565&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
