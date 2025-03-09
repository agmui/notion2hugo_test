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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDDFR6N%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCyJwofe9k8%2B8jFDLYTy%2Fwpb8l95qU3Eu0%2BcFdlZzNWFgIhAJXfdPAKKdDvFwBBMaUYigc1Z9jTZMMrt%2B4wVQGI1XROKv8DCHAQABoMNjM3NDIzMTgzODA1Igz%2B9q3E509C5BjZnj0q3APsWMbEXZKnmzb5%2FEmn6pXIKljKuzyYlc4%2F3RJvYbGXHeoyZ6MaoWw7aj4%2FBrIMbl5Q7RowyhWurDCD82gfoChmeLH%2F5mRXDhvJvHS8XglbbXIauSsmOsokmJgNpkr8E31I%2FfEvyHMLi%2BFUuGLAp7jna7%2FsuYE3QhYQcxLMHqbf5yax%2FGdmHeQUwjOHHdO5toXlSEZerGYTkPgtrlrrnT69RGtAWmh26KpFCAsbwhZAKwSwERUcKHnOskC%2B73oseTCKD58F1Ygleh39xsbg3esjdqR5enShrqBHvrdoDnd2zCk%2BFp9GMNOML5mogIKsF0dq4kfsYcGjR5N%2FRpF%2B65lz4J0QMU5bjiy0PbR%2FzdgGM73FGvWSl50Z4%2BCctKN1u2YQeZivUZGd%2F4Asa8rtFY82A%2BuQYl8jZY3z%2FVKCNFTYK4gMlofGyD7MTbyOvZ7VEW4MqJUZO4x8r5e5zP4Vy6sdFRvz%2FG1rj5TPd5hfqTsQ53n2IRGcq%2Fc2Mopu0%2Fbp36VTFloa%2F8zfNSFC7lTlLH4LYMpip1jXcpu%2BNhjMX1NSgBFb5WiLPnZtnj2eJVsECONC19fa%2BIz38caSTUNiLIy0vN3ivZFDTL3qBecvqQTrjXQJdv16oyaFcIj2wzCF7LS%2BBjqkAcUOtjfLRQ%2BHQU9Bi88UAnjeDnI93kHeF4PW%2Bh8%2BalECqKtDmym3Aja9SSU86aTo9tQ%2BvJB6rGVOJGAOTDF6bFWgK5Bakor7MksrIhqkVj2Wnym8r2Qb3wp08i7CsDqnN1P7ONHolsMWbxF1%2Fei6y6tkTut5x13rUa2aGsFCGrLrSWBSXP5P1E0MTa4toIRlkiHOngo9PRGogp7NCTS9NXT%2FqEMU&X-Amz-Signature=3830da5d761994488c865b6b670f1f1cad290e528f3f0d5882e40045e2587b8f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZW4ESC7%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICdPufTs0vNNIOgWZ6DMsbzlovgLanqz552bwU1YkVv%2BAiB%2B1%2Bb17MLXhzRZ6t1cMWlZkR7Y%2F01sECwuRDCi9hWGkCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8WE1BrqZeZ6MBty5KtwDVIBCkwoGxyg%2FM0gXhreQVdz0UHLbTjxEMKAooXhiyArgOrv74w8156fm54tVoR5ItrMJM%2B81MJkcbWosBRDMOu2fswJJ84rd7AVYh8m5VKbh8nXHfadNZDlQjAXRSvEMBermwFEu2nmG%2FDOdcjI2aH8vks3fwvbjSvY0wdj%2BpWlMVg25gYFJozR%2Bu8NCOrl%2Fs7QgbILdjnKuRv0OT5pnZBYRIejfVUYD4dzV72uyVBiE7Hb%2F%2B5yBiK%2BFBwTNVK1Mu5mwDVpTCS8HqySJyH3i2LRVrvh1TIfGYHN%2FlHg%2FtmrJAABEEHHwwCXBfdukU%2BAsWm72Cvn9BIU8YZnROO5cpJwcYhNi%2FvvIdEDXfiOUb4dJGND0zFPBd0tLl92vlCci9PmA3XGX4FnjlRFEMgMZNoK1naDrJUo3Fk5f5Q%2FdLblc0yxqQMXe3WHdXdKV9nlnY6ngorxffbSN9DvhUQqzP%2FZyMQEytyu2TvAleYCKihywh2qmYdyqqNi5zyfhhDEKuQVqk5%2BpZ2x8KiEBe1WOi%2B38cA6c39jmthB%2Bn%2FSpnTG4IjXczb2udem9mgVlqQyM8hWqknjXuurKADN0ZzH96GA%2FyYK4dqM5hLzq3s48dpaAZy3ZaAe9yLxJk0sw6eu0vgY6pgHuQzj4%2FG4F5gXwKbgxFbYbwCPr4OnmJnyevg5uj0kV4zDHZL1ehoPszrWMRgFnoCdC52KlOFEI7ilmVi7hltNtnUHkVUEx3TgKbJuQ5GnbT%2BUF7GbPVK%2FlyVJ2G4dYNhlHF0SfkniPm%2FKYfwIHrHhmUJk%2BQfCU6QnosOMoZUAHHxvfUOkqgDiVlC2lxiuCu9EUFRqp11LE%2B5QtuoNQg%2B5aswHP2duG&X-Amz-Signature=d2077ee3fd101a9a12ede0c470ee999c8c0a59e72f24af34167e573e5cc67f40&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
