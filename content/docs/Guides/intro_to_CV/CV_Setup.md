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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CV75CAS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo4kSE4A4ClWhTcPmrYf6xofFXWdFS07ObPIt0JtSjWwIhAIsPv%2BHLG0M7hxp35SJDYE6esPSw2%2Bgj8EX%2FZ6lsmYvVKv8DCCMQABoMNjM3NDIzMTgzODA1IgzIok9DpaKm53%2FlPucq3AMJbth2iyzypDJRtIGr7Rk1tarDWv5McIwLTqd1cSYWdmYg6WnQuKMAgusxO%2FgIcHon%2B7ecLV4neEOCxsI%2BRBZG0uQx%2BlGgN7OMSD4XgqjR5ShAd0CDig2TB1O%2B1omtHpEcoP7ki5AGQcQrs8jtBiYW4SbsZ%2FadmemP67QgA7xwqeI1ct9cJNMDN%2Bf9tmSphXKKFk1Txbvt9U87IWDLneMaaGDv9dZ0GL9fPmnBYjFZi2dk2UfIHMtzUY%2B0mdhTEAxbtRTVImbJ8s%2FoGKgrnpy6OFB3IHOwK0Ty8p3F5TPPqqMtl6N1yI9TllAwgej1OWiy0Rid3NmEJEtI5kt%2BG9HriffQ4QV%2B5yUx9E1AmCG1OYgaS4fhP5sj2o5uuADS2w22CplDGnXa4IaZD0L%2FOJYj5zbpcC8bRyI8IRE08oHBdBIzv1AkOfy3REt%2FFG9sF2MhYP3HB4kldASsIJk7PPEX6haiXjflbogm7ldPy62VigJlNmH808HPlbn5iP2G7iuw4qNAcAtMEW8KR6ph0vhv6wp7pPz%2Blr9RjQ0DbX%2FIXtdp9lSj%2B3prvz6G4%2FaFtq6ROe3Ei0eIKvI2lopG2Hub8iPEbT3S7eEJgGXE983IMVGgm5L%2BIMMb%2BUSjTTDW36vABjqkAT4aUJY5SOjUL3JuEhEJ4ME9RlSfeBeaFrU6VMZu62y1Bi5ujA1g8dIx7a9VcnNOlxOoYyemamQ5LiXPLaRlPp0xpJt1Ivs2j4Z4KomY%2BSvAoYiRvdqL1XzswZpRcuDeh5ZDf6QYMdv9iCXqpeJteeYjBabnJxP7ODRklGMR%2BEliiw2dWIcZn0glJ0XEkmVvWczcIjaTw1%2B0p3LLe%2BCi3e2unr5d&X-Amz-Signature=9dcfda448faedba8b212984ccb7c9dbd23e1283eacda4deab9b19d892db4443f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IFALFIZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAP9ikIkFDp2Ze6r5VfeLOtTnP%2FyV9SJ6o9K5UdfYEmRAiAbu1L66KYdZEUSku46YHWcsS0Nq%2BCnINKWf8Xz%2BQvhmyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMdkAVmIkjTcGowmJGKtwDnjssJID2lOWXCl5GuRB0AjmMAD5iV1WXd24YEg9RxdoFY5ih46B%2FAOcmrha9tUBkmsveQZ89CP0xi0QSHng0npAYaSIjNoljW0fwe8qezalVpEWIsiHDgVulxipjln5N1y97Nwj0rK%2FGEc9qdu0uiORAgGx1vYQ4fa91A4sJK6raVcXhjEsws1FzbA07a7pWzkRuCDn5zvlVb3QgM3HV2mTgAYng4W103UMxRNuxauSDu39yKdHlS8MBpD2%2BonVfIlTsqIsGzGM6%2BoY2KdkqilhXA01w0%2FvIXme7iM9%2F7slyjaKcmMGAgy%2FoIroTsGRb5JEE1bfK2C%2FUaP7KuNQk0qliKVpVM7owWdf9bg6YKa3JPO%2BT8Q0u6VqCi%2FxarBBYPbreC47tuVi%2BLx4%2BqR0bkvlE07oHt%2BCXdxandcqaA%2BuWispWE%2BCHKKHPJmp1rFtGRb5S%2F1OMtP%2Bu%2Bn9pJsTRHsS85hFwPGyanXT%2Bfmu3nFFF5juILq7Jjin7UYLzNRGg1GDQfQosMCQVeKCtrmfze5miIBUhfgWiUQi82BU1rWuzh%2BnDCbMIGXKyOLnFhXEecEDFsBBd%2ByFwSru8GHo7zq%2BP0Ghh%2FMdbP9iL3X2Svu%2B8ksAgD6VIEVGChawwueCrwAY6pgHgTC7ZujA6aoGIt5rbaEeRFRKlCfssndLam0j1gaPA1NNFGRHeegDieXLkAV0nOx4%2F%2Bawe%2BFObPO%2Fe65BLk%2FJFcflFnectY9S2HA5EspRPdYBX3JXc3wU%2Bo%2Bouskf9KyCgH7cWnU6UJVbV2ElEowGJwntqTVFGdDvmr8qhRa5hi4KBFAFCO8K7vjqo3nGEWGuBjIx0wNOqnMVHYqjl8CrTJZuHTR5D&X-Amz-Signature=c434a95f839b74975f2e6af8920197c989ab7301076c05708d0e90b5753e3bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
