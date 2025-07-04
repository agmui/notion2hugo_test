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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2TKSWV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCTqYaxTViK%2BuZHMpxo6kEKyqaAgTD65hGUHAcZL3E0lwIhAJ1Yt9XbQU5JveDRr4616%2Fgo8qGMKrTS7jZXSINhY%2FULKv8DCDEQABoMNjM3NDIzMTgzODA1Igxsxfkf88Z%2FzltrWpEq3ANNSr%2Fi9tVo9Vnx141gjpYO8ExDVig0cSbp4STQRz0JbNDSPIfnGnnlvCoaEIyLfBe7g0hliW%2F4WHlvBQP%2BktEru%2BwQhYccS%2FeYWP7pc%2F62d7CUYN0EB0ELszQbnIaA7SIgmi1H56aRCTJL1XBPX1ku84U3UhUxd%2FX8eGUOwdfCqMpiZr4czlJcwo9jQXxUNLW%2BvuJ6feGg1nlir9ut8LzahNMpu928ZTkFRdSk207rPy8yudlKwqaZGyavkPNUTaknOjSKAWCrCsdHzSbfpJXw0Rgja4ps0x9YBViG5YyaQaxeSDMsh5PTDpfjRVV6f%2Fr5EfD%2BYepJVc86tCNnH%2BvRQQ%2FHozXrG7jzJvSN1xZnu%2Fze01MpQv168Ez2Ra%2B6x%2FDOLnQFadvVVz%2FNNbyIEYSrlCVcAhGOhH189K%2F6RbUCGFlPBRkJVPJdpSfwuH3p66AE%2B%2FWIicDhj%2B87k86aQBXIWWledUdYOh%2FcKwGc2%2BpNNfPqsebEDQV1Ln3ycKHb9PHDx2%2FRyIcFwJW4xqyQOWu5RsYKsbjdx%2FfsT39aQTV%2BJg0284A1eyNLBXCRCOjH%2FW0GUTG3aEyTQj2yjStXHJ4%2FtnZfoErnjkpgk6PHUkwoaOkWFQfuy1w%2FTVBlhjCR7Z%2FDBjqkAWgyMhvQqPSq3wMDw8fEa4iuHSb0IiX14lva2RAA3Q51FL9FngQm7q5bfpxAr9p71LSTkfbw5X4Fx0TdvVmjzWYgmGK03XOBoiYrF32k5Hkn4vPzAcCTwWNt21rhbtlXHKX33Q4NKk82pmB7SoIBuodnd1Xuh9G48qLWfmEk9IvWEbU%2Be05Zc9%2BZJfPkMCLmz%2B8yfAwPuXOZyWeblVLcrI3t2NXN&X-Amz-Signature=8f338e3403f3a8ef73e4345aceaa3cb58e2c9109c5b93947a1842dcbec9b7e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGDQIXHC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQC93dgxpmL2fgs52pPJc3HHJ7RmVdEJUmgqolBYjoWixgIgNs2rDu2T9%2BD30K%2BrLzikEStTjfta%2BT4AElBni%2BgwhlMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIm%2FFhG5ti3d6Fg1vCrcA9JUU55aqQluwLMTurx6FAmSFGJcEFQbOaSgeMNu5uxWCWyzmn7HIkkqRzCBqzTSb0CeOHrmKvdvT7%2FrkQOElcX5zeDZQm3AGkukR2Wgc5K2F%2F%2BmA%2FGGSTG0NbkmO1qqtYr5rYBdvJ%2FUQvnXCKEoMPJSU28SiI9zgg2XGq7VLUHUq9J87pKICfHgOC3mdz9JXTQ47jcstQhRBNoGKNlxxWmgIGWUU11u0nW3NvVFtH8PTKPm%2Ff0UCyn6IQIdrrhAn120zzr%2FuTwwzsfN4Jb3LfqjywJTG4o6dpunqWl9Aa1trBP9Nnk3k%2BJysC9jwFt68UdLUQYl0dZqkLn0z11jN%2FtJ0fdm%2Ff8UbMHld2HvXzlWi8lrPXNBe9KWA1AIBRQtR4vtIjT%2F1HItAMqCa8ZnuZRH2zf9GLzaTMfLnYWx%2Bd4KSHjC6YJx7aZQyQrnsslbgGfJNbnyUi9tu1k58moeLVv75IiY1jzCs7rm1sYmM7M4dS9zKnI8pzNqWNYfzY6eeNzs0Snw%2BVbKoEOrejAf8wgtcy84m%2FwfkJUHRrmLOP%2BgBngBLtjnuYtvkJbzqA%2FS4g3esvNlKBckRLa0kRq7xWPA8u1U2oNDY30JUROIFLn6BobVt5XEm5TgRY5OMLDsn8MGOqUByIiSR37SOugVKVaKwy%2Fj04Ufhd%2FCFPG3E1iwEbsoa%2FHVwj9jhhisFolM%2BhKCV8n4dA5Wu92Csy3mm8QnA5SbzJ9U8hTJET9pdq%2BkeoNzCu47zEQo%2FYhpBmW%2FPlJGYY68PCPEg5EZjbUm3FlILwdMM1yK6K8OswpLygZ33Oa6psTsQjdObxB1sSHRpCrf2pLDUiT%2FzfljaECM2%2BJzdwt%2BLTuH6iJy&X-Amz-Signature=f31f3a7975f65928fa23134f97cbf894f8f4a6925cf0e278b519b7b22e0b3b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
