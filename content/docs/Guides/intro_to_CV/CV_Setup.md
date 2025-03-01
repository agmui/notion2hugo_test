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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAO4LOC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICSg1qUR7n2PkNwMA%2BqiXwHECbOIX7eaeLzJHqxSKhvXAiEA2doyOg3RzrzP%2BjFlIDBrZZnmyV6eWLkzUzbyDIi8o90qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBowJyk9NPl2VLhv6CrcA3hsSDijsQD6K5cYzNx75ypHAHbQtdRQkmhDp5roWYDLaUFoai5eIaVS3jcDiutd0%2FAIEJejkKcBLNBhGJ7R6ScBDuKW6KQVH%2B4gOhpAO%2FG%2BndxDfISY2AZt8HubUxQba9eBdM9gTw6ZiqvZCtALOaF890Sua7BVsThw2bVJf74y9uGVjHGSrOP4Zm6jLq3ggwqKed%2FCHrxfJ%2BkAFsSAaFpczcPgGGJgFczLSo54eeSMIe3ib%2Ba4ZyKkDwC3eDi4AuqK13iSSuUXC%2BDmqt890s8RTtW3p%2BA%2Bv7wSKiDEdEcRlMGBAHOBz9%2FpE2mWdRulsjUSq1ivVMJUh7ZPBusus%2FdmIP%2BV3y3nnePFr%2BylFEpTcrdjHuZh7Etc4IEcyhadn4v5Wjz2Z0wKMtdpgkKTDcxLeGByrtHiO2HAUtU5F3umIy39dYmNkujo5rCb9%2F26MeaazuWX6MZQLtl5eTZmneAlWVelzIH%2BIH6qL5Jj4zShD100yAfAEvXiHuz1KOUiMJ8Ky6W4FO%2F%2FnfrUCEdPBBma9UW76PO%2FhmZoE89K%2BRCobIIOpu6YI7Elq12tGPWQ%2FiFXzpfDp1GY9XCvKUgTdXHfqTHdK%2F7wrxBMeqKmlkItW%2Ba9P%2FuO0%2FBYSJeCMICFib4GOqUBmvvqEoGQLtEXRmMuREx76dw5Es8WSksfyB%2FTokV7S%2B9sxmO9RWVcxFB68CsqEC%2FWj%2FHsAM7dgryc0hSJtmW0PfgbXgJnjM7yxMsiUWV8LHyWg2Yg0miOzi3mdjyr8i9uKp3pe0iq9isUqZ2WeAE0C0hZRjAyfgk69aOCMiSKrUM6onAHLMcuCxbcNN%2FyapM5l6Sdx2vHLXH5yqlj0r4EFc3HziyV&X-Amz-Signature=11c3f0f72b6cf3b864ad67c41d4cee85a05d0bd545915221c48d4a19ae3332c6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB72P5SZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIA1KbT8KYcyzSY6MDv97bNCxQ6JZ3uvEefHg5bYEeCTJAiBTU2Yy4GWNhOuHEIyh0tcfiTHNhT%2FqEy2xVx5kilxPsyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhutE82IpGMSeuu7lKtwDok%2F3j5pkhxtJxkSq5NL2Vly7zBkBiaVC4U9HNpDrFeMLaBvw0EQU%2BBjgY1ukiMeCL3tc%2BVbMvAFPugjUZ0Xrb7yxNT5D%2BuY6S3HYXV3OwREDG0DHdDOX%2F%2BE5YuHK9wOSwCvnTrPPQBeiqNicIbAt37ogHB8b874IC5mYsLrcfaF%2BYYN%2FbeAVs1mjuHevLwRlUQeSe1sdor5B7fZcPOtCRdTz%2Bmt5zjOlLscblzx0bzHGK59x5jeaHUygxUrIuMBzjh9Umw8rAs4sTVDR6Hv26mBm18js8Rhx4KDwzE5auUnTOhXyF%2BG7gord%2FfPVJWaikJtDGBH4lQVLWCvFG79IyGCoH%2FI7c3DoF4gNwZ%2BtHc3IHAF6D1E8IRQ4oVl1pIMj7eOGudIaPaYRAObW6ctXWXcjOgd3Y6%2FDLhfxN3H4AcPvapuZsmk8hL%2FrQUYkqmMBsXQHj9SuM2eyYJts8vuVgyLzc5O48ZcPCGN7PuKpV40Yv1OcHr5MAiXpcP1%2BAPi7jbrLFcJ4OhKmNm80kBvKTjD940amaZoWQWrlblOak2q8V7tp5iOFy6A2SV%2FU3QgGl3hovcARUePj5S4JrHlOcw5ZprdT812TuHryCnTm7Bwph4K1ZynSYDxw%2Bu8wgYWJvgY6pgFPuAht6AXRmdwZzqazEKicFc3JZPimyDbvV7UYFdk56NKLejBsHckKMwzrtvDaWVlDuw2sqkcTHpT1IucSo9WOItQU7ZoPFm3fxVhJ66ZtvMdTFDLnXEluFrbjL9M8j43xvmY1EoSfCdUXqRL6vvtWrn1zoWKzUSPR2iiA5hU6T3NXE5lGcO7sNy3Ek50EQT12QWc5aSmHmkSpJ9Mau7d71ve86b%2Bj&X-Amz-Signature=06043ca8e00e33320abd97f2489ddbe45153cbd1f09c649a9823d1bb3c5cae6f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
