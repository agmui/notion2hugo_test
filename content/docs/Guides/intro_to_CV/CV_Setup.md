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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M2A4DVB%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICxtAxYgyON6zn%2B0TLGS6%2BgB8Ea%2FthJ0zF4QOPVgRPhFAiBzl2U9MaDxmQh%2BPOo4EF0XkpnvM5Nr8gqHHPBX3gGymSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM%2FQl5W2fjhZWD5RcKKtwDWJqEucWr2gXrmtrut%2FtrRLqFZsDHjcHFm7UtZ86NQtn6PQ8Y04sequs4m%2FJ9qp8GYkFUJWwpRKPF275zi76sE3gVWd5Rej0Zo3QgEzkWBRKdUIgBPYX%2BlV8J%2FlrR8n9nL6hquJOujMomqjhQ%2Fov4T5n7ZACPlmcuL%2BnnFbQft1sUNY0V6rAmyudNpCxxfd%2FOoZC6ZaYspO4W9orD8tp5cQWaJ4EoDt%2FNYSkxRKOS3Vgl7FwN2XZNjLbmhZ6XI5FipHcy3jUmAstss3G%2BH%2FP7Fu0BIBJz1i5usZtxqV4R%2Bg7SxxOEwr%2F%2FoZd%2FDQkFx%2FJvBoJUaHQoJPOLBwcfi3%2FmZ9DkEwDPxMekLr2bcwima7wGwzeE%2BVm7ioWGrwXIfs7JPiFi0kQcT6f%2BMFNmFx8ovXxMc6AmMekbs5kfaXoDvLr%2FjFIqh9BairTohQ0iG%2FJzxmGFAxWGByubvr8%2FbOOSgL%2BnSxRhazjTu%2FCmGKoHLx55rI4a9P1IZ1ZZFlhDKQtkC3Gup80mUpDSOlWxFmDjIe3vZUIsLPwen3QLE45M62%2Bg92Im31PG07Ycu1zqiJRHV66%2FYKDr2SPmKPnHdSl7t%2FiVqgYSBZT9cqp0KUWubkC7A4FPeI%2FeJ8uQ9MAwq8nAwgY6pgHsOd0ZuF2ZiN%2BBXVCOOzOqLwMOncuidw3H8ud41p6mKRcg0b%2FiDo5sRPA10%2F8qXGBUOzkWFHrCJGA43WwGS8pgYXNkEkuDSF%2FNu2greIDdogauGbfHJeWUWtLrSCSVvM3DthQqLE48TJdYH%2BsGra6E0eay3xALvXA8Vuq7KtMgKDqTDHTYOHkopJCIWY7gGSmLpjZRj8n7i980WGdty%2BnPQuR4wTD7&X-Amz-Signature=ee17e0fc0fe6b8239b950c30335d0b313c1c1b2434ba01c85ccf9159216dbd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTN66RVY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDwN6OB%2FWeZTvNiDDzHMEx6mP11WACBdJ4Fd7YiTGI24gIgXGNQq6NCkMNsvCVkc5Txy0x33rkgkGN0WDZE82O8Pokq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDND5fW%2Fx0C%2FcRdbItSrcA5%2BqA%2Be8WQp6epKNjzznXdINDE8kAUGX6SBQ%2FTwHYqPQbsiHUZPyE10NCDkfGLSjw81j03dEONuKRiRfjjkLR8GKUttcgsPLxfVgc%2FmbIZm2mNvHfdxTTfdV0nvNupzKi7B8o3g2Cr%2Bqd13tAwgtcERPkkBsj2cKHuICYG%2B2empX5i2NExugjRGT0VWzekvGinteWJEQepbeX%2BIyKLVSIj5XqME%2Bz4njwNcWBuzsJUR2%2FwMJObsqp6k005lCrKDVDhoEAW%2BVh0aR5uiagS7wtxeFHx6fHNbpztxgfPnLj%2BsFbO4fwK%2BTG%2Brbq%2F3QGoOGnpI4RZbS6P%2F8VEvCAjpcFR%2FtlcCZZMicoRH%2FOKJGP0V7imc33QxFR5wDFLJgSZy0UbKfAANoKqnZ2Iy0VHqTr4dKKoZhEFqT%2FtnqrXwEkBnJOYJjMy5bhyWvKN%2Fuycf34Q1Fx4Wp6oiyg16W53U4AKLcn40jU4LCauYFADIIZTuZafau43Om8xFiT2bbDD7ZCQbVI1tzn%2F8JY2ONjw2d3PgpmSoQWALHkZmJNgWnC8Du%2BQFdW69CCLp7aHM4%2F6EdKA17Cfna8HgyQa7%2B53cOtKoOt7a5MBzQU%2FRKSuWik2RgviRHXbckn%2Bd2mnk2MMXIwMIGOqUBVpZNQNhh6xrGmBg7hT%2BfWVNvlzW2tT9Wpv2HgzH7W%2FoDfc0YXuK%2BLO3lBpY1TC%2F4ybSjmrS0n5Zl9kmzYJldW5lt5h414U%2FKHHlswS3jFxIKjEWl3fCiNwA2CjKZphD%2F9AttCir1dQzKbmahFb7vBk2K8CQN4CHHd%2FVGpDJAnT%2F5MqkCpbwQiDh2CSlg6%2F%2F5MDajcqZQcdJrFPoszcvKbMJm%2Fjvw&X-Amz-Signature=b844f88ece168fae438fa841329f122e835782d74436a84d4d293f991e54f938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
