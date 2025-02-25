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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6MIGPHK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCICv88Wdf0ebvpiPb6oah7nIohh6sKbugdPuYAtUqe4xYAiEAiYVFgOB9DNbMEItjY2eElyjrRYRKCLM27zprUr6Vk2gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLIP6lhx374I3cHLXyrcA8GgIDDkS%2FUk%2Bae0IqurCyhc%2FCbSBYuC5HvpN5pAt98SX0v3dm6P9VC%2Fg6v5zdx8kk5eMAA8Ruk7DPlgmF9pTAA0zIu1MXiXHhd6O84D6yhGSpQs8MQ6nGvJPTEBJBJv5j4J%2FJhq5Oos2XnifWjIS4utlGVv%2FafH3Rzm%2BhiQwdTHfcuvMDb3cuh3HV0DYxgB01KnNumghtqGbhoeQGDmi0XqamFcRwSDwuhh%2FVYLtb%2FjJYAC5zszFOuKi0sGUrkWN%2FnoGWL0FE9hd%2FrjOpm8x0DH7ho8gFnRSQcLIDPw3qWat0xJpB2A1cJNWwlg8GFh%2B4bZRdK8fiZzmW0H9hV90nRMj1k67LpUCTaue34p7QPPZMTIAtB7Yv4%2BrTD7ht2x5DtG3%2FU3olgWllsYWmx1avdrc8xDVIapGSN6Q2CEBGXBbTkIpnJWt4NDScZ04LY804UUWvuictR8Yrt770yO0ZDdyl18VnEvDtG0b9jvz3hxCbzaexTybuAjfoyrhNSrswb9b%2B4DsyJB4fFTkBKGio4V%2BwhQyqL54VtcSkUSxCszmWe9LTiKbZLL9m%2BzQT581EceJQHbPfZl2WOVPaufuj5YWhgImcBm%2FtC9XXDI711pBGA97jcQwqbCmQ%2B7MOTc9r0GOqUBvo9je1Fq9LZMrg5ATERd9Pj1C336QAYta7l4M%2FlcSeuVvcPwAh8IWvdA5zaAwupq9i%2F7Q4Ctt079zCC3prQrp%2Fnj6ibdTkg3wldvR7Tmz%2FWITfDLApr%2FpemWC1lebQWdbExDOasfa4nbFFsbwymyRgewdNkyjMDgphpma%2BPxOdtvbOzkq49zefWXh6BF8X5p5r6uxjNR6SKmbSc01hGQn7vQxEer&X-Amz-Signature=46452186dfaf413fdaa2b4c09909ee0feba7abbb82bc0586ed120a7a17bb1652&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFXN7PG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIBCfCiQtHhxtgfRk3lpa2WGwgPG1GApVNrLhOvuQ6wcLAiEA38w6%2BvJCrv8G%2FHDQC84odMv7kNlxmW9bMmBUIYLfb7kq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDA0xiwI106E5b5ft7SrcA0MOF%2F9UgFEoDtLdEqK5ZQBOJGYS%2F9WTxr1Te4wy4F65bJE%2Fv6GtVcNrI16NmL6ufD12WdjbC9ZJaAXSHbAgxjCwlg8JSVBf1%2F%2Fasdz942p%2Bdja4m8fPIsc%2B74sYYjVqbDYTWDBkAFkPGIhH5GvFf1mT9TqoXJK2atcW3hkiN558htusH2sg%2FHME8RyiEquQMMTutYnh2GIdWxSaYk%2FP2oP3yt4ZZegWRxh34obTRA3cw22JZbJoRQy13BfQe0laI3qNCLxiFvXWsEDLex%2B248p2E8n%2FPlUecMe7hekY15VpIdqn2Pv3V5UrG1xtHk7tJyRZQNpbfNpF6rGC5elRdxRcWQR9VPzuxWvRD50DsKEMsvKQ%2FlUloTwpfCvC4Ioop7GKOrFcxciGF3tySEeZpIzs9MZp3Qdiwp3OL07yuu0XCta2Rjq87kjW9N%2FjplyK9nWEcZLPcU6UnOHtYBkyDrI2jHslghIWGyuBWWNzjzZjDfHuB31LWOUK9EwhUslDD%2FKk2rNBsRpUAzpmcEVDu65dabx4rP66sCg3Q2yr8tIcvUkISIuaFAAc%2FiowpCCKC73oFfRBl%2FxRbIEyNarSXddPqtTwyUhz4U4GrZLJdNWp5%2B47VZuZtGdN2YgEMPzb9r0GOqUBvg6adVBkGgprrfHV0jhktXFlbKbmCavOx38uW1%2FULC2LeagVTEM3Xz%2BdCO7e4dIkeOaf6hZXc7l7IN%2Fj9wfqI6gOHOdx8ujdjZwOd8fKgtOc3jB2XTmRWXc016oU%2FlK35PP88kqt25FRMhsnw1EHmbhp3F1F1Gb8JCehmbA4vFXW9nU9Y042P6P5m4yBTekMzMcluyF4dn%2F7sriKl7VWBbdrY%2BX3&X-Amz-Signature=06823a197b948c81cfc8e828d4bf81cbc1d62445802e2fb835b2742b48c9a00b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
