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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQZQ2BO2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAzm2ATUjUt9GOpdii2GODO6bpGrw4E5Uc1dHFuxbyEkAiEAydWHOljhRiFCIY2KLvL4fxnM1nJOrIrwBpkzpQnhuOEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDGNnlLNhxE38gu50FSrcA2sCbGU3P2zWNcRHD94fnU6RPM%2B%2FYXpPKVrrRJqUht3pGHeFL7%2BhZ7QbczUsgNmrU%2BH%2FPsGFy0mCfariv8TRh53xOP%2Fz%2BaQNGhQ5xuT1n03q%2FMPM%2F70bxRl2fGeEMm2a3EYr8t9LmC8XgSsfzTgjZVsO4KOOZCturew6gMZowKCZfjOW29PCqII4%2BRPkrECW%2BlSm%2Fr2%2Fl83yieVXP97D8Fxrt7Rgz97JGg2IKA08d0LrBu5hQILUrJtGg013yIWMJbjcaPSyhV1stREnOZ09HUm%2FeBoAayMm9N%2B8WtUTC9dajw2eZeCdg%2FR0PrbdeY8HJhr81aiYeINmeb1hl%2FGQzn8NLF0jXHM%2B%2F2WBVvoRr2yLNNmlM6rgq2BNuxB8JZ5hT5ZLekWKCWtzdm0luDoko5m3%2FBhHod0YvEwOaIUzuGV4gO8CvlxXmeTyWd7nty5NCc0gfYUrt0Iql7wLFqUQEfomzBvxlIZjUpyNzFRYNyCstFkXcV%2FeAPHfKbS3xcz5hedeAshevkerbt0Y7e7xroLFFwruu9kS4NbcQztwClJ9V6NNS37TjXRsHpclbEQ39PYZh19m3c5KH4WILvjha1NvemtKHLL76hEEGGGu50%2BQelWy6GAlRXaNJchdMMKT3sMGOqUBTh%2B3WJQKK4jpKoKyZAsefttN5viYiiwkeNKjlO7lOh2ecLe6W6paq7ggjat7pQ%2FI6HO1w8P1I3zzOC1C2jGNPIBPgaIWzyjeKnyC%2FwqmcMDrP14XyvBvxJA2zLlNzCeUCOGAN%2BGCeBlfN%2B5iAfxQEAUvmIzoWHL0zeKzCNHlGOMgzEwbM%2BR3iEeVWreePB02gmgr5nhU7qOAE5%2FVNQy4fadgZxeo&X-Amz-Signature=ce53d03a3c7cc1ff60e12b80f01b098adf360fc017d5b960039e8feff88428db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25QWD7I%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAdMa%2FVyzIfzsL5xuaPxBjNvahvn6rZISAdCUTotzUYNAiEApWRAvqWL%2FoRKicXZDKQbgOyP9H0dVbd0DHN%2BIgDdYwIq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDO9%2BLLg2NEu5K7JbmircAxNVfB4ozOnv8UUn5Npv7qHAPIOFkLQZrY0CyoP7sWCmQeP1BWK1GRdIGJJS11GQMvef%2Fnn03%2BZyw%2B6GWrmUfWdAYNIJLpqeoqjARQGFibxZIqk5w4EdUrG4iltBOmsSAe2%2FumK0p%2Fn1mOSADEQwVlQdPSt1V4l97mLZIXUevdnQdAgkAgJjy4Fvlb%2F%2B0KldJvhrJYM9tlpW%2B5bvhh9b7gt5eo7zdK2REqg2N1VBE0TrvRpIJ%2Brc6CpTkIw6U7N7b7do5RrK6fDKHtJ0uvRVTmayb3Orc%2BM5bOU7n0QF7uaD1p1m7AYUkHZCWh5DLJaRFYGIVEaAePFKpB%2F%2BavnLD8nfHBLQZ9Mlz87v1LwFZH%2B75gTb0tV8sOHhxEjIigHF41pn3WOLRcrfL0YY%2FMzRiuqKdMdARcXgurWOelV12rOyDjcVQ7LAb8R%2BXLbQaEsrzl0L9a42ox1oN3tFpzheRGgqzXz5Tpoua9gGlY5vCMZs9HozoUUo2ERIQl%2BYK4Nh8aRk9ODJ%2Bg8BiYw4%2B3TBoJhm0nhXTLYarl8HV2eLOi%2BY2aaz%2BURerp92rYORqMSdgNhfVZT4sCBXVUnQm7j%2FR7xF6zlBESiKD661Y487k8tsT0knilBjdEVpXoULMLuT3sMGOqUByzIOlKv%2F1%2B4TliLKBgrnMtAZ%2FusNvzwcLLqKfKbDhoS5g6h81FaFz42pP6JWbPvTY96m6lhZZPIO2OJ7ijhbfODNVf11n9289pD7Cd%2FZrC6K6m9TghepGBUhUN4YV5LZ8AJ246dwyW%2FF5c9hXh2bArvcAn%2F%2BYjPYA9SGsQaoeKPqvoxIhBsYunMawfZ3GBYpB78d6UJ5T8H%2FteA2uI7zzoHVCpkI&X-Amz-Signature=73608631fc2b9c70ca0a0040a2ea7ab6352f6eba3e1c4c792933480ee35b18b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
