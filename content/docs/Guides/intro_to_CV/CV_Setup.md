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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2KWFENQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCr1HY4vDRU795XRLcq11xMLuJVOKZ4tm%2B%2Bgb5UykrJowIgVDvGAJJabrNJ53pGk3n%2FEXyjFWYN%2FffnLGGvC%2FS82Nkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJ1hzHM6zSWwnco%2B6ircA8JQI%2FdLKBq8T1bA%2FDGRkLC8XVtzWyKRTu%2FgW9SiHLbH%2FMuLGil1clZ%2BUzC0hBUw0XD6i3vfjrgOesA1h3EQroXQAR6bxmIteLWcmlu7tDIpGwGF2vc%2FU645S6odZsrsqhaDsBBKR%2FYNwqOCmZC0adSlCa3M%2BdSqpXoszNIWaW%2BhNCs54xg3IeSIBSbP64fqcaYxo76v9PflAYPRqI%2Bv6cupMgASXSk1pkLJjQU6wIwqlWhDBUTo8SYpL4YnQnXbYk9u131WFTKvExnvtLwSlXup7hsSsJtMPNhbXRoYmHKEZsG6UzISoYmXlRPYkV0G1CfgYzU7YE%2BlVTZb2Px3A7mzJxgtzFnCFUGCdP4hw9pyrphOFd%2BInhW4MYB2EbDKlC2RwwHeB%2FlYvLcXBFjRZBz8j%2BphDRopYIltGrndSBQbIun85yzww1T7MoUjo8cZ3DGelZx%2FXKC6L3JrQEskLzdowhYtP49VWqrN88boHzqyQkvzlZIpFBy5r970RfJ5bmSw1omKCazu7rCgu7%2Bjet7maO9IYts4Aaukm%2FOmNSND1sxs6tjArWfd2wuhjTPHxb0AhtRSB8e7tDBehaGi0ZYoSk0731fvE%2F%2BxC3JDfwDsvo6P5iacjHw7RQauMN7W5L4GOqUBCnACLPBHmUdK3nEg9N88sYvcC2bwCx9nDDtJ4UE7hDtSjU%2F08q05%2FH9byW89Yk3IdvsV92JSo7ApMFEARRpG%2FkT7ajMA2tCJ0I6T2lVJJbUwHGO8MV311B4TotilNh6fBz5hS270yIa6rYT29fUjufgfYS%2F3KnbT4VFL16VyXMIxXxiV3uASo04TSsd1B5tN%2FII3FGKAniD7gRRT%2BsCLKSlmPJDY&X-Amz-Signature=40c9b1ecf54dec226916b42316a2babb4ae47def7bf38569077bb68f4c61fca9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSRLYAN%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIE3Y9XaJcaK4EnP91iQrearOItyp1af6QMfKcJq3XtwqAiEApzgTc%2Bio8VyYWNPjtzR1Pkgl%2FDrHiS%2F%2FmIAeayIzfeIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKejYBOor4kUddn9ISrcA48d4dXcrrwwCJIaA2ZFDXyXhsZN2FHoATZWpVNMevUA29L6jkDDpdFbvi04WgerPRDcM3HTgYeNr7aP7Sw21YaengP%2FOCcMS15gkzRXEqwf%2Bo8KUIE8l%2BEDpgxb8B1XC7Jpb5hyU8iuI%2BGvXLl429aZ%2FA3RXqba2x5Ec5BKuyvgzzgUg%2BaAyQ4qtbBlAr32DqxnO3lTDKRrC%2FFmecmZYGCQR0KRsCfzbPNejfh8Lu2aEQmTH62LHkUITjiNu0xsiHJFmP6kjBEvYrblsg231ZaNqaulKJq6J6QJOcf4wg9GenIyFmwCAseTtLhjroAr9xG4iAN%2F8bZikTZxxQ1F4r%2BWNALrZLGHyf0Je%2BMw%2BSDaVDj2iVYMuJkRkRxWLEjkk9b7YWbYi6NX%2BC0C%2Bia4vMvQ2IQcciYRT4UJm6Plh1vbQesRdn49TM6rhbRGt9YWLwZUEEYsPG%2FtwDyoG2Bm%2B9H9iXURgrWnetIf%2F9MMo8J6wp9woiNw6ct0kSD694p9zZZScTuRic2jO3u4HKJepCTDrrpqF6bN6EwBRQNVNnS9bIAKoHzoktduXInqtXGtPIDFBNhvO8dlnMb8Dr%2FSc0gNaeOP6y3pR3OAIuBfbvRNf7R1igeHtPKklwKQMOjW5L4GOqUBHienQjMs3YuB8HkW5kk%2Ffsvf6HzSWNfyKGQVaNnoJL1NH9SZfZjnYVYbmuoD%2B75qDmTs87TvNebGnDfJUCsMs8dpj%2FqmlgKUPTl5hyTmJ6FseuX0m21M2VafkSJZ2fUqdH0oyUWdlH%2FLzMUbbFQaS%2F3UcgO0JHR7RirAJleih4oiMkGzuUyIp8W0ceGkt13XHfndBS%2FF2m5uazBgpbtgH8MqVkVn&X-Amz-Signature=de8cc816ebe49b904e247309088744e8a55df7e5de91b40b97b135607172e47a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
