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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZKKBMVP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIEgcDpDFFcX4nNrJXYeC9onYCEZpIAQ4KGrRrKARfhgcAiBRORHASO9ijcr9ecdkaKO%2F8f%2Fjb4ktTjtyIP5NpVlwhyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRuCMVDO0RNjrlHtKtwDXZQRTJVCm%2BvZmmRcCvSNzU6%2B9YBBZyz5jOGiUwjtGvKnOCgGgZ8%2FrJHM8e8zDi%2BCETdaq9W0N3cbegvP3kXAtJ%2B7xpcnl%2FUE5y9dEYLxdEeJtOi0zFtNIsRURiIaomKz5MmndSUCgTyuTn4hVrRe7lWBFq0s0k4EDsGt5f2q3z6DVCageEm2r%2BQiR6ozNWtjK65uxL6iTEJwjCJEFBEYbbMfrgbx%2BRjtqHjBpB7JCJwqkK9lsd7%2B4iFydBZFisGItHaUvu1fnrzFj%2BVNzGhsEVcDDQpaK%2BXbpi2AMoq4EDSj5oCehnAJbp9DPh5VHUxlNnx71ADKwmAXGCj3jXcJwLBqlqOq0eNiUVpIISgcJthzkpzzvPcA4YpRcj8pCrL9tSBPb7b%2BXKRpNvB9bl%2BColCxz5%2BaKYa4Jy3mf0LdKLxzEnJdKa3GfxFi4%2BH3w2vP%2FReoedPRf8GXk2E%2F6rMFBk3FoIkT%2Fah7wAvTMdTdcEaX%2BJej04wB4PJPuU9vDwL%2FhyjPnbqWs0627tFVmbyFZokgA6J7WJxbTIn7yiewWe9R1Gv6vOwNmDxXWa8iWR8rpIXemwoATYUe7r7p76bNSRw8TB2gCfdtsGAHCUSXZR1Ki%2FAKFsqaXWVUCHIwtOnuvgY6pgEBxkEHkr5ndCeIX97W14Ivbf7hUqNvDn8DA8jkCFtJlprAm%2Fd2azE84uYVkJjA2PPW%2BNWrpk0Hd%2BQaOabpJSgpFqsxSY5meDU%2FgFNtjlIBvvhTaXQvK%2BIVCH7VyMoW9HEpuaqV2op12Dm25t9n97DTcrw4Fnr69UEFWb0RZ3vU52l%2FmxDL%2FgtE16Wy%2BCnt3SIQJ2gsRahQ2eJAg4d63Ze8RukIGsUJ&X-Amz-Signature=39fe6c275bd13a3955f79916ac6af33d8bff123cea4b1de217497c23c3426934&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGB4PYG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIBKHzF9lGRBXtjAI7MfGGrLAic6W1o%2FVskBadn%2F5GLdZAiAQOhdL8xsZxD4Xf2BsHBvl%2B00FPC4MnZx14L97QxJ4vSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY54NpGWsaITHQ%2BtiKtwDGe0GBio%2F%2BjDJ6zoNhTieY%2FcJZms57V2jyB8VowymGHvixdQyXEr%2B9ZfIwvs%2BhXeHv4MIgVOq58cid0AxW4WiWRuQraNmiJNFCaDjnOlGhd%2BZ3piLdLPEQ8JabLP2V16%2BuPeOmH%2B90q6juUdZlvSUeeelWSz6oqNj5dv%2B5fvyhCY8HwwmSiyvWnqim%2FLAdEZRR8QrzjjeXXSAXTaFyU%2BLb8HpuTPgBaLUpF3yGj654%2BMAWXKQ%2FitBzncuP8C9okBmRI2h7%2BzBGlOCJVuVJcpp4aLDGCnksF%2FcZJX6a2KRApoUHCj%2BelL%2FKkf3eHvVwa7KC5%2FbSNIwcymOm8wKOwPyoylt%2F%2FKqvPuzjAy84lm8HvPN2UwSrid3f4q7Hxegh2VYYpAZJ9yV2vSlbrU6r167ouv9bTo9dgj1dpMhA0tbJ8RWP8cueXp7%2BHJomwh9dP4w9c2kAxsyrBRXaVpYPXwdFY32dSuGQbKQOcCLBMNyftxjEAB5eVFla4%2FydxxMWkwGYXsNIP%2F6R5XHulN5Tprxz%2FDcnc4%2B%2BMNprklgsrDcRyDay2TRtSfbufEiYFQ3%2FzeouSbp9%2F7OmebFqriXD25Mx82ox%2ByL3gUm69ieqBRUFbaLfBAUpeEHPAP%2F5%2Fkw7%2BnuvgY6pgG0BeRIl1uiu%2BXtQQiwn0PeGg6HK8p%2Bu0y0oSLZiJ8zjfY4myBrQhpFAneuIuzwXwdd8K0VThI1L1F0DZWrwlLfHL2c5GPDgoDrd7XbREJM18rfaqjosr8jW3oHI3JcXJx1Q140ZrFw1fP0tjVRZPkmXhJEL8Wrqu5uhESv45KuoX9UOx5rfwnCCS8Sc7fdPgI5SA0ccN%2FWJQQ3OdfXkKSAAYm1r2gf&X-Amz-Signature=5e9595399548b4821b25e6692868e97dde7c390b5e16cc0b7d9401d9c406e19a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
