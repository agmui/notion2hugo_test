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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXSIDAL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE6G3O%2B%2B5JSshYGAL0z9NUB3ajJFaqNz22Kr%2BDh5lh7AiAln1AyKBsccDzX8ho4cqBVnC0JGtl1WG1WQqq65IOsLiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8NgwSb%2BjQuLVmnuRKtwDg7uUtzqbKdzKlm1wJvLrvUwSlJdIRoAln2uQ9EQdws9JS5JfwkXR5hNLIAH8ldVzRL6qT3OHHXfsPkp7xDYTJ8KhUWxQh6R4TZlPNvgS2sZEu7M5v8gE1VIuCCRnIUT6XmYNW3CqpfhhAJHIs02u9WPPDuoXcyTeNJqDegiuGZ4A%2FNdTyHiOMhuWa6DSwl3bb5GL6%2FhRnDRBzC%2FLtYqjWPAWrBfZhYxhWloTNcLfakS0ff7%2FpupXhlp0COktsR0O0T%2Fv4eJ2ylPIsoC0saxiXtPSRaQbpB2RgsjNAzHiailAXJ%2FWmjoOSUqo7gD3%2BwDtn9JuXzyecK%2BcgryIeleadVdxcpRMXU2KLKNC2uH6lsnFcJlBLqoarIvC93Rh7feAOM%2BT7%2FDNVSAhIDz8J8%2BsuyQ%2Bbcsaq98NvE5zHx8efYXGhH%2F%2BP4RuJjSGAU7Ym6YcrzeqI0ZGQYzVCgikaPPDQulrrEWsDtxhR52f%2FkHANtNTb6Vq2vMRrzfDxjE0anY7pjfvWrww8otUMpNxKuV3D9wtwsR%2F1BfeuxEAD5FpwRHRgGs5guQ5OjpExltRGqOY6eNsXCb93CybfAqh5gNMkVBrXuW2%2FVQ8%2Fp7CNFiOscphE%2BrmR%2By2adc%2FSeQwyZDbwgY6pgFTmdKFUdlh0bhwJCl4BvGeGL7HisoZRR6i2P0ICOYHVFmvr4TpaWsFuvYmGoDzfSmFMOvm2omBoJODi00gD8i%2FQ85%2Bh6UgWrNFmTHjutoB18ibr2qUAz1cf8bUXpWdz3aHnM2fnMwUBDsbZiqMJGqyTSmKYDej3skBdByz%2FoFaNQPnOlI20ubJLhfyssMPOejIhlWcyUx0m%2FHYovR9hXe%2B7677keMk&X-Amz-Signature=efcf3a52027d7eb2ae594afa6dd466e63d275166ff1780a8b279007c5157cf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JP67HJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi4KViGwEkLw9hwyrj2cN48nj7%2BfmXC9u2GV9IEks9VAIhAMbJLSubpkJZtkTMig8e9gZ5PIleXkAcfuY4oylIaC1HKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXVvKug1Lb7kENUZ4q3AOPffFqBfSK86M1c64mRXYu8ISeXS4n7EM26gVcDTTlKzthffRsKihuGYk77G%2BkGIHe5PQZbDYPSpaOCNZdlHoSjQU%2FvBA%2FA3j6q0yXVqb0i8YYgVb17Yxu433by4GzFCUehre0m%2F5NR%2BKPw8RsiQxo57naTPCC2Zgu%2BXG4YLYkDtxapMzt43FBuuSICHT%2BjFt5O3i0XN6qUFTHu01r6MAUrgXgSTQmIE005NJNF%2BayWJJ7yyAi77%2F4WGhDV8r5Jov3eF2BxahsDoD0gYHu2cvKyfbS7f9V3a6IMnrsqi9NERmghy4FTt1pdOW48qHspdIEBwB2t7XUsL4hmvQYM2o7FRsQV0H7fcOwVXnQQtQG1hbE6mL9TojL3rMD39YJ5JWWW1lKnX28uXBeVOavRHX4KtVaxdSgr%2BRyoGDF%2F2tS1RXAm%2FhaIrpjqOaUc%2F2mzyfcWU08lH2A2td1Ns%2Fye2gvrgZWQLWYIasKMo6G81vF%2FH4JR8G7I852i1I0WA%2BFinfaMlamUwOfP7kqAhWozOHM8m65hgCKU2s7cQ8NYa1aW2K8YFI%2BH4S7mk0UsT3efqr%2BGaNukCOaWHTMIfyu2yHXwH8mGXz8g6ZEmqdQvswJMHrB14EWOg7oATt09TDsj9vCBjqkAQZdZLwsT8R7oYQg%2BMu%2BzW6kKtrt4R%2FLGy6TJ8E0I5RWzP6tvHO1xMZ7bmJvYeFO%2Fdh6O6rZ6vyzUvCFo6McooDD0WSvmDm6YqsQLLD98yCbuv8gBpbhBVIJffNabXXuonSZ4UnGcn6nEDLeJBcb7YK3kLNui%2FpfG3QYLTm7xo1JHEcX9YSs7b4WAi3OyK5ZGl6oisRVraddh3khYbV2JP8uot2v&X-Amz-Signature=bf40abd6dc07e10d59ad2a051eefef3cca0c8bee46e20a6c58a8cfd27c5ec868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
