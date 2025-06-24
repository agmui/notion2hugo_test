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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REFNC5Y4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCNe%2B4t8SwSURam%2BPGD3Pkyhax%2FFEChTbpdqEt2OxceJQIgR%2FO%2BORUMwMpYt4T%2BuEAcqAPCrDE%2B7AgoE7ns9iptxyUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBv83x8MqHoWb1hU8ircA9Zile6kPLlp4fdg763iYksRAPFsezYCu4luo9XdF89tgDpLlvBmcyXOUzUogYwXtp7YmUK5f3s5jHQfBHnHczVBxFgrzAtnr6P7dDwrKFVp4STs19UxSVznAXeF2BZMKCeYJUQc2%2FketeHBnDoSGA5DpfNkUJg%2BJJYj3efly1iN4f0mWYG5hc%2F1Ipkb%2FI0fD%2FOmrBPjzY7IqXC90Guk5Z0ISbSzuosXZxm%2BENmEqGmRYrWPXPFpq7R2dr%2FXzpkteoChb%2F7dUHQvbXDSNFAM%2FrEr1YH6FHqkZv2NjuH0uhN2NZCZOgYNjUIw67ze0MhdhG2PA%2ByW5Ir4fi88o9UQmVvO6agUxuqSAOm7jzpWjTxvQh43S1R3B3DxnxE8N7jJpSL1y6qzPrb44ijBj7OKMSFkuc3dxIjsRZRWGf0NBjv6OFEqtA7zIculjlMkyfmWqYhUeP%2F4zGGaXtMfOB0eji5u9%2FRfKa1dq7cBc0TXWmA6Ssia2yqPSU6AXg7h73E32RuH28voYjB5iF7wRxUkSSWbxMoVLnfjcY0an3JZ7U7ub1a7oO3YMAWmD30Nv%2Fh1T0Ge%2F4k59yySYPPWIJ%2FDpD%2FseDE1FRcFfM8WlXW7%2BEJH1dcUXMOWP8FfGWJNMPmL7MIGOqUBUiAqmc0bNC3XallNROBWjN5w1oH4PGbltW15ExLeLIwl4H9uGSWJ4T2Yr2j4WEXklZ0rVQnYACKwuuTtzeP77dags26VrQumOdM3VzT3ZwZ2%2BVFGGbwQr2YhatuDpmWcDS6YZJpvR9OiYilrsGwrsPFu%2F1gSOcMMRZuM%2FybjFIrc1GR%2BhZx2JzvOe6ZfOjsHnNcxWTcu13NR1xjT3wFAc%2FFESm42&X-Amz-Signature=178f5409ee8ede5ae137f62f90a4a8f9ce4919f0e1f4290a70544264ab70f239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSI2BVYH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICgSYJbhJB8COdSdxtZskeqWiflXBmyNsSo%2BDIDW0JafAiEAufRIYZuE7Cu7%2FE%2BwKitG8ox58F4M9StxTe5Kn5e7XJ8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBeQUFP9FuESW9fBuyrcAygZqUjH67Nyc9Gdi5WenV0nhodV5gUl1p1XYFA%2FS3WIqcJ9Zi2zTZeEizrp6FD224d7ROL9NWzVrleiOSkrVms2PZW2ze5fVa%2Bp24Sv0uyTc3moV8NOQrmj%2FbXFSxpb%2BnGtyKCKV%2BRbEif0L8dJ3sdg0dHmsXAK8cpf3Im%2BA%2BfLRnys2JxYVj6povra0d6EPO9rRN4RbAER293slXca3Jjcd0z8MM4Gwp2L1iWhOnYyGw2arH9TIBR91eNHhBFU%2Bkjxn55ni6r0JUXaB4NyHigtBPpt2XS1H2IRIf0zJKp2zEvgTgrSJA5Qy2DKplfwbDHp%2B%2BNUT3hO%2BX8pr3uHBYIS48ze%2BNMP0r4jNzQjzoTAssthDGtrWTLjrckTPDI78HFUmauAY551WAGweo5Fh09HblZb1UOoilEinG8fENH5bSUojGZ9CARWhjp%2BrstCGPcQxZ8ChEIz65mX3N5Vm1PA5Raz7LLGUTe5ybuv8lZNfcqTzLFipsSZr9dk9XDDsx6zxj7O2BnJl0DmeE1kYgXnmb6V7TliOAQorYFpt6Tsp8R%2FASExauUGYd0yCLYzV7mlJEQ3a7DVGLEv8Ado07k%2FVqh5MFVk4%2FbHRfKsi2nKOH51bzZyVq7dxs0SMM%2BL7MIGOqUBhqDKT4Fl1w29MMK4lq3Vp1bVJ8HGmt9et4APKj2EX2nU7oMNcO5DYad6Q%2B3Yv%2B0AjbC%2B%2FiPOXW9jniqGhzggcxGBR4ENIrMkWyWT26rZoFXBnZN%2FI5YqjGtWSSlv26vYRIDUsgYvmQ5ofu2wl1a2y3A6YxuQAc4Gu4FTqJwKAONsGDTCuXw539VoeXi30tQw%2BQTkXHK4vsy3A50jSjgvLaPvcM8T&X-Amz-Signature=d4738fe94f220dde675c672a901be6aae116f57f215875c267ced8bb505b9b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
