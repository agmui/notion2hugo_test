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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7N5AJR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBsiJGxWHpaQ0cmvTq%2Bz%2F04h%2B2Cei7gvlg7tbukiqlz1AiEAwGs8ZaT2tYlN5uOkZytnEpCVKvX2ubjp2lE5jfva29sq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJWGWtZ4AalJAEs1PyrcA%2BUho2aIkgowEwoTLZYnH2JVIZ72ejDR1ISCt197pRuOrpm%2FoHu9xCAzMbKbJqDrGt7QOCqbaO0FeNOBMr901Eibk3w%2B42ICyMRyjtpNqqPBxbP8XyTQDRENvVzCjbSgRJ6n4vRR6IVF9DTmKi0QguwVwnj%2BnxiACINlL7uVj36DkKBBTvf1y99dENvbjHreIvwg3zCezjHNg4pVpB%2FMA9wdRIcQ4yIFJn6YBJrVqB%2BxFGW4lVn4PJMLF%2BtJmd3x2oVw8vgwxjfmZCp2Jy2ANvzGCLKLP7%2B5phuHdkbFL4sZMuTTUuIXWPqq5EvRJMyR2vNQr3xru4LGevtcsB9aN3Z3m%2B2CJgQKvjbstFYBeZtvxwqat%2FvyPvbDnJWTeyR0A9T8tOtbEiNrYGdkoyiJBUcJHR9KqS8sLgayUE76BkiZ8ehY5u5djR8U30lErLWCV03imW3kBoiKZBLTaYXcDLN6J3St0m0JqI3FGEW5WYgOmEtqYcnKT%2BttDNl5x6%2BdWgNSOmpjJe5SOFDyshZ3%2B6Niu0rGxWsilGzeeMge58HJ1CxsIcsgSqc92nQB1Kq5kIYXTMVN5SqMQtr9h9g8SyNdaV0tHffmOMaYW4%2F8l6T9LfM6s34bEcOrAtrDMKm69cQGOqUB66%2BYuHkkmX%2F9TuaI37b2E6gQW4ClLhoorXhasnw41YsquUrcZZS%2BKvbmN9V9UdPaydqXRISLK5gIxvoewqcHSrmtkGqkaarMEpTf5MoQwXfVv08JIHhliozLaFSElA8nidhDgQ0a7Xszx3OKBCiSj%2BvUqwUtpyXbFEUEM6TKooZvZ%2B98APLhzf005k%2FfRNGAd7pGTo6DVCd7Ww%2FI84QY8Q7KuFQP&X-Amz-Signature=b203ef195ec3aabf4d67c80d3092e7945a4547e0005fc2fa94e9b82231099e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNPYI3V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBInsezvPPd%2FOB7%2F4KXNdd3sdNTqGbhptMjUWxpzW%2F6HAiEA4DEe9HuLrxYWEctokK%2BpiQtFaadxDyw%2FgUSSVIyuxngq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKru4f6pT4P31D38XircA4Q5hZ8icRkOFLcE9x1moKqnkAohBrhLiP5s%2BJMGf2v9Vc4A%2F06431GURDlTmTXqfniv0mVUWTQXp4X5i%2FJrxAOggYTFJb2XJOvBO81Sku8HbwTkm4649KhSB3O2hWwxJ1BD%2BULGFseDLIFf68mJnAA7yrqIw2Py6GrxDK4%2F6ZYFVDWt1FwBDC5S0qWIuhDm%2B7WsHVLeh53zXqu0E55lAahp4HIgBHTeuzpHkEspolTCn3dQbSZWhY%2Fvzc8ZdKSs3O3pJoPvT0BsGrKed%2BBM8vfHyqKmAXdWJCa03gCHxrBbjt7%2Fx8espxj9ELTgyau30P5F7p2vQVe483PnQMKIfu6dkINPnKbKRwb3D7a8PV5yRaYhCSq7WxsnhipBP5zlcX4Dlmn0Oy%2F%2BAVBXZHd2A337idBs%2BrgmcRUAZ1ZTHfmRQydcFPuhcKQoTIf32%2BODamXu4FQSDnQMdaqFimX%2FfkeHrw%2B2rO72ZgII8AU3HxL27UB7UaYAgUdcfKp77aNMv2MHGBBXDE8n8s%2BiQ5YDRzywanjENIQ%2FTRAVws0Z2NpubinaKeLCb9yD7QVRkjZDrpSROofdON%2B4aw67OFm1ArRrqxMFtjxG4Peh0unqOv03budcGOdjRU%2BgIaP5MKe69cQGOqUB1BEPtESe3WGnuyXdWBu%2FlV%2BIFtPu94f0qjN83tOD%2Bbn8NRXqe2L4igUVXMcabQ4GIiQRbs4VyPX8rKpaEcJOBf%2Bp%2F%2BPDzRVdpYfZvCDtV0bxHrk88GJln1J0gGDN2kKTqwwGKDvvrWYQYRwyI%2FyUSOwjWIcNYZOaZgjoplpkg2DnwxA8NlcWZJJl0JzeVyYAgpj%2FR0IZHTziP%2BnZGUPlHnvn7VBV&X-Amz-Signature=68d54d6c8484f43ecfd2f4a692cf97eda625d7a52eeeb669983d42aff9dc54c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
