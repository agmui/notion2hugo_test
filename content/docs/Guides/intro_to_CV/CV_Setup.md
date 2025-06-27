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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QOEYIFY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD5bf8lbvC6Dw0nzOrSl9bQS5ICO8pw3F2CoIDIyRkEiQIgZ3rurdhrmhQFMnLZRI8wUPyC1XAbHiNafTrrABqxbYUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGH%2B0DxRyBbJilJXyCrcA4h1bJ%2Fy3sEp1hAQEma8yoZsF2efuZqX4kGBsHOm6HQ7xPvsc6gzEPeEIpW84JGcqUdxeAtvXbFdn2bcYJ4lw4MLwAB9vTrCdfqdI2wsvtAToe%2BQBRLwIXOwVzP1GsOkgQrKyCsPMBWP4wZWYvxEZEKx0L62DfrSiOhs1bG7YEQbzakO54%2BM%2FkRXP%2FnpGnfv4d3KFFrj3XDS4ENEP45tYZmi93ukN%2FfiJop6rcd3rhk0ham9%2BdMBW8DE6RmGZG0AYMYyN5TcPSTcK6lhOQ6LKwbTpCXT8sDkdcg2nCC0mkr%2Fw3GNYhwTE12i77wu%2FvzQqTAtP0l6AQj1l5MF25wLd%2FnygCKwsVjOW2FESaUzC9%2BFfQeJZk7%2BWc11RLLDsH4nleh6Z8qz5Ipamm16zjs3fxlNpAuWv%2FyrSLBACLTH7dHZaFCpADCNGQMiJcyw2oHfY9qLSbRH7iMPAb3qz3ZE0koO%2BxlDcv34vhrMG8eOTFsY1hBJVSGQytBL8o8iKA45MbhyHxigbgDCKFB9Cb7GdExSxHW1C%2B4n98fxJwwChtuf5%2BfOmFS3Pkw%2Fw44jchP5EkSKlY5KS%2BUXN%2Bbh6%2Bh1sSAOuQPvjN1fW%2BiMP9uImKvI38KrvHteZdSytW0cMOj3%2BMIGOqUBRccPWcMhajpWkARuip8N6rh28yxUOvFjZJwyfK2h5rHnx6KB0GoUejDeXdrbbRfbP8no6LzuAZAFWvsRR8ZZ19BwqKdjMHdggQmzN3rFPeB3gmls6dh8A3%2Bf5r5uGrgb7xco7R%2FD7KQeeEmbs9XrXoLUr0UX%2BWWJks1Cv9%2F65UoQAoIY%2B85o8j5msngz3bNI%2FMcxmpoCGikTT54C8017UFCaFYA9&X-Amz-Signature=be1d4b4f9a78bbddfd107fdecca2bea0e0154bf5291f4ac11beec5db8f56f520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAACDZG6%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDIvJiUXfWJAkhAygtivjPeDikI1dS0CXi786BfU2AHuAiA35pgSCIvAQueIetUCjJmfMDzdF8VNi9h0uzYL8Qeatyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMLF4x3hWSsQQVRpaCKtwDidJr1ndfJ4bldYDm%2FW%2FOD6zC2vmDVMcZUSWXy5tB5yijUi1eP47nmGbW8mHa%2Bsu2BtE9RHtMNfXxsLY5NQ0LXxYiqEelIkcrV6XKOeDTx%2Bz42eb1jHBb57q3Q3xpHD6kX13BzrxvKzDVT4Lbj2RXRvp1%2B1ipjKztqSXNpk%2BX9MBQ41LWVICXpSEX4%2FW89Usyv9xWiBVisq%2FYcBp1%2BzgYD%2Bod0UMZUaIavnhvhtDHmBQfwaemSbvXOoVv5hQ8Ss2W47ZGK%2B6amvuWzptL0rPEOYZSkmqHIcqDFBRFQVNUBcPq9BVZXxr4e0xHCjCkj96hg%2B2SMV5CfeHq%2FyxUJs90QdCVFVAjublna3PYl7WUC479QauTwDeY06DhVc%2BF4kHxMO78%2Fs6h914L5v2YgL%2FE1M7Sy3uuhbL4BfitryhMJ5iKRfjtJReyUmTB7FSi%2BaBBNins8y2byRcmW%2F7FHIUHycQ7lDIXfmpy1fV8o%2BGMdCi1cyLTfAfd5mWDSb%2BPlWY7rb24mPxy3Z20rmUzqK%2FlDNdBXP%2BRDv5vylm1FBSoPVIlMLTh0%2BAkPeiI79PuBDTl6IgH1O%2BEl%2FRwrVM6DEFRLXrOju%2FfmbuwlU5tYFt5kmZEzyMAN0Qb2OuFM0MwxPf4wgY6pgGOj409Qd9wBWxA4n6Br6V81G3wPbyd6DWreKFWKQUJGLN3qOMkoCbls6IeSjHvlFp%2BGGgdhD3LnwDm%2BeyIszj%2B7Rp5JgYzMj2T4BULRecTgMufEIeITiZpLGaKUxA6lqNt88Ja9NtCoRCQiBCbXqdQ%2BflyCuGib1jH9RgT0FsL%2FSeih4Zb%2FI%2BUaBDVnxuoQAMisbGYaq2%2BIvThEs2WtcOjdRtJKctu&X-Amz-Signature=eacf939f0bd3b41b6afd57cbafcb09e713e3a8dc426a0a45f7cc6c28ad2baa81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
