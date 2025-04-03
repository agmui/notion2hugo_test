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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YP6X6CY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCtCPa35tYn5slO8IKw4Fymwwbc4b3RgL7rJtHyrMyGEAIgabpHtnJeslw9uHZ1ihev8OwmQCMM9N1PuN7DSmKZlfUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDXeiHKpYrGfV9d1yrcA7nE7Tewsg%2FMzmfqZAeRekRFZOrhfX%2B3eYm51pVVcFGSGNF8plQ2HOo7eBT7DgZdDgGiN2lVDudz1zdLSgYGbHBbQQom00%2BBme%2FfGdvx3DzPCvyOSFBYtbOnP668WiShoFR8wvZLhxvsLC3qHVkVtiPb0AzBzjKkfiljUSVEPHCsSY39ASXwJcSZSCqFJ9gVNa%2FgmoW9P4h0J6PQeVrY%2Br8jVp3OK5bhfSL0hiHqFustU5F0VwgD0xSUEKoGVyB%2BH1Vxn9OQfn9vU3NpeX6uftJO%2B4Oog0EVKewg98x6M9M4gO6JiTg%2FK%2BzE9BoId%2BAxa0F%2FNuI1rnJaoZxPyfT5bsuQkQVgrdWV0Beo53hZKMrZe58qhScdDVC8c%2F%2FFOCTsaMB%2BfM5nmkOXBJGZx2MDDzXpfwk4EkPvv9jazftqKo2fLQE6WlTSgJN9QXjH8yyXurY2LEIJZVW5rxdWRxOW%2F4t4pumllf3LpzgImBmYD2n%2FBzMYWc8GqduFAwGuo3Fhz5QFfMEokz%2BYcvXYwvgcuMx76rupzwS7IVDzs7Mut%2FYPyZv%2FtU%2B17G5GaXjT4tfmuc0h%2BkBoqDFF6ftmjGSQ8xswhvoxBMnUMP6BD522%2BD89CVB325zsmEMebl%2FpMNGut78GOqUBqc7bW%2F%2B2LEbSlS1iWyGHWxfdOpFBq2pnbCS2vUwp9ywpNysI4XKoNoDlCKSwCiIr3ustaZg09SEAo8chSJWdQXJh8sfc7qHVKW6I9nyUfLfXuQSP66SlrW3WBsVZxgpdSF5fFlfLSVRbTh5EwX0LOnKFEQYfjAKGBU%2BebyKHqKkSJ%2FvaMrn82MbipwpE4lp3puT%2FHAd5IkqV1Jw0%2BLTQUDu%2F0Rlo&X-Amz-Signature=83c8538adc0e8cd9281e2cb14a2356df58dab2eed2fa0fb3d2a1a467b8a1680a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEONY6L6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCZYQysh8opPiIbF2N6e2gCX7dceRPXT5ZwnJMgiHYlZAIhANy2FpG0kaN9jOsievMs2%2BNqkslNArYU2xjEwClQs4kXKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL3NiYWnxAduj7z3wq3AP3vzWIS1gZmksYGDQ0NCX5aozKjNtREz0hYDb3P853bqJj2LFYP1SIib6K0RnW7RvB%2F72nWD3XY6ou446tP1LgwOKhHuOif2queEDjNzpbH%2F5JMV9tJZcP1RsPDR7eQSadMz1kHsRZpz7fuPuiO%2BBQqkjJ8fGZnP2k3d6vTNPwiy%2BTOgxgqBTWzVDrzFf99elocAoR0gpQnkX9mz7ancC0uBOkgmE7dFlwD3jjtkVrYteqFmx5ZY0nWT1A7et%2BCEKBf%2BAn5%2ByHyN1mNEZd2lW%2FkMHLMw0xGA%2FYur7bG5UtIjDxaPmuigpUnUwkBIVq8W2vZlx%2FenMudbPuxnxjHJsfDEd%2F3TWlCgyUCJZtyTydGLA5d3igpH6r9kaFXa0gSuVebuCFMP2nQrslyTEZruDumjNpeNXrJyp3h351ljqB%2B1G%2BxpqLjRPcbwBnVmYspTc5mMlhJXdU094s%2FfPJrJM2C0g2dSEy01A0v5qnUfds3DdFuSv0JnhJoE%2B6C7gjTLu7HdWPpxGtd4rpY7rwtSr0DI8zg%2Bl4SRCkeTr91uQMgumeegN7IN8CgT4jt9AY0nQtH86jPWfWiEA4kTACTbFml138b9R5f3z7Bcqp0A58F3Wu3NeG3Y0cL%2FH5sDCpr7e%2FBjqkAZuEkM0ml%2Bzw8S19ehL0tLu6bjedOfC%2BwP7r8XvaTR%2FNxQyUgIvIxjc0Uif3nyWTl5yjNw8h8bYG%2FAsjiIQdHVnYoRq5g1F%2BI%2Faxgza1%2BCftacHtFHFwzINdHPGUY7SRNNZiSf4trFsz18qOx%2BJl4E%2BK4FQucmqMWGr3sWaW%2BoK8JwBUkXAlML2xXCsz8w93zHYZBMi5C4wEeGzcj4saAe2OfUY2&X-Amz-Signature=90f79dd0932e3dd1ab49e284dd08093c3ba8adc83195fc2cb12a2c6d9059250d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
