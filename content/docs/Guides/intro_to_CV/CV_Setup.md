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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WONTGFII%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBtbHZ8GVslVXQAyo%2BZmnzgue59jOEWKA5XOlsaBZv35AiBu15Wy30eJ7AwPqSu6nCSUufT7Ixv%2FPp%2FuNEcRUUQKGCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQQF1C3qi5YjNwTjgKtwDjHuPDez8VXtALe814C%2BVD25Jy1ifOqwGg0f5XrSX1qzl6XbUQxmVvuRdP%2BfWt9mjhpXKS8S62tGI2T2mM2pi0xlJDsXvPz5eXg5%2BIHqaLKXzA3mx1Vkm72wP2%2B86CdsRDta%2FgeA%2FMWylbeiUrZYiRu8HHyNpr%2BuUi37q4Bhl1w9LIx6qnEP%2F2jBWME3MMW6uf2VRA0YraKDvhLaZX%2BH%2F4lC4J%2BuvpLNPgqpQhStj%2FC6aX3Be2fYmxfBFNXNnVVzI%2FZMRVQ4CllpADjCKwMzprF8pkpM%2FzdlhBWPA%2Fzertv%2B5E9eOPcwajRQ5M6QBStBRNK4ped0YdVf8A3I3L4z6CVh7n1%2BSHFpTi2xH1xDM0%2FIrimzjH4LVtOxd7mfoNX8r38BlaLtJP1ofF4fFXuGIQ%2BYhAO%2BoR8wxkIwCmFrY%2BARhSGCerUn4Dmb2bpQr6lUJCWN2oz0GWjP2F5YTvuk8vbAXfRqhupL7kHC6s7cdZBbdo3xqm3i7WfnK9ZH99momuWMV9tWgchoHqLz05js2w%2BtzCAw5x%2BOY8R8xgUZEtW5AdY47dxzslaSBawI42lDa1tYozvohcw8WM1qFa5DU9C65ncVZGAOIi6dN0qx2u3tSjlg2KE4E7JBOTh4w6PqWvQY6pgGUfGJQaUyFq1ebzJJCWGAu%2B4kG%2F1ROf9Wvn%2FNRUKLYc1XGu1ziBc6kWjVXZWu2FN2ORbEan03KZuKA%2Bzxw1QyMzP%2FZdhKZRVQypUsTwMZX1i4b%2BSnviF77rz1%2FvZYD%2FAZukypk%2FLXzPjDK2dTYUoDYQbyolZOM9EEtjSysx%2FjCwQh91l71JB3%2Fnp45OSwpzgd%2FsvCf%2Bq47amNNXazLfGGkEYYME%2FGJ&X-Amz-Signature=86fd8c5a6f54e38ae8db29dc13433a3ab9a53702a70803333493df6e0f022c95&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGJOOD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDiIlTiWulTcXBjdTOzE1Jbj2duTYdzHOt0r1JV0AV1UQIhANMNBsrpBtb4NBtSJauZFfwK%2Fy1m433cu8Htc3QqtP%2BUKv8DCHEQABoMNjM3NDIzMTgzODA1IgwNTwBEEvguZ3yflAwq3AM8CcAD4Db7LkSskAi19UfLdglzkAgpLXgieI9tYO9ifv9sMM8x9WrpiMHS9Hz9sRUzQfjO8lcFNaFCQzWodj4h%2FCw%2FhkbPERZ0PMWrLiqj1Sxsod%2B%2FXf8uei5RUUweIVlUN0GoLMRsJy7WxkanMdkvJPOoJr7mKppQeasaPM5d%2Fe3lqyRjYEWVwNO0JwBpkupgrIW%2FGavcK%2Bmw7SgxCDcI5zNie1s61jevE85jBlN6yVkOYytSvfawJJGRhvmplGAHLlAmJfa9vKMyDPyj7%2F0bnCXBpXxeT0Cg2oHpVVoZo12mwSekCLVRTRrB6Xx5hEwxY3Kl8cWS9bfr9Z%2B973FPp5vac6LFASEVVDTrhOQaCuAxS4ftP5WhZquLBul4P0BBuR0piTwiIfoay7SDqiEF6WqSIL%2FAjsgB2zbine3%2BP%2FPZXdZ6g7T%2FUHN45YR7D3zFc6vHupVNUeYovX4RxHZZih0HNgmEIzpm9Zj%2F3WKeTPSmtxqhqoarjRsVv1NyvlOA2r7jZU%2Bv56ryDf0HFPHVOfH2Q7LewtijA%2B8FXe5wVBrO3AbqzwKbZR3cRY4noz6khWleE5m7mZptV54jcYyMsYlW65Cf%2FjfrUfurjyw2Zo1O39SdHNypHkc1PDDm%2Bpa9BjqkAX0Lrv2dhiySIy4ogbaiTqIKtGxp0P3TdvTefx7MVGAwiV2GKo69Y1tvSHXti5OBVoglS9zVhNBhjTfpyvMgzwdsR5TTUd3%2BJX96Hlif4hprfuXFJW1K1W3eJlZCbnt34NqoGrSUj8wOey3ezHA%2BHRQj8baTEx%2F7HJcPfTrnlVzZWYo6jyFfftYr7bnI14ERdTr5yH0u1RHS5ItZBiSL1C1hNEiU&X-Amz-Signature=57c689a7e11389b071173d315c6068a69959e3ea3a907ca37342ca12d7e3c014&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
