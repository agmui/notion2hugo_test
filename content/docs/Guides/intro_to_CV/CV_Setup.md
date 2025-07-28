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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2DO6OPL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCICQnoIGruQHPEHVz2vwjmqgCGwxRCMibmiXrDtLSvdT1AiAitRQjnbdp5tgnZC17fs6QXlmpB9osA1fto8MTbkCuISqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzb6uFSwLJCjG4nQuKtwD2scXwm63O3zaoYrokZGvfk6DkUV6Jf4%2BXD9ByOLzanSNou7Kff6k%2FaM4yiIQTKEbaBRvXtX978HrmlumHaVXAqGL06du4LaIF%2BMMHvDEzM7%2FU1Rm4rqjZWhkX9%2FZta3xkTlqvmivF1axKnrqVUEtsc3nnzFz2YCc2alDIjB6S8Awz4mUA7iiunN76KSF%2BJhm0Y6v%2FdW7U%2FvBfv1IkWW0J5thGPdhhssdhAk%2Fxr%2FCBxtae%2FRFC7gamM68xlNBb64AEC4HB4V4RsZqLFrVwHvZoubnRpbZs00TvPeB%2Be0ct%2FDjCQ%2FbBBKiGdbI1CSMGDB3IpG2adBZiD1TxEY1kvbsBh8VXgBq74igB63gFDEHcDgBRXcIa56p8cn6IX%2B907sgjtNj85YRsk0kVMoRXeNgCJyc7%2Br8MG0nbZ%2B6KGb45q7VCm2Pq38D4DV6WxenqWwZ%2Fe25LsEx5IVAlVJ%2FyxUYPeC3yNEScLRrnlihijIO5noVecucac1Wak2FzCcRaP0RlQmj%2BhAy9AUtgwQoWaY20Zl5CQOAGsWFJLd6ebXa2c0x%2FHiIdJ44fHBr8FFx5ArHecZkwr9YF2F0ER%2BoelTy1qofziveoX410gqQNRgJOMIjG1b2EvZD8S6ssbsw5biexAY6pgHmxopygvH%2B9NRkD68cLwFdgFzIyXhI6Lxxj6NbBq1zZ7qvL4D9pAq8XiaKajpHTXrrmXLyahG%2FxfO%2FCDqY00YInYKQWblUMN0igovxPg2VUFEUNqlbf%2FG%2BG8rSgjY5sSMcH2OjsIYdwOfOjrhV3IeojS2msMp0okWnpSz9YmMcgM1FPFgM4GDbgHLzE229S3iP05gw2er7AJyUK2FG3XLZHmR3zO2u&X-Amz-Signature=2f479ea5df3f31477e2273b0d44429bdb0046b25fcfce5625707e18fb1e26fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656UCJDOW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHm96rXBAgUpRBE%2B1dyVL5b5f4bf7ngTu%2B8PkQ89Lrn6AiEAv3lz4YySQ693DzHgzI6yLarpj8bjgCxAF3P3z9N7zFIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcPiQyxzkJeBsuGRCrcA3TZKg%2FG1PkUoOg1baC5%2Bsk4XMBRx2sgM4BCPwFza0fYtdmUwzQNSDWVZek752qHyyq5bcHTsEsFBIEtkhH6zGmNECHZSPiH2ufMxDGW4%2FyRybprmt7dlVQwDoWukUFZkR%2FIMpUPdwsjlf2Pu3%2Fr8shIYWdG%2BvQibogL3lVz2gZcSRC8sGkw4hgt4rsNdAfwZBADg37IXd%2FxkawnN2duZWdmhwwqkNaHYAm13SKLE4aDQcIQjMz9ReeNkflpuedaSA%2FAhwqFibklLh6Em7eUiQc51ue2si32Uaa9X5PArFjjqymeFO7llR1JntH%2BKdeDkaNQx6QUfW7WJ7EM8kXLxsOAIGlUtQP7kPAT8VA2VivbnDZ0E4%2FXBeQch57Ux5EzH3F83H6fivguSybRVYXIppl1e0CzpHQbl9PYvjPOYelfi4o8%2BzIV9QkhdVP%2BLC0mlKGlNq%2FFBZd2X1XlydzwKPDrz2SU4GCbVVloM9jgcIw6V8KCyQqhVnvtZuy1dhgEIQH7wPhvpR4SIiAqTS1UHS5%2BrG9%2BiWIQdXKyeqy%2FtZjTxnVGFUKfAGy1Nn%2Fs1kmhc57vON9DoCPkPvC0Zk8UfX64rJoCqhZwjhQf2WgfnVb%2FGjtEUsrSChon2xX8MLC4nsQGOqUBA75ofPJqvynhCypc%2FyReWFSO%2Bz%2FdjkyPfBdNA4HxjnCOmIn1ioRB%2BmBD1h2tDDetJibfp%2FCqeV1BHT9ZokE18nzzpyCCaNUKG796NBbkJmE4p7TTDYKYuxbBFbYv4p3wfMBz6n7ySNvOfqJ2mpRUOAOET6dA%2BCDPNTfnKCyWNALIq27rz2%2FGrU5u%2FFtvB3L9e26mP%2BcBLUIDIEE5y4Ym18gsXQ%2Fk&X-Amz-Signature=0bbb6fbbbf52596155e8f2acf057e4173d3ce52cfb89e2fd57195c18615e77fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
