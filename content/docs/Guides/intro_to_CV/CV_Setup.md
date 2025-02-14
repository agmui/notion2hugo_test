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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3UCWQYL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEwy%2FfYwGj6veRAKhewdMMNwtrl%2FLHW79oHzwXOLweDMAiEAqTHHadMh6%2F7PDcEm9uL5qcfT1XFmAOX69iH7YarsSGQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKu8oLLmpFidlp7vdyrcA1e6QVFkJPMzX7gDRaDOv9WwaLW9CsTeSyyOF9e6OYXgltKEeYqocrLZF7k%2BKQS0PrXazaWpn3CzAZmXBXdA%2FU3c9ZoVvS0WPKZZ9VaajOkmLQbuXSVz5IFaWWwAE4pTNWG9NDcwoRmIjQK1AV4wAQRWWtXsbh6A4mARg05uAS9kPGmVACL%2BQhljTUM%2BVOoK7OChpm3OP1P1VAXh2l18tvSOwG0tOwy490S66pv1Trk70Kb2hsDgYDX%2F1tb%2FZq3%2FyJJ4c6GyyuqO5NP7hi9SnNbnf26WuW87YjCFgMADQmD62cCDMh0XGUGDhs0IsLdDvjIHQODH6FO9CtSJ0Wp4sDfZFzj8xcPC79kps1Oe4W6qMTbIMvMgwUlr8CKYUfW4Dbt3DB5TCEdTawtgpyfen7gNAbvhtIgV6t%2B9yvhg4JtLvC97Bkg%2F2VhvYZKf76g0gy2dk53KPrmES%2FFf%2Bpi7LPph6YUwd9BlCh%2FNmf43yIZdiPkx5eB2yv4e6S9N2i%2Bwv%2B7lA%2BrM%2FdE4kxMuJHAMmfN%2BrQXcWQmVw4MRHpxhAF1Ye4GqLelFrNhJyO9fRsPJYKnhOu1g7yNWBlodHuZzCAfVpjBdSfog%2Bp3dEeaPqfZBBhtg%2F8KqoNlM4Q%2BjMOSxvL0GOqUBtG3LV5k%2BSpSvAQdrLzUraDI9Gnz6TS%2BgLk1QJozw0rxNF8T1FkYLAXwHdT%2FV3gmwq7P5tpytSwcIaM65FcOkUbD9dZ6QdFG4joKuisY5q9%2B%2BYO3cL3XEiGrKC0x7LDcu3%2BczcoP%2BHSkrYzM3PXc774cl0FutPr9E%2FQgJhOiNZ8Jv3QJ2KGOWomPJE4k%2BYA8R6nbsXZkxZD%2BDj%2Fy4HnevJ0nojA7I&X-Amz-Signature=567cbe029d218ddbb93fcd05e0d3e814459f00a4efbfd2d2f120429cf40c398a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYVYU2V2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGBgtOaaElrFU61DCWJvU0fVXJqGXFJt4K85vkXSNwvlAiEAp8sQj9pn4EdsehaMLmveqBC3TlQH%2BAIegJsLyqe9RWMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDENpcXjwDuHjkpA6%2FircA1Evxx8Q%2B7rs4llc51q2aJnzjF27lVtRGc5CZXx2bbHikX1IEBBafscOQE55hGYNjR00Gf3qzPlC10IOH73jD4%2Bf5tq7H1KD2PAiQwFAHlNNO9TLb453HYMeYxTuXE3e5y3wThfvSvzUDgtDfthWCNbeMUHzc6a1ThvVw7kmL9nMQkpZnE0RxofOV9UVvWCHcIRMJboDHWoQFo46dN0O1Cn6HZKKTb6KlJ%2F2pngfmArWLu9JRT1S0nk0BpFlPKhTcTlhgm%2Bqehze3vbmUexhCxMdCG3AeiZFHhGSYF0SywBHLV%2B5hpDUYkqZUyRdx6k1TqI%2BLZFQUyVBaZgQqWRLPt8tWL%2BPEnjzQqIPTsqb3j60nj%2FwsBVAoxh8OY4ZFO1tk%2BXlR680n49lkIzSye3%2BQTAd0RKeFrA3aCIutnvERISF8BmCzbYXn3aJvcl9vmrgxYkmgPt7mUOE4%2BZzvmnrRsNwFRpTzA%2FKlVM%2BwSlGm5aprHQvy4%2F9JydUDvvhv5zluWT6nfZTMHR5RnNyop1XkMpP0ruV2RGrhOZLuPEbqhqdkBl5w1BsRHpFujB9gjVuoM3qoks9E0n3tWEPYLUyWeCvhc4DDKwGxss9EpNh3NAU1FAVPCKorFl4BVLCMPSxvL0GOqUBFNyqF993NNnHcIWhx3SYEdMKRebkKME%2F2U1%2Fw2XABpJlGh%2FmnpShWBDNPPmQQtewiBzUNzG9yMzsxCtAmCL1O35VTrhW%2B5euFozZ6qAozeqpghqu%2FqRNL4vIEPj3wjYLiqr%2B4KlJwRtjLGnrQp4d%2Bxc5aIqf7WSn8KM%2BePbpxKyxRcfCmvNSiBJsxuPEW3ZXTRqAp4TzN5j4tGXQRh%2BhI3t6OlbH&X-Amz-Signature=971e212ac5328218fadda319ee9e4da11193c9ed0667a09c21f288ac13e01074&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
