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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7LKWTI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUPKYaYj5Gr9NZGpodUDnceE4XSMm%2BL2O5rk4fi5twAiAn7DiAtsRUZTywiL5ygUENVZHz2%2BE%2ByZ8XGD7Jgk1KcSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMn3x5OQXXAFgPtB0OKtwDvwtjGx5r1LD5nUhu8DQVb7K3rbhMCsBAiCPu9Rqq9YNKmm57UrNN%2F5HTTv5cUppxQQITzLAaJA632i1qFw2aKA%2FA2bADkHFx0HsNRfkXIUWXQwoTI1FRzXgx4a4MASGH%2Bud4HSWTFi3sGWD77H1FuMIRWL4isnSg2Gq1W%2FW8WzRcGts0narAzJNFfM1MO%2FlT%2FYV%2Fv0AR0F3bcw4f%2B9Seh0MRUFrVFv%2BL%2Blcv%2B6UpBqf7W7ud5ZiH3KKQPirK0UDA3JSKdM3H1LhRSzppL2bB%2Bnr3vEX4qv7O9EV80ZOzGjX%2FJMvRcugWmA3p9UidyTCiV6iHO20rA%2BNPaJpGvKMYbKqmPvalymwwjIMXCCxmsGMpEkNimYoH4YkTiEMNKABed2ME0hMxYTJ2vDd3XSHtEWfI7Zl93S15%2BRKmWmDPRAagtI%2BGoV%2FBVH%2F5oPDtTctB81Sad98oGL2iw1IbCRmewCqUIDNfcMs0YRFbzGsIk0nxtJe1xlvGUVJdl%2BVfp%2BgWR%2BTt4ISbvRkI0N3j4bNnX%2FFDhwUNRy%2BB150InkkacujdxepdVOD0oTNWhnLevAjgYUFoKGu7tVoPq10NsAdpJrJb6p5T7ai75fB7smdJfy44e8A5IvVZiGaA0wMwl%2B22wAY6pgGp8076W56NpeVl9UmTE076GC%2B2kkxC9yto%2BxN7fCdKwRA807YwVAko8av%2B3AVvXry1Z9xQbBbf15J2s0BmCuu3byPLSLw25oneLowx0kkqndjNoSdJOsq8HWwMcgc98pGjHHi8d1nU8Mr3UxOWw5RWI27mg2qSympytodBVS89k8gQ%2FBjYWOVkc%2Fkg6bizopEw6sHZe4hCZZsLC0buXei6t3UlE1zL&X-Amz-Signature=cddc5c0901142f62a897166a42e40d8256e7c9f9aba1a4e6b961bd01c4c2ebb4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMB4VZ5Z%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF%2FQDEK1TRVhLSO52Pjz8iQZFQ4TEdvkaMWdq%2FVDxoBAiA7sMh%2BvnliwXrcF%2Bz9DUUVi43kWin9grauIhGDmtAQISr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMTBHy4%2FcXC9XN0gJ8KtwDvEWc4Fr7Ck4gjr1fyhEZXbWUKecuBltZNtSTTEq0RBGdrtFYECjcGsJKUydNs3M0YNMZ18WjNWm%2B0Ihge3GpK9nDymVJALB0H4QiUeeGZYQC0N4IIujshOTdhWBH5QW6Q0Ar5lQGWPLEfMgX02BDeYI5ak2bXlCSlbm7K8yNdERjjj%2BmA0EPDrldnR%2FxbnOxI79EMLeIAHTrstzVX9BsMHGefxEtPz5JBwarCNtX0TER225JVTfSmGJzrqEvQLsOtlhSH3U2OEfT%2FTs65phoM%2FHGjUV2JiZu4crw8gwc0aap%2BgO8VRwR%2B5dgnMJZhxk%2FTmZN6gzVsMqcxghVKPikXYalc%2FLLONTEcEMxOjz3cBXHRxhXaXxOiJfydMMejwAdd%2BZLZ3dh7rPq%2B69EhvXzyPwZxuLrHcSp97dmX3jZ91GmhGVSF4OQ%2BCNqScVlyqi7S4NPurLaJDj3UjYdS%2FdEfssCuzfygyi1job%2BkSzbvP6iSwbM%2BTtZogWDlM0A95%2FJswkzjolDYDzr3vbo4cRoaDFT24slddKB7e6oDq1mC31JHzWIQPwufQ5WE3uN5TYrkB2bXvQAs13C0xnCRg4Wr94o2ne67b8%2F6qWr2XKvkp4MOQB%2FXKjl8SRt2AQwgu22wAY6pgHXUFhx8o8EfVLg3n8zY04qu4cduTaLqnmPiTsIpKt2VpAgCoihO58KdJhWZ6YCj4jeAvuadWSoTEo6r%2F43YfLHDp3Xlez0ZTq%2Fb2E0e5JrLTKfg2284j7y6QY30GsROfMcejg%2BBe%2FOpBF23v0audGPTnxtZrhLJK3FdtLIANkUuHGzD%2B060g%2FBE4ULpEV5CoNM%2FQzWma4GAYrqAb1mnHrFuXwYqBPm&X-Amz-Signature=2e78069d24e8d9f2f69c4ffbd0d0bfd98262fba07b76fe58600e42b4ac280943&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
