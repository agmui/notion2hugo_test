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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBWX6KKH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH1OtU0R8RhCMScucmDuL6Z3inokySnSS2KNl41LrNFoCID0Pt%2FRnXPhHRxm0EFX%2BIRbCs87eoJJJr8r6UAcaE8X7Kv8DCFwQABoMNjM3NDIzMTgzODA1IgxzKR2XnWQ2p9GCXtQq3APUqVg9STrm1oeFI3fxlVcvo2v3v8NUUH1NYopKVPD8cBdob8%2BBYbmtFdQreCQ1YNlPOYSVS%2FJtas9aIZnfGVmWUTtAYZaDvuB3HalZq5s6DFSNrrNmIeVdYswkBcuk9Wdpq6vfk41TXQz4Ap7%2BDL%2FiJUFTb%2FqWDjW6E3eeoMJtUr%2BQlpYVHUPJLeM0QCSI3Vff6LT%2F%2BqjRIZLcA627tq6i8TDL8kDAjQw3uyHZoMg5O1I4NIyIURq2GFU316JEQRgUR7%2FwJqU005DHeDGHu4R1YtO0oDDhbIvsLJrqdvEkEnjwrSVj6n19PafP8Z9F4uUA%2BaC%2BS51iCqT2DmuAA4RV0Q7wSbtYDjNIPOqkcL6JdEImKuUsVeErC3BWD9fDtOh51fMoOPwb3Oc%2FS90CWC24p3SECE5mX1DWAg8kF0WK1MiXLfg1uXKbkzrB9%2FnmZ83S2221eBQCBFR6vwWvb2H58JcEyt3TyIzAVy8R3WaAUY5V8YI58wpLy%2BMnM8XH4FKHda8QATnz%2F913%2Bb6kFuY6p6ntK2OiLz1mmvjCzr%2BBOBtq4yjkfXypPJuRQXcMaK5MdI329PCMB5gD7tYlTeO6gpT1QqcinKL3IQQQ6wmV0usM%2BjEWtkqRdYrO7TDL%2BJm%2FBjqnAbnsgT1%2F6K9kuW7X%2F%2BS7Hr6HEy9Kn0So0ybdyRTkXngA3%2BpQNWSz%2BrpSXQhQyHUCA%2FzfvepZqN%2FR%2FPnEkWOP0Msa5cocxoWB9KBek7b2V3857BTeRRKgBen6G9rV2COIa0S%2FhuOiwLJca6FLHiLsvhzs6wsSoxMnG7qYDZP6VNd0U3e57UQGyuL0FNYmrU2O2VFbUrLCZRMQaFoccEq4WAACgVvdytek&X-Amz-Signature=1ebbbfae1f042d91c7b378123d1f191400c855f366c24616134b09f4c61222f0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OWJBYMH%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYxxf54CNM%2Fs2TjTBHGSVgxSuNtbRd0JERFNpYgdq1sAiEA%2B5n7vpw%2BBOKhybSfXBCWCWffqw6O5PmCxKrdQS9T7t8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAPh4cS8PxcvB5mnCyrcAzNZs8OBdZQsh1GovHz6n6Kd36DWwgws%2FvJOhxptbEzV4IU6Bk5dFfK9wFFPtSQhJhPSNtQYlT8CzYYAfeYhEuYhmhXBXoPyWsObdSM5kZgKOUh5ouDgPvcWXa5x1sqq2J0x8KrxrvWVDWN3Z4wLSLGZYQTfcOKJoRzPC%2FDa3bDOch27OFie12CwuYm8wbfOaW4bf6I5m%2B1OBvxEb329InDz0MMg%2BCoWqbC2iRV3Ag4WEV0K12XXMkGjcNMK7BmptrAemBYyvglilgGL14FXykqB41uBmtrMBGEQIxxP4Q9zNwnI%2F%2BIh6yz6qwKouNoXwTJ2fVtA5Fs4eb7WGJBe5U8al0JsKwhJiigNccfG9ystoppBPPizu7xARdoJS2NLeHOLzzrBMx1rEBT6vltkxeS%2BTojih21TnslKMb4JwtPvggMACeuhCVvjdbexW3CWED9po0ytkpiY9r2XCSHc%2Bp3UJYTcpnJzcCqTLU7Fa5mabnkJMcTnXfOlDzV4EP8aQ4ZygJ1Puz%2BO7p24%2BtsHZxBCnvsgNtMLrt2hWTMFcXTf%2B%2Fx6yobCO0cbSP%2FcyBiXhA%2F1OycvCpdS0F1UnccEuAFGago9wlo%2BB%2BEDWSnFV0q6nv1nFO4LSjeNA6eaMNb4mb8GOqUB88uqmxWFo1ErfdI0O7dvs32EV6zqtPR2ZIPWMW3IBV4vwWIkeHI1BCmMxyDD%2Bj4LJ%2BvVcEO3GC81kYgvu3iEW9ADfHfayWQU459hsDNVFMAuv0zMrdTPAtOpSViNJsXHiFrUntWha0nQIgwawCXnV45xC2uIqqR5qK8x8uGc2xAfAG52NpKY3UTObfLjtAizJaEeWIscdY19VN1AzraxP6iUY30q&X-Amz-Signature=c67b249460b194e70ca21c5a3cbcec510d8c9cdd32b9bc0ed6b858878db88dae&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
