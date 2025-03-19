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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIFT4TBW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCLoQM9HoBnIXDBpRVjaY2UjIoGWfuGzjdMCqp4TkWE5AIhANtTxFwUD0FvDR%2FCNtee%2BlZBM5zklOhgq7XnOyWeWt4pKv8DCGsQABoMNjM3NDIzMTgzODA1IgyPnE3DjSfHWFWYr8cq3AMlsawjLMWTTo%2FpTqpgPpCg4eLjh9bOhO%2BBzrkYV7yEdGxSgtOs9yXu80N9p%2Bmq0L8DshV6KJBgea9zxkGYfnLYEVD29hOb8Ycn55Dx8%2BjHbLD09yVhd0YsghlY8zauqCrRn9rsy0C6ScWBFJlFaGfgeCyNxuYREDvgl7R75KDU3jtPp7dYdms%2FDgwYjl94DQCFNALzZwJbVmPNWT1ehgswSzVHKmR75YCB4FZkcohPv%2Bq85YifchheK9X8cypk22KChIXNRkyNEAwt%2FBTIqGAiZimr0MRxlCHCqy54DiUfanzhOqMJRk%2FgXBmMNKLsVrDUizaSSuES2dK6ZzO%2Fg62KopXm1s11Ed3Lh2rbLQrwj2WIp2Qzp0ePH5s0YqJrkIJg0ABsLiy1KXWP0MScYFKXTUkopjFGgrQOihf%2BFKML2%2BW3BcGjOwXZdJU1%2BiPyRplNBa4BanASvTvZnvGJ2kJgX9ktf8FnyryA9Yv0384NE4qC2YOV3Iynzag6YnTlkTA7PeLiuuPLa66ASXA6n6gmO%2Bo59Et8gS5Zd8xbOrBNpgEEpM1iH2KcOscM4LQJCiaD2ssLlAyFEQqQolxBzYrbbA5TTRi5ZyQjgZ80LoKPuMoD%2Fh0fL6nfy0Nv%2FzD3vOi%2BBjqkAQhRuE5iBYb2VS0aOONfDTk95hIG6kUNgM3KkFRZU74QgG6GkdKGzr2hHJYBFyszU86Raye%2FFFp1RJZxRUh5LEt0f60cKN%2BF45Lnm8k7j6GNTCTbJizOWxCAeB9pI5XOlKDYdcyWE3eq0Lo9C%2FjBQRKjRtLPRbLldvTQpz9wgGI1ImVyPvhOfstvgVsKEZ0NdPiw1enL%2BDdlUgRgxDqXbT3zp3hB&X-Amz-Signature=328c758dd0f102775a9379241dd86630bb633f3a14502ce826c54f61f9098db0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4LYDYB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDpLO1R6e3pcPINAZvMyfGeb%2F9L8nrST6oS%2FyYz%2BaKVvgIhAL7BEjx%2Fxh0Rgi7ay0AQOW1gorhGUzdkSjEthBPBIjnjKv8DCGsQABoMNjM3NDIzMTgzODA1Igw4wDaltA5z3g8IuOUq3AOITjiFUeh%2F1TWmGh5kPPxQ0uyru5nWdcg9QlMJ3n8RBDMa7kX92Ro4vSfBMgR2AYmn%2B2kfu3Dnz%2FoTjcJlIj8fAgZA98oCc%2FhDjIuxBBFS0OTA8Fg5g8mRBTbsCf%2BEK68b%2BKke7c4ynCG%2FRb6oekpcD5cz8xfoG256MStylNdSYDrg9qqfLMj5%2B5z8PcP9zgh5rKCSPJ247dgePNQekvBQJ2gIDTXBKtcvm4dUOP%2BFneJdRMIYVLOy52YUMhLFD7P1alYY3KNL3jUk%2BCGiDLQlMgAzqvZIz6rS28izX56GcNEM30iLkw10C6B0ngZHof9zEyTy16sRdyZ6wN24b0%2BnT2UyuF6CkfW0FbZvSAHVAKqB5jHg4i2E4szv6pRBDPDcx2ep8jaBYv9dgACrgPgVLQ%2FZ4k5syGCEbxlWcIF%2Bp4SalF%2FZeTGDq%2FPrLKZH2yVd2%2FPYbkpySlWUTT0B1kmb8aaYK2Uc02DBIp0e8av5yxo7oTvNearKERgE0HsKABZpY%2Fcv5hbhqnhSYymiLgf%2FtVsNuctlxJ5uNhqjfKhjhQ92ENEvozz%2BeQilsboWUzCdgF%2BqdXgzWeb3b6lF%2FLacs3Q0gVjAbQ4IewuDp1%2Fmqf8NFdfTbHNudf2oODDyvOi%2BBjqkAYZ5pe8yKXHNZoKusRtQXV70L6N1RCnvIYWCl2%2BBkN4SLj3Ds%2BLmrLU7dZFMaso%2FAt3ZMkTkJuRNCPCph%2FoXorjev7Tp6nElFWeCWUAmgdm8mqbaN5aaFGqAXhTrE9yzcN%2BuEzt1KrbyL786DfBB0D84ZyZ4ThJ2jYc81b2vJ6RD0oUkFVzS3113Tj6nkq3iHLpr6A5DHuAbds0I%2FzReWCXX8itn&X-Amz-Signature=a46a5ba62706e78cde64ea0e9c42127b7cfae270fbe3062fb9d65b2bca8274b4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
