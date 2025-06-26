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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOH5275Z%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDt2pF5B5pO2EHKTCg%2BPwZDPmk4YFudZxeUK%2FYqrWVHPgIhANkm%2B4OaXzMnvAJhCgX%2Fec2oMWCTmyD1fc0gp2ZN0mrxKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2BNPYjeIEjR0S5VMQq3AMPbQHhixCEQMJW9oUcJJDModJao6mL%2B9KcHcEBqnPBskdaKsk88QRvVx4bLrciMbz8mHPnexfFgdRSvzKhxVgaGPXWS39ZasM%2BjVzbzdaX5veZPwEicvQUZf%2F6MIrBUUst%2BuqpWG6uUqicVL6cNf0sxyPXWW6BLf4OSQIkwHr0V0zVScrIhBsyiim%2FaMcWBq%2FxdplH9v%2BrTkuIO65i%2BUwDyYN8Axpn1zv9nC0xwctwrPiwW2RdJ%2FySW3qEMNx4xiBHTkVNsd%2FQhwf2y7ffUaoRjvoN0F9PpE4dWH%2F1rJXqQ9IH0sEmaLedX1qxInX9%2BkbZQykvRgHoyWTWSUZuXI3M6BnLfx69KOM0CckWmKQFcCjJv%2BQdWAZvE0mvkE%2FtfYqcckNDz7fJsSc907R8GJ26ufYLmDudBm%2FwtpESsJTz0Djk3%2BNM9w3D1gj60ib%2FCC6MqVcb1OmpExBo7w6sSdWfKBenhzp3f9XA4RC4PZY%2BHtS6sXxii6Ztl8NDlVY3e%2FWmWwEFuevh%2Frwk2NK5uaPyHq6gWSQFUl7cvElVs87bJcOJwSvMUeFZi%2BrVYMmHaO3nzo5fbtdURql3q4jnQBAbRF5XD9S%2B1U4irkZ3nvViNyRlyJ3gk2N6EDohhzCsifPCBjqkAafrr6NdclYlwuvKNq3OUs11WVyYiWCV0zuQfbrltZPLBtZFZ7Vzy156DzpERvwWadJKEbaJHGMUxKPuzTPYX%2FHwuzm2%2BCcl7Hk6WUhqPDceVidWWSoPGxHUu8ed76IVXY83HG6i0HZhsuUndJxGV3UDCk%2Fe4fTRzZdvbC2IBSWey0dGSbHKvDLxBGiZzMuYWtXJeeRuYKZky4i3bCPPmA5QmUgv&X-Amz-Signature=117e09fe65da06860166144d6cd5e61aabf7e9263dc0a2e1d9fd1541ffa0ca28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQ6MPRD%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDzoZX2x6iCcoOajI9sFzrJ71pMxH%2B0EBwQsl3XOTyvgAIgbcguB%2B6IrPq%2BrxYw15FRHpuzIs3Fn0sQROpyBoNiriwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJtsbhWwHG2hhN6t4CrcA1OU5FLTzZl6f5DR2HryExf4u%2FBQJRZvU7gI1%2F%2B8gvN3dWxRDDIZdhsa%2F%2Bz0kBthfCUhXKyw4SyQRDkueqsGS6%2B6PHW6pwINRtOzkc3zFh3%2FqTMnNiljxwsYAEauNEkMGXhaeg%2FioCekH7vHBim3ongR8xLGyMgFKJRAgcXkeUICK5WOYfY2uUAuY6l%2BVMTPnX0z6oJdBerpRdj80hPwEeTuvwpNLXwu%2B%2BBQQ56klvkepCgPOAu4KGKEcX79VEaQPmb3fQeD0scp60CQvuoDkVRbmzE64Jdb%2Fz67MVnYZrGvGj%2B5GjPEYeeoGY2ecIn%2FVqzP8YVxMrJxBxVpLcM3eyRp9DA8rzE%2BrY5Wq4qwMa2BbGbD50VXXlxSvCRa1eVL%2F7RiagJo3fgeXtOdi35ArdDh5RM7Lq9lptkDA6aYw%2FPKQaAGgDi5CVIhJW9hcTQzgG8ckgAm1u6KSLQdUTH4h0xnU5R0ciA8IcKjdmwZcOpmKmHlqj%2Bdd%2BM2QPa%2FQ4%2BISahU09p2jjRaa55rYpW02ZKGCVhyDR844SxMdpWSwFCnaMtx0ja4B8s7YwAWZNCFR%2FlLe1cTfmy7hMx4qexgBk0Ccv527InNvQ88jrYqkTgfl%2B%2FkNzTf9wEC7GU7MNiI88IGOqUB%2FH1kvxudwLmHjEay7C3dSOV2iZmr9B6frR34Dpjaqfj70l8d2aYHdKf419VoVPzKkrfcVyqZhxDUs3jp6%2BJs4mRkzhbxGqWs1PL1kE%2FKyukuNPHCuTZtGGeWpzixLDkGXXLtBbu8APTdjZKQQ62s9VdalOe%2FaZWNa17AIL3GaaeMNljMAQ80fvZn8R8Vs5LjYzjPbm2Vnw1jm0VXON5myfP4pOjL&X-Amz-Signature=fa4006901e8fa171ee02bad4e9c500404cece3f136afafa3b8d5443eb8acb0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
