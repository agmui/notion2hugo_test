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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRF3G4KH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC9gPy2%2FjJPD%2FIDeVT8VLb%2F9V8OsMgy4I92vGt0a4%2FjDgIhAIQfUR9O904tsaAQoP%2BxcvqF%2BQ3TwrMrB6Mfk4FksWgpKv8DCCwQABoMNjM3NDIzMTgzODA1IgynwZABGoLzvUC9zawq3AMmkECk1Sb%2FjSWVM1VhkC8QvHveKcXblfdZuYcZvpbq8nT3rON0wqlJgGUDGwb6xOc4vQc4OEdCIqglSrr7%2BfhAGpwCADs2ZSZoFe%2F%2B4BDa9Wgh3Hk6h2yjuS2bL9nM%2BSXn3Jqv%2BPBBttOSsrwf5z6WrxFAIsQCtvriLPhMbXKilrXJdbxcnh%2FWFjaS25k8lZcxJNbmoYcRu2IocyaoI37U4q%2BN7P4Z51XK5Jm6p%2FD30ecH2E5dsZ5rrDO2VTi6PK7HHCUXVXm%2F8f1vJNqZa1O15gNsMnoZRfXazezkkW44Z67yzcs6KZ%2FyLuzpfl4Mq7FDUSDEGu4q%2FP5p72s5xIoLSGzMoNAbY25%2B638Y7iSTEQzVLQ25tkG%2FlxpeQ3dyaNZmRYNWZ7Zm18JFOYbNh829QrD1%2F31kffTqM%2FFFroiJIFyNtmVQcEwo6TPK8xic5rLUii7U1p%2BB4JJMEcW7uy2H12JUwkM%2Fq2w8il%2B7qeUHdcx8nPlxuk2dxSI5%2BFLSfw6ObTmPWKVuYEJ%2FdzrIXrg7Pw12JyxdnB8%2FCoklzspzYiL2u2bYtzvcFWtwiVV8ERd16feMSAgI3r2c%2BQZPiaVVDEa90HEbjlQI7BW7ic%2FVvlYClpSqSWG%2BL2pdxjCihZfBBjqkASv6NgxQ5GVszHDm4qVeX93%2BfMzgDszo6fVXaYypXYAt3fo8mSNGp6PAEWT26W5U68n2uL2vQN5tMp74QJ1PjKmNaJsYEAdgksbNloO3mrtOByxA3XBwYhlI7CrcSinuiuY0Rl6N5kQH%2BNe1S6LOfciAZM2EOwIijHaeJiFj2Ynfc4282Io%2F4EsYHdJGGXhJSffmu5%2FZIiTngpKgp2U62pgYqPVw&X-Amz-Signature=cb029dfa8095bd71d08f21f9c8b7c0f573fa8cad7c92593bf690294b9e0b4b70&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4MLNCNF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFdKCVIuDZ4Gph9FIkrtnZDBn6pHlf7MPIbHA%2FddPCYEAiB0avURVDhne%2Bz4BajP3NlJ6zVU0tdLrkfRNLeX90IH%2Bir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMUht9AGQrAb%2Fw71ZqKtwD9VefvSNLBV3JseHN7xEHpxyHsObA0UxVgiAW0vgryLnrVkZm4afxnzYaE0Slmj81BQBVr%2Fu3Fr%2BfV33pLvNssp1l%2FxHlWYFFc1Hf9Wxd9O2g313u0oEt%2BCSm52a9ZwhGqgRkhbptTTrmfIUzfk%2FZw%2FfeRsciMFQNWHUDrwdaXBoasvUzWoa1ofQ3%2FGWDioWR19cLPHCoYrP2plkYXQtBQQmkOrpEb9bxQz3m5VI%2FKXZCfIF483Qz4JV7Uzc9ncbpOgiyCeDBHNDy1tfc0qZthBANO%2FQJNhdN7JQuN6C1df2Vr5TZrKluS5Es88dEz0JLBSl5SdpVr%2Br8FlEXjJL6RSVIZSBm7qcfrwQT1GV5LX0%2F2a%2Fsda%2Bfk9vwjybWwnAQj2fwPuTPci8EtSUb2eekehNsi9RbZSxjrMTT%2Fxri%2F1S1FLQAGZSQjG%2Fm9vaUf14Y6P5ic1TtKKltjt4Trcrx4ao4HP3ePSgYnmLPps0jyHZMiUD5Yl%2F87sWHiroFZzPEj82qmnVbzMzQFGOKpLB03ZZh0RZU56bDLSA4KmbuQT8X6toQKk2u3oKp8%2FTszf2vOyWsmhOjch6F7wzlV2xFzd6%2FHtKXzmrfWdPFX6jCRWA95flusTrSoOs0%2FPYw0pCXwQY6pgHDtRE7kl65hHanYvjHhTL5Kr7BoynHdXMgkxo5FPGrmU8g51%2FPTs1w42rJd0cNHH6zW%2FFHEErOWONGIC7bqkI%2FzI1E47lSBeJ1%2FKEHwwtuzAYUqZGMtCSa44Kki7nYYkIhw99xVbScz2TcI3y5iOGRt8tGf%2BboanQpy2G6twp2rZE74yWx0cD1IWw%2FVus4YnmmkySh%2BcnWVnNbaq0i3T62uopenVo6&X-Amz-Signature=2faf48d7af1289addfb28a27dca0ee2ed0c8301e2f245961ecc8b1c8cc779932&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
