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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI4ZPGML%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD4nympE%2FDwDITEuL9MuCJyIbE4%2FghP8KFnTspV9bVRugIhAO7JecCpr5cYjgdQ1PHa%2BA9HjjAz1TiQow1NXPvWd3RrKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxe5%2BtTZEKuxs%2FpeSEq3AMDewMxj9qLuhPlw%2B%2B3XZmrl4vrmoJNNk%2FrejcyxJqYjoK00M0A3x05W4dJ%2BxLUqgkkzf0I6gEFLTsBMfpNczPmSUfBe6i0l%2BeG3dXUY791zY6eTdkqeYQzdA34QrMR0SU1vkj4T%2BGEzdhp6XR33sEXmayTp5szZh6cqh7RetFy2%2BYxE%2Ft0stmtI7RqdORSb1d4VGhxWfGUr7ZQkfifMyiUrWiO88GulejiLbmwMoxjKr3Okjq%2FU8ySU4sodwihPjTbOPzS93Fgn1CVi889kmktSz9lH%2BIU7ZmvSKXturpQS2fGQThCUJC6BjkVnNb4evFSG8NxVDsgxTZOk71VEyzpMFHjUGGQOSZNuwi7NUlnQFEIT%2FUaHSFlcIoTmh5Zz0jTJm85Xey6OdIpPMAkUlkWAGEA1MNyI9UgLPVT1%2BgYI%2BB3OApvPcpu%2FQErojWWWov%2B95OmO5Qvtu5ZeJqZsfaKPZuMAPgaHPD0yvsxBk7UjMtkAWzoz%2B2RJUq%2Fg%2B5ISGA3K8cy6ScOSGIsIxMpaMKwbUpXNYCapGFAb5n3qWzJ%2Bq9IWKlmJgl6rUzqv6vRdoAdHaPutog9HyaTpcNlm0ifBNBEiHY4t1DYY9opV%2FcuVtJuBHJh%2BuxPOQQQETCui4i%2BBjqkAbCH%2BTuVGbLNFy%2Fj69JIAAQGmv8O6WxNZp1X6BS1VssFt9Yq7XG%2FUr0OsgxSxkeJ%2B1IZ73t8aML2t2%2FsiZ0tjvArxMbfvsbmRUIE5nvS23tlDd%2Fn6e0PYzX3aN3X%2BkR4agsXBlvyGV75LLeV%2BywMrJrB8MiNrAuyY8AZHt3m5MHj9g1428I1EmN2%2BSxXHxjlLoHa%2FsaH1Ct89bPiQiRFsY03jJ8J&X-Amz-Signature=041c743d6c77f320488945e3b83a94cddeba9eaaa34abe77425360666d63c773&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LGP4I7I%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBLEHcOAhZaxtFD9kIK4eYn5ecGR0i7d99l4xSfTTDSrAiB5Jpny732nrQbFNQIXeC%2Fa3g6Q2YEyCnedP3rwPXINjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0XBS%2FPlJk%2B0X1YDZKtwD5%2BxpZFDCNujKXmv3GnwaZrPnQU6MEtoVAaQNDtxesvIeZFuMjLf8ovCqLKY1U5n4uunMpTeYccJDUx7jmsAeF1PjRbSYF6P5yRKBs1MrgeUPsCtNBWY5Mtk8VBGfrm9g5w76MWK0Rul%2FSc6GJgySig6WIwt6ATv8zZhfpQMWvprRuF0QJ8hXd0oR1%2BmY5sneTX0QtfXutGbtrJkXclLJGL5g%2FtrgbSFq2wCX%2BidZZTLzYnye3iZNfy%2FTE4RIwSel88xWWZvjyC4Jp4L7YBQ5EvUJBDJg2BR0RLn%2BoInlBr7pqXAcf7GT8hHsY%2BWc6pKW96jn8uLPkZIYC10mw7ImxbdMDfwz7xFjD3pHRZ8QXm5PZK901CajlIQxkx00Mbo7qYfyeAblcL0FBbva4RdIDT%2BSG%2Fzg7sbOIWJ1rLd2V56Qe8ty6dwH%2Bt8yJaonGMMCRfrVHA6EJ10NO6X9mL6osRh9v5rdHYK2XBxEV%2FiohE5UBGvSrHpu%2BLazqe0s7t6pqF%2F2GPri2E849yAHgu7CSxBQJ6EIUPsj2IRkZROfOThZtQPtvFQtoeQSRuUkDbB8pwr1FClcWK1NEnftfq%2BoflMKLdds7EyG2PfhE8bb%2FrKmfv4Lr10Dvhi1ze0w8ouIvgY6pgGkTDvXKXtTlUiXbMc%2B%2FFFS9NKDpOdnyI%2BKLAMIwWMQ6hmoB%2BFcaU5%2Fy0QKML3bB%2B8Drgk3H4LzYhiZH3Zaaf%2BRXAQh4VMDXTrumaTZM1k1K38HftIpcLU5UaXv4qwqSi8nXsfgF6HQfKTtGPzdnRVly8w2M7pOTJMB9gQO422JWfGw%2Bn0e7XMf4oNdRCiWi9m6zt8%2BpCrS2W5fJXqZuugfe7MPMHrI&X-Amz-Signature=91c7a91f6d37d8ff4e1dbd16c22570ffb31af3b7237d0b97d24e5cac70651a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
