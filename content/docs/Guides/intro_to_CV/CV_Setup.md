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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEYYWIE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr2ndkMHg4kvbDklVYKMvyVAKlqRkICpklCOOH5Wvw%2FgIgN3IzH2XbDmiXp4MBVv5KS84paD4ymEDqbwtaweOWD04q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLA73WSC00RmiHhXEircA7waqohTEfK7iRY8NhZk%2Fp5hN6mdKvVLw8KeFk7UgC3KBNpI08%2F7cNoL0mxZFsEpV1KxQNBE4KGCDbx4PflqsfMA1IalKX%2FofHJuOHBnxoLCZf7DGrE%2Feb1x%2BkFZqmlpQTjvdk9PmHmHg08ifTK6z1f1lOlU94uxu4voXA6j6LTAK4dvd5%2BP0kJHcdj1N9jYTHkPSYMwi1axAXIJ6KEQ%2BIShyBEBaKY3HWDN1QwibudRFzmTWQPuvjZJrlhoNWeBYxyoiE8xZoNH5cNO7ogXwgAP8Rg%2BZ4d95VwYA1EzFkC8wviLOur20%2BEvDsynZZ5cGDGxi0WYThHvWCKVVoUNTiULaGDjaFoHDWE7HeNvIH70Qq%2BHPmi26kEDML9IQP0eoRULkH5e6l9MBxKQDlp1HlIDMEOFaI7BlIfUAlxFxp94sT3VlULT20Cl8vtLn4VOvoJICGzesma3CS3%2FIs1NVwYGfu%2BGhtJUbSihJ2zKCriiszXnGVEtdXcUtZ2pKOv%2FI8O%2FSt08MvyyRa2WcKxSta9eYR9ST2f8qHzVLfKHl%2F8TVKy%2FiVDJdiXto%2BRqdDXGUshJ89S8SN%2B%2B86NAetJ3P5V%2FOYazRk0MrX%2BK3L3hzKiTmzpbo2S%2BAJb7cuH0MIrc3L4GOqUBVfQCcg03zGZD7LPyuv%2FJj0fGBGLS9tvSdxoSe%2BrphuBOF9dwojGkooJuK0ZAiRol5olALLsXLudfugNimr1IkVYvfzoFr%2ByzqNMy%2BzjFs1pRL1FXRQk2bQpGQnv115RZws33GNLxrwQ8NLNwjSU8uaXmobRRTSMRX4huhh5BKGfDDD0w7q7Yf95GjYki41JcrvfturwF5gHVdR3DmuPVz1uHEPdb&X-Amz-Signature=77ace9b3f429ae441a5ccac1cfc33f70bf07edb66793b2b7d9cc3f367b3940f5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6VSZG4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu5A%2Ff2%2BNeyOkUtDJKJduY62xLfxxCeKUNJD%2FCwlWIDwIhANo%2FPZVB9j8oMCeGCCUBQIpqAwi%2FEB%2Bfp3EuXJztI3yzKv8DCDUQABoMNjM3NDIzMTgzODA1Igw5hwfEpLuiIPS%2BPgEq3AOdF0QpzzFirS8ho13vwXxENi5cFciXFLrwObjbybKzQrzQtYuPsSnrTADC6Iqs9HwbI9tXDd%2FO%2B5Zkz9jtqmHqOEt27tINCWBclmFxIf%2FQkuBgAcW49La%2FTm8341sQLqFTJtLz4Ae%2BzUnGBlfNQ1Gps5%2BtXgW%2FRrX90rkdXSk7QIGXHAKSSpV1IZPlzZ5L5kQcNgaRpzvHA5XR738BcCnt29CwK8UlR%2BARGcxJF8l3CFHsmZvetHAFbxjIg7CZFuV447INzIED0nYNaMEXbeiW6TdcxeYX3mgIDBEefndT8ieSkrJxvCZN2k1b2u13dWMJWOKkFzMnO5ePUbFjPIC1POnA3kR5ERwDAnkIJgN0y4WVuJR7juX2eggf1C52tt68nddVeFk12c7fIItTrdxkpcpJAUWSOqDRsvTSzmJvZDPHhcFJtSn2XBgR9cvjSK6FgGe%2FyDm2CcfHVBgn8Udz%2BAVYLa2qWb9mOZ0ikUFjtMRI7jUzeE9cXLc3bXP%2FL5PPsGrCPxKd3bK4ZvGw6hm4MVdvFAEh%2FtzfHWSW3PGA10NQyBlwp%2BBiLmY4Bipwi8IjFO3OWjxwdRRLU7aUZMeRBEvXGznp8kn4jS1TBz3Gwt%2FOPbIn0EVoBVqjxjCD3Ny%2BBjqkAWKVz5Kemc%2FRC%2Fl810QezLVVMY%2BuBTYjMX99QN9PYagU%2BvLNaFsAQzbFpqlVsqp3aeDRvCQT%2FojGRwL8yFFlhl29wPNRmsgHxB3fe0lCkzSa4b5PdxVGMQ92kt9U0Ck2vcFrM4lCSqWWVawLE11buLAdngGSz7oTSxuvHLPPigyYanuedPFIP7tbisE9Y8p8Qyl0OsIXHG0xWMneglQYqbMo1pbn&X-Amz-Signature=3421c57d11acfec5c6f69e29bc12c7c8f51db39f4f78cc359e3b046a58f975ec&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
