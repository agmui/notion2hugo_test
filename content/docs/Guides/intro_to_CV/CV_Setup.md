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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLZCDGF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIDMADnD6%2BDj4DDoJdSxVssUqiHPoRfn9PjQVPsiPHym%2BAiEAhd2rk45u%2ByRmbGZR%2B7tjpVkh7nOvuY0toTIemTeWJzoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFYKEeHyZuegBt3hircAyv9K%2Bw4Ny6TIM7IKrGQkjrPXeOX6DqsiJh94c6LrY5U5ZC%2Fx4lG9qzR71383RhKBKjLW%2FcTSQiwAW0tdSb7RClnZH8AgFY3LuOCw3OJd8Y9fORbjndMMhdHwfH719LNYWd7f7TWVHVF%2F%2BGjB1zBdx6tbshhoVJ3RX1Xh3B1INRm9gNsjiCiSR7fQioDWBDDx%2FZG4a8Lg%2F49sYhtWYU6Tw5KE%2BBcb%2F5D7Vg7eT6uTYv%2BZEWgU7IW5K3zuYMB%2BL9wR%2F0z6nUYoqf599iYJA8cQLMeKvB6NlmBxHsefOMxpBQHve2r703U%2B0eutOsdXf5HLRAftYIWsUuuzmVu6xfKoQNuQ7dNCARtvGHaXCDHONwFlFb5qebRRc2yWih7INRS0WNn%2BwwdTpBizvkamaSg74momWgF19%2FhFqEUiszTLYDzbc7Gz6geBwyzrgU4cAZQEniqFHgWhSncSJ0nFLysgWjtRkKvWrwWZDTGt77umXDN7nfN48w3qqHB0UDSBSzd60RjS6Ga0Z7yPb5%2FDSMjzxhqxPU%2FI5ol7G9t%2FrnO2iO4xTLPZk4cRkGjb2Gz1gggqZRPd92WLvJQSWDzsBswO6QOEobIgeHNigsNi67EPCBoF%2Bb%2BVaqi241Wp2%2BpMK6e8cEGOqUBeL6KvMBkPZ3ylxHzzIMsuGi04HHDPhqaaK2Cwyvp9k%2F4ySaKpBAgzyRJVE0F8%2BqJoTjN3nBgxl69BhiiBm0kH2kEA24e9Vf2sLfq81deW%2FOvJ3%2F4mm%2BA0KQW4Vr8DVJd0rXuq2LhAYvmpKEd%2B4BaXth5%2Bqcw6SfwaTyDmd7JjFckSwMEzvInwOBQNOg2Mo2u%2BVI%2BQz%2BINtIjuKdS7ntLfARt3isi&X-Amz-Signature=b6a095c37309907cd115f6c5b9a306fd9cf5207fcb0a94af6433374941cab954&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH2PD5V6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC3miJ0E59QmNCGOWIP7Hjc8DMERJJ75iX3trG7audMIQIhAN9UpTboa2lRdUhumGnRIiOY88eDLcDjel5QB9V%2BoRD5KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG6cHyD%2FGgjrjcmpMq3AMXOG08MbrhjDtIhvqy3aT3cObICoAvtK9HvAkbfbIo3EXEFIaG79g8Ez24p4YOtVIE6hOUhogoRkdmnr%2FEQM9Y7cvIq6sp7ZDYwLAHdQY%2FbtX%2BPkFqlZoDQ%2BBeLSACY8M%2FYeATSY5tw7eTTT1%2F9cPaLNQFa7UIOZMoQdaIBBl0VnqXvnjR1pJEe43PVZutb45OGJ%2FKYe4vurjHcmCfw2y4kI23TMqknTDpRnztfiVWC%2Bx4ETAR%2FjxHUmMt5%2F5zadBrzwXjv0Aemu%2F%2Fmg7uxcd3ciPYK6jG%2Bdwu%2F0hIFnZ3p%2FXd%2FlJla4B4fn7NV%2FDWSKAtshNRVk3uGc2AQG0MwgdbT%2Bub8fpZ0kpsoHDKfkEl7GNm3xo7M3j7rZfXdL%2BkLYVgbby4CUN8qG9iH%2B9CeqkWgPuW2gsGgh5Gh46x5Iv45WIb4h8unUxpoJuiH2uoYIG136rqQMtNoHxS4CbBZF52aoBK0b0qv1zHEfagRJYJG6D7V273jzhUT%2FrIfgoaSis%2F%2BKIRiqMu4JDxcm6Hu9fXXsuejpJqbEo7htnDniQEzHIU6Dn2BoRSBgrJuvV5Pys5rbZMqFOeoANhdvp8BaQ7JisvqkluDaqk6CQKl1ZZCLsQO7QapyC%2B9VYnnDDxmfHBBjqkAX2b72cNBagre1SxdgH9rDZ3KXTguqPeFSnrMG4i1Dg7qzDmhbn6%2FcgzoXuXYJPlyM%2BJ2YuOtFE%2BMK8OBMGQMVkR1cR8%2BlRnR%2FO9dxJcaq3yiBvMJhPvmd8b7widkU2FdB%2BGfI6mog2BP3%2BVAig%2BWGlh5Lh9hZPHtFgNiMRtJqUMZFSv4%2FcR2alR5WYsnG6SQQ0JbP2eqgMhgRvOxh%2BYjCIw7MmY&X-Amz-Signature=97144ed95890fc742b07a6971f2e981ca6411c4f7392b27daab0484d81357dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
