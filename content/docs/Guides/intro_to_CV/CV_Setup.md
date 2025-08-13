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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJXYMN3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCToAlvgRBm2Tu5pr5DoI3o2dJ9N2JI5mdWhUXP6FVGlAIhAK1EIhXZHWPFE8QCPMQUxgnRfuGPH%2BaOkobUXSUFAQyEKv8DCDMQABoMNjM3NDIzMTgzODA1IgyLdwChdpGJvDcm2BQq3AM2yDmzmJUJz%2F9WhrgUdoybgf1pgtRP86fC%2F%2FI4rb7McdXTkIrPf7BKSPBcHabC1mWvi2j090%2B5sIOl7Ww79MY4WztVCx7F3IziAea2HqqzoYyBw5oby4ppzSSJZjkCBKt3gcIqupheZTGAt5XGNEMmTGqA9Q4MqiBl181PSBISpSNjZhTKx5DQ5ADXCLckceusecOeh2bsK9llzHRhPWY2SprqdqP8MXH%2BQ0zMxcjN2UzUG1N4tmYAqyYMiRbJzTDYDoUfLzpryd2hjBU1uiy6kTulrMHAQNCAe2MXWjA%2B6N6ue6gVNcDOsVR0VUVh31C2iJAQqMcnxssd76KAkn3HNlZH1Dxi7wic8Km7QZ2MF1ZjJySgHPCYB7N7utzuoZtWWVI4jCpZdEC6toE%2BSpnJiEoIq4UzxVFRRTgPjWNGwEeGpXlKAwIOGGTCRcp9qCenj62a0UkRblDIQOQudu3QKaFMMj1nAhbqBiQWnEBb2v5WZ9L64I2VMoONybOPf2eh57YNQfBnbjC9EQAjis1gPrt68kKqb3mKcAzDiQcQ5gstmfHZddQ1R9EOYpcGDgyOGsNGxZeS7VEbIwWUaMpJ7K7VxM0WMhfFlPJ2jdMpHe4LOkWyyz3od473szD4n%2FPEBjqkAefyYp4RV6xBROj7zdGdp1zznhFXFI%2Bx1SHuxVnlP3Az5vM6FXOSsf5nNxP7CV%2Bj%2B7UNxKbnCXKKgSVkB0SIHEqa6uIjSZo2OFrJRY1xcHoxjrWIJ%2Bg0SVP%2F%2BXfKY81qrAWmKuRF2ODvqzY4CDSTUaZ5P9GYy0G78lP8J01YB577pFh5SO8vmZGPLTYeie%2BoErnb%2BE5xEfMwPHLHH4aCOU8LdZcn&X-Amz-Signature=13834816f13e1ecb14af9d127a0a58b2145d3a99b8c06b391819c263ace51935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6IXNGG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl3t7888abYush1MHyaJFBTN%2FAjgiviqNzXc3u13PMIAiB48j4zjuJ2pNa8Ifxoap%2BXLvVHLKvKwZBicJYe48bFTCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMwXGgFAZub6Q70iN7KtwDxvRxVmnNzjPMZDHRVRDpJ68nXdmfA0xRdMQmCu%2FIfF84DpBLAKVZ3KDWLKgp4lQCZkHou7D9ta2xladVCL7ds0Ze5BTP5oACPqG2dKGeZs8Wl%2BPc%2BnaLWxUeLqRC2zfMtal%2BNrswHMqrzg0BgbzNc5q9UHsOMx1eA4c395xnFyzQo7LG8ZuDc8HtOABc1S0hq2MCP7JJJhdU%2FCBEXscY4cpmJOLiJs%2FNSU57zfRGA8RQiEyg%2BueVJSsRTZY3yArGgAfGR9J2zs8iz9AMyxiNc7k%2FmitVvv3yUJ8BB5zIyEvGrBoMKMh4VoQkT0W%2F33bI7IJ%2BdwNwfDKK6022tMcAYt8bxPZkOMPSjfqRuV2cD%2FCsx77ca%2F63HVKuA8%2Fs65hlTXYl2UGQlg8woxpPjH%2FBnTId%2BL3mNhb0il6f3nLU6Qa%2FuDpMAKhhD7SIZiLliIVgFYLpphoPzJUIszI3OmVqbKdeN8d1CU5eOiJEPXGyx%2FTEp%2Fag95aI%2FvV5jJ1XU6v2%2F6wBzPEhS9D7LzkUzR3EdcTNT%2FhtysU42XoRNOwQAqJlkHaKSIUPy8ybY4bnOQtnQn05cFXWSNPULhU3KD%2FNErbh%2BP9jVhqV1ygMt5i0zLgqf8Mf7%2FpgNJ9LVm4wsaDzxAY6pgHVa6F8xCoJP9Z5YMY5ODC8fYRFFwFi9EhPjnV%2FouyRGUxMeSyH5mTPe849HdsgCofiAltkrYjXeZgG4%2FSIMMN%2FITE8kPdgiz2ylYaaGoZW4hhcq0OiM2pfP56LA8jnXVp%2BGNAoT%2FJ%2BxuK%2BALFiA6IpBp5ievGPQhCjVFtaxqy8d5CNw2Y9hRyW2yr35ULURh%2FYDZ41bHZwTi%2BT1DqWdE0F5VV8m1oe&X-Amz-Signature=a67afd61b39d01f0774d837b8b4a89e6c92131f2a715465b4a0acbe844c65ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
