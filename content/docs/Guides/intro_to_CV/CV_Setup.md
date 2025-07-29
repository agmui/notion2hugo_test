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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HDWFDK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE91injmF0Z%2FNdmdr14ty3LEcSEQtLZa4RyRZFZJWu6EAiEAhpEyZVcdBw%2FPK4%2FbOQFSrDIdOvhZ7QEUI98uq6STvUsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPdbj%2F9FnwATbjMPCrcA7WRQfe0HvUGkrheem%2B5aIKUPXOZdpw8rpxENITf4odr1GNLOPaJ2ewPhwayax4FUVLyfp4PnL0OC1h9CYj9QutZ2w7m5ZthKV60hjr08y%2FyIXnTxj3AEt1mhdZbddwgu9qawF3Yu%2FFGqpaayHqY%2Baf6zkEgK9DHmjRV5hVwuDidxDI0%2B2avnDn1sONS3iGFpbijel0OUtP8kv4nfjH53y1FGssTe1XLBGFzHNEl6a9w08vaQ6689nOV7hftGRHwsnX8GruhQNczh59d2%2FsYU5E4Ls%2BQ0vHuya9vwuy1zHsC2LLVJfB9tljIrUNVC3A0vjm3r2%2B0%2BBBEXZoD0utTBx0cV2XkzcvoeShqKJE3XQvJi2LRz7DVTXqPj%2F7yVfFFV7ME7Gysy6tdDOly0x6poqtwaCRamtfoy05xvgL23QgPapQCGJwfWNIm9f%2B8HHQ3NJ08s%2BM3zy1K2Ba%2FYFju%2FXT2nOhhZnxZittwCmchSGjCRkG1gvLL6icZM%2BXAzu48%2FzHJ5myDm2SzpFfsF0opP9zEZFPE6XDEEbDHow%2BoCpMDcuvod1utzNdu9XLOM7Err8pTqmTzj7wc7XPNzhAHV%2B6ofoJTSm9tGzhMC3infdEGi5yJkF2rocKsfjZEMPeXo8QGOqUB8kHhfjapsvblBRDCtng53xxsTvs5D7hBDwGGDSpcbxBX%2BmP2Aa%2FHBNjFhKFG7zUpLJtbCLx1WpagFAfXn19CQqp46DGhxX%2FP973YBj6J7t1MhO0H5MonqzRFOLioh11aMXjOABYG5Ogpcc9PzpDfhWXp01GOyJzL1rhzBAsgGRK2wYVRvOUPqkJB0UtYiDhpHeOnAZWOkkGQ8yc8c2mLC7gDDW3c&X-Amz-Signature=bffd40c845e7efafcee45ad07ad809a6134766c6eb0ee6435aec2718bbc6cf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627SSVVGX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDzdv9gg7hIIoRCfSoQeOZwh5uGMiRl0xX8S%2FrxYmObtAIgWSNjYx7%2B%2FC41ONLcq3h2uwqmW1cKCrYV4UAMvb7ygnMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRLlM7aW6%2Bhrhtb9CrcA62PFL4D20YK1OtxWOvzSXTzVIwHOhrZwcZ4RoLezdHWTxMZ3oLdo3J6ahOgJS%2FGXpCZI8E37BiOT3Q00gx8XC5WWJYiQNKBOXLFo%2FSUZtlKJN83SgCdkWqNYQ61Qb5DNLj5xPQitR%2BZ%2B29q7Cmni%2B6Pvu1xkyOjoaY3FRS64cWlAevJGZhFSHlplqkCEj%2F6R4ICfdg1nbJpcH6GD55rd8Kq8p9c3y%2BH5nOAlITd%2B105nQCUXMBJ7MJvdTQ1OGQ3d9fgS2QM1mCFtmYn1DE5kJd9pB62Od1bZf%2Bj%2FfAqd7bHcqOgW0MbjEIwyi%2FBiHoncH6o9I4UOyPaa0G8l%2FTr4Unq6NmKJvwsH77qL6dhzSLRyoB2JVqbFSv0tn6XdfNJGihIK7lL8G%2BVwSXyZTiXD%2B0rdvb7t4a%2FGoh5jDwKcq5bN156QBzDPkeA983EoaqqjIh3cBKZsa%2BpRFMssv%2F3f1c3OKrfhtauK5iM8mWqOqR%2FtciOFhuXIQnSQSw%2BG5%2F0HTZElpdn6kDyftiXV4QSyTAcnzXLzkXQIFzlInPn99uZ7Lp9eBXEvulrDLPD4f68p%2FqS5ySpLnMkRmmUc8eAIY3C4JUnpVKeNl1ZzYMUFIuY5kMXJtcJVBzopy9kMLiYo8QGOqUBXmSlanHBfrzXdTnhSrvtIyezEn43SYcCOSRwW%2BPfPiqpraCGsfBBtN%2FZih0uOnqichdhH8sixLeQdWuXbQ4zAQgSP6nl6YGf0vw8lGDWG9oo7vZp2FVWVQqGGXOs6fVeMV7TgW1zmJoDx746k7QPr2ztlxgJlUwMQwXefKrAxLj9p8zohiaM%2FbI%2F7E848%2FTunUuWX90JFTDXymyIlNEGy0KYm4j9&X-Amz-Signature=4a4e0908003d818ca6b76f2fab8f77c5672ed19299773831fb4662f219050362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
