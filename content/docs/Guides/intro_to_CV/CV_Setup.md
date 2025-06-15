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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDKYQBH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCT%2BZHgpWigIr3fASdc0c8kdZdwvUENfL0LY2RuKojD%2BAIgOurswF99EEoXr1a026oT5BfQofYegF8Vgrk9wnt6bWIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOci6KfG90YOQlOTkircA2dsqxYTbl%2Bbu%2FLcyounuOHggVwSo7PwzuyrFebKppwVHdy03AlutnS9pIyQrNhKSwqaF0SgFYbCdhDtzgQe953bhY5PJKKIQQixky5mJLL7Tyahk3M7%2FD4gUCNVxUD8XAGRlJqHXioXWjQH%2BUgnDt9OwR7aNYFWQtv5fvN7keoJwFwGrORLxPESwSQj%2FfG5qjoDhXmvT%2BYWpr6q%2BsH5IVaAOYkhOVFEjXwc%2BxjLWGYPSXMW0tAiiHrufMh7whnF7y1ihSipPzD2jcq0COXCJJ647h3hzFIiE1n9cIdCUX2WnzG2GwLld0wcOp%2BYRzaXTwjsj5EZfU%2BVyIsrjbvtypnfIYU7sf53r4V0QHJlRUU4eCNihcZhsIvreWoHuf5LWmnC3LJi674ePjQlMJ%2B1omi6DkjSXrORoD%2FZv1mSvG44KPs633pqhrsy2lKUs3SE2MBifambDeqh8M%2Fuz%2FpnVne9GfKCrp5kmXNl1DvYbv%2BuIrBIuNIaaSm7BG4vV2%2BD8OTy5X4pOaQpDerd5AKyMk30%2BjcQd4sjK5T2MkJ0YKYv1u23yU6lBaKBsSFhJ4oEjzh1G%2Bpq8ZAmycsUBhOWn3B2r6A1XGPp0IxGaG8lxlwcnrETNhO97o6%2FrUE8MKCGu8IGOqUBj7i8%2Fz1L%2BLO%2F3RpiwV9IvjIaFFdHTWY5Cz%2F%2FsdmZi%2BAf2ca5b0t1dGNQSyEqu8g23wxXWs%2BfkV8iuFU93n3xDnSgJKOd0NdRJhx%2FzdQMMcfvqxqlmo%2B6TkekUOOtgifl99huYmu7pfTDWaq9pf9P1KkTMxRVATEZ0UfjqcqXWp2c9TcxaDe5zuOIhf6lBXXU7g4riUl1NJ5MkMf%2BD7MiHeMB2aFn&X-Amz-Signature=ea3cdd9457d72956e51705951355f896a679443dbff18de9417fcae197548ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGPCUXJ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCNoiC2TH33JkBzGRjoxNpzmNxIbFrrqYPAutUhTHpIRgIgQq8px3gjD9lZVWPx4EWL1mdDDonbaR4zb13%2BP4CiSuAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDKZ6c52ACrRwkD%2FqWSrcAwXzGg5j7R7jh3z9I1Cs6ZrY3cdw7fqJUM0tnUZ9d33YUm0e%2F1fECWNwrUR%2BKSM7F8Q3t3Nf9kT0kZNXGgImuLqqCdYom%2FCHusVUl07oWg6SSdGaWBu8uIRwDMm065pVc%2Bysoz75rSpZ9Jc29jVTPjIkPLTibzsdmZLEQpPhS%2F8EgtTv5zPqxUKuCjWfrHAFcU%2FthvXzxwKal4fI4pMOi0ZFpjzUH1PXs1oVQSvxbtBqqQTDchjSyKw6ViMWAdOnW3Oe5eAeotDeF3qyvL39jODRp6l4NDW4QaOuMjelvKyPgIkAEC65idaek8zRNTkZ7Dgwpk9NVLTwC4FwOozz7jZMgz0GxQn7uJuhgTSYPvljL0kyrNh0GoyOWNKA%2BA43j7jQWIK1Y0KtYQ%2FuNUzKYDnT2EQ1%2FmgKAqTjPTpLKwydbuS8l77JAYd0ZWj9Qkpa6Q5VucZthFPm1S43XfAj7gRU5D7Yd6ws4eanGPJbGxVeALXbadD65gVHWF%2FMHqL6BSSoLoyc4%2BBJ0IOaPeuIOACsrr%2Fmz7J0BOHAbmOJ%2Bko%2B3A5RZOsYAu1rkKxhKWt3H3GQcRKNha42uQSC0BtQ8Dv8ODGD35EbYD3ygfvXWnsyxcDxyg7jJkBgO0K0MNHQu8IGOqUB6DQ8%2F%2Feue4BpmUgiZzMJ%2FeINS2HDyNrAdwKLBWwjcdvKllFEVF2%2Bned%2BKyVaoqipw4%2BqZc%2BWY3tEZZ8VH7uqHcpwCiBKYf8yKhQNCBv1%2BOrGeZHjczHBUwKc7b3S%2FMe%2Fo4Lc%2BKRynO5BhWunKz896Q6Uj%2FhJJxJER9Bvjjt%2BgXj1KNtHVbW6wRARU7q8%2FxqQSYBvE46qGebZ%2FPdvlqt1dDPo3Auo&X-Amz-Signature=21178183c4fc327e9309cb087630f2345bbea30114e2ec9d54a00f0717f8fd8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
