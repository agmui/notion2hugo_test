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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIKLUW3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQC3dEqBYvdRVsP14aPdsJEHWAlU%2FDkJP0%2FA96i9k0TqjwIhANDQarUBO0Bh4%2FF6B0X4qkfF%2B4iRT8r5aQqQKNE0Qs3LKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx99O9T5NujgSO47Pcq3APHgrRcG0DTVwmbN61%2F9E0gtfM3PsKy9efDQthiTlcJLGO8McQGtfizJq7i0WNxTAIU%2FoMlMHu%2B5g4Yz6bnztvi7KBBYTm4wqNNNv3978x7bgHVuVtNxUEBk3l%2B0k%2BkT0hiKVHrr5VeI8bLEUEhD1NbmJaQGW3aqyIMaPaEFy4RIPEktYYav%2F6rrjFTWwFJJKnXADYdzMtJKiGuQsT%2BHCQk3QBeo5TUSvS51eymME90rf%2BeJ6yFjgmnoAGGUGulnX7k7klRyVzfq0FWP6OdmQ4KISDjLqcNdZWMB3CFTzDHioOnjcajAzhxdB12jQIJ8Gyv9zJY0IVirCNi35YF%2BjVPgP2JEtiGstCAm0wC7oAOD%2FKkqoYuemoQKLC5hTgBNsD4crSsp11m6Ij3Gz0LYk4pLoRyqd%2BiehX0DjsruoE%2BRN7E%2ByJ%2BDV9F9RyZlevKk0Lit%2BH3hsYXvKbNpS4U%2FUZBSk4boUhfPx7tfuH9rO5oDmV1ru05cPEUm1yodJgjxSlnSFmQBh%2Fjug6UtB%2BLD9Aqu%2FKD37JEc3A%2BiG3B3vgO9gYe%2BWpg83L3hJDYSyKPt2XNL8o8fX6dlFygK2uT3yChCrnmcY6wKq%2FrCovv2y%2FWtbbtXSC5qy1cA80AMjD%2Fr%2BPCBjqkAS7AgFW5z8qDWVrm4jfpjyyhIR8TaeQG23ho4sgFSw9HGaJTVjQ5rS%2B9zJKz1K7deiRXsXCb5p%2Fk3EzrL1UpgirPnvJsVvLLUUkJlxahdJ9Aw4omlfLcWq2NWZNyP1OJnPJXbc4mlqORGMrEWOpNrwCP3SJvVsZFoAQ2pAyRcO1Ww1gxNiirRSsGs1%2BliGXlZ%2BPzPjujDYRgomdu0enVzNOoUhQC&X-Amz-Signature=92bb7314011e4d73889b3fc994eea3285eb8398c7887723e16e2b2023c6b64f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZG55R5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGcaC1YGbIy1kfj9qOtNPd0j08xNqRd6iNmyq7ZMnHHyAiEA7gZR20B6cSOf99%2FClODJcwltcTUCGx0Kn5SqMz%2BFXgAqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASVbOV%2FPq7Kr4tQAircA%2BaenRoprni0TY6tnvw7IHJM8Y1JbMcC%2FyGL3MpAsAt%2Fk5puq5ZE0XoB3acZoqcfJiYXAuJSdF7PGUqMf%2FP%2Bz1r3o5Qupley5YJDQByxGYwpW2SosbceLCv0uzYTN2%2FkApZhjchfk%2FclvNlEHo9KrepqboQwq3XeUWw2qJrrOBGpAcHHv9yCmvbMB8%2BMiEbfTwfMCaSQqWu2M%2FDJlmLq%2BHSHSjrnNPoDmX85ZUnJ3jw1vF4A3b5jdPZiwvBinNkomWqenoJiRQxNULgj8oKuiUBV0HLV84DDNSn%2BcqI%2Bt5bgzystL9riSLE%2BGniLiSzD4hMv1zDnXEYDiRkRy6JxyRfPawv1P%2BIrDkTDbj2o4FRlqD3ViDKW5HskvQMHSc07GxA%2BTAqu%2BLyYDku3Enz7Fx7MIjvs7tR019bMC7OW61o1Lkd1r0migDoqUpP8wgKefmulTHhxk0a9xOZJqD6yD3QiThGYR37aPiSI9bxul8yqKQyaNDqIb2hvJjECAvsLPQmvXXTNElDIXV9q2OVZ5ZcRq7PpTa9w49XeXSEtmvUK0Q6Rv7NmyRbLDsijQqXrlgKxmxl6uB3Cb0b5VPT1znvrUX9hYG9vof57Ui1GnpMwIzcG01apdlP7aaV5MMqv48IGOqUBwX0B9uJ1pVLL2s6L5y%2Buf88C10FRmL2%2FoyvRr3mjFm18stBaEiLuj77ul%2BrEzvZCHrRfgm%2BA3yIdH%2FNwJlH3%2FpMShevUZWnJPCizMSJL0DQvK8AR0rwuEqW8qMZ2HDoMvM4bQ7PyUPITBd9qWr%2BVHsv2kh7RwYIgFi8kimiC%2F9nLXTsKXrWSwm5WYkRlyinftHRFGFnxm0tRjzkwPno%2F796OIehp&X-Amz-Signature=777f0dac97c229ff46a53e984d5f61f187c116ba3e71a63e7dce452b1db0373e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
