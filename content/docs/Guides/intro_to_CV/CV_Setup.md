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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVH7EFI%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIEOI8mpzgsuJ8OCXxpJ4dJK7PYMwBdH2o8ypxj13G5wXAiBfJrHEPTWQz%2F1Utp5J%2BtTxVqzsOBE9RntsadYaLoQcgCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwNJgGn7xz%2BtBzgOKtwDOjwb0Mq1zUF4S%2FD4uQjLZ3hJdN8fkgPzU5Z4YnW4nlkc2G1qIFPT4DCiTv2hQP1DC%2BryNQ%2B3%2BTBBe9DYHRbhCB1INr85ascX1i8C%2BBVXT%2Fg5i1sonpnMRs1%2B0vwONOa4U7yEc7djJapp5oaKXFKGG3qqkD3N55ppcLLNU0bT2gFpZZB2tFChv4JpV0DVT4WyaZV60qHfxbI%2Bte6Mo%2B5XxF6JHvmcRfryt830FPXy%2BpK3nx7yQSegsBsXoBKWBFzDXkedv5uaxZ8akjomP7LagNB6f13cl%2BctmppGibCdt2hj6IEfORkr3VpMbBnLkebY1tVtEuan2PtOlvofHui0KRTTaWofaNvHS%2BWhGwXuPUW4GhTXLTjY%2BfStPeoXp8ss%2BOFdk6%2Bn%2BQAvynQ6bh%2Fp0W9qrRKo6ai6LrKbKoKGJb43lJw%2BkDX5gel3ewMRw2SHoCU9IINDa%2F8AqcZJ5L91ojGk78x%2F0hVeBLo3jJ0sUcNJeUXvSxVVYqe9%2BNGhhLtem6BdHaR5rSk1glug9wUx6594yFLS1bSjMqtliZKlZ%2BZpQF8aapV6X1WL8q8WFxjfdiX1yfOxVrWT3H1JJbplxTOo3Sp6g0CrOOITEbKO9%2Bxtr38LjfnkCckR1zww26OSwAY6pgHdvEnrtPrbenLxSmT2wMatwHw%2BNRBZ2Syq6FoRFk94SBd5qOi%2F0yAW3e8tWRp3cU%2BgCswrDAutazGiDhmLt13dwIVCaqRKF29tc0agWKH4wCUSTh4aNcbf0IlBCmw9rCF%2BKq7EbIuG14uQtQ3vA47595jmxji6q0n0vNHhOOeW5zPb%2BvPms2Q2eFMkZWnGGO61Dht%2BYLQSckpDbM7bLLP3ILrml2zB&X-Amz-Signature=319f4275d28a2e4e621c2fc2a1934d88b1825959e53ffcb5b2d00f97a55d73ac&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y7KEAU7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQC5tlJEgobCJmo5ll2EgpiEXrTkq2R%2B%2BthE%2BZM5MrJyGAIgZ4tQojOMFRpmbHqLSRfStgr4ySAVjtVlvO1WrcT3omEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdWqt78oKHuUJttxyrcA8%2FAOKv99yYzFnXF9hiqwcRiZWCfqXHY401Tnnc7aIiWq4MlGfJmGC4CWGhUS24aylbOi4fGqZ%2B4F%2BJAGw3KykKOXz2uTCu4TdwtycukQuw6Od4ZKxoREsv7XgXIySgn00ubzpMt9wED9q5IRcmMfsCkugvs6KOEnejAFEYWJQYd3yJJeBTo1zLbbHmcqvsGWGbn36gVqIRJpP9dBkTk%2Bike5%2BmrSnJrJfZ9IaLwbzvJ8sGkkVhrGu97W7hlBYSV3XvZiIiBteOKDXZeZ8SEEe%2FJu5ZiDzBmFvl5F0KM43PK8ntw5reih6KI5ekEL6%2BCJEwt5qADP553f15DKF7DAruoE4dZvvBiZjrE9TKdioNO0p1LfsfyvLcKSO%2FwPE12KBHuguEA0I3D7x%2FUCFPuSvxfeawaX9raV2BxfkggV59%2B2t4%2FGoC3BjLrFBoZ3utsmt8ntP0c7IOXk94ZqawJGWjXQB0VGAR7rKpy%2Ffl%2FJWlJwtw4JpP5HTGyUx6UZSXTA5BVMoVH%2FugJmAVu%2FOhjbe%2FmMFM6G6r1u8Wef%2BRB%2FFcBwMRig8OaDX7wvuHcqFOnv0d0lQy5CaSmrReh41ZFF7IxA6rp%2Fp6V3HMr%2F4IiEGSUSexSEYAH%2F9qYA85gMP6jksAGOqUB7pfJkSSRLNncO7Pe2jwD2Z2cOERY%2FPIrCtBdH1%2F6IfGhmyGxgyVlir1UnfdylDnC%2BdkjPMIoX5xPqCIyk9rf62Qu0zDw3lklAd6r%2BAcHyStAtrv3YWpcj3iM3il8L0GUt1hsFuBRGGaUwqcnpfHEzQ8eEwO04xG%2FH3d6vcn8dihnSLWiONHAIwmkp7ER1W6VBqXQjyZVdPldOrWK0WOEP4AJgFlD&X-Amz-Signature=49c6479cbed071a777d774628407e6fa06b2e2fb7b845410660c025beacc8391&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
