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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3NAD33J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdM%2F%2FwiuW1S50s6GSa9GXDKNHzRB1H8Uya81s5tWmSZgIgax175JNeOKm%2B6SIcUX%2FrG%2FKxmmX%2BFOtoQqWEHfJUAfoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFv3JMgKy18XitcEPircA48RqYpa9v9NLeLIN3e2aU4ffBDi430LnCw6PII9ExiqbAq1wvEHXQTtQPNLj95kuz6%2FbaX1ZOURAJx9mUYl1UQ11Gk9L58ziXgWUp3Jo2wGEMT8uOwL1V91%2BnfpssdL4z68X5XuDAVMCZV4I%2FE%2BV8D8tKPFEwb%2FpVJq%2FgPDq29Uj926nmdvB66okH1h9XZl%2F5qXEK6SUuS%2Bp9OM7xRnmgIHNA%2BAdIM%2BUVyclVoCw8SGRSwevf8jhxbTUX%2BE%2B6X5xGxkQECj6A%2Bd5Cm%2BNHJNwNuBzM1PsdOfzMsAZusnESBUbZlIYJ5MUCpo92i%2FxCJkEW2Gciez2IOQt9totp5HpIS%2FWbMy8Rh%2FvZP6ittx5PAMFdvvBErasukkpO3IQl4hr7RXLiRZJE0Ho3VZkaULSOjY6YJtVUvFRA3e15PBJd80iZvLdoL5OljsD148RbPXnRLkuQ8nb660i%2FCdbDUnlOGBtVqkpUpDKnLi3Aqq2JXmSPEiSJOlDX1CMfvk%2BTMFf1LlXHbM9S5EhQlaehsw5ar5eE02%2Bw27ABqoLcV39QwDNVCx6K02EAfBoLTvYEYsG2wCg1apyKzzOiEK6ObJdXsIQteUrad8qumHp7ObmjLPAyUmE%2BBqgeseQ1L5MP%2BGsb0GOqUBhcLBBdeNV9qw8dlYe7YQ4h6MruyZfxAmzl83P4Ay4fxTPfxjduOdghHtBXq0DGPG30FdRiWma07f85w8GGAVfB9vlMAzy1u8sxZMOO4wXtKEkxDByhFUwf7kkSzI1sOXHtQsB5AEgRyu%2BGBgreppPXbmWddUwxfnCuTElaoOQZU99%2Fmed4%2BivgWDb2tqN4hMniZ8N7Q5RdizDOCRNvrn3satrw9Z&X-Amz-Signature=c64d96df2997c43bfc1ecc1785be21716ee6cc0710c03c91bb81174288c8fc1f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2ML4YH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICi6rYEBwCvguIEZ3cogClG1I6xVJC5WaJQXDG7Iv%2F6hAiEAqETPA6dZB4CclifGF0dpoWXkKqehpcYUjIHFXIA8aU0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW7%2FnexNbbg3Mfh9SrcA6nRfbppWRzLFQgvNE3OXfFqfij2Oc1ucDtmO0DNRyk3aM%2BbJ6aiAHmgHGxrcsq4XSKtakdAfO8CyHkcUKih33BPmKXpORVUn1V3Z5sj%2BzfssO8k1ALNIMACE1p1wrdhuJ2PUlmp4QKtLAiv62JzfOsDm5e6MrMPkzDq4ZQaFUSsTmurOYB1lYXEynRoxOIMvyrfIyJ2GRyg5cbtZLKz%2BDBH4JqUUqVBPmlghkRAt3K6X5%2FibRBKARJJ8sHzv766n%2Bi6g8IWV6uxIQwUx%2F2pqGQYMh5jYqbw%2FXzaYW7k6EjnkPYYMEbhFR2rg4rIvd6QRL8gbBmE22JGv3fKK1LUf%2F6rvt%2FDM2u2tJlcfEZcepBRtCUtGg5g0JXAF4V2F6R903c6pCde4SzybM4Uhs9hmhwy18mfpcX0%2BSbUHdo%2FfMYeUmv1P9OUy7IjONw8%2BA16I6SuQu3%2FUaO1d8aiDVauU7hH9D3KMDQrlCMp2qhZavoeDME71l0VPhRTNnLHoHGigRXAoB3dIiVtohNS3m25G0JFqhWUNLAnUMddPG%2BAVxgy2iqCMx1V41k1HpqdpSAFHcseklZa1%2BBdJcd77LTPSbeVzOexPoT%2F92XV%2BgQ9cJi7w1OxIIUULaZlQ%2FuuMMmOsb0GOqUBxdxvObvkTzXrjfLl%2BEmis0hsXo9rrnabLuwZMEVb5%2BaUXmycegcWVc%2BkqLBM%2FsOVFEQOo1VLM6i%2BSAG2RWM1OhYseWEB1wpIUuhp7up8KgX0u%2BBdf8OU7y1DiyEpdm9a4YPKQZHC3OdLW0cdVQta8AwhWqjV3rapm2t%2BrFHtRug%2FQcENHGSdNAf561h%2FHdpgI9ag9gsWhMtUCUd6MSgRxL3a1lKV&X-Amz-Signature=8b24f6dcd213ae76fd68ca39bf77d30a0d04d7a231dae98bea62b8dce94d2cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
