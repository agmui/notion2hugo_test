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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4BRLEZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZsQEncwDV%2B%2FKfcW8bgz0TkjCx8jakS5Q6kdq7Bn%2BC%2FAiAUnQnQLuEVLBgEZ1K6CUuuiQak6bA0cvTgY5QJJgWT8Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMnPzBpwgdkS7kS8mNKtwDjg%2By18gfAb9CbZEY3ejK04hGCqZCi1Z3%2Fesq5w1xINAYRePCV2G8erHorZFcB%2BPz8QQbqZG96TgTGpl%2BGOkZXs%2FmahtcycC2e%2FRKdh9fNLgqeadmwG4Vxk5F8yfZHx1hkeFcr9J5aBkno3r%2BDFCHXRnT%2Fa9kLi41qdSsTKN9QI3Cy7LnX%2FLiXik4bON%2BcGuJpXU4k2wMEoa%2F1y%2BjGCdLbZC6%2FPcPIRjg3KlPnSrOkW7cl%2FVFf2pO5ivWHHG%2BdAxasFK4BeJBC2kjqE7zvUhcgJcVlghugzBTztz32C52f6buhylYeyHDDz8Uhf9KxOghKT0%2BFypoAnPHIPs8F67I4%2BJS4wsuCILUUJYj6Bkq07IMkcM%2BWcVaTJY8WCdRA2dHsKOgX1qU9qRhomDVmW9ziCuPgeJg0oYpwFbWtjG%2BOjD%2BR6QaneYyOAFJKz9iASxGQEsOIQXjmBf1m2bt3Z%2B1aq6NHPboC0cUVA%2Fnjfm9r5vySFB2pmSKQ5ZAxwpOSz%2BJkvQGWBd3f74rMlQOYqWGHmTYunfDf34IbjsIrC0hQvpTqwCvkmQP18Rt7mpedks7BRfeIqHsXNNsj79CjLQ9BeMPR5paBjBzu8ZRs2qUEWQQVqYNEOLy8P1zb2QwhczowAY6pgFGqxCshZKTVn7zeg4P%2B1gFk7rrNe75KPRLZzqGlLiuoulJ2TnMfnNNxqdgkhv8xllKue3S%2F3osIPEi26D%2BaaFNVNyGBuHDiYiMaqF3CL1Hg0xbYKE7GyU1unMWJaBP5WRCO5PuNaRn0hBRkKej0lJKx1Wq%2BuXJKiQOP4h1JW4iJOe2Jj8C3zUKsKGjciNLnygwfaQfGY23ZJkRfflFtrtLui2FCdJ4&X-Amz-Signature=a16f115bffea45169c8da1559b393851134af6b1f3bea596e474936ffa84131b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHI5WHKL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmww6xQ6hI1gltLoZfmwvYn6yJsjT0ogsDHJiW5zVVTwIhAM61OLFclKyAjXF9qxSTvHE4zP%2FrkidX6DPj5G7xpEq8Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwRaDcosAhBslhjAI0q3AO%2BovAsA86wiwJigiksjZB5ZJit%2FWzoHDZ13tpBm6pvSvXkM278hFSvvsB6yCI8pD9EeOHGJUu814CiLj9oyI7wv7BpfdI%2ByQc%2BheTxKSpa5i1NpSLO%2Bw4f2LA7NLBZ2DMr2qwLq3N%2FrVep%2BOTtJzKAGw2FHeUfhLFiRjF7b0EykSAGvOjfvmN7gTqOro%2BCqjMBRPdlICYwzLBauRArB3E661NZBTYH68hTARbiJXY5g2ALXVz9SAnsnwiw1Dd30BuKDBfA8UDlsjTI86a4oI9SqLdbNkTuGkP55v1mxLjtxbnvICeAjNhtD3pWPsgqBZuqjvoFOHdgpyZBYBswNnjYCUljHAglxSedtpJwDYkbD%2BhvzipkNBLrFHHUWwTwwf7W73wZ4WOdUqX3hYx2mIesBXGmsQ3yv3USmV1HKIw8%2Bn75i66S5j8ESx%2FdFW6mY80C3bvnm1qioKIvWA4USAn4pNXdsOiMBDKsQXbBUAfEq%2BlJDSGUFBLocdN8pTOErovjLBNGPLc%2B8K7%2BIxaCTy1ZcpMDNewL0VzXw34h2CjqJ9fiQNKdiMXSt4tKqkoo7Q%2FHkQxXOwxUrZFyMlMAjUK6C2dvIESnKxeM0MIAqvVX%2FevGlTY0hmMcj%2BuiBzDLsujABjqkAVSm%2BDUfl3VBNy%2FkhHw%2BhNpmgKbsvvtraWD6vcAVX6Es2WAdRuoc%2BQ%2Bo3CpEbOtBVqkQrhCrzw%2FT79sgnDS8KjIwZBkyqeAEkJrX%2Fwt2qKag5a16YqIY2ohCdbVPMUtuYDc%2B7VmXS%2FnFMUJtxA3%2FJjMN15zNByDlvOvDWiTYEuHXckqWTX%2FSOsDHRG49Fp1H9brzZlA%2BlkCQnFaDWkVNbBA2c7qF&X-Amz-Signature=6abd163a22f5071db841978a3139abeea4c5dedaac9a70b999dbc745a30e1e8f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
