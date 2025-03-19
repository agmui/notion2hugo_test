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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHK4XZZI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICGk8t3hm5JoHx7gJ42fiigKRcSanGgJNHVwnQ3qooV8AiEAjiH3AD0Jay7kwXh2t5fE%2Fsdzmavx5h4z3Pp%2FkNoTWKkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDONEM0FqZBCPu55cGSrcA6eHlP465HxFCnK2ypw5iv3nhW0lpjiT4qopFgSezKpljEhCiYbi%2FSRDXNw7Ucja6WYLBuMAslzfdFsKKCfVV3gZG4wZDDNU5WKzblCUolqGIfYP97E46l%2B2bifG94JzFEJbNiU8TI1FGA4nW24ldPfW0ff40do7l6s6hNwnMaDxJAFSecqk8HaqAwv7QlZ3xBTUMOQnwvLD6ooyyYCvjeFPW%2FOWiKgLZcFtaObbE1hCKI8Mu%2BFFXUndK8FqIOusfryv5M3HN1S8f4%2BdSUxdl71r6XRmrXxVlVi2hrokRl%2FLQifIr3W4xjYVrcWAsA7XsX89acMxc1JjmB0vCnzb37RsQ31%2BJxTPkW6lWIHE91wv6Tjkh8nreMfitYnahnXC5bjugn78bsYoggHpBIjXLnQZKP265iKZfiq8CPHPpxrpLrG5TBqszXjuNFybh0CWVNvYFQbfaT4DcFLgEa6dmo%2FrS8kpvAqrVsBo3NsohItu1RpE4YI3JiFD0UMLd5vcNFJVIip2erQLEeD9KrSjW57t8B0Bhw6FHY4R8e8u8RoXR%2FPs%2Fkf%2BjLxyPUn6BB5oBMMR9PRZNlmTAPD47YCAWkLN6%2Btxe85E0XmC2%2Fk1gxa9rVGNTZanO%2FVs2TK2MN%2Fg6r4GOqUBVRVw4RRlPqlkcWKSciVM21yZ0gEuMyU1cIAlIUFs8akwBOSR4Tu%2FaxpVShKz9uEhHFxec2S4iGgPTW4VVkRL1eay9GXAnNTwqeqQRypdc7Idam1IZto4dE2NDO%2Bqr9PgqQfyinCfhh1VWo9uYIzA79hag8aq%2FAfuN8L90jWLcJHADY6tN3HBmMbYOp7PCy2Au7K6bacpoizA6hZB9lskO8hMfeL8&X-Amz-Signature=2acbf32af776809e19f2960e1a497a48dc175f3c4469d64b4a9f35580caea930&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPHZT4JS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBwRTGWTgzhNeqUFQnbQcD0LpnhPhl%2FJ0FOc0P8jGcX%2FAiEAy7K1QoAljKnH%2FRqh7jlEU47D06w9l%2BAyTN74KYMbbpoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEDtvaqDvTQW798jcCrcAztqH6T19kBQZ0ZKDnZenpG5LgtzCRHrf0SgGTIuci8W3aKB1t1VuUU9d7dlHbns06iDcYyIJCe%2BnyGC4fHxLlMTdVajypEfSx3V1LQE%2FNCpDdgVhfCattrqBwd4vWBPOAktMlb9GjI06wWodheAAfKJIINTYQzeIEj%2FaWRMqgS6gN8VxlYHkXqKa09HRix4bPOQtjwtvlSagV9BCPZvHZHK8D%2BrT7%2B4U0E6rCYdpiFTpFOeqC4btWPfW9HFa2w08EYLft15VwwWEN08R%2F0OXyVjFYE0VUCnvVVtxJTu2dFjcTMOq%2FR48OTkt%2ByCVZa779jNWNRMQ%2BO0ltXqpJ6VFsHlGxpRkqbqNTuD3%2FsTpqjWVfD%2FkHvVLdWnpQPaHUg8k6Mn5yZ52NhhGVzjr2hKkKak8I7iZPyE43FETpONWbFR2c%2FQffp2oy9KtedON9NkN%2FgIammaEj87BYx2qsvVUDO9AeZ2rD99JLS0tWCFfmSTNP%2B3QdMX4vGFZsYYZJ7fkNPUFoLUUiwjONgFXfKnRd3QfG0Qg6nkPBoXhBws4%2Fkoet6Y4LDkb4e15XftLjaM2gytV0TMZhxGNxcPMV9nE0FtpJzwdweDkIER7apWB3SmYlYLqx2AR4mIEGLHMP%2Fg6r4GOqUBNd3rgosakyiZc%2F6gn9m8VcY2r8avCNDWT5e%2B6SvzofcHmUtW%2F6yzYAwj1FBgAB5qnQBkE%2B03NtmApAGxN2oPkYjN%2BVf8kQAx9RpxIVePNolypVPRx%2FVUqDoxlR00gSl9V%2FEqUq2AKBd%2BRLhF3BPgQwMSPeeQe4Uy4tUkEI6Msss4Tk2tOIAiOH8aAXLv5PxRUdl71tWcZ1i9Yt%2F8kZ1O7hzBI5n1&X-Amz-Signature=3aba666512f544caeecfc8bd12960d58e237cb62f15ce3b813839969d7eed9de&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
