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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAMGMXL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIATYhW3NBN%2F2Tn6A6JGP1BzQ7L8tw%2F4wQ8XHMGPaeVloAiAOW4O65YLvgxTGFZBr4FGkeVe4C%2FdLcZ2usHlYkUKI1ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMyHdruDdiubPgbWZgKtwD4K%2FILaTFQj1EQcJSDpSDoWClPmM14uKNijsBsCdhHAIe600tYSRuYdBVaDD0q2B%2BaPPkFUiMdavNT0RckgdZpk0NxCCYZ98QmY7jclUF1sXI%2FzGpISG0h6K0dBoPuv8jqQo2B6vcF2QuPVau%2FrsiTvozjvifVN0NtA0%2BlrE6E4J%2B89elZ358UMBV53Sk9k7h9gfy%2FdhJMRGB2VXesmvrOjjbP0hR7ozAU%2BIkIUDGkxDVEqnFig3R4fiurIbghpzHwYtvT4JSC%2F0AiyhqdtJwOLw4XBJAp%2BtSOv6LRTChySOBsFyYqxdYDcnVNADJz5zQfk8rxh00wbcwgdg%2B5%2F%2FUoI%2Fq5a4HrBnhOzSz9mTAhkqOm8aZ8zYlSEFTyOIBXhzEseGqbIwOL0ryIIHfyM4DRL3fzRsqPv6D0Yw2SrixJ043HkzCYHfbgVE91Q5ORVt4tipCVgodN9aQAD15PGREPS3FJp87VmDTQZn96HiEi7ktATwxnYQaV3GP8Xktyj%2BQKFg6dsht%2BWtbtTrzzhNVcTNzYCiC8JH1dHSYaJO2VCuyY8LKyT9nLBV83Nd6jdwZT34JAW%2B7H0bafZBpdXrCFbBKcsXkL14ksZPEp%2BiLHRyeDRcuSsniBloqacUwrLLTwwY6pgF8YXaqVLOcSfywyCHO7Yr0JWvgqHTP%2Byth59V3Xh2O38ic0pGqpSvWXJ9ChKiK4QH7zwwjF4UNP645Kv7k05Me0LtpxzQ%2BDKdFAA2yYZQnhEcMLdYAIbm%2FQLV8pzhqSTn1hBaYFdb90kXfix%2BHypX7%2BUHN%2F%2B9LihrJgnsuEuQPewtvC7%2Fx8JI1tiqkNl8koCH0PDOp40SP33iEZpApxEiLoxc%2BzI9G&X-Amz-Signature=5a59b0fc77a9f2e293f1f3e4b909d4bb4d255dace1c49b1bf1050dbd3663f87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOPEIX2C%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFK2jDp3WgWmU1i1Qbo1ekVrrlNo6SZJC%2F304l3RxdHkAiEA5sWVCo8XY3OzjoMZ%2FpT0nxvv4WCd7i3vFz9SoNPo9Ysq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMcquveizzrHEZmdXCrcA7gAeoDSJTzZw4Z9QLtEmz9G5lvRHIVzJdu11VBYfh5OM0LFM%2B0ToTU6vBLmEKb64z1VHiEHPOxdEAzXMcrCGGPt1NfjUO3A0NVt15Udt7dKwsGr4eUvTqklNQWISPNMsHEqpoUfozvpI0jSj0Kpme3MP0kQx1FHnnFSB8V0J8xj5JL8FNTHEMO39YWz7dc9LttF%2BN7nzh3odbIJXIYfE81e3TuwV0d6AUgBBiRcaUiqJLBpcLs5%2BghQL5ziYFplU%2BESgAIt%2Bfw%2FsRZRWR22OvOgEWZ1xr5WuBQhmDSLP2hICEY71EBdni%2Bo3ylIjoCAn9V0MXY%2Fo9Ki6zQvHu4sFIlROrRiHu3QsFK6p7rrog5dFmtyubCXsITqXITdk739OlqXOYIZSgTNyfWg20mXZb8ejWHj7zAO49qMARGtPfJQR2phLierJNSCkfjjOH6YR4JGMc4RmWhVeZ3lG8%2Fp8nF6PDG%2FBlhWT2K6KdVJrIHpvtgpJhHfOIhUlGyIHQAjtbdY0VpNP91G3xjQD9HXVz9ZQstJjmxr5WPQ5LPytn%2BC5hEb3KsP4NE4yUlWXiAwuEVpfG2D5dko5%2FIP0WCDShZibxzX4tNILtXmL%2BolwULNPDCADo3UB4eKquPlMN2y08MGOqUB0OPXgzAI9RwaT7yQ3RQ8PB9VPYt35Jc1SDEzSvGICPNSE6N7EnKJ4Gvxl7GuhjSo2cyQv2K1L7%2FCX8K2c4Ir2x0HXuJzgjlhrDnj%2BCcVxhBlHc6G%2BePQUWdZXnOTBu4qVBUy3baFQgtjdyGDJQ0hmrUgKgcyz6nQ3o2BnNToRDM13ZMY2PRSNlNzFu4%2FNM7i1qjwRSDA1EtA49Y7u%2FpMm5iaJKnv&X-Amz-Signature=b1ea66d0f53817a4596359a60088b9aeffcdd0424d588ada6b606f20c4de9887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
