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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z2HVHZ5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCa8hB9Ctf6u4bz2935RG0tyOI0f7Blh8kC%2FvPZkwn3uAIgVro8yCZRhpjzz3CUpIrPQsZcsf42PaNFu%2FdJxoTaYnoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOlwbIjzzwFdA1hE2ircA36lIDKhTG4ms8m6bJE5GQO1pnfdPxP71s4Y1xdcMf5SpRXhd4Ns57iyu16oV%2FhQLBDqGmFdELkWBopwiLdMKmMvCHxz%2BuIUXO3ocK5LEJGo9BkiC%2FBCEsKXYCyLQK617KZ1sGMXka3l0Jnxc%2FIOHES%2FWWjkZA3FjztXXTqC3FqptN8HJMOWZu0LbPGTD1iMgZGLpjF%2FVxwDhibON7naWAeiBjuJHLgbi1PUya%2BVS4aqo2JmkKAN1H1GD6lmd5M5OaGloc31zVhtteBRJ1vpd2piFMgcW5dldWiev1iRHtuWbyxXJhwDEodC2N%2B6JO17DQ4jFQHNvTHc9oSxirmsIzW9zIzlTlopc4L6waoSv6A1JreW8W8q34JnThwdDkEyBlR9Jn0mV9ZeB7f8u3v929c719IYkVDpp94DNSAtCO3rRgd50wj42no7shCe4LiSgXghHMGG5e4Q1YNfXZ3xFwcgxlJIVZ2lhK9bJ0zDlLRgD6iqNmpXcLtywnhRfwAFOOFlyIlYLGK7kSp%2Bz76hjJWa%2FUdMK5VUW%2BnHWOiNMRiVawJZ57FG2mCvL5yc6us9ewsK8kuuz7q2HZzSF4L0j37%2F%2FLIwdCWUJlf1sUje6jfTL6t4I9Jsj9nvKrTGMPy%2F4sMGOqUBZ7I7e8uOZB%2FHmxVCsPuWBqiuMWMbqVLrbbfezOuliy5QJ8zL21p%2BiTMkqQ1wtSgttrw46SsrwqmY0YZjVHOK3rzNVJ2%2FgcuADW0kQTgADTBbRt53EJ1adEPRt5UUctXUGrhJS4goVsZpZQMMKBX6TLde7hEYzTXL1QjgH5A20skUfMbUKiai7ovwaVt7dCY1d1qwfS4xGPLxfK%2BuFH2SCSf8NCP3&X-Amz-Signature=b613470772749ce4fc0030cdb0b6b42e3d430ba0c808030a9283b74ae15adb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV2ODOIO%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDHnW7W7e2%2B7rm%2F3po7FobnSl%2BAKcWX0OQ1JDgCjoj2wQIhAO9l%2FgCbm54TdqhPdLI1VwBVG%2F2xbzyq8ZQgS9jYk0W0Kv8DCHAQABoMNjM3NDIzMTgzODA1Igxf6BsLn8vvtzZePSYq3ANHC7VUv6KzBljuZjHaVelOhadGCgt4VOBmrShH4Tzq8QSDKReHWHtZaIsPMAUCccFYG%2Ftp2S3HHuADiBC%2BGqOXakG6dNmaLV0xCTXwp%2B3pBjPbU%2FRlSRm9lYOp7K%2B5%2F0k9pUoQ5r7F4M%2BUnmKUml53%2Bl1jUda0W366jt6P8n6%2BDyKZKHDYxzn4GfR%2F%2BxobcTxIqEX6a22oBFnhQx7yJbYsI9o%2FJRcSOlXk0QmHSu%2F%2B%2FWYYtL%2BwbQGpk4yfxNW%2B4DRQiMpo1Uc63yF85kvQOs%2BNBi8RYNa36OJjJAZKMHHUdu9NRsxi79hihaDSIW0WAds2W%2BsHJE22vrgyysNSoF4wYEpdzDR3AP4WnsVGuEcBPJxtK42uJ7TyL6vb89M%2BOcFIC9d8tYXlcDw5GzOhoou0anEsq4uFWzwBr5wuIoYieSR8mm%2FGdLZqAHdiYKf7rG0pCoLOojxcPJvnX6M1LacRloMTxshIJctyYer%2FobmQilVNGFVxDBOSFQb02E%2Bh2F%2BTpKacM1kWGR9Pxq9gd3qdmqGuCwJSILP2FU%2FF2edt%2BzFL3TpcY67dVjHRyh2xK8I%2BwdtbAyqIT1TTIFvI8A%2Fn0BOpreUjcCIqGr8IaXeViTaV%2BC3Tw0hCMeLtYTC2wOLDBjqkAVbOMYeV0C2KQdkpfmOxC4VsiqQlly3BIXotYc312wPNr3vyLWYsSsvXrUhMIwfXj7f1JYAH2GNk6NJphWGTM6sLEjiuqcu3%2FT6xt4PI8rbS0xv7EBnm0kvB%2FcHES5MOPS2%2Bzv40V4DTDxgMVLvb%2FklNCWqx%2FhFNUwDJ1qKKID2JPh0UK83oH6l8GShfOmBKyxQEwDTeHyNVW0NESdbC2TlBZC2%2F&X-Amz-Signature=a237b0ef58c6258a805c07766fdd860d0e79809519b359f7aba9ed0e96e4a648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
