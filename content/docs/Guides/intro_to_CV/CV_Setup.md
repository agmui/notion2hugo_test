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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFF2Y7O5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICIaSrRF5P8%2FbRF%2Bu9vY8lyp6wh0EPdLE0dCliwcSKs3AiEAj3gfAJXbg3rkjxNaF2punWoui2Fhsle9LUGtWqnUNVkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB0eXsUtXA8gTFMv9CrcA4uytKZIFbJK53iWpoBz2gDOpO2ySo9S%2BspwgGNOtaO9inNMAvXZCyVYRpKyuCEGfOPLPcsLgU%2FxDxJP1D4JFXVdav8B%2Br%2B8cXFCuryJYA53uRerpwBdIotAx70OHnH1Hl1PzjY5S8b0Es4Oq%2BTjdJ13Pee1q7VYxF0ogGYxCXm%2FHnDb95IaUWfSM88nwK6DePDc68VovFS7urQIQU0FPwe6XXIrzMJmmhkrsbKGesq06ebjIWSAbEmUTWYaDYZcSJaARJyiXrQ8bw6Ax7oakoZm2wJSBOVJD5DHmABSvkIrdFcb7kZUCjy%2FG7A6gw0V9T0GmsVTSgFvV%2BWKr58H9lW61zgR8oADWzmNkCDny8dx5FUsb%2B%2B91DG7hqsHs7ovABMP%2FqNCf%2FOvYtoc0uCS2306eNP4ZWB7d5%2F0N86m7Yo7DDxIvVkV8ES%2F4cJyGxa%2Fl899vf2e8ZsjzyqFqYskpkBnjNPGqIh%2FXJI31df0hORph1MNGK1OsLMr%2FFflfLlWtjQg4CF2b23j2hqf4O4GHDLAUXvDiiPoZPfhgsszk%2Fnv3lPt9KEitEo1gO8BxBEoudpPwWHhId6xzgxdQHmqKCEIXl4aHFWPQe7Nmbtv2k3p4AeYaBmlE18UtfLDMNPqzsQGOqUBpm6H2Ig28qUHhclIbavF%2FwVoyDx%2BLB6HUQ5KTAkKhjiPaNlKS6S11wYbU%2FxxA8eL3kgPJcUredTLIUgjuoeEHHTOPUOLXPQ0Ji1slFXU%2F07%2BwbJReAkqga5tm7ixz2aasjxdiAptMj2zHKcQSJ%2BO3H3DDWCaTRhDjJjCuqqd5zOwnwkiCPrlQplt6jhk7zPuRSX3kJYYDfYKrfiYdYkZwC9JOwdg&X-Amz-Signature=bcb48191962e551bcf10b40fe2ab23fdb243c903fc2be422193e6ebb8dfa23ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632PBWHMH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFYVCnIqraZ3GuoHecuMiORJ8uuwBDBvh1V8jKQ5mF1fAiAT13cu0iTPbTMGi5ZTnSCkJ1kqpLTRA4WEIT7US8Zq2ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMzrld3SPKdchvG2uFKtwDcZTDn5K%2Bw6Vi%2BZz415AdPlM6DwfRzufxhvBaI2Kjk6aB30%2Ful28OcV4py0Y6OgyZweMJMieZxl%2FWX6q2tdrdH8XD%2B0xRd%2FI3147kX2lD2zwQicLSu1XROtMLbbthTIywVSSwVBNhbQw9RCufydrdz0m7icumbpnY873aKihDKzD4%2BTt1miSN5cY8DzFJnsl6L45LZh%2F44gNIkxiSsuGquRLAnk6opzV6N1Up91S4kIVMGUbRxrmuPjEJqPHbNVjNqjep1Mna6%2BYQkzgtKVXHF2zrkZvlDXlbNu8p3q8Bh5CSojP8wn0VSwgCkj5QsF1zIl7Nk%2BTbaYLPkSWHQCBN4rafQDFE2TVXl%2FmtTv1R1PGfOnq%2F2r1PK%2BGDt6vWnWT2R%2FZ%2FVr%2BNzYRPG0Ifx07hFAyDlijpRWxWu41TOHuQHI4%2BzLv9Kp%2F53w7KwFTM4Xc6Ot2HGvUmXRcgKoe0X5yK2giR3mGJRg3JeKY4%2BB82A5xJ1ZUO8rriRWgK1Ec6vzeOxUVZ9htyF5Dfp4YldeWLyXCUj0%2F02hu0hdDoAqyfWslT3zX3XcakMi%2BRE7B25j%2FbO0FF5XpgFKCfzJAee49SGSmTkP%2FWzzN1vFZYuVHkeJhbrcarfwbkfi%2BgbZUww%2BrOxAY6pgFywC9%2F%2FeLPPhCAifDV92F8NoGNLBjNmiMBsulmOGUWY6kHkAorIlItg4gYt0qtbh2Qcc9anqwbT5W0ZypWMeU7rNC%2FxvIkQ%2F7QZOt73Ce6DTdiPO6T%2FyX29YuSa5jMHwEt0cUAwCElCadVC1Lan%2Fa8fYxZLqSomyr8WXLbN7dmeyz92YkwoZzSmZkRxJIMc4JR27i9hHRUxppkIY1aC1qVt2b5LYqS&X-Amz-Signature=36e22df9934befd689a8fffa112860b2b42f9b6e86db0f1f5a6c772cc9a575af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
