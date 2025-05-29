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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZXSVTK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOPLNw87vC9PqPdqnBc10lGf9br5ri6PApfrDei953lAIgLisGHHnGw429%2FpFxZ%2BuTs27cAdVw5gLs9bHorQHwdYcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSbyEA6sogwJk7i0CrcA96AIKkZonxxpyYbkrtcv9wwaLNLiTsIce9%2BUs9lRlS43UrZvIm%2BNtwQO3%2FQkxXgeL%2Fy0E6miqK7O9JtciHWMq7nCViILIgSHxj20jkOr%2FTdLKkdA20n6vqLzNCf%2FcVweYciBVUJyWFMSsSyKYQvrJ2RBX3xIP%2Fiv1df2siqrUYOTlHPdGtql8BCMYIaizqIBpABLeJC1ng8iXdyYc%2BPCVH7FEg4QvPtiLPj8taokqHzZtaUkT%2FtiYjsABB4JP%2FmMLGR%2Bq%2BkIQNRZ2XM8Ekpj6Hge8247NUsslmDOFJF9KwkquWRFkjr%2BwyQO%2BJ%2BK2J39M1xXuY9OO4sCHSNLk39dQJYQY6vtnxPp6fshZNEmLWf0bzLtDAunA3vnigshqPOzLqiFG45luHIigEFVpoMxvbqdVaJkwNM263eFTGTP3nxBIvlPkvjWVlC4hSde1EVsxfMS7exefMMfYYwI4KxmxEa9hwh%2BRTzOALu%2FBhnu8QuxF7RWaEJO3da794MwTCP4XbDl54Z7nKYIEBq6hMizF07mth3gRwu1Kaq7i%2FxbRRGDz7Fxa6MRyGGGQW60cS3lYTfAQYgJpMfX3dgtYR847C1ipPEP9CW4PgyCK2mRp7jJGkvbW1Td8hTUM%2F3MLnb4MEGOqUB9nJAoN4fxlSKAzpUopbBGsm%2BGa4iKfLJxCPkW%2FUZwnAZ192XbnkhdS6gNigw8uB%2FXjp2JuaVCSe%2BhO6dNx1IzUkdp8YKJBc3bTNvWyHNAChUfNxwMzQKk198720ZJDLKItcYAJA7tYWxCH3vUbnJbHkG5ntZTMWPK0j9zsRua2ZrZdgZRhjiuDB49XSwGJuBgri4wzEdZw1OcWQjlkQZoF%2FLF0QL&X-Amz-Signature=f919c956b8e940b746758d3cdce2aa595fea965976b105c7d04797e3980ef89f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB4ONPAV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvgOM3feKZp8OUVuqs2WtFNafPxe1k4jvEAYi800Iy0AiEAmk42vciVKufR55R%2ByCtsFIx6p6pu%2FZMZKRoKYOz%2BHAAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDloFhyD1lP2JKaD8ircA6tEGHGpFt0clW8xwcDiQpZrx86N%2FExksLy1lEuKJHAGYeQ%2BqZ14T%2BTGHTVPVK3Mkh4bne7rfCkLJnYt0pnaCmuAmfcE2fObArC%2FgOol3YvXI521zWxGa2wyOUK9Nm37ofMcSFjzakZXnjjbCo2ejHsek9ipJFijxwQiFoxZw2r6uXTUIYXiw0hhPfrF2QafLAuW0wZwApWQoshmE38Yaa2PNhwlXEHgP0x5uMuFyN7F2%2BXHDL3c1%2F7IWOEu%2FpdF1M0kDvE2RjDTdhRCURItWet9rVH%2BpKvmGMbPaK4nLeGB7BelMJCiXx%2F6rdOyoysP2fVpSO9HucwBNxJxANxN%2BtYkgiOuvDiemAyJlJmm8YAA6GmI2e9SO5xhe5aTE1nmCWzSJdpo2AsRl%2BjOkyZjFonP1%2BFLRyYjukV69RRdabBOCpV6dmaY9pMMGPv1OVvt4n%2BY8DLK41tRbOgedLZ3IHYC7OssExZbUoNJByRzjGaFAmOcEURZGPS%2FULRLxiJqURT%2BpM272qRy5YcqME4i8BOrmmIsHHpLcJwcA5Il7ibGYFAch%2FYfyod8G4IDgwtAv9aOLCtNzITeF7q1JC08LCtrQ%2BZba8ogufcPAuqoYsbwsYbRfd8ce0K2yOfJMKbb4MEGOqUBn412QR2itm%2BCqFgNHiuHm5iHD%2B0cdCpaxXEfUmesFtukHH%2FZUynEVb%2FnFsiSXYZr9KBAVNLpO%2FjcigN2iq%2FdEo8ixQa2nbg2PAfiUaETlqJEqLEC%2BTkuJFHyJo%2FlnrQcDhV6WwTUZsBpScBN2%2Bm7JXEbwDrerkwrBDYrh%2BdH%2Fn%2FCv8CYty9Wo1ER4bczWTdfB1rAYYiDWayJtRnem5fiPnENC5cx&X-Amz-Signature=967a48c01d0d2e0983cefa72cce6c08f2d12041d23434382fffa4a88f12a4b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
