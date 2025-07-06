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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HXBYA7%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIGvpEpNbu5Vij5OmfkXDIogfD2tdD4Dz7FURSEt5SVRDAiEA1h3p4mpVwBxNtKaBKn6pMagMkauN%2FqUweeOWwi1A2L4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJfRxK%2FRGGNenajg0CrcA1mESMzk6pK2o6b4NmJC47%2B9D4lO1WpB6OvKuBwiwFxl8n66bghWgYI9%2BBGT6eKnlLsNeqiHbVKnp%2FbovTP5m8dkF5pBgkRS7rN6WHg3G14zWlF6QUY0Qp7xIlB7J0xMHV352HxdMOn5eEs4dWdZtnGoKbTJQ9xR2L0WzZU1cGwnV8u6ya80lI6ca7dr0qL517Pa0anY9BvxRhKq%2BsXxFg58tgkYvJeGV%2BPuJMiF4Tg0W%2FAX5JHK0Dcx4V01On7HF8t3i6zruPaL%2BtYE0u7JzsKFN7t7Tf%2FzZUbxo1jk7rbRWqkab8%2BjHtSwhIg%2Bt86C3k%2F6Cq7aNhyTALlik6OuE9XlgupOnn2m2uP8%2FMGXnJNTj540mDLI1P1KRBiZIwvhaNROe4J5qWB1bBGLs9Uu8N%2BRHyJuU8o0pW%2Bt0e7qGHjEiSEiwBuheKkebzpFOx2lLoXTo16%2FOsJ1QHLVZDdqZ4KaDtf%2BYHYQRiHivXcL3E4sl7jnzncifre5XqSlgJnF7mc8naOFUkS21g6cI51%2BOMfdOi5USlPLbfYTRFRO7lGYU%2FkH3mi%2FvI8WEVve%2FiLxj0ndbY9IYfeg6ZbiKW%2Ff5zYCOUy1I8%2B7MNZYXd16IXFTh1hQsOU%2Bgh0YIej6MLDuqMMGOqUB4GBvufLKDThxkObUauCcl%2Fv8sLbVsiFmIFsGknfp6VyrhSmCknPjXI68Ihuf9jYnUTqQaK%2FgJ%2FFlLVyysG2asGLFEVsKYz3ZXzyOjgsEM%2FQ6SnG%2B%2BFOjXz93BdqiEVKFd68nXm2h9SK3dKPC5ZVqvPMJEqrPhADXKhGTNw0dR3w4kv7Y2qCPMnZvipYgXtr4ht2LWY0RQMB6AEwsu9juOamkjrRh&X-Amz-Signature=531f4ff7fc9e5b2275e5ef3194196ed5488c688b6a4f99ab30703203fc0b045d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4H2X34%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAPXJZIpGHzgQ8Z%2FutPK%2Fl0dy%2BD3N6TSR9rdq4p2UT59AiEA%2F7JhMJAOadpawCVot7gDTlYRNV%2Bfcbu55ICErToshr8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDK%2BlnBDh4qrZtG9uyrcAyL8vH4Sxb%2B7f7l8hGRpFTuDyLmw7Kioru5m6m47XE9YfqzhIdYzsmqORulTPpirEwSqfszuyBwufIQSFpxpjd%2BwtOnafTVqMHcmMTdiLZlAcc7uNOm3fyZFoLUPkJzqvUtvM%2BBk89owsA5UTrc0hdOaEMx%2BrdtXjzY1wOZuxS5740S40rKCRZFGavX%2Bbb8mdeLcRHiU%2FKKRPxoGhYpuC2rHEu1n4If0hMICGxSMytcoVrK3ChKI7P%2BHwl06RlF8I5E55Lk7HuTaZjlQGUNunYjnP8CapOVedP5gPU5XI3g0J25FFvG3vH1KzK8pdS2QD4yNIrfu%2Bdycrf0VO26M3%2BayUqA08Q347Y%2BS18Qu7sHy%2FCs96BX2z6a4jtPXdcY9Eiuv%2FHsT7DiW8nBTLjZcnOA7YBU9fS7jXtg%2FZdb00D7cDLU0gV3q2qXnT2PIEvQIEikTlEfPQEZZVTrOruGcRyXcXGUGmhTrvMs2nUsknUnmS8%2BvdH8%2B1HiHyivlLgluUAlG2VqPWetnXE%2Bf02qGPZoRFUXjsdP3sUt70OeJBBf14iMNXs1qdfUe%2BOjf2AkMmIsqjpdCieCf6bCmCWWrlXpd4g9bX9ymikNfhvvCOTBORHX4SLWjoM3lc14sMIqyqMMGOqUBqnK%2Bkukbjo0Hato4ZimxzukZEh7gTJa3Cna6Pa5h9Qs5IkfkM0juSe0iN0%2Fc7LWc3nHUjk%2B%2F4Qc170SJ9o6TNQF4zU5japiuSV9yxZLY7KChZJhVRq39uOAHWuE42NkZM8u8rH69MCPPguYwX419ZAxsr95K4uYEm4qBwDdNrXxRE9jCorqSsBV5bkPfR8dElxj8BPPLcgwlTsu5yLafXCVuNRSx&X-Amz-Signature=5f0e0366e45fe47a73a851e5486c36e2547a3675a780ffa4b8ca60ea05766b20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
