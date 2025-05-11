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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIO34KAJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIB3nvxxiUCMItdj%2B9Fws1HSpcDlyIfplvvgG41Y0xTiaAiBsFp%2F9XsNJAneELLZ%2BwVrGrBfqLcHN%2FcORlvoBMvgNZSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAIeyUbX0%2Flro7ySKtwDkMJhFaEElTc6zCHW5iUAji7rspiZPCrZrvIlFW5yx2gJGLnOTQmDe5mX%2F017p0Gx0AI%2BfyprfAk%2BFbeNo8L1oDiVQPJdmnFyQuRzhzcnqWbOlPFQGcPVP5ZLwa7%2BLB%2FbunipwQooHJB1OFFjtp6sbIkvr57UzPfLbdgokQHRlH%2Fy4B0Gz%2FMUp8Qd9ONFK2Wb%2Fg3SiG8yxiwzG1oibFGrf3gYp5IZA%2BnR7um%2BwHL1dbW74QwxymNk76UQHsQmW42bQJSDIEKoRXOJht6a4e3gBnFnb3QY1SBfLiEn%2FlcO7i5I0HGZ3FyzA8Iot%2BM0puSJSX5MEIQ7i0B%2F0HG1bPDCWYmL1nBwwe07XDEO4vmYWC2wwFAdYrCCxB5tBrZmaxGvYxs641SQvGrDriPr8GgcHsrddz7MHOx6Xf61figqBk4zFDkH4tLRerrIZWnKKbNV1z%2B8cLR8BQf8%2FsWPWYh0GK9Mt458T9cacmWEeOQYBs%2F8vW1znwABZnF3FJIoWdznWYkfUlhYOibKYx2tm3NOxL4a3vJRci0xlDT08Vh0Hkwo3mcLst7qY8Hq%2F32qcbt2t%2FpbS4C8NGoZJUm2IeOSYm8duiq%2FpIxRUtKYUHN5ud1lhnJZmgHAvW7wuN8whLmBwQY6pgExmqKStiEfHAVlEiOPBnADScXmQzmhy93nVY4aL2FQD%2BXz0wXtZpNtggOS5Fq4OhnSETtVnoFzvjJIj19FgWE%2FRZZkHFIka1Z8inLB9gvR5rsRlBn5XXIB9sz6h1xj%2B%2Fh6nCouRhhI0k2Vh71h1V%2B%2BdwqD8eYUL19ZbE9lCzU%2B%2F%2Bzr7IhQXU2e%2BEZNh1ERvSqKhRs8kkQOCvsQ0OnDGu5yHzBht2Zs&X-Amz-Signature=6040bba202ebb50b064acd9cbe03f0510d6afd0d24e7ba75bcc4581b63daff49&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3CNQKA2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T140759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIC5aHS8mLgGrXcR2VmDVfd2PMiOi%2BVQqe0cyLNq2MF1FAiB5NFkGOIaa0F8rO7VcOb5NOIHzg3%2BCtmajOdt%2BvSMVxSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSqG88VfRkWVFotOjKtwDru6Uz2uNgjeVm6qNiNlG0wH2lzNCRXiZJxfxzwgRImCqlK%2FZZ9OLxfEoAzHCCONRMvUcschKYgWp1W8hapGEdRhkKplxF3CK%2BnGsBkj9QqBslFwD4cUb1AY2iPRZDKh%2BqCIW4dZc%2B%2FLit3o9EFYvbKkZ3N53iezUzDHMMxZLFPYfDs6A%2Bl0dcYLkgyQ8SjJPBDnE8rCQmhcAgHYfQDEWLV38%2BRi8EsNpL%2B1c8Z4WNo7yrfadwYvGDiUBaNa7Ai6Hvb2rpP%2BXsImlwSShREQxch2AR1%2BOc7FRFhEXcjsJu5Y4SruYlUEbd7oo47XAlJjn2QCCJlzV2yahOwU4gjQPRCzqrEsWXqLo4NYKuy4J8rkf1UnkkYqC5GxAEC0JRnIVzCSeKNn2P%2B0qkjTZUasooQRpA3RTpLVS5RzyUhHP%2FdxP2b5JOXo5ZcxnefcCilnlrLc0buFTKx3DQGhHoPx6cXUZan%2BNAJ4US0z01iY4HzSXav4m9cGSanWVNga472UTL3vJLaCouDQCj6e4U0pqaUO6C2ocBlZnLgpcHa4tvQ4iPI31AigX6nUxCCxYoh5%2ByjdNxeJ4GchEqFmHSZSTZ62lE9hWBQdvoQxc1qWExNlGOTBDyiUNPiylNc4wuLmBwQY6pgHD9xSEh7Mpzem59wbG6N4hYU0LDZXRwZPyOxczol%2FVGqDx7yNiQPPAuVVgq67VDr0YjoZwcCi7tOvFLLYMu10%2BZbxw%2FTJS2mhJROPmK4sG0HFu4HrDn%2Bt0I86CsMnlJtLqEJbkfNok4J62CaKVfzac9w7r%2B5AUYyEDM6rVp%2B2dlaNzuY8WHZHGVwsIh1dTr%2BGYTdeGhL8JHbT%2Bhs0VoITNv9khOMsq&X-Amz-Signature=0a5972198be9a6d335faeb56b6a6978dc3f332b11e95afdb5bf830a80a0e2d54&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
