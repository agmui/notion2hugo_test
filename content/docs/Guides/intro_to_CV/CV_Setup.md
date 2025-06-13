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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6SSPWE%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIARERHbSB6G8UCpxK%2BQ5b1LuMqHhtaridWy2x584A90WAiA%2FIlBi5lFR5ltrFdCE4w92piSQ0uCmpvVYGnWPGmnSQSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAOXMePJp8VgfRz3NKtwDHH%2B0mLz%2FbdpZ4gGZjfcn2DS12TFrECZx7yaHzjGqvhK9Pw9%2Bl52GmDC3CgG0cYM0kP7SVQpl1pdXifZN8Ma6rV9cQzRZpmS9TjF1rBvUeM6UN3Li8yk6P5GUBRaIeHr2W5sWdbI3efctLZ%2FpYS4LrOrK1hYUiDnaQCAreJMgNECkjrE0ziBTncOCMpw7Z6tCbXHn8IbmgZBcVFTT2nB7hPsJnLErFwe2oJtIdGYIvsnojb0a8AH4JTOFuSQE8ZxBfPfR3%2BekAEtvGrP5IBfQGi6K2kB1obDg%2FwobXTgDcdfAKCvWgtWugTyeAlYWLu3%2BWfZDRBo9R2TUcLgposPhXKpi2GENKnL5lqUhk3K6zc0FgrTExu4gFzCRT40FTKI6gfFgRh3hQoO1Kl8hOCAaQfKm9GqXmFd5aH1Oect6Sv5Ziei0SV8G8E7EAIAg3tfYxyhuuuypLK3rWPfsH8rNdPbvXRq5VY8uAuvA%2BUzL0w88E52AABaXZl1s5aNFrAPijj5AMKfveGm%2F195g4OsV6JGwjuYP0xHpuWFVN3l3h4AKm2IB7MbeVa3zRZNP%2FTAIAwLaswiRB5dSza98LO2%2FfvO7Ne7tmMud8tT3lZv18veqPO7SMHDX8rR5AQQw77itwgY6pgHphwPJ8181vbiLGNd0iVGCK3HQe%2FsibOVtm%2BEahwS84xtvWRUelW2BQWJZJT4MxMjfQdtnzRlsBZZFz8OQpnmDl%2F2mWGZd5IIs9QTMRPJ7TSsds%2BM6LebZXGPhnwHwlkjrHXe9sowt7ssc1tI%2FKSNo8vHRHDht4rkBP%2B5gXH3EZDTd0EqmGEuSUEmz2OnQQS6Cn77ZhsjVSwfx6Ijv3q8D9SVAyK3g&X-Amz-Signature=244ad159f7f395301575c5169b2e522bb4ebd3ca54b616fc2ce224435c4c67cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLGHYSM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBwsyoEe3F9jxqpEhTb0DbzFsknOszdJ1U4Bn9HVHpzHAiEA8blok1YN2mOZlGr5%2BemT6Gm2FRibcb57LawuGOBoK%2FsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMJ64LKdewvsBsY%2ByrcA3tcElsyC4J02imduwgsQllOwzbiWKTx6upm%2BBOnKZgPbQ5cAExAC1PNT1fLcTJ5RXrEY8N7%2BqjCCoSdXyo0oxcQPpEBsK1yyfQnc3upOgts2qFXK26BR4Zz4oR%2FG3yViGLxDi34g5BJhUYdeKAjHcG9UfzhlTt4UtUYoiQVUaPM0mPGbXDgAcwf%2BD0mmBjXxfXbXEYG8sBXZ%2B7yGYMbA%2BIPO%2BwDsUZ3mLDNLqGD9In6rmhqkQXJUCDWRIeWbdF1ESiAQwKv49GyNcNhnXWSeNvS0uZ%2BRgOc%2F9acjF3mBralwTrLbvkW1PiHZw58iLb333T09mDSRcpYvQlvscM0qEATK7HIzhTuBcMb%2F05FPTCtsmSE3z1hpnT2ImK3l%2BYJy5HpEEx1%2Bblx%2FfZ4DQsuFj0xo3EnH%2BC8m3b7J1wS6%2B3epz0okkEZf1CWcfFgtI6XFhltUb0O1anS2FhdD8edmZchdhI5Hi5OdYM3w0BtfKvQm%2BaDX5wwJ0IPvP6nrtaqS6Rd%2FmgV0cMK7EYMYkxPb5l55YcZQWgWrD8Zlbna5apmtnAuF08qq0jqnucNHsBnFFf6zYvZ%2BegACpv%2F4UUZ4Rg%2Bv2wi7PvIEV%2BYiK7FpQpA6LfdfxW0bXZBIBbBMMe4rcIGOqUBET6VUxtAmWTZWCtyr%2FKI8pwoYteg4qUcz0cfNL5zBhJ7OB6q4O1Pt5%2B86iv2CgTxjRzDBhCB1uOsDGAMvnms8NrCblqQhgxyL9XhS%2Bh2OkpwdK3odF%2BOYtvV%2BobDkiqkstoe%2BldnLfDYYlzFE%2BoT%2Bd%2FFMmdpkNeDlyMHUEQ8k86fljWmaT4cd8XqzFXhMaEaov6qPF3pKknPQHK%2BXgGVhyVNHtzn&X-Amz-Signature=8ac74d9d64e0ac55f35b000834cfe45ae2f1b2f34d2ad196c6ba7070b7ac0685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
