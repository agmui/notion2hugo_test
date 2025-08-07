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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DZUVGZE%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCKeWR%2FNYF%2FCmbBVXr5TLxj9xmCUgy8n0KXhvS78%2FDVhAIhAJZsYMLMIraxCBCqCd3psekVGa%2BZSkGJ0KZxF1xoIv6vKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzA6%2F0BgSspfQuNfGsq3AMtdIx0eA3GogwiTnz7hHHnrhPk8p4fERex6OZ1wUvwHyh2Whm2H2j97tU8hBvoLYxYGA0MVgGzmdzbf1eRnEZ6aRnQ%2BCAXe%2F8EYzRJqGzeMkX63boLJqfnCTHq6FZ2Q%2BjEixV4SNw05B1A9XkVWvN8H5ZfqysEXeCEP86utq2XaATOsxL%2BrCY0bEqmdjEdzTgkCukr9ZDdDDPctaG008nuhe%2FR4401JGZk8l%2BxgiS0M%2B7kOm3D8msf5Ah8awrwvmTibuwlTAbS67QvqKBFP1BEvnpbuEUa9dcRYqXlEnWfD46T3pcaJXA%2BQTFWzwkDaHp5G%2FPv1abqSmSF5taHMnjMfWz1f3NgkROH67KsP95uiYZgEtAMDrBvcT1Z9hB3qgkX%2Fue9Pbf%2BlpiMjZluP2VC3pW3sugPUWS%2F34F2RDithnwBY2%2B0vuVHXzPFYGhmC4VXdaEHHGkO%2B3QikMuoAOADUDSLcsHBu7orNz3owcQzH%2BRMUCzuIPo2gMHFvnkzeaX3R8vjE4YXKf2xyUTv%2Fm4Q%2BvedKiCmuvkmQjjuMo5s3KFSLqnIrvRbiIFhdudNjy7Kum9oVmGZq7ID9857MprAu5f7A%2BM%2BqcMm1M03ume7AsnhX74MAySc5Ue3jzDWkNHEBjqkAYFdtxY0o6PXAmdelvnTJswVeNrW3FZ%2FnV8Ug8%2BNzdjSA6SZ1t3bJslw0GPkhX6Z2yGoEgJFLHst1Q6vMf2D7WJVzKmotD35uedXlyuAlp50Bs2uWBhWk%2FpXyQvEc9GpM%2FA5ErAY4YkHuG8wyKwGIfzo2tBBPfmzdH5eVylcrS%2FnyGcueeTK4Tz%2F21%2Bj28hpC4ImijfMJahvwcdyXxv82QPHyrbJ&X-Amz-Signature=7138b5e8a23bc89fa927a32d3049df05a1373c1b518dff757e16a7f9463b4916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHDDIEH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD3CtOwq2FtuO%2BNAOlsiHbh%2F5mmw9%2FboUYQpEwUmR9iNAIgWLj8SjJ94y%2F3CUVDef3RMi5Fhy1VxU%2BktrTvXvU6lfUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnvV6bwqBRkqVMmcircA5z%2FRlCNA6Clz8JiVAizunEl8VwleAuAUBLbpdbkEoMqtCO%2BPnBXUGsIVQ64StZBQDWwGvbXdsBAJcuuQigHuxtOYOyZVz3Be8746b2585%2FxTKiW7irZEElY%2BwEyxDpnKQAvsJuRIQ%2F2GTerEqrCTXZd34Rc40ScQC7Pa0zbiCi4wFmq6oabYpq011HvBnCYUz%2FRux2glDfO3DpNu%2BoAF5OIUHuxNwqR0JczHJQbXMjvlidMMCz5MW4x5fBpOF3Us6g59Yjx8ArfAQV0PPRcUpEXSnJ2ZZ3PpHbkdgxezr8ekBugtwVc0t%2FgIVUBalCdRtdKJ1grcu7y0Zmci8k3UFPvz0PoMB%2BRGjyqn5t1%2BtrmRrkJG9nkDelfJnqTItTXTcTY8yyMN5exzFz2H4RyHI1x%2BiNIK%2F%2FSSTbYuO%2FCDmCijdKMukOrqIvKowrxNE1pz25KMp1taZzHLuCIRVb9uoBnQthpwPAjv1xyIkclQhluCg%2B%2FZOKNkQM6CRIeI51u6b6KJ6z0sTh210yzF1ifwy1U6594FvPkUlJ9RHtcD%2FoLQlT2qHB0mqK4v0yPkTc47uvj%2Fn0RPhzWRgdtQ80aXvVWYx7ow0Jqn12qq3TnAIXLQ9YVrM1%2Fa%2B51PRxhMJeQ0cQGOqUBzMyhm0WcyRZKSpgFi4E%2BQYq0OOTYlLVnWBAoIYefHKKdaYcpW56kwrRdTONRK%2FeUijRaEXcdz6UKvg6aSAQFZ2o2bGzky%2FibNOFx1rYs6CIhO%2FviWBZus6NQjGvINJDPpSAgo2JwqeUBGfXgw723o%2FkasooOAXWkAmM1yWHGDhFHsSr7gpnroaAlkraZkLH1TwfmHwQOLYB1iTbWPwTdX6i39CFX&X-Amz-Signature=3c9baf5d66706659811ff30f9b9b182dca9dd9a2a003043c4d7c1e0efcfbfa9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
