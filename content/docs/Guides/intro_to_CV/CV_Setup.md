---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ5SYNWP%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBsNps1nazMdEYKeP3ubnMVVXBr69%2FPl1iB1%2FvnRQDdgAiAShCfA2hxYFfrE%2F3MIMYB8GFybrW2OzTOWyroESbjAfSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMg%2FMs7mzMdCm8IJktKtwDRvlZQTC9cnWEtCHWdIWNLJktS%2F5rCATmdvsDdHhMjtY8nHjJW8dKBEnObZ9tVxB0XpeJC%2BXwFkIPkBNhPOjQlsxATH%2Ba9fGw%2BaCs3m1k8hlx4G2mk8OKLI%2B%2BT%2BN%2F4KV8zyJ%2BipgLBI9n2i7KV10L9wzkJvpAT0ScmUmgZxCGwMEz8jvF4BG88EnZ7MsLtzr0dPDznIyxphYNdRaqpUnUYokokRlQSHeajuc15uBOM5hulFtn7DAtMEOIejpsUC9LAmaadQz2vRjJcxe8idz%2FVjRvSpezbYGoqU45T0vcXD2qqKriMQhLwlXjkMKZJGYgmd7irp816mnN5unkir52EZmvH%2FE83okXDnh7Rheqi6xN6n2OHzzgUBynYdnanMCyS6XhHYfreNZ2f6Njq60K3431%2FuamWFe4fHoYGk%2BLTG0Lr7MeTAA%2Ff%2FR3bauEJWzQoHg3VLahuQjg6U38x2FEVJyzlVWBaZg3RdMSONPAE5vkQ2GZqY7D80UZN%2FADyvVawuunvrSGB3ikjwBJpcKxospVnvyD1ue3Ci%2BYYpfAiPl8sv7T85D1UE0Mc3pMCU3Llcyf8PYu4VQF%2F9A2nj96kL3oeOKsA%2Fcaq58AMLWO920p%2FgH7KRrVby6VShgwlZf4yQY6pgHsnZsaDPCMvGXD8b5pJIlX65kRCGC7zKmaiuuJDuWV%2Fa81SqB8GY%2B3DQh7tSVW%2B0nO5FaFBKcymM%2FPQ9SflNakMKOr8JcF87c7B7e13a3RBAcMp3NgXZU8jy7oHKMzhyqaCHjkM4E50sYmUjmP7lDjIti6TiBaJFOMPoE81XUXs3QLDMrtaRUgIPqYrTunO61RRCBRbw5CK%2FDkzFlfu6b6lm98dtZm&X-Amz-Signature=942f5891567067c4da6c2e4cffc253a5d4cd89205bc9f8ffe7446ed557504eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JQEXZXE%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC9gr3%2Frvh4UzQDCiX34%2FR08087EM7fjP4k%2BdKDfjIlaAIhAP06%2B1gR%2FoGs1Ars6k%2BZeM75laax7qNUBpRlkR4jtwgFKv8DCCoQABoMNjM3NDIzMTgzODA1IgzPsCjaceTCZS9CqNYq3APqdis%2FXkrcPTwJepzYdYlKOOBZmERxeUBNnjDyyhGUsibI3jHdrgyh2Igyii5HNFxKN7gJIWGmG7bfLFk3Q2HyMy700DvXvBy2tUmr%2BR%2FvMCtv3wCwxgh%2BMDmBwZJl8HyuePJDiRSGSoaHoa2bhKBlpHd34Uie9Qn9UzI9W1wQU4LsgSaFyx46hR6SqaB8gbS%2FJqi4ksCaEd3LpORmLK5VmY4jxfur224DdWnhBbvop2c0sAHDExsiaLaIeiZIERIZfmdZbWT4ELnAGHkUtyLBBEBrJAurO0KE7FiZI4NEzH9VcNxN5nifwpwqbB%2FcErtP8o1efpKXm0U0x4qkzXHUWlTicVkPeeipBt8P9LJPeq8VbQn6TCBHiMyl9iQFd0Q1ZElzQm1tb8KYc6r2uTnbh0KziFAlKErTxz1ZBmC7V%2F8jsBz0Jg8w5h7IQtuw%2BiWD%2FcXtgX7IQnpwTyyywl6jM36NnY%2FrjKzYogV3txroJaD9q4xsvzWwra7cXU4DZu3zB7aO3l76Sceahus%2FCdIMTGYahCwb9ugIwY6j%2FsVbHM2APeynX9%2FYpZ9JEGiN043PBIo4SH6tusnt5YR1dRuzt5FqpAemVHTWcSM0NeMauSnc6gZHAtYEFRdk9zDSlvjJBjqkATqeptdneQFiwyHsjNlCc6lGoYEj%2BF7gwKoAuNiQ9BnLSMPPo5IgGWd4FoTjkmc7PYofiK74Bmqjjv%2FyBdmPOkJ00ZIiWgPtL%2BBTw2w8FafWMwXyhGgtmSeoo0k1ro4Aicq0lQamm2%2Fc%2BMcMykxvn406KiZqYqYqk4UtZSi3O1AnBVv4LIcB0UHvCAed8tNL7a2ApU3tiYUuJQTE4YjGwLvojl64&X-Amz-Signature=0d0e0cff26faff4ad8b772c64f95805b177a190bd37279bd005b5f23c79748d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
