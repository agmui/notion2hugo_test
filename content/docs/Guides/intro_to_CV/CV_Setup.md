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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWYKNCF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCQFSP4iIxNZQXg99bFInySVXaJaES9ojRkUabbFx7AKgIgBP0Ulwtnfe0sG5li3tQpaq1%2FZxIYAwHKlHsvMCtz%2FwIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgp0eiWDBCyySPrQCrcAyJ4kze8mitTERIAFwA%2Bg%2FZt0nN0eqrdetBcGdwuAvblTl9psz%2BOQ2L2QinM8er2U81gRxRhIJiTJgNKy9PkagB5GiH4wqUzcfKeqso2zi5L2fiy6A1lcdA4RezpeVv8rvmmwixyrY%2FDwinkQz4p2ZMLao1bJykhI0d5I494YHE7nxpTjEQ809M9LF3EDapg97%2B%2BAACA6P%2BOEbmoC%2BPGMtSfzWFmGG6sDuwGhJ4daU%2F3Dhcwc0StUrmOQlJiYbfBx%2FqlEU8yuBQRP3xiTZfAYrL4oejZ3%2BTPNqSJFMeQIablGr%2F3qtUIhwHdLuEA8PeeZXxdunDTn7PVh2r9%2FaQbwnYoqK57iBwBDamniwS9nndlKlsGFdIBS0cJcqTAZ7NRr%2Fh2ZTMT3lS0%2Fenv5tIQPAIrtXMeoWDgyhRobFTfrxwbLtHBRkGy6KK%2BJa36z%2B%2B7YurQXkxcLczI%2Fv4NTM7Ipz%2F76ttUr4TnunaDPLlCEvu8xMbWwHneHxv6ypozxv7dkVJyNo%2FSPg%2FEStezU6axAstNrEUn0eEscwtLvGu5IyE92hqI8qoQoeCdfR0kjknyWIMx7y7uf7MtHOrhua8Z82UQpdQdMlJ4WFEtb0wpfIXsAU2xjE39Iq681IYOMI%2FSnsQGOqUBMi9AGacrGIgQvAOapzcEzRKMUK91KDh0aLXKxNQLaIJ6ziA3Qx4f7kVnMLAZKeVcGJPZ2VEEMeTD99Be6oKcepQWswINp9WaohRxVHGtVH8qNb%2FK25Yf80rp7p2OZU9DI2VnCpfTcEUoR2uVQ5uQGJH1M1hDTyqDhHlc6eTT7JUfNhZU5WA69zqowfIMcvw00MrRl85FaPaePPI0dQlSvpCgvOys&X-Amz-Signature=4cb1ecc10db795b83efc7a2e6365befc9fd46a9e66f6b1c62c65d3f2b3e8b568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6ICHHE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCID3w13V7tgg7x9SuOg%2Fp%2BlRLmL3YyqRtzbhM7%2ByOUgshAiEAno92%2B78g7ALTcbd5M9NIMVcz%2BfQMGFVvjJCnbzE0z80qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXV0Hbt5RzG2M0KgCrcA4JbqG2jsbJd4%2BzZD2dOWWdYRRSIURBHzbFS%2FyhUN1Sc4pEipGgfG0IEHFRuG3WO8Uj6n0B8secDoEnC0rTdwAEKxp1%2BatM0NNeW2IYpEXv%2BI0aiTN4T1yUR5LHygCx8KdtlptzP4AMPidYkagA41beNzQ1kWD6AVrJ%2FQGM%2BukQbVZavKNRKdW8tCKre4RxXpcL%2FeA762cp66A3PGKJhaRknJQmtR2bgprnQt8PjJMhgZNCbePiAoy5lOA7ottNLVrD%2B02Rvh7Jya5dCVxIsscgVpdpM7copgORaJ4JkFAENbVAm1eXxeQqURSc51lfIm%2Bu1997nuplvMlz9kv1N%2FAnFpo%2BxpcrD3q6%2BtLH2Xez2IEaCQC4VAHYnqtecHD6eJDgJJflwGc3Utu1Rns7rx5jQHWj5xmmJz8JuYkvzxbi4vSARcf3ws8B%2F6N9yhdCJhG%2BjjK9WsciSRFZUirg0aSK3uyEvniTPfSt%2FN5xOLWMEQBZJA9Hy0t%2Fx%2BLc2LhvkLzVcnNx8WldgEezW3vpIr5zNVQkiVgQzfCuIj1PO4RwuO6bbn3Aedm7CZqbwzkqdr7tTN%2Bpr9VVzRSUR3TudnRwOndaDGJn2rPWeZSPM9PvTP5h5g0DBNI98BAjwMM7RnsQGOqUBJQcj%2Fj9aefLwQIbvWgQwb1KxsQxPDr%2BNYh33CF8Pe17vFQcEOmI1%2BRJtWk%2FhpBJfEx%2FZsZNmjuGFruWT9ZzGytmBIUinTow7brE22kpkpSvCQZfpuUMSJpUaC3%2B89AGjJ7%2FGKWjpRtczJ2hJ2kOtyEapAEyjJ%2BdwvTdw1il9a2vLpsWUS3Lpzk01vT3aJqXfuB8KgiTPZtXxnL6DZI4qSbrk%2BPUJ&X-Amz-Signature=6bef14f35a9082a020b87038440af77e00f446be30ac3e85b5923481896b1c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
