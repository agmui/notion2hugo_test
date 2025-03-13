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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5YMCDX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRfkYkCyUy%2BdnV1hS4GoxjV2xnK2PH7hI6jH%2BhIfL4cAiEAj4MfM8BF%2FHAlDY1IhFV7E6Yk4iwvmDkT55O%2BhGkpEqMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSED1FsVkb511c4bCrcA79tcNfhw1y74KSmNyqksO%2BUOlZFmg4YmOKDlmm7tYf9Y14ghL4jeYU85DKJ9jh3PK8tRJEkrpxwqMpDk%2BA0AOtZqowFFIs1PI4dJFA4t9tqlMh1IQT%2BxBjM1EJGHpwHA1o2rWoGzbnWhlrFnJEog0tPxFv7jFxbXQuoIN%2BEMlWa4IjVPd2Z6XUnynvjga9Q0B7Az9zZjo2ECYDaU2fE%2Beu2kI2p31In0JV%2FKsJx7m5p8kaEv3%2ByfyzQ%2FMhP0gpr04WI%2FyxbZjsOCo9p2VlHtbApCv2WN%2Bd3h%2B3GVcXs%2FfIxs%2BGn79SBr7XcwOnqCAENgiUzoizVZqBNjPubIBEtRsAjH%2F5cNC63q%2BBAGCeOnzK4gZHZo3H3taZSdvf3Mr7pp%2FAwIfFQJ4FmgFp5dKnFOIx%2B2EHEW4HMBU13afJmKBsM98pFzUYSKcSej8AOG2iLIdgiDiXXo3vqEU9pIcFHOXeqtZkbGCiqrxKuRBdxd6%2Fb6%2B9eA2xsy827Q1%2FIC2KTAUOT%2BO1O9O2WjE3r6MS2XdkwLylaxGjFpFe713StULflGGq2Yi59kFDgoNEi0%2F%2FbmnfqcAqrcqGYlZ1SJHI0pXpCVuZ70EXgnjspidTiNIl5vbV3AXHE644h5cHSMN7Zy74GOqUBW8ZbXdamzRiW1CITzyy7T2lGA094ToXg%2BiWOeGlTXBo04afyr3gLP%2BQWPFD16Qp1EdrXtvtjRjEOtJyYQcYEjwoyCFiQWfWUTWG6cGhV3ogcF6NmIPcNBvp%2BBcSWNac8ccHk88kD%2BmoswLDZqzG70JPS0xcJuUl7AFk6Om7pvdYmLjijukWeQsj3UL5zjNo%2BaGlkr6BlwAQrziM0GvL22lVPXYm7&X-Amz-Signature=7233cee60723c4b7fc7ab65aed7ee5e70b44316e8a6a946efbf51c27e795e89f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQPDBHTX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDvy6FDRihR5m4hv%2BnFLFxTVCzWkdGcBfIypXKb0zWXAiEA6afAnLxzpuPY27ik97i%2FPFInTX%2Ft8rZSwB5pq2kIfpcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8FpUoZtttEG1%2FWMircA%2BTXWLpWniX2I3Cm13WBAYAN9K2ee%2BzQyKGkrdo%2BezR4FNvGaS%2FrHuvyYlxYVQrVP%2BWQUBJxezuNgq8EaC8MIxrcydE1RindfA41gz%2BT1R%2BMSWlwP%2F7dE20w%2FSfc4MmSIZAyje1yRXvfcMIyNPCv2gGUUgLYavuFNrJTOGNuiYTszTn2wm4Lk3j0K1S59Aa7oaN7U2s8naKdJ3LF23gWOfUa3mYX0Z984NNwMdRRbI4dZZs8S%2Bn%2FBdvVoFEJT9Yzg6Bz2i%2FtYe9inOaI3B1SKRq0CJsDYnfAf9ms0gte5arUFCg2ULrpBI4sxb%2BMBHQp2%2B89fHQPGkkOFNq1hJvQACGS34mpN6MlREverCkCSBBB4Aibb6CT96aLwt2LBuamHolyl9PmbkESTPM7%2FA1adJcxQpLYqcpnCfF3rUjMtD8U9xcP%2FjpG5%2Br%2FE3libvfx64cdJSmVZ%2B9ZXcnwgMQvrQomPhDTzq%2F1nSDqw0glj7g9XLDc3h0u201se8N1Pa5dza5%2FI3WhZqaYwU7l02EyPAUfVz6BaLSK8sonp2oDmnhwM5jnoZr0YDCsbgT2RochoHW9Wa1mFgqIETWKgthxLi6r3y0zXVLEL8tRbDa%2B9hrF1NxuEwJtzT6bgqwlMOvZy74GOqUBeiJt2u%2BCI4Ce%2FkKmWdHtKWLOCqdWI3RRi3sLcWzPf%2Fuh0FmTrA9Kzn0tLrJC50ehXAMQGGxQ21oFTFdyPh1wHS%2F42SmLduQoATcoG5OgHeUnVukLgb8u9UuHUZL7mAKlKDUIofncNhM24CRCM70RJ8Pe%2F40U2qe39hsLLYUKbA7ePBbCmgoKSGref756gWvRjkch%2Bw%2FS8veG96c53DakBy%2BcyLDL&X-Amz-Signature=a1f6406311cd10681362a4c4307259c13847678d67d6e078f56d5e94f423dc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
