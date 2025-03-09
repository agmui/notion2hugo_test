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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS46GCTF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGWqQDVBQq8MaUm0YJR8nALgN4ZaFlav9w65Dyegv2hxAiEAhODbOq4RWgUXeGWrFzIjxmBGCFAWZCEMU%2FN2fsKo0SQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDFwsf6kZWpnzG1EA4SrcA4gfHwdTIv1f6BwDWORCltXx83zoI4nSoS%2FX8yu7EO9%2BGsA7koOVoXZzOQuaYKsnzhtwOTtkAIU0fhG%2BVPYsCDiTYvOrwUSwmG0ATyt%2FxKrCBC7oe3MV8ILLuX%2F%2F4P3Z6Dvo09mAaGhnd6LnLs134pTSdnNykjKkaF4YjOPyZ%2BPyskyJWpvDnBzFrmGVuUu30DynCE0lYnzbQNz%2Bui%2BTByGq12ythg5Rej2r91NWgz8fdNFtIR1zZlVtl0t7yp%2B0ljoUWELTQf5lPCkOoRDJEuD16QVCayG%2FNjtFM2Yvo9yq169DREQN2WAa5bRPTxSE9q16GD16WonJjkX3U3PsIZfpTvYLwPH4kfnw2EopWLhDXn7gGHSjfsHzwiIGDkIlTNCOcIIT2WX%2BN3%2BO8PhaN7JBFYKql6m%2FrXj5b6QsR0ptV2aLv8PL2rXLTTQ%2FMkyatEeo%2BGh%2BtLLA8yz9hCtHhRWNuu%2FpGQkdiVMkCqhP%2BY9XY1v3885JhqnT0J4yCZruvEVbF%2FVUd7K0eZBT0ZzDzoUNasHanCB0%2BySIv8dzgchzsx%2FSqOjfHfcKrNJCJRDcH5KXntFIuyYFeK5JPjoY%2B7d%2F6NsxZJ15FYl3HUrefb8TLEPZ0VVaE05DAO7KMNTps74GOqUBwyHgCqvD2hgQnd3wGCeFHfyHaeclEEdwN4KoxNBzuG4UYipdws2sY4p1bA%2FssZZY3tFeyHOCrYncxqU2ypwPBiWRjmp75z2NTumrNghenxQGTqGtwIIGVKVo4N9Se8mjUvJI61V4Jvy6TK24SePbz7DlLdGUIKsbRhhrH%2BKjIoCoevDELHspTN3MuLNUstJVdt%2F%2B8wpvu8dpMDjPpDFcdfjRvVA%2F&X-Amz-Signature=79ba1515fa362eaf175fa1f3200bd0e0d195ffb55fc12f89ec6ae5f324178ebd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWV52JX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIAMbWgRIbSDQlrgukU9ZiyUlQBTChzj0hHrLV%2B%2BvsDHeAiBMZSWneVt6l06xk8i9Xo3tqqBTnNwi9rOk3RS%2FAwoo4yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMO%2BJlVrLbl%2Ft6%2BzO6KtwD7N%2By0%2B3bJbQpT7IrhPcJYIhJ%2Bk6OUrfuVzpBY5TOS8dJ7IXpk0I2rUHks3QcTpuC%2BKb6n6fufhpqB9VZWQBDaGsQ7fOFDRLPEO2qNkHaTRLHD%2B5xP%2BO28F9D341lxNNaajIamjMd7nc0X0J7AbxZ1AsBqj9fH0R4s9qpNt%2FWYszCihiQCu%2BWqVT7dMQcLTw6cze1Jaqvk5gMBB9IuaQGCHKOXbdAZGGuK7qnZGrpgkC9%2FySjZG3RIWumKeQRum8%2Bm5KOwEjcTJFSYlcgIUzOsUDg6G3esxErIkqy2NpKfYyCUmumoe19r0BfdVmimC2%2BS78ZoGr1fgJB53%2FBPJX1UTRY9V%2FxihFLbiMjgTuOL%2FQDZNHF%2B0j4nOrr%2Fs%2Fki4wFM19Cp2PWVAQoF5rE1DUq42ilz2K0CWN7deWTtJXSyyCvlSIoMvUdLVbLKLddDdPM%2BPu%2Fkm%2BZPwkCKN8Ben3vTl%2B1B90umEjSLE%2FNvhiyyxE%2FEOw8tIF%2FBYxNfHyWtOsCj0Pq8qRgsWAwlmsLNEZroVj0hpRfbOvhfLSeOKFfOCubyNEJsAYvRoJv49nrlcnz6oyeD2sZjuFEWARvij0nOrXlpZeewRA%2BC%2BtpinKnSD6U5%2BIe7Fy6aPCtdEQwxOmzvgY6pgEnbLcgkDPYd6Lu1aHsaXrAjLt0kXra%2BhgjiWfnsLGI%2B3KK%2BJwRjj2a36YqUgY9mTVgAlNEea12RxMvSVZOLnd90GvTwbas7zC0TYIxbnumkR6oYgRbSbCwRlr%2FBBKLzov%2B31WXetYu7WZrl2Fg7D6vR4vT%2BCWcwpe2bTUqoc%2BnWaXf%2BXDqt7M89SIiFToCpWMpGtA7XcXI%2BM1CGROuH7QjqrqfDR41&X-Amz-Signature=f780db4aef2d836b1d6bd8c10b2eaffd8a2957cc0f39e19dc0f36a1d8d539d63&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
