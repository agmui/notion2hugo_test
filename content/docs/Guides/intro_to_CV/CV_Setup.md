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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGXR7TB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDB9saMEHhra9BtmSS7dAyAVat%2FQXlYxK3o2BqpbhPS4AIhAMcsWyxIFNHyGKjkQ8iTLlx3UHnBmhWecSoQIFgqJGdHKv8DCBcQABoMNjM3NDIzMTgzODA1IgzNF3GAe%2BQ4I9aUHjgq3ANZo05xvX5erbm9CwuGuGBviOVlEjogrBoQ88slAXEtDETsPvMCVYPz3oTSiBSIplGjLNZLTDy%2FcfICnBIQ4r9ocAsVPDwdlTzZRzofgn0CSfWUX03MMBi58K6BMRQKgdRJifSXEBm7%2FgaPU%2BNNXaBHnmTfWrJmvB8sd12bew3Y6fmpZKmYZ0iJgKioy2otqS3AuAncF9CU8qmrxEJxuT7kQ75ebT7P1Nm9dUFY%2FgrL8fx%2BPrmXb1jrf4vHLMP57neTTU5LggEcXj3Cac8vB6xoaunACQoAg7TlPmmce8n5v7wyJUmSM2T8VkKKrCdZs6mOPkpKzPHudJCxcUoAlsYeFDeA14W0j5u%2BURM%2FurJtVFyXXSw13r62MiNLVyTS4Io2eYEIxxub7s46qRzWtyDnwC%2FhaG3epn%2BkI6UIREObP4I2tqrlcvE4ft3tLGXFea44uTsKY40PP4skbeIoRPZkMlEi5H9cI6A98m3sL0j5qdEMEPWqiQCpyXOXZUZ0eIvBKpdvyr5XqSBe9Vf0gsl7cbBsgu12Lq7la9zO82GI3iOn7TACHuZVDQbgkIxdcsxZAFu6clOwtrf7KhoIkWq5TjohIlB82CTjm6n7vbBBwoMh719WppuONvHx9zCHu5LBBjqkAXxOb0kAtCIy%2BFFnz7OKnHlVED2JA0LpL6b4tYh5689DaEA7gAKdxNAyCYrTEwcuXJzHRvXBD2LaUXlcZptHPULNw2J0rEwXiiFK%2B2No9hnmSTyMzLnbD%2Fi1OM1PTU11Rl%2F0P%2FrBKVuKLesT70TP%2BIOg%2FP5%2FCnP%2F%2BgJRC6Jjq2vkaH7qgJvwZWvEI0d6rIRoE21oxVMryphIP4g6%2Ba1urvsukVl3&X-Amz-Signature=3b4dca8500f807fea10041b7cc0befce0bd0fe4df0954dbe4ce0c0dfe9b24199&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCPGAMGI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAwN5Ac%2FK%2FelYBMsUIKOhDgOu0BWzFQEJdSNY2we%2FKwpAiBCNKDqf%2B%2FnGPFURU81pz7ybIetwpb9E4F%2BWp%2BpiYS54ir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMN7i%2BfVzL0R8E6%2BjLKtwD4y7r8BMiTg%2B7kX7WTga%2F%2F7zaGIIVXBAD%2FtYNTzGegqpVZjYTxzYPeLjkaaodFU3hy5JsBKWnLVAE6FWugNGJjmq2ZKOsc0bFbEURL8wFdapHIJy4NgWvKf3y6V7HO%2FF4daHerhcUvKiw8A1p7cpt85iyBH9DusZ%2BJ59OwscWGggEjdta0qiFOF%2Fbuv7w8IxXk9odKpmj8T2QNJzYGGQ%2FfPSRTYS8wFHGLE%2FL6zH9P2oLAJmHvkv%2BNG2BHmELzU7k7DLD9IiVJG8uXOmYa0hJxAysFfSftKeqMoD%2FAQOUPFskd7sOdNKHwF%2FL8%2FcZT3M0aNGeIoNg0Cy%2BML6%2Bnupri8bA1yv1merHsrGV10A2mlZ79h3KwvpMaN7vuqVexxF8MDvqLJSQn5VgTGGehA0MzAZo3MvVq%2BnqU8qUrsigPo0HmOgRTacH3XrfWff8aYknt7esaEs56Z8ZTujJQrtdfk9j7buo7z3saN8tGvXUYxkk6T183P8h34M%2B1eqexcHnwFq4xTWSbADbq1DAJ3zFLVTfkoXyvQ9CC1kAVUUYbvutbR5fpfNsoT16e8jsQKdGr8S%2BeRghQGJwHkZWPGJYgdlnsUoGWyY9kKYea%2BmxUfsml8NVFQJg6obCHTkwjbuSwQY6pgGgi9RPeelevKzDAUEb%2B7ys436giH2WIbDfiSxjab1Yxg0aORhk6RVxZLCntoP4JBP9nj7kFMPCCmI%2FVGQhOYWe%2FW89KyrIHpd4zXWQydluufPE6P82OhmU8uIFB8yiOdt2ak%2F8wy0Tgc96l1doPjUktTHneAi0PaDSzZge3invsmfifB7ZsGERKGvARCxp8zXR%2Bt%2F5LVf2q8V7woRgVcmdSlw0dD8x&X-Amz-Signature=b5eb87c7ae238b3e47d5a666073dd23b06bd03487d22dd6f7baa9d7d5e898ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
