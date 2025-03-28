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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E23MGPL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgYRt9Y9%2BbfQ4KzKGAQ4AXxlHaSAVLwYWvbhggAWRTeAiEAvUjfheint%2Fkn2iHR4HLzTo5jA%2BvcZYMMmLFJi1pLIZIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDD%2BuC0r9YR%2FELm6fPSrcAzKhCrnZRr63Ip%2BFrtD%2BSWUAA8IdBsyXhVt3gLrU1Jb%2FtlDMPwe6idmn359TN7TqIMdKKXvumsT%2B4tIOe%2B38H9aF%2Bltd4RU7uyFY9ngkCuIVCXiY4LPqAEjqgEi8INHBHVzU3%2F0yBBODtKau%2B0D41AiU2WP5bmdXfoQ1Zi5iD0hnRPDuf1Uls8KflVyqqsPZudgUoc7l47Q8B26iWPzhLVdQnYQKXfSN58Dn3Yscwnx2vf9BJtMNdCAhYe6D9sBQ9wXJcD8XZqOsQdBihVoheK5gatLOcJINTrFnsae9hRQ3GECwx6E2FSydbybxI9%2BFrEYo%2Bo8emTGXTbYRF6OYCtmuAmeGIN3a64JsYMgkBQ6d%2F11XB1qjAgLkVkgiNdHoVYqJ9uo4SMQJJVlMA6Lkh7heUpT5IuxYcQY4p%2BQrSgaT2sXoHq9jXlf4v5HLReNqNKi%2Fqtw1koFWnZS70tXhdZJ%2BIBq4oGNUpPic3AAADeypqlHkOMig3i9VkluzkaCOOPoIGijLhcPdAz9rvVZ4QQdvNXXQt0A%2FyfWJBPImjTaDIL%2FlkOkSD3vlRRBZyr%2B5344CsUSVloeTb2HgMUgnoWQrJkpriddKA%2FWLOKtUcXpD9jd94qTV5KS3COuUMILEnL8GOqUB3J75GmmqHp%2BsWv%2BUka4zZfuyJt8hQBQ5ChtHmwa9YzHOkknkl45EI4NsZv2zXY7NqWQDaJt49eTjR%2FaKLv8%2FX3vj6U2ewd%2FdckkZ1DaxLzIvFWbv3VT%2Bhtw9Jl9aUPELhiYA54fmilarGoxpQSFX1YbuEAj7tRBSId8SF6orPrZ24h8%2FP0FexDaLV3rG6ngUEBVzdz%2BsBsRF2Nj9aH8NRZID%2Bf2u&X-Amz-Signature=99d033f490ac7e5b8833bc4329357245d7f767b4cc305b308985e8b3f4d175ef&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3KXYHC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFreU%2F8xDdhjNPXOdRvUm0xeVQ67ZCXC0xWrSDSDC0rAiBgumpzOw%2BZcK9RGMH8MQG8s0x%2FdLDXchNe2KPfH2CuGyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMDx8uYaOAtg20igbdKtwDMQeCq5HGUcE2vkqpOBw%2BCd7qRCdB%2B%2FHc56O%2F15mHALYyVfq1A2ksrjwcSVr31l4hwzlzG3QkTaxcfBeGaO52SiPyao23lwzAWIJqSZHrfDe%2BM2fCiW4ZdTvUe1sqO3UvVlR%2Fkktb2a8PxtY0Mr%2FUlYv3mkiwzbNDVAOMcRouLdOQcl%2FMJfZY2hnjwUw7iTauTlJLnFGETUUYj5iK8pQfsMF9mp4YjjeFUMT7hrl3hYppyEIyMccTyHFj0n4Y1%2FKiwNjemsSnaH5S0etGpPGQvW3H%2FqbJxfET9WSJYsFie8lm%2Bzx9YIfcCNNeCgKx3tHo625HwhmEk%2BKp1tTsVKPgwRDmJPNyHsp2JrM1zGPb1lET%2BVbx2LQMbjEtmwbowNySBC49jriBvvjqZfSU1GjHmskz4WUgVc4hzw4hrT0auSJMP4yZDNOcHKQNrj%2FQn4s7WR5tsA4ctjStKJ7GS%2FE16YFNr7CokxpW1UZDnPpYbLOwdx0e7rT%2FbCY4uM4DQvzrN0i%2F%2FnLK1i3cQ3CpZLpYFNKazNM3xCDI2vy8r7jokpXKEPS4EXgwzudu03DOjY1T%2Fj40ZJb5GaIkJR9VZ4YmaXAg8ZvVYaGogazhT7TtSu0igQ1eMNlBXgjINBQw6cOcvwY6pgESzR%2BVU0fF4ISS5YHVKKytKtyHQWil9EVhsGPdWhse4rgdBk3SUYStumLECNub4kmZ2yCHnE3DXibkRwrqiXGfmV6sTpooC3tXltBUxqjs2jL3h4CfvtNXu5YS%2B3P%2BPsl1dalMl6AsRD99WEJOeEIsoVqQv3E7YqhaslhZoa5ad3vzCtFkd7ZOyxwBoIyIHAcakufL5ScN7SQZgmXz6cq87KAfK%2FeD&X-Amz-Signature=3f8af1d4b2ecd29249d6bffb2d516e6c1e123a9120d2b3f026d4b73c30391433&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
