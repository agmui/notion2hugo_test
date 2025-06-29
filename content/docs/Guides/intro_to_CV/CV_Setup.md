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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TULMEQQV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIMftH7IaGwBw9Da3WB%2BdDQUStVjc92po4zwFvFeUmkgIhAPboDW1DbGaDdOz7Z8tIFHxGmX7U2XBkw8fdogK0fQjIKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZRTLP8wiKAw4UtYYq3AOEl%2BhQWimY70NdqKcIPyLjyTMNRKG5wKS2UJwt0BXyvjodvfAap9JbeSxfIWzuIFg0E%2FMVJQ57qF1qp49jT5UeQpUeQebHX8XQEGzUBGhAN%2BxlMzV0sImEdOJoXTypBMbuBKgPJXKWwQA7CNNBckxoXv95d3uhy0LkBh777x0VMmOQNAA6g%2Fi5IxkZ7VqLBkk58vnYfIxkkrsdgr%2FnIPCve2apG5pgW%2FhvPcrYBNkV3s2RyJRRKAXf3CmkPZUEw1xMK1H4R3QrMjgQEcG06nI0xqoud7CZSV2yfnGZPSfPrGd7RReLqRXGtUQNzAYXGFWpOHqE2MltgHDqgd3WzMETSg%2BIjl5%2Be1D4N6%2FBtjvRqTUBaIvuT9mzN5C87MSoMa%2BDG9Si5czwTEUYl2nc3XOnC%2BZv2ApB0Q6cAPj4wlSUU0PtHvq4tlfp8a7fS3BRLgZzncIkpcVcxt3kIqmaHEMAbLjx5zG%2Fu2O5zlMSVXFyF6RCZ3vC4OzodC0PWbX14YM5a4aF3gkr3ucYuH4ps2hJEDkbAx3RHJWMjWdPi9QfVJJuWuRzT0LiI435tFU4MBYhEUIULjZHYfRr5I3LBcmg3zv%2BkzTeqv07KCRLz5C3trU9PTkuCfDRI4LbADDFjYHDBjqkAcUZYJE9PBp3LY1kCSB5i2PQt3Vs1sUMwfDfRa8pzkL%2Fe%2F%2Fq7Pr0SmbUrVvxVSdHGghFpALrUUGeGsv%2BYIMDk13kPK9kWhsnb09ZGe%2BQNZ6OEdz4guOoG2qFg1tpo914QHwKltiR5euwd7%2Fi0R6lpZAhysuMeYPj2KDoKYOdaH39MXR6aORgRNMAhpnLA0Ug%2BRl5dgD67NQPwh1QAYE1yrQPTpSa&X-Amz-Signature=87b06ec6d14e899c890c91d84e207b15fa059fdea87ea8c37b780207dc37b525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPI2CZU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T004936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvqlrKdhYsnAPOIhs34YcoUAk%2FUCsPelFYY%2B%2BeXFl7CAIgRJfUqxbrFLaqfdtFOAmULIDL4qxmCIXejFdi87IapbwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU9qv6yTx2BVqLT1CrcA%2BcGm6bsMbdARrp%2FVrahRI1icsIo8CLPJof4NAa8nvWFo0w8p%2BpT9vtRgMIxl%2FXRwHH7lZItd78ToJjWofMnOMqmOKpBkUtj3uQqfbIvF6ZPn9nLU7ngpdSerr1pOtvsYMLh%2FloDhqF7OQp%2FX%2BvlU2IvbTj6%2FnE305Fla12ZvFiOrqTKvCtgvXACHpjUm5sdfkdJfUM5lnOQswHo4RM0VhtnAhptaZRoFCwBgU5RZJAKn1K5ti1ep2wbxzwaGy%2F5A6YZk5hz1QTR%2Fy%2FelxU1GC8EZJOgdyRuKfnCPJhMaGYCBgili3oytl5R%2B4cnwTmMdew9SRRfbu99huFxJJV5136X6muDQBtn6sGLmh%2Bhk61ix91BpoY6dFCqOHWqIq26bh2VCWEwTqvgmDVc2W2TNeioe%2BCTez4lX%2B%2BFjos9K0MN3sJu81WRhnh%2FUT2erDIG3rTviCWyFmvFuuHyvEe1Tmms9ZjHw%2FLWrStBchyOM7Kp3J38uEYICJjPSlF6uTbBEE%2B1S2GsRCm8ULJIyBppIwCWdLPeug7zUUrxTCU0w5TY12pHQQhOW%2Bd1pEWL9fvgW1Ojmmd7k7LJtB721tOjmiFPMkRvx338QHHIZ8YEPo%2BkYCL42%2B98WeCk5FF5MKeYgsMGOqUBIdTjFkyQksfD%2F9tOt3LM4uNy5SoxaTVklxJuwees%2F6y8dYX9S1TNsDGCq77y68i1dAt1mE%2BOayCozvquslfX%2BzESLEqOpwSmDJM7oViuDW8v0PB1UUjJSoCYfUNmMo1m%2FlxkptjqtwAUzZOZifa634IcPye9V6aMDV1O3krAkXtAAiCtt3fj%2F0Y1%2FnVaPK8p0y%2Bg0pfq4WlH4j2GU5V%2FiLlOaZ7J&X-Amz-Signature=43d7112bca340cf4974a524483854d0aa25450c1b6b5bcd8d4df6f019e090a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
