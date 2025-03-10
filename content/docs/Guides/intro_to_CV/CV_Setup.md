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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LZC7EG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCo6qUsoqUlfyQHlBeUwMKT3CJsFCzzB3u9XXRbG%2FUMdgIgSzqLUPyZm74d99KaltncUKf%2FC5u36DvRL%2BcGTFzrGAkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeftv1%2BrQfnZ2o4hSrcAwcvJlFeRj0PnFWbariJdbWy2ZHMMe%2FDlbt%2BuVS2caE15aLiVmJQg4t0w8%2BtmBkRCZ9BQupcNQh1iyFnNuiMsBcHgN56%2B3GpYhEV1bBcVkaAQdoHqrNohxkZGrMR4VVhsOmIVljzwD%2BRD4ARCgp8pIElF8NbbpRmzc0he5Ye0Q3Kz6ZhOwCrta0C7LaKIIux9Rrf%2BSgDm4ybc2dmYQH8Zbz4uYCr9pwvkGb2g%2BCtC1I38iV4%2Bev6LM7SDaxP0R5Tp53t4CUnP0jK9orD%2BR2C5K0MOeq%2F3jX2TLzXDJz9070Xez9DB%2FdpEPS9dds2ZF%2F9ONLjNB0KsNfhNWTa4dH1obkJOh7BXUEUwG%2FrUzOhlI%2Bt3Oe423cclqDAeoX4aV27Qd%2B7iPfsASyWomvWp10HZRpHpd%2FmOgZ6v7FkCbIFqLLxODMfaDNaDHoiZvBTygaDEVSrfc4dyUorhLd1Fy3SdszK8JsCBQIoxoUrkfJEzaIZsKzEa8jrSNtMYADmJ0gnJ1wlmwhyyyia387vQk6SgFKGLqvLoDqne317bYg3nVZF%2FNjSE%2BKNGzSnrsUes4si%2FrHPG0pfq%2FaPfwTDu82QzMDWDB5sX8L0eozdsst%2Fr3DUEDqxyfWKlV%2BKA3hCMMTcuL4GOqUB4%2BzbS7Id1EdLjSSXxXm69TaGfQrQ7mi5ka4vSJrHUFqScamCBOzfZjD6qTuBV987bP0kkGtJTJ2UYPeFl5hyVcyQI1z2BDY5fSC6E91sKBklKQKI6x47ES%2Fu2bplr%2F8pBuHNyHwYaQZfV1OYWD1vBuYl%2F1%2FJUuKdP4q%2BG0p4Ks58YwPBTIhPsvWwz3%2Fn4caYyW0CwgyB0SfPjsOW3Qan8rdGJkw7&X-Amz-Signature=5061b7bdf82c513b7321459e6b72c54455a5f31ff554ee35030dd2117cb98b8c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX4SWAPE%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICrTLqI4ehdHLa70U2jV4alUD3WrZbu%2Bejs471O0Dq97AiAfRxzADyMzXkl6rrw2I6lA7UtxoWDmXltdWk0fW980PCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSTWYQKSaJDFmFsmiKtwDNRGesK%2FlVbqlDrEzgVyGtzhLe2qVNyGCVqMG%2BNOjZvhFFvbSU8%2BR%2BW9ag5roteLwWa8Fkmi%2FT%2FDYvMRBwP6u6osMWrGHFTWnCYynvGPMFEuQ64ixV2TmBKH%2BoHcn5POiEsrDabfsDmtlhBUN0tMhyhsO5hXBP3j0gQizKuwcDT6OaZjtsWwnSlvJeGBmzUWLuw0vrAXB8EdHYwtBMHf1%2FdH3rEuLQiw18TKMWqQeXqx25fm4l8wrqR3E0oQQAPbCuN0vRu0ZBfU4cD6gSHkMKp7jGnS9pTQaoGHIumI0YREhuHjSadDrZaIe5hVycomJ4y6EhmLefvrv0x3XWZpccgd2k4blJO42%2FOrhjH8SGDLilMD8XU7%2BiuQoUiikl1eq%2FcWUYzlq6nioEwaAJ3nbItn6%2BgR%2FClHnJj16nj6uYI2jdPWcSGavO9TZaZfDywoej94SVV2LM7Jdb7OeRNw%2FNlKULejYbUu8E1ii9mODzZ6zRBXkjr2x%2BqZ1KWMg23EzyYW1zBuuJ55skYzijiVoOkwatFZlGorPadhz46AgC4V%2FhuIQKxnei1KlOWRerFX1obfWLJ8xo9jPm%2FG36TmPVPCO9LVShS1RnnkekviYvOUQwSoWK%2BdbS%2FUOBSMwuty4vgY6pgEV0SqBP2plGmDx3RrBghVjdIkzUuP1x98UYxpr%2BLamVletwCjrKMKunCJxXoS8A8cBu%2BbZZrnvmqdrFpW2nn09h%2FrU89J7jjEWnoYAOgwD2vb2BB9%2FpWzyRWN0VA4WRONQZpqezBTbZSBAVZKy%2F364IFEfQy5ve89v%2B7JIs5kAO69U7pRmGDzYxVLZpnABFaZ7OqIv7xmBCZRVqJht070550AWL%2BE6&X-Amz-Signature=f35f1567459713862486f80253fe0eec9746acc822510e5280e5490769e14e99&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
