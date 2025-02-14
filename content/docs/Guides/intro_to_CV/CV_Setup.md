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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBZB3PY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQD5PypL6m62I6VuC%2F7WkVgQulgopTPzx9BuSoVNdv%2FPsAIhAOOq8GUWCvcFEmfAo%2F3mVtxgITFZomblIcBP4VjFKw%2FwKv8DCCkQABoMNjM3NDIzMTgzODA1Igz7LvQaLNc7SOnXr9sq3AMGyUw0CKVKLPkgfV7K9AkcbhwUoiWbqT8rOZaEvc94RnhlTMLqPWHql5oZkkmAMEs9Xm6EC9E67y2jbwkUtoq2O%2Bwhr%2FfuulTPpAgrBJwnZNKRxaSYUhw4cBakihtvl0Pwe5iEp%2B4H6nZFvwDApbjPso4uqzWeo5uSGZjrLA%2BokYn3Nq42%2Bej1Ljkw7j1jOHGEGjyL84gF78KdyRNU1ldRFsURgEkbrt7Kw4hAPs4CvZagjswmsOpwlCmB80lyq0%2B2u4M7iHWhqMhYt%2B46A%2Bibm2IQjbBy9T1UkCwMQYq2PHvYXT3WFj%2FBqtNRjgb3X391%2BQRLO2e0Gb%2FKXq9C%2BQ6fqp0nxa6IjNsB3c%2FoaNUM0EGFOLoDFOUaycDG5Gq72oRFy5jryu0nV6etOmU%2F5wfi0sgEoDXUPXZd8bCBeytgaXXFLK9ZNQoVabvVlouZCp4xO%2BvycB0n6i5smYD8cxnU%2Bd5gv3e2SqAPKzohemdOsFCNUqxhM74Pa4cETzZsz%2BdCi8cyoMSPprSeKU3tx59oIOGm9%2FMWdiVQxEOGmrn4TvJCijI8HIGaNMqlxU6PLMK9yRlUv3vy3V5pgdt%2FAwFvGwYR1Vr44LNV8cDpTLhIoRf5LU5MsnL%2FrLagezCN6ru9BjqkAebdRs6NDBr4s6eubuuQPgTgDoSNByH%2FIxbYR031OFnz4l3jIMHmjinJz0xippMzht6VW1IloxXhixBHPfHIrHHR8FAp69hYInP6rJiu1lDpuTPithlrTL%2FVWSGEAMd4vYb0hi3ua%2FaUT%2Ft6Tr2zNtgPU2snpd3AYirqCEoWrep7ubhPfORYqdRh9%2FcyjO1H7lbazt3fdoWBcztuXLrxBSA5vDfc&X-Amz-Signature=e2767c254f1fe88af831f7fc30b1b7e813c905aa50db4f43fc3f8f8b47a1458c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZAGBXW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIEj5EyguPyrCanw4R%2FHzVytTanMGLwrmz7pmgg%2BgTYFTAiBXV5wnxi6otnftUliHG4xCPABYX0rN2JlHjpLuG1xVvCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM7s79rSHJ7Lcb4cjlKtwDxgdgoN2vk%2BGlwsY3%2Buysn8GnSnMFYOwB1gZDPCmBEbloAsDv%2BPObScf3Za7gbaFcuJXR5oJkaJR23GO9jU6qAhIlt2KrnsOT1cweZoxdGuHe1WTdqIzH7kWP6JrAL7bJWKpCdv5KF5bnqIlz1yUVcCUbsonspYn16L2sDgl5%2BwxE0jMTSqyxQWU%2Bc5ZXCCzZ0xEzCBqjN6UE7aS888JVjhJEGVXFmQej5rluSsjKCArubnPl6W2tiqmJxihg5UxWURcRCOeqoejtrmmRnQDK5jYwyarTUgdqXYVKaK6YEPeY81TEGcCOHXBVYVlPOhf01AMZUhG%2FXxpIekYDrryMJR9KWdsh1nuE0Q4uQU9z7NcGs%2FFGYehZzsAHGMArLjmXS3Nc10RzdCt2FMmu1g8db2pcsffUaeMcW6CXT%2Bbh9uoHLV7paBYf7n%2F7KghXEBalLXTL8bAMLe1QSoR%2BJd%2FHnqf1HR%2BVbUHY3nVYfsMdcKNr4394s8hWm4JNu2kt2qG%2FqH3YlaSByPK84tF7zSiCWOfXNdT7mmoKUTQK3oXZS3Ls6UiIzuiXvrqSrDYy%2FLDKW0IOOsCDe3Tkq6CXh0241SEU%2Fwa9vs4UpF41MxzRa6gRnUfKKTTjzkX8UMsw%2FOm7vQY6pgFAeEP272ByPOduBZfxzUL7LkSWUaaCzSxBIVj6qZvSArhqBDIXA5dBJmtYA9jcAYAnBN2nWgsCK1dZ%2FfvxIs3Qo7oJZbr3Z3ZInBjwEZTlXRaq7vrm4h4PhtGdRMwWv9YO3GN9%2FpfdPBMwBDhkxmBm%2F55Os05cOrS0epebSs3f3z9VyNwvnv2h6D3SZEK4iJjtUIKjhU4LXTz4bEEJua6nAh4TgqdG&X-Amz-Signature=80b053f864634a77248d45234a28a1cbe78f58a148f652d4e1f668b21635561e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
