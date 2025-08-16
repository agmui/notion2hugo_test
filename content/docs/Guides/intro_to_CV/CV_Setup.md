---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCSPO4T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDhAq2wiIAVzq0MqY5atpLkN3dzn2j%2Fo4n9Sf%2BaygDq0QIgJ3sVRAjzC%2BEgT1uZqichk11bWDOeXibD3T9WmeaSj34q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCzo9PeefBvLMZGI4SrcAy0SPV21AS5j9SP2xteJvpzuDt5PH0J3FXdXf1yjMelbcX1i7XDLuxSMkc%2F6jkDAXlBNjdsgR7sUS31B3z3PrdPLVP04WaxND2HNyw2Ys34QIwe4Gfl9VBJnl4d8%2Fmi0gbB7ErXBBIOSeuabxUvnJLDd84VSiPtaC1WUnYp6nBZcGxPOi7vGvsVYmdC9oM7eLiYyV3mMC4odggp2MT62gm5GGHdt5y8c%2BzLFBgG928d%2BYvyxSiTEAHm3nwFqNkgd4fk1gPztE%2B7TWCnzB0ZKVsAio1j6LiQJl7bLqNfI%2B6S1yOeVZN94mUGjHyZzaio%2Bq2OpqyRgNvTgmhDFzM3Cw2cuFzj7fP1vFMjf86rzfi7dP1isvVS%2BY2z972Se9Ot2RImP9%2BOAwviewqEWWhSGegl5Ik3yavZKBpAgPN0dFUqA166im8aSWuASVhMLBKHO1Y8YudLcahnHAtOQJBAb9kq%2FDgUvhdjCuZCDT7FnUmiuLxhLB%2Fz3Fo1C3BUJM6sQUE2OkUE4fCVGYY5ktr%2B509EU4UzJ3D0mAZ6X6vjZim6KtF%2FyazgBf6GDsxzJp0%2BHVQ4SpltOhPEpcgH31Gf5kURA3cSI4R2D14LAf1qeS1Y1FZz4VlEgSD7MgaSLMLOYgsUGOqUBkZowJwC5aaHrxirS3TiSl9rgCF40ZGluaqNpQhcklo3NPA4E09KT93LDbudUcJtT5YP5LS6zsMAECnCmSxcB%2B9N8WVL8CSMntIHAuANoShve5lQAkNaBORGEPUnV%2BVg9s5pl1Afr%2F7LHlEJy7zoRi%2FPKRnE6ZsKorFoi9Mk%2BQVXIbgmcAKrrf3qMOq9KD2Xu8w2NP85D1a%2BSZrv2kmz2TIDcAttl&X-Amz-Signature=5939fcf81724f318758592b47b19d3033dfc4476858e1cd2f270fe6e0093d045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Y2NNK7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC0iMs3eNNYrmMsmT5OrLQFqtpg9VNfdS7cE7ENDxMVNgIgSM9QtFqwpsRsNEmq0xpyqPpSiOq1doCIHNbNCWrh5i8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM9embIxpzWLd%2Fre%2FyrcA8nHLTNAuy7jivwVKSfqRZWfWBW%2FosmepLMlAz7zT46fV6acxukez6f7ZtO9dpP7FZdAtL3pe%2B6%2FzvMRrpEB30oG3Hnyskn5cgx4s3fF5fVTrEf%2Brzzym8Woa112UqtblK3zb5L480DXN7%2FGLwfqRoRk049kj1QZyfj4TEt2F98wpRO7p1h%2B4Dx%2Fq%2BVV6ZCAXQUKsNUbtBh3A%2BdOJrNluYv0qtxks2pPLU2W5zSO8RCa8%2Fje6yzfqHq8zz%2BDbxwfnsAO%2BxcAqDx%2FsffdoCaV28%2BQZqCtE11pTG2zJlMu81tpBBSNeJA9ItQt2EkcYUqt7vxPAwNOtRzNM2JnTgjhJGObYB3FH9xVcvDloTgKzmRDa%2BIVaVEtLgsLmfOTjhOfH%2Fzf9poJna8awLoqk5DW7wpKRGz2MwWKjwqdtNpI8lDLEu6GyiC3qEpIhO9Rhkg9PTWwJulAIRhdb24D2aG90ZBjHOa3gxyg9dDMCd2ZK8e3VwhLcCobVPnaHZr8tPpgEFbwuQMIb%2FFjttspUc89SB6d4VZti5XAHv46iejsAfQlg4Lh653iFo9K%2FT4uFehETsl8bgeZN0uhRIJmfEJydD%2B9eswUSjO4i6sHNf8JSOhrg5LJm8i%2FalPGvvcYMO2bgsUGOqUBrUi4hhcVwmKXvR5HBSuhZ%2BwQzQMCZbgAZAUGQ4eanD2tkH9UwXzQz%2Bv8WcMJUL%2B%2FdUpDO8skmfkn7Ebl1p6EVdAz5It%2FSZFQd2dEubTIvdcpaSn8v0RfUVPHqQjxiXL0xEIrNTB9PQngefZgF%2Bu9qW35WUTjj0auqtDVRDFG9QgCsPFCIwEllsDzYbPLYePO5NJaLkHThoNAb6BuJkKm4%2FTpdiTY&X-Amz-Signature=499bf014ed95ff10cf38df0beb4515f3d3ab0d2ebcd2799ef49699864c6bf3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
