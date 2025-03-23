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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZZOGLE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEQTK5uDeqELONgd4hINiwOxFGn5QtG7SgHpacJ5F%2FQNAiEA4M38Bq3t9TuyqHwVqGPaPFawPgfaD8DE6rQJFf5q0EwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4%2B9cPrmDN4YtxHTCrcA1VLI7ctCO8iLgCHnUnQdYnO0fb8aB5VbTVlXsPB7TE9w2s8afoEKBXvJsKKv9ueNB4gzjrWLfG1YUumNFwJTVGvP2jvWqUCNKrWqOokswLD6FIlXw8c5V%2FuOGvPyMKhaC8dnL5nrA87gkSAd5IFdvbpRPbxe77TZVvVk6Ed5OlUvrnzl%2BUsW9%2FIjJ1BuMag%2BaE9xkh5Tk5CtBFyuF6rwtht8UhL1R6EdVlTdzVYlhQ7WHoA7U4frDbpI22n279bc4nD3DuGp8suW5P7Wu%2BNg6Ik8ETfVRi9DEi8%2BpEI0BVvOU1SjRksZmoYRMXcCeF7XJW%2FRyjYgvFfbT3J4MpiIX7AXXSbwHJERLF0SNuVkbnk3vrY0yM0xRhLka6hN2co%2BfSXDv64cCrg2b3voJOfcRWxt7MlGBXpjzSaDkQBgxcEvvN%2F3d%2FjEKW7TDtGSf7L7%2BSalk9%2BgQ1tN3c%2FcUTIGv9mroikuYpzqGlkT4dVZQzUVNvoJtUaAxG4eaqPTg8W%2FH3TgNcYnSiArT89wZNl7wK%2BWu9mSw2YWhdiZQveIrle7ceBG%2Fc1AvixnkhkpRb5d%2Bi3QBo%2FZ8ae0NyXKxW4t%2FNqAKv6sgFm7tFzWw8Tb5Iq8IgoxU8ETaOsD0DaMJPj%2Fb4GOqUBv0my%2FTvswqrea9LkcYxYvt1TAOpS0wmM8P3vUpZWkOS2fCpKI2hdLjgQPNTcYdy8HuGkSXEaunR2zZiuuZHVCmSkWIqfoDKyuaK08SjcXatzfpWzr6C3M0UQWTXkmLyYvnbxXO3HHvK0GlLCLIYbg4npMO%2Fv4SxPyUgxqkFTaZbJSxtu9I4mRiEyWaScYLs7vlsC%2FLZ%2FT9HokaXkj9YhWRBViDkX&X-Amz-Signature=249ebc900bd1bd43ac9ec0b325a9c1463766f8a7a0c5ddd50a7f5479a4b8b6bc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PHHNB4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIChoTOGp6igIADe0miWitwMirNFL5ZQ%2FiujHdGCNS7oLAiEAyshl4L0OzDPoz%2B1fMviWiw0U86DbLSqebtijI6cECNEqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BqtIZUClp5Eb%2FxGCrcA7pLep%2FtT%2FhO9bT6EUGPg8%2FFb67JeaDD%2FbVlbUcnXcWIcutAizE04TVBw28RzouwcMr732ELWVSH3kWCbXDTsRZy6YzjVWz72v3cKoehHd6o1Jg1ZyjdS%2FKEsMzkDVreggpjJxb87EG%2BApOtBvd8ZHwUxB7mo4WyK5Vbe1TrhmUsefppOdrLbtmht87TUgxOjIyD6kur9u4DZMFPM9QfiJXOWPQybsbYjl1Dq90INcEOctTFfEpLYTebG2eVMgva%2FIalxR4HMTjXhmf2vW%2FhU%2FN9wRl0t%2BbuP49Wh%2F99WfGqpXy5fNyvQtpViX94RmoUGjRaFYPq9HmG2yqIYms7qV4z6HO0Fs%2BP8VkDnDmWwY48m4Zcn5e%2B0Ip0df67Lx894zhl9J97FC0IJRvl2XOmpX0ndIUnghrdDMmoJ2ckXo8yNJf3tggevOzEeg5ABKwscN%2F6xPvGVex0HOdRfGbuYFnMLcd7TMsNjpoUd%2FC3lIns1xTKYNspUnfFTj54Pcea31u8d68RVEa7Zsq1MkSDIir0PhXozh2rcvKhL6uIwoD6VtH0OGG8NKUfP%2BJBVbscvtH%2BcBkTqiE6UwQgIfMrE6jiQKKNnxTiQIKqvaEcDVSAuZ3Ky%2FmVUsNouXKeMIvj%2Fb4GOqUBqm4jdPynhHqsjmllnj3gZHMwdQyiZORq640kkhBUqNVBsddwIXTCCw9ZHgg%2F9HlXL5GNisjpwNlwFX0Q2sxtLCOc9%2FwuN6WWvDJhYx0H00ftZb7wJdwjvMluEsHoziBMx6Ssu4x4xWOgpLZwMIvHj1ZmgVAt0V3RUCTqFTLo7Ow3GYZRkgjSLjuzCRXeBLS19J7kgV1KoDqXrzTTxABvF7Dp%2F3aO&X-Amz-Signature=6de56a09a49ad4ed97c5f94ef7f63a5efe4e11e05eabb1c315f564aff7452daa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
