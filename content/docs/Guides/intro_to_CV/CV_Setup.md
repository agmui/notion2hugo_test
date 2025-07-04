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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4PWPHV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIB15hCp%2FdffV8dsidZ1EOU830ApElkL7EF9Ui5OQy2hQAiEA%2BrEZJRD2D4WlYNXdm%2BE%2FCJxS3Sup%2BoZf6vyT%2B8kR32cq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDD8hl89dAq%2FWRyNKbircA%2BxsQQRWW4%2FyEDqldwkLBY0qFlwAYrupjI2SeQkjGIqMtolrpU8xGyDjUmC%2FIYur6dtzzQan4AZdlgilDmMEiRu%2B46YI8lzZL7GvxT57VbsJ9%2B1NcFmuDrjbSTGebA2f57MTI3wH%2FKz14F1wrXMAIV3wKm8NZrNuLgiJ4u4w%2BkDSz7GG9dGNuccIUSFq8CbZAybhhzrW6s5kQdtOB7G2mgwHoXd9C1oO2ZKWbHFdd%2BqRMUO4pibxPrS3lHTTpwhpKRtmZc5OhCn1io3%2FP7txwzTu0w2IZ6lz9BTZF0L28nRZMycRb%2FscODZS4vRfuU6Z3o2ecch9%2B4GRs2kf1BxDH2EFTmwPRB3k%2BwKpIRNR5We1q09xpmGu4rCUQT6y1K1BCLr7Zr27q1n3RuVMKxGxco%2Brl%2FEmMNfySw%2BcUfuX3s0fEZG2LmmtV2cy6rwdAdijhegPcae9V1mkcr03gBCTwx0LNDTkcawcgnyXn8hZvSa16j8De2Wo%2FZGyuYR4UJDY1sOzx9rXULWWREDijs4znX9n%2Bxy5mibjJGfp5d%2FUB2dsWr8C5pLxhBCZ1DJa8M3TnBNmeyND40aNIAVUv%2Bs9H5r1SYVGldifzMcxMjCX45ILXdbRLk98kBZ2peFUMPqMnsMGOqUBgnhEypwcGNGFmTbwLWlel2%2Fc7s0u9CKZ2%2BhHROR2SPjfLfokJIizn63KKXngUqSB%2BvPWQG5TgW8%2BR1RTc2%2BwAzHgfAxWtAyOnYYYcXiAtyWXv%2FcwVoTKBP5OQ9ZiFQqlKx%2FlAMuOJBoqt4sag6nrb7d3wkQgyT%2F5OzRkt%2FjPWz5SiyFHuvNETY3BVhyN6BuoZF%2Fjy9pVpElKzJk9pk5oDvj9vl55&X-Amz-Signature=cfc6be778a30d66483448331e8dc49074e5c0e11dd51f020daa07da72bf725cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUPFB7ET%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCKx0qjwXhrJ9%2Btsz6hvrP7yfGUzh%2FapksG44f%2F1s8WvgIgCYRf2vEJEIvJUC6QBsKDtKJpyOauGgm9843iqfLmS1kq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDCBZ%2BGCK7llStLcIHCrcA0vp95Df9scxrnJIGC0Pgp67Mhllj64xp%2BIQgyZAKv%2FJxD02TKOvEr539a90VLZZIuI1T%2BMhTc8hsHFuYSkqGaIngBLqvQGzvdTF%2Fsba0QdtQ54NFDjz5A0mUG4KhyKGLz4uQwp6f3BZEjrCZrydMBy5jnQHJ%2FMJvL0K5PhMfqQE4f50T%2BMfP06MlJZiVu7RFtwhXoObqPyD9CFR8VsYXVbtZxtFplYvjE5DsNQoxkhwEjfej6CEffWRAyiYqk8i%2B8O%2BF3H5hJW19%2B%2F6aVaArKSgKB1x4E%2FrCmQhVoa9yNj8TBJClSXNjOB7sl%2ByI7ibeLbxOj7ldcIhuMjGsDhQIkDXTFOn3YzlvaIHAKDE%2F9NQyKNpiJfIq9n0vWv0s9QfWCLmwZvP%2BpnNN0tPgjnl7QDaXeaTznqgewhdQgVoVI1sE4Jtkb8xhf8yzHojqjleYkhh1SGCNCYL6DbziESNzA%2B6IFyA6AAAQ4z7Qs4KQRQxKkAyie%2B%2B06XPeaILxNYsOOIgqMaa6R8Fi4P4SdqoyniVVUC%2BWJgdPaIkwzc2jvYxrME9Y%2B8HPn0WkOnqPeWvMesbd85rBJ64ir45r9psm0P0XSwj4TqbtoBHKGgMSkTII8y4myAKjQrKYBKvMJ2NnsMGOqUBulBY1w5DIfgz1I43ObBaobaE%2Bp3l%2Fgos7fktppigd7HBC5oreAextOyxBXdmLvPwDOiKRt6Y90RQ0DKZTqxbl0xFePiTx9ACU00T%2BI2UcIEm9cSDw2d8bsn8qpljpu8qlfdSgajF9xDWOwDdSOork%2FGkmKu92tPaaCvOnmFoQdLKVzmbguFrHS3%2FRNQdOCF2wD0Ex%2FHcklNu9gtzFq0BePSS3g1e&X-Amz-Signature=11979ac8db8c55f54905ef938fb3e18abfd83f2727b39e814af551dfbae70e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
