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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SSRTZLA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDei4s16U8R%2FQMLfX7Ua4caoDBA5IKrITE2drx5HLe3wQIhAJ0E2aDRuP4560imKX6B2napwgjb15VlSSVN0bjebNdgKv8DCEQQABoMNjM3NDIzMTgzODA1Igxgfh1cKMa6tidlvQoq3AMdnWJHZEZOOVc3EaM98B9B7CvYflJh6pNAuTDwpWShXqrseE1YJzEE3H0yvzksKRSGCq8est1CNHGcCP%2Bzv8llg2%2Bm9jeMVC6Eh%2BTrmmFfvYKpNvfdi2jk8zOyEVoQwfHaMxaAGYcnh3vYT%2FzFvDNEiUgDsxjO1xx63GU7JVlLzWfVEnX0xKejclSQoVFQMRtiKWao6sSWJ1sBXoLuu9km7nx8daYQ8YYz9IbhOLPqiYqi%2FPaLAkALD3ypr9U2%2BPIbU1wiauvGQmVkLxlzdBP6qyGeNGtDRYzkhmKDUtqJFg5vCMdO8nvoJShcD8%2BupF0XADkK9qrJTFMGBdkJNsNsj9fXfx0miAdiyDALIXlox9yDhd1rlG7f2pbj9DomYe5ayZMm1ym5oSAgHpLrifJsACyGPmuWAuhUjCbUXSMG7u4T0o1VZz6rSklc2vgYy4PMuqhpLiFDXjJM3FbGsPJuiOEdS8Wr88oAWFSzBGVkPh08vYfBNFYYIa8aPdpxnDUI6r5lyzLxJqv5b8%2FGo%2BL9Jmu%2Bb8Ad7Ghi7t7uqHNyLMx26i33P1YfxIqpjBGlldLXcN1I5DUOEaLiKgnCvAVOsSMuIno2LC5aMxBT1IEPN7Q3fUhax23mcRL5RzD07cG9BjqkAW5JvpFALJyZERtanAMTS4H%2BcdWukzH0LDO6srBkZGjWJtVAeZWE3bPC0sEvr2lkPIwu1%2BTGlyNq1T%2F66JKb14HHSoa7OQLIhBIfpUceqtRwJM05tBNeWa0bRFXBuZJmWcDGhs1etXBRRRB99JvsoOG1rSyCg0RGxgaNw%2FVqLZmXEBc0ZhKwokiBD2cBVw9IOj%2FkaneNQkGf6V5xudRO5uM65dgd&X-Amz-Signature=0f3189688ff00948da4d8455db9950cee537c77a78a7ea84b0289ac0afa5b3f9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGL6V757%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD6v8s2gzBN%2Fqjhca9a7LUEvetqhwcWnjk3pTy7YLujiQIgacH4vDfMrzqkzkVNJ4C5kVwp3FpNIh6U1Wn22lBspkgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBNKLIcrP0GfrVKSICrcA24pQGJFKE%2FI9017i11CzsESH2f0omO%2F7p%2BwW75Hdoont5s9UT9%2BySjfCDascskdvI%2FxTM3sPuwMxwLXj%2BHiAF6hl39ak0OhTn%2FUtNsoTlQArSI291LTS2a2qqlAS4XGa90TIR%2Bfrm3fPUy635ZptltI7MascfKyeRpU7%2BhUHkQygP8V%2FUiqzHBhXPUiSsxcu%2BuQrDA2U61bWcVEZIfKSy0L9gSlQ%2BiXv7%2FnTT2U6nna4Df7ujCt1ROUfR3Hz9Z%2BgUf1bAaFiWYf4gnB0HdAnaNaBE7zzqgeapdxgpJhozuFl2i3fBF%2FPyFMlYS8mD8i8bJnlV5nZ%2Bn1ZgP8mGr%2FIgkwF%2BuiR1JRFxyBqzbg%2FKSmtJ5wBbZ%2Fsp0lQaSppKNSII4EHAcqnqJVK1wUcm51pqCKwWYjZuPiST2I0Ly4uieunz1UloQc4RPTZsBbVHh8TrtG7VQGZoydVxCJfwPeLu%2F5b5IpDV1QfXZzG24cEsm%2Fs9Lx9mHrebzCRI%2BMmM1Kuh12HcnjELATATRV2bZ%2FyM3FtyyVupk4zhfoTYFb0RZfGSXcdBZgLckIOtRzUnua6uGT9JGlLsOtZOasJ2lDlmOOYL9IPyS%2BeeDCQ7NNaWvyqSPyQSPvMTxNgXwrMJntwb0GOqUBFBrSdGGsDJW7yOnUvG82m8lcv3uolCrcNCtB%2BRqBzr8mvuHbtTtqpIhTI8WUwGUlQkFSWitMAxG1MEciNXfgYSA8dqcXynLGna7nlW3JeZGBIc9lzFbzzGLjiqWShajOJd0T5xJCe61q9f0Hyi9gf0t1yMDOF8Jnuo59XfaUPRPKXOvJXS2InEtnLIFwqtYL92tWu2vqmrZnBwwLJpL5AHep9Qi%2B&X-Amz-Signature=855f354f0b74df82e211df16fae932c6ce64ad1823aa060b998d3a1a3b29b1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
