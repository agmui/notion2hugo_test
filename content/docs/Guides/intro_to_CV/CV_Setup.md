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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLO6YBA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCICpeJl8x1vsXDZyHagyQDs5xS1rpIjHCHX%2BD4pYpHuQjAiAfLcOLh%2BR13JWjaJEADIbJIT%2B%2BWVsJoTfAyP%2F%2FsC5deyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM4HcwRaan37GBdpRRKtwDq9hTNr4s%2BS9bz6kJT5SleVNjMK8UgjA6tzF9FnIlx0kcWjgtXdCKYGdmlQKXI%2Fr1KqzeQJSW7UwX82qt3lPNuFSmqTiMKst9QVHtF%2FT%2FFiuNzLgKPlI3BLVRKDmMHPhs405GrJH%2F2qq3OsWmVMZNGYLhrAvnet4%2BAHmmLTNdUqnyaX5lfiNVZ3FiTk8wicZwyuW2V420AloYWmCHRz6vw8ef7r2lI9QZjJivwT27m5m9Y7QJJs%2BEYnudonGEECaN7jQaRR3%2FS2pqz2imMvGI7eKrxhv6GE3wFckkbzQyt0PVE2Cpxd%2FMUZOYjfoZ728Mjq3CoNS6wDa%2Fgo%2BOiChd4TLIqGrT%2BjKwKRa32W543hyI2B8twMPJyT8WxlAMPqMvtTQ3XH3vj5ilLXOOISaG40aeZPhwkSrhqglXPMofbAHeQFugfQCRD7ahRrtVqe3c0hl3NsLo85GeJS%2Fq0uLwIMbK3B11JLyMok%2FFoIwPEVJOXm5N3OrBa%2F6CpcCCiIDeDkmEEURfp0bTo%2BcDLlbK83EYo8QBnXVnXrhYsQmxvYEEfLr8OuXiNEn%2BQY%2FHkYA8kQxopbN8FEu%2BPHQG%2BRlVKbxXt3YWnVFBOjtsFbjr63UkRKk3Jg2YtfFoBlQwrb3dwwY6pgFZdG2%2FBHd6k1cverI8KY1HCSwVx0%2FjVq5xEBeVUVjTHjhf5M7etcN84RT0oVE0nFvliLYJFG%2F8gXLy8pLahq78A07JSUO55KrHeaWd0sifk5%2B9UcMlhcXW0dil5jFhNouVUsg65oVaxfsbq78OyPbAHODxB4RP5Sp19rSXo2cP0%2FFFY1Sli%2Byhlk%2F%2Brl8n%2B0u%2Bz27SpFU%2BStwuJgAVPkvScbAk8nD9&X-Amz-Signature=4a91bbb0047adb034d223948c5d7744d0c27ee7fbba8868fedda5edd10048ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWBMLCA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDDzi%2B%2Fa0%2B%2Fwf5PX9xS%2FhiAgggtWceq3cmj8%2BQsMan9zAIhAOxVh%2FiiV8DLAbfFp3U3j1b7ZOkfAl1i90ADlmLZwKrUKv8DCFkQABoMNjM3NDIzMTgzODA1IgyT30JFLc3kEzbSyPwq3ANrXsooHF1laCwMODDny8AocwiIXLmm5pLwSVFke6iEf6kCvaTs42BxlqOQnUaAoUs1st97E%2BCvDYohyxTCvLro7iT76EgfWf3cyclkBgT83N%2BIMmUWlcc8p0xQYK%2BF8vopvAudqGuaE7UIBd8ixk0zQux83EMOqCbpwcHf30Ixwt7rXcCgfbhO6cyQdUq8vZCkF46ylErTwnscz%2F2H5wPEzcF%2BgbytTeDzdI7vPW2ipTPIhhN2YW24f1%2FHnla3HtLizF9%2FRLar6og%2Fhi4zcNYF0rURtqd7apgEDOqsx4KJu4dDzEQP3kIT6%2FOVQF5Fk6Kld4XDH4ElFCUfHoaXKUSlGOq1Q0JGeoIViJNlmWix6tBk6%2BGczCHH7jkqJKHo6rocXou%2BA7%2Fe5Ssry%2F%2F0h3Afw2RtmWmrfE5r6HCp%2FXq6s8M6T1Eqtg6LzdgHkRH6QTLX9gKoaNKKDqFEb4z07vM6CXjkAbQqV4tY6S%2FtMlTMOcIWYhl%2BRe3gnFrLgu6%2Fzeb3K3ItTDBEnbUhtn%2FCYgR%2FDuLI56TzewJWlcqzVRHcGE1NlaWkq9a4nP%2B2iTz4jnbLHfnLsIuqorhWimpt3JK3mnPrzjlbnvChglHbsjzFXCr5LOk%2Fwrnx2PXhZDCmvd3DBjqkAZRjAUYKWLksy6Gp2fShJOE8TNz%2BpwO4Ls0qcPpgA3YSFJr5IagfXy6UEkdU2HFPOCLbFpe4hlVdWd1hLSYg%2BUBv4ZfpWQdncMmKxLWpSuaVStXB0CQ4pY%2FmAhnwhNb18PZyoSmc4aCoV0pcFE7MyR%2Fdi9B53spWyFw77l61XTAfNcF1Gi1dXLPc55Fq6quV1A4hwqTpa%2BhQ4K7DNDG8%2FMkeqkxl&X-Amz-Signature=43e26660c245220b56b67bc7667bc65b9fa974c284df89b500ed129c5e9cf57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
