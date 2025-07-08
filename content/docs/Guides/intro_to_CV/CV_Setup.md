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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC7NKUCA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUUR4DvZQcJluFzEmU%2Bjca3ioZ%2BJAIQxieWSvIoKbuwIgShrHDLpSgDjE%2F%2BIVQVYvzP0CUyNoD0SDZJS9E5GwZwIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZGYkDLLuDY25iaVircA3E2gQ7zviNoYvRauUCXTaOV7We9kV7hX9NPz%2FnyRW6uYl%2Bxndg0oC%2BWyDT4bH6WRqMsibH92DNyZxu9K01MTTyOn1puiwqTlviL61vdDMbbAAPQpSdieng4CaABVwgyp1UryDo28KgQPp1r3W2eeesxIep5d5JSTn%2BwLBBBpBSUyQJRZjn%2BnhzDYbFwKFfixwj3Oz3Td%2FKmr%2BFUa5WrhgABH8Y490rINFDXkTr6I2VxZ7fuChfWY4Cjh0%2BiyWfgWEjHP6ZmZLRrcG6nir1ThokG7Qgqd%2BPQUI715dhvgbv9%2BUBdSqY66aypReSVA5%2FdiJQWgg%2BIl3PDbtZmxvC2BEXSkvQVShlnBNA%2BSlUGHUp2lcw1fHAtkBHhju0%2BGfM4RNumRty1sVILk2SUnNOW12iwGX01pC87khusicJnTGz6E9olNV4nu04OHcLCcKzFlXM7li1dEaiBeH8yoS5lWOqSQBhju%2FFetrWNqv6tuJDzfdldWitPsSOXLLeIByC5vBpFnxkMw1vJug0OOHjnO7QLvkUwyXIg6o2TJHin1vVYZaTMI1YGXBJR46KDyXTJBUqFjkmPnZKSOhRUdhgesT1Gp5IbjQwVY9V8hy%2BwAOKHXfjI2y59Zc9WhOzvMM6DtsMGOqUBMaoqiVs00i%2FTs1LAnCE1IL2iJTjEaH5tPotkhyMShx3yt1zfJmb6oSCAPgHb2XnQBGLG6gLpV66UZq20iMZgAXJ1xdVW18%2FbePg4dUK628aCfLnbLYLDnTG8pNClGi5MyGBbCs1V%2FoBNztkjar8%2Bl%2FQVMpghHe8HzYFCWrjqhee9gbkXHyodUktt2njiWlChCcwMT61M3%2FPq23ZvQ4hUh0RLj2dB&X-Amz-Signature=de50b08bffc308d315c17cd8d79dbb11eba58d2c712b2518fd402096ee6d8e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JATTBZM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzuGMhcZgOrx0KaY329zX0mBVtK08vjGmGJqZNjYmj5gIgTysj1mYJK7vuy6e67PmhBZms2kxwuWMwy2bHxXq6RgAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBeKZV4%2BD2Mbz0nySrcA5URP%2FjL8S5ONbN3JE73G%2By%2Fxn8nS8iZ%2BiodfRbtfF9SDQwYxCFTzKH5iEOpumyWvHWi4xs1ZLaIXTWG%2B%2Fs%2B%2BZpUBMbjWJSFI4uQ7ZR9vHCHxn1LpV6BAwY5erG7drCIay6cgYsCyL3HJ72g2KcCxBNL4NJIn3%2FhnmzQ8D1nr7dKMW%2BGqr4MK3r%2BwvzhUxp1L4WkecwyeLSwesJFuhd5JL6sBRiJ4xbcSsK31UZ9hrOb2KGEQxymUggMv4ccTA6j5LKKOg3IypBl3FUepj2WMA416dbSOzI5ifPgov5KEEIdt206yy6Dm339kHbblbObXX4EKNEIKz9qx3gLFXnBiizP%2FEnclqVNE8hGSPcdUD0g7uBpGhEPepaaQeF3ueJnDernkDdQmZIKKLZJ7RlJiAFiAuJWkGZVwOXdOcpEvguQ0mCZMtHbwtkQoPrWBQEp6qEXTRKeRXXlsk3K969AIBVrHl0FZFxmnw0LvcCqX6oVsTmMuEtXqce90gdUaqnpypM1Wo9X01%2F%2B2gcgRNpvmsk1LgYJ%2B67hmEDhSCahYCcfwFyLfMRTtiCrCT%2FV1WCOlFjK%2BWj8i7iNF0W00D%2BF%2F4huXuCSszCZRZmG2G1iu1BqE5VQMtrwDxgoTfBGMJ2EtsMGOqUBrSqVboSrhmhEqMJwmPBtCEmE1oGKQW53Ik3g%2F0T4ZJa0RBZVvugnyd%2FnE7KFVy0ffYlc4jQ31%2Bm7TTO9QBEAk5ypxPSURIIbntINeJ%2BYVIxs%2BPbvYDWJXspNdj5v%2BtLLU%2FFqrIQ%2FZrgqrM%2FupbpFbm0iE6dKsxDEzy5vRNs3IzJ4OxHrCaftv0x54lWGybpUDHlbaoK9hnBrnUvARawgbjHQV6qN&X-Amz-Signature=c0155a07976133d28320b52c8149c1663220e4ffa0ac1ea6c964c7e305d3955e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
