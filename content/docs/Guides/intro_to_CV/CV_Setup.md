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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TAWOJR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlejVyBFAwY14IqjcpDplHlQWytZWP2n0ntbor7P1ZSAiADcAjRe7Ktrv1k5oHHiZv53Xh2nMewzG6l6IbO4S9ZPiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKPBARTe7hdhPWBNYKtwDuH3qrM9yiFGLd4mJwdWKBPnKAKeW7EnkhepTjf5VXUWTPXOn%2Fr98zx7ce0qFjrMYdoq4zeJppAwPHFDBf1D2VE3JqdIMExqM3CLvt0bzXbtqsmJTshbR3frz%2FtnYgyLi35j3JtqvXy1SJlouTTYf9wv8qEcrliiDdm%2BFGri%2FjpuDACFPJUa%2B1Pq0Zz18mhhYN3dh%2BvC3B9lIUFRCiKJI%2FQJmhdhmHJU9WdyfJ6jXpr%2FvRYa8J2h9UofsfrwZDufCxt1A6uHBQ1Ynngb903U9XHdVbEAJaL0zTdmACf%2FKyHiCRl8OuBvk7FCTjvGZNvf3ay5Ovxk6UD1GOggcgjPa%2FWyJSnyoNKWMZNsnHEK%2BKjdTSp5D0p09gSW33%2FtHFtl5Xlwxb6BrLS7Si5H%2FMKkR8OCZ0oyXB9nZk%2FrT1QoAMjOkVipGlcBO0AoD5iilOYdPBCMsh1u6OHN8w1LHy1SYlmrMKaapyjx%2FgayLIDRnTRbdukfUTnuQ9n0%2BGm%2BivBGN50j4yWuc6e8NdC%2FsfmyOsxXFVKv6TwNOB03YIZ1stiEHxbQBp98vs7bakytuSqvtGbhO2UafoHttdhHt0heYlip3qelx9%2FVGPD1EOgcl%2BBSXJIhDfcUidtg7yJow3ou5wwY6pgGCxV45wFMOXXg2sQ8sf%2BgtrnvYtd0zWpJXtaqvqFeSUgPNpqZnIR8EDC50f2GQypVwAU8%2FdvCyXyGnaGNX%2BgtQXXbZXUkX048JzEjJud1astMVu5gTRH40d%2BsnmSxUNi7iWXVBkKg%2BbQxvg8Frs7QVjYSVC9rwDU6kEW47vDsKzR6qc1UNoWl1oWjif2c8rGN0BWvi07OCJeRSdZ6ctNPemrjlNoFl&X-Amz-Signature=0f35ed3d17cc94f3f80f03ea29308ef7c2d4f79cb0c56ac70600a591d9d08f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FTMD64%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLc%2BJYg0CltjWrPhqUeWKXAQvuOINK50jQIPhDRYLy9AiEAvqz37abTNl3rglSlYUfw1pjoPNVdFOiV5NnVlZNk9JgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnT%2FCdlN0RTNDqJHyrcA1baHfsDx0Nt%2BI9Bvxhn%2F5%2B8nwKJqD3pWgFxZaNCVTJ%2FNoeXeWX1x2oKe84eOY6qmrr2HD5qE7vOa4%2BVaJUKUXDhBKi1hLl%2FIeOaAWQ4fuD8PsA5b1c7vHPJ6dL3KiYVzRGzz0WDHYfBS3bSjKJQZP8Q%2F1HvfFadPZCRtUZgL5e2kxAaFI8eQ2PKpAxdzPoov0GKDJ4ApOJD%2FlTD1%2BtF7sSUZwCOqPyW%2BXyJbmIVIl1DTOIRBoNMGtLW2q%2BeexNAuzyIT3W9RF0EUmWt57tN4nfV2BQb54T5ULEQUs1mzHPwSxmmzaeqF%2FtlBALQRsnTiScJVvN7bXv72e680LPr6SPzn71KnEOFCP5YfekjjSsMXaiiyWkiz%2FYQeBhWRZpBoJQoN2Zd5BR5rezb8tYu5zJ16DNZGw0jPhyNs%2FUCUfW8J%2BFjQCquKyY%2B8Mwi59c7V2qSnL8SI72X1ibRMCcifUyzwGR73UyswnmH6Y2qfZR8T0FG3n4zKkKk2xoHICN2P4uG4Nrp7FKfugBSa%2F8dZa3788ZETQiRU0vQcqVbx0Ad9epiHMhRimqQLn9V9gHU8Oq%2FcvOoYHvOXsSKxnZ73UjsZwXYGBnNavEQmqpkLUTMuXLcZ9Efv3EvLAlAMI%2BLucMGOqUBScvlBdEJZghfgbD1Rnr%2FLJ2LRkTmbzXgmajoRNHl7PGdkVrlNC1aMgYWfD9Ucq1Kg6Dq%2FnfGFrVH5qREA5fB0ELPLUwPEJf8RyYmvFlFzTug6xpk6kKY%2FLnb1STZFPRVxYa5%2BEtPcjtZEh3mO2ke7Zg3KD5aYnGrmxnUeGUAUSz5WXQtbouTv1TQ%2FTwi8C3%2FlVIiAOsuW6tcfmytP6nsRaLg9zpk&X-Amz-Signature=9c1d640a9f083e81b5cb1b820000ede89e81dbf9118cc36bb31133b6a7086e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
