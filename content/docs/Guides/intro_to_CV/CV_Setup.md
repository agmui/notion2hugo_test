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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UICMFD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDtgU52grG%2B1gPKWXDO13dn9e4uaIKi0nfFZq5ksVs0JQIgZ0HSa%2FEyvdLY2K0WrfokwV7%2F7wYeLjor9MJwq3HQFQwqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIntTbFu3JAIrlKLdyrcAz8HQoTf0Rw1J4P9N2xBf34CfudpqnKqHCNPFHUcMuw3KY%2BUnuSy1G7j9EVriubEoElEAaoSB6KaSteB7wz%2FH%2FbNoyCmIbteAh0Iq7wJPDMqx8IwoGQTPub%2B5DYX9u4o4td2tNDAs6g0OJk0rkjdDjG5GV7rqAqOdkV4mfxPP2dGeHAq9nwPqobDAdaKjHuWKf5aSbE9PImXeFvU4M3GqlafnydBD4stkkBjCIFFt%2BOthXyuryS63%2BLFoqCGcBFOpfiKgN%2FuZxENV%2BCnXwtAvDEuBgezLt7wkl8QWJJXvLgaX5WdoUPtUB9n2fs1YlAPnJ7IAg7UKnMBcRIGSyvVCX9PK2mgtkCrly26OemwqRg10sz1C%2FOtj%2FYsWznTqmO%2B%2FCYkMHbMFM1OzkDhZlWpTTdxJCkUDaSbLyY1qzpwNRs3gK9ZYXsMKfrpN9xYv25fYmbh%2B64mwWc8XCSWUYZDz%2Bzmvubae0Hoj0hn26NHTYjVvXzpHzDEys0yNv2X3jtd2b1VQxGNhXWaW%2FSA%2FZZs4LzF0h9Y83nD0oXB36xmCqBTHUS0l40M5P1lfLz2ZSiuLepcu2DVSHCAnbK7VMZfQfFYe11rj0M9BYglAdJn%2Bybpl99I%2FQ%2BbL8aMb8wEMLm%2Bxb4GOqUBwsWl6m%2BpY7psWbvLH2bQSPJ5HgvNfOF3S47zJ36AWPgeKPJJl%2BEzFfC3k6Nk%2FeML7FMZspqTtS9FI4qdCbwghWhZfKaBzN8nKxHzKGTgIfGunz2A6940CLxSS0nT9ljhh864VUxlZUVtnO%2BohSGCoXt7aOIQdbu5rwG9xluoO6HuWYQM9HyrydqwlQ%2Bse1m8OL4%2Bw1BNSrojk%2FG8NSQNiXbMa6i2&X-Amz-Signature=4627733eda7386e784d683444c07449db2847b3026eddde70eebe93b5b0e4b7c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4ZPXESL%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC946vmcOuhHYTGd3d1x6jnv9DkOB8FVrJc4%2B2C2Mwm5AIgIb6CeKNL9TWKgMAV10YcBas1woppKgacmCx1poKBPfEqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI0Sk2eQI%2FRlr%2F51vSrcA5%2B0dbSRGprospeVPI2AYpeQMhFGtTkDUHSe6GOInQc%2FZGna9S1vbeDXxbuHZ9hU3Xptqmf%2FHH96pNq7iMdSJE8NrP2gYd74P7mbPWHHZ7O8XRf9kEniSoiWhaoicuhCXTmcswhjz0TzOSBT20G48WQi2ZgoqKIsfSB6HeLOLtcf4u567KKhZ%2Fd%2BtfX4muFiVgELL3smxgOmMrfkR%2BHh%2FJq7DKWmCef4GTXUBavBpxh7QczRrXmvPHA1xrSp1JmuBmA1VdDNSg7g5CvQTwUXrrS6JGowqFhJbCpeeEBRY8dcb%2F9ybBWH1GRhwsbbHIOlfx8iI7Dcpg8pRaiXiOofRQPfvcH8kumufUeNnNRN59RX2giHPlR8A32Yfx4qm%2F2iCIB5gNJhA5hFTQBkXtfBaMV6Wpz2rxV7pmhZwVbTl0bb906VPYgtJk6kQN19lDM1R9NOnBjyGEW1V3TWMj8JiTbeJwnuJmUugGKNXB%2BznvYdi9lDXpvq0JggKuy1oyGKXxv5BUePUtwktFnLePPgFzhjpw9k6w0H%2F11J3O3q9cPr3wciLEDrz8FNiRmvPgok7bGykJa6b0N1X930Ydq7JaXlMxWdGwkRl3khqOBCaYl1COr0ivVueJSWeX2PMPa%2Bxb4GOqUB4GU9POiomJ155IbDKR9C1UrvNnkF0nhsQH5nVLHrV%2BnDD7jiOjNZnRbsctrZ%2FZV3c2wYL3kwJkPP1prGkE%2FwHcejOrMBg73lUYR9C%2Fh8DKoNnXkhCuRsNzItMLHleTFOdYNvVcslc2uHRMZEpsfNutFAMV%2BLaov5dMcLsw30RDubvwubW8k%2FHJd0hfmXl2KWzn%2B7i5kBlJZYmpjLYWWLXt9bYELx&X-Amz-Signature=0d18867dbcc6cf0682da044407007a1e012c88a5a165b895023d16d130110d41&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
