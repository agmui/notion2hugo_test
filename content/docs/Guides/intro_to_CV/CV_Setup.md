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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MF5D3IK%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhP35lvZGMGxBasAB4bnmbs8QD6olrEd16EI6sBlC%2BtAiAi83bd10AMV%2BYje2spQBQaSmC0XsVZBC1ryXEdl%2BxmQCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMHZ6X3gQQ%2FGT6LGJSKtwD4mvn4ur6Vfovz3aYo3XL8iQ9R9ObuFaQUkuSaST2EaUFWsf5DgHPxWdjpEkEk7meb0XjqiqRClhHJYYMUemO17lTajBrfaVUWpIHbhWw5FkBsEQM8xrWXphV395heEswna%2BvcfOHiobJfdUC2MmE8%2B%2B8PfS3qK9j%2FQEJiHZO2fSUOGC94jZN3xWl45OmJxAzg84nwv5thHFqy2YKm3bylDBGOZ6Cuxog8Q9QYW5QGV93NPmhWR%2FfMv4CLmkJneRTs2D1V10lZUCCQv1nSLXbR3l41xBij2%2BuSRfgi14eKlHzfA5jk5pVrx%2F3QIFhOjETI6%2FtcDUU%2Fe12A%2FxblbUhD8tccxQr3%2FpSHbk%2Ft4ExBL%2FKmTKdp2hUkDYMUD17NM3g3euLoTWJ1ONtaVU34ITku1gWtGr1hHO%2BBNCNTm8F%2BmBDhxKGpGzPAonGYVQnTk7oLo8Ocvkj7z8WI1foMLKcU2MYnAeXG%2BPFVxpwog7KL4VJ5DIidGRmtp5U4u2vpAX3rI3NAlM33e9YAwX9urZ14iSbg%2FebglFFeg1j%2FFUC%2F8bZr1uGgFrKWTEwzYMuoGQjEcoV5NiiM3%2BImplDSbDZptorRXlUSEXkRsUkAZgT%2BZdlI7CXIdI%2Fxjv%2BG5swjKO7wAY6pgEAj6id7xTlgDnfCBN6aKvfXwr9qF%2FzUfp0kwAQ6Sg4y4mERdICkY62WzHivjZnnvKYZmyXfzAB0s2eHwKm6USOWQFodGrVVSSAjbaWAddEk7FP0ym4a3UHvtMOZMRStQg0kPh%2FSl7Zy%2FRiOfTaoeaQXS8n3uziHZBvPYBsq1Bx2Xl6ii2dTQ%2F8GfFJyUsOlRutGAB4I9J38o5NzUL7vufYtPWQyDeb&X-Amz-Signature=9a27136182db47ad04e715b88b32db98a4a77b9e0b2c7e46075510b3d5bc23d7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TC2P66T%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8bIIxlZHx3Rq9jDX99LY2aVDvU2o00plJoN7Diw2N6AiEAiUPOD0WAxBSm4ljwvYibQN4WGh1xuwZ1r5lUbRSeG7kq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBHb5K2EuW4qPWCvoSrcA%2BNSfvnDDrlyetSJ0l%2B61n0MSLIMjgmsQ8%2BteZzX9Ml%2FXjJQaMM0c8K8a4X1tQeoW%2BnknmMyutK6ID4F%2BtacsQC2nCoRBCRaGCh8ZhdgmF4oaUm4uzS%2B6rbufBbh5iEso2crCRNKppTNud4OpPNwAVGHgpSepBfHVNWHrZWqSLLrqHlzPkPwqc%2B%2FR1Cewkoa2TRRNPI6RYj92WAU%2FIMsyb44cuTxCaoY7ktWEto0tMy%2F6n4XLw7UCBZV8UHZvEotGz142aFRso9DnDUAJZBqS%2FmmLM3Y6g9cJG0ZzjN0qPdaB4V268iVgUDDS0gt28j6CU3tL2faCkKgHkFaZIuedAVuGZww%2BsExF0w1kGRtVNcjRWfkGU4T0oQqiJECX1Zt5tgUr9i9qzCNT%2BTjh%2BOFKTXIOOrhHZFkcSzzQ1PiIxnL8C1JuGbZjGEpdkFpHqC%2F%2FaYZa7n8jUWhcqFct%2FuiaHH2iddsQNwecQ6axGE%2F0yAfKGrM91fmuP8tGxkw16gCR0SGgOGom%2F90%2B6NFt64G55w%2BGvo8%2BsD5shUROP4g0eHfxqoCUW284r1KkbULjnZTlWfQ4ajupbKbaKDOGcIsOcYs5UEb7G2%2BZtyijLFXdakKtepXJtt2BpJsI7rwMI2ju8AGOqUBnQHhHpOcVarDYMuyMsYvYvC1G77vQpMqHEIfFRcR3pp29mxChsgAk40dxfd2cIJUmxXXyoINWlEEjnI6g3Bk0HNERr%2FoyPLon6LVvf39iyba0CB7ddma50rzV4jgJXTmlBEVwjxulf2dH2jeWHfrDPxcHkTTrfziL0fl8VVZ5S6ihrVyaRahgW6uDJWIUmbIVyI2oT%2BwVdWT5sragy6nvtaLMGiQ&X-Amz-Signature=ed0935724f10a472e863dab074a2cbb3f5ce5d8779e5cf0f7e6ad01b0c86096d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
