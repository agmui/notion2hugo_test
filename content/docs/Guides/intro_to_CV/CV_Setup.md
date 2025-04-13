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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QZMW4MR%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHBS8xxMMwce7omP51AuDKguQZGV5dYILDoymdgjp35DAiBCjW%2FBZnbJvQXopGyzsF%2FVGT%2BCPYLHQnjlNQzajX%2F99yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoxbxK7kpfEFmVBjOKtwDfUw71de81VxppyfMNsNlRuPJE%2FTSYeRvyW6Qda1LxUp1MFm3mrqMKt5XKOYsmVGioSHiklxjE8q2AUqcrz0F%2FgwKNXzHhBer89bCaWqg1f3yZ93I2AXgtW%2BzKyyA21EwKHf25sqwsUkmVBDBQrrlWOrFMsZGVoFgA4jq2HpBA14mI5jMPsIAStuJ%2BURINlSoovxQ3Hy1l%2B0sXDLaxF%2BVALJFJP1zXwSs%2B%2FpK7zaygD9XEGA1pCLaLCaVq3UFBynzAjwgGRxlLzFpwnJrH3QgpvatApWDTNkMQ9Y46LudJmwycleItWKOxvlyVp2YtmKR3%2BRy1Btwo%2FORmOGHmngSDhso59zTunTfGf7T6lnwxZNiH9opbq8JUMT7PKS4ZqpNHlG84a7OYhLSfsYEdfSNth5WzSOOkx6XKBD7zpEf6MAcgFHlWGa3KYiFkpv%2FcNnZZhEQepZ3hdfydOuHd8shDucm3rs2kt2XxfyICgP5HcYvlXuJWVPn5IOzILAYnLrIf8QloSkqi3OycOG1XDxx0toCGB390ISQEv44k8c6dXmiqLAAY%2FapDgdPRok%2FA41BJAFhqTJheubNv%2BZXy0qSFrCOq8FJBR1f9NBYNbZs0NCiLGCfQTjGjT1cbmcwhfnrvwY6pgGUlRKxVp%2BgBbdmTxK65dSdHwfX0woJgwKpvezEF%2FUoIAvoRWmwW88BTG60kTyfHzu4j0Q5czYfHLB0aRxtUvnW3pjNuWkQnQDVdxDtiYxtBH8ejAOX4KN4em4Dy2FaUenUorr9AIpRQA8Bwa08dAsm7mrdKX8D1q0BaZOvIgunJUbNqcMcVCqoc89q9sCQ8C2Pwrsg5%2FDfNGkjEWUaZ7NyTQuS0uRD&X-Amz-Signature=e38501a15aeef6d31eb2649cd2013311f60b2aef9229a89474894ba59851da2c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSVDG7Y%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFjOfyl7g16hc8XUWuX954aGc%2B%2FGurtblbXHEzEI0XozAiEA10EB9yEgwz5KWB4t50xPusNr2aJIzHoZc4D49hZPraYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMe%2FYZ2g1HnPudHOtSrcA5Mn%2BFBjKPFy7LCLNf%2FLUqiqMS27XlEdA77cE%2FYHjLOUPZG%2BPamHr1mZ9fu0YdqZNbcGXmPnB9d%2Bpmaaj9JPHE%2BaYhX1d%2FehXKxo6MFTWe4cMJce0ZtPCe3ToCiBuObOYBuRmdh9ccxMbiDxuYLPYRobIvXeg8joXMHEE1h1RM%2BXQyqWNCAdGK6Rhy5kXo%2Bt2CVcZQDVnfAzP%2B8D17kD0TKnnFBTGZar8n8roLmNMMAOlj90lA2tgPJw4IXulbfHEgMYo1eQBL%2Bg7Pmi%2F8YDQEOMWPVW8Li96T0wdRFHh8oHRTdQDlnenjCXNNAi2F8KDU%2FSAE8Yp%2Fo%2Fvo2nHHaNXA3%2BZ0JWl5bsGPPpyLQM%2BqNZBVsWGjg8Ey17KdLwv%2B5FRdL2CJ6%2BtNtt5X8%2FGeZLTl4hsRMh5ADr7JZ1YXBknhOefVGKyXvd33dN0A80T%2FghO5yxdQ%2Fd%2FaKmzpRwWg40Ivjf1GpOolFX3e4N3UJb8oQlYUl0Wbrm7Pn3VliQvLtmTvpbZu%2FdfYp0U%2B0wAbkXIlwX%2Fpm9wak9vpKBDSPBej26lKpBw2HmGJGlLIKkYfTmnkiCfq6wnR4lC5y1QSEeLGenLF4r9j1Ty%2Fd%2BNaekl7199LgpjTNM3LrEwyTsMNzT7L8GOqUBizBmPiDd58vs1vw%2FTQxPbdR9Ui0yCPJO8xd%2BxjBePs9rGGFafjA%2BP864byq0eNrQdx5qfaIO%2ByShHmiv7Wuzytskqs7Y3xMGp7KUQyNZUm87eZIXYqqH3BE8QuAZh6XVNXPf1ylyb3fZ8nrRtO5wEqfGPmBGi%2B9idt0DAWMW6EW%2FkqrKcWSXRs9jVTBtqe4oCCCoRm9ptUZF0Fr5Zi59FbB1lTQt&X-Amz-Signature=1dafbfe7e7f251e1fd8b8cfd7446733cb8ba09503f600bb8af9849fc9bd29d53&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
