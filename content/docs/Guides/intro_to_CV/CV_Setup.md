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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZKIMA3M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIE4hY8beZoA%2BzGCGobGGmxsWFHdmNwbEQEEH%2FO%2F8rdixAiBh%2F1WVZgAK7sAfEqCYleIykSCMZqS2nfWOkXciEY2rair%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRCWB35BOPZQmQb%2BXKtwD91aN7%2F7TDPGgF9%2Fla5kOT9rlvRC0ux%2FjRfiQE1m9SosXhDP9GE1ckqlLqCT%2F8g6zmvczgwgEQz0xJ1ElEj3wGbRtwKmXDLR13BThbWYr%2BGWOI3Xb9aJ2P4N2Qk8%2B3pek0Xy2PZzTzhpNYbuyGUpTcYhI%2FjBZWENtKnoJU79ZRN4MAlp87ECa4hZeA%2FNxh1Q8e6AG2Zf0LWyBACX7j7sOF1tzHYk4B4rfOuqf6YCcG6gtHaXpeujaBc9GKwLKyEAj1fCccJv7YTycJ9yz1E6lkmWBYgjlcuYBkgmh6uhYMbaXHls0gPrPbiVLLvtFRyxFDgokZqbAtYwjnzr%2FMSLQi6hpGbM6wp5udQ5XNLcLkxfknc5vIXAtsY0SpENUO4ZFI3h93v07Mw3%2FFUP7Iw8xM1MSdXPOuO40t%2FNkvu%2BZvmeDZHe1UnCBXkqKa6j0kpVpwbEfEAj%2BvZZVUzyFLGMzpxVvDkEDa1ai43CqFU7Ym3Y1nef%2FYNQTDpi68k3wj%2BDTV7SzEh6wUaVfx8dDcKPBpgepkWoSVTAJf0SmMNIsiFdpV0v2uXkn5j57%2BMZo8AJQQ35onXcBbuqdIUSisJ1ElDKJopxnXcUlYjEnUAZGErFH%2FhHL6OzBvOE6MGYwvJufwwY6pgF2OxpgkArZ8%2FyKXGX8j1DLyBJRcGn0hb39Q1thxPpgwGWkWJemL9sUuLeKEgrQVaFpApEtLJWtfBpJEap5Sfrhp1awk3Bo%2BxGlnzgV%2BjxoUxps591B7xCEwpl%2Fn%2F21WPpb9j5Q%2Bqp6KtcZsgQX3LPf00mBdAQYh16HXxJQqYFEhEQ7eUCcu4hUtjyJAbu7vYGGO4TlUqqloZj4rgT2CGyD2Tx%2FLRr4&X-Amz-Signature=7d4f0b0a0c3657ad53db8562abc9bf4e4dd38c1f4499b9480204237de2c58322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEW2HB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCICCrBQAjLCrUT01Nv3HpafU2BtLTCjH%2Feie1SU8U0QqCAiEA7kr5uOAqjzwj0rWHoXqMPFjVH6vsBOVjVxOlsrnrIyQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHfoOONTi%2FMuOMP1fyrcAz7EN2xUrxdyZK5T1KSQ7F0dWED9oNoqGRdCo4Utgezceew2TvcPvIpy4%2Boc4mp9E8pHXEjT65GbLseGX8yQTPNgNkkDMiB1aiueA1rci5N1XJmicFzRTU5H69H3lmd2v%2FF8H1QtHIxZNNflYokmyx%2BdxrOJy2oHeCnxRMp6ufF8f4ajg6k94YjXGCdwzIuI%2Frgru2a6EDTUjT5rJh%2BWDBbIi8Cs9l4EnGTKFKpaHuX7WIXnHiwB6p8VFT60YEL%2BK2uolhaYXBpEEB3y0qwnJHpKxzV3uVDpApuuYmPlAeB82S1b%2Be8Ke0UJgt%2FZHYtnTrilVRo9hczd5kNDBQEDxRkowPkJEnMEzgFFTkR%2BFcCXtp47FYIzJAHVvTpHImUD%2BKBJKYraOhM6elaBMc1Ny%2Fukz9MKsl92zLBdlRLEUX%2BgVv5f139gjr7MI%2FG7H0yNYIdnRmXoiF6j899rq8IN%2FpZtA3mUAPsnSkI0s%2F949u%2FL%2F1DIlVLdCYBKDfM30YlLwOu4S5JI6gYWEQsAHqHWeGA5kem3cEuVZiX%2FIV%2BDFVcJr5eexj9RLnHLqgml6wUuyZncJtLH2XS%2BnQqctwvAxQEeWFTRG3JvrgbQ41q7V2E%2Fy%2BpeT%2FldUNG3BM%2FGMNKbn8MGOqUB07sBerTJ8FNcJo6IZUPwTpn4zLJJDi6V0TN3AAezb924QR4By7A6W0fge1uhDP%2B%2Fm4u%2FRpIqh4JnzDOjkuoIcxmspZeARO57DoYXcexXjBdcPkAk4s82tTV0%2F78TsA%2Bb6pr3OBBkC1hrbnsqr%2FFnNrQu%2Fmdum7WtiBMfxQqi7fC%2BOUlk2orX8FgK6K%2FnCICt3bgzixKImogGkASSTDKZNdxAQjOB&X-Amz-Signature=3666313979bcb831ef0eccce8264592d3602df5911f8859c8623367830613210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
