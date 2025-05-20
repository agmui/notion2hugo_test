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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ORIEW2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD32qXdtYD235hsRU3RLy67bkBSO72QYd1T6t4Ao6fMnQIhAMOj6Y7Pe2s3J01%2BBnPcSDlaWJvaG5AbljZp2dg53m1IKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDQmEswozv0ya%2F9B4q3ANGfyWSU3eByrvbtPSs4SRgAvZO87Kz7RDsJk%2B2Orx%2B9zTkbSPXE3a6aftRnNhsxrjJN64TJtseoJDUoOnZf3WtzLnWj30skDgF0BsOC2jPtC0sUau5wkiHQo5CMzsjyxDYs%2FAJzJ1YV68wQPBJtkWUpgMEnRwd0gvWqrRMfRG78HSK3oND1i5t3sBsOtlw6bQ7%2BdE8co85mP%2BdI8OlbKUsFe9CafFYGkBGv8kGriT8vEzpru0v%2FTx6nufzrIB4zvTbYI2vSvmA55fsiegRzV%2B%2FHtu4fTqPiGE%2FwF%2BIT%2FrpSzj4sOQ3oEf%2FtdzuVP2Fmi5onJHiciKDGXAwB1McPkz0PloO0tTYSvlBDgVKvzfLrdM7LeP%2Fce%2Fad%2FIc0I2gaCdp33PoiYEZeU6VT7Z3Y%2BPkE3OC%2Bpo%2Fcpy3TFwye7dNyvffdZAWrXsNRM8io7E0IbXT5aCCeyVEZsiKEp9rznB0cmcGwZIG5jRMnns5L6k0%2FhpblH0Z4SbfDYvNVFWCobhL6W84HSTwGjXDUbU3y8noCpj59cSB9d79whtMJ7sfVPVjG8mWqXCIR%2BPaHKcU6ygo1kS%2BUawuLLLGBs48DdXlMKyV7ee4CZAmXfIvCnzDhUaNTlExvFndnIsSIjCplbDBBjqkAa%2FpCWeeTi64v71MzdyPD6lyMPQ1TmSE6gs5OUiDvfh5DLPcU415zpoOf2ZEWqO6O07qTvJzKB2EcJbNTEku6Q0VhcfWHVZHTXg63m%2FkHSuSmgUVL9Dx%2FinWa8Pb72Fbv3%2BoKPKrix7rzcHmhvcj44ekXcr2TQJaSu2OYDwQi%2ByCvu8Qin0U6XrMp2993CC75%2BSccBNwoJJX3Dt%2BnBc9Vq35szK8&X-Amz-Signature=556dc0472bd875afd73634b4e50af06b76646adfaa0b09da80505e1febb14c2c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4ET2NQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyZHGeNG6WDeszrimAZ3BL8p6jUimbIkys2sF%2BXQZZ6AiB9UMRipbJ%2FIcV9F3oyHnyAdsCtPfPbvkO2LnCKmfPEASqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmccfcXnHynxHSPywKtwDedT2u7r6%2FN6zK6bTXa5U4k3GEQEYaxNtaf8UajslqwlxYnttunL7zjdfqoGqf0MSGFCePKWC%2BfOu9D0kWPmXO%2BeYFi%2FfDItDGik98afewkW1xKaE5LzSdyCL9lUUjtVVGPcD69aMGJPA3sId%2FxN8sBsK5rTxKLkz3W9xnMSK4heuWXNEhWWk3C6od%2FXmZNYSJf1ErmordYsh599ssUw8xX%2Bj%2F%2BJjEI7GVCFsrjxRmGygKyYxyJRTk0hs%2BcmrKAca%2BeQ%2Fq0Jx2QZhitc3lvSc%2B46S8tK27FFV7pNRhZekCfusn4ao4IAeNeeTlWfpJ8ZrPD4qWt1yp6gie%2Fb3jKTO1Pjv02wn7rS2%2FuGT%2BAtxdRmPWayW2VEBtbQmzaQvryJ%2B0V2wxVva2bVruQA70hkxp2OATyaCLxmMQKGgCZxY7VW8H7GwGNztAfk2s4shZYq%2F0LHutlC82PXAo7ine7WTBPLkr1kQemKTjCmnyZlXVC9zVS6kJSa4LOCM96EJI01w94Go%2Bdr3m6j6knQ8ZNGn0epGh0mUGuWVU8%2Bp2%2BvDuZ5XXR%2B8sjensvtq5dKLMNIiwb%2BgccTxgnrQa6kGRILvb8vCweKv45c6Nfso7dZAtzKFU1ikRauXpJFThTowmpWwwQY6pgH8zKndPMLo26uOEx5j85wXq1SaIy16%2Fm66OCQAuHoEP1jI5jdgOMLUnHsz0gYuDN%2B6Ob0JYTnm8G%2F0KAUlUktKE8gsjkGCzlLKaljuytmLWkgEIkUBO22lndQlFstqUiL8zdMU7KgIEaU6eeV4rD2%2B7xiwgI9Vnr%2BLGO8zOUCAItWzRyEUfYz9LaeEhPouG%2FlFV52L9JANfjLFgb9oYQkooMTqfvOA&X-Amz-Signature=33c33769a89f6655c8872358c1eb8a32d356d3d1f045eb609fd3f704fa6d1474&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
