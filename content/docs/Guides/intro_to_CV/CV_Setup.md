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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GURAVXS%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCuMthsMz2sDesroppYUk1ieG2xi%2B4I8GK3JekLxI9aagIhAOmzwJjuH0bmMwzWj5gGn%2FwkKuPF5VPilN7iOpU%2FuzFyKv8DCEQQABoMNjM3NDIzMTgzODA1IgyH0OUEOE5YRKZGPgUq3ANMEujnkWq0kf1pokEdmBG77Y3ooJV7ory8FwsfrqUN37mLTdYyVrTIWDn2dGzhhbr3esACmdoTnR6yj6ub8dxTJ6wluMoqBM5eVmRnYTl149%2Bq07e3LQIX0kns8vIR4zf%2Fxm48mXtXM3%2BNesidwX55UZWa8RjkhQRTxVEQz5xFlUgrIItN7RiEGYWQwKyWcAR5RQwrWjugTjBjrw3NyzdeJ6ek0DWla3bk%2FNGbVboSvpU5c21%2B0Ia1xqXXJ1O%2Bc0NTFFV9UraO2DwL3pf1IRB1tYrBKIiGoh%2FdlZ0eX6hXT05z7Kesr%2FupLXrW4mAtkrnsfidTs%2BWJxpd6gwj9RZs9qYz6ubLJe4kTO%2FRp5p9DT7CHIyoH5ncTjlKEWrxIxIq5piL3c%2FEKwLfYVpIIsAV2BOdg1omZUhTVVd3VHuBjlGnBrJ%2F%2BCpR9YzX5T64yxhDQY6aVyG3yP4SD%2BhISH9ks2rRrCrvNXcrm2whGBZ1mP3h4aUiR01X9g4tgVVJBoQ%2BTOhp6D1u0wgZH5rSf5SDnjcpZ9m5ChvtzfjMAzCYhbGwJeABmcVwedlJ4tGmLIaFp2jD7%2BPTrqnku4iYaXs6GCva69baMK8OaOlLdyqsOZNGG8R7sh6eqHd8jMzC22djDBjqkAdYcqr2JeiOGOxFLoSMFCe7wR5XuED51Y6Gl%2BDsnpVEP7614mbQbFaX%2BvB7MqWJiPk3b3if00vn%2BzgG9yeEg0sox1ybag0QDit%2Bov5QqWoIPzzD687IL56SwBVEfgCQIlkW9o0nJx7rp8FRRSA75VnOswwZfElLuWEVvuZj7kY6Jzn37yiZSlvQCvUiwnM1dJsmGhA3MIzSw8YuVXQUorXzNylVV&X-Amz-Signature=61becdcb8994045dfaf5bb94c482f475faafe4a8a535dcd52f4a7cde7cd89089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NV36HBK%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDkGxxY%2F%2BwqLKDdNlp8ljti9RYS%2FeJfgulNDF88sd6LIAiAuzr7wYoZ%2BxTDG89LMtDrX56lqknZB2ejl9MH8d2aY1yr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM4jFUud%2F4pdwr3JYnKtwDIOuF%2BJd7vj8UNomxw6WawYzA%2FhsQ7qbhIxTOp%2Btku2gBlMO0qqA1a33R0qvinc0sB%2BO66%2FWDd9xwBmLNg1OvW%2BvUFEdSfN3npoSG%2FTM0TSVaPZmCi8QqvJZ1o8JgVJzy1sf%2FcnjTOv1TqHLoA0kuGT2c9b95HkQ5gB2%2FaVovp4FRieFUzuIimVHHPmyWSARyezRStK3%2Fbz0UBZ8J1o2lpWrVz4g%2FQiwDQ%2FZifFz9a2o3dK1mUXm5IgI253V9Pa8Lc4i8mXlIjsFXn%2B5CQkInXxwNy3Jl3LkT4p8C9AIm9XdnvnEOkx1fM%2FDfPsLF7rr7v5SMw1ZL8vLcEvwbk6bMJ3Bb95N4M5nIIs9LHz3JSdGZe%2FQCEhXChq2pX7UhtCRA3M5sgvt%2B4VpBrr9mo5wwx%2F8eEOkkbNRSCJr5BTcTr03BkcYuHkkIR86fNDSaUr9ZsLcWgzuYz3ZIDx5h000fXDmJCX3BVpJj6khYyW3Iaser0OQznQ9G6Kv4TJBEflAkrdUynhPBsQyFchJBUWKL67HcW%2FUDTJcODykUwGD%2FMOZ08QHqqJY1m6pqk7tAX8OeMxRuGQD2xpiDaQcsiPGf0EvuWRqmXk3PrCRbx7pUAmKWKf%2BoHQgZ85oVwYowr9rYwwY6pgGqAlnwS5he73qMFqnqZicCMsgcrxg5S8jRJZDcrSqvX%2FqdfFETtNroskdiQJ%2FKsR6d8c0ds3dP6AarN9DSbIIwJjyvZSRt%2BnpAP5d5AuNKZo06EmEYkV3jbFDtiBiX3MYIAy5N8Zklhym47LzHY0rUR3d2vfRObPmYMD0CEZ0VMA0Opc87citHeBr%2FB8GW4hpyMZayJ3FIh3sOfDgEpn9PlNyT7hzw&X-Amz-Signature=3bfb9a081cdab09848deaf689959c2fe1412e408b338bb49592bab3e1f5989d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
