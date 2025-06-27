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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSPAQEY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxVsw%2By%2FwMa8vffg15YFrfAAGjWMAzhE26IcVamntvFwIgWJRiroYpE%2FwlhsxudeSMigYdFYPUuMQtR4kiSWhe9b4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDC%2B6%2FSTe3UYNstW01yrcAwE%2BkB1ZZvx6lgNHg716R2jzTYxpluEvKFL5K%2FNVcUxPA0bap9f1vlhmvwa4jXMpIl%2BjnhX0jBpRSHqF8ROoUPydYXkSlMn%2FyJ10YdnVRa%2FCBhtiT0wtxj2dR9e89vv%2Bbe3DXQR5QQZ96lAbgM8XsBqgg9R%2BrWORpfI3UGUanbrdJ1wP4fiGjf0x%2B0lkjXRNCW4CFOLJsoVhJZYzAxAuXmM2OaeJc6v89U2cQ9vfiDgSENBnAVGGvc1vaG7j06UmvdMlr%2F172j1pWeE%2BNJBB1UXABhjz0effVOuUZD9UGaalR3UlhO77pYfyAjbTYtza8t7D%2FEIpNZvKfgx5WsnT3hbS2shGVGpeImSqkCVig7UWwp8UMRlvp3s8WZxF6hxQP%2FG1g8a271Y3XN38Jttm0OI%2FrpCJNkFveMokJM2NFo%2FK03IMFJWItkbt%2BfHCmroD%2F1h0UIcTRVONb9fsZeYcITLHQw56E0VzMidUeYfJqVINaPlmtW0WA8QMnrygwaNaxu6OAS5Xk2oDYzYd8vceAu8qb05dnZnY%2Fqgj81rDZbZYKMvFvsvEZWeXB%2F4KVRAM2XlSWlWed9N%2BS7OZ1tTL4TIw12piC1p9UWO9krDaF0ipy5oIXzGEWNVPxfN%2FMLHK%2B8IGOqUBFeswvB0UIpmkc8o6d4E4i9L%2FzVKmQH8iLPyT4iMMWmouyB121IWZTYPp7%2Bqp0fFat59HuHmA%2BP9lMlIw08ufzZSaKjQk%2FJuorJ4feaUsdoe%2BdquRHV7f7NtXgOT4anU9cBLfehbC3GV9bpTgHEj2VkL0D4d1Ya6Wba0on5nfDAdw9HRRVTZuH7VL9fyEba1HSijB6rPIBHdkBJ2fgyjA8Xfq%2Fk1X&X-Amz-Signature=c4191c9c8044435b68c4e81ac565dc6d1c53b8a110a020e7d10334c11f3acde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C2TBIYW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAm8Zvg%2Bu3d9zt7I1Rpr%2FZSc%2FMvn0qEYl0IfdqAkqg2aAiEAn%2FgZYn2VzfvmX1aWuib5%2BMop%2Fsv14ZwQtI2clt4efAwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAVIkkV7saSEQhkUjyrcAzz5N5zS0OV6HDkFZDK3mODIg7NxPuRnTrxYW2wuTZiytTi%2FBSL5CZrzsWUcQ3hI0xrtPafMelQkfr0bCBdvViR0LBOZ9WWdBC%2Bg6Tc57VCUe%2BmK8voOPsIfyqx09BTXn8TLUHpYhRI1%2BkRDV0ZQPs%2Fd5Y1qgDgiJ3XY82MB3d1YDajapAqegkt7I%2BHZOoNskwAdxr03vQzdjFE5yc9NnFbWh%2FtsbxmabRORhk30%2BkWcIAIBLMfacRuPZWjg5vqh%2FTv8FNjTKxxJPiIlU0Mt76%2B0Montpd5fMBPvWMLhfARDRrYs0jKKHbPL9rdIXDm3PAwnULG5i5NQUJg%2BNNPzrlBqzTYYC3F4TrvbIpPgOlaLzXZpgSp6Q9SvzLtE%2BUziUfw4RImGlIdAU%2FOcUnLjUXUYzEYGwX3vNsxWfoI3VRfoUcfL91I5BsJ3g5I%2BpP6A%2FPCM5eILIF8p0gwMtXbGyC5jNsFdNmuzRrFRhCSzrcFsAEHTo29kcaWeuP%2FbW%2BizaO1Y4%2B9LoquEk90wd%2F65I69SOgu5NW0zsJ5puuYtsMnshWpf23MZXy9nDjOM67TNlBnItrw59%2BwdoB19C15mu0PyVMyjfavPpOM6ICEVFF2Wzw4dyA7VUcwaJjxCMM3K%2B8IGOqUB1ez0SbNkUH88ulhWvQVFCpAr2oiSpTau4wPF352w1e1pCunlZ3CdYDLQM%2BL%2B6hoZ6xTnTGcq5wiGoFINoWliHxP7oF1t30f%2Bx95ADClsGXah3eXKWHcio08EDvz6PlKaFpJM5W60I7guvImtKew%2B7S5RYaLgTvajAB59A3OH7OBSiRu3GJiKN9jdo0lS%2BsZE7nOruDsBVAW6Q6KMNEWrrKIDSewk&X-Amz-Signature=cc443f59be0d983facd500e029c4c99ff08dc9953dc2b558f64ed7e75522793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
