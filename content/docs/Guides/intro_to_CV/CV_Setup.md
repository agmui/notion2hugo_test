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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVWZQKI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDO0HiyDFo84kSbNwXjnoR191YM4rMB41v7E%2FAN6nKv3wIhAKyeo3Afx7ANRUZOytsJoZze1SzrhCtT5uBpsJ1sG%2FgrKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrhi9vaWDtE9sGwzAq3AMOFWug5nLfUC1YJPajtWFaQgKArM3x5POY2CCPFFq0CrtFN%2FlnovGrZ08kK2icm6CJlXzztxC559hc1%2BKkJKLF25zzhZFoUY%2FH0EcJ0WMC%2FP528pZAzRjLd8Wh%2BOmPkhijjiKwrwUQgXKM%2BelHbdqUb89Rul%2FmgwcB2xdi1EpiyJ7JJ%2BhBm0W27moav9H4Y9Zr2kbzUz0XmrqX%2F%2BX7rBm9NcXI1G97lMvKb7FgHCZx5tUqc0AkyM8un22Y4zNh92%2FP%2Ft8eXs3d0VRbE8VwORIBfDfCmcTMmJMdZP%2FBo%2FuKqMuD9V2xHNZHHKjO%2FglXeeq9zqcCViCRkdfzmY0QT9DEdTMPlShD5kZn7e7Q9TMvt0l0Esnylu%2FiEk1saBujX6BzZZkpqvdJH%2BxBAA0eh6UMhC2SBJPgxqTDmSxa9keoM7Iwt1U%2B%2FpmaagJ%2FDMVks1mx57ERegL%2FVOULppc3KuvoVY6wmOeMcl6c82zAj5uwGedX5F3WfDWXVsYF1%2BbXcQGqm7vI8LieYYjK02GMfhG0RToBP%2FTuCXgc3Ikbhsmdw9cjzqFbZqBg%2FBTUh%2FOXSZOS9uNJmQC6Mj1Z46TJpvpID8QapI1MorLKzuejnzayrttDzRWWLRpcbmKBKDDikIq%2BBjqkAeV9%2FZmdlDtjEptLGfv3WB3o4eb0PtwwovdDVajxtgdBzWJplzXvx1R9Ga7GgSgJyRTQljRuILAPp5HDwLpp3MqKBPYleG0hs703%2FCU8kJ4MAj1T6MGDUjguk0dIclGmiBBMYbdQgw5%2FIS8GMAwAf%2Fz%2B%2BCetv3r0a9pEkxFjfcPwbgbku2%2FatpvD7sGteK%2FBuxksAMdsI2j26YBADc7xYX%2Fauezm&X-Amz-Signature=ebe52afdda280e1a84548ef5c03374d3cdea45d0672f26d23918ed4cab5c4866&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTD5DUUC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCuNoHM8xmU%2BNZvHfdf85AkvMM5giXklBgCj0AmDtAQhwIgRInSV0Pw6t9DYiXFGzzMRGHrmU%2Fecm3zGYUGpbl%2FzOYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITIMyw%2BCkEh33YNQyrcAxgQhGclamwif%2FJo83VrrnPtZmS3P%2BuKmGjHazLDpXU%2FsqFg8P36yZjoh1nrvarigTGOKI%2BPdQGkx08cJmzzyUNEb0NMdxjEcVnU0C6KwcRDhsYA4OLa1xI0I1%2BUiCgYOjXNrIun25LX6o9GbPmLzV8YOthWkDuY%2FAMOc1EPlsCVEustynxIc3Tkok4vTB%2FLdKPkId36K%2Bcy0QTRe%2BuMMnVm%2BdYnGv8GUtQgA6ZT33%2Fuf0mw5ssUq63Ft9u9J5hk4J4ZMyJMxbaBpp3W5fE5uOJhbxib3ie5gDrirA9sXGcVvASCcvzYeapa4YfogHieZxG1FMaCiJ%2FYt1AWIL5lqBtQ%2Fxtw2LDNv7S%2BPPg88nleFjOc9u9Oil8hsaEK%2FiqjvV2i6olDFJ%2Bdg%2BpUmTG%2BS36TPcA08L%2BQlFTUuWUwgB7humZRcYl%2FOi8BjHrMurEm8VyZGB2RS%2F5PkaUBh7d%2BHebd6H%2FlWpo50vW6lTFbwEqFSFRS3sVrIg%2Fj7eXoPbbpm0yGWzPM%2Fsg2W7kVtz%2BL4xhryruGf2KR2PQNFmdL9%2BtAQhaXjejPj2qfP%2BaeIewAuPOeD83xmAmC6TGXwuc%2Bm3uVFfAWiqFtj0Lyy1ruWSY0VvaL9rxYHvd%2BcNuJMNuQir4GOqUBdUhPlwjRYPUc0MqyBSgjvSJ3j5%2BHCjexpl9hGQCCq%2BMvVddvHvAbQzc8duG2BWFwxfGW%2BncQrGd6VgUd9pGPZ59%2FEbJbGEk47g7mbSjN8KC8eqOkspHu9%2B9gH8fLOuNIKSaBtwmHti75m1JjFsld6utcAK3YIVmzOL7vaBeffZqqLY%2FdE83rddOpmZvjn0MR3I%2B3ZndgnQxYNcbZBWGMXAniRcgp&X-Amz-Signature=772e6318f2e9c2e647d0f21a5b89d7a0f664a347ecee3f3e6a37b096db680b83&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
