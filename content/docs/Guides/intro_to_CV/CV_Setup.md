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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFOIVFMZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuID4QBNQS4UK0Ei8XwOaJ0LqLwoQRdhtkqN6HFZSA7AiBaWnpMyOOeh19y1J5MLuVn0D3Vnx5KSBneGk0FsqA4sir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM5yVjbVWjNMYtfz05KtwDvLo3QerZ37XXs7Qha66RF7nDDOJColDlHTVHMqpdm5QMmT72Ex2HObvwE55BxO2BGf3%2FJ4XfnAZQCk2FTK9lPgSoaYhh2YoAVdsLdSFRbwBoTKIOnDMOxSKnj%2FrGol8D9LNY97vnmfY%2Fi7SxNg4bbfErNtCH6QMZfxOf27H366ERL5G7NRmRKUjf6IE2bhnuCWixYDaX5c6CuKiAv7KTdWvLSmwddTBbaCmz9s7AbFTy9iII%2Bn1D9ZrlWXzrGYjb8BQui3FtQwL59%2FC%2FN4wHaBa49iaplt%2F0hb9MnTJ6WP2bTsoLmdIV1CfYMr1D3XJ8z4DFHcEAz%2BlJ1rvPuR0IU3zEOC0DnIWHd1IP18QhrFig7Yg44WsiynYzsh9jzRw9urML0GIy5qCl3uenefBZWDYHT%2FVK0JUxMVZ%2F%2FtN8kCu6YA%2BEsB5IGJmFGmpXIjcGKOrgDJTR0VXVXbjfqnjWuP64cSe6BWCrdFfiRrGI72c9eOF4cEic9eiTgInOXNIbPaGbwNBaLS08baez%2BDP%2BLIou31N2MFBrq3GlgUL%2BHh3BIZ7J6oH1m4CSNNWPXHDuau5TBldaz5V0h2XTJ5dnEUUfFsGQTol%2BB3ylE3qZn%2FUzPLpl28UuA1hrZ1wwzK2CwAY6pgERH29VGrU85jOVCpeZDlWej8z1K7kkWL%2BV7reZx5L37SFSj2fiT%2FRbbe5Ypct2kuxeIQ%2FgrtF3azRBf5dOlRKqKGZRlDGKaHbBPwTA6FyN0xccAaCaf8hqduKiL9ap8TbO3%2Fm%2FPWit%2BkMPoe%2BPp7pNrukUfpRmeBDLiWdb6tPWUeKcgxU00FKnRG4rmNDEgRXLI6%2Bu119lkV27O%2BU00P7tL2v6LVd3&X-Amz-Signature=d02f60395c9489145d79010e232e7d0fe5d580923abcd22833963824d780b4a5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOJ5Q2X3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfe4oV5dcaK1LN5ZjuNCWRU%2FWPLVx3qdqwriJZc4faKAiBj6R4qA35%2BYpRg9coYyBOshz9IyVmGFusLgtqE5HbD5Cr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMZxCSFPmrFejZkg4KKtwD6KuQFbPyBKiFwX%2Fd6ojJmc1EgwZpuLaZIBBXaMTyBNT7INgfieAuwc7tUrwfsxYJU88SXuaLvzPUIEFXOVwRvLu2xIzkW12bUo%2F3b9qqM9UgU%2FKre4x8VkuS%2FtwPweov%2FKVOB7Mm5HfDb4jwIX0jZEeeVxkz11n9CAzeQ6S91vbPdClZEpY%2FPDeoe%2Bdu7ge7qhFq3m7omM3rLD6QcYKQult%2BBRr7frVwWiWb5v1FOsX0y3hBNhRkeguknVtLpsHqIxHdj7fGt16%2FOkfB0CP1AD4mwzovz4%2FbdnhYn66eqiRyc%2BVhRF%2FQa4Qwwbh1c7bAkyrdzEJfq5%2BsbtM2z823eS7KsySlBsN3dfRBK6ipoiHKwNCpfdC1b1oMCRNiCU6YOSQtlESlkfXEvLlyOzuZ7uHa6fpvWR%2FX0VXoLDwv5nrTvueQbF9q0yFcmcO5OJjpG4jlxieTEwNGLEAJX4ZjlbA20NsW%2FjGD1BkQIKOYN5dOWrkjjXXrvNqe%2FI0GVUQAMP6mTLDCLaPeYVhP1YngrNLVuCYe3jUO%2B1MBOKSUjSvybAlgA6Ro6WZLDfe7RmS7rkiu%2BbFBejMxoAVVthpWLli9kjI35sio12i2J4qUHAzCBZ0WpbxwZD4Riekwpa2CwAY6pgFUSNHn39Hr4QYeP%2Fa5xGGuNiZSZrzS1wBx6QtEVPpBuZ4mU8NR2AVkjeojXvAxlZGyy3h9aqm6pE4afA6%2Bz37kSGn%2F9ZtIt1ys66%2FKam6oGf9k24YTtffMUN5tRuk78Q8RDwjZenkLQdlWnt47goM%2BgCIMnS0Vt%2BE8GkqkRD1ZFGTtZeHoQ8VkSCiKGCFjIC2%2Fjn9PRks0%2FD7EQu9sPkC%2FRpvn9h6b&X-Amz-Signature=2c00dbec1dd63b332f0c9d67cd3628e1ce529c6ac15a659ca8f002bcf48bca0a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
