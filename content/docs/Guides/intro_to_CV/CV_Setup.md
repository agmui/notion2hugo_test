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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IO5NOKN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzbI%2BGT8UltZ56qpUSErmWg%2BoFEFkE%2BaD3VbWlOcF3cAiBCgHSdXPA6tr72PbDwrrqavHoqvlFJyafA2CeMzUQKgCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMP%2ByiYa09vUcXvad9KtwDjbx7t9qUesJ8XgA1%2F4vMeTCi7t4XEVxhUj4EWJa4JLpmBzK1bBHHqWOAuaBGWUu2S2iw%2FowxLA3I1PycnrYZ5XArQaWDa5vqvZgjy1eVdGd2ts7poWjUDVAU3exdNo3QZeBBom2nBiDBd%2FhriWWpJnk2wSjZivZQ1evuB4NxsshkAZUrustufFl%2Be2PlLERcNIBAW8%2BALta%2Btkkc6LNGbIRbdR%2FHwMOYmwNpBFs1w9cmcAPHu2jaJdc4zERMgZPxRAenzRckQe2ipTq0aa6i9EWqVUmQa%2B9zTysHpUR1kwqBuUmLaoA%2F77AEzaauoiFdAQ2IHjG70%2FCy%2F8zTaAfz9KasPYPjQM4MT9alssus%2BHokD3HfFo25fqLRInRuFZKqv17%2FfNDruQ62m%2FAgWv469IVES94nnx1p%2BUpR2XrIbFQVExi%2FCBGgtBjh%2F4exIZxZEfyjgpoSdWqLS7uYDZdXU3FMwl7SsOtzcW2NfP5YEyx5ixFAHIzzAvtlirys02wBDFnX1pxB8g%2FoBQQkQ11ixywgD%2FFWnisbj5AN4m7g6%2Fe4BLVOM7GPXBrMlXtWVFx8SNgbkGNAQbtNvs1fIGgWwci9NZPg%2BfbfAVvp20Hl0UUZgv8SzhBz8HcJD34wyrihvgY6pgFgRNuGsQG97M6%2BMwkmVCceK%2Fhe2xYWSjtcBHoZrFPZmFiJzeC9T3YqgxbYo9bAF2Zd34eOjKatcNIMAvzo25pqHmXXzIiNhhInlU6j63jYmXVCDjCH2xhuoOOsrXLDsf%2FTbslfWGAVZvJcJIifRjSlOj6ibH%2B1SnzViFfnqXDb6l%2BZzulf7%2BM48GYdp2PECEtZcaU6afCsVpbPrnIwMJnUhf7j6E%2Bp&X-Amz-Signature=3da43f93e803df8b1e48dadd44baed0db2cd38d9c4b96352433e708fd5025e3a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JHA3DOD%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWzqLXIE1wKszmXovn9etleK4gmpzueyFlLoaQHlQNRAiEAkCDKSpUsIJyQR2vQiSZ4yDFn%2FUJIK0zgcbwdlmXd0tQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDF2qUysBEJIFddEFgyrcAztfCZepKdALN1qInlWfxq1g33LZ3gD1QgxlPbxQKALusPsyf8GE5aOOsK2WN8yQM7S4HzaepFNP67CW5m8%2BWo%2BM9Y5N0LVBu9YPLv9H4vqx9G%2B8c07lUDsVgc9aIOz8DV%2FP%2BbPZjkVifKtDlBzHDAokRCCweaSPU0F7Z675C34XVdRM2SqwE9QaNsyTwilMnP3i%2FFvplmy8MVDuAd3C60z2YE9BxATQ8MhOlNaOM2ds%2BrVu0mBSwIk854sZnp0kfJMzTQ0nPx0rpblvIqtQFDiHDrf%2F0Kfwq%2B60OQnexOmYKn%2FdfcpCmUibF8FvxWqtCGCsgx3uOZuCg9xgbUvOa%2FNmZEEITanitDYIaHPoBFVoiwra%2Bi9Pv7sIOXP3acb%2FsXUqoRzsPTYQ01EM9QPzRUfAKerqbQnYSY%2BbBUrYzn1O1Yb6QiKdEU5vJiaPdgs%2BMF8l26t885KpbOvOZuqA6NNopAR0vB1EoZsC%2F3ts0Rbisduc1xwsNsALIBr9UBzXoSYMynsylDDclLLR64Fukzv4KrUCnw2Rnklp9KDP6l5aX677coHq9D0WCPWK0dTvgzqLVyAt%2FdG1ll5RZm20roEtzuvRh4Y1cLQtHE8C%2BanRhfsoZO4iRSi3kAAlMOa4ob4GOqUBSDDPtU7XYHy6TkxhT0COZggj1Pn8wdEHq2sICHY3UPyLwOhANI456gTp7JT%2BJ40FqKp4GQKeRxkxD%2FSJK%2FZys7qzeFv2fkwcFKwVf8y5L9WUqUHjYEtRex8A7RLt93wKApv3Y3TmNkCt3vLLtoFpQ%2BzK9gYMdUFTxkqOKU%2FZeFqD%2FQxOBldZlyhN1pU3zxTTEcFYkMGPqWvV2jFC8BjnusFiLIr3&X-Amz-Signature=7d55e561f72369db740737c539c70af13ccf0fc35adc708eeb898146a53b8d32&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
