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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WY5EINU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJDMRZZG4Q8uUD%2BE5PMRZco4%2BJH2ZjDfc9W9zzGHm7iQIhAIjIHZYT9uOLGK9jKhyXi4d9bM%2Fofjop9HwN1V%2BkPoLlKv8DCCcQABoMNjM3NDIzMTgzODA1IgwFm2fUuBKBVqKvvg0q3APvV4LrKYbFQevXsrhJyys6StdlUTUnF77g2Z02nXr3HekvyO33Sw%2Bq0bFTn8mXleNKqEgs7sssC0e%2BPVML6FfCOzWALZIICgx7kJci0C6CySiGFzGAj2BkL5q9r2r0cylDPV7hcn4iCT%2FJRBMOgrOs9eG8t%2Fy4ziRgspsI%2B4YVkWnJZPdIIxjVD8g%2BmYkH%2BBXC%2B7Nowtksr4sCmQo%2BMLLPQye5SF1SXTGbt8j90utYqOCq0tgi%2BM9qv3uA99K9vMQfWgKfS47TUyu7XDWoPVRnROpeuCXoYS315ZySf29znw9L7svgkzNgNZkXDrjMI5yLjL%2BSJYeHDS%2BQyNueS8y5ioT69PwnNqQwg%2FdwhPnbmT6hZIr7dZrKENjKWySdTsThXJSkpnPq6eveZwMmAzhR9R%2ByOcNtZ8jhyRD3IKGn57vxfXRP4MqXZD%2Fc23FTjAcEB97uzw3wIWNyZkrUWYsJj4DAFTsihvMiiPfhMQi9E6xDjCZmrEfwNH%2F507Ktny0CBhrn3Z1LOC49WW1c57M7PgUPjVXCWNV7zQSFxOxbaLLPxxyZJrsytN%2BX%2B%2FtXPKHyUqJ8n0h6z13R9HW8%2FgEwLfnE1QlffyAeqFa1xYf6%2F0yRwZSAIsk7o4xaqDCEwru9BjqkAYt4S87dQP0bFiAG4%2BYOSi77zdPkxm2fpk0JbxYkl%2Fl8WFuT3pVyHP3nCXe%2FOSFC9Up5mRjA%2BusSMnulNhXPqMSlIbwJzgKqvvQ%2BZVsfw%2BmQ8cHdhRLS9aFR%2BRqukX5xx1zm0mIMD68%2FKco2fnJPprir8DYZ4BccB1oySGJbWFaUquA1gFj22FERE3xDGZtvpXHbhm0NWKSXfqM4a2FIbd9WQCbm&X-Amz-Signature=84ae4ff79fd566347747d48a96f3578d39d02057a6d16ecae751564ee86a7be8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXRCOHG2%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsGmXI8ICoEUub2UH%2BAmm6i8z2xIh5GF1h9qwr0UzJQIgJVbq4rpbwtcC7MVTPGN%2Fx1IVUZvNexoEnptijh%2BodmYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNEMe3I7Snad73RkWircA%2BNY2VpkfaARpAmcPAK3w8p5fRGvtZGNkZQq8vW61BH85HskJeghNP3c5G8F6husON%2Fc5SBuyPJyjxp4kBTQ3BiJlUL%2B8bSU8tWQBVn%2FzyQqYVdJ9PCSeIqsitGXrwppob%2Fep0AX%2BZ1zPnxhkV2xz5VNKZXhjK%2FXKJan3ioOcsRRFZw1naiOFJmj77tN06GidRdIUBv72BK%2F2pvz%2FcjJiS75iAeP%2FKBk6dcaFPo5vmBbfFywV6OhCBG%2FdWYp5pGjQ4HmgkpeQdGlDPYG76KPuVyRL24XZrbwevaRYEEoXngs33mIfgzgEnyHiQnL2%2Bjd1%2BTgTIKc23OwZEcSJnFoYBWuDtRD3EIlf%2FgUuCgFpg60V9tFMMfG0KzNYAxfco2gKxFhHqmFnSYdrwRRkr%2Bi48lRdWMMSJhI9FWh9P3ot3ZaRgfU564O8lzLjdXmTO1cOs6aEp7AIzzgWu9L%2FlvA9JRTern37APt%2FWdZ4ym69yzqJPGZ6nCePJNYjZa1f39IzgQOu8DwH%2FUtd3RHukXQhJDp58Hk3%2FR0DD3zjWW85U3hgxCHMn%2FF0nYI7OYY%2F6SYN8KoxsJWP0KlC%2F%2FDhSI%2FgEIVCJHWyKeNxmPKzp%2F2XOQe9N221jmrB5laRKkTMPPAu70GOqUBe7dsB1IOwpaLbDXO%2FGdVIxgd2%2B%2FrObVz3UNlS9WN3hINErAz%2BaXSeePqATgaki21T0Cy9IP4Vi%2Bq%2BeE2of8mPNXzPJii%2FRNvF8OfcQC2r9jaPo59sdkrv6N8k5Ym3yPk6%2F6xjd1tNbckw9uzRAcXhN50%2FQ98t%2BRHyvSO5nrlNrpi%2F8RVjKbVO6v0kJyMajItXBW2msbWAmQbEmsY4p5B8xeHBOX6&X-Amz-Signature=1ccd19ab2a745fd707714ab68599eba7e5735371954db6412d86e090e4058cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
