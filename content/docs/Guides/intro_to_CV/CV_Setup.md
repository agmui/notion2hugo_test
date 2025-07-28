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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z5TSZH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA9PQ%2BGToe0NxkyXpPZCbp9mzpc%2BFxXnjp6sl%2BNm62MbAiBmenoeuWjNliZC%2BS7N4AQOIGa91Qa82LPs3dvbwPVDTSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM31M2mIf4XXXd2x1cKtwDw%2BnWZhk%2FzvPdqNalZlrZXultpjK6zdd1MkW5wsYJIsDj6wphbTQNcdySXSDpylzvSKL4KSXxoKaL2MpEGcsZfQc6Fg0jsDINu3Rj1iLJBhCxAPBKIQLReERGPLTJ5IXVtz%2BtFpma68udbDXGqOl3Mw88NdUNRVCWrKTao5FoiIZmtP2LXCC%2BNDHO5r16P3D5M1e%2FJZdkwxeSVWE0DjrwrAtHolkmNcsBgsdU2VKv82NB1FmH%2BckCsbUzC2XP%2FWkBTVe4pdHMZuIEDjmpcacsqsaqPBy%2F%2BPsbA0b%2BBebmrNNgd3QDlSwIeV67wAANUdsNQGtbDlcASzk6tWZeDy0xLAX1kX%2FY5ulL6OtcJ%2FrMv1%2Frbpl7u1Hl73tP5DulymMIbHuJnXz9bZQ4x0BLRM2GAhgLvrhjnzlJiVuBINzBfdCjNHIxoip4YFxoHRB42SK8xB9lXCYLCKBqqX1Kia%2FZQUtuk%2Bn55WjXI%2Bb7aRAfcPrNFK1rQunRSuPenqseIxVIued6GUJVnO%2F7nH4PVuWHbP9RQJ9CD9gvAm8poaz8PNMomL3lXT19pdcJcjWp%2BGCxwjpbUODsccQICdm64unukKk9f8QWON%2BmTHEmU4CEArl0hWUN4JlOB2QSMR8widKexAY6pgEs0D3XXk7h8YQtc0B%2FKQU7ES7YbFDqW%2FZ8B9YKWsc6ru%2BSx%2BhPYFgfrM2PR3wvHosRt77Z4AFwVzww9MU1zWfrg8LzJA7pAGV9w%2BimrQs%2FDyFjX7DUxUBd72M5RcON2pOKrdZKcL7Zofzmn1rcJLxBvGuj4BFXpD0qCOx3D7si8zT7mI9yJ4Hzn2WRlgRA88zONvsSIQnc9Qp9ZEdzN%2BjOQFpuGa4Q&X-Amz-Signature=69b64785768026c71aab662d82ff4c83bac75efb297c289200686f3c0a52974f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEF63JT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC2zv3OpYqvjm38Hiu%2BK%2FzAR41ZkZm78DFtQGS9TvkbNQIhAIIhbgmCpKvCUFAtNNPUg0eZ5LFEUdXrslrPsxxqvvDVKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMxuGWso2q2v5Nhgoq3AM5sXrKujOFOWpQWhqzYtTmu%2Ftj2T8Zzftsh%2BBBbl3cC%2BeIk3AhphAJ5XquwCLUHN0pEHwKhu5nBBX8xMYYR8YML6hehIBaUjLEWzTaNexAUUWcIBaQHPPDmwvHulvZ3VGyhQ5urploha9Fzfn33o2efiQ1QqKfPj2BCtIM6omCS46E%2BNzjtr8Ib7Y7NnQhTiSoUCCYr%2B3D0McxDo4It6h8E2Um9Y1FP%2FIulLdE20QLdy4WCxqaDbNn%2Bpih%2Bv7WKO%2Fpa5JTzRyIV59KCNnkzfcbY0qh1SHfCButui5AwTTldKHzClS9ojNbPL0U%2BsdjxVNFZACN1TPOmBcMUSBAcYLtiFxepInPZhqaRWoYZemiMjtaDBspa6IOnmg8jlPa4TYkTjxaIBCQIwYbvEw8NtucWoVmAHNVjWaPrzrwV1xMOwHb11RSeHHYM06O69Zruv9yZ5BPYSnEUR9hG7g5sYwVe%2Brf9P1lXJrPELOWsrmngwFDcfLsHvH3u%2BBwwzYKos4QV6jY6BHxUW48CxGvhMsv1D9AIEKagLqKxLNWHKQ0Yeii8BSFgS9hMYqrewywJVjboLp554xMSxDUoo3AXKy7%2FlCLxG48hjNmfdXGygaliSmOh1ACTRL1RharvjCd0p7EBjqkAWUhg3lmR1Fgea%2Bju%2B59sJ4qJckKmBDGzGciqzWdSvgm%2BwCtMILZKHuieY4bbBD2zwPaDgZ6YfBLUu%2BkFklAGrcaiofF6%2Bww%2F3ZfelabNChb3JC01qsgQBHMz2L8hY6woP2b6FmzicwQbKB098zBZWCh0vpkvFx3YVgV2W5cPDmn4hdotqr0KQFEkZvmJ2YX2icCHCaOfmgERM51x2mGjwOOfC%2Fe&X-Amz-Signature=8b7db64da4da234de39d9ccbff8a7ad391b1cda4096cd6c2554273af9d252abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
