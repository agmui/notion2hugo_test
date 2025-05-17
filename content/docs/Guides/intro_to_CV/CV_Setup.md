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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GRVMPN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXQnLGKxbr6MPslJGdi5pQOTUEMjC1KduTKDrcYmry%2FQIhAPTTPArDPQZajv6vaxS9O9iBBNblXtS3xiLUNDRjPO%2FIKv8DCFsQABoMNjM3NDIzMTgzODA1Igx7iRRPtC8bCVIp5ZEq3ANG3Fz7aOW3VXnfqFLAU%2FBKiu%2BaNyybC02ENatZcAZHd0pBo15zrTtT4D09fU8LbSnoXPY3o3Nw7ZkqWUD9YCDODr6wMV0ixlCF97tEGlQaNISeBVgnAvZErrqLE%2BuxUmh%2BpAD9ZLOuTZMpwJ0HupxXolrA6o4MZOejnGmIIUw0cfaH%2F9%2BSpe6wBa0jP0MDC8mNHJ0sR0v73XtIZBn5Xu9fqednMu79YX064a7riSWvfza15CHgPuD0rlg2dLS7aQAi5j3i1Lhq32TxXD8DaN7X7kF3M7571m1MImfNb88WjyXRHR9zHkS0MjK5cit1P0RH5nbrEJwsgO%2Ffmbs3zG24VIEaN33V%2FkHQ7IPmxz3VhhXgxggTfCouK5QK6vybN1RnK7vXL2scmE7VImt3gfIDMK%2FFyKUBh9oow62OgDGnBdOb%2BvlDutxYWttMDHzT%2BHS2cgxP7eVSeCbu4d1Q%2FLEdtoYyV%2BGbQezIVZUsPymfawDlIRFYxciJD26qlrQ8Oxdrdynr62lZMOrbZdxuopaE17dEf4ic%2BvVsENFxkV2mqBOXVQ3OCO8cLZbMK%2FwKrq53U5HyCyD0YtfYGpDlF9WWgO%2FaDfbdgwN1Z4WEwgEk3pDum3wMB9WJhBf8OTC0vaHBBjqkAc3bGSMK7TsdJDWhTN7yQLHCqkRygs53GwMPLwdOb2qBO3jcS93XuHx3Fn%2BKTs5DP0IVa%2Bv2Ug%2B4448vGCL6stbkWj7YHbOh4YKKydlOw4qs6x7R8xz5tp3zJnXY5ZUqw0xT5AWM8pkJRyBp0kU4AQ6wUiHzfNvCPJnSQiqPhWJuDfkJiA5XtNYW2fSNO46UAViE%2BtDWlLomWRkFmqaLrNe3lVFN&X-Amz-Signature=4b7444ab1b17b9ee01028e07c545434639b76a732c349b73b98ac61234e75ae9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEA5DAH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN5V96xitz69kZMkE1K117FIyd3rG%2BlQJAboyz57akAAiBIm9nIuFo137GLVoZDPPsVanfC2WPVhxM5OVkaDQdfByr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMDrZULVb0Iflq2dbrKtwDxuRpgkqaaGWx5JqMIiiCX0f2USTl7EjZezsZKRyekOo5dLA1A%2BIf7ohVJRrV1d0lrVe1%2BjO9IfELPf4Ae8Jn2Gvf3OYsqwqlC2hRV997ZeoEr12orPOVL1qBger6QRcLacKIOgtb8nJbnTlsl4kjJkRDyPbJO2z%2F7fxbEjpC2iTiY0xRDYQeFKXNloefNEe8wZ0c7WGLQft38xHOM5CVhSbPXUG9U6%2BdikKHj2uVu7WGZkI9ZrF7XVOpUq8GRxFTreTCGNtI6Qz9lAmgqEREBYHd8LoCXTfIOFdlXqwVg4HEt2SHgFBgCXfZ08ilc3x2mafY9Qpckf8Bpg9Fr1RDDLkMLvyoRQ%2BCHg36auBApbzQPGvdIsVTu1zqfwkhxVQcG4jteid%2Bg0xY0KYBONVQ3TsUf7%2Fubdm42Ofw6WXAqwRaOBoTwK%2Bqz4SP%2BUy%2F%2B62QUuVSkBJGOooqkxx8Uhmpv7RkD7%2BJwpP9jL15AJ1YFKThKkJEjfwavSp4ph7yG5vKHmEsuJ8kNshzDlHTmKEltHmzYer2ciF7N4txu9t75jhGuvxL48kvqNOi6D%2FeQOkb8GB7xdkG4yWXKEX%2FxdmxoZAbdbt3t96ZdLKoI7Q2HsFyVwXzAy15q0Pv1d4wrryhwQY6pgHdqtC0d0%2FZQ2u%2F9B02kEeAELttOeQa2cuJDhtKqsVhDE6HE1TgB5AXSlqcNGqVn73DFDOTfXnwD1l833iH5cueg5ywLMr16QuGaiV1OJSzS6k6HXProXFh3p4w0%2FwCpmkf%2B6ZVN5BtWTHvuJuKAAyjdVhYN%2BOd7i4lMFejrKZYs5Cr5f4tZXFHB8qyCPSYBCs%2Bns85iIecEAJUQ%2Fph9%2FxdcqpovZOr&X-Amz-Signature=e9fa1b78ca1cd24b6e7ba7ac2d10e485e0cd6d7d9b98177e511c83394301dcfa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
