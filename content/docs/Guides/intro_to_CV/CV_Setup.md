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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7JIL4L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTKzC3Kwx96oWQyByhanzGUb%2BR6B5YBeSAudRPsetCSAiATvf0OJ%2F7G5K%2FOddwwtovmVx%2B%2FxDjrqkFn%2B7juM7PPDiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXs%2FPI2T50gLpt7qYKtwDyODyZ2wztLgUIQNRhuPwN73IK2uwzG6pxnBHWSa36Ykqby4GXfW5NIYrFN1UGxB28sgknHUhQkeCIPN7qqH0Jfhc5B3PMBB%2B4UqAQgkAHsuA4SSe2lKndU%2BLO968dIbxESntBHKjL%2FQTk5iqi5fm%2F%2BmwTg4BszsDVtncJ7bEBMQNLcopCHEp9o%2BnIGpAm%2Fy3icXvVpS7hN0Aak18%2F3LT6hJYR9keCUIfs6ns9F6N747OEJLMf%2B6uz03W6gvVWwPOjJcVvWqMV9YW5eA%2BHIM9QaqwQFTaIFhu3pKPgEnQu84Xy3qoKaMzOBPNHVvyXKdbyXOqBAjJ6AFZhNY7tsTeK4CeGbZxRuIwk%2BuZgCjB3MXORYU04eUa39hl14pC5mLXHa3ufBpA%2FgSUlFoy68vgKJd%2B%2F2d39Iolsxatpozu0iBNuihBIocnkt5qfdnRLI6gaLbo6%2Bxt0jvXcGMP8X4K%2B6A%2BkY0Xi29F0pTWx1k9w6h8w%2BJV2EYphA5cqlSoGJTI954QD9ccK5LrNgWFzOjFHaQPH5uaNKio%2BH6tIVyXwx4CoXEBLbQcfnb0Gge5pR6ljB8QU%2FKIzjRRbWGD64tTGiXid53Rq1TpdI4hV%2FnRLbT72WRZsnAmZgceJ14wicXswwY6pgE03IgL9gp%2BbeoWYZZx1Ddw9nHV947wUDTslNbB7woZFz6rD3rLRU2QtaWXMZofHa7Gg3z8cGMAL2A%2B4VbF3J9kykjsu0V8iuQAIRUZLqKlrYs%2FAp9wO157ehQ6%2BYQp99FSvwmp940pvwloWQY2B2FEiatB63z%2B9zD6L7c9atWTfxeVGw4lgDhzYE535djk4x4MmNaWVHYYYSlsqTlS5M%2Fb%2F0zgbe5W&X-Amz-Signature=5e298fd2fa1c4a17efc25a529b220d5b8e0248daeeec99afbaf0cac2fd92bb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWLFO2S%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUQCpvxmlNpdtPLFHbhAh7Y9zAVKOx2mdmEWcJ9cz5YAIhAMzHkkzilIeHAaWkW12SjQRLtAemFQ60z5AJs3BXGZohKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhyONvOlaZWXbINYEq3APNsFln0VeYQxKWw0Tt9uOv%2BoV5HyLD52w37fnVtdxpc%2FnGwcI%2BiNxaNc0nW3PYIp1%2F%2BxZmigCsBbgDkwvPk%2BZbEKfc77Byku6r4klH1m8u4JA49Fs3eIP%2FZlG669bjoj6dlOi5Vfi%2BLHHrJ7eXvcmAfoOFQBCtHeFEV73ZnOzBy%2FfQ4gaBjedTLcHpFTVz3kGrxReuH2GKMZVk6%2BxSE4HqjK8XWrkDkAm2UrLNUEi34TGic7%2BSEJvPY1vZyZyPuLJSyvBfW002U9FSXpfCtswi60pA5zy0dfZSp3rGcrtie2yjEruIUBhPL1QEOiWORFwQqH75eq5UEy0M1ZvyNE3PTJMUd00G6tS6wZlO2X4pnDEsCLrwDA727uyL34XV%2FL47NfdItM%2B84iKo4lJMiS5y05uwvjmEfzGueE%2Fk1hEx7H1j1RrWZvnOoILLlYtdKUb4S0trYpZnaGttXs0%2FU3nQ%2FhSwi0cjkU1h2xHRTNDV7cUYBztYKKMh17j5O2wHY%2ByTn08qOV6xokbuSNLK0mWJJhi18bsgpPuNH8X0LOe5OWvZD8mVuuorQltaD2O1SN46iRd%2Fh75V0mcM9gsqp3n5B%2FISjrlrgOgdf8%2BxuvdR4EcDAw2tg8rU%2BbT35DCcxezDBjqkAYoQJ%2Bq%2B7inx8aV7XKlAnHDJOLu8dngoBDx%2BFR8A8qvWgALk%2BEKqXpNv2VOy2KG63OrRxbvOD9a1JPscqhetc4NBjmSeAqjfDbFRdSnFUwU%2FWD4HnEjbgRsn9OLIRxR4dcw9He0Q3hoB1Tq5wc%2FVLelbZQ1%2BZlTbJ2lxi0J9PaiXoc5TAT3eC2ClXRMJ8XNMryHocUcQsGOubgJHR%2F9lwBIVOpcr&X-Amz-Signature=a38a6358583d169489254a1ac2c57433d4669a5fa73c5c06c02c9fe7dce8d269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
