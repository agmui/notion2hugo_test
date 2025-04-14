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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFGWZJRS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6qAJStM0REUKB4Li9rkG3fx6l1lU%2FvwiVykR2typWyAIgP8oat1m0JnaEQlbB7SI4kkO7lXVJtw1npI9PSd2AicIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEZ6ts0%2FkNpSJPxJeSrcA48%2FYCGxPqUUm1r1vTT8OiUwBMiUBbo3Uv8oUtsHzH0VxwvP5V4BHTRBn0HuDJqKthV2%2BkkOuL8eMIKDOGxq8MESuPWm%2FSJs8RuZiF%2FLavHWPcwjRTdliNUiWtxJaiti8HO0QZniHB9GWZ%2BcxxwavfEJG6CKpzCIZZF0STUIJ%2BsZSvm68DG4cXiIZ%2BctWuPwL8mEQPYsNuZn%2B4Rn6w6eGEWHCAuROG1F54VAwVmdkQ5Uds4LTiS3dWVdppAahcMC3XX4H%2FMenNGrJ1DByG%2F0L%2BNTJ9WAO5d0JpcZKpwAYWnnYtmTw%2FZ8YRIHvxjKkB3aEBzQuxuksFCs0HEkroq8Ct%2B5yIPyCA1Ekz8UETvLRSFOWDAZX5%2Br16j7DqIkyK2i5aJIeOuGe4iEAxHFew53WD9PXO2xSHjuSagbT7iy6qamYJeTrCcbf2eTYKR8WM%2BQhdXolxlFWWDhknTSOGG6xebxWuMAmvvQSaukEW7vZmqpq8S3E4nv9bibTWAz2Qr4UxMVCG5WvETGCh%2BQcGPfGnoR22HfeoUoPyb%2BlYvzY2YoHNw7j2JuZqZny0%2FVNabDTbAhY6mapLiTKXtZXa2POKldS4tJEzWIDiF7ZqM%2BImAfOScbAQQBSPuuvJBfMIyU9b8GOqUBsbj0Da3Ir55yBsuuBjZQCYQjr2%2BqdUe1SX%2BfeanfPsIAOoQZRxwbzN6ZKpy%2FGYRHNY4ifyM5o3owY4P8KSn8dexmeq1FxmfMZqi6fW1eNsm3Pn7HUhEbJzOfe2Q0VM2wOB%2F0%2B3q2WoG6LXodCYxaadIZjd7hOEkyAKO4neXdGwAdSMokuvItyNGWF3ikSQyZEcfJ813MN4xbcU%2FHwWceOLSoRC0w&X-Amz-Signature=c71d3b120beae16256bdba2e7e0a0a736209ad7b66abb04ef7a75ba84b0931f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHXGP5D%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmjb9iNacVJsULI%2BsP80WWAP6aQzwMIbfhVnmuZeFeDAiBxkj%2FysUhosIubyanpLIt%2BO9F74jJrZIBCATjP%2BDR7Syr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMs6KNWFM2MB%2BARJb8KtwDetbEunrbNAp58EkzYppB1rbvX48QQSp95GrLaA%2FlFloCme7DeMo2o1AzLEaCabH7gUGPAEJKsHPh0tiWAbkN7D4buZMf2QG%2BywdvisRVLB1l%2BJ2DHGuObrer2y9BdUcT83HKgt%2Fng6bCQKnBURYmyk%2BB8nuWpqsiH4oCSl0AnC0H6riOFBsyrmk1rJaXoX8%2Fit1V11oXUgDNTk6JV8zEkojTSmlCksUJo8BON5Ee35sxFLcEih2xYMActJfF6OCeSK4G2UeFRKto%2F7JH%2FQWCFOVEYPITlgF0%2Fop4NKkdEqD%2BokgD6tdsXYafhSNo%2FZBkA9Km29JjgooxFSHqlPZ3bXJqP1ni4l7vl8caCI8ZKKmSvFU%2BOTgCTWUzxavgdMVwZYgGUiJD4Il4ugG%2FUaugCanIrrtBUzpk8ZVFWf6k2xlUS9SqoffgczEPgAb4IGXUW6OyUeI9bz6ULzd5IMW0xZSx6%2BcSPsVblqCi9asahtC4RUMO43zzxzZTe8E5ZisdzVGEL%2FVWPVd8uQc0JmusBRjz7quEqVnBaI1OxsAxF06ict3J%2FxwJyzapP%2B5NXhwBVeuQ0qs2ks%2BpuiB3qE4GJDH1iD%2FsvRLRVgTcHUDDyNOCdLvSE0KbKodnoOcwhJT1vwY6pgFIAMkgxBBfr3mIfAlcQwYyIvZJp2PpYPBBg4vcfugd1jT68WI5WJayXXWhKl8d4U159F1lUUFXZWLLE8sJ4b2nBrm8oLcaSVXOsyFKkrWy7O5l3eKkyNSpUHRCYWvxxpSUjD0AD1ZuJw0xLKt19osWP460bYzcynCVCRpgdVXwZx2KbYoLLJ2ak7PL5reXofFi2F5FfjdZNcaVTpD32P13gqs8E78X&X-Amz-Signature=bd72103e803e9bc9d2565fb41911001ef762015aa95f827205b647ada3d12d20&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
