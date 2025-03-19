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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6RKF3SA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCqtYnRbmKR4VDQe%2FDyJTcg%2BUlFdrlejvqXeKyLosg7kQIhALQG91SsZfUDcEd9%2BaeD3dY1AQqHuwO%2FHODEFCN5DDtkKv8DCHgQABoMNjM3NDIzMTgzODA1IgxhjCn%2FDpqqM10LU0Eq3APON06X5DjR6KnRTpx4tY4HsB9nOlcVYmzeh8WZP0bKKhvZsPOUYuWVeZHb8E0IkUQ8viwLwUcAlzcM032%2FCiayUtuTM498CpwUXIFXUlo7MKPuY6nj4joe0FImmhVWUqVlIpleQT3tjqYQxpmzLy7nnvCmGYH%2BGuD58H4YqWWXlkDkf9K5IEBpR8hQYEjuY7ZN18WVs%2FvtKHUSedPsJhFXVXRniKwZbxy%2FkqSAiKHCFiXNlmpF1xOe%2B3zCUghoUpTuEkyWepSR5sa5MLAsTkgN6YUZl6ls9PUp0cprFXyxGtDOJDW%2FpVT0DzwIbC%2BO%2BBAwTLx11jPHYn2Jqa3unV4DwVkp3Lvh6Cc4tkPH%2FmmAKu30TSbXrMWufM9Fz9Xrq7ESUL9HX%2Bu4G7rWNvMWQWFkt22EHob4EzrrF%2FcvQR2AUo3HBC324M5KV0LxubNLtDcqwAiPYgKdtyJ7gTwchirPlRLzHjyeR7PBkrRI0ll8icOPcv0YS3ADhRIJfq0mflwHnaYjEQ%2FHY8AFm3f0ZwdfBXzgwvAsWoJz5EBpXAhlzEtweNmttwsq%2B9VSQDl7Np%2BPRBaDhUSlOorAkVM3rRzOvWkaOYm7tnzKI%2BN90ePaDleNaK5dGM%2BBK%2BJxEjCNvOu%2BBjqkAfL3QzmFWqXmDjhDoxbRlO9maPEIR6%2FgjOqc8bkpmFcTGJSARdNFEggXYqRjqBUvw2gM%2BEI%2FAQduEQevplK%2ByDTNymXfYUpdhL1WnE0rI2xWizHDta1ykBfoQdBHlgFHMI11K7NNgJfQaZab%2FL%2BEueE9jpASH47OcLaI1q3s9M2DnHFFYwo0O2gQCSsWLTQSOzBLOh8lIzg5hoyqwxW%2BN7puivi9&X-Amz-Signature=c34326c5546913d0fde72d56050055d6afd9285894f94ac72202e7d5dafed90b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCCXTVIQ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIDh7XLbx6Um1YgN65nEqxIcfD2I5N1GmS3jy0ckOrT3dAiB2qfKWm%2Fve3TtEnLTigLm3FhbI%2B5JhdoMQEVmkeIjbGSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM5eeFaxRqN515y60oKtwDI5IPQQXr8QJL6xLVppeZahwcr7R9BTk2JECnBsUNdZUM8ozXjoXreJuX99Pj%2BLIHyCrplK2A1vqUovrHLo8d3FwRXn0V4WUX%2B8Cd%2FsRhpO8pVV1WwnwWoQKr0MQ2KuKZWNNStJMLnDS1asz%2BEmtov7zpRbD1MddAsplLhiqmKPysghgCrwbgx0Q5KX8QC5OU3oce4exS3Xbux1kFuRNXAdibRM1j51HhXrf%2F1O64GwgZLzUa9Wg7GCDuniI%2Br7%2Bm1pMVdNarB3nUNhYYIl9wnnSLjOlyFVhhw3BJWZ1CiLjrCCeQFwCinCcALZd4JcOOhahUP5G7fzpiDmMqUI8dWXWxT4QducwgnLJMBjqPiWCzTsJ%2Bznk%2FCWeCbEqDAn3g45hYMZcAP6oaVh1Ea73OxdxLgSRa1nVHnU1bRyRGTISJWKwaUqDBa8N8uM88NCYerqRydKP4MfxvZ21zuNaJc5ht%2F1H0gEL%2FMHi0778SMGLEIZi61dqJ%2FrPkKPmvZCw5Sx%2FtgMJeur5wXDV11sNWLxUmMibPxSSq8ntZ5GeCsohC5hgs6HalNbfS0oI2P42Lfm9nwu3CHyBf8R8XjM0nF5I%2FbF0rieoSWCS3S%2FWiXL0cetiw5YcmdTsm2wswj7zrvgY6pgG5YxGJlfaDqVZTjQuONjkAl0nvUL5%2F21ZOmlhjymvOXp2zAhHH25PwfqEVwKZ24gqnLiaPm1giG2593wtgjzT1rEwiq0uXcCYNlPcK2PBTzWIEyxuomz6L6kToYdKivLfzHt424RmKdg%2BqYrPXH%2BBJzBoXH2L1odWgVNdKLR2lapFdJAQGSW8SiajS%2Feh6%2BNZwhOqr%2FeM2Xg5DNTiOYx7kkJfd1kLz&X-Amz-Signature=858692c3d1df45a37a9be1597feb95de3d86ed543b8e110f0ac6231a7e190749&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
