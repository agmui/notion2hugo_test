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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2DWUPU%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDwBtDcYA7dmTeRkRlISuMCKJ4p8ihzuE3rImxdEwevLgIgDGjX7%2B3byKsCcQB08GDF5r45TvruuATsImVLsf83lNcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW5njVMHU69PljXoSrcA%2FaCT%2B8Tfx8wW6Y%2BUGvuyCEwZy4y8%2F66CwwhOb1NnhKudFU3rSmyx1hUzw7SiRFjlBUSUu%2BnMeg9WAc0sbxPGkThtpsuLXwFTxXIUkUXoOfihx4sDFb93aXmSR9g5uoS0dwFuEaGvmak1P18C4hSKb2SyMknAhEqkGKMcPrPTXJKJAepUJHqvzsf9CnetyTWhNXybCuS8nHq9eTTrhXefOjsJlosYJJGVeTSh047gB4hVNWLFmKwiAF7luRaTgSMbnqF74mWTyO05xLujbwy2TljDzuK5KzxULfirj5dHeIupAJBxTbF3NJm9xEAH2N8RBzfiVE7%2Btkkd7nekKtnvgfHDcV%2BuCltD9wZkkOt8dAKiinqZhXAofI96YSNWvX7mYTtWTNeVoOeVK85x7jYRNPydxpuwapefq5rMExyskiozlC8gAZw3oRsrHQuWiZ8i3718oOqXZM6aDQzoDQUb4PxObS73TB4l1RlQRdnuLKxmIHulLikX1sV1GCQcsCl6eZdJgF4qiaMUx0v8HIturP3v3XjuBcdbBPd19pxuhw18UHIa7ItMx0kI8DP39%2BQYtC78YBpj4Lqbj8vJZRygWNtwwobWD7NetEB4%2B1zVa41iyJyOSn0EGDuS4QhMOCE578GOqUB1J6vIRCDHkb3QgCE2yJK0vM7nLpSRFZkBbQzE2682hcd8FukEaSfAmfR5d3FWSERVvyruM5WfJSk4TOKfE3lrQxTmGCnkYu1iGU2REyfUlY7RboMBWSyttPxNCPKpo4nnkZa1dNG1FboFp1U%2BUDaLlhKiUGbK8GFbzx8IOpf2iLMGWRZFw3D8H5VgSLZD5zhIMrbKqLQMdgmc%2BQKE6Y%2FpHMgFIz0&X-Amz-Signature=01a4d9318be57e03bf287c01bf6801cdabcd4776bbaba95b7d257ef46c51dfa4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTO65GSQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCNTYFDvSSpip22oWXm84XYpPtD4xMeyHEvGa%2FoNBdNygIgDH15v4IzGOK%2Fb5I2CZ50tiGz8o2I65qGnnPFLPDVeu4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2soo8nKWz%2FqPNa6CrcAwohP0K8mI1evkcm5O3rUavi6p4mEct6WjxE5U3SW38FpfgOpaBF6HO44KUjxBkVLaB1bIoTU3U82Wr%2By5391Sl4uTFmVnDCR9Jr0x94ehy3QmLXRB4%2BqqCq4dUMSuJvC9Hsm9eHPJ0f%2FmuNyO%2FzjvKOXjhRIq3Sc3ws4W86%2BPwDcehtNQH9jdoFFCirCvbL8mT19Ewehcazj03KCcSfCILZcYGv374WTcCU5CuLoNuKGxq2hUKKC3lwawUUni1B7MFfIS0xvDCYIueVSD9xhs78bIM4m6C0DzSmRH%2FXKhB4b4nyzQODvVM4jHePRWppEE2pign7g2Tp32t5osiq2bSeJQcUIId0Q9ZcLyH1ZuopPQ%2FQxkQS2vP2qp7zwsAsz36Hw2PxCC9uU6WI7uNipnOX1JdeQ3TUhyLFXY9V91QKIwiHlgTxZlv6ScnaN0ANI0FR52kA7teKY0P8EKvSADe3mJwseUroAeYMiFlEmapmpkUfb2F4BThWnPaYP2Ita16jBO9TXpu2SGHk3NMWX%2Fyi7GgJxy29bBsjHMVT9uQRXlCawMi2KL%2FwF5d52RLsD%2BvrOtPxacMdMcYmLBGR5mdQeR92E6cNR3bHXkypOYPUIJAQBuOqO3%2BzwHk%2FMMiF578GOqUBCmna7ZO%2FIO9efa%2FbhCq9YVyaX7XFG%2B5dy1ZzlvEg5llZciB4ISFOLQf4xrPafMhKVsNFwDdx22ZEHV8%2FsrG7Xr5NYHatUgrdacqTPp3HomvtVUYp%2B0s6HjvsWqpt%2BJ0JR3dTYB9i1nWKBMn0qstw1oG7nvZ3F4QvvW70yqiOsoGut5LrFDuaTYT1XczO1B28eDDc5iG4wS%2Bl2uafikqTDFGCYsWj&X-Amz-Signature=b8ee61f3a2994c8b1037b7e79a3958c96c1477dd2f39a90fa39a8f1152b99e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
