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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HUYXX3R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIERa3K1kB5O2thDPWSRH57D4BUVVpv%2F0v9KhR7R5L1GRAiA9MO7DdFuvIA4L%2BmE8OKeWyUVAzk606N%2FffUPjd%2BRbLSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMxCX9DG9t%2BNqpEad8KtwDEomAPUeRIt7tXEfkBXZIDYhMVH7izf8SqAHNOz%2FWFF%2Fc%2B27YHhoTKZ%2ByXVtVdHUAboqm44t%2FD3FCpuNglPHqb9QJ61iT6MqC6oGCm5RkKG7QjlXEYQIziewTr6tmjnm47kr%2BR90AkFs0S0SEo1F3dLoaRotMUSCFmLh%2BGI82Svwm7KXyLtsawFe9UtPknTLGsfsMnzfcw67nXS6przQFoyguTlWiYvT6a97e1jMV0wV4o5RTyfifnLyXV2mzV%2FuV6O3hfmP2Dpm1zS7Jq5JGzZ%2Be7iv2%2BLAQ1R3Ln1qpqcWBk5O13vYcq4u6%2FOXVRo%2BycHCU1YH%2FmkzL3xcWXtqGuVHEvww2amNsKw0tPLjArvFC7qLRPp1q%2FE8eIMbsqd7Ux76grhSkttQMkGJNxwO8AOXzm6UQmBt9Yf182NOjsdsoNc5U20orbr3PG42lQHBGNNO19xd%2BIKkA7n01b3O35T7Y0qA8I6qkIhDl2ur88r4f869ryJaamKcTkZ%2BDIabodAIp5NXBmQWcXQbYy2YJ7grukBy6l2SIE2WZZAdDXGP6cojjS4GfzU2ebqRRaUTAt9dyku8EygsG%2Bx65rD9fy0tKKru0YvD2bpLdqCW2PqktakUYYp1mVJSGLqswgu2RwQY6pgHFreMIZZEHBrEy5s%2BxWoWNFyiNyYSlCi4NM32RM8FveTpKyV%2BZo5cbfp%2BWOF639z97BzBcxieSod9TnOZuOmXP%2F%2BoRkm%2B9MHl64v7c4ANFCb%2BodjiXKM%2F2cKawJ7962GlP6NncrTpbQzSh3pMoGlUmGWSqUwgMLly9h6imqUGnsAdXlLvf54OAxU6aC646nPalv%2BzY9KHTiYYsdqoaAMNvz7tO0buF&X-Amz-Signature=611d11dccfd7176f5d286a4e506940964e7acc376c9f8263de10422976f2d205&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PGXQFRK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDO0FKqU0ggCAhfOuk%2Fu8rhvqLPGiwHTD0tnXnNIhO1NAIhAK164Arb23CVWd8xlAhQhwgwZ3qT2%2B%2BOjq6%2BsVWC%2BFZwKv8DCBQQABoMNjM3NDIzMTgzODA1IgxJmvS6zgy5KDC%2FyC8q3ANxRl75WwcIcQYGrOeTP1eFRB39F6bO2YKJYAH6IZlh%2BsXv6SkzKZ%2FA1EvyrScPH9L6TkgqbnrfL2t9yezVlNbviiKkYpfi3lagKlnBJ7cs8qACNCCiP5zHW6kFtEVNTPVqCZniaGX1OXC31KjtcKPPfQIxk0G2peE7g5610hPSKZGLLgXv8j74J4D5MU2NkpDHV2wjDlZ107kwdQVS2rJUnNBsU13aPTa7MSnv1Mhujal4L3iwShY4XremSuKPDV21NsXJaJVOMLXUvU0r%2FUh8PajiaeMGbD2Be8GnAWDgbAelf654bZrq5uDjTe3cJ5UQr%2FBBvv27pHgCm0z0RvGJ4JLCeKLzY27qhA4xWWxZeDjSELPwXLt2cIq1wvYW7M6Xd4Mw7wDIbLjt1Q8VdKFw8zoKS%2Beiaopo%2Fr8AUvIite7Ntnyu4P2YFwXj6B83Rw8RXP1mYIFeWosa0PtLoUnZbnfnHn9axsDDXVbXLZZP5OfKmf8o3UmAZ%2FP%2BF6gby1OE4dIOvfGTRX90YqLC9ov4vRNia2cRLk94OU1LOMzBXEANXFfMr6D6bBN3auqptZnnvo16fCT5f6JVRCE%2BgNtkXveNetAKXdGg67Oe87xHuZri3K%2BCyLa67Q7T6zC47ZHBBjqkASUw4H4BxPcX%2B6QXJpcGQYrNin%2BAzw2eIrCqCfY5YUzB%2FmbXjUWk%2B908SkOsuFb4lh%2BaQrD73JtROSlpzQ6sKxNsNCR4fKcfJg6D%2F05BRoi5v5NDOUzbSmsp%2BTM3uyi25pmh1i4DG2iMwA3D6fKZLnI37Di2mbzeqDyeGz%2BBKPxKcdrgvUqqGNpUXebhgSimrAYLIdfEr7%2B6W4G535HELRTgGPwa&X-Amz-Signature=010ea8aae32d5f31bf280f7f7aa4d4db125c88ce397028fd41bc1ce2e0599c82&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
