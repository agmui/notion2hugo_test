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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYEVVYJF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI33Y2uJNaNLpLoT8dGXy%2Fusop%2BOZe7kCAfaGPYu8FqgIhAKmc8tI1L3bCbBRwf2q3tmEknT9D1kZmHbof1JmmTMa%2BKv8DCEIQABoMNjM3NDIzMTgzODA1IgzUCIm2EkhSu4p5KSsq3AN1w%2F4tclPlFNh8%2BPePxdCK4urUcdJN9mw%2FGFnKf81rSA4c%2FGv4SnnTrrA1WTOmbBlXDFzJfx1%2FOILL7xCpwldXOyKLfbA2N7RR%2B%2FqZiJkouJ9kSO5i5VVh2ibqJUIaG2LquQhOniQX0VgU9PpzatS0IY12X0n1vduEM2WDRv5uwMbWn3pl31hnf6aZkunOJaEJMP6J8TRtjkra1MSV19cfu8CZZIPBeMBTHqgTrDT9X7g%2F4PI3qNv09eePpIImpjU20orjGmnwCYgntR%2FthqiMTCK4%2FKBS%2Bx%2FfFHXmykdBb2rY0SliGydcyQ3FLLbL5ObRHWCa1FaK3uZIpqycYZEUIJiuDAFhehH8xgJVJaf6kS5WhjZYRh0ljrlclC9TUivD2S7OrfquVlsINvbFCaIWIpPkgGyYj%2FvokL%2B%2BhVh90T5Cpp9yZE0jOJKNqIjQaUWW6TMsEQU44MxXFOOrH6bqyCw4RP8oOCWbAMDWlMV3GXEKUva1em5KF4%2FK3%2FrgYRAZOOukBC0c%2BMzYo%2FVu2AbALZTzwPRfVfEthTurFWo5ZsSd0b5YHC%2BQe2SPoxXTsCVfnS0CTg73IfS3fgybKdpOTpx1gwrdlEgKDeNZSuH3Xw0riuXIzUdNMrTJFTC17ZvBBjqkASXyAlaL26ejUZvFCbTW9etFe4EUXmiImD37XfDp9SdRJJfx8vTzW4PRQK7IGNyMD75pB0g0xxj6dBw0e0dDevoQZOrHaNJBGwl5Eh3Hu23snCJwpgY7%2F2bSK2c0amrlVHO1tTY3wIX8vvoTBNCk35QW5S0%2BcXWdOCkEuu3HYYR4XXknc2wx6sWTUqktDt%2BIgdYL0jHeeNV9CwHKIMWdmxzeJ5tQ&X-Amz-Signature=9c0967ef7438048439d373ab4c6818ae59a0dfb7f5ce280a9b285f95235ca428&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZK232P%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxPA3P8XZYyLgsi41yZvS%2FWz1Gecyi7h2cb%2BSlH1BaeAiEA6THl9%2FHeYZ0BkMhJE2SnoOJEPwq%2BekIyRIbeQEJgKrEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLxAQRP0wgMbpA70xSrcAyyVDXiLObHQt5xFSw6%2BV8EP%2BSx5ew62ZQiCejwga31yi3820talrVt2uGyJR3a4gIe3SKBrms2I6O1qMhliqjYrywUxN5GIXANvpe2jU3nuC%2B0MGb%2BeWSEbMm%2F1SOBkfIVxERcJXm1X55YR5A2%2Fu9SP2ZUKc%2FUjr98FBXJUszad5k68vFflOAMTtAPur6x%2BwdSAZUkJfSa24ASEsJRu%2F%2FKViIQ5A4lSlaja7PpkqfIb4ic%2FQ2fwuD7YoEhPm01NU3GFVkOm50AyF9KsIPCAmkSf2i2TxuQ%2BQLtrRUpUdUlsCqNoupkAUCBRrKyXABNzcpl4TzNLQn73nC01bzgYZFrhAZ2OTIxm3jCh1Rz5oweteqw7354wt%2F4wegW6tw%2Bkmi%2B%2BbhwLYtc38JZn4%2FKWlIq8Y0X2JwzfyVSwjbsnDlx8ZNvL5aGp5debv7gHdX5aqOGTA0BW4IBzzMmtI8LWAGGoolvW6tYaAP1XkPEyJcmLsyG6uoCBexz5gK5kK%2FTRMP9%2FrDoossH8eOQ6cRBBKdUfTdTRgtrAcBDl996GyRt%2BhdlCJUBBNHDugehnw0U2pS0hfPFywr5Xgd%2F8DGFsgHyQMSen7c4VdIKUbU9Ezh29bIXnwIIXf%2Bwb4XjdMNf1m8EGOqUBeeN8H7Nq5KjHaSMhXLp1G3vIkHqEeJNLccoFhhHib2%2FtjoWTYfGXUiXDQc%2BED04xW9DaPzbz4AVO6dnzxzc9oHhfsVuaVRfpxYxMBfjQUx5HzXE98wPYShNMRvJO3aZTbsy5tkXqWz8GRRfofoG3OCzILdBce5AbNbu6MCxOK9jPv4uDdCpjugGz1Z%2BW2mtM0hiYP61idAo2xWv1VqZEV8FoHYh0&X-Amz-Signature=05533f47a0aa184871a54419c0af8705dfa0e919868c99a6c8b8d2cc805d5224&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
