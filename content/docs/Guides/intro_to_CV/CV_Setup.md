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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7CMNVT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCDL1ji37R6Piy%2F0fE9fM1y8hG5gMpRamZkWamOt5LI9wIhAMPNJMxe2kxIVAC%2FWMBgN3WQmJwLRL%2BFIzdltIjI0TP0Kv8DCCYQABoMNjM3NDIzMTgzODA1Igzb7f8PHh0FgH%2BEN4Uq3AN1wmgD2aeoDk80agc0F1ban9u9%2Bi%2B6dODIR%2FGtBIWckSPqcipuV1Q2y1FpVVxt0u%2BtD3xgyTThif0kzjOo3k7xrQrUY64mpwRC%2BM7uvknP%2BCQsNup970xcf%2BX4rKi%2Bv%2Fbf0jrzWjQdsbN8L8hNSplbKeAyjNrOd6OquZJ9coEtuC7vTfU4dP4olvqaKRwbUk2RpgSxdyBefNogBconOacV43ATD%2B0uKdHzeun7hWZRJsp4YUi4m10uQYQ1ITcsevP5fbfzfDsuUSMbjk%2FQg%2BoGbEJ4IlSni4Oua%2Bd%2F8tp0zV80rG6v9gGrUWa1t6wkpHAKf%2FaSGFHzIz%2F2yzXcenkTLWYqsZUqY1Lj5pF7t3F7HuAUtcl9j715z6iFXsKCSbAfr%2F5WUjOoK7NsMf5Odst7jw4yOZK0RamlGTIv%2Fh58qXwKTL0xFckJw%2BhiXjiJBk2rH3DFD7KCYulKE3IvMzEg6l6kmlv4JgNqYlzIwBVi7oNbP6qB9Czir%2FTt%2FGbjeqmBTxPThXEx7nZsag4EC2dQqwGqtR7j6FapuJW4phIHjqluvajEGECZJlsR5X7snWHW8N%2FE%2B8GEh4oxZYtYar3xM6V%2Fnv%2Fs7XwvEOCUPuLZelInVlSZe5Z3NMfszTDjv4a9BjqkASxE81tO8jEtCPh8PaU55QvmeZDbzor2PFmmwDe00yvR9W5pLquJ0QnjuSmE7nZ38vrahF9ueW1s3YWjHGcOV3lJj0k6RiNiJOtZeuLawO0VEXuUHcGt83nouAu56JKLjN%2F8cLRrgiYZCSQCpoPqiNQHKexknhmPyKzSvq4LwEqoSDBvMeLDDHY2p7IuoJ%2FJ3LagSH75KPFNYOyWzgA9rqTDqEGG&X-Amz-Signature=1d961c33b32d16e5183c0839630ab6d31e7478ab3c88bf47375406f1903a6b1b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIZ74D6P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCG7uvJtFnIO20dqRNir6q07BjWJCfHQj4pwPm2Gc5AyAIgGeYlar1%2B7BjUCsAkBOwPPyuqsW0o0pFUS7DkaxWiAH8q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJ7%2BD8nshEQ9PFeqiyrcA5l7EQ%2Bl%2BlTwYcf6%2B7RFB9GRWesNL196QZVzpfXIfw3hQ0BBd%2Ftont7u5FEvq2Ydw2iP60ROC3wW6YTPzh7EIjv22PcEQILXCBXLRFwGnGvFQwXqLMr6J%2FklTUzyHkcm1zlM9lTF%2BxdnAJiEF9dqfzG2hMbnBEMBDCnqwGNUNAVt5OBx5Z9eJzpluzlA1hgUzFrbDYKmnewpt9VrON0Gu%2Fs8w%2BJF%2FJ%2BBHOUfRKqG3E3Yk%2FYxJToJ6YKZy9L77xan3rlvOZtPFiHGkjQRkUIifkMrSDEaw6G5GmN7kL1qlQhK5XAdBTtm6VJ%2FNwlssPUGKp0p2IBEOvrYWcvN%2FKSAEyvRvlqwJzI01mI%2FHqDPRKWKKKDGOLeUAiF3vdBTfmI0%2B61ll7s7KtLZjp26EFfqbFD2M8A4j%2FJcnhgmKMnRQyYAX72HeyEM1%2B5Cy4N9jR82QkMqgM2PkecNdjOVBxSRt%2FVFO8ADRYLye5VmadOoiDhkThfaXbFTarj9Vj9%2BHQF%2BuV2LAFPYOpCrhCYW2tEWJi8hE%2BAmXo45pCn%2F7gxmv2aN206aDV8VnCH1C7jenl5L1u4ScbRETyFV2Q0LAYDiGjEBpzIJ12o4xteSMGY%2FHnT%2BuGbWIrTY8eDuunLDMPW%2Fhr0GOqUBh3Xoe%2F3V3aqLGAgmYJaLnGij%2FBoG8wvi82yoi0A3bpILZ4JewGgy%2BGyM%2FGsOo9DgnN0G7T6RkjiRA7njZnUNeG2DCkr%2BHdUJIVnXFYjIqG%2BBApjUk3ImR4T%2Fq3%2FwnU213ra1ONPUqD5kWqCsX4gL0BuLQFz%2FucoQVhRLEJQldOHvNrNgYq8EhrEfBtAspOHC%2BufXouBuq6rx3rZ%2B%2BJZzIfzEb4JH&X-Amz-Signature=b514872583dec279f928a404d6104293a561840de0b869d347e3c6d824dbe46f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
