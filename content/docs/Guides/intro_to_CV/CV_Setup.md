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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623HQ2YTV%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIAOrcJoD1CfN5RcqJ%2F934qp8bUNzEgWp1SkHwJUE%2FheYAiAz3FMM%2Bn0G0TAZ%2Bw7L8PNBK6XTECybuobV6bBhQ7zDaCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV4odBJWnSBAH3HB8KtwDQpSCgLqxL7H8EIVbJv0zlEGadr0j6fPwWgwohAepIDFpVAzPlFDdoRY70sAHYY57BusfzRQnK0rcvzNLP6ZJgxTrfTIMxhSJSsGyoG%2BtZdOIv%2B8swBeJSNtZ54Q8vFD5ZIazczbcfDS%2FFgZwKZbeFj7CAY%2FjRlwQq9MVFxO7dIe76kG%2Fot1s6uU9JPby%2BEJMW2YIp03O%2Fgya%2BU%2BR%2B4bcu%2BSrmuQXj5zwIEI50D24j1I9IKtKI8uHpfy14mC9uRH7R9l1g6vqGsV4HuR4MrFFCLX39Cpd1HQj57dXOPz%2B9neeXQRpmb0OxyGSAklhwqsVrEL0SmyGJlP1G8dxkvF8godnnEkzh7dpj4MlIJXSmGP75T9aKo0iaYsSs3prcv5r2qP72yOkVkPPsyKEm4oG9SoXBKMlXB1eqifxKvzHzPqsC9ntl5G4inAYWbZb7%2FMXALz8940jzqID%2FVI9%2BucfVWzUyEWm9lU0BNAxXa%2FRkSPTZcROKrDddtZvOg5%2FI4sqqnZDbYDkqN5BdVqJ9nx50OLE3IDmjK5Mdo12fbWmCw0XAGCx99eTSWbgaICtJwitoyhXpvOYgH242SdAgklI5JS48qWB3o16UgMXi8uAsSWpOP%2BR%2F%2FQxEkfAbPowzMeKwQY6pgHp2PrOBiv0Uj6O4XujqbxMqpaIC3VKVEsOoavlcteIbR%2FKSulhJOUX3%2Bl4ywcn4%2FqUYmcGr8RJBK7ddDId8V%2BVRR5X039epk7WMIEdSYv2Jj%2BiMzrFbiKKYJQDmgXKO9ES4iQ80NuobPETxcT4VndDmQjdLDLs%2BkMjP4ILWt%2BQjccMNCpN8bt6rK9mvT9hVt3CX4bWhw76JqioSLyFYAYsiPpWX9NQ&X-Amz-Signature=181bf279847e9ba8d0b580d47e8022e5cadff87e5d4882b5e3adf8b473123299&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRZ65CLF%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCLVDMOdtQslJQbgtPm6AyYys8wOEpxV1njZYDHrdvGlwIgGXrsXxfMWg3cqViyLyrAy7XCGd1Mqs2GPFTYMbCtKzsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpVKfF%2BwuFZ0RjfsCrcAz%2BS0ZRPP8BNW6%2BG3Rw536FJFulKNEBmurCqPOvhE12ePQNG%2FsczbTAMu18zS%2BFjIlYdVADXYEeCvxUaBZ7hmuyKoKHdFSYQD8a4WcxFJF3y4oP3c5oYSdx08OrW5gRvkhwNdPJ6eZkiDKzWZ4gT3YARNm0U0SwsUhnrKuJyz2iRQ1ALUKxSjFMkvNSLJ06v6bM76ruj55G%2BiV5jtSI9gzAd33cqPdDQ4NlDAlXTubiVw9nds1kbVRSi214mly3wbP5vP1pzC4Cc8%2BPM5%2BjboxV6E92jbd9oZKXU0G3IWYQ1qkOATqjxSqBVXrvtiFIxRrgcIyO0p270I9BdoSQ3myQ0yRYMdVipPMT4iIV7yM%2B71%2F7aXalMDc35m%2BTf7rsVtMDDhfIMRufwrfRViy5THXIup6Rdm4m1kBcmvugUXwQRgSfQLtgNTIgbc6lR2qksnu9Gk1Y130m4ZYku5YsK2A3F85kg85QsbPJ%2BRS1xjtfmKDddSHnYEEgSn5Qb8FNF%2BlB32GDdCtVBYfRzjW52%2F05xcSWAyAKfoZAUbcmS0T%2Bav4eEfF0fYCXOyu4BxIcsisTkUXXHAGONl2OE1GZmZPrfuAwWMlD3PVJfk1JRg1AQh1R9XBy5x53Bbtz%2BMOTGisEGOqUBJuxNcCz4z9ZVieN%2BSD5lw9i7n65gm6kEpWKMHxrjExTUd6ANk1OfdygUa9YbN%2FV5NyjlmZy%2BaWDJSta7K14NODQ5sR4U2Ig53jfem32zmIUBwDhsEmK%2Fen%2FtkffFxXEh6KrGHsBto2zVYnelzTs2QwXLJX47l7X5N49O36Z156QVTYSc34dST%2BqGzniIrMSLd0%2FoEdvDN8fpGldXPSICMYSAGPqs&X-Amz-Signature=babd363421161f620c1dc22f92dc9aa7525a42f351d972dd0603c5a6b2cb1099&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
