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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IK7ODPU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIA1GbIolIIJg45xcXrjocBhJy9XnuXj%2FGj6PvV6HzICwAiBWLT9zP%2FdWUhxSIBlKzglvoa40%2FMPqLp5zoxK0RDK6lCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMCDNJf7D7%2Boyq4XPHKtwD3Kpio3tZmVxMR5Ep4eq5C1x0J%2B8R4yciU4kgxSR9f5UkxwGl937xdrv6clFmFVUxakcmC%2BPrOt8ZHobO7QhR4j1iAc1%2BlSaNC%2Bs8kGw1vplbr5pD6wtT8WzEfiIoB%2FUFy%2FQrlMlrr5%2FguV5tJnAW4MmlE1nGx8O%2FUtp4M7zTO6QRKo48aVHtTyWbkKrnJoBFVrKxKXBmek6pvejhsKW8HTyy6fhQHSGzaiTL7tAd7t1owhJIOIRQitUk3WOVNVK8rhyBv0OOUkmC3w%2FjQIcf7ziaOiYRfFXUNBhFa2xfz3D6zV3w2CoOisRWL%2BWEHXMaK%2BY1vyCuEBA8FGz3ASBKU3jyQzx%2FPRKc43AspR6K3KJw0oAVdMV0cQ0OwQ9MQwlTrdkCXUelOkt0Zqu2GVDwVqQ4ZpDEsPPobf6%2FruOM5XvZ3jKU6hEvcd66A3Zs11FRpGlc2mYz3P%2BK16UMeECnCFYZLXxfd5%2F6y0L4tm1fU31%2BtcoqSWecF8XxerP5FM4lF3NSYbVlfeKMYIAWl7nzfjmAK8nlY%2BMr7k8xbNYk%2BmeOM8I8V%2BXcYbByLYjTrzO3TmCkSUiDENiwsrWUihEZLzuqSGE%2F9SU%2Biz1tfvdI9wfM%2BKY0buKsE9pc9UMw7o6nwwY6pgFHUMLAVl8Hth83GXJHXMlKEStd9WJEE1ZcfSAXxCdBVH%2FL7fxl%2F2GJd%2F5RvZfTagmh7pGU16%2BP3%2BrmmY4Uopz9L9%2B9hXXEvJ0Ra1vBSmGLNUN4JdR4P62u1BGnciN0fBJEq1HbWbnImA%2ByC8XNXu8BAsL%2FEg2wwBlFS6TU%2FQ9H%2FvVsD%2B%2FDZWJDkWMHZ7euPz9RVQC%2FyU3%2FzjitNLLLYxYA4FDOIpHD&X-Amz-Signature=d246002fec74c047e5821142663946d618977e26565f79efdf185aca042220e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IEJLZL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCserN1dqj0jUzgRWUC3ZPIwBr0epLIH5HjzPnbCuBUkgIgF2Kr8KkZD0Os%2Ba25LCGJiW27HirlLjzGgJ3%2BwNFXOFAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLLvYXWOaoYnXYe6DCrcAysfCjz6U8CK%2FKFxNf2qxqS1KijEiAkEji41CissjUimzy%2BEsKKbIubkoar1zLrzX2X0oF3cNwOqY6FveBVc6UG8BYDtRpXnpX44v4ly8YU1lq%2BC7T%2FmiDJWMBeU%2BJk%2BkTa5LChkSlky%2Bcx1u3u9nyGIogV33BFR4izguzhdSoOhUw0DE9c8S6HWxngykBMA9eayAV7tzWFDo2gpSlGDHa0PtDzjh7K2LWM1aCg5wF1QIp0oRivYEqUezv04sMff3DqhIht8cAeSygk9UlFP37kEzz2gvCaNO5R7KNNHwAvINIZ%2FK%2FnU7VGZEih8yd4LJCNnrVkQH2XQIv%2BsSu7LOmv2dMV8pgAfmQgXXkdi1gDZEFw8BnehyKaujx%2FvlrMkWVx097J4rNUY5TYa6VuTsnqqepinitKJv89ELjnPuQudiGJy3XuPlyK25P3TwWyOj6k7RKwA53rtHtYSTda9OQpdM%2BZBbP3rNhx5wswfsBEs%2BO71glDBZnfaQizfFfQeNQgk9tEBY%2Bdm6bD%2FdHEiBcJkzM8pcU8G0xgXawg6%2FyHDnBdBMBHBNKl3u8mp1IYq1pDQXIpHBBzBoriJuKvnKKYvLQUdI1ygsP0tPxjpKhZ8Z7wsbVHbxW80kZLxMM%2BJp8MGOqUBIQYf%2BZSu9dLhfBJA8FeLFB5HqYkJaP58a%2Bjpqfzrv96nRB0qXEspUWv%2F%2ByrAsiI5kQmLpvJ4DXSEXqffWgEQHRP%2BSb6gUhqHrUwLaBYSoOJw6lYwRL1c4ZxylbUboARch%2Fi%2FzM9Hxo%2BKJbHMesLYk5ytj7IaT6U%2FljN66mlUAiY0t4uFjKa91JLsAF2XypGxTDcN0hu%2FPONclOZ6WdFuDl4Dbe33&X-Amz-Signature=a83840799b7d151303c0c5d4833e2d6fe491d26a6ada896b49de6b25b19a90d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
