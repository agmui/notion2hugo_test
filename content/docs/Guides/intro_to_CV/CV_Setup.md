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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4RDAY2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAPhHeOT5AyBcT06gofGVeLMm%2F0U8UwQXt2vMt9R0GOEAiAqoQTmnYwWU9miYqLKZKYCA%2F%2FtwZj3Kkoy2QIeTzd1wir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMMm0tI6VuzwPSgKBLKtwDAse%2FhG2udtTqEQUKmVz3MF4watKPDgdmjjqM3kzhqoj7vwRE03Ix%2BDXsrb5D8g52QVSctFFRFFV87qFiSMC3csxrGjATYKSzNtaJFh3pvmeAnhrKGm%2BHCtOQyJp5InlFFhj20VnZyuDnxOFQTer6bAFQJLqyan1bvB6oPdjo5fppDLngMASxKn%2BERqltFwSPjWRUiJObrYp%2BKYPW6kRCD9ygG932D6Xtly%2BdOyxEIToEoM4rwGCnwRHxI5tK3Pv0%2BvK6vtFDBwQXVF9d0UcngNk6X82azFk6JNIC4tJycy0UtPvThbD6ey8uxBBcBRoQwS4MPQwEC8J7Sjo%2BPe5idHWZOygovUe8QNoaMxL5eWgbpf18%2BUdJC9yqoGlpHSgRpDpGJJguWvl3nfWk2hYfSYPB0ZoJ7hiJql3WGLiiXYmF192TE%2FW42%2FiLdLsoMwgh2P5KC8950e6wnhyllX6Fh1%2Fj442NnB7K5oeDsRfXV2k3xcLEmrodecsMpJY9vO4woFo%2BO2AABdMI0%2BeulWKcCGuOyh%2FKKp%2FNQLlybAozj1EfHWzpW3rRLDx10BxrXKVxkhg4gM1pJ8PeKWy7bTwzFOdf%2F4gq2MAGsIcM7L1nFUxNn%2BthGlEzl3D9Rxgw1JKywgY6pgHJBsJqOGuaON1I3Rp%2FJAhz%2Bm65okwIDz%2BpGqjG%2BEBwhR%2Fw4kyfCOri482fR8GWPkouWz3YrOfDnKrZWUc%2BrrZ%2FGh15G7S9KqKprsplBNkib8CEmsDmcJOIhDjapH3PVRQ4Zehg5GKJNH%2FblzMIggOLfQTBvTJgHLsSBPyYwA3v%2FuvNHANOy71kgBcE27ewrDe5wWQbG3dFOM6H2w6arRaPrfdd3th3&X-Amz-Signature=e527f22be003a348a7fe7293163e7e8bf2e822be3e39ef44756df4511d94d2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I5CMYNB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAYw1vDwK5DhdQpJldYZPF7iXC%2Fk2She8MZe19gd5S1NAiEAyrP8BLssprUvMeuetZmwupr3kNAkfmX3H%2Ba9YRo%2BMmwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDNIFyRCHAJ%2FM5KKhoyrcA%2FXF5Sgvn0OY0nPvgAoTWQUwzumT3txSBn7uu0pSd%2FTT6DZR0YsB%2Ba6Ty4K%2B%2Be2uWk5e%2B6lIWURf8ZDkrwUb%2Fm0ldCr29Y2CzmxfFKMoeaGT0PAu3jJXfsN1aR8Trv%2F6iDIj0NK17eu01BVe%2F3cxA4cYvU45JdYv7OSFui7sFOEECr9I7gnBXUi%2F6VcvssamIpF%2B3JdRRpC5wAo6m8JENOR5ymP65hltiLKXCMGz4KbS4YKgCFFOiRLHl0di7MG1vIUDhJMnUnN8LDcPGn7L8WeQ%2BWDTYrFR8OYTqAUaUUA6sZNo6QH3D9CArBjzz3y%2F1Ooh5DrXLc51oEuWFmZSa3uAHqzTHf4kGoelEBkH29DKpHcq2IHx2rQycuBQMfeMGmNb%2FqwY4NLJZqyFiS5glp0WznK%2BF%2BCbz%2F02z0kAOr%2BNdEArthcYxXkmpG%2FPiTpRKSTk%2B44UqbxsjHbVCoTcbtbLO33uRW7KPKhmd0NE6rfOpkW%2F3PEcJhAt8LD29%2B314r3KGh%2FgkIGREhD8cHo5VMBRFcb95nCvcj69warG96EbvsgmQEvEf1ZdmjLOdPAVD%2BifnAjr3tLCJsekxkyBhLd0kgqOySqq%2FBUlIc3U4RCmxOFmuL%2BaRAAgCLA3MOiSssIGOqUBUVqQVvJNq9tdvL1LOm4wfrS%2BC2aghH%2BcyNPQI6V%2B2IdCq2F2tmhtcCvAIb4xVRzxJnwxlFrGGccrPXxhnatrTOopK%2BLGNilxhL9CKsBGF1igkDVG56Lz1%2F%2BYpvm9kngqpKzvwSeQ6HZQ0scZ1okj3XMOrEik0S8lKdscnK3bhEAJDEGud61RyB9IIl7aDVEPAQgCAt%2Fp1flz1zWbsvtLhO%2B%2Br8VQ&X-Amz-Signature=420b63871d9a1ff59bb972b00aac0652240058c8675b01f87d84f0ec648a75c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
