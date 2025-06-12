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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQKZ3O7T%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDgYUcAH7XdjBuXW4px3zzf3DLvw8jUlEqG3svPJTetcQIhANn7wd4EtRrIbNE1N8U1PZn6WfmDmWmCdT0FVLipEPobKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI6oTIvqvXQXQ%2BtGIq3AMC3HIBpAgDEG2PN1ix5Bfqf8No4%2F6DPR%2BDvFYEuqxXlVhAvFt8xloKX4emGlvoArbUu4MRp%2Fjht%2FCeltvRMCkzYSzspzqqLqowM%2BGctSfPvo5awaz2mqi5q0uOmqfMZQ%2FtqzFJfQ83UrZ7veF%2B4rhM%2FWKmV%2BRKEQAK7AMffCEJ2a8AUsVBBiju6DIJae6cwJWMX33GYYjT%2FPk8kDU7MI31fszx%2FnZBbWgLQWdOa6r6rgCLC%2FTvJzAulWevVDWXfDAESqjIllgjg3oCqTwfa87OONSQZoLvWd2iMqygCH%2FpmdGw7KEMR8kURhHoe8izcEbtcPxUym17D%2BN0S3%2BI0ZogEQVq426kz3ZQqaBfqw0egeNx%2BkSNBpuHuqHw3M8kHe8DV4X5bZxEge6AcTOM0rz%2Bm4ZXrLZ8LX3drvy0Hi%2B4pe0A%2FKPpJUJhBnbQXBFD2fT4ZcZmFkNqcF%2BVNMy5V3fBxHJZt9f6pl9rmJ19c6VdNnv17ayDJD4YwcT4DZuq6jla6NPITnqAOpotD3QDcBx3DhnOi6mAg%2BaFMNzHWds89t5HSm9EsGKqAPbVvyJLwuGbvMz28S5Ltu2CxzfVP%2B5l%2BR3fErjt%2F2mg%2Bp1t%2Bxc00erdNaZwHKcUF2%2B%2FyjDoj6zCBjqkAYQDEP0rajm1ba%2FVglfOxLTL2n5tHX%2BoohYRfYrYZWlSOoFkCdbuxtLLL2R958QPltC%2BOEbuf23nXPcIS5oFBTzorcjafC%2BSZc4dcze4qSbzlAypsMONMbAxzoiX2MLX51C4OwUFa2VucQEXC5shXwkaMC7o9XFSR53OY0yvDtOf0okYDArZFiE5Lm3bUhvA2comgMlBHENQqtdm%2FUVDgxaOiWa2&X-Amz-Signature=8eaf6352496ba7079713b655859cd5b64b6dd6c3fd22d4c6f3a0f5fee8eb70f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WG6V6IV%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T210858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC%2BDYFS2kP61jePHLG%2FpVeKLjwYIQvuNZHYKU%2Bg9xi8%2FgIgRQuWkKyFkBdS8n3VdgE13%2FRnLnkmhBl9D65pxbz8pKsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPdT7rg4NFiO883%2BircA8rSA8qeyW%2BnMpGNrLvgXqyopUCrVf2PIR1GIyhzayN9Tc7rvqT%2FDGSQzmxIR73zqNeTF74JW9OUZun9cAc5pvPkm%2FG02M19gwCQREnYvk7ZFXqKryla37ly3V6YrfM0Yk%2B9Xs6WlQ7HBLJtSD7atdtyinFbvQrGisXyjSiJ35FAmTl37kHBswU95uyuIxtGt9BLDN%2FbHMMkNlzGncLmJOh8%2F6P9IAzJX1fPLaDi2%2BQel%2FA9wreglvCetwsMQ8uv2KIPv7ugZVkTvNG0n6%2BpYIW65ALE6I7rBM3lhZ2jQ0F1cO7FPXbDAUNBkj3u6IoAfftPAqNNrOa1k%2Fzky9uZ3AvBshNNYcaavPWOwq2iEpff3PTvrRtfHktB2Ch%2BBTXOnftxM46OE3wSRg6J70%2B%2B7Vk2gFmzWXrFqNtdli4pJFqkuQv1jSS0OVzJUGXfKIKNXvG7RsrcvvkIN5x3%2Bc5p2CAa9hpdnanGzmdXLiTDwCD39fyQI5QYAI%2BPxklEMgANJ6tGdSajuWY6TnQ12LnxRJbBWAHv7GLQDqv05rqkX5%2BpkWmPGp9P2YBUWWe%2BC5vz2hw4QIuRTX8V6C3AxSLNNn85TcC3MQo38DGz1h2G3vVMxODS22Krvktqrq57MMyQrMIGOqUBAAHAQ8JKY5dXRG4Y75P3DIz8qBrqgcYwnTRatOlBmve4ucQFzr1GhXb67zvdm8ZGi35LoYOyWr99BF8E9p3Luq7AW9RwJ8iCE8WxmL2PaNNEoyrmNPhJrEFtTN%2BpEPAoaK92z3Q1ZIAQMz9Tx30i%2FQMAkRnKbVpGPiaek3Tz0dohUnSyeiSE21WLTqxC9MIlGHtrfPjuIpm%2B3yRXHPyYSmXwr8U3&X-Amz-Signature=6638f17d958eb07d19d8a50ad609e259cc8568f687498d6b667fae5aeab6bc6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
