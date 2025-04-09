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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3T6MPTJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD10O3CkJjIezYLK4v9KQ%2FREBDR5ckX5O4BcJW5IqAHpwIgAjD0An60EIPBXdbwbi6v6ibKUkwgMBMHwEMWiRjx03MqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM82%2FjpCAW3vKFX9uCrcA05r0Oei26Z%2FrXVM1QS9FmUj88GIL7dTK9UaJIIYOSaDvvua%2FDmDXRpwSUF%2Fi5S2eCcY2u7pshSEypCu2DhTAEa8bEJd3qGexkUPz3zl8XhaGF%2F%2F5gNsSx0Vd7JZajt9iMkFAlgF6a%2BLajr2L88Xv6fmJ7FiIDKDDpWviY%2BFOWlOu%2B03bEEaZ58mbzy%2B4oCBv3QoV9G15QO01KZJNBtVrHO4OlhxSLyp7ql2mLX7u2FutUgnAOiUE6vXz%2FT7aGpkSWYipx3UqbYlYdpOtje4mA6w5KFHb5V5O95p4Rr5qKl27edXqLpFnnYUyS2ySiX8E8seLGSDENrHwTnzleBXJr1u2PeXuhg3d2QB1%2F4cLdmdrgjCfNcd3Y%2FyGVJ32L2OtoPN7SRTRirUqGzuMu3YyyVa14EXWBjf7JvoLpOtKfMrJeOkqfKS9K9OOhG3F0AwtG2hD4k7tJv%2FyYVYAKt2gRCGQc%2Bx8V91mmOgeGl6Rmgx2%2Bo1FAidepItqQDE1wcVGJ5KL0AxENgmEVhiiHAZvfoXX3aRPbO3Xm20ZACrM5gr4U2ZPotnqAxayWtIk%2BMq7dOXc8Eo2rsGHQ5CUOcdb1mCRrG%2BfBOKaixJ0%2FzTVGckVq5h%2B6UFbyZPQx5hMLSW2r8GOqUBm%2BDJM6rvSrOpycDiRORrLxtE0A6H%2FATiBaU%2F0tk9Z5c7EEHGgCDrRcIw%2BSpyVLISrlgEhajAsnEjAFnbg5qF32rw0kYVGxm65Av1RIWGLx3k70XLBN01A4038SAOWo6Y5xL0TCfUBl3YD6wM3k5kAGfCoFtny86fqOYG5vm6N82O78ZhNtpCfqMeoXvIlchxWhCWaJnORs2Blo8E%2F%2F8r%2FQalh%2FH4&X-Amz-Signature=14a43a9300c697d7acc51a9d66c5febc06938205df086226140b906dff5b870b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURLO3AE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDYIzSKqtlaAKNr%2ByDBKiFvGZP7zMkbjQUz5qmCv7ZsuAiEAowlicMR5oNv4ZGTIZg7t3Bs11EtFjz28Bxv%2Fmv3xKjkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIITvajii4S6LLZQfircA7pHZlpUwImdn8n85QZ2p7LpVlC%2FGgSOsXrKuO%2BcPhYJkTEtjAqc5p1HEprub4%2BCT4En5PksMNmNnZEZDsOGo0BvDJLKlVTli4M3LucB%2BRnLhszbdZtc1YmpKoGcKflTXbNtAvhymL4mRKo9hJ5yBG8QE6tz8Q21TO3QaiTEhTzP9lJ35Ydx5dV8McYG5BRznbJyowsBWz16HPi%2FilTHW0m8VoueqZ7nJIa3i9ro6l6NOjY20SrNyRwu2ArDVkNWe%2FD%2FH9gf8i4kBsTym%2Fnoi%2FHPZkzHuLQNmvhCTtYHSM2HIRfDbidvRXOkVCoFgo2RBsoR0sTwqqrC96vnqQZwICJzTk4w0hSie4K5TJmI7a9cZ2Wsxe9R%2Bmx%2FuoiTEAWXPHSKAWRtyVZrAHVBRf9PvIxR5LgJQTRt3f%2BYlZmc2DRRK%2FexUMnihHRClqalFsSQFTjs%2B4LblSaXysZZ%2FZru0OpOfJptauAgSW9BDF9xEZO0ik2PG2X2vaHeBWcFI4CHlLexedueQ1OueA396Xy1ECU35uQojTcwcDNsh2SaqeQPjxPg7Gv%2BZr5I1fxQbijxXNxCOQu%2BHjyhfQuhgrba05KoPWOB2aZB6dgB8JbX4ZP%2FgHrOZlmXqZ24%2BoZhMMGW2r8GOqUBrQICFc6YLLS1UXoFUbebIp0Ikh292UBAO6GmSngsj95LLwHNjkPBM%2BiuIcP9Q2%2FKrBHHyWKf98CeMSFqgXYF3IsL8ajEJnzWsqdnTiqPxZaZuxLFgoNGLWHJU9ziWfvTAC9xYj3xNDoBcmVXrOo63AQuCo%2BX5Xz8cXKKry8AwmQpFhcBPpuDqM0i9otCPQX6Inanvwg6%2FarFoZEf2W65KFZiDDGW&X-Amz-Signature=51f1640b578af862dcfc0495a865674254e6bb62c031b3d9d06f24c35b5b0c80&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
