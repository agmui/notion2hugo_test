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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FYUOCL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBO%2B1%2F25RDQ0WpUrAENd0KxVjHDe%2FGvSvPjBjGNstcGPAiAcD%2BlW0o%2Fz9LxZKoSpHd1bHYVs3A0VOLucciTgdTCyeyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMFyOA0ExnmHGrN4xIKtwDCA0ehszKErX4EDXD3ISmOIpxkkmLYqtLKRXAfahn8RD4izoIs%2BpKh85Wxz3XkzOSnydkYj%2FBKsXAdkoLj6r8PVhXel3Ya0eNQKRh%2BvhqyEbYG8%2Fb4Xf3A5BBO8TKZ7BYxLUwbYVpg%2BY1VkAUzNdwSipSDxGLRwiLk%2BjwMFDNdvXxwvamGqdI3RHLFEkuhnvAoKyuah7lyN3%2FS6dV5RAAAObRxipXGGY5U5EsRD8hal9Loy0o%2BVMTzZ33GhMGpLFTgkC0zSWQyCPzJOgQOGmwfZwynBLnzkcFYh0D2Ax%2Bpmbj5ahtD8hoQCodz%2B9%2FbTHLVCTTRd9CZFG90UN0ktmdnPESROTvP61zADpT%2BF%2F4xmhIl0eqnQlqJ1%2FfWCuclpyDDVMNws1QhV1IDetawRA2njUfA5QLvcwd4684znvkQHr961aTfBV1z6ecd7dv9dsCnoGVkEywk%2FOyYBATMWKMBmkV8GpW45KyxBRUGZp%2B1gMMXFQkS2rUXv5ZTmIlKpXVJiCAExPxMWk%2BnMcFb%2F9Tdfc4bynCh1NCmgqDtN5mET8Pm3VDTzIYL1B%2B4ZjHNwNQ2nPnFlu1gN%2Fpy82xY32B8VMlOd4x5GguKxfamfa%2BYfEHczVPAOBQghCyRhUw4%2FqrwAY6pgHkRkrLglSkrdrg9ZgYqyZaYB%2F54O4mG20ZfM6aYLaPEVNNbL266c%2Bx3sBxiB6dwAL6vvtCtyBc%2B2AUmZ6B0JxRbI7NkNgltX4sn6H5t%2Bmpq85USkM211zb7Hn%2FjAVNqSFnuEPZTaZXcdStFLNX%2FjOHPB%2FmalQ%2BhHuiqptOs5RnDE6GM3DWdtPQe7Ln2l8VcGbyQjejc8g7ViN1dhBByS6tg3ulG4Pb&X-Amz-Signature=273d87d560057a44c8032377647a0b2c731528726fe27dfd232a7f58db57936c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOOCHD6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuDQ%2BW%2B27I593aYg3n%2FBvGsgCumsKwBmF7dCMA%2B8LSUAiEA%2FT%2B1lMM5glk4EkURK5iRK88DkT0gugDtTlUGFgIKvvIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFLKuNfa8E04wZXgJircA%2Fdqg94tj2Q1X45icFBc1UEs7cZ1Y%2FRGAOFx6jlchwDNmGhbiVAr2RqdRicGzoGh85iSGittRCPbYT13o2MmyID3eNQGGLkzKVQm8rLmg1qJ8c5uiK8VKTiedXUK%2FRYT26mS4S9HnNg0Dq2Pp%2BgqKO1yWEVqF8lqYR9wJ7io4rJu4aMsW0eyan0kRVxve6kIM5GgcIsWyfCTElzKQWU6CTozxeGoX54fv7HPm34cRMeeICK3iptEKfQGZi5r%2BmVxCA6UlUNPBvGt89poDv7LeXXGxCVWFYrVr5jhi3vheOl5ooi4mSxKQY7IFvXF7bqaoGx9bflhBFTmGtzs7iC0orxbjQV0Hp9gp7tNDeuQTbN7PijEVvixxuQqdk3iLZE9YIu7pNPnX0r0rusIVbe6qL2F6wXnpYY9%2B4AEVAVkBw1Wps6kZWZyyuJVuHRXA%2FTj3g%2FaNC%2BVClqqDm12BdUK8IT0kpocE8PQeqs0%2BwXVT00ty4Alif48G3a2%2FBkkAEiSANkv8yPiASMXA%2Fh%2FtXkGnjWWEhrJf3D4AJTnR9M4R7uzc8rnxiZ51SOrx%2BVnU8WM5YHlgGKTj0qrju8CY%2FnH0iegJPtKsXKI40vgMcnZyoSbhh%2BCRsl04hPERoNwMMeVrMAGOqUBJN8SLpI0Xd1Ds36fLEJevH0cIgUIjZRt%2F4JSanNoTRpVQvmIzRivGo9gVf%2B2%2Bb2YffwCmBgEyTXrD9uR2WIKHyph7CfPENx477evBBlbCDIyCi8hW4YwXLkVytrbh75s0QaBjfuZP3wHhBIbyNtdyCFV4scT6BX6VcYbSHq56%2F2Cto1rLD%2Fb5mWolxXpyxfF982veYCBtdvIMTvkR%2BPkHonWnZGE&X-Amz-Signature=ce980216828cd3f4076617700c15648d9d4f2af46cf866a7c5358bd353c13625&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
