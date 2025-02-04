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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTONXLZ%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBUbsAOIYLPjXQUDu6ZaPQUdGzjf36YTEkOqZ%2FBp%2BfN6AiAWmmhotFMOF0W0vQlmM5hh1hdXz8PcjgGGvzOLwDWsnyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMSLFtzlGFYzP48iXQKtwDkm2tz9LQ4VMbYyFn%2FiRqGyKudsZWDPia8CCPqt6BaemXx0VXTJyTO56F%2FvJX9iwuV1j2iAchPo7KB%2FhDql4OnlbFN59NPz7wMqnRKn1jufLFxEfzLLFydwqrlVwv4DBWRVy9fSsM40WYcYnU8hnXsFfFjt3ljYOQiGqmhbZm7w3Mk59co%2FdC%2BvpRqiu7edkg1d%2FBngQe1E2t%2F5E5%2F%2F4w9eNHmo12fdlA2ttVlbt1wA2EMr7k731zHvjYcapBtC6sPXaq5lOg83r%2BJ0%2Fk4QG7nWjgJUUgqy1GCJ6HjI2EaDLy435Tp1ohNUQ34xVhaM5r2oPyM%2BV9vIw9ZZB6PIpIZNCBhalftKmV9gTP0MeI%2B0VXoEU4Wtme6r2G%2Ft148l2N25TI6SCBiR3unrcyyPe78Dhthl2MxzZ2F0rxjlp0DvgWoF61PzFj5vqJNuI%2BoIpOvd87eVIDJmWo%2BPgQU64m00hlyc7INo%2FK%2B6A9Tlm1zvHkC5ia5Nf7wgSM%2BwhXjoqdxCLJGpi7kRh%2BrwuUCjLCtxQiohPPdXkmKj6avXZ6sSc1Nsr6%2Bq5rifEWTTZYEsQBn6a%2BkU6UGHUpFxoM1AF2kuJktl41xrS8M15CoC01EqJDTX3t1GqRQIa7%2F%2Bow5eiIvQY6pgGR3V3nxJj%2BBMOgBll0c%2B7ZUo6Cwu2u3S29PYtNk5q5PVrrrz4a1MNfwDfTbZwFg4RLoSgroQq%2FCsls%2BNducnErbUstgNEjAN4MnHtKsf9fU6K6v4uuMN6p7va27qVLqOZLVIH7sZFJ88%2BU%2BS2GahhSip9SfZAjclFquL83fT0dRR1ZjC%2F4z5MZtOfVW1SFDtbSY3f9r58ntKeqG2tNzzCGt5u0%2FKWE&X-Amz-Signature=cef4a3c0afb1a09faa673b8e26cf62ee330d945dce37b51fe8c77e5b01d522fe&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPDYTR4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQC9jhO9o%2FmE30%2FiuLbhrCiHItkoNJVaRIBRM%2B0Fbb6EpgIgMRz9kC5v3xBlxgIv6ewAJjyWGJwVcq564g5O22CgSRAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD67lnPPp2cKf3n2oircAya9XSS3sCxqET%2FuA%2BIpYtpd6Ak7zEgEZGUCDea17%2FRiCIkP3GTCZpnrLuaW%2FIYskPUhN73wo8odt2NR2XHz9MwdPky7q3AY%2FWMS3DNDbc0CK3goZ26pl7GA0YP1Oeo2xAN70bpu9wgyD4mV2qkJxmrQDSBCUyWhT7UxIxsVC2XylfrkPTEF3NHZvWmnTeHc4YgeOYpEh3pb62f4frKzkrApaHhNT9t9tT9BTrCCZlPG6tAIe%2FLE6%2BzWIdzmP8O61DK3THQ91f8zBEGpqhu6qDlT5Zax6WyZV1tL0jZVqBndL3gChbRBMDXG2zhvzSv2GPdDWQSSObZe0PYKWyfLh6YX4MfUEtpNgGUO2x94%2BX8NO98a9Wy8zTHNUjhWDyOJuBQ%2BsJ3E8Z0a%2Bdf8nm17FI9F1Fv0y772qvOCcC6Ym2FF2MZfm6h%2BmG4%2Bc2RYQpD8ImwW70EXkOF4z17%2Fjp2fDduSqk5yqfTCW33ap1N%2BbvrcVnvbruFYHLBJ2b%2B1tk%2FpF8nnkE3bwdDZrgkSuw%2B%2BoH1fbTYM5UQw5wPmd41fkVKzG99JE6Wo3wBKLZ4uBRQoeT2Fxxq2P9XoOAznDCTsTlphGzfQPd7%2F%2F9c8Re0HIlDT3IAr%2BQ6sp3TRZjTZMIroiL0GOqUBxoO7hPfqB2DWUy8mdQTmjthDWPtI13M5m61%2BsW1sWSKi6MZArLbKr2qrTdSXmE5fN3U3RQHNjVv%2F97vb6dpIj2gJYPQEgsIzi61cQl2eyWjAPJmjndBDcIM46DYVCmxidLOwbwJOZQRhuwiio1QMR5yW61T9TA50KeKJvHMNk4krTKDmUvrPpM%2BdcE7LrL8IGWVTCcAXPCD4JgP7%2FBoBbCd8hQ%2Fw&X-Amz-Signature=df0873520d0d798aa0b35fb3082cc0a6150679bd27732214a16f424b9a172f85&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
