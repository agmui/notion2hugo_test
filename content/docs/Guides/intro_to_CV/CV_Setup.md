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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMUUKVJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC1e6cYP0UdNytmzYBLs%2B%2FON25jJGoUd%2BS0adCRs92XNgIgIShOOud0tKHPgCJt1hFz1mnsbPkA6iF%2FRM%2BhbbxosKwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDA7Qucqavo7YkHHmMircAyn7USR5XIQWJB6HumfDmX682Kzs%2BkqNd9enh63u8EpS%2Frli%2BeHTHBM%2FQVyHr%2FjRKGoBo2WutJFRyst5CGUvwYIge5u%2B3UNrrScMfUPC0OkrdE1H7FN7u%2B4ywdTMfXWTzB0%2BmbLK0JqQ3xtmtpyomIv2gnwnF%2FNmw%2F0romkCha1oMn8NPK%2Bn6ljwafv6MkZZ%2BDd5A7K9GqpJgqO%2FPdd0P9OeLJt6mc2IfZ49Rlk%2BNjBkJFTYqrJ9lePTKyLolaqYb8R8yzbEQr4mHdZxCqxASHlYbMiBU7CljqA9U4KVV5xFuzCQGSHEVHX6vXO3E52XxWn9MgDJnxMDrbQoUyOi%2FoA5JhbZdAoWslWPOdjll8X8kkeRwlZ005rlFuIk8H8XI6POKQoIR18f9A%2FAy8ST3wmt13IFNc7w2RAp0tYiEU%2FtA8mdv%2BzMUu3IO3cS3UrKbvanSNa5CL30o5kdlgOZJbxXJmWV6U%2BoFl9Mc29bmtb9z0j6uxj4zHiyvQqGchXmqMMTXxDV2AjazagK%2FkK74zmaTlDRwSMWrCY6523U9vM8hiNr7Hk%2FF7jd3oDAtRhT4GYQM%2F47Yb2WSFrDd%2FQOPc4k%2B%2FRUT%2Fymiq01NEwnZQGCdlJtTZRFiJ%2BRmcg5MIbqr8MGOqUBqglRzu%2FLeTmiLeiuP%2BsZseDFaFv0t6rr7uTuthpf6OeLDz94YkEgoFvf%2FWD7DhUqias5A29L0ehgsf2cYkPut0aSH4UnrRF7rgC6AWnuXMfsU9%2BOdnmDAEOJc%2FNlqw2PoJeHJTKgnGB9CzmMnLn7ps5DNZGIvu5sckDU8cqDXSP9m2xdQ%2Bk0XBkT2IcDiTUI7uV%2BtgZZbBJl8c%2FNeQMyUN%2FS%2B4kO&X-Amz-Signature=2666d0cf3384716972722a1c8e60f06e1fee82ac6c9904952cf8476f9d1f2362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNX35TX%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAEE39mtJfrBfRgLWhP%2BTTKcLBZe8oh8%2BYNVJXkHDpQ3AiEAxOgYNrqReZn4kgAl6Czod8M6EqQNjWHh09HwVPE4wjIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHNQl5gtlOZjBRl8OCrcAw09zig%2FPDOUiWJy5uonUmbsl4cMLOyVhS6nZYGgnWaIsKr2HsurPJp5vvvA1%2B%2FRNEyvIr8xavgejNhiHEPXok%2FXeC%2FaSwrkm54LhARhlS0%2FMC%2FMlYQCvdklpBxa5Txv%2Fbup1ueiAJwpeZQbTY5ixbzLfK5TD4N5Qgm1Qri%2BWU0fy4KJhlbH27je88MarkmJ4eQIr3kyuEPpngpKRjKUO0NUAefX2YaDZVHK%2FafmT%2FUD4A5A2g37GHh6UYK4iq9YVFuFPbC8XBuUxlUZXtPS6HDi6wooBVJWcvUvYNrV0lto6clnC3A3vnGXD4HQJmVeMOkPdbdp%2BGXgFMFWXjYZaUO6CNUAueDwE7Y4zJE4MLh8WvdgnIT%2Fe5%2Fy%2BFVcIKaeoNpwbRQ1599akTQwAHkvHiL0ytM1nGNZ9kcLUgR5lQcgnVqneIltGeu0xY%2FMnwV7vcJ%2FrirfVVEeMgadyD4PPTrwKKSXe3MXKV37YPvLNAYVEP%2BXLFpojriNqnuqSXvZSogK4TNpX%2BoaYUPMAzh2iVgpQ9XVLlvBC1IG7QzoTFvxQ9xSZ2Rj4EFaSnM9qIR6zm%2BCSqrhVz7vvzzqek8wVPj0lihyxxNA04cUxZrxTL09Qb8Myvs6wdFzLgQ%2FMPDqr8MGOqUBBsg4DGHYh7S%2Bkru25S889jdi7jYA9F5tmasgXsnThIC8RZZZhmNcd4tRIwHOES56Rrj9oVZfRDeAAyY5Fak9pMP%2Bf3dqZX1qNWanudIHfAxog4vU11Tq9eGGQuQoYKpluYH2bSAk7r1fnjoyl2hAEP5j0eztLZ4FfrgdY5L%2BSG1ZjjjuPsDWpwLUMV9ohhE6Yt5beDI5GsagyWA02ka7LFDAx4Sw&X-Amz-Signature=f7e833b043ee9397fdc11c2370ee08db1a0d8603ba62ceecce2b18b70c275f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
