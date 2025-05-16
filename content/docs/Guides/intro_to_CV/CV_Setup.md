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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHGNGCI%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDwySLhiiSc6oAgzimO9Y4qT%2B4M707zXN851eMmph%2FoQIhAJlOyVUiDOOeTyUz1hysG5IN5gKyWqg6fTr1WaNYN%2B00Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxQMlPJAl5FDsCQ%2F5sq3AMppbtr3y9YjspIKG8TzHRCb8FiOOIqqwxAjiT5ZOWWnbuHW%2BXtjK3hlDf7qHoXQp5j0Isk5uyCriDhEco5hHjYniv6p31TVCa84CiL%2BuaNKXgzLdTtJqUZA3oZld7zheKb35INK6YfctRDq%2BbKrqwH1bmpJ3SchtxVZmfPzu%2FaRa1HuhHoIxZ%2FTQ5YR5Jt4%2BHjDgVjZ9FiXbcTU0D9lOxG%2B%2FfzP0wiQUO45mMNhnJuATL7LPrk20H%2BWdn0S%2FKV37RSiGXHbLQw0qDMr%2Bgbk%2F3r8GVbWQaclzm4529v8v9dl4ykTl0THlQddPTavVBi%2Byb3JowBAtRRxI23qqIbyS5MTTTrxELV4kb1rHTZDrE968EdB2q1trXoZfeT7Qg8gtAsvZRqGmxDnfhkoL47P9JYvBppGZQIXgWSAjdZN4uVEYOyqfcyGT8dJfp2EcLRXc%2F0zwE35EfOb37yRL%2BmeP7AVwS0hkMydo0QA5GNH6ffsu6mS8eU8zdUAhW2j3C4eEeSVpb8AKouS2uKQaHFEZ%2FwWOamD1nKwxbiLnr8PVzSIZKXKEbC6iKua7LRGqNI0PLxr8GtOsPIS4lRShFwQEZlRkXPHQvNCAuAqukPWqSkq%2BCbGnDYl8iJ3ifYOTCTuZvBBjqkAVrsts9Qb2V8qD0CaU9E1HiA0owRkPgUS1jptPqGiwVzc%2B79quTl16zDkKmTvtOFq0wJe2ouAh4inQf3SNqok2P2Mmee8HtA3uoICQdYvrYDSAU7yZ6l3jBryacOPNXXYsxz8qs%2B3C7aHPVitdx5lfIsv6mSQw35a7iV8OnrzJ0RpyHLArFrhguHf9muEPWFepHZEnXWGp5antOqgtWUL9GxnHti&X-Amz-Signature=230b4718a38ea45bc32628e9b488110fcecdd408c08e3ee9190c2f1c2b3012da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOYCJVF5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKu7dRghYraR%2BPk9MDS9UvKpGu5NRHGQr86pax2p9y0QIhAKIIXZK1hDOqRLtluK6A2qsWZPuu4gV3WNvwxZy0VTNeKv8DCEAQABoMNjM3NDIzMTgzODA1Igx9Mf%2BtQWJLipzMdC4q3AMMCkPrh%2BMx138WxfAh2aSkScYBa37q7mQZQb5Z8PJrl1CurLCRnAhDbP7HKlfGDhJ3QB1lKB5oXvt1vj3SMZCE%2FRc59vil%2BhrLzC0HTKPPFRIEs9ATufVWTycau%2F1KpwT816mgDMt9ZTxhP20lo6QmV7k408pIbJR64VQ5pYQrJbhOAUElME%2FTa47Hc9qRV6FkRoqETBI9b5w0TOA40yDWeAdsWg1%2BWhjea3pZ486XRgcEXGSmhG9m%2FJBRrNJ6W9MeRWICk3RAJfPs%2B1%2FYG9H80G2wtUcuT0kP08KNqZVp8TUTmRee2lnxwEwn3vyV1JfZ7RYfm8nXSs%2BnngCbeKfWxQ%2Bpq8bTym23HUdlXE5uztz%2FBcb%2FKWkr2aU5sGlS6Ai8LaC0bm4RFCvIgkdrTvncepw9t9qIwDo3%2Bn%2FHLKUa8D%2FN6K8oJBtacX1AEIFZmVACUe3PsbC%2BDOPwhgGEebqfcQuIMzMP%2FsXDM3nRZhXn0B%2Bykj552ukqgyXgIZvM8nrplAeSNO%2Fxy0A0FwABwvVPg6RE3N1p9ICg5sJuCVSFfn8LLJjBGZ3dCV5tPqoRIBWkHYtxZdHz8GjHOAqfhbpTNf8zwZRwkNRnWYyK6dadP9zpql%2BqtihlVgxygjCDupvBBjqkAdIU%2BOHZDd%2F0WMw0X693dDciiSdlDuQtc%2F0u9nXwAyHMRm6FABXKw6cLbf%2FljfhhqgtSGozgiNQkRK1GgHuqPQb62sGoU3vPZ7evYuy%2BFdlpE3M%2BfHZdtqDBKQYmVF6vZxdQ57l54IanHrtmbmfv2dUA%2B8Z4l%2FOAZ1A4uNzlfWNiCZXNByDzI11L4n1E1%2FvrecImRfc9U61Q1GpKPtEvcATBML1W&X-Amz-Signature=963c830228d2e7d28c104d53f2c0e3e688653ad2f77a817c90ee770fc56941a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
