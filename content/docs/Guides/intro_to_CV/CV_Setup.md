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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE53LHAG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHEyvO07%2B%2FxUEnSHHtqLgTxLgH0jXmjxZ64EKyXUr0GFAiBNt%2BpvmN7fljoXgr4uIDQ7yS0qm%2BRdzbw8EgenbZts1yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMQrs6q09bOwJYf7PVKtwDra4CFKttkuNmW7pV8M21fkUgCEH5hMAxoaFlsCBnOMP05FntJNPDaoWiYTr1ptTtWEPCsFiRVzDmVNhXSUYOp1K8jk811GHOnv0QVB504CRzaYifZfWC6j%2FRv%2Fh3wEZwkq1ovEVyJVzM1vrPlh5DmKuUOUR1g9tfK1xSwSHJnl7YlOUgAOVaExJP54DW22KT3hE0z3iY9%2Be04ydgBAP7XGhfhMHzv5HJTS2UBHNArI%2BaMrtGuPYb4Z0pDMin0wEo75ipUuc6eazPeKHFjTwwi4hEuyLp8WwiDYmj4wTDkyAS9dkPfbzUyXqIc7acDPkE0lAXgQYxhEA8N9pMqdVIew%2BICBEU11QHIYa72eAKXLGxGpIA01k4hf6xflnxTNGAEWTcYTSiL%2Fuu%2BNbNqtuAxK7XI%2BTKnDo4Fd3IRjbycUmt%2BHjE1oI6qZmNitoAAba2pRttQCnUV45JjIBcYsqgoCcrL1EMbEZ%2FQT%2Ft2U3pBGZJ5gsRa1CuAbSwpvUTrR8bK8mrYo%2BxWiCuV7wve2ssfvu0K%2FYeejWQ%2BvWzHXE5z9tTYJbbLB%2BZuJ8cuDny%2F3X%2B9uvm6vBhzM%2F6zZVgjEkJutQ00VkwkcDEuOEWAafA9P40JrCKon9P8qygCNcw3%2F3FvQY6pgHzEfcK0VLrxTt%2Fb7x3wq5VSgVx9GEEOKBoTRNPwhRVjRgrBu9MRGoEL%2Ftrkuu80TQxar7ZWAIHD6Luk%2B10GG7DJjAJn9DDy5gsXN1HuUlSmEz%2FiKO3usdVdMfpODIrrN%2FzPu4yV4zjvQEMA41uELF9Rn64Rk%2Fle2jWqhIzkW3tMea62TTP1Jwk1%2FXiq64%2F6E0Y2gPyseTycsw%2FCtymK9xzpAPq2SyZ&X-Amz-Signature=a37a5ccfba3393390d4926224afe82e7d57f9e3ec0ed936acac5169ba70a90b8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSBJXQ5S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDqUnegS7A%2BQMJUkrmpyeyNjIUtVBA4VZ5a8%2F40e00NkAIhANNcEl3k%2FElii99Z83qw1kj1ReDSRokxVruGv7lc7Ew%2BKv8DCFcQABoMNjM3NDIzMTgzODA1IgxeBzcSDrYiw54B8SAq3ANDAnx0RnZnBoJeWDgii0XsFwmEges2Z5NAguwduQtWKvc5e0MgN5djhyB2ycmDuJ28LiUzY4%2FFI2t%2B7gfXFaPqa0n4j%2BNJuqW1MMI%2BUJjIdev9YOCGtDHyaKO7te6aTN8E%2BJ0O3b0S%2FimcYlJmuJWqKasmrexynofi4GkI6vvzFiJF1VV8ALazZR2Z7OMyJLG0U1%2B8YqV6PiJgiN9FUfqhjeUX2I5qqv6u1qkkk6esiwfFX5XMfNaXv1SpD7zsPUDltKZk%2FcwPIZzdWp4Hsojpxa1RKW2B3c6yGmsF7giCQgLdMkW8oFx1MwSkWlJHg7MEFHCGp8xts4m9cKcrCvmuq1lqZALNjW42tfkFBKF%2B0AWHQzE8W74la3ySgGmosW%2F32VPl3GQ30mNy3G%2FLdcJcFAb6A5C8aZPMG25i62cC7V9PducfFljKcrHdSQqrqO6AGk2MjJjQRUpUtjIFzFX57ndsEtAPbeMSS4M8dD5UM7DeoapGrAUj44kl6EMGBR7c3zaLxPOUc2Csij4QxRJZvdhPS0qY9jj848HYp2HietkzhJgVrtd22RZWaNzwXUfk%2B0P3SjjvtvurRCJmATrdiNci7HzJQW1CDeLarnikbk5%2BrSK2Tr%2Bbo9R0KTCg%2FsW9BjqkAXmsZK%2Fkq%2FIz9XkfFo9e%2BnjLa%2FMOlxAgqCDxaC6mDJDekIb5IqBDrVijyShDE4zBae2kNx7FraApOOwU2aSNE92a1aOkIs1s8235eosW30TYmdx7bdXbv4Oa3swvpBvkXlTlhb%2F7zCEIeSfBYL6NjZFD3YsLx6QJ%2B2ORIitu6%2BoLcshsCaYrNmUp2B9fu21dwdC6776s0X2WVGaIa78BfUqCnzOl&X-Amz-Signature=eebf8b525f7c00ebdd4378d180853a11e26dbbe1cc6f122d0135567a74fdc5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
