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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZOFCZGY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtOCLIBUoKhKd5oaWXmdWZZ3MptOHvQT%2BinNnI2WQtMwIgGPlBzwCiLpk3Y1YZ0i2326iwazN5ZQxoLwsKEOzIVIEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDU%2BSljCK1OO2i2ejSrcA5gX0XH2vQQE28ZFswg0LRIFIz0ACY%2BZDAdSg1Bo5XadMNJJk2lQMgdPGFWtnkSWssT3OdcJEYnlhUlSWW92OJo1QtvIt8%2Bqc1UIb%2BerfbbTBP8syHm57Czc%2BARh3ayM7WszbZKQvenmhEba1lg6RtLQ%2FasHXh500PgESeqfhlum3R5KfBubzvvPvTUNiGS8rYIbGbrU%2B4ia7IY%2BLDBMwAfBDPIiiRxjd0oDoTaxmjtmkmGrGBJj0Nr7X7dXr4DK%2Bup0bJYq9bdGGtYXLLHimiy59j4fyOPWnM6Om77Voo2nVSJCDlcX4maR9NlFA1SVgDzZkO2yJHZnGQf7fRvAEJDO%2BNsh11TUq2JYVUWFznB8GGYBWVg5%2BLtsCQfShQg29O8Agku74Ka4OQo%2BfCrCZAEZyvhWwgi9y9Y2ThOBqbmZqP1blpH20eGnwmPysPa%2BMdQzd7WWxebVzxFBEws7y3gtXIOqH0km2NxKOSWnn2bnCmg8CJpbxuFvu12d52S4v89woRBD5Xq6Kj7Ipbm1qgHiSlBmuf%2B587SYiAp66umnODQ6KaD7sTG4VJaRrHvycEsQ3vq6irc3NgcSKFWhgfXTAjyKnnyobvFcfz2hgzpC1wpVNXSrt2bWHHECMKDji78GOqUBDGFpE9z%2FhiEWFai%2FVm6OQsT0zDwUa339a5ReQO6SP3gl%2FkXd6t4RRZl%2F%2B0bDx%2BLaTUR1uZPbRmph8qb5GGth3W7GkVBPqcEvLhxydpyD19P6SgQHFsSSivqF4fY2q7notPLGph2YMlXbpuWDAsXQbi8DzJlsf25OZkcSNFiRWQHBRTMAhejxTvSTRaOmdRYeP9pwScB29Tj5mHkcOtQQNL7iur2b&X-Amz-Signature=c95f75bbda5c34f36fdd9bbcfe26f8a2efc0d292a7efc1ec826557aacc42fa5b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TIHYV7I%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUGfhimvAwJdoh%2FIt1wBZAGyS3Nhjx2WCwJHolL0GPjAiBAFM9qff3GOzlxQVQ0yExSt9wBbkAnC%2FF1LLgtjVVWmir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMhLrhHFZ6w%2FVvClKPKtwDi4x8JYAauvZJ5u5JbYc%2BLEIGa8RMmZjkzkU0p%2BKaRmv8BITp1Pw53SM693pckZMKOosn0FQ4oEE98WqzdlfXyq0w69VCGiN3jF28BdVzxzhDvsb87aZmCZrxlGR5HGPnxbS8v9lzb3ftWKzFNdtJeOX5BfKNUCDwHs6ExZkj3rHppWY0po4XvoDuAtkux5ZY8RiKLjVvihuThWs3T%2F39w5Hez%2B%2BgbcKYWZVuuaQsTIRj3xD7nUQxrR3TH0J8%2Bm4fxbu8EElpZXpUh%2Frg7eiTeBVyZoFIDJz%2BxKvKR7%2BbyMLUcteeu3YlVuLahndeAMeUiOZGGALVWGGS%2BKivWueL0x4o3a47zqrzOsOd0O7aCSCUNdfaxj7m2c80qo88SPOd2FlMg%2B3EcBegr7wBb974NH8q8HFD9tnPry%2B37ErbJOZr2rrkBKCgF6%2FxdvIwnuNgQdobz6UoL4iBI%2Fe%2Bhf6Hy%2B5ztxOeOHvV7P%2FNVpIUi1%2Bv8HoKT6sHRbqU04DIis8h28kFE1jI8HQYDFk%2B2cez5RPeW3jKieBZxIeZRG9KiLMKJmXvGDlBVtjqNP%2B36XjSt%2BHW8ru63jZjmbLOdOMMMaX98FJi%2BlevH6wL4MeiPnu%2B6iXW%2F6cBdhZdJHQwteSLvwY6pgH6C7ditbv1Kr99JKS6qlzB27Y1crFa2ITEVYN3mC4RPfBm2OqZWyqz4m%2BbRxRhDcMhUFW1V%2FikzgOLBIi51fcUS%2Fu6w85y88Q%2FRSyzli480nvUwxWTiTtI3Snx69YHYYBfwUhMyLDSScm36lrnF8f3bvSNywSzaIlY5dqkwqA5aTMdPEHl4M0TtfiY6oBM62dOqp9I6EkBMYGlpgj%2F%2BhHokFHA3oVp&X-Amz-Signature=d9a7f9210958ec1d37de67433192798564802c52cc956100012b72e833e30ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
