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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3ZZAOY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGc0PaQ509ia%2Bu1WctmWCr1OzRYlwRfkJ%2FmwuKqd5K9qAiEA3GcXY8W9Vk29kNIixNSJcvM804dvBfyM0bpigCxR7oEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDRtz9OSv9%2Bln9DX4yrcA2jHRnDCIS7VKAYs3BZ3cdiT03sfJlLwH7G5urvFX6UKwFNMpboIwXQZ%2BYn%2F9p6fac%2FBkg4TVRBFEYBG0LbKI2myYm87LxewRFNIfR62YlCpIpofE0OgcsTExWYsYEMcS8vuqTzeDgCyoxvu%2B6HvUKCcjoHFmq6%2Fc%2BxjOUUHqjS7lEcXb0bUHi%2Fd58Hmoqm7TikOsIL9lPC2zxHCQzheSg%2FBst%2FZmtOdu%2BDnyfXyfyz%2Bde3H7GWF76XVvJU7MkhjUc9ILRDpoIErc7QYQVJ7GY%2B2PXMcJBJKJwxgBop2tTGqd9BK%2BB78%2BjvzfAeDh%2B7JSwclZs44RNwWL4tIavGmZflovCFaK7VoIUecmdwDi0lKyxKlTJfhJHcSuTMJ8K%2BwTDR0HnVGQ5O6VP9UEbIxZrw3C4TKGR9TpEUPXPR9C0s5FWAHFOk1AR94pzRsr42CYYW%2BsdDethDnUcCeFsfKzb518BFhMRVbsVJHVfqsxTLPDyUNkUhuQ%2B5FQ7VmayK2IzFoxN6EpFp6YTukSWvNDOci6TKOx8nYw%2FGAD3WY6cGEz4%2BQ8K%2BsyUq0fwtQNoaEk2a4uAALjlvAVyWCKszl%2BZbqbHhIMeFrRVxGw%2FdDJXpODKAwwxfRfKwSxj%2BEMKvqu70GOqUBq7x3dmWH1gwM%2B4j4X0zkMNf%2FXYKy9exeRtcsSSLUIKNvOtSSJZnmNx1SZ0CYzdNky1xwyO9WVW%2FHPCDfx9AnDqInAHK1zaxbQRMFaZ9VdPxFQKbfkt09gY5mqHjASbvMqM%2BqmZWvqYSf%2BP%2BKKv3QB6mtDHIWo%2FHA7skiY5D5WN2mPLi08MWbyFwfnp7JTC2ilMVnQZs5gtupNxBEp4VLJtJiNgjD&X-Amz-Signature=bd35930841a683967eee75110ae423716f77f5d08df333c50758ebf736d4e870&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NTDW52R%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCkPrwihkkVBXqmNEJ8d54avtn7ivCHqCtoV%2F%2FJl%2FujNAIhAIUTlww36nTz76n01bsFMODT2DrlqenITb%2FMEW3XrOz9Kv8DCCkQABoMNjM3NDIzMTgzODA1Igz7aGcFDvVyuG3rOLQq3ANFYnKIFW2tRVrTJtt2SmdkMg%2BgbrnDSH2dnHXnsMSKP9OCvcOwl8fWNpkAwvZE86UOZvOlaPBke54CmRHNJfmlAYIrgiXzHVjmHT0nCHypgiRdAmmL%2FfSZ6naB6YOoOMp8AQSsVHoLhZsmdZmnuZN9VnztWx1yMvQ58%2FCbFYEtfCUrdTChBVqzYzShK9lQ0ZZUkrvl3mvSUYvN9AN%2Bo86qpavphRwlCV63J2ue0bTAa8Ubgxw6QTzra%2BXvSlXn5dAyZuOdrcuq8opddfPzomBtp3GvPxnAXg70QXP0NerOVDPKaoAx8qpPbZSDoUkMyeJMQtZhbnqu5n%2BIsI5DvHU2UnqvZVMLB9LiVm9vJzTRT7rzvSrp3tiNQ%2BByYQrqzaOoVH%2Bx2nn7CtXZ%2Bq8n0x5WjTDOn%2FgcJUj%2FV6gVwMsZSVeTixYHWjz481gm6tCaGP9xgBCn3FHnPNC%2BxpdESaRVAzM%2BHZ71BCz8yR0o7sL997lT7z8%2F32ZCB7smdtU6VLYD3RIntR078WKxCVrfrRDwMZsqOnYaWcCrcn3MgKYyaEOsBlfNxO%2Fiiq80RQmfwrVLWr2CyBnWMeFqSQvHfXaNO9bIzGn%2Fik1A2Y59She4DIjeZbbsuDkTrfwZizDF6bu9BjqkAQeWioMXKpabpCmzQ%2FoSHzbQLjs3X2iiVBxzwhgxVIL8RDllR00GsOMilDtdfn2emjsO9UE1ZHAEv9ioszOYclCPsJhuGvEkWjiJztFT8EZ2qoD9VovT2VdR3x4TrFhp2X76Uazkye7ZYpdAIItTnMOtdOP0DRuLvBXF5Jb4NQqHWImuzzUo5rQYi%2FKmKKs22qh%2FdnEBPeU0L8Mow0HpN3MpzszQ&X-Amz-Signature=eee872950850d882ac32915588e252270551836e2a73740af1ebb28660218b49&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
