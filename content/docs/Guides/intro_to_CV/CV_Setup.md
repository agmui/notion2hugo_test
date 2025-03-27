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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXN2MIJE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5yvWpvNx9Aw2wrkghyXbOah5DWxtJlOg226%2BvNq2h3AiEA1%2FNMOpQUoP07dsMvFvT5yWa%2F%2B%2Fz0CAvO%2FMlVwrUgGO0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDExnWfmF6gq%2BHnij1yrcA%2F8%2Frnwwu%2FgIUeIWYNbik1lrGcQx6V7FLAbwjbHWLVujfKDvownv9%2FxKc2n9x1jReRyFAKPipP6MYy0zmO1gblZgmhhEY3w2%2B0YQvmE3XuMJ%2FL%2Bt9Ztrl1mNcIBf5wN1btxR7tD9AliBkntztu7r%2B5GYjQWw3wVzWP6iv3hW3A16cu2J1LwQmNjb6oqWog%2FI8AwuXpi7AKfEzBw8jbfWcUicKz39KFUBec6grrVgIWA2BJqT4JFHySTva8toavzqVl60XSL9rwyz66iPotZoB%2FDEgZ6kYQ%2FokDHKFdV4WcfhAep2A9ENR8LNSdOBOO5jySRftogOWW%2FUIaJhPqLwiqAkBelv%2FEjDsH3y0FbpJqe0aT%2FeoNYOwwptmSz6SDpkWkw03jNhXQ%2FonyjTWzpdpZWdBX4idPxDbTTKVIsSiU2Fh129itxoIMWAyzhNS6R5n1T9H4N2rOJ%2FoUubOtbqP0LYSqbpejlzhTEjYPbZ6PKVS4Hu0URfE8LWIhg9M0Ttn9TE48%2FaYYyoiy61nk%2BlUsOV1pzFkwp8nJuyKtBN%2Bm9y7Fc7kWUT9mrZnDgYatd8eo6uk9BgfCnZIf3EvpkUFfcwttFCeM3BEekHchFix6IdC2zj7rthAXec6FHxMOWilr8GOqUBxyGhy0LMQ5c0xpmUuYxfvJfbQvvgejEMy0VdVLY9B6WfZwy1QFkjuysA%2FKVd7ScOx72NPvlw62UFFojJE71EHKXVZH0lw%2FFmM8I6kJBoz5btwVk0wkzl7BE%2FGX2msUN0O0DPGFMUfbrzCe20dPufGf7Q4v%2BNIxgUd6399yGMgW1Yf%2BxeBA0tjRSmbsapAuF05CzfipGT4dM1f7Em9TuhBHLkU%2Bv4&X-Amz-Signature=d89140775a799633bf44d9ab3988ab3be9ff63889adb29fc4e9ebd839f7a2dab&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMH5MYY%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BpKU1BACPjFOvGOIwvKbPOqm8%2BrVJ2YuB4iU6vdIsbAiEA4BLTFj%2BcxmQ8T25wJzplHbgkkKCPGczCnV2W6%2Fb1jrgq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJJPRcZjZ7QgOEomTCrcA8NtW4VEq%2BVFN7F3QfVCCLV5AfLQP3HxkMeJ6MdF9VMPWZ4Uz5Wt6OVegDO%2BnmXsuRzP1P9TU7o3iYnrjCa9GRczT%2Fcm89%2BCgyi7IW6waM7xTTETFjR8fAWEdnlEbgwpoEzyTOq5fgL2WlXuGukSwGV6B5Yc2sCcR%2B1qt4TN0LwCReO8PNSxlxMMzKmiDVaFGM2kaEIPnEODHZXf0lKcODy5BR7Yk90msIJqle6v%2Bttb0dqWTI4dFPBCj8W79qeuhX1oaGTDrw8d7JFoIPq0FSynBNSDQM%2Fn8dtkZNrARSor2UGw8WyRzC8FExqHSBRE1su6PWM0z9dqZqVrmpEPUFSAelhlP05Kl08W8gtunxEFEwknFeuCQADBd4aw%2BinAoK6qUpr8ExS848NmeLVSz0Q85V5b7TJp856jjya4ilJrKoE%2BBNGXstO8aAV7tIBp9bCU33C%2FFrPN7qGxfCICo%2B%2BLitd4hQi5GzgpeXNpbKMqtjpBYFblNkmfKKBaU4PNsyDWYEXaaXTGcolnQr8MJ%2BJTwWG9QArWXpGL0Rk6OqKicj2kOh7OAp2DDiYmRu1%2BMfKP%2BA22bMojThr5ANtQ5R%2FJ1Nsdou6nxXQCXwHOQgQil6zesLzeRSQ4WIPEMJHAlr8GOqUBJkb3OF5j2N00qC55%2BGSk6HFRiml%2FTiYysNptva9ZiwuW6z7vMv5bIiF%2BL3zLdXajw2cOZMFuDTg5x4G9jfRObzmOtXRYxYxGR4VDYDRQB%2Bbs7JBj1AqZMPYzTFk9RJ0zd4cJu6Z%2BtCGVBxlseJ%2BYpTo3%2FQLRF8GtBCjXSVEZJGzKlZH3oe1hMnMwfUSdBiRiDADtNaB3lsoL0RBP%2BA3f2K9QXz%2FR&X-Amz-Signature=984ff75f86f8da7dd04ae4af6a0614a7bdc10e836b5b47ac795000812931a88b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
