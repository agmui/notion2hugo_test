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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3FVQQU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDTm0hN1b3qBHOrtFz%2FbmVNz%2B5ebyjX1rNZJy2NWTj6CAIgaiVj3M0adppN7t4Jn8FukmDvjb4ryuLiR1Ta86PwN2wq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKBWRp9PaXkTbXpZ2yrcA6Lr6BtUCuzudLMbGTlJSllg8TKs45npg4uzCTte%2Bdzpe2oWTm2f3rjFyKui5nk4R9TBVWByf9H0V9wWo0bVWkRhZE59gQJUTovMGizUcqyhBc06DM4USGJaGG1MT8hNi5wQ1PqY6TTuqihbZ%2BsPxhpgqSTj4pLoS4gHi4%2FhaUmfLu9WiBu0oB1KAiX8tVQlGtPZxmsq3l5qM5kp%2BwOTMkUUe%2FYD3xpycoPG6HQ4%2F%2BJ2KTaHrhrXO9dNnFXyzAdRXkWIeGlS3dmGnZ3eqTJR3upNbeZvI0wfcHpUyZBuURxOE%2FGRph7q0m8ZTFvEeUL9O1%2FGYetP%2F6TmaQCHxL497Z1%2BZ689qNGdr0l36Z%2B7SoLzXvlXoVFJhms3Ipo3qS1fREhvs1ODPDgHW9EBFxENzmRpEk9I%2B%2BPw5J%2FRusoT95jUOhJI%2B8QD1HOrztSll7rXg%2FXP2VfuSUJXaXTM5e1U4%2B5nSUlzE2UK4Oof%2FBM2n9tr42whYrfg3u74fNjDEHsACq9nugZJb%2BVFTYqTXRnHtORHzqljJL2DMvn1X%2F9J9EKIWcOZ7jrAr0tc%2F9m%2Fpp2W6FpKhI%2FAlzaVnQlh4wvQELKBZA7p84zN8CL7G4a293RZNpUNdgNrQUV8YG9eMIGVv70GOqUBPEJDNt0NhUzY1hvIH3W6aEwOD3MPOL5aRbYpTzKsX1Lz0UDRkSs5LFOO9Z2u%2BhySLLDm56Ru049vymTeJkvB83lXnXZtdCJ4cWT5cDtfQXFKKY7pA13lqE54iNB1yyWQgYfppmN1jklBpFQY0fGBrVYEwYwkxQn6hjYs1NI9Te8%2BoZZ8WRx36TOcJ%2FwLpTeNAX%2B1ClDn7bE2Z9UfJcAXeOVK33Ke&X-Amz-Signature=ce9af5e83faeae69a8bdc89c5596ca3c6ca73cf108a25fbbafa5d81301b49608&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZS2MQR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIC4%2BGuPfsVUPpLv12rDnM7KtxO2z3MUHMmysJuCG2gsLAiAdB87NPqieFX9EhM52FaoxpGpW4ZtE2qaBu1%2F4m5Wb8Cr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMIFbf53Og2uQNqB9JKtwDgSOAxXWnuY5VgGpY3U%2BXXEpThdVZXlP%2F7a4Wd6UacdueT%2FmUk%2FxVEKPb5nhAOndIIb%2BhGbxRGvYLZGrHFqpdHQQpIUddlgg0rcWNWydhokRP6gGCDxn%2BzynsAnfGX483B4rlkK8Lw0n511EmY287mSVqcEqytpmEszmEjX%2BksX2lbPXdF3wwESnFGvgKeWgN4nMulhZmkYbV5fbRRw36QbnHie6DUWNxJEF3X7%2BWZc1J%2F3PCZXaPC4q9qz3FEHNKN5jE4tBsfTej4CQLrpY3oxxxxY%2FRcAeMqBwKGwYVnC3V3u6fems3TXEdJcIxahkDy6jWuPfnPP3bhUDDDsXd%2B8f3ht9%2BRZ%2F7U0NL4deZGONuYv9WswXMT3wyUKRaBt%2Bdn%2BmfCSKGp6q5b6GsW8hT%2F29tCVQA10IxHVvi34w0Kr9kD%2BzsT4UfjLvvLAmJhMCUoB4TL6ffSsCeZXiZS6Nb9HBVRp85SUooYtwldjBn9Ydc5e0k%2FR3g9Bly%2F%2B%2BUjrptPyDA5%2Fya%2FUmi42kxIKMQYq2d3%2F6RHXISwZqH2HPpyHz5J3%2FGfyMhfGuTjO5ELEBgNHWNk5cwh%2B4Wbty76CDTMOM%2BKrNpykSO%2BeEAu7Dar2oiOoqcSi0HHu30CGsw6pS%2FvQY6pgGeB%2FgiAk3X%2FbkwnnPBDCailT2PJJMTsdM5Va7scnEDohIJvTB0xwmsNYGKftywb5Qm7iyoiUtEI07HbvPirtGQ%2FO%2FmhOecZdezAW1qWa50RjzSC%2BxJOSnQ7mT0eVa%2BmDB9hHq9kjI3KTLqzzraNQJRwk0R%2F17XPrSCEnmtLsxJi56OKRqvDu3sdeSO285JmhRPelYng%2BjCXHnkS3rlWcg4ndn0QNwq&X-Amz-Signature=079e4cae2ff8a7a95960ce0994ed944be7856c5b4590604c80868f415aa1c171&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
