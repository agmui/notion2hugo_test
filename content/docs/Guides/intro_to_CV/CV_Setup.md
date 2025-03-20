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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YFKLTHP%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC2mnXBEpXr4yDv1GDtTCifbNo8bM5A9e%2FtqC1%2FB4MqqgIhAMBc2cFMD1v0mryIPM6UgeFxz7h5cfXOiJW50YZivdunKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOUFzwmpr1zoxGyHMq3AOwckinpO4OGOi0W2lGbKma3LADBDYObZ4XDhYzoESlEL%2FTnLylfnAH1fjJwzxUaHoyTfUQ8PXOw6QBMQbb5WbshT%2B4L5%2BI34L55jrRU04km0iFqCiqOMsjzFTsyYjNKai1Np3G7z2eVCIsqqvR41mwOf584Hqcf6McbyoIBOd1ohnUDUuwSsjNB4YK7cyXwfrHXMSdow9bGi%2FKLOR8tPxfIvaFZonQ%2BAMu73H2X1tihBRt7bbOE%2FZGfD65j34jsyK4s6NiXu4jKXiTM433r6qh7eRAZ2Z6XBhVA6ikDlgMIMgfvnoTvDhQXnNrS2MWLRJuNxRSR6TgMAFAfmlNhykYUgn5yWJkwB9MLk7YvTIbAHQjCCFdxIU0ZSKuIDK9Vg54nRycOjbZH0UOTxdutiNUjYAGqedr7HQac3WHQk%2Fl1Hj94%2FkxCYE4ioy9qNc9b%2BZ9EPEx0Tt9x0ONqi7BYi4qo2WnF0Z524HtO6HBdDutnOQlORZ%2FvWywsfYxLu42SbTLLCHU8xweoYk%2B5pk6zOqN3WrplFQlpUqCJYQAqt4gAdDC3LP2rg4cE6utQtDjHUR%2Fl3LpWGkXGBVQ3%2Fg0nHish%2Bf2IxtyVOgjN7ExCRmYc0Hl0akUt%2FkGdoWDEzDApfC%2BBjqkAUn0B9nl4DYprj9BqsW2g49215DlUW7QxqXfvvwg%2FP4KZVqc%2BV%2Ff%2F8alHzf5IDRvxAWHetI%2FkdlPQgXfi%2B3zD9d6j6n8gN2TSGhJ8JcWm6%2BKSCceRb4auLyFs4PjPTWvkle79zaQdTDrgEf4OI7TLU1npi2IRUz1rzwiMe8e0umIMpxVXZXIjp5EgZ6Fc7Ijw90iB0gd6Qb3gOT0dKKLPtNhr0wv&X-Amz-Signature=f156f1ec1da81b5c1388ea22f61638cbf79f709ab9a5d5366a976a481bfe5cc3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4E2F27Z%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDKv8PJWK2iE%2F63AxRtG7dnKg%2BTJkkMjTmiBGT80w05TgIgQ1vtXavJeOeHOK6ia5ra89GDn0R5PIYf15OhUw1%2BwkAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYCB0RBuhi1G2LqsCrcA%2BPX7%2BYa3YZAvrxhDl0a3Wzs1Zu0xJb3GoLvjQNBIPjj7b0GhyqXU1UGyKwxLa6VD05nBGljdYCaS2fGTpKxgTqy6vYS2jnc5rMdJiZAwVIvsCWlUhzaTyTlBn%2FKeqXiwrWAxGs8gryGmScHAFjBZSnWBzOuFqhEOFQQ1IGc%2F2dBEjy1kH4xaYLzVdmutpvRexqs8%2FoPB2a4tcLg9oxt7ntGJaRUYTK4d5ZHnABqY%2FM46Ido%2Bt%2BY73mlvKHLdw8oBnciyqaqJXw5NlBejRiavNWrWdl913ee83GYj5juAA%2BQjY3qdbqCi60uW5sum3s09W%2BHKsN0TrxcO3YAU9JBoNeJCzqzuwCUUaDavVsJdPAlXCdHCmtZqRFiTb8VlBmiE3%2Fh1WeFuyLkVPeBN6y%2B3%2F36RtV7dfcx0B5mU6k7swjwu4IL%2FQ0wBZA09hWZtiW12HJ3pRtxmbs6t5I7RH8PZmwTNmB0DCbqd%2BqWzyiHGvd0Ogs6Q%2FUHkiPWjIeq%2BMNw8jtYbC4gf1aL6hg%2B%2Blvdie9aAORS%2B6gYV4WDtprG0%2BZyOwbAPBqXhpfBgMqOq83Yg63oV6UPj%2BOQZ5vsPnsnpqYtBijQRV7OQcp0Fg4CfVPnpo%2BiRF5UsyVY7RxtMLCm8L4GOqUBnlmgOuzW%2FUelBcHNZzWpOj3F9QVuEO0jqzlJobIpUf0DrN3sXnUEUJ8oJ0kHEFTeaTu2C84bnMeRcAfU5Ff%2B66aHjRJsyMF2utnhoZsKB%2BxE9HGlY180cUnWwJtQQoqs1TGbZZQ6Shw8d29p9QTjJ%2FGN6Z3uLy47ta6G2aUBNtwZYGnwrZPzp9kjDtee6eIDen2nYYeAy%2FD3rCyXCM4Dn9iXhgnb&X-Amz-Signature=443fee6d3aad12bf8087ef00e35a01fab55cc5dfa296a550e9304bb038078e96&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
