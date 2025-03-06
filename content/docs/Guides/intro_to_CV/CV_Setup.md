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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR6VHWE%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2F7Mny%2BYQ%2Bk39lJ1aYp16dCO8PyRz2l32Ps17hzgWCQIgDSLFbo4HwEOuGpdSeSykb8G8QRLhqEDNcqlrOuUPyHEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAweo4VVvPH4Jxm5mircAxkRm0AM4vKHo%2FJDcgmNgEwWwffZu81bAg75CHx5g9FMT1xD2mRe7AcFSj8%2FkQ2xm32yoKeKWGgEQLOB3TIpFVXjw%2Bd7cxgD9jz6nFWSgeJPlTTLUDMNFCLGgl3q50iDNuBXlS5r%2FlkV%2FEjnOsm%2F3vc4ZdUAB1UgwOm7kPlh10Z0%2FQyglpf%2BPDOhMe39sY1PQRUKdsIbwA7Sd%2FXyF8CvnrwTA3qVLfJ%2FHfZMO39Yr%2FhGTKAuJ2yi1cnYfwi0XivAKdoc73JZtma0JePy9YA%2FqGmBOUsx4jOocRvnILCP8DytEBOb3LMCwapM3cCwzDBerdfsWxLDnG7IHph3t8OP%2FD0pz5YExzrDZGTFVD6XSNh6mom0WudZQC%2BeyM2o255gDp1zNSTsxKAsaLqHVOFX63xyh9PGM7pWtT6Qg7UFReajARJ2dY57%2Bxg%2BYME3DhK7odzBeiLqXnPPDm23wdesSIMba3Tz4XO6krLc%2BP%2FEm65mv9TLVpbJSfAboGUj6YElNb92CWVaFxr1cLbopg6k6JltcvjhClViVS1bpfnNvjh9awYBBaTiRbMAVzSt1ZMbqTAJK4amVVvWIoze%2FZSDNhvOQEyZmoN2eqaoIOLNBc9d4DM%2FmYUstQxH50%2FbMNfNp74GOqUBvpVhR0gNZ%2FFsy3jShNky7HOOBe3rMcSnRE62CwLC2sV%2BmQ4ztdwUL1v06ocL3kIi%2FtbHzQQZClUKclMwhRqJbsGbOtVnOh6MZqHnfYjzuPMAfpMOeCoempQqc4ls%2BtahM%2F2QOH3DlH5c3oPkr8Z88YU%2FYBP91JcfTpOcuyL9d0MT1%2FbCKeEI5lKrMQjvlKU1NNhgbvaFkbH82naK0ujStaX9tthj&X-Amz-Signature=6a94fbd2bc52bd6f15cbfc43e866c9ddd520dddc153bd0a92da5531a9dca5609&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QDSX7VX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4nBQUQqeLhIzdQ7AhI8YRZMJsOYf6AWBkFK6Uu5GkYAIhAPwYOAvr4qLHGll43SqeWrwo1ZqQkqXH9AqbU0NMCS8NKv8DCDMQABoMNjM3NDIzMTgzODA1IgxrjyNAglwwPeuTJaUq3AOMCVI0SquKED1LmVq324QmwoPGTufGODshLzqUQD4CvrNLWDEB2TXm%2BNmqMWWo%2BEXz4xyP2wt2Q%2FfIKjhzOD31rWc2Z9sImuDRYYgpgw8OWueSUerllDif%2BT36J7q%2FNoe1I6SZkuwW5O9BoshL%2B8aPZJH9B69I1Dlw4Hbdx%2FgjHvLZLGmwsSpSb1rtqN1ang8B4mEMCQHKrJc1uDI6FncsqfH%2F70Q9DCQWIkHmswqlcqSwYWt2jFOvq75JBdzqDY6LH5vj9iuolol9KBP3P90CA%2FmJEvW7PYqmHqgJWdI9TT1AeQqhc89a6MypJSZKVUopL2F2Pp0mZ20XII2jrYFUlGJRYvqf34XnclH5X1R%2FSvGmY%2BLB3OOGDirikPkYd8XdieFWMAYj%2BGaqF1HwvcA35X9hGj%2FNM47X94fdg5r3R%2B6MVgzL1L6AR6crU9YAFMS4kLOC7yyHFwNJqjzinR84l%2FOKSIz40tzf1iwQLRVaTUcoZYuxfxG0syJEWp8gUK1efb8PkMpMv6o2VS4S12pZGSxJMkD7NVkvE9FdAZLDkAhdbsOtx9wsDB8AmY%2Bb58Z2TH82FY%2Fv2AlvQL0l4KX2qB3EMjYEKLEB9nx1L6dLgT91oQ%2BVro54nMgv%2FzC0zqe%2BBjqkAZv8wgmmLkbQUJ%2BChqKI9bIa%2B8Jd9QAH3EwOYQOWgFPcpHp4vmK1ItCm5ypEP4NV77D5dI52tlRepoX2oTRRxCKUVpKCP5YGrq9o6H9zT5dcW0u8mHl17OLCA0OW0HB8DgNY%2FmeQC3JBHUAfMxpNpu60PY1DbtqhEjHYzrr2sj2hm3kB6s4L1jWZMwPnxQqBMT37btlsHkeZkfuSizW4DsgmTHah&X-Amz-Signature=516aad882d98444beb3513079a31542b5175c78fc669fc9ee61e620745f8894f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
