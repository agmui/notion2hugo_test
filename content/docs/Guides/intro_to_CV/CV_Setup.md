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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWF6FN3N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcXj73b6i5m8EY9ObnbS2v2HD9wO4fKG6dYzATzUKTXAiBV7iSb91DJz%2F27tpyyeq5TimHqma%2BjKw%2BrLqhzb%2Fs3FCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIC%2FPBSvNR1QMaJJKtwDaTvgEb%2Bgtnl3ob8flpnflE1m9qsUA3yxNpawrX1e1qW66D%2Bf9iAo8p2VgjJNW3Vbl14xgacbuPx00BxZy5vgNh4y18rGo0wemev5YAr%2BNdd6EuPZ2RFhqSUMsXDs1vTl2knSbHelz5ty2FYvwxxRQ1L8rllLpqua%2B8gQcxYel%2BAfgVfLSy1G39nRIKKmgY7RY8OGmA155P2mMttIUN5dcGwUD29Jfe2DKNyUqxKoZD9y3CwvBgMAejCQGRAoREYORtoXkma2fKxZu9GiVi0rU54RbbKLYC0PcMlykvGjaaTZNtVxFwabyINMsxWDNgotyiylKSwH6GiT7mfRaOUby84VJv%2BaoAcmFNB86plxPyKXRpCyx7Di0FTQOsscunD6MEfUoFixNw9%2B12%2BpPnbTPUCwWF4lco9wqP7AJjGGS4%2FQ10PAyoGyKsRVt4ZIDHtjHn5xJbnBRoX1HJgTBPlwgls%2B4T5TQUAMo2coBjk1%2F45yjqOD2T977cJFOWmGlKBtzbqOBNsakSDGh8vVUyaHqfIjN5Ez1EqREEjqqm5LPiCaSfen%2BFVctZboiC2TCUkzOrXTgTm2XiEb67ykhxutQQCRV4pOL0zKAqnZNk79HORmQgpkWTygteEy%2FJ8w%2B8ihwgY6pgHFl6hZ3X%2B3OHqqhL2mDWg8g%2BEcT17xOzFaL2dEM%2BwhsEffeOEhow4294plMH3XX%2BK2WM8XeWxhHpDbThJcSHPLmfyVslZMcpWM6WI1Qt3jWLX89fLZmuZzQqFLo36%2B%2BvRZPUoSuk3PzJDmYjbJrZ9fXx5347Qk38JRoPd1sTTyIWxMEeTDToOu%2BMm%2BUMXi8%2BZOAk%2B5zfXO1N1s3EVP3m0toejqJGkF&X-Amz-Signature=2cc7f53d74c553f4c91d1507fae586aae3d6ec1162c167eecc5a9d8a1d0f9196&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSZD2XO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLSeF%2BCe6lW20yiPu3PPS1on81EW7fv7ganmMgw%2B1LKAiEA%2Fzf3lqLcW%2BkYBF%2BKgqOB8q85MbfQlXDYX8i%2FfRn6xRwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFNut6HN7a9Okp41CrcA8kwLIXngOu8nXzDUaceNoiRPCg3540dTWkO8DSmTi9mwnRakX7v%2B4FPZtx%2BlbcWwoWfl3C4x%2FduCPV4GyetQ2vCPkb6%2BYqlrcgbsj22flZOw8FuNV%2FD7RsUkenZBzrJV3wDCyWNrIezYEL6jHb%2BanEHU07VgbGAJ%2FkHFn4v0t5aowpO%2Fcodg0jZItGEH%2FYQ64mlEOmLBEcn58lXsj87Jao%2Boi7TF97YXw5Utzmoyanw2JhtI%2BX6Mhjf5URtiRDIVxnlm8r8Pi1D8OXMMvtTLCx4x9GqWi8VfPyC31xjgQmHqWJ2ZPhKKV8q15buyEKBMRjGgCTIIn0%2BJ2no5O%2BbNY8raKHwvvZtqeWwET5xlm7NjyBxDnpzy1KKHrNNMZqO76wb0qYtS%2B9gn8njZgy0b4gv4H1oDsWe%2F5peFUpDKDWBcTBcJOllwp2anfpztOUSqktjOU%2BDThxK7lC43I%2FH2yv1Vornc7zNfDnDfNTyTSdzPSwilKFdlTggctSEkxBuYjvBFUnmxVBVepS%2FuauqFVPtKK4MVTUMdscTq3SEwv8ifQtCKMLJ0L3rsfH8LxDGcI7CPY%2FFCqBpXsdol2rOxCH3fWDPrKwcdAvMqJnGundPhMZUsFurHzXqTm%2FlMK%2B%2BoMIGOqUB0oLE3ZWmiGYxKpkcDd3BxOC9S%2F2adhlRx0pM3Ob7tdjduitZ2cjFQ1FFDqBmIUYzB%2BYAtMxpnEC6zlmqZcU2z%2FzSZ6DlhOqERAH%2B3Z195UszsDg9o%2BPXCo%2B6k9%2BcOZKpYyN7uLnz7BPHZ%2BdFN6uwBaxemQx%2FrHURbEU7uahVyN3d5tMy1uIPYrpZwV2blsg7fhC%2B9%2B1XErJTMKisVi4cWVHl36fF&X-Amz-Signature=3ac5926fa8b67818a0544c10e32f303f17855d01f2c0eb13c59118f71717a818&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
