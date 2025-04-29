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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQBR3ZO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFvcXzvZFMblsI7k5cDb9yi6dD%2FXcs7RaLOt1Ycrc18AiBptpZVqqlID%2FZSjRlqHddbnptowLu1m5gvJ0Oo23ZXVSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8M7ISMiXweS6CZC5KtwDQKmW%2BDE%2F3IeqfkCQA2fcoD5MVWl7L385C1lazg%2F7%2BIFHqELeBBr%2BhNp0jQ1rD8VFuEPxJammJbjBEIx9NV40KLsxnp1mRVgkuKE2plolwKgm8Emng8Ic%2B4J1rvMiYONkTIv58N%2B1VBkJSxErkxo56RnWkdx9aFWp3ZyXs1apTzILphv7Q8McvNOC0A%2FypOTc2qbE%2Fjcwggdo1ojtLHuJwdBep17x4S%2F69GO194W76wJZqZLmUki2qqu8FtzAnXNnqokBdPnqMYQFycnAPrqEu02ylgpFajxgRt2%2FLryIziAUlYIfehi4XUqBUn0yRlcHOHLAGDxIIuZWeGtzYYF9Bjjdql9PyulDQUvxeHemzDRn41KjOV1zY0XOjCFGO8ifS%2BTfNhifXJquy6fqvRT9hEd7nsz0N5xYl8l%2FM66Z3nsd460BQOyoc8RodovAHIZuMbY5n35v0iy4ypcgkR5QJYC%2BrTTDFE21Z4TuesUT5nVFi3Kq%2FBNHczAZ05OtaxmKxzJhWt%2FRknNewnEN9WLegDFv6SqsfEXk%2F40A%2F2Hlik%2BJtNZI26GDJQ%2FBcYxJJ4nox4lNnxlKPNfIce81CTU7EHQWsc%2BaAm5LNTT4K296OzkrPPEsEDc7OHiAh%2BQw8fzCwAY6pgH2%2BFryXynkTVaxVWIErxlniOq2J5fRv2gPSsjBGWIcfWo5Hmm9z0GJCMht9Sq36V3cTDqMZpOcybRPvrIfV7DJExQOXfMF3XycqunvFx%2FHPKw4fOfEidIDRbSNO3qY8LmgmDPGw3zIAvILw5cpakqQvOQoZqL5wSDZPPI19c8lVFDcb8IpmfLRB6MDzO5RCW6YD1%2FDKcY48iT9Bd%2Fl7OP71H0uUpt5&X-Amz-Signature=83b5064c77fa7a08fefade30e75d6e67ef8b0d8578dd81c149bb63c263a08a78&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4FNSSC5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfcqZVh205jNmxq1Y0NPLJl5KSeO3nR2d29hR3sZikCAiEA5l6P%2B8iMLpFvuzCZ02F6JCcLfYAwP2cy9A34w4jrPPkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcaLzSz0h5i17od7SrcAx6CbpdWebh1kq5mu%2FcjMfwOeWEjDwrFZusCtllQrsyVm5zoOemF37RxN%2BAd4lgvDYlGD5Ec%2B8Aohn8oI5dvhs8SHYAXEQxl9RCsPy9hkPGprytmrR0mQxo7J4Z%2ByTOo26EimmbakJKYovMKCBYulvMQ3Khfjoskz%2B2U1U9YrW6gXtT4ay48LzEBGXF4lcBcIV%2Fln3%2BnTMhxmM4NJEf%2BH3%2FO2W%2FsHUKafXJAUUsGCDOQTOGkZF5nEbEnpYzg6xvU0gGb7QRazk2ks1MCXs5QAAX8kUjfSQ61XJPJiF%2B7Lhxplmxe%2FvSdFKz1E350PJx8aK5PUnIfyOJlo%2BSdBKRykMbO6hr3i2p%2BRohDKlKg2WGz%2Bh35uiUWZXentov6uCRYVhrHVJP031tSJIDQ%2BienHGEmpMM8wFqupA8%2F4fn9pMw%2BR5KowiBJDuKnJuyria5nizJEqMMBRuxJBXpP2O9fBRnWW%2Fe3CWXrT1op0ccBYeUZkwiR5lS4Ta0fKQmFbtj7iRoefaui9wbswatGqAwhTgM2w1KxmGjzbhJGEQqt868jXuEI39r2KWbZj2%2FFIeosAVowNppBF0mf5oRmAXAveEfyZ2iCcV%2BdfUuDSnhF5Cwguh%2Bg1hHHiBLAedoMMJH8wsAGOqUBCun3jWndIS34WWTyPrkt3BaV7hLBJP2ZJyOu8oyVw3GHnR5e2Zl%2BgUsUoAfx7k9gw%2BWNet%2BFzq%2Fpkw5NdAHOt0bPPHucVHB7sZwSBM2oL9WP2GeZ71N5Djk06csBI%2BJQXLIdffc0iYhE2PSv0xMvaNc8AUT%2BvoyhNUfIAKKZwb78vjSXOWHoqIEqYNIjCSzE%2F%2B2QikD7nnWX%2Bwn8vr%2B9kErezEqv&X-Amz-Signature=0e3ca6b3fb1891292611f0dd540babed0b3eeda3f70beb2e89a9be749c15fea2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
