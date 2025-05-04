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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O7IGMJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHoC4CMpYOi0eu9E6kyuEhU5RrnZJZ%2BCHVaBDDDy8Wd9AiBA8GqihzT4rFpbXAo7iX9XmzwmkEsp4p%2FIwwRZKmW2liqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcSiVKdq4I3hj0rSKtwDPpBRM%2FkRfajhVR2DUCJT6%2FpvytXqdUHEI%2BI5o39FwVJqxG%2FghUB76oRWSJNvhoHa5nsJe58feXqbPPdUiX2xKo7L2x2u%2FP432GCwyxCUiBhnesm5NAbj20iRKAM7MajzcQHgB2usWfuTXpAFVUqpceRsrCDoEXzDv3UDlHv5mlGWdxJubT46b7erEm%2Fbg%2FbUck7JhqeBXa%2FwnGFPoMGKcSPicBm0DJ%2BhiGztMySQngWPvwOdxQqDssDPLpcl3skqQImgJs3UBDqELydeB5gY6mQjrJA6%2FSp9V%2BioUjt6fcZXf8Fp13Y3GVFNIHtHWLoJuntNkvda%2BhvEyRKFDJmzcN8ogPw5l9HdM5sg2XdyeU6qVt7gyiAB27OUCPC9140VsSkwJ5OJlaHZRpJsQgCHJzxEcWNZQjeBwFDNEKp55%2FXni2wWYZZLfMPuLHg5NXnoPi%2FeDPJOlfTNkq7UFRkXPFZYLxRJ%2BDSjLFPKCR3%2FDkl3x2KMe82LCpF%2BZGjDa8tR4pcuVZzL4C%2F84ZSHBSkVuKvQCYvaD8nr7Qn7Z2W%2FzkGyeJJU%2F37E%2FfLC3nTg8NDfl6JZ%2FoofWF00CfyGYFsmEYaPo5yICtZWPrM18yoUA4N1Pq0Up3Nyy21J%2F4swxOvbwAY6pgEckoihe0sJz2bsuZeNe%2BGCnysurGq726YumiIjVb9WKi5am%2FEA6wYZS%2FsE%2Fv6CUPqCYujoFzgG%2FiZPA1qGeX10JQG8TdP4ISkCQBN62qZOYlNVFsmRoZBrUzu7mKpR5S095Be8qn3%2BkByLW38PBf%2B9Bz4d9D930n17zJPoQOO552BUW19fQ9WFElr%2BUJ2pSPO3IJGQf6azMREfY4chGeFqzZgJTbdW&X-Amz-Signature=82478aef5187c4a794c78aaf3b8b856da6bd7581b8342da8a6bc19b5d31c75e3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAMB4IC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH1FKmtbg1DLmeWxxOdCyz%2F4ayFbudUweJCvqTfNDL8zAiBrROGNhs0LJJO3QsHX89UkFxd3xzC6ebBqWVJ%2B7VYRzCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1VlA%2BZygbQpPkcGlKtwDkHMNdQ3glnAHAK8qpCKaCOeHeWfB4ZZ2pSNIC36y3uqmaU1pizRN6oLIq%2BXWmnogarV7nS%2F6nrwTcx4jMrny5Kcl2d65amDGmlbumJcAm9jXUrTJgn0XS2DM8GAk6PCLbt2XLNualM0k%2FuLwu%2BW2s3ew39fNjuwNJzDxSboo3vydNMZbuqqgpYY3xWGCmtLj9HKwAExzF2yfIbqsN2ixWggYd7UktEmlRV0O3G44UqTRcBx%2BpX3zquHBM2OxJr%2FjMT5ikkFq%2B%2BMVNFv0FvwLykO4J7BES1AhLWsLri39SIaBf0fXlSzbVk9zs814KUTEkOTCxfNJ4BW5y2hD7c1hnTNf%2BlXdy8aG0drF4%2BscjDTmrWrFEtsbmKTXBdLWI6fwbV5cxYHxORKNxoP8BxZmeuBcQ7QNFYaqnjKXL0lyM5eWj0DfhXa6IjQywyv1ObUjdx9qkkes6jln%2F3utonTWEqZXWqpmfVAOGYNbY0WxDP8vmosuANaJHtrpGTBqm3GCrnwfoA3jysvyLNAFVe3XXiv7nd2aWuvnIEUy%2BTeYDbScjNtdlIiKPGgJR3NvMQwnpk6d%2BGyuhHZpU3gZE3Y0ETHi2TT5QRYBxAU7TDCcPayqZOp5%2BHAWK1LsKKQww%2BvbwAY6pgEIJildQ6nST0ZeY95r3%2BxNykJC%2BKXVPpllEXj9l%2Ban6G%2B%2FY1%2BtFcryOTkgl146o8QfSskg25Juo7eP981s2dDZs6OFnv6Nb5DsWy%2F%2F%2BsxR48PK1OpUeQTxdsMUo%2FJOWvk5pTyjHyyDD8OqivI0W2FNZwTHUNI5JEMlhrvIorocBH36HbiaWjvMDTk4XUVifrkxLy0KCLIFCDjhmyhIBn7Jzaq0X%2F3u&X-Amz-Signature=7e0061a393e11c5530bc80fa083d021dbcafecd14396af6953ed6973d274efc9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
