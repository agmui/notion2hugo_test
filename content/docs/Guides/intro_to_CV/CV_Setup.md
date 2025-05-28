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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IUFUFLX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLvseQ5D%2B%2BR8YPs%2BsRypDFRiZZALlcyqpCZ6HT69bjvAiAsuaNXiIZx%2BfBUaN4PJpInygl%2BeB4wsU5X9tCSNpcqBir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM6aVO23uQmPYBUUYVKtwDP%2FcNHfmeIHEUf7lh%2Bfo5%2BWtZNO9rMO83K5fgYfUBTuys10hl5v9cc5Egd8UE9HeXnF48dJPWUiVy7UESOJ%2BP3WI%2BHfN%2FpVSE4ZRQ5yVMAy%2B0ZtENCOBIqaf%2FgPM%2F8nMNBH4RmCSWj4Pc9PUGn%2BPTxdEZIYgS2Kup9qTgpOsenfX%2FXG9hrlgFJsGSt0nEPQ5dpBkUmsUOR2nQWpT88WvcI5bkUD0k9aMXQ1RdzXnuNMslohciI%2B2go6Pp0wCtmB6bmKSb2MuObKKI5taxAGbvkpACZqpPqqxEcCX%2BSt3itOizvweVAKoJ%2FZxc%2BFb8S8XOZqTGVfZzXR1KqGzNXqICmYHTilUZUzqQsbQvYAiXfJNxTrIiRh1KttN89WFfsi7f7LkFENs%2By2P%2FG5VMF0J8p%2FklB07P37jy4Rg4SnUcfKC0f8FJyAerGk5xY%2Fb5J0P%2FGA%2F1uCCmhlyFVHK6xJ4hzElRjgcdDnmuk2HsQevHZIacBfRb3T3XbLpuSzjacyrIv6TfXPhO8gvRD96U25y%2Fz2gckxzwiR5QDQsQxBJr0DnbNZ0Qy384apHW98g3lEcANY%2Fa4tIXDmHL9fYVoxlep%2F4tRvuvK4KuIuxQdz8Lc7owth3iJvpxsMqUNG8w2MHbwQY6pgHxsgLInS9gnaFDVq3oAAFY5DJvH9gvch9nMWpsso8hqG1t9ZWaGo16oQsCZ0LhNg53E3PjjRiM3dAAviHgd%2FWC4LtRGXBxyrnVUZ7E3E0%2BVEpn6yuE4et5cX20jNPYyxQijfU4A5dXrQ%2F22ByLmpDP4ni%2Fmb668ks4HO%2B3CxSpZpfDdgIQRVA2wyuYO029GuJWKPNyLu9mf1DwIiWRWnJ%2BXS49v9Tb&X-Amz-Signature=9771abf3ea616255c378fc6aeb6f574caac22737b3ee53e2d8f77ab1aed590e0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJHK7GI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3i0u6hyA9Z%2FKjnbU8%2F47fdjcsRo6w3TtFOLPDjJSbJAiEA8vNe%2BOW3VYg%2B8H0ICaPzyPKFcHZPLq0v115tNwcMe14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPeKvyko%2BMAQbIWSzircA8TD9MbtNwY%2FwJqTI3LOH1AAWvn6NET38a22ONrj9M3zsJcxwwiHYYVNxDO5K%2FQ%2B1%2FDVMp1b3CJkCU5m1RxhsSs32uxm3QPIQ7ifUZbRFit1a7f5UBrN74L90rzlVFDKn9ZlEqUu9CwdklqzQRh5PQgOUFIIEqXxtDiUao9O9nsJXpKjvYUho1pTiDQ%2FlYslhdfSPHKO6edrFRxKakDNmSEqRvNzqvABKo2R7gNoj9dkO0LnDhQ9v1wdO4MZeGw7r93ULzbZySYUlSY84svGNgZMWStxFugz52ed88EelHfOmCRrEoQrmm7CXApTrnNnrcmjoYZuU4DJV243PAvBdT0c08s%2BtXhQZjP9J3rH%2FcJ%2BlgEx5TmeUI6vtlP24BImv4JJMIj%2BqsiG04U5%2FHiIUY%2BuLuJg0P7WCnICQ3Q0P5mnP1446xPzAb2T9CMdr%2BxpoSnjsPNBDcQ59xYjg0FVEbpxPlYBaoXUeXBTjKScYEHbCanPeJyUoul2f1GCESt7VRVE90kLwyb5mB7456ezk5yUcg0pSr%2B2BnpJ6v3gt%2FLbwGAErIxLyT8njFDdr2ITiu6tPb6m2qEYAWZmpC9WvH3FxXpehTGxP9s8K9tpqAWbjFHVr9xu5gA26hynMPnB28EGOqUBE1b9DEn9Jzg1r8VohrcPsqP0SOgbXV6ga%2FQANbyvTXZm465%2Bwh%2BndPBcI6vQoY8jRIeBkBQHN8eYOu52I%2FN5ZaHYDUfOCDHHwfGxI7X%2BayFBkv3unvwlevwW7uT%2Btff4go0n3huhgd%2BVSvNFng9rjj7rbrzLiAteS3sliEWmntcDUmVb1ybC9Sz7eIo5Dct76lEQO%2BmcKKfSci2aPk1X5RgSBBtg&X-Amz-Signature=b23d16f3e96a79a45e54099ecc75fd6a1564631dda3e37a6f4e7a8e28c78b29f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
