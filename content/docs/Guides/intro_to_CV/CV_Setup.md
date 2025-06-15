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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZZCZY7%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICkbTgsTymdHVx3eBpC2FQvsGXWGgs%2FiE%2BghAEy9uBk2AiEArfkNlEWZ5gey0okzp4DhbXClIL1S%2FI13TjhOi3dX8sQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDEYGGArg3aNwn0j8WCrcAzslD5QOBRc88roM8iZv1sTd2Qs8wll%2FYcEEDZ4nWuPLrlcoewzuWL28LXmJLLCB68w6niP1dnLfOCAxyNvZL27ls2NJKhaTKgtAOUDfaA1LD%2F7eHdgXprwHwbAxGQ0g2YdCqEy%2Bu%2F0zCLAs24inEwuEXgxgttB1vEFi0Hx%2BBPqnDp%2F9A%2FFvY6ZJu17ixvLjMKELZPlzyywKhmuwTqqEEFSToUogN4Yl%2F8ja2N%2FjHhfzaLT8vO9Y3NrDJAjs6bzFd3AxMgidQbQ69w11lUFQekvVKW2oPk2Zt8DE%2FuHlTrZ8uNw0Z6P1f4olQnnveuNY%2FzEZQOvIZ%2F3Hdu7WUm6z0rgmHEqaaX0e%2FKYHqmQnAQMSBQB4UILdendgRdpyuuI4LntCm4SNtlJBX3L0TGMcTiX10W8aQq%2BFu9X6W1KAqQJJgEc8C9PTSctue%2B4Gv2Zii19rFv%2BmpcBf6WmEAchE5GICQEcB%2FYWER7tSTnH7MUkmEUz4%2FFp6PasbM9KMqMvbCaVcQIYbH36lwBnSbOFWQQ53Wew3Lk32u98brr1ziM6ZAruYMFUD%2FtQIweb%2B2JIUgJnlYi0cquvVtGzZ52yZqWrPuFQ9PlHYDUV7s8iHb6TLK7IQCd%2Bzdcvy6t5%2BMKfOvMIGOqUBVV3a7Rk3NsbTtHtbvnTcG%2BAAiSop8DwgYly%2FV2waDiyK0ozPOQyLFf6HCT1tEWujLOZNro4Xi2BgzPlE41O4L6ULsIHv7tS2w75XyaEgMpZ2Ewoy2eryTq52ei6W2xvlWeraqlAm1dIkAefPb67J2B%2BR%2BWApmGbTHdAChr5r%2BmiL1KiSQ7dZ0rHjddw5DejgnsigofCAikFrJ%2FvMrP%2BcHeX53A%2FT&X-Amz-Signature=9af3aa11ac8e4780c0d9bad2a3d118568810cb0927888e4e817b2d2e89ad8a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y643QFNZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBUyO%2BFA1409%2B446uSVH0Iej7g86Xm8qoBgshFmXJXBqAiA%2B%2FHlhp%2Fpg4%2BZRaJEVmYDYgJqkjZt7dMqTicEnl%2BmOair%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMTQkElh55fA2Kg5b%2BKtwD%2F%2FhHCgH3gmp5Wc5PBIghAWzPqydNnPhnIPdzVJJZU9oU51z2f%2B2y6mZZoGAXffJyKzc0FG2WVlepqrRUbqvYtVVNSWnZ8AQ3UmFpw8yj6x%2FGgN6%2BfBOIJpSl3b1wfdkQnvNnOmH3QJzUFAfp98WzT3GPKBdQHNdkAR8WLnlf6L8W2roqEwFYez7VTU2YXDxmtZmCHBo1uLNaLWj1xH0%2BFbFlOPvdpVTwz0Qei9njWULvwPQpkLqb1r9qgXCK6m9D4K7M4anRghLONws1ikgAfmKiSgkHnlByxtkCLkTOQ8i%2BWhddFIBPQENxOA0rMS8fPUbdY%2FF7chFcuN7844owy8OXWpolmSs7VJmlSPEFKQMwZ57ObWMd7MKkp2fABYr%2BX%2FB4a%2FshtW3fZKg%2FbxmnuEn6qJf5pCeSHQztv3%2FQCXNwmnW34%2F9fRVZXWdTSOn9N7hzgwJfIUJmKZEmPr4NcsH%2F51PlESli%2FFxcHqdVPt5tKRFVl1DfVa%2FS5xvA%2BMdau2%2FoyHBZCOzumR4gze1lbn7gHEqZBzv7%2FZ6mkLQ6Vm2Fh2GVQORlWpMmKLmYX3O12bwm8%2Bdo%2BMr9M6v5x3MkYBky3rbGqM447104%2F0QoydwNlxXV7PlI1YuLhQVcwzc%2B8wgY6pgGsFwCNAIR3tpXKOfvnrm3ksA%2FDjPy9YEsknJqRS%2BB8C7SieaBnLKFRwiZ2oaZJU7l2z9DZAC2sj%2BY0%2FbQ2RP9jDlO3j%2BWhNnoeKaAQi7k6q6ond5xR4AUAa2MQ%2BUJ%2BmuZgPM2%2F27u9nsupIh85An%2FJlKjsypxNdamZgW8ciO4X1Ys%2Bp19KV9%2FyY6GyIDa4bBkoAlGIo4Dj61Z98ev2Ei5xPrKezpcw&X-Amz-Signature=0b551027c6f7e2d60e2645e36f986e947120c670615635a56e07194ea8689608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
