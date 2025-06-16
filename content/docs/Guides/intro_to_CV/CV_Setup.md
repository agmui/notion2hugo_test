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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUX5L5AF%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGFUKCdn%2FZ00mmAFvo4%2BG9nmju04Ih93n0of9u7bvX%2B%2FAiEAu8JaT9K%2B47a5j0pXCe6Hai3BbuTtxQ%2BvBt424%2Factssq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDO28Hdip6C9EEpHL3CrcA2FQaTIFGrDMANbNmLE1LzdGyM8HEC0Hkr9yfixqUW81JpxiJsPAEsu2jcfbh4DhjMarejMyveNRy7cELEagbJ8b4sNut8dv37g%2BdOOIW464XiBUlNWi6fX49Q1qGcoux8sPmHPbbtz%2BfwvOr%2BuNIA1nZ1JPgfYoFecXErd2bL%2BujXKlhgSZul%2BVtOd7QUPbR0qLZU1o%2BNWhk85uzG7LD29PvtOcrJzuvFeglR9l5o%2F%2FVAmyUlu%2BB9kFshrCOVAAT8DWHBLBnN7vJQY0gaABuFQ8lDSJu1wmcuDsNsGKv8Jo%2B2O3s9CqK%2Bm3rs8OMq4N30i33DWIK%2FjllDv1RxjfxWIO6jvFEbSbV0Gbl21aKlheOnL%2FSV2e5xhvcvixrLV85bW9GV6KtGJO8km2GZqWW%2Bdg16GoXeuvqEDazwRq9vjxpPBHky%2FZvrQIN3l0kIJYfnmxPjerxXlNTIsuPB35du%2B720Lrx6pN%2B1G2hWpArwtwPpMj%2Fr4o4eprE7hcxihO8tUDpJeL6H20sN7Cwgwz257mqF4hdVw54RaKa1YP7FJJ1r3VznN2vyH5q0YiM4NZQthl2%2FXHx0DD%2Fzf6n1w5qbCCUhpKJyuPuZHu7D6RXmMwk0eB52Y2CqixB7eCMNnjv8IGOqUB9V6TSR0nTlQuc3VOM1Aj%2FkbQXMm23MNM2OXcjDNSbhcurFq9a3303VUGk3MHMYacrjfo2hR2FBuMs8qBd03i2s2iYIqq8VdbJyUx4bu7%2FV%2BMDjTCA5Wvzx3eK82Fkn13AoPNmRRF7SlOHPrK7%2F9McK%2FSQDf5jdna%2BYwe9oQIKpEmXTCG29qmIxZyWD6Xk5nIarPSarI2oivpu5e3bCVTWwQ%2FOj8d&X-Amz-Signature=2a52acc8490d95577ba9ae7628883db8b53458785d52a66ecdc8dab09a19a98e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44MRET6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC%2BxmCc475ebyQWi63n6GRn%2BzLx%2B8RRMjRs%2BhBL7ELsrgIgYDHZkSpSftcQ3N5tLQ2Yb4lRZuo7DEqAUng57KBGiUkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBpHtMK5SsvPTYQgnSrcA2SkYGfeyXFZl1NTg1%2FnEw8JVJ7mbGGJPV2dcgFRA966uwX4hOM%2Bq8IesvxMmaKluGGHwOmn%2FKgnvzvrNuNdlOcTWVTbsfZ7cYFQ88swPkbrNo%2FKRAJDeUBLzY7RR5%2Bb0O1UfXQVPgHs6f2mBEqRRfoy%2F3fAREb%2FclrKj30YOr2yj4gehbDnXsCePWvTbu3KRaRgNfMI4IQz2Ut%2FvMQQ9LKtOszjDnGeYm84UzjcPQyD4yd0A6nST8rd1z2gm3vbNLx2n%2BLyXHV6hRXhljv1JJBjuyNoiws8FUcntpcK2Dp1gdx%2FnlYnptlIfxGsrtNidjISGdc8TsqCSeQQx3H3skoMWdCRVIB2xZNggFHz1t7Rmz9Et%2Bh4G2bOcnTc8nwp8YwuYRDqUc96UMLWDKfVZ%2BuXNWhjZz96TAs2LvRZdnL7X4iEwj9G4OP%2FxHoYPoqK0zwackbPRz2bQDkOPDHPfsD4m%2BmAq1FrA9z%2FoEVqrA4Wx88h5Gn2Bh8LoOOM5uDP683hwlkqyh2fV4NzhIWyNvbiUstIm7ZtACcOIylAYguKmbQUJMLj86HMTB9qZe1AfrGs9xtW2l9Z1nvVtf05vtVXeLxxzGQ5%2FkDrKlX1rU4PeZFtiFjiACzC9jTpML6DwMIGOqUBlElWqJe17GbIur2ymxfx6o1WVlE4UZpTuNqxRgiclZOeL5b%2BDXEsiderpmJBC28u8SS78bJ%2B5DSsV7zQVkOYbZRQHc6TMxtuMVHdz54D0n64kpOQvhGHviTCR4P3gKueQW34R4ZiQJJpRSnIN40iC4apAiYESCUl0MJ2CSl%2BHDFrhZ4D8cn7xcPWy%2Bn0aXm%2F3Jo9G8bIc2eT%2BjkM6k7nsdR%2B6kU%2B&X-Amz-Signature=c4070c223311df669583a220765e5bfbebece453a509aef21ac5a71386890a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
