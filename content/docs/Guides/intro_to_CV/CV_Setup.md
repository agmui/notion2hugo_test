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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S6ALZDX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD3dUIM9AssUJLiJ94F8V%2FRTR5enlRrWoh9JWxz%2FwSGBQIgaWd%2Baut7gGdsvhnK98tkEImeWbElOxLA4p4IcQYuOysq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDIjnpExwevdCh8cwhCrcA6gpOG%2Bj3DAOR%2BjSXwMLDcm7TyUCumaOIITEAUiQAjt5wrl%2FImhdol2bmYrPdiZ6hjZd4N5tLjFT4QgYOO87PFlyfwdmja%2F9IbovrRmcf7xMNLzT1xQNXz74NFXS9ftDGtGwpK51VMpRmAZKviHCyZLJwBrOI%2FQDrZ3KqZhYXOa8B%2BrVPhb6MXWUgRmR%2B4FHlY5B2l%2FNigjITjfzWDXhSV06vtVweGiPTHX8myrAg9zcjRXaIyINejjdcNR%2BLTXTQL%2FTJi%2BlysIoFSQ7Dg7WrfgAzeMi%2F1TGJper5ncXW4W7MN47JL%2BGgin%2BMk9JI3QVXg5wKUpapU3gQ8DRskm5p33Vfr7uVAEbQ%2BZUda10fIqx5KEUjrc90%2Ba1h%2B%2Bj8eWRs3x02HPf5cIHdGo%2BtrBnmx9xBL0PQKndsUqjeLXsHYM6BgbWaEQK%2Bq6UXV%2BB2sIel22M6nOB7S%2BLkemlogYSV%2BK41M8Mati0jUXAUBSKoihaZgrl5ULEG4SaFqzqCYgk%2FjiGI1wXEfzP8blBzocxj1YIZ7OFW%2FiEz3A2dprrcNOumZ2vKkxNq0URMXZbalNBHGWwTe9pdGFdofZD3M4exhcJ7MjOdZcAW5dhz6HxhG%2B3%2BrM3TKdLknvJoiGFMKHt5sIGOqUBmF%2BxcR3thgANvAs2TbwFPom0sMiQRdTYoZT8RTxZcAIdcJShpzYcgzXKDcHCVhrteAgbn1h%2Ff7ZkxV4L1fa7p8QCh9%2F5fVKuGZp5C5srmpPvbPqS58laMLAvruymj7J2RVlVAtzgAYs54TmkVEdg61j%2BDQazzgRC0eOI9690kmhNehm2JjpHgueGXaR15mG5C4fey%2FHvw4OpD8sRZmMDzr3w%2FSVR&X-Amz-Signature=4908b2cb712e4fe0ca4cd22e0fd97ea53f827295d2b7c78fbb873c9071b583cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFJ752B7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAseBnWBt7CLdD3fS4ZHnjyBio%2B7WbSTp5c6k8SFaLUZAiB9jE7lijD9vb2SIVAswvf8KYUWDOhPIf0vc3gMgiulyCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMZT24Ggl%2BKd7XypgiKtwDWYJucpjkW26lABYPn4CmUdue%2BD%2BOchjtCl4hqyH5CFgIqAE6X7k0%2BERcZSXUVEbrl85WY3JDx1nuCYZ5YhvpIhQrg%2BnzFPQnMW0bY%2F6mbD0TxIcUGkMMm79VvVNACbb86sJbVjv%2BGk7D8looV0ARe4NRCalsMoHSrlxx55p8pwYgXlrnx9pdjm%2Buj9fdvBGCpv1%2BMvhVyUU3jRaW1Z39APMBzJWTxavi733LNPvLNxthKo8F3BzuevgbG5UjKNl5MPEEYd9knxhNAFGAd%2FZ5XtVB8T3rkva8n6A%2BstlAJEu9UJ4bEySBWWK3xXDyjM8uHpwdwV9HxeOPihabdRCc2qGyMkJVfYznv4LaZnGtbLaZ8gd%2B2Y28R0yJxcXqBq5bJaUFg7kFDtceNui33h%2FrNTdpqcd4MI6crA0pR6tHWU0P5oxSxUOXaNmNB3lWXWQ%2FlaTdAyHvzLOwitb9nqfqh%2Bw9rD6Zvfj92fvbwoYLFXn83M0udgBFDUxXpj00pEFNhJjhswKDZanvPSJMX%2BI9a9g4x%2B1WF%2Fm1WLQtzmL4vPWVkTHxpGMnqyRdE57V%2FUZyJ8MzIUebgOXNSE1YAgVpOdBWsVcOgt3vH3Q%2BSz%2B1EAZSmvq46SiFjpCuD6Yw9O3mwgY6pgEhTtZZt6T5go%2BGT%2F9zsxLWomSaZB3d8YXieqf6mzEiu43d4KQLZQCFKFVVR5MUgym6no0pkH7oEPzxhAT%2BOgrG8Faxah4ryCKKWkpJddFPIO8igZOEQWdFMFHDlsKid7K8l%2FuXsdc1tvHyc9JGsc%2FTEoCYbfOH61nptqVzZMwHJmjGgKNvOnjAb%2FtfRIr47ytkXdSWJzUBQEHYp1ur7ItM4S%2BDHTaw&X-Amz-Signature=129a37f10dcc433c79b9eef813aaef541a2efd1528d67b44624dfc3c127f793a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
