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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWW4HLG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuLKt8QnO7xDRfZDShQpF89Ne2TFR6U7aYnKW5bDga7QIgJYS%2BMlW%2BSFJQGptHlJAfPWm870BLBwT4qbBqNp5%2FqgkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0JIKjLzOU47IM%2ByCrcA4EEPNH5X4TAFuniOqXqnLHktgh5vbcHkA0QzT7wlJHJFMrt9q%2Fac9BAnmnkAYKNCAS23dNuyLYnExY2tjVXlstvrcqa7cF9PR%2BxdOe2Xyv5EuviaYLRKmmI87etMLRa%2BsBEi8v1yubtxpVDpDn5YxZYvZGXPCdwi3iUoIncLEox6tDbaBsL8jrHMeUk%2Bz3xWzZLQHpn9%2BH6Ecs0fRgfhyKORVrKwxddYyXJ%2F4pQ9dF5VfqOVWnod3mnZLNkBNZ2yFRfaK45IJHKKYf3PA7Z3WqOfQzcIpr9kmAr%2BKlEnYdzH6x7I%2FdLIpVvAMWUXRKXJwoW8v85m%2Fl8GWHPKGgXk0Un0KmG%2BMUVgLXmh65dkQyQFD8lW2AfJOqdDBNjV%2FBAfppu3fsfENZ2afFutObY0oTJXaQkYxXZtLHYx5LAI0M5cN0J5YCmd1xJ%2FQXREVhgp5H3gw1%2BIbueb87tQ1yW18oDkBllzu9opZRyLeof7reDzJDeb3dOG2tMcUgLJW7K2hsJh3wuUGM%2BVRnsP5VOIKGjbNC0tKXIA5OUPg3qqFAREVjeGzJQNf0HCXpqiaw4izJbRnuoW0lGuWRpOoAk0tGORc9qIHK97NIlbW8enlnmIoapGMMgvnLKQRGfMPnhk8MGOqUB5pMag3HvEwGgnkspd1vg8fvn0RBJJ6Do7elgutTGrmPsxpKuQRVhkJf03AcNKrMwJjcHnDWYvcgtl9Fej6OiRurr8jPOQQ%2Bv3R4MC6LF81MAShixRsM%2Bf4uL0jxXYwyP3kKnGLKx7lYOD8ez9y25jazyMN8XEtmzHXzbOQlJoJm6ryQntjlMVHzwrZUUWyQzIgioUjDneUpBaB1mHLKTap0gLpwF&X-Amz-Signature=e5dff0c1561b5ff379af93cece3daeb9661ae40675d8fe019d8730faacc05dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7A7YHI5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaX3YP84bGI3%2FgLkIGEXVLppT7WweiAbHm%2FS4flmfHFQIgHbl5UKQX1GWXODo9gQ3cJt%2B3iaGqJCJ59ZYWliO8pBIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiQIf%2BSnymSu8MFkCrcAxuZPQSe98eM7q3A01tYtn6VPtcp1SIyIsn9GPyNC%2BOT4ygHArzeWbvVsSmGqfMGHz4kXqms0X0%2FgNeo9GbabLUp0CfuFKdPZe4CuYpoVGDg1vbKOUYSevb5lVU153momZ8BLLRs9kD498gXjZeqZ1Vdtv2f9b%2BkRCfWlKQ7vh5qJn5LnjSx%2B6SWZXMhGbnx6rqlKhIQ83tzO7okVyEaYyPVxFh3vY%2FZP53HBnqxSDcIaCIyHbGn8MJGvH%2FzOlmv4Wkz0c%2BoQ4XPxVLdXEzRX%2B9QOzHJ%2FZOwYBj8rKRon%2Bt3vDvU%2FV%2FA0MMIjKFDop%2FCRqVUrCLsdtqRbVecY7H5yegczmBcPpreta9cEc4OpbqdUiBZ9akHAHX7HOGcI2258ftFmxnYqGCEzHjcocxBqtgWQmBxzx2J0scKiACS7sdrGTxmWN2Rnw2jnD3NEtDFfb4LE1bp%2Bv863%2B1mAypAKezrUMze0%2BYdPFFBLT7VJLxetgN0YtmmempBo%2BTpNNoJpJ3JFDA%2FJneAsU9Ja7PkpBkXetiLhMdWz7fQaNEARZ14yWe6yu5Rruznv97yXN85mksn%2B%2FDJecsR3Ffa%2FzH4c1lH%2BzgCPe0KzoLywyU9Hdo1ArtT%2FUYH0g9bI%2FZ3MKbik8MGOqUBvdIOkjU5R3pXKxoFFwkwREmmNNoDwv6n%2BNLnUSvBhXUgUz6RwkKHkv1Tybyk6YANPqog0GyyjPAYfZQK3gnyIWRKzVa98WDKFkwyhBglS3eHe6fqG2kSB2hCW1nR6RQrW9aEgHC%2FTFdqXHAKfP4KKvqfTjeFOAGrX4eE4lJFXr0rpfz97HNKsOT%2FYuruybQJolo1ttZ9ZbEUCett8GZpeZcof6Mr&X-Amz-Signature=0fde161e984476831e69d51fb5d400ef3e7a96515c1e0c8b77ae4d6d3aaac0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
