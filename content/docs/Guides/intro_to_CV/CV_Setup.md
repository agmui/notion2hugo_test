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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZY7GGK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHLZiJEARHId9SnstqcI8x9XCYAulMKkqoU%2FMhOR1TqCAiEA8q%2FwjdNOXUL5zAZUkowKGcN8n7vE4GaTMlUwSsX1U6Mq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDOoalK28LCRJVYBHnSrcA3bvWMC7ZSrxPQ1z8PbXLxrLvN2ATmZBy5%2FoYSqR5VHfWyDwFUvsyXhHtgPvtd6f4OBVRZn4Tb064r3sMtlIX0%2FT7KKBSXJZLzYtndFRJDYU%2FmNGZeph1CTF8PMGE2vCGuUPsPU%2Bl%2BpUd5oHk0u3TW5t3Xrk8AJYRSnfmdYzUS1dyO4Y5s8npRSVTegrU6DULYNvKMj%2BDYVNPfS%2FCiFDXN%2FHUfUupuEUKsLkY6x0zlng2jU6ucY532PrCAbKTpVxDn5LQOgZ6IH5vq0%2BUxr3FVuHrV5ScZkEA6MwEU%2BW6mdsh0GjNU1mCKYTJ4wXWW%2BrafUPxJomdue5DE99LhcDVQ%2Fv89nax%2Fz%2Fi7BotUgHrrXF8dxEyuJS%2FhQ%2Fjb3jsEtmo%2FaSZQNjLxEgMZ7ELizVucIDfmmLaTlLncmq%2FbXBXdAr%2BH8LsF860fBF96hWxNtf93aF8bpblIRbAfcJD5ZZksUJD3Ds%2BUnkh9Ub3BoNseGRxaMyehCaupJLcbrPz%2BLZe%2F5FA1yM8XY292DKJ5swy88tlKVE02zN1vYarK2x9F%2FF9%2F5ccFB3tlPdEHn1eCM48K2u%2FQHNVv4wqUysEvQVxAYerBbuuCnYB3Ma1XazizD2oY2xzv8vWXAIzOUSMLeAmr0GOqUBfQKtvN4JdWwJqUhB49nyGca5lRVAMOnCNWquodKOJuOELOzylys2%2BWGIt8pyeewDZV7MWiwNPJoYqNUJnFjWWEz2EBBnDEVRXsOXtMyVQPxO%2BHLqz9OmUnBh38qzvUuqgtyisAvn%2FspfDO%2FLsjZix7xFbxcSXFpb0QPw5ctzMYW%2BezwswEx%2F5B3muTQTVpLdBp1XNYPpuJK84Wk46oVqv4qXB%2BXQ&X-Amz-Signature=2c156da8878c350d0381ed72139c11631b0a50deb1302bbb464869e251dc13f2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV65PWKF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICS4%2BKATt3KBj0ixvJ%2FyHqxWsWHJRPSCieHDpQC5RTX1AiEAviGKUPeY2Q7KwddY7y541DKRrFdtSso8yJaXbeBH5AAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKM4Qw3DSVUiaTwLSSrcA%2BBP7%2F9xKPOz89PeN7TJ44zBguMyXMG82ScukMK4yXy9dtXWnn%2FpFzGrtUGhyE1ujYqiuNZdMOdnS%2BFiH9z7z6m0HAlScJtPDNaDPjks26b8mbzitZDZefA8C64132pTTXVCvfDl20Jfg5EY3viP%2BqGtCWb8Sg%2BkEnp59F2jtacYYkEL4vNIbDarGJyJnrza2krhGpj5vlO5F6lKWINCR%2Bm4RhuGz0UTf4Mh57H3GO4g4pynQRNIpiHvvbP0g1AI7Ac5NJ5JuHbRzEIXZGrxcF2vA7kyuXpa8wTcexBFwYzb%2BA5gJ2YlyFoIiL6LVOEmNcOQkdhQvjuPv6dK7r2J9mTgkB9p7tJHjuuE7CwSR0y4a4wAwq3JVgbFMxUMo6X8qQLOqcAYlDO1%2FbBE9%2F9R37AKhNHZNQWJx8w7Q6XfkNFaqyqM27h6noYvjrUuNrpu8g%2BuFu7%2FZ0nmLMVc7H%2FAZb8U7HTen8flbquV81NgCO%2FlwUBEYyaorxtqDy7h3hSvxfM1YWOeF3yFHgKySVUGIULV0PR%2B6yVWVQc2DnAJclmgNsik0Hov8HmiHuZ1AEck0pW65oiGX3CP6N2Xu4neCfnZLAzu0O%2FA55uMHBDrP3MNd7mbxfsMlX2p4%2FzhMN%2BAmr0GOqUBuam1TmKtKc4uIARqxQiGcCd%2F8nRn97u%2Bnjol4DrfTYSccJVgwCQj4afk%2B0zL%2BtnKvH98kYbu6C1SeWP8rRWPm43i5Yup7NlK7puhRrorVAQXYkoerKisuHvGND3So%2FjG0WnA%2FgVPCf%2BtyzKu6vJTmIZsoLRy2WmdEymbisddlay5Qk4NE0MpxF7lhJKaRDkWKnDPvES6XEwkHC3%2F%2BHhuqUKdOlQa&X-Amz-Signature=73da44a1227cc52a8b42fa351eff541e68499f833a7363b8979ad19f5a869482&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
