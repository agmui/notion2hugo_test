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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNAXTCI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDzwImDwSWDcNCGxaIKyMBJet16nPE3S%2FW%2BGydanFVgKQIgOC7rUfTwp7j4umJn9%2BL02fXrJyGDbNPXpvQCq%2BpuDMAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJb3pUoPp4%2BISlsQircA%2FVPLn7oVqENENq4rh2%2BwYl4%2BgbsS0fxirMw%2BpooreqYfMfiPObA166G%2FNyS2%2Fu9S%2F2lRdFQr%2BosaMJUxOAkh6pJ1FXIaObR1ifSVFZgh8es38n4ulZOdPQ5IvU8Ze1hKIUWkI%2FbyQKD62G5f0byrZvccjUxclHfHlB8Nku9CGfQHmcCmKxHAJy1qTEMxvQ5Tt7uHJxr3IHqM2UroLH%2BzLOqtK5RwsopOUCzJhL4%2FzEZB2rfX8aNre%2B0EnVusS9WERqJkCoplafe1BeVRm3yBTRrFd37X4Pd3xK2dRg6%2F%2BJZl2BLrrvfk4QXre%2BOpNbS%2BVoBP9wxnOmrOJKuOncD7meXlIbALAvv9gcp%2BwvZJohg9n67elQ07oT6xxwmcLJzJ9sac0sRp3Xnd9%2FUCW1g4%2BFpVAXvwmv297T9Df3qC2Kdqco7VXcR9pJF3t9idNn5hIImbxAIwNZ5yDiU%2B3lDSo0SK3FLinIqJc%2F%2FuFKR2KCCQsDN%2FAOyX%2Fnb44h47GxAvlkvCVU3uTDVHoJWngIAnymNHUEObbgZabQp4cEuk5YxZv%2FYqZ%2BCYf5NTZwXVGgy9FzdWIlXeIY3jp%2Ft1Et9kYs%2FYqHhrrdxGnW3n%2BzncUtdAIUVjsEOJFhBAzW6ML%2FegMEGOqUBOH%2FABK3oJinVk2JSTJLQSOLz9AXewQ1f6%2B%2Bv6rce4ST15dz4HBiYd1ahRS01m35v9UOBFeCswhk%2BXeOufZOJl%2Bfpy5OWyTsSbPhNWb0QYGQ1A2V93SVaL2BR8bNMfgxmS31eVYxCRook%2Bnu8zI4%2FmhDlzEzvIGO8v4ZldwV1BDYTgBTX7SgzmrhrklXw7iACV25BLbZgSAdCpxxCK7BOW0BuMVZN&X-Amz-Signature=b20f9c7bac4074cfc93a9751eb8bc930dc42e530bd7c374cf44c5886fc30fe4e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2E4RILL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFhrAzpvbiMALFcCsraljGK%2Fz%2F44nmkEcZGmibwe9iO7AiBKK80JpALN1Iu19WBBGFUuTLTLc5J8FMn2Oc6JU7yU9iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb9aAqjV8MGu63ptCKtwDwl5nfVQ9UJakTdIa6TQ5QaY8JDdCi5giOW%2FhWG04NwJl8JNcIvAmZ%2BS1%2Bs%2BVvAVkIC%2B5llXPk81z4utP7J5bcYGXkTJ2F0gnE03%2BHXISttjPPEPiUrXAIHXGBfL0j3htvAMdw9Le37dZ%2B17Kz5Czo6vTfEAlyR%2FPk8U33LvXLlSOe5FBTJKR1ob1MGZiH2jlpu9%2FhqTnvPuMsWPf9xHK9PEniI%2FTJY2QVU2slsPmL1IKEvdxTQ1p8LipU7ZxXub3RuJGhoOuRFdFbFezDA60ts%2B2rgLoPaJRjm%2BdLGdDGgk3XhT%2FL7SsYO2EgGlaWfueEqzd7dnKmjpXZbzSj%2FWDPhWbleXfV4uz6MN1cV8aYwwwkimrjp8ik5R0DsGz2Osli6BDLp2%2FGO%2B1EMLBAcpPlADclqtW3BrzlYDuv8QwsYsCMrqfXZBx0kOil7AcPrcq05G8VXLIKcCMdU4iN9BMu0m3yKkiezwPJ9CXJYWONKJe76wk4YuCu9h6vpbTVPMpqD7PX%2F1khxu4Wocgh1LuGEARt%2BqFdaJges7K3GNDOFnKoqwlhvwfIovx%2FZBSkYYrMtZ2LBxrLUX0ku3KCm5oJam0AITLErHaW6mw9UIFonW2vzz4f1pMn0UEG0gwst6AwQY6pgFtXuzg51SP7C1buT6jxaBqxOWCp8iDtH3WYayQsE4af7DeINswLqfc09%2FJUpxUf%2BjvE2%2BbM6ddNC3in7qbAsL61GYTksV1fgZe4KGHEW3FjIjZ%2FaxDHYVq0QHtWNms%2FQS9vEzWh1jwLmRg90fa83Vb0W6VYnnqPVHu6cylEg7V4uRjvQ8VZn4h%2FF0qX%2FCpnfHB9%2BFuLxz87lOL3QOBxMcwl%2FpCrxxh&X-Amz-Signature=4d998d22b5a551738fee55009d8fe188669e292f443c069c31fb3a7132d32a70&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
