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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VITNFEJR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkyUgTXydKTx4blcTREO2PmwqXk2kjNEGiTAiMUmH8cgIhAJAr7bWWMzRGvKxrYQHD49OsTC4JQQXJUbZ%2Frc5A2UL6KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSKKNB3fJQ%2BN1VjTsq3AP4ElGl%2BqubwlKNcUTix7uYAWlnYmsY%2F5NNO08XzKLsvsKQTNGIgSQ6z11218EKVkrWFCoamAuJKCUkk5RKDcsfxAnDZhUIRLdr9Vel5ObXV3rvE0phIgOdfFQ48Zs%2FOaqVMoxaB33xh1ZxWY2Pi5H213sFgZbjRyaQd4OHM820tP06YzOgGVvRnIRYjMRACulEoM12YoJZ3skl62S5AMBFYZhwfmn8xRyUQaw%2BTdkIOXRYYSBxu%2B1DAxRvDsIo%2BkP4I%2BCHPyT7sOdTzBDkTgudBJoFDiJ80fJFonebl9sM72AY7Gsykywkg%2FG0cS8FYMKbXXas03OqQFHr7B3urZ8qCJO7WPLb%2FNVvLHnE0agx28ACKUSvImhwMmI0zRuuq%2FpbLmyXvgoVfQm4bzO8OpbYUsrNyNzlQCfOLRcA7431S%2FOmw9XD4GgC3M7ImyBURm7ryjN4aGXloXUzywazh3JfNgPAPPzHdPoLFwRgYNYhStHCky4YXBLVqnQeFl6LLKaZAqUcviuW6clFI%2B7n5KR6GVWrAXxoNdhv4EcsHptblqhGO0H%2Bgq50YBQBHkTDekD%2FuAtAPDORPLKTSq1ebC1Vy%2FSzPFtlXHfHuFyTS52MRC9oL2qRCFu2Jnw%2B7zDw%2FsTDBjqkAfgqw%2BPtKCz3NIOiDe9wTwL8LAqICKWCPjbcKvwjYb8iMUBIl%2F1dJzJH6O%2BauJprtyBUATkMfAgef6VVMxPSLxxCxh%2BwOoQ01nVPXkDT%2FC%2F10C2MGZ9QyX6qKau8rPe%2BdypIUyHnoIdV9Yem%2BUwdUhrDlwHYbwK1r14RIytDIf7%2FortZiyZYRLPjmgz0fA6PYefOX63RXBwdVtoKEgYl4LBkGyMa&X-Amz-Signature=30eb820862789ae4194de5ef462b3394277dfa41a49f4df2ed39ec369c3d204d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLTR4T3%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQUSvjwlWnAo%2FBer9xCEvhX7wK70koUlodlKVxarrVhAiBGUY3J%2F%2FoyLvv8IOi2Vb9y27oDOPLWfWMbLgw%2BnhuTdiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ6qrLT0U%2FZ5Jvbf4KtwD9dUBfEAZRlQGUSRJlL5Zya3sbSb3R85bx7el65qm5aQGbIDVLswC71YNmIRGdD%2FRcSpUucJlAKRcP2CVg05xCERO20yemfpwkvLKEpwBjwmLAmIiwnXnIsF%2Ff1zG9PRkilWHBfWM%2B9W6a%2FjLNaDaj1yE2%2FxHO1wtb9dGIr7DPeS%2F8YeHnCLFjkP64sW2%2FsDdnLVBHa4NLUw0q4GD9Q2UZdxCpcVXH7aTYvejFgUq4Vr9aBBw4pYZFGX8%2BIINFg3w1n4kq8nqEwx6QPz%2B5MebcLVkRHjhgkbxJjd1gcoqPbrUHGuaUiFQNbO5kIdJJVGp4SV2S5U0muUwDqObMLFMx0vUCveR%2BPhOLbwJn1QoQ34c5BTNUHgAGZgkXZyNDp8znRFzbj5P9VlziBnxP%2Fz4Mohtj9ZsWcZmTcBrW%2BHrY7HI9OXemRCy796PFgzC792MhmSBCsFGRYeL4cePEGMiMuQVL%2BwYw%2FHGMFD8clAUg6BTPMKCV410rTbqfsrKx3fJNr6CNErbnDCHCRHizrDqxakJEEtuB2PVFgzIqCBGrDkZkESpBuL8DC5SIImp6hvkb%2FShv7dll7tp1D9RWT3qqwTUtNYgKaTSKVTLhtVHTbRJEukZrkcdLvzYIw0w%2Fv7EwwY6pgEZFQOhJcaUQeW55qtJ3lj1RJ7uDl6Wo%2Fu0FRcn3yKl%2FyDAZZSJ2KJ3z%2Bu3BkeRLEISeImoVbvvKVzNAD2ix%2Bcy8OYmcNwmsTK%2BwpzUB9gGUaa9a7lkS1UAyLUuQPRxN%2FbeGZDv7s1QAQXctdZ5I01o6FG5MTXFFCz31H0n29gady0j6zfYb7boxNZlK%2B8OWAPnLnSrwXm3Lnas4tZPy%2F1ihugtPwxq&X-Amz-Signature=9d33e9010d554941ed897f956ea4dbf8d2de3abf70ef1656d69408b872609376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
