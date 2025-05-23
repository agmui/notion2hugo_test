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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WGOQOES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDzrEuQg8YpzLdPDhsbfDio1j2CFUqKvCNvz0Rguv2nVgIgHoAd%2B%2BZuILiYezfZBjkGvWIB22v0ZJgzm%2BpHPujramsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmZq0jepM32%2FA%2BG7yrcA7jcFuhkD00hXfH7z7qBPHXn9A5oVYmfm3kp3ar%2Fr05X%2Bd%2BAoGik%2F9%2Baqa0jvf3eycDF1GylKcNkr%2FbMcWp5oTkQOnMUmWQd5ghPHwtKK2yE%2BM1HrwXvoxd%2Fnizg8Z9Iesx0zaDavB1QaK6J6WFfhPAPqCrd25ii%2FHgefD4EguU0x191KL9ACOLREwqS7yIqsoPEm913DBa9vmNm73rTMbISCPOcJUlbIfvZlSgvWvGLa67fQkqWb3Oa0Izo9I7dxz%2F0JxskUjTt4pPOswl%2FNoCseeWSu0Qk4dW7QoDYBf0N0YNL%2BbUaI9dcmNNYMWVP%2FSoAgsfbeR3XBFF1qeu5KZu3SvCsPrzSd3gX%2BjSCxCFQlce2lWnxWtXARtYHwe1jN1t%2Fi0YECjZbzOWiMgprcC0G1uqsrLTGGXa3kyjRmWlwX%2BtAprsuAaeOnwJaULyu7RGC864rZ23THRyRoEuAN0fiwb0dc%2Fw97b3eNWHWBXeXOy4A6uaMTHye64W2Kr8FvpovXaR%2BVykBqgU1fqsU6%2FwGrZraEJHByyHXDxtpaMiSFKgx8znrDRS9HurWxSWZ%2BaQ%2FbDVteFT5sOe6G39KUBt6HpuLyE6bH9KUJwo4hJAD%2FoXIodJhPd%2BrlCrLMNT%2BwsEGOqUBUXOp7bV%2F5FqrwMrQspVM2f%2FxpefvNOaEq64%2FLkr70nsEtHDdXvjSzgyuCW3R%2B%2Fy8Lb7DNrahcMafC9c0BRLWyw8aPVkp2BdZHVBmhUsvRcMpmkXLW%2BZr0gFRwNG32mkGx1HK%2FmRWn2ZYWg%2BlfDJO9NYOCvBleFP7sDAeWPAfFXwdWh1985IxKYxP5ubGS2pEMSLfxcJTn2Yq5Adz568fl8bkGWZo&X-Amz-Signature=c9f8401742893365c9b754a1e1272358a07f1066a91bbfd601a2765ccd96d605&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRUJWRD%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIA86IWjnPM7J4tf6aVhKG4t7iRcwB8yWuPjqjRLE2vtKAiA2NR38O8rV7naVUAzJCjGtxodQHpRoboTlTJ%2F0iZK5LCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8iNopFB%2BCrMuB54KtwDHklv60bfjzLuGsE%2BgR2exf0AC%2FToXts3uDmxKptx%2FGny65EDnyPrlX7AlN%2BsD36wfFq%2FEqVxDIcH9NEEPPAWnSUAwZczu4YcdJ6bZbGx9Jq7gYak5h9xtJmeWiv6bS6a19SFFHm61cVwu8TVslkDhQT1myolA3gWl%2Fck4xadj1wNF8LkohiAybBAcgXYYlczNwUEgemHGYBobGmYVLllw7fH%2BGURwaTuifvOxyHICoQHLQnkOp3U8mUBc2dVT3a%2FOGIVqC1i2r59tewI2pj4dGHoOzlPRuQBJWqYYwQ7VmWpdS9AAeeJl9pVnp6HxbFg9ETM%2BIs4%2B3h6z1DFg%2BERneSrOMDWZKXNa7O3aBPIwAArULujDbjhcYkP8QjOiXUi4hsfLAXIqyZzyuGJah24EVMJEI2Qwp2xbRfsquQ%2BPX93axYRAmuvo3j%2BIchIymXE4v%2Fkt6eOWIAieYVZSIP2UbDcMwCzsKglyyzgxkUgL2e8f%2FjzuGNmBWS8s0vIfNiwZjDPpTSY1Ihye5nSD3cBZl%2Fjeqo%2By2ZSjoVSqbY8UoOKu3b7lSot61ohzVn0DXobBpakrOJ5bofsyjnZ5UHqJjfanrml%2FyG23Oy8klSNGtCHgVLSBUqSaPaGAT8wtv7CwQY6pgGYFqUViWjGZdyYjctqh81KCeLR9JDCQVaNEj5yzRIQEkRgp78I7AvYKgghnPPcWKBxpUV24X5UlWfiF0EMFWd9ybuk%2FAi9np5dZPzd5SZmoMCm1%2FunhaaiAr5AZk4Qlg%2FSc7Ve0WEVbfaN%2FrEqmndcKaYkWng54qmbzA6P%2BWvhTxK4sfXtJ6xz3j1JfvXNnjg8oIcgkGRZ4SLnKHHE1qJwRuPmSR7i&X-Amz-Signature=b4cee902c95cda0e01bab3f77e3e35913416c7ee1b4d7a54247ffc991953064d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
