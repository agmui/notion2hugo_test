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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFQ5K4C%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBzoNRHsAVHH4prKwSZzPEkH8fp08%2BRPhLAdopiMwtB%2FAiBxPkNjji9tsJW%2BfZQohWwrRzAYCONzu%2FMEUaMGLFLwyir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMrzV3bAHLgU%2FEvnE0KtwD792QwJOK8CMUhFh85Rwosi5UWfJhmKtdLPEL%2BxX0ETHAwRKY6OzGmFgbDEvSFXztNGbL22eUdumgcH8w1n14diKig1j216yg4xsOq5uiCAMPLUcGRRWSoWzMN8%2B%2FgJjxbJ%2FY6c3XPcrK%2FYgtJsYkZF02uiVs%2FL3yLC5Ph%2B7MyLqlaB4aqKj%2FCaur9b9fQOWvZ9FfndlWPh6bKPFUQ%2FfUPdKaz7f3wtL%2FWJRnm9v1WxaN5hTPusjoMq5AY5kTC0ktYASeUAXruTtFjIiVBE5k1njWg9%2F2h0bBp%2BMYfLxdRyywHNiEAWdbth6yQHmSRtO0qZUUsPXlBgpyoCVbuZd5Qlms3fWgrQ19CkIvfFrUSL4h7WJek7innVpICMso2CzB%2BMtRPi9Yyv9VD1HrwtIVXuwPi11WIR%2Fng3lygguGckunO8%2FylA%2BmPADWqebrZJz18VgGxK6VKthxUQfuSaaDDZ3i5kJ%2BaX4o%2FYgg5biV2f3HSj%2FEGP9rKGkEW4r4v3sTLkHv69wm3G3O4FL2t75OD9O88%2FTpDOkCbKZ00QVtzyFoV4p0l3Du1ljYefUZbtzBLIO2oTun4fENzm2LTVL30i4ars6Xn2mwSbLf1GqK5S%2FoljBslqUeEvtfLi4ws%2F69wgY6pgFkPSU5XxRq35yZX5eQ9krpt6Pgrp%2BDsiJZKLrI7%2BJVDcCxlJpjMsb%2FWNBbdLwFy%2FdHfqK5OOk%2FK6QHRs37FgCOMVFOda9Wkg1gFIf1ph6PSrEMEOTpGxiMcMuypNemMPtyb7z3OHvdagDLlUpKPAUziG3K0D0BtEtV%2FRbTT1lPgST1YEBt4F4SspWI0TdpZavdTMgzbcV%2FNAedq9yoV6tjc8w5jvrF&X-Amz-Signature=5f79a1da57120233ed072bafce8a1cb6ebb2aa7618e956d0e2f9e4c6ff4f5416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAENBGBF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAUCVidY8J4wl15HQdPkYpyLR1woe%2BGW7hjcQt1rlfZbAiEAhTswnbDxvP6vY6hLzHsiHuHiCTE0RrLRR7LRRSL7%2BqEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDC%2B50MCSN2hHiDhn0CrcAxX6%2FAzqJtMlJ5U3cqjYqLDsjxzExXw%2BcKZGs6K2qOt5NFR9e9f1FLT6UgDZfwFfVccRXz0rJmZupvvlMLYDRqLmYEqlbIMt3p8lMZJIqpdCEkm0SHMButsz%2B5z2yhD5exxu2pRSOw50eYUAPau5r7E8jS2An4zFiReqWWlfmIvDCL4Sl85Ilq7xtkLtMwx7xjqLZthNCS4MLOB0ZYpLvVustTEIDhNl9BSt18sJKd7qPhLgYQjIxUG13EewPCfk3zkGTknZA5vr46g2%2F4un7gVEEqPGou2HSZzDjR5dai03ikCA%2BvupZoGH56ztTzh%2Be1c0Yh7ziELUBJRulwELYlxQaDFjVP%2FFEv5b7M8YGKixmwNcUg7jfB3DhM91mhqBPOEHImo3A7fi%2BRrXPmyDG6DSH2K1uyWeCbakJYDvV%2Bhu3F2kgMELse0MgFKhkiHFvlYwqqSSDwyqM5s9xbdYDCD09kc9Y5qX%2BVTyow22Bs1YkuiSrfO7kwUMpllxZfUDN5nffx9EVkNwFmN3PHOgSOFwWXTrp%2BKO5pOlkVwk9BhoMYPjUc062x5%2B7BFUU8spKNo5HwbVsLG3GtSQvOpqqDfHCuZnJNUk48yYS%2F%2F9Xz8rL5Dxl4ReyIKVZsLIMMyKvsIGOqUBPZSuJZNmZy8Drim2UbdcNDN8aJeF524paNJdGMBHNZ1t0W5A3F83gND0nyJThwDpq%2BHmM8eKVncYqm%2FnCPisD25YZypC42SZevV5XOGbuuNDEZzAwEMJhRAWG9jOqmKZpw4ExWvtj%2FxQ%2F1RJLKoy7xCnYeA65CNRASNE7c7HuNyBVkRxZc6iWlpFwVPPPekhkClbeliOsZ3Uegp0IHzR2F9g4vL5&X-Amz-Signature=185856ffabc0d96efc02ba6c20e712e2de3c3cf22f3e79162c071863f5d74def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
