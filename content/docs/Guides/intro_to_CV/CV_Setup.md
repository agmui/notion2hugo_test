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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5P2DVVY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYDPzLuqhNGJnDgX40%2B7S1%2FTZz6%2BlDCjH0iauI2KtZyAiA4fZmBpCFFwTU7UZoRx%2Bd4rohhMXM79LqOP7iig6iouyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMlDmKQCFZ%2Bq%2F4B7tYKtwDFdjxOpp%2BqTKK%2BYLt5X11J%2By7APR%2BUlmyKvKNg2scOjBD%2FFC79vo%2BvbcxHz7BFD2psKxV4lXIOKzMzIo9Eqnulu7zJAcBpnLLq0T2eeZECGU5%2BDY3fX9NSq8N2I35h79KDf1a7dspxPiBSZqz3OAr4F2BQA7TEW84ID%2FLdMlawtmAB%2FOtB4oqEza%2BgpE3HX4L68S2BxiDaKIr27lO7BfmnHX%2FE9aVfD9S7n2LLw97sxj5XZoUh6mDFcfz4jRxBPoWVghAqwblZTRggd6uFz7%2BifKtU6vQexKOMnLPhz9uwmaeNep7B3MxK8w6OOSi%2Bf5PmKj432u5%2BzFQ7v3Btu41byObKo4OWCPIjxne7gVHJ954VGWSCupolAweIcClnQTOrLGwV13VhgLbMkK359ZarHH9L30W0YZty6uxGIVYr9i%2FNFP3LBeGe9QF3Dtu%2F8igZG74n3zrlfpgfIwSy6XfAGc1P8N4ihaPwhrjii%2BBd1U9QcKObxwGl6Bp8b7Vkrd0DKuXJU9rN32sAw9tNFIgDB1cwTzA%2B%2BL0rehVV%2BE1Fs6XyNI1OWoQ4BZOVVmOCba7xApbe9e0x0w9ABXcgPTQquDsqVE9g3TZphaNB61TTnwkzq%2Bv2V%2BJH%2FMOASkwysHwwAY6pgEfSKqsHXbhTZd5tgS5yKnV7EEPWSVpw%2F871q%2FaaglqfRAOQXe%2FB2rq1%2BVdt0UxTHZfxnTBjueBosVYdMO7ro%2FPC2HqD220lAMxuBpfDIqqbhv42G8ZHxSO%2F64PMZDnB2yeKMrjbOSWzoKVfG0uTrj91S14BIrrZ9yjk9pzr3vFGBS5239B5BtTzMakv7Hc3c3h3w%2FTduIZ1sWMD%2BQZSSEgdvpO5lft&X-Amz-Signature=73c5a52653aab6c4da6f8d005b26b0248fb28eb53bcb7506f730d1909677adc4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JCEDHQQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESzmpprvp8m%2F9ghRKxsoksZslm6lqGAEeBxpsT7VTqpAiAH%2BKZdCitBpDQ5tT0x5SRVmEim3Kte8Q4MggFtZ%2FHrkSr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM4QVILWRn0lJ2cKewKtwDFBSVx1gb%2F9num64KOpwUSUhilvVTikAfpT2vjeMhZYBk8%2FCTf8QUEdF8i8hQ772JkDpP6XI116OD3luc7%2FJl9WcjOhVCkNODxU%2Fgr1UOlMbSgxfAhK7%2Bj2l4e0QADmrcNYBhs3QFyApKeNJF%2FksSdhT4jP7xB%2FdcJlkp9Giua8NdTxt%2BjtIod6kVFRRUkmPrggwvePaBjTTIwMFcytwSQHwwcgvXbtmHqlZUCR5XgT5XEgQWrrsKtlpR%2FbnsgzFRXNRwlYiu1aNB9DxHh1E1D5fDfxMfbx%2BHlnjT9jCVekUUfHHisISky%2BPPNyh0BDm%2FFK7oLUMgpAFqS1C2XAZcmDVCk71rYnh5%2B%2F%2Ffb2RqOOOWNSirHwrBHjxt8stUoUNjJdiSBXVuHjxsqeDq70nM3S18uZrTKIfkhszqeesvNhLGIRZ89kmw%2BhHBLY%2BL%2BCRT8rR3xT%2BRBlWEmYdlQONrj81c3%2B8%2FVmzWxum0dX%2Bin7kJxNA9sC47CxhXi4tZYe%2Fe%2B%2BdY%2BXk2BpKucj0z6cXYLoAJzPtBSP84RqWmHD4kUwPJpfKdmmRbRrKUYHq2blmo%2BvTJeZ2ScHkRTjuH4%2BG77cIpDNFAawovHkY3NDV%2BC16X9Wu0WIOe7gbEShMwocLwwAY6pgHsF8HgjvDdnpSy82yIOZcJtMPIkhuR3B5tCTfzJV%2BDzPJrhQM4LuYVXXzlKIk3Ti3mPi1eHylsJ7Dht%2BGhav%2FBGftCkdbC1AMosRy8GO1oNQvglf4FeywUnOT56eQY7fTd8RZJegHkTxWz8rsyZwA7qxVldlOpKZSOJ8H%2BaN4%2BkYCFmO9BKxJo6OC9erxF687fBmsLsVE9mFrzlNinOS21c6ySzcyi&X-Amz-Signature=2369164eff64a00dd4752cb3fc31234595f7f11011ace2b4d071dc6ec5221c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
