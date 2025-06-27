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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSC7RMI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7FP4LKq%2FnH4pqj7SbKWNw8I9WYOd9zhL4rJisozcDvAIhAJTzFedRfKb8VbADl580vPsKDAJxTkF9pv8h3Ojn9cFHKv8DCHwQABoMNjM3NDIzMTgzODA1IgyjOGO1Dckg1MQQBCkq3AP%2Fqe%2BN%2FNgj8KTUh9GXqa9xov9vZfrwn2BBT54PxW%2BMN7CbjcMkIHRCP5Lg%2BpAwugxaRE6a8fY5E5qF6OWb7wwTriZKXIPmufjtTCj9nQ3KjX9FRV9ViBItHPnZ7RfgyFgAppqMOUxhjp4GmsC%2FqMNwEhFnV8PVGKPVXeN%2Fyf9v47bBq9wV0WigQtr4uRYKf6cZoxSVevALvCSLr4lNwr%2BxFZ0XuWp4xNxL%2FnJJwfc6Am8j%2FSGXUVfeZDdiJDsLuROzGSKjUaTq0WQgMWOI1uHUIkN25%2B3ZXmmELBOtPVE06%2BxMvGdMUeTpoz%2F%2F6B00lRejthxEPIsbqKWQBjjR31Wxzo8Nhge%2FVpc2Vb34lsW831oRTr03KiZElGfbe6oS0YPr2zSMapOxjePQ3YujO6I%2BJAmltI2aw%2FjoAxa8oTobV51OEOJFK%2FyzQNR%2BAq%2BD62hAoP1q3WyGGUOwgAUiqtUTbfGWcG0ym1KvJgGbOtoPhNmEqTEB0JZoteVjBs6eZz3rJOStfOmH8o195Ry%2B%2FpG7Gq%2BMfxnaMmu4cqVgFAgYAzTf4Xjs8dy%2Fv5FCwB7%2FbaIZzzI9Zxo88Iu97JwRQ3N0f9CMdftTnW8HBMCf2orefovcvyah0BvCDIhZUjCZyvvCBjqkAYTBUoLaTzWCXqLk4E975VECzfgl7ttbo%2BbUiHXhX2bg1bzQohfSvT8f05SMAJakS0Kq6DKFgW5DBp09mWmdIon0ZxtxCYcAP4%2BS8Aa9D7bzL7YY9tEE4vMMyfF1MviY2AQv5FRo0ObgRAn669KS8AvQ4SLmhfWi5%2FlpgNft6u4HVLi%2FSUSPtdP6Y8YjJ95B5n6n%2FGS8PGMcktvYgeOj98ODzGxU&X-Amz-Signature=6871154c8b5c8a76369b313f39da8f8978c36665d3d68d7ff3d0815aa4cfb377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DPWFXE%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDn7nnT0Ooxtfe8SqXsexF186A%2FXQD1nmGergxOMJ242AiA%2BXFu%2BJqLEqWoxnOR4uiVlKoC5mlmQA4%2Bb%2FI%2BxMbMr1Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdUTfXqwudlLONChHKtwDBHJtUk5KEkmcn1fghCj%2B3XGpBgg7aNM65sb6%2BvyjFZZ9O8Bg04PrsF3fVcsQWCFPPLvCLUmNVx8T9%2B7C5tZT6AelCnR9%2FBh%2F8ehsvU8VbviHIpt7s%2BQmcC5U0gCQFiuSwk7TcOq9l8CklH01avsbUR0zi%2F08ZtQmDkP%2F4SR6cxjgRozgN3qBAaUenJ3pzRwafilO3dFXubRIm8y%2B%2FI8rSIOVcMSyfH3C8WOeBNh1relvF9eHTH8Dam%2FQqa6s2BjA1Nh04MJYk9J%2BBY2iNuLpHYboP3d38mpQntm6luCei1DiEolyH36mMzC3HAX7KwQZjxYcCpj58Bh1hjw0csW7lfBV2PLIC9RgtS5Qn7B5S0qqz4xu16NtLGE%2B%2FEQFZffzYjavw9ybJtI8ALy%2B6rTAlGhsCdjIUvsYx2inSnShwfh0%2Bpb2QptyTt%2B0UJOzuLTWu9AaPDdP32eK%2Bum2ngUReSDtLwoA1qjR21b2oZA5%2BLXyJqGQu5hVh3%2BOlUBPLqzRA9jYZkfWLjZhz9PG%2BTLh7A2y%2BjWBUqNsV0wWb8BtISTuhu%2BVnm0BS4GlbP0zIlHQ7aMsIIiBWheO9e8loavm6nvqzBZhkEzJ9vPpbL874VVSxcWafvltvJXVdHAw9cr7wgY6pgF5sw0ahYqMeIMn6Ddr4o7ZNX3YEuzQMyAur2ZijWIasUwyiomqd%2F0uyb4VT8%2Bh0g1P2Ymh12ei5DveTNBvxUn7KEsuHvGoOPviklu%2BRgJNWGaAc7v8K8yqGTaGJgcZao39MdvpJ7ITNRTHXishk04OgDlsTHgvkD6w7QKJvGoECeQAc9G0mF%2BZkRwzUbNwyzHSPlqoHm0UZfHAyvBEmX7QDFgylTOB&X-Amz-Signature=49a0c2a310e1e0896d329d7d23c97eaa48503843c911c9b23944dba46c6ebad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
