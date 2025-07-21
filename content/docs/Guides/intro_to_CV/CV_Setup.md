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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCCMGDX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLLS7GCt9op6s7IFKkRb%2FTx3KuMoS19t1xyMVv58t4oAiALBKMRdCjbbcydq1Bd0EelTEJRgAdRo8RCVJ407UVpWCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5FpVWFD0zhMFy5IVKtwDd79GXFX4zNAoSWzyp%2BY%2BFcOwkV%2Fe%2BG0fK4vX5Y9TK%2FX%2FlQc%2BiE6VSWrPehB8UCu%2FE5v0Jyos7BqveO2rv00gKxDZs3VVe9j4mEojq%2FkTlus2V4UBaiY6NzBGsaFx8mD0h5dpH00Hb3xW%2BvqpCJi1dpUBxrfrNHzFOR92ppSg4kYD2UWf1n1B0RllyvVj82LlzQ5Ae0K8U3wSKtJuTYZDoowEA6%2FIccUjONoFyGJIbfKh2BM%2F64%2FrLHEBhsbLoZu9siahY8eNWCSUC%2FaxjVD6uLm%2BcsD3yTA8XZcjio76iFpw4mOEyPeNouhWCTRSwPEfdrzFP0p7vK4mMJPfRTHJmyS5XPSeYluphWUfw%2FNyEmDApHK051Bkpq2sNf0xQKT1SaI0koJYs77RtiCWZqzA8poIT3FzSo8Q79bwwtOevvVtZ9Ti%2BmkAdPPMJbtdx13LdxL3S0PFyVkf0Th5INWZTp6EgyZsOobH%2BWVrXPI%2Bk0cdlOdd2CSsqdT%2BcEgKZ5qJganPE5E3oHYCDrGD7niSIR6FsWKXUAGcASHkDmFEEHIcsLempuSqCFnQHHAAs4HdJhgS7%2BnSDzqi5ZFDQQVkPZyl2iKmSYNrvTIhBisaPBtSXrMnvMuj04FU1kcwqNT4wwY6pgG7VXCsMHkITV1OPfgGF6bRLd7KzDxnbwr7ZXZIHgXKxu5kz8iNIT2XNWb5A0uaUDJJDZM4427HBT02pcBRIE4wE%2F87fBHLPqDfjQrM7XsMRN44WaQpjMej9pkgfR2ZzdqQmt3Gb2rtCpdeo6s3wadwdcQ0OAUXFgZXyu9UoNiV8ug79bCpOMsJC8HrMqCxEP3tNgneIUvcIFijPwzRNodJnz9KLoMu&X-Amz-Signature=67af81469ec2d495549b5d7bb24d1ea750d7a8bad1d62a1b79f5fe14e10c7bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HFYJJ6B%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3YkMbrZx6vPn2%2Bm%2F%2FSRu5We%2BZy6Ee6TYU2FXjiMR%2F5AiEA4QRHRawuFPjAkHCFstFTrHb6154seSY5JnVkAxMCLKsqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLZLXIzWuXpi0miLmircA5pl9%2Fs2otpqrSzP0Id6xv2l3rPobfz%2ByzJLb%2FC35bgQEALD6ojZSEIe1okrVKRP5LKRczrvPvab3FqU40W%2FkF46ESFyE9Hrgz0acF1ivdcrfjrvD2GglhmdLJkGboBAQU0v8jHedq%2F%2BHh%2BxAFo9DY5v7m3qvvsP%2B5NiMcdryUFNOyevc4C%2BOpKbKBzOxhrQqE5ZbcRkKqzZNvunXOhgFw0czv4EufiKALArzxIeS%2F91gvH%2BGKNkz4vKlFwpOzJOkHl6rn0Yb6lSKfLmitSk2S9A24MRnsN0PSD%2FydGrI%2BazfXAWMP%2FqraMK5Q%2F%2FdBYDMf75yoacryoHPDVGVA0BvPVS%2BWUAoezzqzkiOu9ZGAGNnm59AVn5hWZPX%2F1hiSATZWjpAFj4Wz6qnkIRLOa%2FWmhpa9HrqQ5atbl2bvjweoO%2BzI6QGms5y%2Bd30rOCMzWfHIzZvp4HIv8nTn6K1WOKqdWqdYUzbzzOMt74oSVce7XLeFA8pkkQfcVyDJS4%2Bnld%2F15S%2BtV%2Fq5XUUjaa2jFEiHiH3bLQVr%2FjERVDPoVVjzVWxg0v71M5EK85s3ABvVynDQTXmrKplXKvMuxXU8V%2BRGrFMZS7d2jrF3Y87tnYpsAAed0ZboYKjl6U11dEMIDV%2BMMGOqUBkjfvjaYLec2mZapoaP6cUhWZH999T%2Fc0i1ndLEETyFhjuRE1w1Vt89SznevO%2FjNyhYDyc9myOU5upkPFy6%2BUVBzlOMVhmLZlVhQL8aGXZN09yePOJbQLbVq5pkcAjOSGJ0R1hWkuGfXjqGB2FrDfNblwT%2FUvmIdpcJgbguqpNXqvPOOByoZoKjIl1z4hPpHJDrdRp7Me9%2BDSjE1EFrVS7EXRpE6y&X-Amz-Signature=19ee651abfc87840d43e2cea2ed1a01d614d6d64b9ee556561aca3b1c292e0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
