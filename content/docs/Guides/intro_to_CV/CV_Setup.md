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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FWWSIN%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWd06cmARty0MdMeuzKmLHp%2FQe2Vs9yWefLGzMemtxBAiBTD%2Fy7zkSQdEcLIqIBDJvgdQiLVwfkSVQpoUBKvI7e3yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM3RGtc1bBzk3lVoPzKtwDap5ptmMGEhQ4%2F6tBSxMEBA6B7JUV0gas2tX0FZn0I5sJOkCci71HTsPV1QJpYf8LbvntEDGOsO55wHkps838nSdZRfBg%2BKEHD0DmytU%2FzdzF%2BhLSpNmMN7SGt6x8zvgX5mpGMyauZ22TWdDVdaHWFa%2FP6Nf1ALZcqQe5dk4KQNuljxRQxN3mWfsOvuuq6fklWR8aI%2FrMv6qF7eDHlG69o%2FXhuSiTr5h6tKxre12zI7LkBz%2F2fcU4WTWrwZ2zRxFqCYoG79ULikTi23I8jnHtgNzjr52%2Bhz6xMAslshlYgFycaySDt%2BdJFB4ISSa%2BL%2BETomGW6zMI6IAdInYXUFLcyGewLoc0gDCpxPR6BOlalaSMV9YTIF9GRahfpO%2BcQeojdPVYLEG9wwFj7BxCC8SAKAy68hLYBh%2BLNqaF1j4G%2BNMjhjXvugQjeWRkGgnhcLsJ785pHX9j1bnxjJXMMHLujNlMrntjWmt5XRiPYQpFPiOVcqzpOOpR3b7hiv0r0qAVKBTvmFZYMq9%2FrGis3nYyBFUAHwTqF0RaqxVDNsXgBc6dNNTxXXDxElr6ifjLroGi0oskkx99zYs%2FQvtmxWQH7bbwfjN80GQNOIQjGKZBJjedwnrj8NlMajS85Bgw5qTNwwY6pgFrQqalVRUqXByM6NE3i9iY1OyUIwGJnvZNKHpLwKUActOWa6rmnfq4HQDzPLT7fbR%2FCN2APiYVfYS4lvoFrX3l0wMgPl1wc7HUN5BEKHv9bvP2nzVxf5jEIH91eFa%2BgpfQv3KHydqBa4V0fOMsD4bvP0oFrTIw%2BESSdUTzVILqY6WPLA1aulVNbHsjhNah49hUDOFOVq18QnqQJrg5%2FfLca4B2IEpD&X-Amz-Signature=5480c5ecf333968b24cd627ca0c3a15a4cfdd8d862317bc9ca11ce387ed3c5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XHTEPWZ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN3Tg9O3f5%2BLGvGVJtcbrBf2L1OzD19xeFWu1dJ6leRQIgY%2BgRk9egZ3G%2FrU7F93Pe132iyjbvUPOfACDsDHugSjMqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJIBfYsmUsatieliOyrcAw8Wxw3FBgsnKReUlPLhhlAgXtbEnZGitSbFtYoaEHQUiyjBFTdv7d5i%2FQK93oVKTSLlFSLPpX09IDn7C5dkIzu8yoROc5sf12lpK7aTrCvs1bjPITNBncdytKA7l8zyozN5eZrSIFZPNHSDgVXQAKGxOxJjbaSyNPUh8flobeBmML3F9Yoaf%2Fm6FvtEGv0INAgxyRTHiVxEteRjVOQaEzwrq74BHm6BvIDE0cCnkrfa3WcBOpfw%2Bfv5vjnIPB1%2FJtVksyvAyqQs5x5hLQZikuXNaIrnHba8FqKEQTN6YTZJrWbGW7pN6Wrj8ZaeWQWj63uEG9J9KW4zHJiTwUt6uSbec5SG769iHPL%2BbzJDB27OE0IU0tIwRZz453oxtExqLkF2D59YBhGJishXCLs9cTcIZzbfwGJpmfzlB6NJ%2FX80w4F1FrAMEFJw5sIXdqEL8cG1JZdL4S6rl46uhCdkXhlg%2FLAJcsaWukNnjCyWCzvMEz7pO8AUIMoRgyEU2M4Vr8ft39QYuiBfZvHcq6ytJgUuraSBsJKolp%2BONEJywxz4Q9hYoJBd87HdprQNiDMO%2BXgpIt5HYLtbpa%2F6ttKVYbUG977Hl0UUk8kn5fEM7TLuHXiUKcdbO%2FlUGfUPMNGkzcMGOqUBfTasytx0Vqlj%2BW6FIXBnkgU74FS2TrBujYbhEJSvOLzdxM%2BUN5K%2FxZoc6r3JFDmMzP1WFsKfBmo4H7S%2BXPnYS3hv1Q2nY6GI2q3gMHBbNm%2FFm%2Bx4UAEvvPy%2Bppg0mn5LqEVmxjVij7ZXYsSZRXeeJMTXZ8a1Kx3r%2BRBqwsy8wToCUNLBGrc0GOkuLCuvPOQJ0jKizse0s7TVC5bVd1xp3LbjKWBr&X-Amz-Signature=cad156af4c102af2df5e30da683ceadaeee1bd2b9158478ccf22c1bdef2cc7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
