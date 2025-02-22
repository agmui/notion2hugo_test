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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXDJFJTA%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeduHsPR%2BqwD%2FmybGtjcmE2Wx1voA354EiEvLtQb9W1AiEAtvvj5plUbB7%2Fqa%2FuoW4LHoALvuF32B9nDQkoAHyupP8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPwr6xPKGxrnu3bdircA%2BcU4bupk1lNA9%2BBV%2BYOe8NA9w88LdJ5v1QMW4NZ2WINXeV6R7F66hsLOCgmwEGgOzVIT0BcMRfY8brW5y9XRNfE2ewB%2BbZAFDw%2BgTW3V34FGeI%2FeJsXenMHo4A6WcdXpfJyp7KxOqWkNJzlpGUfFNsJNgaN2aGM9wiswD61zguyaF9Qig7aGcPdfOmnar7yQQgIXFN823GQjwkX6vYLpWjX1s2ab3pn%2FDtJIjIU5Z7Z9Rm4OPdOCO2tdEh44BrsbptRTVlE8LihJywVgCBSOozF9iYyPkEDZK9SGWRcMQGCE%2F1U2W5d5JntJo7676%2Bbyfgc0p9OiHBQf80cU3gVcMiUW2H304FzYzHI9WjrY2aqAkGzq4qfbrHc%2BEBWGLECYdP%2BUhOqFeUOpQjk1u4OqVCpWIHiKYjr9ypm3dnHGma0t7WzKgUMuHeIpXqMtRYqbjwNch%2BLucboL%2F57iRH5aTaiBUwDO0x9R3GR3pRCHOPGeofnBIGfPZJ4ja6alJnNdTCH3VRlNCCvP%2FkWA4uL9OQIykGdYSnCifkrH3cnWiZK7%2F2KZAe1zCCG2WB3AE4N6OKSE4EAVyr7e%2B3o6tNhAWeJ6omDoJElzPkwsf7TzHo31YKmcZGAf%2BC%2FdlGrMPKL6L0GOqUBMSo4mCysjGrFKLfaiEKmV0GP31flAPjZTfZav%2BlCMT01oTqI6OGYA5d7FgROLor91hCG4jXF4Tbz3eidRmEqrIlGhTgYg%2BShmkDUqk4eSOjnuuVTQIV4i5ZgU3X6zTxzWCCtRZqcucQh%2FJV376w8hYyKKefKBaaGZ8yogANXWVhbwBbMR1PqXPQEqj2XqR2peZQbOgIwdyNrPDtq%2BJlJ0TV7lCNK&X-Amz-Signature=e8dccc849424d6fd2b5522e1aa63c3268cfce5fb032e8a062d76f6be8cc53c4a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=9fe417b1b37a44dd0cb718513f9021f45c6c5bcfc61f6f9aa8ec164c7c1d54c6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
