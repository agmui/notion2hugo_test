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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LCXQMBX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoCvTydFUQc4Af5ROeHfIvS8XYxGVnEo%2Bv464ObaQMQAiB7tmz3zuYtcBQU6T7zm20DSD3EdEC6m4fvVHjg%2B%2Fk4UCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3gLUw1azIOg9p%2FMRKtwDd6KHDOUIv0nXxEpjJERvFo%2BuhAZrSUGvQEoXEOLcudIBu56Wzb8jNVCUhF5QkSmhAFUdHMBfnp5CrhRJXk709BWKtER4fZ0XuklgthzR%2BDmtFJrtFvXZLkmxgDYypfaARpaPahx2YG6LHB6anEgcwS3fPxQVYerxLXlykoBr%2BrtiwPlaWiDQzf4qfz5z5H%2FNk9vNyLxtXU%2F00fK3wUJdLKnKXNhqC10BM%2FqTYxABJD2FeikPD728JfNoNrOnqo5TvuxQnzAomRL5o0f%2B9hCDKL1aGjCH0VcK31k%2FH2th2t4Qbk22SMdJ0cR30eESOQAcF1hjiDbwZuriQbDsBeUcTGapVE%2F8pX1J3frkfny2EFEMaWVoLBDbm0HX9IToDYwWjeKM3YqcDD32rbYfgpfUakDIj6pedDMobN%2BkhGr%2FLy2OqUyTVFiWpaDgfLB7Ad%2BBocICRfDoAroPehC2EbKpOkqxrZQuWyN%2FubRJ6tgT9%2FXYk7o%2BfaplEis1CtDjQEhORBli0MIngeRW6uDtN5HEfUekX8Godj1wySvlnqU4t2PC4acDIF9adDBDddF2LanjE3zmM%2FEgXmN%2FNc8b7U70jLYKL8wxGAKcG4lF5I1hHzcAQNVlvspSGuV8X6IwhNjyvAY6pgETD03G7Ep4zGZWuHj8ZnbufGxHRr5eRfgkxcOk3ytor4bsHyf%2FGgIpQ%2FY9Hdq4oNN20Mfn%2FMy9l3wDLpzM%2Br4Ek%2FTjc7LzeKJNKy37fBy0ziBZ2bAlX74EurYA9xXgy3c8vB8F6LnWeaiYjPQdUPT2HXv3ts0hfzbiu1NGVeNmn%2FDOs%2BUudkdW52YcBtjZIZ6yZd2X1gPmdI76uIxqIMoTZoy8UviL&X-Amz-Signature=918bb53004c051c8dd3be0bf94ffd3d4570c3e13764d232897a2a9b0020c34b6&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXB62CCV%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6RjwwCXhYToUexAQyNw2nCcmZ%2B1fyN%2Fw%2BtCbeWyOLGAiBuClq%2F6%2B8ywu8M7AwAA%2BX6bHzM4aiTfowmgmnt1WocSSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaStf4KEWANgo6kG1KtwDNOzegvkt9QQHCUmL%2FUVv169fcJ0IvnkDv%2Fn5L68o7VgZTD9CK3%2FscQplp1w1EoUuGrJL17QFAsUWjglNUGjGz8NQIy6sAoYPZ4uJBy6U%2F02jDw3GLvvFqKEgqwauGzoD87NPj1ICJTfuqnxmBugFHYorI8IQogMrUHhIU2aQO7%2F5yrZfqHikBGMNY5LoBJdabP05n5IQ4zMCUFfWBwo2bXxj2kd3Ov8PAyR03lHnicyThbtNIuvXVegMreqCyoEW2NXuYE2itNinXOwvz%2Bm0IGIchp%2BusSYLevF019BlwVDcyXGbDw4fh%2BkRI68Y7iHUXLxYQLJKffhVyM%2BIuXrX3pRB9oCVgoIAy49WPv%2F1ZpkIPQVIxKnWxx%2F%2FwLqf1%2BYdhdqmg0HStVZ9diCvBia%2F2N9Yc4qsqk%2BvQxmP62%2BYPOLQVasWSc4dEnSeQiwZciDWPOcI880HT6odp9Ld7pahrn8QhTWEiU6TQ0N9fCPzLXu05WI7V2SoJCzoSZqFn9ZJVALRIqhsYkyUCQI9ldvXBf1GBtiTvnoPsPIMlpyOexHumHgp2YFyTdSOgLgXHasVTbie5iZs4Wfl2w%2BhqUCsBBlL5%2FNMtQyoaiU7w6OFYbpJoUvyrRJ%2Bi%2BlKwEcw1tjyvAY6pgGN89kmVWyQCc7wYIjbpggogLSuiM2xqGYDODtmzwVJD9xd6J%2Fcc98V00XaxjqkXWd2XOSS8H%2Bx8%2BMbYBOAVDfVOe%2FpRzV4B%2FDByZVVFpGEyFGJs8%2F8Ud0j0aXsfsdZ%2BR60A5cax09q8nlrmrvd%2B5%2F%2F0aPOr8roRNCa7RV8kgeeCRvZv8qjw8hCS9Vvb0NtwaZgsRPHBr9wrIzQXbTJjJgj7KKH%2B4YH&X-Amz-Signature=a09c78b2e343664858528c2d3cdad794987884d01dfffed0b9b830eac0502063&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
