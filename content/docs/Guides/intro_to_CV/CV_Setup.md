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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKXNRJEC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCR38zPhdq3X8UJC1HNOVi0KQGot5nNOFdniZfrUYuDPwIgC0pw8FfLoxEzQFWX5q1otkeM%2FEU8QINUFTIDkFqr1YsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBV3cMvTZZfafC4qLircA4UbGPrD4rcc%2BdLX9dxo1KZacdywaYBtsezf%2F2vZz3p0EXtpwSg56PMsPXW%2BiYnYHSLwYWNJibYVhRya9ILouD1It1yDg8OsLPMWmySzbdLmN4BAWju3REToOoH1WW1YEB6Z26OnFy6BTLp0ol7X6V0OSxmp0y3rukUM0g5JU%2FvYLjbgMR5eW%2FP2%2BKJ%2FXm%2BNGj4d3BdUWZzbEvjIoIRbNf5oflLsDU2FgqpoNdMyZL5TXVV7AKZzv%2FPrrLBicursr%2F718rr24NSq73E6GnfCKba3RurpBYHtYnRX1cgKfvFIX%2BqGeujAblrymVVpYLg%2BE8ClfMt8vCrOFLCyUo589AxDRMGfjN8D3qlEIOk8Tdta2CoMT5ia1%2BaPyl14paVS4PeNgsrHX4%2F5lM1WY5iWXCQbpoHieQcj0a9KTwqNePnRkFq41vNH0fkHjXfPEINOXmObAfdjzG4sYyakfLTqTlhRjmycqIj%2FsQk7slrdDCSSXMK96V8qBakqdTSQKc8WpPBOQWgtp435nu9vVZk51NBatSLMRTqdyq5%2FM%2B9C1TH6EhU6pyihUiUnyHVZhoto%2FSGDVFzLyD%2BGWlNhxThZhLhI8uFSRMq1kDkh9Ha0o4VramrCLdo9i2nomOOQMNyM3MAGOqUBT7kd4fG%2BWjbFnw34Pf7AWxFMZN5xi0q%2BneiWVfkuv%2BxN4wk%2B862iVymLGYZAYyynexS60fOipDBJYdDzCcpxATT%2B%2FXQuy9LZxczp4AVQ5STbr3la3fQgRTbo0AEI1YCVEh2XNY5NnB%2FCmkIM9f1EnAskaGsU66oq2kylWw5hca7xCvZZz7ktRi0ZLCw%2Fwp3Qgzj2dQ2M6cmsPR10sCV2N5ayIs0H&X-Amz-Signature=1e9617e7be40f64abdd2e7de4942b5d230f358b414f0fe3dc64845e58eaa5ead&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIMJ7KBM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGxgv6QA3BdakgiDwxPLOuyH1jgSdCoHHzfhFjaOyPXeAiBDcu%2BWvn0dAksmAA3hTENeJgf3vuocYWeBOWuoS5ZzmSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRb5itkhe0NVlquyTKtwDrWEcWKAJUz9fr0Ky5jzpD9iEXEVr%2BNmoz7xOM7%2Bb8xUbo9TFmyRVtrJul8%2B9U4xpYKKQecyulwt8mrX9YRQlXo%2Fsf074k4hRtOIP2fwqYWMsJE0rqyyUJFjCYroAv1bay4I3HS%2BOCbAXllB3t9a9Vu3BUgZ%2FoUr0ubaNhF2LKrWJHAHnv9emI8%2BCWjQBDjqwE39uNBYrvy2d%2FBja0PFzVFs9EAOxxsFQv5fE%2FTg8Kq7uhinsL3vb1Mhk%2BBtlbr%2BZum15mUvMJiMYL%2FXboisfAeuLzWLSTqbh0RWfGohPj6Nn7bfK15%2Fjs6SQKRyNd5CdfDPZChCRwCbkZiUNPW1JKz1vHn0v44G0fiPRvMWsctVrRu1OxQpliwwMQ%2Bl6moHUVZLUSauP%2B16L0VjsNyqTnap%2BBCtvuybskXMEitRAD3MYvR6LbsF6j1myHF8pJhxgHMHuNneChQApgDLYKBhxFgzrZZZo0gwTxbQ3DZuQQWneFhknNiKgWF2Mh0wbVSqcyxsyPccEgc%2Fu6yumGyxaFQgZAdegNYQc5c761k3JehuyKj1D2IL6F7r2L6bKsD9RmguFx3hIVIY4xsdQSKb9EJYu459taXNPCjxRNv3gUHCxb4Vam8F34EEeI9cwnevbwAY6pgGNCByoW81j1y30Yf4EcHIK1gs4imN3xsr6jGCFo6oFuHH9Iur6DFfDQc%2BVndlAAUbqzJeCvOmOY1HMHlU1JQ7fTTlVJahkcPoyL0OMbrV6kP6i9V7Vf00hUTv9BfHiXyNJzj7NUqeRZEVNnmu1%2BHXhvemJUyEoU68UI0sEaewEKoO3VqOy0fyogHlh5xbPQShJ7P5OiV97PhwPnmluZ9SBSN3EuDsL&X-Amz-Signature=be6a05e7420b27b33df3f35879616371a5d1648013e18e2e89a0fcaeef225cca&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
