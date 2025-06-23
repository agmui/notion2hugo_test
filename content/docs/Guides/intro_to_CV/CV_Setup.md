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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZDHRAR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCpJUl7HyJef%2F2t9tFIXYnQ2H%2FqfZZLBxQ%2F0uJcn%2F%2FSPwIgMDYpuFcS5T27ufnfTeNrhP5FRRMyZ%2B2o9pPvgFioM6Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPcsv%2BfIQlo0bnGhNSrcA9NTyOsAKiCjWemeA0NdMjGkxd7p56Fb%2BiiutAsFBPO7%2F9LDvuOhvZXx5Dcq59ZMZMx4ejbRDcH8Rd2hhYYMD1p1XlTE5GDxB1hDHyGNbhq%2F219LW%2BhBj9PelCXxTepC%2F8AQfDX6qx2qXAbIlCcYTaHN8XI3xtOBsJMWDc04dR56XBeSguKCjw3Bgv9AStwgN1bpN%2FvKnzlpEjswMcpJG5lmTatNUqO%2FlP3Hz3NWMWdCRupF2Qa%2FqdH%2BllMYLkxym5UlRbWdy4HyKg9n%2F9dEHpISYwnaHtY0mjP4ip9hr%2BTzFJDCNQpoRJzcyqdqE6p9aZeoDAePK9a0EkqZlMjcVfCbRA2%2FPbN343pr9E9%2Bo8mTL2pSoCEYDCZ0tO%2BLD585Yg%2BMTeMEvjeR79lkNDfGspxzgf1FaPP5SzNSVe3VUyCOO6EGn5%2B0De0IEUFCmkMgLKBeBp%2BKxg%2FngvKGJ5LWpysZQKsulfU%2BSPI8Eefy9ezcFq9sMkmM%2B33n4fryzzCB7jGU0Xx9k8vy4KD3ivwR0t5ydRs0Jx7aBYa%2F8dM2sM0YQZl7imntER3LXVw1SajyD%2Fr1IpuV4p%2FRRcCM5I33Cmnu0%2FIjjOwO1b4aPdSB5nBOK1QD721BpNdzNZrHMIXt48IGOqUBVcnsoiOOPClREaTDwQTFeSiW2aMnXnqYJJl0f9z6JrU00f99OXs3gVH09ZgjkGAJAfvy%2BiUx9REEVKcEmRhdzJqQcYhOif4zIP7e8dOqlavqedkZ9VwCuTdIu%2FEZODp%2FxdsaRdAFfrnHsbdSyK2TxR99DA%2Fo5QvzSFTPd8PKID6yNmzP5xFPccXL0jfv1qxmqyD5lDeGrlamjP1XqV1NhKbquA%2BJ&X-Amz-Signature=dedead52acd056657a3421ca7690acc4682036270b23c6a636f36fed251bbedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JOIHFMV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQClwQ9pdZRXueUWWSN8qc9JWo4pp9PyYFhLkA%2FiB%2B0NJAIhAJiTDzyKVSwtaf5IHTzPbx4ep%2BRNdUmY7mzxo3%2BLZdpNKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhSwMwwPrWowwrrmQq3APE2fE7Bjw4U%2BhhUA2yKp%2BU2eTANs%2FW8mOKwiu%2Fv8Gjvg16VUNLdNprtkg%2FTFKhvUpyVrowWRKulUB0%2FB9Dern483AtOHpY2gihKtZopGU73s7566IUTZdbwl8PMfbCEKnB9ZOp1%2BJtp5YqK9MzyeQPPbBBcO0VKtjzT7SIq3hr7PCeFw53UC01p4N5xTCmfzEYePsDTJxDBt9QLXqcb09lyoj%2BApmjGaV03HQpjjGR6FNE7DzEFyin1jGEYBUpHQJLLVj7zWovtykmPjBxJxmxwcD2XokQEPdRjYaVrqVvO9FYBvlbuAyCOSUxOaab%2FNPZOlMih6ss3%2BemVouvq7LX0up7IjtlmmRYV22tE59R6fAk09On0jynDIdziRytwk%2F4tNTTSMap65ZwtPt7W0jSxdiyivdvWwo39AoH8tlrV112y7NG0khbEUPsTkCrEWvYhNRjsGAGi%2B8VnwTQUxcBXlthgRCpEuVg%2Fkfh9kCcW2DDMsdwdvXIonKe9q9FU%2FmVWRSJJDDr7QDHN5IMu8tzQ%2BB0BPMWEXox75OoFEuqa2USnwHKXaJnjepqQ7wxOzSMakvhshrI7Y2ojZR%2FPF%2Bm1G2wgnIFNVchgDvHNFCD15GEC2W6PvXVpWFzDTDPr%2BPCBjqkAUiT3WLKF8qnnb08afOb26WTXxQsNiD3%2BrfsXJIuQHOlfnQnGDWaF7mfDjzmq7cRWhbwkRE3Df%2Bzm8B10iR1kvy3SZdLobNg7xa4TEPHiZfQoswCAAWpxvJp1dXdUkPiqsLjzDOLaozXy1KwW8tRmmFtC2SIcMq6ckerC8O%2BSFyk%2BGQDwiSTLdPH5N09wZ8%2FeQHMcgKTckuY4cxGYtRKYNdn1rEW&X-Amz-Signature=4a3263f354baf200e4f619b1aa120e2a40f9c8e2c41b8ee30b8d8345b1af666b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
