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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7JJDKEJ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA7Wj5iDidllGPJCZnf7IXa6SjxIHOO%2FHWNhZAhzlpiAAiBmsmEwlZWiN3yybhhNdTYYdTnQMBeGa%2F1I7PDzYzwSBCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV0%2BldeG%2Boy2PgrIqKtwDZpFEY%2FBzmywtCmpH0Bf5WX3IRq0UuuLvqmb1OCBkP15awDqgNylIkAc1aUJ0PbOuUuGxpq6GStSyLkdCofzlhtj5wrkZ0IOiyaJcpYUDFfF%2F8Rk7v1mKzfLPcURWtcDN6XG8U1S6hplewef%2FgQUvVikZJIuHrjRYX%2F0%2FSQyUfKl7ulwE%2FkoegUPLYb3cu%2FT94aDnxfHmKjhtzhq4KcpynAv7Ff6UePHJkCx5fGdkVNXYlFsEiWMekhbFCn1xUmwx8m61yz41YbXDoUvTR%2BNqsKfdH%2Fcg%2FuQQH%2Btj9sh4GrhQEA9SzRIUSrN3CplgabGrYYzSUuq49EZynY%2BRp%2BBiHpf1I9xEe3DKCKJY8jPRKrmUfRLp8x8e9%2B0pB29Ky3GBxduQiXt9JeIdpB5SaEimjzTYOsQvN43cEmeFydT%2BZRSqVdMvdTfMWuHIuT4JMHPCRGM6irQfTSo1PfLAWHNfLKFV%2FpqiIH5DJ4aK1KC9uPNTbMBgqKJjq3CMfUMnVP8YnIvTUw4YjlXrKDOm4ZyVLX%2FI%2FBusCvWqzr0LkhySnE5xgsrGUJr5OvzFOS%2BIDr8VlzjanpgMSD6s22NbaeAEJg3C1VoqBY6K2ejt30ZpA1gAmX7PSevjLmzsHWAwpPnGwAY6pgGnDF2Bac9pxKb77ihUAO0SZpxbBUl%2BLaIqAwBl1zucdq1i7LvHn7zKMfY8GFhxF2pGtRz93ye%2F%2FF8fAXXV05z2uFL%2FM8XdQPD%2FrXzJvgrhF3%2FJcP9ucgOTDHC7HnICQ03w894q9%2BPQY%2FXyMuPeMtnx0oXQ6VXmTS9OvF2T5XFTv3Iy3iiFB8HkBzBUc%2F82qJrRye358WMTdPJ5OAKONzAPr8mA8xpw&X-Amz-Signature=b5880afd1521b6eecf22ca74209540a1c5dd573ae2519ecdd2f53fa1f2f54831&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422MW4RT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCID3F1SGy62eIr3LDVjny3DjdNd3vrN1DsJSW1MbOwokLAiEAscLefyctqVPIBJfZjyuVgQ48RApYQxGS0AzafGQrHl4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDaRQ8SLXjEg9rP5CrcAwLz3nIoRJBrhwViM4eMVwzvNL5%2FhueVmCBcTx2chnuue2wVZpibBu%2BJFSX3FWac%2F1mUCm%2B9ECkZbJEGGTHE5%2F0BTfSeD31R0EaOD1lILp9pVxYsr7dJmgc%2Bs1Ou%2Ftp9HbbiLD3O3AUCmtS%2BMYjXQcMp9SL%2Fdu%2BX0stCn9qYATvH3qRC4JOMslnc8vUlgj%2FhY2CEiCHhKI5ymJZiO4Szr3Cwh%2BPb5ESVT%2Fg%2B4J71%2BicvfdzrdrOBGDXfp4HJw3T1KIfjASE7p6yHfEv6lwy%2Bz7%2BRpgFpOys6LbQkSfCPF%2FPmfZfzELtJLumZ%2FG5V%2F57yaESMYvhvmRvvaB5G0Xi1o5%2BaVvNmEjQ6htz05hdbLtmtpE5mBqwUbVc%2F8ll4PjEAtapMgQtuoBZf3M9sBa1ihAuP1QQZb7Il3AlQWzTixiZcxCdYSrZuWkAszKV0DeKCO6HpncicFserDF8YJ0Bwck8NyIaiAp7eB9EfbA5jh%2FCsGRNCPZ486G8OR6%2BacgCXGE%2BsNH5Zd%2F5BJQ9QtQjmhQHEOgoNPT2GeleVRoL0NMlbcr%2FZwEZEca1MGMrcnr8AYhLP7paji3h5%2B%2FSSo4GK4cLRsL378gfIbybW%2BVTeOVDdg%2Flsfj8w%2FyVmYhP9MLb5xsAGOqUBTWPDX5SD97GXAbCckFHu5q%2B50tVaAstEESQ9QQx07SVMBGUOt7UVrf9CZjp1l64%2FLaCKYan0pMyiL1fMtbqcwWYAUNlEHDOabiYojde5vTPo1IkqqVOLgEqsUzu03oTzVANif68yX%2F5GbSVYqnS7sIg6fCRXn2m70Ndw17%2FS6VHP3ARocvvFgYtCEz2IAgVntRzicel%2B%2FgiMtfZloHbJelHSfAwQ&X-Amz-Signature=6827308e4df1f5cf87afca66e9c7430c06184856e77ba3cf7c3c6560b962bf1e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
