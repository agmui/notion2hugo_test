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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN5L7VBL%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHW%2Fn%2BaRmf4DyVp8UITkCEW5WunU%2FqbhsPOp6%2FryiJ2PAiEAggH1a8IhDB%2FCwUCAduUolNfLks21gimZZfnDWtjDK9wqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGeSn50gd8MlkVm%2FircA9rPMDFQ1gtheaZpacJhv3%2F4a%2BUj6JdHTq3gpwoIBaTIdNrGAYxdRxmAAzqLLQHpG0mmeSOOWt1BzrDvxCuS6i8Jff5cYTKwG3sB9x%2FcgK99FnokZ627gMK5KW5SO36JrLlNMlrxyBaGGBlpCy2J64wXETBEftoN1J%2FoY7Zl6gzInbnmiYuHuDhI8Nw17gmELXuudFzh157YsupAvL5iPNXsFT5Ykk7BuOuhRdD%2BtXhUutGQabLQd95HGR6rqOw9Kv3DqtDIfZas4BX9ZyxIlLtzdEj65ROrv7LcIbbHqBDG7tC3oirpdbHeY0Xrek93J3oZYoygPItdCYewjNMwWKVpZTi8Zd8mHC2SDGq%2B30ToZIq%2FNm%2FRxjM%2BtotrgEb1Xe3rfp5y2lOf2w%2FPvQPeMKg9mcKBVmY%2Fc02bwyOsJgxwwemuwv0xkUSryp73k8NN7DK2j0AcsK5dc1BtTT4hPs9DnfphAJm3WwmXNptTkcO5qWA9GEVswKQYMgK%2BIrX2GWKaG6TF4%2FZZlfj9raQ8i11Hh3VdbYGegt3537hDsAEoFMaHufB%2BctaJARjqFUn1Cmbq4ZlRUVcfUNr80aWAH6TO%2Bm9L9Z96kLxSKQtyjtdoD0R%2FOlR%2Bs7aDjB8nMNmjqr8GOqUBr4Al%2BnAmkU6UW59PrF3c0tfVEcagJet0POtp4cBfiBgVc7K6mTD3MpV9Z1g%2FfMW9P0gtzKaVRsfjTPJoXNrnbhQTG5YAQ80FLuOs75LzYH0Izo1oyGBCvuBqneU%2BrCpoB%2FTkcc8f4n1OJOhO8%2BsF961Xz%2Fm4K%2FvYkgo62jK7QOlG949kUeSBLOhjd7FPUSZ0dl3AUALtrDTXL97rsVM6Aul3v0Tn&X-Amz-Signature=77b04bf55e0a12b54ba3c4479ca91df4cb9c816bbcf0b865581a142b51a2ada0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQRFMH5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGZr6%2Bru5FKyPUeLOP4Q6nLy8UzTF5Gza%2B1KKENt12f2AiEA%2ByXfOzgSucgJ7wIl0ppdQAlLpwyiqK34cTV3fBYV7YoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6WasOYgT9PacmgeCrcA38xG6ciNr85kULE9aMMjz%2FU%2FS3bKEJwXv7JLCfuxgn02cY400vqZz0J%2BSwBhz28mFRRgAKf8HRI56aHiBhol2w%2BPHJcDxbuSw1k%2Bfki4pt2jqfaTV%2BAco8wGEkEOc69ybzGtI8XFXmgBQAmfNSuHcPHw%2F4W3Rk0i99ZNhv1l6b7P67gnjsrT8pdsVLNG8AvLTm3xptbCpXVqBTzbU3rQw%2BtFQIcsY7gmbUYCkRF0kCBip4hhlzcdGM2sWWSplDaZCMYWApT1fUKNeIKlNh8ZpJSq3TY0JSLISSoHt6dnKyppgBWzPMX2T3dM7a2eX3zi2o%2F4Yjy1nfPnUbKel71mYqzfmpHRG6RgG3Oo19SZiBl0a9xYW3ydKtNrMMbIj2iJehmzieiVkUkYk08XKjHLJ9zslMIpYh%2FIVhag0C8nBMVftm08lp1MlDdvCldMCpqv%2Bho1W0BfefaSuI0UeGhInNu7WWqNPrSPrxfHe0MRDi6hTBflF3CTli4WnpL1nGY2PWOLaxRjoA8JDKPpXBh5wXCHFYKGKTAsVjIyT85BnDOf4VtPyxEF4ZiGyaahCJZHf1hYEPVidp8BM0IveyK%2BplGmaTIgSM4B6H4s8EBzZGFedRZoEod4XaAT8O7MNeiqr8GOqUBLRsEkVTdP%2FTKRJ99qh9iM23jm3c5Mmac77SR%2B%2Fg8CTgnoReYdjoizP1OGTDTg1zgtAvjmMQ8hl6zGC8SHMPYf4rITbYsko6CNSg3jHuYhiV3VXXCCMQsjEXZ2E9gzUJ7%2F4CLk1CdS2S%2FTbPR1M%2FDTjWuHHijoRIbwITGhLWfoSkpHvKwP%2FUuc%2Bdxh6DgHeaUuhvqOMyjY8OdRDh7phTh7pSVEYEx&X-Amz-Signature=d86a65f21294b0c42c19a2d4f485a13ddfd55e5fae9c239bab24a80cf9b21487&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
