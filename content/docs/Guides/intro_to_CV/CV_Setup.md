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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRIGINOR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOpmBZR8LYFbNd7WvVAwi37w0KsQ5Vk15QJKinw%2BOv%2FwIgft98vHGj6sGHDf5cARzyFdJsyEoR7CDtq66voLl4DZYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOdbPS8TdijwsduwsyrcA2C0OfIflH%2BlOtjz%2F11nR8cey5LGO4RFQCDCOaP9mdcBz0MXkRk1QOYji7SmDL550SyrRmsp3AhqU0KQgXTLxGKVOU8txAHXei5XLt0djBolY1BkqI3ZkSETH22BmmgBu7OmwEJUZMptTxRYx1vz5lrLzT3Uvl7%2Fzmbf4DnKsa3rzmoBsAoq4Mf5nr7Vv6YZg0P1dTXNIsyUrJhN5pKbNq2MV1D81eByFxaZoDNoZfwLSrPUJyxnkrZHEo%2BSw%2BasNZWixLVrXZrHWU667WaOH4xwXJPYpLeO8m1x3tdAOwfQTFW83Y4Jbf2SgZMmTpJRLpK42cG%2Bl%2F%2Fb18oemjDrBwLd25Yyx1L3s4zN1QNoLc3Q1OSUN5R5Y3PsRD4cEPPxE0EszD42Zgyf2DNHR4sb%2BsPM3kEOGiW6egdTXZ7UADkLr8cnXghw2Awej6lvU4mzRT5oYAP8vq0b%2FGzgByFAoNxuxEo3%2FpVuw9iYkEH2el1NSETNLeG9zd%2BQBXBm1Yb9JnoWBF2hwkBVy28ImrQFlju%2BRnDvjyyDMnoWvTS5b7AIvMVYDGKJD850%2Buq2PgtvvByvQTmvXqn0O%2Bz9QKdcKHMeYgq6k3OPFGwXypZF5kGLPP740q%2B62tnC5%2BjOMLjs4r4GOqUBNCyp7UMmtaB5ajAFflODIKHU0p%2BXyQEaGOB5Vhrby34RJA%2Bj7%2F0xRgXuBWQESQKKdlXeLU7x9YjtPWE%2FtBQ%2FUd5wN9YV690CIm4otQw%2Be9zrzDQmLa1d6vQbUXVOQHR5K1YHEuFIvxmp2zS4ZmZ0%2FRBDRDBLTgDTXbqTOcsDIc2aF5Wgtj3XfKM9r630YU09hvvoIFljkZCxK1rXVQnPU%2FkBuh%2FY&X-Amz-Signature=3e6496d2e11072e3a7c69780c907480e334516fac1f0634f72b68c516025a5f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5THWUS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfGDFhIPhaRkyHXmL4bBas1E95kWiQWCO9cspNdJwICwIhAMBVR8JzoQVHzJmp%2Bkm2XT3yl1mVYFMQe3SKCYw9kGQ6Kv8DCFEQABoMNjM3NDIzMTgzODA1IgwvoJxdIFOS2koUpBAq3AOAFgrcyVH%2FiLaWUJ%2BYkg8kNksw20RpSEMrwsl%2BtJLx2ueBO4EVM0KpFZl7QRIQ31uyUwad%2BGZJWh4f6TEdpprozFuLd7faUjhLQyxbU1%2B0EYj8x4N7%2BTxEPZgtHq%2BNZwxQT4%2FjkBYmqBnBzdBD63EEpWauaXv0GzKxG3heWEpkCHO%2B8mgkoCLutHPHpgXpPKkwQv0otesa3oAP6EapU6%2BkkUnmrmIioUpC3AHo6%2BSIwnTZUJfsE5K%2BstYcT2wGYh%2FtZ694hZbmLZ9GpK6vYXSFT5PdSpBaunUCN5b%2FB72lgzf5h1gyJO3Dy1BBXLBTp%2BhNLEB65wW%2Fuclv8hw4zkNFAqdAk5VwzPvcjFBgej1ffJebXMe3AiUEZtNWJD4zIbCFm3QFklZkhLr2coMFcKkwdIu9WzX8pnLkjQDcFmvdEsC8D58OBgIp5HjFmiuMR7HWGx4SfU4xxGIX0DEJXsEQtNd%2BAnYRUf%2Bk20CbVYKSeS5C2vE5zmJtgY%2BvA24Q01HqMZAI6GFa74NrFBp2yAjNul%2BpuayOR8ghP4Z8oXCCl4De4hX24td73X6QsIi%2BBx3IY57nZJj31eu%2FDxBsQ0ZOLirwo8cZiZq8ClGjp64RlQv36CA%2FPJs1%2Fv1mzjD%2F6%2BK%2BBjqkAadh4ZIfpcCllrFeoavKMB1acCsQj%2FaboKBMUR685AZFzaXrEW7fqo%2F8EnIZbP%2Fit6G6%2F4rkPX%2FhvHStg0UrO%2FB3t%2F7BCQxN5wtT3SLWgZFme8iJHxuxuO1VWcqAI0qf9V1qXM6qNkn7sCOLJud7ArvAOhzL9M1T75LGRjUlWbkA9WQyp3ms4WsIxSlXMNDnMAlcHJi82rds20SKo1jyuzwbf2%2Bl&X-Amz-Signature=b0cb767dbd82e39e23a43223ff00b6c379a8b0dd1cd8ca91e43bceb0e18515b4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
