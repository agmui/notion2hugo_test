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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6MYLEFX%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDLuPua%2FZtE2TsDqP9QL4nU19gcNdmiyR3CAxZVwJPGCQIgJrDFHkYFsIp7HtT7JWqynY5rwO2Parb9fG9FOmg1Zmkq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBEsgZT1WhEyv4d97CrcA61WHEblutDPgSsvdKUpQxWrec35x6xmO87rCZ1d1u%2BvcwhH5putwMWIqFqmH1huub1NKCghW60JMh8y6Du9ahS9IZgL60R4aCceiCuCDodQ%2FZOnDnbcF6FUdok8e4jWL3QaXRM2M7C6ubPtYxA35eKQ19s5SdPwtKpoZRDgiE1b5xqsLHNHX%2Bdg3mHL%2FG6I4ElnX7x2c6OtYygWmiLhciZJPRT8GVo2vX1A6EBjCX%2BXAtFWcdOKS4c52NNf13ssQDZv9B2stEHZBIYpogkztdG3eHqcSu2VTwoMugm662clqAvNXt29ztVtz4g0yc9LVdNylD%2BkCTmv7pVgRjvCHIgi%2Bi1y9%2F9a9461zMMIObwgZjmNI7k3ZrNTMwpn5BQe9W8GSZ9nKGqRvo%2Fu%2BsuCQH7u8HlaOvbwCZaEBgqpTpOFZwFmUPiYCkIsJ5jHluwNlUTYIKO9nGtyFlSymUF0IFGAT7TsaLRHO5FCs8z8jzMCrlv3gMISBACx9pVeKgQtFoX5%2FKfYEFQ9BgBLfOJ5UK5%2FqnwkJAUy5GcV1tnNQi4DnKk%2Bi3riyl9QxXZu4iWz9a2V7f2kJkxdYGsRTRCLOXTYCC6qDc7lLFabx9U0rRoRLdnNFr0089uIUu90MPbc3MMGOqUBY2D9TgaqRbDsWm0%2Fzl%2FQXASIlS6bJ0cmdpxnw%2Bdg5HuC1cVeB3Bpa27oFcTkpvpi3UKB7fSrMzG2TQcBzUASrh2%2B8HquRR2G3hePz02%2B9lqpj5xUUFxgBt1oo7fBEpF6d%2B3LF%2F0jiK2LJS3tfEXmOYX%2FA5oTXU%2BHkiPH0UG6GQxEkIRUAsk5scdpex8K0oPSKajRhAxLqDKgXRdvFKXaRYQw6dQe&X-Amz-Signature=fd2896895b2900b6a889d9a8b632ac3994ea4f051fbdaa8b2a8a1d9d16b2b172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PXPRFRH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCS9fmZxuetRfAYpqrqkM8BCExzmSUgwUVlfT83yNCaXwIgZ9PGog0BRkWVOI8d%2FuppE6SJseJ88v4U6To8CuUWOskq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBnof%2FeIQIdypNsK2yrcAzR%2B9giS0m4Tr25jPTXj6JtL%2Bq%2Fk7VgJTCE0yq%2Bk3%2Brg%2F%2BwgggWS%2BSiSNGwD1sUhCi4DtjJv%2BN%2BYHzQXO0qZ0qq7So9zClz2dmNoDjUm%2BCn9ccgqPcNBx%2BM0q3bV4TJ5gW5UgVNLt2OBzjoDLjIN6HvYQMpFd2GfUhRpkE72WrCVq8mUy%2FeY1263k7UiQeEs8033q8TlMDr4N5jROJXDfr2m81Sc8d1g%2BzP6qwwaXPdTOSILBxY%2B85WkJVzAj%2FWiR1ym3Al1rRuheTyM4KU%2FmEJH6J7fnH8OUliDPnbIT0oeqBnVHIR9skQPGm5QW17sLx7BSFTVr1yTJLnIcyacIXkZv8EMOl6b13Mwo5AdadEEoLNKIqJ%2FC6WsvLPgLc1AzYo4rgf1HNk8lAZv09BYu2c9Khww0CdpEWwJyfJk7xBBUFLwE77is4iNs%2B2PI4L3zZnSU94ZOwBq4%2Bfso7UtRNylsaD6CzvN5i%2BSgeCFD6cPd87ymiHn3JwEdP7Fp0hmGFuI4qYGbYmmyqBWpEYFT%2FWamxpoX2YTTo8o78rykXpn7DO262KqRWCG64ppofHCbYrw%2FqcBy2x1tlAvHTRwCkxRbdlPyKspHnnZvkkfmOOjU6ekI%2F8mDiiizF8cMKXd3MMGOqUBnqL8PiAshDY0Ptx9pFmLiO%2F0pgZx3%2FfX54geXqcF5fuIgFqXUA%2F4JVAowoVdoVsI3qNw0IKukpYiX71sfwtis2YSMrRLru1L05iTsXPt7iQbYIQXMMH6XnPBjtocM1TZub2YNwU4v9bXfyHfvVz24FYJp6aXehO7xEKGpdh4WpDIzmWSF9a3fs%2FBCLRff0B%2BrZM%2FfXCEAXe0oihMS18T%2BnebtSEG&X-Amz-Signature=9edcbaf27b200e188c12bbf507b4488ac4545168f2779020a74427cf41533fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
