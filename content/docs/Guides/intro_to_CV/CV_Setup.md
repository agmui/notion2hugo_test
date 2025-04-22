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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE4COT2U%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQClp2JXeCXKK57ZAJVK4%2F76joDtR8XrjO3FCNrL787TZgIhAP02GiARb2IpJ0jSce%2FH0Kj57HnuP1G1SzdhTG0wq3R7KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsPu8xySb6n6HBiH8q3AO8%2Bh3REFG4XA6OXxbmYPkNz3FC40iKGfIgMfRi3JNcjZL8BOUhCQUK6Tykgt9m%2B8VNIGDc03vpORNdcr%2FTmKLma5PTpRmyAIwP70Y0kJWxsrHXGgh24AM%2Fd4yB2xRISVFKzYx8RTXGTsyme4vYTjP8CFikp7zwR7QrRC984rzEEgO3IzJbbNof%2B8rYo5GaO8gWEPt2hO9mdbvwc7kMAabQ79h%2Bnzw8nzKS9l0%2BkZqXEGsxCBa1qT%2FNoe9piUZap0zu2%2FdL00BQjhzcRh31hFf16a2ndUVKjYFHMRbdD7ePztEMINoLoDQWADcXLSQl2dGA6nlhi%2BtR9fi%2BuWle%2FOxxWKpk7CWrTEpsp7puV%2FKK0l%2FsDt28xY3zKThcqenr%2BPqvmhyAIkxxWrLfh0u9rzkvQ39qAhO%2F4PMJzyWHH8YmUI1Odm47MdkiqymmJAOww10aD8%2FRflxNvfH5UiTtJa5X8IjQuy4B4SV1bUQKwCvWvOZNbFlE%2FQqjmItqzgqhdVXJHF1AEV4%2FPNtOSxwShhjt2Phu6%2FFlvMtegBeCZmC0sNEjgQgUsUCIaB90ZK%2FZk1UYVGVxmWWStRk4p3k5ihqZJh4LckJRZhFroeK5Euy9vDzBDCB1eZ%2FujM9QODCIi53ABjqkAY11HcywtfvW%2FSYnvy7rJQejSRCaJELjPoSiYeDXPJ0QADS1QcPq77M%2B3TmUXnvxET104EkcJIADv4M%2BGLKu4YYzczB8BwagoEScHYX68OPS26PrqzJPwXbe2ABwzLWIs71f2VHA7bFJP7SCsuXD9oHds0QmxoAEMympRKVrmmkrBNZVGjn8DR3leeVaDzoNR6hF7DjR4AHz5DU%2FppjbkAvuyWjD&X-Amz-Signature=a7bb1cc15839a1e1f5fbe1e2a01ed6c2c3014e8c20e10e96b5b877a6c10038cf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRYBJVIT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGjUBs1pgevTK8QdqxSC58AzSeGbfS2lR%2B5eSyxqX5knAiAcuQd4E9CnjkoUgc%2BeNfXO9gwBlOABmhVR6oeOGcgDYyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3vA2rhaFQm6ZI8EdKtwDdy%2B5VSQJlEzc10FR1PaTBiVJK7f7FtJdlEIm9KWWiFJZ1xMIVq5ZaEH8JpBKlUfiQ1dWUfcdP8QliNywdeTLSXHturkAQSLHEjLaxu1KonEIQSowBHwlZlHrKfJhTsFXrM7AXVRmC01UnrbPN3exdgCoMwYRPI%2FLFaskfxPbnsII5Op8UgxmvpQ7YfkofCKgBqm8yNL%2FI9q6pMCvwuhKQlKMXU9O8LFxLglJQ70umYY5VK84lDT8%2BM%2Fn%2FSXDQXXTnNJ%2BllXtqFN1yXSlUdW4tLvhUURFlMV9B7w88h5b0Oluykvm13YI3VVRV7ioLmlCtM%2BFBKnm22MwSk4X%2Bw7lQhcuhB99foMFiuO3Q0Ksqwkm57bixLrm2Y3ej3uKX%2BRG8OIavyRfuJXuzByxnqNifoPn2j7aESz%2B69sJ4mDPg4Ph9m9rel7toKFAQXxosLxoUhoUbmPys5W0hxfOPzEf%2BiwaTE7c9j64kli3Yc4X8N6t7yNgR4elRMxXX%2FeGYdYjY%2FxalGYgXLNUmdrHpy3YLqAsSUXxaHVy8y1e%2B%2FVIUMaYCdu2eP4HBmzS3bZUnN3G3WSPpO%2FkhlE4gpGYOu29lEDZJ717Qr7710BPMbnyqmgk9xKOcxvV4%2BGrlbQwu4udwAY6pgE9GzVWCAxKGd060RiNgds1F1NJeijlsxm140w9CzLJIie4Hs2XGI7C5EWHZ2EefXVhDf2svtsF%2Bx%2FAIaVsYJfC21kX50DyDTtSTuqnRBOJA9egth4156E363uUhjADIyozCSp7L64SsSByYFpkr2g8GOKqv1f3EDOALPH8bzVCchE9%2FKasF%2BlprXxXHQ4jQxZn74oXl4aQDdPxDmaYNntDnqaJQisF&X-Amz-Signature=63774b259b426f564f000b35cda6be587ba66e2f840a9bd70baaa5b4b941d716&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
