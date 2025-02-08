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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFBMXMRW%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIBXyV9lGLKrjP6zTgmZdzXtRmr4s%2Fm6m%2Fbx1wMeAMBGgAiA%2FpM9hwytH2yF3pha4ucxS2CiBQJDT2ufHGXBeq9TRzCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDPURu%2FVgIKkfwS5WKtwDRevjMeoL05fyvp7hDEktB5rpoizH%2FyRPZkpu4%2Bqah92Rnn3FbEfgNs1uztFWfJnB%2BkyxRxvY2UDgXH1PVF4xXGtkQsaYQ5DOhClrocVwFUl8afzKc1XrOgPFn%2FwdYhJ0DfgNZYm1o2rM1UkRvJKk6GjxGk9AdW0LQ87fMZOoFkckJyA4sEB9k%2FXLBX%2FFkczXKILFIlKU%2BvameFeg6otXpgn5Ue2CJx1aH3B4JW1dSR6z4ovPlbBWz5KgHTpF%2BmVPUw%2BLTP3qccI4KLQnEtiHdY3VN%2FOUBM9RkcvTovbYzxE%2BzyZChEMY6n4RL1cEreYMfqlJIPWE%2BhvopdbJVQy5lw9NaS%2FDdIDPHdUwyQffbwlMWF3BrBy%2FjKShnsu3ydv0lpo1Sw3wgU1Y7Ln6S8dKmAKJZldrfpC34EAyrC%2BRT528GTVtmamE%2Bg%2BAJ%2B7W71bH9kOUeE1ZptPkcasWrfo0OSTxo9Fdd0nKu1Rev8e5GCskA4Lay6ViT4UUl%2BhkhBW1tg0JFIWO9yv3ysyahytExUtmd7NIQ5HW%2B%2BqggSFl5Px0TtvLqcv3cSt06pPcQiWVIXtrAbSW%2Fpo7dYdObe%2BpItlB%2FSgr3SV1GLS3viLPLAvQ5pjHVZBf7w%2Be1WMw3tWbvQY6pgG0fhSIfseWyas9HAc7Ziy2HASiPgH557CYoYU4xr44D9lSUDUh3On3a5uZdy9yuJfMXNWCXlni%2FdB6rl9%2FqVI%2F9Y7HPVN60RCQu14Sr0MQhapk6WV55LGI5q0PhgAhwzgvu0wGpdxwIjWZpHFLkRRy69mL%2B6wit2yTtaep1SetyZZRoA2mdQM1%2FWBSwU56P6kuEV7C3pPI2QSCv3Z0fSkcz4o0KDWJ&X-Amz-Signature=4684f5f38ef313d565c4ca5fa9e7788a2c5fbb1c64f8218a15d1acc2994b22c1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35BNZ4J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDoU7BuXdDds2nUHqFGwNcfmfjsuo%2BJbeD%2Fqan8T7%2B7vwIgb2g%2B9hm%2B3%2FeRd2R1BgXhlaLxSdsikC1UT7zcun%2FJ5ucqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpQgSpV5Ne3sBaysSrcA7aVpqkuzX0WLDm93B%2FKJtW6puXLp3%2BZj%2BTvMQnNMbgJpinWdy1NyGiERljn8RXzvF5QNtyLaG6VpO91bVAOq0Hxhif%2FClhoqMLb%2FgagBHuHt6PcFSUkTk9DDO7v01A4Wpc3PXy0aAjACP3VG981eFAFgJwdg38uaAi0vMjwjI0lS%2FkWfKkKKwNp6dpiQ0Vu01jCG2BdlgfZmwFeBl2UhbtTfz2ldCB0YU5VZIz9CupYc%2BrxxiUgwVEj%2BBevTcgr%2FLCIIetQRHNOxhdBfGPjWnkZKuQmMbeP97V5C7D3K9EALl9HG08dd0kH4LqoQF30GBj%2FlcsJYq0ZH0kJ72fj%2Bf%2FlayTwli7cv%2BQdb4ZhILM6SPkqayuOOEGB4RDxiHFcCVSfAnCK3dronC4Mz2CANht36JBc6PuVfZspUYh49kL2E2YpJur052y6NZcvtknVG2iPnYNJUImsuGBWY5RpQNBMyTOko9Nq1SyI%2F%2BVzoIwb0E4xz0L%2FX46uqPWuDypuqNzQOqdboa8LpDTeJn%2FkoE6ft77cthrULrNkePokv7MTgoE%2F5nKojEEV9m9HnN3aDMhgLD8yszoJNij9%2FrTe91ZwQD1dzP6pix8a8%2BDe016CFPUdMM3FTODo7GobML7Vm70GOqUBx9oH9amaOE9eGCIkNt1Jbon0FLd0nlEoBGbwO26KEXa5b82LAcNi1RgH4fjwy%2FaUY5lyRZVupYDEBCZ5K0xtlHguwA2y4TPRNhtvRAtuHuJwdPiW0cv9O%2Fr12RwNn5ci36fp4NVclLMSXSBTIqKc49xmDpJ4F1cft4NaFsdp3H%2B2lK1dP4L4pkM30h364z9YYFUcxRA0vNfBniXV6Wz%2BdmbVuVH3&X-Amz-Signature=70a475057eba360bce43937616d57139ddef4a2dccd52cae12d6cb8153a7b668&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
