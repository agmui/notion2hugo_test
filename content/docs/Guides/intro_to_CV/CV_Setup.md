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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZR6QO4H%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ5%2B0i68XO6%2BNUyrag6HJ5sNExDK9sn79fSlw5sn3aRAIhAMJ0saJzIgOwtFf%2B8SKgh96vESxloikatH%2FgwfKMVBucKv8DCHIQABoMNjM3NDIzMTgzODA1Igy1JbgZ45GVHAwZJC4q3AP6Q%2B27NTLd6Vjt%2BRTJAcJ0nQbfJAkOhVZqSr29L84MWEUSSBjvS9hi3ZT1X%2FPqXuCfWLRYGPv%2F0XtEdlhfETFJ4cB7WV%2FrSQtafK%2FcusNNSRt84nCIKbmj6Ml8Yctdz2tlHbxGEx%2ByXGJaRjdMHniRuYWY%2F0zusYuKPLVcqeQfz4l2mfTyejzkXTnDpnq5uEqUHKK67%2B0IN9lSnwueNDw92HS0XUAFFknyG3TrT%2B68KIeSpPPEY7NN8Ps62JmUoXVPNF3zhvv6KM0YlsxTsyiPdH9HYr9Hx118kYKw2%2B7XnRoTbNAKJ0JQjg8GA9BdG7zjNFGx2pOQQyYNOfq8wI%2BZez3wRduL55orwH6FxA%2Bve8UkEvHV%2FLs2t8WwsLW2xwEUcoeav39tc6zRe3YCTVIADd7cANAEUnkaaN%2BVOty8T7SjwMbxCqM0W4xRBs6t%2B8I3tBp12PdHczob2y8eyzk%2FyQNR8xFc5z4HI4%2Bf4TQWDnkWGHDMCoBenuZL9758aTlaoVSshDqy%2FcNPIQVV45Ff8b64UknAhT5unbMN4YOChT7iihlDME77NENN9r9BUV9MBiEtGOoVtXNiQAgfq%2FLKP4J68WkwL3KB14%2B%2Fa8bTpbZ31tqFAvCFBmVOXjDI%2Bo%2FCBjqkAdNmwrrJWfqfC%2FrFtxUqL1fLg1lCdDo%2Ba4PYVWlJLFUhWIccuc5epwnLCL8%2BPuxm7zbcE8I0vwG2AwAoT3UTe4VA4oWZ2d8NWx3chFAFj4vvA4FWXK5Qiqfw673URoSoVOptIaNPtzrMCwRyak7ZCG3ByNMnpOJjRwYbhKtijUzBtZDr6xk137Sfdk5yBqXAeh2q5KzXDGk1tHkUYhwOsrzTsRgE&X-Amz-Signature=e46764141bf585d76ec6995db18644c9c77bba552453504e853cd4cc5807d1cc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHRGNIP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T110543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXlxhVwsEdFs1Prwd0i5lTA6hRXaMc4Naxjn3epdhFHwIhANjfsZxDhWRy6qIn5UqyNKGbBc2tLCtK7aYdvQbCs%2FmcKv8DCHIQABoMNjM3NDIzMTgzODA1IgxxK3qQ7hsAI5U6Ji4q3APFw9XTCEzpTFAmlpUo1f6dElqKGBvgNaaS%2BNkkvAQJYOYPMYn%2F%2Bp2FMqdp66XJfU9F6BAt5LvP1ADp1qgIB3URSC7Nh16FgynEkFnhwQjVGBzLZJfhFwecK2KcP8C%2F2%2Bm7i9CncY%2FLHICmkt2ex72k%2F%2BAF9AiGAXHZ9jefWKI8YmBdxjWUO9z2Ltq7SIA0w12gHnUayOCC4qaf8c6fyCkok0kFH9x%2FmykICHophh6DqBW%2FjJ6KZmdNZ7ZGhDyYs%2F2dMWVv60r9yu0uOw3KiNFPNzOii8hVWaLqY8q9VHbGHd7IGVj6Qzgsr%2FyBSRju5%2FRxlveLigipB6Dn9BeAYZfGXKr6%2B9QkntxlXUstxV9H%2FffI88eGEsRVhWx01TEZIJH0EUsfkbSNLUqNJ6GyCAi6XJaS1TfVCr14tR20%2FqpxTwgmuU0NBL6i2nF6he6tnr0KGC4Olcc7QIdERvX1jYNxSPeubQXS1TuelQnwrhXwruhBVjuaV5aT%2FJaXhmEo%2F5nLVe9z6UgMKfjrc3%2F59%2BH1alUd1HOpjEbs%2FqhjHXKNupVSgwrqBzxg6tajo%2FHKgPFMUmOZQzD5snhNdvmeITk68tUilyLy6mwumrD5uL3i4T%2Bp%2BYDlBB5yURnsxDDJ%2Bo%2FCBjqkATR813R1DutuMZOJcIoOCGwN8IGD86vM2su2ANnXtiE1I0WAkvLMICH8ezsC7i%2FBxw9Iib5QCw%2BAgGgBEY%2Ful77nuIieMsWtHseqk6huYEHcucPmydrqoDcofMC9Vsza7EnjLL5qkgJAOLyiXtRsYvSRKdl%2BIDTgGyB65%2Ff5T5LfP4UmYZS9c1e8uGHsJEm2ATNKTX%2FrBzKEZj5rkzd2rg1PBKQ6&X-Amz-Signature=8e06aa36744d5694a628e987d487ae7420fe2c0b36a76d2cfb88dfe9e39cb7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
