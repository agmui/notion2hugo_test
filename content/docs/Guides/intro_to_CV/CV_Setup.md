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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQFCFOJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BVh0%2BZiOgz%2BGsUcmBpyL1IG8nwXgJov%2B9EB2dczmkuAiAT%2FU%2FOfl2Q4Lo7OPfYp5bx4bR0F0VWY5kVhUR1BZswGSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMUSKlF9nkHngbaU5sKtwDZiwnSQfxnYfHSlWRR5KrqFpyC35NHdydslzHatlfLIyQPGNgji%2B3eolqHtJ8Vp2xdapX2oNbMI433lh6pTdDSKkkpUiygmU4as02HLj74DiUhel5Ts6M4aDT6jnSamHq3t4V17ARFZHwVXP8Xtk2Fb%2BSsZsjJcERV49lG2fA2nm7k81jS3PEtf4QTDDh6RJcYLOrFkz5t9rzcU0sddUH81KbmP6lq9Nx2FoBrZprZfCDLRqHz32B7rLxmr%2Fm0eEebVKd54nD5l2j%2Bsq5ib7W0xvhIyK4NSrOk7xdyg8ShbKXJGzcHhLKKqkiSGmDKGSKN%2BJPd3c8qNiAQmLGSbX1mPt9RB%2Fdc1Nk%2FJHhOyu%2BSISzm8nYlHQ7M4j9yHcX6yf5ANNQ%2BOSW0EVwg85mNU%2FFo6TjVa%2Fd1bwyxkchpVExSIFBJscLqLOnYHZKhW6LT4%2BH6OXb3TMuck91hlBIwY7ZGo2bwweY2mdIyDpHYiqXt3hP3AU2JEFJlI5nZdKwJqqriJq97k0HpHsG4PjtVSW4U73ivqq20%2B7HXwbRS2nB%2BTYrLUsjxBCUCebYVVPFLYM9n0OI476ffFQMkiOiQB3ATltF000xKlJ%2FipL%2F8bUMwUel8N%2BqqLHTB082kZQww%2FnwxAY6pgFttGMjRasUXekxZvmG6QqDZKgIeS29qumhsyYpCUbWr17e2soriIqHQ8vKaofjEJOJzwrqJVLU46ITRcAWKuqqDsFoDwFIJZcx5%2FeWzcw5ibWSE%2BDpouKDaM0MVya09Slrz9N5prvZfQnDFudZ%2FLOy9mVKgwa2wBAxA4lTGNx8CMLVDxnBt8xx7azbQfr2aSxevdtBnVQtnOhD0aacW73YLYg7qmZf&X-Amz-Signature=41e1be9d98a15e1b41460d08972c3714be017e3e17324ee1cf7ee2bce4390b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNCUTRT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhyw66BXgXGs2ymdr3Xii94OYj2SF0hR7xl%2Fk9sw1QhAiA5B%2F5rChdFhY1T0gWfLEgncN5Kez7A4wl6wIYQnj2CRCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMf7cLT2x8DjlcvOWkKtwDikv5erZyjs28cFrT6dMTTWtABnvw%2F6xAa6dlVlmT2Ttts99GFQnR1H8HikRwKlaJv7FPuCE%2BAmUZ2PoCFJudjm9wh4diKRgfbdtfOkaC82hp%2F54a8WixqTwyXVny2DTZfXPXhlHWV8Rcq3NTpqZVyWKnBRiNRavsYNC6KIfOAS4quPR5dGcA3yprp5R6z8AZTvc1%2FDg7vRx2fOzNph2n2LyhdyoEPa9McW6LMp0omID1bbEPrOlQitPrJGvRvMr2%2BWQnvM3QYVZPmDeDD%2FmwstTJ8CvCeG5EVDUXKCmc2GZ8gJuj7V6dGSClO5OMzAQbTLzG7h0%2BXGxSc0ns%2BT3Le19ywDll3BmBZvlIyMWuyxrFyGU44faSym41P%2B8r9SuakmGJCuFxtS8lNaiamI77kxO2RIVlb5RcQ5Lnzwla7eE1PRCCYx8WEP1z7BdLiO2iaEPjIZeiH3t3AOlZbxC8VWt4R57o7y4gaTjPoPW%2FY35vnIae8AR6iacpzABw6GZqbRP0ogqTCmQr02Lz7gPLruBC6M3fnd2IyKmKfRGWfusskB%2BNEPgv44b5kl1MC13DpOaFlNvhI%2BgPBDyFgNnDthfBb4qIYRrZ5y3qgu5SxXsBrKq7MbJvs4La34EwpPnwxAY6pgFlK705DjDl7ubJKzhx5rxKvnizPrYEmWDg4wphcS%2FfCrW%2B1EsGGct%2FkgSdg%2BN2IaBTjvPZBLmQhRFUTdXVTWJpqDCFqQZ34mgIB3%2BG%2BHCLyWxo6J1wdrQFH1gE8uYXzJeAQhB1qjnczBin9MKIp8vI9WHK6Z2%2Bblftw1A8ZG0BPqjbop%2BdeT%2BMyV3DCn4yt7N8%2BAnK78256Tay%2F8ybWwnoA%2F7Zi9V4&X-Amz-Signature=0d1935910a45e6032b86e8d5509ffc81965af1ae3c4498716390905b6e6a5a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
