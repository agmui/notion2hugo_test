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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBKA57Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCKenGB6yyu74gAL0cx9Ca5dtyj%2B%2BW4sYV7LdkU8qdCGwIhAIA4sj8GBR61ehBf8qnMXw2ILWr%2FC39AEnEQdwNJ%2BlbPKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7QyGeJOW8tHdDl1Qq3AO3L0Miiq0CY4Qc3%2FMNBMirCgMiCs59JwMdHJqp0yna1w0tjgUYJh%2BwRv8o3RImAsiJ479G12vA2QygcbIVTFKBtmBtGN5aX6ocDHmhIHnjr1g1O7EOCQXQLnPngxrcjaSrPGPN2WLjDiWt9l9NGVRrtpZ99kP98jiHIODfdf7I%2FR0L1QHK9zOdLAk2ni9xbAHAVe%2FPl%2FTFZlRfGMFnjAQSnNiFMnSryn%2B8usUtl0e1zpqwi861LJE21Gz77iFyGeXju4Q5A9rtYnUWqd%2FBrcRY0NskTqT59W9tcseKNQaEOGJKgCT8uPlq0h%2Fv5ghmDwjCFrW3z5EiRLNlNCuWUxJx4L0w%2BFgQIEnkaueRpkawfmcmOWXpmOTsXALi9a8lEoMIR4ddH%2FTMSJOB7z%2BgOOuDOMqNEUw98OFw7YaJ26veS5GXin7cqLhEafr3YoBn3hbZngDAj%2FOlhNHCb61LhaCS0ijgkk3pBQA9cRdhLKViKRKP%2BXU7XG%2Bz8skzthiBzrswo7IU6ciQf8x2YELoPLjddktwVCoNZuJhBr7g35%2BbA8YwORYYMUiqmUT9QtRrhequ2nFqr8M3hodxajSZwvgnGIwBUjc79lOEgatnJw%2FFd%2B9FIx1owqAogNjXRzD18ZvABjqkATCVc%2BJgxOXQM2Am6kv3QNhHNANeSj2BJ1R3Dx0p3APkbgfoFupI2YqQ6W0gGS0Ru3DywZM6ub%2FnYSP8r5%2FM8SebI8%2BGvSOtAkLOxssYGhxifweeOalK%2BylTQDH1cs1Ayjw%2FZ52cDtESPoiKPrVXL5lZFrwyWdi0HNLImNJ4n8k5Lm%2FjYFIxDsD%2FyoQay4BEcIgzAi8RM%2BKOg6TDz1EHMLjXFQF%2F&X-Amz-Signature=7279fba3343948513a366fe3eaa6be20e19647843b4d103343ef544440636719&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JQVKLB%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDUF2QVxFvkOAu%2FdLCGFcC15rno3bHaQlnxQcKVfnSC0QIhAIGZNf%2F%2BsyweJVlTAda4yFPH1JFu24djXYGX3iWL4tdAKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2gY%2BBSDc9MPmruMIq3APrpoChCdxQ77yALRGzHhu4c7OgN5HuGcPS0J3CD6DiYb6LnnRwaoijbrKMDcAJX2ZvCeD2QpR2f0XMaQ5TsuaAl%2BhXG4dhP5wWl9GgUr2o3ryyoAtFcq3RgpwTzmabEZFJtX3Ja8LvLO%2BxquORAbNsGirHbOL9pcd9ogLeF9nIOeGheLmZDEMc%2FrR1tG%2B%2Bo1xvUP%2BK05X0qhvmxJv%2BOY6OMt8IXiTGToltGAa%2BSSnL2O725tAthnwQ2OZaF19Q1d1SVloSZPJ%2F8hAM3cjCov4wkUmL4bDS4iACuQVbbWRFdR%2FJ0U8EktvQk%2F616i1mOObeRNvN1J6B1S9GG3t2sVKsto6YaF8ZSdeK7KpMCF90ER54Jqiah59rGZLK2uLScRidC4oc9X7vipUBPLGASL2pFE8zgN%2FQu0IJltB1qSTYN1eZT%2BNwmfD2P8ZAPJryOzwn9uvsD1lBeIClbaPgaya2ndRrQsggo3NG4lZpa2YWvJFYRoCQvEz0usZFEZWzMV0a5bNlsa4pwtqRqTOACkev3fvAwG%2BV6Ty%2FdG%2Fruo7gy3XVCEnujcZWVmDFc8QiX2doZoH7mieOsNPJLipOSrTYc4tnVUDT3NBI0%2Fsr2PcnFJ5l38PPyq5YUbNxUjC28JvABjqkAXxxwE08RZp%2F1NmnSHcCLNXX5frYUzGEVLvYKQTRM0zo3Sqo1322%2B2ZYxuqEIp%2FoBeIiS9unWu25Ji9aDRgnbbrlOz5ZqqUD7OB67WV6sSsmz9UeJVfHed78Dt22NMH%2FTBefu4hlM15ltEDijD3r7Eh1Is8A1V1%2B1AY%2F%2FO2goFaXDNN07feo5JLer4yuGwcydps2iUd9oDAUk2cye9uAdhlwh8P4&X-Amz-Signature=a1af7214eef0e7baa7d31cd333cebe23eb4bb692120f08b4c4b69ccbed518e06&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
