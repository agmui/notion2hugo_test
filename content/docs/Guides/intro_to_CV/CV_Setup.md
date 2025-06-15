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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UHL7VYB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBGsoP6Scn5pjXWwTKdk7%2FTPBZaOtokk%2BmoRLJF9lBfsAiEAlv3YVD11kCEdjwfntoNn3DmPuCaYeWa2SpkCgTWynmEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGBVlAw5xQDsU0a2kCrcA%2BjoY6Fs61GTlm88GR6%2FlrBsb2W%2F%2FVKqpW7Hzi%2BkrAUypfK1NGhdXwniJ5PpnXObsvrMw4YTImpDOd912Fo2L1iVkg7fJ0bhIlW1JQQ5vUk%2FjyPy5d2W0Hx1Zhq4Na%2BNJV4%2FIhpactb%2FC1AcnwUq1HEiqS7saNa2BMfo6lcy8vrtsGTgoErpKjQDxumIsUSlngsb9ULDHfVsskBwo6CTiaEMi4g4vv4E0jlYBoLWvttdjxMPZZ%2Biza16x4a%2BpSu1qy7kdVzg%2BaVIfRlYAuaB23zHclKgJ2TG7vkyTCCQpMzG5hZByhyP7l%2Fczl13gcWrClt2gWaJHIOCK%2FSJoGwHN0MwndoYf52mhJLW6ts8iIhM5kS4QTf2c0joCRlq38PZwI9o%2FgXf5H%2FzFWqEDACgOeJdXtm4h%2BiO%2BtKhbFMlhTrniyjoIw8i%2B5HE6Kw0LLPxU7XgYWqij3iHZZanH63KDL%2F6UOSxBueTD%2FfpADXDzpNlSgfcQqITcvB6SBCnI1%2BHoukDv69%2BvMr7YDWr8hbtOdPOanFrAmBX%2BPNOfUum%2Frg71OvSVI7WygEJYZIRhJ7Sh4%2BL7IEU6QVoFavh1Uhlbjbv1L5me8Kgp%2FPtJGGby2lctT61%2FG4BY8PsR%2F%2FNMPGsucIGOqUB1gyFaetNrN2Lnc4mjJL3bdP0Kk5wdlxhWzhiLKpaniLYzKX8TK%2B0dC5Lm%2FDfYFT4XzopgmMoCmfkBYazP2CfOosVv1FE%2BhQSa37qgp2xSZ9p%2BZ2BKcI54kUXvhbHyG2byuExmaoLcpRu944DsR22Z8UCEyMv3ZeGOrZWSqSxT4gV92Qxu9OXAL9PPKGk8TVMPdJRfLXp6tkgjQpjI5XU%2BqyOezip&X-Amz-Signature=e2a5a73ace6fe9db6d5b935f9430c072505daf166a64ee35b2992b6edcac2842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQEB6LK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEVvu8gJKUlXJrqLh6DVUTZiB1XTRGWCcJbv3FwWkof7AiEAty1pfvAiTHy60ucd6ph6VxyA%2Bv%2F2LFQIWBgT95bNqeEq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDA8zCNm9CyU%2FnhrXNyrcA%2FUdgFcSexno5FebwWI9CE7%2BRKUVFELuIm%2FcKURXhhwosenz23R%2FT0Zih4qOccqL9HPH%2FMhXXNPwVu5j1uRZuYTUBwznINDDBUNIQpQvVMjinzoo6lt1cqgr0C6sIR4bfsfXbTFjyhsgMhtlHFiKwuJHz3NS2K2aAiUWg6AmGFGhUpMumygZTJ5N23Vr%2Fo4W%2Bft9WVybR6%2FQKpLS9t2MfbKMGMQq5JVm67F7%2BOBSbAi9iWWF%2Fl9ESZpa3IuTgGPVxTvzaLvNVulORmEwddyZQ6wGe5ALGZZstwoYPfbnr1cEKyIr6Gls6qvzmakJ%2FV21kA0xNNM9tArjo89R1wkkPvpEI6WuqzJcZXDg7844Ey5DINEKg%2B%2BLCsfJYz98OeEwAF%2BUFdoZZJ7w3phvTVhVlnwx%2FgEBTdXa1mksR4ajN2509gRUzblmwGvY0dGFcXrA%2FJxX43WKC9EyKhtm3fnSHQh5eUmowNADbg1p%2FH3Ud6Z3pIoMa9nT%2Fy8mMPI8Hyg1nQhiLqA2xESfAVQ%2F%2F4RTVqSrgium6yfGsxeV5zyhjYLPuSUmpFg5FXDjudehPfGwQEyOAOlVMaW9GVzFBvoDpgCeevvPG%2FYtXOUuvE9H6ARpokjvKugRahmfBZroMK6sucIGOqUBMY5EozOZkXwqS%2BhjUA5pFs%2BWtBo3TM5F8pb04VJ1zlt9AaE%2FcxoWk9IToo0MiJTms55TnWqzv9Dn7ypuux42pmkiNoDQ7og3LG0AjlcAYwq4mOrWqhE4K7xMhQbglp1gq4T7TvevByah%2ByR6%2BkWd%2BHrSwIDKlvXUvpgadSv9409iZIfwFc63n8LUqya2S%2BxJJ%2BqwQuzEDaPPg2bkPL5trPd2GXSS&X-Amz-Signature=97c2715bfd204580b6b2c729aa78bec3ed784bdc2fd0f74851403aa583714aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
