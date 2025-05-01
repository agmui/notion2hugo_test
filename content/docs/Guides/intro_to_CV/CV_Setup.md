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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBLEVXG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCICvBJ43eT5Il%2F2R6oSUfbi%2F3YuR2L2XqeuPiVSHBHxfaAiEAn5aJEVgLBFRvQYPU8XEObDQ%2F14CpBLkb2y5IThCGnAIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJk7%2FBSd0vDHFD%2BTCyrcA8uD7wjo5ydnlXbS11cY%2B5%2Fc1b6odRzDulauyQZSmfdVblihy%2B2ZsMuHDZuQiZ%2FhKdY3dn63GpPzCwAjA3QpBfoVeeVBMMfk%2FEnEdLQxN556LWRgBLdPOh9%2BNhe0Vnzghv2SGhRmz5uLZTkdnoZoNt7TbRaK%2B5o0RbUsPCJO7NgigGJFgM4EE7shwsKPSMYrhco%2F4yuCWh3lKv9cMxh2HxXNYMp0ZUTjvsjK2kjjren%2B2aotZ45MaNWebhuPQjptoaTdQfb2K%2BSUKu5JA%2F%2BPEPjSpqDHqV5M6GEd%2BdtNbvdfJhydJh6kVCIrbh%2B25wHL8b%2B3EHUu66WscDhE4As7jFyFGQje1nkt8MF5yN4SbCwXTo2Xjw%2B320bLrDDIyvLMXdBJ8ITLPwalKa22F0P1tLPLkEvLREOrEKm0FO3%2BDzXD1KGZROWOp%2FOueIeeYGI0EgAFozwz0xlzVssBxATFF33%2FNRqbh4vJbX2Y2cZwsvV0ANc4byQ8C2%2FfoOFOhqXzp1uG5AFXsH7YMDr8TZMZ0J8mCkYyteh7%2FoeWcwFk%2B%2BNq4PvrwERSRLLdSUGd7wV0dsWRt2cuSMHmo3%2F4LYBe7%2FowWoEH0FJ8KXNXrrmuUyDsjV0bW3vwVatjJ3OKMMKRz8AGOqUB1imqVeaymg1xUloYRtWmwBhy9%2BaPJkRglVUP8kuwNUnB1TNixkBILDk%2BGxySjmM%2BCPn6kQYN6%2Bz0sWHuwxMyj8Mbmb3tiEdY0IhxPWhSq0GE3a5DFvLOluGym%2BlAWrnHezmj%2FXtOoswS4LE0pl225ZgHIq7Qhpq5RJ7l%2BQCFVHGnRSA5OPkeMvdNLb9%2BwHHepFJEfHClS1b%2BR%2FwAkiDkER4W%2Bqnz&X-Amz-Signature=2c25ef8abb9c2c8e13d7326b61cfd12374182fd3ce29ccbcb6d2b71d92047b4e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSEMKME5%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC0lonwF24hKmrUQF7fomVpNp%2FiW%2FssCq%2BFhWvxsyQHpAiAPdBXbVN%2F9gP%2Fw4tAUIe4dKJec%2F56RsgOr6CUlENqw1SqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcl%2BY2nbO2oG5BwjhKtwDFprlwHheT6%2FAHLl82uzMidgy3iFzyAjQbgzBuScLqmDG1X2m72YpY0RwX7kl%2FA%2FpVwKpgghtLKTBUH%2Be%2FhrkMOJChW5G4WQVw22eMdptBfuTAZGa0H%2F9%2BTzv32gZh4ZjpvvP%2FuwYt%2BppQWDao8C5gpe%2FLBvgUz43Ix2FpKKQ9ewC%2BRVAUxf7%2FB%2B%2BcBj1FhYEyBl6eiBsm6is4kSKssZlIR%2B8UWIZ1s6oz4ZZAQIjte1qkveXsQYSNCBXFuTMV12YT9cso1Tard2yW461OhWR4UyzBMXydReN%2Ft0aMMLmkRuFSAKHoMbqDtT%2F3SovSGxCcdHXdlYT6y8WFFZ37oLElH5QFM1MdEpVlu1v3G9zrS01ehL5Qt8A2zk9RAse30%2FXsvcRW84B2gw3hqF5Z%2F9m837rPLEu7YEN%2FLvVI3chIfLuWGPkA2ZoG%2BTGZWhEiMgqUx%2F61jnVKtXQ7xc6q4ClPeT7Jwa1LJLu4gqKiOPjYtQ%2BQbCOg5gb3H6udxI64vnbKMPK%2FeuSeqvRdgLwcPtlnaqjksj9MCU0RcXjiWBy909AqFs7JqWljBeey75SyB%2F4nBEg1L1tWr6Q961lzwIv0iiUP0dio94bfBMxHAnsnjEIybSAtBxeE%2Fp%2BYawwiJLPwAY6pgFnbQxcPizIqj6MZI1dEqr6lv1YeJWLd43lLAJIHTQ10g%2B5eQZ%2B9XCYbhXeTLblirlBWns99%2FjRfZLmAvC255EGuBMZZgPmiEOUFrgJZ2UU7tB74BK2P8N0JKL0Zx9Ypy7GC4NaqnzQIgD9n6JEndm3TyB8q4HSkR8zgRKLm9yuZG%2BRlWHgmjeNbaFP%2Flod9NaXv2%2Fjl81AWzN7HuzD%2BfrXB0R9B%2BmR&X-Amz-Signature=c3d9c1c3d4d462e4fbd962d76b4adcbfa28fef1d8dd0eef024a837b594362c84&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
