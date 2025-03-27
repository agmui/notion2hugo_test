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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PIWT5BL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3JIvk8WX5LLRI27NRhLq1fnvAAIy0Wvqc4uf9yCmAKAiEA2ir081IiYYJmNbCO7U8ymt9YPAxYFmHvfo8wuVkUwEwq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDIyn6GQU%2BF1BEDVhlSrcA10QmDhelRKztRPdKYKqsoSKDUwZAT%2FUpT4ZvUP8j40yWYggyJ8TP6QhXM%2BuI8npRy1U6rXcZKvpko1N%2BGSvXndwMuidsgEnmi0jmf6LiRBmrZ2yAPoeHSLdmO7gNqm9TlTOI43Oe3pS%2FbnWBPxVID%2FUAlgaa%2BHTeQHex1zP30pjx5i2eYS024eEiCU7hsXJqfnBWw%2BMo7LiFGcUcU6mXlUzQehESge66SJAnm3Ef%2BQfqTvh5Mmqrg7hnPM5T76wGMTGByW8sySyb%2BH7L4X2Z5s%2B8gkzR%2FiVhVwjV%2BnRoF1OjHX%2F4ix%2BEi%2BhJmQDwwX9oU2fM32noWQuSXvmHxJTI54kBt0s40W%2FdOMbLoyHVsoKPx43jGAnNFlwgsDDL%2FD1%2BkGokEwi4g%2FLuJHN02swwyTMAK%2BLsilLHOnL6QDPJ1dnwobPcVq0MmGXgu29ME3Jl3UGLycU%2F1a4MTWfmxL5yerTWf%2BtxdAbjwqOdryaGGtKI7bVMXtDbWElAC0PsGjQub8bnQTuS6fxx9PHG3%2FMoJQMK4TzDa5d4%2B%2FyKUSlILFrdU8lCY19uleRE%2FRwduwnLzh5J3S2vOtGPG8aJOpnWkI4EvxcnyW02CXcBLYFXv0%2F3bUGQ6uAqoleWJxuMMfdlr8GOqUBD%2F9H3KyAEli0xFU%2BrYgAjL4u%2Bxx2%2FmdwbXOotlUbSRWHaTd0bt%2B%2B2NVyZMmBSg0wtCQBCYP7xvZ%2BNvubEw1GP4SmNMXb3WkplXdCs13J6gHhmBiWGge9ZAcRJsnEIrqZgerWJPuaihg7f5cfrZArS%2FCWvvSJzyFiQrHvr92QPI8%2BZSoCenGd8XvaYuYObxj%2BXFZWOS8MU2cvPJnN0bCTWYPkDUaH&X-Amz-Signature=972ecbf2361cea0d2688ec45c283cd46a62411193b51798be315ab08f4f0b69d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ7534QR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7vgYKSC3FKq5WtYiyju2Ldr9XapejqofRJD5qtFRKUgIhALBXjpgHzYTF6H5RMJwhOt7cA6p%2BWCtSl7vy7kvjalRCKv8DCE0QABoMNjM3NDIzMTgzODA1IgzcUtwEZMoxCUqDixoq3AO4vltK4w9Q73QYRdiJ4JC4953NvKj9Frf9hNOdlv2QciL%2FAB0dJEq4PMBQjXGPDCESenhjt1kdGFFAHD4F0f%2Fj7OnI0foHeuSuYzZrsoaSM7gGzesxCCWmIGSR217yFYRBvoK%2F1ZE3TnmnbAmBjx1uZHRIEETs7OBlQDaUtUhw4vWqYrVmhqkmi%2BaRtlU6BPme%2FBaofkvepIjopPLvQBE2t0iR%2FiQH8S6gmmYisd0yUCZJKpRpwpIRUc1DDKlIZF2wHRL%2BkAkUOLB%2FpoL4kjXAqduJwOxL6yJ0l0rmHUhEaFX98NeOTW5TyVry1%2BPd63HwVJiIvBkQOcusG5A03kxQSmfHZ4%2FILsiqH1U5tJ73yr6upUElQ%2FLQtP0KxxSx3fCEaX95rpjF7%2FRlIUxf7mg6ut%2FBDKWELZpjbAKwVfv2MlpZ6%2BIjbdcVz9OmfGQFF7V66U%2FcKZUv7YClOmoImDV3TqqGD0%2F0sq8Pd8I1tiMdt%2BEpn5GgDE4xw1epl%2FUWDR6B0ChcjfcGXsK7qsA1dQyltLTUBEgYjE2oMTEfJQGXUDE8ClpVDcDfLe%2BjMAHYuLWVP8sn2xyvi%2FnMQO3k8qZ0SXcCfkHxk9CLDx%2BDDxFQc%2FgiOpj6XLnd99F%2BwDDh3Ja%2FBjqkAfNERIi%2BQ4SM88gKR8Atdrfrb1pAxc0%2BxXx95q5p0PjZFINU7Ar%2Fi7RzeJKLd6gFDTmZ%2F5dqwCT6ZZTquw8%2BOPbyqupwxFQ5wfab682FfvAm%2FU9EyELr%2FAyby8zQ95fDzIgc9uOmT9N4ni5rVHe69pFDfpJIWtWJFRb3qSZ2Z%2B776BGMZXONF%2Fz4EH7RSRKmRJnvGi%2BawlkJKZjX%2FskFb%2B2HAuTp&X-Amz-Signature=e4963a72bab68bf2229aa1c71cc0ed79ff0d9e706be27afcc4ffb3a05680883e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
