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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FJ5JWDJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCBXORW9vKjlemmd3zWWaSdjy28AlGKjEVnm9qhAJSsewIgLzSyIObsYHAV05LQpkGllzv0mC5VrQt9q4jauU5VCbIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI56%2F4Gs%2Fb0ddr4eeircA3yyYTmYRbSz4ku0iaZLKSKpXmSK1TuwY5fCdibLBqY23bsb7Z9ibitrf4ZrEMQf75Y0c3HaRYP6zehhQ8%2FVCX4Ge%2Fi6AZZ583oucQTPLGtEJ%2FxnldOysOURnym3xGU%2FY2J5USrGAVeKzorOgYPmim3ph028Iqg9muTVl6OKxJrymo7kk0n1ZEI0nGSZsvI5o11sV05IJmybExjUxC9ZU%2F47oKdeICFLPLWXljP5tSQOH7RrAT%2FHtxMdPUaxYSEMf00%2BxP1xudTMtLUPWHprg2l64H21QRdxSGzpUPn%2FnFBvlgiUhBcZUR4RU24Ha%2Bkccuc%2FNshHUPahSWWd1TIJR3T4%2FjLYBcQULwCa8UOrCTJBpsw5Esm0pgZTsE%2BSZNUKE74V8eXKI4bL7y%2B34po1BRx%2B007VASkiyikePN1GKe9R5VnGPRRveQanI4K0sx3HEDhfPrDN7nBIeYxElItaTxoLPmph3bQ2G8CmjbQmABEeyQnCcobyVj4Gt6TlQ2L08JnECL4y%2Bf3QlEzff4IkobtLNuqX5vdJUXt2%2Bv6v3g6gRnf7o4qzO9fRiyaxHcGLpo3A2tKEwMmhvmJrMzZjbELWsE9zNhDRm1nj6KqRx6Ju9qxpm99nDxxxutC6MLfqy70GOqUBgunUbyjX5suCKmv91QfgIZoCMIlF750Eb9PvIXRAmDOO0CNGc9TCLhB5GNHIjDr8q0WlB5I2WfNm7fnNbWgw2Z%2FgA7umgSuTlsat8cR52aHAxvCIRBTDCxJD1cZIP90w35kckx3iLb5HZ2iarqd7bkePwMK1RRAXcHF%2BDmY58QcVSxjBAkixNCe%2Bt6HpQ9ei2khPfAu6H7a6w1WO5uxBP%2FmErdf%2F&X-Amz-Signature=8bce4d83f38b3bdcfe7706c53cb237ff3ab91a9e2c69e824e45b0eb7df692980&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTD2IW5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB7xuBl5Iq0dTl4FyBgVEHBXefZAJ%2F2qww%2FxG6aw4JI0AiBHQA1cgHEDbN4fvCBK4u9N199GsjK%2FiWtAo7tNX2yS2Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMNxoLPdRhktnEDZK8KtwDc3TZGHMnHCMsUPrYPmlBjRgi9Dmp7Kmo1iEm8kMfqc7SIjgSmZyAX5hz1ZGcLI%2B2I%2BKh0Gh%2FPlh%2FE6lIYJTCU%2Br5rUieG35Hq0bDkPdBCdlD1Guqd1QTsVnTWI0WdOt941amOGWAGP5F2chtt276hlSOsSTTanK8BaUsqrkUgdXSK4wt2F2lmp%2BL98KEff4btRg8oXym%2BYnKreRUY5KrKU1JmeNsE4Njn76BUxYeKlgq58DhfDTXovzycJXXyLtAg5As6r9gWDZJwyvPxnSYby0BzS%2FmeoA%2BQ4E9AsLqNfwk%2FN70JJjPC%2F%2BD%2FyEPihdWnO0zxdSTuAyRcLTGWrPTKPnV%2FH7UkJzlL1qJAduH9R6DOpIB6EJ8SuifH0S7SiXOvZ66zPfwJ0vsDJU2aDM3OwSKoV9I8Fk4x6D16vZXfZVUI7APiNHXrKnezMi1%2FpjlBZdzgOPT6QsRkhTycOhEL7naKNo2p69x%2F3zPvAzeP3T1iUTDZaHBNBDmZLDOje632Nd41ljnhP9scsoJmy9grYGPRo0TfMhze5g6XCFfg0H1m3ZOTW%2FPlEzaV4z0bJdx8LhGmylBHrvn0C8OpIRMU82Qa0jNxY9OHVDf6cXPZz64bzdfoUx11vG9btAws%2BrLvQY6pgEOhu3ehj5AoVRf8itW0g6tfYAsJ7yu2EQutGOUaHGuBvncn%2FlwGksksvbSjj8LD0Rw9NaikCBufcI2Q9Iwlghq5rvOTG4oMHyWhHU2zRCYyal2lJkunmnp5PgEG2PBk4f6N6sujSPEZk89jPR9SMj%2FRVwWfuHBicQComr8CL9LMsMZJAwyNV64e%2BADxl0Fv6E7ptf1pVkhg8g6LNOB3n508P0Hd%2B6Q&X-Amz-Signature=1ddca066578dbf8745faf77fe42c7dfe75ecf9bc85a35997dd77a0cb3c96bfc0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
