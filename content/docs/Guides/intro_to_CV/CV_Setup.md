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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IQ4SNCF%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIGcWAolO91MUoyGoosXfT0RkLEKWkZXAWMtfNhBIt%2F1eAiEA4gg5lxpRJeAuwwfGCyiVHM4ceGcIJAkZkY0TjiXM6tMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOItqc05fp6sf1vBRircA3EeIc%2FlYaVKhkcQmjH8UV4beGHC0M0oxmItEriqh4wGEPVvrp0DYsEunpC8Mhe4Dk6GTX76u5S3%2BKbnhlruI9rija6rc0Y4IE4VC%2F9yljNIWsxySt5nyQuCx5l4dtfMbWBZsM9Sd9eZSF4xl3Hbg0juHCvvspYAMyw6dmhMGA86z%2BPol0v9dpwnHgmisiarGsKDKqmjA5ypC3KGVd9U9nDbnozFOoHh7BNmBl3L8wAYQmx9sJKKeM20aDAM8gHVRR0NA6mspj0VHzxDghXXoB0plw89SWy12QAkawkPzo5XGD%2F3qdKcq5nj%2BXl15SVOVgJtzRxkt2mh9J4qQi%2B%2FFhf5mK%2F%2FTu%2FgpNpVyUV0%2FzECuiOBR0wH9DEJbeVWqiqQ5xLH%2FUfdTZjBn%2BQyyfawAwBN5DTF%2B7v9lpms5Mzl7GfsgpalGMqqwxUh705VMGq86qQREA4XmPdJioGweLBsJNFrOOjgPGEP%2BfjzTwyFhPd5J21Li6ypLhTG7vzx6OaikVmtDs1W7laeUsbAYq8JqVygHZGGUjm%2FJ1dh7omI3f0gNtJ941Azm6BtJAPEFFsf9Uvn2FJsY35sTKTVheGgSXhLXVccvTKdAUv4rvMpDLt2XbYkYubBpCu%2FZzM%2BMIrl08AGOqUBO%2BCm1Y6ONX%2BNDwjkfa2DLeAYD74O2q41fdt96hMwpR6go1%2FN1X1OQQ%2FBAONYhGeLUV8NF39lgeJaZJCke1U%2BNq12FV4n%2FrxQNmRq38i4Ps6KemAZjt%2FvrK99zllY0x0WXlddh7UeUGSedg%2BnDifNuNzzFQJr0Zhhrn7ggrNlMQYAyacqN%2Fe7sfVAmHyvHUYfG2n3albYkL9nZM3eVaQmkpYp3E5H&X-Amz-Signature=f83b58e25c45787836e91f2a1bd95302198de89d0af5d928c270df9333b9173d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DXN52IS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIEkIHkXkHSLqgifuqNl0JpZ3DGJGp0oumKgpjb4ruaaLAiEAqe9TwJ73BlBi8bHr9AvdmBRYFcosTLeUO97Cwa7r7K0qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpBtMp5NCMo1piqKyrcA7kPY8FabBBh111GNCsyvfJMGOw0EZGWBouIVTxncCui5Np9Wvw%2FG7mBG7aaWQfuaXwRkcwN3ZuDR7aHUTQWRNBKSz85kpkwpThYxzy2%2ByeAZMrXUc3PIT06Bx4Xc2pcXSiLIN58wmInUGeCMrgqhkjxAg%2FReNUQf7I3TkLc7%2FByYy868YfnU%2BRPvhifUFqUNIlVnRGwERci%2B%2FIB4sCq5RQ4zkzgMMd37KkqC4LVpql8VLuxKv%2BOmM2t%2FT%2BW56ulwa5aEuUJEDITLKgHQyl2OWdJTjR3d%2BG7Eb%2BE%2BrUiiRa2F%2FD9OdHS8v%2FPgCiFSIh4EZLFdR1FaKfaFENlsm3dAEVyxiZidTkKS%2Fw2FeNyEfRJUm8XgM21Wree3aCvsvbNO9kN2ji5XiljzsyM%2FiUuPQA%2BTov7U4ovexAQjwpaC3rQeX%2Fa%2B%2BhOTWpMS7cWWgu5gw%2FoWEOecD6fRX5R7UsM%2FgH4aEO5CKdqR1NVELxi1gLjrDMpqgDGcOzRfI6NvRTfLoxoRyT61ZtfbhC3ep2PWOE0W3YbHDp9YuOVkVLjNVWCh230TDhdjjVaUgYew1%2F1MBSSL%2Fi1VjRIR%2FqFt2FUZ3Kp0YhPfDEf2IIRExwh%2FlKIsEkkBuSoOf%2FHsO5wMJrk08AGOqUB3Zy5q7eMKREHBEe%2FWyQeM0bkhK0s%2FYM7tRG3IxVBo3oIuWEn7dIOkqcvcFOLJkpFcjqy7bmrdZ7VMGURbxBXOshNhBALGbwVZ7gz7W4ZZUp4QjKAW9QzV1Q%2B%2BfsKUzQJ%2Fm2N%2FMWwAqPO1ZgLa%2BTJkYicPGy8y%2F3iVgxe%2Ffxha0Mx17FPZ2JIOPCDf5zdR8Rci7idJKM1DzKvrkjDLEwqo5CNNIIg&X-Amz-Signature=9f94675edcab9c7010e191db4044ea07f341a699b2185af44d111d87eb5fa814&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
