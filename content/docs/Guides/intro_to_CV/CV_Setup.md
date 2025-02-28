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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSSKELW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDrev0hojliYu%2FqYACbIO1Km6ufp2E3eCuf1zquJZN9TgIhAO3%2BFkDd3dpt16YOtywx09xLGNTF4ZNFL5oSsFKOC0jFKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwC%2BBPmO2BVvoULonsq3AN1VZwCeCuL2RSwdfADV%2Ft1Evcj2nFzPARHWtyHs%2FfjFmzgFnASLtFDHQTA5EBgXDajSBiLhYFrwgPSC9QvMkaNIwutMuY%2F8cFUXM1li2TkqRapjc61B%2BkyYjO6AUHTf0EZ1xkiU48ghcuNsXrMVd6HGwTriUA0T9DG%2BQydrhrbid1F71GLPJcP0Vf7STIqgN5dyI21RVOwDhyJgT2R58V%2FlMS7k9ZQkZCqZjYmAx9qjp8lvntp4LPATw26HQPcKCvJUbU%2BEDA5FsJd6Xl2a5fUiP94XkQ8kxNkTYLs4Ag1qa4Qwfs0bnPRpKzIMwP4PHmI%2BIPlLJfpxFh2b73Ias2noEM5KK5Rkz2JAkWIEEHATXg5K2koLkB71GuyR%2FxgCE6ilJlntO%2BZuGCA6K12S0OcwWmgskn8lAdCnFJunupqOClJ3mkVqOMeX7gEWasMvcm43GznG92jkQq2IdJYCPTCp3P9pmFR%2FS39glEQZDTQ7VrSB01xMJ%2F4Zy8NH7C905WceGVBIH%2BGJxIuo%2FiWUOmr1LbCXuBvlY75McKGc0oD%2B6EpKYnM%2BnGGiUsvQQ%2Bo7LNERqOb5Os35uyQZtBITbJeqwrtdNNwRg8zxRtxGpMdQc9dRBL24sHnkrWBFTC5roe%2BBjqkAUvLEKWc%2BHam0f5Ay6g8U7YXKS%2BWZU9cdCMN%2Fi7qDwpxq2WnEqWsQn6zz%2F7u9gCUT%2BwAQK4pB5oTh0bM4tnRA%2BiQTsvU34GQ7Ihn0r%2By8F5IVAHKJq%2BW8peZ%2BxI0nGVAsTvc5QqVERh1bjXhiIB99mJlAfRUxrqinw5H4sZ4vV41F7bgvry%2B6%2FhiJks8N3vJ%2B2%2F07oQxDK6l0n7ENQfT7Nrtmn7g&X-Amz-Signature=5353b31ca15b9277b84b2ee44e79cad8bbd51f379db2523819ff9f4908b05e41&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBHZFDPW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICV80QVUZOjcI9LyVh%2FOOchHrH%2FSi6NiiHlNPbpem3uWAiEA1JKbTBwVlEJ4cdeBuGf%2BU9cs6rCitkm%2BmdwgJgmFZ0kqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWIlsd%2B729%2FN03G9CrcA7RVBv1Aq4PtDV2FFmb0jJNMTxBlB1hmqRHKiwzLja18n1n%2BplKwZfDD6YFHgLkGNRCw2I91wjq2BP7r7XnC1ActDaWhkhMgQZnmbKqHiOCLNXnM4SaPt7ehm9nRXMdvzeJd6cEHLx2YyVPQ732Oijqe1705ug4Q3PJOkfpgbxOUBbLAZMig8ufNMqnFy7uuHjqGoVI3L2736tbXXGkID77SqzNFTYdC2%2F6D%2FJ%2BFNlbWXV06P5Q%2FfpAea0tG7Sz0nSSl48eXWiUbKpPxYZzM9lU4bz%2BAk5%2BzTf3Cn3THRWZr1UK23Xdq%2FTUni2fRgdwgHirZ1v%2B1jgKVcrMz%2FPZcaLNzblSV3tC5dQ3zDe4An7tBRjHotd3spTE8naPvMfg0O7IRUTuU7kuM%2FL4mEGHMTe3G%2Bp%2B03BTnlQeyWN2mrU0KF3JU1CavqwR0ay%2Frhou54GiMqxHPaEVyKBhx%2BP4yxE93lqHbu9LK8GebiEZVFM5htkROCLlEgvrumBFx9BkB8lxNFOPWzGkJu6EPYLJxj0we9NaG6OhMFAN%2BNFEAxRPBw9eUQJS%2Bqx1z9ucpDbUXhEuSgxR6bu7Xwvem9KYt41AkBIkcqwQQIY7ol31EURMfjWJBaKHlC1rLwVxUMMquh74GOqUB7afxkjA5dw2jejZZIHD2xn7apboelc%2F%2FFDK4V1rkrDIuPsmEPxLAp2EO3nyVaV4D7QkQcIkvtJQjBu2%2FQYXvtCPjxhGXrP89OfFYGjA3uOLgtWnolTlbt2u%2BGPR6F6UCOh39ecv%2Fy25GTSyqXgzoLS2ODRvhTP%2FysCAX7iM7oKfj%2BDUIKELuIe5uT%2BOUvVlEB%2Ba12f3agQhV0oY9fw%2F31s0hW6dH&X-Amz-Signature=85cc3f192d2cdc4ca369f48c0148ccfed1bb3248b2ba357523996f4c204f6d10&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
