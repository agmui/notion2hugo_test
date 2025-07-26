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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOEJCSUA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCIodvQuV0Q8nEklHKKRekGw0x98iA7bfIoWI72MCzYtgIhAImJnUIfcW0hGSAgBWabANXREI%2BknNsO3nIZknkFmrkoKv8DCGYQABoMNjM3NDIzMTgzODA1IgzAdg%2FGiJQBbkskDMcq3AOXsTZFKWrt8XfH2Hzbvc%2B6qJv2SXllTa%2Feo8CXzlaZ%2FSJvt%2Fzh1HapBtsu1hXJ7DycY29OtDFspgbuZYZzI%2F73l9FyDXLRU6lWpOyWk9B6%2FmgU7pfcNoZBIFz%2FHWuvSRqsBvYaLEY4P4yKLZ%2BtE1ltL8eW%2BBUePqB%2B9kvuAVwIJhPav%2BxxjyfxJSfkDYIYge3%2BwiSYFKNQuosxuEGiECuINGi%2BQo54ghyokUOUUic5qFzFysDiKqiGR6xP8oYE6k0Oi1r7%2B31ex%2Fnze2XnTQWc4CAlh%2BipbbmZ95qUuCZG4NabDYJjSMlv6wgIpjfMDxIIDDY%2FAkxbMCxRpabxzrNE%2Ftaenk5FvkIUnHkVTcF%2FmgxreshR0b2uTz62sDA7Y7i266qTZeOGJobPhj0k5QHgJtg86BoMbXDtrR2ORQQ4GjUfTr1vQCb4N9mz9Ap8mOnB%2BsqGZKhu4wW4ZGPlM8FYmM%2F2TpekPKE%2BEvF2b6JKMj79LWtXHv7UAL6eKZKLKFvn4phhovlSCvPat0GhwCkKyrgNzCZndGoHAWRTtAMbN%2Bs32FQU%2Bd5NE8LRxTua08rdl0LS%2BWr4mcKrmId%2BdhVGUbubwx1F4xBMoIvk%2BH2ePrq6eZ2lno%2FC9zmeUTD9%2FpTEBjqkAViFJrXG7XatVi%2BFdhT7FLgn8xbD6%2BuUAHhS9OCYoDSTfcLOpa744WnjoXkI%2BTvzmYUYvdtH7az7Vbyxk%2FiRJ8KGQ8eBXbYMjH3xx6lgP9thgggXf5fZj8MHhhrYRSTwgtGWubjk1i0pxwAs3GV%2BRJ5fEuQO6ajMYbxyeMibwdwdsCpkKVMCZUMIJNX9IE1sY0P0KtPAaO%2Bcnha3AXYg2XQP0R2Z&X-Amz-Signature=138d8d53137087cc9a69b14459f925e6771be0ca9d725ac12b4bf2478d259e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNWYFKUR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHmrZMzL8EoL%2BdSMHBJp1pZxUHmC3sNOXnAs5Br7qOHaAiEA1S1R7dPjRGo0ZOXYAg5zcircfvsMyhijws2pyvvJai8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPZqpxHe6zDFfbcB7CrcA7x2M48zR3YKKPlqshHMSOamEC6qE2PVdhSvICPZMB5mdE%2BzDXhGdG7p64V3BvtQofdTsanbA3bHXEVHTYnh7ktQLwEer59i50yRAsR4nPvTTLMRl5z8aC6SFxh2c6hH7JefIayqQUzHS70yqaH4TqN3bPPhBE6RP3SikgtSZsh%2FJbvBSrQbw%2Bk9yYebkGmMAIdoQk%2BwRy%2BtfWti9dY5Vvf0MaQt7M4CdgsBFAKu5c7pzZDwHmfS49opQWeYhX4H0ZWrlPc7m%2FCkNAgJqPrywJEzqE0OtMwiylJRDT1RTRHCho3AlLrVyNcQ8%2FZHscIHvOwsir7xOTf0ghug22eX7Cm5zIZtbQ68xomrgD%2FxWlkXH89ZGzO7wK5tQlP1NuvmAu4uyX45XktH4RcmEaiqFg1MZyvQ8Ptw5c5uhDp7FS8Xb5D6YkBAH7ph7Xw8Z2%2B0CDKfBocz36CyN3Mk%2BaeflfansD8YdF2dtXZlaKqS93Lnx5MlgOHM%2B3ZRw5aNGMBVFzDzSGhnzS5m5QQSPurh6qy0iHz%2BNjciwtS%2BYmVZblfP4Guj%2FvXbM%2Boq2moUecMXenXdZInmphXVM9KeoR9XS448q0aQMTG0dgRd%2FvneLiNu8q5N8rw8O49qRAPyMK%2F%2FlMQGOqUB7GOXHB3WJ%2B1QaQxDcYLsb3SkmYT9gJAOTHuUvz0GBdLE%2FvaN7CRpaG9vThIGC26wq7AjRs%2FqIPDUcSKYtIaDdhwpATujEpfVZG2p67eX5cuDtnwDG%2BT1Y0AxuH%2BWjAd7o8xkConz6I0zqnYY8v3cLW98XBSc6Hufl21woZA8q9qfLHX9euGXHXdiytRbjYMUo2VkXxTVZ9iEKzcd3gNe5ZTJKqSN&X-Amz-Signature=6a9c5ff5c1f7a3c0c5b30a3d0657624b901d86ed9bdc58b1534dcaccf6c105d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
