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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCWI7DYS%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BVVVuM3QAldFrtdrGTuWaCaUyPwCh5OGPvmejPspTEgIhAJgfDpj8r%2Fv0aKajXoPij3QdLpfQxweJBAJddzpwibHyKv8DCEgQABoMNjM3NDIzMTgzODA1Igz2VsF7z3QwTSbJuOwq3ANY90ChKd8klFwmdpj7ATX5qIm0EKLRIaz%2F%2BNX5Td%2FFGHuoogY72KoLPOXLogkdhimYxa77siqFYY9juBstalMm4YR86M1y%2BXjhwCHNBr5G8xDgSakkMOVk6AB3oX1CjZab5mck86deM7Z0YhB5nWBOr3eyPZsU8E2AIQJedUFktPFSB2AQvh1wICHpAochfTZRXitLCMdw1L3CWfjeuI5etOzs1rGdkylJzcQzfKHiy%2BH4BGbLR49DxDxc9PEEKvUXsOTYIpZ2gpQ02Eqk83L3J%2BkLORGlSoaH7hnyrbpiR%2FG6J9OvvzMf5zCcWnO0xlIsmL1lrmtA5Zx%2BU%2BwPtNRbBiimA%2FLHqfefsvXi8I98dHcNu0E1Uq79QWhgqazpVw%2FvHb%2B6v8IHWCyy8nCa89Za0VliJLxlYDyYaJFSg6zCAcFHeBzqDTajDrK3BqKuFAvVtrvDaKcLZrgj008utXujWqGcjkW7jPc36XIVMogS1l2rBFWWcVtIrzl5bWmITfQHDhL69l25LQdSq3f8BfsRmnRz%2FP4lUiXYG9Cz0t5ujAkQSw6xvMRMYr3y4AbDrYc%2FuwGLwSDzQrppQtBdBhY3bTxizt726MmoE1aaXFVbQoGKC1NCj%2BfazF43jjDR5rPABjqkAa0FSC3%2Bi3aw%2BPxIKfuHV%2B6YYz2bhnvOcM2iTPtI%2BqyMcBSl7NJZq92hGsdH2WC7wzGvsIjBtq4khWnHD1bzxDXBYQkZ8IHZpQJUoRJTFIlCuESli%2BKn9mUPhvATizmlUGGu6fJ2eYj2kB%2F3GgioTRCGBzZxwOc569OnvhQhtRqjDh2za6OnYGW6B9G%2BgSGm2hvp0Dp5Mx3GFjZWEOqZjA10e893&X-Amz-Signature=52f08dcef6b07d31fe8ffc523a2df192b7beaf15bd8291044602ce2c88f8ffca&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDN6SSF7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP%2F2qgK3wWrz2Zjq8zMsfcWPqRbX%2FnTjpXaZK%2FlXTPRAiA%2BDTK4Qe4bxCQGLsfZtH16S5q9APhAcloeKBZEoBLrDir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMDOib2Hv5EKPrEwdzKtwDHV8jQE6Jj75gqmKhYkqF0MbKMoWGeZZ7pic2UYp01PeoBBSFcwHkgVFkxxKt5bXFYu1nP9pIfpS9fUItC%2B3gcWjuMeirh3RHOxa1CaXJkf95HvcRpuPp75pj%2BQE04ZIEZ4yElF%2F3cA9ti3U1T5nOU%2BqnU%2B4n6OfMimu9BTwenyK0RaV6c11deuwM3JdVjuEo2YBxyxNcZn6c64ZtWOquWIhBUY1xkbvMolz%2FnHWX1HoNGXxh6lVd0EKn7SMqlQg2LDaSNI8r%2B%2B03Io1%2B3z%2F9O4tzTTCuky%2F96v36PvphQAyE%2FpUdBXvy%2FxYNbsScnsgyJ7yRRe1W0BMb8cP17Tf91x7DaCzfTriVprmY8AgRF2QhS6pbtKA55FQGuGkIOLJvssciYb7DLmb7k0IKA2Bqk%2BPC3%2BuneZev%2Fgv5IjezrMuB8UjV4mCgkhD2mNKu%2FAdScSq3tjjFdJDFBm7um9pLCy4072OiRK62g%2B8aKlewYmIzFnPkHGAquSd8w%2BEMgYynH2ynxMA5uHiyy%2FIMuzFg2jTLmhheTGqq5WRKO1Gn5gtMi%2FBji755vZExphvpslyrufi5PyhSB1vSqM44zGLaMiv3Fx8bNuYq%2BI9VM4kdbVXJaRR0Oi3vr0VtdrQwvOazwAY6pgFjABk81seM3lb9eOPx3l3IIOMLJiT%2FKLsd1PmAaHgvctBTAXj7hIUSLGVZxAU0UpiDvJLlolP4Ml%2FGYppPdpsAcmXppRrUtDiVGj2ExQBsd4i4ns19It0Mh9pBLdI5Kj1CZ27WIpLfiTH%2BJn2IrX7XCOZ%2Bh6ifKd%2BwTkcbqUT8NYXUIRRQIcSZGudwC%2BWBPo5mYV62tIHg7n8RofT6X0FgwdAt6uCm&X-Amz-Signature=c4c012b9755bf3d3c02a762647bb3951a58804ea727e22258b0f7515b1146525&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
