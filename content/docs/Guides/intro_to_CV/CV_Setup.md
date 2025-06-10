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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VLC3BR2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoRGSWhA%2BHJUPj%2FsX%2F1t6q7BodMJGjFt4Q0n9rjT7iwIgJIUHItkq8jAy0jkmo3pgx8hb7KfzSjm2Li5reOz1BosqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjGqmOveGM4ogieOSrcAx26YNorbjc0ursmZQ8BhEbdknsEN0DuF%2B%2FrqG2Cp2%2BITzCWbAsZtSkBNmCOtu4dJQiBF92aCKuGQx4jaCedhTKRf2qmMTRqujveSQaU2WjFQsBdpmhzvyiYx5dLlSQrM02mspyV%2F4K9krdKFCSd6mCiL0pXRLkdfyKiI%2FvV5k9AHqyRRR0OsCZVs2KqSLRxZ4G40EipFDAdN6DJiUyWpvu8Bdv2ju6s3irQgCSBMeNIyMaKg2A88eWXPLopeS4%2BvSBg2v%2Fh6YJz131DbXCJtIE1PEEsimiWp2uV2Mub%2F9eMgtGSE4iZIbYzVKTfRlsZf2LCKHzCsxknczD7Y%2F3unI1AkU%2BVw16RiCmWsMnLcIUNpQD24caIvhGncJVyCbqUschDMy32ZTFqCjlLbLtDhcGQh1KWf9qeXnitLV%2Bg3CwdRzfAboQ4cyi88DCpuAJP9O2sdIFGhkZprDSi9m17%2BmmD6AlJSRwjKABX5aHyrmBdaGb50p0Rg0dl4xJ9cHYuOgfXnfZ%2BHsAJ3EqHyzaTFQ1ykFMMqf9EVx0g1dXuSyicmvY1VMSEL4sYkyhby8R0Vgh0vXsvM6SG%2BU89gA63lvdc2kpu7jWVRoXwUrkpdEseNZFaDjly1KmuJ6GrMLrwncIGOqUBlyJy4QNgtiQpuHPBdoRZcEl9uY%2BuBOtfH%2FaKQ4NEA1OTt5jk7IYCrXUiDkL32aPml6r2DpDhkGPTeH%2B383w4drtWrSIeH6GVVZty6qKqbwQMvQoQHD2X4V83tD13ezWTKUwkXV5Zxscta0YCd8gKWMsmrcdBEVLq2NGNwhGRicE%2Bf6iQIU1vfxMsyJqESOH2rM5pSfdtaeBnv23LeFU3OAADdIIz&X-Amz-Signature=69622f50400ca4d63d710c4bfce609884674c6df3b43121b08a1c10be8c949eb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXBXSHDH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9q2qJoGsIcOjDB9Jn4LMJZnmVC4duufe%2FNUEQgxwV9gIhAOaD%2FXVpvInTYq%2BlFmUS6kijNfVomZuvgZf8nN0kt0c8KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM%2FGaPiy1%2B5X%2Bh4vkq3AM3ni9PYL1z3yHzbTlm8FxObzjnWFEPyIqftAbxmppeCEx6J73VBpoZslm8Zw6DYusv4zSOkRCfvA%2FGlBG6Wd8iej2WT9fzGGU2YPI%2BowfAnIn8cCPgbHxyCIhYsQqxLQ0cFQApEpAhlFaOYgIkphthapKxwsEaVgzcqr9wfmsnLhpecQfmBqry3v6APQXv0rgQcNFsSeC0N%2FV6XdbJ5r1YQWpdKNmO8NVY8n9jjl3s%2F9n%2F%2FI%2BmXa08ReXCWcC1%2FCg2BRghc0A6TyrI6qgs22QCGxXVjVQqUPKUoLGvxcwIIP4kR3tI01RA6HjKk%2Fny6spRKc%2FgxqxbUOR2USEHdOLIUcFx8QKB8gFkmIL4USX1r09wQifLRhzIudxkb0d6HEI7pGMWvdacBNlJtxoIfy6eQ9OisI2TYQ693T5X4Ye6zOmKKp0pus%2BBsNCULHt0lrnBZLWpsmrfrlQ8gBQjKmyMcKq4YOTfv05P3spNsczr5PxPgzZAWmexoLXmh1X2BKmnbm7zRxpAPUc6OpZwxIw8hHnaRtp%2FDLzIrkhTTxp%2BGb71To%2Fhj%2BVln27R0Pn7FRFdtVMF36lgJSI%2FRwaZnqH4Nc6moVdN6%2FyDvsCLJ7Kh2I19tO38uIwlTaZlADDr8J3CBjqkAUk4z8ogjS2%2FU%2F9NtVfctaLcayiD1wJg6eFHKKPZ%2FApDCfHbIP%2BpMJ4gtOz7TLQSV5iTrX3QBuBByCEG3L3MHpeM3NSi%2Bae8D5cNI0E0gNV7V1JnNUp%2B1bZKIfwNnj2beTQaNwEo9nY2FpSetPZstdzafagYJogNycSJzK0A8fssfbkgnsoygmqcGbymCdzmBkM7MP73Ek24hsst2tPU%2B3fgtcEW&X-Amz-Signature=a4cc4eb3941c6f019dbf52c83f9b1f32e0cce0b5f695f245ff00be573a386b91&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
