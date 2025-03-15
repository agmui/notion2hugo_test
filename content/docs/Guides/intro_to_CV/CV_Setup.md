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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KDDODVK%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMZglCL5ReSRCpG7DxlzniScLeSVoOCfuAhY%2F3Mcl2UAiEAwdWGIUiwb5qKYooguIdibEAeV24%2FIc8CGhzmupk%2BgZwq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDNWMmTOARoU6yYNpDCrcA1IaWPxqm4ITKC2gtJmhg3WGbIxz5uxuYDoYlrq9%2FoDE7XdbkFHRBVYF5FxJBmqPPeBnRH40PtZqomRsrZ0j5D82ZRVxvvXk4ujsF0wzj7%2Bfad8PJer5JnRCSQs1cDf1Mno8kzhYFL%2FM53LXmMnM3JoupLPywRxQaM2qWZNbvmmo9OIqDwPRO7Y9M9OxbJBepAruXeXVdkvuiujP%2BedBK0SI%2BgHCrJOonLlpe%2B3raOg3MujjU0RmxSgAGP8Ji9VmvcsdduKitWcbaYhWI%2BAP1834DjWaWtpzZr7CM6nJB21wlyG4pDGqyZMsonHpzUqZkSyi1sZH11QGD%2FXkGpTkOX84ypqtzGpONbFEmeNYi2aJgUo1JBU55Uk5wj7N6JU1UhKhPe4bSplWrXPTetm3DldiePN0f7YePUE0dlBeGC%2FXJPkWCbqOSxZ%2BDPBYxJhnOWhNlloNwTbyJY4bvmSlQ%2BpSphsb%2F051igURYUCyOGO%2Bqg0OEXoXEeN0tZkd0DHrccNhu7T9UYrU%2Bmn%2FvbbdEWGCYntVu9QjMYMlg0amh92FC9qAfOGvcPZTaL%2FV8deJMhup9FJ3bFcE%2FMsbqz7mdDYJ6MyJCn%2BzVwVxT10D0qCi%2FEKkSHC1FhHUnoQOMMPD174GOqUBhZcFgW277t8wMzQD78ZzlHxMerXCBCgGjIBwsxgpLNtJzJbGPDKa5eEeNOo8vOuwww45nE2r3jsRQuju9BDTytH%2F6Vky3CckvcSckJjYx7iUAuTyVXwoA%2Bg4r2hixDsmNuom%2B7mACmhNTUNUAZBQtTFS0pbZlhgs8x1rNdPtyS6kNqbz6T35ObkW053ToI3M5XZ2%2BAuTEFxryDDc8Eyej9jdQaS5&X-Amz-Signature=050691187bbb8fb56e018687ada674c1d384823f787912391fe063b78bb4e653&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MX2KQR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB%2F%2Fe%2Fs4SBehqctNptoWLKfpa8CfR7Oo4KSuHlz0x%2FqgIgcxaFrtEU5Fk9NgCd2YpnL7bcjmbW5oEcGumJGzjk%2Fowq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJuvUyA9sixhunpZqCrcA8RXbrFmYsgekBpGxCLLjwoyz9bR%2FxYLsErztfRUi5zCRQ5Mtd12iNztJFXnN8WuTu91XdI1%2BZQaSVivK47Be5Vie51urqLsUEi1lZM%2Fci1qBaB6Bef76uVJX02iHat1xAXFSjd2h3Mbu1PsnijhLwsER5zpvdr%2FyeowTr4A7i32R0odbBGChDZmJlYFtIhBhBYp%2FxKWz7UNfm9ZmmbvRT2hjcTyA70eyBmJlue1N3GUA96ttva78rZ8JIYoWjltRBPdQSctF4o%2BadwAwFYGMDpxgH79izHeRhrbKQYqH22D7qwhcfjLHJEVuS51z0KMsoh66HmwPNt%2FLoZ7jnM9fs5IoB6RrujRXIhhbULc%2BaqvMkzma277grGEJWuvRWg5aYfQ0pi4%2FpiKkrm5E%2FZspxjFKfZdurtFHLSu6pVW%2F3y%2FMFpuOlAqBRRYhQoiHP1Hd1qnvI5iV%2BdakSQD5uePlRxigVHn4hdSraxAAqrZNu1uFwwdrl2Mb0nyRG8FqpWtgf9eoT9RLOwDiYADq7JqhqUSM9tE1ERbPVYVYfb41haWDwppD92vw2mZo%2Bpi8C0Jb1RjZ3Jv6y4DrHgQzQvDnV92idTDbRnuSS3A%2BMPw9b0gILwmiRWmSpaeHJv8MPDD174GOqUBQfaT4Nu9FyrRXKXGM0L2xm2X9gXc7z46zzCbTyd8LZeC0pVLo7LNHLc15Qzfr9xFzuCKR4LK8zAVo2tD6AmZD8m8a8bF4kyp3IEf8MNOgPlzgXq%2B1H1v9k0DFI1bmdKHiIF5gcSlQbMquIUXfTq9bvtjLj3ArDBMJyIqqec9mDChbih5MnKlhHNwvnyTbgG9NDewndjaYBN6qa5M0O9MFtL52myg&X-Amz-Signature=a54e2dcc94828c69275558dc2d43f369ebc05f76fe335e8e1cc526f77ef85e38&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
