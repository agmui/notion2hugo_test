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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G56QU3K%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAh7FhYMUG73e8bPyV1edr7LEltoBCUcq%2FK9a5Fx%2BF4TAiEAg7eqPIA%2FoIjbmjt%2FzoTMQR06rlboknztZXCii3FejiMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeGyY%2FxaTkMfqM5wyrcAykI%2FAuTc%2BMUD9xqwiWhwcX6EmuKT3QuYNfzASOXXYFsm78t95ORwbfen08FycuwzyYCrcH3xTxqufupn%2B1zV%2ByIuqTLi5O%2FZR5xlgepIyHiRaieyiqLPGMzRw%2FXrkk19pB0Jt9OkqCK3VAktdaLqdhF9XUzQLc2gB1FCRpY35z8nF8gudDf1oWN6Ad9fHxmm%2BKBNtXHtJPU%2BeWrAmtnSaRbXkEhnoupKVPqofEUefeW%2FGt%2BqQScF%2FMjbPwW1lUDZhXeCVf%2BLp9llNMiaKPoUlTWJYlv%2FsBRWd1eslf2Jfr9cA%2BkW%2BMDTT%2FpzCxaLKt17N0YMXeXBl7f0ZAbz%2FzFBbM06zjvjw7fywlQ4RQ8E%2FS2kMzJv47oleQSXve1B0GSJblBdLqEzeZ%2FwtaUUBD2Ixmb7V4BsRlYRdwXSPJSoxVS%2BeYSxXXq9qgruDf9G%2BV%2BzlNtFZxP%2FYbd4Asq740E%2B6AI6InXM2JGUIWGlAvJHlwfCOXYQYX0jNLhFIRcwaylIueKyRyqMEHLJKttX0vlRNfVKKOg%2FvClBb0xkBAmovvYDMCQP1vEEL%2F20jo2Patha%2B3uJY41SoHXCLQ6BaJEt092xOlJXlvNRKAefKoYELcr1qUIoY2evcYUtcl6MPPr%2Bb4GOqUBjGzTqzDhphP9yKua7WSQWeCEFkbfPCUJ0WEyVNr%2BaDKvzNvVxgKWrjUnWLthK3c3M%2FU0N%2BY1%2BsoX8pUw5dBvpIy8g93%2FQmBX2blI3Wxc%2Bbkp7JpxZKUdxFyubvtz7eHEbeSRK%2FGhNF32ztTFXGVgCt%2FoG53wLwn6LwRkVjceffvc6mTBcnUZ9lB6OSheOY25RItB5frlJRetlW2B8PWF0m4DQ5Su&X-Amz-Signature=615577f89a7b9dfef64507c3045f497feadfd7e5ccf427164b42addc3ec6f837&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOI2E2X5%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIGEYdqFyIiH0NO0QvvGHo1PLgRcnU1xcRNxLpchHpZIWAiEA8mywWzeJQ5glfH8piaoTAc727Uf72DfwAWlX3qhWWasqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSwr9jicByf%2F9d3oyrcA0HyzWo49wsOdG2ErYtyHytDa8%2Bw5Jrrr4V23gULnHipcWOD8vRqh9%2BQmKXd1AkZSNtNfY%2F%2BBWLeQTu2c5W8kj4YKaaeiqgdl8rNpfXq1bjoLsVlVYn9dPuLpFJWvgfqqySRAKx7ZrPd%2F0YCjfR%2FqFbl%2BTM6KP2sq18blzO7cffXLLoUwyR1uCiiyYwaBbORLj8y3zi9aA65f02ZDSwRBnJepsl0c%2FRFIhEqh7bYqjjdVrYoRLeaIljeUi678jy2%2Bz7YCBRuFGAUVBL7WYieqEKYBoAeVfRm3PAVyzHOKDedbJwX4M5xvlFTs3%2BSjJj%2Bi1uMM7sr4IVUXYHcD4dK461hr0qclvtUcd5hNGD2cOHy2iD%2FNgky6tO9WeLlD3kTH7oqoeKNDugt7Q1N%2FC54u%2FR0Q4FE%2FTYALtX3BZhXJobaNlb35ot91ai11ZF4wqEFO77jm4DLKsDUo192N66OXUBpuHkLjCswBHSeJBXeBDkzlPkU5YpnjVFoi%2F3zb8r%2BYOk0ZKedwvFYvSYV26WFyznovSi7NrxdnDNI0yZPkIO6DMevlnU21w6pVDut0ZdCWW5zSrgAmLaOUgoZaV0uNVUnNQvPdRDabRELqBBcNqwKiaxj7wZrV8k622TMMPPs%2Bb4GOqUBV2p2njQsr%2FoBSUDOpxZMhC6Fcb29wSaebIM1leTx%2B6G1KhxW%2BeByJfUcBgfcaKawAsjnxRHmq6A8LN1R%2BFksiNjEqIqYWyC3nukl3uAdsRWOCayf6bJs42wTGxu9OIRk98cTQsB6Q2YwGNwr6%2F0gJ8eEw%2FrO73nwST1yi014dYbZgZhip7nIUe2s5vYmOJT6UotIVwLkhCYSrpUE%2ByRRgDuyur2k&X-Amz-Signature=3b65961c11c1400a74ae37cc2ef59537cf7dbd59cf1dfe826dc1db4e5991e6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
