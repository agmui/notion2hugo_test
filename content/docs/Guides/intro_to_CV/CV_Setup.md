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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZWBCUX6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDZbiGnjxHtMcq%2BeP1r4zInJuPU3pUJae%2FNskUusn5MowIgVaamdw3NkXLsvmMq6W%2FiSq2O81WkUZ3EFqGhNAx7rJAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJRgdMYaVzDzTqFdYircA0OoCvqa6aTzKeT2b%2FIXCmxryKlPzzryZiV5y6K8eYBkOH7Cin%2BDD1X5FhOboz2mTbKuq3qO%2FTtjG1XcMMeZWGXxJ2jm6sGR60qqoBNKfwrshmCeL7XcZUG4nMVu4eSjYYOPoC0R%2B2Fun510%2BJTO3OxlLOaZb9roMqWrOgEoJVTJ3QDApo5r%2B54rfq5FQ4RCaidDkmSLd6RHwHLl7PJI8WcGa3ez1AtRJIXNb64LYwQx5KuHXW8teZrODuYA%2Fgg5WbVwZ8oxqHChV98rMiKJ0%2Fh2wJlXY6HT3gunTMPBfctMs3%2B96OZy%2FP0nm%2FmXnTsRiEJG7cPsH7CcrU%2FP7UoJmyuSFdvh%2Be9SI8VF4%2BwUgF29Xc6m96I9i1iSncfd0Qd5izNn%2B7PxUR0prSUUgTz90liLi%2BL3QYktPaaO%2BjsY1IbytLvuF6ji882TTdWJz%2B9kTB76hL2oIWpzQAs7wJqju9450GU%2B9VW8rxkI3%2BfcvdIA4TOCv6N3PRr7K0RxdhaBa9tbUaWmoKhYj6R3aafjVIy5atH8%2BlZSdfvXJNMMNnSjS%2FegQeN%2BxakkgYjwfdl3Mn%2BmnBOGUaTZH1u7REbgKs4FqccBhwzENh3HrFzf7NRilPKOHCzH3GnoZjJSMM3lhMIGOqUBFufnbKfmye9BwknSfr%2FKmnSFh1Z48bXSLDMTw6LtV98uG%2FlqycQZEDLfAuBHilp53AR%2BmfpVIDiUTUjHKFQO%2B1JsQ5eMZsDGa7QhWbe2Lo%2FaPpuFLs4krCGLB98YK5jcoXc1Ges6CCF2%2F7aY402kWwNsYj7biVtlN%2Bm2ujH5dKq%2FOW9DgItynCV5NZbu3I4U70mr0Q%2FC8IkhV84CCBI2MIxl5gAZ&X-Amz-Signature=f9fc515c31fc5254b80fc80d49556e0cc7f9b68e9b3d8a2df62cc83bd203f805&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHBVGFJY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCm%2BcW7kJSb7c9%2B1CMSK7Al%2BLsd865l8aujcP30R8fPUgIgHak%2FxY%2B52H8LqzCgoWq%2B%2FTEQcKW7wpNPEQQ0XhBK08oq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDB0p%2B4wFJ5rXHnfU8yrcA2Cz4cZSmY4MMvQ8OOEdP%2FBQZkrDVSTAeueXNWxn0HtA7A09cF0ZX3dICeSKxJltyMY52DGjRJgE5hfW76aZBBj5AEznpQfleLwvYHEpL5V4FsO%2BaORXK3Y6teDn1FbYf9t63FDxFDuRSiixWfC%2FdeLOAG5zv7YNojhp7CgkkPq5sT8XCNPrasnk%2BQAtqpQpejPP5t3HBDq8uGGKO%2BupXzz5ZzDyfCtbvzHYzD63fcgRKa08SRVHlWCxt5xC8oKHHlVBz1xkdijCcuwZ4CfJXN2srLJV1u8NybXvAYDMleA1tk0GPipIXU88azDTXBF2v%2FwOrTPucrdOBYHWC9AN8K%2BQ%2BhYw6h16IMXDpkPcw%2BCFYOtCX4FQftBqsDL9%2FvuPbdhQbprx0yJS0RD%2BgCiiKQIm1ZuFgdsPwHrtfCB2IZWk7vgP%2Ftx8OR1z23UEDGiIgJQdtwYx3v3ELkoNDhGdWjcYXNX8MYxGkx09KRw8bB6UBFda0KgD8SMYvwGrcLzdjsAGKLVZY0UTHx2X4sMBDSeaZnUISkiDTWRMEdNBJqz0D7Q0f9ASsns9T4vpjxUyHUf1yRcnBMSQFzM4zoBiwAPVIFZffTcFoaOS45jCYhC%2F04S50cEuzQcOr%2Bx8MKPlhMIGOqUBLiW8zMdXmOGybgL24a9qTjVODWzJ8q%2BG5i9iuFOjTWRbS0P2m8BHPYoybZJcKMTpQe9zbF2%2BclGCBJTWxt7IcYKcleo3QJnl4M9vpYbeKlIjDVQievL%2FInrWz0RbPQN5rx%2BOuQpfE9Fmcqq1PWnmyqVp%2B3x%2B4z8Ec%2FmgBnk7%2F1T%2FZByyPz2knG5fdvsoeGbWrWFZ27FwZR85VeZXOdb4U1njxTBd&X-Amz-Signature=a603ee84027036dcf7cb373bb3fabcbdb64848f7975d4e2f2c88ee8f616f963b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
