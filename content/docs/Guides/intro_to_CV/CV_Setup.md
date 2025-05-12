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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFY65VU%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDSkb7F5eX4i%2BJ9B%2F9g5pHf7LwPvPvJnK05ngV54pBg8AiEAikoF9GSOHG5MWDhYm2XfgBayAAiXB1MtWPBKwEUfrdAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHYrs9dgb9%2FZ95DiircAwpu6tGj5nhxSxv1000vKvy0C4CcElaHb14%2BCGlBA57sklu6IygwA9WpQGoFSMInDvQ5CCsVtYxfWplDRrKuYiYOla2Y4yhCfzietjPAwPmluZpKCqCWzP3M7%2B16P6Bwu1DA4cqnI%2Bfbt%2FEOjcgS%2F3CCcley67wZTPYadhUMozMdtjuQcDduFVjWEnyXciO6v%2BsjgIpFD6UY4sePRVgpCfrhuX7Zq6vXXyhnYw%2B1UJS6iot%2FY5LsiPqXktPoAhsvJxIUGF6lVfF9qs2U1eEzPiKH7DIyBC%2Bex6yc4vHesiCxoFamU68valwLbdyCGF8cjtah%2BVrwgxMGxtPqk85GkiMHK6vNis3UDm%2FHRlVl8ytdkeZmyDL2iBISyKKSPr%2FngqK1dv38m0jW41FFvdC9RBTaW9vJd5QhACgcDm56GqgF2iJ4VaT20bFCnPHXfWG94rnMeBH21ofRxv8oTAlh7mYZk7cNqHkhEoW3XI0HzlPv3izVXchrWZw9rFV7%2Fv1RnGVlGHR9coEF9RcMD83jmp1aZIqiFU%2FAE3%2FdRjdsMaKofjXqZ0YvmbVwZVY0Ccc7l8WiVBf%2BGnv01yPA4RfgmInl7C3%2BujjonsEcIKbz0K11bKKT4EBjkZ8mtV5wMLWch8EGOqUBjhXxcKYwUCYSEdFlt9bIq0lgp6Ic9hpron91Vz7vBYwhN36Fws0g0rFQxayATa7XxXHdb8SskVo5kx86YxybcZmTZp%2B3d1JV2nJVijRYO%2FLAsWytLlVkRy1bihfsA%2B0R%2FJrXYjVATzNZs0GZcyNXdzlVQbjOVSLHp2%2BYBZv7%2Fa1JJXuGHRkDoUoqlTThfSLSfS%2BiKmasP1x2izjyfxTkEthGpbK%2B&X-Amz-Signature=bed2eea414ccca8c799363ac8854cd49e3378547e204a86f6e991d5ea7c0c89b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDS2YTGX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDl9tybKPtk3D9feEzJxf%2BP02zAr9VP9dSngB58Fmmc8QIhAMPHLwIRoFXjN%2FwnbJSg321HOsVFlRHqAlRj3UdUHTlAKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWSkYlHAfXBs3gHK4q3APkCt1imDXPKNCTorZxOLoAppLscAALav1c4BwloK4UGvdeohgJ8KNxhwiC2qBwxV74ERLx6IU%2F40hkYjhms3yYNDyVeyTRZWR2IWWiSM69khcqt9SUL1gY8s5X4L8O6MflShA%2B21%2FUoY62WRjENudSiUjQP2YNXKSD5UqDumuFUuH%2BBryC9t6No89AGUX2xKkZHYe4hSmfFF3YEyxWl6J4zsvBr8zurkUtGUK66fwSqT8E4OwS8w1%2Fj3J4a%2BIBX4ZdLj0wLMxEgkvP4PmSDbM4IkQKq1GphAoIUXeIaJ%2BLvyJHcdujDwci%2BcgKJ2OKZQ0dHyTjVvfAHzw3Q9SB9jsbbofA4bQlwRBLtrbM7PyVvu94Fk7e5sUPasLJZBmduh83mUwumhS5yLItivJHVyFn3dSqR0rtq%2FGcWIl29gobVjyswTo23MOPK0rJ%2FEsS2tNb7R9a1nprRKU9JU2Zto9rrK664oNQ0gTcjgULEhkuch3bbwNP7X6IWNLS%2FeS%2BCTZtQmRT0HNL1EE97ZzzdBlxwpsuHeuGHdH%2Fla1ml40DMgQ10cTnMLIGbsVpz6AxTqr40m6A2N4DzejqR8fXik9TxZFkAQVzKMSFWWBD903Xb8wILrR56QZq3ayR1jCLnIfBBjqkAclNPB7qCsO0r%2FnxVUL%2BgN5QYfVYtNeKRem0tKgs8aj%2Bu75zqhVsOfZOo8GMynrP5Xjo0NclYM4UrK7Wjne3ojBfb37vY6q8KXchg0Tm%2FPYqF%2FrdmfF5Mm5lOG03AARPtegGzyGJNpC6XysLN0CL27U2612Q3JvrSq6uaEDqGH3pPiU04wA%2FP0IjP%2BhVMAfIcjfVVgoZ30dcmM2Nk2athx24h18d&X-Amz-Signature=5382843d52e691cc50b1f6bfe03e1fb4023d91e12d153dfb8759b80c265bb7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
