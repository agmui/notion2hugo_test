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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMQ2XHR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCkkNkLoLfvMDXa9m7o6RY7EpgeAyVaLibrLtILY9YikAIhANCmXOYZco6m1aLnoHAJycrEhWvoKvdujMpzc9m517oaKv8DCGkQABoMNjM3NDIzMTgzODA1IgxFZ0h2tinFqeN776Aq3APGMc%2FC0iw5UsTEabBCupNv6wyVtvgxybjGAdUX9kJ5VcTNP4TYSNMu5zReyLGr5QAkP4cgF9Oq6z2ucy2HRf5WyNnJTkdIfTAJuDde8bs9lGxqI8R3DUgQSEGvmvTMJEqtLft7bfao%2FB%2BW9uVBosPTqxWE%2FkjpvxovHooMlzf46EGDC1PdSh26FZSx0urjyJzoQrN6NjO%2Bi5fZFay%2FAVWfMN3z4zkZX951GGrHiUk0cV50LpOiVuMPYXf6foaSRJb9KgB3%2B41GtE5D58N29PKpCwcgqJaPAsojzRsFn6ImvTG8eva5BgeFlqZa%2FnVM9tpmbhLP0arRULcw8QO0xhIEIxa3wtsq2eOCQocBzkljKPOjv1msdGQ4cdSfasv0titPY89Tabl6yctfNoB65TSDcisKm3mk0%2BwJa2fke2NWe26g7No%2BtpHgYLT6sl%2BmeOYk3hXAfwXl3IQvHF08%2BZl0RXfPF40rQnVplgFmHbrko9HRbKBN7aO2UiF8D0kAbV4YmC7ph263ItVRQlTTI%2BlAaZXYr%2Bt8DvWDOJlgsAH6hK%2BlDYL%2BrgnamWtDoG85v8pN%2F8ab0fhpbvLnZH7P3bamaRhuvo8wgjcYCCr%2BKCSBF8r9LCRGNCw4bJJ8tjDDlKzDBjqkAWxmjpmQyCSxsFEmgeoSIG2CniOQ1OblqeVdNthZzAbc11hp%2BysYRZzCM2I7ZNFj42gNpMy1hmo6Fb2geZlzljAaM%2F1qID9GDCB%2FP3rPu6T8jJ1xC%2BMAc0aEhFBB3hml8F9A7StmxJAzXU7bYnDf8G%2F9xkzRVQ9VVzPERhB48jW6fTwdM%2FcSbEDP%2FDVsyuuFE%2FOr%2FoWZ5kD8mzI6hw1F5ffVZMTX&X-Amz-Signature=ca51fc923f5e5d85662e70cbb55a6a0a96097d7cc0024fdba8f22d437e8f07dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFUXE6X%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAbnrzwS31i0n3eFtDaHHXSZwohtI8wXrmQhgOipBzrDAiAkC8AUS4gD%2B624nX%2FyzgV%2BQySR4VYSLtZ79Vfu7tvYzir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMahT19Cqzi3D9ZadMKtwDjAJVLXxpQt1GmoukJVUMzWt%2F71Uc7%2BgRg%2BiSF51SEtSiSG%2FxJFDrwT1uIs2FHVVEg2jJ84fPvBAr3tykiKLT9Bt3mjZoof8v334TlqXW6dKHBD0TVIxs9G%2BGjyAqKsCpzwiFbsjt3mV9SivkiPc1wFm3RPDmFQ%2BF%2FMvNWDKOORVTPSFxfND%2BG%2BRSe7KQxr%2B%2F9OnoOhhY7WdqcQtfYlryQyeEGcK1nu4Zj3tBK3iQxMK8TQN5ghfQjsYioC7th9OcAI3TlvaNN%2BLkWESZz16xahY%2BwidC26f4NfVNhy8Hm6WNkD3huA50TbL%2FCddqG24DRLgxi5N9MMrK1gxGJOjwqy2h6A9gT5s0Rk5siaQBMsEotj7DoU1hofcy8wMkmU0atKkmJtWsACD%2FWM9F3kiwa%2BJXZfvv8RfFiw2mNniC%2F1z%2Fp21a6nO868mKy3qy53zbOX6lz5xnEpqCDADp%2BUU%2BWzJB38IHp20HS7ytdcCGUOQR8Lyj1eXqC1R4QNIQfH%2FOkbsAHGVT6%2BQX27eB3inMn6qM1H%2FjWsGuf%2F3oXz7QRF1ztw%2FV3UsAqqwIaM%2Fn41czCAMhekdQoBwae6PqWGd6f13QM6Rbo2C0SbEhWLTMDN45wpQb1aOb8mw6KEsw%2BpaswwY6pgFMxrBFUyUIU2%2FSnCINFxOCNMHmsULur%2BHtXqwpty3lb1mocG4fGilAKSPpYZdVOtjZsmy%2FxXiHz9NEYLr8dG%2FYeMcB7iH4jrdtNa40utaoW4u%2BSLpDmYqL%2Bw1L1lGesvrANmA7tckTuGZQA3Ux4jixtUR8rymz5ntoxYeQCn4V20wyDSCQYYEE5S5TVV%2B9uGYYpKXlFaza7GdXNEbhXNQlRz5E8bjV&X-Amz-Signature=4bc1720535d625abf5680207966694412b0a53d6ab99295da2b606c66fb16cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
