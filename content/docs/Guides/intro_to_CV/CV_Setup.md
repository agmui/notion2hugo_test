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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7A4HNL%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC8WiJk%2FklCRhwo5vEzHrwh6lbu1hQWGHPFU6kS58A3tAiEA8K1Ec8MBhVZM6aE4YalHEjSQB1rk0tpkKE8HYPNPDksq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTiLOqDJjN6G5VeFCrcAzJXP34280HVu%2B7NvwV5IJNxp%2FgdYOWTbyJahcSh5cnjYA6XDWn8EPTLTrgxjkkLCnoU4Ne36xKTfaWG7qCTVmHrroevzZs8onblJqfJfXX7XoyFV0YzvSxbpIX01sQgpOVtZ3484cavXIwPKokioMDL712OpxStt4tdoIoIv5cbc1O%2FHVL5CDkiFOOHz0wYpQUVCncX1nlFlbn5S9Xq%2FFIoetwyRLughD2n8woTsBQu2fS2lHA0vHGMokL8mu8Hzk1bjCv3%2BMxM9qVv66qwpmBVNDVTOJL5PimF8DX9qf8dVgh2GrVk4aK31cFLT7MpuGWTz6mH3yt%2F4qYe1vuWH6TxFTnjFzwW2M8bbJ%2FheCtUSFiNahqFLfuG2HNX%2BKOCYB1xpe4GI0xA3jD%2FMe72PqUllwvESZDncqZoRbMTsmnO570Rg7MzYrNyikNabgGsj5B%2F9c9BtOu%2BdyXeLsqGDwvGOzSi90Sjt03I5tplYvrQQ5ANxpNRwtYW6%2FST%2Bgfj1OcQ3h14Fw05VHbeHdEF%2BRufjDQzFU7pfyJI%2FQ%2FWjjzfRF9QtA4BEVscn%2B%2BrelA58hYGkvkqYaB44FYEX5L8xvUPxWpK%2Bm1dYMmJBWEZAaexxw0a8uqwGcnS2tMXMM6vo8MGOqUBI%2Fd%2FQN07jCl6ZuaR%2Fgfg3gWMm80USEkdxueP1N8M8%2FFmU17MdXUutgxCD20qcZwbopIu62XijJTeXCToz3dADUxS%2FO6lCgtiFm%2FZMMQ5r8IHZJHHgjbFpU%2FbYjEI6yVdWghtIIbWq8uBEB7ljQCsVLVFLjxjbxn%2BIp1R6EXMvo%2BQd0TjB6TZN8lM3cgGxsrO7XkoQnzmJg6PEZL1ucg7acZZSHBd&X-Amz-Signature=23a1a7791b6fc1ae2002be74fae46613b5958f651b30098ec2155d45ee0210a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O2QP4LO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIENg4mtTWvf4s%2FyLGwlbLpAwdhULtgYfuzIkmiSToGhxAiBFy5BYs4mdtgZjGc06J2OUvQeEJofOISMpt3tZ8zO28Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMjWWS9%2BKamofi1TemKtwDWmAMiaLC0g4ABtOxzsvTtlfL6f8vGiH2ogwboVDsLcKCHtjbE2zXDigvm1OOyo6eyri%2FSUUFMzEdT7zME3arxKYPMOshV6Jb6NxP%2B8nHg%2FEPkLnYeTiaU47U5GJCNdzuWbvYJGbiqNMnNyyCXiumkJy8%2BpN0OFHwUaDcsoFPbpbEmecX%2FPesD8V1O%2F%2BCcVVNYecMulpicRH%2FbYb7EmbCw2pprUUOjSlibEgqjT3mqzfAKCov0HVQSYO8L9ZgOpFGHy3T8n550CUPETJD0jROZCz6fiH3Hf1tjLj3s0hd4tIIxhDUxLm7WRCXIIv8ooinYYI4WifuZkE9Hs8EsnXTdAFi4NHjemVY0k%2FfAF5js5l7TTG3fyJNVUEjLF1kZozs%2BWouVI846m%2BiqH%2B1M2EH%2BsABpG5ruHlfNt0JjT9UOBMGnKutoeeGoc7lbiGNUyy5VQcpgFV%2FMMZEC2UQ%2Bcm7zXBfzx0plItn%2FEz6O9qE9bDAtEy%2FL2Cdta5fVrkLszzAxvOWG2IK7nI7qtfptqXrMHF%2BmllauGuMfAPfJEBJIOJsIOCMh%2Bc0qY5t34bmrbQl0jCMLUIpMpnWGrkD8un7SQAVfX9%2F1F28MbIOmi7AuenJVPQeF9tOzSZ0a%2FMw3qijwwY6pgFQSU1pLV2tza%2FlJ5cU%2FQWRjer9ZwsyULB9yVOs5DavZsWB8FNTBRC%2BTBsEYabP2aBpQghfIsr7%2FPFhWBdCFW%2BVnPfXGVLHbhlxOZ6t%2Fw9QVUqYd4M8oXlfyMcjENGV6WvdG%2FHBqwqfTIm%2FjSpZZ12MiYWmKz4gHApiOKUG%2F08TcPPOCPJgxUE%2BY8Jbws7N%2FKsJXXGAQbr6VWuALmuppmj8n2xPAPnG&X-Amz-Signature=f4c43c691799dac685bc296e1eae2409af6eca55e4ed6b1a9f62e1fc63b5a6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
