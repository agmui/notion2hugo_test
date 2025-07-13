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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJEU55YW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDGERfUQz%2FgjZlrpXV%2BzFOfecbJHZUXzminVq86TAVr8gIgTFN9r4KGz3EnnHxN5OUQ0pPzlKom%2FB8EPgQOFvv9MNEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDD3Oml34YKpvyseoiSrcA%2BcOy231YSYgyU2%2FDSnbmEjSNhgc6JbKL9UI4bpk3xVoEPGkD%2BFqM49cWqWU71oLenTVw1MGGe7TDQV8HUITBgWvdwFx9CeV02jEBcyFAehxQmvnLVGC%2BKr2quUEXiuWuG8Mhna7dqNnRr%2FyT%2F6%2BAOZacjml5VpXpmucR7DNp6f%2FhiV%2FBhurQCWLb%2F2ORVnazVPdraUYZwSs76SL3M4EBYFN4PBodTtQMtqVZIkgYpnCuMTcjwAhNAyASvxY%2FCAT7KXp03ntX2HT0z3WT8FjOHLD%2BLzQ6LjVNr5Y5QF8vU0jzzTMK79dLzru%2Bymm8uCy3nudv9JHbzGpxAvwNG1yBw%2FFU3zjToy071D%2FQyQ6ieCIGG1Pz1IEufmHjmhpFZOwUfd0EMAf8UEqTg32v97iIOGNImUiEeVgleRprqTGOAC%2FH2dXbhBnIaM21FfgObwHwXu3R9cYu3EbUFCTz4Op0KJ3I%2BUQGTNlmOF%2FaROP51Pc2obSuBcOULFr%2FTnWTdOj20VbsjOFZ7LQ%2BqVZkMuLYYQkwV02Fnkgq40leJ6x%2F3w0S%2BH02FDa3aOvjr74ioMpSuJOH0jG%2BvireBVhTevdA9Vx9KagiL%2FfSPHaLsXnclWoIDvhmrFXIZvcu0ruMLrmz8MGOqUBUwaoSDS0TdjwyHwzHCO9lxBFFyprNdWc8JcRXtkUg6gssPTPi6rx%2BjmV0ci%2F88sFUFkad%2FeTeu%2BNoGD1z0TsZYBQdf2yYfB4frCNyoaR9MXN4SpEHKhvl4NUxi37rBIdUlsWbyLrsUCc2KvyH16RbDkMxX%2FQZnK4IIGh18XG5NEDdS6qL7nJqjenkSz5VAuz6FKYNqmxf%2B6Ss52IN3Eh7lDO4Vq2&X-Amz-Signature=88c8cb753108d72195312e3eb2c3fc7bca85b950fff63b848161ffceb6f2abf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QICACX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T190252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDuxgtzL4a2k%2FQ7qg1lyI5ToN2%2FfWnD5ZnZUrB%2Fdld2QQIhAIPpwUf7XJ8TYWoyVAta%2BFVAqIoFLTIfULsrEOjSXlYPKv8DCBsQABoMNjM3NDIzMTgzODA1IgyuNczONZUV3AV%2FeLYq3AOP27v6mNIuGfc11r8qtAPfkE%2FhF9IzNJ9EZllX1hk0wPw9hk1cEW9RW9GICBNwSxj6InBR3jCuwyV%2BaMT4tvqO5OBAnaZ52FzaXyHCi%2BaRfqmOeH37X%2BTN9x952zlyR2urJgWuXy8fcPCqtnwmosS3r3dPeCcmY1ImMXZx%2FMhxPjir5T5Oyuh1huWW8OQqM7%2Bv2yN6pcKzuAIbnjZG3QetLPX1%2BlBo8niNMMyLAkuoSxJtVVCdHWnS%2BO824gwE%2BT36LZN%2Bgt3kcfDKSyRJsaxijqgDsMWTyXhNcbcRU1v0YReUNhRup0vUY4EfZ6TXqkuWWtYf%2F1ZmdZUmOnMpdu%2BVbLji2tEn2GKBhFDeMsmywBUdeEC2B6A03P991qXmz1kQ%2Fn%2FDN%2B2SS7AS9YXAlEwohl%2BJz0Z3sFctwDwImuQnVJWpwpsWMsycttgkJ16GcB3VQf%2FNyHyZu2Jh%2Bx%2FlfS2UJue8IQsjK6qQ45nOFDqm1%2F6Pms2dMSNee2glE1hGI98lgnoF4L4vqgULTXbBSA4TZNzArmGnLH3RqRlFJbIr3vBVq7f8D5AYje75URJwDcCZMYRDXbr7JKnNN7yWP%2FAYYvYJcwGM6Q4EofuAY729HFjvGhlLUgMgrukDBzCN58%2FDBjqkAd2QcoA68iWS%2BHwNRP7ID9On8llaYFt4lDAZI6o%2FvMvYwsy1QiwjFBKY6axrd4iPH%2Bm%2BrtjbJ%2FPviTPo0H5UTz%2B0Ko5C4dWVvWIyULM3AKYmu02MIDlWYUiTU2UZzveU8EeTgHElyPKSg3P34QbrSx3AP3pyJ%2FqMTXh69nByY03fL%2BHuXZO8LVu4c5rIod%2F9yNQo5hrFi1n%2Btk%2BY0b3hhiLUA5w8&X-Amz-Signature=a603a6b53e0d474e5b1f51688ec5c7213c748064643fe98f5a36bec631d711af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
