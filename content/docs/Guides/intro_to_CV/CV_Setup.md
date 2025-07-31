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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURULQVH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsXl3ryE%2BXmSDdt5i%2BwDCDoV%2B6UJQJJf3ny94kyMzsSwIhAOsgIFoH47qUPMw4Ak6kQtAg3XdHueIJE5xrVY0J4QBHKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ8UtL2t1rCbA0RNAq3AOzJvpOjzUOwHxWl9Pb2vUZXqvUh12KPMWUzxD0JOBfMuMwYK7CASYiykssbmD8IkKcrIPG74PhdZwQoLBKf1FvML9zjfidwoo7jlxBhcQS8Mmp6bWxSsArlf%2BKBnSBfvNNmyz8U%2FbDpgjMMrXFrcMj%2BwTIi93etFsIdt3D5f9C8NkR%2BkcThG7uEnMBkERQvg5TaHP6jIqOs7ZLwy72XsyeF4%2BOhm6ATWRDeKLlzUfOi%2BA9aO2JIrVdzgC%2FH7WiXbKfz6a%2BnCkI0gljykfYiNw5fk48fHgIbZqGZe3Qrf8PgdsFOVZvZR0LiN1MQesXze4fxKZCKVSV84FDm5ytvl320vJQ1kHmYfMChuq1ytJIj%2BqQ2Ljk8f%2FeLuvatt9zDb5Np4sieES4xkyijXwgYJ9%2BsTxjXM125NEoipBCKsQ0RIISqz1%2BlHkyYZt5on1buOq2IDvIsvCo9OJ1EVTciykCT1bL7wNlvEE8Zxz2Pw0Bh6bvpzkjJgs7pmw%2BI4PgRWIE8jf84FwDT9tJm8Al4LJtRupzjVHM8O6tFte9XbulJjkZpXI5jG4X6at6hDLkBoeE6%2Bdbbobpl20Jl7%2FL9i8iIalRGRk%2FzKQcqQthM6%2B91odxsvdODNe2Y1LQTDCE9qvEBjqkAcL8j74rz9LJiC%2FMFsJ%2BuPfjDjancDHsdPrbXKQK6kBzLotzOIWtVvzTFVlXsLqTYDYjONK7jSF8e%2F939%2Fz%2FMUL8NKspgYVVa4JSsdPIOv%2F0dHDeGnKTmK97XlmtRXuE7ipGmXjEj1gE9j5BiZctpoc68gf%2BO1d72g9alvQYRpI44fd5HALpecbMMCSbgzBM%2FvK7M0VhU4ioRrkCknBrzpBMrji7&X-Amz-Signature=a480773f6c22c383a1b5bdddb7320ac459a5b7f95f1a27fc544c2bd431936fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH2JSPB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B9E831PenOzEfN%2BCrw%2FXxNim8kM5h2NVb4rAHwKnoZAIgPV5HBC0yeBsUJY38pLY3wZYmtS1BXnW1tNyaTK7zGpgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfpEboWU2BHc27njSrcA5ltqaXrKeuGyJ2aSts6PEFkxZcRpxnjORfJspwY0vNlwnuAdn68fWJAQMpZ%2FCs2jv1CHyJPkIMWJeyReb6DIToYbjZu9gvr5eguPlC5b8wb8pXTjQ0J0PuFjGPHrsDT9sAoOdKGa3YzyQiVzdl8n7fjBx1zG0fwSueYcTAcUgmB8UIDDDAfufBjyZHbrbH063Yv%2F02GzvsOmzNe2Vaj4OplNbxyGVRa3eYhuoH59lGZcaSfAJbNqRXeVhBe1EFCT79MSg82JmfV1uHrWssH%2ByDNFgdwpu%2FgKNRA80Pkq9k4GRZ2dmkSAth3Na495o%2B0iyFYEB41%2FL9hPCE4eSi%2BYBUauqgMUUHxPKUh2xBvZq6TaQdEcZu5Mj2rVVu8Hng4MuiMbtPzju5bjgeZxmNCDbhz50xL8pa%2FCnQ5LxQKWlAZrIS5tip5Bu9w2XPL5Ugd8U7tOnCTuftqCDeJ0BJMPYxLx7AkZfYNOwL5A5tPURT7%2FnT8FPxmVddc9qTs5UX4aDYGs26dHHhvHO0SwbJJKHhpAS0Xf3FcI9r793BdVTWaJ3w5dD%2BSb%2FwhSPmsmYVUFvsjtPBWIixc3OEPj4cv56gsCQg8cR9mPcpsN0NargvsbYFlktB5REO66bGyMPb1q8QGOqUBsOO3lz6dz%2BatqwWWfR1GlGq8yCiO8oBWD%2FE8H%2F%2Fmgc%2B%2FHI%2F9GeROx0hmCUrbEJcrJmbtwGDkyoKdqmXDaBR6tV%2BRUonWyVxSQSOzj3Vdt%2FFgKQgZMmgUqecdcQos3p2v9Nghik8q%2BPN8MPNLXuuXDGJ%2Fm6WC03nbZW6bY0HUEQ5gj6SHMbPPENFK9r6IAULFP2xCF4HBy2pui8cSJn1WtxCq3qW6&X-Amz-Signature=76bd0ab73cd3c7a773a1a4d40597cb917dbcb6a2e7c8e93ce1e8b32041f0598c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
