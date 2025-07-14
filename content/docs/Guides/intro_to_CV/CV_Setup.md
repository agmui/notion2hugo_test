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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOK74JWZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDdZBGcYltdQ6Z0svpuRkZdCVDQHjJtQrDthBSNuXge7gIgPbzdcWdL%2B4G0lZdPJCD4OdDQu9VZ%2BxO4nGfkLh75n9cq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPnNyF%2BFR8NR2KMweSrcA3d4TpR2f8YEuuqG3rWoW35qF3urtOS3tZ9Vy0s4W6MTbnXilAFZT%2FxB%2B1OjuJJ3u%2FiVJvMGzVz9IB4I8PvVvg72v8kgIMX%2Bo1IsvRH80i6URPlCOXiEW6TBaydn1jk5m15A3QiT5AjcQfb9GuS1bjHNmuNXXezyetTadYwmU4B22MfdSSPl2NNqcczK9lwmDynrRu5dhiB0DI64ZYpetPlWvB1CzlJbNzpqgXu4iBA0O1RlvncDEjhq7H0cS0qz86XcI%2FX7ogPKdph7IFOr%2BM%2FSF1BH8%2FKn80cHWPKj4epDinFhkzSil53z%2FqNuRV95haXHaUoa16gv4P0QRYGGxZUdQiKqhrRw30cn8swYK8HYg3arpR61hPahJpzXXdGDvCNvlr%2FZn%2Fw3dwBbRogCKQDiHkXXwRajqweL5wb9QD8lFXgISYd9EQ37LDtdn5UMcLS7UYE4Y%2Fc342eOOLE9lv%2FyO5OPs%2Fdxj0%2BjOsUmTOOTfpb9XyNRuAiO7F4HSHDbSc2k2S17msx1lSnBux4ioJtjiMQ6uaRKgcwKDh4x61Im3intP%2FXJ5rKJEP6p07Tlt%2Fee2wkv8Oe3cprBPtg62Ek1Whlr998RhZtrGAF7kfnS1uSBs%2FM859Pq9LK5MP%2Fb08MGOqUBW99BQ6bT893zqWlLK8S6lZM5dC3YOpGsvfgpfcoGlKa11Ra997ntAy7uKRv%2BI3yx7ehMWcJ4j2vqwQdek7VcerWuiMtF0Xv3li4ECtA3DzmTe7qnB6KSzeS3NBkUg%2BPVB9lvLzgFlGm0Udv9n%2FfZmC8dxb1YSv1QA5R7ajLcmQMC9LEKteG0Ha%2BMUYS18ImEhCmxk%2FudcyvEiaTNPE9ZO6I5bdCX&X-Amz-Signature=38731818154f7f2000c7a1e32bb555a6ff1d47de57c28a39762ca60c2e0414b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC7BTGW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDOt3PGAQ3PmMJGukhdFJJ4aI8sGF4U73%2FuOEys4GmL8gIhAN%2BStm5Z97qQ5ox%2Ff3W9ZiYglTQy28xTmDCMeGPdAmGXKv8DCC0QABoMNjM3NDIzMTgzODA1IgwE3Yy4vO6jBu04%2B%2FUq3ANKEkL2WK6snyn%2FHVIU%2B3%2F5Oy2UL6RbP0BDa%2BrkP1dbl08bmSg8YDr0VRFPBpYQ50NRzuMrqEHiUlELJEkrmBY6SzLmHVtBZ5M54OPGHKl6oulkNjLAGQI709wG4E4oHMF4vwyxLk8MYDqOxCZnykamNpVCRPpqEW%2F4zJw%2BCa7zirp3BkxnyZMi7sSRFyoTuBbLZMCFiAzCzwH9pvxBs5naHq7tP0mAXwsmEfk7wS69qB4TCwDSNLSShU2fefoc82LqQGyk7IYyt7co67i0o65F%2Bh8Y4OacFWmP3Wwm%2F6bnH0vEsCEu2nAw4mz0SXzL99ncWmfwVLuTvnv3co%2BAvRCFH%2BSnsLInDfjULnSFD9mmKH%2FR7WKE9HDtc82FrQJ%2F5CQQcftGBNxZgGXsccj5Sds1O6zgmladnalZJYtjlvMsvFy263E%2BGIvFBkm7YQ0dpBeyQnV2T7Re7%2BjRn3piLDC%2BP0OclWKGGuN%2FJko3kF4pMEasen6k0R6Jhgjo4TsYGw%2BYzqZWWumW7sVuNPN%2FTPK4Je7m2rZzKEuKBBf0kZGAeXLr1NrxME0wa9SGll2jT5%2BW7pznd9sjyI42Nj67MwKAoqLvcMd6Tox%2FSiB7fBAEzY5Dxsi6xKPtqIVihjDm29PDBjqkARDt6bkKq0U9NHpXGyKf4aBnVBIWODDoZ643nzQQOeFQvTc%2Fr2HIJat2Ax8HqmllEXDDerpuqeB9ttm%2FhieiYLJOxnOkQTVrwN%2FKZab9%2B6u7DDsbd5YuAdCMkCudfl%2BXKleMNsMyf7m6H5MYn654yBKTojeVTaqqtMUTEHkO3x1azwYhGxM61REEWF%2BMhll%2FGT2mwfLEc0ldExun1N3hMwR%2F5c7p&X-Amz-Signature=d77fa8d5af61fe175129db3b0da7e979932032945caf4a09886b8f8ca6be9083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
