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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZD7N5B%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIATDGeh8NXGTnQQPqU2t2FU770vOE%2FHWCOGgUl5E0c44AiAQWAsMDoNxop8GbXlkxe5svLyelcpDTYmRADzCe8r7Qyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMv8kLBbb7gCDRAg5SKtwDCRNjbSnLqWAukKh9pZMenmZl21Gu6oLoDHqHLlhuE%2FfhtwB%2BcDd6RYDQMUPhn%2BGhTl%2FR6rsgm0alKAUMQ3MnEbG%2Bk7gMfBtxvWGO2QSybYlFzfwfksymSoAQBOl8zJDSjbZmiBRlXiOgB%2BhAwPoAnjQ8EgaP1H4AhE8oGyM6gHG%2Fkvhl%2FvTWhef9oXeFm53ZwaAXnqY%2FLKOYs6qIbZjAJEEa5IjQLlat9%2B78iRG1S2O57kzjk6W1mSIGqdRbmvjBZ7wYzQSuIMej%2FicWtJL1%2BL5BcpjQ23RgO7Oaa0xMucJbyvma2Z7yC7eMYYyS5Kd2RQyT9sSQZga%2F0DQLcueH8knt1x4XXWwPgbrJPAJm%2BBCt97iwixg%2F6j1g8bw8%2FfK%2BSezCazdptL0pc8n8lKV29PH8XbP39t1yHqmgyyrdGItbdUMMtdPo0wgAqgA0XGocBtUTKFDlCcfeRk0kz3%2BDWbYN5P81F0rXCjbWpkw4UZhMSPxVa18CsUN65bdBmETR2QHiJku2szJKEW7FBplmctvGDpucIV5zY8D0azJ%2FwV927xVio2NDmEmmybLx9J5ikSN7TzlPzMsOI6i%2BqVFn7tlGNqjneuLK%2BK7Fbz3TL5kIlIHjYJQWwpuLZMQwzISZxAY6pgHJRzNz6kyxWXq7r3ziNJc9mjW%2Fbj7VlLLuYZgpTiUHYl7obn44%2Ffr0kFXIzcxwAy1scKLyKEaYbrb1bFQKeDZb17AfJz3rwVVjj5UWGbWZ9%2Bkk49mvHqJb9UeYJpsU1wE1IHfTW1n1%2FPbnKr1%2BaYtUhxecTJrPKJWPF1LN6cFCP%2FjwFWt%2BiFoM6vsEgosRkbcFlYnhbqrGRpn3zqpuEf%2Fj7D3p0ScH&X-Amz-Signature=a5d14513b16e031b881c431ca26d32ab00b93a108a35cef70d631d5e9ecc354c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYV7LPYE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDL36dPvujejIRyWpQnexe43vrhquj9zfSJ%2BcjmG7%2FxygIhAIMr5TVIjSYOrChxYHon44wfN8oEJymfTJNNCzcKvbsbKv8DCHgQABoMNjM3NDIzMTgzODA1IgzneJCDEPC%2FcVsF2TYq3APeolQmfT0BAKYsniRaHwdaBufeMSB9w59c6kP2DOF4h2170B8PjNCe8iqh8C7A5ozrcqaM8yeaE2pqzZimOVd6MpRvH3HXDTyY%2B6qzK%2B6ieLlDyWKhRjPvBSpX%2BebIAh0YzJKTPGG2zlYCgz05BrMDtgej7teW%2BcM2bCtQsmrF4Cg0NEvY7OG0T7L6%2Bdv5zkb0ZRnFdNVOWl2xTSqWvcDt%2FAO3BgFsxVsHplPT%2FZif3QijW0OWLb0VeQPIX6OXYIwExKQ3u6L0goS1W3LEo9gW0jtHyCKWCAdEL977VlPYpdTvRUGsmqBNZ9K9QOzyskBY2w3um0n6EMgPhfn9uEUc08WvSe%2BBo%2FqCg%2FvySsvAk7oV8IdHmg6RoFq119KTikbFaFMa1QbisHWpgmD1W%2FrrBZAcRNBuxO7q2grr49KcjlXkaWEV0unBCUoWyVXFvIZb%2Bc3Q7zhGUN4WAkCrElHZSVCVFqjFgjxzKGA%2FNpS%2FmLOO%2BmQyHkhp0Vffvi%2FD3JXk%2FB%2FHU0wCoLg9FbUfto2fa%2BXVMvqNXWnan%2B%2BJvF1tgoCWuE3FWGYZzUpSVOHGx%2F4sf05zJJoUJid1sAo%2FncNubAJsMUh38PjutWnPPYkEhTicQUzLHYS85e3cczC%2F95jEBjqkAU4tf%2FV6P6MwazyOVeYEP%2BUmVbCqbRwwzNUnNgayCvQSB1zdnNlm1m3allWrpfaFisA1%2FIt0BJVfLO2n4sOOrcVtrHcMGimYEe2btYuyqSCK2D7WGHyHTuVqpPjU%2FT%2BxwIMiTw4gDbemiqtxpj4ivYSGMQzwAUPo13gBm91%2Bkm11ILzXJyoeldv6lmdfz2Gjeym%2Fvw8Xu7GMQ6Ok43NHlHb64o6a&X-Amz-Signature=fdad09061214f61451313e17943f53a297bc1a2a0e15cb757017a5b07d5c7aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
