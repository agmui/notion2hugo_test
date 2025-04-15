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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLP46CT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE071e1fLkbtAu3ySLXJazeIc19OGpuHPkV%2B8ts7tAJyAiBKm4b3jVQD74Ku1zoIc%2FtJXRkawKcbDvPg9t2wRzeQASr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMzaGUoZHeeDkktQBjKtwDxb3ubN3fXNMzgvZfujSLYLUWH%2BVVd1Os4ucLvzarhKw8edlStxmCJpAH0kjLRvFiwsFJ%2FbDc%2Brjxt1JCUERG6xr6DTyFtMr%2BFlCZTpaQ%2B8FsTkjeM6wvV711GVpUbGmaCAS9K%2B5qvI4qGhav%2BclAiLY%2BI5i%2F3mZhriUOc%2FabXbBic5jtbU%2BVpknCpPSYDq6m%2FeDF%2Fuz4YELy8TexZH4kRu6l%2BfMcDujA2vD9tMtIDmC850a1NsNu0F%2BZDOFHd%2F2SPJUWIK220vNf3V3xJy1L4nj39bqrZOh9cYKDFi0IpRNX3%2FGyfoSX3ZdnEmAYCLEkdsRFUSO1HzglrryxBlpUc%2FoqIwpJXWP1TNRyK8xJMlsaX4tYuYwaht502U0399lBiJWHqPAVr6%2B2tc8uDM7P3lBM5PKALWE0Zg4TiJ6dAKqrZcQLNT4asyPhtWsDUCMHRUgqFJFRjxH3uVNmhNf3JRayQsLhqCQI5uuVXki5FmhU%2BzFkPQED%2BiiaAo99PHVRUMJ49pzvuklm9Kk42HZ6Mg8gy1BCbo0b%2FCIlbXksbMsllt6Vx9TSWh%2FMeDKHLtfFZYNr9wLwCgvXvua5MSixxCiX%2B1VmOXzh1KlmQIf6ItxugNgNv0e6kfybiiMw3IT6vwY6pgGFWE45VOlYL0GIkSeWh4mMAoDJ8zFSRVW%2BLB5h6naFspUzx68oBUDNKxHRQVM3F%2Fct%2FrCRWWYysQGMq2iqPgZPRGa0zABApdPfjH1fvInWd%2FbTELLhC066pQVYFLs79IEl%2Fvrgzv4n3Z429mwyvR%2BD4f7h62KIYwCJ4otfgnVImbr90CUZ9ULQneMCd2nq%2FMz4f1VdaUauRAYaAZZhtH9se0cbYmBW&X-Amz-Signature=eacd6a8f20030888efd908ed268d00b5a832035b9d7418b4cb39a1a7e2c7f081&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2QOEXSH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGV3g2ukbiWJXIHCd5o%2FWmLnziUcQXl46sV3Gf17DMPAIgbdMnuCf%2BCV4ae9ZvCD4i%2BtJ6OZ53qRyluZ3IiJDGExQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFrudC7nzqBF1nY1rircA8WikxMNckbwYeu09aUI8Id2QvvSvDjliNr46ZPBCxphsu0zWuldjJXaMKlrNDiMMhs55kYyou1Ok9dEia0%2FxW6LWym6Zyj5orVkW2UUN447dU4khINzZffbJgvVHKM7eXjmriasUR%2Fd4L5DWcExzdGDmkrwEXBc8V57kJ6Tgj8KTIlCNJmTQkjexiQCjGWo1YEor5WhuctgyxUCPwKb3iCBEX8D%2B%2BXs%2FYESGJ3QwL8RITzBxjgUqqYTyKM6Vj9wwM3TTKLB0VSH%2Ftv0AIitIo6uZggv%2F97vUjGAGxFKrxYfRcPc6YEGUzp4fm0%2BHiX6arOAEh3Xl9VAzDlu4MiDWNwgrrUs%2BN4ZQwtaZCLWS0pNhOUEpkGxXdckW1beMzjtQmRBCHzLovyoXRt88l8auwhRibi%2FoGRaXWs8mOk1HrATNnxm48q2DWGc9OaqWMlBg3xXVSzfNZFffH6SBeB1saDlMBJ1lNuMIv4lqYbs2lHGCkAwDwOwHwPlS0wBgsJgGW1JSqTlTvcSj12lszEuiukhfbzVFwU%2FNTYWUKIo6d3QGBue0DkEdLb0k4%2FCcQUo2iwtM3OjwpMdKSn7g%2FK%2Fk4dtACSDMuCU5SKw4911Fe45TtHvLHmJHsJCMeiVMPCE%2Br8GOqUBHMTv2YxRGr6P%2B7RGw3%2Bf24evege7GtARSOAG7hc8yo5yKSLdo816Dz5U94ZQAFAFymmCp8EuDsc%2Fw2hzBOR158snw5fyWfNxHKWRDcIRgyf9Dvq7AQIQ0hM9KKDNML%2FBkNo3U%2BNqKGHjRNIYExCTLWTgYClbnUs1fGRClOYtYO7%2Fh9YMn7ijhcjLPwfxdSVoKS3woPCQWdhcj5pJQjmN40EUVCMa&X-Amz-Signature=fa2911c83ece97c9d3fa085a07d146fa8885f9bf0733f6986504a5b12b55c498&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
