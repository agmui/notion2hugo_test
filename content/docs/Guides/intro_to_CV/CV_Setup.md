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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGLBEP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCvfm8MD3DNNAhN9AkKUgcHKfC8onEMPnbQXncCRZFTZQIhALeyFE6k%2BJJWVe7rNymlne92ktgwzeWIXeE6fprgujDXKv8DCFgQABoMNjM3NDIzMTgzODA1IgwpEPw0doJXasL5uz4q3AOmY%2B5%2BJP60ARJmlsxTacfCWW%2B8es7K7NDV6WBFyINK57jbs14KbD59DfGLXwhdQkmYv%2B6QOaLVc%2FpRV5xa5K6Qt0Yrl4dghvAkA9yRKA%2B2lbXYGkp7gI6IIjPs6hG4pUFAnV2RP5hEE%2F%2BzxtPY4%2FJcm9WoN73N0Qi5A%2BVeC6%2FdxCorS%2FWfUwIYOpIvAGyL4lg9kbHsgCf2VFvv8LBYfvm9vNrbZQhhJen5EfxH3r0IUuRX8l0ogqEURdxOukOvAG6SCdueQJUv0hXpVxt4EodoGY3hjZ9HPGCDtJ0OWpPmNsf21RzppmCyZzvroP2B3Xnhlm%2BtPIGUEG%2BtxS1yl4Itdhxjc0l5MeJif9SDFoUk9KkrbFgA6PL%2FBMDbv%2FFFY1GIsZVNhZPA7A2S2rt1Exr6wYzy9E3JQhgLrGXEVOa1oMmi7WZwhuh0kgYPNyJaQUK65fpxGtlCOqBJ2AVB4MeZ%2B1xGN06jmGtkUpNJRJbvEUoBCHB8T5YdbXJv%2F%2BwyP7R4nwUITKX7hbKHdrrxaSp%2BAlzxFtKhrDCFLKT4xyCPZIyrzqySQ4m9nA6zM9m4tXffrssOmyQ2ig1rft6TjKQ3D3WGnxgBNURfCslEF0rOyedMiajUSkXmtOlO8TD4gPu9BjqkAeBNVDj7bDWrwtYvA1aY7knDmeaPXOX1W49yKcenn3yB1KsiAMCCYr3zjcjWsDt%2Fl9JlmLlCyntDlx7nXORcLdS0ITQcwqDGhckhCO0thZDI4WWeKV3RhSJpoQDWPoay7Tl4IVISUcOki8HItQsVQ1mXIV6RdERJ2ZEYWSxPUE81hrYLDUZjsl4wJ5leQOyXFpfoU4NaiD4QH%2BkTaBUzGQ9uPIJ7&X-Amz-Signature=4befb70c9aadfb8ab8010d50ee0dcc1d26ae8e5a4122abc539527e97aaa597f3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEGAVTO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD8AfGOxULmOk5yFHh5a6Gg1xgq0aOhnJfBETjR%2BEMVyAIhAIvD6heYcai%2F4L%2BDUPyIIS2QJabNCfX8axb49EkVClCAKv8DCFgQABoMNjM3NDIzMTgzODA1Igx5yiJxQ3X2LS%2FXnBsq3APqGc9xK7WyhYtaNsMnkGFqBbaXTRPekzfKAtpzvP%2FtKUboyDYSu5KhIjUgJmukueptVsf2m77N%2BGaTNt5JU2h%2FyoxleEFeykZ4wR7%2B38mEVVNe8Bi9X9iZInERYLCBFKQIUHiUIFdkG8W%2B5LaApLxdwg3X5o8xJlBxnfublBqXEdw0MfcOFMeS5SaNao5GEeG8re%2BZXCubvdusABdQRDUSDpNwecjr6Cjdo5mB92q3URRnDNxa2akfRp%2FsMlnFJXIXQ6CFDAZIPrXFb3%2F7JoOhvaF%2FyBEh%2FASJ4sCIf6IYNeZK%2FOBX4hgb1gbdbWWZ8mLJIa0B%2F9fAudHEALSxL2luRpPe52yRxeiHx8qqgg7A92z01lslueDtixn0M4XdM43s8gy0Xl37to07G67BWDcvxBLLKX1ZHauf5v7v3NJxS6q%2BEaoh4J3GsZb7aZ61qk%2FUQgklMveLtfQvZ2jeFXqx4lh5x8E7HXkiiH%2BFohI44jo4mB5z6kwKteWF8wMkTXwwIHEHz9UPV9AJzJypWEgVWc9uywNOC%2BlvTMoWTKoGZ6F6nCOIECp219LxzKxd1Qo0nixjAxb65NWZv03fN59Opog1okFAytZg0f8rAO3Q8ArSqvx7DGk07TjZITD6gPu9BjqkAVgyOV8UFr3nRORfzqeZP0vFTaeypapsSHZnyfFAzJd2RCwtw4KMFFmlQFZiwBOzrztACc0DpJ8W4GqYhRexmfmI0UPibwfWgyD%2B0f4NQWfWp6V1gTdrQMnpBwa%2Fr7ROVq08iOlc3%2FPodIWdXqy9nh2l1I6A83xlhRet8Qv6o%2BnrzngHedpLm%2FuDNSxp%2BVshJwwlI2OdIywiTdbIHOuoGEm0Ai2u&X-Amz-Signature=36393b0b5ccb1949e67ed152a7a0967a925a6031d0ab3824289fd8c42bcc322f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
