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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N54QFOH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIA8leiio%2BZC5ZyyTlnGMIpOx%2Fui3dgO3FwcsCyHEUqlDAiEA7b679BeFCw3ckERJQyzOCmoiGk1xK8Q1jYfoz%2BCorC4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDH3DYMahM50lkV5c8ircA18AluhMgj2lwsU%2B5wZnttNAmZhzVfjsVYU6PArIYTduNqI6CPTXwQgYE0gwyNwTxVS%2BB7nN7rq5GSDHhXd82MsQ3Lg2isNqYxj6h9suGk7vgSFAI0eG7%2FAWj7fSuOhdxHXyrq402t4cCOsumykSvU0h2hkzF2t0WReo%2FzkFAPpLpIOSxUuhJkvZylCl4FR153bg2QeN4vVhUrsbCcJ8y7Yop%2BkCsEj48v5zaL5pCUP%2BRujUAKSBhjrK78qhrYTMpDlcjUzqj6Jb2g2n3izEizHFBUGA%2BX%2FVjCmPVwIYBRty%2BXcq5pzQVHsdEgz%2FMpJvk67VvwekQP7G1X6zqsz%2BkWVQK2Wsh3PqXJ9GFBR7p7%2BhjQ2mf6AVZjeIZ%2BtnyhXFqpEBghnHpRZ748ezB%2FmePpLeXdyvjZJ%2F45Bs%2BJSNVFMp2px4QQP3lfHT45VVKkKORtxomabcxqpJa%2BuB5azgbIzqqr49Uxwutxv%2FkFgBTOx7hWAqYszHoOkFoupfAbbF2HGg00QCZIXBO3fxUMzlBsdo%2Buipl%2FSDUQvIhenTqU%2BqX3p6Prcwudmw8Lu02wdnNXFa1roLlrW0ypF1jm8G39dic5Z0cULDam1g9JsLmyaOyNAZHEcdGVLdyR9WMIvwpcMGOqUBBl0%2BhuZ%2B2Yct1tRQiAzZ2gxlR%2B5P2m0eAeQ2uzIERghuBTklV0C4tYT8VlugxWAmA17cg12U3YX2j8wl8mPgbb9m5V3JC%2BrwYhl1ujW%2FFgfE85yIjKwwugTa68G9hCzMo3cHwSrmz64xNGTiKefTDPJzhanZdd84utNMs7zc3bPcY3m%2BFqh2jrampd6Uj0i6xztY59%2BX8wqkVQXmrEt9s25OAAsa&X-Amz-Signature=8dc3aa24ead9e7896da808e6b17edcde3f82e9975f82eb3f42cd89e53b05a53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4WG5FS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIB0WcX%2BgptpWPeBOSMimZ62TMI7RpwLGMvEIwmBsWoEgAiAGE02Cmtn99WRdTf76Vi2No1DMpmrdJHqzHLi9Zb8%2FPSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMm989eGEsma%2BhBMVvKtwDqcGV6sfWIMLBQ0ZJBZpmZTcgbZtty7qhz16wsg1M%2B1SSCXIbCm20bdqPmplrv4tFw9pge3YWyQ7sF7MRcqDltwTrAcjwORsnQkgKbOMucdi3Yiu7BC4jvBgZdkE5QI2sqvB83MR0XPiq9k%2BsGRRf2cu43GCnD0a5uCrT8WqykezbBM8pq1BDnibieIrX6vfbJrCvr1PNKnDDuLxrkhZf6HIaFwIj%2BnxxYj8eaX5jIVuU6OR1CrInE54%2FpHslF3Vxbv5NjEeoayHWE1QiAbeF1VZd%2BnH3rJKW0vNI7xw6Ox4XhWZjJrnowGthUDjJGHv3wd7KZx3egJ%2FqPW32GiEIXV4uRywPp8Br7AHBNkHTZFYUCD%2FPpxNc2%2BLtAC304fgxX76jl5%2FwsELyKvrgGBKwolJQ8QyBGHH7G7m6o7y%2Buf8dI4zmz5kYx6DpUPNvFk2DquA%2FyyszVh7WO8q3HgSu5ScrZeqTnlqDd7CgLQB%2FJBzhZQXPP2b9c05PISHxVFMTO6cljpvGZafEUVPacn2caFNaH0SDAo3zbdqwEtY%2Btixbfa2iLZp944uY61z73LuaxEcvNxZKe3rcwhemEYI6RcXZ8J6i6o%2B%2BFyTFJtqndZGQBCXPSAchN0VQ9Mww2d%2BlwwY6pgHSxfRCuiY9SFU%2FmMGSxsCZcHcpsvoqFDk6ziNEnDDSfikA%2BVZHUiDsfnD36uUxzBH12e%2BomPNIaYFinhr5%2B336jYyGWwswCsmUrJc9Vp%2BdEH82OXTu7lJnUPhzLUktH6YZVjKUTcsQirN3m5r%2Be31Zs0qrGDJ50SXDQnKZvOZnmObhhDX8wgVeJpERBHcUxtACFVq1XESlCcsdQIEAEL18scda%2BBMF&X-Amz-Signature=d313ba3a5d002dfd3ab4a9a79156a5f5fa8e19ad02c90c65db7946f66a2e9536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
