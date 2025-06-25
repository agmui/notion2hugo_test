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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTRPHJE4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIBOXcshoGxG5nPRwx3CO1bPrzFPg5Os2cnbQ1FQRFRo%2BAiAgc3sFUsWy8%2Fnqv7WupYdqdg%2F4inAraVyhwu2vdz1oBCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMwzE0gWap4UlW5MYhKtwDa%2Fx%2Bcod7JA8Wbal14ElD5RW%2Fl6vmBiqWGSg9h5qPCuzsJ1JHxCL4%2BkWHgRB0ooGGxYsqqtqFJW9tgmzoOOHAPkGiGKAkypdbs3hdlvBKgTZSDsSKAbszg8pHDv79OO0wi50GLrPmnFLBWpn0MHYHCEXu34wd%2F%2BTsTv1LvG8WbNCT4EDUnGGVU4IHFNEjrmhW%2BS1n4RWFDWRpaozwsve82Z9DPETrGhHflDwiKoKhCwIYC%2BaAUyV1yfDv6XaOwD0WnUhFU9YBSOLmoXY13s8k0oeH9AYUfthz2Ur36IPuu219NmAGv7S1QuDNKCIOcRYwKor3Jl1XwO3tLQcr6gUkOpt84zBiiKWkY%2F794ueMQSRlVjv4p6S%2FpVJjwyZCw%2FyrLfWIHM6xeTi1EvzHKUrpp3vVsOL5uFZ30OV2%2FLW68Q%2FA417eDevUWqv1SVYo4rxTX7JcLJojBy5qczu8NPePSV9dMHEae1zlHaxQzEXSs4LL8proe55ZLY77pcmQavUgrCNmCS7o%2FjTgaULMxM4d%2BXjaQbrr1fgkHqualKQ7nm99SJnFdojJxAkJi1pktitr4pPstrLeiADE2wOkZhwJcfwfCHy5lQJ0MIOpKWQ7F%2FnGnlolXUG8pHRfCyQw%2FqbuwgY6pgGiQvswFO7eAb0Wtk7h1bE1tHtpMzoZKR5nFn6ZYIwAmWrJOIRV0yhRJGGmN88W5Y5bJgcpx1xc9JBcblgEEY00nw27Tlq08%2FeFmkp67LyN6vcWclmmXBTCeANwporX08s4WKT5cggXDJZfGdoxej0CEA7YCTUwmssNtcSsuKxpblOcQ6Fu6u1iJT%2BJy%2F1NzUi177YCMaPcPNITWBZPvvgFtsL9m8zG&X-Amz-Signature=fef7ae8512e3399d90e47fdb1706994357851d63490ec5febb8e0e47b4d3518c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34PROIX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDekSo%2BO7qL2TCjSH2DxcL9YOHGr7gFCLOwHi2dJVp9%2FwIgfITkAScdM6DpgmVFv2z%2BeFXvYUMJkDhTaDubRWQqPUAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDF8pzJUHjPQYc7pw3ircA%2FR1BqicJSgqOEyQBwxQXNtCAsQqPSaqRJD%2F5%2Fb3i%2BhGr1uWh3JK%2BfAf3kJqTaoUiSYyZtG0V%2BxOn7Wm3uUPIEadejZISbZI7FvKNn8f8HBSXS8VZdM9oTKtEZ2PE35p88HLXJHrdQ8WLcnbFqi%2BaZm%2FtMxvpr4O8coseo37Pmvn%2B0CfYNb8BlA2Iz97MS%2Bm2SCjddwVtz5xUmdExcHClIOobz%2BDYLiBaUrkNrEDPApXOy%2FUME%2BiGeMGusPMbRpvpxj8t5PQms642Pl%2FOjTm4opQgKM006kwYfuzLdU3%2FlHu4vRuF%2Fm9%2BUIIH5m8ymN2i73ogPwysYl5nqBmzM%2FpfjeDgS2M6XxySSLYSP8xOSzYim3gNsJZUefTlFQSKMTbTBu9f7NA1d4BWbUtHGDCHGWO5OFpPEtKaHBYz3GoXlgDOf0O1IJ%2B4aR4pNdVxPZIsmOn63jTPZkwxwiXlUno87laLqKhEnozi3AT6JX0581oqvJqvAryEHxhJIawxaBt%2BdugF%2FfZ%2BcIQ4cdVqHmAXYK7d%2BZt23Py3vJJlr4xuJix%2Bme4Aa3yItlY82SS0wNe5EQ6nfMXD3wb4cbNZvo7snsXbQaMAjr3L1AfoP0FJ2nu%2BC9hGnrngTxzl7zEMNql7sIGOqUBiDcCJG75FyMBO6sVbbchvS8uRyxiCXO%2B7h3dlCOX0AYpj0p%2F%2FPCg%2Fh3nL6yaOPjEBykUI%2BPmn0LJcYqVG%2BG7MPG12xWfj2T%2F8uSz1ZBAN0udrd3OwmNY%2BzM46JKzmcIcGkE7YNhVptNq%2B1dglWUZo4hn6Pk%2FT04pobFyVl4H6QSs1h9scerGqLmM%2FA7ZLgc6j3jurtv%2BEsyA66vUhSkylZ3DWP8B&X-Amz-Signature=09a59280cf2d2830ff1dcbff554b09d2ec787e0cea1dcae457f7401a041dca9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
