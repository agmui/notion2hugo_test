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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIMTWA3K%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIGpBulVZ%2B%2Fx5gCHp0mEDKxO6QlizR8a2IwKX%2Fqb3cstAAiAplYRMHEDerlqkndrBbW6OZKsnYQQNnFnEA2M6fkgzFyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYsyI8TAnzCl0HNz8KtwDgbOrU5mHOJ1vjIaFQLQ4WwKcMBpvl6jDVBNqkWUPfndJgTcdyzFUIk7o4STSW3t2M%2B6GviT63h5YjOfltIUF2HSlSaT6j5mr0nCjiDTkXN4vRitxZnaLLBpSjkOSeLy9b6%2B09l%2F3GRyeI7Y3Kqa2i0nGqRLemlQaT7zjtzGeigiV2vPkVDr2BnAvyG1%2BhC9eKzrvyygz7yn7RKccfb9Hsbhgoo1%2FaIaqjHM0YL4RNdl9iUk5a52lxbR0FuszQL47G3kVw%2BTAmIh6EvY7wxI%2BNjo23sGiJduZY%2F3oqYsvh%2FNk1j6Xd%2BlIjnjV1ElHJ2ZZo2w8YGFCm3OsW9NgjWjQmGrgO8lEnhxFcPNWigkxBBB6%2BXDrc2dsRbSuc2cUv%2F7HStpDxb4EI55u3PnJVFOJTrkxgU0BNjK8I8gwZKp8ASLPXrHtlR1%2BanR4cgxcCwrSf03NSgeH883CkIa0chbOr0EVdX0zsgzUrHHBDkh%2BjrTsIGHtRk%2FD5HtrvE93%2Bh8LpnO3rHxYCYQWe19Z9qkpatIS3CZFjeYkYzYNw1SgorCdT1SGSQhGLdPQgnPhxcwwtM5G7KamflgSGLYcAEvOP33NPInCwsJ5WjiS8VBFQL%2FPgCS2RU5cjHTjONUwj7rxwgY6pgEw7u9xVv3LQi78J0MzSpw7ZohgEuJpeOxDnuyJtYZj8LRVe%2F1iAuujIYCr7jJ%2BGdgryQbBNbpTjwJrPWY44nA4Yo2Fssi8Y5KzyyB6DqeT%2B244I9kIqTpk1mq%2BvAimiKEGf0%2F%2FbalzrGsFo41jyDkq4cvp%2FFT7bakc%2BK%2BYx%2Bl7qiyB3ZBtQ2l5p8Eif4PFM6ULfmN5432OH%2FgrWoBq86Upah8BM4pp&X-Amz-Signature=7e3e7fcf6b7122d3e5aa4a9d89369a32a343aaf146bf9b525063369e763f92c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQHH7FF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDXRL%2FeJ1QyFn5NS0817jizfXDfvSpBTTxdPc4UHsQ7zgIhAJrVnGXsQrnLC0KZt%2F2zVY2ilSCLy%2BA5L%2BvmldsWrzYBKv8DCE4QABoMNjM3NDIzMTgzODA1IgwKso%2FKFHwuuD9ginoq3AOIgeSFOWATfrsKcvCAA48WmjvvrvxNWUdMhmAlqYzMFiO4sRfOG2fIOgcblv60YU3BPPpGd0bPoIHkYMqpA9iWCCY%2BeXT9ua4jrsqlIILX%2Boy7OsszF6B66aRoLONSuINCEsEoly90bKo%2BQJwveM9QqXrTxYNrWZYfxdUxfHPuVAflqV9My3Ckm10ZiCn%2BBxCh6WamvUZW6%2B24ODlDV9DZ9sxvU2HhCA0CVc0yxgXL5q%2Bibi%2FI9d6TE0USRp0xV87oaDqCNZizOrs%2FwUM2IrwmTIIaJ6r7d3P8WCFsTZlCnmhhZdDTEhIrhztJRVwKX%2BvomZ4DNDZlESOTfFgDXjD%2FAE0ZmbIF1g8OU7pZTziAreZfEWE5oArfO7%2BAJz%2Fx%2Boet%2FAdYQwAlo7uS3j90TGCaJMMdT%2B5kpBFaR0Ilx%2FnpZm6mfPi097B%2Fwe%2FqVNB62pb92%2Bz67%2FNYgysr2AbFoenxbiA5BzuiLrT%2FFc%2FuWRZPvoYlqIN4Ix3CgJZqgoTc%2F27kO7McZaQFeJy13nLmkuSBja0M%2FDDMEEVBVEVqb35rAyRETLCk1UZ6TyM91ZYcT5M947CwBLUHdBsg9KBeGT5vqD279WIeLxHL1%2Bhczr3XLLqS4%2B3jl6MD4icrjzDgufHCBjqkAWPMNCH6Ja%2F0GD7jNaaX9m%2BWABFuClHDC%2BIf0j49D8m6q5nT4NFKoFv3NrERlZhJaFOZ9wAfehjvEr%2BNE%2FaafpSmy7rcnC%2BsxDly1DANbJSHTnp40aClRJq1KHYKGxvV0ydDUBvi6wiZ4aB5v%2BmKboPNyNR85%2FvyFWKTbAfMzYIjWG8zjHKMcvDfaVSnPzPPyFdmD6hI%2Bbgz%2Bx9L0%2Foi6bvrddPg&X-Amz-Signature=fa8c598c6b0b87003c68823fa6fa15631b1c7f433f94e937aee6aeaef168f254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
