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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BGIMO2%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIByjQXvhoP8bVwatykNSswPbJ4JzMl0gDf%2B%2BY0BvXg5JAiALviqvfXSJzAunKSSgrXogEqhgM6SqDNeitsV4OSDZSSqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BL6Coxgxg%2BmnI3HKtwDTzpteVXLDEje86WebnipeK15M%2FZcmScD%2BQuzETd6c%2F5BO55iy899HhZfvdNfkBiL9Ceu%2BCHxNc3yHe0MM7t56tnUHxYu6%2FEJ5SnJdzEekhACn7Pz70uOTgVTezHchdqXIYcoLHa%2FJxc1S57YhFlFXHMBMu4bEh%2Fqi3dHRNAyx622d%2B54%2Fjc5S8KJFKma%2FdOXHDNT9p8qH1WAdT3fDMZBml9btUTtr9hX7wAEdtrdJiOEmi7gso%2Fc21Ga6g7mvuabIA8P96PDAU157pvvDttoJWiJvxLBbEZXSBvYRrl1lIPZLuJ6mA8f6QpsY8pCqqD9WtAPyadGGoIxdLo6cmxNhBcyaRvO5eSYA%2BpyG46tSmBVnOKeRuMWXgsOQy4vQhTz%2BdZ7ukn16F48nQMpnB3V3SKJsZS%2B79xt4g%2FxOL2LrfLTQ3PTE6jjicIhATRkgVz%2B65NDWRdTZp7GZDsk4ldW4xSVUTEhoU8bBrhO5wogeKPlwVRZkj2uISLXyV%2BZY147ja9Ncg7TFSFLEvW%2FopRZXLL5DGba%2FufoxFtG0si7jr93gwwBOi3fXE3C1FowGomDPPERb5rjrro%2F3mxtR2NjF6MOBIY1E3X9jvniD%2BtmmJ9hMLWbCJSdT1v5Smkw64eqwgY6pgE3L9oNshjZxV6SwfgLyZbTPFqVIhYo476CulUnE29P9vmy8abNWo%2BX6neT6e5vxHddqaUSW4YBkEWzd%2B6BpIeNxXFJbXUcCJX7UIL6SOJfVjhiqd4PlS1qxIzSJlXvJWtBcHK0gyiTzPUfgC4%2Fz47ho1isVdS2t4g9o0btP6Q8EIbIc%2FgAvzZmAD2W0EixUaHzO9DXGPuLPkdfeS7p1gRzd%2BQXMj5X&X-Amz-Signature=38c27e8d0026d769af851ebe98c7d62cff3767cc66cedf7d332ca42a4eb70a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTG7RF4%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDyD3anmBF7vUPE%2FiNwnIvNSobfgCy8jEs4RRV3PSjHGAiAzA23ZtJ07hLfbFwaRFtL8ApuPdpR08XlA1BZVjTndSCqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYQomeNX6zj9Z2GyKtwDPSRf2Wrl5DsL0Zsr%2Fuer1bswi%2B0Uoy06YGyeznswY1wbK5Vm8QnOlQAXBW0IaCxTi7c6VzflE3RRjvmA5qH17UdU4q3mQxSoDt9Y4n0kRdAHvJ0SQh4KmTcf%2F%2FP69icZiSMM13e%2Fa0MfXW1jTUm9Bdr5b5RtzNyz3mzKqVa6GMCwKnmuXaYtJmXaFwBSzP0BC6E90nmKiS07SdgA5R5qxmG8%2BCRMDFAiVh1oaHm8SQQK%2BHjOvK%2BufqRfrN3gIkgCXU785iMiNsxP8%2BqkDQSyv1Bm3xtwoXbObmH%2BZYIOyU1xgoHGVSAaJdMC5%2F%2Bsi6nauYI7Jj7PG%2FD1Y%2F90%2BdDMIMre%2FjPbm4HV%2BiLmUSJWs3SEQ5MdziOvPDLrX%2BFZXYLM10u5t5xtzZ7RmgA1e1SCzppwPs%2B0SEah5GLjQXsgUnULdK5ofKTsd1OJ8qO0niC9VyqJRN5ThaYiSyvm9yW9AZKNzIKnA13iZ%2BqNT%2BGPV3Z45jkE5pFSWC9YqzYeWNPO0gokodWY6rD17peN9pt7j1fmwLyUCPuDo8lvz4Hdqb8oxUKK2Wr0%2B%2FU3uKYZP5xlc2pK4DjePEzG1Yk6lKWqUDXNE2vr5HXoUu75BN9q0N57wnjKl38%2F5Z5nvTow1YiqwgY6pgEOrF%2BlKYq3w7GZ24iMoQ1BZvDqEWZikTUCNNNDfoOI6b9NG6QmtDQMi29HwBoBhyDSjLaPyu3Qr%2FgxlWk%2FZRLUBIyey8l9VJyvLqm1XFrxqFiksVYHfaWaO1hHLO1GvjWt3kVkhPAxTxw49FY%2FfG2wEGM1Wo1qAwNc02l4PpXqJbKTyS5mjZvM7TvR87O0lWyv5NEPgdvTju9bNVlyuUNP%2Ft9dfKmu&X-Amz-Signature=fe826d8abda58f4f91e0705e7b752c73ebc9878e12afe9329e204119082156b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
