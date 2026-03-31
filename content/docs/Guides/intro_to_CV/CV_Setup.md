---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YDOG7Z3%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDBItwzEe2QrbEEbMhYftswfQfh%2FqdtIIN4Xg9huDpirQIgHQ6kdNG7qGshD2a1ZrmGEC9utyJV4r48V5FfPys%2B7iIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCw0euFM3Zy%2BOg1rZSrcA0Aj4v2vLLprr%2BLJpdyq4lO5uRSvQPKZc2lSCQIs9j3LETaOZZchnl6hH9gDSfd4KfKgv2TyCDPedNJ%2BmrCINPCSm21R7JQ8ki84nAUEx32DWktiQw%2Fw9plMrNn36bMIGiXnmiSqzMQYcbtNbvtevJx5GwkLByiU6r44l5uEhcFNu4OJ3IidemOGMtd5SO4ghFrWL59j6EixTAg76cKxrln27we2ubK6xvsuPjRr87DB95o%2Ba1JV8GHGI7NW12e%2FU3MaPyPSy%2F%2BQW%2FZj6mcpw%2F%2FFMlHz4FWMFF3ER7jsA1u7OTgDbZbVmEuy2U%2FWgZlHwl3ziQAK2mqpNZ1edGkugmBJoWZhBDyortjTiE%2BTwN5VBoPx9LW%2FmcDsjjXKz5D8BXRW2y%2FXCBaE%2FJ2GG7D42U5HL8Ppls2AZkeXq9dXnSeneDyVe3Nlv5FMy7EmHBgeobxq%2F3qyrWKpBH3RWK1GoE4WDrl9niwQyC%2BeiRBeKEVZT8Vp3x1INiFEUvzCI5kYgaFmHy%2F9vLozefndz38CZivTzSNNcz68g67p2xm3FEXmPdidH%2BEGxYhCaq8oOrNvBMnQ2eCRcZtU89XirbH5B%2B0SFWDD3wSSMHYvkTzpZfF%2FgfU6U9Wu0C7Igb1ZMKu8rM4GOqUBH07ghhVX%2FHqWOtsRzVMIyQBqk1KuFC3D5gV02taUASJz8ByTDbXx1y%2BaT89Qu5UZYCJToUChw9bUUsSbJ%2BymAejtuhAHPYcaZuceOWiA1VN027O2VtA85TgXpz0D9hjBN1upQWlJQnXxTndE6agqkgyB9t497mpbE8OfLzPj6S8DgchM%2BU0Mj0QW5pS2OVKba9GdcfqedXuJjQKR5ZDkeEVrURts&X-Amz-Signature=97745a6cf29220c367976a837b56e4ff7e008d8300251cb31f6f633f07971552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DPHADT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDAbE%2FrIOsXMclbfGxxObXk3dmKp7GLpaF6soasRq2hKAiBJcNm8O%2BRwsRjzHwSdXOMZEUON0lSSWb6M64mFKLtyJir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMbFXUI1z7glXVar9fKtwDcyLw9caSMTjk5VTrqqcq6VQNHbgjCXBiHhBAp8V7K1a7ejt1OjFSBqxtUEvlui0OednDK4IV60BqgFvb30KiuuJv1LJX52xQvaUMX%2B91gCCnneot6ZKJGBL8D8BFdVb1z72tlMoj71TULeAJVEQj%2Fy0XtbYwL2WJRoa1xdVh6A7tuJ39scrNwxrxtguRntdEg%2FmpSP0nRXjw1p4xtCZ%2BM8%2B5PaaIUyHh%2FcbLkQXv%2B3o60p8BeFpvVAmXJFL0rQUY2S7ZD%2FyC1eCnhSIJG1ZbQsSHSaMo%2F52pdKYOUMAHShZsVJjPOXe%2BzHf0exGRRC0S695BWLtvUZmTh0izriEQbhKsKQnZomL6RVDrq0zJDcxLKCQVhdKoSlhK3GFCiBoY9DUlReNO0OAanbytXc%2FfJpah%2FPxlO8FwaFlyU56cOXZlZ9zzMxO5o6al1JFbNUsa%2Bltzi92MbT11bvoxgF4phPgRV42wc3qQbLodMYiz%2BoVUFrizMkVE0d631nr9WOwyVmuEhyCaKtpZRtz%2Bvz%2B1K%2FjrsdyjoCIzEu7autLfMn%2BkxjLt2rd7lYoQK%2BZd99ZiVWzBEHKdXbk2iR%2FpOykHeiDoupLGQGuCtZZG3V4JFs8a5NtyT%2FpxsNimQWIwhryszgY6pgFuspu6nWhz%2FXdUa7FrNFsCYB7Iyia0ox8i%2BoxU7zx1eDfJGSpOFQQ5AoOfQ1gAHVPmtkeff0UERaUHDDNmE9k6u8KLYng8KeXGMJPfBILyV%2FnfmMal4wW1jXn4lfl5AO5lK39yJ4l3Wm%2BCFalMdRHrmBqrmQ5otaICsOiMXqSEDB2obkltCzzmoRUPuggveHPIs6KMsYz%2BZbFtr5u5UlEkVIC%2BR%2Fny&X-Amz-Signature=b4e2972f739f8c501b3763d2bcb78be7c27f27cf7ac2591eb0ae3185a6e1fc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
