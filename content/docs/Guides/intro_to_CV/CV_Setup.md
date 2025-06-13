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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TKW4ZV%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAtGuwkG%2B3oSjuYXbW6RvOQ3%2F0TBCrOmHlu%2BTD9RMiQeAiEA2AMFhywK8qOdF13%2B2%2BGxX2rteOEwwBGPQtSovYE0YIkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDH0klhCci1G4UHlq4CrcA%2FK2mZXIndl6JOS15l76%2BKtEfcJfVu1nFRhfmp4JiKhl23Eb6iprYAAZCX6kMfsGdvTmHX%2FnO9M6O8OTDHRzYlDVqP1xDwUpJYJOp4JI1h0GYDkmMv9mQDiwXGsy04O%2Fc3dZBfQhFXQsAHux683c%2F1vu%2BsWyXl%2FyCJPc2hRXfCClny%2BrvMIo20N6obyBcsE42F%2FgT4FBXwzgae98arDApbH7rEp5XD6Jfnu35WAsVhkFl0L3XPKu8%2FxlYwhGRM3rtvlTsZh0fjdt1irRzBrRZBY2he%2BjyjOlXWeyp6bZJYOhyjds1QiYGSQNcuNkze21ND09yYAwjDUJqqcsi3jKPhCPqmhxifJ5%2F8LS%2FW0%2Br%2FsXJaIE9nr40skrkr8wg2D5%2F85JhSPe%2BNVeIKoBR%2FLJhpXBdtM6wWnrcBVkoXsDI1dKaP5iSYGRwKHLJccXny3F2IHgBfrxIwy%2BBzoLDkGRNfDH%2Byf5H1Q386R4OWvEj8eGrtGdeGQhcSdmm%2BOT8mEodahooA8er%2FtQVdchvgQ26Yda272IcQxfCmcxnX5vD3b0iNv%2Fkiqo3dd6PU67VsvkfgZfLC3U%2BgNZELTKedIL9H%2FKVz3j38lj%2BN5VR82ykVVABzBInba4bdm5IdlPMOCpsMIGOqUB95QvVFaMnK3ymu06iMDxcOTDv6Rbkstiza11XJNptXxo7Vwx8YPIQs21v2mMm80t7h71XrMbsOmGt8dwxEILO5JFx5WZKnL1lUfSFfc6QAOTxBVLF9OlhkWPM7enWl1IgM2WVBiTKfqTtQ4lAd5dfMsRoJusRbrv17eG7IDYS1aMv9pZmc16Rsj0xWM7jq1TDwMJdw2ZqrbGdf5LLng7OSRbLEcT&X-Amz-Signature=e16c2517b98a2feadd1903f6a11d3ac842a62abe41eb22b2a818483bceb6557f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHS6W7O%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCP8kHHTSA03%2Fp5mHuUujbX%2FtCHxViDhbO7%2BkZtgUly%2FwIhAOjmpZQhc%2Bm%2F3mbxxJ79L6QmTB%2F2J%2FX6fm5VY9J0zW4GKv8DCBUQABoMNjM3NDIzMTgzODA1IgxKCFo08YoVdJHKz%2FUq3AOa7fSWle%2FZ%2B%2F9SCSuSy33nh97uf4SxWiZ%2Bhz3UXJs2Z%2F9XCkMte6cdgK6JgCDpxLSk18U0SBQBiqR89DMQNclrv8kdablcm2ntdMpz6tU6mQh2tPIKT7JwJ8TfyHgTJKj9IY1GhxkZFeP6tkJSua8kKdt20vG4Wtgn%2B8Gl%2B9TbaPE%2B5rvjtjWDolnJq%2FXPdKdr09rbBcWwYu5KSCiDpyQxNoHndWVarss5A73oaliD%2BAP6kkY18SAE%2BdsbMPMEw%2FKCjrgcgLqpkEczoEY%2B3LQYsfPa67BPnwdexF66jhAe5KOuXm%2BSYSoiDyfpPycgLEPAiiVQ1nkHxkTe1dwOAFlHd2qddK01xZDqADnw6UgZ%2FmfFqw%2Ber1veHqY6WexXnCMQ1q8yN2z8vVxd5exrq7qc8DoWvBXl1A9lzfD%2B2CdCcqnCykFPYZXDMLzpqmmKPS16rmpAbBR4Akz7kHgqddCyDNNxD%2BYz4gBbcRfvCL9ViAkC3fBjbWpPuqxVcXVnx8qUjHvQoeI2Btt8pybBG%2FCrTgGURg7Z2OHYawnqnS7sGMghhf%2FcMmzndxeBg1p9zKwVYsvhgC69hXHV0FrdcfU0NDLOSrBmu%2BFYGxIlSuWI4y7sp6htQ7GnWNNyXjDEqbDCBjqkAV5R4Tm5ieplafyPFYGdUfPYnfDzZ9FXPlHq6%2FNUU40xZEg3BkO4FR%2BgKZ6Il%2BVEcPUm3R%2FwLQTW%2Bv7lz0M4j7mME%2BRsa3yqcUP4cLh8LyY96W2F72pfjY2Uuj8RdVOowX9qGUga9zN9tWUIM1TnEO2q5gXKGnMRGHY6o%2BTWEfXzng7%2FgXdQ8EeOgy%2BvfW5LCPX2nKgZZOJI4ypQGz%2FAk6eU0WOp&X-Amz-Signature=fb8391e3490f8c6117b64bf525e8eaa4d6c877dfdc476b39090993c065a83622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
