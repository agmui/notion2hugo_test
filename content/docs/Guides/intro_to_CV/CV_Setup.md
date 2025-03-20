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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJCTHPC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDaW6zBT3SJmIjm6lFJdDrFpbUO2UEYIutKWJcOkshnUAIgQFbxserfqfer56zJMvaEOwi6lwoYKetcGWNQ7acvNp4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjj1xXce0A5wQUyOSrcA5SpNZcimpJj6u6yIAUFLNABrpCDc%2Byk%2BQqUr8Zu5mHUNHKLAWHt%2BM3wvDVGsPZn%2FqdFrm71OC1bfxTK1qRTYV0L2L3uFg4HV%2BnTXQcEPUjkTjEVrRKPLyoo95G7TLyyfkfYjGFDdLdvjpKFQN5HtNSSwu8yoYvfPsZBye7g7AfL8lOPmGUuG1CiCOIoWzi%2BwdLDRNer71o2fEY4E65ZW%2BiJTm6alEG7sf55k8XnSthLV6pmbHSuvxHbECqWb5l9QuO%2FKuYKmySIum4u3xU0zKo03ZTX12i8HO0cac%2B6xmDp5134liGX9zQWxleN44H1j5r3ckNdU%2B6AeRq27wcHiL4QzZatY0HDaXbPNxOPFo1l5yCULokPcbiHilFbGje0hiQDhsMpgxGHZyJai94xdZRUzQhIXMEOCTMESuLzKEtctdiqViYAmdnMohBR0S0JtfYz3t%2BAKkEtm5JVmW4vAi4XRGKaOaIEH2OwcOy23nzlsu%2BfPo4VF3MyFiLABG8EOxv1kntj3U0aL%2FVkqQw3HYzTuJk6sj4aT2ZIK02JYhq0%2FwQe%2FXeCz77BmxOTcqO9TFcazeIOmda%2FnCsoyE%2Blax4Y2QyuYZamSH%2B1FoYlytXsMzGzq5%2BStpN2KnoWMNOm7r4GOqUBaFOa7fJkgLX6oCMelRxRZ9icm4TgWJJs2frxEJixIpWmQVOhuMDdC8QRCOQhEz3NqzQ3kq7BLmSZR9mc%2F3YJIw%2FJ6fXzJ2Ze9%2BROSTRDngVvlIpsZ5BbCwVm01ywLYwODX0mbFRW5hn8NbsGUJVzGld7T7mHZrvRL%2BuaAvlQJuNTxiapSgZHPVEe%2FZTydkP9S453BahCQtCuKcNFePGSpyGY2sxy&X-Amz-Signature=39e002d3dc8bc2dfe5a594a957f4b190e413dcef3034b45be895f2f23aed0a56&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FBPKL42%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCPTp6TApuPz0J46ikcAiuXbwJrHliKuLa9UTyO6FVoKQIgLDjhm2GUBPaDkRxNPrFj%2BRDcv2cxGq7EZGDWt8kA8qwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1GUQdjjWnbrbkTsircA4nLihGSYZDWSMXKm4fgCETN%2F%2BasvtYCsDfjZ%2BWQix1OMcGV8x2TwXeYjKv466%2FqACu4khy2lD%2BF9JAjpjtuzY2f6c50Ie%2FkvnOpG92THmuz2gY9Ny7rw7PiLnG8kLdYLtnewMNU5V%2BSnry3w%2BzZFL3bkrEVySpPZetzbcvB5XDs38iL40kNvF1RR8hqytKia8PEQZKpO5ameEvV3rl2vaIya9VlCMb%2BVbXtRLFHg3sU0slC%2FB%2F5d%2BEw9X7zcPKYQYVi4bcn%2FSE%2BBDhQ%2Fk6%2FNg%2F%2BO1I0rYusj7exVZZmLIOAB97ipenZ8tEUQ85v0A%2BY3BMrmrS9cBwS3XbpGpJTN44xaVwm%2F1Ot5MoIZdoUmpCIvLAkG0MoOX%2BBS6xD%2FcmbZI4PVQcwTSJtov6VUr1n3yAN0VQ17wDecHHJYUhWdzM6pMTJ6eaTK9iqU%2Fi%2BxipE6TkApmmPuAdg4Wu2MMdx3RgwvVRHGdDLYbqIRu4RgAbtVVeqCGmUx4bhFVP%2FZCwTq64juK%2FglFseJU8om8j2e5pwkT1FeST2XU52nqSVgsWTOW3zAuSa3cYnECn63tP5qvgY55Sy4MPFPAKVRue6wG3oAuwzm27TATXecmY7UB%2FvzZhVcWltQ4Rp9otsMPWn7r4GOqUBzVvUl1xl1EWnIzaTppJUgYtdkJu%2B%2BBBBe4WYnPW0hHbZuyQQ0JboD7cXDRXcZZX%2FrUtPs94idIv4389Pqi%2B8MreMHxsVwZ%2BmGTNKl0XOFCJVtJ%2BcGiEzTgSQAVYzYesuExI3h8kSbb9gr4JWDNL%2Ff0h0GsOlfhOoO1FgQ23NgwmmCJlEvAIgioR%2FlSwJzFs%2FuTZ3BGHfJEjNzfgHS8gPmgUMQVGM&X-Amz-Signature=f50bb761551d5c44bd5ef65f775e2cfdf4a3e5a86ba5ce3256b2699e5818ad45&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
