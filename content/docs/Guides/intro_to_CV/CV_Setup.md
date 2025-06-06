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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOBEQRTJ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGya1PuiF00DkRPvBPsfXrbXDIkKsAqycj8kV7feWRASAiAtKCneA9Tefu%2B4I9KL8pKKJTMgQZu5EOQ58xJiRmeE1Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMLdlMMtD9WvGJCohDKtwDvzuVO38Fmu1Pw%2Bn2ipxD1vHY9JDwqCzHrdDSFs4DqdiGljGZ36Ou%2Fp%2BTKSlSv70U9K5gYrjo52rTHWCrxblUeQNKL%2FLNiYLXMHsIjvSusGqepLGxQfDx7zKhyQFqemgA1idsa%2BmGDDgH2nXEwPCHEe5jNnWuIDcsIHyen%2BOY%2B4rnpJ7G7i7iL2Ds6agfiQ8QhC6pnYjMV6DoT9BruE%2FZRqX8RBN5p%2B7MvB%2BDUpNFKpLxJfoIb4fsggJJrqOMcdYxdX9i2wkof1l8S1oVO%2B%2FFcA1zh5sPqeXWEiNBsk5zVYt%2B4fDQb9nZsuhMtRRD5gxkq2w7ppJyakgh0lWw2XHHfFPT5%2FkbDY3SE1iySxVB%2FHpc4ODNivQNhcbw6LaXZQJf7VZYuz3q4QDi06dr07u1xk6mTTQC5Uwsy%2FE0KLlFy8Rrypi084WND%2FLXvEuODfQs6yM%2FrQWReANjaS9RD1tipZjCBy0PEOtYOiLlTB5EJUGd%2Fmo50BXY4SLCdlqIUlN10RWAS8Ma0aHROsOkvF8h%2FAU26Kf%2FQeEaA5asOXRP71tda7%2Fx64NCfyLg3xM6l2b0wTgky%2Bw%2B7XU%2B2u7LAd9zH8KdvwJjmnxFO4kd%2Blw4sPNb%2B%2BDFSDcr3fL1XG8w15GNwgY6pgFSG%2Fu36c5sxTjnfH4wUQAh%2F2t7JWdo8TGT9YHW3XfnMuCBw74f8hjYiVSiaK5qGpa5yTJRuXBt%2BM7cvaLnu5Fg0gk1CH4Qyf5422zw28hAdZemXZpaVbTjdiDDIPsBiS2DTxiDqoxFtqXHc6FLL%2Bkr7cOeW8YqcMBjz5RPOnAODBe%2BVPSX%2FgeHoBiEieaEMCBdUdroImoKuD7jefMZ6ON4Bs53J3IA&X-Amz-Signature=d56c02b5d5cda3f454fc9882bc133a90fa35478ad35b0a1caad383c04e2824ae&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGE4YO6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvu658N76hXw%2BW2czovwARRI3XsUeqRCeb%2BqcJJjZU4AiEArQ38OSroISCChAT6IzuzjFpZltgSMbzoQ9dLFSTEVZwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAyYeGZEKukSAERk%2BSrcA8y58vL5RsF8f%2BnnggD%2BwfMSmV4iqS0KgVOKXxE6sVYUoo83DZS6iIsOgS1EPPM2l3b4lFpYLOwv1aRajC3NylrS8buxyPiv%2B1N2ixNdNAeVbszRjnH7LgNaGO1mUbBiYPD5W%2BpHOreRwgQKWa2mSr8lD8k9O6EbYLlNjeFFppQl2jgKpZNXn8yVFQ5EMjTT4k6%2BOe2LyraaTfDolWSlUjLufr2V8Nq5xnO2m4gOOFmGzYmWc%2BF13G5QbxUDnAd50bFDt2lfvQyCaaB5rsLEAB2QFBC%2FPWVlkccHsm50D9lpwP4msE0PJIyTrTh2HMaVq8VYb%2Fc6AUd0TOGRiAI3ttth%2FNI8Re6gEu8f34C%2FCJvscY3KKRN7IIfMKKrHBYiouDgjkfZOk%2B7fsSsm0V2Be7pWKTMtaoL9RJymlNwUv0tjdjNCEql0uPfxkSIy%2FNT8mZ4OCqkBLIiVh%2Fs9qVCwrPB5tOcgO7n%2FvgixzT5Wwy8Ip8OXvF5IYVHob9wlQps%2BOvsRreS%2Fwc03o2xa9xWEvEeeEGa6yUF1PA0SV3MXTBHUU2CN7hp864hxZYJavcJp1UMS5WeR%2F5Tf7ZIR0mPF289Vx299Hw%2FFLY7b%2FyzVcis7Cfbp8CmJAsjL3oR2MMSRjcIGOqUB0GZnB1iCWFrIBES1TQr2SKlRw1DucAMqiNSALncdpn89CbuD1%2Fcj5nD49VZmxCgHjxmCILv%2FGN1s27BJFSDipgvB73KSnmo%2BL0SL923J%2BWCE%2Br3uqBtLAsxMJqXsIhDki2cvTEWdrz2Ck%2BAWkRyjyHENDLd5rI%2BYRQihvWcdfBA0o6OcCxJAM6JOBDzAlQYX7le%2F1GWVJvGi4iSny71FG8KwUJqm&X-Amz-Signature=1d31919cc392787894bfed71c03d10c1b14f170d71ae1eb2d719fbc2e45af4cf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
