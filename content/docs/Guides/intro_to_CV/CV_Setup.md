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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4NXA3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDt4J%2B7CGnHyTlHiDyymKGnzmOfDDKUDdgeCQUMAg8kVAiEA8WwzM82mcR4YAWdntfLD4H2HC24uCqUEhoLfqL5KKmgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzJam4%2BKi5woXg0QyrcA4u9WWmnIHlOL01rXQ6wd5Mr4q7SFinVzWMXr0iKu3Hm8WKW8KmU01Jn2v0gqrLEjFGxdyd8%2FAjnGAB7BtBq4peNOHvGv9BrvpOjv%2FgnQNyS5j1fu9qMfFcJixaX7bbNvu7jxisdyyMswvTrjc4pAhs46LG%2FO%2FLxoGGt1SNViylTQO%2BP%2FJEiJpC32TH41Mk%2FXWhfhex19T10xsgX3VwIixCPxt9ZFpeuxKw2aGCdUY9uG5Cw8v5AvIEqUzUTazo24TxjNTgxj9m8FVfuEV187%2FAfiAJLKeOXviV%2Bm%2BegdQXCQS8O4kknvLomTlivRY80sV6%2BaLPyUZrB7f7%2BTRo%2BDU2rjo%2FT%2F74Ss0bfab%2FMxmeE5d77xF1CXKNsokSOwZcK6PZXCRLE2h6uNkUAzd5TBsXb4y0zqMf%2F7mbEz93bh4CGmot0uYa0yjqbko2QpG0zl%2FdhOc4Z0P%2BmDkKZez0DRIfdq7HMN1o39BJAEjTeip0BR5O781Hwnb04Cbh%2FYb3BFlcLQdhPYsU7%2FNgZF7qdzkkXlB6seM%2BmZcrfhH5bt0wdKqVztK9Z2svaLQtQ2kTjwRgqYIs0CXbSCwic6Ken4F67KkPMP2JHEXt5EthUvilSoioefry55CgRd6NlMP%2B5psIGOqUB54pew%2FoJPN6LCuPjK0i9RzLcPG8IlSuAykxGA%2BR5jyVGu%2B96B2pgTeMVz2lhDNW4GrUT2TH5%2BzV0x0raleZj771i649QTq87porsZyd1IGwnXNAG5eJML1comeMlAZ3JvEjmCMX%2Bingahk9U7n1Nt0QHcTCy%2FQhm99sHLAYSSf%2F5eVVxp8J2mT%2BJDxaVWt0XDdKmV1ettcS9ekmJkUoDG9s64Ip9&X-Amz-Signature=f1c8f5f948c8806d983bbc33c31b00f6e59f722ffff633d1f94f9a28e350841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQFGNER%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4d2lbQWrt9AV%2BpcCTrx2P6DCFLmrzVPu3FjzpLtkjGgIgcHGNWBZn1e%2F9gDfZXqlL5FT4%2BTQHh24nUEPlzH4IRGEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGYKR4wdSM83S0aMCrcA8B72s1qYPhSyEfr0JB5tMYVYiTayoVIulfbX74YbSw6wFlz3e%2FRzqje3SuwMNTOAvLbbMaDln7vDshM8OvS%2BxMwM257wvMIOGJOkQYcIsCSrgDMZS2j9xtf4jbBOCXKdmjORlBNjUFt75VA5vXRZunjMKIsHLr8Lo4w1wVNKanoUG81FcnR9DpTfaqZceq46Tnns%2F9tovw%2FbuHY8Axt5buFbmrtAgSmO1Nfp8TXk3kveQbmyoaYeNUckam0iW1ho9JkeWNTX9GMzKdY7JVy3%2F3gkB4xVgF2%2B8z3NWDn1FbWCzgRTpf2Kyc8PklwHDJJHw8p3L%2BPxjejLZWJ2hoCQBeP5qc6X7tz9z14ieNk5FwS5Jc07iqwehClYiePNUyWHxEXpeWNiuTWNn7RcV3CFh7Zka%2FlLN0fmmQu6qcc2TJXr2fzln4e5aJGV%2BE4GCqgLfweikvBvxUSpjSlA9mTGJvLWlOXVKwjx%2B2D0dgtFZI1Ua3po73D39qItPMvhqTm6JA53HjUp%2FIwIxhN48u%2FCIYeVHDdNVbd3OoqnkhA0XYa%2BHyj2TbQ4VmZNphz7lqagLMiiNlA4fsToQNjzIe8QD17XsGCcCFTx5cXwX%2F3BEFf6gkF2k9MT5b8vJieMLq6psIGOqUBiuNnTbfCgww9pV7AP25U%2BJILGVwlYGkkgPbQv4rsecvLg%2BitclH2DOAlnYZ9iZtuADvJDi5zHLx1lutEXL6R1Wdza1BEWm%2FNvQGZz32n42DYReYfpflbUuhcLKtpphgbM86c2DRHT1yjB5P3tFAUdYU8frfqg4wg6YM%2BFlGSOISyANGU%2F2LmaGUaEHYUOUV3nJJil9Fcytx%2FL0YJK46amiJZ2v4d&X-Amz-Signature=6bd50ff1d67f9431187d9c0dd4b95da939e9d965ff0309d224f9955186f909b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
