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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTAPXV5Q%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpAMxCtzaraapbUMcar3fPruileZCq6RskgDUbfDRWYAiBuzIoz8h5sJKMvauV4JJVoYun7o5uNK22q35pDiXGweyqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6jJnL1U6j9vpCFrcKtwDzFIn7Tk0zAtjCjgb6%2BbH2Kmys%2FvpRcvuWNk9pSu85w57RgihETi49KwmpMooVjpiMjJ02%2Bt%2BleEz%2FpLUH8tuQ1yT%2BbrTTYB4M7GusnXEY0qR8TCqqaROWS0QZY4yxLYmDfLjsoUAx0zFJCSdO0Izshuzs3ej7KivyiYW%2FzAskRjmPkjMrl4sGl8BCJ86fNAouPR7M59Hg29EfDUK5cPDDuVf%2Fz1tWZqPQ4EPDSTKlxSfR4qJjVt5Vn%2FSNgEOol2N8Xw2zHCjum5KwCZUHsH9QRplWvC9x7MDvbP0pIo2ro6Ny3yeW9tTf1ny1a%2FgabbEHXR52EeBAAnlbjVUbUbVZCIqIwAH0wIrcscniTOmObDpAB11vmjqKZKm2pd1sMpx%2FB5gc6knnOxl3nwcV%2B7ptEYhgQWLhu7H5fvXtco6Z0d3eHGay49g4dsMRTsSXSaLLMwz2vilW%2BphQFE1j74l8pet1Wd42tfQj3e0L3rRaEmNj7u2VP%2FkQQdJBf2%2FLUAsPXJ%2FjGPw3lCNHSeyiMzCSSwIgNCLyBSz9VriCHT5Pm7IjqS6I28Fld%2Fpqu6dQqplpCmKV%2BQPCJBAJ6XiV9kMX7wV5IHpMPQPh5NNGMRYqHYFvHSWKl4VRc1T8IIwt%2FiYvgY6pgEvgbB6n52N8t9phSiV3b7owU8PemGQUxGKY1TSYenHOMP%2FhybxwMnN%2F8IAjJ5u5bY8TefaYlg91SuLzLOXxpfCC0XrMxj6Y9BHyN%2BDNBZugrs56VlYWc76DROdlJnd5C42TYogxAw6PJ3R9uzVOszQjRnuB%2BzN2DHBP6esf6x9kK%2FeU26oBQ%2FDjQDsGw09fTns2qPWTFO7tcEdymMxZCLt7kP6lRRp&X-Amz-Signature=f5bde260db55b4be76eb270b8ee7fe2ea5a992d578cea41554ac8bf77d07f830&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLY3LUJJ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD68pEEFJvQWjWPFXOGIv3BRqqUgyschNdRSMstcLFh%2BQIgYNMGRcJNMENWoRZSOvyokKniIbIYFFzEgklcn9DO%2BKIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bcl%2FJVUbGTCZ2kDircAyFaYBqUMKmmJror9E6UME7VT3rmVWdoaeIlZssMtThImTt%2FcwFrl7NBO6nZqBnij8o%2BvFMJo2Bm8EBOFUJsun1654eCOEOvKgZyB1pI9i%2BwulsCVS%2FppSroDez3MBFhPPpOCZv2b%2BggGNNpmLNX13EUQAdumSRzNbOO45lxcfTtsB0CEXWj0Ve0t%2F2FqH4JQoQTFTxAYgTLrZkkm8WEqa8dZCD0Fh7GmMmUAHy9xyNdwu3Ny3yzmer%2FlTztWqHHkGqDLrflWXgsbKAx4ITawxtSwaJeljeBr5MTQfUVrobfPEolxpY6WFFrDL16aD6%2Fsivd%2FK8A4K%2FRHsTmJePnuTql54f%2BSMPLW74DNxbv9Tc8CsguXgDQHEkSpngUKihvWzG73WAy3%2BzFJZ1sa91%2FR2%2BlXjrjadruW0VtnXd3VqVHXqXL%2B2YRv%2F4EHbJMOzPQnTdEjXfsHL4OHCqdr2%2Bq6fmqgkpIqWWyr4LyzqZI6thVWz3D%2B85wKeVB6YiDZyApcCxhtqu9IDahNp5xe3T3LGXCg%2BaekLo%2BIgZvqk0a2SWZ7IZi3rzQeqoS73y59gm3DXn6E%2F%2FieJcrSNjFj32%2BAqiZD0AgMD4AI%2F4ZK9eSZ6ga6FZo2j6rUnUHB9WvMO34mL4GOqUBgLesXAro7u7UPHv1VZATh6d4XHyMPNRjYAVYnBTvdySrnM7vf9HMtzY3COJntmhV%2Bi2SuVPZBWJReT9TMb%2B%2BFA%2F9QFjAJ7KBQ1JZOA41y4OcMMh%2FXSJA9aeJNBEu5eyG8QPt0cstpXn6JHQ5HuOHBptogIU3OKO60v7rKHlM%2Fc9T5nZGPuu5A4Hybjtl%2BF6CECV%2BKA4U2G4Ws0xxABCQnk00LJgx&X-Amz-Signature=7920eb6fa96807755703971cc47cc7704f5b0ac38155f36e5a833b8e030d5bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
