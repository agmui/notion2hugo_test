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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L6Q2MYE%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAQ%2B9DEGSMvzN3xrv19wR6TwRvJgK8gO3ZBcTeIeTjQZAiEA3aXEtdkr8wqgtK1czcPduG1sV2Ro9LpVdZmHYPwHKo0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLiiOnmIXQZP1yRoHSrcA1KINgAKIJAcWBi6v6qaCPjwV4MueorSO6S1dZIOOc1T5yL1fFj6LAQBiFRkOKdi%2FLyiatmaPCHzxCUaAkCHFsCpRFvREJcBf4JJLqLgsAK7Rzj15bkTNfeEX4mwbhY0nJoLelNnmQo67u2SVeXI%2B9upnSyXH%2FCpIjk5no2ljqWx2ToTbF2NA6pLNU4V%2BEF%2F%2FfgSMqlruq1h4OPAKIKiAMLfVd7QhfL1jM61IVDrQBVddRy9cRl0FdGbXkqguNjLkMXdXSobP4c%2FKJkxosUje6VSnGrVsIjJ59CyqapPRk1x4sYfct%2FhABNPumMOC02N8rxp2mLN6zapjIxnPPA5UnxQaYkopVx22MKY9uanqX%2BBeRlzjKM1Qa1LDSlE3P6hEK%2FsGZ0jdjwlXIK6bTNSz8IOmCfIShfY33u6Trk8C5RxMDMH1rfUJ22lIQ1CPs0el39bYbzgrJZn78Dw5EifuC3yAco%2FiYCQKQWXk45VHHmK3pwd0M54LBOrZZP73UcSO1Gsf6gFZWbc0n4eKkEm8S9Go6%2Biygo2GPRfeVRWuA2ErLx%2Ba%2FBMpMaJ%2BP6s5%2BZwLs%2FE%2Fzdk298F83AAzHwM3NIxCXUodF90q4%2FEHlDvvHV%2BHyxlp3XaT1C4DQQ9MPC%2BoMMGOqUBma5KhXDdBcQVJT0Il3y%2F4YLhjp4A0MpQXAIHJZTS3nU5CyAkS8Ecxd00slt2gLTZaQL86nN6zJRnqlA6D%2F%2B%2BKxXcwzTvTyfAD2aXjDBdHf9aHqKpso%2BNt4EDoNHgLgA9jQyH8C4%2Fh99t22IE9e42510C7UDlWopxvktinQ5bm2xZCeOtYCgu%2BpOvSzU8%2Bkw2oQ5%2BjwmVh%2BWVs8UNQd3o5Zzur4%2Fl&X-Amz-Signature=b2f00a83e060331c4be2593b807fd71944f242d8b40aedf8814e7c3dceeb3deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QELV45OX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIQDAUP229NZctC%2F0mgMrMZ3rPBRNNNHkWiCYBeZt5IDM8wIfFG2qsd2jhkSDDsFs6SNMT%2BxlLfKLjNsZ%2F7JUAodKoyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMRJQTO3dc5xUvtVhxKtwD4%2FAj62gQdOrkNW4hM%2F%2FiLd8WK3tsfArUAzi2VRljhw%2BPSDA6CX8I0jh2S2Eft2gj6PHwu%2F%2Fo4zhwdfQ7ePgIoaX0et8pXD6cIz%2FKnvtYACHFTn2i5ya4dR1jlrtVscoWn2lFwiem62qaiIe1GCMbNVdgeE5PLaG3symq2NpT4tkSCV7mPFCZUZZ8Uv8eav7MY966D9yNwsyw%2B0lug0%2BLbs4E497MgpwPNSFJinjR4JL7BeK%2F8hM%2FgYaNmIUaqbbpKtm1K8R3vAT7XjaYGgfXm2Ag2IdPUY6TS3JEGC2zuB%2BFWl0dCwPpyipRd%2FoKaR5w%2FeX3RXxYP4Psu%2Box1VO%2FAzrQehdu1%2FDAxEZRZqv3IyBpzjRhxdFo%2B%2FcizFWMAe7%2Bi3hprn0fOw5L36LiNshw%2FpFJN%2FaheAgB52rEjBDz27YmuoOhQOirRKz%2FDOpiIHrAP1%2BGVOTtf4xB37wLCm1l1BOi2H2U2pCHaQS7KKuA0%2BzehlNXudyNueDoLeizNI2ih5toMQcRaYb%2FCNpbca9l7Oy9ZRsgIwBf0s6gspLI2b31B78dbevKG1r61aF1%2B3DHTgYdEogSCP9G9fjwhwYbJodDv4mgj1w1l%2BK%2FLhrwi9e0%2F%2ByURitFL2kdx7swnr%2BgwwY6pgFo6LeO5rFi8VJtiYSZ33mVR1do26ZykpxpSFgr0rFLRpg4vWnBX0zTXRVzeMMlUEjHUbNa3oV6%2FeEYZdZAGr2oHXSnBFQmeQ87rczXDKeblPsqlLQ83bP4opoJ%2FUAtvvtRVUyKLD%2F7CrIDpJWrcNrRNBXmix4k6JRzeTxYhb5ryVri6UqewxV1lBKoAqOpEWUwNM2YBCf3kG%2FlGXbBbMrc6MVKpQuY&X-Amz-Signature=9065cd5e1ab752e097c2b660b4a54d5717b8a9df7e8becec2a16348e0b4b9753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
