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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNO6D26V%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWk4kSTipAXj8OLRH05xzCNyZNnfqZUFZ%2FQ9k%2Flc%2BdwAiA8eDd9X7NnapUz87HZyDG8vjkhli9kr5qWgHHeAuaqrir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMt%2FGuWu%2BCBmmzZ3k8KtwDlsY%2BGGv72wNz%2FRqWpeLQKUb2TiXwRIgdIicImGiherq3mIuRkgvDRBrxaRxBAx9ai1HQZKdtSn10x9lzkinZWVtD6hw45sIUiBCfdzImycipn6hW365tv6ANJo23IEt2pexrbLJ9KGU7w4yOJO7Ck4jJ%2F9jjZUO5XOEXK63G9kMqptUfZuC94%2F%2FTjtLtMBseZ6tSb1QPQ7REMtd8DtPFbyM2XC8965EQsMxlEPgGYuY8r80ZrwGhNtLfhfx7XCNv%2Bzeu5fckGMSXPsSzRWvn03o9sMjrkPcpJmhkNm1%2B6zvq%2BWqNocYOI4mPOnmydCmbyakxnS7MxEDncIAHXBfjtouOS8YERJWBAy0rysrfD877w3BuoiYoB7Ysti%2F0hgtQjZjSQmvsUvKya2je3Hzsryrrgo1CRMVfoIv7AvSdFiOuQx3YWt%2FHBs%2BcSLR4X9oJKPCq6oAtddM1PpGvDshAcr%2B0GYgDs77YQ2bmcLcGP10mH42zN8VSNXae9A4tZaJCXuJzNnQbTx2sTVM5wgObpi2FxJS2loY91xbjzwsxSfOLFdntiOMoCm5saEt3jp8tYt3l%2F7nz5euSVi6guk5UlBBq5poIdccCUgQYltqpDrlnRT7YCg1bQ95Nkmcw3NjavgY6pgGNnji7GFRhcf8jYIIq0xt6MJYdZDb0ARQ8fKqmqtFpLgqfp%2BBhui%2BYC9JjEhCKFDLY1ynI6yY2Uz2H6ZOvuhyyj%2Bw%2FbI4ovmkO0%2F6wYmbIZv8A6DVobnAGfxwjGJSH%2B4nJndCr0J8ko3PgIRhFjePjSAqSAuvJAMP4BHYUopRQLKMYh3T3MsApmHKsj9l%2F%2BwntzrDkabfWIaDYHYhP2bbSM2a%2BuKvh&X-Amz-Signature=d524e3fa978db673f29121cbb1e81b8b9283f90359d03a3b47e26c06a6f5afa6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N4CUE2Y%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6oWx9bwQXenpXPBw0Q406hwpKtaK0Skw5mtimvsvDvAiBEB4AQvuJSFOxlTQ6euf7joFm2Jm6t7Be%2FhAtMX4dKOCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM07d8at4Dnksn7zT6KtwDyAu1ZtwLiyf23Njd7lqaOcFV505%2BzD3tTFtdWqN4VvPqah1XZ27ZVAv6PecfE028BAOak4eOV7pRUKtqhzJCZhfFFL5NAuPiQTm22ZU00TRgRRzmbVg23snFtcoYUpH0dMjQ%2F7BaKxKrrmCir886Fmgzf4fBHvxqMiNFpUGhHqJvxq2roaCG1YKC44aw7%2F1O70ctRt69Ha7BKUEErgyTxOsx87dqelJC3xzTxldQgGo8LvNVFAPu%2FykaPGHXWtY7pbticbBMBhbVFgWis028IATuVEeh01B%2B%2FCqqKL4URfNYC49alHKTACHqh%2Bl9fxg0bXMnFF%2B7KSFx0I6mgT1Fn2Z%2BfoTjd4lzAxZ7Bm%2FDg3ZrDWqjOeSUv3XdbsU0BNLk%2BkGi%2FgzOOTqJIYnxgBX%2B8r6vLZ4EDSbmOTku6KdDzXvGYIUQz84MQewz3T39RdPTNpfY4C5EUZEVB%2F6V6QfDHCtsSuXNdXBn22nZ7DGDlwWShU6r%2FgkG3%2B0L1AIw1lSoewygfD7rd1O2Th99CogOE9u4FLIFsL7tCTw1YrTnXH2jyZx1Gxuo37fbPoBkCuMmIAWm%2FulN5zpmhjz4Ymlmh3xiQ7%2BsfC%2FMz80hgn%2BQvj%2BKo7Ozf9xHMo%2BbQtcw2tjavgY6pgE6Jwvlq8GLDQM5MtPgqvrjGvniepSqSp7MCab8OHCWNMqzZZLRWSqSHwWW19paL68HdSWXbsN7wi7oFNM4dXIvvVelXdeN8izGIev6wlqW0lv4SlvfYkMmiqof%2BtDBrCuERJIYuoa1MptyWpeU9rbwW%2BxskTxcQx6xndMAMlu5xmACCVM4XeAy9a%2BTt7LWoln5v%2BAI37iiqvNWAOtAmeNnnjkruHKe&X-Amz-Signature=415479ece190a78529628e67701dec67fe96f4805d40a64358a3964e8c380b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
