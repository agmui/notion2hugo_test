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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUVKXFS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC0CXSjjzUxgqe7cKYe%2FAyr7776VdTCG8%2FLU7RnZ4SS9AiEA151gttAoTliRWxg%2F%2BujyJ%2BH%2Fd%2FNLwG9cxUyymE3XdUYq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHQt9L7Lc1whHnvrjircA5pB%2B5JyVoke3n4OMO5Xuy8h14J6tVtUJZe0tzjUueqDvHWaKc1Id9w7ffs1hC16w5%2BJrszOSJEtyJnOok0RwaRne%2BAlB4rBCA8eBcDNmXQ1tq1da9C7tCamyyw0bW6lkTiwpq83BDk9CKtrA8Sg2dRyWVLobCU3MPbLKHmi5BFBEwIOS4M857pTf2gwLlh25PBUbs2KmdOH1vB9lLOHTsOCmZV2U5o9zcK4ba7fI9VohT8uti0aL4bXqAV8J25MFnN%2B0iwaQxBgvQhF7o0pb6UjfTlV7hPQd4HMn6hIphAnAFap8n9NjlyNeuYLIzJVGOR1zPCw%2F7JNU%2F4T0ferHbfcT2XxHEjAT%2Beu5LgpTFsvdQvMPa7LcnLlAiwrg9rwEajngyRgT7Q7TOuRoDuEakEQnxdhsoI3IyE9cbvg8daix5UIERsARHm0%2FCwQE1wU6R0DnhtNASLtRPQbklEjsgh2IWxMfabQr7yxhOXduIeGimJvE5NvQyOrx5P8PiO4HnI5tLj91w2R8Qv%2BJp8hQQrbputYmjL3dFV%2FwEfykARSG%2B0lj72S3BCfEj8moIBaWpFwLOOT%2B2l%2FiV3CCDERLEi1TbZtmFXLYEENafz821BpSBvWePkn2zM%2BnJO4MMSD2cMGOqUBAUyU9%2Fq6CTFiGMOO4bLLblBZxYxRzzvosG7g2GYA6OFBEb9tj6cgs31ggOqj%2BIPvD9b8dxq2bijcdk9vNUqSFJDVqwwAoFaIr5cgdB2gDUwYUZhjR%2F2niEMWYuN44ivb8bMj%2B7Zg5ls1k8nVgHCa6MTaCtxifF0RiEpPFFblKQVm55duLYqD3eW4bEUCNglXBUcPZV3q1avpoDUlk7bFw%2BlV0KcD&X-Amz-Signature=cac7b3e1edc29b9aa212bff2e732e50f739b9900af745f0d8714e6ffafc3d41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR27PKIB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICb%2Bx2fqNwtPvHoIHoxSySOiXjMzYMmSQuQnLuPh1b0sAiAehiB0WESuB1PL9A9E%2BbjSjEtX1o5EY168n4FH9hlK7Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8Z9at7Zf7HihX6JOKtwD%2BtSdJ9aN7hvcbhk0Y5E0gpKOxrU0KnH0Ww5BKXNxOxAoe8sGMHwniCf6T5%2FaIESTCJ7w2MhwOswxsyXq5RXZicbNh1xsxeXAP6Elb2NW3BAR%2BIk%2BB93GxIc7BGVTYTwozPMh8D1Dqv8MlGYHPWUMVjWQ%2FFyOPVRLh33eRJLNYUCumbs6ArQP5rbG%2FLAg%2BisnvAKu3AAgLzR0ueS0oKnXf%2B2jQ%2F9ihmGALTenYQD6rn1hKlJeqbu%2FECeIpNHPkn7CM5%2FhBS%2B%2F881%2BmdBJkGSgic4LQxrFZ1nBtLOPpNWAqc5yt59i0fAqHYS00vAimt57fiWl2K6l5VbsRHWyqUHQP6ge%2FSMAuFTNUpQQzh%2F4uhmIb%2FBHQyDX%2FQu7bgsn76f0sCvuA7Z9PIcBSLsrGMf2vpgYqLN5Xj6qga1MCLJEQ4GTPtO4sjZvY%2FmkFBn%2FungCymqpmQ2iZYVqXvmzoXx1VkysnxdB8vPLrQrw2Lr6Xl%2Fd5cOG7Ts0Ex1wZoBwo99TJmSzPjyNmUgORjwKkFYE%2BpkCZ8KibbGxpHxkqR7fy9c4VRgQkiPf71zB%2FINDDK2KNsnF%2BEKWE01%2BVm6NWEtalm5gP7JAtCr79B3JRZWjY%2B5uDt5mWB8jniXEp4UwnITZwwY6pgGCX%2FsdtF%2FWp00TTwx2thB4h7xK9zb2arB%2F0xOhKfdCvzEQncETlei4w283hpRMFUmsIPLJHCZc54l1Y%2BVj1x6f3LLS7YHeNa%2Bg8%2BOrCV3ArW2%2FybtDij7hrnczzAjVe8cWC2tboI5iiyaX%2FLag2oMvPzVlWOehntGruMblKDm8UENJgqk9MHKGd5pmtU1ur06cjrnnS06%2FUT1iIVJRvN2DVNGc%2Bj5V&X-Amz-Signature=b762accf76c2bb79591ebd642959fa527619a553dbddd77ab43e9836e4799001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
