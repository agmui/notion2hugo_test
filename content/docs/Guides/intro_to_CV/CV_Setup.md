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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GTADRYG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIXQWzYz%2B%2FidYB5803wV2tSiO0flke6Vn08%2FUQdvKefAiEA1YNDwF4KIImhzz%2FMPTF7PLA87SufASSHBbE9u03Iqv4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCXzIHHsGrg85LlsfCrcAy1H%2FNdxGhoMEa1EjMOW6nxgeFf0VdIHUN8TA97tMeP%2BNSqVSnPSKWs0clXZNqwHUa2424J0t2NJ%2F0dGQZNxCEaSBk62%2BYjjL%2FyiFqONX0sUgsW%2BMkTwT289WVv4cMdM3YPZz3NBPBbhxEjKk1N1Dma4hkYDlBtlwt5vizJyeHhKxYCGexgxiTr4MV8D82RqvL%2BjdpKUdz3G6wCaQ0yHS3DuROTn8UuLyFMCrQI%2BUuCkRgxSvQB5gOUhuCVKyRtc4JJcpfTOk91GZ8W1Atd7vdsTavmiXr1G6TPb54eM%2BWJ%2Be2d2RQid8hTZeT5JC8j%2BAeoHy%2BKrhDqSWl%2FAZbBImQ1rdEHr3JDFdfTnHSoPig%2FFow1vD42CECMxuUwvM7bZN2MqPm5iPIBq4wVGjVBN9RlJruwCXHoGnVuctjne%2BALHfcshsRS85rncdAPEn57ma64RnMiXv94xc4BUkFeBWPppexHMMqKJJ8q09jyKz2UHJNT9hZfTc72Sjr7QViradoKmUklmLg3djX%2F8bSSNDRgfltATOQ2SoXTqe%2Ff%2BWiEdzhbyQPi4XiWIVXg0oHrsINlNh70M9UB1Y80s9IPXSaJ8mcc7oK0In1zCBKuv4m1RC89XxQimJ1lJEpmMMJqSuMQGOqUBFRWgbXTJDHwmYk9qh7Xfl1RamYSBKkdoLkonolEa4feiKqxY2FAbdGr74UDFrDxvC%2FQ3ZXp%2BGD22gMr64Y%2B88%2FW6EfbHQGr5pBpXhpLGeJxLgj%2BN9To21ZjVEjTP%2Ff1mJV8D%2BIA3Oi9nwSJsjasRxliqHHlHgL3jOYCZBHYwVQ7HgVfMA1w9z0j3kpxUZeFNgns8PLAqUBefqR9yXsFzUx0y8gKq&X-Amz-Signature=cc38a6a8e69ec2f6830af9317fc52f8f08c9954a675fe6b93d48e80617f3c137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOQHMQIS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFOeLvuHrBvsXKjfvkeKT4XFR01WK%2F20xx6iD7b%2FrKBgIgZMZMbjquPXtVfm7GtJwrZHi7fyDQvNeNpOt%2FlvIfVPMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEUStpQ09EsOy0U1qCrcAwQMtyz4yI8dPp28oZEamGNNloiPF8EouS3gw6tQouD4cPDw%2BbfO4zqWPgv7yFxohq2jvxfXXlOPS4%2FiPv%2Fe6RsIgnYuRSFgRwUlbcvyM33Grwc1nmidlsZCcIby766LmFcQBgvU%2BQ8prwnzM1%2Bd2yZ8FITCkBbKbJIGQq6u18sJ3B2Pw0vUrdvAEqjiRSB6IQFlvHcFXL%2FAyi7tfGKvFM7267%2FMel0uydkGSrw0ShpPrDYfEM2OvbLy9rRo7ugee76pRsJVD7rkV%2Bk%2BMN3iVOUr7tr59ljUpbDg88o4ipvAfdkqweiSRoKSVOG5RcX7h92edvOnW3DeNHxhTiwN6Cx%2F%2BWBn11CashIpoJhgtxBV914N8AfQnePDEVewbLSkZHol0bfjwt8XdlH%2FmoQFAaeixI1l3pdwnOS0NQ8aeQx08IyxF18F%2FEum6r05RuWsU%2Fb%2F3RucqeC2zyUX%2B%2F2Bx%2Bw2jyBA0Q%2BSDsqRkQ0VJ7D0tYU2AkfZuFwwHzpgTfeXHB0LdAQTB9wSXnWuanDJvQnwbosSHbvMURvb7Kh3ZGqn9s3fBSaIVG147%2FLwdLfs%2BFbTHKFyTVIKdpJdfUrYEbUpG%2BBEzvI1%2FVDoCROg5rsBZbO7TxgLFO3vi3HcMJ2RuMQGOqUBHpnjPw%2BlYpM724XPvm%2BBetPwfv1qjH58se6nnsTGahInYMg9dym3h%2Fr%2BQiFtXciNL6Es3aWeiJbGJldkOFtLr1haOkLwCG3SisW9BqljlIbBZVJx7IBrmqTUTPPNb4O5%2BpbwAWbhq%2BOs%2B5U99RJ4fZAHnFVWpR84OfwSVLSzFczjIWzrT0Zcy00pf4E4SQtUgkDQKzYOWfnYEDvEW0%2BnpbOhA%2F0K&X-Amz-Signature=b66bf1994b72f5e3f6f8e9c169cf06bcc07f25a1d77d7e96416aebf566e832f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
