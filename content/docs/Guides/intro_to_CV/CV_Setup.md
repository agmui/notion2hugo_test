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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5GBJMQA%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyEEezbJ3UekBwelTsmBF%2FsfSpm%2B9ogIrzFTdd6m4QQAiEAh4na2TwQNh2XhYBaL7K%2Bb7VsRrgwX5kGoMtOovuEj0Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPjinxZr%2BNbsHVvBiyrcA%2BcZU4yvjpI716eTAEDYeEKMyRaQMh11RhBWKsw2t7rAZKjIQ5tvOzqvoUO4zf2mkALufyjh9gTBQz1kpZ7n12PvRjkWk6UOsv%2BsQKrWO5xknnUN9%2F4UrKY6t7lEWDjMNUd2IN2wsQR%2BYSZETPLd8eRz%2B1LQTkLRiPRn%2B5p%2BO7FuqgMcGHhulWee9EtK0EqWJYaieGYlyYUsSnwN53F31qecnM6ni6NVfhZaJqeRPB4YSB7jfYi0BZo5WRllAEWaKWUQivS5ECRNyPVcio3vsTAhmR5%2BRZFe96wn0P30cIyiPf32I%2FngubDNTDAS5GD5hlgpo4A54aHV5N3DWnXUpmc%2BOZBqRu6%2FnvlbuSpyaHTObn0ZCRSdrO7FhPce1GLjIRBWLpdH1YgN6da8OAkqaLg873DaXWjk55iCZQZifxXtGLRYPXbtO5y6GWBhodUf6m65cubwCVA9mPHnb7MtYLEe8hsRd3pbVOT890QhPSDhYut28b14SsMjkPvmkrKRuB3bbDy%2FRXb26BZYv6yRWnf8Otx9FEHzIxp9hZszqB3LDCyloRykSobW2GCSLC6gFqCmgHFyIRTGIblXfrOcctp8sm1gwFxOWDqKvnR%2FbTN%2FXGPL9AZrX1QXlXetMOHa1cEGOqUBtH%2FJeNtkefmNBl%2B4X%2BXMfFZHb627R4BoiFcWW3hWbC3YB2JDoOAShvXio%2BUYrWR36RUcNXEOSerXoJc2T4fMWdXqYMmZb1Tr4G075GS6HNLt1c3SWVvo8i9ct5JKBhIuzog0KQqi%2BTZR6MiKZoG7FD0tbsrEphMcrm%2FRRfVFgtmekT3U9sOpM2PdRL1fvnCdm7aox7X5q8tSNqYH%2BFg2TcU59lf3&X-Amz-Signature=d45cfa9f10ea681fbc435f770d73c02f1d0781d476042ae74e3961816adeee9a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YNPRMZ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXLRuL7uLiPj5LXeJKKDmeL%2B0ehqFghCzAbd1%2FZIMviwIhAKpbaBG%2BaSwUDerwp%2BVFhcMOlgIT6dhJlFl8l%2B1%2BlSbqKv8DCFkQABoMNjM3NDIzMTgzODA1IgwUlpQ20u24%2Ff0A%2FqEq3APyC9u%2BrJ0w2wx8P%2B4pfhc6C3nc6006psm%2BiBrcHnDGmX3H9snnxwrGSF8LZKJI6kkf1KR9lSvqaoRwBgEpedHXAB1yMak9a3l0RR8izrEjqf8Z4jCCizUFfCEBjNZsP%2FI3QEi3VzkKBr7N%2BdhdPswP4KA9Ob61LGG5askR09LSTuso9CKFFEZnvSrAgno1R8L%2B5BwFQ1Qvz9joijADvXnF7NKQYPybNmfs3hcBa8otLA6kh%2BehTESDEKIRwitwvQR9T%2BIENKRoOhEU7Ga4rLAa1ZI6u0Q6QTcU1uQkJJww8g8AFxH7%2Bxoea1u84POHqur17McgPrO%2BsRzwg7KMWT%2BbK9w8xF5Kh6hKPnXrKV7NfpnwV7YX%2FbyWN%2B7XmC6ar7EFtEzmA%2FIiLyfjf8UABTj%2FV3DfYOLFFP1qSM0qg866gvpTykzkO46TzoP2dN3r98AxtFhdlD44HgerkAU2Z1OzgFOHbHd4uWtIs%2F%2FsjNFj93K2C0256mgh9%2BhpyC6WZT7A%2BLkPYO8lZeuM0LGsBqYbYa1fzI%2FiUj3KVDY8JjRkGKk7%2FVn8O%2F%2FF1juIWqoxCF41lYmo%2FjeZWRdrH%2BvQH%2BMZGm4Id0BtQtUJ9BZGxWY73HhhyfKX8Dwl1FoosDCh29XBBjqkAXw1pwVVhVk4jU%2Bwrk46eu88vSmSkOvH1YTQ%2Bis1HaXQRRAjPvRBIculgl0im4flZgzrg%2BidIsLNYUVnAX9eDgkGMtNhOVFx9fd381%2Bph12LxA%2FES0j84tCdKZ0yPnA7HaolmuTOtOhQNHTPm8e7iLOOrqPzeBVKd9lrNIb4xCKOuJxyXodYvAH01%2BFce3ftAlUnqy5OrDyfrSIQz8VpAQQ74xrn&X-Amz-Signature=dfcf3e7b9c875651fd9be19dea6d6bbfa79822b4f653522d9e25eea2c8818d96&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
