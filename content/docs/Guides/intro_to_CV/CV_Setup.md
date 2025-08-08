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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656T7MWEA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDrP94JkUBz14ZLVfwU7e6qrSZKoaKTIPbA7BOZHth8vAiAmHXVgOYfTOUT0PsJlxqholFWin3mbh8YI4CedYIOjcCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAoB0Ue1UyTD8iVkYKtwDaJB7HHtU4zigsQCPa%2B%2BuxtrYaDm5mOGgHAVDAxPYp9FRrO5ITaZ3LPt%2BN5CCu%2FQ7hQVmZgrnbnOmwgxJ8xsnbnvPXlBqMbWgXP%2Bogw24e5lrKsw%2FkFOZPeMoIlJRPvvJ%2FwIRLkABQJt3YzrJE2aVNBE2v0RJh35w%2FduJpSuQEQWfZdjROWkIACAQYDks2dOB21kgpXbBdAlXXGRt6RWlCVTvtRuNqz6x4P8%2Bt4bMfwl1AquNWe6eCZa8cmSo6xsZWlzrvGjVKpH92DIxSkDV%2FIHloBv43mv7s1HiVEXs2fhAN%2B6m7YbryEFH4Uo1gLSoBWYHetNXqVTLHGBG0q%2BLpKpK1WLNtl7%2FPihLBcImF362QMr5v9%2FMcPgzL5tE0ng33OqNDvxAoh5TdXGGCmnzSsPr4NhegSTrWYYCevmXF5GIoD8GTCR3Tya%2Bu1N6jHBMhvGXEA9Y1oS4WrQLkYHxij55OSXr%2F7Ui2R%2FUVzqgWRYZ7vr2VGiSpbL5DcW0dpIT%2FKJfNakPfQjIjBhCwCkdsY%2F93cTD%2F%2F0DuZE1IC4vQtPiWpiqB2Y1JZOvjfY5bNTrtWsBuQC9v0kO6JGSXY88T6ZcyEvMWa3%2F9sFHvRLuN5xTdVOEVuowoqHXz%2F4wq6fYxAY6pgGUAjIRWzZt885Oa39pqjLH%2F4lbpH%2BXZ3t6xatuc3Uq681dalMZBvGwgsq%2BllcQPYpYYy7dSGuloT3eP9mFEaJqqE29xDlPxuQn%2Fv967QxPBMOXVMn4q9b3iw5ZsTjBI9Zd3H44nKFbiMCyyD3pvCLD4Oh98AAVotjkvRwmyMh34j0eeMIS33P3YSZW2SbHzA2jWSsQS2A%2BwWfwAcA11R%2FPElJpsZOY&X-Amz-Signature=8ad3563e865558434594e7148d8febd32ac9726a8ac1ff0f04419ffe023111b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFRAWHV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDoM2FtdpzswUZWZX2NaqLkIN5ONPD6J9qrDpn27UDRaAiEAgRPjjY12geliLcVOPbj1Gh%2FOiKbYR3F82tFdY8FGkh8qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAJyQrm9VQ9G0Zz2yrcA%2Bb%2FA%2F2U4761w%2BX%2F0NRdGNgna6ObhZPyrw%2BbBGbw1AniskRuNVwV0YX2AWHMK60VM3%2ByrVAUm%2FRdnBxyNhnuMwUcxXJw%2B9hmkbAzu2zW39D83BBzfIaRePuZbJPtKwUdlKtW%2B4r0iDudPAucOUszt9VvLMxbk0z2vzFOZgvqHy2xStfQr1kCUivVAm8EnTyDVt87HwxagrLPoc%2FTTd7UVVwZ7XrM0hfF0%2FR%2BjtnWXLiycLz7PUddsLctRiHN6RxiSoiNAureZej6Xmmg1ZwARguQz5kkOHK2pSl2PQcmce0H2m0PWR%2FXgc1i%2BH%2B8hxBk4f4yZ%2BKv0OzPDGLLkz2eKEgQy0aYrYmZutD7GLYlLiTYXyaNDjPbr4SpNBCI9NUnl%2FkWXnotQLriVqfsVrIf9yu1vZWfxqF5YT3vg492FaFlJffypPvOJq7%2FjO1Fx7CfFHuY%2FqhzZyLx3LAfAnDWOMx4WG78QOxGt3IhvUtklsGYsbAZm75gpES4XOPoGEerBdEd4Kw4rOtzmxcUKeQffj1uWf05O%2BE5stA97Ym%2FjNfIKvuFkkijGg0GQGC1AnqyfpiPM5PZQYBYIMRMD%2FZxtEmcTcoizSPFXv6Pr%2FQCcaf4oxpQcAPc8oSH0Q71MOKm2MQGOqUB1AdmpwG7LQ5iulpojdqKFBKF8olPJ6%2F4H96jDfQnd2KIyjQgLzYNkJ0LSqf%2Fb%2BCBH%2FA6zKicVnDunltUWzW4Ny2KCaj4vcImBmMYFperutHpQtQkKN%2BJSZYRQzaCiqoCC85Xm4N1nHdxCIaCfJ%2B4ifoyvvH9hco9QEjj0X5pLI%2BrRgTQw7P2RfZXpqsG6UizRncB43gN9TqrsMwQvsTx99kLiDid&X-Amz-Signature=d705b23e2a3e72f740a845f71ffc8f027f395050e6635daf5ca305b5bf6c7704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
