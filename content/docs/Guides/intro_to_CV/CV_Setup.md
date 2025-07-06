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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WYQX4V%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDHpLj3Mg8I22h0GpPZAbLaHG%2BBtOGTWFwZXx8mNzUbogIhAKibCBeeoTEuIfio%2FxywT1a%2F2U56jMkNC3UWGGwNA4R%2BKv8DCFEQABoMNjM3NDIzMTgzODA1IgxNiXFdPdW%2FtMEmBFQq3AOLl02pbeypsTvYoiI9gKetlOBSx2Mz7yBCZohy8%2BqPJYTEGzA2d9N%2BKWMnhhUDLGCtjTAH7UdS%2B0Sumjc7HSKFh0H4XXB25qJmB2Id8sEHwMXNVP%2FdoT3Meq88atkVXl59JAcHN%2B1pWa0tj18qjjsJY51PaMxx8IbvDtKqJ88VuQOyCgvPmH6eeqRx0Prf8CWNFazEXXU0vLWYcEBdvgPkikd2zv1%2BTAojYfxv424DtqwLOX1BV%2F2q%2BpLaeOjodTH3DYiGLMkiHvJak6%2BOFOksoFPtxZYGQGxAzlWp8zs9GBe8lqYu2kg1Pgkwv%2FlLMVZA0kQwzWDPWWjEvknu%2BMI30wvY4DVyXprL6h4fmPeNCqMYQ6nMeBiLF1c%2Bu1ueBZYmEwl8CY%2F1%2BRVUqMt%2FZcGKcWspVtyXwg%2BIP9QQT6BvM5Xb30dmQM%2BsF4AGkY38g6QXgoodGO%2BJMHbsTozAFqoGni%2FuyQlpWHvIRzuxcblJImGQgufv%2FDZDdcHPLfF9w2D2szmWLgL%2BP5VqCZ3B6z6iHk6EfBWUnSlHkB%2BN9JiMV%2F3KS4Tl8KNiylA39hohX1GnWmTw%2F08HS0WRvcHw%2Bkdqe997cbGMCsx7a6JUk9eg7mXBF2hcJY7LbPRtIzCt%2FqbDBjqkAU0EkzMNeb6%2FhKs5%2BDKIvUnRiCuhw2Jwd2l4Mu2F4sGd8x%2BWnH1x8Vivg4T03EFBuKQfaY5w%2BlCjkjjUdZ6HypkzJFLWKrmjsB97wx%2B30RyvtbenKdpQy3lIWDZ1FdKZiQRxGvMnxHLm%2B6Xd3dDuRz3pLxLcLdKfYvMiyGerqBluq%2BSZexWR8dbDDLYcWEIvFyPjN%2FqriHHa%2FI0V0wFzUJs2nR%2BI&X-Amz-Signature=fe46d82cad02c57041e6c580ecc9b5c7fc261ee5170c7402123bade734cc4df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXYCIZX5%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCfj%2FiAO%2FLUbvlAuIfJuqW0Jnh7vxAcCtx%2FXQ8dzuEXJgIhALoU%2B69QP7yKPKWgWg%2FLI6pW3hV3hW%2B5GfjcWuzEoCesKv8DCFIQABoMNjM3NDIzMTgzODA1IgxNNmmnJ%2BYHqi5lm6Mq3AN8P3GkmyS%2FYwr3yxrya6SSReapTBi0O1b4t%2FBJqMMgJ8evBWEVrKx43vRWdoTdzZT0JZCE16feCI3NBsPlmaewdbe%2BbZ4PmkerO5gE%2F%2BVg6SQZJ%2BTIo1SzyyJEU2XOptr0%2F1vAbqL4%2BaLRj90XvYiAFLRPvIzAyCh%2FT9lX6ZUpAZTqjbej%2BxBpi2TUMnUKNz0jzpGRD7uH%2BcrLb1wM%2BfBIZ7cBy2mmxJglvFUOE7Z3KhplcgZJ1zisWe%2F%2Bc6%2Fpyv%2BQ99YcZbLJpPZhDiUSzz9%2FdgY7P4jhuov1CQTC%2FSKXur67%2BPF%2ByGAgd14lz13idp16tU2IFU3yZV2MVzCy4e5C0bw69QpjjeaSlzUqSXYU7J40xyLiF%2BJyTKeGf49sDHpQLmW%2FMFDJJaT%2FZQfBS7EJPuMfevQh6SHsniNcAvbyl7QYIYyfC4nZDMbtY12yrBWCOppIRpjWspDzc%2FVHuJWKAXlzElPNqo1gLImC6hGDM6DaZCm4PHf%2Fq2fjeOgW9E6%2Bc5yEoijVi%2BjOEVZFNHNSfMs7%2BWvLCmS%2FZ9w45R7WInFTOJZlChGXdQhkrzIIYa96Vip36t6XUmBo%2BWojySnURGh0VvNJAWnA5WM31TcvJ5aOrcDHe5gqtQOfkTD0hqfDBjqkAcu%2FyHkg5V%2BwM%2BWv%2FF7%2FkWCN8liK6dPMmSQebPa1vvXtzjejixgrtyk5rnEy9UHhawST%2FHXv6x0HTTkpXyQUouVrU7xRwiWJRjAs74xbun6X%2Fw31SwvEHuzOHVgT5axqPrVTM3KApDqTY46si8%2BlbOa1evgMrfZuCFZv6tV74qyLqylNpaV7eTAwxUVmlO9JrQVRVZWeEcDHoafUn8Foga5Iuk5w&X-Amz-Signature=cbe949afb9893f2ad2f584b5508bfa74b20138e711ef2e60e63c9299a2a618d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
