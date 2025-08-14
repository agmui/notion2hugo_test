---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ILQO52%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDhKdATuojY3OGkuqoQoIbPChChY1YY5%2BxmR94lRckgFAiBdeNGWerdyCP7OfSwCx0OMw%2ByfE9SK%2B%2BWxSfdKe6sLeCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2BQ9od60zrgGgyJ1jKtwDQebXIdN59yV82%2BEuzuRFF97Vkjya8zV2DzCnvaLw8R%2BJUflTSYZ6IzEXP3Ykpf7DfeB4ZNrlPHRLP2HEbR9oI1R2HsC%2Boq6gSbHqtSEyOTV0496JiN202MZHaRzzgqBC2sfDUeuWG24P0KRP1SRjxi0S0GiamKVfBbYVkgFfnN0pyE1A8gilLqvZ81wW4FvCrsGoKmHXexPRha2XDkjkntlxWMKYcmeNistU3FC43TBs8PfEgEa8bD0w7TlVhOpJ3TkY2xYY1t9f1WhTscTUstYhv0aRXQ%2FOnbj52R7umZjv%2FQmtKWehiQPjBIMK5DdLiMcRGVwVw%2B3o8ul5IXxAsGXRjqnuuXO8DiQTQFNMCTsdm%2Fkc9XdOGwVVrK0l41OCvqz%2BZAE0yp%2B3f2gEf4N5ubpjvyVogUgRN0MLYzAjmNHC2RYUV4dag24K8XozdXjZrQYPWK8MC%2BtrLLe9CGyogzeqfjIKZvP6swUjX%2FLDP8pXyKqkzBpg6f7Onw0A%2BRoWraiA1RYkATgojcFbTkCumReAtGG0hS1hXGJpoOiZ3iwkm6Bv3oDKM%2FzUJJFnrJzRaFbfy%2BnDo2Ij%2B3LobY0eXOTEF1jsbwQivOPQJ2VLqZ9AvQ4GlkTqOKWKliIwhMP4xAY6pgE1bQpORujwlQmh0tE5ns07puXFuPxKTFGnX8p1Wr9Wyk0RIjYRahuIZqfCpweBWZGQ4ngf71LWn7VlHoAis7kkY29WASe%2BXyLiys%2FchS%2BMYEgCdDf%2Bqb7PS32Y6%2FXc45Waws7prmepZm8HRWRgIqPbq5Gf2pOYDHV4uFYnoG92SmoL9NHVf70Be6L%2F0tmOYeDqU8ojcmcL0c0HT7CDKFeKDBoLvDcU&X-Amz-Signature=f90c564cbe5240bf81c1a131302517f18eea90871a0ca1a9cdb3c2cfcb4b6854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWEORNQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAKrFg1Xy0s42%2F8UaSugNs4FoNdr65h%2FVaM%2BZwfnwhlxAiA6DmhCI9Ky0prmNmUBHV40igoqwghByF6j4HikyyKgIir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM11BzLqB%2F3BkTiKJgKtwD3%2FjUOtS%2BmZzsseenFSLISLqqafwO9SpdgPscLyRkMyPkViigU64kGRczKLHMRGv45ZqvpsR6oPlXpl%2BfGoI3BIDYELroKLsHs2I73LX4gHy8IvESJ%2BKEsFMcpxBBwqhW8AelWn%2FdY3B4H4qnyBWi1FTvaafR3NAQuRoBNcz2L7JjE2igChiqovw2lXU9XHaPndRlpnmm4ZEoFveKZHQVuoiqAZPY1ZLM66SBGkF00m%2Boa6qpm2V1ftJLY73xr7bQr59iEO3G%2BR9CspPPV%2F864qklyZ9FiRQDj4Ts%2FkYKZ8wlhu%2BUg0nN%2BmQkRQc3%2B8ud6Hd%2FhbQxBhEkKRnPmqDAF2xNiWIPyD2nt02TQqy6ckdVlfayw6%2FG%2Bxk8A5x8a2nF%2BhXfVl6%2BkzpxR%2BLvZnrdJqELLQ2xZiVD6djzysm5QYkmtP%2F9A%2BCGn3dwI1JrMLqXL1ax5tkMq%2FBCjwa10TXk0ky%2FPjUjxUU2M1%2BnUiAAYp8toMF8%2BXIyiaIwlHAeoK6T5d83%2BBKaVrrGhop8YVvb5Om9T9xd2jJBd%2BkplnQOBVOAFM74fH4TpYTUn8ga7nTzCB0YJR2W60vjsZ3X9Cd5yMmZJSPIGF%2BImZGXLmPldEBl3F59ldtwz26wIoMw6ML4xAY6pgEk2zYY6eKFjrBb8Nve9etpluppf5KUJNU%2FUkxbjvHeLGTWDMCho5PlI%2F9RWpZcPr2tnfWJXZxm9WjnUr%2FCZPgDZbf6HchBiGcnZ0IG9V9jyNEyPN2wbOdSngLVq4ftwr5u7loxd9DWtc899HEqf5I0Gri5xJP7R5S4i%2FKDJdOnIDnnCUbLX1rI7XDavBSHEPw9uKi73sRLJHYz847TAqN6zz9979ab&X-Amz-Signature=37fa0dfdfc33dd7d3175f155f7b40787b25f98cbef0e0026ebdcd32413a2101a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
