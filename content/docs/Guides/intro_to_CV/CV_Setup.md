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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OALGN4V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAGUqxpnGDJ%2B4WbdgI8DPJjNYqiqQ1IjyFsKX6az91qlAiA6BchX8Fq2v5NHrUzCs7DZNCBIWE8alEw2U6lZB1Clvir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMY%2F0CL%2FdZnbQU6cDSKtwDVIEhzSejnEODKjxFB%2BH8NyfuyFYW%2FMI9z2y%2F9BZFlLX6mmqutN1S%2BG%2BVJqGbUA5UFMIn2MX%2BjYJmILE4xuMbTYLVwq6Lu04bMQj5nv8NpMOckuUgE9pFHNavAjmtPtOGIqF6amnL%2FYQbxJ9hHcaYxHWs44NZSZEhUYkY6K3K61HFVMtCizESRphw3PQEu9xFy3fMRPjh2UHc7dOJ2zJbqAkunMvRv9eaus6s6R8y80WKgtaImEdfXbg5%2B%2FmvutSC9EvnXu56Jg3br7HD840WfyuebWC1gvOgeEunHeMlKVVvqj%2B2lUFfFpGM6sYcaiYKp1qlsiOOZSVPIFseWNLZFw0Nvbt5juox2TE0ojb9Hr98E3DjnmcSLfWjUDojpPDSX7NbhIHWzxOL392qBR6T80ri1mod9psCDbLbX3Th6nNsfKjvhnDigE7V%2Bww9kLEHoHFFQNkbbbAznRO%2FRd6ZcxsTwlWsLulZ%2FcwcIxHar0rU3A6eysZVhA0OIdPP5ROx0Cbzzg1WcIh2dYRkNbgrOZ3ZrOlLY%2BKKumQ8VUopnAazVkH5W%2BCWjHTE2gyongKtX%2BeEGNCuwjDQsxpbw6V%2F%2B24Qyn2pbCVxCRhWl%2FiFfjlDGqOX1eLlgdXlsqkwrdzBxAY6pgFzL0RO0GaBibSL4mz3OZJmaNMgovdX9mFvgpFqstBL%2BpDA%2FJE2TXd2cvOECnkXUGCYVgmPj1IB4%2Bm7cBh1LJac7etd4E8BVHXOabfxhD%2BF4AqymBzXERNL0w64ki0MU15U%2BUlCYqvh8KapISf7if75oZ9t%2F%2B2%2Bl159rHw0avhsZsnGgamjDJsgXvyIYhqUl1yeeNml%2FbYozqzaqT6LnARkmr%2Be263%2B&X-Amz-Signature=09d0edbb1694fbd7ed5e728d0487822564241be13277755fb22a4281e027afd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2DCZAMZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD2rYJyt%2FDvF7ze1oucfvyXiJ6I1hdw0ooPAyfrn8fM9AIgPZVPD8y2JisiLPhkbfPxUVmj%2Fut8BgvLZJvm9vllZgkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOgxmQSxD920YNu%2FPCrcA30SY%2B1xVWo1P7jPyZzJajHgDgy%2FmnLlcK751taf5xbVn8WdArW%2FKcBo%2Bt7fMw5rrD7qMU2QNcRsEfZ0XS7MossIhFB%2Bxf2pVM2eJAjBpJuXGz2A79haqoT9Q0e4Fx4GvWWS4%2FOeIPdb6aWsqjvD8WnTlXbc573Q1nHAnOk50jYWBUEnYUu7nM5tNbb69ZyHxLPtm5ZJ1RFl9I1MH57XdiWyZ2MRmIFRjaWAzLle3eR2FItmmalLL0xCOH7FKRgRRhQ4n2R9S7NrFVaJQ1O6IH%2B11pkfa6VsyMoJha8gbFvGIKvx44AjVIesCkbT05Em9CK0ElzVP70kIyKQx47PowRPCiUoE8R%2Fld%2Fbm4UlFm38wBTGM8lBgH7PFm8BmFKwENb%2FbSgoTXpob1mIGjk36PoYMG4ADpBIQ7LuhYzLJmUyxQJxxDSwoAK8EjYx4YDAYL%2FWARTRRJ42zXOWTpcLq%2BI1PuhO1mUJuQ4DTM7SDJ%2BggvpHYAXZfqUUBrsWerjFD1f5W8CIkOunwPyLypELOGFcVEfoVTcSEwnuwjIxfCGghYj3RtrwiokO14fvxg0HHg4qi74zg%2BG59UVQmk3y7E99hwoSPvqvlMqrcfs%2BaNasQmIWWLBXqUX1R92eMPzbwcQGOqUB3l%2BJ%2FWGTey9NZm5nlVameQZta%2BvAKOm7ACz27hufd%2FCOnXKLu00DDXsMrzxT2kMrlpuFqoKm360smgVbZdZmrpnUnKhfyAraPS7ZBN3bYpd0kNejuuiuxpamoJTe7ixe1cl1sBDBOxmJ8RDGXzgmbGMOZropUyVXAVwu5c%2BG8%2F9peaZIHKzfYmzhNSzulOs5trEtw6iQvF%2FEIVdg0tEjIjBECIv7&X-Amz-Signature=8a245641157d30f3b289797c91dd55d22f428fb16c9794c3d07cc1bd6666321a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
