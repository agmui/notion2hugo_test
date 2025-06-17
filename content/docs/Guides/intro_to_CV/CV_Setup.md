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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFVDHHSF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAT2zd2WLFz3mORGqVqaU8m8mRJOQf5FH03%2FpKrQ5ilXAiEAmO7g4yTZdVsgYvdvVeMEQ8cXzhJKT8qB6Dm8mLGUUw8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPNBbrVU2Sxi6HHfHircA9%2BB3kPsO7W48fT1YcZXJbRlvg%2FzX2%2FhAwF0YK9NQPGaWDBET5Zutkv3DMJhyGD113YaNg8eVKkPN7pACp1pKHOOfbQGIxtjUmW0UXj%2BBHJH5IRnIhRayGDghgK36J0U5wJlDn5jgJKwF9j02GszXE9irG3%2FFmKnacy9fC6IogzQfZeCD8Fa2y62sJ0bzF7bg40eONonViAvpo0NL6Fc0cPA6v7ImZ1SZ%2BQCKwniSaqszDvErHvJ0X2dI7l1CtI%2Flu5JHcQA7w9r0JhCZR9MB5ER2%2FB%2BBeUe%2B1eH1s3wtG87%2B%2FeYGwaxq84Kzeiwdi8V7vpTRilqYZVq1E0xarGvuoG%2FS3%2FjIGAWMtZ9RSHS96kIoFqdRCuLVs4WocZR01Tx4ArvaRLNQx6BrwpX32oLqFSbLjbA1DHRHnOSXM1plSFz5hrwiob215isGprvOTHBe3GkBjakFMCmxTCYPVd5%2F4VWKBw%2B6fgkuI87X95F4vyB7WGdCk%2FrXQeLSIqNPXs9765755aLfXL0NrhHUfyWZPHrQKsqDa6Ht3g4RcKoW15VqTWv36JCsY2dKH%2Fz8xQscWziKM9yWDVvxtI7kV6%2FswBbpqYm8SZ1lyRZwRMN7OIPWfsES7qwM3770yyzMPamxcIGOqUBeRCAUra%2ByVQirlG%2ForZQK1T0mSdQ53SR5dGRL2Ent1x9iRuCZViP6uZeGPRCy1zzcqpfjPvnS9NNbPB5rxFT2zFdUgB1V4iYkH%2BB5jFiDnW%2F93rGfbcRmQt4crdFs%2BkeN4lNPSzp8Sx9RmFFmMsAR9DSoTC2E6LZkN%2FUYkwQRwV74laEATLwzxd6WIR5z1ooABVUGiEpjQpK3yVcLzUVDupeifDd&X-Amz-Signature=5cec449927b13e9abbbd436e56174f63121a049c969ffa38acfe3997e8770d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633HGZVND%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERWvCDRJ9LKV3B%2Fh5%2BFLeCrla4e6w8L77rVNb9RgR0FAiEAv7HZcb8VpebRmy%2FgbmZ69oG6dj9eyuEaAA0AEllZGQkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP8HAObLooh%2BL9vZzircAxjNdHyeNmpA11aJYWeFqb0xp%2BNSfprn3PeknSC6Gakfa5qtK1HP6RYf0z6rD8VmnP218c2yvWUNhJBhJzcAkLwnLGiPBFTPp52ZMEJLJBOTa8vpzScimCpR%2BxzyRSDDLyo%2FMViqlBGJtY4PeQNgQNYKYhaEY7sWzj%2B1rTxEed0AF7BP12Ee%2BGGbLLz9BMf6QRR%2FDS80ufYK3Zmp0s4D9o6OnDpxC222Ft6n4b7HwycpGr%2F5o1c7bL2KZyKj4I0H%2FHOud8lyaYsoXF8aLPtJKmiNuPtX8189uvRDq%2FQD68ks9t1frLVUulubGkH1k1o55raJbAbYgzuW2knVOopszix30Wm%2B8tuEzx3dmj9qey7P3KoRVtvPnurevs9pQj7ehAqM0upxq%2FvFX91U%2FBQNguJ%2Fu%2BUK%2F%2Bg8Bsbm6nmd%2BaJ0LXM5pLmwm8qRba9i3eFGuE%2BzQAmisQCPT1VEkFhCZZ525a7lvc4AKMk1rMqxevf5d4VKQEDialnGOusnrD1d3SDeeDRxh2pJqAkJg67EQnHIwEEz2NCj%2FwHxmZqIuXCg%2F0nQnGvuv4IGUvIJ8xrAFzu3WChaqbGaaC%2BiAriKVMPWQfapLalBnkxu3pJiiGds1FzOKiKNuoVPYVZAMMvcxcIGOqUBe9T%2BHx17lWaR8pGyj7qegdvKl%2FINos8Fgbu8UdF151wBNH%2BI12In4QimQekJmQ8a5cpj%2FYvJmcLdDe8kYTsHP98DMWzLwMXePhby%2FbVO%2F0Hy4XgbSiO%2FLZJexBynzenukqzQW%2Fq41TF8rTpV%2Brk46rkpeut68PfL8RiqhtXbPvnwETuHyhZgn%2FqbxhlXAqQXfEVAFfALvlXF4wMcPQkrqsEuVV7b&X-Amz-Signature=4b77c186d9e662e3ee1e6fd76c5cc93b5bf6375057769959a39e0c71b75fc7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
