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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666E6OKRU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIA%2FRvkBrj7aJOL8OqtPe3ApW2jCs8olcaj%2Fa%2BMKsfwWIAiAFzdxa8UqtDvIFWhnl1kYVOp6Vn6CP1j9Hr4wFaexAtiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbvorwPzpQL2DZ%2FtRKtwDNN9F5owoOiMUUkfK7Ls0FAh3LM%2Fmxgp%2BWKZUU2eDfohNq6QcWaLj8aYxW%2B6JO0g2fWTSYb54E18sN9tACu0ADrjFGHHVenXy753ai3U6o53NslRKwERb2bR%2FU7gMCN3E1qUCfNrtLM3C4NOwEQt0ZP7pgMS5nFZYhQ6rxANTQ2OFLr62u1pd6C9VDbxeODN6u3hroueEhsOSJSlVlxc9H3YoQF1cp6KAmOmfCDDejH0OOyO6sXXcWzjQ%2BEJwwXtJzH8FU1BwyN5ApfFLV5zUNN8COEGVadvMIsc4H08NN6oN80o5S6Zyltp7d0UxKMUG%2FQk%2B%2FuLR00cgg2pxRDHehzHGpflkNvstVWJ3PiiS8NeJioS8J12bK20cONpmmXMGscRzCOTFiHf6hoD9JRXtch7qYWu%2BOLbD6Yrr7oWtWt7MqpeUQLpoGSsxmz8lzxR4CbDQ%2FzbyuKsaf2wDgn5rSj4kA4Dl%2BJiEKiWJi5tBulPc6xIkAdcoLdgyksucUsX9N6WpnPNDM9m4ZuuQcyqY2khcCKK8mk%2F8w73S0dh17jy2g%2FJmu4jOeDKDDVPE%2BC9W4EPnAJCfL8JIh0lgcQzPRRKaia8mW639RTlfQLlleb1rclnZLp7EA2f5rowwmsalwAY6pgE3477Yix%2FAEAGbzJjsgxZ8oRMBnc7LpO9Of8AdbRPG%2ByqwTLhB2G97CM%2FcemB%2BZ0UiyRrFqI7hYFqWsCuHh18qnZ2Bgsd7Rf1pmaYFQfnB6dtzDXTihtFKP0rHEaAuv1N2c6tIH7iXK0imzj1ywpXJhBnfv1nTQYfMXSDYgUjwHWSSP0Xy0dTLCk%2B%2FBDesLgdBMG12D1b2ViLJ403z4vAQ7vrGTShr&X-Amz-Signature=4a34c53348eb88cf2746b2ed85d8048b2be05043b6c9c1ea48f198443fd9921d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKS4QMJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIBLtCR2OPagihFw85Hy2grk3WTvVDspd%2BDBKg8adx6jJAiEAml%2F0pZBrbg7DmUH3vFiKaYNyELCljyBQSGaw4XdZs00qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9K9niQgucFRUNAASrcA%2BZ%2BOP0gfFdh1rYImDVzagVitNqdm%2FedRZdqLb5MmtOeQI9iEsdep1kq9%2FoRmBiqr25uzcabHGPB9amMFLqHyOYrmFFxSyM3ydW%2BfCaAxiI2n2bt2Lf4GTqLCb7jJd7xCuIB51GjQqMSUYIxZ7hdiRRPuX6EKGN9xrinLp7ql0HgLZL85T%2Fgmqsy2pSa%2FxKBoEjfRZ3krenul1FPg8eOv9XZzv9uaKkXiV5bFHU9T3EpzQwLs%2B%2BG6MKr6Xb%2BMb%2BM0WzvwVRIsxNFRpGI3rZlnQbbTrGXJTtRy4iRVM2HBAgrymCWHWI47t4EJ4w8p3VOXLhAH9Tbv%2FU%2BLVVIHabm4y4ZnVAb4sygSljpCbknMaC4N2teMkF%2BgctqwlbmIBpeqNAQg74hDyc92NfDBC3Wzi%2B1dBByl8YkBFGIe1SiXniDVCEVwBwYyuusAyLS6JBo0%2F6f%2BYoXve0OUnR1Ca%2FvMVpRPXWMJppjBY%2Bl%2B9%2BOAqqZnNg1BDMVIltpO0p9vrabGTqJaa1T6VkWZZQs9J%2BUY2H1A9KEZOolQjBlvL25h%2BvmDN1yErUHLakkMCZM7mEVp6xLNSADXKENwn%2BfTmBv0UJbIh2kSM0UvyqewdF5M1bFM9hatqQiAsr1rWWjMPDGpcAGOqUBWc9o%2F666Ay%2Bue5Be2RKnT3y%2FExnwXK7Kj8JyL8bOl5H5Yga4LOeo8ysXUXa2Vnu7SI5XcuQNsLXFSjl3pWt7%2BLV8hEH6SijgSTUDc5BvwdsrMtKb9OezZYWwGI7ptVPYUbrhGFMbwFqRHdBwgv00%2Bvcp7t4IMwfeiAV3Cp%2Bmhpbm3GevsdbOIu6WYGMPA6s6Es1RHkV2ftMa8arQsUrxI2RNvPrC&X-Amz-Signature=57efbf93849eb732f61c668b5d09bc63ca084e9c5d0202d650401d38f2770d42&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
