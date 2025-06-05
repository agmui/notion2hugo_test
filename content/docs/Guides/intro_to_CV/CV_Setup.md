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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQYOO6P%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCRztwmFRWCg3Mp2in1UmA%2FS8h65wy%2FvQd4oQOzLXZWDwIgTgj6PKUhkTBlqoiO14s0EcAXelaWNtyQgiqgSQ3LzZYq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHkOogCZ0C2vgq6cKCrcA3r11dG9N1mSYAgzmlmXqAeRWam7r%2F9%2FMbjtq4AUcFD%2FE3qgIupKgPIa%2FYbaZQgkiCtMMM%2FQInteDlrbAAHtOwu6Hv4Pe%2BH6d6lQ%2BmRONBCmfIcN8e6t%2B6hs6Q%2FtSOB7JlHNQExTkSz9SDiIbeU6qU1MARBCunMj1DcTZvlTgj%2FjrO%2FVSrh1xkwwFSui5GZXeEk%2FAB2cabDeWTot58Qm1b5ev3ZYKQCgWVCZxq4sHjOLsmqEii0scJyyYHueynEvPs8hc0%2FJBy0i7GmW25zal1x69yr3uJSJrTD%2BmB5xymZewy%2BeeikZH46XigLqRVfzOluxcLcQ20Clo1TnRFtEz1eE07gli11hfhxkG%2Bdw2vMNXKf5orNPs9rDLxRZ3bgyKTg%2FwriLR1aW1Bq03aPuAWS1q7pFxoylz2DAsTzbyn4x%2Bu6btcSkSAOJsRl%2FNsyLCpWUbwHjSSP97S9gt1G1UVDd0Ts0JlN0tfJEFz9FlNqQt7fQGmQe1l4jUc1OfpLBHH%2BZmed%2FQS811V3d%2F27fGVvuYoof8sU%2BguNqNP0MS8GLXZwhkJEpisettIs8w7vi7GWnHwOpny%2FPeiHf2sOFRKHrxpco388u0XeOEDoVPoVN6AWp%2BS1n0kIta%2FfyMP2JhMIGOqUBKM5oG7rgO3umH76LcFI3UH%2BY9ugwj77%2B9%2BZBCDjdgPDhufTTTtHzQH7CB9tKAWkd5vtvEF%2BrlObuKgIEyER7pPzsmYgMDwZed2K1kEzx4vsyfEh9Rz5SjJoz1UTCNLFt9m4X22e9IIBWuMN%2B8YSv%2FDeBFKDEh2NnySTXp38vjm7OMiwvszSHbVJTL8dq4LVsNOIOiz2vlznpu3kSXFyE58wx9RkG&X-Amz-Signature=27eccd9735831caa6ccdaf3f15334a327aedbdd9c3561bc5ad026deb950a4743&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WN3CR7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCXW8BnpwoU6ziq6o8YCHLCiB9fRqwSsbknhnlVcpaIAAIgPRVx0abaYjkFSKJSSeVP3NHvNIlGqG3U81G37EeE39gq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCu0hyyocQnQ3NyPPircA2VLYr8dRix%2FGAq41cYO9twPL6oaymdXH58ZFme1v%2FjXaTorsPZZL7xHJk5obRMGnDz39vqVV8sZIzswpjLL5hUZqUiqJ9H8WvCVuN1%2F38BgnLZFNMU3uuvrvWsG88fRuhgeSuoq2J3S3AD6j%2FJMUtGF0R1nz3QFj%2BqvsdwVtqZSW0ZxmwhCL8%2Fqm7vJT2LxGdhjqs9xYEiT%2B%2FOiTWMY3syBd7RAcnA2irqP4uFCjyT7ydm5vZkqhuV2BTflkeJB4POhWGjM3t6YP9hBVqXeNMd3%2FCxG36U%2FUh4CiVEV8e2V5Lo1yZ9MPrOF4gZfdjE0BLbFJXyXlPOGZqqt5UqMDp%2B2GwPfovAQEQG3PffufnNp41FhZjaVvGIpPdEpeDrnQefxIExcd7aADw8O2ZteRsa6i4o8fhHVYyGLXSUkrLEl1WK1PvOgQ4EDCRka0GiiAnUBG%2BUqRIl5TxAHbItKyIccGZry2Rg2bmIOMPT4vnuhPT%2Bvyqw2%2BGN0gxnxIFWSWwaqd%2BQE4HAHQeVYv%2F01zf6pbTUHLzYsd%2FDvYuVWKZ%2FWcQpF%2BpXgaot2M8Lnvf0TLaz6rf5tBA4kx1bZ226m8keipiKhap3tI2jCDIfjaotnqkNzbf2ukTOX8LSyMNGJhMIGOqUBZA9cLMN6RuqCZgZ2AeyppfynqrFGDOL0A9cHhXvPcs3IDQzzWobp09IfGKSHzSRbPwoVuwypq%2Bcn22lz4hMGFM4vC2x9i7diBbrcPqI4nFaNuGi3spqQm5uq9zljnV5nsyLkTPB8UR%2BHcxUnjfAUnAZZQKhgDhygDtUvewCN0z%2FhOEySX7S4pRYkn39F%2FRfkeIgrv4sgk9EXnyXyqUswsDy7CBjB&X-Amz-Signature=6825c789fe99ac690d728b97326a9739ad565434263785a21c967d27d0c3a58f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
