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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNGCETT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBPXDzj4cZfoH95z1wgdGnprOSxRGqs2S3Q2gCm6UDIAiBxfm2X3AjQaAz7zikituKv0JPzJBRkqeKKURHsqTxh3Sr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMRhuemfYIkn8%2BWVtWKtwD1iWU27ixdYG37AkBoewWTjPp8PZG%2B1nB%2FWqiyk3gXiBXMqpNKFNuWl70SyMSkPW6lgD%2F9DNHC7hku3M6Ud5qLO1YecogIb%2Bq8%2BrDekrY3Evp37IhMutQ5rJAYQAaDrp7frD3QrE4rvLN2EmVt7vlBfwImBMhMJStu6dEoTX%2B%2FrZf2qlniQhduC3WxuJbTCfCsiao3mvlZGkEo%2BF%2Beo%2BF6x%2FKUJBfYypQEyO4dB2x4HBTE8JoVAmuuOyNwoDLws2anJZkO5zlK7%2B5xyftw25oLW%2B9bFxMW22WPY5HA2xY088cBBxZ%2FPH80mSMyQdpJ1ysf30Q7b2XesVYbTVS3FstXkwahiFCfkCMBFhkcs06Jt36AIOZTMxoY3li2yYEaTkscMv2Msc0Z7pW4W%2BnsNQEUH%2B6bAnWYoF4uOi33LvzdAzynWBLbynnvdPfGNXdntDvtGGqQ3LMYP0IqQYktCoyYKZYCcrdJTs8aOUP2e3zUGSTIx5VASeDl9RN6ZfDLrJw7INn6bTV%2Bfjocamthh86N4Nnn%2ByKu7PaO2HJLo0xbqwtMItcys7F4fTOVhnvg4f%2FJ9dh73w1li4k0AKwdzxGElenob3KP0799vU6Jmr9ojaH147JIAtGRlnQG1owka%2F2xAY6pgEPHgWhrPnNoOgxR2oRAQkY2DeaYKLTmWOgSPdzZwF%2Fb0ukhciysrm%2FkTufAFtkTGnkiHF4VRyEivjuhK6piQep893JUsEkybjVNtlisSX8xa1WGIq%2B4F4hJXOXDbX08OG5YAxVXDKCikr64oN1uuYsSaRRPnXBiHKGLEwKgW3nxxuevKjA2sNptAnfYefKUahIkIp8qkto86bVqYhuJODqHjdIEcGk&X-Amz-Signature=9c5b719d19b8095e10c058d4e8d4ccb5c31d15f668c7ef30f3b60c74e47e6aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QGNU7CY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdPjzLsuOZgOROOKoZYrVhRe0ZJVZdodK4DMmvhWGnfAIhAP0kNZbHuBW29vETkaPYnLiSNW5m1M0r6jriHiPGk9%2B%2FKv8DCEEQABoMNjM3NDIzMTgzODA1IgzLN8RK0jzILxsNE7wq3AMnhvvGMPN3L0EbBj%2BQvYN80wJtXDKX6t8dBRSsBxkdO9m3yHk1A4cPBs5h7rpBe%2BaxJnldFC5qqIsAFBClRzUxZpTkA3pzKp6f%2FUo%2Bpo3voXUHXJOH%2FQh1EnBUC2aIej08d%2FBbCxnfe1venJkrsyWjUWe4hgIKzioTcuFGAkfVqmlBfqRfi3J48IETH6SrQSKsZze75Qf3ieLlEBt4ebo8cgPzlxFUP05eeLcK0deM8RMf5kCBwzfdIhaE0Ng55ElQ0CwRfYAkyMoY4Xt8FBjdZyoqibkv9u4IK2Wr%2BCMVVQGMxd30AxGpf5tAiRPK0ptfDL2bQAVPDLaxhUXT%2BTQLrtSZAUr5RoHdzOZIL30cv6sbymZD2yYKTvRypETX9XfZRoa4dadpshTWlZkr3aNCHMLsJpI1vOZfC6UXyXwNzsFOIzyJWcbQIP468nuXJZJVBZ%2FPzH38ErLi%2BYL4JI%2FEfpW7t1WApmcyjCZzyzjlM3tSzrJaykIwMu4Hm2QS%2BOlO%2FJmvTUQbf5HF0DkbZyqkIatNiLKL1KFDqwP6ZHHZpQO1zgKIcGVRlJzdwIySEzn%2BdtS%2FTv7meT1K%2BSfMu12ytKsMUWWdKQK8o%2BAfHA1x7AuG7VGbCoDZvRU0PDDarvbEBjqkAdfsEKbFH%2FBEAbSW1nnApo2zl9TzcQrfqPfjZ8NJ04Q3g1ocelqdJuFZ1iE%2BzICqrv%2BKm09jJwVq5fxRwzazvJkMsaYyy%2FSZo%2FN%2BF02nYgJNHwcUjLEVXEwOKjqVIeKQNdovM7xSYqXVdwiy5xOR22IIwudCPtUbohqNASLTqpl5KEHBsmPg8JkeDZ%2BrQ65gDOgGtLUMkNQ4xq3nfU%2BupmqIdi56&X-Amz-Signature=9230c3625fe839dad95ef148227e4938d2bf62007d05351557f06bf203b9f8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
