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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVROHCB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD1wZ7iAYoSxSs3nMow3rCIarzFGKOb9Y7yYvcbUwZslQIgKfg0Udels05%2F95t1tsbJHID8mQK2hpbVHPLLs8pOxO4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQD8k5sM2CYHj8O0CrcA3kdsEiWItDBfbfnWemzm%2BLAWvLZG2GMS%2BLguGIxn%2F0X1ERjlIaQS9z3ru8BCNouovOrhPwiQtFbDsZzNFwxBO2w%2B%2Fa1IXO%2FHOEplN1BtvKSkkEf3UbW0BCadYtMt5j0ZJrplKvGEisZWsLE05ynRt11lRTdnj%2BbXTyy%2FxPg%2BVLt3GNPlP2c32%2FatTGy%2FHDRyjXQeKMLlcHCN7aVBnqN5MgvBFOTnlD3sN5gA1myCEymjt8w%2BTqyQHYc1yRzPic9hZ%2F2vGEMKYAVVm3VL9PRZ5W9v%2B1DKBcf8%2FvNzRi5BMJdO%2BJuYflnMkB2%2FKifMZoMAs1RIFR2x1uNtA86TKik7ZZVHw3cUHq8gEsoCt1TqROYgUx74DEqRS0%2B%2BZrEZxelK0ltSbW7D%2B0ZaNRxhGW%2Bsy08zf2P2NlwDS5VWFTyAMkZRQCPtEVvAepE%2BSGbZ4qgcDxPjG0D6cJwZchA9R2iJqE9q%2FgQfVIF3zjd0o4rqSEK%2FmbzF5HkEnoW5V0BllZ54m6W5XSfIysLKbWbbO32%2F%2F6J9TVyeeb8XnsJ9yovGs4ysk0tls9g4JCsXFth8%2F8WHFbG9Wc3QI97LxatZGgXLtBy1nADhrdOVQpCaFl5vrxWvUKHN%2FYFvSoK%2BZC%2BMOu%2BzL0GOqUBCczieLV%2FEIf0Mq2NaGfw6eq6QTjOOucpv7X9fFgwr39ocFD8fZfmN9kDWPBYhLkGXDujBIxgWhyl7AIDpzRxH4JWlUNbK7A%2FOHR%2B2syrb1UXCSuC7m9yhEiqxfnMLUi5DO9TfWZkGovVRiysOJgA6%2Fz%2BhPy92j%2BqTMRHCZG1q7lo8hmF%2FE0EaUM0YEm%2B7LB1v5A6mMGFA5C8f3c2BlS6FSYahApF&X-Amz-Signature=c1d16a14b88612e5bc7ba7e790ba59ab240ad06c73eb4ecae4b02a9764a5b25d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667562GHG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIDKj0NrAVmA%2Bje%2Bg2atG7KmtFqnFsAfIez%2F2MXG%2Fq8icAiEA1DevHHGKuw2l6S%2BLDhczKz9kXlUremmvksibBDjvHN0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB6Zgt%2Ff9Pf8KmfmXSrcA0JXNDcDafCJjTLYMi9ZRPFUdcehedC%2BZFAfjfnXWxAzt7rX5RetMTND9Rroh7vHOc8TTCgj6kq%2BNOYXgvxf%2F0IHrqzd9bvneHS8WbU3sa7DbVc6kB39scMBH6wI7YzieHw4qN3Pn4MGOpVLvS9Tm7hdlRDkDXUXgXSMcdEstoAQxfnou2O3f3t1aUHY4LxTK39eYPvL3y721%2BfUfzI2iU2pqqzQ7SFoqAcutKYpxjr1jk11gAN5UymqKeflMUaqa03u8g3EXdmAi5BALxYZKghCQkuw78krVk4RCDU8J4w1PAA88DSbfMjuXCDrS%2B%2FCX1X5xY2IQZBn8A4RsNvA6Jek%2Br21HecYt5VT6gK%2FJViioCbnbIfFofK3KztjmCnvvej0jp81SVzvA5RknfgH5eh%2F%2B%2BS%2ByYL2OgIDFfKEMfx%2BGOsYG%2BBDqQxpNlYYO8YfPy6zVKHBSn%2B6FBYK%2BeMmDDXSwDELYr7dNK5yS7RDPXofQf31ImMetfFg%2FIHCQTC3RJrBc%2BsEY37xIHT%2F6xPoXpmoBk4NvAnvqk%2BHLUk8Osj1X8n04gD8W7OKblj7FGKkS6JB21L6pja0M5Ebg7UbD3V0DnXZQnUhKCX2XLnD5wXBCnwrc50b%2BcU%2FddklMIi%2BzL0GOqUBSey0cisZQRdHxJs1blQ68vEfG53G8RI9k9m3H95Tt9U9teVI28u0j6p6LMt%2BBJp35MN7Dsp8z5fluHLBt4CwX0dRUCy6z%2ByqM6DDvUoVU8jWywvqe40Sa14Dqiia8Szp%2F5SQjHDrHwDrUtcbkcEr3ubywzNGG7NpTISA3o44HpUFlBQ5MwCHtL5EIr4U7Ae1p0IlLQL4vRZFxXZNt2vSrvuDXCSg&X-Amz-Signature=bfdc265f75e2206c3ecbfb2df8f8752222df4f50461f32f8045cbcbca2a5fecd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
