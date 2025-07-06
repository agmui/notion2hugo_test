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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W77CDB5L%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIHRKk0ouSAXNuyx8R7T3V3I88SQ4zhk9Iv3lU%2FwgQDotAiAVzTN4JA27j0EVQVVDjXal7L2T%2FAQEKfgDBv%2FpC1pA7Sr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMdUf3X9MMQ18uydFzKtwDjV%2Bsz2gAov%2BqcG%2Fqxgj5VCUkN22D4IlZ8yOJ3v7S4nRj9Bl8JcffY5v%2Bm9htgcwyxsKvbrTdBJ0xRAMhsezr%2BOzlRXMs3oofxzLO0UdkyKUwCMXMIfs4T1cCwsu5rDGGKoLj1U39SYuefNnM9gDp2bowlJBitHPZa1OTyJ3H13SSmAJ67VnHcome%2Bok02zUA%2F5kX6tFhfMaZAYRhe6oZLkDBYhUDEdmxi9XF4fKk2aVOdz7oGSCG6y0VOeZIC85UymZ9WHwtZh89mKB1qD1tFx4Pn9fXDU2OloB2isM22VXSgSZMRH9AxfOtM9RA97oDid%2BzjaoX9aVsbvv9tJSUpGsQ%2BiXzCGGCVZH1CS7ujJDS8LX6kwei0QlP94MUA%2B5vUSxLjzHgTNRtjojASlNx%2BHKdRh%2BIHReYUp5mraEMQC9JrcCxoGXEAL7Spr65yd%2BibCJ7DHAiVWDFoA391Y%2Fzx8kzZbdTHz9uGnjT60ZJ8qA6IBBviAv9pdskzmeYKwrGQJ5ThCe2BQK1aUGGQkPulp4ow0igelTs3PEWLs1GQT9NwV1wHbCcXgIvyTPRNUZdBh70e8zQc1pdJ26G7zFr%2BTrhThQH2CWlgWAyf8JVS7k62vATktQ4AqTB8hIwsaWowwY6pgHRyox0Da01zTOUMO%2BwJgHs5OsXCSkQwmIoM1kuzwo2TmCm8Tcswj68MLeg7sKvv4kd2Do3Kod3qqc8y6c5fnl5YwfDfUrkS3fNpK3x7sh4iBL3QYY1g9NaYIAjADrdG2KEWawPg%2BOEfIcc3UsPEZ5ZuRTvVSQNWE7BQcdUig4%2FrVT7d4DwAqFBl1nVbqxoHkpbwxFR74J0veH7QoIW0BiiwbSW4vVN&X-Amz-Signature=6a4b16516a4ba2667798d1201159020b95673cd6d180f7126091c6cb169d7046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665B5WBX2%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICQ1wCzp41osOC8tUlFSkHddMrk0VYqZWgaJd74tP05OAiBqMroJvJgVitrc3ufv%2B%2F%2BGKpa0O423fqtxGll2SZT6nSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMtlBUcLtpLZxcOFWdKtwDB%2FF%2B6zGOrwIKSDjtS%2BurPdIUfAFR7SCwSbskgp4eAMQ08WNlDJv1T%2BzD%2FW76iWK2nEh%2BbleUjE8MTSirJANVeyO8Qvmo5%2FIkIUlaKbJ2KwSM0LGSUdcCfsyWr92T4JQ74MOMSjaj0nJCEXLFcl5zJbGFrS6S5GwD%2B8ig57RhVxTlFXkA8f8Tux91jUxHRwh45wtsRLxs7do2uZHyD%2FciSKmhvmiPS5Yc2gLocYntWlZID4aNF6icYZ2YQ97mTrdhZO98ckv2B%2FwqVrx8RQ4dbsAFz7wF6pA%2Fdlkl5BVVXxHlqwpcUbA5UEQB5jUjK3upIhtVbahxe6tNVOj0zOqWOhX4YSS3NzupP8kkOKO8SnKHO10OcSJxMuFQDwH4NPYSwYpYiygOTgpsFrLbz83CYKmupQAoarstlvFAAuCZo6vPkfaB5nJp6p6neIYiqnFervqm0b7%2B03Kv26Dd2kTCYBPkoMd3K4oBXeGXULPU7L4MbUhP6lGC%2FGQFSHYnl5LdSYA8RWp9JilLg0m%2Fav1CPrYTMHfma4vbyktYzzIPcgV8z%2BzYhBshl3J6aIWdY05ykhkGGcbXFizV1OPYhET1Ty1qYU9WxqUOYHLvA4gADATAmh9tCNqShU5o0Tww7LWowwY6pgHQ1oD4CFMhgDnV8Y2rqh3kOh9RmRR3Dd2waNDgEttu%2BCYqRB%2FJdqLw0paaWLRMe8GopA%2FP0XQffj5yaoouh%2BgcydRiJJpAqh11bgoSypNolQaaFMuV%2Fr7xkP%2F%2BM6KahXYAEbexCFa1ThO77efOsU1Ah8CQe0MuhFuRBbJNIZc2Zzy%2BhCwNdFCifca5hdZFA4NSuLrFBeU5MNNYa5bJxJeNGh5sWQ6%2F&X-Amz-Signature=0436c787d8066e35edb9f03d9062b7b82b86eb7416611b993aaedfdf6be177ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
