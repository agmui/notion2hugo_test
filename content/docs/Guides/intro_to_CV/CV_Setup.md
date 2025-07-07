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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SS4TONZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFI2qdRihTKsvcgohk9XA%2FNr0slk%2FO1nQMu1NSXYBcJYAiBWnAHxy9acVHXCGDDx%2BC%2BpekflYpiMonoBdh5%2Bu5ES2Cr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWJfaQQvDneqccNA6KtwD4h2xrgDNEQEJQgdTlnAhKbF%2F7TtstDSE0KvxlaPWZyrxCa0UWANwPRuStsZwvRPScLKKSxYDjue56ddYhT6aRWSo9Y0WK7%2B8rSSfets%2FsQp73ii6IfBQSuai3sYxztSY5B2zuiV3GT%2BUKm8b%2BEiy6jW447uYMCQ8O5R32p%2FvAWeIEN3h2K%2F6a%2F69Zsa%2FJUWMB20wcpfbJJji4mkX%2F4PUwT84m4CSgJ5O9dVX7gZo2MRL6ICcJSOEmhCz9Q6fFbp6T%2B8kN%2FfuQvrfMBy%2FrB5ATAk3J47t%2Fl69Qc8HjF7m6lYHQQnUmv2HfNkTuHBSqcgwBUKO7OXGQ5b6nLKjRoNo81FwWk9HypYKzsrpwXSYGahfQGlQ4260KdB7gp479Rpnzfv2ETBgFLCffAtN%2FdUPCr%2FbeTat9aDeMZ7SP0QJqwjcubYR%2F%2FyPtng0Pyl6PrtzqI62SSHEmaXKHBIQuh%2FNtNOkbaltNpPt8cSJZL%2B68RSB7D7BYU1DLe%2BWelm2c4kO81LXa5E7JYhGeghpiqqVpUK8p83gy6b0rehHJr35M8bIYet1SHOvurKKLp3E9vy%2FJ1iSP%2BVmTytwjCb39sYmbyzfjQ7T32R1HfNRWXv0Ce3vRpBmszdE2uxcKgMwgaStwwY6pgFmQrG1EdF0ypa3dEuts%2Fyku%2BeHA4jckmDDj7%2B8kSqT7YuoaS%2B4tWlBp0KOy3wPxZ5LGBPtErBDwV3Trc6Ah6UXksFTVXaqEL8qOAL4Xbzv5nIufOJ6VXapkdKRkUgY3xmgubNXyaaiX%2BZJh6rFZsnhpNjgS0vaaj8H5xR0oJl%2BK4QG10Y9rnZMTSqY4xtdtR14BWIQQKAGiDfND4%2FvYoyh618yEV8B&X-Amz-Signature=d9d5f27a349bab3b7db6daa287353f75dd18159fe60a6081951d2f17ec975e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWMMVYH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCmJ5FSETVTFWrHUbe7xlPS7GG7xwZdFqdrjZZNuG28QgIgZN4sbhj7v%2FQ574cBrU8Ut6is0FQNeMBqwaRHfStT%2Ffgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBK1AdTuJP2KA4Jw%2FCrcAxIuXFUQUv7KLRQsDmbUvPrRE5YmAHms7DmxfUjXHfBh6ip77PcWZ6IpC8118LvHAD8sdUtvDnnkSGxu3aXvF3jKmQeosTFkGaougp%2BACDIKhnfvMzyIPFh55tem1%2BXTbnwzJ8a5auIf6vvRz%2BlxtJ%2FiUfQCK4EOJcXOgc3rz0iRfjWWpz%2BhFYrhWCvdPV7V5mu2BjMM0QZ6DZrWeClzqEQiHhA7i6J%2BwfXPSWBsN2ZJ89Ej6eJjc4wdpJ06WIsBivOPJH%2FSJjvhjL7p6EFQ8rbnHuSYg3VL8lCS3bfJHFcCTX%2FvfZJWZjexJ%2B4YgE87Wmd90h7o9A0c7z%2FOLsY8Syi%2Bi2tcnepUCAG3mh5yDeVdFbqg7mLvZU%2BMQBkgUxe2MHQApaAQv0LEgun9%2FcXoXYGZU5pcKZ1sjZAGksYHUJUL9ZebU3lmzHiYd%2BlTzGfiVQUbYEYujvDg0US5AxMlRo5VhDEDOot4axeQsQzD2DlUoi8Rkp7C5nTW7%2B4vZ5Vcm4FV5tQ4k8d5xQbC4QaBW2lVZjr1Hkdc%2BnJWZ8fkQ3FHvAW6pZe78L09X2qy01jcCHGxkxwUdOZoye8uKwV1aARtC%2BO%2BbUIOU4GuEnxvSFfsB2Lw5YgJzqIG71zVMNWfrMMGOqUB9QjaLmXFqOTTWmgktwLZJs4VqMGwEGZksB0QIJ2KUgmy5KJDeiAYVL%2BYvg1z3ne%2BZLlAoLQWmwN%2BqcnWJmjCsT1W5qAPrRS9FkegK7hoBs%2BViEZDZifErpZ2nxAb9BRORGN4cFPQdxOjtXTtrnhYzwQ8ygrsc6jB9c%2BCNqcP6odROtbiQoaFcZRi4YJs8PCEuXczWcvz3aISKBKvLur%2FJ53lBOUM&X-Amz-Signature=29f2ae9428196bb7e125b4fb2f758bad38f5066f536bcb72d87e1d5f1e207ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
