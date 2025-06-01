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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNMI4XH7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIE8bG8%2FCl%2B8v1g4qpLRlb0sUJAOv8Z6SIvxjG%2FKEnK5EAiEAmSezt8Som%2BJqgtbhOfCjLBr7bCr4eR%2BmrkUIgHrivokqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYO4o70ZYFnViBS%2FircAx4y7i4MoWKeGzymVZqhuLOsXbG%2BTwQX2%2FxETdxjNdWNfm1pS4HrGHJs69TGKSrJF9WAbjeOQS%2FmNLM1Wu8fX9lMODPeqWHmvd9NygSme41TSo9LqV9GZ5zs8FaoNL9wmemaoHgBoUThNSddRsLqa%2FuWqKsPVY5xk7ahPVr0NVx9VejRxQUMg7yaeVE8S6YFrt0r2%2FF6IrgMDWbQCbSfsyzb6WbuVJ5peFrpxkTAUof1q0j%2FlJzCJ7r7xgVyMKzY8FA97OJSNb0Q4Mg47yRV3dPZ0AAIx8bZt5tK4xWRNasx8ygDmURwWjEqBJVy93OcfOCtVoyshOKnFT7xdUV1sGmqdY8s0m6xd9dMlGRKtnT55ahCPG%2BnOWuocliQCz7WOXLS0aT3BcuhuzP3n76h00W%2B%2BTzgUBEL%2FbQLYy5j%2FI49QWYofkvC53qX3MYizviDqzCkqr%2BPSMv0Lz5FgjufyQo0Suy4iJ2FiyL9OYWiflrHn8FhtBDUwKz%2FYga3qv5zvX3va%2FkigwfAONqqT8IyAKyqQVcccMk6GmcknVaBjMyjpkACM7%2BapZ5LOXUemAZbC%2B9MrdRYh%2FVOzDaKYVfk816PeyuA9XuoN6ABAHa4UqdcYiEFlAU4naHw66C0MNPf8MEGOqUBYPOCdse0w7%2BhwpT8S0klFiANe6wUz3wgEd1IPIuaB%2FPTrhyj4YfECKUm5TAO6vKAnsv%2BDcDoG6Fsoz1jNMFVe8PiL6KfUMJLD%2FQ1tuwcw7zlT30QL8AWNhzGA%2Fs956ZgZtoVZIn0ZVEinRM4xUbKarBmgyCUeKLUMkmNxUkeS%2FT1N7U2N0u2Gfkj19lagJUcrszzfXk0v8ujwaAI%2FV2hAzQ9lKpE&X-Amz-Signature=8afb1eef7804ac1c1a31387b5c521ac2fc1b9ede5f68f9433d5ae6aa1af862e5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPWVIQH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDreZw22s8ELlkKn0bSoFM0ZyldboRGYIodqa9mRY6lHgIgRqELkC1cPUYtHrz%2BqwCE9YgJe3eAkEA6fg9LOmw%2B58kqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBq2vlbAM7jS79VNircA0rDYVoc%2BZkaFF%2BaHNIoNFvC7wA9ukffWfjEkSv%2F8K3k9yvLWlFu9yJ8VzFc1CN2jrG6WV0Qtw41pLeOiifNZtTFiiLuIGhMPFDsb%2BjpaBLLPxsEy5G%2FkEm2TdZ8SRe4esRgdsXL06EdpHkyuhovIT6r4l1jdEZ9taKBFrE5zIDAzD5Jd00A8ThPFwVVGK22i9Jd3IuB9bs83sFGYOnkeU9fSqC%2Fp7ipQDNEtJjp%2Fmw0cIgtlVm1fZeRTTMAjqgnh8aS0dpRblj5DmFmFZbLR9%2FRY7nQTh6XwFyzmJFKL0l7PafrvqxDPwOg9y7s5MhyZwIauPlf%2B0Rr0agjj9cbb6u6AgpTcnvYxDvgiqcVjZ%2FV5ibyUA0zQyP8v9Aju49CvH0c15Z3sxEbQPvRpJXxzeiY%2FvUHj28gDR8wu%2FQ5koEEfC1phcoHZvz4znYtUdTspAiuZ4QdFl8WZMdKwwoSRqmhw4ez%2Fs354UJmHcUpBBKOFqYTPT2w%2FKDvOdtjz%2FDbBc1wy3vO1Z9BdGwKfX8md35%2BnmARikPezC1MC1t4Cy8FnIcoAKUgdF4AQAQNJm%2BJQ02wCuljZQ0c5We%2BY9oV%2BIqpSPrWtf8uIYtW8Clvd4XhrHOCEZYfHg3jy5ZjML%2Ff8MEGOqUBfBABSYnKlC62FaYGLoPSnwq6rwcrQv3u401RJe5ndOJgZlMtfxHIt1VV8R6nzNlE0O4WUxabDpiRGFZK5rU5xtep%2Bh3ZewRvC75eYva1cU5ktuww78h4Vn5DTFeujxOrMbOMZ89yrmWDA1M98qunGvjqm9sE0g1hacbQthUvAiuoU6j09tGB40RNtGtsafVtCCJflwIy5YrLcKcI7zy%2BYwTXnqcl&X-Amz-Signature=d8bba833daaa5d2b2c8226a2d1861a9493e0c510867331019e8ba6587ecf5e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
