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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCZ3JCRK%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHAqa3CIvpWDeeIgxpamoI69rTxnVvvK8IHXhwnNedcrAiBe7xT7VnOJdy8qh5RiWEM%2F7%2F6ULXSdKg7z8BMVQALadSqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyqpWEKD6sQ70V8aWKtwDXvQNJuF6Itf5sy35g9wLCUHRSXIBjdIO7xJk6rI8sx0nY0sE%2Bqw2ET58VSG5XXQorEINdGtn9djOx5v09FjZi%2Blchjbdbprp2a%2FUEIyv8tywAA%2BjsuYG3QQNu5nQQ653gkZtkZxXU%2FRm%2FpsfyYVPllkkzQYka90jRXyhyfMJUOhaKKAxZSNfmWJgJhwunNzZ9MVenU9Va4rbgJSXav7qs5zTrY19bNqo8CE9PBbTlVNeGZYqzzXcz0UZDC%2BSV1nqLrFrQIPipNppBiixRDXxRA2JoOcQ4tCjLH9qqWRt%2BS%2FOXtACDaNMWet5C9ho3MqeQazS6dO7TYnaPChgivK6mExIJ3%2BnvYF2bFZKfGrSChaU%2FIXhWQbNmSo0eyldnxqtyhHrUvkvzytUFRBx9U2pYgTL8nelJM3F0iAPrUUV6vB5hp%2FhgfIrWUC15Z618wSQ200gCJfUnWJTtbM54g%2FpXPedp3uwaTLO9G5y1aLQ73K%2Bx0iogV%2Ft4loRKP7eqa62EQZ95S1Fle2RIpdJkl9eePdRtQ6FNP50tK6dxXxfNte7XnbkOj6uaCiHvKrfOS8AoveS30yQlln4paIUFX1boFmApw6sSo9XOBUiwcvHozzW227Xfh%2FZm8keHrcwpoSywwY6pgEKbFVCqIXuuGrfd9XwfBCi3cHAuqIaG3wK6Ce8PGGnjtVxOwPA3EKOcKwTa5QMTu35dlKJ2HaYnrGsXotLYIsJm%2BaYwUiJMJ9TIz%2FL%2Fh0uhs8hYwp4hNB2qTTnmyIWcf4Xe1LZImGjpaoONnelKuZN%2FkQtbx24PApP7%2F5mVCQRrMaT4s8fUzTS%2FZs44WUmxMysMO4Y%2BAWkoa6aQ8gVbh80lugS70cX&X-Amz-Signature=84ec00bcc96627e4539ce6420413ee52410bc1224a60f872ed12d4f516010e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMFUQQ4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCu6IrZ2jPcJFdEz3KznLFw7Bk%2BNlX6mb5ipXs%2FHjsyGgIgGszqvPo1d8mckB0cM9b%2BiQxyLf9CmXbEao8Lx8VU0DwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqritqA2G2RGbqxvircAycCuHk8z69HQ1uBQ2X075VffHoPGIVXbRvHbe%2FQv%2BVXPuuD%2BSdelKYTz0LFVe7qoANtGHnjslOlL8P4UsnyAUPr0dsvdw1rcF4mTCHlkeEZpUbYVzFv%2F7ZHd5j%2BNAh608Dw8GZycnjhBFmwsj734qIstdWqh3%2FVp9uOxP4UEs7SwkstXlh%2BYfecYHNs5kR2SKfBRsLeKrB3tZFKD5QIV3jmtwz7cvEMi2KPdgjjAigJvE8vwKj0v3VFekr9q0Wlgub1M%2BZqXUdSEvyKipcxfzB%2BcEFVCvoBfAeUpCWcwva5vqhHUFSB1%2FXr88vdNEGiO%2BZHgGCbskyK6TmxUXlQ5gb6xvGqJhWWK5WxrjT9aecWFJCFXXh2cQkbkyqhvXnGS1Rrn6pnuWbhhwfcqGSm9xlMKNy3cTpwUPhChyX03JKqo5rFDOfGXtydV8Ug3%2B1M%2FrSG05KQy82PvIDC2REJGxbLR7aZZAQzjPjj6o%2BFHMku%2FqNBFYSnd8HQxhnY0r2J3v%2B3fXNFLIWDfptNNNqRtlIUxi4qAsPncIxRcYZbw9sfMloSpBUgCeJnxG6m9XB5flzLECtTASKO74mZyNFNsLzb5kLpBHymWNxgBNOTcWxtNzwkzGxKTGbDPabeMISEssMGOqUBd7OBqtBpYEp2FECDS0KartZnkpS%2FbPONIuDeQbPzteTejBt9SwN55h2hYirL%2Fv4A3YuIvCZ%2Fy2rE%2BkDd5hZgKtTGp4jPP1qsR0zZD6FZGTj%2BoVZ8G9QDtH64cmkAgrNVvUGzWppr2Dj1naoFXSGFXSGAInVRsGlrBaXopMcAB0VVr9cUgXfLVzeTuIUysnXuahgsCXky2U5M1HQ4Tnsq5%2BkWS7m0&X-Amz-Signature=da9e03de91e863ea846c7ff28007749ab8ed85f0c568513eed6d4055555901b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
