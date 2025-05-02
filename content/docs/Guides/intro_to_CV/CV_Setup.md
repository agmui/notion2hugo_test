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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCYSDVC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDXkXkbAI3d3S8DixsIoWiEOZDy2K3B8KuhwldA9eMwHAIgaSbIjOTCToXfXzMrRFrb6S3Sjk4c%2B9yepc2MiiiTVL8qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYg7LIvp6P2woL2iSrcA0esmmVqMDMDJEWPzIb9prfsf2OyD9tt6Sm7MyYFTQQ1qLY8AyYEh9hh3VHtVmviwFJg9dHKTuLpABP%2BQPWxO3mTMLbKm%2FDK3vwOPG44YjMfF7yFUpnsFYXeIRKFQdmpt7BAaHVi9AQuCn0hFXcjG2aLknPzmyA6PfJom2BZjT5zV2xbubDFwNlJ29te6kio0KnS%2Fc0sW75Jye5vqZj3EEmwOD05OMkxxSaYHrw6QwZUMsvnT8qWdN%2FiMPfdgXuRO9wNt0M17X2XojRyUCTvZc7ox67trfcQHLE%2FFZ%2F5kAoEtleTXtJlTmxaelA2WaAvWS0tMW2dxR2mARd0DApN1TbMYn1309uPC1S5LNgM1GYa3JuiBJbD%2FUeQF8V0YVHv7XAkLfXR0L5hgwPXH9JIYnywZWC9b%2BoYfHGkwaVuvpbC1iFERjw8EuQV5AJH0%2BD5S7NR2HBr4NVzaabANvhlQB1UBH2DdHqqft5xlx%2FZ4bD%2FCQoGXx59ELZ%2BY%2B2WBY9Eopc6cvhtwasfSicwEXzftX3kx%2B3vc9ADSh%2BOFyST0Zxe%2FtCDaETxSNgqqCbEu2rKmp22vQVAms5ZkMCmT0SptCFu1rFFGFCJKBt1bHnPeoh%2B480n8nxMfoUu1tEHMOPW0sAGOqUBbfJI8m41sskfzlQP4LejmgVAXh93y97%2BRqABX2C6i%2BrMdd2kzBmXknzJiiYPSOfyE8dvdabrSpdNS2%2BPBmgx70HSfR1qWZc1pPdFOAvyPKzC%2BGDnt8vXcUWy8ebUqWJC8pXanbq4LajuyH2B2%2FIRThvVrLcM1unS6RUl%2FfleIoQTqQKrUj5G3fL210%2Bljbw%2BauBS6q0IcTqVInrGXtDaIon4vOSW&X-Amz-Signature=0289e3b5f583807c6dc54c6caa78029df0752991197f9a1dd8f414e69fcf5e9b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNISEJU%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGKhbx%2FwEs3%2FfU%2FExodu50RK1icbAjxSB%2BsXvifsHVZOAiAEyirHsh8qf6CkUv3wXpfD9SeMbOcy%2BRHc0TwHR%2B4RRCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwAbJjsXmEmmWceIvKtwDbOdjNMVG243YJG1XVpZE6gl4ckbPl5FQi9wG5XNeiRa9YhATeSfzII2G3gOlnN%2FLUFRkJViiOsgx5yOluVEnymck5mRCPQ3lCDaoCjA0EQJ2sqN9RX265GGkeYN7YTANx9bwXHIOtBinnY9Jl%2FzVbHZqqNMKJJZmDqXqxswRh3HS9kfLDIyrXZGtMywZSBV2XJoixOO66y%2FcGAV%2F5%2FEZ81C8NPABwkaUiKgQK2jF19vZspgrOaIsdsfkfn7PfHUG1wsTQa%2FmN6rAgFDpo7LMYSQd1N5OIKtA3xl7IW9EoNUlxYxujCjp%2BMLLlyeDPsgx78KSSYqB%2Fq3GPnf5iRZ0nZC1FP9FoujZsvTGEDxNEF%2BSFXtyjZG8%2BUoEKtDttCln96dVQhHEN5%2B9oAZWQZf2ePwPQybnVNY9GVL3yohj%2Bb5Z5Gh9KRWhnNIutNY2GNUyUetAAnqUfntsmZ2vB%2Bk9Gp1F%2FCeDvhI7LTc2Yqv6mV%2FBdFhFdf76pgPrOrTyppKAXiimczli7t1j9%2Bt2okVnSmzTnY43zfsj4KzU6PSF1He7aEM5eukVMgNN2PP3xLCzFAWQkytGY0yBEYrCgpmVdqpXd2oUlRQCUuxjME1nmyVnQcAGDTg72PBkNcIw69bSwAY6pgFDsH0l29gr%2BtrbOgiG3oMEMUDvbKp4dabZkwFMK91jAy21Lez%2Bds0ZTeZbh7P66NKLWrNm4EKWEi0ml%2BYHXOl7ujkc%2F2btsflrZ1kbtsaoNBovGhmRjCouFPEMF52iBCd%2B9eIlNnpG7IK8NcZgU47a0WihynqwRPK6nnhFAX08e6BTgLw5HunhM97B4wFchTq1fcTMV0dCkRME%2F7CfG%2B%2BF6TQIUDmB&X-Amz-Signature=99418b7ececf78cf9426dfda2f8e2aaaabc175e0c8ab1b75d7cd0870c8b8142f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
