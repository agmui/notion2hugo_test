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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V4HHPFV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDgBxX7%2BxP%2F8sP8hc5g57Md%2FxaKFtFmG1GyB46MfutazQIgSjjoBqXaenWLBluRWgAsM%2BxDGxALsBrM0%2B17YmxTIXwq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDEx8kU3X82ZJvjvSircA5J1uZ7ORsJ49QQP%2B1h1eGYG%2BXq63FmSmRFnpFk0PNwnWNY6lq1MvDQDbPN96hlyNGcVDaaiVakI8LGVcgcUMbmIi350OUfItDOkj8FKQvdr3DeTg2FZRWnU4kZu0xTApnLqXud0HAM9MayPY5w3RF1be6wNgCl7mQKECJ5saG5rsKBEE95OI8YrO4RzPzPh6y%2BQrSEehvDgxrM6%2BEL1lD3RiYz9OayMN7UsG2XGW5BZZlUOryat4YbXEmwakANnsh5BkvgJlnF%2F8p61RKrFhDri9lUnZjfQ%2F7v3oofP9GjuH84%2B5fVM4xoMZQ4L0SErutLn96xX%2FLUm41NgMS4gxB%2BTXMnwwp%2BQkgGOEmYT4ye%2B7%2Fqrqa5p02jAKZ6YGAa5i2dxJpDqc8QV9HaL1yz%2FxEPZJAjC50wTTUSFBjWAnt7cm8zTksiArEg1ZnXz%2B1JpNWQjQMIbxuvec1I5RY2CrGgLlI1QC4zTkgh3aaG%2FeGiUXflUMseif%2Baldy%2Bum9U%2BPFXj3AfHbRBYSFOMe9RBJDqvgRfBSVRMhyIJVdqv%2BlvFUGSdD5yHmy775Po4NLF6prgab18keh99rZSgPIcYjMGBqtZaJCNARmjMnx9Jn6Z5RsWZGgWeM9F34CK0MMHXisQGOqUBLYen8aekTZWiNG0BDtA6KEQPmt6zsFlc%2BEMiRbZ31oGf2r3mRAeuRPDHIjp1ExEQpBEsitQLExKbCPv1DOvU1rG9X38mTuwWcL7Tlxzl1qE46mdisRhtklyuMJ9dfa3KIadcijjqAh8SvvgtBO0c5yLYiq1zAfAH%2B%2Bs737ZFF6IpjE962r%2FQlnP%2F5uZ%2BK5YmZb1VpoNDd3HcWinwtlVJ%2BerBxoRv&X-Amz-Signature=80bc5aa4568f4dc88d41b5a10837b4f87b60b6d4b808f92cdc3fe8db32c927c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W5EWF5W%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIDKhobJDy8UuxjKnl8%2FXs0SQjcpMthKV8zc3QPHvufgTAiEAmBpBA9oo%2BMo%2BgnuCDMGJZaKRrvGeuVtvmyyLapdHSEIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDMH2iT2sVM5UuxTDDCrcA9c0Ea6xlkBuLxXyG06xCkUxznPi7nV0mekJmrfETma4iXFYhWc%2BeeavFMz6KCDA7gn0DdCG0ml86RReKvd3g5Fd5xomxlSuCxm9DqUofgR%2FPDf9qlaBZfIenrqJ0QbnQ9OIXafitAcXZa9Qrf%2BFZiO759PKVEQ1AKuny3Of3xaJc9UlmCpH%2BrNkK8dSuQLzL2tLBMm0ptbNyXcGh8r84%2BHPrZ5iL2e5HpOG2qqXRBgFMop1WsNEqOAaAYgFUPbsuEsTwqrc5KVeGwgU9hpn%2FY%2B48l2vijdH19G3rUc05i1Clqe8YBjGGHhkJLQ4ubKQdhYRi6%2FkmSNxaDoGDtGpSp%2FmrZaknL0bBKBvaNKgeu%2FcRDbYVSPUlzNRqQm1nMpP%2BDYZHpC21AKHv0db%2BMrz3caQSMcA2%2FQnPMUV6fBjprHQ7%2FtLmescEctluWTNUCGMiBjkGCLl5CDVvct8Sk04%2Bv%2FZ1misKw2eW7%2FMYr6ykYSdbzsUZjda7X5q%2FmAvGUKaOw0VDwKNqSq%2BK5w%2B6vKV%2F5w2Ko%2BykBTll86XTlcAmCcmTDUgY%2Bkq9siOAfzSc2f3RQTQYojjVtCxdyeNpMIlPit2fqvulXBzhvEedFpT8%2B8%2Fii5MZtDI7pWCXBbgMNTXisQGOqUBbZ6y%2Fl3a6rNNmbspNKnMH5fZOXzMLMVNIdo83kW54XlEAgZDCaGzRCPUG6G2X1gM3pQC1Ik%2FawH%2FUB09koPfsoFbNIUoQKq%2Bg%2FUNlqw7b9VErEzblNLrf8vGGpNULO2x8Y%2BeSe2WIx1coe2GBsvFD8AOg47VjoeBtlxl2mwbr0EtyVinMQTV8T5%2B5pJUSznV4YjvxzBS3Qs5ySSqQb2vUDva4ITc&X-Amz-Signature=97c9ac13bd1b84383564287818b3be8790e9524828bc8519ff21f92d10dfc044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
