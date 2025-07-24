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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEJPQOW7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZl3nUogtBSPukgOqCj2ou6kLR4uYrycaZaSAraonFfAIhAJrjG8fPVrPYEtLulAJZTOJDQGuYPv6t2hYFjdPCtsjlKv8DCCoQABoMNjM3NDIzMTgzODA1IgwrwsfMF9TX2wqTpUcq3ANDnRUfmnTFeFWH58TdERO3%2FM06mYY%2Fiuxqqm6%2BXungKM9aAVIaDXDVabOUpTuZ%2FOMWaeSN9du2dmQGsYdtE9wn%2BVyaB3%2FZHdBaULS55J0kRPBYNLoq6NSeBKzo%2B9c8oLTHy12ANlUVhqDZ0nW%2BzRNNPm%2FvBznHXqxJhrR6YV9VjlruQT1s4xxrZnsxQ5XoH7xvjesXZDQOrAMW%2Ff18ayRSANhjG2pPBsU1IB6dYyhdooH7skCSmUKacFXv5Q75P%2FYj2tvsKypcnkT5rFUtdYuZiICW%2BKQIZFW1CgKsEgPeCNinTnMrO8f8o70Q%2BbTUc2QbU0RFCFr0g%2F9mydQKtssRDqo3%2FE%2B2GwSovXOMJhlsiSgp%2FesMf7vDXVV3Pi4zzVbTuXcHiQFviKJhQK2kRwYkYWxhUNkKOVIjEeoT%2FXhK5vFhJKdVxk2hx%2B1ySrITUxny%2BJU6ryKqZahroREYmRu62X%2FA0pLJZzhWrmm5Iy7KSYrFG6xzCG8%2FEi4XfKP1ZAxCZQVghCKCoT%2FPkvFpHcyDEWiJJBuXUGM2%2FCd1XSKQ%2FHc01UF5vubf0aY8Qf3BVeUBDOvRoqq6iFX1uajMqXKBnf5XCVlUR6Wugrqoib7N%2BX9gViU30Jw0RUkTDTCe64fEBjqkAZPNTYpxM2ZeAnjSp%2B%2BwoVEbpNU3tYeo7l7wxCBDfig6AzQ86Npx6tOFr10EiMlkFgLhnzERxsmtCtBfuOtpZT8fK1vCrIAT3v4aC0j9EUTGXw7dmT11M0AUnn5KHgu0ZORdn7XbyhHlNUzwlKs8m6E1z9uLM1nZrnvysPpPdie%2FgB8HxhURLsoSPmE9Lwud%2FkOjQcr1N1fOu4UPmW6t%2FxGoa6%2Bn&X-Amz-Signature=e49b35be99e99c350209685e6b3dc822a18045b80defc3ad80942ded26c68a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYCI3W7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIGEMJWtAzmquV95izYqx5gtAX0kAdWt6BO81b%2Fr3XcVVAiAClZJOGR1XmfbQ79HeLiwl5ThPRSwwWBw7DYfnJksvVyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMsNw%2FvCN19q%2FekQPgKtwDPL8pMPoeLAqzRzc2V2h5tAR5QWlBQ%2BaxI63KanRXaMJpW5TZZ06Mc1zKUlw%2Bco9StIJswkeo7jX%2BU4WBKejA2tuN57REDqw579r8a6HpBbbCI63qnkSYDVJcn29rnDTpWzzJG3BQzaGVirFN2BrZYW5oxZpEK9V3ikoL%2BtcHBXTw1uZXiiHbMgM0y9iZqI1UpbYUvvEs%2BdpqFLAm4Uw29dtprTBsXEAgRn2cW6CRroxmu%2BIxuM7WXUhiDQtoL4c9MZQZ%2BuFY%2BSV5W%2Bidb%2BuMLawgezasHh%2FP8IWKTiKGVDPwInopvW5ZWXncU6DboLYM49srjPTKw2C0PCY6kR0Fo%2Fg3PhKTUYGy75dpwf43Ebuj6mZ14zBaIzBmnX8vD1oyhT8vsvgcSbwggFAMG44DLrzQbGnMSOoomLzmwONbLjudb4kx%2Ff6DDTFdEv2J9A8%2BWpWl%2F4GVdCnAIo4gU0gAzmQmsmktAIF3ogIpe%2B4INDPa9XL4UQV37EbjAiauW%2FroxlZt1iP4FGe5JDJz1GESJMOfwCOXz9CMnx%2B1uN8BBe8Es%2Fkaq1bniWWL1chIWn0EGD0f2tFd8RXmGu%2FSRCAek41QuyrZLHXnl1TeDUjS5nD9AB4UR5HCryAe7%2BIw7uqHxAY6pgGDYmi4tHxGgg2bFXWYMUsADqGRU6YRh%2FJKfz%2Bozsh8oH29RELk%2FvrdTeoQuEN3AgWuIP0DegEHJa2m9FEBwE6FoCL18bpOl9l6V0q6Ouy3Fy9wbgrdgFN%2BSNfNijtfSU6xGO8jol2D9%2Fwv2QNLdis%2Fr415QR6zb88T3xCCkyGDmCYVZ7%2Fv98%2FPgKKn8wZbKU0SLGUugardgqLtfsNfTmDf%2FLszp0Xt&X-Amz-Signature=c441621e6687017e012d3a6a811d98faec799f371e34d019860589bca8226f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
