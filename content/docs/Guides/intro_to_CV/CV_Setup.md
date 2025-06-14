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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJSV5RG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDs8uP18f%2B446SMOciJTyua%2FXc%2Bfmog2lYhTSqRDhE1XAIgQPb9swdOLfBEMJDaatV2H9RpCoaIqskI72x2JtdAjjUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCYEhAU945%2BxRvkpmyrcA9AQY13bl4Ke4dm3ZBYQSv5JV9Hp%2FZ7x13dCaoI68jW%2FiMuZ40JFVexI8c1Yiw3JUEKvjhnyenfSRjQR%2FRGxGrVq9kxsME8ltjj1vAI%2FgJIDipxm34div4yjYoJyk0of9bS6Ke0AtgfYmmoA9ncjsWzzxHQ6Fi9Fku3MGxERtz2r2U6Xm9SOsu8xa3j4aTMZtUBhsLomcSC6dOm99d1b1EiO86k5m2cgBwt4c4FhBbX2eEPd2Z6W29cFJ326wdiwq7d0DBAgciSo1h4knAHfzzunBFjVwKffSXsAHOikD9qE0YOgB0HtLSJlcfwK0vQ07vNFx81OXWFEatpO%2FJWqlTvN3yoW9OW80%2FVBAsGXJCxXx2LAp6aCh7ESyomlhfsQ%2FH0tX3lPaMATX5aZWj9DLE8MLI8T%2FIdIy8DLFUx1%2By08%2BqYQiFgYutziEK1cCfwA4uBvUfGuUwCfmA0uNZ0MSi%2FCQvfhfLXg3ugAY2ewMA2MFVlvQUMZ8cUQgepAU4OW49iMwZmP9cRrCcgzZBLIUM9Jj7ZdasvawKMF0CEV4OI%2BUBATtLPWKduAO27IWopTjTUeZnuJFWhbRFgjCilb7gedxxV3iLkrC8kANYGaPVELKxQmjERHFVH2jKGoMMSkt8IGOqUBuFHt1VkwpaZQ4XgnzI3L2%2BPh6UsoqiMnRFoumM%2FvmXkDHFqcaai8AXsZft6D8wST72xX8TyElr8qWMxdWtMAbP4H%2BgEsrLPHycEv0p7b4ntJLX6xLSVxxlGYrZw952ViLWNRIDlIFlC1%2B5nhTOIF%2BxOyszWeL10TpooqHmkOdqy8eQSAE6KxTBW863KnHvUPjZD4z4u1dg1yBro1KGOT1sBDsQT1&X-Amz-Signature=975254461d3bdea9d904fa14a47452c05f722455f87feb1346dba002c952c8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP44PXCL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCDYRb05JmMBx29eZYybGOXkm33zbiLWce56G2Xzdy9LAIgfTIEIx9StBhokoQLJtG2i8v%2BwIBjCpDV55svz28WHGsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA86%2B81D6eAoYfJ9QyrcAwfXCjwOU54UHY9QJg%2Fhexxnrl0kFQkrj89oMKKa9fr9XJS1VkcNVebwDQ3Dh9QJR1B7hqDI9GVULlByF95SHi%2FPc7Yw%2BnWviNC6TOunWRcBgObTnmwAUbegsUG4iDxJ6h06px8yP6gKI%2Fl%2BexWdplAEjKapyA3MnfK1hy27Zog%2BGTVtDTSZAwXEOTT9KvZ1akTKV9Zy5Bs59r2cxFcEpEcAT%2FVHwrDU7PpQQ6YZnT75b8I7ETH5R6v7c8vecrnAYre5aPkDdmi6vO%2FBV4IVLAgdYwze%2FUu16uqs88crziWaj6tv%2FcW238kLEkDEe2rt%2FKg2Bb0TeeqN8JP%2BNIzoIDQ5WH7irgpaw8XOWcNeK1KdvXsfnTLiBZAgJMVs68RRge79enMRHtY93khl%2BmhTi93v9QXq8tZvgZm1W7iqqtb%2FfvbfUW1zN4BOaFRXT2KbkNaV8iCaI8kiIERu%2FMEXRWVBEzRxiHX2hxdWDPSB17dSGwBTg0EIrFD%2BXbcOMVJ96EpgATxU9wBRFdxIg%2FkQUKZMt4PtB189flO8JrcvdCrSdLfWv3cFvNpJJm%2Bi0w3vvu%2FAeZIdcbIKOMCm9sfQ2ZukcOjIN5%2FNeYWEmBOfVmukeAF0QGH8Ennx7vJvMLukt8IGOqUBNxsic9OQrNYn50AEEGsDzHbgK0rTUr66ABKxSWBIoYzg%2FI8EPBGaKW5yF3e4mA9Ap%2F23BTgjm9muHLi32gJPejhhdLSGgrg8ieCxdXa6LCxzZojvjHOW9rJ22aXVgO90VhsfYN%2FT4jKTsQPj3C9GIEHGY0rw0LHxx0FvkHrG%2BKYpLNWOD2ENED2s%2FfhBcvh7uRrCq4ZGgi9nKQ7G%2B2NIsoueBjLZ&X-Amz-Signature=ff12f419f868afd191c3554fd320a3033e67b223a5ef381df6b7eddec5513df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
