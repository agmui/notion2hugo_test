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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666OQUL5S%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfhccbN1eH3etYNi7GVkov6nX1Lalah%2BObtgczx%2F%2FgsAiAcm8o3XjuAmjgaR%2B%2Fr2FEzUtjR83nGw2hIUbzBimgiriqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2kUXuf7t5g3MHfDGKtwDkoWvR2%2BvQfvwnv%2Fy%2Bny672TSu%2F2F0V44uDeNTA6qoHD0s879ca2OnuY16ZmRyWwavh9fCECgsycad15xZA1Efi5sHRy7RMiXZbAo6rF4pFw8SDR0TTY1929Rokky9dFMGGqVSlVn2JjwffMfsCc10eljNTvcwm7SYKzKjHxZk36uRHNOKSJJnbLPUDW%2B%2FufO71gMc1WsdYQ3UuwJIIgP28FNsRBurq8jbIP9GbooJesTqBo1C%2B7mbEb8gNAJ2oD63I1Zf%2FTuTY5Kh4rkBcYIeJ3V2H1scw%2FWU7MULz0tin7FcrLuL8I6ern5uRhCstqKuRXcVSKwuLaGeaVsxkjCR0FlpJuj1HXdTcTI%2FPblYR%2B87Vry0PpP4MPMMGZON5DaARXYiXwPu%2FMbwRFQmN4fN4kiV22mDxeVnKKhDiktkWeBZ%2BClCaqT4yrGwNi9NLgOPHoDAifiVe2OvFC75tp3le9B7LDon4fq4EAAkD5j0EHg3raWKcWJo4mwyEJMPLSD6z963k2paMvvnF%2FVfvbJWVmoAb%2FLjZ3tYnPw05PF0LwKRa8%2FI4eG3yOocmDWnvyNbmEl6jzm%2Fb%2Bt3%2Bou%2FMthCoR7WZVDe9M5vNueaet8UemaOx6h9CEwaOaNdEwwksabvgY6pgH1lGU6EoZb52y4G%2BnlViMVuVyKmfaFINfIUZlpLvtI9IlTK2D0XEK5stl5dbIeusZzB5JtKvZ%2Fk%2BR14oDyGGxVs2Q3Y1kuH2ezYZNYzMghdoSKkj1Bv3wJ9B18Tebq5R4T14xnw8o250uwDmSoGzf869gTQzy5WS5xFFP35ctturJoy0uziDcS4c1t0Iz2uz6K76GW%2FYxxQSecW9epqHZDjApQVXev&X-Amz-Signature=a9b93408f1548f938489772ed71cda4a8729d180744eb22cae333d84685389da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOTB3KUL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29LobNXILP7aOQPhSPonnPJC3wu8D31RCo8YSb%2FWCkQIhAM8P21Tgdx6evogIA1nLxkaD%2BAombctuw4h%2FE2Sw2l7%2BKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhymfxJvUV%2FWNIWn0q3AOy2NFzGUoM12EfxBouA69D2L7wK708VM%2FvfQhjPQ0rMaqXFnT0rvVycH0m6jCSU%2BQcxi0Cwg5DEbHiBikNEeZUd2MQiXl5bOShQOrAh%2F6VOlr9e9Dmu7pkPPBBelX0pFJlswNgg0rbySp8CRP73EGwG8Ot2%2F4EBEmkBYoAaCvveET5xifZ8blzfJHrxKmXgeGBe%2BQ%2BD4BzHMv8ZE0NXQTbsvWilnD5fwToczBQ34P9JDcgHbvfi%2FM5h5jCfiaSenZT1RCzjnwnruToIbLHzIlndi7NQFChVTSeAqpHLwAcRgqpFjkhp%2BYpHc%2BbRAYp114U5g7tYzHiWJKGIp5j9mmBdpcY1LrBzYIV%2F9phAPfF%2FkHhOvPMo1sgq9jWhmD4K8217rbvvN1rPw6ie7Z7uUK85jkTG%2ByZel6UucH7tLqs8Isw0wK7VGSkVB7YmK3nTqfJRLkLtQMP8xUDQfQ%2FdRoc4RFF7ryc%2BUHdwW%2FLuFBWQnGxpBU663zbVLSs1%2B8hyx4eenwvVpVKuIZbt%2Ft%2F5cZO%2BXlDgZG9epp9UOd4qkeENbf5mGWkE6WOH%2BpFJbRDavxpIJSdLsUlePC3TR278G%2Fvaerj6Zc%2F%2FSuI23sH1cVH%2F6Fi7MqRNJusdAzi5zCyxZu%2BBjqkATX3li0GgJRAmwSjGOqC2jJEX%2BZj9Ce9hD5AdCKQySSNbwCLZ9dHMN%2FgAHEyBgJPkOXt%2B9L40QMOFDIxJHCE9RUFCDnDZ9YbdsSF5Uoi%2F2Dx6uzx4bVZ7ZbNH7TlqhoBS10pSFi8faEUWzMDVe1tiX8BENKO32hxhSdrRvjsHV6TwppOlp70FTm8k8xuEWFYt1lt3HQKIQfFUNmGK4xZabZnuaSu&X-Amz-Signature=a8678c4d255677873f2c2dc45c2702385b8ec3d84ee5e3d6808fd095a425c62a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
