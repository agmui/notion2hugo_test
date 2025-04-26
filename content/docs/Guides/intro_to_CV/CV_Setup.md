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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OJYA2F4%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0g%2BX46GjxPRkWA9VGxnF4rYojAhQdLld94MpI%2BaxFZAiBdibwdx3al6oBuLbAXR4Inke9QUWuR2fojAjXk1MWfnyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMi0DfyreJEotrNLWxKtwD2qSan%2BBZePpendve13HKkKlnmaW%2FqXkLNZkBqJyjgQIP8KqTwwJSAa17JkdhuWpv05MRZC2kcLcH5y59oemdc1P9wiopLkz%2BKwbWh3XCbtjRYGnGPsiBetWAU%2FtWzmyr4%2FOjcjiu%2B93H8E5jXuT%2FxT%2FXfU41Ps9JYevmbeF2VkuYROLZubLxYfne4%2BRavnG%2FMyvZtyS01deSOZSiGsMaDNakZD5%2BzgkpwjFZ1vLjGDM1XjQX2scNqt3vmhP8rSFmG%2FHG1XcA%2Fd1Em1qfaGE8Cot2KEJrpNbIM6ZXP0N2U8Qnoz%2BOXvE67sLi2mcFVYrDBU2gs8qzmt9yL0rzqUc7PWYNUm%2Fj3oyGZa82CCNQfcNt7OrYDBt%2FbwXavlExNt8gPyQQtshoG2Z1fO96C2lF3AZVg%2FwsocUkAyvbQTqHJZTGPtP66Ak8VsWOwu4jbmtPoySqVnfGnVs1%2BnO17gpwSA%2B062mhviy7Yey1fA0nS6Ry5kC43qmgUFmbyh9kCNNXA7wc4ca6j8%2BBI0ZM91%2FeO2wVcOifJ7lsFsgbra6o5Io%2BqXIyBKG9JcPIY4%2Fo60r3YLsscGZ6ikE3HJ3bhrcvQT%2FEmZk%2FR0oy20RkpjcuzmW2k6TcP8AnggNkINowsoSywAY6pgGSbY0G6evAZYEiiIJPoVzhky6rgqJEmPK29KdstsCh9%2BeCXa%2Fq5ga7EVn8sSvY%2FFwfIjLHZPXr5xZ4b3c7uaVRE24LEPt4bJ6kKFKTC4SAqkrSCgDZJ1ePmNdT%2BCHaXfwGJNXVybXnWsD9PQULT2IjHfqOuJFSkBSa028ZZEt02QbLNUSALZijYfaAReA9SRU80QdBpznKjlY24Liv8tmzvW0yTVw9&X-Amz-Signature=36358807f293e37a783c9f3aa1ab2477ef6f640613e952d43364f730b49f8b15&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBJ3XKR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYlMnC381D5tGPSvKm8wMdCntHbmGcyUrpBJUVRAFuFwIgDq0JSW07u%2BJSTbGM0YtML4sHdKCXIIOcHSMbrJBp02wq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO9AIOu8Dbo2CEDp3SrcA6M0GLa8%2FpGknMxRuIK%2F2jHE1h%2BQ3cIGaxw73yYpQ13UniyVNBYW4sG8zJWi8PQpoS8OTFVApzb3HMN0LnAuFWAdNf5K9HajXOMStBMAZvnR3Lj3Z3vtl8raqiC9ZmyHO8a1FiWBBBJpz7Xh8x3sOEKtfQoA6Fdceliy%2BO4Hs4K3MGu0kH0OIWQxuCKJm0xV9qG6%2FEeNpI%2FyMKbNX1JvpWis87jDDntGLC7eLub8LaIwmutr6Y1GCvKNxHQCXtB4zWJuDHbBJv17VdlcImviY37cRUUg4gVw7h%2FuCqEjBNM2rFiMeOlSA0O5hMw5N%2FR7la8olTHwc9nvcTCofgPH%2FJW%2Fv0gYRr7eQiPvarY4%2Bq3gc0N5Clo2AWmrHRux%2BA5QufQZIEt%2Fx6Zmfhj%2FALOoFbDJXswzJ3ujDLNcTBXL8KnGruHPd2dMgYdE51GTneePCVczuX3ohHZtndjF%2B4VGQbSVPYFDI6VR2dfW8inaU1gmCkRHT2hRy91zEsWSWLfcCT1LOCJmP%2B6oFudJf%2FzA3LiLnYKvIjWYn886DXlw5WyZweu%2FEFtjPCloPna3QLpvHRrveZl3GZa3AkM3zxsmmAcYaOAP9dfBoSIRLwtvTws7xDYn04syZOLHVKIGMKiEssAGOqUBFbGupxTLHEyOIvIUbiw3kNSZ%2BIK0HXvHVRJyPbW%2BBoHJ%2FLENeRtimIxMS5TRSs%2F5al2KAojwat9eMjj9pCx%2BnYZvbJxMOpYWmeVMpshJHLXw4D2lAOth%2BguVNKxGFLPegfs48LzzAe40ZZb%2BtWI4u5QEIKgtRQTEXelWcX2CCgS4wUWCWtIKQSWG1I1FKfm%2FOhy70aLoICv0zhKIktHcmQ2I8qgT&X-Amz-Signature=5df92e1bda2529dcb409f45da4a6afa8e7e320bdc51c4fe14309a8a9ce84b512&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
