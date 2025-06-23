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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCSKYFRZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIADAD2qFS9aMRh6wCWlPbWP5R5f64fkTgVGuMRXA9dNRAiEAzeh811CrCw1h83DJ1Q9kN3UQ1itJysBDQILiixKbBu8q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNywVCAhAz4Hal%2BflSrcA8LOZGKPsAFEc116WdgCrCBrvI91AP5bUWD5ibPYQH2zsEZRCm%2FV3O%2FMa9qUyV2SBNwkD78GgR6g76kZ3fEnOpC%2FjYF9c9dNzvBJhl8061abjjAe8BC19Q2xLzjo2bkpMtphITDJNhoFxv82%2Falwot2aMh1izbbvHmboHTMSASU6%2BPUBBCrdUZvR86lii%2FO9qtU1QnCTqKKWxd%2B37gpIRta18XjNCg4LmUfQpsEeNnaUPUZ4oFbXrh47JNG2Kz4APMuOGeqSyg5%2Ba6fWCLqYtN9ASNJmCKhQ1jgndBNb%2Brmv9cz6KOvvAwSdROgN0Mt%2BTd963CWnu97KIh5hDVGBr78rTPfW9UjCzTLYXk8e6erQc4VHGYbgn5NOEcH%2FXhBQ3LK0WRAnL3nElINs0oeK0UWhUAv%2Fl2a41Nq1BGaTwKbh26I%2B0yrx7qVNPlH4PZ5lmMxXsh%2BQ25bzUeImZG6GGT6Xp3nYPZHqGZ2438yhPlhU19b1oONvs53nT%2BN2Vp3SM8gOV2S0AByChxvnbsFYkd14PIvpcP807LOHHukFWroWhnBCr1KGmByUBknlZPZeyktQjoNdong4313aL27TFR7BAM%2BCiIznbFPmMLUB7aOolYhZR62cZP6dDxUYMNH05MIGOqUBLDtfwmM1BzVBXG06%2FcZ%2FS4r3hweLQqJBlElNX5fBkTTHUWAcN9aRs5m8k80kG1nMikChdpv6YU6sJA%2BA7G7OIBS8GseZlMkv4DG9SexwhkCg3O8l5rtdJkcv7xzewukTVyYC9LJiOcLg4%2Bu37Skj4FlJdEzTpNHCLQ8E38cWNZM4jF1WL9ut1Za%2FnS2uyW8rOoamk8eKJpy1ldSt%2FJy90j8HM0So&X-Amz-Signature=0d419dabc1cf8e2378b8613181b4a0a6941d857d90049818e9e64a95952e3a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2P4U5W3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDiwH%2F34KsvBVpopmClYNE6HoU4FVlZq7ABN131fnx6ZQIgPF1mKeZkKrvdgX5EZWQaUypUrROVa%2F7pc9XDZuhJupEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFuTtXW%2FDjBLIedzLCrcA%2FvamqoHu93y6T6kh6%2BUeENoi63DF0Tn21ggWY%2FF1GkP2R94GjCc2GaE0uXmeVaNwUfvaW8Sy%2F8gidMnA3HGHSn7fIFk79AgDw68HKg8JKjvfeFP1ZO9oK%2BL6ISBAXYgX7TidHX2ksgLm5BAijTAE%2FYc2Rm7lG%2BUsH1RW%2Fcaj0wHkemPvKuIM96oP5bNhWEqj3hamOyBnwmTl0yiH6iKMjCfrP195J8%2BwDmMom6K%2F%2BuyX2IQT4DvlIAP3E5WjPkm5%2FyOMZYNgReh5uDWhy35abhGfwmv9z2IhXuzlledWm%2FsaMuQ5xmdhbt03ggOYk0Gvta3sR7obDCkGA1CV9WAGGhUeYRh4VEZoGYOpXND2WszWb%2FMUSPrIJfBWBEql16qbYjbhxPYZ5PtkJqwjx8RDzHbRsskmUJ7m0DmMULcWliZrTqpqccOv2Qk6T9Tuw%2FIAKB040CSLohsW9MFYWhIHNvfFq5gKVSCazI0VJsefzNOssX7r7wG1tkhyR3GY%2B%2FFUdqs7veHMiEqAFTHaB5CyYmAAKpVrA8D86xAY63begSzn2Gjrxju%2B8eStNympPB4YulKtbxkZ9azBRN%2Fmzq6KikTJF44lOfxRE%2FMoQYAyuENQCdbiDYqQReAuesRMMfz5MIGOqUBKJiftOzMoDbNoOSa83%2BB7BBQbwKTxyLPHRQPmRSFvTqSwtstnjX251Zm5cMlkk9bW1%2Fg9ocW0xbh9e1heF8DBgweczdnOGO1ETPsCfgFT1nruV50SqtcQbh0lEWFdIaeqkbJdrLUqpxaXCdm1SW0Bz7w1lssfv84aky7MVgk4wkA6c%2B0oCKn3%2BlfnnmuP1op9%2FvUghNMSFj2BclgWPnp0IC4ovB%2B&X-Amz-Signature=41f2b74036a6df50047b6035daa94ab2af7b7247990f713cbae67e84962fc3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
