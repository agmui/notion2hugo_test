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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5N5BSBK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BUgWEEm2b812HEPGmqeWig%2BFnwfec5zZkGO9kb4seRAiB87Be3GiRnWTEoTdH4wRIGR2zelIPujAAIdBFh4AhGVyr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMDCYCs3n8T3%2FHfjPQKtwDsEH%2FYX8s3WqmCtNczx6lQkgIWpjSMhZjl1woz6ULMixf85gWOc6RPzVAWLuD%2FFCOpftUzuS0QHVdzn4%2FWeCfnDM7Er8zkd73JLjSb4EaqC8VwRwtt3FHWW6Frvin84lp7JIHL%2FlRqKv5FZ3TeOEQvl2jxr%2F4MKnP7zWK3GQDWDVQKnHv6pwNBMHFKI2T09Hu85CYnPlQgoKbZLGljrT6%2B6%2FcPrfJMxGZeLlMExq09ezfjbTEezfugGDUoiMa2UOiqW%2FZdYsvO6PR9VkDl%2FLy5ac2zzp7ELFg99g12m%2FURHvBkewFU%2FKPbaXZPqk7EhXc97pWkysJvtgk07kgUi14yFpbFkjHJtySyVTrYp8XCwf1YjPn9QqrEi7rZfkV0e%2BLtpQfpbJ5E%2FVE9QNKsDBC6Zt3gjPACu%2By0cgdaLajqWP6NtG2sXU8gNEWpuJXjDd6WroFYXfzV%2BKlVJOqfJXvov9D9kc3F1s3NQyq4QWJ3RvrAjQRnkneubrJ%2BP63xiO74Wlv7No8H8mbj%2BR%2F9qJxqtW%2FTZFm4WDDtDNDn7zKiAnpyrH1ltjmd0CI21huuYXjKMAjhHbbPtHvdgalnLc50jJeXHC%2BFunziIV1E52dEx0reeVSrou%2FhCv8EV0wwOrZvgY6pgEEV7ZakCP0s3sKuQOQDfycXDMJgpnbhpyJmrO28%2FH3NfXxeNch0jh%2BgdbvnX4NwSFMLuwSy2nruUt0kuO2cSTuTiOV%2B6%2BaowyiexAfymCGWNhT9a09NpSutJ98ENYKVF3bv2R9kCvjXlZ7vMmRef5so957WtR4E41jVBdP2GpIOnUwB6LOSa9BuFjMk72kuEZLTwlmL5hm%2BDd1dZedTxc%2FD554cvPN&X-Amz-Signature=8b26e75b928bf25e86a78de36ca868a72aeb71c3751c5460e1b0d7aab9d1b302&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVJTB4R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE67Ac6PO7Pl2SYkckScTrppt5j%2B7HGESRxDNZA3YZDrAiBf9cfERZKKQQ7%2BnMGMkwewBTjYWGj8%2FB%2FuUzbCwhaFOSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMAtm8N4qgGgq%2BKgAkKtwDCnGmKVRkcE2UIMJ0EK2fARLAODeskrXoQ841JEcpTd96835kJzWiS%2FkCIpguFVdraDHud3K%2BhSDKJN6kPjjSgnYtkApES5yXH%2FOgzSSi4yB7JWFFfecE%2FGFGvBd9QrVmVRG6im9qrW5mBaNzOMZ7QkCycU4zCRwE2MnsLHlEN7vKg896mD6t%2B2xY5FAw3J0pV%2BrC6qu28%2BzkkoQEL15Pas%2FlufMH9G3eI9%2BsOd2nPxWU6mmp32S%2BWlA3JfKB76tUBSFEv%2FwiuCOzOTviX3iqLYJX4F01jVSUhsiwq1eMHMi3mB3gSGGHWTlYazj0jk45OKxrEFFQB3MJIfD4wWNWq4RI6YRNC6y0MnE%2FKomMNzjmBreOZzhiARqwAMaSpJq2R4IzUVcohO0d%2BmC0I%2BcsyM4oWrnXfeEVE%2F52C4TuILxmd61G55HYJcgwUn%2FwqlepqCYP%2B29aP2iYT0miPv%2FBaSWojLli4P2nmFeZ9MQF73DlXyHsGF2QRm6j9IVviXVKHVsFLlXmA9rYKa2MKb0%2B8xcawypSx%2BY9wpVGHXW03tZJ%2F8zqIgus3tjbdlUumFOnpIAnXwf8VJ6nfYE0lomNoGjO5ZOuykI%2FrK4V17JO%2F%2BfwTlPlmRSfy8j5%2FdkwxerZvgY6pgGpPbrCOvY6BJZJL%2BlHfvSZmhlPJ7HerucBkc40aQWL%2Bo3trBuTgVp0ph8ji%2ByQcgjUhqs8qCBf7RowwBcZ9biGruwiURs2GgzuB1d3GIS%2FGwjiA9P7WGrFLGRpdt02LuABts8v%2BvCmK50nbuJLMDPIEivXOdXY7pBaae5OkdiBn5hU%2FwpjbcYIvSbdtxd7jNqDrY%2BkDWGOqvLhXo7RBTYu4I6h90Tn&X-Amz-Signature=6d5fb7e63084729d2937cac97cd2afb826ef0411a6f0d62bf162b562677a0ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
