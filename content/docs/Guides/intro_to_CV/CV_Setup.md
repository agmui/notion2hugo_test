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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWA7H7MU%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFtrVV94O7snu%2BOtfRE%2BJOp2og9cmgeqyAqeQowAj1FUAiBhdI1G20VIiwkubw6IT3vr3LTYQrxwP23u7V0Pl%2FbKRir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMYoeVAvK170mEptNAKtwDacc3xalfOfDUloYRg553fcqax5T0jtrNRV%2FhZctdRNo8BCuAsvXU%2FploqcC4NrlPNmOwdb75JyREvzEZxMhBI%2FSN%2F8XAWfQiJVUaa11kK4gWXCImXe2EBaTaeo7CPieCM8TUKqzscRd%2FQlgkdU7OvsmJrn%2FovxhxHMi%2BIQG4iFf9JGRA%2BOsWp%2F545UVJsKPS3xi1GyAdJdDPFM4REcqLZ7ZLa8BZmTM6ozJCaXSPJqKMoiY8nP8e5Ah0mHuQKN6%2BUoKx%2FgVuL9rgehbs6tGS416ASEP6BlfJSYvWaH7l43Y7kIT7eEWp%2BKP1nUm5ms13Ch2fSYJBrZwotf%2FW6dUOFEq1XWd%2Bv3EPkXq9CxbVsoTO8e6vCiabn95%2F14U8OdBF0BrWM%2B2ykca%2BErmvZ60O%2Bw%2FjANYfe0FG6x64D0UHRmKsqVG91SN7kCBaCo6BIrUgYLc6KS4C1k0C819NN5VXeBuZTj11shx9KD0mD7u4vchWfuhfN7U4841jaN%2F%2FyCANZ%2BCwll9XP622pfuVURzP9Ie2YP5U0zE8c2wxoOMqe69BlhycLfSADN4dN3ATIciqEk%2Bxi4SK%2Fx%2FMGvyYGrLbksk%2Bcb2Sc42jLfyoUScvH3Lp1QFjfeFTNPu2L8gwiuqDwgY6pgFZZQ%2BzWgslnhxp7D2GbIS5CJDZEuL0ebPTg3jYMXRmqyXbGt2v6iRcR1NzVPv6OM%2B0zi0xlfLsA%2BlgnsLZPwqMWP6mRZK68HQwk0YMt5tycxFTaXUtAvcEw%2FTq6ga1L%2Bq8HygNSTSt8Psa%2Fc3884%2FI1upvgWRo04rB6Gwq09pzUKfuo7UNvyidTsKnL%2F%2BmHcr8S0Nlot%2FsCRx6Fsr4c%2B1rZRZCrx0Z&X-Amz-Signature=dfa0ba7fa51cc4d57a98830106bdf19e520abdf4850b5db1b3f56481afdcc65b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STCCEDL6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCRP1IpFwd2YG379p%2FsyIH7QDAznVBeePf78e0e60JtVgIgMfbJTpty72yp4i5nYv1dWyPEwM67MM%2BVdDBiMWJkhJYq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDNFpXPvdBXPI918XxCrcAzTB7NY%2FE4%2ForZh5hgIke1cJFjq%2BFZB1zky6gQXfZGXfsYuopfH4p07g2dO4v7Hg7no7JJlVRie8juM%2F4sCYA1wvg5ZvwUcnlY1pWZJWRC%2F9c11dL%2BmVSR8E13C5vdfuLWOwsDeSCj860eKlsvRwaX9k183nXdG%2BuJn1ZMxtAsMeSADEhiuBcTsJV6FGB9Et1PzQ8h6QMwICAywjnVaz87ohPQDOhH%2FYUyYFK3SlRZwiSHLDiPAoDtuRP%2FMkWSn%2F13CfHFnjmNK%2FT6YzqZUOX6drAF4xvqrOwmv1JjAbFGxT30O0t3xmONBD6iLNuKFp6Ri9zkY47zn%2B0%2BUHiB5MWDRPPo4qFQGipESAOAVyT0b61elp8Xx9%2BeSH%2BjDV2%2BgEbptSfNl8zEiTl09xXhQqEE1cstWa4r2%2Bt2MxXWKQEM68edwbQO3Zme8qNxRSG694Qx10iaW6CVIx5RPDEGGslTYpejkWrBBD5Kjsgq2YaDjXZ4fj43M1cwg3bT2q8PSvCQbMTfnr4CJO3EegdePm5xVJ1mcgTx9axJK06io7wZs5ykP2Pq%2BwugcosuQMmVrtymIX0LrGlGwBKCydZHTdt5Lq07IcxtCpmbfDQCtmqGCdSujSxfq3PUqPhokyMIfqg8IGOqUB6s%2BT6zUgO0umrjJ1Z%2Bt%2FPhRvzwJ4aP%2FyTiNSyXphfNMCC9%2Bom1gLUh6EOQ681H9HZuGahEjrc7N%2FHYr1nwIQL91RijH5la8LUgKS3XXU5EIu9LoUXmlB6jLQUibyBXEyOYv2bCS%2FGFfO8aEVG6LO1KCrCq2MhXU0jrCE2rcylOcZaDnolXwlSNhWiyFSlOchom8f4KrMz%2FycTYh4UO5Tka2o%2FsIW&X-Amz-Signature=29ccbc08f128f22acc3577ae172d22cd007302c890742cd4bb94183e7d1132ae&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
