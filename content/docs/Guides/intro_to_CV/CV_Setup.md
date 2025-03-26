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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3IGX4SQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgNKnhGpTTSpL0bXQ8zQpYE%2FZNrD8BWm2vFnhTVYet8AiEAhinLqCC%2BEDzfeNBpz0TrEMlxXMqMMBnrNJAHA48emB0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF6RK90n2BwKJMQT4yrcA1QPa%2ByKRbpwhPuj%2Bp2qr84GcMbo%2FtJUtTD7pnMfWN5SJFn%2Fz25fi3KogIFLZsBHsKRVncN%2BpO7QEnRpAdSdqr1Go0I2bzhzJbPLBmmTEvJZqVHaceEYgc%2BrtrhSDp5SO6Inlr%2F%2FhisXDVLPuGc8LL8D9D2ocClxuICuk8VFdoCEjeDu0zxvQnrFctpGZBD9GGKC%2B%2BQbP%2BdANs8WMskVBhPtyEsSzq47H3Urgj2iKWaP4cNxsb%2FlESdFiB0LVBvU6Qg5IfUVxUg2qd%2F4DzMd8nEmieXskerF4ppJSe2xlnj64OEGcslxQ0CjjG02JkWVuTAdEmI60bu4J67YO3AnbXK9knBXePZwiC%2B4websWbCr1Y6Dhu4Dhr2dDQ4HSYpAn%2BpXREJ7TaUKntnWUlvpgEFZqiMZptBySXoHIz6HF72bwP2WGLhQ%2FT5KK5RxEfm8Y%2FAZzyB0u5fAC9Rmc0G2fVHhZx4ksQlglSIuJCcfaDcqY2Iq11EqmpwD8jLt%2BVyoL8PKzR6vci5jKGaHToIW2klQbL2KaaavcNeF1%2FNx5uf%2F1GbUoFBr09c0jm4y9bLYhRACAaBMHfn3sk7f3zSGA74ztMMFdZAiznROUlGLa3eW0yOthmXAQ%2BMU%2BS3jMLCakL8GOqUBx41B30yDwsWeYenADNUZD4YAJ%2F%2FvQxfPJEYpQBgG7%2BhfLWFmLvqUJM0LG0lnJaQPO6OaCqKbk%2BkIjxWqnAzqsST546OVoIPsWekMflIlk2%2BEq1BdSkSErtOOf35qqT6C5t6AuDT7xDA7V3HfoG0sm5kz68H%2BopiapB%2F52BXRG%2Frl3suCfpOh2j50MoSZg1xy4RbOwgYWE1iRQv4cuB35kf3UdsrP&X-Amz-Signature=c77f1bca8ee4289da7f2a7a01cc40558e5e6d658e24db820ec4523803528320a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466422NYUIV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJzhVNfg5TZ3fhmrer6x3uh2xbynzwFnZCyNNSfL87OAiEA%2BtgFWFAniLGwCxdQH7poHL%2Be%2Bng0pAFExcqfTzRK9FMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIl3QFFh65qsiqHazSrcA6e2hJGv%2BRd9gqb76cGjFUyGwJvk%2BO9EgQeO0aYr8GHUwZ19y6CYakgdMxDBsgAOVNEoytNypxyIHStFawNsmc2t4VktPhW9Y3iSFBCxsPwxqpm4NyhGJjlBg5%2BExcKhmKiIBjp8UAerbkibrHFNEwVyFD0wg3Ckmo01TLeHOxlzoofTfYjX80T%2BYW%2BKL04y7R5eqsSTxh6PdIltyiDpofeF7VpiJE3V2HpgQBXJAsBwSKqATWepCM58newYZxSW9%2BjBVZDjnVw2rhHDRVSaOlGLyieLzn58WTi39eYFK%2FolTOcX%2F%2Fl4Gf5ptj2Yg1gecNuNF8C1VIeXwI6%2Bu%2Bjy5zNJP33dwWKTELZGwyO0CHopxTcoMRCpB8O7z00%2BrRmu%2FfAXFq1WoV8q4xRX5Dwpt%2BBBvdZtFRKaZl7xoUTWqT6QLcg4NMMhPNah%2BiL1qY40djyNggHfgcc9Rf84Dhj8JcakDCqISXO3M1h22nbSvJ91p9J%2Fyvl%2B8iMBN9y7QcBdQ3TNMpyN7SZ01BCrGCdW%2FsH8UiU2ec3MBFUe9P2dP185y6cRNdHkEsIhL3QLkchtK7%2B%2FeZ9DyoF4tWdvEZCuO7Z1r1%2BHJiwziAZkRZzNXruy%2B2HluMazHamuhcF5MIKbkL8GOqUBGEyZfaeC2RexWFkY15kmmCr01sUPQ7%2FKseaA%2FAxdr%2BgwGlFZeRRIHbppn6mnM8baMyCJER7pRt3lyCnWjPGVWw%2FE9SUaPasodoSJ3HHXedjCRGx%2FIEafRdNVQ%2FvwbLzj5kH3OI%2FKGNCj8UCRfv23ftUu2SfLaPZP0PW90Ju1hwf6A%2FFfz9DodAOI7rGnyi%2F1CWrsqocJ2DffAemRG%2Bawa%2BToN0j7&X-Amz-Signature=1913d059046b64fa1cbcc7067d255b7b01bdcd5912f771f5368b638e6ec47d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
