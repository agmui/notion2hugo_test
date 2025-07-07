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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WCLCPC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICNiqbSHYhXmYpV8I7RLytEsgRuKRCzn%2FjUTia3OSPFVAiEAzjOKlToe1xUwlyyT%2F4%2FJmo0XIdALXb8zcy5lzoWXj58q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBWsHMoSYcvYltly6yrcAxYa1IEXHH78qizkwlb04FD20F6zRBJTatVSSLK26QSFFBszlLoGCaJyxrdviFAvHEm8SU32CJFK7ZBdexJThXQ97cN5XGDRa0ZNliGwVmcauXhHSDwfzg2F7Yp73IahCz%2FmkPrRLonOvrSDIcbFzkvuKT4tx2h7qFJa%2B%2B95T%2BQ0zTSDYIPys9fNpYhSGNwoTGUI5M0zX%2FQjSZY1ARqdkTxbh%2FcbWpuaSLDBeLwsDSGdKBDAxyyjIiR6BnQg3aRcFKLJD9t776QKeK1vobIRm4Z63OhBOGHULQcbsOzVdbTJeNPRUdiMTMAOvZzWdP5q8M%2FMOEw8lvwT7nj0ewUCws1az%2BByRGWMtfq0c7NicaJ3mhmZH53B7tVxLUc61vt3HQIMeeWnKRyBJmN6pJjuF3XKuCjIQxTmi6CPITX93kvh7y2EoMinc1lEjAXs4W5GXZsF5wWZV1IDSyYfAjaMZoQ53Cgey96xQoKyBzVLPMRP%2BUDa3jH2HhHtudJ2J8H0%2B%2BjrMblhdeMfg5fKPnc0zuYlWi5A53Ut7YUB5IQmJSwYvQlKd03f7XJzXvPknwBHCT0jggGC7w76G8f1%2B%2B6xtO7mkwracg4pzzsxOV9kjWivaHcBVv%2BT9qnMMcnqMLa5r8MGOqUB4qSVZ5CKxqGsXi2h%2F8nM%2BsUbcyjaL1%2FuapXiKFSxGNJk%2F%2BSilbtjjC1UeH1uEgphnoo7dLaYDq8swxzAxge9ZYNI%2BzWFMxkPoGdj2F3TYTNu0DbTN6y4FZWSN6ViZqlDucqmwafebWtpsv1PTA%2Ft0FtRuTylyK9Gu83d8Qo5rcTGtNlj54vbJ958uvz%2FI4%2FBNqY08Av4B%2Bliitp15%2BbA%2F1gfxpBc&X-Amz-Signature=a896c57add214d2f33f71819f5621e8caedbdbcb17c27545e0dc6eb9dc19d9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYPERZUS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQtinGhTMyseukULiUg5Jjw%2FbLMHHfRV8n1h3xh%2FT62AIga8sVxPKqOlCLvTsdljRXCurp5FlD%2BkK4DGLyfq%2FIch4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIC8gMz6KqBj96miCircA%2FUOKB%2BMJfrsOJuSXaFNUb7UjRgmvXTJUrKV2ZcPYFRpp7n%2B%2BYp%2F%2F5YMBmTK4r%2BzVnmWXc3w9ZOArGLA58B4r6Yall1jTd9MGSC7Nlt78MD2RSNGE60L11ePyeUFYoThwjz1ak%2Fy%2BTLwsk%2BAYBxtsCCTUUXPzJ%2BOcj4ycSjK1KrWQX%2BRCsZ6cpy4tAGTdrCxvZjOTE3FG6uhJ2un4h6F5cmN0jsMvt359mnlOu6EnRu9FpkAkdTaFyBA8MAyqDVvqq8a4%2BwnajXrz7LuVW5Mc0oWBPyfSf2dh9BVcwyKsNfpGzNMKd58y25LxjqvpgcmeQDLoTLPFzCvlmpmp2kCXqv%2BRyn%2Br%2Fvd6gUJGMChafu3PzQeaxjTFAX%2FmXaVbiXH9BzkuMtJnamdP2ypMXP8yjqttK2uryrLzmwTmUacAcVcOXr3xWxKdxYebCM9JGDJHbh%2Bu4g8qdJ5RYcp8VEv63Mow6YnGzldvYnWl8baa597e57%2BTsoCZnpdjx66tQGpkWVN40e8Sv0w3uTbN0PpMS5PQr95AbnlXMUSJVb96eUclt9t50vDFDQLCNtre5tR%2BU2Pq8qOaAvzZAxZ%2BpV67QJqYWmPW1NPd%2FhGPwPahdQoa8%2B9llgy3og28NieMLi4r8MGOqUB2cz4EboK9j2QKkc3A%2Fn0dkbi%2FVSPyyj%2Babj1Wz6v6Rpp%2FOVN9TgTdCppP%2ByNmAsGaWS2WT1dP2Cl1%2BR14Fcx6%2BzTKsJSdyZM0E%2Foj8%2FvqPN1aJ2QwCt9cacMR2OaZ33%2BfQioua3QrG8KIH5FNbD94cdjse0UexQYueGiZNzoUeOiKGLrfTM9%2FLgJWKKhX4gxCZf%2FtYCkxDJc8G69wbPs58Iqat69&X-Amz-Signature=9f20f8d3734381a95fd18ef7f67c7d6b2e9cca13a17fa0c6786cd401ab76bec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
