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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KRLIDX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfcPngAx0XwyaLUSXG3bJrapti2G25nkT06mxyXH03pQIgFXRxL8tc%2FZBYfqPIbhijcFWbvUm83K2fy9T3Yih%2BDTEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInNWmYn9Jj2Gf%2FPiSrcA%2BV38SlUc3XsX8%2FmFvyR2MExWfx202uhyYSx%2FvTOupEC4Ml6K%2Fire7OGEO63F2w91CV4q5c1xrFjxQ4s2ioRBkBkHt2KPYg1cxGWgyEEgR14ci%2Bva3TgGOWP9fvcOvlFgQxf%2Bg0ladKJRksJU9zXRGpDA18fgUU11gFZBukhk5afUmpI%2FH8o18IS7Czi3fs1YYzTqKtM99q6HDzFwQfN84AA6cUrcBBzPKzfEBNNS5Nr9dtDeBTEDSLr9aOzjidV2O38bR5VB9WuIi0C0n1QRNxOW6xW%2FgiA7MY%2FP95mJ8pmEXU4k5P7PcHeYa4lGMHRS7MYwmk5JwhXq9cKcK5ms55qFjIMINFEaSaGI4hJcCN6kXphnHM6YvuzpHw3x%2Flg3L4R4p07bBLeweW2jqsR%2FWOP9DXBP2zN4UJmqYNktIiDw30tBEeA40LxfRSCVgEMQUtk%2FOzIuddl4Ursmx51FL4bYh3UXt9rEY0xvdKxL7xakDyj6kHoJtrof7eJnbxQCjRL2fY5AIKSwec%2BNjVoWsI77x%2BbN5VCIKQTeQOywxi61hGStuvF356%2F1fo7Ezr3epIyKJoOOTfzSXfMce9JSi1mz3cvw7x5inCBDP2SK6BM1LhJ7sekd7yptGowMOy7gb0GOqUBpjxlyR6a%2B4MzhDx2EsQukAgUBwZ1BDJkdbMxuyo80Wbv88YbSgOrO8RcAGElAIEyixcWuBFSNRTLjpnnrGNhdJ4U1C1%2BGS70DXyLWBPs2RIvhVTdY2Eexx4SV96eCM97a36JpNclwGooYcSzbvysUpvffWULsKzVUcLBRjjVKxlfYm%2FkKK4VV01zhyl7Um7PsO9c4jVWXQ1px%2BIYy5PS%2BYyx99bW&X-Amz-Signature=0d65858699e137ac08e64adcf4a1704a158b9202a99801ac150b0d825d7657d5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVGJPAGL%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhitBjRcpWnpHWVUMD9eAhoQIdIBWObIRKuewMCmHECAiByLTCrpysZryVOeV0HasajuDkVFN4BuqwLZo1M%2Bp5FRSqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV4C%2FU%2BHrMzlaTBqRKtwD%2Fkm94ZUzksqmNLJfrhryKVQPKilZPW14RYX1wujf7p%2FZryPK0BeQ5pi2rGelNgBtzIpLRTdNrXhRvoqo%2FvWjeeR4DjiCU30R4Jclt2nfBu34AAgVYCU5JbysjWlhaEJ3EQ8uMySkaozeGmUeR37topGQkdkLxzz1EZsxbkss3VDbLkNVQpCTySJ5Za9BeQ0x5fRd2xfAgiA0MM5qJmg55IyxOQWloMLgcK0swDnSiJWs5%2BtYrJ4NhWMGciV0o7PvONRliNiuFzcl3gMAPEyTLRMxbGzxqAz1LrOvoW%2BG7EKrDMaRFtfMulxbjaRKMALHR5jaujqIC3aRewXhmpLD7LHIqrrosiZAqYVq2HMwyQHn68Uc%2FoN2jd5uFdl4U0yL71pB9t5hsCXF14zlFnbWFIqmdIar1f5RdYu%2FpHPC1GgRo8ZGNw5e%2BBYTPghpy1yX4vp1R3wmsBnbnFf7RMV4ktnDF8fDMmrQcNosQ9eafzrcBTSe0QbdZBToNWdY4Z%2FY79bzwMXRZcP7ZJepe156shPHcfbFfPpA8YhgMXdMPbWm4DHMA%2BOuNviRqQH6%2BAD%2BxK3SftH0a7LgM3JqWF27eDwmZ7%2FTQcL8M4PRuE5p99MRJCgTbzsfAnX4A2YwyruBvQY6pgGr%2BQCEKY7OsjJ7N2GWBh3MGUSYBcEXyUItQK2Ky4sEAcrCcE7M9qX25AESTvOF8bucvHdF8i0i58bcMVNQavcMN4zH5iIcAYJ%2FEMvJrNSErb7hg3e2doj7SLBDYP14%2F%2BRXl9%2FzSW7gBsEr4g824Pnx9pX7nxZUEqJPOc2SJPMzjfLXRITRJO28fgk8N5bJGqBwcfMIqDXzSfWw2avUOcS2%2Bvg4FNwq&X-Amz-Signature=e2752ab71d92a01e66577ed4cf35f5d8359aed06dc446eb1bb50d214c33abb79&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
