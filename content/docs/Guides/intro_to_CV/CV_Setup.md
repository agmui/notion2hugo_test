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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV54QW6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeuflPBhqUAoG25dBuZdqytQUHO43rXXXFbs1Gq0AmjAiEA4%2FoYwO85tFWfqJWEYJaQwbj5MFh6aRZmLS5dofqzz9gqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJERZNBpNCAfFTjTyrcA2E6Jz8CfZytYNRrKlrMyBzcABQ%2FxmtlGlFKYDnH3wcVIhv5oK9aDqbSH3BT74mpugAzgO9bC%2FpoTZ4BrrsCuqRHDv%2Bk3pyF7JEbcyLB3w3ZqDh2BsjLtHazkOUme5xyEqZLah0Ph1jkukxX26OsGsQmtp7ovXYGm7wsoTXV4RdrSBlGDkW1whJEJi2W%2FvimewvXD5X0z%2FA0e0FJRONnjxW7D2%2BwwUbyHaC2AhjiSQZT2idb3%2BA9CPSNFBKn6lUegMeqXN%2B2%2BjeKpbbMGwk28TtQxgp2o6UM4GLfooo47x5bdZaW7qplHS%2FbCuvtKpE9Ccm6gEAexFknjfauxbs8v8QbarRPmenx9LaMXlwVWDeqXjfGG9EccifRaz4Lg%2FYUmuf3xgwdCxNK7a493fkPgNlAxlN9%2FTjonoOTISv7XTdXFtkCt4FYOBQvb%2FqI2gNIqKRUh8MxGisl%2BGchqybwmV2Hmgho5ZBHvMBhfcUhHMfJV1PdoNaFGu%2FR5cF1s8cRWiXYlSOVBjjSYzHqUQ5pCmbqwcCIxEqEq568zxoZaDYIQYKv9l0RVGzF6H8CQeUJVEj4rcJsLyg2iOwl6MQHombUrWGhRRMv6%2BSUSDJg9RNIkSVu%2BPcRB9wjgaaFMLG648QGOqUBeBipEGwxNJVlyPYssSMh9xGJt5%2BalxH9nyp7mFUIcM4ZXdft2SXTBL0RCFg8etX463yVJNt3bfezw4ZDAP7puYnjVllCcmug0Mx9lzC2d5NgUd2vRXlLPOUN1ACKmXvKnjxsV5LjKpanv50nYaRczfcmhdtLNAUkBbh1ildCCDtxQiLEK9vcsSspkoAeTlRKNE9fNvd7q%2Bu2Hl5Q1BosxUwppalt&X-Amz-Signature=9171a423937f7342f57941b7103ff4b3c18976dc7164f5bc399e646e9562bd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOOGV7NJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQMDp8LNHiyD7BX6EAsaAmV2VvRcoFzOOxBWds%2FoTVQIhAIuF36lSxmgFHtJb26Tk%2BcIjXjBpinavnXAqgIZWp7RGKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvkd2yKwnmnVymzxQq3AMT2etj0CjHNv1cDEnTcqebl6TSBjmXbN%2BOrXQ06xco4FgsT%2BzJJsXsXyrX%2Bkvj8J4dTCAKIw3rmxpabHlUFc9DeqUxkPXHXPgTAccv%2BxwCqJHg0ai4CNP6LdpAzRwPJQsFGlJwAwE2UW9UUaavSiQxTpedMzSDphJKEW6%2Brrr6okBePYImxq2JboXRmLOR7t85GC50IAD3ipsDcSP3xfC9gZ3l1dMw5RUdeFkTP4%2Fn5DcxML7AEup2GBZsyGCBlfC%2F8FuCv3Xj%2Bj2ozIpgkSdZb%2BcP1aqxbspQ9X0xItSl9Y7nnVwFTTVTYxigXWKAppjKIBtvIAxqjVFPaLnbjnjqhuOstXJuVdvc7DHyfL3d67HUpxPxZ3%2BN2OHwDbYwzcBzqyNb4eu%2FcuEz3C48LE6Lw%2F6pQdzrZZf4f%2BCWfDwCzQu9tgtyhdaSNZJDcvIlWUw0v8sWIk%2FGz83E%2BQ1tq9BtrGSZPsBHM3wK%2BBomMQ74pbKM5P2%2BSV0ZiuSEHsxneddKf%2Fd1c7kMUZkskiPukXyyWF0k05b4ygJRHLvj35neMXojlxfF%2B79eVjXDaP59%2Fi%2BwNph73NgJxK2b6F%2Bs4IVINi9WrzN%2B7wd6iTUJI%2FFXlTuQEsxi5gBOasw4cDD%2FuuPEBjqkAcUre2VOVni0uyvPs7SAVWdDHfI2pFqV5ZZW1Ow0%2FzJzrAkcRQWkmWt5QWjbLZVxpDIzAxSJLffBtp2Us08UbCD6L3wDt7bs0z%2BCuOQ4vpWyqrOikjQjG8cXAMMgkQbQR4T3OflziqHR%2Fr%2FHso2teKgSx3VbLAYbSOLcwFRlnR9jDuJSzJRtrLa52VY%2FBDAlNvBMvdgWfbj67AGwqOrDfPOINjjN&X-Amz-Signature=b6dcc147f3e9b51ab0eb862031cb02c8bf240eae756aae72b7c2098b56027e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
