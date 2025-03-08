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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XHKLGX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICC6jmaTJwHhQJFl%2B0wp692Pl7Y4GZBCoc3L58kEJzTTAiEA%2F3s%2BXGSuUxYPrFZdF363S2Ayzl30ThWu937%2Fw7CFuzEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNTAltNUp62eqeICDCrcA1uMamFA1NcGBUiHAmaPzudLJZFQh20fbY3Q5Om7%2FeSUxYsQ8LNotjb4h7%2FC8tx2h0qUUHGpiKZ%2FiP5oWemFum7YTUodK4YvYocq2eprELI%2BAQ2RTgr%2Fgl8rlEIEz8QYbFsI26uzsbcmbPrQK%2FxKDOlJH4ilAyt4Ozl1okXGho26b5eQlRSHe6E5WGyLy9fR3fsaoUFsHOXkaemMUhZZu%2BNUq2y%2F61FalYk6H2RP3%2BFNZGpLKNX5LZqqj6LK%2BSopJCzYw2gnZYc9J9td5ubf3g6Tyhv4lHom%2B0gFuT8Cp1hc1p9pVUN%2BbBiQ3sNeFpsVgadf2NTvtv3CFGuaWqBPxTu9G%2B1b3T%2F0tx3g7EEQdj1lYWlL6B9WnYN4NDmUrH%2BAQxxOoy3BNt0CE5Jx7QzDXvMsVFdheVpDuMzx0JMxWRndYquQYJtmLnWEKzaXWc7sMz3JwJ2%2FITGHi6lGN82L9ioME02iFYPrH5rF%2BFlVgCScT2qzYlpDxgPbhtc%2B03Vubou6iqxrWtfRxK7mRILxRpLeI9vUecp7PST6n2GPzB11VMgqAzKQHY1g8zezj3Fmy33XGRqAHI9BdNrpnFmghJoU4C2lTo9VmFi%2BbxIqWuSfPjVrJHU9qv8MBGi5MNPzsr4GOqUB%2FcSQQjbyvD5%2BlpfJpRQiIEHOknWOKjb5BCtVxLwwLYQSN3SM1WlbK%2BuTCEHnjDwBDg7Fk0UQryI6z9L7lWdEf3YeQZ6lcY0L76O%2BfyVxQ1dyH%2BSuHa%2BrnLH1O3aLwAEPmGF4ZU4aUQ3x2AWtz81nyZE7a%2B26rUlva6laiVzwpZzYAB%2BbzQbpMihDHX5QKcShlIZBI3ZhfPLxfArgR3qf0S7GjHYO&X-Amz-Signature=c422ae8d4de964f378d189bd261954b05c31938c7495f9f8de39217a3c9cdf38&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY666R2N%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T230142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIB%2Bvcq5c1Y0msJRTLdcBmRsU14Lo91SNkfaG7QB%2FEBGfAiA9CJ1zFJiSec9nGsOIc4PAUOr9nsGtnmxNKBo4ilCQiyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMSN9wDkJrsE3yVBo5KtwDf06q9zvrN%2FYXGK3hx74SU4fsLaAARhcP%2F22cK3LNgCt5CB5Sv07fle1Pu0p%2BcQC6f%2FPeiE486A6a0muGF7BE0KS0JGST4dH6lNgNGN%2FeoV24FlKIpeYlZSHETu8JnmqT9kQxQ7u5X1f4xOvh4H9%2FCnzZiJYSrHVrVNwRIR4ZGFxzESQw4l5PWe7dRM4cZbwCPL0kXBN%2BXqJide4CTUj7w1Lbhyih8Tv3e%2BlJDZDRo6noiFjkA3KKiIW1Z%2FIRHZ6%2BVYo8mcXN27pW%2FTyweWazbqJveMq0fljJwAWX46D7aslEzbs5Q36SYeT0oPLZ46%2F1LQLaNCD0wPQe3TOhjuPF6uRuLRyxw60RfEgaXbZ5WOMjiqd86tMMGQawBMI1JrwmkeimJJwrtPwDt0nBMptzsBNz606R5R3hgYEibTur4PpYEb5kjdsXrbN5e8C7DPnZW9ssRVTuYwEYm7J1VItyc%2FGc4CdePfYGyAj5C0yADsL52GrYW%2FB%2B2UUMdmQymatXGC3oOuP51nTMeDAyGLUS2Qugl0h2qvKAeLmYkMX4jikMsNJUh9T1BI%2BDcQ1CbS09C%2FgWlPUQSap2yVrz%2Bm63urRzFBSkq19xmEaMHr0cQ3RZDCUfIMmhbVcStIEw6PKyvgY6pgFC0rfrDJ8%2FykLvf8JjuFyYobeBsxK6aP%2Fo6HkzHZRbjAjZrgDmfkCbIyiwJM9uglqmduLrpoEXV1kad9Ua%2BACwYRfDwd8ejqESXRPFtfxe6StkwIFr1P%2BYyg4XLMNWI26sewXG7YZI%2F53O8b1LbasK0wDT63%2FcrVeTkUwa7Lm8THqfwoL79OlkeDd%2BuCxihV%2FlC9KMCCEkFTGU%2FBVE3nA4oPx6grLt&X-Amz-Signature=c08670ddd41ce85da84064c10dd965a85de042901045103df7a54a9ef729d421&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
