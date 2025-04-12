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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQRADMF%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDyMrWMYntiXxG3%2F5WQr%2BtOU%2Fw4RSjkdUbS2vcQ85I0fAIhAJyTxKfcXCP2AfgXKm5VQWvooyycMCKu1SLebL1uJ6bmKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY%2F7Lj%2BrZfBitF4rAq3AMmkbG3j67iyNYb1GP%2Bm%2FAtxD7tgPbfGM61roDqsGWc4FM%2B503ZYFtdhXyRCjaWpk8OWoRcrRYgVR7nsjKx4K5St8D6dS34epLXxWq5adHbB3CTrxSJSwoCyVqZpsBBZEnztsEGNZZSdjKPZE%2Bdl5am9rwhtAsS%2FzJMQeAz3qgUf9xBSS4kxSC%2BHQmXwWzJW3qZ6a6wYf0EEu%2BxMiMmxV5nDsfXRIWXKfXMts%2B9g4ZaRQlEpdWV8tuIDNvgu3M0n9c6V1N5UtcOMteLUuhBnk%2FoqnKi5oKQcMsbHHbqjkVrE%2F4iE87Cuki5ayMQhlcAL%2FOA%2FBXaBwgipdssLEtmTM6Fp%2FMMHO5A8yOEs3a0JswKBssNLeZuMxjiTPtCTpdQ715Mcwfy5F18UIRaIlArsE9y94fHyWRHRGhH70o3zjIguDAkn9iN2nowTJjB%2BCfD1wTnu%2Fkb%2FFEfIg57axTRVr%2BUCnu92H%2FPbQSm7qYsp1CSiDwrsfsztA91SsWp28Ue%2FWcPH4WROFG%2BcYdLCCYa3e54OuQA1jnlsCmI%2FyOvvKmHKIeGIeGttBBTZYIBujiEza8JsuboW0OZCalVfzVlxDwD1oQ54bjjMefP4C3u%2F7KHwJHb%2B%2FCk4yWiSniodjD0%2Bum%2FBjqkAcFyF2Ry2F7r5Kfcp8OTczfT6w2SW8CeLI3eTAvpsYjWj2gSjPckh5QfbGXnx%2BV%2Bl72xcsUALBD8AAOuZ97vvnQ2SEtwSf29vT%2FwB8m2Ki6R2TsqeqKhZca8rg3BuiQXuyAjMwv7tVU4RYx%2B9tCATCALnlU4kPy44mO2zEtoDF3p4tMVA4Vq2SnoYUuOnQ6IyJeH%2Bz6yNy2%2BIQaGgUmtAxYrcH1O&X-Amz-Signature=a6645028d40955d39038f7e0040709b560d3fb4b1e7d186234ae8dd26875149d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUTJSGZS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T150700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAhkYyXPbsSIoyWknhB7%2Bj8S9kYPkAXGolklAmoLjDa5AiEA8GtBOazOpvAN6a3wrUY1wgxD9ExFjosm6c4XW4aM10oqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKt9xg%2BdFeMmqBogfyrcA1FaM%2FXU9%2B4gsR%2Bdc4%2BNlmz9hiuRaoHP8dhrc2J5R12MYJhc%2F%2Fs34oCLvXOscgTqkavqHHcynMfBz8S9Tb9o1LUNIK7WKk5yKd%2F1jpfaMCK3G8xp33l0ev3t8Wh6Cn20If5Pmet2QnAlCTyT08Zqzu2cHFAb2B%2F4SS6rYRNRwBL%2FquhKINjuygCv0VG7BsR7DbPqx4qa%2BsGQ0IEx9jFzzeVwic4omTGCC82gtNyscCt0OYzij4VSq5m5zi7Xx46RhZQtE7cZ3vyzRaGu2EfRF2C%2Fo14ww3LP0jvH%2BCm84MMBKfOyDHWL4RH8bkBYgQaZtn5HjxboPC13b2FTwxOCUqQH8DiZWbEJ50Rxxmpxe8zqBRMTwSSsaqZUKExqHXRjE4DmkoazdM7CiJJ7vSlXT1p8lQhUYjQian7OCCczrIDsrWF1AfeeR5h1QdlTkwgswX3ipgI1VBUN%2FZTxO3f56T%2BP44iAEygXuTr2rcHlNyAisc%2BzQLFuSUglb0pAm1ZGAZQ4PG2VYO45Smz9WZzloTXc3axRI0J%2Faz2XB6FwIbg8T53eAT7ftbe2MHVosh3xzS7Idks9x0pk4b%2F8g8oJF4dvhogc6gaunjaIpKoALPg5fXHmZbGgh9uvagI3MPr66b8GOqUBPGTKhwzCtwdV5Z%2BtOJ3g71y%2BJNAFqMqiNcYh2BYCThhRl7cLya5a0pOv8UA6w2yLbyd7DUfkcEjQfaYr992sPH34JvtbJnux%2Bk4wSE0vZzWF8iFdrq3TewXl8b7%2F4eyDNAFV71C7nf22qNEXz7LZjrMTetfYXFN%2FcX1j2h4T2B3vjZUA4a9Se6KALNZnq1FnFFdiZrt7dUPOFrSdUsq%2FexIJseEH&X-Amz-Signature=7621feb2cb0044a2084cba1f16cd31752f19ccafa3ca109556ce0ee43bcddfec&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
