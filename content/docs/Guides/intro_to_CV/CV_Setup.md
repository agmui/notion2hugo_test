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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZHCNV7%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrVds2%2BKAFE4GkF4rXLwmmENM16osL0gRjRqRVg7vi4gIhAPkPZtQO3KQ9opAX%2BiZ47t15Ej42EnwEPoaNrbXuERPQKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyi6YJVIPaMDVFJQ4q3AOpjFYdtMUtpTY11xg7ezUl%2BpEq2e7LdxM7R9NSd8Tk3iiYSQGGFtWhddIx6e9fMt1LIIdRrp3N%2Bxqy9cWuitZdJ8D3gyb%2FCvvRaTwp%2BdJMq7KuUKd4GJODU6QWnrJ9MFioYKroi7XTNj%2FGYdBI9s%2FCRUVm2sWzT6TdrfVT%2FLqlR3u%2BTZdHOW0tZFs0mqlEk%2Fuhm1EmWbjz3vviQejF6ZIs1LHuEIO3rb0%2BQv%2BzpYTy4e11zGCcfobfioKfBZGjqoKiOavFJ84ZarhgsYoW17n2lwzeejsHCycEzNW1ItcQi9pmE5j2mNBdsI0xDF3EGDsDA2gDivSj1i%2F6%2FLo2eaYTZxflGZCzhATnjyNMDk5a0DdojbNjAQSQAtH2yKVkQqwuOKSPRUza2MjsaBC45zOtOSK4oq1ocSWL4oI7PIR%2FfI5faWY4AjzYDCbjtVlYslgbhq%2BZb20DRS25%2BbZJnKS%2BMhdmtPMBvAXcPRE8AnOGrSmsGU9d3BPtfcirdcaGPvdTC5y6mLnpCC7tHlHqp3iEHEZ1cmgNiiUxuLq8hZ7SWh0AsE564LToTWtNUmZiGxwC0gm0fy3G57pboBrBODkMQbXfS%2F456AVgFhOnR2%2FsCgL7YOdvkzXvq%2FY44TDT3KTEBjqkAQTl0JAQ8lijsywgmnsEHvLN9hTwJuBm2cN8A6MKYdmsPOqs5M0ppiCEo%2FJGBAAFfKOa6c1SCQCTPqMwfQIsEgB8HD8%2Fkz%2BSCy%2BaVPe2nssoLlSzP5766RuBHMnYTRt7ztpdHJOddpFHQgD%2BeNY6yYiArhFIDu8%2FlNRwtqoPAUHd2Pi18GXOvUYjFytD9%2BcmV6yjgUjpgPZVr0Bl1Y3IqGxmyanj&X-Amz-Signature=794dba6a4138dc5db14613b8e19d746e464cea494e1392fe062ffff52b73ffdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZJDGZW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjUb6outhr1xhlnaNZPg76ZcVnxjIV6hqd1nWDpcrhqwIhAMNLpFQLaTh63rD7AWipg1abnACgCOgxpUZ2IkOynYwGKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWhke1F42RaTAUnt0q3AMBj6UqxX%2BSokfVpmvZOxPaf8y6G8UFr1X3Jm9xN2E7CMeCGF0znrtm9WLXECtdJQ0pQMQJznzkDxilyZ4z28tG5ItAEyePBgSW98cr9Jfcfyq%2FPDQXcWFg3UqAbO%2F5hpo1QvyUXp%2B5TvUXh1fcnK59hjZ6dj%2Fqk6ykpZcLRlfPExCuC1UwRn3176O3CjIQeLCKxd4lHJyp%2F1c78dMbrflIwa%2FyAj5i6XpEhkaXr8m%2Fyw7brUwKSD1Axyjcb3OCWrOM7waJRKyOK9%2BC1QPey6gagvvkPa%2BJV%2FQ212QH4%2FUaccAp3S7KI1dyE5wKgPdO1%2FdOGEk8pjTcloPXmgaqRTjCZ0UImHqs6m2xizD%2FIfVu6zsDP5Mg2GyiySYJSuSTUFDAkHFj7gQIdF5yW%2BLVW7czCENHjXP876G%2FeFAk49XfS5I%2Fqf2J%2FdfCM4IsmfiA%2FE%2B4M3WsQyL1yMvFMtqx5ugKCe5moYAGSBrubUBBpDWBTY1%2BJBE66kcKlpbP0sgRk186Pcva2XLJSpu8S9APAtrgD7ME4ly2YhS%2FHJTProLJpD4%2BNpOUEQSlRaid1adXkM0EuuMTbbw7rl61hQNCzBVKJetrxhsuCNZN3Aq%2By%2Fnmgqpg0MIEdtQAN8k86zCL3aTEBjqkAcTm7oiy3IY2ZABsOQ7MqpqD2N8A%2FQuz%2BFodATzegdv%2Bj7bJc66h0JraqTtq%2BxxhnF1mYGI%2F4RKLcxIYUH2OyE7avBJMhC6iwVZ6kJqa7bYMliKHxokWzZAYb5mXkvTTi3hhPIVO7mosGPHde86mw68uRy1U1ro5uEu7iwIyqbUsOBRcalLicdy1ZnoYegZTuG7HSHEcWTD4U473Iovc%2Fbt4PkFn&X-Amz-Signature=81f992ff765eebb842baf6ed610808243e5dd5fe9d71836ff78fc22e7f925ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
